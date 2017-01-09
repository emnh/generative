// Compiled by ClojureScript 1.9.89 {}
goog.provide('generative.three');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.pprint');
goog.require('generative.compute');
generative.three.animate = (function generative$three$animate(state){
var three_renderer = cljs.core.deref.call(null,new cljs.core.Keyword("generative.three","three-renderer","generative.three/three-renderer",2099084487).cljs$core$IFn$_invoke$arity$1(state));
var three_scene = cljs.core.deref.call(null,new cljs.core.Keyword("generative.three","three-scene","generative.three/three-scene",1117444090).cljs$core$IFn$_invoke$arity$1(state));
var three_camera = cljs.core.deref.call(null,new cljs.core.Keyword("generative.three","three-camera","generative.three/three-camera",-158781619).cljs$core$IFn$_invoke$arity$1(state));
var generate_graphics = cljs.core.deref.call(null,new cljs.core.Keyword("generative.three","generate-graphics","generative.three/generate-graphics",1311104674).cljs$core$IFn$_invoke$arity$1(state));
var mounted_QMARK_ = new cljs.core.Keyword("generative.three","mounted?","generative.three/mounted?",-111135648).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(mounted_QMARK_)){
generate_graphics.call(null);

three_renderer.render(three_scene,three_camera);

return requestAnimationFrame(((function (three_renderer,three_scene,three_camera,generate_graphics,mounted_QMARK_){
return (function (){
return generative$three$animate.call(null,state);
});})(three_renderer,three_scene,three_camera,generate_graphics,mounted_QMARK_))
);
} else {
return null;
}
});
generative.three.attach_three_canvas = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var three_view = cljs.core.deref.call(null,new cljs.core.Keyword("generative.three","three-view","generative.three/three-view",-1739361875).cljs$core$IFn$_invoke$arity$1(state));
var dom_node = comp._reactInternalInstance.getHostNode();
dom_node.appendChild(three_view);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.three","mounted?","generative.three/mounted?",-111135648).cljs$core$IFn$_invoke$arity$1(state),true);

generative.three.animate.call(null,state);

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.three","mounted?","generative.three/mounted?",-111135648).cljs$core$IFn$_invoke$arity$1(state),false);

return state;
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
cljs.core.println.call(null,"updated three canvas");

