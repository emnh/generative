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
     :max-branch-count 1000000
     :z-enabled true}))

(deftype Branch [x y z radius angle1 angle2 depth parent])

(defn compute-next
  [settings x y z radius angle1 angle2 depth parent]
  (let
    [decay (.-decay settings)
     angle-divisor (.-angle-divisor settings)
     ;angle2 (if (.-z-enabled settings) angle2 (infix js/Math.PI / 2.0))
     new-x (infix x + radius * js/Math.sin(angle2) * js/Math.sin(angle1))
     new-y (infix y + radius * js/Math.sin(angle2) * js/Math.cos(angle1))
     new-z (infix z + radius * js/Math.cos(angle2))
     new-radius (infix radius * (decay - (js/Math.random() * 0.2)))
     new-depth (inc depth)
     mul (if (< new-depth 5.0) 1.0 1.0)
     new-angle1 (infix angle1 + ((js/Math.random() - 0.5) * 2.0 * js/Math.PI / angle-divisor) * mul)
     new-angle2 (infix angle2 + ((js/Math.random() - 0.5) * 2.0 * js/Math.PI / angle-divisor) * mul)
     new-branch (Branch. new-x new-y new-z new-radius new-angle1 new-angle2 new-depth parent)]
    new-branch))

(defn compute-next2
  [settings active x y z radius angle1 angle2 depth parent]
  (let
    [first (compute-next settings x y z radius angle1 angle2 depth parent)
     ;x (.-x first)
     ;y (.-y first)
     ;radius (.-radius first)
     angle1 (.-angle1 first)
     angle2 (.-angle2 first)
     ;depth (.-depth first)
     ;parent (.-parent first)
     second
     (if
       (infix js/Math.random() < (.-branch-factor settings))
       (compute-next settings x y z radius angle1 angle2 depth parent)
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
     z 0.5
     r initial-radius
     max-angle (infix 2.0 * js/Math.PI)
     depth 0
     parent 0
     active #js []] ;[(Branch. x y z r max-angle max-angle depth parent)]
    (doseq
      [angle1 (range 0.0 max-angle (infix max-angle / initial-branch-count))
       angle2 [(infix js/Math.PI / -2.0)]]
       ;angle2 [0.0 (infix js/Math.PI / -2.0)]]
       ;angle2 (range 0.0 max-angle (infix max-angle / initial-branch-count))]
      (-> active (.push (Branch. x y z r angle1 angle2 depth parent))))
    (doseq
      [i (range 1 max-branch-count)]
      (let
        [first (aget active i)
         x (.-x first)
         y (.-y first)
         r (.-radius first)
         angle1 (.-angle1 first)
         angle2 (.-angle2 first)
         depth (.-depth first)]
        (compute-next2 settings active x y z r angle1 angle2 depth i)))
    active))