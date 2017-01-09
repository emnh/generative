// Compiled by ClojureScript 1.9.89 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__22751_SHARP_,p2__22750_SHARP_){
return p2__22750_SHARP_.call(null,p1__22751_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__22753_SHARP_,p2__22752_SHARP_){
return p2__22752_SHARP_.call(null,old_state,p1__22753_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__20248__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__22754_SHARP_){
return p1__22754_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__22759 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__22759,(0),null);
var next_state = cljs.core.nth.call(null,vec__22759,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__22755_SHARP_){
return p1__22755_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((cljs.core.some_QMARK_.call(null,key_fn))?((function (class$,key_fn){
return (function() { 
var G__22762__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)};
return React.createElement(class$,props);
};
var G__22762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22763__i = 0, G__22763__a = new Array(arguments.length -  0);
while (G__22763__i < G__22763__a.length) {G__22763__a[G__22763__i] = arguments[G__22763__i + 0]; ++G__22763__i;}
  args = new cljs.core.IndexedSeq(G__22763__a,0);
} 
return G__22762__delegate.call(this,args);};
G__22762.cljs$lang$maxFixedArity = 0;
G__22762.cljs$lang$applyTo = (function (arglist__22764){
var args = cljs.core.seq(arglist__22764);
return G__22762__delegate(args);
});
G__22762.cljs$core$IFn$_invoke$arity$variadic = G__22762__delegate;
return G__22762;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__22765__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)};
return React.createElement(class$,props);
};
var G__22765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22766__i = 0, G__22766__a = new Array(arguments.length -  0);
while (G__22766__i < G__22766__a.length) {G__22766__a[G__22766__i] = arguments[G__22766__i + 0]; ++G__22766__i;}
  args = new cljs.core.IndexedSeq(G__22766__a,0);
} 
return G__22765__delegate.call(this,args);};
G__22765.cljs$lang$maxFixedArity = 0;
G__22765.cljs$lang$applyTo = (function (arglist__22767){
var args = cljs.core.seq(arglist__22767);
return G__22765__delegate(args);
});
G__22765.cljs$core$IFn$_invoke$arity$variadic = G__22765__delegate;
return G__22765;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__22768__delegate = function (args){
return React.createElement(class$,{":rum/args": args});
};
var G__22768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22769__i = 0, G__22769__a = new Array(arguments.length -  0);
while (G__22769__i < G__22769__a.length) {G__22769__a[G__22769__i] = arguments[G__22769__i + 0]; ++G__22769__i;}
  args = new cljs.core.IndexedSeq(G__22769__a,0);
} 
return G__22768__delegate.call(this,args);};
G__22768.cljs$lang$maxFixedArity = 0;
G__22768.cljs$lang$applyTo = (function (arglist__22770){
var args = cljs.core.seq(arglist__22770);
return G__22768__delegate(args);
});
G__22768.cljs$core$IFn$_invoke$arity$variadic = G__22768__delegate;
return G__22768;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__20248__auto__ = (function (){var and__20236__auto__ = typeof window !== 'undefined';
if(and__20236__auto__){
var or__20248__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
var or__20248__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__20248__auto____$1)){
return or__20248__auto____$1;
} else {
var or__20248__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__20248__auto____$2)){
return or__20248__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__20236__auto__;
}
})();
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return ((function (or__20248__auto__){
return (function (p1__22771_SHARP_){
return setTimeout(p1__22771_SHARP_,(16));
});
;})(or__20248__auto__))
}
})();
rum.core.batch = (function (){var or__20248__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
var or__20248__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__20248__auto____$1)){
return or__20248__auto____$1;
} else {
return ((function (or__20248__auto____$1,or__20248__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__20248__auto____$1,or__20248__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__22778 = cljs.core.seq.call(null,queue);
var chunk__22780 = null;
var count__22781 = (0);
var i__22782 = (0);
while(true){
if((i__22782 < count__22781)){
var comp = cljs.core._nth.call(null,chunk__22780,i__22782);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__22784 = seq__22778;
var G__22785 = chunk__22780;
var G__22786 = count__22781;
var G__22787 = (i__22782 + (1));
seq__22778 = G__22784;
chunk__22780 = G__22785;
count__22781 = G__22786;
i__22782 = G__22787;
continue;
} else {
var G__22788 = seq__22778;
var G__22789 = chunk__22780;
var G__22790 = count__22781;
var G__22791 = (i__22782 + (1));
seq__22778 = G__22788;
chunk__22780 = G__22789;
count__22781 = G__22790;
i__22782 = G__22791;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22778);
if(temp__4657__auto__){
var seq__22778__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22778__$1)){
var c__21059__auto__ = cljs.core.chunk_first.call(null,seq__22778__$1);
var G__22792 = cljs.core.chunk_rest.call(null,seq__22778__$1);
var G__22793 = c__21059__auto__;
var G__22794 = cljs.core.count.call(null,c__21059__auto__);
var G__22795 = (0);
seq__22778 = G__22792;
chunk__22780 = G__22793;
count__22781 = G__22794;
i__22782 = G__22795;
continue;
} else {
var comp = cljs.core.first.call(null,seq__22778__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__22796 = cljs.core.next.call(null,seq__22778__$1);
var G__22797 = null;
var G__22798 = (0);
var G__22799 = (0);
seq__22778 = G__22796;
chunk__22780 = G__22797;
count__22781 = G__22798;
i__22782 = G__22799;
continue;
} else {
var G__22800 = cljs.core.next.call(null,seq__22778__$1);
var G__22801 = null;
var G__22802 = (0);
var G__22803 = (0);
seq__22778 = G__22800;
chunk__22780 = G__22801;
count__22781 = G__22802;
i__22782 = G__22803;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,{"key": key},null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,{"ref": ref},null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args22804 = [];
var len__21323__auto___22807 = arguments.length;
var i__21324__auto___22808 = (0);
while(true){
if((i__21324__auto___22808 < len__21323__auto___22807)){
args22804.push((arguments[i__21324__auto___22808]));

var G__22809 = (i__21324__auto___22808 + (1));
i__21324__auto___22808 = G__22809;
continue;
} else {
}
break;
}

var G__22806 = args22804.length;
switch (G__22806) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22804.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_22811 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__22812 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__22812,(0),null);
var next_state = cljs.core.nth.call(null,vec__22812,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__22815_22827 = cljs.core.seq.call(null,old_reactions);
var chunk__22816_22828 = null;
var count__22817_22829 = (0);
var i__22818_22830 = (0);
while(true){
if((i__22818_22830 < count__22817_22829)){
var ref_22831 = cljs.core._nth.call(null,chunk__22816_22828,i__22818_22830);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_22831)){
} else {
cljs.core.remove_watch.call(null,ref_22831,key);
}

var G__22832 = seq__22815_22827;
var G__22833 = chunk__22816_22828;
var G__22834 = count__22817_22829;
var G__22835 = (i__22818_22830 + (1));
seq__22815_22827 = G__22832;
chunk__22816_22828 = G__22833;
count__22817_22829 = G__22834;
i__22818_22830 = G__22835;
continue;
} else {
var temp__4657__auto___22836 = cljs.core.seq.call(null,seq__22815_22827);
if(temp__4657__auto___22836){
var seq__22815_22837__$1 = temp__4657__auto___22836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22815_22837__$1)){
var c__21059__auto___22838 = cljs.core.chunk_first.call(null,seq__22815_22837__$1);
var G__22839 = cljs.core.chunk_rest.call(null,seq__22815_22837__$1);
var G__22840 = c__21059__auto___22838;
var G__22841 = cljs.core.count.call(null,c__21059__auto___22838);
var G__22842 = (0);
seq__22815_22827 = G__22839;
chunk__22816_22828 = G__22840;
count__22817_22829 = G__22841;
i__22818_22830 = G__22842;
continue;
} else {
var ref_22843 = cljs.core.first.call(null,seq__22815_22837__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_22843)){
} else {
cljs.core.remove_watch.call(null,ref_22843,key);
}

var G__22844 = cljs.core.next.call(null,seq__22815_22837__$1);
var G__22845 = null;
var G__22846 = (0);
var G__22847 = (0);
seq__22815_22827 = G__22844;
chunk__22816_22828 = G__22845;
count__22817_22829 = G__22846;
i__22818_22830 = G__22847;
continue;
}
} else {
}
}
break;
}

var seq__22819_22848 = cljs.core.seq.call(null,new_reactions);
var chunk__22820_22849 = null;
var count__22821_22850 = (0);
var i__22822_22851 = (0);
while(true){
if((i__22822_22851 < count__22821_22850)){
var ref_22852 = cljs.core._nth.call(null,chunk__22820_22849,i__22822_22851);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_22852)){
} else {
cljs.core.add_watch.call(null,ref_22852,key,((function (seq__22819_22848,chunk__22820_22849,count__22821_22850,i__22822_22851,ref_22852,comp,old_reactions,vec__22812,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22811){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__22819_22848,chunk__22820_22849,count__22821_22850,i__22822_22851,ref_22852,comp,old_reactions,vec__22812,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22811))
);
}

var G__22853 = seq__22819_22848;
var G__22854 = chunk__22820_22849;
var G__22855 = count__22821_22850;
var G__22856 = (i__22822_22851 + (1));
seq__22819_22848 = G__22853;
chunk__22820_22849 = G__22854;
count__22821_22850 = G__22855;
i__22822_22851 = G__22856;
continue;
} else {
var temp__4657__auto___22857 = cljs.core.seq.call(null,seq__22819_22848);
if(temp__4657__auto___22857){
var seq__22819_22858__$1 = temp__4657__auto___22857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22819_22858__$1)){
var c__21059__auto___22859 = cljs.core.chunk_first.call(null,seq__22819_22858__$1);
var G__22860 = cljs.core.chunk_rest.call(null,seq__22819_22858__$1);
var G__22861 = c__21059__auto___22859;
var G__22862 = cljs.core.count.call(null,c__21059__auto___22859);
var G__22863 = (0);
seq__22819_22848 = G__22860;
chunk__22820_22849 = G__22861;
count__22821_22850 = G__22862;
i__22822_22851 = G__22863;
continue;
} else {
var ref_22864 = cljs.core.first.call(null,seq__22819_22858__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_22864)){
} else {
cljs.core.add_watch.call(null,ref_22864,key,((function (seq__22819_22848,chunk__22820_22849,count__22821_22850,i__22822_22851,ref_22864,seq__22819_22858__$1,temp__4657__auto___22857,comp,old_reactions,vec__22812,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22811){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__22819_22848,chunk__22820_22849,count__22821_22850,i__22822_22851,ref_22864,seq__22819_22858__$1,temp__4657__auto___22857,comp,old_reactions,vec__22812,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22811))
);
}

var G__22865 = cljs.core.next.call(null,seq__22819_22858__$1);
var G__22866 = null;
var G__22867 = (0);
var G__22868 = (0);
seq__22819_22848 = G__22865;
chunk__22820_22849 = G__22866;
count__22821_22850 = G__22867;
i__22822_22851 = G__22868;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_22811;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_22869 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__22823_22870 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__22824_22871 = null;
var count__22825_22872 = (0);
var i__22826_22873 = (0);
while(true){
if((i__22826_22873 < count__22825_22872)){
var ref_22874 = cljs.core._nth.call(null,chunk__22824_22871,i__22826_22873);
cljs.core.remove_watch.call(null,ref_22874,key_22869);

var G__22875 = seq__22823_22870;
var G__22876 = chunk__22824_22871;
var G__22877 = count__22825_22872;
var G__22878 = (i__22826_22873 + (1));
seq__22823_22870 = G__22875;
chunk__22824_22871 = G__22876;
count__22825_22872 = G__22877;
i__22826_22873 = G__22878;
continue;
} else {
var temp__4657__auto___22879 = cljs.core.seq.call(null,seq__22823_22870);
if(temp__4657__auto___22879){
var seq__22823_22880__$1 = temp__4657__auto___22879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22823_22880__$1)){
var c__21059__auto___22881 = cljs.core.chunk_first.call(null,seq__22823_22880__$1);
var G__22882 = cljs.core.chunk_rest.call(null,seq__22823_22880__$1);
var G__22883 = c__21059__auto___22881;
var G__22884 = cljs.core.count.call(null,c__21059__auto___22881);
var G__22885 = (0);
seq__22823_22870 = G__22882;
chunk__22824_22871 = G__22883;
count__22825_22872 = G__22884;
i__22826_22873 = G__22885;
continue;
} else {
var ref_22886 = cljs.core.first.call(null,seq__22823_22880__$1);
cljs.core.remove_watch.call(null,ref_22886,key_22869);

var G__22887 = cljs.core.next.call(null,seq__22823_22880__$1);
var G__22888 = null;
var G__22889 = (0);
var G__22890 = (0);
seq__22823_22870 = G__22887;
chunk__22824_22871 = G__22888;
count__22825_22872 = G__22889;
i__22826_22873 = G__22890;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__21330__auto__ = [];
var len__21323__auto___22897 = arguments.length;
var i__21324__auto___22898 = (0);
while(true){
if((i__21324__auto___22898 < len__21323__auto___22897)){
args__21330__auto__.push((arguments[i__21324__auto___22898]));

var G__22899 = (i__21324__auto___22898 + (1));
i__21324__auto___22898 = G__22899;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((2) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21331__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__22894){
var map__22895 = p__22894;
var map__22895__$1 = ((((!((map__22895 == null)))?((((map__22895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22895):map__22895);
var options = map__22895__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq22891){
var G__22892 = cljs.core.first.call(null,seq22891);
var seq22891__$1 = cljs.core.next.call(null,seq22891);
var G__22893 = cljs.core.first.call(null,seq22891__$1);
var seq22891__$2 = cljs.core.next.call(null,seq22891__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__22892,G__22893,seq22891__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__21330__auto__ = [];
var len__21323__auto___22903 = arguments.length;
var i__21324__auto___22904 = (0);
while(true){
if((i__21324__auto___22904 < len__21323__auto___22903)){
args__21330__auto__.push((arguments[i__21324__auto___22904]));

var G__22905 = (i__21324__auto___22904 + (1));
i__21324__auto___22904 = G__22905;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((2) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21331__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq22900){
var G__22901 = cljs.core.first.call(null,seq22900);
var seq22900__$1 = cljs.core.next.call(null,seq22900);
var G__22902 = cljs.core.first.call(null,seq22900__$1);
var seq22900__$2 = cljs.core.next.call(null,seq22900__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__22901,G__22902,seq22900__$2);
});


//# sourceMappingURL=core.js.map