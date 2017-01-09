// Compiled by ClojureScript 1.9.89 {}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('goog.object');
goog.require('cljsjs.react');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__20911__auto__ = (((this$ == null))?null:this$);
var m__20912__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__20911__auto__)]);
if(!((m__20912__auto__ == null))){
return m__20912__auto__.call(null,this$);
} else {
var m__20912__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__20912__auto____$1 == null))){
return m__20912__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpreter.interpret",this$);
}
}
}
});

sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element){
return React.createClass({"displayName": [cljs.core.str("wrapped-"),cljs.core.str(element)].join(''), "getInitialState": (function (){
var this$ = this;
return {"state_value": (this$.props["value"])};
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
handler.call(null,e);

return this$.setState({"state_value": e.target.value});
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
var state_value = (this$.state["state_value"]);
var element__$1 = ReactDOM.findDOMNode(this$);
var element_value = element__$1.value;
if(cljs.core.not_EQ_.call(null,state_value,element_value)){
return this$.setState({"state_value": element_value});
} else {
return this$.setState({"state_value": (new_props["value"])});
}
}), "render": (function (){
var this$ = this;
var element_props = {};
goog.object.extend(element_props,this$.props,{"value": (function (){var or__20248__auto__ = (this$.state["state_value"]);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return undefined;
}
})(), "onChange": (this$["onChange"]), "children": (this$.props["children"])});

return React.createElement(element,element_props);
})});
});
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element.call(null,"input");
sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element.call(null,"select");
sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element.call(null,"textarea");
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__21330__auto__ = [];
var len__21323__auto___21599 = arguments.length;
var i__21324__auto___21600 = (0);
while(true){
if((i__21324__auto___21600 < len__21323__auto___21599)){
args__21330__auto__.push((arguments[i__21324__auto___21600]));

var G__21601 = (i__21324__auto___21600 + (1));
i__21324__auto___21600 = G__21601;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((2) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21331__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
var class$ = (function (){var G__21598 = (((cljs.core.keyword.call(null,type) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,type).fqn:null);
switch (G__21598) {
case "input":
if(cljs.core.truth_((function (){var and__20236__auto__ = props;
if(cljs.core.truth_(and__20236__auto__)){
return (typeof props.checked !== 'undefined') || (typeof props.value !== 'undefined');
} else {
return and__20236__auto__;
}
})())){
return sablono.interpreter.wrapped_input;
} else {
return "input";
}

break;
case "select":
if(cljs.core.truth_((function (){var and__20236__auto__ = props;
if(cljs.core.truth_(and__20236__auto__)){
return typeof props.value !== 'undefined';
} else {
return and__20236__auto__;
}
})())){
return sablono.interpreter.wrapped_select;
} else {
return "select";
}

break;
case "textarea":
if(cljs.core.truth_((function (){var and__20236__auto__ = props;
if(cljs.core.truth_(and__20236__auto__)){
return typeof props.value !== 'undefined';
} else {
return and__20236__auto__;
}
})())){
return sablono.interpreter.wrapped_textarea;
} else {
return "textarea";
}

break;
default:
return cljs.core.name.call(null,type);

}
})();
var children__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,children);
if(cljs.core.empty_QMARK_.call(null,children__$1)){
return React.createElement(class$,props);
} else {
return cljs.core.apply.call(null,React.createElement,class$,props,children__$1);
}
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq21595){
var G__21596 = cljs.core.first.call(null,seq21595);
var seq21595__$1 = cljs.core.next.call(null,seq21595);
var G__21597 = cljs.core.first.call(null,seq21595__$1);
var seq21595__$2 = cljs.core.next.call(null,seq21595__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__21596,G__21597,seq21595__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((cljs.core.array_QMARK_.call(null,class$))?clojure.string.join.call(null," ",class$):class$);
if(clojure.string.blank_QMARK_.call(null,class$__$1)){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
 * Interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element__$1){
var vec__21606 = sablono.normalize.element.call(null,element__$1);
var type = cljs.core.nth.call(null,vec__21606,(0),null);
var attrs = cljs.core.nth.call(null,vec__21606,(1),null);
var content = cljs.core.nth.call(null,vec__21606,(2),null);
return cljs.core.apply.call(null,sablono.interpreter.create_element,type,sablono.interpreter.attributes.call(null,attrs),sablono.interpreter.interpret_seq.call(null,content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of
 *   an element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(cljs.core.truth_(sablono.util.element_QMARK_.call(null,x))){
return sablono.interpreter.element.call(null,x);
} else {
return sablono.interpreter.interpret_seq.call(null,x);
}
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec.call(null,this$__$1);
});

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));

//# sourceMappingURL=interpreter.js.map