return state;
})], null);
generative.three.vertex_shader = "\nuniform float time;\nattribute float lineIndex;\nattribute vec3 parentPosition;\nattribute vec3 nextPosition;\n\nvarying vec3 vColor;\n\n#define PI 3.1415926\n\nfloat random(float co) {\n  return fract(sin(co*12.989) * 43758.545);\n}\n\nfloat triangleWave(float time) {\n  float m = 1.0;\n  float x = m - abs(mod(time, 2.0 * m) - m);\n  return x;\n}\n\nvoid main() {\n  float factor = 1.0;\n  float at = atan(position.y, position.x);\n  float r = min(position.x / factor, 1.0);\n  float g = random(position.x + position.y + parentPosition.x + parentPosition.y);\n  float b = min(position.y / factor, 1.0);\n  //g = fract(g * time * 10.0);\n\n  //vColor = vec3(r, g, b);\n  vColor = vec3(r, g, b) + 0.2 * sin(time);\n\n  float rotation = -time + random(position.x + position.y + parentPosition.x + parentPosition.y);\n  //float rotation = -time + random(lineIndex);\n\n  mat4 rotationMat = mat4(cos(rotation), sin(rotation) * -1.0, 0.0, 0.0,\n                          sin(rotation), cos(rotation), 0.0, 0.0,\n                          0.0, 0.0, 1.0, 0.0,\n                          0.0, 0.0, 0.0, 1.0);\n\n  /*\n  mat4 xRotationMat = mat4(1.0, 0.0, 0.0, 0.0,\n                           0.0, cos(rotation), sin(rotation) * -1.0, 0.0,\n                           0.0, sin(rotation), cos(rotation), 0.0,\n                           0.0, 0.0, 0.0, 1.0);\n                           */\n\n  float z = 0.0;\n  vec4 pos1 = vec4(position.xy, z, 1.0);\n  vec4 pos2 = vec4(nextPosition.xy, z, 1.0);\n  vec4 rotpos1 = pos1 * rotationMat;\n  //vec4 rotpos2 *= rotationMat;\n\n  vec4 pos = mix(pos1, rotpos1, (sin(time) + 1.0) / 2.0);\n  //pos = rotpos1;\n  pos = mix(pos, pos2, (sin(time * 3.1337) + 1.0) / 2.0);\n  //pos = pos1;\n\n  //pos *= xRotationMat;\n\n  gl_Position = projectionMatrix * modelViewMatrix * pos;\n}\n";
generative.three.fragment_shader = "\n\nuniform vec2 resolution;\nuniform float time;\n\nvarying vec3 vColor;\n\nvoid main() {\n  //gl_FragColor = vec4(vColor, 4.0 / 256.0);\n  vec3 color = vColor;\n  vec2 xy = gl_FragCoord.xy / resolution.xy - 0.5;\n  gl_FragColor = vec4(color, 0.2);\n}\n";
generative.three.setup_geo = (function generative$three$setup_geo(width,height,data,data2){
var line_count = data.length;
var line_vertices = (3);
var vertex_count = (line_count * line_vertices);
var xyz_size = (3);
var geo = (new THREE.BufferGeometry());
var position = (new Float32Array((vertex_count * xyz_size)));
var position_attr = (new THREE.BufferAttribute(position,xyz_size));
var parent_position = (new Float32Array((vertex_count * xyz_size)));
var parent_position_attr = (new THREE.BufferAttribute(parent_position,xyz_size));
var next_position = (new Float32Array((vertex_count * xyz_size)));
var next_position_attr = (new THREE.BufferAttribute(next_position,xyz_size));
var line_index = (new Float32Array(vertex_count));
var line_index_attr = (new THREE.BufferAttribute(position,(1)));
var uniforms = {"time": {"value": 0.0}, "resolution": {"value": (new THREE.Vector2(width,height))}};
var material = (new THREE.ShaderMaterial({"uniforms": uniforms, "vertexShader": generative.three.vertex_shader, "fragmentShader": generative.three.fragment_shader, "transparent": true, "side": THREE.DoubleSide}));
var use_lines = true;
var lines = ((use_lines)?(new THREE.Line(geo,material)):(new THREE.Line((new THREE.Geometry()),material)));
var use_mesh = false;
var mesh = ((use_mesh)?(new THREE.Mesh(geo,material)):(new THREE.Mesh((new THREE.Geometry()),material)));
var lines_width = 15.0;
var lines_height = 15.0;
var lines_depth = 15.0;
var random = ((function (line_count,line_vertices,vertex_count,xyz_size,geo,position,position_attr,parent_position,parent_position_attr,next_position,next_position_attr,line_index,line_index_attr,uniforms,material,use_lines,lines,use_mesh,mesh,lines_width,lines_height,lines_depth){
return (function (){
return ((Math.random() * lines_width) - (lines_width / 2.0));
});})(line_count,line_vertices,vertex_count,xyz_size,geo,position,position_attr,parent_position,parent_position_attr,next_position,next_position_attr,line_index,line_index_attr,uniforms,material,use_lines,lines,use_mesh,mesh,lines_width,lines_height,lines_depth))
;
geo.addAttribute("position",position_attr);

geo.addAttribute("parentPosition",parent_position_attr);

geo.addAttribute("nextPosition",next_position_attr);

geo.addAttribute("lineIndex",line_index_attr);

var i_25129 = (0);
while(true){
if((i_25129 < line_count)){
var current_branch_25130 = (data[i_25129]);
var next_branch_25131 = (data2[i_25129]);
var x_25132 = current_branch_25130.x;
var y_25133 = current_branch_25130.y;
var z_25134 = current_branch_25130.z;
var next_x_25135 = next_branch_25131.x;
var next_y_25136 = next_branch_25131.y;
var next_z_25137 = next_branch_25131.z;
var parent_25138 = current_branch_25130.parent;
var next_parent_25139 = next_branch_25131.parent;
var parent_branch_25140 = (data[parent_25138]);
var next_parent_branch_25141 = (data2[next_parent_25139]);
var parent_x_25142 = parent_branch_25140.x;
var parent_y_25143 = parent_branch_25140.y;
var parent_z_25144 = parent_branch_25140.z;
var next_parent_x_25145 = next_parent_branch_25141.x;
var next_parent_y_25146 = next_parent_branch_25141.y;
var next_parent_z_25147 = next_parent_branch_25141.z;
var scaled_x1_25148 = ((parent_x_25142 * lines_width) - (lines_width / (2)));
var scaled_y1_25149 = ((parent_y_25143 * lines_height) - (lines_height / (2)));
var scaled_z1_25150 = ((parent_z_25144 * lines_depth) - (lines_depth / (2)));
var scaled_x2_25151 = ((x_25132 * lines_width) - (lines_width / (2)));
var scaled_y2_25152 = ((y_25133 * lines_height) - (lines_height / (2)));
var scaled_z2_25153 = ((z_25134 * lines_depth) - (lines_depth / (2)));
var next_scaled_x1_25154 = ((next_parent_x_25145 * lines_width) - (lines_width / (2)));
var next_scaled_y1_25155 = ((next_parent_y_25146 * lines_height) - (lines_height / (2)));
var next_scaled_z1_25156 = ((next_parent_z_25147 * lines_depth) - (lines_depth / (2)));
var next_scaled_x2_25157 = ((next_x_25135 * lines_width) - (lines_width / (2)));
var next_scaled_y2_25158 = ((next_y_25136 * lines_height) - (lines_height / (2)));
var next_scaled_z2_25159 = ((next_z_25137 * lines_depth) - (lines_depth / (2)));
var index_mul_25160 = (xyz_size * line_vertices);
var s_25161 = 0.01;
(line_index[((i_25129 * line_vertices) + (0))] = (i_25129 / line_count));

(line_index[((i_25129 * line_vertices) + (1))] = (i_25129 / line_count));

(line_index[((i_25129 * line_vertices) + (2))] = (i_25129 / line_count));

(position[((i_25129 * index_mul_25160) + (0))] = scaled_x1_25148);

(position[((i_25129 * index_mul_25160) + (1))] = scaled_y1_25149);

(position[((i_25129 * index_mul_25160) + (2))] = scaled_z1_25150);

(position[((i_25129 * index_mul_25160) + (3))] = scaled_x2_25151);

(position[((i_25129 * index_mul_25160) + (4))] = scaled_y2_25152);

(position[((i_25129 * index_mul_25160) + (5))] = scaled_z2_25153);

(position[((i_25129 * index_mul_25160) + (6))] = (scaled_x2_25151 + s_25161));

(position[((i_25129 * index_mul_25160) + (7))] = (scaled_y2_25152 + s_25161));

(position[((i_25129 * index_mul_25160) + (8))] = (scaled_z2_25153 + s_25161));

(next_position[((i_25129 * index_mul_25160) + (0))] = next_scaled_x1_25154);

(next_position[((i_25129 * index_mul_25160) + (1))] = next_scaled_y1_25155);

(next_position[((i_25129 * index_mul_25160) + (2))] = next_scaled_z1_25156);

(next_position[((i_25129 * index_mul_25160) + (3))] = next_scaled_x2_25157);

(next_position[((i_25129 * index_mul_25160) + (4))] = next_scaled_y2_25158);

(next_position[((i_25129 * index_mul_25160) + (5))] = next_scaled_z2_25159);

(next_position[((i_25129 * index_mul_25160) + (6))] = next_scaled_x2_25157);

(next_position[((i_25129 * index_mul_25160) + (7))] = next_scaled_y2_25158);

(next_position[((i_25129 * index_mul_25160) + (8))] = next_scaled_z2_25159);

(parent_position[((i_25129 * index_mul_25160) + (0))] = scaled_x2_25151);

(parent_position[((i_25129 * index_mul_25160) + (1))] = scaled_y2_25152);

(parent_position[((i_25129 * index_mul_25160) + (2))] = scaled_z2_25153);

(parent_position[((i_25129 * index_mul_25160) + (3))] = scaled_x1_25148);

(parent_position[((i_25129 * index_mul_25160) + (4))] = scaled_y1_25149);

(parent_position[((i_25129 * index_mul_25160) + (5))] = scaled_z1_25150);

(parent_position[((i_25129 * index_mul_25160) + (6))] = (scaled_x1_25148 + s_25161));

(parent_position[((i_25129 * index_mul_25160) + (7))] = (scaled_y1_25149 + s_25161));

(parent_position[((i_25129 * index_mul_25160) + (8))] = (scaled_z1_25150 + s_25161));

var G__25162 = (i_25129 + (1));
i_25129 = G__25162;
continue;
} else {
}
break;
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),lines,new cljs.core.Keyword(null,"mesh","mesh",456320595),mesh,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),uniforms], null);
});
generative.three.generate_graphics = (function generative$three$generate_graphics(width,height,parent){
cljs.core.println.call(null,"generate-graphics");

var data = generative.compute.compute.call(null,generative.compute.default_settings);
var data2 = generative.compute.compute.call(null,generative.compute.default_settings);
var geo = generative.three.setup_geo.call(null,width,height,data,data2);
var uniforms = cljs.core.atom.call(null,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(geo));
var start_time = (function (){var new_time = (new Date()).getTime();
return (new_time / 1000.0);
})();
var get_time = ((function (data,data2,geo,uniforms,start_time){
return (function (){
var new_time = (new Date()).getTime();
return ((new_time / 1000.0) - start_time);
});})(data,data2,geo,uniforms,start_time))
;
var old_time = cljs.core.atom.call(null,get_time.call(null));
var old_data = cljs.core.atom.call(null,data);
var new_data = cljs.core.atom.call(null,data2);
var interval = 3600.0;
var set_new_lines = ((function (data,data2,geo,uniforms,start_time,get_time,old_time,old_data,new_data,interval){
return (function (lines,mesh){
var seq__25167_25171 = cljs.core.seq.call(null,parent.children);
var chunk__25168_25172 = null;
var count__25169_25173 = (0);
var i__25170_25174 = (0);
while(true){
if((i__25170_25174 < count__25169_25173)){
var child_25175 = cljs.core._nth.call(null,chunk__25168_25172,i__25170_25174);
parent.remove(child_25175);

var G__25176 = seq__25167_25171;
var G__25177 = chunk__25168_25172;
var G__25178 = count__25169_25173;
var G__25179 = (i__25170_25174 + (1));
seq__25167_25171 = G__25176;
chunk__25168_25172 = G__25177;
count__25169_25173 = G__25178;
i__25170_25174 = G__25179;
continue;
} else {
var temp__4657__auto___25180 = cljs.core.seq.call(null,seq__25167_25171);
if(temp__4657__auto___25180){
var seq__25167_25181__$1 = temp__4657__auto___25180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25167_25181__$1)){
var c__21059__auto___25182 = cljs.core.chunk_first.call(null,seq__25167_25181__$1);
var G__25183 = cljs.core.chunk_rest.call(null,seq__25167_25181__$1);
var G__25184 = c__21059__auto___25182;
var G__25185 = cljs.core.count.call(null,c__21059__auto___25182);
var G__25186 = (0);
seq__25167_25171 = G__25183;
chunk__25168_25172 = G__25184;
count__25169_25173 = G__25185;
i__25170_25174 = G__25186;
continue;
} else {
var child_25187 = cljs.core.first.call(null,seq__25167_25181__$1);
parent.remove(child_25187);

var G__25188 = cljs.core.next.call(null,seq__25167_25181__$1);
var G__25189 = null;
var G__25190 = (0);
var G__25191 = (0);
seq__25167_25171 = G__25188;
chunk__25168_25172 = G__25189;
count__25169_25173 = G__25190;
i__25170_25174 = G__25191;
continue;
}
} else {
}
}
break;
}

parent.add(lines);

return parent.add(mesh);
});})(data,data2,geo,uniforms,start_time,get_time,old_time,old_data,new_data,interval))
;
var update_fn = ((function (data,data2,geo,uniforms,start_time,get_time,old_time,old_data,new_data,interval,set_new_lines){
return (function (){
var new_time = get_time.call(null);
var time_diff = (new_time - cljs.core.deref.call(null,old_time));
cljs.core.deref.call(null,uniforms).time.value = new_time;

if((time_diff > interval)){
cljs.core.println.call(null,"generating new data at time",new_time);

cljs.core.reset_BANG_.call(null,old_time,new_time);

cljs.core.reset_BANG_.call(null,old_data,cljs.core.deref.call(null,new_data));

var new_settings_25192 = generative.compute.default_settings;
cljs.core.reset_BANG_.call(null,new_data,generative.compute.compute.call(null,new_settings_25192));

var geo__$1 = generative.three.setup_geo.call(null,width,height,cljs.core.deref.call(null,old_data),cljs.core.deref.call(null,new_data));
set_new_lines.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(geo__$1),new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(geo__$1));

return cljs.core.reset_BANG_.call(null,uniforms,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(geo__$1));
} else {
return null;
}
});})(data,data2,geo,uniforms,start_time,get_time,old_time,old_data,new_data,interval,set_new_lines))
;
set_new_lines.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(geo),new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(geo));

