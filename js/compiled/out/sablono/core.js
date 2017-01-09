// Compiled by ClojureScript 1.9.89 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__22084__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__22081 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__22082 = cljs.core.seq.call(null,vec__22081);
var first__22083 = cljs.core.first.call(null,seq__22082);
var seq__22082__$1 = cljs.core.next.call(null,seq__22082);
var tag = first__22083;
var body = seq__22082__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__22084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22085__i = 0, G__22085__a = new Array(arguments.length -  0);
while (G__22085__i < G__22085__a.length) {G__22085__a[G__22085__i] = arguments[G__22085__i + 0]; ++G__22085__i;}
  args = new cljs.core.IndexedSeq(G__22085__a,0);
} 
return G__22084__delegate.call(this,args);};
G__22084.cljs$lang$maxFixedArity = 0;
G__22084.cljs$lang$applyTo = (function (arglist__22086){
var args = cljs.core.seq(arglist__22086);
return G__22084__delegate(args);
});
G__22084.cljs$core$IFn$_invoke$arity$variadic = G__22084__delegate;
return G__22084;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__21028__auto__ = (function sablono$core$update_arglists_$_iter__22091(s__22092){
return (new cljs.core.LazySeq(null,(function (){
var s__22092__$1 = s__22092;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22092__$1);
if(temp__4657__auto__){
var s__22092__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22092__$2)){
var c__21026__auto__ = cljs.core.chunk_first.call(null,s__22092__$2);
var size__21027__auto__ = cljs.core.count.call(null,c__21026__auto__);
var b__22094 = cljs.core.chunk_buffer.call(null,size__21027__auto__);
if((function (){var i__22093 = (0);
while(true){
if((i__22093 < size__21027__auto__)){
var args = cljs.core._nth.call(null,c__21026__auto__,i__22093);
cljs.core.chunk_append.call(null,b__22094,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__22095 = (i__22093 + (1));
i__22093 = G__22095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22094),sablono$core$update_arglists_$_iter__22091.call(null,cljs.core.chunk_rest.call(null,s__22092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22094),null);
}
} else {
var args = cljs.core.first.call(null,s__22092__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__22091.call(null,cljs.core.rest.call(null,s__22092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21028__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__21330__auto__ = [];
var len__21323__auto___22101 = arguments.length;
var i__21324__auto___22102 = (0);
while(true){
if((i__21324__auto___22102 < len__21323__auto___22101)){
args__21330__auto__.push((arguments[i__21324__auto___22102]));

var G__22103 = (i__21324__auto___22102 + (1));
i__21324__auto___22102 = G__22103;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((0) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__21331__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__21028__auto__ = (function sablono$core$iter__22097(s__22098){
return (new cljs.core.LazySeq(null,(function (){
var s__22098__$1 = s__22098;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22098__$1);
if(temp__4657__auto__){
var s__22098__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22098__$2)){
var c__21026__auto__ = cljs.core.chunk_first.call(null,s__22098__$2);
var size__21027__auto__ = cljs.core.count.call(null,c__21026__auto__);
var b__22100 = cljs.core.chunk_buffer.call(null,size__21027__auto__);
if((function (){var i__22099 = (0);
while(true){
if((i__22099 < size__21027__auto__)){
var style = cljs.core._nth.call(null,c__21026__auto__,i__22099);
cljs.core.chunk_append.call(null,b__22100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__22104 = (i__22099 + (1));
i__22099 = G__22104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22100),sablono$core$iter__22097.call(null,cljs.core.chunk_rest.call(null,s__22098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22100),null);
}
} else {
var style = cljs.core.first.call(null,s__22098__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__22097.call(null,cljs.core.rest.call(null,s__22098__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21028__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq22096){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22096));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to22105 = (function sablono$core$link_to22105(var_args){
var args__21330__auto__ = [];
var len__21323__auto___22108 = arguments.length;
var i__21324__auto___22109 = (0);
while(true){
if((i__21324__auto___22109 < len__21323__auto___22108)){
args__21330__auto__.push((arguments[i__21324__auto___22109]));

var G__22110 = (i__21324__auto___22109 + (1));
i__21324__auto___22109 = G__22110;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to22105.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

sablono.core.link_to22105.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to22105.cljs$lang$maxFixedArity = (1);

sablono.core.link_to22105.cljs$lang$applyTo = (function (seq22106){
var G__22107 = cljs.core.first.call(null,seq22106);
var seq22106__$1 = cljs.core.next.call(null,seq22106);
return sablono.core.link_to22105.cljs$core$IFn$_invoke$arity$variadic(G__22107,seq22106__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22105);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to22111 = (function sablono$core$mail_to22111(var_args){
var args__21330__auto__ = [];
var len__21323__auto___22118 = arguments.length;
var i__21324__auto___22119 = (0);
while(true){
if((i__21324__auto___22119 < len__21323__auto___22118)){
args__21330__auto__.push((arguments[i__21324__auto___22119]));

var G__22120 = (i__21324__auto___22119 + (1));
i__21324__auto___22119 = G__22120;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to22111.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

sablono.core.mail_to22111.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__22114){
var vec__22115 = p__22114;
var content = cljs.core.nth.call(null,vec__22115,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__20248__auto__ = content;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to22111.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to22111.cljs$lang$applyTo = (function (seq22112){
var G__22113 = cljs.core.first.call(null,seq22112);
var seq22112__$1 = cljs.core.next.call(null,seq22112);
return sablono.core.mail_to22111.cljs$core$IFn$_invoke$arity$variadic(G__22113,seq22112__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22111);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list22121 = (function sablono$core$unordered_list22121(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__21028__auto__ = (function sablono$core$unordered_list22121_$_iter__22126(s__22127){
return (new cljs.core.LazySeq(null,(function (){
var s__22127__$1 = s__22127;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22127__$1);
if(temp__4657__auto__){
var s__22127__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22127__$2)){
var c__21026__auto__ = cljs.core.chunk_first.call(null,s__22127__$2);
var size__21027__auto__ = cljs.core.count.call(null,c__21026__auto__);
var b__22129 = cljs.core.chunk_buffer.call(null,size__21027__auto__);
if((function (){var i__22128 = (0);
while(true){
if((i__22128 < size__21027__auto__)){
var x = cljs.core._nth.call(null,c__21026__auto__,i__22128);
cljs.core.chunk_append.call(null,b__22129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22130 = (i__22128 + (1));
i__22128 = G__22130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22129),sablono$core$unordered_list22121_$_iter__22126.call(null,cljs.core.chunk_rest.call(null,s__22127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22129),null);
}
} else {
var x = cljs.core.first.call(null,s__22127__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list22121_$_iter__22126.call(null,cljs.core.rest.call(null,s__22127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21028__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22121);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list22131 = (function sablono$core$ordered_list22131(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__21028__auto__ = (function sablono$core$ordered_list22131_$_iter__22136(s__22137){
return (new cljs.core.LazySeq(null,(function (){
var s__22137__$1 = s__22137;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22137__$1);
if(temp__4657__auto__){
var s__22137__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22137__$2)){
var c__21026__auto__ = cljs.core.chunk_first.call(null,s__22137__$2);
var size__21027__auto__ = cljs.core.count.call(null,c__21026__auto__);
var b__22139 = cljs.core.chunk_buffer.call(null,size__21027__auto__);
if((function (){var i__22138 = (0);
while(true){
if((i__22138 < size__21027__auto__)){
var x = cljs.core._nth.call(null,c__21026__auto__,i__22138);
cljs.core.chunk_append.call(null,b__22139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22140 = (i__22138 + (1));
i__22138 = G__22140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22139),sablono$core$ordered_list22131_$_iter__22136.call(null,cljs.core.chunk_rest.call(null,s__22137__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22139),null);
}
} else {
var x = cljs.core.first.call(null,s__22137__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list22131_$_iter__22136.call(null,cljs.core.rest.call(null,s__22137__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21028__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22131);
/**
 * Create an image element.
 */
sablono.core.image22141 = (function sablono$core$image22141(var_args){
var args22142 = [];
var len__21323__auto___22145 = arguments.length;
var i__21324__auto___22146 = (0);
while(true){
if((i__21324__auto___22146 < len__21323__auto___22145)){
args22142.push((arguments[i__21324__auto___22146]));

var G__22147 = (i__21324__auto___22146 + (1));
i__21324__auto___22146 = G__22147;
continue;
} else {
}
break;
}

var G__22144 = args22142.length;
switch (G__22144) {
case 1:
return sablono.core.image22141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image22141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22142.length)].join('')));

}
});

sablono.core.image22141.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image22141.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image22141.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22141);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__22149_SHARP_,p2__22150_SHARP_){
return [cljs.core.str(p1__22149_SHARP_),cljs.core.str("["),cljs.core.str(p2__22150_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__22151_SHARP_,p2__22152_SHARP_){
return [cljs.core.str(p1__22151_SHARP_),cljs.core.str("-"),cljs.core.str(p2__22152_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20248__auto__ = value;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field22153 = (function sablono$core$color_field22153(var_args){
var args22154 = [];
var len__21323__auto___22221 = arguments.length;
var i__21324__auto___22222 = (0);
while(true){
if((i__21324__auto___22222 < len__21323__auto___22221)){
args22154.push((arguments[i__21324__auto___22222]));

var G__22223 = (i__21324__auto___22222 + (1));
i__21324__auto___22222 = G__22223;
continue;
} else {
}
break;
}

var G__22156 = args22154.length;
switch (G__22156) {
case 1:
return sablono.core.color_field22153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field22153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22154.length)].join('')));

}
});

sablono.core.color_field22153.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.color_field22153.call(null,name__22068__auto__,null);
});

sablono.core.color_field22153.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.color_field22153.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22153);

/**
 * Creates a date input field.
 */
sablono.core.date_field22157 = (function sablono$core$date_field22157(var_args){
var args22158 = [];
var len__21323__auto___22225 = arguments.length;
var i__21324__auto___22226 = (0);
while(true){
if((i__21324__auto___22226 < len__21323__auto___22225)){
args22158.push((arguments[i__21324__auto___22226]));

var G__22227 = (i__21324__auto___22226 + (1));
i__21324__auto___22226 = G__22227;
continue;
} else {
}
break;
}

var G__22160 = args22158.length;
switch (G__22160) {
case 1:
return sablono.core.date_field22157.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field22157.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22158.length)].join('')));

}
});

sablono.core.date_field22157.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.date_field22157.call(null,name__22068__auto__,null);
});

sablono.core.date_field22157.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.date_field22157.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22157);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field22161 = (function sablono$core$datetime_field22161(var_args){
var args22162 = [];
var len__21323__auto___22229 = arguments.length;
var i__21324__auto___22230 = (0);
while(true){
if((i__21324__auto___22230 < len__21323__auto___22229)){
args22162.push((arguments[i__21324__auto___22230]));

var G__22231 = (i__21324__auto___22230 + (1));
i__21324__auto___22230 = G__22231;
continue;
} else {
}
break;
}

var G__22164 = args22162.length;
switch (G__22164) {
case 1:
return sablono.core.datetime_field22161.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field22161.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22162.length)].join('')));

}
});

sablono.core.datetime_field22161.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.datetime_field22161.call(null,name__22068__auto__,null);
});

sablono.core.datetime_field22161.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.datetime_field22161.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22161);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field22165 = (function sablono$core$datetime_local_field22165(var_args){
var args22166 = [];
var len__21323__auto___22233 = arguments.length;
var i__21324__auto___22234 = (0);
while(true){
if((i__21324__auto___22234 < len__21323__auto___22233)){
args22166.push((arguments[i__21324__auto___22234]));

var G__22235 = (i__21324__auto___22234 + (1));
i__21324__auto___22234 = G__22235;
continue;
} else {
}
break;
}

var G__22168 = args22166.length;
switch (G__22168) {
case 1:
return sablono.core.datetime_local_field22165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field22165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22166.length)].join('')));

}
});

sablono.core.datetime_local_field22165.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.datetime_local_field22165.call(null,name__22068__auto__,null);
});

sablono.core.datetime_local_field22165.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.datetime_local_field22165.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22165);

/**
 * Creates a email input field.
 */
sablono.core.email_field22169 = (function sablono$core$email_field22169(var_args){
var args22170 = [];
var len__21323__auto___22237 = arguments.length;
var i__21324__auto___22238 = (0);
while(true){
if((i__21324__auto___22238 < len__21323__auto___22237)){
args22170.push((arguments[i__21324__auto___22238]));

var G__22239 = (i__21324__auto___22238 + (1));
i__21324__auto___22238 = G__22239;
continue;
} else {
}
break;
}

var G__22172 = args22170.length;
switch (G__22172) {
case 1:
return sablono.core.email_field22169.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field22169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22170.length)].join('')));

}
});

sablono.core.email_field22169.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.email_field22169.call(null,name__22068__auto__,null);
});

sablono.core.email_field22169.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.email_field22169.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22169);

/**
 * Creates a file input field.
 */
sablono.core.file_field22173 = (function sablono$core$file_field22173(var_args){
var args22174 = [];
var len__21323__auto___22241 = arguments.length;
var i__21324__auto___22242 = (0);
while(true){
if((i__21324__auto___22242 < len__21323__auto___22241)){
args22174.push((arguments[i__21324__auto___22242]));

var G__22243 = (i__21324__auto___22242 + (1));
i__21324__auto___22242 = G__22243;
continue;
} else {
}
break;
}

var G__22176 = args22174.length;
switch (G__22176) {
case 1:
return sablono.core.file_field22173.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field22173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22174.length)].join('')));

}
});

sablono.core.file_field22173.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.file_field22173.call(null,name__22068__auto__,null);
});

sablono.core.file_field22173.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.file_field22173.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22173);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field22177 = (function sablono$core$hidden_field22177(var_args){
var args22178 = [];
var len__21323__auto___22245 = arguments.length;
var i__21324__auto___22246 = (0);
while(true){
if((i__21324__auto___22246 < len__21323__auto___22245)){
args22178.push((arguments[i__21324__auto___22246]));

var G__22247 = (i__21324__auto___22246 + (1));
i__21324__auto___22246 = G__22247;
continue;
} else {
}
break;
}

var G__22180 = args22178.length;
switch (G__22180) {
case 1:
return sablono.core.hidden_field22177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field22177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22178.length)].join('')));

}
});

sablono.core.hidden_field22177.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.hidden_field22177.call(null,name__22068__auto__,null);
});

sablono.core.hidden_field22177.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.hidden_field22177.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22177);

/**
 * Creates a month input field.
 */
sablono.core.month_field22181 = (function sablono$core$month_field22181(var_args){
var args22182 = [];
var len__21323__auto___22249 = arguments.length;
var i__21324__auto___22250 = (0);
while(true){
if((i__21324__auto___22250 < len__21323__auto___22249)){
args22182.push((arguments[i__21324__auto___22250]));

var G__22251 = (i__21324__auto___22250 + (1));
i__21324__auto___22250 = G__22251;
continue;
} else {
}
break;
}

var G__22184 = args22182.length;
switch (G__22184) {
case 1:
return sablono.core.month_field22181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field22181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22182.length)].join('')));

}
});

sablono.core.month_field22181.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.month_field22181.call(null,name__22068__auto__,null);
});

sablono.core.month_field22181.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.month_field22181.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22181);

/**
 * Creates a number input field.
 */
sablono.core.number_field22185 = (function sablono$core$number_field22185(var_args){
var args22186 = [];
var len__21323__auto___22253 = arguments.length;
var i__21324__auto___22254 = (0);
while(true){
if((i__21324__auto___22254 < len__21323__auto___22253)){
args22186.push((arguments[i__21324__auto___22254]));

var G__22255 = (i__21324__auto___22254 + (1));
i__21324__auto___22254 = G__22255;
continue;
} else {
}
break;
}

var G__22188 = args22186.length;
switch (G__22188) {
case 1:
return sablono.core.number_field22185.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field22185.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22186.length)].join('')));

}
});

sablono.core.number_field22185.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.number_field22185.call(null,name__22068__auto__,null);
});

sablono.core.number_field22185.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.number_field22185.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22185);

