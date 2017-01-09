// Compiled by ClojureScript 1.9.89 {}
goog.provide('generative.graphics');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.pprint');
goog.require('generative.compute');
cljs.core.enable_console_print_BANG_.call(null);
generative.graphics.inv_initial_radius = (1.0 / new cljs.core.Keyword(null,"initial-radius","initial-radius",-2031697685).cljs$core$IFn$_invoke$arity$1(generative.compute.default_settings));
generative.graphics.line_alpha_multiplier = 1.5;
generative.graphics.rgb = (function generative$graphics$rgb(red,green,blue){
var red__$1 = (((255) * (function (){var x__20586__auto__ = red;
var y__20587__auto__ = 1.0;
return ((x__20586__auto__ < y__20587__auto__) ? x__20586__auto__ : y__20587__auto__);
})()) | (0));
var green__$1 = (((255) * (function (){var x__20586__auto__ = green;
var y__20587__auto__ = 1.0;
return ((x__20586__auto__ < y__20587__auto__) ? x__20586__auto__ : y__20587__auto__);
})()) | (0));
var blue__$1 = (((255) * (function (){var x__20586__auto__ = blue;
var y__20587__auto__ = 1.0;
return ((x__20586__auto__ < y__20587__auto__) ? x__20586__auto__ : y__20587__auto__);
})()) | (0));
return (((red__$1 << (16)) + (green__$1 << (8))) + blue__$1);
});
generative.graphics.render_graphics = (function generative$graphics$render_graphics(stage,width,height){
var data = generative.compute.compute.call(null,generative.compute.default_settings);
var graphics = (new PIXI.Graphics());
stage.removeChildren((0));

var i_25107 = (0);
while(true){
if((i_25107 < data.length)){
var current_branch_25108 = (data[i_25107]);
var __25109 = (((current_branch_25108 == null))?cljs.core.println.call(null,"I",i_25107):null);
var x_25110 = current_branch_25108.x;
var y_25111 = current_branch_25108.y;
var r_25112 = current_branch_25108.radius;
var parent_25113 = current_branch_25108.parent;
var parent_branch_25114 = (data[parent_25113]);
var prev_x_25115 = parent_branch_25114.x;
var prev_y_25116 = parent_branch_25114.y;
var scaled_x1_25117 = (prev_x_25115 * width);
var scaled_y1_25118 = (prev_y_25116 * height);
var scaled_x2_25119 = (x_25110 * width);
var scaled_y2_25120 = (y_25111 * height);
var line_width_25121 = ((r_25112 * width) * 0.15);
var line_color_25122 = generative.graphics.rgb.call(null,(1.0 - (r_25112 * generative.graphics.inv_initial_radius)),0.0,(r_25112 * generative.graphics.inv_initial_radius));
var line_alpha_25123 = ((r_25112 * generative.graphics.inv_initial_radius) * generative.graphics.line_alpha_multiplier);
graphics.lineStyle(line_width_25121,line_color_25122,line_alpha_25123);

graphics.moveTo(scaled_x1_25117,scaled_y1_25118);

graphics.lineTo(scaled_x2_25119,scaled_y2_25120);

var G__25124 = (i_25107 + (1));
i_25107 = G__25124;
continue;
} else {
}
break;
}

return stage.addChild(graphics);
});
generative.graphics.animate = (function generative$graphics$animate(state){
var pixi_renderer = cljs.core.deref.call(null,new cljs.core.Keyword("generative.graphics","pixi-renderer","generative.graphics/pixi-renderer",390520016).cljs$core$IFn$_invoke$arity$1(state));
var pixi_stage = cljs.core.deref.call(null,new cljs.core.Keyword("generative.graphics","pixi-stage","generative.graphics/pixi-stage",-561594477).cljs$core$IFn$_invoke$arity$1(state));
var mounted_QMARK_ = new cljs.core.Keyword("generative.graphics","mounted?","generative.graphics/mounted?",-1617126761).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(mounted_QMARK_)){
pixi_renderer.render(pixi_stage);

generative.graphics.render_graphics.call(null,pixi_stage,pixi_renderer.width,pixi_renderer.height);

return requestAnimationFrame(((function (pixi_renderer,pixi_stage,mounted_QMARK_){
return (function (){
return generative$graphics$animate.call(null,state);
});})(pixi_renderer,pixi_stage,mounted_QMARK_))
);
} else {
return null;
}
});
generative.graphics.attach_pixi_canvas = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var pixi_view = cljs.core.deref.call(null,new cljs.core.Keyword("generative.graphics","pixi-view","generative.graphics/pixi-view",-289907563).cljs$core$IFn$_invoke$arity$1(state));
var dom_node = comp._reactInternalInstance.getHostNode();
dom_node.appendChild(pixi_view);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.graphics","mounted?","generative.graphics/mounted?",-1617126761).cljs$core$IFn$_invoke$arity$1(state),true);

