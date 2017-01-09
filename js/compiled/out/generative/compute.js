// Compiled by ClojureScript 1.9.89 {}
goog.provide('generative.compute');
goog.require('cljs.core');
goog.require('cljs.pprint');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
generative.compute.Settings = (function (decay,angle_divisor,branch_factor,initial_radius,initial_branch_count,max_branch_count,__meta,__extmap,__hash){
this.decay = decay;
this.angle_divisor = angle_divisor;
this.branch_factor = branch_factor;
this.initial_radius = initial_radius;
this.initial_branch_count = initial_branch_count;
this.max_branch_count = max_branch_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
generative.compute.Settings.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.call(null,this__20870__auto____$1,k__20871__auto__,null);
});

generative.compute.Settings.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k24968,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__24970 = (((k24968 instanceof cljs.core.Keyword))?k24968.fqn:null);
switch (G__24970) {
case "decay":
return self__.decay;

break;
case "angle-divisor":
return self__.angle_divisor;

break;
case "branch-factor":
return self__.branch_factor;

break;
case "initial-radius":
return self__.initial_radius;

break;
case "initial-branch-count":
return self__.initial_branch_count;

break;
case "max-branch-count":
return self__.max_branch_count;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24968,else__20873__auto__);

}
});

generative.compute.Settings.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20885__auto__,pr_pair__20887__auto__,"#generative.compute.Settings{",", ","}",opts__20886__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"decay","decay",1036712184),self__.decay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle-divisor","angle-divisor",-75219294),self__.angle_divisor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branch-factor","branch-factor",524630770),self__.branch_factor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-radius","initial-radius",-2031697685),self__.initial_radius],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-branch-count","initial-branch-count",-1705466928),self__.initial_branch_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-branch-count","max-branch-count",1887550455),self__.max_branch_count],null))], null),self__.__extmap));
});

generative.compute.Settings.prototype.cljs$core$IIterable$ = true;

generative.compute.Settings.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24967){
var self__ = this;
var G__24967__$1 = this;
return (new cljs.core.RecordIter((0),G__24967__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decay","decay",1036712184),new cljs.core.Keyword(null,"angle-divisor","angle-divisor",-75219294),new cljs.core.Keyword(null,"branch-factor","branch-factor",524630770),new cljs.core.Keyword(null,"initial-radius","initial-radius",-2031697685),new cljs.core.Keyword(null,"initial-branch-count","initial-branch-count",-1705466928),new cljs.core.Keyword(null,"max-branch-count","max-branch-count",1887550455)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

generative.compute.Settings.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

generative.compute.Settings.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new generative.compute.Settings(self__.decay,self__.angle_divisor,self__.branch_factor,self__.initial_radius,self__.initial_branch_count,self__.max_branch_count,self__.__meta,self__.__extmap,self__.__hash));
});

generative.compute.Settings.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

generative.compute.Settings.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap.call(null,this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

generative.compute.Settings.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map.call(null,this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

generative.compute.Settings.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"angle-divisor","angle-divisor",-75219294),null,new cljs.core.Keyword(null,"initial-radius","initial-radius",-2031697685),null,new cljs.core.Keyword(null,"initial-branch-count","initial-branch-count",-1705466928),null,new cljs.core.Keyword(null,"branch-factor","branch-factor",524630770),null,new cljs.core.Keyword(null,"max-branch-count","max-branch-count",1887550455),null,new cljs.core.Keyword(null,"decay","decay",1036712184),null], null), null),k__20880__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new generative.compute.Settings(self__.decay,self__.angle_divisor,self__.branch_factor,self__.initial_radius,self__.initial_branch_count,self__.max_branch_count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20880__auto__)),null));
}
});

