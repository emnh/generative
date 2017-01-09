// Compiled by ClojureScript 1.9.89 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args21377 = [];
var len__21323__auto___21397 = arguments.length;
var i__21324__auto___21398 = (0);
while(true){
if((i__21324__auto___21398 < len__21323__auto___21397)){
args21377.push((arguments[i__21324__auto___21398]));

var G__21399 = (i__21324__auto___21398 + (1));
i__21324__auto___21398 = G__21399;
continue;
} else {
}
break;
}

var G__21379 = args21377.length;
switch (G__21379) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21377.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__21380 = opts;
var map__21380__$1 = ((((!((map__21380 == null)))?((((map__21380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21380):map__21380);
var ref = cljs.core.get.call(null,map__21380__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__21380__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__21382 = cljs.core.count.call(null,refs);
switch (G__21382) {
case (1):
var vec__21383 = refs;
var a = cljs.core.nth.call(null,vec__21383,(0),null);
return ((function (vec__21383,a,G__21382,map__21380,map__21380__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__21383,a,G__21382,map__21380,map__21380__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__21386 = refs;
var a = cljs.core.nth.call(null,vec__21386,(0),null);
var b = cljs.core.nth.call(null,vec__21386,(1),null);
return ((function (vec__21386,a,b,G__21382,map__21380,map__21380__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__21386,a,b,G__21382,map__21380,map__21380__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__21389 = refs;
var a = cljs.core.nth.call(null,vec__21389,(0),null);
var b = cljs.core.nth.call(null,vec__21389,(1),null);
var c = cljs.core.nth.call(null,vec__21389,(2),null);
return ((function (vec__21389,a,b,c,G__21382,map__21380,map__21380__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__21389,a,b,c,G__21382,map__21380,map__21380__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__21382,map__21380,map__21380__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__21382,map__21380,map__21380__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__21392 = ref;
cljs.core.reset_BANG_.call(null,G__21392,recalc.call(null));

return G__21392;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__21380,map__21380__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__21380,map__21380__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__21380,map__21380__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__21380,map__21380__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__21393_21402 = cljs.core.seq.call(null,refs);
var chunk__21394_21403 = null;
var count__21395_21404 = (0);
var i__21396_21405 = (0);
while(true){
if((i__21396_21405 < count__21395_21404)){
var ref_21406__$1 = cljs.core._nth.call(null,chunk__21394_21403,i__21396_21405);
cljs.core.add_watch.call(null,ref_21406__$1,key,watch);

var G__21407 = seq__21393_21402;
var G__21408 = chunk__21394_21403;
var G__21409 = count__21395_21404;
var G__21410 = (i__21396_21405 + (1));
seq__21393_21402 = G__21407;
chunk__21394_21403 = G__21408;
count__21395_21404 = G__21409;
i__21396_21405 = G__21410;
continue;
} else {
var temp__4657__auto___21411 = cljs.core.seq.call(null,seq__21393_21402);
if(temp__4657__auto___21411){
var seq__21393_21412__$1 = temp__4657__auto___21411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21393_21412__$1)){
var c__21059__auto___21413 = cljs.core.chunk_first.call(null,seq__21393_21412__$1);
var G__21414 = cljs.core.chunk_rest.call(null,seq__21393_21412__$1);
var G__21415 = c__21059__auto___21413;
var G__21416 = cljs.core.count.call(null,c__21059__auto___21413);
var G__21417 = (0);
seq__21393_21402 = G__21414;
chunk__21394_21403 = G__21415;
count__21395_21404 = G__21416;
i__21396_21405 = G__21417;
continue;
} else {
var ref_21418__$1 = cljs.core.first.call(null,seq__21393_21412__$1);
cljs.core.add_watch.call(null,ref_21418__$1,key,watch);

var G__21419 = cljs.core.next.call(null,seq__21393_21412__$1);
var G__21420 = null;
var G__21421 = (0);
var G__21422 = (0);
seq__21393_21402 = G__21419;
chunk__21394_21403 = G__21420;
count__21395_21404 = G__21421;
i__21396_21405 = G__21422;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map