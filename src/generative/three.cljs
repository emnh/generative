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
//attribute vec3 parentPosition;
attribute vec3 nextPosition;

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
  //float factor = 0.2;

  vec3 pos = mix(position, nextPosition, triangleWave(time));

  /*
  if (parentPosition.z != 1.0) {
    float factor = distance(position.xy, parentPosition.xy);
    float rnd = random(position.x + position.y) * 10.0;
    float itime = time * 1.0;
    float angle = atan(parentPosition.y - position.y, parentPosition.x - position.x);
    angle = itime + angle;
    pos.x = parentPosition.x + cos(angle) * factor;
    pos.y = parentPosition.y + sin(angle) * factor;
  }
  */
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
")

(def fragment-shader "
void main() {
  gl_FragColor = vec4(vec3(1.0), 0.005);
}
")

(defn setup-geo
  [width height]
  (let
    [data (compute/compute)
     data2 (compute/compute)
     line-count (-> data .-length)
     vertex-count (infix line-count * 2)
     line-vertices 2
     xyz-size 3
     geo (new js/THREE.BufferGeometry)
     position (new js/Float32Array (infix vertex-count * xyz-size))
     position-attr (new js/THREE.BufferAttribute position xyz-size)
     parent-position (new js/Float32Array (infix vertex-count * xyz-size))
     parent-position-attr (new js/THREE.BufferAttribute parent-position xyz-size)
     next-position (new js/Float32Array (infix vertex-count * xyz-size))
     next-position-attr (new js/THREE.BufferAttribute next-position xyz-size)
     uniforms #js {
                   :time #js { :value 0.0}
                   :resolution #js { :value (new js/THREE.Vector2 width height)}}
     material (new js/THREE.ShaderMaterial #js {
                                                :uniforms uniforms
                                                :vertexShader vertex-shader
                                                :fragmentShader fragment-shader
                                                :transparent true})

     lines (new js/THREE.Line geo material)
     lines-width 15.0
     lines-height 15.0
     ;opacity 0.01
     random #(infix js/Math.random() * lines-width - lines-width / 2.0)
     start-time (let
                  [new-time (-> (new js/Date) .getTime)]
                  (infix new-time / 1000.0))
     get-time #(let
                  [new-time (-> (new js/Date) .getTime)]
                (infix new-time / 1000.0 - start-time))
     update-fn
     (fn []
       (let [new-time (get-time)]
         (-> uniforms .-time .-value (set! new-time))))]
    (-> geo (.addAttribute "position" position-attr))
    (-> geo (.addAttribute "parentPosition" parent-position-attr))
    (-> geo (.addAttribute "nextPosition" next-position-attr))
    (loop
      [i 0]
      (if (< i line-count)
        (let
           [current-branch (aget data i)
            next-branch (aget data2 i)
            x (.-x current-branch)
            y (.-y current-branch)
            next-x (.-x next-branch)
            next-y (.-y next-branch)
            parent (.-parent current-branch)
            next-parent (.-parent next-branch)
            parent-branch (aget data parent)
            next-parent-branch (aget data2 next-parent)
            parent-x (.-x parent-branch)
            parent-y (.-y parent-branch)
            next-parent-x (.-x next-parent-branch)
            next-parent-y (.-y next-parent-branch)
            scaled-x1 (infix parent-x * lines-width - lines-width / 2)
            scaled-y1 (infix parent-y * lines-height - lines-height / 2)
            scaled-x2 (infix x * lines-width - lines-width / 2)
            scaled-y2 (infix y * lines-height - lines-height / 2)
            next-scaled-x1 (infix next-parent-x * lines-width - lines-width / 2)
            next-scaled-y1 (infix next-parent-y * lines-height - lines-height / 2)
            next-scaled-x2 (infix next-x * lines-width - lines-width / 2)
            next-scaled-y2 (infix next-y * lines-height - lines-height / 2)
            index-mul (infix xyz-size * line-vertices)]
          (aset position (infix i * index-mul + 0) scaled-x1)
          (aset position (infix i * index-mul + 1) scaled-y1)
          (aset position (infix i * index-mul + 2) 0)
          (aset position (infix i * index-mul + 3) scaled-x2)
          (aset position (infix i * index-mul + 4) scaled-y2)
          (aset position (infix i * index-mul + 5) 0)

          (aset next-position (infix i * index-mul + 0) next-scaled-x1)
          (aset next-position (infix i * index-mul + 1) next-scaled-y1)
          (aset next-position (infix i * index-mul + 2) 0)
          (aset next-position (infix i * index-mul + 3) next-scaled-x2)
          (aset next-position (infix i * index-mul + 4) next-scaled-y2)
          (aset next-position (infix i * index-mul + 5) 0)

          ;(aset parent-position (infix i * index-mul + 0) scaled-x2)
          ;(aset parent-position (infix i * index-mul + 1) scaled-y2)
          ;(aset parent-position (infix i * index-mul + 2) 1)
          ;(aset parent-position (infix i * index-mul + 3) scaled-x1)
          ;(aset parent-position (infix i * index-mul + 4) scaled-y1)
          ;(aset parent-position (infix i * index-mul + 5) 0)
          (recur (inc i)))
        nil))
    {:lines lines
     :update-fn update-fn}))

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
     width 800
     height 600
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
            generate-graphics
            (fn []
              (let
                [geo (setup-geo width height)
                 lines (:lines geo)]
                (doseq [child (-> parent .-children)]
                  (-> parent (.remove child)))
                (-> parent (.add lines))
                (:update-fn geo)))]
          (-> three-scene (.add light))
          (-> three-scene (.add parent))
          (reset! (::generate-graphics state) (generate-graphics)))))
    [:div.pixi-root]))