generative.compute.Settings.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__24967){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__24971 = cljs.core.keyword_identical_QMARK_;
var expr__24972 = k__20878__auto__;
if(cljs.core.truth_(pred__24971.call(null,new cljs.core.Keyword(null,"decay","decay",1036712184),expr__24972))){
return (new generative.compute.Settings(G__24967,self__.angle_divisor,self__.branch_factor,self__.initial_radius,self__.initial_branch_count,self__.max_branch_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24971.call(null,new cljs.core.Keyword(null,"angle-divisor","angle-divisor",-75219294),expr__24972))){
return (new generative.compute.Settings(self__.decay,G__24967,self__.branch_factor,self__.initial_radius,self__.initial_branch_count,self__.max_branch_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24971.call(null,new cljs.core.Keyword(null,"branch-factor","branch-factor",524630770),expr__24972))){
return (new generative.compute.Settings(self__.decay,self__.angle_divisor,G__24967,self__.initial_radius,self__.initial_branch_count,self__.max_branch_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24971.call(null,new cljs.core.Keyword(null,"initial-radius","initial-radius",-2031697685),expr__24972))){
return (new generative.compute.Settings(self__.decay,self__.angle_divisor,self__.branch_factor,G__24967,self__.initial_branch_count,self__.max_branch_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24971.call(null,new cljs.core.Keyword(null,"initial-branch-count","initial-branch-count",-1705466928),expr__24972))){
return (new generative.compute.Settings(self__.decay,self__.angle_divisor,self__.branch_factor,self__.initial_radius,G__24967,self__.max_branch_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24971.call(null,new cljs.core.Keyword(null,"max-branch-count","max-branch-count",1887550455),expr__24972))){
return (new generative.compute.Settings(self__.decay,self__.angle_divisor,self__.branch_factor,self__.initial_radius,self__.initial_branch_count,G__24967,self__.__meta,self__.__extmap,null));
} else {
return (new generative.compute.Settings(self__.decay,self__.angle_divisor,self__.branch_factor,self__.initial_radius,self__.initial_branch_count,self__.max_branch_count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20878__auto__,G__24967),null));
}
}
}
}
}
}
});

generative.compute.Settings.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"decay","decay",1036712184),self__.decay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angle-divisor","angle-divisor",-75219294),self__.angle_divisor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branch-factor","branch-factor",524630770),self__.branch_factor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-radius","initial-radius",-2031697685),self__.initial_radius],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-branch-count","initial-branch-count",-1705466928),self__.initial_branch_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-branch-count","max-branch-count",1887550455),self__.max_branch_count],null))], null),self__.__extmap));
});

generative.compute.Settings.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__24967){
var self__ = this;
var this__20869__auto____$1 = this;
return (new generative.compute.Settings(self__.decay,self__.angle_divisor,self__.branch_factor,self__.initial_radius,self__.initial_branch_count,self__.max_branch_count,G__24967,self__.__extmap,self__.__hash));
});

generative.compute.Settings.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20876__auto__)){
return cljs.core._assoc.call(null,this__20875__auto____$1,cljs.core._nth.call(null,entry__20876__auto__,(0)),cljs.core._nth.call(null,entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

generative.compute.Settings.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"decay","decay",-1617723585,null),new cljs.core.Symbol(null,"angle-divisor","angle-divisor",1565312233,null),new cljs.core.Symbol(null,"branch-factor","branch-factor",-2129804999,null),new cljs.core.Symbol(null,"initial-radius","initial-radius",-391166158,null),new cljs.core.Symbol(null,"initial-branch-count","initial-branch-count",-64935401,null),new cljs.core.Symbol(null,"max-branch-count","max-branch-count",-766885314,null)], null);
});

generative.compute.Settings.cljs$lang$type = true;

generative.compute.Settings.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"generative.compute/Settings");
});

generative.compute.Settings.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write.call(null,writer__20905__auto__,"generative.compute/Settings");
});

generative.compute.__GT_Settings = (function generative$compute$__GT_Settings(decay,angle_divisor,branch_factor,initial_radius,initial_branch_count,max_branch_count){
return (new generative.compute.Settings(decay,angle_divisor,branch_factor,initial_radius,initial_branch_count,max_branch_count,null,null,null));
});

generative.compute.map__GT_Settings = (function generative$compute$map__GT_Settings(G__24969){
return (new generative.compute.Settings(new cljs.core.Keyword(null,"decay","decay",1036712184).cljs$core$IFn$_invoke$arity$1(G__24969),new cljs.core.Keyword(null,"angle-divisor","angle-divisor",-75219294).cljs$core$IFn$_invoke$arity$1(G__24969),new cljs.core.Keyword(null,"branch-factor","branch-factor",524630770).cljs$core$IFn$_invoke$arity$1(G__24969),new cljs.core.Keyword(null,"initial-radius","initial-radius",-2031697685).cljs$core$IFn$_invoke$arity$1(G__24969),new cljs.core.Keyword(null,"initial-branch-count","initial-branch-count",-1705466928).cljs$core$IFn$_invoke$arity$1(G__24969),new cljs.core.Keyword(null,"max-branch-count","max-branch-count",1887550455).cljs$core$IFn$_invoke$arity$1(G__24969),null,cljs.core.dissoc.call(null,G__24969,new cljs.core.Keyword(null,"decay","decay",1036712184),new cljs.core.Keyword(null,"angle-divisor","angle-divisor",-75219294),new cljs.core.Keyword(null,"branch-factor","branch-factor",524630770),new cljs.core.Keyword(null,"initial-radius","initial-radius",-2031697685),new cljs.core.Keyword(null,"initial-branch-count","initial-branch-count",-1705466928),new cljs.core.Keyword(null,"max-branch-count","max-branch-count",1887550455)),null));
});