/**
 * Creates a password input field.
 */
sablono.core.password_field22189 = (function sablono$core$password_field22189(var_args){
var args22190 = [];
var len__21323__auto___22257 = arguments.length;
var i__21324__auto___22258 = (0);
while(true){
if((i__21324__auto___22258 < len__21323__auto___22257)){
args22190.push((arguments[i__21324__auto___22258]));

var G__22259 = (i__21324__auto___22258 + (1));
i__21324__auto___22258 = G__22259;
continue;
} else {
}
break;
}

var G__22192 = args22190.length;
switch (G__22192) {
case 1:
return sablono.core.password_field22189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field22189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22190.length)].join('')));

}
});

sablono.core.password_field22189.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.password_field22189.call(null,name__22068__auto__,null);
});

sablono.core.password_field22189.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.password_field22189.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22189);

/**
 * Creates a range input field.
 */
sablono.core.range_field22193 = (function sablono$core$range_field22193(var_args){
var args22194 = [];
var len__21323__auto___22261 = arguments.length;
var i__21324__auto___22262 = (0);
while(true){
if((i__21324__auto___22262 < len__21323__auto___22261)){
args22194.push((arguments[i__21324__auto___22262]));

var G__22263 = (i__21324__auto___22262 + (1));
i__21324__auto___22262 = G__22263;
continue;
} else {
}
break;
}

var G__22196 = args22194.length;
switch (G__22196) {
case 1:
return sablono.core.range_field22193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field22193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22194.length)].join('')));

}
});

