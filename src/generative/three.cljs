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

(defn setup-geo
  []
  (let
    [data (compute/compute)
     line-count (-> data .-length)
     vertex-count (infix line-count * 2)
     line-vertices 2
     xyz-size 3
     geo (new js/THREE.BufferGeometry)
     position (new js/Float32Array (infix vertex-count * xyz-size))
     position-attr (new js/THREE.BufferAttribute position xyz-size)
     ;material (new js/THREE.LineBasicMaterial #js {:vertexColors js/THREE.VertexColors})
     material (new js/THREE.LineBasicMaterial #js {
                                                   :vertexColors js/THREE.NoColors
                                                   :transparent true})
     lines (new js/THREE.Line geo material)
     width 15.0
     height 15.0
     random #(infix js/Math.random() * width - width / 2.0)]
    (loop
      [i 0]
      (if (< i line-count)
        (let
           [current-branch (aget data i)
            x (.-x current-branch)
            y (.-y current-branch)
            parent (.-parent current-branch)
            parent-branch (aget data parent)
            prev-x (.-x parent-branch)
            prev-y (.-y parent-branch)
            scaled-x1 (infix prev-x * width - width / 2)
            scaled-y1 (infix prev-y * height - height / 2)
            scaled-x2 (infix x * width - width / 2)
            scaled-y2 (infix y * height - height / 2)
            index-mul (infix xyz-size * line-vertices)]
          (aset position (infix i * index-mul + 0) scaled-x1)
          (aset position (infix i * index-mul + 1) scaled-y1)
          (aset position (infix i * index-mul + 2) 0)
          (aset position (infix i * index-mul + 3) scaled-x2)
          (aset position (infix i * index-mul + 4) scaled-y2)
          (aset position (infix i * index-mul + 5) 0)
          (recur (inc i)))
        nil))
    (-> geo (.addAttribute "position" position-attr))
    (-> material .-opacity (set! 0.1))
    {:lines lines}))

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
                [geo (setup-geo)
                 lines (:lines geo)]
                (doseq [child (-> parent .-children)]
                  (-> parent (.remove child)))
                (-> parent (.add lines))))]
          (-> three-scene (.add light))
          (-> three-scene (.add parent))
          (reset! (::generate-graphics state) generate-graphics))))
    [:div.pixi-root]))