generative.compute.default_settings = generative.compute.map__GT_Settings.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"decay","decay",1036712184),0.9,new cljs.core.Keyword(null,"angle-divisor","angle-divisor",-75219294),10.0,new cljs.core.Keyword(null,"branch-factor","branch-factor",524630770),1.0,new cljs.core.Keyword(null,"initial-radius","initial-radius",-2031697685),0.1,new cljs.core.Keyword(null,"initial-branch-count","initial-branch-count",-1705466928),40.0,new cljs.core.Keyword(null,"max-branch-count","max-branch-count",1887550455),(1000000),new cljs.core.Keyword(null,"z-enabled","z-enabled",1154383350),true], null));

/**
* @constructor
*/
generative.compute.Branch = (function (x,y,z,radius,angle1,angle2,depth,parent){
this.x = x;
this.y = y;
this.z = z;
this.radius = radius;
this.angle1 = angle1;
this.angle2 = angle2;
this.depth = depth;
this.parent = parent;
})

generative.compute.Branch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"angle1","angle1",-1443484164,null),new cljs.core.Symbol(null,"angle2","angle2",168928798,null),new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
});

generative.compute.Branch.cljs$lang$type = true;

generative.compute.Branch.cljs$lang$ctorStr = "generative.compute/Branch";

generative.compute.Branch.cljs$lang$ctorPrWriter = (function (this__20854__auto__,writer__20855__auto__,opt__20856__auto__){
return cljs.core._write.call(null,writer__20855__auto__,"generative.compute/Branch");
});

generative.compute.__GT_Branch = (function generative$compute$__GT_Branch(x,y,z,radius,angle1,angle2,depth,parent){
return (new generative.compute.Branch(x,y,z,radius,angle1,angle2,depth,parent));
});