sablono.core.range_field22193.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.range_field22193.call(null,name__22068__auto__,null);
});

sablono.core.range_field22193.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.range_field22193.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22193);

/**
 * Creates a search input field.
 */
sablono.core.search_field22197 = (function sablono$core$search_field22197(var_args){
var args22198 = [];
var len__21323__auto___22265 = arguments.length;
var i__21324__auto___22266 = (0);
while(true){
if((i__21324__auto___22266 < len__21323__auto___22265)){
args22198.push((arguments[i__21324__auto___22266]));

var G__22267 = (i__21324__auto___22266 + (1));
i__21324__auto___22266 = G__22267;
continue;
} else {
}
break;
}

var G__22200 = args22198.length;
switch (G__22200) {
case 1:
return sablono.core.search_field22197.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field22197.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22198.length)].join('')));

}
});

sablono.core.search_field22197.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.search_field22197.call(null,name__22068__auto__,null);
});

sablono.core.search_field22197.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.search_field22197.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22197);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field22201 = (function sablono$core$tel_field22201(var_args){
var args22202 = [];
var len__21323__auto___22269 = arguments.length;
var i__21324__auto___22270 = (0);
while(true){
if((i__21324__auto___22270 < len__21323__auto___22269)){
args22202.push((arguments[i__21324__auto___22270]));

var G__22271 = (i__21324__auto___22270 + (1));
i__21324__auto___22270 = G__22271;
continue;
} else {
}
break;
}

var G__22204 = args22202.length;
switch (G__22204) {
case 1:
return sablono.core.tel_field22201.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field22201.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22202.length)].join('')));

}
});

