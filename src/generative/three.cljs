(ns generative.three
  (:require
    [rum.core :as rum]
    [cljs.pprint :as pprint]
    [generative.compute :as compute])
  (:require-macros
    [infix.macros :refer [infix]]))

(defn animate
  [state]
  (let
    [three-renderer @(::three-renderer state)
     three-scene @(::three-scene state)
     three-camera @(::three-camera state)
     generate-graphics @(::generate-graphics state)
     mounted? (::mounted? state)]
    (if mounted?
      (do
        (generate-graphics)
        (-> three-renderer (.render three-scene three-camera))
        (js/requestAnimationFrame #(animate state))))))

(def attach-three-canvas
  {:did-mount
   (fn [state]
     (let
       [comp (:rum/react-component state)
        three-view @(::three-view state)
        dom-node (-> comp .-_reactInternalInstance .getHostNode)]
       (-> dom-node (.appendChild three-view))
       (reset! (::mounted? state) true)
       (animate state)
       state))
   :will-unmount
   (fn [state]
     (reset! (::mounted? state) false)
     state)
   :did-update
   (fn [state]
     (println "updated three canvas")
     state)})

(def vertex-shader "
uniform float time;
attribute float lineIndex;
attribute vec3 parentPosition;
attribute vec3 nextPosition;

varying vec3 vColor;

#define PI 3.1415926

float random(float co) {
  return fract(sin(co*12.989) * 43758.545);
}

float triangleWave(float time) {
  float m = 1.0;
  float x = m - abs(mod(time, 2.0 * m) - m);
  return x;
}

void main() {
  float factor = 1.0;
  float at = atan(position.y, position.x);
  float r = min(position.x / factor, 1.0);
  float g = random(position.x + position.y + parentPosition.x + parentPosition.y);
  float b = min(position.y / factor, 1.0);
  //g = fract(g * time * 10.0);

  //vColor = vec3(r, g, b);
  vColor = vec3(r, g, b) + 0.2 * sin(time);

  float rotation = -time + random(position.x + position.y + parentPosition.x + parentPosition.y);
  //float rotation = -time + random(lineIndex);

  mat4 rotationMat = mat4(cos(rotation), sin(rotation) * -1.0, 0.0, 0.0,
                          sin(rotation), cos(rotation), 0.0, 0.0,
                          0.0, 0.0, 1.0, 0.0,
                          0.0, 0.0, 0.0, 1.0);

  /*
  mat4 xRotationMat = mat4(1.0, 0.0, 0.0, 0.0,
                           0.0, cos(rotation), sin(rotation) * -1.0, 0.0,
                           0.0, sin(rotation), cos(rotation), 0.0,
                           0.0, 0.0, 0.0, 1.0);
                           */

  float z = 0.0;
  vec4 pos1 = vec4(position.xy, z, 1.0);
  vec4 pos2 = vec4(nextPosition.xy, z, 1.0);
  vec4 rotpos1 = pos1 * rotationMat;
  //vec4 rotpos2 *= rotationMat;

  vec4 pos = mix(pos1, rotpos1, (sin(time) + 1.0) / 2.0);
  //pos = rotpos1;
  pos = mix(pos, pos2, (sin(time * 3.1337) + 1.0) / 2.0);
  //pos = pos1;

  //pos *= xRotationMat;

  gl_Position = projectionMatrix * modelViewMatrix * pos;
}
")

(def fragment-shader "

uniform vec2 resolution;
uniform float time;

varying vec3 vColor;

void main() {
  //gl_FragColor = vec4(vColor, 4.0 / 256.0);
  vec3 color = vColor;
  vec2 xy = gl_FragCoord.xy / resolution.xy - 0.5;
  gl_FragColor = vec4(color, 0.2);
}
")

(defn setup-geo
  [width height data data2]
  (let
    [line-count (-> data .-length)
     line-vertices 3
     vertex-count (infix line-count * line-vertices)
     xyz-size 3
     geo (new js/THREE.BufferGeometry)
     position (new js/Float32Array (infix vertex-count * xyz-size))
     position-attr (new js/THREE.BufferAttribute position xyz-size)
     parent-position (new js/Float32Array (infix vertex-count * xyz-size))
     parent-position-attr (new js/THREE.BufferAttribute parent-position xyz-size)
     next-position (new js/Float32Array (infix vertex-count * xyz-size))
     next-position-attr (new js/THREE.BufferAttribute next-position xyz-size)
     line-index (new js/Float32Array vertex-count)
     line-index-attr (new js/THREE.BufferAttribute position 1)
     uniforms #js {
                   :time #js { :value 0.0}
                   :resolution #js { :value (new js/THREE.Vector2 width height)}}
     material (new js/THREE.ShaderMaterial #js {
                                                :uniforms uniforms
                                                :vertexShader vertex-shader
                                                :fragmentShader fragment-shader
                                                :transparent true
                                                :side js/THREE.DoubleSide})
     use-lines true
     lines
     (if use-lines
       (new js/THREE.Line geo material)
       (new js/THREE.Line (new js/THREE.Geometry) material))
     use-mesh false
     mesh
     (if use-mesh
       (new js/THREE.Mesh geo material)
       (new js/THREE.Mesh (new js/THREE.Geometry) material))
     lines-width 15.0
     lines-height 15.0
     lines-depth 15.0
     ;opacity 0.01
     random #(infix js/Math.random() * lines-width - lines-width / 2.0)]
    (-> geo (.addAttribute "position" position-attr))
    (-> geo (.addAttribute "parentPosition" parent-position-attr))
    (-> geo (.addAttribute "nextPosition" next-position-attr))
    (-> geo (.addAttribute "lineIndex" line-index-attr))
    (loop
      [i 0]
      (if (< i line-count)
        (let
           [;rnd (js/Math.random)
            ;lines-width (infix lines-width * rnd)
            ;ines-height (infix lines-height * rnd)
            current-branch (aget data i)
            next-branch (aget data2 i)
            x (.-x current-branch)
            y (.-y current-branch)
            z (.-z current-branch)
            next-x (.-x next-branch)
            next-y (.-y next-branch)
            next-z (.-z next-branch)
            parent (.-parent current-branch)
            next-parent (.-parent next-branch)
            parent-branch (aget data parent)
            next-parent-branch (aget data2 next-parent)
            parent-x (.-x parent-branch)
            parent-y (.-y parent-branch)
            parent-z (.-z parent-branch)
            next-parent-x (.-x next-parent-branch)
            next-parent-y (.-y next-parent-branch)
            next-parent-z (.-z next-parent-branch)
            scaled-x1 (infix parent-x * lines-width - lines-width / 2)
            scaled-y1 (infix parent-y * lines-height - lines-height / 2)
            scaled-z1 (infix parent-z * lines-depth - lines-depth / 2)
            scaled-x2 (infix x * lines-width - lines-width / 2)
            scaled-y2 (infix y * lines-height - lines-height / 2)
            scaled-z2 (infix z * lines-depth - lines-depth / 2)
            next-scaled-x1 (infix next-parent-x * lines-width - lines-width / 2)
            next-scaled-y1 (infix next-parent-y * lines-height - lines-height / 2)
            next-scaled-z1 (infix next-parent-z * lines-depth - lines-depth / 2)
            next-scaled-x2 (infix next-x * lines-width - lines-width / 2)
            next-scaled-y2 (infix next-y * lines-height - lines-height / 2)
            next-scaled-z2 (infix next-z * lines-depth - lines-depth / 2)
            index-mul (infix xyz-size * line-vertices)
            s 0.01]
          (aset line-index (infix i * line-vertices + 0) (infix i / line-count))
          (aset line-index (infix i * line-vertices + 1) (infix i / line-count))
          (aset line-index (infix i * line-vertices + 2) (infix i / line-count))

          (aset position (infix i * index-mul + 0) scaled-x1)
          (aset position (infix i * index-mul + 1) scaled-y1)
          (aset position (infix i * index-mul + 2) scaled-z1)
          (aset position (infix i * index-mul + 3) scaled-x2)
          (aset position (infix i * index-mul + 4) scaled-y2)
          (aset position (infix i * index-mul + 5) scaled-z2)

          (aset position (infix i * index-mul + 6) (+ scaled-x2 s))
          (aset position (infix i * index-mul + 7) (+ scaled-y2 s))
          (aset position (infix i * index-mul + 8) (+ scaled-z2 s))

          (aset next-position (infix i * index-mul + 0) next-scaled-x1)
          (aset next-position (infix i * index-mul + 1) next-scaled-y1)
          (aset next-position (infix i * index-mul + 2) next-scaled-z1)
          (aset next-position (infix i * index-mul + 3) next-scaled-x2)
          (aset next-position (infix i * index-mul + 4) next-scaled-y2)
          (aset next-position (infix i * index-mul + 5) next-scaled-z2)

          (aset next-position (infix i * index-mul + 6) next-scaled-x2)
          (aset next-position (infix i * index-mul + 7) next-scaled-y2)
          (aset next-position (infix i * index-mul + 8) next-scaled-z2)

          (aset parent-position (infix i * index-mul + 0) scaled-x2)
          (aset parent-position (infix i * index-mul + 1) scaled-y2)
          (aset parent-position (infix i * index-mul + 2) scaled-z2)
          (aset parent-position (infix i * index-mul + 3) scaled-x1)
          (aset parent-position (infix i * index-mul + 4) scaled-y1)
          (aset parent-position (infix i * index-mul + 5) scaled-z1)

          (aset parent-position (infix i * index-mul + 6) (+ scaled-x1 s))
          (aset parent-position (infix i * index-mul + 7) (+ scaled-y1 s))
          (aset parent-position (infix i * index-mul + 8) (+ scaled-z1 s))
          (recur (inc i)))
        nil))
    {:lines lines
     :mesh mesh
     :uniforms uniforms}))

(defn generate-graphics
  [width height parent]
  (println "generate-graphics")
  (let
    [data (compute/compute compute/default-settings)
     data2 (compute/compute compute/default-settings)
     geo (setup-geo width height data data2)
     uniforms (atom (:uniforms geo))
     start-time (let
                  [new-time (-> (new js/Date) .getTime)]
                  (infix new-time / 1000.0))
     get-time #(let
                [new-time (-> (new js/Date) .getTime)]
                (infix new-time / 1000.0 - start-time))
     old-time (atom (get-time))
     old-data (atom data)
     new-data (atom data2)
     interval 100.0
     set-new-lines
     (fn [lines mesh]
       (doseq [child (-> parent .-children)]
         (-> parent (.remove child)))
       (-> parent (.add lines))
       (-> parent (.add mesh)))
     update-fn
     (fn []
       (let
         [new-time (get-time)
          time-diff (- new-time @old-time)]
         (-> @uniforms .-time .-value (set! new-time))
         (if (> time-diff interval)
           (do
             (println "generating new data at time" new-time)
             (reset! old-time new-time)
             (reset! old-data @new-data)
             (let
                [new-settings compute/default-settings]
                 ;new-settings (assoc new-settings :decay (infix 0.7 + js/Math.random() * 0.3))]
                 ;new-settings (assoc new-settings :angle-divisor (infix js/Math.random() * 10.0))]
                (reset! new-data (compute/compute new-settings)))
             (let
               [geo (setup-geo width height @old-data @new-data)]
               (set-new-lines (:lines geo) (:mesh geo))
               (reset! uniforms (:uniforms geo)))))))]
    (set-new-lines (:lines geo) (:mesh geo))
    update-fn))

(rum/defcs
  show-three <
  rum/reactive attach-three-canvas
  (rum/local nil ::three-view)
  (rum/local nil ::three-renderer)
  (rum/local nil ::three-scene)
  (rum/local nil ::three-camera)
  (rum/local nil ::generate-graphics)
  (rum/local false ::mounted?)
  [state app-state app-dispatch]
  (let
    [graphics-cursor (rum/cursor-in app-state [:three])
     graphics-state (rum/react graphics-cursor)
     width 1600
     height 800
     old-three-renderer (get-in graphics-state [:ui-cache :three-renderer])
     three-renderer (or old-three-renderer (new js/THREE.WebGLRenderer))
     three-scene (new js/THREE.Scene)
     view-angle 45
     aspect (infix width / height)
     near 0.1
     far 10000
     origin (new js/THREE.Vector3 0 0 0)
     three-camera (new js/THREE.PerspectiveCamera view-angle aspect near far)
     should-update (or (nil? old-three-renderer) (nil? @(::three-view state)))]
    (if should-update
      (do
        (println "should-update was true")
        (app-dispatch
          {:path [:three :ui-cache :three-renderer]
           :type :assoc-once
           :data three-renderer})
        (-> three-renderer (.setSize width height))
        (-> three-scene (.add three-camera))
        (reset! (::three-renderer state) three-renderer)
        (reset! (::three-view state) (.-domElement three-renderer))
        (reset! (::three-camera state) three-camera)
        (reset! (::three-scene state) three-scene)
        (-> three-camera .-position .-z (set! -20.0))
        (-> three-camera (.lookAt origin))
        (let
           [light (new js/THREE.AmbientLight 0xFFFFFF 1.0)
            parent (new js/THREE.Object3D)
            update-fn (generate-graphics width height parent)]
          (-> three-scene (.add light))
          (-> three-scene (.add parent))
          (reset! (::generate-graphics state) update-fn))))
    [:div.pixi-root]))