generative.compute.compute_next = (function generative$compute$compute_next(settings,x,y,z,radius,angle1,angle2,depth,parent){
var decay = settings.decay;
var angle_divisor = settings.angle_divisor;
var new_x = (x + ((radius * Math.sin(angle2)) * Math.sin(angle1)));
var new_y = (y + ((radius * Math.sin(angle2)) * Math.cos(angle1)));
var new_z = (z + (radius * Math.cos(angle2)));
var new_radius = (radius * (decay - (Math.random() * 0.2)));
var new_depth = (depth + (1));
var mul = (((new_depth < 5.0))?1.0:1.0);
var new_angle1 = (angle1 + (((((Math.random() - 0.5) * 2.0) * Math.PI) / angle_divisor) * mul));
var new_angle2 = (angle2 + (((((Math.random() - 0.5) * 2.0) * Math.PI) / angle_divisor) * mul));
var new_branch = (new generative.compute.Branch(new_x,new_y,new_z,new_radius,new_angle1,new_angle2,new_depth,parent));
return new_branch;
});
generative.compute.compute_next2 = (function generative$compute$compute_next2(settings,active,x,y,z,radius,angle1,angle2,depth,parent){
var first = generative.compute.compute_next.call(null,settings,x,y,z,radius,angle1,angle2,depth,parent);
var angle1__$1 = first.angle1;
var angle2__$1 = first.angle2;
var second = (((Math.random() < settings.branch_factor))?generative.compute.compute_next.call(null,settings,x,y,z,radius,angle1__$1,angle2__$1,depth,parent):null);
active.push(first);

if(cljs.core.truth_(second)){
return active.push(second);
} else {
return null;
}
});
generative.compute.compute = (function generative$compute$compute(settings){
var initial_radius = settings.initial_radius;
var initial_branch_count = settings.initial_branch_count;
var max_branch_count = settings.max_branch_count;
var x = 0.5;
var y = 0.5;
var z = 0.5;
var r = initial_radius;
var max_angle = (2.0 * Math.PI);
var depth = (0);
var parent = (0);
var active = [];
var seq__24991_25007 = cljs.core.seq.call(null,cljs.core.range.call(null,0.0,max_angle,(max_angle / initial_branch_count)));
var chunk__24996_25008 = null;
var count__24997_25009 = (0);
var i__24998_25010 = (0);
while(true){
if((i__24998_25010 < count__24997_25009)){
var angle1_25011 = cljs.core._nth.call(null,chunk__24996_25008,i__24998_25010);
var seq__24999_25012 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.PI / -2.0)], null));
var chunk__25000_25013 = null;
var count__25001_25014 = (0);
var i__25002_25015 = (0);
while(true){
if((i__25002_25015 < count__25001_25014)){
var angle2_25016 = cljs.core._nth.call(null,chunk__25000_25013,i__25002_25015);
active.push((new generative.compute.Branch(x,y,z,r,angle1_25011,angle2_25016,depth,parent)));

var G__25017 = seq__24999_25012;
var G__25018 = chunk__25000_25013;
var G__25019 = count__25001_25014;
var G__25020 = (i__25002_25015 + (1));
seq__24999_25012 = G__25017;
chunk__25000_25013 = G__25018;
count__25001_25014 = G__25019;
i__25002_25015 = G__25020;
continue;
} else {
var temp__4657__auto___25021 = cljs.core.seq.call(null,seq__24999_25012);
if(temp__4657__auto___25021){
var seq__24999_25022__$1 = temp__4657__auto___25021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24999_25022__$1)){
var c__21059__auto___25023 = cljs.core.chunk_first.call(null,seq__24999_25022__$1);
var G__25024 = cljs.core.chunk_rest.call(null,seq__24999_25022__$1);
var G__25025 = c__21059__auto___25023;
var G__25026 = cljs.core.count.call(null,c__21059__auto___25023);
var G__25027 = (0);
seq__24999_25012 = G__25024;
chunk__25000_25013 = G__25025;
count__25001_25014 = G__25026;
i__25002_25015 = G__25027;
continue;
} else {
var angle2_25028 = cljs.core.first.call(null,seq__24999_25022__$1);
active.push((new generative.compute.Branch(x,y,z,r,angle1_25011,angle2_25028,depth,parent)));

var G__25029 = cljs.core.next.call(null,seq__24999_25022__$1);
var G__25030 = null;
var G__25031 = (0);
var G__25032 = (0);
seq__24999_25012 = G__25029;
chunk__25000_25013 = G__25030;
count__25001_25014 = G__25031;
i__25002_25015 = G__25032;
continue;
}
} else {
}
}
break;
}

var G__25033 = seq__24991_25007;
var G__25034 = chunk__24996_25008;
var G__25035 = count__24997_25009;
var G__25036 = (i__24998_25010 + (1));
seq__24991_25007 = G__25033;
chunk__24996_25008 = G__25034;
count__24997_25009 = G__25035;
i__24998_25010 = G__25036;
continue;
} else {
var temp__4657__auto___25037 = cljs.core.seq.call(null,seq__24991_25007);
if(temp__4657__auto___25037){
var seq__24991_25038__$1 = temp__4657__auto___25037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24991_25038__$1)){
var c__21059__auto___25039 = cljs.core.chunk_first.call(null,seq__24991_25038__$1);
var G__25040 = cljs.core.chunk_rest.call(null,seq__24991_25038__$1);
var G__25041 = c__21059__auto___25039;
var G__25042 = cljs.core.count.call(null,c__21059__auto___25039);
var G__25043 = (0);
seq__24991_25007 = G__25040;
chunk__24996_25008 = G__25041;
count__24997_25009 = G__25042;
i__24998_25010 = G__25043;
continue;
} else {
var angle1_25044 = cljs.core.first.call(null,seq__24991_25038__$1);
var seq__24992_25045 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.PI / -2.0)], null));
var chunk__24993_25046 = null;
var count__24994_25047 = (0);
var i__24995_25048 = (0);
while(true){
if((i__24995_25048 < count__24994_25047)){
var angle2_25049 = cljs.core._nth.call(null,chunk__24993_25046,i__24995_25048);
active.push((new generative.compute.Branch(x,y,z,r,angle1_25044,angle2_25049,depth,parent)));

var G__25050 = seq__24992_25045;
var G__25051 = chunk__24993_25046;
var G__25052 = count__24994_25047;
var G__25053 = (i__24995_25048 + (1));
seq__24992_25045 = G__25050;
chunk__24993_25046 = G__25051;
count__24994_25047 = G__25052;
i__24995_25048 = G__25053;
continue;
} else {
var temp__4657__auto___25054__$1 = cljs.core.seq.call(null,seq__24992_25045);
if(temp__4657__auto___25054__$1){
var seq__24992_25055__$1 = temp__4657__auto___25054__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24992_25055__$1)){
var c__21059__auto___25056 = cljs.core.chunk_first.call(null,seq__24992_25055__$1);
var G__25057 = cljs.core.chunk_rest.call(null,seq__24992_25055__$1);
var G__25058 = c__21059__auto___25056;
var G__25059 = cljs.core.count.call(null,c__21059__auto___25056);
var G__25060 = (0);
seq__24992_25045 = G__25057;
chunk__24993_25046 = G__25058;
count__24994_25047 = G__25059;
i__24995_25048 = G__25060;
continue;
} else {
var angle2_25061 = cljs.core.first.call(null,seq__24992_25055__$1);
active.push((new generative.compute.Branch(x,y,z,r,angle1_25044,angle2_25061,depth,parent)));

var G__25062 = cljs.core.next.call(null,seq__24992_25055__$1);
var G__25063 = null;
var G__25064 = (0);
var G__25065 = (0);
seq__24992_25045 = G__25062;
chunk__24993_25046 = G__25063;
count__24994_25047 = G__25064;
i__24995_25048 = G__25065;
continue;
}
} else {
}
}
break;
}

