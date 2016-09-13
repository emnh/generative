(ns generative.graphics
  (:require
    [rum.core :as rum]
    [cljs.pprint :as pprint]))

(enable-console-print!)

(def attach-pixi-canvas
  {:did-update
   (fn [state]
     (let
       [comp (:rum/react-component state)]
       (println "comp" comp))
     state)})


(rum/defc
  show-graphics < rum/reactive attach-pixi-canvas
  [app-state app-dispatch]
  (let
    [graphics-cursor (rum/cursor-in app-state [:graphics])
     graphics-state (rum/react graphics-cursor)
     width 800
     height 600
     pixi
     (or
       (get-in graphics-state [:ui-cache :pixi-renderer])
       (new js/PIXI.WebGLRenderer width height))]
    [:div.pixi-root "test"]))