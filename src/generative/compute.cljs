(ns generative.compute
  (:require
    [cljs.pprint :as pprint])
  (:require-macros
    [infix.macros :refer [infix]]))

(defrecord Settings
  [decay
   angle-divisor
   branch-factor
   initial-radius
   initial-branch-count
   max-branch-count])

(def default-settings
  (map->Settings
    {:decay 0.9
     :angle-divisor 10.0
     :branch-factor 1.0
     :initial-radius 0.1
     :initial-branch-count 40.0
     :max-branch-count 10000}))

(deftype Branch [x y radius angle depth parent])

(defn compute-next
  [settings x y radius angle depth parent]
  (let
    [decay (.-decay settings)
     angle-divisor (.-angle-divisor settings)
     new-x (infix x + radius * js/Math.sin(angle))
     new-y (infix y + radius * js/Math.cos(angle))
     new-radius (infix radius * (decay - (js/Math.random() * 0.2)))
     new-depth (inc depth)
     mul (if (< new-depth 5.0) 1.0 1.0)
     new-angle (infix angle + ((js/Math.random() - 0.5) * 2.0 * js/Math.PI / angle-divisor) * mul)
     new-branch (Branch. new-x new-y new-radius new-angle new-depth parent)]
    new-branch))

(defn compute-next2
  [settings active x y radius angle depth parent]
  (let
    [first (compute-next settings x y radius angle depth parent)
     ;x (.-x first)
     ;y (.-y first)
     ;radius (.-radius first)
     angle (.-angle first)
     ;depth (.-depth first)
     ;parent (.-parent first)
     second
     (if
       (infix js/Math.random() < (.-branch-factor settings))
       (compute-next settings x y radius angle depth parent)
       nil)]
    (-> active (.push first))
    (if second (-> active (.push second)))))

(defn compute
  [settings]
  (let
    [initial-radius (.-initial-radius settings)
     initial-branch-count (.-initial-branch-count settings)
     max-branch-count (.-max-branch-count settings)
     x 0.5
     y 0.5
     r initial-radius
     max-angle (infix 2.0 * js/Math.PI)
     depth 0
     parent 0
     active #js [(Branch. x y r max-angle depth parent)]]
    (doseq
      [angle (range 0.0 max-angle (infix max-angle / initial-branch-count))]
      (-> active (.push (Branch. x y r angle depth parent))))
    (doseq
      [i (range 1 max-branch-count)]
      (let
        [first (aget active i)
         x (.-x first)
         y (.-y first)
         r (.-radius first)
         angle (.-angle first)
         depth (.-depth first)]
        (compute-next2 settings active x y r angle depth i)))
    active))