sablono.core.tel_field22201.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.tel_field22201.call(null,name__22068__auto__,null);
});

sablono.core.tel_field22201.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.tel_field22201.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22201);

/**
 * Creates a text input field.
 */
sablono.core.text_field22205 = (function sablono$core$text_field22205(var_args){
var args22206 = [];
var len__21323__auto___22273 = arguments.length;
var i__21324__auto___22274 = (0);
while(true){
if((i__21324__auto___22274 < len__21323__auto___22273)){
args22206.push((arguments[i__21324__auto___22274]));

var G__22275 = (i__21324__auto___22274 + (1));
i__21324__auto___22274 = G__22275;
continue;
} else {
}
break;
}

var G__22208 = args22206.length;
switch (G__22208) {
case 1:
return sablono.core.text_field22205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field22205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22206.length)].join('')));

}
});

sablono.core.text_field22205.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.text_field22205.call(null,name__22068__auto__,null);
});

sablono.core.text_field22205.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.text_field22205.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22205);

/**
 * Creates a time input field.
 */
sablono.core.time_field22209 = (function sablono$core$time_field22209(var_args){
var args22210 = [];
var len__21323__auto___22277 = arguments.length;
var i__21324__auto___22278 = (0);
while(true){
if((i__21324__auto___22278 < len__21323__auto___22277)){
args22210.push((arguments[i__21324__auto___22278]));

var G__22279 = (i__21324__auto___22278 + (1));
i__21324__auto___22278 = G__22279;
continue;
} else {
}
break;
}

var G__22212 = args22210.length;
switch (G__22212) {
case 1:
return sablono.core.time_field22209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field22209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22210.length)].join('')));

}
});

