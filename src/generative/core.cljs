(ns generative.core
  (:require
    [rum.core :as rum]
    [cljs.pprint :as pprint]
    [generative.graphics :as graphics]))

(enable-console-print!)

(println "This text is printed from src/generative/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce
  app-state
  (atom
    {
     :text "Hello world!"}))


'(if
  (nil? (:page @app-state))
  (swap! app-state assoc :page "pixi"))

(defn app-dispatch
  [action]
  (let
     [
      path (:path action)
      action-type (:type action)
      data (:data action)]
     (cond
       (= action-type :assoc) (swap! app-state assoc-in path data)
       (= action-type :assoc-once)
       (if
         (nil? (get-in @app-state path))
         (swap! app-state assoc-in path data)))))

(app-dispatch
  {
   :path [:page]
   :type :assoc-once
   :data "pixi"})

(app-dispatch
  {
   :path [:graphics]
   :type :assoc
   :data "circle"})

(rum/defc
  label [text]
  [:div {:class "label"} text])

(rum/defc
  show-app-state < rum/reactive []
  (label (with-out-str (pprint/pprint (rum/react app-state)))))

(rum/defc
  show-app-ui
  [app-state app-dispatch]
  (let
    [root
     [:div
      (show-app-state)
      (graphics/show-graphics app-state app-dispatch)]]
    root))

(defn main
  []
  (rum/mount (show-app-ui app-state app-dispatch) (.getElementById js/document "root")))

(js/$ main)

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