return update_fn;
});
generative.three.show_three = rum.core.build_defcs.call(null,(function (state,app_state,app_dispatch){
var graphics_cursor = rum.core.cursor_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"three","three",-1651831795)], null));
var graphics_state = rum.core.react.call(null,graphics_cursor);
var width = (1600);
var height = (800);
var old_three_renderer = cljs.core.get_in.call(null,graphics_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-cache","ui-cache",-1735186865),new cljs.core.Keyword(null,"three-renderer","three-renderer",808169183)], null));
var three_renderer = (function (){var or__20248__auto__ = old_three_renderer;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return (new THREE.WebGLRenderer());
}
})();
var three_scene = (new THREE.Scene());
var view_angle = (45);
var aspect = (width / height);
var near = 0.1;
var far = (10000);
var origin = (new THREE.Vector3((0),(0),(0)));
var three_camera = (new THREE.PerspectiveCamera(view_angle,aspect,near,far));
var should_update = ((old_three_renderer == null)) || ((cljs.core.deref.call(null,new cljs.core.Keyword("generative.three","three-view","generative.three/three-view",-1739361875).cljs$core$IFn$_invoke$arity$1(state)) == null));
if(should_update){
cljs.core.println.call(null,"should-update was true");

app_dispatch.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"three","three",-1651831795),new cljs.core.Keyword(null,"ui-cache","ui-cache",-1735186865),new cljs.core.Keyword(null,"three-renderer","three-renderer",808169183)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assoc-once","assoc-once",-369305597),new cljs.core.Keyword(null,"data","data",-232669377),three_renderer], null));