sablono.core.time_field22209.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.time_field22209.call(null,name__22068__auto__,null);
});

sablono.core.time_field22209.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.time_field22209.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22209);

/**
 * Creates a url input field.
 */
sablono.core.url_field22213 = (function sablono$core$url_field22213(var_args){
var args22214 = [];
var len__21323__auto___22281 = arguments.length;
var i__21324__auto___22282 = (0);
while(true){
if((i__21324__auto___22282 < len__21323__auto___22281)){
args22214.push((arguments[i__21324__auto___22282]));

var G__22283 = (i__21324__auto___22282 + (1));
i__21324__auto___22282 = G__22283;
continue;
} else {
}
break;
}

var G__22216 = args22214.length;
switch (G__22216) {
case 1:
return sablono.core.url_field22213.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field22213.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22214.length)].join('')));

}
});

sablono.core.url_field22213.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.url_field22213.call(null,name__22068__auto__,null);
});

sablono.core.url_field22213.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.url_field22213.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22213);

/**
 * Creates a week input field.
 */
sablono.core.week_field22217 = (function sablono$core$week_field22217(var_args){
var args22218 = [];
var len__21323__auto___22285 = arguments.length;
var i__21324__auto___22286 = (0);
while(true){
if((i__21324__auto___22286 < len__21323__auto___22285)){
args22218.push((arguments[i__21324__auto___22286]));

var G__22287 = (i__21324__auto___22286 + (1));
i__21324__auto___22286 = G__22287;
continue;
} else {
}
break;
}

var G__22220 = args22218.length;
switch (G__22220) {
case 1:
return sablono.core.week_field22217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field22217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22218.length)].join('')));

}
});

