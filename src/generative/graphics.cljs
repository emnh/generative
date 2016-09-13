(ns generative.graphics
  (:require
    [rum.core :as rum]
    [cljs.pprint :as pprint]))

(enable-console-print!)

(defn animate
  [state]
  (let
    [pixi-renderer @(::pixi-renderer state)
     pixi-stage @(::pixi-stage state)
     mounted? (::mounted? state)]
    (if mounted?
      (do
        (-> pixi-renderer (.render pixi-stage))
        (js/requestAnimationFrame #(animate state))))))

(def attach-pixi-canvas
  {:did-mount
   (fn [state]
     (let
       [comp (:rum/react-component state)
        pixi-view @(::pixi-view state)
        dom-node (-> comp .-_reactInternalInstance .getHostNode)]
       (-> dom-node (.appendChild pixi-view))
       (reset! (::mounted? state) true)
       (animate state)
       state))
   :will-unmount
   (fn [state]
     (reset! (::mounted? state) false)
     state)
   :did-update
   (fn [state]
     (println "updated pixi canvas")
     state)})

(defn render-graphics
  [stage]
  (let
     [graphics (new js/PIXI.Graphics)]
    (-> graphics (.beginFill 0xFF0000 1.0))
    (-> graphics (.lineStyle 1))
    (-> graphics (.drawCircle 200 200 50))
    (-> graphics (.endFill))
    (-> stage (.addChild graphics))))

(rum/defcs
  show-graphics <
  rum/reactive attach-pixi-canvas
  (rum/local nil ::pixi-view)
  (rum/local nil ::pixi-renderer)
  (rum/local nil ::pixi-stage)
  (rum/local false ::mounted?)
  [state app-state app-dispatch]
  (let
    [graphics-cursor (rum/cursor-in app-state [:graphics])
     graphics-state (rum/react graphics-cursor)
     width 800
     height 600
     old-pixi-renderer (get-in graphics-state [:ui-cache :pixi-renderer])
     pixi-renderer (or old-pixi-renderer (new js/PIXI.WebGLRenderer width height))
     pixi-stage (new js/PIXI.Container)
     should-update (or (nil? old-pixi-renderer) (nil? @(::pixi-view state)))]
    (if should-update
      (do
        (println "should-update was true")
        (app-dispatch
          {:path [:graphics :ui-cache :pixi-renderer]
           :type :assoc-once
           :data pixi-renderer})
        (reset! (::pixi-renderer state) pixi-renderer)
        (reset! (::pixi-view state) (.-view pixi-renderer))
        (reset! (::pixi-stage state) pixi-stage)
        (render-graphics pixi-stage)))
    [:div.pixi-root]))