three_renderer.setSize(width,height);

three_scene.add(three_camera);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.three","three-renderer","generative.three/three-renderer",2099084487).cljs$core$IFn$_invoke$arity$1(state),three_renderer);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.three","three-view","generative.three/three-view",-1739361875).cljs$core$IFn$_invoke$arity$1(state),three_renderer.domElement);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.three","three-camera","generative.three/three-camera",-158781619).cljs$core$IFn$_invoke$arity$1(state),three_camera);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.three","three-scene","generative.three/three-scene",1117444090).cljs$core$IFn$_invoke$arity$1(state),three_scene);

$("#video").hide();

three_camera.position.z = -20.0;

three_camera.lookAt(origin);

var light_25195 = (new THREE.AmbientLight((16777215),1.0));
var parent_25196 = (new THREE.Object3D());
var update_fn_25197 = generative.three.generate_graphics.call(null,width,height,parent_25196);
three_scene.add(light_25195);

three_scene.add(parent_25196);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword("generative.three","generate-graphics","generative.three/generate-graphics",1311104674).cljs$core$IFn$_invoke$arity$1(state),update_fn_25197);
} else {
}

return React.createElement("div",{"className": "pixi-root"});
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,generative.three.attach_three_canvas,rum.core.local.call(null,null,new cljs.core.Keyword("generative.three","three-view","generative.three/three-view",-1739361875)),rum.core.local.call(null,null,new cljs.core.Keyword("generative.three","three-renderer","generative.three/three-renderer",2099084487)),rum.core.local.call(null,null,new cljs.core.Keyword("generative.three","three-scene","generative.three/three-scene",1117444090)),rum.core.local.call(null,null,new cljs.core.Keyword("generative.three","three-camera","generative.three/three-camera",-158781619)),rum.core.local.call(null,null,new cljs.core.Keyword("generative.three","generate-graphics","generative.three/generate-graphics",1311104674)),rum.core.local.call(null,false,new cljs.core.Keyword("generative.three","mounted?","generative.three/mounted?",-111135648))], null),"show-three");

//# sourceMappingURL=three.js.map