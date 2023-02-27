"use strict";(self.webpackChunkowncast_admin=self.webpackChunkowncast_admin||[]).push([[9811],{"./node_modules/lodash-es/_getPrototype.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/lodash-es/_overArg.js").Z)(Object.getPrototypeOf,Object)},"./node_modules/lodash-es/isPlainObject.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash-es/_baseGetTag.js"),_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash-es/_getPrototype.js"),_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash-es/isObjectLike.js"),objectTag="[object Object]",funcProto=Function.prototype,objectProto=Object.prototype,funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectCtorString=funcToString.call(Object);const __WEBPACK_DEFAULT_EXPORT__=function isPlainObject(value){if(!(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__.Z)(value)||(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__.Z)(value)!=objectTag)return!1;var proto=(0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__.Z)(value);if(null===proto)return!0;var Ctor=hasOwnProperty.call(proto,"constructor")&&proto.constructor;return"function"==typeof Ctor&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString}},"./node_modules/mermaid/dist/flowchart-elk-definition-99086e81.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{diagram:()=>diagram});var _flowDb_e993bcaf_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/mermaid/dist/flowDb-e993bcaf.js"),d3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3/src/index.js"),_edges_02da71a2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/mermaid/dist/edges-02da71a2.js"),dagre_d3_es_src_dagre_js_label_add_html_label_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/dagre-d3-es/src/dagre-js/label/add-html-label.js"),_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/mermaid/dist/config-5161385b.js"),_setupGraphViewbox_e1099da8_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/mermaid/dist/setupGraphViewbox-e1099da8.js"),_utils_3cbdbddf_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/mermaid/dist/utils-3cbdbddf.js");__webpack_require__("./node_modules/dompurify/dist/purify.js"),__webpack_require__("./node_modules/moment-mini/moment.min.js"),__webpack_require__("./node_modules/@braintree/sanitize-url/dist/index.js");let elk;const portPos={},conf={};let nodeDb={};const getNextPosition=(position,edgeDirection,graphDirection)=>{const portPos2={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return portPos2.TD=portPos2.TB,_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("abc88",graphDirection,edgeDirection,position),portPos2[graphDirection][edgeDirection][position]},getNextPort=(node,edgeDirection,graphDirection)=>{if(_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("getNextPort abc88",{node,edgeDirection,graphDirection}),!portPos[node])switch(graphDirection){case"TB":case"TD":portPos[node]={inPosition:"north",outPosition:"south"};break;case"BT":portPos[node]={inPosition:"south",outPosition:"north"};break;case"RL":portPos[node]={inPosition:"east",outPosition:"west"};break;case"LR":portPos[node]={inPosition:"west",outPosition:"east"}}const result="in"===edgeDirection?portPos[node].inPosition:portPos[node].outPosition;return"in"===edgeDirection?portPos[node].inPosition=getNextPosition(portPos[node].inPosition,edgeDirection,graphDirection):portPos[node].outPosition=getNextPosition(portPos[node].outPosition,edgeDirection,graphDirection),result},addEdges=function(edges,diagObj,graph,svg){_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("abc78 edges = ",edges);const labelsEl=svg.insert("g").attr("class","edgeLabels");let defaultStyle,defaultLabelStyle,linkIdCnt={},dir=diagObj.db.getDirection();if(void 0!==edges.defaultStyle){const defaultStyles=(0,_utils_3cbdbddf_js__WEBPACK_IMPORTED_MODULE_4__.m)(edges.defaultStyle);defaultStyle=defaultStyles.style,defaultLabelStyle=defaultStyles.labelStyle}return edges.forEach((function(edge){var linkIdBase="L-"+edge.start+"-"+edge.end;void 0===linkIdCnt[linkIdBase]?(linkIdCnt[linkIdBase]=0,_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("abc78 new entry",linkIdBase,linkIdCnt[linkIdBase])):(linkIdCnt[linkIdBase]++,_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("abc78 new entry",linkIdBase,linkIdCnt[linkIdBase]));let linkId=linkIdBase+"-"+linkIdCnt[linkIdBase];_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("abc78 new link id to be used is",linkIdBase,linkId,linkIdCnt[linkIdBase]);var linkNameStart="LS-"+edge.start,linkNameEnd="LE-"+edge.end;const edgeData={style:"",labelStyle:""};switch(edgeData.minlen=edge.length||1,"arrow_open"===edge.type?edgeData.arrowhead="none":edgeData.arrowhead="normal",edgeData.arrowTypeStart="arrow_open",edgeData.arrowTypeEnd="arrow_open",edge.type){case"double_arrow_cross":edgeData.arrowTypeStart="arrow_cross";case"arrow_cross":edgeData.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":edgeData.arrowTypeStart="arrow_point";case"arrow_point":edgeData.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":edgeData.arrowTypeStart="arrow_circle";case"arrow_circle":edgeData.arrowTypeEnd="arrow_circle"}let style="",labelStyle="";switch(edge.stroke){case"normal":style="fill:none;",void 0!==defaultStyle&&(style=defaultStyle),void 0!==defaultLabelStyle&&(labelStyle=defaultLabelStyle),edgeData.thickness="normal",edgeData.pattern="solid";break;case"dotted":edgeData.thickness="normal",edgeData.pattern="dotted",edgeData.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":edgeData.thickness="thick",edgeData.pattern="solid",edgeData.style="stroke-width: 3.5px;fill:none;"}if(void 0!==edge.style){const styles2=(0,_utils_3cbdbddf_js__WEBPACK_IMPORTED_MODULE_4__.m)(edge.style);style=styles2.style,labelStyle=styles2.labelStyle}edgeData.style=edgeData.style+=style,edgeData.labelStyle=edgeData.labelStyle+=labelStyle,void 0!==edge.interpolate?edgeData.curve=(0,_utils_3cbdbddf_js__WEBPACK_IMPORTED_MODULE_4__.n)(edge.interpolate,d3__WEBPACK_IMPORTED_MODULE_0__.c_6):void 0!==edges.defaultInterpolate?edgeData.curve=(0,_utils_3cbdbddf_js__WEBPACK_IMPORTED_MODULE_4__.n)(edges.defaultInterpolate,d3__WEBPACK_IMPORTED_MODULE_0__.c_6):edgeData.curve=(0,_utils_3cbdbddf_js__WEBPACK_IMPORTED_MODULE_4__.n)(conf.curve,d3__WEBPACK_IMPORTED_MODULE_0__.c_6),void 0===edge.text?void 0!==edge.style&&(edgeData.arrowheadStyle="fill: #333"):(edgeData.arrowheadStyle="fill: #333",edgeData.labelpos="c"),edgeData.labelType="text",edgeData.label=edge.text.replace(_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.d.lineBreakRegex,"\n"),void 0===edge.style&&(edgeData.style=edgeData.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),edgeData.labelStyle=edgeData.labelStyle.replace("color:","fill:"),edgeData.id=linkId,edgeData.classes="flowchart-link "+linkNameStart+" "+linkNameEnd;const labelEl=(0,_edges_02da71a2_js__WEBPACK_IMPORTED_MODULE_7__.f)(labelsEl,edgeData),{source,target}=((edge,dir)=>{let source=edge.start,target=edge.end;const startNode=nodeDb[source],endNode=nodeDb[target];return startNode&&endNode?("diamond"===startNode.type&&(source=`${source}-${getNextPort(source,"out",dir)}`),"diamond"===endNode.type&&(target=`${target}-${getNextPort(target,"in",dir)}`),{source,target}):{source,target}})(edge,dir);_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.debug("abc78 source and target",source,target),graph.edges.push({id:"e"+edge.start+edge.end,sources:[source],targets:[target],labelEl,labels:[{width:edgeData.width,height:edgeData.height,orgWidth:edgeData.width,orgHeight:edgeData.height,text:edgeData.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData})})),graph},calcOffset=function(src,dest,parentLookupDb){const ancestor=((id1,id2,treeData)=>{const{parentById}=treeData,visited=new Set;let currentId=id1;for(;currentId;){if(visited.add(currentId),currentId===id2)return currentId;currentId=parentById[currentId]}for(currentId=id2;currentId;){if(visited.has(currentId))return currentId;currentId=parentById[currentId]}return"root"})(src,dest,parentLookupDb);if(void 0===ancestor||"root"===ancestor)return{x:0,y:0};const ancestorOffset=nodeDb[ancestor].offset;return{x:ancestorOffset.posX,y:ancestorOffset.posY}},insertEdge=function(edgesEl,edge,edgeData,diagObj,parentLookupDb){const offset=calcOffset(edge.sources[0],edge.targets[0],parentLookupDb),src=edge.sections[0].startPoint,dest=edge.sections[0].endPoint,segPoints=(edge.sections[0].bendPoints?edge.sections[0].bendPoints:[]).map((segment=>[segment.x+offset.x,segment.y+offset.y])),points=[[src.x+offset.x,src.y+offset.y],...segPoints,[dest.x+offset.x,dest.y+offset.y]],curve=(0,d3__WEBPACK_IMPORTED_MODULE_0__.jvg)().curve(d3__WEBPACK_IMPORTED_MODULE_0__.c_6),edgePath=edgesEl.insert("path").attr("d",curve(points)).attr("class","path").attr("fill","none"),edgeG=edgesEl.insert("g").attr("class","edgeLabel"),edgeWithLabel=(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)(edgeG.node().appendChild(edge.labelEl)),box=edgeWithLabel.node().firstChild.getBoundingClientRect();edgeWithLabel.attr("width",box.width),edgeWithLabel.attr("height",box.height),edgeG.attr("transform",`translate(${edge.labels[0].x+offset.x}, ${edge.labels[0].y+offset.y})`),function(svgPath,edgeData,diagramType,arrowMarkerAbsolute){let url="";switch(arrowMarkerAbsolute&&(url=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,url=url.replace(/\(/g,"\\("),url=url.replace(/\)/g,"\\)")),edgeData.arrowTypeStart){case"arrow_cross":svgPath.attr("marker-start","url("+url+"#"+diagramType+"-crossStart)");break;case"arrow_point":svgPath.attr("marker-start","url("+url+"#"+diagramType+"-pointStart)");break;case"arrow_barb":svgPath.attr("marker-start","url("+url+"#"+diagramType+"-barbStart)");break;case"arrow_circle":svgPath.attr("marker-start","url("+url+"#"+diagramType+"-circleStart)");break;case"aggregation":svgPath.attr("marker-start","url("+url+"#"+diagramType+"-aggregationStart)");break;case"extension":svgPath.attr("marker-start","url("+url+"#"+diagramType+"-extensionStart)");break;case"composition":svgPath.attr("marker-start","url("+url+"#"+diagramType+"-compositionStart)");break;case"dependency":svgPath.attr("marker-start","url("+url+"#"+diagramType+"-dependencyStart)");break;case"lollipop":svgPath.attr("marker-start","url("+url+"#"+diagramType+"-lollipopStart)")}switch(edgeData.arrowTypeEnd){case"arrow_cross":svgPath.attr("marker-end","url("+url+"#"+diagramType+"-crossEnd)");break;case"arrow_point":svgPath.attr("marker-end","url("+url+"#"+diagramType+"-pointEnd)");break;case"arrow_barb":svgPath.attr("marker-end","url("+url+"#"+diagramType+"-barbEnd)");break;case"arrow_circle":svgPath.attr("marker-end","url("+url+"#"+diagramType+"-circleEnd)");break;case"aggregation":svgPath.attr("marker-end","url("+url+"#"+diagramType+"-aggregationEnd)");break;case"extension":svgPath.attr("marker-end","url("+url+"#"+diagramType+"-extensionEnd)");break;case"composition":svgPath.attr("marker-end","url("+url+"#"+diagramType+"-compositionEnd)");break;case"dependency":svgPath.attr("marker-end","url("+url+"#"+diagramType+"-dependencyEnd)");break;case"lollipop":svgPath.attr("marker-end","url("+url+"#"+diagramType+"-lollipopEnd)")}}(edgePath,edgeData,diagObj.type,diagObj.arrowMarkerAbsolute)},insertChildren=(nodeArray,parentLookupDb)=>{nodeArray.forEach((node=>{node.children||(node.children=[]);const childIds=parentLookupDb.childrenById[node.id];childIds&&childIds.forEach((childId=>{node.children.push(nodeDb[childId])})),insertChildren(node.children,parentLookupDb)}))},drawNodes=(relX,relY,nodeArray,svg,subgraphsEl,diagObj,depth)=>{nodeArray.forEach((function(node){if(node)if(nodeDb[node.id].offset={posX:node.x+relX,posY:node.y+relY,x:relX,y:relY,depth,width:node.width,height:node.height},"group"===node.type){const subgraphEl=subgraphsEl.insert("g").attr("class","subgraph");subgraphEl.insert("rect").attr("class","subgraph subgraph-lvl-"+depth%5+" node").attr("x",node.x+relX).attr("y",node.y+relY).attr("width",node.width).attr("height",node.height);const label=subgraphEl.insert("g").attr("class","label");label.attr("transform",`translate(${node.labels[0].x+relX+node.x}, ${node.labels[0].y+relY+node.y})`),label.node().appendChild(node.labelData.labelNode),_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("Id (UGH)= ",node.type,node.labels)}else _config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("Id (UGH)= ",node.id),node.el.attr("transform",`translate(${node.x+relX+node.width/2}, ${node.y+relY+node.height/2})`)})),nodeArray.forEach((function(node){node&&"group"===node.type&&drawNodes(relX+node.x,relY+node.y,node.children,svg,subgraphsEl,diagObj,depth+1)}))},renderer={getClasses:function(text,diagObj){_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("Extracting classes"),diagObj.db.clear("ver-2");try{return diagObj.parse(text),diagObj.db.getClasses()}catch(e){return{}}},draw:async function(text,id,_version,diagObj){var _a;if(!elk){const ELK=(await __webpack_require__.e(7295).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/elkjs/lib/elk.bundled.js",19))).default;elk=new ELK}diagObj.db.clear(),nodeDb={},diagObj.db.setGen("gen-2"),diagObj.parser.parse(text);const renderEl=(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)("body").append("div").attr("style","height:400px").attr("id","cy");let graph={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("Drawing flowchart using v3 renderer",elk),diagObj.db.getDirection()){case"BT":graph.layoutOptions["elk.direction"]="UP";break;case"TB":graph.layoutOptions["elk.direction"]="DOWN";break;case"LR":graph.layoutOptions["elk.direction"]="RIGHT";break;case"RL":graph.layoutOptions["elk.direction"]="LEFT"}const{securityLevel,flowchart:conf2}=(0,_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.g)();let sandboxElement;"sandbox"===securityLevel&&(sandboxElement=(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)("#i"+id));const root="sandbox"===securityLevel?(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)(sandboxElement.nodes()[0].contentDocument.body):(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)("body"),doc="sandbox"===securityLevel?sandboxElement.nodes()[0].contentDocument:document,svg=root.select(`[id="${id}"]`);(0,_edges_02da71a2_js__WEBPACK_IMPORTED_MODULE_7__.a)(svg,["point","circle","cross"],diagObj.type,diagObj.arrowMarkerAbsolute);const vert=diagObj.db.getVertices();let subG;const subGraphs=diagObj.db.getSubGraphs();_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("Subgraphs - ",subGraphs);for(let i=subGraphs.length-1;i>=0;i--)subG=subGraphs[i],diagObj.db.addVertex(subG.id,subG.title,"group",void 0,subG.classes,subG.dir);const subGraphsEl=svg.insert("g").attr("class","subgraphs"),parentLookupDb=function(db2){const parentLookupDb={parentById:{},childrenById:{}},subgraphs=db2.getSubGraphs();return _config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("Subgraphs - ",subgraphs),subgraphs.forEach((function(subgraph){subgraph.nodes.forEach((function(node){parentLookupDb.parentById[node]=subgraph.id,void 0===parentLookupDb.childrenById[subgraph.id]&&(parentLookupDb.childrenById[subgraph.id]=[]),parentLookupDb.childrenById[subgraph.id].push(node)}))})),subgraphs.forEach((function(subgraph){subgraph.id,void 0!==parentLookupDb.parentById[subgraph.id]&&parentLookupDb.parentById[subgraph.id]})),parentLookupDb}(diagObj.db);graph=function(vert,svgId,root,doc,diagObj,parentLookupDb,graph){const svg=root.select(`[id="${svgId}"]`),nodes=svg.insert("g").attr("class","nodes");return Object.keys(vert).forEach((function(id){const vertex=vert[id];let classStr="default";vertex.classes.length>0&&(classStr=vertex.classes.join(" "));const styles2=(0,_utils_3cbdbddf_js__WEBPACK_IMPORTED_MODULE_4__.m)(vertex.styles);let vertexNode,vertexText=void 0!==vertex.text?vertex.text:vertex.id;const labelData={width:0,height:0};if((0,_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.j)((0,_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.g)().flowchart.htmlLabels)){const node2={label:vertexText.replace(/fa[blrs]?:fa-[\w-]+/g,(s=>`<i class='${s.replace(":"," ")}'></i>`))};vertexNode=(0,dagre_d3_es_src_dagre_js_label_add_html_label_js__WEBPACK_IMPORTED_MODULE_6__.a)(svg,node2).node();const bbox=vertexNode.getBBox();labelData.width=bbox.width,labelData.height=bbox.height,labelData.labelNode=vertexNode,vertexNode.parentNode.removeChild(vertexNode)}else{const svgLabel=doc.createElementNS("http://www.w3.org/2000/svg","text");svgLabel.setAttribute("style",styles2.labelStyle.replace("color:","fill:"));const rows=vertexText.split(_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.d.lineBreakRegex);for(const row of rows){const tspan=doc.createElementNS("http://www.w3.org/2000/svg","tspan");tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),tspan.setAttribute("dy","1em"),tspan.setAttribute("x","1"),tspan.textContent=row,svgLabel.appendChild(tspan)}vertexNode=svgLabel;const bbox=vertexNode.getBBox();labelData.width=bbox.width,labelData.height=bbox.height,labelData.labelNode=vertexNode}const ports=[{id:vertex.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:vertex.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:vertex.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:vertex.id+"-north",layoutOptions:{"port.side":"NORTH"}}];let radious=0,_shape="",layoutOptions={};switch(vertex.type){case"round":radious=5,_shape="rect";break;case"square":case"group":default:_shape="rect";break;case"diamond":_shape="question",layoutOptions={portConstraints:"FIXED_SIDE"};break;case"hexagon":_shape="hexagon";break;case"odd":case"odd_right":_shape="rect_left_inv_arrow";break;case"lean_right":_shape="lean_right";break;case"lean_left":_shape="lean_left";break;case"trapezoid":_shape="trapezoid";break;case"inv_trapezoid":_shape="inv_trapezoid";break;case"circle":_shape="circle";break;case"ellipse":_shape="ellipse";break;case"stadium":_shape="stadium";break;case"subroutine":_shape="subroutine";break;case"cylinder":_shape="cylinder";break;case"doublecircle":_shape="doublecircle"}const node={labelStyle:styles2.labelStyle,shape:_shape,labelText:vertexText,rx:radious,ry:radious,class:classStr,style:styles2.style,id:vertex.id,link:vertex.link,linkTarget:vertex.linkTarget,tooltip:diagObj.db.getTooltip(vertex.id)||"",domId:diagObj.db.lookUpDomId(vertex.id),haveCallback:vertex.haveCallback,width:"group"===vertex.type?500:void 0,dir:vertex.dir,type:vertex.type,props:vertex.props,padding:(0,_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.g)().flowchart.padding};let boundingBox,nodeEl;"group"!==node.type&&(nodeEl=(0,_edges_02da71a2_js__WEBPACK_IMPORTED_MODULE_7__.e)(nodes,node,vertex.dir),boundingBox=nodeEl.node().getBBox());const data={id:vertex.id,ports:"diamond"===vertex.type?ports:[],layoutOptions,labelText:vertexText,labelData,domId:diagObj.db.lookUpDomId(vertex.id),width:null==boundingBox?void 0:boundingBox.width,height:null==boundingBox?void 0:boundingBox.height,type:vertex.type,el:nodeEl,parent:parentLookupDb.parentById[vertex.id]};nodeDb[node.id]=data})),graph}(vert,id,root,doc,diagObj,parentLookupDb,graph);const edgesEl=svg.insert("g").attr("class","edges edgePath"),edges=diagObj.db.getEdges();graph=addEdges(edges,diagObj,graph,svg);Object.keys(nodeDb).forEach((nodeId=>{const node=nodeDb[nodeId];node.parent||graph.children.push(node),void 0!==parentLookupDb.childrenById[nodeId]&&(node.labels=[{text:node.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:node.labelData.width,height:node.labelData.height}],delete node.x,delete node.y,delete node.width,delete node.height)})),insertChildren(graph.children,parentLookupDb),_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("after layout",JSON.stringify(graph,null,2));const g=await elk.layout(graph);drawNodes(0,0,g.children,svg,subGraphsEl,diagObj,0),_config_5161385b_js__WEBPACK_IMPORTED_MODULE_5__.l.info("after layout",g),null==(_a=g.edges)||_a.map((edge=>{insertEdge(edgesEl,edge,edge.edgeData,diagObj,parentLookupDb)})),(0,_setupGraphViewbox_e1099da8_js__WEBPACK_IMPORTED_MODULE_8__.s)({},svg,conf2.diagramPadding,conf2.useMaxWidth),renderEl.remove()}},styles=options=>`.label {\n    font-family: ${options.fontFamily};\n    color: ${options.nodeTextColor||options.textColor};\n  }\n  .cluster-label text {\n    fill: ${options.titleColor};\n  }\n  .cluster-label span {\n    color: ${options.titleColor};\n  }\n\n  .label text,span {\n    fill: ${options.nodeTextColor||options.textColor};\n    color: ${options.nodeTextColor||options.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${options.mainBkg};\n    stroke: ${options.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${options.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${options.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${options.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${options.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${options.edgeLabelBackground};\n      fill: ${options.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${options.clusterBkg};\n    stroke: ${options.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${options.titleColor};\n  }\n\n  .cluster span {\n    color: ${options.titleColor};\n  }\n  /* .cluster div {\n    color: ${options.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${options.fontFamily};\n    font-size: 12px;\n    background: ${options.tertiaryColor};\n    border: 1px solid ${options.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${options.textColor};\n  }\n  .subgraph {\n    stroke-width:2;\n    rx:3;\n  }\n  // .subgraph-lvl-1 {\n  //   fill:#ccc;\n  //   // stroke:black;\n  // }\n  ${(options=>{let sections="";for(let i=0;i<5;i++)sections+=`\n      .subgraph-lvl-${i} {\n        fill: ${options[`surface${i}`]};\n        stroke: ${options[`surfacePeer${i}`]};\n      }\n    `;return sections})(options)}\n`,diagram={db:_flowDb_e993bcaf_js__WEBPACK_IMPORTED_MODULE_9__.d,renderer,parser:_flowDb_e993bcaf_js__WEBPACK_IMPORTED_MODULE_9__.p,styles}}}]);