sablono.core.week_field22217.cljs$core$IFn$_invoke$arity$1 = (function (name__22068__auto__){
return sablono.core.week_field22217.call(null,name__22068__auto__,null);
});

sablono.core.week_field22217.cljs$core$IFn$_invoke$arity$2 = (function (name__22068__auto__,value__22069__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22068__auto__,value__22069__auto__);
});

sablono.core.week_field22217.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22217);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box22289 = (function sablono$core$check_box22289(var_args){
var args22290 = [];
var len__21323__auto___22293 = arguments.length;
var i__21324__auto___22294 = (0);
while(true){
if((i__21324__auto___22294 < len__21323__auto___22293)){
args22290.push((arguments[i__21324__auto___22294]));

var G__22295 = (i__21324__auto___22294 + (1));
i__21324__auto___22294 = G__22295;
continue;
} else {
}
break;
}

var G__22292 = args22290.length;
switch (G__22292) {
case 1:
return sablono.core.check_box22289.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box22289.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box22289.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22290.length)].join('')));

}
});

sablono.core.check_box22289.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box22289.call(null,name,null);
});

sablono.core.check_box22289.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box22289.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box22289.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20248__auto__ = value;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box22289.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22289);
/**
 * Creates a radio button.
 */
sablono.core.radio_button22297 = (function sablono$core$radio_button22297(var_args){
var args22298 = [];
var len__21323__auto___22301 = arguments.length;
var i__21324__auto___22302 = (0);
while(true){
if((i__21324__auto___22302 < len__21323__auto___22301)){
args22298.push((arguments[i__21324__auto___22302]));

var G__22303 = (i__21324__auto___22302 + (1));
i__21324__auto___22302 = G__22303;
continue;
} else {
}
break;
}

var G__22300 = args22298.length;
switch (G__22300) {
case 1:
return sablono.core.radio_button22297.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button22297.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button22297.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22298.length)].join('')));

}
});

sablono.core.radio_button22297.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button22297.call(null,group,null);
});