var G__25066 = cljs.core.next.call(null,seq__24991_25038__$1);
var G__25067 = null;
var G__25068 = (0);
var G__25069 = (0);
seq__24991_25007 = G__25066;
chunk__24996_25008 = G__25067;
count__24997_25009 = G__25068;
i__24998_25010 = G__25069;
continue;
}
} else {
}
}
break;
}

var seq__25003_25070 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),max_branch_count));
var chunk__25004_25071 = null;
var count__25005_25072 = (0);
var i__25006_25073 = (0);
while(true){
if((i__25006_25073 < count__25005_25072)){
var i_25074 = cljs.core._nth.call(null,chunk__25004_25071,i__25006_25073);
var first_25075 = (active[i_25074]);
var x_25076__$1 = first_25075.x;
var y_25077__$1 = first_25075.y;
var r_25078__$1 = first_25075.radius;
var angle1_25079 = first_25075.angle1;
var angle2_25080 = first_25075.angle2;
var depth_25081__$1 = first_25075.depth;
generative.compute.compute_next2.call(null,settings,active,x_25076__$1,y_25077__$1,z,r_25078__$1,angle1_25079,angle2_25080,depth_25081__$1,i_25074);

var G__25082 = seq__25003_25070;
var G__25083 = chunk__25004_25071;
var G__25084 = count__25005_25072;
var G__25085 = (i__25006_25073 + (1));
seq__25003_25070 = G__25082;
chunk__25004_25071 = G__25083;
count__25005_25072 = G__25084;
i__25006_25073 = G__25085;
continue;
} else {
var temp__4657__auto___25086 = cljs.core.seq.call(null,seq__25003_25070);
if(temp__4657__auto___25086){
var seq__25003_25087__$1 = temp__4657__auto___25086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25003_25087__$1)){
var c__21059__auto___25088 = cljs.core.chunk_first.call(null,seq__25003_25087__$1);
var G__25089 = cljs.core.chunk_rest.call(null,seq__25003_25087__$1);
var G__25090 = c__21059__auto___25088;
var G__25091 = cljs.core.count.call(null,c__21059__auto___25088);
var G__25092 = (0);
seq__25003_25070 = G__25089;
chunk__25004_25071 = G__25090;
count__25005_25072 = G__25091;
i__25006_25073 = G__25092;
continue;
} else {
var i_25093 = cljs.core.first.call(null,seq__25003_25087__$1);
var first_25094 = (active[i_25093]);
var x_25095__$1 = first_25094.x;
var y_25096__$1 = first_25094.y;
var r_25097__$1 = first_25094.radius;
var angle1_25098 = first_25094.angle1;
var angle2_25099 = first_25094.angle2;
var depth_25100__$1 = first_25094.depth;
generative.compute.compute_next2.call(null,settings,active,x_25095__$1,y_25096__$1,z,r_25097__$1,angle1_25098,angle2_25099,depth_25100__$1,i_25093);

var G__25101 = cljs.core.next.call(null,seq__25003_25087__$1);
var G__25102 = null;
var G__25103 = (0);
var G__25104 = (0);
seq__25003_25070 = G__25101;
chunk__25004_25071 = G__25102;
count__25005_25072 = G__25103;
i__25006_25073 = G__25104;
continue;
}
} else {
}
}
break;
}

return active;
});

//# sourceMappingURL=compute.js.map