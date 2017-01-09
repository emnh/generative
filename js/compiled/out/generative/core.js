// Compiled by ClojureScript 1.9.89 {}
goog.provide('generative.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.pprint');
goog.require('generative.graphics');
goog.require('generative.three');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/generative/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof generative.core.app_state !== 'undefined'){
} else {
generative.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
generative.core.app_dispatch = (function generative$core$app_dispatch(action){
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(action);
var action_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(action);
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core._EQ_.call(null,action_type,new cljs.core.Keyword(null,"assoc","assoc",430908853))){
return cljs.core.swap_BANG_.call(null,generative.core.app_state,cljs.core.assoc_in,path,data);
} else {
if(cljs.core._EQ_.call(null,action_type,new cljs.core.Keyword(null,"assoc-once","assoc-once",-369305597))){
if((cljs.core.get_in.call(null,cljs.core.deref.call(null,generative.core.app_state),path) == null)){
return cljs.core.swap_BANG_.call(null,generative.core.app_state,cljs.core.assoc_in,path,data);
} else {
return null;
}
} else {
return null;
}
}
});
generative.core.app_dispatch.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assoc-once","assoc-once",-369305597),new cljs.core.Keyword(null,"data","data",-232669377),"three"], null));
generative.core.label = rum.core.build_defc.call(null,(function (text){
return React.createElement("div",{"className": "label"},sablono.interpreter.interpret.call(null,text));
}),null,"label");
generative.core.show_app_state = rum.core.build_defc.call(null,(function (){
return sablono.interpreter.interpret.call(null,generative.core.label.call(null,(function (){var sb__21234__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_25200_25202 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_25201_25203 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_25200_25202,_STAR_print_fn_STAR_25201_25203,sb__21234__auto__){
return (function (x__21235__auto__){
return sb__21234__auto__.append(x__21235__auto__);
});})(_STAR_print_newline_STAR_25200_25202,_STAR_print_fn_STAR_25201_25203,sb__21234__auto__))
;

try{cljs.pprint.pprint.call(null,rum.core.react.call(null,generative.core.app_state));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25201_25203;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25200_25202;
}
return [cljs.core.str(sb__21234__auto__)].join('');
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"show-app-state");
generative.core.show_app_ui = rum.core.build_defc.call(null,(function (app_state,app_dispatch){
var root = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),generative.three.show_three.call(null,app_state,app_dispatch)], null);
return sablono.interpreter.interpret.call(null,root);
}),null,"show-app-ui");
generative.core.main = (function generative$core$main(){
return rum.core.mount.call(null,generative.core.show_app_ui.call(null,generative.core.app_state,generative.core.app_dispatch),document.getElementById("root"));
});
$(generative.core.main);
generative.core.on_js_reload = (function generative$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map