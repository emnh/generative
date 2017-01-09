(ns generative.graphics
  (:require
    [rum.core :as rum]
    [cljs.pprint :as pprint]
    [generative.compute :as gcompute])
  (:require-macros
    [infix.macros :refer [infix]]))

(enable-console-print!)

(def inv-initial-radius (infix 1.0 / (:initial-radius gcompute/default-settings)))
(def line-alpha-multiplier 1.5)

(defn rgb
  [red green blue]
  (let
    [red (int (* 0xFF (min red 1.0)))
     green (int (* 0xFF (min green 1.0)))
     blue (int (* 0xFF (min blue 1.0)))]
    (infix (red << 16) + (green << 8) + blue)))

(defn render-graphics
  [stage width height]
  (let
    [data (gcompute/compute gcompute/default-settings)
     graphics (new js/PIXI.Graphics)]
    ;(pprint/pprint ["data" data])
    ;(.log js/console "data" data)
    (-> stage (.removeChildren 0))
    (loop
      [i 0]
      (if
        (< i (-> data .-length))
        (let
          [current-branch (aget data i)
           _ (if (nil? current-branch) (println "I" i))
           x (.-x current-branch)
           y (.-y current-branch)
           r (.-radius current-branch)
           parent (.-parent current-branch)
           ;_ (println "parent" parent)
           parent-branch (aget data parent)
           prev-x (.-x parent-branch)
           prev-y (.-y parent-branch)
           scaled-x1 (infix prev-x * width)
           scaled-y1 (infix prev-y * height)
           scaled-x2 (infix x * width)
           scaled-y2 (infix y * height)
           line-width (infix r * width * 0.15)
           line-color (rgb
                        (infix 1.0 - (r * inv-initial-radius))
                        0.0
                        (infix r * inv-initial-radius))
           line-alpha (infix r * inv-initial-radius * line-alpha-multiplier)]
          ;(println parent (aget data parent) scaled-x1 scaled-y1)
          ;(-> graphics (.beginFill 0xFF0000 1.0))
          (-> graphics (.lineStyle line-width line-color line-alpha))
          (-> graphics (.moveTo scaled-x1 scaled-y1))
          (-> graphics (.lineTo scaled-x2 scaled-y2))
          ;(-> graphics (.drawCircle
          ;               (infix x * width)
          ;               (infix y * height)
          ;               (infix r * width)))))
          ;(-> graphics (.endFill))))
          (recur (inc i)))))
    (-> stage (.addChild graphics))))

(defn animate
  [state]
  (let
    [pixi-renderer @(::pixi-renderer state)
     pixi-stage @(::pixi-stage state)
     mounted? (::mounted? state)]
    (if mounted?
      (do
        (-> pixi-renderer (.render pixi-stage))
        (render-graphics pixi-stage (-> pixi-renderer .-width) (-> pixi-renderer .-height))
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
        (render-graphics pixi-stage width height)))
    [:div.pixi-root]))