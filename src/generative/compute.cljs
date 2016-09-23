(ns generative.compute
  (:require
    [cljs.pprint :as pprint])
  (:require-macros
    [infix.macros :refer [infix]]))

; compute settings
(def decay 0.9)
(def angle-divisor 10.0)
(def branch-factor 0.5)
(def initial-radius 0.05)
(def initial-branch-count 40.0)
(def max-branch-count 100000)

(deftype branch [x y radius angle depth parent])

(defn compute-next
  [x y radius angle depth parent]
  (let
    [new-x (infix x + radius * js/Math.sin(angle))
     new-y (infix y + radius * js/Math.cos(angle))
     new-radius (infix radius * decay)
     new-depth (inc depth)
     mul (if (< new-depth 5.0) 1.0 1.0)
     new-angle (infix angle + ((js/Math.random() - 0.5) * 2.0 * js/Math.PI / angle-divisor) * mul)
     new-branch (branch. new-x new-y new-radius new-angle new-depth parent)]
    new-branch))

(defn compute-next2
  [active x y radius angle depth parent]
  (let
    [first (compute-next x y radius angle depth parent)
     x (.-x first)
     y (.-y first)
     radius (.-radius first)
     angle (.-angle first)
     depth (.-depth first)
     parent (.-parent first)
     second
     (if
       (infix js/Math.random() < branch-factor)
       (compute-next x y radius angle depth parent)
       nil)]
    (-> active (.push first))
    (if second (-> active (.push second)))))

(defn compute
  []
  (let
    [x 0.5
     y 0.5
     r initial-radius
     max-angle (infix 2.0 * js/Math.PI)
     depth 0
     parent 0
     active #js [(branch. x y r max-angle depth parent)]]
    (doseq
      [angle (range 0.0 max-angle (infix max-angle / initial-branch-count))]
      (-> active (.push (branch. x y r angle depth parent))))
    (doseq
      [i (range 1 max-branch-count)]
      (let
        [first (aget active i)
         x (.-x first)
         y (.-y first)
         r (.-radius first)
         angle (.-angle first)
         depth (.-depth first)]
        (compute-next2 active x y r angle depth i)))
    active))