sablono.core.radio_button22297.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button22297.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button22297.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20248__auto__ = value;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button22297.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22297);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options22305 = (function sablono$core$select_options22305(coll){
var iter__21028__auto__ = (function sablono$core$select_options22305_$_iter__22322(s__22323){
return (new cljs.core.LazySeq(null,(function (){
var s__22323__$1 = s__22323;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22323__$1);
if(temp__4657__auto__){
var s__22323__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22323__$2)){
var c__21026__auto__ = cljs.core.chunk_first.call(null,s__22323__$2);
var size__21027__auto__ = cljs.core.count.call(null,c__21026__auto__);
var b__22325 = cljs.core.chunk_buffer.call(null,size__21027__auto__);
if((function (){var i__22324 = (0);
while(true){
if((i__22324 < size__21027__auto__)){
var x = cljs.core._nth.call(null,c__21026__auto__,i__22324);
cljs.core.chunk_append.call(null,b__22325,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22332 = x;
var text = cljs.core.nth.call(null,vec__22332,(0),null);
var val = cljs.core.nth.call(null,vec__22332,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22332,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options22305.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__22338 = (i__22324 + (1));
i__22324 = G__22338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22325),sablono$core$select_options22305_$_iter__22322.call(null,cljs.core.chunk_rest.call(null,s__22323__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22325),null);
}
} else {
var x = cljs.core.first.call(null,s__22323__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22335 = x;
var text = cljs.core.nth.call(null,vec__22335,(0),null);
var val = cljs.core.nth.call(null,vec__22335,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22335,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options22305.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options22305_$_iter__22322.call(null,cljs.core.rest.call(null,s__22323__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21028__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22305);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down22339 = (function sablono$core$drop_down22339(var_args){
var args22340 = [];
var len__21323__auto___22343 = arguments.length;
var i__21324__auto___22344 = (0);
while(true){
if((i__21324__auto___22344 < len__21323__auto___22343)){
args22340.push((arguments[i__21324__auto___22344]));

var G__22345 = (i__21324__auto___22344 + (1));
i__21324__auto___22344 = G__22345;
continue;
} else {
}
break;
}

var G__22342 = args22340.length;
switch (G__22342) {
case 2:
return sablono.core.drop_down22339.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down22339.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22340.length)].join('')));

}
});

sablono.core.drop_down22339.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down22339.call(null,name,options,null);
});

sablono.core.drop_down22339.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down22339.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22339);
/**
 * Creates a text area element.
 */
sablono.core.text_area22347 = (function sablono$core$text_area22347(var_args){
var args22348 = [];
var len__21323__auto___22351 = arguments.length;
var i__21324__auto___22352 = (0);
while(true){
if((i__21324__auto___22352 < len__21323__auto___22351)){
args22348.push((arguments[i__21324__auto___22352]));

var G__22353 = (i__21324__auto___22352 + (1));
i__21324__auto___22352 = G__22353;
continue;
} else {
}
break;
}

var G__22350 = args22348.length;
switch (G__22350) {
case 1:
return sablono.core.text_area22347.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area22347.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22348.length)].join('')));

}
});

sablono.core.text_area22347.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area22347.call(null,name,null);
});

sablono.core.text_area22347.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20248__auto__ = value;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area22347.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22347);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label22355 = (function sablono$core$label22355(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22355);
/**
 * Creates a submit button.
 */
sablono.core.submit_button22356 = (function sablono$core$submit_button22356(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22356);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button22357 = (function sablono$core$reset_button22357(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22357);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to22358 = (function sablono$core$form_to22358(var_args){
var args__21330__auto__ = [];
var len__21323__auto___22365 = arguments.length;
var i__21324__auto___22366 = (0);
while(true){
if((i__21324__auto___22366 < len__21323__auto___22365)){
args__21330__auto__.push((arguments[i__21324__auto___22366]));

var G__22367 = (i__21324__auto___22366 + (1));
i__21324__auto___22366 = G__22367;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to22358.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

sablono.core.form_to22358.cljs$core$IFn$_invoke$arity$variadic = (function (p__22361,body){
var vec__22362 = p__22361;
var method = cljs.core.nth.call(null,vec__22362,(0),null);
var action = cljs.core.nth.call(null,vec__22362,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to22358.cljs$lang$maxFixedArity = (1);

sablono.core.form_to22358.cljs$lang$applyTo = (function (seq22359){
var G__22360 = cljs.core.first.call(null,seq22359);
var seq22359__$1 = cljs.core.next.call(null,seq22359);
return sablono.core.form_to22358.cljs$core$IFn$_invoke$arity$variadic(G__22360,seq22359__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22358);

//# sourceMappingURL=core.js.map