generative.graphics.animate.call(null,state);

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.graphics","mounted?","generative.graphics/mounted?",-1617126761).cljs$core$IFn$_invoke$arity$1(state),false);

return state;
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
cljs.core.println.call(null,"updated pixi canvas");

return state;
})], null);
generative.graphics.show_graphics = rum.core.build_defcs.call(null,(function (state,app_state,app_dispatch){
var graphics_cursor = rum.core.cursor_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphics","graphics",-2079995979)], null));
var graphics_state = rum.core.react.call(null,graphics_cursor);
var width = (800);
var height = (600);
var old_pixi_renderer = cljs.core.get_in.call(null,graphics_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-cache","ui-cache",-1735186865),new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409)], null));
var pixi_renderer = (function (){var or__20248__auto__ = old_pixi_renderer;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return (new PIXI.WebGLRenderer(width,height));
}
})();
var pixi_stage = (new PIXI.Container());
var should_update = ((old_pixi_renderer == null)) || ((cljs.core.deref.call(null,new cljs.core.Keyword("generative.graphics","pixi-view","generative.graphics/pixi-view",-289907563).cljs$core$IFn$_invoke$arity$1(state)) == null));
if(should_update){
cljs.core.println.call(null,"should-update was true");

app_dispatch.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphics","graphics",-2079995979),new cljs.core.Keyword(null,"ui-cache","ui-cache",-1735186865),new cljs.core.Keyword(null,"pixi-renderer","pixi-renderer",-2068429409)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assoc-once","assoc-once",-369305597),new cljs.core.Keyword(null,"data","data",-232669377),pixi_renderer], null));

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.graphics","pixi-renderer","generative.graphics/pixi-renderer",390520016).cljs$core$IFn$_invoke$arity$1(state),pixi_renderer);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.graphics","pixi-view","generative.graphics/pixi-view",-289907563).cljs$core$IFn$_invoke$arity$1(state),pixi_renderer.view);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.graphics","pixi-stage","generative.graphics/pixi-stage",-561594477).cljs$core$IFn$_invoke$arity$1(state),pixi_stage);

generative.graphics.render_graphics.call(null,pixi_stage,width,height);
} else {
}

return React.createElement("div",{"className": "pixi-root"});
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,generative.graphics.attach_pixi_canvas,rum.core.local.call(null,null,new cljs.core.Keyword("generative.graphics","pixi-view","generative.graphics/pixi-view",-289907563)),rum.core.local.call(null,null,new cljs.core.Keyword("generative.graphics","pixi-renderer","generative.graphics/pixi-renderer",390520016)),rum.core.local.call(null,null,new cljs.core.Keyword("generative.graphics","pixi-stage","generative.graphics/pixi-stage",-561594477)),rum.core.local.call(null,false,new cljs.core.Keyword("generative.graphics","mounted?","generative.graphics/mounted?",-1617126761))], null),"show-graphics");

//# sourceMappingURL=graphics.js.map