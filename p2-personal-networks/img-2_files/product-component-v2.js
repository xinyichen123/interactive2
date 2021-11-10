/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssmask-csstransforms-objectfit-addtest-setclasses !*/
;!function(ak,ab,U){function X(a,b){return typeof a===b}function aa(){var h,k,f,j,d,g,c;for(var b in L){if(L.hasOwnProperty(b)){if(h=[],k=L[b],k.name&&(h.push(k.name.toLowerCase()),k.options&&k.options.aliases&&k.options.aliases.length)){for(f=0;f<k.options.aliases.length;f++){h.push(k.options.aliases[f].toLowerCase())}}for(j=X(k.fn,"function")?k.fn():k.fn,d=0;d<h.length;d++){g=h[d],c=g.split("."),1===c.length?F[c[0]]=j:(!F[c[0]]||F[c[0]] instanceof Boolean||(F[c[0]]=new Boolean(F[c[0]])),F[c[0]][c[1]]=j),W.push((j?"":"no-")+c.join("-"))}}}}function ag(c){var d=an.className,a=F._config.classPrefix||"";if(D&&(d=d.baseVal),F._config.enableJSClass){var b=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");d=d.replace(b,"$1"+a+"js$2")}F._config.enableClasses&&(d+=" "+a+c.join(" "+a),D?an.className.baseVal=d:an.className=d)}function V(c,f){if("object"==typeof c){for(var a in c){B(c,a)&&V(a,c[a])}}else{c=c.toLowerCase();var b=c.split("."),d=F[b[0]];if(2==b.length&&(d=d[b[1]]),"undefined"!=typeof d){return F}f="function"==typeof f?f():f,1==b.length?F[b[0]]=f:(!F[b[0]]||F[b[0]] instanceof Boolean||(F[b[0]]=new Boolean(F[b[0]])),F[b[0]][b[1]]=f),ag([(f&&0!=f?"":"no-")+b.join("-")]),F._trigger(c,f)}return F}function ao(a){return a.replace(/([a-z])-([a-z])/g,function(c,d,b){return d+b.toUpperCase()}).replace(/^-/,"")}function ad(a,b){return !!~(""+a).indexOf(b)}function aj(){return"function"!=typeof ab.createElement?ab.createElement(arguments[0]):D?ab.createElementNS.call(ab,"http://www.w3.org/2000/svg",arguments[0]):ab.createElement.apply(ab,arguments)}function Q(a,b){return function(){return a.apply(b,arguments)}}function am(c,f,b){var d;for(var a in c){if(c[a] in f){return b===!1?c[a]:(d=f[c[a]],X(d,"function")?Q(d,b||f):d)}}return !1}function al(a){return a.replace(/([A-Z])/g,function(b,c){return"-"+c.toLowerCase()}).replace(/^ms-/,"-ms-")}function Z(f,b,d){var e;if("getComputedStyle" in ak){e=getComputedStyle.call(ak,f,b);var a=ak.console;if(null!==e){d&&(e=e.getPropertyValue(d))}else{if(a){var c=a.error?"error":"log";a[c].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}}else{e=!b&&f.currentStyle&&f.currentStyle[d]}return e}function ac(){var a=ab.body;return a||(a=aj(D?"svg":"body"),a.fake=!0),a}function ah(j,v,b,f){var h,w,n,g,p="modernizr",m=aj("div"),k=ac();if(parseInt(b,10)){for(;b--;){n=aj("div"),n.id=f?f[b]:p+(b+1),m.appendChild(n)}}return h=aj("style"),h.type="text/css",h.id="s"+p,(k.fake?k:m).appendChild(h),k.appendChild(m),h.styleSheet?h.styleSheet.cssText=j:h.appendChild(ab.createTextNode(j)),m.id=p,k.fake&&(k.style.background="",k.style.overflow="hidden",g=an.style.overflow,an.style.overflow="hidden",an.appendChild(k)),w=v(m,j),k.fake?(k.parentNode.removeChild(k),an.style.overflow=g,an.offsetHeight):m.parentNode.removeChild(m),!!w}function ai(d,b){var c=d.length;if("CSS" in ak&&"supports" in ak.CSS){for(;c--;){if(ak.CSS.supports(al(d[c]),b)){return !0}}return !1}if("CSSSupportsRule" in ak){for(var a=[];c--;){a.push("("+al(d[c])+":"+b+")")}return a=a.join(" or "),ah("@supports ("+a+") { #modernizr { position: absolute; } }",function(f){return"absolute"==Z(f,null,"position")})}return U}function M(l,f,b,j){function A(){t&&(delete G.style,delete G.modElem)}if(j=X(j,"undefined")?!1:j,!X(b,"undefined")){var z=ai(l,b);if(!X(z,"undefined")){return z}}for(var t,r,a,g,k,x=["modernizr","tspan","samp"];!G.style&&x.length;){t=!0,G.modElem=aj(x.shift()),G.style=G.modElem.style}for(a=l.length,r=0;a>r;r++){if(g=l[r],k=G.style[g],ad(g,"-")&&(g=ao(g)),G.style[g]!==U){if(j||X(b,"undefined")){return A(),"pfx"==f?g:!0}try{G.style[g]=b}catch(w){}if(G.style[g]!=k){return A(),"pfx"==f?g:!0}}}return A(),!1}function J(g,j,d,h,c){var f=g.charAt(0).toUpperCase()+g.slice(1),b=(g+" "+af.join(f+" ")+f).split(" ");return X(j,"string")||X(j,"undefined")?M(b,j,h,c):(b=(g+" "+I.join(f+" ")+f).split(" "),am(b,j,d))}function ap(b,c,a){return J(b,U,U,c,a)}var W=[],L=[],K={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(b,c){var a=this;setTimeout(function(){c(a[b])},0)},addTest:function(b,c,a){L.push({name:b,fn:c,options:a})},addAsyncTest:function(a){L.push({name:null,fn:a})}},F=function(){};F.prototype=K,F=new F;var B,an=ab.documentElement,D="svg"===an.nodeName.toLowerCase();!function(){var a={}.hasOwnProperty;B=X(a,"undefined")||X(a.call,"undefined")?function(b,c){return c in b&&X(b.constructor.prototype[c],"undefined")}:function(c,b){return a.call(c,b)}}(),K._l={},K.on=function(a,b){this._l[a]||(this._l[a]=[]),this._l[a].push(b),F.hasOwnProperty(a)&&setTimeout(function(){F._trigger(a,F[a])},0)},K._trigger=function(b,c){if(this._l[b]){var a=this._l[b];setTimeout(function(){var f,d;for(f=0;f<a.length;f++){(d=a[f])(c)}},0),delete this._l[b]}},F._q.push(function(){K.addTest=V});var q="Moz O ms Webkit",af=K._config.usePrefixes?q.split(" "):[];K._cssomPrefixes=af;var R=function(h){var f,g=prefixes.length,d=ak.CSSRule;if("undefined"==typeof d){return U}if(!h){return !1}if(h=h.replace(/^@/,""),f=h.replace(/-/g,"_").toUpperCase()+"_RULE",f in d){return"@"+h}for(var e=0;g>e;e++){var c=prefixes[e],b=c.toUpperCase()+"_"+f;if(b in d){return"@-"+c.toLowerCase()+"-"+h}}return !1};K.atRule=R;var I=K._config.usePrefixes?q.toLowerCase().split(" "):[];K._domPrefixes=I;var H={elem:aj("modernizr")};F._q.push(function(){delete H.elem});var G={style:H.elem.style};F._q.unshift(function(){delete G.style}),K.testAllProps=J,K.testAllProps=ap,F.addTest("cssmask",ap("maskRepeat","repeat-x",!0)),F.addTest("csstransforms",function(){return -1===navigator.userAgent.indexOf("Android 2.")&&ap("transform","scale(1)",!0)});var ae=K.prefixed=function(b,c,a){return 0===b.indexOf("@")?R(b):(-1!=b.indexOf("-")&&(b=ao(b)),c?J(b,c,a):J(b,"pfx"))};F.addTest("objectfit",!!ae("objectFit"),{aliases:["object-fit"]}),aa(),ag(W),delete K.addTest,delete K.addAsyncTest;for(var Y=0;Y<F._q.length;Y++){F._q[Y]()}ak.Modernizr=F}(window,document);
$(function(){
	"use strict";(function(a){a.addTest("svg-transforms",function(){var c=["-moz-","-ms-","-webkit-",""],e=c.reduce(function(i,j){return i+j+"transform: translateX(10px); "},""),b=document.querySelector("body"),d=document.createElementNS("http://www.w3.org/2000/svg","svg"),g=document.createElementNS("http://www.w3.org/2000/svg","path");d.appendChild(g);d.style.cssText="width: 100px; visibility: transparent;";b.appendChild(d);var f=g.getBoundingClientRect();g.style.cssText=e;var h=g.getBoundingClientRect();b.removeChild(d);return f.left!=h.left})})(window.Modernizr);$("body").removeClass("no-js");$("[data-href]").click(function(){thisdata=$(this).attr("data-href");window.location.href=thisdata});$(window).resize(function(){clearTimeout(a);var a;a=setTimeout(function(){Waypoint.refreshAll},100)}).resize();document.addEventListener("visibilitychange",function(){if(document.visibility!="hidden"){Waypoint.refreshAll}});document.addEventListener("DOMContentLoaded",function(){var a=document.querySelector("video");if(a){a.loop=true;var b=a.play();if(b instanceof Promise){$("html").addClass("inlineplay")}else{$("html").addClass("no-inlineplay")}}});var refreshTimer=setInterval(function(){Waypoint.refreshAll},5000);$(document).ready(function(){var a=setInterval(function(){Waypoint.refreshAll},5000);$(".animation-block").each(function(){var b=$(this);var d=b.waypoint({offset:"80%",handler:function(e){b.addClass("animated")}});var c=b.waypoint({offset:function(){return -this.element.clientHeight},handler:function(e){b.addClass("animated")}})});$(".component").each(function(){var c=$(this);var b=c.waypoint({offset:"200%",handler:function(e){if(e==="down"){c.addClass("shown")}else{c.removeClass("shown");c.find(".animation-block").removeClass("animated")}}});var d=c.waypoint({offset:function(){return -this.element.clientHeight*1.5},handler:function(e){if(e==="down"){c.removeClass("shown");c.find(".animation-block").removeClass("animated")}else{c.addClass("shown")}}})})});var mobileWidth=600;if($(window).width()<546){$(document).find('[data-parallax*= \'{"y": 100, "distance": 1200, "smoothness": 10}\']').each(function(){$(this).attr("data-parallax",'{"y": 50, "distance": 600, "smoothness": 10}')})}$(function(){ParallaxScroll.init()});var ParallaxScroll={showLogs:false,round:1000,init:function(){this._log("init");if(this._inited){this._log("Already Inited");this._inited=true;return}this._requestAnimationFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(b,a){window.setTimeout(b,1000/60)}})();this._onScroll(true)},_inited:false,_properties:["x","y","z","rotateX","rotateY","rotateZ","scaleX","scaleY","scaleZ","scale"],_requestAnimationFrame:null,_log:function(a){if(this.showLogs){console.log("Parallax Scroll / "+a)}},_onScroll:function(b){var a=$(document).scrollTop();var c=$(window).height();this._log("onScroll "+a);$("[data-parallax]").each($.proxy(function(l,d){var A=$(d);var m=[];var r=false;var u=A.data("style");if(u==undefined){u=A.attr("style")||"";A.data("style",u)}var x=[A.data("parallax")];var C;for(C=2;;C++){if(A.data("parallax"+C)){x.push(A.data("parallax-"+C))}else{break}}var n=x.length;for(C=0;C<n;C++){var z=x[C];var i=z["from-scroll"];if(i==undefined){i=Math.max(0,$(d).offset().top-c)}i=i|0;var o=z.distance;var f=z["to-scroll"];if(o==undefined&&f==undefined){o=c}o=Math.max(o|0,1);var s=z.easing;var t=z["easing-return"];if(s==undefined||!$.easing||!$.easing[s]){s=null}if(t==undefined||!$.easing||!$.easing[t]){t=s}if(s){var k=z.duration;if(k==undefined){k=o}k=Math.max(k|0,1);var B=z["duration-return"];if(B==undefined){B=k}o=1;var w=A.data("current-time");if(w==undefined){w=0}}if(f==undefined){f=i+o}f=f|0;var e=z.smoothness;if(e==undefined){e=30}e=e|0;if(b||e==0){e=1}e=e|0;var v=a;v=Math.max(v,i);v=Math.min(v,f);if(s){if(A.data("sens")==undefined){A.data("sens","back")}if(v>i){if(A.data("sens")=="back"){w=1;A.data("sens","go")}else{w++}}if(v<f){if(A.data("sens")=="go"){w=1;A.data("sens","back")}else{w++}}if(b){w=k}A.data("current-time",w)}this._properties.map($.proxy(function(J){var D=0;var I=z[J];if(I==undefined){return}if(J=="scale"||J=="scaleX"||J=="scaleY"||J=="scaleZ"){D=1}else{I=I|0}var F=A.data("_"+J);if(F==undefined){F=D}var E=((I-D)*((v-i)/(f-i)))+D;var G=F+(E-F)/e;if(s&&w>0&&w<=k){var H=D;if(A.data("sens")=="back"){H=I;I=-I;s=t;k=B}G=$.easing[s](null,w,H,I,k)}G=Math.ceil(G*this.round)/this.round;if(G==F&&E==I){G=I}if(!m[J]){m[J]=0}m[J]+=G;if(F!=m[J]){A.data("_"+J,m[J]);r=true}},this))}if(r){if(m.z!=undefined){var q=z.perspective;if(q==undefined){q=800}var p=A.parent();if(!p.data("style")){p.data("style",p.attr("style")||"")}p.attr("style","perspective:"+q+"px; -webkit-perspective:"+q+"px; "+p.data("style"))}if(m.scaleX==undefined){m.scaleX=1}if(m.scaleY==undefined){m.scaleY=1}if(m.scaleZ==undefined){m.scaleZ=1}if(m.scale!=undefined){m.scaleX*=m.scale;m.scaleY*=m.scale;m.scaleZ*=m.scale}var y="translate3d("+(m.x?m.x:0)+"px, "+(m.y?m.y:0)+"px, "+(m.z?m.z:0)+"px)";var j="rotateX("+(m.rotateX?m.rotateX:0)+"deg) rotateY("+(m.rotateY?m.rotateY:0)+"deg) rotateZ("+(m.rotateZ?m.rotateZ:0)+"deg)";var h="scaleX("+m.scaleX+") scaleY("+m.scaleY+") scaleZ("+m.scaleZ+")";var g=y+" "+j+" "+h+";";this._log(g);A.attr("style","transform:"+g+" -webkit-transform:"+g+" "+u)}},this));if(window.requestAnimationFrame){window.requestAnimationFrame($.proxy(this._onScroll,this,false))}else{this._requestAnimationFrame($.proxy(this._onScroll,this,false))}}};
});

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
$(function(){
	;!function(){function b(d){if(!d){throw new Error("No options passed to Waypoint constructor")}if(!d.element){throw new Error("No element option passed to Waypoint constructor")}if(!d.handler){throw new Error("No handler option passed to Waypoint constructor")}this.key="waypoint-"+c,this.options=b.Adapter.extend({},b.defaults,d),this.element=this.options.element,this.adapter=new b.Adapter(this.element),this.callback=d.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=b.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=b.Context.findOrCreateByElement(this.options.context),b.offsetAliases[this.options.offset]&&(this.options.offset=b.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),a[this.key]=this,c+=1}var c=0,a={};b.prototype.queueTrigger=function(d){this.group.queueTrigger(this,d)},b.prototype.trigger=function(d){this.enabled&&this.callback&&this.callback.apply(this,d)},b.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete a[this.key]},b.prototype.disable=function(){return this.enabled=!1,this},b.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},b.prototype.next=function(){return this.group.next(this)},b.prototype.previous=function(){return this.group.previous(this)},b.invokeAll=function(d){var g=[];for(var h in a){g.push(a[h])}for(var i=0,f=g.length;f>i;i++){g[i][d]()}},b.destroyAll=function(){b.invokeAll("destroy")},b.disableAll=function(){b.invokeAll("disable")},b.enableAll=function(){b.Context.refreshAll();for(var d in a){a[d].enabled=!0}return this},b.refreshAll=function(){b.Context.refreshAll()},b.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},b.viewportWidth=function(){return document.documentElement.clientWidth},b.adapters=[],b.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},b.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=b}(),function(){function b(e){window.setTimeout(e,1000/60)}function d(e){this.element=e,this.Adapter=g.Adapter,this.adapter=new this.Adapter(e),this.key="waypoint-context-"+a,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},e.waypointContextKey=this.key,f[e.waypointContextKey]=this,a+=1,g.windowContext||(g.windowContext=!0,g.windowContext=new d(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var a=0,f={},g=window.Waypoint,c=window.onload;d.prototype.add=function(h){var i=h.options.horizontal?"horizontal":"vertical";this.waypoints[i][h.key]=h,this.refresh()},d.prototype.checkEmpty=function(){var j=this.Adapter.isEmptyObject(this.waypoints.horizontal),k=this.Adapter.isEmptyObject(this.waypoints.vertical),h=this.element==this.element.window;j&&k&&!h&&(this.adapter.off(".waypoints"),delete f[this.key])},d.prototype.createThrottledResizeHandler=function(){function h(){i.handleResize(),i.didResize=!1}var i=this;this.adapter.on("resize.waypoints",function(){i.didResize||(i.didResize=!0,g.requestAnimationFrame(h))})},d.prototype.createThrottledScrollHandler=function(){function h(){i.handleScroll(),i.didScroll=!1}var i=this;this.adapter.on("scroll.waypoints",function(){(!i.didScroll||g.isTouch)&&(i.didScroll=!0,g.requestAnimationFrame(h))})},d.prototype.handleResize=function(){g.Context.refreshAll()},d.prototype.handleScroll=function(){var C={},y={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var w in y){var m=y[w],q=m.newScroll>m.oldScroll,j=q?m.forward:m.backward;for(var D in this.waypoints[w]){var A=this.waypoints[w][D];if(null!==A.triggerPoint){var v=m.oldScroll<A.triggerPoint,x=m.newScroll>=A.triggerPoint,k=v&&x,B=!v&&!x;(k||B)&&(A.queueTrigger(j),C[A.group.id]=A.group)}}}for(var z in C){C[z].flushTriggers()}this.oldScroll={x:y.horizontal.newScroll,y:y.vertical.newScroll}},d.prototype.innerHeight=function(){return this.element==this.element.window?g.viewportHeight():this.adapter.innerHeight()},d.prototype.remove=function(e){delete this.waypoints[e.axis][e.key],this.checkEmpty()},d.prototype.innerWidth=function(){return this.element==this.element.window?g.viewportWidth():this.adapter.innerWidth()},d.prototype.destroy=function(){var j=[];for(var k in this.waypoints){for(var h in this.waypoints[k]){j.push(this.waypoints[k][h])}}for(var l=0,m=j.length;m>l;l++){j[l].destroy()}},d.prototype.refresh=function(){var H,A=this.element==this.element.window,q=A?void 0:this.adapter.offset(),m={};this.handleScroll(),H={horizontal:{contextOffset:A?0:q.left,contextScroll:A?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:A?0:q.top,contextScroll:A?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var j in H){var I=H[j];for(var E in this.waypoints[j]){var n,v,k,G,C,B=this.waypoints[j][E],z=B.options.offset,F=B.triggerPoint,D=0,x=null==F;B.element!==B.element.window&&(D=B.adapter.offset()[I.offsetProp]),"function"==typeof z?z=z.apply(B):"string"==typeof z&&(z=parseFloat(z),B.options.offset.indexOf("%")>-1&&(z=Math.ceil(I.contextDimension*z/100))),n=I.contextScroll-I.contextOffset,B.triggerPoint=Math.floor(D+n-z),v=F<I.oldScroll,k=B.triggerPoint>=I.oldScroll,G=v&&k,C=!v&&!k,!x&&G?(B.queueTrigger(I.backward),m[B.group.id]=B.group):!x&&C?(B.queueTrigger(I.forward),m[B.group.id]=B.group):x&&I.oldScroll>=B.triggerPoint&&(B.queueTrigger(I.forward),m[B.group.id]=B.group)}}return g.requestAnimationFrame(function(){for(var e in m){m[e].flushTriggers()}}),this},d.findOrCreateByElement=function(e){return d.findByElement(e)||new d(e)},d.refreshAll=function(){for(var e in f){f[e].refresh()}},d.findByElement=function(e){return f[e.waypointContextKey]},window.onload=function(){c&&c(),d.refreshAll()},g.requestAnimationFrame=function(j){var h=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||b;h.call(window,j)},g.Context=d}(),function(){function b(g,h){return g.triggerPoint-h.triggerPoint}function c(g,h){return h.triggerPoint-g.triggerPoint}function a(e){this.name=e.name,this.axis=e.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),d[this.axis][this.name]=this}var d={vertical:{},horizontal:{}},f=window.Waypoint;a.prototype.add=function(e){this.waypoints.push(e)},a.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},a.prototype.flushTriggers=function(){for(var g in this.triggerQueues){var k=this.triggerQueues[g],l="up"===g||"left"===g;k.sort(l?c:b);for(var j=0,h=k.length;h>j;j+=1){var e=k[j];(e.options.continuous||j===k.length-1)&&e.trigger([g])}}this.clearTriggerQueues()},a.prototype.next=function(h){this.waypoints.sort(b);var g=f.Adapter.inArray(h,this.waypoints),j=g===this.waypoints.length-1;return j?null:this.waypoints[g+1]},a.prototype.previous=function(h){this.waypoints.sort(b);var g=f.Adapter.inArray(h,this.waypoints);return g?this.waypoints[g-1]:null},a.prototype.queueTrigger=function(g,h){this.triggerQueues[h].push(g)},a.prototype.remove=function(g){var h=f.Adapter.inArray(g,this.waypoints);h>-1&&this.waypoints.splice(h,1)},a.prototype.first=function(){return this.waypoints[0]},a.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},a.findOrCreate=function(e){return d[e.axis][e.name]||new a(e)},f.Group=a}(),function(){function b(d){this.$element=c(d)}var c=window.jQuery,a=window.Waypoint;c.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(f,d){b.prototype[d]=function(){var e=Array.prototype.slice.call(arguments);return this.$element[d].apply(this.$element,e)}}),c.each(["extend","inArray","isEmptyObject"],function(d,e){b[e]=c[e]}),a.adapters.push({name:"jquery",Adapter:b}),a.Adapter=b}(),function(){function a(c){return function(){var d=[],e=arguments[0];return c.isFunction(arguments[0])&&(e=c.extend({},arguments[1]),e.handler=arguments[0]),this.each(function(){var f=c.extend({},e,{element:this});"string"==typeof f.context&&(f.context=c(this).closest(f.context)[0]),d.push(new b(f))}),d}}var b=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=a(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=a(window.Zepto))}();
});

"undefined"==typeof jwplayer&&(jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}},jwplayer.version="6.6.3896",jwplayer.vid=document.createElement("video"),jwplayer.audio=document.createElement("audio"),jwplayer.source=document.createElement("source"),function(q){function u(a){return function(){return r(a)}}function i(a){return function(){a("Error loading file")}}function o(b,c,f,d){return function(){try{var e=b.responseXML;if(e&&e.firstChild){return f(b)}}catch(a){}(e=t.parseXML(b.responseText))&&e.firstChild?(b=t.extend({},b,{responseXML:e}),f(b)):d&&d(b.responseText?"Invalid XML":c)}}var m=document,p=window,l=navigator,t=q.utils=function(){};t.exists=function(a){switch(typeof a){case"string":return 0<a.length;case"object":return null!==a;case"undefined":return !1}return !0};t.styleDimension=function(a){return a+(0<a.toString().indexOf("%")?"":"px")};t.getAbsolutePath=function(b,v){t.exists(v)||(v=m.location.href);if(t.exists(b)){var w;if(t.exists(b)){w=b.indexOf("://");var k=b.indexOf("?");w=0<w&&(0>k||k>w)}else{w=void 0}if(w){return b}w=v.substring(0,v.indexOf("://")+3);var k=v.substring(w.length,v.indexOf("/",w.length+1)),d;0===b.indexOf("/")?d=b.split("/"):(d=v.split("?")[0],d=d.substring(w.length+k.length+1,d.lastIndexOf("/")),d=d.split("/").concat(b.split("/")));for(var n=[],h=0;h<d.length;h++){d[h]&&(t.exists(d[h])&&"."!=d[h])&&(".."==d[h]?n.pop():n.push(d[h]))}return w+k+"/"+n.join("/")}};t.extend=function(){var b=t.extend.arguments;if(1<b.length){for(var c=1;c<b.length;c++){t.foreach(b[c],function(d,a){try{t.exists(a)&&(b[0][d]=a)}catch(f){}})}return b[0]}return null};t.log=function(c,d){"undefined"!=typeof console&&"undefined"!=typeof console.log&&(d?console.log(c,d):console.log(c))};var r=t.userAgentMatch=function(a){return null!==l.userAgent.toLowerCase().match(a)};t.isIE=u(/msie/i);t.isFF=u(/firefox/i);t.isChrome=u(/chrome/i);t.isIOS=u(/iP(hone|ad|od)/i);t.isIPod=u(/iP(hone|od)/i);t.isIPad=u(/iPad/i);t.isSafari602=u(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);t.isSafari=function(){return r(/safari/i)&&!r(/chrome/i)&&!r(/chromium/i)&&!r(/android/i)};t.isAndroid=function(a){return a?r(RegExp("android.*"+a,"i")):r(/android/i)};t.isMobile=function(){return t.isIOS()||t.isAndroid()};t.saveCookie=function(c,d){m.cookie="jwplayer."+c+"\x3d"+d+"; path\x3d/"};t.getCookies=function(){for(var c={},d=m.cookie.split("; "),h=0;h<d.length;h++){var f=d[h].split("\x3d");0==f[0].indexOf("jwplayer.")&&(c[f[0].substring(9,f[0].length)]=f[1])}return c};t.typeOf=function(c){var d=typeof c;return"object"===d?!c?"null":c instanceof Array?"array":d:d};t.translateEventResponse=function(b,d){var f=t.extend({},d);b==q.events.JWPLAYER_FULLSCREEN&&!f.fullscreen?(f.fullscreen="true"==f.message?!0:!1,delete f.message):"object"==typeof f.data?(f=t.extend(f,f.data),delete f.data):"object"==typeof f.metadata&&t.deepReplaceKeyName(f.metadata,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);t.foreach(["position","duration","offset"],function(c,e){f[e]&&(f[e]=Math.round(1000*f[e])/1000)});return f};t.flashVersion=function(){if(t.isAndroid()){return 0}var b=l.plugins,h;try{if("undefined"!==b&&(h=b["Shockwave Flash"])){return parseInt(h.description.replace(/\D+(\d+)\..*/,"$1"))}}catch(e){}if("undefined"!=typeof p.ActiveXObject){try{if(h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")){return parseInt(h.GetVariable("$version").split(" ")[1].split(",")[0])}}catch(d){}}return 0};t.getScriptPath=function(d){for(var e=m.getElementsByTagName("script"),h=0;h<e.length;h++){var f=e[h].src;if(f&&0<=f.indexOf(d)){return f.substr(0,f.indexOf(d))}}return""};t.deepReplaceKeyName=function(b,h,f){switch(q.utils.typeOf(b)){case"array":for(var d=0;d<b.length;d++){b[d]=q.utils.deepReplaceKeyName(b[d],h,f)}break;case"object":t.foreach(b,function(a,k){var c;if(h instanceof Array&&f instanceof Array){if(h.length!=f.length){return}c=h}else{c=[h]}for(var n=a,e=0;e<c.length;e++){n=n.replace(RegExp(h[e],"g"),f[e])}b[n]=q.utils.deepReplaceKeyName(k,h,f);a!=n&&delete b[a]})}return b};var g=t.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};t.getPluginPathType=function(b){if("string"==typeof b){b=b.split("?")[0];var f=b.indexOf("://");if(0<f){return g.ABSOLUTE}var d=b.indexOf("/");b=t.extension(b);return 0>f&&0>d&&(!b||!isNaN(b))?g.CDN:g.RELATIVE}};t.getPluginName=function(a){return a.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")};t.getPluginVersion=function(a){return a.replace(/[^-]*-?([^\.]*).*$/,"$1")};t.isYouTube=function(a){return/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(a)};t.youTubeID=function(c){try{return/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(c).slice(1).join("").replace("?","")}catch(d){return""}};t.isRtmp=function(c,d){return 0==c.indexOf("rtmp")||"rtmp"==d};t.foreach=function(b,h){var f,d;for(f in b){"function"==t.typeOf(b.hasOwnProperty)?b.hasOwnProperty(f)&&(d=b[f],h(f,d)):(d=b[f],h(f,d))}};t.isHTTPS=function(){return 0==p.location.href.indexOf("https")};t.repo=function(){var b="http://consumer-res.huawei.com/etc/designs/huawei-cbg-site/statics/";try{t.isHTTPS()&&(b=b.replace("http://","https://"))}catch(d){}return b};t.ajax=function(b,y,e){var v;0<b.indexOf("#")&&(b=b.replace(/#.*$/,""));var k;k=(k=b)&&0<=k.indexOf("://")&&k.split("/")[2]!=p.location.href.split("/")[2]?!0:!1;if(k&&t.exists(p.XDomainRequest)){v=new XDomainRequest,v.onload=o(v,b,y,e),v.onerror=i(e,b,v)}else{if(t.exists(p.XMLHttpRequest)){var w=v=new XMLHttpRequest,f=b;v.onreadystatechange=function(){if(4===w.readyState){switch(w.status){case 200:o(w,f,y,e)();break;case 404:e("File not found")}}};v.onerror=i(e,b)}else{e&&e()}}try{v.open("GET",b,!0),v.send(null)}catch(x){e&&e(b)}return v};t.parseXML=function(d){try{var e;if(p.DOMParser){e=(new DOMParser).parseFromString(d,"text/xml");try{if("parsererror"==e.childNodes[0].firstChild.nodeName){return}}catch(h){}}else{e=new ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(d)}return e}catch(f){}};t.filterPlaylist=function(b,x){for(var w=[],n=0;n<b.length;n++){var d=t.extend({},b[n]);d.sources=t.filterSources(d.sources);if(0<d.sources.length){for(var v=0;v<d.sources.length;v++){var k=d.sources[v];k.label||(k.label=v.toString())}w.push(d)}}if(x&&0==w.length){for(n=0;n<b.length;n++){if(d=t.extend({},b[n]),d.sources=t.filterSources(d.sources,!0),0<d.sources.length){for(v=0;v<d.sources.length;v++){k=d.sources[v],k.label||(k.label=v.toString())}w.push(d)}}}return w};t.filterSources=function(b,z){var x,v,d=t.extensionmap;if(b){v=[];for(var w=0;w<b.length;w++){var k=b[w].type,y=b[w].file;y&&y.trim&&(y=y.trim());k||(k=d.extType(t.extension(y)),b[w].type=k);z?q.embed.flashCanPlay(y,k)&&(x||(x=k),k==x&&v.push(t.extend({},b[w]))):t.canPlayHTML5(k)&&(x||(x=k),k==x&&v.push(t.extend({},b[w])))}}return v};t.canPlayHTML5=function(b){if(t.isAndroid()&&("hls"==b||"m3u"==b||"m3u8"==b)){return !1}b=t.extensionmap.types[b];return !!b&&!!q.vid.canPlayType&&q.vid.canPlayType(b)};t.seconds=function(e){e=e.replace(",",".");var d=e.split(":"),f=0;"s"==e.substr(-1)?f=Number(e.substr(0,e.length-1)):"m"==e.substr(-1)?f=60*Number(e.substr(0,e.length-1)):"h"==e.substr(-1)?f=3600*Number(e.substr(0,e.length-1)):1<d.length?(f=Number(d[d.length-1]),f+=60*Number(d[d.length-2]),3==d.length&&(f+=3600*Number(d[d.length-3]))):f=Number(e);return f};t.serialize=function(b){return null==b?null:"true"==b.toString().toLowerCase()?!0:"false"==b.toString().toLowerCase()?!1:isNaN(Number(b))||5<b.length||0==b.length?b:Number(b)}}(jwplayer),function(l){var b="video/",c=l.foreach,i={mp4:b+"mp4",vorbis:"audio/ogg",ogg:b+"ogg",webm:b+"webm",aac:"audio/mp4",mp3:"audio/mpeg",hls:"application/vnd.apple.mpegurl"},g={mp4:i.mp4,f4v:i.mp4,m4v:i.mp4,mov:i.mp4,m4a:i.aac,f4a:i.aac,aac:i.aac,mp3:i.mp3,ogv:i.ogg,ogg:i.vorbis,oga:i.vorbis,webm:i.webm,m3u8:i.hls,hls:i.hls},b="video",b={flv:b,f4v:b,mov:b,m4a:b,m4v:b,mp4:b,aac:b,f4a:b,mp3:"sound",smil:"rtmp",m3u8:"hls",hls:"hls"},j=l.extensionmap={};c(g,function(e,d){j[e]={html5:d}});c(b,function(e,d){j[e]||(j[e]={});j[e].flash=d});j.types=i;j.mimeType=function(e){var d;c(i,function(f,a){!d&&a==e&&(d=f)});return d};j.extType=function(d){return j.mimeType(g[d])}}(jwplayer.utils),function(e){var b=e.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},c=document;e.scriptloader=function(i){function g(){d=b.ERROR;l.sendEvent(a.ERROR)}function k(){d=b.COMPLETE;l.sendEvent(a.COMPLETE)}var d=b.NEW,a=jwplayer.events,l=new a.eventdispatcher;e.extend(this,l);this.load=function(){var h=e.scriptloader.loaders[i];if(h&&(h.getStatus()==b.NEW||h.getStatus()==b.LOADING)){h.addEventListener(a.ERROR,g),h.addEventListener(a.COMPLETE,k)}else{if(e.scriptloader.loaders[i]=this,d==b.NEW){d=b.LOADING;var f=c.createElement("script");f.addEventListener?(f.onload=k,f.onerror=g):f.readyState&&(f.onreadystatechange=function(){("loaded"==f.readyState||"complete"==f.readyState)&&k()});c.getElementsByTagName("head")[0].appendChild(f);f.src=i}}};this.getStatus=function(){return d}};e.scriptloader.loaders={}}(jwplayer.utils),function(a){a.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.pad=function(b,e,c){for(c||(c="0");b.length<e;){b=c+b}return b};a.xmlAttribute=function(b,e){for(var c=0;c<b.attributes.length;c++){if(b.attributes[c].name&&b.attributes[c].name.toLowerCase()==e.toLowerCase()){return b.attributes[c].value.toString()}}return""};a.extension=function(b){if(!b||"rtmp"==b.substr(0,4)){return""}b=b.substring(b.lastIndexOf("/")+1,b.length).split("?")[0].split("#")[0];if(-1<b.lastIndexOf(".")){return b.substr(b.lastIndexOf(".")+1,b.length).toLowerCase()}};a.stringToColor=function(b){b=b.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");3==b.length&&(b=b.charAt(0)+b.charAt(0)+b.charAt(1)+b.charAt(1)+b.charAt(2)+b.charAt(2));return parseInt(b,16)}}(jwplayer.utils),function(e){var b="touchmove",c="touchstart";e.touch=function(q){function o(f){f.type==c?(t=!0,g=k(i.DRAG_START,f)):f.type==b?t&&(a||(r(i.DRAG_START,f,g),a=!0),r(i.DRAG,f)):(t&&(a?r(i.DRAG_END,f):(f.cancelBubble=!0,r(i.TAP,f))),t=a=!1,g=null)}function r(h,f,j){if(d[h]&&(f.preventManipulation&&f.preventManipulation(),f.preventDefault&&f.preventDefault(),f=j?j:k(h,f))){d[h](f)}}function k(f,m){var l=null;m.touches&&m.touches.length?l=m.touches[0]:m.changedTouches&&m.changedTouches.length&&(l=m.changedTouches[0]);if(!l){return null}var h=u.getBoundingClientRect(),l={type:f,target:u,x:l.pageX-window.pageXOffset-h.left,y:l.pageY,deltaX:0,deltaY:0};f!=i.TAP&&g&&(l.deltaX=l.x-g.x,l.deltaY=l.y-g.y);return l}var u=q,t=!1,d={},g=null,a=!1,i=e.touchEvents;document.addEventListener(b,o);document.addEventListener("touchend",function(f){t&&a&&r(i.DRAG_END,f);t=a=!1;g=null});document.addEventListener("touchcancel",o);q.addEventListener(c,o);q.addEventListener("touchend",o);this.addEventListener=function(h,f){d[h]=f};this.removeEventListener=function(f){delete d[f]};return this}}(jwplayer.utils),function(a){a.touchEvents={DRAG:"jwplayerDrag",DRAG_START:"jwplayerDragStart",DRAG_END:"jwplayerDragEnd",TAP:"jwplayerTap"}}(jwplayer.utils),function(a){a.key=function(b){var c,i,g;this.edition=function(){return g&&g.getTime()<(new Date).getTime()?"invalid":c};this.token=function(){return i};a.exists(b)||(b="");try{b=a.tea.decrypt(b,"36QXq4W@GSBV^teR");var l=b.split("/");(c=l[0])?/^(free|pro|premium|ads)$/i.test(c)?(i=l[1],l[2]&&0<parseInt(l[2])&&(g=new Date,g.setTime(String(l[2])))):c="invalid":c="free"}catch(d){c="invalid"}}}(jwplayer.utils),function(g){var b=g.tea={};b.encrypt=function(o,t){if(0==o.length){return""}var n=b.strToLongs(e.encode(o));1>=n.length&&(n[1]=0);for(var w=b.strToLongs(e.encode(t).slice(0,16)),v=n.length,u=n[v-1],i=n[0],f,k=Math.floor(6+52/v),r=0;0<k--;){r+=2654435769;f=r>>>2&3;for(var a=0;a<v;a++){i=n[(a+1)%v],u=(u>>>5^i<<2)+(i>>>3^u<<4)^(r^i)+(w[a&3^f]^u),u=n[a]+=u}}n=b.longsToStr(n);return c.encode(n)};b.decrypt=function(n,q){if(0==n.length){return""}for(var k=b.strToLongs(c.decode(n)),u=b.strToLongs(e.encode(q).slice(0,16)),t=k.length,r=k[t-1],f=k[0],a,i=2654435769*Math.floor(6+52/t);0!=i;){a=i>>>2&3;for(var o=t-1;0<=o;o--){r=k[0<o?o-1:t-1],r=(r>>>5^f<<2)+(f>>>3^r<<4)^(i^f)+(u[o&3^a]^r),f=k[o]-=r}i-=2654435769}k=b.longsToStr(k);k=k.replace(/\0+$/,"");return e.decode(k)};b.strToLongs=function(d){for(var h=Array(Math.ceil(d.length/4)),f=0;f<h.length;f++){h[f]=d.charCodeAt(4*f)+(d.charCodeAt(4*f+1)<<8)+(d.charCodeAt(4*f+2)<<16)+(d.charCodeAt(4*f+3)<<24)}return h};b.longsToStr=function(d){for(var h=Array(d.length),f=0;f<d.length;f++){h[f]=String.fromCharCode(d[f]&255,d[f]>>>8&255,d[f]>>>16&255,d[f]>>>24&255)}return h.join("")};var c={code:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",encode:function(w,r){var n,v,u,t,i=[],h="",k,o,f=c.code;o=("undefined"==typeof r?0:r)?e.encode(w):w;k=o.length%3;if(0<k){for(;3>k++;){h+="\x3d",o+="\x00"}}for(k=0;k<o.length;k+=3){n=o.charCodeAt(k),v=o.charCodeAt(k+1),u=o.charCodeAt(k+2),t=n<<16|v<<8|u,n=t>>18&63,v=t>>12&63,u=t>>6&63,t&=63,i[k/3]=f.charAt(n)+f.charAt(v)+f.charAt(u)+f.charAt(t)}i=i.join("");return i=i.slice(0,i.length-h.length)+h},decode:function(w,r){r="undefined"==typeof r?!1:r;var n,v,u,t,i,h=[],k,o=c.code;k=r?e.decode(w):w;for(var f=0;f<k.length;f+=4){n=o.indexOf(k.charAt(f)),v=o.indexOf(k.charAt(f+1)),t=o.indexOf(k.charAt(f+2)),i=o.indexOf(k.charAt(f+3)),u=n<<18|v<<12|t<<6|i,n=u>>>16&255,v=u>>>8&255,u&=255,h[f/4]=String.fromCharCode(n,v,u),64==i&&(h[f/4]=String.fromCharCode(n,v)),64==t&&(h[f/4]=String.fromCharCode(n))}t=h.join("");return r?e.decode(t):t}},e={encode:function(d){d=d.replace(/[\u0080-\u07ff]/g,function(f){f=f.charCodeAt(0);return String.fromCharCode(192|f>>6,128|f&63)});return d=d.replace(/[\u0800-\uffff]/g,function(f){f=f.charCodeAt(0);return String.fromCharCode(224|f>>12,128|f>>6&63,128|f&63)})},decode:function(d){d=d.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(f){f=(f.charCodeAt(0)&15)<<12|(f.charCodeAt(1)&63)<<6|f.charCodeAt(2)&63;return String.fromCharCode(f)});return d=d.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(f){f=(f.charCodeAt(0)&31)<<6|f.charCodeAt(1)&63;return String.fromCharCode(f)})}}}(jwplayer.utils),function(a){a.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_SETUP_ERROR:"jwplayerSetupError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_CAPTIONS_CHANGED:"jwplayerCaptionsChanged",JWPLAYER_CAPTIONS_LIST:"jwplayerCaptionsList",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_CONTROLS:"jwplayerViewControls",JWPLAYER_USER_ACTION:"jwplayerUserAction",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed",JWPLAYER_AD_TIME:"jwplayerAdTime",JWPLAYER_AD_ERROR:"jwplayerAdError",JWPLAYER_AD_CLICK:"jwplayerAdClicked",JWPLAYER_AD_COMPLETE:"jwplayerAdComplete",JWPLAYER_AD_IMPRESSION:"jwplayerAdImpression",JWPLAYER_AD_COMPANIONS:"jwplayerAdCompanions"}}(jwplayer),function(c){var b=jwplayer.utils;c.eventdispatcher=function(j,g){var a,i;this.resetEventListeners=function(){a={};i=[]};this.resetEventListeners();this.addEventListener=function(k,d,l){try{b.exists(a[k])||(a[k]=[]),"string"==b.typeOf(d)&&(d=(new Function("return "+d))()),a[k].push({listener:d,count:l})}catch(h){b.log("error",h)}return !1};this.removeEventListener=function(k,d){if(a[k]){try{for(var l=0;l<a[k].length;l++){if(a[k][l].listener.toString()==d.toString()){a[k].splice(l,1);break}}}catch(h){b.log("error",h)}return !1}};this.addGlobalListener=function(e,d){try{"string"==b.typeOf(e)&&(e=(new Function("return "+e))()),i.push({listener:e,count:d})}catch(h){b.log("error",h)}return !1};this.removeGlobalListener=function(e){if(e){try{for(var d=0;d<i.length;d++){if(i[d].listener.toString()==e.toString()){i.splice(d,1);break}}}catch(h){b.log("error",h)}return !1}};this.sendEvent=function(f,e){b.exists(e)||(e={});b.extend(e,{id:j,version:jwplayer.version,type:f});g&&b.log(f,e);if("undefined"!=b.typeOf(a[f])){for(var k=0;k<a[f].length;k++){try{a[f][k].listener(e)}catch(h){b.log("There was an error while handling a listener: "+h.toString(),a[f][k].listener)}a[f][k]&&(1===a[f][k].count?delete a[f][k]:0<a[f][k].count&&(a[f][k].count-=1))}}for(k=0;k<i.length;k++){try{i[k].listener(e)}catch(d){b.log("There was an error while handling a listener: "+d.toString(),i[k].listener)}i[k]&&(1===i[k].count?delete i[k]:0<i[k].count&&(i[k].count-=1))}}}}(jwplayer.events),function(e){var b={},c={};e.plugins=function(){};e.plugins.loadPlugins=function(d,a){c[d]=new e.plugins.pluginloader(new e.plugins.model(b),a);return c[d]};e.plugins.registerPlugin=function(i,g,k,d){var a=e.utils.getPluginName(i);b[a]||(b[a]=new e.plugins.plugin(i));b[a].registerPlugin(i,g,k,d)}}(jwplayer),function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);b[d]||(b[d]=new a.plugins.plugin(c));return b[d]};this.getPlugins=function(){return b}}}(jwplayer),function(e){var b=jwplayer.utils,c=jwplayer.events;e.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};e.plugin=function(q){function o(){switch(b.getPluginPathType(q)){case b.pluginPathType.ABSOLUTE:return q;case b.pluginPathType.RELATIVE:return b.getAbsolutePath(q,window.location.href)}}function r(){a=setTimeout(function(){u=b.loaderstatus.COMPLETE;i.sendEvent(c.COMPLETE)},1000)}function k(){u=b.loaderstatus.ERROR;i.sendEvent(c.ERROR)}var u=b.loaderstatus.NEW,t,d,g,a,i=new c.eventdispatcher;b.extend(this,i);this.load=function(){if(u==b.loaderstatus.NEW){if(0<q.lastIndexOf(".swf")){t=q,u=b.loaderstatus.COMPLETE,i.sendEvent(c.COMPLETE)}else{if(b.getPluginPathType(q)==b.pluginPathType.CDN){u=b.loaderstatus.COMPLETE,i.sendEvent(c.COMPLETE)}else{u=b.loaderstatus.LOADING;var f=new b.scriptloader(o());f.addEventListener(c.COMPLETE,r);f.addEventListener(c.ERROR,k);f.load()}}}};this.registerPlugin=function(m,l,h,n){a&&(clearTimeout(a),a=void 0);g=l;h&&n?(t=n,d=h):"string"==typeof h?t=h:"function"==typeof h?d=h:!h&&!n&&(t=m);u=b.loaderstatus.COMPLETE;i.sendEvent(c.COMPLETE)};this.getStatus=function(){return u};this.getPluginName=function(){return b.getPluginName(q)};this.getFlashPath=function(){if(t){switch(b.getPluginPathType(t)){case b.pluginPathType.ABSOLUTE:return t;case b.pluginPathType.RELATIVE:return 0<q.lastIndexOf(".swf")?b.getAbsolutePath(t,window.location.href):b.getAbsolutePath(t,o())}}return null};this.getJS=function(){return d};this.getTarget=function(){return g};this.getPluginmode=function(){if("undefined"!=typeof t&&"undefined"!=typeof d){return e.pluginmodes.HYBRID}if("undefined"!=typeof t){return e.pluginmodes.FLASH}if("undefined"!=typeof d){return e.pluginmodes.JAVASCRIPT}};this.getNewInstance=function(h,f,j){return new d(h,f,j)};this.getURL=function(){return q}}}(jwplayer.plugins),function(g){var b=g.utils,c=g.events,e=b.foreach;g.plugins.pluginloader=function(r,u){function o(){i?t.sendEvent(c.ERROR,{message:d}):f||(f=!0,v=b.loaderstatus.COMPLETE,t.sendEvent(c.COMPLETE))}function w(){k||o();if(!f&&!i){var h=0,j=r.getPlugins();b.foreach(k,function(n){n=b.getPluginName(n);var m=j[n];n=m.getJS();var l=m.getTarget(),m=m.getStatus();if(m==b.loaderstatus.LOADING||m==b.loaderstatus.NEW){h++}else{if(n&&(!l||parseFloat(l)>parseFloat(g.version))){i=!0,d="Incompatible player version",o()}}});0==h&&o()}}var v=b.loaderstatus.NEW,f=!1,i=!1,d,k=u,t=new c.eventdispatcher;b.extend(this,t);this.setupPlugins=function(h,y,p){var m={length:0,plugins:{}},l=0,q={},x=r.getPlugins();e(y.plugins,function(H,G){var F=b.getPluginName(H),E=x[F],C=E.getFlashPath(),n=E.getJS(),z=E.getURL();C&&(m.plugins[C]=b.extend({},G),m.plugins[C].pluginmode=E.getPluginmode(),m.length++);try{if(n&&y.plugins&&y.plugins[z]){var B=document.createElement("div");B.id=h.id+"_"+F;B.style.position="absolute";B.style.top=0;B.style.zIndex=l+10;q[F]=E.getNewInstance(h,b.extend({},y.plugins[z]),B);l++;h.onReady(p(q[F],B,!0));h.onResize(p(q[F],B))}}catch(j){b.log("ERROR: Failed to load "+F+".")}});h.plugins=q;return m};this.load=function(){if(!(b.exists(u)&&"object"!=b.typeOf(u))){v=b.loaderstatus.LOADING;e(u,function(j){b.exists(j)&&(j=r.addPlugin(j),j.addEventListener(c.COMPLETE,w),j.addEventListener(c.ERROR,a))});var h=r.getPlugins();e(h,function(l,j){j.load()})}w()};var a=this.pluginFailed=function(){i||(i=!0,d="File not found",o())};this.getStatus=function(){return v}}}(jwplayer),function(){jwplayer.parsers={localName:function(a){return a?a.localName?a.localName:a.baseName?a.baseName:"":""},textContent:function(a){return a?a.textContent?a.textContent:a.text?a.text:"":""},getChildNode:function(c,b){return c.childNodes[b]},numChildren:function(a){return a.childNodes?a.childNodes.length:0}}}(jwplayer),function(c){var b=c.parsers;(b.jwparser=function(){}).parseEntry=function(d,l){for(var i=[],m=[],g=c.utils.xmlAttribute,a=0;a<d.childNodes.length;a++){var p=d.childNodes[a];if("jwplayer"==p.prefix){var o=b.localName(p);"source"==o?(delete l.sources,i.push({file:g(p,"file"),"default":g(p,"default"),label:g(p,"label"),type:g(p,"type")})):"track"==o?(delete l.tracks,m.push({file:g(p,"file"),"default":g(p,"default"),kind:g(p,"kind"),label:g(p,"label")})):(l[o]=c.utils.serialize(b.textContent(p)),"file"==o&&l.sources&&delete l.sources)}l.file||(l.file=l.link)}if(i.length){l.sources=[];for(a=0;a<i.length;a++){0<i[a].file.length&&(i[a]["default"]="true"==i[a]["default"]?!0:!1,i[a].label.length||delete i[a].label,l.sources.push(i[a]))}}if(m.length){l.tracks=[];for(a=0;a<m.length;a++){0<m[a].file.length&&(m[a]["default"]="true"==m[a]["default"]?!0:!1,m[a].kind=!m[a].kind.length?"captions":m[a].kind,m[a].label.length||delete m[a].label,l.tracks.push(m[a]))}}return l}}(jwplayer),function(n){var b=jwplayer.utils,c=b.xmlAttribute,l=n.localName,i=n.textContent,m=n.numChildren,g=n.mediaparser=function(){};g.parseGroup=function(e,r){var o,a,k=[];for(a=0;a<m(e);a++){if(o=e.childNodes[a],"media"==o.prefix&&l(o)){switch(l(o).toLowerCase()){case"content":c(o,"duration")&&(r.duration=b.seconds(c(o,"duration")));0<m(o)&&(r=g.parseGroup(o,r));c(o,"url")&&(r.sources||(r.sources=[]),r.sources.push({file:c(o,"url"),type:c(o,"type"),width:c(o,"width"),label:c(o,"label")}));break;case"title":r.title=i(o);break;case"description":r.description=i(o);break;case"guid":r.mediaid=i(o);break;case"thumbnail":r.image||(r.image=c(o,"url"));break;case"group":g.parseGroup(o,r);break;case"subtitle":var f={};f.file=c(o,"url");f.kind="captions";if(0<c(o,"lang").length){var h=f;o=c(o,"lang");var j={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};o=j[o]?j[o]:o;h.label=o}k.push(f)}}}r.hasOwnProperty("tracks")||(r.tracks=[]);for(a=0;a<k.length;a++){r.tracks.push(k[a])}return r}}(jwplayer.parsers),function(n){function b(d){for(var o={},k=0;k<d.childNodes.length;k++){var f=d.childNodes[k],j=g(f);if(j){switch(j.toLowerCase()){case"enclosure":o.file=c.xmlAttribute(f,"url");break;case"title":o.title=l(f);break;case"guid":o.mediaid=l(f);break;case"pubdate":o.date=l(f);break;case"description":o.description=l(f);break;case"link":o.link=l(f);break;case"category":o.tags=o.tags?o.tags+l(f):l(f)}}}o=n.mediaparser.parseGroup(d,o);o=n.jwparser.parseEntry(d,o);return new jwplayer.playlist.item(o)}var c=jwplayer.utils,l=n.textContent,i=n.getChildNode,m=n.numChildren,g=n.localName;n.rssparser={};n.rssparser.parse=function(a){for(var p=[],j=0;j<m(a);j++){var o=i(a,j);if("channel"==g(o).toLowerCase()){for(var h=0;h<m(o);h++){var e=i(o,h);"item"==g(e).toLowerCase()&&p.push(b(e))}}}return p}}(jwplayer.parsers),function(a){a.playlist=function(b){var c=[];if("array"==a.utils.typeOf(b)){for(var d=0;d<b.length;d++){c.push(new a.playlist.item(b[d]))}}else{c.push(new a.playlist.item(b))}return c}}(jwplayer),function(c){var b=c.item=function(a){var i=jwplayer.utils,g=i.extend({},b.defaults,a);g.tracks=a&&i.exists(a.tracks)?a.tracks:[];0==g.sources.length&&(g.sources=[new c.source(g)]);for(var l=0;l<g.sources.length;l++){var d=g.sources[l]["default"];g.sources[l]["default"]=d?"true"==d.toString():!1;g.sources[l]=new c.source(g.sources[l])}if(g.captions&&!i.exists(a.tracks)){for(a=0;a<g.captions.length;a++){g.tracks.push(g.captions[a])}delete g.captions}for(l=0;l<g.tracks.length;l++){g.tracks[l]=new c.track(g.tracks[l])}return g};b.defaults={description:"",image:"",mediaid:"",title:"",sources:[],tracks:[]}}(jwplayer.playlist),function(i){var b=jwplayer,c=b.utils,g=b.events,e=b.parsers;i.loader=function(){function f(p){try{var n=p.responseXML.childNodes;p="";for(var m=0;m<n.length&&!(p=n[m],8!=p.nodeType);m++){}"xml"==e.localName(p)&&(p=p.nextSibling);if("rss"!=e.localName(p)){d("Not a valid RSS feed")}else{var a=new i(e.rssparser.parse(p));k.sendEvent(g.JWPLAYER_PLAYLIST_LOADED,{playlist:a})}}catch(o){d()}}function h(j){d(j.match(/invalid/i)?"Not a valid RSS feed":"")}function d(j){k.sendEvent(g.JWPLAYER_ERROR,{message:j?j:"Error loading file"})}var k=new g.eventdispatcher;c.extend(this,k);this.load=function(a){c.ajax(a,f,h)}}}(jwplayer.playlist),function(e){var b=jwplayer.utils,c={file:void 0,label:void 0,type:void 0,"default":void 0};e.source=function(a){var g=b.extend({},c);b.foreach(c,function(d){b.exists(a[d])&&(g[d]=a[d],delete a[d])});g.type&&0<g.type.indexOf("/")&&(g.type=b.extensionmap.mimeType(g.type));"m3u8"==g.type&&(g.type="hls");"smil"==g.type&&(g.type="rtmp");return g}}(jwplayer.playlist),function(e){var b=jwplayer.utils,c={file:void 0,label:void 0,kind:"captions","default":!1};e.track=function(f){var a=b.extend({},c);f||(f={});b.foreach(c,function(d){b.exists(f[d])&&(a[d]=f[d],delete f[d])});return a}}(jwplayer.playlist),function(n){var b=n.utils,c=n.events,l=!0,i=!1,m=document,g=n.embed=function(L){function K(p,q){b.foreach(q,function(r,t){"function"==typeof p[r]&&p[r].call(p,t)})}function G(){if(A.sitecatalyst){try{null!=s&&s.hasOwnProperty("Media")||I()}catch(v){I();return}}if("array"==b.typeOf(A.playlist)&&2>A.playlist.length&&(0==A.playlist.length||!A.playlist[0].sources||0==A.playlist[0].sources.length)){F()}else{if(!a){if("string"==b.typeOf(A.playlist)){var t=new n.playlist.loader;t.addEventListener(c.JWPLAYER_PLAYLIST_LOADED,function(u){A.playlist=u.playlist;a=i;G()});t.addEventListener(c.JWPLAYER_ERROR,function(u){a=i;F(u)});a=l;t.load(A.playlist)}else{if(d.getStatus()==b.loaderstatus.COMPLETE){for(t=0;t<A.modes.length;t++){if(A.modes[t].type&&g[A.modes[t].type]){var r=b.extend({},A),q=new g[A.modes[t].type](k,A.modes[t],r,d,L);if(q.supportsConfig()){return q.addEventListener(c.ERROR,H),q.embed(),K(L,r.events),L}}}if(A.fallback){var p="No suitable players found and fallback enabled";o=setTimeout(function(){E(p,l)},10);b.log(p);new g.download(k,A,F)}else{p="No suitable players found and fallback disabled",E(p,i),b.log(p),k.parentNode.replaceChild(h,k)}}}}}}function H(p){J(k,D+p.message)}function F(p){p&&p.message?J(k,"Error loading playlist: "+p.message):J(k,D+"No playable sources found")}function I(){J(k,"Adobe SiteCatalyst Error: Could not find Media Module")}function J(p,t){if(A.fallback){var q=p.style;q.backgroundColor="#000";q.color="#FFF";q.width=b.styleDimension(A.width);q.height=b.styleDimension(A.height);q.display="table";q.opacity=1;var q=document.createElement("p"),r=q.style;r.verticalAlign="middle";r.textAlign="center";r.display="table-cell";r.font="15px/20px Arial, Helvetica, sans-serif";q.innerHTML=t.replace(":",":\x3cbr\x3e");p.innerHTML="";p.appendChild(q);E(t,l)}else{E(t,i)}}function E(p,q){o&&(clearTimeout(o),o=null);L.dispatchEvent(c.JWPLAYER_SETUP_ERROR,{message:p,fallback:q})}var A=new g.config(L.config),k,j,h,f=A.width,e=A.height,D="Error loading player: ",d=n.plugins.loadPlugins(L.id,A.plugins),a=i,o=null;A.fallbackDiv&&(h=A.fallbackDiv,delete A.fallbackDiv);A.id=L.id;j=m.getElementById(L.id);A.aspectratio?L.config.aspectratio=A.aspectratio:delete L.config.aspectratio;k=m.createElement("div");k.id=j.id;k.style.width=0<f.toString().indexOf("%")?f:f+"px";k.style.height=0<e.toString().indexOf("%")?e:e+"px";j.parentNode.replaceChild(k,j);n.embed.errorScreen=J;d.addEventListener(c.COMPLETE,G);d.addEventListener(c.ERROR,function(p){J(k,"Could not load plugins: "+p.message)});d.load();return L}}(jwplayer),function(i){function b(h){if(h.playlist){for(var j=0;j<h.playlist.length;j++){h.playlist[j]=new e(h.playlist[j])}}else{var f={};g.foreach(e.defaults,function(a){c(h,f,a)});f.sources||(h.levels?(f.sources=h.levels,delete h.levels):(j={},c(h,j,"file"),c(h,j,"type"),f.sources=j.file?[j]:[]));h.playlist=[new e(f)]}}function c(h,j,f){g.exists(h[f])&&(j[f]=h[f],delete h[f])}var g=i.utils,e=i.playlist.item;(i.embed.config=function(f){var d={fallback:!0,height:270,primary:"html5",width:480,base:f.base?f.base:g.getScriptPath("jwplayer.js"),aspectratio:""};f=g.extend(d,i.defaults,f);var d={type:"html5",src:"https://consumer.huawei.com/en/ucmf/groups/public/documents/webasset/jwplayer_cej.html5.js"},a={type:"flash",src:f.base+"jwplayer.flash.swf"};f.modes="flash"==f.primary?[a,d]:[d,a];f.listbar&&(f.playlistsize=f.listbar.size,f.playlistposition=f.listbar.position,f.playlistlayout=f.listbar.layout);f.flashplayer&&(a.src=f.flashplayer);f.html5player&&(d.src=f.html5player);b(f);a=f.aspectratio;if("string"!=typeof a||!g.exists(a)){d=0}else{var h=a.indexOf(":");-1==h?d=0:(d=parseFloat(a.substr(0,h)),a=parseFloat(a.substr(h+1)),d=0>=d||0>=a?0:100*(a/d)+"%")}-1==f.width.toString().indexOf("%")?delete f.aspectratio:d?f.aspectratio=d:delete f.aspectratio;return f}).addConfig=function(a,f){b(f);return g.extend(a,f)}}(jwplayer),function(e){var b=e.utils,c=document;e.embed.download=function(B,y,A){function x(g,l){for(var h=c.querySelectorAll(g),j=0;j<h.length;j++){b.foreach(l,function(m,d){h[j].style[m]=d})}}function D(g,d,h){g=c.createElement(g);d&&(g.className="jwdownload"+d);h&&h.appendChild(g);return g}var C=b.extend({},y),k=C.width?C.width:480,o=C.height?C.height:320,i;y=y.logo?y.logo:{prefix:b.repo(),file:"logo.png",margin:10};var w,z,f,C=C.playlist,a,G=["mp4","aac","mp3"];if(C&&C.length){a=C[0];i=a.sources;for(C=0;C<i.length;C++){var F=i[C],E=F.type?F.type:b.extensionmap.extType(b.extension(F.file));F.file&&b.foreach(G,function(d){E==G[d]?(w=F.file,z=a.image):b.isYouTube(F.file)&&(f=F.file)})}w?(i=w,A=z,B&&(C=D("a","display",B),D("div","icon",C),D("div","logo",C),i&&C.setAttribute("href",b.getAbsolutePath(i))),C="#"+B.id+" .jwdownload",B.style.width="",B.style.height="",x(C+"display",{width:b.styleDimension(Math.max(320,k)),height:b.styleDimension(Math.max(180,o)),background:"black center no-repeat "+(A?"url("+A+")":""),backgroundSize:"contain",position:"relative",border:"none",display:"block"}),x(C+"display div",{position:"absolute",width:"100%",height:"100%"}),x(C+"logo",{top:y.margin+"px",right:y.margin+"px",background:"top right no-repeat url("+y.prefix+y.file+")"}),x(C+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})):f?(y=f,B=D("embed","",B),B.src="http://www.youtube.com/v/"+b.youTubeID(y),B.type="application/x-shockwave-flash",B.width=k,B.height=o):A()}}}(jwplayer),function(i){var b=i.utils,c=i.events,g={};(i.embed.flash=function(t,o,v,u,f){function h(l,j,n){var m=document.createElement("param");m.setAttribute("name",j);m.setAttribute("value",n);l.appendChild(m)}function d(l,j,m){return function(){try{m&&document.getElementById(f.id+"_wrapper").appendChild(j);var n=document.getElementById(f.id).getPluginConfig("display");"function"==typeof l.resize&&l.resize(n.width,n.height);j.style.left=n.x;j.style.top=n.h}catch(p){}}}function k(j){if(!j){return{}}var m={},l=[];b.foreach(j,function(n,q){var p=b.getPluginName(n);l.push(n);b.foreach(q,function(x,w){m[p+"."+x]=w})});m.plugins=l.join(",");return m}var r=new i.events.eventdispatcher,a=b.flashVersion();b.extend(this,r);this.embed=function(){v.id=f.id;if(10>a){return r.sendEvent(c.ERROR,{message:"Flash version must be 10.0 or greater"}),!1}var p,n,m=f.config.listbar,l=b.extend({},v);if(t.id+"_wrapper"==t.parentNode.id){p=document.getElementById(t.id+"_wrapper")}else{p=document.createElement("div");n=document.createElement("div");n.style.display="none";n.id=t.id+"_aspect";p.id=t.id+"_wrapper";p.style.position="relative";p.style.display="block";p.style.width=b.styleDimension(l.width);p.style.height=b.styleDimension(l.height);if(f.config.aspectratio){var j=parseFloat(f.config.aspectratio);n.style.display="block";n.style.marginTop=f.config.aspectratio;p.style.height="auto";p.style.display="inline-block";m&&("bottom"==m.position?n.style.paddingBottom=m.size+"px":"right"==m.position&&(n.style.marginBottom=-1*m.size*(j/100)+"px"))}t.parentNode.replaceChild(p,t);p.appendChild(t);p.appendChild(n)}p=u.setupPlugins(f,l,d);0<p.length?b.extend(l,k(p.plugins)):delete l.plugins;"undefined"!=typeof l["dock.position"]&&"false"==l["dock.position"].toString().toLowerCase()&&(l.dock=l["dock.position"],delete l["dock.position"]);p=l.wmode?l.wmode:l.height&&40>=l.height?"transparent":"opaque";n="height width modes events primary base fallback volume".split(" ");for(m=0;m<n.length;m++){delete l[n[m]]}n=b.getCookies();b.foreach(n,function(w,q){"undefined"==typeof l[w]&&(l[w]=q)});n=window.location.href.split("/");n.splice(n.length-1,1);n=n.join("/");l.base=n+"/";g[t.id]=l;b.isIE()?(n='\x3cobject classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width\x3d"100%" height\x3d"100%"id\x3d"'+t.id+'" name\x3d"'+t.id+'" tabindex\x3d0""\x3e',n+='\x3cparam name\x3d"movie" value\x3d"'+o.src+'"\x3e',n+='\x3cparam name\x3d"allowfullscreen" value\x3d"true"\x3e\x3cparam name\x3d"allowscriptaccess" value\x3d"always"\x3e',n+='\x3cparam name\x3d"seamlesstabbing" value\x3d"true"\x3e',n+='\x3cparam name\x3d"wmode" value\x3d"'+p+'"\x3e',n+='\x3cparam name\x3d"bgcolor" value\x3d"#000000"\x3e',n+="\x3c/object\x3e",t.outerHTML=n,p=document.getElementById(t.id)):(n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),n.setAttribute("data",o.src),n.setAttribute("width","100%"),n.setAttribute("height","100%"),n.setAttribute("bgcolor","#000000"),n.setAttribute("id",t.id),n.setAttribute("name",t.id),n.setAttribute("tabindex",0),h(n,"allowfullscreen","true"),h(n,"allowscriptaccess","always"),h(n,"seamlesstabbing","true"),h(n,"wmode",p),t.parentNode.replaceChild(n,t),p=n);f.config.aspectratio&&(p.style.position="absolute");f.container=p;f.setPlayer(p,"flash")};this.supportsConfig=function(){if(a){if(v){if("string"==b.typeOf(v.playlist)){return !0}try{var m=v.playlist[0].sources;if("undefined"==typeof m){return !0}for(var l=0;l<m.length;l++){if(m[l].file&&e(m[l].file,m[l].type)){return !0}}}catch(j){}}else{return !0}}return !1}}).getVars=function(d){return g[d]};var e=i.embed.flashCanPlay=function(j,h){if(b.isYouTube(j)||b.isRtmp(j,h)||"hls"==h){return !0}var a=b.extensionmap[h?h:b.extension(j)];return !a?!1:!!a.flash}}(jwplayer),function(g){var b=g.utils,c=b.extensionmap,e=g.events;g.embed.html5=function(o,q,k,t,r){function d(j,h,l){return function(){try{var n=document.querySelector("#"+o.id+" .jwmain");l&&n.appendChild(h);"function"==typeof j.resize&&(j.resize(n.clientWidth,n.clientHeight),setTimeout(function(){j.resize(n.clientWidth,n.clientHeight)},400));h.left=n.style.left;h.top=n.style.top}catch(m){}}}function f(h){a.sendEvent(h.type,{message:"HTML5 player not found"})}var a=this,i=new e.eventdispatcher;b.extend(a,i);a.embed=function(){if(g.html5){t.setupPlugins(r,k,d);o.innerHTML="";var h=g.utils.extend({},k);delete h.volume;h=new g.html5.player(h);r.container=document.getElementById(r.id);r.setPlayer(h,"html5")}else{h=new b.scriptloader(q.src),h.addEventListener(e.ERROR,f),h.addEventListener(e.COMPLETE,a.embed),h.load()}};a.supportsConfig=function(){if(g.vid.canPlayType){try{if("string"==b.typeOf(k.playlist)){return !0}for(var F=k.playlist[0].sources,D=0;D<F.length;D++){var B;var A=F[D].file,x=F[D].type;if(null!==navigator.userAgent.match(/BlackBerry/i)||b.isAndroid()&&("m3u"==b.extension(A)||"m3u8"==b.extension(A))||b.isRtmp(A,x)){B=!1}else{var w=c[x?x:b.extension(A)],v;if(!w||w.flash&&!w.html5){v=!1}else{var u=w.html5,j=g.vid;if(u){try{v=j.canPlayType(u)?!0:!1}catch(E){v=!1}}else{v=!0}}B=v}if(B){return !0}}}catch(C){}}return !1}}}(jwplayer),function(g){var b=g.embed,c=g.utils,e=c.extend(function(v){var w=c.repo(),t=c.extend({},g.defaults),y=c.extend({},t,v.config),x=v.config,i=y.plugins,k=y.analytics,h=w+"jwpsrv.js",o=w+"sharing.js",u=w+"related.js",d=w+"gapro.js",t=g.key?g.key:t.key,a=(new g.utils.key(t)).edition(),i=i?i:{};"ads"==a&&y.advertising&&(y.advertising.client.match(".js$|.swf$")?i[y.advertising.client]=y.advertising:i[w+y.advertising.client+".js"]=y.advertising);delete x.advertising;x.key=t;y.analytics&&(y.analytics.client&&y.analytics.client.match(".js$|.swf$"))&&(h=y.analytics.client);delete x.analytics;if("free"==a||!k||!1!==k.enabled){i[h]=k?k:{}}delete i.sharing;delete i.related;switch(a){case"premium":case"ads":y.related&&(y.related.client&&y.related.client.match(".js$|.swf$")&&(u=y.related.client),i[u]=y.related),y.ga&&(y.ga.client&&y.ga.client.match(".js$|.swf$")&&(d=y.ga.client),i[d]=y.ga),x.sitecatalyst&&new g.embed.sitecatalyst(v);case"pro":y.sharing&&(y.sharing.client&&y.sharing.client.match(".js$|.swf$")&&(o=y.sharing.client),i[o]=y.sharing),y.skin&&(x.skin=y.skin.replace(/^(beelden|bekle|five|glow|modieus|roundster|stormtrooper|vapor)$/i,c.repo()+"skins/$1.xml"))}x.plugins=i;return new b(v)},b);g.embed=e}(jwplayer),function(c){var b=jwplayer.utils;c.sitecatalyst=function(A){function y(d){B.debug&&b.log(d)}function w(d){d=d.split("/");d=d[d.length-1];d=d.split("?");return d[0]}function z(){if(!x){x=!0;var d=C.getPosition();y("stop: "+t+" : "+d);s.Media.stop(t,d)}}function v(){i||(z(),i=!0,y("close: "+t),s.Media.close(t),a=!0,u=0)}var C=A,B=b.extend({},C.config.sitecatalyst),o={onPlay:function(){if(!a){var d=C.getPosition();x=!1;y("play: "+t+" : "+d);s.Media.play(t,d)}},onPause:z,onBuffer:z,onIdle:v,onPlaylistItem:function(m){try{a=!0;v();u=0;var l;if(B.mediaName){l=B.mediaName}else{var h=C.getPlaylistItem(m.index);l=h.title?h.title:h.file?w(h.file):h.sources&&h.sources.length?w(h.sources[0].file):""}t=l;k=B.playerName?B.playerName:C.id}catch(j){b.log(j)}},onTime:function(){if(a){var d=C.getDuration();if(-1==d){return}i=x=a=!1;y("open: "+t+" : "+d+" : "+k);s.Media.open(t,d,k);y("play: "+t+" : 0");s.Media.play(t,0)}d=C.getPosition();if(3<=Math.abs(d-u)){var e=u;y("seek: "+e+" to "+d);y("stop: "+t+" : "+e);s.Media.stop(t,e);y("play: "+t+" : "+d);s.Media.play(t,d)}u=d},onComplete:v},t,k,u,x=!0,i=!0,a;b.foreach(o,function(d){C[d](o[d])})}}(jwplayer.embed),function(n){var b=[],c=n.utils,l=n.events,i=l.state,m=document,g=n.api=function(G){function D(q,p){return function(a){return p(q,a)}}function j(q,p){d[q]||(d[q]=[],h(l.JWPLAYER_PLAYER_STATE,function(a){var u=a.newstate;a=a.oldstate;if(u==q){var t=d[u];if(t){for(var r=0;r<t.length;r++){"function"==typeof t[r]&&t[r].call(this,{oldstate:a,newstate:u})}}}}));d[q].push(p);return A}function k(q,p){try{q.jwAddEventListener(p,'function(dat) { jwplayer("'+A.id+'").dispatchEvent("'+p+'", dat); }')}catch(r){c.log("Could not add internal listener")}}function h(q,p){e[q]||(e[q]=[],K&&J&&k(K,q));e[q].push(p);return A}function o(){if(J){for(var q=arguments[0],p=[],r=1;r<arguments.length;r++){p.push(arguments[r])}if("undefined"!=typeof K&&"function"==typeof K[q]){switch(p.length){case 4:return K[q](p[0],p[1],p[2],p[3]);case 3:return K[q](p[0],p[1],p[2]);case 2:return K[q](p[0],p[1]);case 1:return K[q](p[0]);default:return K[q]()}}return null}I.push(arguments)}var A=this,e={},d={},K=void 0,J=!1,I=[],H=void 0,F={},f={};A.container=G;A.id=G.id;A.getBuffer=function(){return o("jwGetBuffer")};A.getContainer=function(){return A.container};A.addButton=function(q,p,u,t){try{f[t]=u,o("jwDockAddButton",q,p,"jwplayer('"+A.id+"').callback('"+t+"')",t)}catch(r){c.log("Could not add dock button"+r.message)}};A.removeButton=function(p){o("jwDockRemoveButton",p)};A.callback=function(p){if(f[p]){f[p]()}};A.forceState=function(p){o("jwForceState",p);return A};A.releaseState=function(){return o("jwReleaseState")};A.getDuration=function(){return o("jwGetDuration")};A.getFullscreen=function(){return o("jwGetFullscreen")};A.getHeight=function(){return o("jwGetHeight")};A.getLockState=function(){return o("jwGetLockState")};A.getMeta=function(){return A.getItemMeta()};A.getMute=function(){return o("jwGetMute")};A.getPlaylist=function(){var p=o("jwGetPlaylist");"flash"==A.renderingMode&&c.deepReplaceKeyName(p,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);return p};A.getPlaylistItem=function(p){c.exists(p)||(p=A.getPlaylistIndex());return A.getPlaylist()[p]};A.getPlaylistIndex=function(){return o("jwGetPlaylistIndex")};A.getPosition=function(){return o("jwGetPosition")};A.getRenderingMode=function(){return A.renderingMode};A.getState=function(){return o("jwGetState")};A.getVolume=function(){return o("jwGetVolume")};A.getWidth=function(){return o("jwGetWidth")};A.setFullscreen=function(p){c.exists(p)?o("jwSetFullscreen",p):o("jwSetFullscreen",!o("jwGetFullscreen"));return A};A.setMute=function(p){c.exists(p)?o("jwSetMute",p):o("jwSetMute",!o("jwGetMute"));return A};A.lock=function(){return A};A.unlock=function(){return A};A.load=function(p){o("jwLoad",p);return A};A.playlistItem=function(p){o("jwPlaylistItem",parseInt(p));return A};A.playlistPrev=function(){o("jwPlaylistPrev");return A};A.playlistNext=function(){o("jwPlaylistNext");return A};A.resize=function(q,p){if("flash"!=A.renderingMode){var t=document.getElementById(A.id);t.className=t.className.replace(/\s+aspectMode/,"");t.style.display="block";o("jwResize",q,p)}else{var t=m.getElementById(A.id+"_wrapper"),r=m.getElementById(A.id+"_aspect");r&&(r.style.display="none");t&&(t.style.display="block",t.style.width=c.styleDimension(q),t.style.height=c.styleDimension(p))}return A};A.play=function(p){"undefined"==typeof p?(p=A.getState(),p==i.PLAYING||p==i.BUFFERING?o("jwPause"):o("jwPlay")):o("jwPlay",p);return A};A.pause=function(p){"undefined"==typeof p?(p=A.getState(),p==i.PLAYING||p==i.BUFFERING?o("jwPause"):o("jwPlay")):o("jwPause",p);return A};A.stop=function(){o("jwStop");return A};A.seek=function(p){o("jwSeek",p);return A};A.setVolume=function(p){o("jwSetVolume",p);return A};A.loadInstream=function(q,p){return H=new g.instream(this,K,q,p)};A.getQualityLevels=function(){return o("jwGetQualityLevels")};A.getCurrentQuality=function(){return o("jwGetCurrentQuality")};A.setCurrentQuality=function(p){o("jwSetCurrentQuality",p)};A.getCaptionsList=function(){return o("jwGetCaptionsList")};A.getCurrentCaptions=function(){return o("jwGetCurrentCaptions")};A.setCurrentCaptions=function(p){o("jwSetCurrentCaptions",p)};A.getControls=function(){return o("jwGetControls")};A.getSafeRegion=function(){return o("jwGetSafeRegion")};A.setControls=function(p){o("jwSetControls",p)};A.destroyPlayer=function(){o("jwPlayerDestroy")};A.playAd=function(p){o("jwPlayAd",p)};var E={onBufferChange:l.JWPLAYER_MEDIA_BUFFER,onBufferFull:l.JWPLAYER_MEDIA_BUFFER_FULL,onError:l.JWPLAYER_ERROR,onSetupError:l.JWPLAYER_SETUP_ERROR,onFullscreen:l.JWPLAYER_FULLSCREEN,onMeta:l.JWPLAYER_MEDIA_META,onMute:l.JWPLAYER_MEDIA_MUTE,onPlaylist:l.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:l.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:l.JWPLAYER_PLAYLIST_COMPLETE,onReady:l.API_READY,onResize:l.JWPLAYER_RESIZE,onComplete:l.JWPLAYER_MEDIA_COMPLETE,onSeek:l.JWPLAYER_MEDIA_SEEK,onTime:l.JWPLAYER_MEDIA_TIME,onVolume:l.JWPLAYER_MEDIA_VOLUME,onBeforePlay:l.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:l.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:l.JWPLAYER_DISPLAY_CLICK,onControls:l.JWPLAYER_CONTROLS,onQualityLevels:l.JWPLAYER_MEDIA_LEVELS,onQualityChange:l.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:l.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:l.JWPLAYER_CAPTIONS_CHANGED,onAdError:l.JWPLAYER_AD_ERROR,onAdClick:l.JWPLAYER_AD_CLICK,onAdImpression:l.JWPLAYER_AD_IMPRESSION,onAdTime:l.JWPLAYER_AD_TIME,onAdComplete:l.JWPLAYER_AD_COMPLETE,onAdCompanions:l.JWPLAYER_AD_COMPANIONS};c.foreach(E,function(p){A[p]=D(E[p],h)});var C={onBuffer:i.BUFFERING,onPause:i.PAUSED,onPlay:i.PLAYING,onIdle:i.IDLE};c.foreach(C,function(p){A[p]=D(C[p],j)});A.remove=function(){if(!J){throw"Cannot call remove() before player is ready"}I=[];g.destroyPlayer(this.id)};A.setup=function(q){if(n.embed){var p=m.getElementById(A.id);p&&(q.fallbackDiv=p);p=A;I=[];g.destroyPlayer(p.id);p=n(A.id);p.config=q;return new n.embed(p)}return A};A.registerPlugin=function(q,p,t,r){n.plugins.registerPlugin(q,p,t,r)};A.setPlayer=function(q,p){K=q;A.renderingMode=p};A.detachMedia=function(){if("html5"==A.renderingMode){return o("jwDetachMedia")}};A.attachMedia=function(p){if("html5"==A.renderingMode){return o("jwAttachMedia",p)}};A.dispatchEvent=function(q,p){if(e[q]){for(var u=c.translateEventResponse(q,p),t=0;t<e[q].length;t++){if("function"==typeof e[q][t]){try{q==l.JWPLAYER_PLAYLIST_LOADED&&c.deepReplaceKeyName(u.playlist,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]),e[q][t].call(this,u)}catch(r){c.log("There was an error calling back an event handler")}}}}};A.dispatchInstreamEvent=function(p){H&&H.dispatchEvent(p,arguments)};A.callInternal=o;A.playerReady=function(p){J=!0;K||A.setPlayer(m.getElementById(p.id));A.container=m.getElementById(A.id);c.foreach(e,function(q){k(K,q)});h(l.JWPLAYER_PLAYLIST_ITEM,function(){F={}});h(l.JWPLAYER_MEDIA_META,function(q){c.extend(F,q.metadata)});for(A.dispatchEvent(l.API_READY);0<I.length;){o.apply(this,I.shift())}};A.getItemMeta=function(){return F};A.isBeforePlay=function(){return K.jwIsBeforePlay()};A.isBeforeComplete=function(){return K.jwIsBeforeComplete()};return A};g.selectPlayer=function(a){var d;c.exists(a)||(a=0);a.nodeType?d=a:"string"==typeof a&&(d=m.getElementById(a));return d?(a=g.playerById(d.id))?a:g.addPlayer(new g(d)):"number"==typeof a?b[a]:null};g.playerById=function(a){for(var d=0;d<b.length;d++){if(b[d].id==a){return b[d]}}return null};g.addPlayer=function(a){for(var d=0;d<b.length;d++){if(b[d]==a){return a}}b.push(a);return a};g.destroyPlayer=function(a){for(var j=-1,h,e=0;e<b.length;e++){b[e].id==a&&(j=e,h=b[e])}0<=j&&(a=h.id,e=m.getElementById(a+("flash"==h.renderingMode?"_wrapper":"")),c.clearCss&&c.clearCss("#"+a),e&&("html5"==h.renderingMode&&h.destroyPlayer(),h=m.createElement("div"),h.id=a,e.parentNode.replaceChild(h,e)),b.splice(j,1));return null};n.playerReady=function(d){var e=n.api.playerById(d.id);e?e.playerReady(d):n.api.selectPlayer(d.id).playerReady(d)}}(jwplayer),function(g){var b=g.events,c=g.utils,e=b.state;g.api.instream=function(r,q,k,u){function t(j,d){i[j]||(i[j]=[],a.jwInstreamAddEventListener(j,'function(dat) { jwplayer("'+h.id+'").dispatchInstreamEvent("'+j+'", dat); }'));i[j].push(d);return this}function f(j,l){o[j]||(o[j]=[],t(b.JWPLAYER_PLAYER_STATE,function(m){var w=m.newstate,v=m.oldstate;if(w==j){var p=o[w];if(p){for(var n=0;n<p.length;n++){"function"==typeof p[n]&&p[n].call(this,{oldstate:v,newstate:w,type:m.type})}}}}));o[j].push(l);return this}var h=r,a=q,i={},o={};this.dispatchEvent=function(l,j){if(i[l]){for(var n=c.translateEventResponse(l,j[1]),m=0;m<i[l].length;m++){"function"==typeof i[l][m]&&i[l][m].call(this,n)}}};this.onError=function(d){return t(b.JWPLAYER_ERROR,d)};this.onFullscreen=function(d){return t(b.JWPLAYER_FULLSCREEN,d)};this.onMeta=function(d){return t(b.JWPLAYER_MEDIA_META,d)};this.onMute=function(d){return t(b.JWPLAYER_MEDIA_MUTE,d)};this.onComplete=function(d){return t(b.JWPLAYER_MEDIA_COMPLETE,d)};this.onTime=function(d){return t(b.JWPLAYER_MEDIA_TIME,d)};this.onBuffer=function(d){return f(e.BUFFERING,d)};this.onPause=function(d){return f(e.PAUSED,d)};this.onPlay=function(d){return f(e.PLAYING,d)};this.onIdle=function(d){return f(e.IDLE,d)};this.onClick=function(d){return t(b.JWPLAYER_INSTREAM_CLICK,d)};this.onInstreamDestroyed=function(d){return t(b.JWPLAYER_INSTREAM_DESTROYED,d)};this.play=function(d){a.jwInstreamPlay(d)};this.pause=function(d){a.jwInstreamPause(d)};this.destroy=function(){a.jwInstreamDestroy()};this.setText=function(d){a.jwInstreamSetText(d?d:"")};h.callInternal("jwLoadInstream",k,u?u:{})}}(jwplayer),function(e){var b=e.api,c=b.selectPlayer;b.selectPlayer=function(d){return(d=c(d))?d:{registerPlugin:function(g,i,h){e.plugins.registerPlugin(g,i,h)}}}}(jwplayer));jwplayer.key="uG/VHSbjrT7/udRHL0vnyr5GjyFu3WZQ9+VRUxia1vs=";

window.CLOSURE_NO_DEPS = true;(function() {var k=window.jwplayer.jwpsrv=window.jwplayer.jwpsrv||{},p=window.jwplayer;
function u(b,a,c,d){this.f=w;this.extend=window.jwplayer.utils.extend;this.J="http"+("https:"===document.location.protocol?"s://ssl.":"://")+"p.jwpcdn.com/6/jwpsrv_frq.js";this.K=d;this.debug=a;this.R=c;this.F=0;this.G="p pt pd pm pi pf ps psl psd pk pkl pkd pkt pkc pkp b bp bpb bpr bl ble blb bat bal bdt bfb bfp bhp bsp bsv sth stn ste stu stf bar bas bcr bht bte bpy bph bpf brt bsk bwi a acv acg at ak am an av ad ap ab abp abm abo abl abn y ym yp g gi gt s sl sc sh r rf ro rc rh rd c cc cs cf co cb ct ce cw cd m mb ms mt l lf lh ll lm lp".split(" ");this.D=
"dev.jwpltx.com";this.I="n.jwpltx.com";this.H="v1/playerconfig/ping.gif?";this.d=p.utils.exists;this.e=b;"function"!==p.utils.typeOf(k.setSampleFrequency)&&(k.setSampleFrequency=k.setSampleFrequency||function(b){k.sampling_frequency=parseFloat(b)},this.A=new p.utils.scriptloader(this.J),this.A.load());k.parseConfig=k.parseConfig||A(this)}
function A(b){return function(a){var c={};b.f(b.G,function(b,a){c[a]=0});b.d(a.k)||(a=new C(a));a=a.k();D(b,c,a);E(b,a);F(b,c,a.playlist);b.d(a.listbar)&&K(b,c,a.listbar);b.d(a.captions)&&L(b,c,a.captions);b.d(a.rtmp)&&M(b,c,a.rtmp);b.d(a.logo)&&N(b,c,a.logo);b.d(a.related)&&aa(b,c,a.related);b.d(a.sharing)&&ba(b,c,a.sharing);var d;b.d(a.plugins)&&b.f(a.plugins,function(b,a){a.client&&(a.client.match("vast")||a.client.match("googima"))&&(d=a)});b.d(d)&&ca(b,c,d);b.d(a.sitecatalyst)&&da(b,c,a.sitecatalyst);
b.d(a.ga)&&ea(b,c,a.ga);return c}}u.prototype.u=function(){if(void 0===k.sampling_frequency)this.A.addEventListener("COMPLETE",this.u);else{var b=k.sampling_frequency||this.F;if(!(Math.random()>=b)){var a=A(this)(this.e),b=fa(this,a,b);(new Image).src=b}}};
function fa(b,a,c){var d=[];d.push("n="+Math.random().toFixed(16).substr(2,16));d.push("aid="+encodeURIComponent(b.R));d.push("ed="+b.K);d.push("f="+c);d.push("pv="+p.version);var e;if(window.top!==window.self){e=document.referrer;try{e=e||window.top.location.href}catch(z){}}e=e||window.location.href;b.f(a,function(b,a){d.push(b+"="+encodeURIComponent(a))});d.push("pu="+encodeURIComponent(e));return["http"+("https:"===document.location.protocol?"s://s.":"://i."),b.debug?b.D:b.I,"/",b.H,d.join("&")].join("")}
function F(b,a,c){"string"===typeof c?a.pf++:b.f(c,function(c,e){a.p++;b.d(e.title)&&a.pt++;b.d(e.description)&&a.pd++;b.d(e.mediaid)&&a.pm++;b.d(e.image)&&a.pi++;b.d(e.sources)&&ha(b,a,e.sources);b.d(e.tracks)&&ia(b,a,e.tracks)})}function aa(b,a,c){a.r++;b.d(c.file)&&a.rf++;b.d(c.onclick)&&a.ro++;b.d(c.oncomplete)&&a.rc++;b.d(c.heading)&&a.rh++;b.d(c.dimensions)&&a.rd++}function ba(b,a,c){a.s++;b.d(c.link)&&a.sl++;b.d(c.heading)&&a.sh++;b.d(c.code)&&a.sc++}
function K(b,a,c){a.b++;b.d(c.position)&&(a.bp++,"bottom"===c.position&&a.bpb++,"right"===c.position&&a.bpr++);b.d(c.layout)&&(a.bl++,"extended"===c.layout&&a.ble++,"basic"===c.position&&a.blb++)}function ha(b,a,c){b.f(c,function(c,e){a.ps++;b.d(e.label)&&a.psl++;b.d(e["default"])&&e["default"]&&a.psd++})}
function ia(b,a,c){b.f(c,function(c,e){a.pk++;b.d(e.label)&&a.pkl++;b.d(e["default"])&&e["default"]&&a.pkd++;b.d(e.kind)&&("captions"===e.kind&&a.pkp++,"thumbnails"===e.kind&&a.pkt++,"chapters"===e.kind&&a.pkc++)})}
function D(b,a,c){b.d(c.abouttext)&&a.bat++;b.d(c.aboutlink)&&a.bal++;b.d(c.displaytitle)&&c.displaytitle&&a.bdt++;b.d(c.fallback)&&c.fallback&&a.bfb++;b.d(c.flashplayer)&&a.bfp++;b.d(c.html5player)&&a.bhp++;b.d(c.startparam)&&a.bsp++;b.d(c.stagevideo)&&!c.stagevideo&&a.bsv++;b.d(c.stretching)&&a.sth++;b.d(c.stretching)&&"none"==c.stretching&&a.stn++;b.d(c.stretching)&&"exactfit"==c.stretching&&a.ste++;b.d(c.stretching)&&"uniform"==c.stretching&&a.stu++;b.d(c.stretching)&&"fill"==c.stretching&&a.stf++;
b.d(c.aspectratio)&&a.bar++;b.d(c.autostart)&&c.autostart&&a.bas++;b.d(c.controls)&&!c.controls&&a.bcr++;b.d(c.height)&&a.bht++;b.d(c.mute)&&c.mute&&a.bte++;b.d(c.primary)&&a.bpy++;b.d(c.primary)&&"html5"==c.primary&&a.bph++;b.d(c.primary)&&"flash"==c.primary&&a.bpf++;b.d(c.repeat)&&a.brt++;b.d(c.skin)&&a.bsk++;b.d(c.width)&&a.bwi++}
function L(b,a,c){a.c++;b.d(c.color)&&a.cc++;b.d(c.fontSize)&&a.cs++;b.d(c.fontFamily)&&a.cf++;b.d(c.fontOpacity)&&a.co++;b.d(c.backgroundColor)&&a.cb++;b.d(c.backgroundOpacity)&&a.ct++;b.d(c.edgeStyle)&&a.ce++;b.d(c.windowColor)&&a.cw++;b.d(c.windowOpacity)&&a.cd++}function M(b,a,c){a.m++;b.d(c.bufferlength)&&a.mb++;b.d(c.subscribe)&&a.ms++;b.d(c.securetoken)&&a.mt++}
function N(b,a,c){a.l++;b.d(c.file)&&a.lf++;b.d(c.hide)&&a.lh++;b.d(c.link)&&a.ll++;b.d(c.margin)&&a.lm++;b.d(c.position)&&a.lp++}
function ca(b,a,c){a.a++;b.d(c.client)&&c.client.match("vast")&&a.acv++;b.d(c.client)&&c.client.match("googima")&&a.acg++;b.d(c.tag)&&(a.at++,a.abp++);b.d(c.vastxml)&&a.av++;b.d(c.skipoffset)&&a.ak++;b.d(c.admessage)&&a.am++;b.d(c.companiondiv)&&"object"===typeof c.companiondiv&&a.an++;b.d(c.schedule)&&"string"===typeof c.schedule&&a.ap++;b.d(c.schedule)&&"object"===typeof c.schedule&&ja(b,a,c.schedule)}
function ja(b,a,c){a.ad++;b.f(c,function(c,e){switch(e.offset){case "pre":a.abp++;break;case "post":a.abo++;break;default:a.abm++}b.d(e.ad)?O(b,a,e.ad):O(b,a,e)})}function O(b,a,c){b.d(c.type)&&("linear"===c.type&&a.abl++,"nonlinear"===c.type&&a.abn++);a.ab++;b.d(c.tag)&&a.at++;b.d(c.vastxml)&&a.av++}function da(b,a,c){a.y++;b.d(c.mediaName)&&a.ym++;b.d(c.playerName)&&a.yp++}function ea(b,a,c){a.g++;b.d(c.idstring)&&a.gi++;b.d(c.trackingobject)&&a.gt++}
function E(b,a){var c={description:"",L:"",M:"",title:"",Q:[],S:[]};if(!a.playlist){var d={};b.f(c,function(c){P(b,a,d,c)});d.sources||(a.levels?(d.sources=a.levels,delete a.levels):(c={},P(b,a,c,"file"),P(b,a,c,"type"),d.sources=c.file?[c]:[]));a.playlist=[Q(b,d)]}else if("string"!==typeof a.playlist)for(c=0;c<a.playlist.length;c++)a.playlist[c]=Q(b,a.playlist[c])}
function Q(b,a){var c=b.extend({},{description:"",L:"",M:"",title:"",Q:[],S:[]},a),d;c.tracks=a&&b.d(a.tracks)?a.tracks:[];0===c.sources.length&&(c.sources=[R(b,c)]);for(var e=0;e<c.sources.length;e++)d=c.sources[e]["default"],c.sources[e]["default"]=d?"true"==d.toString():!1,c.sources[e]=R(b,c.sources[e]);if(c.captions&&!b.d(a.tracks)){for(d=0;d<c.captions.length;d++)c.tracks.push(c.captions[d]);delete c.captions}for(e=0;e<c.tracks.length;e++)c.tracks[e]=ka(b,c.tracks[e]);return c}
function R(b,a){var c={file:null,label:null,type:null,"default":null},d=b.extend({},c);b.f(c,function(c){b.d(a[c])&&(d[c]=a[c],delete a[c])});return d}function ka(b,a){var c={file:null,label:null,kind:"captions","default":!1},d=b.extend({},c);b.f(c,function(c){b.d(a[c])&&(d[c]=a[c],delete a[c])});return d}function P(b,a,c,d){b.d(a[d])&&(c[d]=a[d],delete a[d])};function U(b,a,c){this.key=b;this.value=a;this.C=c}U.prototype.getKey=function(){return this.key};function w(b,a){var c,d;for(c in b)"function"==window.jwplayer.utils.typeOf(b.hasOwnProperty)?b.hasOwnProperty(c)&&(d=b[c],a(c,d)):(d=b[c],a(c,d))};function la(b,a){if(window.jwplayer._tracker)return window.jwplayer._tracker;window.jwplayer._tracker=this;this.j={};this.P="n.jwpltx.com";this.O="v1/jwplayer6/ping.gif?";this.N=window.jwplayer.version;this.h=b;this.t=(this.t=this.h.sdkplatform)||"0";this.v=2===parseInt(this.h.sdkplatform);if(this.o=window.top===window.self?0:1){this.i=document.referrer;try{this.i=this.i||window.top.location.href,this.n=window.top.document.title}catch(c){}}this.i=this.i||window.location.href;this.n=this.n||document.title;
this.v&&(this.n=this.i=this.o="");this.trackerVersion=14;this.B="complete"==document.readyState;this.q=[];(this.debug=a)&&(this.eventObjs=[])}(function(b){var a=window.onload;window.onload="function"!=typeof window.onload?b:function(){a&&a();b()}})(function(){var b=window.jwplayer._tracker;if(b){for(;0<b.q.length;){var a=b.q.shift();V(b,a)}b.B=!0}});
function W(b,a,c,d){b.j[a]||(b.j[a]={});b.j[a][c]||(b.j[a][c]={});var e=X(b,a,c,d,!1);b.j[a][c][e]&&(e+="&dup=1");b.debug&&(d=X(b,a,c,d,!0),d.url=e,d.fired=!1,b.eventObjs.push(d));b.B?V(b,e):b.q.push(e);b.j[a][c][e]=!0}function Y(b,a,c){return new U(b,a,c)}
function X(b,a,c,d,e){a=[Y("tv",b.trackerVersion,0),Y("n",Math.random().toFixed(16).substr(2,16),2),Y("aid",a,4),Y("e",c,5),Y("i",b.o,6),Y("pv",b.N,7),Y("pu",b.i,101),Y("pt",b.n,103),Y("sdk",b.t,25)].concat(d).sort(function(b,a){return b.C>a.C?1:-1});b.v&&a.push(Y("did",b.h.mobiledeviceid,26),Y("sv",b.h.iossdkversion,27),Y("dm",b.h.mobiledevicemodel,28),Y("an",b.h.applicationname,29));if(e){b={};for(e=0;e<a.length;e++)b[a[e].getKey()]=a[e].value;return b}c=[];for(e=0;e<a.length;e++)c.push(a[e].getKey()+
"="+encodeURIComponent(a[e].value));return["http"+("https:"===document.location.protocol?"s://s.":"://i."),b.P,"/",b.O,c.join("&")].join("")}function V(b,a){(new Image).src=a;b.debug&&w(b.eventObjs,function(b,d){d.url==a&&(d.fired=!0)})};function C(b){this.e=b}function ma(b,a){b.e.onReady(a)}function na(b,a){b.e.onComplete(a)}function oa(b,a){b.e.onTime(a)}function Z(b){return b.e.getPlaylistItem()}function $(b){return"html5"===b.e.getRenderingMode().toLowerCase()}C.prototype.k=function(){return this.e.config};function pa(b,a,c){function d(){l={};G=!1;h=0}function e(b){return function(a){if(!v){var c=l[b];if("meta"===b&&(a=a.metadata||a,c&&(a.width=a.width||c.width,a.height=a.height||c.height,a.duration=a.duration||c.duration),$(g)&&(100===a.duration||0===a.duration)&&0===a.width&&0===a.height))return;l[b]=a;"play"===b&&(c||(q=0),s=g.e.getPosition());if(l.play&&l.meta&&l.levels&&!G){a=Z(g);var c=H(a),e=a.title||"",d;a:{if((d=l.levels)&&d.w&&d.w.length&&(d=d.w[0])&&"auto"===(""+d.label).toLowerCase()){d=
5;break a}if((d=a.sources)&&d.length&&(d=d[0].type,"aac"==d||"mp3"==d||"vorbis"==d)){d=6;break a}d=l.meta||{};var m=d.width|0;d=0===m?0<(d.height|0)?0:6:320>=m?1:640>=m?2:1280>=m?3:4}var m=z(),h;h=m|0;h=0>=h?0:15>h?1:300>=h?2:1200>=h?3:4;m=B(m);x=$(g)?1:0;W(I,r,"s",[f("ph",y,1),f("pi",J,8),f("m",x,10),f("a",g.k().autostart?1:0,11),f("ed",n,20),f("vs",d,21),f("l",h,22),f("q",m,23),f("mu",c,100),f("t",e,102),f("id",a.mediaid||"",101)]);G=!0}}}}function z(){var a=g.e.getDuration();if(0>=a){var b=l.meta;
b&&(a=b.duration)}return a|0}function B(a){a|=0;return 0>=a?0:30>a?1:60>a?4:180>a?8:300>a?16:32}function ga(){s=g.e.getPosition();h=0}function H(a){var b;if(b=a.sources){a=[];for(var c=b.length;c--;)b[c].file&&a.push(b[c].file);a.sort();b=a[0]}else b=a.file;var d;var e=b;if(e.match(/^[a-zA-Z]+:\/\//))d=e;else{d=d||document.location.href;b=d.substring(0,d.indexOf("://")+3);a=d.substring(b.length,d.indexOf("/",b.length+1));c=e.split("/");0!==e.indexOf("/")&&(d=d.split("?")[0],d=d.substring(b.length+
a.length+1,d.lastIndexOf("/")),c=d.split("/").concat(c));d=[];for(e=0;e<c.length;e++)c[e]&&"."!=c[e]&&(".."==c[e]?d.pop():d.push(c[e]));d=b+a+"/"+d.join("/")}return d}function qa(){var a=g.k(),b=g.e.getWidth(),d=/\d+%/.test(a.width||b);if(d&&a.aspectratio)return 4;if(a.height){var e=0;a.listbar&&"bottom"===a.listbar.position&&(e=a.listbar.size);if(40>=a.height-e)return 5}d&&c&&c.parentNode&&(b=c.parentNode.offsetWidth);b|=0;return 0===b?0:320>=b?1:640>=b?2:3}function S(a,b,c){var d=Z(g),e=H(d),h=
d.title||"";b=b+0.5|0;0<b&&W(I,r,"t",[f("ph",y,1),f("pi",J,8),f("ed",n,20),f("ti",b,21),f("pw",a|0,22),f("q",c,23),f("mu",e,100),f("t",h,102),f("id",d.mediaid||"",101)])}function ra(a){a.T?v=!0:v=!1}if(!1!==a.enabled){var f=function(a,b,c){return new U(a,b,c)},T=false||!0===a.debug,g=new C(b),J=String(a.id||"").substring(0,34),y=(b=window.jwplayer.defaults)&&b.ph?b.ph:0;2===parseInt(a.sdkplatform)&&(y="");var x,n=0,r;if(window.jwplayer.key){b=new window.jwplayer.utils.key(window.jwplayer.key);
var t=b.edition();"invalid"!=t&&(r=b.token());"enterprise"==t?n=6:"invalid"==t?n=4:"ads"==t?n=3:"premium"==t?n=2:"pro"==t&&(n=1)}r||(r="_");var sa=new u(g,T,r,n),I=new la(a,T),l,G,h,q=0,s=null,v=!1;ma(g,function(){var a=Z(g),b=H(a),c=a.title||"",d=qa();x=$(g)?1:0;W(I,r,"e",[f("ph",y,1),f("pi",J,8),f("a",g.k().autostart?1:0,11),f("ed",n,20),f("ps",d,21),f("mu",b,100),f("t",c,102),f("m",x,10),f("id",a.mediaid||"",101)]);sa.u()});g.e.onPlay(e("play"));g.e.onMeta(e("meta"));g.e.onQualityLevels(e("levels"));
if(g.e.onCast)g.e.onCast(ra);oa(g,function(a){if(!v){var b=a.position,c=a.duration;if(b){if(1<b){if(!l.meta){a={duration:c};if($(g)){var d=$(g)?g.e.getContainer().getElementsByTagName("video")[0]:null;d&&(a.width=d.videoWidth,a.height=d.videoHeight)}e("meta")(a)}l.levels||e("levels")({})}a=B(c);c=b/(c/a)+1|0;0===h&&(h=c);null===s&&(s=b);d=b-s;s=b;d=Math.min(Math.max(0,d),4);q+=d;c===h+1&&(b=128*h/a,h=0,c>a||(S(b,q,a),q=0))}}});na(g,function(){if(!v){var a=z();0>=a||(S(128,q,B(a)),q=0)}});g.e.onSeek(ga);
g.e.onIdle(d);g.e.onPlaylistItem(d);d()}}window.jwplayer&&window.jwplayer()&&window.jwplayer().registerPlugin("jwpsrv","6.0",pa);})();

(function(f){f.html5={};f.html5.version="6.6.3896"})(jwplayer);
(function(f){f.parseDimension=function(g){if("string"==typeof g){if(""===g)return 0;if(!(-1<g.lastIndexOf("%")))return parseInt(g.replace("px",""),10)}return g};f.timeFormat=function(g){if(0<g){var b=Math.floor(g/3600),e=Math.floor((g-3600*b)/60);g=Math.floor(g%60);return(b?b+":":"")+(10>e?"0":"")+e+":"+(10>g?"0":"")+g}return"00:00"};f.bounds=function(g){try{var b=g.getBoundingClientRect(g),e=window.pageYOffset,c=window.pageXOffset;return{left:b.left+c,right:b.right+c,top:b.top+e,bottom:b.bottom+
e,width:b.right-b.left,height:b.bottom-b.top}}catch(a){return{left:0,right:0,width:0,height:0,top:0,bottom:0}}};f.empty=function(g){if(g)for(;0<g.childElementCount;)g.removeChild(g.children[0])}})(jwplayer.utils);
(function(f){function g(){var b=document.createElement("style");b.type="text/css";document.getElementsByTagName("head")[0].appendChild(b);return b}function b(b){if(A)c[b].innerHTML=e(b);else{var a=c[b].sheet,d=q[b];if(a){var g=a.cssRules;f.exists(d)&&d<g.length&&g[d].selectorText==b?a.deleteRule(d):q[b]=g.length;a.insertRule(e(b),q[b])}}}function e(b){var a=b+"{\n";h(d[b],function(b,d){a+="  "+b+": "+d+";\n"});return a+="}\n"}var c={},a,d={},r=0,j=f.exists,h=f.foreach,q={},A=!1,n=f.css=function(e,
k,p){if(!c[e])if(A)c[e]=g();else{if(!a||5E4<a.sheet.cssRules.length)a=g();c[e]=a}j(p)||(p=!1);d[e]||(d[e]={});h(k,function(b,a){a:{var c=a;if("undefined"===typeof c)a=void 0;else{var k=p?" !important":"";if(isNaN(c))a=c.match(/png|gif|jpe?g/i)&&0>c.indexOf("url")?"url("+c+")":c+k;else switch(b){case "z-index":case "opacity":a=c+k;break a;default:a=b.match(/color/i)?"#"+f.pad(c.toString(16).replace(/^0x/i,""),6)+k:0===c?0+k:Math.ceil(c)+"px"+k}}}j(d[e][b])&&!j(a)?delete d[e][b]:j(a)&&(d[e][b]=a)});
0<r||b(e)};n.block=function(){r++};n.unblock=function(){r=Math.max(r-1,0);0==r&&h(c,function(a){b(a)})};f.clearCss=function(a){h(d,function(b){0<=b.indexOf(a)&&delete d[b]});h(c,function(d){0<=d.indexOf(a)&&b(d)})};f.transform=function(b,a){var d="-transform",c;a=a?a:"";"string"==typeof b?(c={},c["-webkit"+d]=a,c["-ms"+d]=a,c["-moz"+d]=a,c["-o"+d]=a,f.css(b,c)):(d="Transform",c=b.style,c["webkit"+d]=a,c["Moz"+d]=a,c["ms"+d]=a,c["O"+d]=a)};f.dragStyle=function(b,a){f.css(b,{"-webkit-user-select":a,
"-moz-user-select":a,"-ms-user-select":a,"-webkit-user-drag":a,"user-select":a,"user-drag":a})};f.transitionStyle=function(b,a){navigator.userAgent.match(/5\.\d(\.\d)? safari/i)||f.css(b,{"-webkit-transition":a,"-moz-transition":a,"-o-transition":a})};f.rotate=function(b,a){f.transform(b,"rotate("+a+"deg)")};n(".jwplayer "+" div span a img ul li video".split(" ").join(",.jwplayer ")+", .jwclick",{margin:0,padding:0,border:0,color:"#000000","font-size":"100%",font:"inherit","vertical-align":"baseline",
"background-color":"transparent","text-align":"left",direction:"ltr"});n(".jwplayer ul",{"list-style":"none"})})(jwplayer.utils);
(function(f){f.scale=function(b,e,c,a,d){var g=f.exists;g(e)||(e=1);g(c)||(c=1);g(a)||(a=0);g(d)||(d=0);f.transform(b,1==e&&1==c&&0==a&&0==d?"":"scale("+e+","+c+") translate("+a+"px,"+d+"px)")};f.stretch=function(b,e,c,a,d,r){if(e&&(b||(b=g.UNIFORM),c&&a&&d&&r)){var j=c/d,h=a/r,q="video"==e.tagName.toLowerCase(),A=!1,n;q&&f.transform(e);n="jw"+b.toLowerCase();switch(b.toLowerCase()){case g.FILL:j>h?(d*=j,r*=j):(d*=h,r*=h);case g.NONE:j=h=1;case g.EXACTFIT:A=!0;break;default:j>h?0.95<d*h/c?(A=!0,n=
"jwexactfit"):(d*=h,r*=h):0.95<r*j/a?(A=!0,n="jwexactfit"):(d*=j,r*=j),A&&(h=Math.ceil(100*a/r)/100,j=Math.ceil(100*c/d)/100)}q?A?(e.style.width=d+"px",e.style.height=r+"px",f.scale(e,j,h,(c-d)/2/j,(a-r)/2/h)):(e.style.width="",e.style.height=""):(e.className=e.className.replace(/\s*jw(none|exactfit|uniform|fill)/g,""),e.className+=" "+n)}};var g=f.stretching={NONE:"none",FILL:"fill",UNIFORM:"uniform",EXACTFIT:"exactfit"}})(jwplayer.utils);
(function(f){f.dfxp=function(g,b){var e,c,a=jwplayer.utils.seconds;this.load=function(a){c=a;try{e.open("GET",a,!0),e.send(null)}catch(g){b("Error loading DFXP File: "+a)}};e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===e.readyState)if(200===e.status){for(var d=e.responseText,r=[{begin:0,text:""}],d=d.replace(/^\s+/,"").replace(/\s+$/,""),j=d.split("\x3c/p\x3e"),h=d.split("\x3c/tt:p\x3e"),q=[],d=0;d<j.length;d++)0<=j[d].indexOf("\x3cp")&&(j[d]=j[d].substr(j[d].indexOf("\x3cp")+2).replace(/^\s+/,
"").replace(/\s+$/,""),q.push(j[d]));for(d=0;d<h.length;d++)0<=h[d].indexOf("\x3ctt:p")&&(h[d]=h[d].substr(h[d].indexOf("\x3ctt:p")+5).replace(/^\s+/,"").replace(/\s+$/,""),q.push(h[d]));j=q;for(d=0;d<j.length;d++){h=j[d];q={};try{var f=h.indexOf('begin\x3d"'),h=h.substr(f+7),f=h.indexOf('" end\x3d"');q.begin=a(h.substr(0,f));h=h.substr(f+7);f=h.indexOf('"');q.end=a(h.substr(0,f));f=h.indexOf('"\x3e');h=h.substr(f+2);q.text=h}catch(n){}h=q;h.text&&(r.push(h),h.end&&(r.push({begin:h.end,text:""}),
delete h.end))}1<r.length?g(r):b("Invalid DFXP file: "+c)}else r=e.status,0==r?b("Crossdomain loading denied: "+c):404==r?b("DFXP File not found: "+c):b("Error "+r+" loading DFXP file: "+c)}}})(jwplayer.parsers);
(function(f){f.srt=function(g,b,e){function c(a){0==a?b("Crossdomain loading denied: "+r):404==a?b("SRT File not found: "+r):b("Error "+a+" loading SRT file: "+r)}function a(a){var d=e?[]:[{begin:0,text:""}];a=a.replace(/^\s+/,"").replace(/\s+$/,"");var c=a.split("\r\n\r\n");1==c.length&&(c=a.split("\n\n"));for(a=0;a<c.length;a++)if("WEBVTT"!=c[a]){var j,k=c[a];j={};var p=k.split("\r\n");1==p.length&&(p=k.split("\n"));try{k=1;0<p[0].indexOf(" --\x3e ")&&(k=0);var l=p[k].indexOf(" --\x3e ");0<l&&(j.begin=
h(p[k].substr(0,l)),j.end=h(p[k].substr(l+5)));if(p[k+1]){j.text=p[k+1];for(k+=2;k<p.length;k++)j.text+="\x3cbr/\x3e"+p[k]}}catch(f){}j.text&&(d.push(j),j.end&&!e&&(d.push({begin:j.end,text:""}),delete j.end))}1<d.length?g(d):b("Invalid SRT file: "+r)}var d,r,j=jwplayer.utils,h=j.seconds;this.load=function(g){r=g;try{var e;e=g&&0<=g.indexOf("://")&&g.split("/")[2]!=window.location.href.split("/")[2]?!0:!1;e&&j.exists(window.XDomainRequest)&&(d=new XDomainRequest,d.onload=function(){a(d.responseText)},
d.onerror=function(){c(d.status)});d.open("GET",g,!0);d.send(null)}catch(h){b("Error loading SRT File: "+g)}};d=new XMLHttpRequest;d.onreadystatechange=function(){4===d.readyState&&(200===d.status?a(d.responseText):c(d.status))}}})(jwplayer.parsers);
(function(f){var g=jwplayer.utils,b=jwplayer.events,e=b.state,c=jwplayer.parsers,a=g.css,d="playing",r=document;f.captions=function(a,h){function q(a){g.log("CAPTIONS("+a+")")}function f(a){(G=a.fullscreen)?(n(),setTimeout(n,500)):l(!0)}function n(){var a=D.offsetHeight,b=D.offsetWidth;0!=a&&0!=b&&s.resize(b,Math.round(0.94*a))}function y(a){a=a.responseXML.firstChild;"xml"==c.localName(a)&&(a=a.nextSibling);for(;a.nodeType==a.COMMENT_NODE;)a=a.nextSibling;("tt"==c.localName(a)?new jwplayer.parsers.dfxp(p,
q):new jwplayer.parsers.srt(p,q)).load(C)}function k(){(new jwplayer.parsers.srt(p,q)).load(C)}function p(a){s.populate(a);z<u.length&&(u[z].data=a);l(!1)}function l(a){u.length?v==d&&0<B?(s.show(),G?f({fullscreen:!0}):(I(),a&&setTimeout(I,500))):s.hide():s.hide()}function I(){s.resize()}function t(a){0<a?(z=a-1,B=a):B=0;z>=u.length||(u[z].data?s.populate(u[z].data):(C=a=u[z].file,g.ajax(a,y,k)),l(!1))}function w(){var a=[];a.push({label:"Off"});for(var b=0;b<u.length;b++)a.push({label:u[b].label});
return a}var D,x={back:!0,color:"#FFFFFF",fontSize:15},m={fontFamily:"Arial,sans-serif",fontStyle:"normal",fontWeight:"normal",textDecoration:"none"},s,v,z,u=[],B=0,G=!1,C,M=new b.eventdispatcher;g.extend(this,M);this.element=function(){return D};this.getCaptionsList=function(){return w()};this.getCurrentCaptions=function(){return B};this.setCurrentCaptions=function(a){if(0<=a&&B!=a&&a<=u.length){t(a);a=w();g.saveCookie("captionLabel",a[B].label);var c=b.JWPLAYER_CAPTIONS_CHANGED;M.sendEvent(c,{type:c,
tracks:a,track:B})}};D=r.createElement("div");D.id=a.id+"_caption";D.className="jwcaptions";a.jwAddEventListener(b.JWPLAYER_PLAYER_STATE,function(a){switch(a.newstate){case e.IDLE:v="idle";l(!1);break;case e.PLAYING:v=d,l(!1)}});a.jwAddEventListener(b.JWPLAYER_PLAYLIST_ITEM,function(){z=0;u=[];s.update(0);for(var c=a.jwGetPlaylist()[a.jwGetPlaylistIndex()].tracks,d=[],e=0,k="",m=0,k="",e=0;e<c.length;e++)k=c[e].kind.toLowerCase(),("captions"==k||"subtitles"==k)&&d.push(c[e]);for(e=B=0;e<d.length;e++)if(k=
d[e].file)d[e].label||(d[e].label=e.toString()),u.push(d[e]);for(e=0;e<u.length;e++)if(u[e]["default"]){m=e+1;break}if(k=g.getCookies().captionLabel){c=w();for(e=0;e<c.length;e++)if(k==c[e].label){m=e;break}}t(m);l(!1);c=b.JWPLAYER_CAPTIONS_LIST;d=w();M.sendEvent(c,{type:c,tracks:d,track:B})});a.jwAddEventListener(b.JWPLAYER_MEDIA_ERROR,q);a.jwAddEventListener(b.JWPLAYER_ERROR,q);a.jwAddEventListener(b.JWPLAYER_READY,function(){g.foreach(x,function(a,b){h&&void 0!=h[a.toLowerCase()]?"color"==a?m.color=
"#"+String(h.color).substr(-6):m[a]=h[a.toLowerCase()]:m[a]=b});s=new jwplayer.html5.captions.renderer(m,D);l(!1)});a.jwAddEventListener(b.JWPLAYER_MEDIA_TIME,function(a){s.update(a.position)});a.jwAddEventListener(b.JWPLAYER_FULLSCREEN,f);a.jwAddEventListener(b.JWPLAYER_RESIZE,function(){l(!1)})};a(".jwcaptions",{position:"absolute",cursor:"pointer",width:"100%",height:"100%",overflow:"hidden"})})(jwplayer.html5);
(function(f){var g=jwplayer.utils.foreach;f.captions.renderer=function(b,e){function c(b){r(h,{visibility:"hidden"});q.innerHTML=b;y=""==b?"hidden":"visible";setTimeout(a,20)}function a(){var a=h.clientWidth,c=Math.round(b.fontSize*Math.pow(a/400,0.6)),d=Math.round(1.4*c);r(q,{maxWidth:a+"px",fontSize:c+"px",lineHeight:d+"px",visibility:y})}function d(){for(var a=-1,b=0;b<j.length;b++)if(j[b].begin<=n&&(b==j.length-1||j[b+1].begin>=n)){a=b;break}-1==a?c(""):a!=f&&(f=a,c(j[b].text))}function r(a,b){g(b,
function(b,c){a.style[b]=c})}var j,h,q,f,n,y="visible",k;this.hide=function(){r(h,{display:"none"});k&&(clearInterval(k),k=null)};this.populate=function(a){f=-1;j=a;d()};this.resize=function(){a()};h=document.createElement("div");q=document.createElement("span");h.appendChild(q);e.appendChild(h);r(h,{display:"block",height:"auto",position:"absolute",bottom:"20px",textAlign:"center",width:"100%"});r(q,{color:"#"+b.color.substr(-6),display:"inline-block",fontFamily:b.fontFamily,fontStyle:b.fontStyle,
fontWeight:b.fontWeight,height:"auto",margin:"auto",position:"relative",textAlign:"center",textDecoration:b.textDecoration,wordWrap:"break-word",width:"auto"});b.back?r(q,{background:"#000"}):r(q,{textShadow:"-2px 0px 1px #000,2px 0px 1px #000,0px -2px 1px #000,0px 2px 1px #000,-1px 1px 1px #000,1px 1px 1px #000,1px -1px 1px #000,1px 1px 1px #000"});this.show=function(){r(h,{display:"block"});k||(k=setInterval(a,250));a()};this.update=function(a){n=a;j&&d()}}})(jwplayer.html5);
(function(f){var g=f.html5,b=f.utils,e=f.events,c=e.state,a=b.css;f=b.transitionStyle;var d=b.isMobile(),r=b.isAndroid(4)&&!b.isChrome(),j="button",h="text",q="slider",A="100%",n={display:"none"},y={display:"block"},k={display:t},p=!1,l=!0,I=null,t=void 0,w=window,D=document;g.controlbar=function(f,m){function s(a,b,c){return{name:a,type:b,className:c}}function v(a){var c=p,e;a.duration==Number.POSITIVE_INFINITY||!a.duration&&b.isSafari()&&!d?$.setText(H.jwGetPlaylist()[H.jwGetPlaylistIndex()].title||
"Live broadcast"):(L.elapsed&&(e=b.timeFormat(a.position),L.elapsed.innerHTML=e,c=e.length!=b.timeFormat(La).length),L.duration&&(e=b.timeFormat(a.duration),L.duration.innerHTML=e,c=c||e.length!=b.timeFormat(ua).length),0<a.duration?V(a.position/a.duration):V(0),ua=a.duration,La=a.position,$.setText());c&&Aa()}function z(){var a=H.jwGetMute();Q("mute",a);R(a?0:Ma)}function u(){Ma=H.jwGetVolume()/100;R(Ma)}function B(){a(F(".jwhd"),n);a(F(".jwcc"),n);Da();Aa()}function G(a){Na=a.currentQuality;ia&&
0<=Na&&ia.setActive(a.currentQuality)}function C(a){na&&(Qa=a.track,ja&&0<=Qa&&ja.setActive(a.track))}function M(){W=b.extend({},Ea,oa.getComponentSettings("controlbar"),m);wa=N("background").height;a("#"+ea,{height:wa,bottom:pa?0:W.margin});a(F(".jwtext"),{font:W.fontsize+"px/"+N("background").height+"px "+W.font,color:W.fontcolor,"font-weight":W.fontweight});a(F(".jwoverlay"),{bottom:wa});0<W.maxwidth&&a(F(),{"max-width":pa?t:W.maxwidth})}function F(a){return"#"+ea+(a?" "+a:"")}function P(){return D.createElement("span")}
function E(c,d,e,g,k){var m=P(),j=N(c);g=g?" left center":" center";var h=Y(j);m.className="jw"+c;m.innerHTML="\x26nbsp;";if(j&&""!=j.src)return e=e?{background:"url('"+j.src+"') repeat-x "+g,"background-size":h,height:k?j.height:t}:{background:"url('"+j.src+"') no-repeat"+g,"background-size":h,width:j.width,height:k?j.height:t},m.skin=j,a(F((k?".jwvertical ":"")+".jw"+c),b.extend(e,d)),L[c]=m}function O(b,c,e){c&&c.src&&(a(b,{width:c.width,background:"url("+c.src+") no-repeat center","background-size":Y(c)}),
e.src&&!d&&a(b+":hover",{background:"url("+e.src+") no-repeat center","background-size":Y(e)}))}function U(a){return function(b){fb[a]&&(fb[a](),d&&Fa.sendEvent(e.JWPLAYER_USER_ACTION));b.preventDefault&&b.preventDefault()}}function J(a){b.foreach(Ra,function(b,c){b!=a&&("cc"==b&&(clearTimeout(xa),xa=t),"hd"==b&&(clearTimeout(ya),ya=t),c.hide())})}function Z(){pa||(Ga.show(),J("volume"))}function Q(a,c){b.exists(c)||(c=!Sa[a]);L[a]&&(L[a].className="jw"+a+(c?" jwtoggle jwtoggling":" jwtoggling"),
setTimeout(function(){L[a].className=L[a].className.replace(" jwtoggling","")},100));Sa[a]=c}function Y(a){return a?parseInt(a.width)+"px "+parseInt(a.height)+"px":"0 0"}function da(){fa&&1<fa.length&&(Za&&(clearTimeout(Za),Za=t),ia.show(),J("hd"))}function aa(){na&&1<na.length&&($a&&(clearTimeout($a),$a=t),ja.show(),J("cc"))}function ga(a){0<=a&&a<fa.length&&(H.jwSetCurrentQuality(a),clearTimeout(ya),ya=t,ia.hide())}function ka(a){0<=a&&a<na.length&&(H.jwSetCurrentCaptions(a),clearTimeout(xa),xa=
t,ja.hide())}function la(a){a.preventDefault();D.onselectstart=function(){return p}}function ab(){L.timeRail.className="jwrail";H.jwGetState()!=c.IDLE&&(H.jwSeekDrag(l),ha="time",T(),Fa.sendEvent(e.JWPLAYER_USER_ACTION))}function qa(a){if(ha){var c=(new Date).getTime();50<c-bb&&(ra(a),bb=c);var d=L[ha].getElementsByClassName("jwrail")[0],d=b.bounds(d),d=a.x/d.width;100<d&&(d=100);a.type==b.touchEvents.DRAG_END?(H.jwSeekDrag(p),L.timeRail.className="jwrail jwsmooth",ha=I,Ta.time(d),va()):(V(d),500<
c-cb&&(cb=c,Ta.time(d)));Fa.sendEvent(e.JWPLAYER_USER_ACTION)}}function Oa(a){var d=L.time.getElementsByClassName("jwrail")[0],d=b.bounds(d);a=a.x/d.width;100<a&&(a=100);H.jwGetState()!=c.IDLE&&(Ta.time(a),Fa.sendEvent(e.JWPLAYER_USER_ACTION))}function X(a){return function(b){0==b.button&&(L[a+"Rail"].className="jwrail","time"==a?H.jwGetState()!=c.IDLE&&(H.jwSeekDrag(l),ha=a):ha=a)}}function K(a){var c=(new Date).getTime();50<c-bb&&(ra(a),bb=c);if(ha&&0==a.button){var d=L[ha].getElementsByClassName("jwrail")[0],
e=b.bounds(d),d=ha,e=L[d].vertical?(e.bottom-a.pageY)/e.height:(a.pageX-e.left)/e.width;"mouseup"==a.type?("time"==d&&H.jwSeekDrag(p),L[d+"Rail"].className="jwrail jwsmooth",ha=I,Ta[d.replace("H","")](e)):("time"==ha?V(e):R(e),500<c-cb&&(cb=c,Ta[ha.replace("H","")](e)));return!1}}function T(){sa&&(ua&&!pa&&!d)&&(Ha(sa),sa.show())}function va(){sa&&sa.hide()}function ra(a){if((Ua=b.bounds(gb))&&0!=Ua.width){var c=sa.element();a=a.pageX?a.pageX-Ua.left-w.pageXOffset:a.x;0<=a&&a<=Ua.width&&(c.style.left=
Math.round(a)+"px",Va(ua*a/Ua.width),ca=b.bounds(S))}}function Va(a){db.innerHTML=b.timeFormat(a);Wa.updateTimeline(a);sa.setContents(Xa);ca=b.bounds(S);Ha(sa)}function Ya(){$a=setTimeout(ja.hide,500)}function ma(){Za=setTimeout(ia.hide,500)}function Ia(b,c,e,g){if(!d){var k=b.element();c.appendChild(k);c.addEventListener("mousemove",e,p);g?c.addEventListener("mouseout",g,p):c.addEventListener("mouseout",b.hide,p);a("#"+k.id,{left:"50%"})}}function ba(c,g,k,j){if(d){var m=c.element();g.appendChild(m);
(new b.touch(g)).addEventListener(b.touchEvents.TAP,function(){"cc"==j?(xa?(clearTimeout(xa),xa=t,c.hide()):(xa=setTimeout(function(){c.hide();xa=t},4E3),k()),Fa.sendEvent(e.JWPLAYER_USER_ACTION)):"hd"==j&&(ya?(clearTimeout(ya),ya=t,c.hide()):(ya=setTimeout(function(){c.hide();ya=t},4E3),k()),Fa.sendEvent(e.JWPLAYER_USER_ACTION))});a("#"+m.id,{left:"50%"})}}function ta(c){var e=P();e.className="jwgroup jw"+c;Ja[c]=e;if(Ba[c]){var e=Ba[c],k=Ja[c];if(e&&0<e.elements.length)for(var m=0;m<e.elements.length;m++){var f;
a:{f=e.elements[m];var C=c;switch(f.type){case h:C=void 0;f=f.name;var C={},s=N(("alt"==f?"elapsed":f)+"Background");if(s.src){var l=P();l.id=ea+"_"+f;l.className="elapsed"==f||"duration"==f?"jwtext jw"+f+" jwhidden":"jwtext jw"+f;C.background="url("+s.src+") repeat-x center";C["background-size"]=Y(N("background"));a(F(".jw"+f),C);"alt"!=f?l.innerHTML="00:00":l.innerHTML="";C=L[f]=l}else C=null;f=C;break a;case j:if("blank"!=f.name){f=f.name;s=C;if(!N(f+"Button").src||d&&("mute"==f||0==f.indexOf("volume"))||
r&&/hd|cc/.test(f))f=I;else{var C=P(),l=P(),J=void 0,J=za,v=E(J.name);v||(v=P(),v.className="jwblankDivider");J.className&&(v.className+=" "+J.className);J=v;v=D.createElement("button");C.style+=" display:inline-block";C.className="jw"+f+" jwbuttoncontainer";"left"==s?(C.appendChild(l),C.appendChild(J)):(C.appendChild(J),C.appendChild(l));d?"hd"!=f&&"cc"!=f&&(new b.touch(v)).addEventListener(b.touchEvents.TAP,U(f)):v.addEventListener("click",U(f),p);v.innerHTML="\x26nbsp;";l.appendChild(v);s=N(f+
"Button");l=N(f+"ButtonOver");O(F(".jw"+f+" button"),s,l);(s=mb[f])&&O(F(".jw"+f+".jwtoggle button"),N(s+"Button"),N(s+"ButtonOver"));f=L[f]=C}break a}break;case q:C=void 0;J=f.name;if(d&&0==J.indexOf("volume"))C=void 0;else{f=P();var l="volume"==J,y=J+("time"==J?"Slider":"")+"Cap",s=l?"Top":"Left",C=l?"Bottom":"Right",v=E(y+s,I,p,p,l),x=E(y+C,I,p,p,l),z;z=J;var u=l,B=s,ka=C,w=P(),G=["Rail","Buffer","Progress"],la=void 0;w.className="jwrail jwsmooth";for(var M=0;M<G.length;M++){var Q="time"==z?"Slider":
"",H=z+Q+G[M],ca=E(H,I,!u,0==z.indexOf("volume"),u),K=E(H+"Cap"+B,I,p,p,u),ga=E(H+"Cap"+ka,I,p,p,u),Z=N(H+"Cap"+B),S=N(H+"Cap"+ka);if(ca){var R=P();R.className="jwrailgroup "+G[M];K&&R.appendChild(K);R.appendChild(ca);ga&&(R.appendChild(ga),ga.className+=" jwcap"+(u?"Bottom":"Right"));a(F(".jwrailgroup."+G[M]),{"min-width":u?t:Z.width+S.width});R.capSize=u?Z.height+S.height:Z.width+S.width;a(F("."+ca.className),{left:u?t:Z.width,right:u?t:S.width,top:u?Z.height:t,bottom:u?S.height:t,height:u?"auto":
t});2==M&&(la=R);2==M&&!u?(ca=P(),ca.className="jwprogressOverflow",ca.appendChild(R),L[H]=ca,w.appendChild(ca)):(L[H]=R,w.appendChild(R))}}if(B=E(z+Q+"Thumb",I,p,p,u))a(F("."+B.className),{opacity:"time"==z?0:1,"margin-top":u?B.skin.height/-2:t}),B.className+=" jwthumb",(u&&la?la:w).appendChild(B);d?(u=new b.touch(w),u.addEventListener(b.touchEvents.DRAG_START,ab),u.addEventListener(b.touchEvents.DRAG,qa),u.addEventListener(b.touchEvents.DRAG_END,qa),u.addEventListener(b.touchEvents.TAP,Oa)):(la=
z,"volume"==la&&!u&&(la+="H"),w.addEventListener("mousedown",X(la),p));"time"==z&&!d&&(w.addEventListener("mousemove",T,p),w.addEventListener("mouseout",va,p));z=L[z+"Rail"]=w;w=N(y+s);y=N(y+s);N(J+"SliderRail");f.className="jwslider jw"+J;v&&f.appendChild(v);f.appendChild(z);x&&(l&&(x.className+=" jwcapBottom"),f.appendChild(x));a(F(".jw"+J+" .jwrail"),{left:l?t:w.width,right:l?t:y.width,top:l?w.height:t,bottom:l?y.height:t,width:l?A:t,height:l?"auto":t});L[J]=f;f.vertical=l;"time"==J?(sa=new g.overlay(ea+
"_timetooltip",oa),Wa=new g.thumbs(ea+"_thumb"),db=D.createElement("div"),db.className="jwoverlaytext",Xa=D.createElement("div"),C=Wa.element(),Xa.appendChild(C),Xa.appendChild(db),sa.setContents(Xa),gb=z,Va(0),C=sa.element(),z.appendChild(C),L.timeSliderRail||a(F(".jwtime"),n),L.timeSliderThumb&&a(F(".jwtimeSliderThumb"),{"margin-left":N("timeSliderThumb").width/-2}),Ca(0),V(0),V(0),Ca(0)):0==J.indexOf("volume")&&(J=f,v="volume"+(l?"":"H"),x=l?"vertical":"horizontal",a(F(".jw"+v+".jw"+x),{width:N(v+
"Rail",l).width+(l?0:N(v+"Cap"+s).width+N(v+"RailCap"+s).width+N(v+"RailCap"+C).width+N(v+"Cap"+C).width),height:l?N(v+"Cap"+s).height+N(v+"Rail").height+N(v+"RailCap"+s).height+N(v+"RailCap"+C).height+N(v+"Cap"+C).height:t}),J.className+=" jw"+x);C=f}f=C;break a}f=void 0}f&&("volume"==e.elements[m].name&&f.vertical?(Ga=new g.overlay(ea+"_volumeOverlay",oa),Ga.setContents(f)):k.appendChild(f))}}}function Da(){1<H.jwGetPlaylist().length&&(!D.querySelector("#"+H.id+" .jwplaylist")||H.jwGetFullscreen())?
(a(F(".jwnext"),k),a(F(".jwprev"),k)):(a(F(".jwnext"),n),a(F(".jwprev"),n))}function Ha(a){ca||(ca=b.bounds(S));a.offsetX(0);var c=b.bounds(a.element());c.right>ca.right?a.offsetX(ca.right-c.right):c.left<ca.left&&a.offsetX(ca.left-c.left)}function Ca(a){a=Math.min(Math.max(0,a),1);L.timeSliderBuffer&&(L.timeSliderBuffer.style.width=100*a+"%",L.timeSliderBuffer.style.opacity=0<a?1:0)}function Ka(a,b){if(L[a]){var c=L[a].vertical,d=a+("time"==a?"Slider":""),e=100*Math.min(Math.max(0,b),1)+"%",g=L[d+
"Progress"],d=L[d+"Thumb"];g&&(c?(g.style.height=e,g.style.bottom=0):g.style.width=e,g.style.opacity=0<b||ha?1:0);d&&(c?d.style.top=0:d.style.left=e)}}function R(a){Ka("volume",a);Ka("volumeH",a)}function V(a){Ka("time",a)}function N(a){var b="controlbar",c=a;0==a.indexOf("volume")&&(0==a.indexOf("volumeH")?c=a.replace("volumeH","volume"):b="tooltip");return(a=oa.getSkinElement(b,c))?a:{width:0,height:0,src:"",image:t,ready:p}}var H,oa,za=s("divider","divider"),Ea={margin:8,maxwidth:800,font:"Arial,sans-serif",
fontsize:11,fontcolor:15658734,fontweight:"bold",layout:{left:{position:"left",elements:[s("play",j),s("prev",j),s("next",j),s("elapsed",h)]},center:{position:"center",elements:[s("time",q),s("alt",h)]},right:{position:"right",elements:[s("duration",h),s("hd",j),s("cc",j),s("mute",j),s("volume",q),s("volumeH",q),s("fullscreen",j)]}}},W,Ba,L,wa,S,ea,ua,La,fa,Na,na,Qa,Ma,Ga,ca,gb,Ua,sa,Xa,Wa,db,Za,ya,ia,$a,xa,ja,hb,Pa,pa=p,eb=p,ha=p,cb=0,ib=-1,bb=0,Fa=new e.eventdispatcher,mb={play:"pause",mute:"unmute",
fullscreen:"normalscreen"},Sa={play:p,mute:p,fullscreen:p},fb={play:function(){Sa.play?H.jwPause():H.jwPlay()},mute:function(){H.jwSetMute(!Sa.mute);z({mute:Sa.mute})},fullscreen:function(){H.jwSetFullscreen()},next:function(){H.jwPlaylistNext()},prev:function(){H.jwPlaylistPrev()}},Ta={time:function(a){H.jwSeek(a*ua)},volume:function(a){R(a);0.1>a&&(a=0);0.9<a&&(a=1);H.jwSetVolume(100*a)}},Ra={},$=this;b.extend($,Fa);$.setText=function(b){a(F(".jwelapsed"),b?n:y);a(F(".jwduration"),b?n:y);a(F(".jwtime"),
b?n:y);a(F(".jwalt"),b?y:n);L.timeSliderRail||a(F(".jwtime"),n);var c=S.querySelector(".jwalt");c&&(c.innerHTML=b||"");Aa()};var Ja={},Aa=function(){clearTimeout(hb);hb=setTimeout($.redraw,0)};$.redraw=function(c){c&&$.visible&&$.show(l);M();c=N("capLeft");var d=N("capRight");a(F(".jwgroup.jwcenter"),{left:Math.round(b.parseDimension(Ja.left.offsetWidth)+c.width),right:Math.round(b.parseDimension(Ja.right.offsetWidth)+d.width)});c=!pa&&S.parentNode.clientWidth>W.maxwidth;d=pa?0:W.margin;a(F(),{left:c?
"50%":d,right:c?t:d,"margin-left":c?S.clientWidth/-2:t,width:c?A:t});a(F(".jwfullscreen"),{display:pa||eb?"none":t});a(F(".jwvolumeH"),{display:pa?"block":"none"});a(F(".jwhd"),{display:!pa&&fa&&1<fa.length&&ia?t:"none"});a(F(".jwcc"),{display:!pa&&na&&1<na.length&&ja?t:"none"});ca=b.bounds(S);b.foreach(Ra,function(a,b){Ha(b)})};$.audioMode=function(a){a!=pa&&(pa=a,Aa())};$.hideFullscreen=function(a){a!=eb&&(eb=a,Aa())};$.element=function(){return S};$.margin=function(){return parseInt(W.margin)};
$.height=function(){return wa};$.show=function(c){if(!$.visible||c)clearTimeout(Pa),Pa=t,$.visible=!0,S.style.display="inline-block",Aa(),z(),S&&S.querySelector(".jwalt")&&(320<=b.bounds(S.parentNode).width&&!S.querySelector(".jwalt").innerHTML?a(F(".jwhidden"),k):a(F(".jwhidden"),n)),Pa=setTimeout(function(){S.style.opacity=1},10)};$.hide=function(){$.visible&&($.visible=!1,S.style.opacity=0,clearTimeout(Pa),Pa=t,Pa=setTimeout(function(){S.style.display="none"},250))};L={};H=f;ea=H.id+"_controlbar";
ua=La=0;S=P();S.id=ea;S.className="jwcontrolbar";oa=H.skin;var nb=setInterval(function(){var a=D.getElementById(ea),c=b.bounds(a).width;a!=S?clearInterval(nb):0<c&&($.visible&&c!=ib)&&(ib=c,$.show(l))},200);Ba=oa.getComponentLayout("controlbar");Ba||(Ba=Ea.layout);b.clearCss("#"+ea);M();var jb=E("capLeft"),kb=E("capRight"),lb=E("background",{position:"absolute",left:N("capLeft").width,right:N("capRight").width,"background-repeat":"repeat-x"},l);lb&&S.appendChild(lb);jb&&S.appendChild(jb);ta("left");
ta("center");ta("right");S.appendChild(Ja.left);S.appendChild(Ja.center);S.appendChild(Ja.right);L.hd&&(ia=new g.menu("hd",ea+"_hd",oa,ga),d?ba(ia,L.hd,da,"hd"):Ia(ia,L.hd,da,ma),Ra.hd=ia);L.cc&&(ja=new g.menu("cc",ea+"_cc",oa,ka),d?ba(ja,L.cc,aa,"cc"):Ia(ja,L.cc,aa,Ya),Ra.cc=ja);L.mute&&(L.volume&&L.volume.vertical)&&(Ga=new g.overlay(ea+"_volumeoverlay",oa),Ga.setContents(L.volume),Ia(Ga,L.mute,Z),Ra.volume=Ga);a(F(".jwright"),{right:N("capRight").width});kb&&S.appendChild(kb);H.jwAddEventListener(e.JWPLAYER_MEDIA_TIME,
v);H.jwAddEventListener(e.JWPLAYER_PLAYER_STATE,function(b){switch(b.newstate){case c.BUFFERING:case c.PLAYING:a(F(".jwtimeSliderThumb"),{opacity:1});Q("play",l);break;case c.PAUSED:ha||Q("play",p);break;case c.IDLE:Q("play",p),a(F(".jwtimeSliderThumb"),{opacity:0}),L.timeRail&&(L.timeRail.className="jwrail",setTimeout(function(){L.timeRail.className+=" jwsmooth"},100)),Ca(0),v({position:0,duration:0})}});H.jwAddEventListener(e.JWPLAYER_PLAYLIST_ITEM,function(a){a=H.jwGetPlaylist()[a.index].tracks;
if("array"==b.typeOf(a)&&!d)for(var c=0;c<a.length;c++)if(a[c].file&&a[c].kind&&"thumbnails"==a[c].kind.toLowerCase()){Wa.load(a[c].file);return}Wa.load()});H.jwAddEventListener(e.JWPLAYER_MEDIA_MUTE,z);H.jwAddEventListener(e.JWPLAYER_MEDIA_VOLUME,u);H.jwAddEventListener(e.JWPLAYER_MEDIA_BUFFER,function(a){Ca(a.bufferPercent/100)});H.jwAddEventListener(e.JWPLAYER_FULLSCREEN,function(a){Q("fullscreen",a.fullscreen);Da()});H.jwAddEventListener(e.JWPLAYER_PLAYLIST_LOADED,B);H.jwAddEventListener(e.JWPLAYER_MEDIA_LEVELS,
function(b){if((fa=b.levels)&&1<fa.length&&ia){a(F(".jwhd"),k);ia.clearOptions();for(var c=0;c<fa.length;c++)ia.addOption(fa[c].label,c);G(b)}else a(F(".jwhd"),n);Aa()});H.jwAddEventListener(e.JWPLAYER_MEDIA_LEVEL_CHANGED,G);H.jwAddEventListener(e.JWPLAYER_CAPTIONS_LIST,function(b){if((na=b.tracks)&&1<na.length&&ja){a(F(".jwcc"),k);ja.clearOptions();for(var c=0;c<na.length;c++)ja.addOption(na[c].label,c);C(b)}else a(F(".jwcc"),n);Aa()});H.jwAddEventListener(e.JWPLAYER_CAPTIONS_CHANGED,C);d||(S.addEventListener("mouseover",
function(){w.addEventListener("mousemove",K,p);w.addEventListener("mouseup",K,p);w.addEventListener("mousedown",la,p)},!1),S.addEventListener("mouseout",function(){w.removeEventListener("mousemove",K);w.removeEventListener("mouseup",K);w.removeEventListener("mousedown",la);D.onselectstart=null},!1));setTimeout(function(){u();z()},0);B();$.visible=!1};a(".jwcontrolbar",{position:"absolute",opacity:0,display:"none"});a(".jwcontrolbar span",{height:A});b.dragStyle(".jwcontrolbar span","none");a(".jwcontrolbar .jwgroup",
{display:"inline"});a(".jwcontrolbar span, .jwcontrolbar .jwgroup button,.jwcontrolbar .jwleft",{position:"relative","float":"left"});a(".jwcontrolbar .jwright",{position:"absolute"});a(".jwcontrolbar .jwcenter",{position:"absolute"});a(".jwcontrolbar buttoncontainer,.jwcontrolbar button",{display:"inline-block",height:A,border:"none",cursor:"pointer"});a(".jwcontrolbar .jwcapRight,.jwcontrolbar .jwtimeSliderCapRight,.jwcontrolbar .jwvolumeCapRight",{right:0,position:"absolute"});a(".jwcontrolbar .jwcapBottom",
{bottom:0,position:"absolute"});a(".jwcontrolbar .jwtime",{position:"absolute",height:A,width:A,left:0});a(".jwcontrolbar .jwthumb",{position:"absolute",height:A,cursor:"pointer"});a(".jwcontrolbar .jwrail",{position:"absolute",cursor:"pointer"});a(".jwcontrolbar .jwrailgroup",{position:"absolute",width:A});a(".jwcontrolbar .jwrailgroup span",{position:"absolute"});a(".jwcontrolbar .jwdivider+.jwdivider",{display:"none"});a(".jwcontrolbar .jwtext",{padding:"0 5px","text-align":"center"});a(".jwcontrolbar .jwalt",
{display:"none",overflow:"hidden"});a(".jwcontrolbar .jwalt",{position:"absolute",left:0,right:0,"text-align":"left"},l);a(".jwcontrolbar .jwoverlaytext",{padding:3,"text-align":"center"});a(".jwcontrolbar .jwvertical *",{display:"block"});a(".jwcontrolbar .jwvertical .jwvolumeProgress",{height:"auto"},l);a(".jwcontrolbar .jwprogressOverflow",{position:"absolute",overflow:"hidden"});a(".jwcontrolbar .jwduration .jwhidden",{});f(".jwcontrolbar","opacity .25s, background .25s, visibility .25s");f(".jwcontrolbar button",
"opacity .25s, background .25s, visibility .25s");f(".jwcontrolbar .jwtime .jwsmooth span","opacity .25s, background .25s, visibility .25s, width .25s linear, left .05s linear");f(".jwcontrolbar .jwtoggling","none")})(jwplayer);
(function(f){var g=f.utils,b=f.events,e=b.state,c=f.playlist,a=!0,d=!1;f.html5.controller=function(r,j){function h(a){x.sendEvent(a.type,a)}function q(d){n(a);switch(g.typeOf(d)){case "string":var e=new c.loader;e.addEventListener(b.JWPLAYER_PLAYLIST_LOADED,function(a){q(a.playlist)});e.addEventListener(b.JWPLAYER_ERROR,function(a){q([]);a.message="Could not load playlist: "+a.message;h(a)});e.load(d);break;case "object":case "array":w.setPlaylist(new f.playlist(d));break;case "number":w.setItem(d)}}
function A(c){g.exists(c)||(c=a);if(!c)return y();try{0<=s&&(q(s),s=-1);if(!v&&(v=a,x.sendEvent(b.JWPLAYER_MEDIA_BEFOREPLAY),v=d,B)){B=d;z=null;return}if(w.state==e.IDLE){if(0==w.playlist.length)return d;D.load(w.playlist[w.item])}else w.state==e.PAUSED&&D.play();return a}catch(k){x.sendEvent(b.JWPLAYER_ERROR,k),z=null}return d}function n(c){z=null;try{return w.state!=e.IDLE?D.stop():c||(u=a),v&&(B=a),a}catch(g){x.sendEvent(b.JWPLAYER_ERROR,g)}return d}function y(c){z=null;g.exists(c)||(c=a);if(!c)return A();
try{switch(w.state){case e.PLAYING:case e.BUFFERING:D.pause();break;default:v&&(B=a)}return a}catch(k){x.sendEvent(b.JWPLAYER_ERROR,k)}return d}function k(a){q(a);A()}function p(){k(w.item+1)}function l(){w.state==e.IDLE&&(u?u=d:(z=l,w.repeat?p():w.item==w.playlist.length-1?(s=0,n(a),setTimeout(function(){x.sendEvent(b.JWPLAYER_PLAYLIST_COMPLETE)},0)):p()))}function I(a){return function(){m?t(a,arguments):G.push({method:a,arguments:arguments})}}function t(a,b){var c=[],d;for(d=0;d<b.length;d++)c.push(b[d]);
a.apply(this,c)}var w=r,D=r.getVideo(),x=new b.eventdispatcher(w.id,w.config.debug),m=d,s=-1,v,z,u=d,B,G=[];g.extend(this,x);this.play=I(A);this.pause=I(y);this.seek=I(function(b){w.state!=e.PLAYING&&A(a);D.seek(b)});this.stop=function(){u=a;I(n)()};this.load=I(q);this.next=I(p);this.prev=I(function(){k(w.item-1)});this.item=I(k);this.setVolume=I(w.setVolume);this.setMute=I(w.setMute);this.setFullscreen=I(function(a){j.fullscreen(a)});this.detachMedia=function(){try{return w.getVideo().detachMedia()}catch(a){return null}};
this.attachMedia=function(a){try{w.getVideo().attachMedia(a),"function"==typeof z&&z()}catch(b){return null}};this.setCurrentQuality=I(function(a){D.setCurrentQuality(a)});this.getCurrentQuality=function(){return D?D.getCurrentQuality():-1};this.getQualityLevels=function(){return D?D.getQualityLevels():null};this.setCurrentCaptions=I(function(a){j.setCurrentCaptions(a)});this.getCurrentCaptions=function(){return j.getCurrentCaptions()};this.getCaptionsList=function(){return j.getCaptionsList()};this.checkBeforePlay=
function(){return v};this.playerReady=function(b){if(!m){j.completeSetup();x.sendEvent(b.type,b);f.utils.exists(window.jwplayer.playerReady)&&f.playerReady(b);w.addGlobalListener(h);j.addGlobalListener(h);x.sendEvent(f.events.JWPLAYER_PLAYLIST_LOADED,{playlist:f(w.id).getPlaylist()});x.sendEvent(f.events.JWPLAYER_PLAYLIST_ITEM,{index:w.item});q();w.autostart&&!g.isMobile()&&A();for(m=a;0<G.length;)b=G.shift(),t(b.method,b.arguments)}};w.addEventListener(b.JWPLAYER_MEDIA_BUFFER_FULL,function(){D.play()});
w.addEventListener(b.JWPLAYER_MEDIA_COMPLETE,function(){setTimeout(l,25)});w.addEventListener(b.JWPLAYER_MEDIA_ERROR,function(a){a=g.extend({},a);a.type=b.JWPLAYER_ERROR;x.sendEvent(a.type,a)})}})(jwplayer);
(function(f){f.html5.defaultskin=function(){this.text='\x3c?xml version\x3d"1.0" ?\x3e\x3cskin author\x3d"LongTail Video" name\x3d"Six" target\x3d"6.0" version\x3d"2.0"\x3e\x3ccomponents\x3e\x3ccomponent name\x3d"controlbar"\x3e\x3csettings\x3e\x3csetting name\x3d"margin" value\x3d"8"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"eeeeee"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"bold"/\x3e\x3csetting name\x3d"maxwidth" value\x3d"800"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAAAAABTb2kNAAAAGElEQVQIHWNJYXnE8pXlHwH4Hy7/m+UrAIRMGWv8AcuMAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAaCAQAAADV5l4gAAAAXUlEQVQYV2NiYEj2T7mf8j/lP1O8/98NHxUeMTxiYPo74RPDM4avQMj0R+Edwz8wZPrD8B3G/AtlgEXpySTC4v9QiFPBHzjzwS+4uQW/gL77DYRMPzf+Dfj5AOR5AOEMhGrZiW/LAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAaCAQAAADV5l4gAAAAYUlEQVQYV2NJ+c/AwPDgf8HcjSyPgCx+Be4N8QEsX4HMrwziDFwTWP4xgMAbBikFKPMnwx8GKJOB4S+C+YeuTJwW/8cU/YdF7T8E8xfDvwcsv8GSfxkYC8CeZ3jAWPB3IwAFQj9cfrWVAwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAdUlEQVR42u2TsQ3AIAwE2YARMkJGyCiMwiiMwgjUFMAIjOC8lMJdiIjd+aSrr3i9MwzjHXoYMOgFmAIvvQCT4aEXYNLvEK2ZMEKvFODQVqC1Rl/sve8Faq20cMIIvUYgQR5ZMJDh6RixQIF8NMHAgMEZhrHNDU+1T3s3o0CaAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAABhUlEQVR42uXVzUoCYRTGcXNGR3HSDPtASyIhrIjaFJlBRBRUdAUGQQurdVfSrl2LuhEvYxR1IYroRhCEWU1/4R2Yxcz4MUlQB34bGc6D58y8r+/vl2EYczNpKvitzN9/orEEGUEoQhAyJDNs2gAJCiKIYVGIQUUIAWvQNM2jWMEGtoRNpJBAFOGJgsRDAahYRRbHuMAVznGEHaSxZBNkvyPLQhXEkUEew+riE88o4AYn2BVBCcxDgWz+G6fxhLGMPdzBWh184RUPuEUOWaSwgBBkpwAZESRxiALsqoV3EXSPSxwgLUIUc1xOAWvI4RFupeENRVxjH0moCMBvF6BiHXkUMap0lPCCM2QQh2LuwingFE8Ytwa4wTYSCEEaGVCtVo1x1Gq1CQPEiDRNM9yUy2W92WyWdF13HJHrkt2aNxoNbTAYuC555Gtq17her7f6/f7HmK+p+4dmbcysO71ez8OHZnNUDBtXKpVuu932clTM/rCb/XHt/cL5/SvT+6XvKcz3r+sbpPMfjCOvfIMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"pauseButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAN0lEQVR42u3NoQ0AMAwDwe6/YYBncWlUyQFBBX+SickfADM/0k+AQCbJffHfqir3hZ/ADwEAowtQ1mmQzb8rQgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"pauseButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAABdUlEQVR42t2WzWrCQBSFq1FSaSjaFi1iF6UFtdBdF6WhC0Hoym3BlSAu+wbddSF9xfyTJ7k9gRMJuY2Oi2w88BG5zLlHZiYzOTttiUijyP768Y2bxCKVv0nD+B/T2AY2OAcdPnOKNZtjrdx/KMCi6QJ0wTW44fOKFGtdjrXzEJPml2AA7sEEPIExeCRj1iYcM6CnOoTz2AYOuAVT8Arm4APMwDuZsTbnmCk9Dns0qxbVBj3wAFzR+iRlufT02IOLrqenA/rgGSxE64uUtaCnzx7WfwEtLtYQvIClaH2Tspb0DNmjtS9gxHldidYPKWtFz+hQgAPuwBtYi9aWlLXOPPQ6JgEu2IjWLylrQ89xAVEUSRzHkiSJpGm6C8jqBVSA8RR5nie+70sQBHmjbUZWL6CmyHiRVQAXWQfoRTbapiqA21QH6G1q9KJl5jwkDMPdi6YCzF40fVSoAB4VKqDiqKj1sKv9uK71wqn9yqzt0q/vs+Wk9QeSkdKwXIKzCgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"prevButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAAfUlEQVR42u2MwQnAIAxFu4EjOIIjOFJH6EiCF8fw7BQZwf5AegkU2tje8uGR5Afe5vH8mTHGZG5+EXSzSPoMCEyzCPd+9SYRZgCFb7MIJNB5XxURT7OotTYFkql5Jqq1TiGBzrvinUj2AMqSSHXHikj3GZBVpH8R9M3j+Tgn8lcGnlSSd08AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"prevButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAABhUlEQVR42uXUz0oCURTH8VKz/BNFmZJ/iMAoEmohlRRI7Yp2Qa0igyJc9Qot2vUGbnwB3yJXPYKaCi5m62LQzSymr3KE09hAi1nVgQ93hnv4wZ259878o7Jte/YXfADPcAvwIeDgFwHMKYFJoDPILw0hREQYCyKMKBZlDCEIvzMkiAhWEEdCxlURRwoZJBGTwOA4SC0nLJMb2MGujFlsIYc8DrCPrIRHZtR3mccSMtI0qTMUcYoLXKGMTxxiE8t6WSHEsI2iCirhDg94RgVDmTtHDmvjILWsBPZwqYJe8Io3vEPXDfJY10ERJGXiWjVXUYMBZ5VQQMoZlMIRblVzHSZ+qkccI62DokijgHvVbMGtnnCCjGtQu922R7rdriXPU3SQ69IajYY9MhgM6p1Ox5R3zbE0l4+tmquWZdV6vZ7hDNIf2/X3T5r17zcM40MH6d/vuiGleWpD9vv9SrPZHDLn2JAuR0QFTR0R0zTLrVbr2xHx7NB6do14drF5dtV6c/n/7foCpva8IJ04vWUAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"nextButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAAdklEQVR42u3OwQnAIAyF4WzgCB3BERypI3QkwYtjeHaKjGBfIeClFmvaWx58KAg/ks329WqtBbbBW7vMhhowBH2o2/WhLoJTh0QBrw4JfhXKObcBlnMulFJqNwp4uS+HIjjCNKGDZKshhkCYJlRge/ot2Ww/7gSJGQaejWvrvwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"nextButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAABjElEQVR42uXUPUvDQBwGcNvUatOK4kuKfUEERVGwg/iCguimuAk6iQqKOPkVHLr5DVz8An4LO/kR2jQtZMjaIbRLhvOpPOHOJMahnfQPP5IcyXO5S+5G/ngJIRKUpMRvwiEyIAWjPl5rlApIhgJ5YxoykIMJHnUYJx2ylGFHWjAozQdnoQBlKIIBM2RAnsdpBqa/hbHRgCWowBZswjoss30V1nhcYKe6P0w/aAoWYRua8ABncAKHcABHQlaFbz0JY/589YPm2Psxb+zBCzzCLVzBtWAxeIVvlQHND5rnUC5ArXd4hio8Ke2nsAF5OTwEcWJ32WuwHHiDV6XtnB0XIKsGlWAP7iCqXKgp15ewA8VgUBn24R5+Kk85v+EISpCLDLIsS0Rpt9sez+OC5NDq9boIarVabrfbrfE6bmhysoMhtm07nud9TTbb4iZbfn41xHGcD/Xzsz3u88sfsn9jo9HodTqd0A/JoLgfUi4R0zSbrutGLhEGxS2RwRftMLeRwTe2oW21g2/+/6c+AdO5vCABA1zBAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"elapsedBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAcCAYAAABCgc61AAAAD0lEQVQoFWNgGAWjYGgCAAK8AAEb3eOQAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAcCAYAAABCgc61AAAAD0lEQVQoFWNgGAWjYGgCAAK8AAEb3eOQAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAALElEQVQY02NkQAOMg1aAmZn5P4oALy8vqoCYmBiqgIKCAqqAmpoaxQJDJsQA+54Krz/ExkoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderRailCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAWklEQVR42tWLsQlAIQwFBcVKGyEGK61cJ/tXGeVptPjwN/DgQnIQ9xYxRgkhqPceLqUkW5g5Z7g91BYiQq31BDAzxhjmDb13zDnN+/IP0lr7glFKkX3oCc+wAHpnIpi5hlqoAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderRailCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAVklEQVR42tXJMQ4AIQhEURKMFZZCrLDyOty/4ijsYuJWewEn+c0buGeIGKUUr7XahtZaENHJgJmj9x7vkTnMOSMTkY2w1opMVX/BPxhjJNgBFxGDq/YAy/oipxG/oRoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderBuffer" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAE0lEQVQYV2NgGErgPxoeKIGhAQB1/x/hLROY4wAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderBufferCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAJ0lEQVQYlWNgGGrAH4jvA/F/GOc/EobLwAX+ExTA0IJhKIa1QwMAAIX5GqOIS3lSAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderBufferCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAJ0lEQVQY02NgGErgPxDfB2J/ZAEY9kcXuI8u8J+gwH2chqJYOzQAALXhGqOFxXzUAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAALUlEQVQYV2NgGCqA8T8QIAuwoPEZWD58+IAq8Pr1a1IF3r59iyrw9+9fhqEJABv9F+gP7YohAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderProgressCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAASklEQVR42tXDQQ0AIAwDwDqcPhLQgAlM8JqDORilnyVY4JLDX0iaOgWZaeccVkSEKyv23nxjrcU35pyurBhjWO+dFZDWmqkr8Y0Lr65i67XRzKcAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderProgressCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAS0lEQVQY09XDQQ0AIRAEwXa4+iYBDZjABC8c4ADmHheStUAlBc/wb9oOAM45vvfewVrL6WSM4Zzeu3Naa04npRTftdZAkiVNScFTPhkFYuvY2zeUAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAcCAYAAABYvS47AAAAwElEQVR42tWTPQrCQBCF84OsYJCIYEQrsZAU6QKx9xheyG4L6zTZs3iInGZ9Tx4iAWHaDHwwvPlgyWY2mVvFGNNf/gmZyEUm0q+kwQI4sBROWf6R2ShcgRJsRanM0UnUrEEFTuBC1FeaOYoF2IMaXMGNqK81KyhuwDmEcB/H8RVV7JlxRofiDjTe+0eclLKGDsUDaPu+91NRWUuH4hF0wzA8p6Kyjo5ZNB9t/hjz9Zgv3PwLzUthXjPT4hqewrzqDfMnQ2tu8Pr1AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"durationBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"hdButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAMAAACu5JSlAAAAZlBMVEUAAACysrLZ2dkmJiYuLi4xMTE3Nzc8PDxAQEBJSUlRUVFSUlJaWlpdXV1jY2NpaWlsbGx0dHR3d3d4eHh9fX2KioqPj4+SkpKVlZWXl5ehoaGpqamsrKyysrK3t7fCwsLNzc3Z2dkN+/dcAAAAA3RSTlMAf3+Sa81KAAAAh0lEQVQoU+3J0RpCQBCA0dW/i02KpEIzzPu/ZJc+7CM4t8e5k3PuYgmX9VNttv2W2iww9gDhe/iK3mZYHhRVIBwe+l9PYQWjzbB/BYB6gdl096ra4WP0PD/kqh25qq4vIjfuIvBuuMrkaURk8yUvGUAiefSU0/5hkJZSPECcZP8J62epztzpDzcuFrDsGN7pAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"hdButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAYAAACZOmSXAAACFUlEQVR42u2WsWoCQRCGE42I5AikkSBaGSwsAiIpQi4BK0vF+qwEjb1gaWMlaGfvA5xYWvgCNraChY0+gU+wmR3+DcPGC0lQrnHg43bvbv5/d25v764uYYdS6voc/MY0AqLEzYmICt3roJlGiRgRJxLELXD+g8hPQDPGHnIAwjiOpHsiSaSINMj8CeRBIwlNBx7RY8Z3xAORJZ6IZ+KFeCXcP/KK3GdoZbU2POLGPIJyOLiYJ96ICuERDaJJtIiPX9JCTgMaFWjm4eHIBRZHWR6Jd8JXpw8f2o/aS5Y8QSRRnqo6X1ThkTTmN1iRKTwfz87o9/sql8updrutTBSLRT63WCzUZDLhtoCvT6dTW8qDR8o2T2OBNL5leJ4WZBMd+/3+y+RwOKhut8vtUqnE92JgfLSiAY+0NHeIDFZo085gI5gvl0s+GjMKPpoq2IOzogmPzDFzl1eriPV6zSI2eAw8c/TZ1M6RAW33R/PtdqsMo9GIRQqFgqrVagy1+dxwOFSz2YzbrutaOeIckOaBZd9sNgro2bFQp9Mx575m5fu+6vV63K7X63xttVqZwfE1qSXLHrjgZEK5XGah8XjM/fl8bsx1nyuBWcqq6DweiNSSCy7wVZMJMNKm3B8MBkac+zCT8CBgLLFetYBNBjefHLnJBG6vu93OP7Wx1pTba6gfllA/qaH+TIT6GxXaD2Q4v86XoPgE1h55oNE1QD4AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"ccButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAMAAACqEUSYAAAAXVBMVEUAAACysrLZ2dkmJiYuLi4xMTFAQEBHR0dJSUlKSkpRUVFSUlJaWlpdXV1jY2N0dHR9fX1/f3+Pj4+SkpKVlZWXl5ehoaGpqamsrKytra2ysrK3t7fCwsLNzc3Z2dky1qB2AAAAA3RSTlMAf3+Sa81KAAAAe0lEQVR42uXNQRKCMBAAQWCCIgGCGEU3sv9/JpXykCLxB8y1D1OdsEaLmqT6p6M6wKn6FuyWaUQL9zdcW2yuLV49dmTUL2S6gcYsr+IbwgdC7MYj/EoqIoZFHF1PL08QkYNO0MG8wMUw5LoOwCQyG+jWTMuS1iXW1SnbAaDLE32SOX+lAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"ccButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAB8UlEQVR42uWWsWoCQRCGEzUcEhFsQpCzUiwsBBGLoElrp0HbsxI09j6ClaXgW5xYWvgCNhaWFjb6BD7BZmb5HWSXXAw5rnHg43bd3f/fG+f27uE+Qyn1GCa3mMVAnEj8k7jowdwyxKQnwiGSxDNI/Qmsg4YDzbh15/jRwaIM8UJkCRfkbsQFWWhkoOmwh2nqEGnilcgTZaJGvBF1onEjdaypQSMPzbRlzLvBYIl4J9qER/SJATEkvn5hiLl9rG1DqwTtFFId06ZIQ4H4IHwVXvjQLMDDkcJC/svEpwo5oFmGR1JSjD++ptNixGQyUcViUeD+JRaLhapWqzLmeZ46n8+mhAftLKo6cTF1UQB921AEpT2bzdRms5F+q9Vic5lnRB/armmaI+ooBAkI6TvCnYnwaDTitr5ynE4n2YQRA9aGR8o0baAKOXSaRMQOufP1eq2CApqNQNPD4aCY3W4nptS36Ha7emy5XHL/R4JNkd79fq8uVCoVLez7vu5Pp1Pd73Q6qtfrcZuvemy1WskmrzQC0yuFdL1gPB5rERhJez6f80ak32w29QbxHxumdiFZj8z1gu12KwUD9EYwzuYwk43xGsPUfmSswwGTwyLwcJBj8Hg8+mEZklbgMRj9gR/9qy36l3j0nyuRfphF+wl69/ENcVv6gzz3ulwAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"muteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAA30lEQVR42u2UzQmEMBCFtwNLsARLSAkpwVJSwpZgCQEv6skS5iieLCElzL6FJwxCDlllT3nwkb8hXxLQV01Nzc/Z9739l8gBBRE0j94AiBk3oAceJCCPCM2GauY6zh3AsR/vit5AT8zzBbZCoWdNWypQS0YmQM2tekpDkWzbNs1xqRMQwGraMtk8z5rD1k3TJJgLYF2WZfi2oEw2jqPm4HoHhHMOJNCDAxTLnGHIyALXhRLPmnsfOU+dTpkRJooc+/F1N/bpzLjhITxFAp77i1w3440UxALRzQPU1NTk8gF0y3zyjAvd3AAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"muteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAC2UlEQVR42u3WPUwTYRzHcWmBFnqKBYpAHVSQoEB8QTQaiMSILhgDiiFxUBMSlUETnYiDg9GJmDA44OCgo8bF18EFibq5MEBpeUsDIaVAm6P02qTUb5N/k5P2oNg46ZN88tz1yT2//p9e77lt/1u6Fo/Hc9L5GwEmmJGrY4bpz0JlcoOAPFhRCAU2FMAi46YtBa4LyEM+LBKwHSUoh1OUYaeM5yUDtxpSAAVFKJZJd6MGh9GEY6jHXjigpAQaBskySQWlcMpE+3FQJj+DDtxBN9pxCjUogw25yEkJEWbkw4ZiqaBWJm9GK86jEz0YRKKNok9Cm1El11th/i1QF2TBDuxCtYS0oQv3MIObuI+nGMIwIljAQ1xGI5xQINWlBhXBiTqclgtv4xXCUsUTDOADotAwIsce9OIsqmFHPkzJsORvpKACDVLNNfThJ/TtBb7ADRfCEjQm4/3okHkcyaXU3xAW2FEtFW3U3uAbVDn3IQYvQhjGVTSiHIX6MDMK4EA9LsRisbgR2jt8wg/OtbW1NZU+Qu+nX6T/zth1nEBl8q5cH1aGQ+icmpqKG9GHeb1ebWlpSZ2bm4v4fL7A7OzsIn1GYQ7Uod3lcsWN0N6GQqGhyclJNXG+srLic7vdseXlZa/H4wkRnLKMRr9ZFVr8fv8jLh4MBAKv+fbudWEvCfs8Pz/vUVXVRbXaxMRENBgMjiXGV1dX094g6e7GcqmuFVfQiwcszfvx8fGwhPXjGYEf+SxKNRqhI4nj6elpw1vf6A9dgRo0yUWXcINv/piJvRzfRV80Gh1gBb6yAsMERahugc82/FOnC1RQonvYHkELzoXD4S76i+jGLYKeJ6qlolGCtvC4gv5Jr9tGKrEPB9CAoziJNnRqmtaz2YM40+3FCgV2OHT71x7UStXH0ZTJFpNpqEWqtUnFRShFxWabZ1bvHLpd2yrhijB4LcjyXSSLF56sw4WE/HPtFwoiecfnKRGcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"unmuteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAAk0lEQVR42u2NwQnDMAxFtUFH6AgdISN0hI6UEf4Oxgdvkas9RUZQ/yEBYdChgoZC9eCBLBs/SZLkjxlj3Ol2RehJd6rfDq1UT81eKcwZVCMB9Zw/p7CzfErvXT2ndzB3kAitNfUUQ60V555zLFZKUU/zBscOdo7EFiOcmFLMcQli4y+6Bz4LBx90E3JV8CZJkvwsb8qa9F25tXYIAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"unmuteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAACOUlEQVR42u3WS2sTURjG8ZqJuTSJTW1T26YqrWmN1jt2ISpWTb1ABS3iRkS84WUndlNQFN34Fdy5d+U36MJVQVroKgnmvgqBZBV3Gf8DTyQMzMggRZC+8CNnJsn75CRnzqRvu/6/Mk1zRw8fwBhbEeSDAT92ih+cU7D8dYiahxFFTPoR1HOG+Fxm7h6kRiE1H8Y49iKJEcQRRRghhQegmTuFKkQMBBDBbkwgjVOY0+Mh7McoEhjSa+OIIawehluYgSB2YQ9SOI0MbuEFfuCizs8ijYOYwRSSCo8g0J2hU9AAkmp0AbfxDJ/RhlV3sYgFZPR4GedwApMKDMNvD+v+RlGM4aga3McKvqO3XuKhxt/wFI+xClOBScTU12dfEEEMIqUZudU7vMKajjewrvGqZjiFOAL2MANhJHAENzqdjumE+ojXeMvxJkyxAh/hEqYxiKBT2AiOY6lQKJhOesNqtdpm93y1WvUUlsAsFrPZrOmEeo/lcrm8Zh1XKpUNxuvWuFgsun6N9t/sAM43Go0PzWbzU6vV+sInztvClvHEGpdKpd8LxArinPMCsa9GjGp287iD51ip1+tfc7ncTzV7gJu4igVc8bL07Rf0GGYwhwyWcI9Zvsnn80XG13EGx3AYafzxonYKjOoNE2pyEmcx3263r2nLmu7ZJ4e9b1ew7fQxhY5jUgEp7FPIAPq9bcTut5cQoohjSOKIIKjGhrjeYryEBhWMnnuZ9+buoaJgUcjW/xeRvu36F/ULlStUoyVtQSYAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"fullscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAbElEQVR42u2R0QnAIAxEu1lWc5/+ZYKs4TTWjwS0qIFrP+/BkYMLOdCLELKn1tpG5TleYF2yyMUzvCAOZDtwgU85PJGE/+NPyuTJG1Uts/9+sI0+y6GCrtunLHKJHbjAZYcd8x28IJTmhJAtD4gEt9ueDIktAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"fullscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAACFUlEQVR42t2W324SURCHhS67VCoFbYhRkbQsaCwVSwgUaZP2yia9Mb6MN41vYfpIfYIm5QIegJfA3yTfSU52c1i98KabfGGYmd+cPX+Gw7On+2w2m5JPUfxfC5dhB8pQKooXvjGCiohFFRJ8EVTwVSHGtxOckSuOsCb2xUsDe0/swl42jiZxg2wr/kK0REf0DOzX4hXIzsVbaPODsH4VUSOxL8biwsD+SCEhOx/vo61Rq5zd1JipdhBkn6k4hmk2iKZDjdhtuj9Awnqm4twTPopf4lKM4BLfo0tCk1IjCQ3QFF0xR+QK/BBXYgxX+PycOdpmaAC3RG1xiui7uMWeic8ww3dLzgZNO7tEoU1OxYhpX7Dmd+KDgT0ldk5umt/k/DGtioZ4y/E7EUMx4JQcQR/fkJwemgY1OKbhAd6wnscU+ESRQ+jhOyGniyY4QFlE4rk4sCKIJyzFaLVa/XaNhT0iNiH30LTUiEJ9UGeqg8ViYRv3TVxjj80PY3zXloM9QFvf1gcN3mRiIr3pvX2u1+ufHMMvMDefn2MatI2iPjgSZyYylsvlg77fiK/umGLfWMzlmQbt3/UBQoc7530IxLf3QeT3AYIZbzbE9w5SfGfknGb6IAr1Qez9XL8XXabdxtc0sNvEuuS20MZFd0LsXThNqOOrQg0fcS6cXPHiKzOB2L8yg3GKG4WXfoBSUfz//W15ss8fvEcYMYnLr+AAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"normalscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAbElEQVR42u2Q0QnAMAhEu5kD588JXMNpbIUEpCBpe5+9B4JczF3MQQjpcfeBz+4vxpMe2ULSIF9YjaqWM+hXWRrdA2YZah61Wv2/qGrU6nQkQK6yLmCeCbzFCmk02FxWX/WyYXw1H69mCSEtJ16St50Fqd0HAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"normalscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAACDUlEQVR42u2Vy0ojURCGZ9Kmk4A63cYLMhdE28tCECUgxCuzGBDc6AgO7uYizKAP4NKNb6S+g08gSZO8QZ7h+Bd8ScDDIZmsLfhIpc7/V53uPnS/e4uRwjn3vsto2sHiggdrw2iGaT4miiKGEhShBDEU8YSH9Jr3G4yLSZGID+Q9qCXk0rIBhoSaj4kyxlnxUXyBz+ITKKcuDdoEb+9KQrufEHPiXqyLLVETmwDUpEE7h7cYGhBxmQk72xAWR+KY/Bs4akfkG3gSekTebaJYFlWxKLbFDQ2e+P0BvRqabTxVekT+M+gPmBKZ2BWn4tn146czCNa+o83wlkNXUGAxRVx3fvyC11HHk9KjQFtvQIxoSeyIE/Fb/BWX5EK5auQnaJfwxsMMyMSeOKPZVX8IzVUjP0Ob+QP8Y1rhPq6Kg2az6Yw8z12j0XCKf4blVuuum9Y8eCvBY8ritFgTXzudzl273c4VzlBcG93/tmYa05oHb2XQMZ0RK2JfnFujVquVs9M/huVWY+g52hXzDjqmJe7jgqhZI+3wVvkFA04N8gtbI6/hSekRhV4VMS+vee3uAeOeOOSs1w3yQ9Zq0j6aB2/sPwP/ZTeFYUEsc/mZWISM2jKaeTzeyy50FWV2k/LgquQJpNSmySfxeLsPfnAQlzCC1dgAoInxDP9Vg8gAauG1//82I/ZM1DztW4wSL9xQTRdfTNL0AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAaCAYAAAD43n+tAAAANklEQVR42u3PsQ3AMAgAMIZKSGz8/yvNBdlbZH/gCACAmycz31Wh7g6hL4eqaldoZoQAAP7pAACeB6WdpTwEAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRailCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAaCAYAAACQLf2VAAAAUklEQVR42mNkQAOMg1aAl5dX4O/fv+uB2AEmsJ+RkdGBg4ODgYmJCSzwX1RUlIGdnR2u5b+amhqKGfsVFRUdmJmZEYZKSEj0c3FxJQxu76MLAAClCw6mxiBchAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAaCAYAAACQLf2VAAAAU0lEQVR42tXMMQoAIQxE0XTaRLaS1GlCGkW8Px5t3KzsIRx4zYeE6JqllBByzouZHxIR1FpRSsEbFrk7gqpGAM058fvCGAOhtXZOeu8IZnaeXrMN+2gdUQAHUEcAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAaCAYAAAD43n+tAAAAL0lEQVR42u3PsQ0AIAwDsCLx/6udM8EFFTuyP3AVAMBkJTk/hXZ3l5CQkBAAwNsFna8SATE1MG0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgressCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAaCAYAAACQLf2VAAAASklEQVR42mNkQAOMg1bg06dPAqysrOuZmJgcwALPnj3bD+OABa5fv/4fRcuxY8dQBbZt27b/////CC2rVq0S+P3793qYIOOQCQ8A+QIdmsjAgckAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgressCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAaCAYAAACQLf2VAAAAQUlEQVR42mNgGDLg58+f/0H4+/fv+z99+iTA+OLFi/8wyX///h1gef/+PbIGB3QBBhQBRkZGhBYQh5WVNXDoBAcA0N8jO0ip8PQAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAaCAYAAACdM43SAAAAEklEQVR42mP4//8/AwgzDHcGAFd5m2W1AHjxAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"display"\x3e\x3csettings\x3e\x3csetting name\x3d"bufferinterval" value\x3d"100"/\x3e\x3csetting name\x3d"bufferrotation" value\x3d"45"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"overcolor" value\x3d"ffffff"/\x3e\x3csetting name\x3d"fontsize" value\x3d"15"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA8CAAAAACCmo8mAAAAG0lEQVQIW2NIZeZh+s/EAMQwiMxGlSFHHQ7TAEepMbj150V5AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA8CAYAAABfESsNAAAAnElEQVR42u2WvQ2DMBCFv8I1M3gjMoTpMwqjkI1S0RnJEhaiuZcFEuyCBCnyqz+9+9XpHMAwDD0wAp4PciGEXtK0risxRvZ9fw+a2ZhzZp5njuTMzC/LQklOEtu21YGSyqCZ1YHfcazR1Tle6FjVnr+q+vz2XJxjW4p2Utr2tFn/OvT5s5b0BHwJdmZ2Bybg0NmllB5d190kHb5cL8J5WhbWZJeBAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA8CAYAAABfESsNAAAAmklEQVR42mNKTU39jwffB2J/BiBgunnzJgM2/PjxY4bPnz8r/P//f0NKSoo/E5DBgA1//fqV4enTpyDFDP/+/ZvAxEAAvHnzBqRQAaeJMPzz508wTVAhDBOlEGg1LUxkIAIMtBsH0ERigmf4+XpggodGbhxNFKNFymiRMhrXA1Gk0D+uoQH+gIkIRSCrC5gIeOIBkA74+PHjRgDhswBcaL43lQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"bufferIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAFy0lEQVR42oWXy2sk1xWHv1vvR1erNeqWZ2TFiSQ/ZI2GMBDygsRhTIwZgg3ZeeFV9lnlT8giS/8BhqxCICYJ2TgPhzEhYLJQFgMT2SN79JhoMq1Hq7tVXV3ve7PoktQjd8sHCpq6zVfn8TvnVAkumRLnPzV0LFw8XCwgI2ZITEaJFIqJZlxCneEEAg0bn0Y8176eB2CG19tuhx4DUpRiMtIYw40gooJqGHjMHi5urzt39JZgeHRwb/nBPJRIFOWVHqoRzEDHQKvOTGpxc/uW+zNnzUcQoy9vvx/EbkxKgWS6h0og0DGxcbAxERRIdIKDBfeOszZPgCDmcE2+3n68dMyADJSYFLRx7p2JS0B9a34YCGEMb3aQ+HJGb/kEGIBPQLyUB1joiLXGYx1FwmBSyAIDm2DY2ljVX9WXoXzy8db6f1tSM8V5UkGghwB/t36x0iYfBR2xj3wWKNDQcahvrNo/Mr7joZPcSlYffPT9XTsbnCTE+EDKkPy4FvaK9xaGWZ5XBJ9FHl8A9Sp/NrWtr8Xftl5v0STAFqqhiqx94/TpQC1krZKYHtFm+PsXtz7IP9E7RaLiswxaJGSXQ9Yxh4G+7FHHAmoqE/ELHe+lg6WHX/y6fC1tqqDYHt5bfuAe/9PtFZHMxgviXGTyQthCCNDPNaODoQqi2d6tk6c7eYByw5faboferugY+ZQ+OcshSHIjKp8k6wk+UBAruW+dEjJ01NIhJuqs9XpG1sjUMx4mX+4URXHz6ONPk1c6Sym6ign7w/vrbQYMKBAIFJKcgvzW8aafaWO4bFw6QmlomKOubV/fXHVv21/HlPvx/dbm6i5dIopKFhKFRKJEnefQK0LJHuk40MDAxsGjhp/4O3PdQEo3Wmk3OvQZkFBWQDW6hAJMrmEDIf1xFYJQNjZ+P9iaLwLLDNQLoZORkVSjKqn8U6M/f6kGGgEmkBOOwEIF+FvNf78ys2bXhC6j5PPbO8+fEBGTkI+GwLTZh80i1nkm90nBwOoFGy83f+Dd8IUgFdq1f+Vv9IOclOIrcNoYDiwW2UFqmJtzM2vejRYt1VJNVXvOe3mzXlVVwlQcBGO4ETIAAyNxzZqHjwF4KmEwN3TQERe5m2LmpDuVnsYnColSqCtRV5hG4cT5ICFBVc2QDdyEEoX4Cmg+6Y5Gvtbpb0ZPO5zQEx0RtvsPb3arAa9dCQwvZkxV5xAMskb4ra0N8rUoEE5+cvrZd3fqKQqdEjV9uwGS/UuykWfC9nrBw1bma1pQrHT9mISEjIyC/ErhTBS2gY6NjYODGZob9T23KN3oe4fLAxIyCqSQSlwS0BWtpyEwMbBxP2v87RszC1Zd09J+/+nSzk/axOQUVXEu2m9m+nAwUECBRgl/Xphfqc066Cp1rcauejRYGe1fdY5UijXz0wsc6CzyaAwolBKAQnxU9+e9RkP5CDKEk9345GBlQHHmW9U7cu+aZTwzXi1qz66A0aF27DmBjYsGWHg49Y6HgfmF8buga0KQvd37Zk5pOsXl0kzcKUqq8ccKkKVC/MP7zYI7YxlwlP+qe3fv3YGrlQKyK9++FAo5F+10k/mYUcgxcf/58Ej/4+J803UsBTm+/SG3P38x+o93CTe2U7Tz7BRvdvP/hftdTuhyQq93sP/Dk3u+2/CdgDoz1Jlxm7N/mPllKEpLjOGi8Z1igFBKIClI39n+LcOoNiuITsODH+/OJU9cXbexlQ7Y5NTs0HpN3Xn81wXLrLyM2J8UsqQkaw1+/vAvhx0floZv9MhRqSykHJtEUgJ8kPKoUc8MYMhwQg6FUlACkuLNFA1GAkFoSZJnKsMGCjLivJmNVNHvTevFqmFQlBRkJAwZkpCSk7/VOzg5jUMGRIT04qPuT/uV1KfYuWyEUiO/RrNWAQLxanp370Oas56paVF61L27t55Ne3c9l9u4KXHpVEe/b/6pEVoXwqa8av4Iplr1VaChoVVejzKrrlpd/wdqZ96EzbsuCAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"errorIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACL0lEQVR42u2T64nCUBCF7SAlpIQtISVYQkrYElKCJaSElHBL8LfPKD7wyUXxgYrOzkCyHC6b3LgasywOfBDuOTNzcklq73rXfygiqjMxk1YsZ38lXIOyq1F1OI/s5VUZsAlBNOMlaDhvVhXOZ7B80D4ztNeV+VNY9VdUzg3VM/5srM9XhXOMb0zleJXxjTqlB7xer8HtdiPAy/KKhl7pLTXc5XJxGc1QggJNIXgOfs24pQU8nU4hQynn89kFjZD0XDyGFpYS7nA4uMfjkYAQddQEQwtRk1lPD7jb7SKGUvb7vWvoTdCbqIkXNCF6arjNZuNtt1sCAtPDZwp09YMe4AyZ+bSAWmvFUILm4Y7Fo0xderQUep5Rq9XKW6/XBAQ/+fi8AZ5GhicwZj1+i4vFIl4ul5QQZ/lYC8AX5Pi+58nsh8LNZjOfoZT5fO7neAPwZgaUGeIB/F+Fm0wmznQ6jRlKyH1b1uvgred5zbmy6+6Ao9EoGI/HBHh5ftF/6SXZdVe44XDoMJqhBFWgxwO/V8CvwK+Z4rfY7/eDOI4JsC4cDAYO4yVYl8lM3CE7C4XrdrsuQym9Xi+qlVQyW3YArrWp3W6HDKV0Oh1usler1fLTHnku0iOzxQ+EtiUfDAHYYOsl5I6+0Oj9yDNHYNSM84KADqOhNyq65K5fX/wP9tpfznrV9kWu7dbtn1bxgCHj1sorfKmwaEDFUMUo21XrCsNpyVD4yl8GflLvetcfqy+dCCa6ODMoXAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"playIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAmUlEQVR42u3YsQ2AMAwFUTZhNEbJKMyVIsooxgXdiYogrvCXrn+SO28Roa6ABSxgAUXAlp3Zvq3fIuA9QG1AQJ1AQqVAQqVAQqVAQqVAQqVAQqVAQqVAQn1A7ngNHGO0LL5ozvke2HtvWSzuzHDiv4CE3ZMACZMACZMACZMACZMACZMACZMACZMACdMAAVu3+iwUsIAFLOBDFwtNtcHhiAyTAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAB+UlEQVR42u3YPUtCURjA8epqWlmS9EbvFEQUQUOFZksEEb0MzUFBQzW0VbOfIugr+AWaWwrKNQIVQXwFndXx9h9OnOiVy9PJhB74Ld7lD5d7POc02bb9pzVe4FfD8+am35vvAnWU0gJN/V6HwHdhFlxohUdphQvWS2y9Ai0V1AE/AoofPnjhdhIqD3wf14V+jGNKmcAQetTzNmeh8sAWuOHDAKYRxBrWsYolzGAUvQ5CJYHQH4QH3ZhEGFHcIoIT7GETy5jFmINQcaCFNvRhDju4tvU84RJnOMC2s1B5oAsdGMQi9nCDt5PAFS4EoaLAYYRwiDt8Nkl5qPNAH0YQxhHuocZAqCBwBcd4gBrToc4DTxCDHmmoXp464YVLR0oD5aFbCGEGIwigHW4dKQmUh55jHxtYwAR63kYKAsWTwCVOsYugigzAC6u+gXoeEcEO5jEIH9yCQCNzhRDG0KVfs4PAUqkUS6VStgnlclkeWCwWY/F43P5JmUzmsVKpCF6xocBsNpuoVquCj8RQIGHJWq1mYJlRgcIwwUJtKFCHmf+rOybwQRBmdLMQxlGhULg3GSbesBJ4ZzBMvuXP5/M3Hy0XgrCfPTTlcrnrVwvsE+uY4NBk4NhJVDSdTt+y8guOnQ1/cG/8qw/55dH/9dsfusBsjCvg/1t+qWfcOHUEmHnfQwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"replayIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABxUlEQVR42u2XwY3CMBBF0wElpARKcAkpISWkhJRACS5hS3AJnOHAwoEDB2QOHJCQmP2DcrBGycZ2BtiVMtKTEGLe/NixJYq55prrxUVEBjSgBStgu88NMJ8KVXZBPI2XBxaU7wi2AJbyy7LjVeGWwNP08uzSDlcDPzLUCcZ+X79j5RyofumtgNNeSfnO+QG5SfCYIc+kd3LgQKxzpNzT9cqy2VfJ4BPr70iptXpG42JXWcXH4+EBBbhCqdgl3D5JcL/fDSBBpRWQXT3++N253W4NoABfKBc7xYwmuvl6vbaAApx2QHaKGW108+VysYAC1AOyU8yID3g+n1eAAtQDslPMiA94Op1aQAHqAdkpZsQHPB6PDaAA9UPCTjEj/pAcDgcDSJB1zez3e9Pjr3r8Jkm82+08oADe5lSH6Xqt+N4Jd/oObbdbCyhks9mYREcd9D9DskN6gU0OCFEJSODBIsGxEv22c5Ag7/9KJyTBV0K/AzSCLXKLV6vnieuEftkr+RY7khVyGQyqJ74iEp0/TxBVTGKPedX2aj1UC+jPhuTDBEgvpH7AdUJA/4GAw2GAAy2oNQ7KlEt+DWwXxoBFMddc/6x+ACbEv+zn5grUAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"replayIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAGZklEQVR42rWYTWxUVRiGoTPM0LG20IEypUCKTX9IhCK0iqAVGtQAIUasAyaAWkaJJlZMhigs8CcaEhdSdSNx0bhRFrqQjS66BTFGFiSFgC2/bWkhQIFSZ4pwfW/ynOTkwO3l9yZPAnfO+b53vvOd95zpuLt9PM8bb1EgIhB1iECBPWfcw3psUQiYIOKiUCTEIw4JPoszNmqLfRjCIkYUyYtFqSgT5aJCzIAK3pUxppg5RmzkgQh1KjZRFJEwJSpFrZgnGsQisRgW8W4eYyqZU0qMiXZF70dcRMRYslKqUyMWiCaxUrSI9aJVZKCVdy2MaWJODTFKiRkz1bxXcXGWJyWqRaN4QaTF2yIrOkSn2C8Oii7+3clnWcammdtIrBSx4wEiQ8VNFCV847limVgn2kQ7QvIi7Mkztp2564g1l9gl5ELkHVaOiTPFfLGCpdspjoh7fY4QI0PM+eQosSsZtiFilH4GAVaJd0UH1bivhxgdxFxFjhnkjAVuHARGad4US7CCQL+JfEjSs6IfzoaOV0xiryBXitxRBAb2XZLd1iwyIZUbEHvFJ2KreB+28m6vGAipZIZcNeR2+hGBGGgR5W6kmXcGiBsVv4odYrNIYyfLYaVI89kOxo4GiNxJrkZyF6FlvNt7cfypFjtoC9gQQ2K3yBK4GY+rE1VQx7tmxmSZMxSwcdrIWYuGuOlFu/cSopzAa7EF9xkl0QdiDSdGNfOSogSSvKtmzBrm7A6oZDs5FzAvYXrRXt5ijqQmjLXLjcJSZUnYKGYjpohvHYM475KMaWROlhju00XOJjRIC8vsLG8d/ZO9efNmTngWA/TTOqoymzmFBONqJbhY8FkpYxcxd4cfy4mdQ/xKUWcv8ziCFXLzqBctN27c6Lh+/bpno3d7afpmli7JPPfQdy8ZhYytZu5mP9Zt4nf4udFQxryIEWj6r0Fs0ITOXC7nWeSxjbTpE2u3FYQYv3GH6cxN+7H8mHYOP6efGw30oQRa5lzBMrRqwv7h4WHPMDIychZvM0uQDDma3Crir7SQYvkx7Rx+Tj83GiqMaRuBxv8Wi4wmdA0NDXmGK1eu9GHAy7GRSeZYCrt5O71YLZ4XW/yYdo5r164dwLQXGz8MFKjJBy9cuOCBHyBYYHDV4ggrwnqmWR67RTH77RxXr14NFugu8eXLl/cPDg564Adwltgx09tsDERNFeUkrKIHXxIf+jHtHMoZtMS3bhJ9u86+vj7P0N/fbzbJq+IJxtoHu3ueT0JUragn7tNU7w3xhR/TzqGcQZvkVptRuTtOnTrl2egb+jbzlnhOPIYIU0X7qvYoFZgnll68eHE79vGa2CS2q4V+d+MrZ4DNBBj1iRMncsePH/cMZ86c8Zd5m3iZICmRsHzQvQ0tu3Tp0uea61fob/3/Yy4G3/X29p63YytXoFEHHnUS1HXs2DHPRsuwhz551jqSYoiLIjhFG7xy7ty5PWauRPXo3c+q1J9uXOU6zCHgHnXBlwX51K6jR496NgqWy+fzH+nzF+2bhznaWN5ZYololai/7Pmq5HnF+M+Nq1zfcAwudC8LY1233jt9+vRhN5iW4xBLMcdcMAkWoy+rsKM2je1jXiCq3j84xConJg4RfGFNj46OfuZXzQ44MDDwAwJqxGQRt08LkqwW2zQ3P5a47u7uER1x32vsO2Ipl4oSx2Mdi8Dx2a0btOPalehfBfT96kes5imW0vRg1HGCtJbt27Dq6fTYp7G7RCsGPZM24UYd8KMJ15+DyBY1+9c+3OmeoXpTERW1e5jqb/Q3VJjAXj0a+5UlcFaYQNvLUghp8EXBQqo7zbrNROzjEkPeJCM+gJAxUZ934a/uDi4Y8+8xJJyC6VZChblBW/ZSYAmcyQ7OnDx5shsRoWjsPusAcHowWOQE+7CHIucGTdWxGAlkqd7s6ekZRMCdMMwXqwwT6C63ERoDhHG8gVXBCvOTNUiMv7NlP/16/lBf/6Ij9FNsq15Mt3923tWfel1RDHONfpp4XDt/IzbSpx47JDH7tGl+km196Z/FXN0yYi2eu5DqTXZ+uN/341rUZBIt4GLawg3ldbEei1qNjy5BWB2tUWqf7Q9WIH2IRSWxizmcyU9Cg6jnfRVjyhlfbHrbFfcwRCZo9ClY1XQoF2UImsSmSlD52IOtXPiPpBiJEwF/9TcbLupuOjfu/32eYAv3OqcpAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"dock"\x3e\x3csettings\x3e\x3csetting name\x3d"iconalpha" value\x3d"0.75"/\x3e\x3csetting name\x3d"iconalphaactive" value\x3d"0.5"/\x3e\x3csetting name\x3d"iconalphaover" value\x3d"1"/\x3e\x3csetting name\x3d"margin" value\x3d"8"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"button" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA80lEQVR42u2WQQqDMBBFQ4pQeoVueiN7BtG9R+lR7IlaAllnIZaCxHR+KWLpou7mCxE+Jm7m8b+TiTXy1HVdim5N0yQNoTYYwGKrqiqnaer6vj865x4aQm0wgMXGGC/yYfTeP4dhiBpCbTCAxQrZKYQwppSMpsAAFgAZJiGy90LbITCAhc8hBneWLs2RMegrMgZ3ZodYIuP8qSnbfpmhln66jO5gpOsyhsh4HaI7qfMs29Qsy5H9iyxfYddMe8r7EFWX5cg2FVkeritO6rtsCoILWgEWONRiY4zZy3unoU9tmNLaEMJVFmeRl48HDaE2GMDyAjEWKwKFLBqcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"buttonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA80lEQVR42u2WQQqDMBBFQ4pQeoVueiN7BtG9R+lR7IlaAllnIZaCxHR+KWLpou7mCxE+Jm7m8b+TiTXy1HVdim5N0yQNoTYYwGKrqiqnaer6vj865x4aQm0wgMXGGC/yYfTeP4dhiBpCbTCAxQrZKYQwppSMpsAAFgAZJiGy90LbITCAhc8hBneWLs2RMegrMgZ3ZodYIuP8qSnbfpmhln66jO5gpOsyhsh4HaI7qfMs29Qsy5H9iyxfYddMe8r7EFWX5cg2FVkeritO6rtsCoILWgEWONRiY4zZy3unoU9tmNLaEMJVFmeRl48HDaE2GMDyAjEWKwKFLBqcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"buttonActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABD0lEQVR42u2XQQ6CMBREm97BeCnjIQjcxLt4KVckrKuphYIC/jEtKRu3fxaSDGlh0ZeZ/2mxRq66rs+iW9M0bw1hbTCAxVZVdVqW5eq9P7Rte9cQ1gYDWOw8zxd5ELque4QQeg1hbTCAxQrZ0Tn3XNd11BQYwAKgkUmI7DsQyklTYAALn0Nyi4lyVBZciltkDNpFpu3QrqizZcoiLeqi7dUj2xxKFa6q/C3idIiyywgiI3ZIBi9th8BQdhmFdl3GuJepn4fy8eMf2c/IEtBEENnEu9uz1BBvlzFGRvHXwRmZUMU0icpCUUfL4E7pEhwayvOIllLbD3DIY2KMUSvsvDZYrHPuLYM+v9BQgunB8gFJekgEq5c0PwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEklEQVR42mP4//8/AzJmIF0AAHImL9Fd8LZHAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"playlist"\x3e\x3csettings\x3e\x3csetting name\x3d"activecolor" value\x3d"bfbfbf"/\x3e\x3csetting name\x3d"backgroundcolor" value\x3d"262626"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"999999"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"overcolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"titlecolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"titleactivecolor" value\x3d"ffffff"/\x3e\x3csetting name\x3d"titleovercolor" value\x3d"ffffff"/\x3e\x3csetting name\x3d"titlesize" value\x3d"13"/\x3e\x3csetting name\x3d"titleweight" value\x3d"normal"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAACCAAAAADqPASNAAAAHklEQVQImWNkoBQwMzEzMSEIRl8Kzfv3799fEIIRAKz4EE/thllAAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"item" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAQMAAAC032DuAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABFJREFUGBljYBgFo2AU0AsAAANwAAFvnYTuAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"itemActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAkklEQVR42u3QsQkAIAxFQQsHy/4LqYWohYW9IAj34ENIeTkiRvq7vlb3ynHXB/+Wk64CCBAgQIACCBAgQAEECBCgAAIECFAAAQIEKIAAAQIUQIAAAQogQIAABRAgQIACCBAgQAEECBAgQAEECBCgAAIECFAAAQIEKIAAAQIUQIAAAQogQIAABRAgQIACCBAgQJ1NmcoiAdM9H4IAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"itemImage" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAAAAACpLjUBAAAAeklEQVR42mPiJQswMXCSARiYGFjIAEBtZAEmRnJ0MZJrG321jfpt1G+DzW8jMUj2lzMwlO8n2W87PMrLPXaQ7LfOHR4eOzpJ99vLe/deku63eItDhyziSfab5fGFC49bkuy3jIUMDAszRtPkaDYd9duo34aT3/6TARgA1wJNszqw3XsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAKCAYAAACqnE5VAAAAEklEQVQ4EWNgGAWjYBSMAnQAAAQaAAFh133DAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAKCAYAAACqnE5VAAAAEklEQVQ4EWNgGAWjYBSMAnQAAAQaAAFh133DAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAYAAADAW76WAAAAEElEQVR42mNiIA78J4AJAgCXsgf7Men2/QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"sliderRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAJklEQVR42mNgIA78J4CpBu7jseQ+NS3yx2ORPwOVgT+az+6TYgkAKMIaoyp3CGoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAALElEQVR42mNgIB74A/F9IP4PxfehYlQF/kgWoGOqWnYfj0X3qWnRfwKYIAAAPu0ao3yGmCgAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAYAAADAW76WAAAAMElEQVR42mP+//8/Q0NDA16sqqr6Pycnp6G0tLShqqqqoba2tgEEGhsbG6CgkZAZAEhcK/uBtK2eAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderThumbCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAUElEQVR42q3NoREAIQwEwHSYJjOo1IBIDfEx+EgEDMfLVwyCbWDphoig1gp3R2sNmYneO+acWGuBXimlxCEKekVV+RAxvWRm/EXxi2KMcZ1sxLJpnEUZrv0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderThumbCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAUklEQVR42q3NoREAIQwFUTpMk0wUNSBSAz4mPhIBk8/JUwwiW8C+8pqI0BhDzQzujjmnrrWoZNZao947Pgg/CHtvREQexsx6gTQNqrXiAuHlcQDl9mmceNYnwwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"tooltip"\x3e\x3csettings\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"fontsize" value\x3d"12"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"activecolor" value\x3d"cccccc"/\x3e\x3csetting name\x3d"overcolor" value\x3d"ffffff"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"arrow" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAASklEQVR42p3KQQ2AMAAEwXOAi/lWSqUgpZIqASmVAN+GNECYZH8bHDhfOoLyYSxJEuwP054Z+mLqucOGMU0DW1ZQp7HmCRpa/roABHU6b1RN/woAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTopLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIElEQVR42mNgAAI1NTV/IL4PxP9hnP8wzACTQRb4j4wBSrYUAF5mO7QAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTopRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAH0lEQVR42mNQU1P7D8T3gdifAQSgAjDsjy5wH13gPwBoAhQA/dBvkQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capBottomLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHUlEQVR42mNQU1P7j4wZgMR9dAF/FAEQgAqCVQIAxzkUAKo9yiMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottomRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVR42mNQU1P7j4wZ0ATuowv4wwTugzlAAADkhRQAhODqdgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"menuTopHD" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAYCAMAAABaxIqeAAAANlBMVEUAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAzMzOAgICiTZjlAAAAEHRSTlMADx8vP09fb3+Pn6+/z9/v+t8hjgAAAKRJREFUeNrt0EsOwyAMANHBfOKCA+X+l21Eq0RKN6jtoou8nS15hODyK956U1AFLEDu8proWN9YUXDNM8W1BVn1CNakRxB0xISizEkF8HUPxsx6DhItrEzZT/dgieR4DlK6Z9KSAdlf6PqmvAWDMUuad6UoycZfpQxU+SJIalb7AlatKWsEbqrVzD4M4oJ36sAHgTA2XsJmDCLPDZfLcP8xLv/nAYfSCxb2gYC4AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"menuTopCC" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAYCAMAAAAyNwimAAAANlBMVEUAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAzMzOAgICiTZjlAAAAEHRSTlMADx8vP09fb3+Pn6+/z9/v+t8hjgAAAOJJREFUGBntwVFSBCEMQMFHyECAQMz9L+vqnmA+tCxruuHxR1TPaEDLBpqZ0TW/qBnYyX1BdlCnesbgnhIdCYV1OaiDhEACZvQtaFTyCOoso+zGLW0BIpTDEtSBrZCAGacCfZLdUWdaQYRbzPjWB22gx2xuIAEzkhd1Em/qFNvbCrf0CUhlZ2agx6wXIAEzQoC2SCQuR6HMyS0SFZbJAWZT5y0BM8aEsi8S7Djngra4p4UfL2MAl6vzloAZZR2PAQlsp8beUbmpaIVaeNFSeVNABBAtgAJSAVUej9/08cN4/H+f7VwOHN0tLaAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"menuOption" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAuElEQVR42u2SQQqGIBCF/wOU1UYUMjAiQdSTeI4O2DnmUL9PatVq3AUNPBhEPt6bmd9XL6u+77uiXHRAV9+1wvais4iEEFXor7e9xdkJiJSSjDG0LAsppWgYhgplOb2iVdi2bRRCqHLOkdb6dpo5wAPu4AyglFJVjJGstTSOI+EPF4iYD+C6rjRNExuIyJgZYgJU5b2neZ7vBWX2UrAAzAwx4QwwuLuX0no2mBlAcMY4G85hf/Wu+gNm+kvWRCvtuQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"menuOptionOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABfklEQVR42r2VTWqDUBSFG6v5KcVJsWTWaUZdRLuNbsNxt5CZ4/xsIJhAkGQJ3UBCcCA6UhBJQDDk9h04giREKQkVPpD37j3cc+/z+dD0iEirSn10s4hGHokG/iReEdIVbUVH0SMdrumlcKMYKzEUTwpT8aKwAN9N7hmMbdWKsYJnCrwpBop3MuCaxZh2KXrNpsHAPpK32+2H4zjfw+HQAXjHGoX7jDUu7FNQpxULCa7rftm2/TMajeLZbJaB8XgcYw17FLWYo58LaizfhCVVxScSl8vlYbPZSBiGEkWR7HY78TzvgD3E0L7JXO3cbpdNH8AaqoFYmqZSFIUcj0fZ7/fi+75MJpMYMYhlTre0XR1GT/GK5qNfsIjKIFY+p9NJ4jiW1Wp1QAximdODRqMgbKKyqmCSJLJYLLJrgrWW0TPYhBDI81yCIJDpdHrVcu1QMAD0DDZRGcTW63XdUJqPDSqdz+cZ+oZhNB6b+x/s+396t18Od72+/vuCvf0X8At7J48fIgP61QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"menuOptionActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABfklEQVR42r2VTWqDUBSFG6v5KcVJsWTWaUZdRLuNbsNxt5CZ4/xsIJhAkGQJ3UBCcCA6UhBJQDDk9h04giREKQkVPpD37j3cc+/z+dD0iEirSn10s4hGHokG/iReEdIVbUVH0SMdrumlcKMYKzEUTwpT8aKwAN9N7hmMbdWKsYJnCrwpBop3MuCaxZh2KXrNpsHAPpK32+2H4zjfw+HQAXjHGoX7jDUu7FNQpxULCa7rftm2/TMajeLZbJaB8XgcYw17FLWYo58LaizfhCVVxScSl8vlYbPZSBiGEkWR7HY78TzvgD3E0L7JXO3cbpdNH8AaqoFYmqZSFIUcj0fZ7/fi+75MJpMYMYhlTre0XR1GT/GK5qNfsIjKIFY+p9NJ4jiW1Wp1QAximdODRqMgbKKyqmCSJLJYLLJrgrWW0TPYhBDI81yCIJDpdHrVcu1QMAD0DDZRGcTW63XdUJqPDSqdz+cZ+oZhNB6b+x/s+396t18Od72+/vuCvf0X8At7J48fIgP61QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAAFUlEQVR42mP4//8/AzUxw6iBg89AACt1ZqjY29nMAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAAFUlEQVR42mP4//8/AzUxw6iBg89AACt1ZqjY29nMAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAYAAABmdppWAAAAPklEQVR42u3MoREAIAwDQDpI95+xVwG2AjziY3IR+ViPZOaeu7tXVc2O2y+AQCAQCAQCgUAgEAgEAoHAP8ADVGLAaqN7TdUAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAW0lEQVR42pXOsQoAIQjG8QPJIWuwlhafqfefepQvbLqhE274gwj+8AFwzczwbowBVUUpBSklfN1F4LqBIgJmXr/BWuvsvTt0aq35dwckohmBIZpzXg55PvsuutlmfbZn1WsUKQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAX0lEQVR42p2OsQrAIAxEhRAHoxB1cfGb/P/JTzkboVsttMODcOEe5wC4EymlEUKYMUYYdlv21jk+VHXUWtFa25RStlREQETjs7D3Pi9wY9Kc8xZ67+cfIZ6EtpKZceot+LS2cEn/XGYAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAYAAABmdppWAAAASElEQVR42u3MMRXAQAjA0LrnvTOBDGygAxHkDLR7hwwZ8x/gtYjgnENmUlV0NzPD7gLw9QkKCgoKCgoKCgoKCgoKCgoKCv4EvNU5k5sN8UhuAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeProgressCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAVUlEQVR42pXMwQkAIQxE0XSYshQtImXYhh3kKFiD+L3s3iTgwBz/E0BuTylRSsHMaK3Re2fOyd6bb9dOAtAD0J/BnLMGoD6DgNRa1cz8B8cYvtbSqDn4F/TaDHcq1wAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgressCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAVElEQVR42mP5//8/Ay7Q09PjLyIiMkFCQkJBUlKSQVxc/IGoqGgBMzPzRlx6WHBJdHZ2+jMxMW1AFgMapAAVCwDijSQZCHT5BAbcYALJBgKBAjlyAHZIEpxZZYn/AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAAnklEQVR42mP4//8/AxbMBMTsQMwHxMJALALFwlAxdqgaDL24DOMGYoVly5ZFVldXz6ysrFwOwiA2SAwkB1XDRMhARqjtigcPHsw/d+7c9Z9A8B8KQGyQGEgOpAaqlpGQgSAv2Vy7du38fxwAKmcDVYvXQCZoOHkjuwwdQOW8oWqZCBkICvyA/4RBAFQt/Q2kqpepHilUTzZUT9gUZz0ACDf945eBHBQAAAAASUVORK5CYII\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3c/components\x3e\x3c/skin\x3e';this.xml=
f.utils.parseXML(this.text);return this}})(jwplayer);
(function(f){var g=jwplayer.utils,b=jwplayer.events,e=b.state,c=g.css,a=g.isMobile(),d=document,r=".jwpreview",j=!0,h=!1;f.display=function(q,A){function n(c){if(aa)aa(c);else if((!a||!x.jwGetControls())&&da.sendEvent(b.JWPLAYER_DISPLAY_CLICK),x.jwGetControls()){var d=(new Date).getTime();ga&&500>d-ga?(x.jwSetFullscreen(),ga=void 0):ga=(new Date).getTime();var k=g.bounds(m.parentNode.querySelector(".jwcontrolbar")),f=g.bounds(m),d=k.left-10-f.left,j=k.left+30-f.left,l=f.bottom-40,h=f.bottom,n=k.right-
30-f.left,k=k.right+10-f.left;if(a&&!(c.x>=d&&c.x<=j&&c.y>=l&&c.y<=h)){if(c.x>=n&&c.x<=k&&c.y>=l&&c.y<=h){x.jwSetFullscreen();return}da.sendEvent(b.JWPLAYER_DISPLAY_CLICK);if(O)return}switch(x.jwGetState()){case e.PLAYING:case e.BUFFERING:x.jwPause();break;default:x.jwPlay()}}}function y(a,b){Y.showicons&&(a||b?(J.setRotation("buffer"==a?parseInt(Y.bufferrotation):0,parseInt(Y.bufferinterval)),J.setIcon(a),J.setText(b)):J.hide())}function k(a){u!=a?(u&&D(r,h),(u=a)?(a=new Image,a.addEventListener("load",
I,h),a.src=u):(c("#"+m.id+" "+r,{"background-image":void 0}),D(r,h),B=G=0)):u&&!O&&D(r,j);l(x.jwGetState())}function p(a){clearTimeout(ka);ka=setTimeout(function(){l(a.newstate)},100)}function l(a){a=Z?Z:x?x.jwGetState():e.IDLE;if(a!=Q)switch(Q=a,J&&J.setRotation(0),a){case e.IDLE:!F&&!P&&(u&&!C&&D(r,j),a=!0,x._model&&!1===x._model.config.displaytitle&&(a=!1),y("play",z&&a?z.title:""));break;case e.BUFFERING:F=h;M.error&&M.error.setText();P=h;y("buffer");break;case e.PLAYING:y();break;case e.PAUSED:y("play")}}
function I(){B=this.width;G=this.height;l(x.jwGetState());w();u&&c("#"+m.id+" "+r,{"background-image":"url("+u+")"})}function t(a){F=j;y("error",a.message)}function w(){0<m.clientWidth*m.clientHeight&&g.stretch(x.jwGetStretching(),s,m.clientWidth,m.clientHeight,B,G)}function D(a,b){g.exists(E[a])||(E[a]=!1);E[a]!=b&&(E[a]=b,c("#"+m.id+" "+a,{opacity:b?1:0,visibility:b?"visible":"hidden"}))}var x=q,m,s,v,z,u,B,G,C=h,M={},F=h,P=h,E={},O,U,J,Z,Q,Y=g.extend({showicons:j,bufferrotation:45,bufferinterval:100,
fontcolor:"#ccc",overcolor:"#fff",fontsize:15,fontweight:""},q.skin.getComponentSettings("display"),A),da=new b.eventdispatcher,aa,ga;g.extend(this,da);this.clickHandler=n;var ka;this.forceState=function(a){Z=a;l(a);this.show()};this.releaseState=function(a){Z=null;l(a);this.show()};this.hidePreview=function(a){C=a;D(r,!a);a&&(O=!0)};this.setHiding=function(){O=!0};this.element=function(){return m};this.redraw=w;this.show=function(a){if(J&&(a||(Z?Z:x?x.jwGetState():e.IDLE)!=e.PLAYING))clearTimeout(U),
U=void 0,m.style.display="block",J.show(),O=!1};this.hide=function(){J&&(J.hide(),O=!0)};this.setAlternateClickHandler=function(a){aa=a};this.revertAlternateClickHandler=function(){aa=void 0};m=d.createElement("div");m.id=x.id+"_display";m.className="jwdisplay";s=d.createElement("div");s.className="jwpreview jw"+x.jwGetStretching();m.appendChild(s);x.jwAddEventListener(b.JWPLAYER_PLAYER_STATE,p);x.jwAddEventListener(b.JWPLAYER_PLAYLIST_ITEM,function(){F=h;M.error&&M.error.setText();var a=(z=x.jwGetPlaylist()[x.jwGetPlaylistIndex()])?
z.image:"";Q=void 0;k(a)});x.jwAddEventListener(b.JWPLAYER_PLAYLIST_COMPLETE,function(){P=j;y("replay");var a=x.jwGetPlaylist()[0];k(a.image)});x.jwAddEventListener(b.JWPLAYER_MEDIA_ERROR,t);x.jwAddEventListener(b.JWPLAYER_ERROR,t);a?(v=new g.touch(m),v.addEventListener(g.touchEvents.TAP,n)):m.addEventListener("click",n,h);v={font:Y.fontweight+" "+Y.fontsize+"px/"+(parseInt(Y.fontsize)+3)+"px Arial,Helvetica,sans-serif",color:Y.fontcolor};J=new f.displayicon(m.id+"_button",x,v,{color:Y.overcolor});
m.appendChild(J.element());p({newstate:e.IDLE})};c(".jwdisplay",{position:"absolute",cursor:"pointer",width:"100%",height:"100%",overflow:"hidden"});c(".jwdisplay .jwpreview",{position:"absolute",width:"100%",height:"100%",background:"no-repeat center",overflow:"hidden",opacity:0});c(".jwdisplay, .jwdisplay *",{"-webkit-transition":"opacity .25s, background-image .25s, color .25s","-moz-transition":"opacity .25s, background-image .25s, color .25s","-o-transition":"opacity .25s, background-image .25s, color .25s"})})(jwplayer.html5);
(function(f){var g=jwplayer.utils,b=g.css,e=void 0,c=document,a="none",d="100%";f.displayicon=function(f,j,h,q){function A(a,b){return"#"+D+(b?":hover":"")+" "+(a?a:"")}function n(a,b,d,e){var g=c.createElement("div");g.className=a;b&&b.appendChild(g);y(a,"."+a,d,e);return g}function y(a,c,d,e){var f=k(a);"replayIcon"==a&&!f.src&&(f=k("playIcon"));f.src?(d=g.extend({},d),0<a.indexOf("Icon")&&(G=f.width),d["background-image"]="url("+f.src+")",d["background-size"]=f.width+"px "+f.height+"px",d.width=
f.width,b(A(c),d),e=g.extend({},e),f.overSrc&&(e["background-image"]="url("+f.overSrc+")"),g.isMobile()||b("#"+t.id+" .jwdisplay:hover "+(c?c:A()),e),b(A(),{display:"table"},!0)):b(A(),{display:"none"},!0);B=f}function k(a){var b=w.getSkinElement("display",a);a=w.getSkinElement("display",a+"Over");return b?(b.overSrc=a&&a.src?a.src:"",b):{src:"",overSrc:"",width:0,height:0}}function p(){var c=v||0==G,g="px "+d;b(A(".jwtext"),{display:z.innerHTML&&c?e:a});M=10;setTimeout(function(){l(g)},0);c&&(C=
setInterval(function(){l(g)},100))}function l(a){if(0>=M)clearInterval(C);else{M--;var c=Math.max(B.width,g.bounds(x).width-s.width-m.width);(g.isFF()||g.isIE())&&c++;g.isChrome()&&1==x.parentNode.clientWidth%2&&c++;b(A(),{"background-size":[m.width+a,c+a,s.width+a].join()},!0)}}function I(){E=(E+P)%360;g.rotate(u,E)}var t=j,w=t.skin,D=f,x,m,s,v,z,u,B,G=0,C,M;this.element=function(){return x};this.setText=function(a){var b=z.style;z.innerHTML=a?a.replace(":",":\x3cbr\x3e"):"";b.height="0";b.display=
"block";if(a)for(;2<Math.floor(z.scrollHeight/c.defaultView.getComputedStyle(z,null).lineHeight.replace("px",""));)z.innerHTML=z.innerHTML.replace(/(.*) .*$/,"$1...");b.height="";b.display="";p()};this.setIcon=function(a){var b=n("jwicon");b.id=x.id+"_"+a;y(a+"Icon","#"+b.id);x.contains(u)?x.replaceChild(b,u):x.appendChild(b);u=b};var F,P=0,E;this.setRotation=function(a,b){clearInterval(F);E=0;P=a;0==a?I():F=setInterval(I,b)};j=this.hide=function(){x.style.opacity=0};this.show=function(){x.style.opacity=
1};x=n("jwdisplayIcon");x.id=D;f=k("background");m=k("capLeft");s=k("capRight");v=0<m.width*s.width;var O={"background-image":"url("+m.src+"), url("+f.src+"), url("+s.src+")","background-position":"left,center,right","background-repeat":"no-repeat",padding:"0 "+s.width+"px 0 "+m.width+"px",height:f.height,"margin-top":f.height/-2};b(A(),O);f.overSrc&&(O["background-image"]="url("+m.overSrc+"), url("+f.overSrc+"), url("+s.overSrc+")");g.isMobile()||b("#"+t.id+" .jwdisplay:hover "+A(),O);z=n("jwtext",
x,h,q);u=n("jwicon",x);j();p()};b(".jwdisplayIcon",{display:"table",cursor:"pointer",position:"relative","margin-left":"auto","margin-right":"auto",top:"50%"},!0);b(".jwdisplayIcon div",{position:"relative",display:"table-cell","vertical-align":"middle","background-repeat":"no-repeat","background-position":"center"});b(".jwdisplayIcon div",{"vertical-align":"middle"},!0);b(".jwdisplayIcon .jwtext",{color:"#fff",padding:"0 1px","max-width":"300px","overflow-y":"hidden","text-align":"center","-webkit-user-select":a,
"-moz-user-select":a,"-ms-user-select":a,"user-select":a})})(jwplayer.html5);
(function(f){var g=jwplayer.utils,b=g.css,e=g.bounds,c=".jwdockbuttons",a=document,d="none",r="block";f.dock=function(j,h){function q(a){return!a||!a.src?{}:{background:"url("+a.src+") center","background-size":a.width+"px "+a.height+"px"}}function A(a,c){var d=k(a);b(n("."+a),g.extend(q(d),{width:d.width}));return y("div",a,c)}function n(a){return"#"+I+" "+(a?a:"")}function y(b,c,d){b=a.createElement(b);c&&(b.className=c);d&&d.appendChild(b);return b}function k(a){return(a=t.getSkinElement("dock",
a))?a:{width:0,height:0,src:""}}function p(){b(c+" .capLeft, "+c+" .capRight",{display:w?r:d})}var l=g.extend({},{iconalpha:0.75,iconalphaactive:0.5,iconalphaover:1,margin:8},h),I=j.id+"_dock",t=j.skin,w=0,D={},x={},m,s,v,z=this;z.redraw=function(){e(m)};z.element=function(){return m};z.offset=function(a){b(n(),{"margin-left":a})};z.hide=function(){z.visible&&(z.visible=!1,m.style.opacity=0,clearTimeout(v),v=setTimeout(function(){m.style.display=d},250))};z.show=function(){!z.visible&&w&&(z.visible=
!0,m.style.display=r,clearTimeout(v),v=setTimeout(function(){m.style.opacity=1},0))};z.addButton=function(a,c,d,k){if(!D[k]){var j=y("div","divider",s),l=y("button",null,s),h=y("div",null,l);h.id=I+"_"+k;h.innerHTML="\x26nbsp;";b("#"+h.id,{"background-image":a});"string"==typeof d&&(d=new Function(d));g.isMobile()?(new g.touch(l)).addEventListener(g.touchEvents.TAP,function(a){d(a)}):l.addEventListener("click",function(a){d(a);a.preventDefault()});D[k]={element:l,label:c,divider:j,icon:h};if(c){var n=
new f.overlay(h.id+"_tooltip",t,!0);a=y("div");a.id=h.id+"_label";a.innerHTML=c;b("#"+a.id,{padding:3});n.setContents(a);if(!g.isMobile()){var q;l.addEventListener("mouseover",function(){clearTimeout(q);var a=x[k],c,d;c=e(D[k].icon);a.offsetX(0);d=e(m);b("#"+a.element().id,{left:c.left-d.left+c.width/2});c=e(a.element());d.left>c.left&&a.offsetX(d.left-c.left+8);n.show();g.foreach(x,function(a,b){a!=k&&b.hide()})},!1);l.addEventListener("mouseout",function(){q=setTimeout(n.hide,100)},!1);m.appendChild(n.element());
x[k]=n}}w++;p()}};z.removeButton=function(a){if(D[a]){s.removeChild(D[a].element);s.removeChild(D[a].divider);var b=document.getElementById(""+I+"_"+a+"_tooltip");b&&m.removeChild(b);delete D[a];w--;p()}};z.numButtons=function(){return w};z.visible=!1;m=y("div","jwdock");s=y("div","jwdockbuttons");m.appendChild(s);m.id=I;var u=k("button"),B=k("buttonOver"),G=k("buttonActive");u&&(b(n(),{height:u.height,padding:l.margin}),b(c,{height:u.height}),b(n("button"),g.extend(q(u),{width:u.width,cursor:"pointer",
border:d})),b(n("button:hover"),q(B)),b(n("button:active"),q(G)),b(n("button\x3ediv"),{opacity:l.iconalpha}),b(n("button:hover\x3ediv"),{opacity:l.iconalphaover}),b(n("button:active\x3ediv"),{opacity:l.iconalphaactive}),b(n(".jwoverlay"),{top:l.margin+u.height}),A("capLeft",s),A("capRight",s),A("divider"));setTimeout(function(){e(m)})};b(".jwdock",{opacity:0,display:d});b(".jwdock \x3e *",{height:"100%","float":"left"});b(".jwdock \x3e .jwoverlay",{height:"auto","float":d,"z-index":99});b(c+" button",
{position:"relative"});b(c+" \x3e *",{height:"100%","float":"left"});b(c+" .divider",{display:d});b(c+" button ~ .divider",{display:r});b(c+" .capLeft, "+c+" .capRight",{display:d});b(c+" .capRight",{"float":"right"});b(c+" button \x3e div",{left:0,right:0,top:0,bottom:0,margin:5,position:"absolute","background-position":"center","background-repeat":"no-repeat"});g.transitionStyle(".jwdock","background .25s, opacity .25s");g.transitionStyle(".jwdock .jwoverlay","opacity .25s");g.transitionStyle(c+
" button div","opacity .25s")})(jwplayer.html5);
(function(f){var g=jwplayer,b=g.utils,e=g.events,c=e.state,a=g.playlist;f.instream=function(d,g,j,h){function q(a){a.type==e.JWPLAYER_MEDIA_ERROR&&(a=b.extend({},a),a.type=e.JWPLAYER_ERROR);l(a.type,a);O=!0;E.jwInstreamDestroy(!1)}function A(a){P.state=a.newstate;n(a)}function n(a){C&&l(a.type,a)}function y(){C&&u.play()}function k(){C&&setTimeout(function(){E.jwInstreamDestroy(!0)},10)}function p(a){a.width&&a.height&&x.resizeMedia()}function l(a,b,c){(C||c)&&M.sendEvent(a,b)}function I(){B&&B.redraw();
G&&G.redraw()}var t={controlbarseekable:"never",controlbarpausable:!0,controlbarstoppable:!0,playlistclickable:!0},w,D,x=j,m,s,v,z,u,B,G,C=!1,M,F,P,E=this,O=!1,U=!0;E.load=function(j,M){b.isAndroid(2.3)?q({type:e.JWPLAYER_ERROR,message:"Error loading instream: Cannot play instream on Android 2.3"}):(C=!0,D=b.extend(t,M),w=new a.item(j),F=document.createElement("div"),F.id=E.id+"_instream_container",m=h.detachMedia(),u=new f.video(m),u.addGlobalListener(n),u.addEventListener(e.JWPLAYER_MEDIA_META,
p),u.addEventListener(e.JWPLAYER_MEDIA_COMPLETE,k),u.addEventListener(e.JWPLAYER_MEDIA_BUFFER_FULL,y),u.addEventListener(e.JWPLAYER_MEDIA_ERROR,q),u.addEventListener(e.JWPLAYER_PLAYER_STATE,A),u.attachMedia(),u.mute(g.mute),u.volume(g.volume),P=new f.model({},u),P.setVolume(g.volume),P.setMute(g.mute),P.addEventListener(e.JWPLAYER_ERROR,q),z=g.playlist[g.item],v=g.getVideo().checkComplete()?c.IDLE:d.jwGetState(),h.checkBeforePlay()&&(v=c.PLAYING,U=!1),s=m.currentTime,P.setPlaylist([j]),O||((v==c.BUFFERING||
v==c.PLAYING)&&m.pause(),G=new f.display(E),G.setAlternateClickHandler(function(a){d.jwGetControls()?(P.state==c.PAUSED?E.jwInstreamPlay():E.jwInstreamPause(),a.hasControls=!0):a.hasControls=!1;l(e.JWPLAYER_INSTREAM_CLICK,a)}),F.appendChild(G.element()),B=new f.controlbar(E),F.appendChild(B.element()),B.show(),d.jwGetControls()?(B.show(),G.show()):(B.hide(),G.hide()),x.setupInstream(F,B,G),I(),u.load(P.playlist[0])))};E.jwInstreamDestroy=function(a){if(C){C=!1;v!=c.IDLE?u.load(z,!1):u.stop();M.resetEventListeners();
O||G.revertAlternateClickHandler();u.detachMedia();x.destroyInstream();if(B)try{B.element().parentNode.removeChild(B.getDisplayElement())}catch(b){}l(e.JWPLAYER_INSTREAM_DESTROYED,{reason:a?"complete":"destroyed"},!0);h.attachMedia();if(v==c.BUFFERING||v==c.PLAYING)m.play(),g.playlist[g.item]==z&&U&&g.getVideo().seek(s)}};E.jwInstreamAddEventListener=function(a,b){M.addEventListener(a,b)};E.jwInstreamRemoveEventListener=function(a,b){M.removeEventListener(a,b)};E.jwInstreamPlay=function(){C&&(u.play(!0),
g.state=jwplayer.events.state.PLAYING,G.show())};E.jwInstreamPause=function(){C&&(u.pause(!0),g.state=jwplayer.events.state.PAUSED,d.jwGetControls()&&G.show())};E.jwInstreamSeek=function(a){C&&u.seek(a)};E.jwInstreamSetText=function(a){B.setText(a)};E.jwPlay=function(){"true"==D.controlbarpausable.toString().toLowerCase()&&E.jwInstreamPlay()};E.jwPause=function(){"true"==D.controlbarpausable.toString().toLowerCase()&&E.jwInstreamPause()};E.jwStop=function(){"true"==D.controlbarstoppable.toString().toLowerCase()&&
(E.jwInstreamDestroy(),d.jwStop())};E.jwSeek=function(a){switch(D.controlbarseekable.toLowerCase()){case "always":E.jwInstreamSeek(a);break;case "backwards":P.position>a&&E.jwInstreamSeek(a)}};E.jwSeekDrag=function(a){P.seekDrag(a)};E.jwGetPosition=function(){};E.jwGetDuration=function(){};E.jwGetWidth=d.jwGetWidth;E.jwGetHeight=d.jwGetHeight;E.jwGetFullscreen=d.jwGetFullscreen;E.jwSetFullscreen=d.jwSetFullscreen;E.jwGetVolume=function(){return g.volume};E.jwSetVolume=function(a){P.setVolume(a);d.jwSetVolume(a)};
E.jwGetMute=function(){return g.mute};E.jwSetMute=function(a){P.setMute(a);d.jwSetMute(a)};E.jwGetState=function(){return P.state};E.jwGetPlaylist=function(){return[w]};E.jwGetPlaylistIndex=function(){return 0};E.jwGetStretching=function(){return g.config.stretching};E.jwAddEventListener=function(a,b){M.addEventListener(a,b)};E.jwRemoveEventListener=function(a,b){M.removeEventListener(a,b)};E.jwSetCurrentQuality=function(){};E.jwGetQualityLevels=function(){return[]};E.skin=d.skin;E.id=d.id+"_instream";
M=new e.eventdispatcher;d.jwAddEventListener(e.JWPLAYER_RESIZE,I);d.jwAddEventListener(e.JWPLAYER_FULLSCREEN,function(a){n(a);I();b.isIPad()&&(!a.fullscreen&&P.state==jwplayer.events.state.PAUSED)&&G.show(!0);b.isIPad()&&(!a.fullscreen&&P.state==jwplayer.events.state.PLAYING)&&G.hide()});return E}})(jwplayer.html5);
(function(f){var g=f.utils,b=g.css,e=f.events.state,c=f.html5.logo=function(a,d){function r(a){g.exists(a)&&a.stopPropagation&&a.stopPropagation();if(!y||!q.link)j.jwGetState()==e.IDLE||j.jwGetState()==e.PAUSED?j.jwPlay():j.jwPause();y&&q.link&&(j.jwPause(),j.jwSetFullscreen(!1),window.open(q.link,q.linktarget))}var j=a,h=j.id+"_logo",q,A,n=c.defaults,y=!1;this.resize=function(){};this.element=function(){return A};this.offset=function(a){b("#"+h+" ",{"margin-bottom":a})};this.position=function(){return q.position};
this.margin=function(){return parseInt(q.margin)};this.hide=function(a){if(q.hide||a)y=!1,A.style.visibility="hidden",A.style.opacity=0};this.show=function(){y=!0;A.style.visibility="visible";A.style.opacity=1};var k="o";j.edition&&(k=j.edition(),k="pro"==k?"p":"premium"==k?"r":"ads"==k?"a":"free"==k?"f":"o");if("o"==k||"f"==k)n.link="http://www.longtailvideo.com/jwpabout/?a\x3dl\x26v\x3d"+f.version+"\x26m\x3dh\x26e\x3d"+k;q=g.extend({},n,d);q.hide="true"==q.hide.toString();A=document.createElement("img");
A.className="jwlogo";A.id=h;if(q.file){var n=/(\w+)-(\w+)/.exec(q.position),k={},p=q.margin;3==n.length?(k[n[1]]=p,k[n[2]]=p):k.top=k.right=p;b("#"+h+" ",k);A.src=(q.prefix?q.prefix:"")+q.file;g.isMobile()?(new g.touch(A)).addEventListener(g.touchEvents.TAP,r):A.onclick=r}else A.style.display="none";return this};c.defaults={prefix:g.repo(),file:"logo.png",linktarget:"_top",margin:8,hide:!1,position:"top-right"};b(".jwlogo",{cursor:"pointer",position:"absolute","z-index":100,opacity:0});g.transitionStyle(".jwlogo",
"visibility .25s, opacity .25s")})(jwplayer);
(function(f){var g=f.html5,b=f.utils,e=b.css,c=void 0;g.menu=function(a,d,f,j){function h(a){return!a||!a.src?{}:{background:"url("+a.src+") no-repeat left","background-size":a.width+"px "+a.height+"px"}}function q(a,b){return function(){I(a);y&&y(b)}}function A(a,b){var c=document.createElement("div");a&&(c.className=a);b&&b.appendChild(c);return c}function n(a){return(a=f.getSkinElement("tooltip",a))?a:{width:0,height:0,src:c}}var y=j,k=new g.overlay(d+"_overlay",f);j=b.extend({fontcase:c,fontcolor:"#cccccc",
fontsize:11,fontweight:c,activecolor:"#ffffff",overcolor:"#ffffff"},f.getComponentSettings("tooltip"));var p,l=[];this.element=function(){return k.element()};this.addOption=function(a,c){var e=A("jwoption",p);e.id=d+"_option_"+c;e.innerHTML=a;b.isMobile()?(new b.touch(e)).addEventListener(b.touchEvents.TAP,q(l.length,c)):e.addEventListener("click",q(l.length,c));l.push(e)};this.clearOptions=function(){for(;0<l.length;)p.removeChild(l.pop())};var I=this.setActive=function(a){for(var b=0;b<l.length;b++){var c=
l[b];c.className=c.className.replace(" active","");b==a&&(c.className+=" active")}};this.show=k.show;this.hide=k.hide;this.offsetX=k.offsetX;p=A("jwmenu");p.id=d;var t=n("menuTop"+a);a=n("menuOption");var w=n("menuOptionOver"),D=n("menuOptionActive");if(t&&t.image){var x=new Image;x.src=t.src;x.width=t.width;x.height=t.height;p.appendChild(x)}a&&(t="#"+d+" .jwoption",e(t,b.extend(h(a),{height:a.height,color:j.fontcolor,"padding-left":a.width,font:j.fontweight+" "+j.fontsize+"px Arial,Helvetica,sans-serif",
"line-height":a.height,"text-transform":"upper"==j.fontcase?"uppercase":c})),e(t+":hover",b.extend(h(w),{color:j.overcolor})),e(t+".active",b.extend(h(D),{color:j.activecolor})));k.setContents(p)};e("."+"jwmenu jwoption".replace(/ /g," ."),{cursor:"pointer",position:"relative"})})(jwplayer);
(function(f){var g=jwplayer.utils,b=jwplayer.events;f.model=function(e,c){function a(a){var b=A[a.type]?A[a.type].split(","):[],c,e;if(0<b.length){for(c=0;c<b.length;c++){var g=b[c].split("-\x3e"),f=g[0],g=g[1]?g[1]:f;d[g]!=a[f]&&(d[g]=a[f],e=!0)}e&&d.sendEvent(a.type,a)}else d.sendEvent(a.type,a)}var d=this,r,j;j=g.getCookies();var h={controlbar:{},display:{}},q={autostart:!1,controls:!0,debug:void 0,fullscreen:!1,height:320,mobilecontrols:!1,mute:!1,playlist:[],playlistposition:"none",playlistsize:180,
playlistlayout:"extended",repeat:!1,skin:void 0,stretching:g.stretching.UNIFORM,width:480,volume:90},A={};A[b.JWPLAYER_MEDIA_MUTE]="mute";A[b.JWPLAYER_MEDIA_VOLUME]="volume";A[b.JWPLAYER_PLAYER_STATE]="newstate-\x3estate";A[b.JWPLAYER_MEDIA_BUFFER]="bufferPercent-\x3ebuffer";A[b.JWPLAYER_MEDIA_TIME]="position,duration";d.getVideo=function(){return r};d.seekDrag=function(a){r.seekDrag(a)};d.setFullscreen=function(a){a!=d.fullscreen&&(d.fullscreen=a,d.sendEvent(b.JWPLAYER_FULLSCREEN,{fullscreen:a}))};
d.setPlaylist=function(a){d.playlist=g.filterPlaylist(a);0==d.playlist.length?d.sendEvent(b.JWPLAYER_ERROR,{message:"Error loading playlist: No playable sources found"}):(d.sendEvent(b.JWPLAYER_PLAYLIST_LOADED,{playlist:jwplayer(d.id).getPlaylist()}),d.item=-1,d.setItem(0))};d.setItem=function(a){var c=!1;a==d.playlist.length||-1>a?(a=0,c=!0):a=-1==a||a>d.playlist.length?d.playlist.length-1:a;if(c||a!=d.item)d.item=a,d.sendEvent(b.JWPLAYER_PLAYLIST_ITEM,{index:d.item})};d.setVolume=function(c){d.mute&&
0<c&&d.setMute(!1);c=Math.round(c);d.mute||g.saveCookie("volume",c);a({type:b.JWPLAYER_MEDIA_VOLUME,volume:c});r.volume(c)};d.setMute=function(c){g.exists(c)||(c=!d.mute);g.saveCookie("mute",c);a({type:b.JWPLAYER_MEDIA_MUTE,mute:c});r.mute(c)};d.componentConfig=function(a){return h[a]};g.extend(d,new b.eventdispatcher);var n=d,y=g.extend({},q,j,e);g.foreach(y,function(a,b){y[a]=g.serialize(b)});n.config=y;g.extend(d,{id:e.id,state:b.state.IDLE,duration:-1,position:0,buffer:0},d.config);d.playlist=
[];d.setItem(0);c?(r=c,j=r.getTag()):(j=document.createElement("video"),r=new f.video(j));r.volume(d.volume);r.mute(d.mute);r.addGlobalListener(a)}})(jwplayer.html5);
(function(f){var g=f.utils,b=g.css,e=g.transitionStyle,c="top",a="bottom",d="right",r="left",j=void 0,h=document,q={fontcase:j,fontcolor:"#ffffff",fontsize:12,fontweight:j,activecolor:"#ffffff",overcolor:"#ffffff"};f.html5.overlay=function(e,f,y){function k(a){return"#"+x+(a?" ."+a:"")}function p(a,b){var c=h.createElement("div");a&&(c.className=a);b&&b.appendChild(c);return c}function l(a,c){var d;d=(d=D.getSkinElement("tooltip",a))?d:{width:0,height:0,src:"",image:j,ready:!1};var e=p(c,m);b(k(c.replace(" ",
".")),I(d));return[e,d]}function I(a){return{background:"url("+a.src+") center","background-size":a.width+"px "+a.height+"px"}}function t(e,f){f||(f="");var h=l("cap"+e+f,"jwborder jw"+e+(f?f:"")),m=h[0],h=h[1],n=g.extend(I(h),{width:e==r||f==r||e==d||f==d?h.width:j,height:e==c||f==c||e==a||f==a?h.height:j});n[e]=e==a&&!B||e==c&&B?u:0;f&&(n[f]=0);b(k(m.className.replace(/ /g,".")),n);m={};n={};h={left:h.width,right:h.width,top:(B?u:0)+h.height,bottom:(B?0:u)+h.height};f&&(m[f]=h[f],m[e]=0,n[e]=h[e],
n[f]=0,b(k("jw"+e),m),b(k("jw"+f),n),G[e]=h[e],G[f]=h[f])}function w(){0!=m.clientWidth&&(b(k(),{"margin-left":Math.round(v-m.clientWidth/2)}),b(k("jwarrow"),{"margin-left":Math.round(z.width/-2-v)}))}var D=f,x=e,m,s,v=0,z,u,B=y;e=g.extend({},q,D.getComponentSettings("tooltip"));var G={},C=this;C.element=function(){return m};var M;C.setContents=function(a){g.empty(s);s.appendChild(a);clearTimeout(M);M=setTimeout(w,0)};C.offsetX=function(a){v=a;clearTimeout(M);w()};C.borderWidth=function(){return G.left};
C.show=function(){C.showing=!0;m.style.opacity=1;m.style.visibility="visible"};C.hide=function(){C.showing=!1;m.style.opacity=0;m.style.visibility="hidden"};m=p(".jwoverlay".replace(".",""));m.id=x;z=l("arrow","jwarrow")[1];u=z.height;b(k("jwarrow"),{position:"absolute",bottom:B?j:0,top:B?0:j,width:z.width,height:u,left:"50%"});t(c,r);t(a,r);t(c,d);t(a,d);t(r);t(d);t(c);t(a);l("background","jwback");b(k("jwback"),{left:G.left,right:G.right,top:G.top,bottom:G.bottom});s=p("jwcontents",m);b(k("jwcontents")+
" *",{color:e.fontcolor,font:e.fontweight+" "+e.fontsize+"px Arial,Helvetica,sans-serif","text-transform":"upper"==e.fontcase?"uppercase":j});B&&g.transform(k("jwarrow"),"rotate(180deg)");b(k(),{padding:G.top+1+"px "+G.right+"px "+(G.bottom+1)+"px "+G.left+"px"});C.showing=!1};b(".jwoverlay",{position:"absolute",visibility:"hidden",opacity:0});b(".jwoverlay .jwcontents",{position:"relative","z-index":1});b(".jwoverlay .jwborder",{position:"absolute","background-size":"100% 100%"},!0);b(".jwoverlay .jwback",
{position:"absolute","background-size":"100% 100%"});e(".jwoverlay","opacity .25s, visibility .25s, left .01s linear")})(jwplayer);
(function(f){var g=jwplayer.utils;f.player=function(b){function e(a){var b={description:a.description,file:a.file,image:a.image,mediaid:a.mediaid,title:a.title};g.foreach(a,function(a,c){b[a]=c});b.sources=[];b.tracks=[];0<a.sources.length&&g.foreach(a.sources,function(a,c){b.sources.push({file:c.file,type:c.type?c.type:void 0,label:c.label,"default":c["default"]?!0:!1})});0<a.tracks.length&&g.foreach(a.tracks,function(a,c){b.tracks.push({file:c.file,kind:c.kind?c.kind:void 0,label:c.label,"default":c["default"]?
!0:!1})});!a.file&&0<a.sources.length&&(b.file=a.sources[0].file);return b}function c(a){return function(){return d[a]}}var a=this,d,r,j,h;d=new f.model(b);a.id=d.id;r=new f.view(a,d);j=new f.controller(d,r);a._model=d;jwplayer.utils.css.block();a.jwPlay=j.play;a.jwPause=j.pause;a.jwStop=j.stop;a.jwSeek=j.seek;a.jwSetVolume=j.setVolume;a.jwSetMute=j.setMute;a.jwLoad=j.load;a.jwPlaylistNext=j.next;a.jwPlaylistPrev=j.prev;a.jwPlaylistItem=j.item;a.jwSetFullscreen=j.setFullscreen;a.jwResize=r.resize;
a.jwSeekDrag=d.seekDrag;a.jwGetQualityLevels=j.getQualityLevels;a.jwGetCurrentQuality=j.getCurrentQuality;a.jwSetCurrentQuality=j.setCurrentQuality;a.jwGetCaptionsList=j.getCaptionsList;a.jwGetCurrentCaptions=j.getCurrentCaptions;a.jwSetCurrentCaptions=j.setCurrentCaptions;a.jwSetControls=r.setControls;a.jwGetSafeRegion=r.getSafeRegion;a.jwForceState=r.forceState;a.jwReleaseState=r.releaseState;a.jwGetPlaylistIndex=c("item");a.jwGetPosition=c("position");a.jwGetDuration=c("duration");a.jwGetBuffer=
c("buffer");a.jwGetWidth=c("width");a.jwGetHeight=c("height");a.jwGetFullscreen=c("fullscreen");a.jwGetVolume=c("volume");a.jwGetMute=c("mute");a.jwGetState=c("state");a.jwGetStretching=c("stretching");a.jwGetPlaylist=function(){for(var a=d.playlist,c=[],b=0;b<a.length;b++)c.push(e(a[b]));return c};a.jwGetControls=c("controls");a.jwDetachMedia=j.detachMedia;a.jwAttachMedia=j.attachMedia;a.jwPlayAd=function(c){var b=jwplayer(a.id).plugins;b.vast&&b.vast.jwPlayAd(c)};a.jwLoadInstream=function(c,b){h||
(h=new f.instream(a,d,r,j));h.load(c,b)};a.jwInstreamPlay=function(){h&&h.jwInstreamPlay()};a.jwInstreamPause=function(){h&&h.jwInstreamPause()};a.jwInstreamDestroy=function(){h&&h.jwInstreamDestroy();h=void 0};a.jwInstreamAddEventListener=function(a,c){h&&h.jwInstreamAddEventListener(a,c)};a.jwInstreamRemoveEventListener=function(a,c){h&&h.jwInstreamRemoveEventListener(a,c)};a.jwPlayerDestroy=function(){r&&r.destroy()};a.jwInstreamSetText=function(a){h&&h.jwInstreamSetText(a)};a.jwIsBeforePlay=function(){return j.checkBeforePlay()};
a.jwIsBeforeComplete=function(){return d.getVideo().checkComplete()};a.jwAddEventListener=j.addEventListener;a.jwRemoveEventListener=j.removeEventListener;a.jwDockAddButton=r.addButton;a.jwDockRemoveButton=r.removeButton;b=new f.setup(d,r,j);b.addEventListener(jwplayer.events.JWPLAYER_READY,function(a){j.playerReady(a);g.css.unblock()});b.addEventListener(jwplayer.events.JWPLAYER_ERROR,function(a){g.log("There was a problem setting up the player: ",a);g.css.unblock()});b.start()}})(jwplayer.html5);
(function(f){var g={size:180,backgroundcolor:"#333333",fontcolor:"#999999",overcolor:"#CCCCCC",activecolor:"#CCCCCC",titlecolor:"#CCCCCC",titleovercolor:"#FFFFFF",titleactivecolor:"#FFFFFF",fontweight:"normal",titleweight:"normal",fontsize:11,titlesize:13},b=jwplayer.events,e=jwplayer.utils,c=e.css,a=e.isMobile(),d=document;f.playlistcomponent=function(r,j){function h(a){return"#"+p.id+(a?" ."+a:"")}function q(a,c){var b=d.createElement(a);c&&(b.className=c);return b}function A(a){return function(){D=
a;n.jwPlaylistItem(a);n.jwPlay(!0)}}var n=r,y=n.skin,k=e.extend({},g,n.skin.getComponentSettings("playlist"),j),p,l,I,t,w=-1,D,x,m=-1,s=76,v={background:void 0,divider:void 0,item:void 0,itemOver:void 0,itemImage:void 0,itemActive:void 0},z,u=this;u.element=function(){return p};u.redraw=function(){x&&x.redraw()};u.show=function(){e.show(p)};u.hide=function(){e.hide(p)};p=q("div","jwplaylist");p.id=n.id+"_jwplayer_playlistcomponent";z="basic"==n._model.playlistlayout;l=q("div","jwlistcontainer");p.appendChild(l);
e.foreach(v,function(a){v[a]=y.getSkinElement("playlist",a)});z&&(s=32);v.divider&&(s+=v.divider.height);var B=0,G=0,C=0;e.clearCss(h());c(h(),{"background-color":k.backgroundcolor});c(h("jwlist"),{"background-image":v.background?" url("+v.background.src+")":""});c(h("jwlist *"),{color:k.fontcolor,font:k.fontweight+" "+k.fontsize+"px Arial, Helvetica, sans-serif"});v.itemImage?(B=(s-v.itemImage.height)/2+"px ",G=v.itemImage.width,C=v.itemImage.height):(G=4*s/3,C=s);v.divider&&c(h("jwplaylistdivider"),
{"background-image":"url("+v.divider.src+")","background-size":"100% "+v.divider.height+"px",width:"100%",height:v.divider.height});c(h("jwplaylistimg"),{height:C,width:G,margin:B?B+"0 "+B+B:"0 5px 0 0"});c(h("jwlist li"),{"background-image":v.item?"url("+v.item.src+")":"",height:s,overflow:"hidden","background-size":"100% "+s+"px",cursor:"pointer"});B={overflow:"hidden"};""!==k.activecolor&&(B.color=k.activecolor);v.itemActive&&(B["background-image"]="url("+v.itemActive.src+")");c(h("jwlist li.active"),
B);c(h("jwlist li.active .jwtitle"),{color:k.titleactivecolor});c(h("jwlist li.active .jwdescription"),{color:k.activecolor});B={overflow:"hidden"};""!==k.overcolor&&(B.color=k.overcolor);v.itemOver&&(B["background-image"]="url("+v.itemOver.src+")");a||(c(h("jwlist li:hover"),B),c(h("jwlist li:hover .jwtitle"),{color:k.titleovercolor}),c(h("jwlist li:hover .jwdescription"),{color:k.overcolor}));c(h("jwtextwrapper"),{height:s,position:"relative"});c(h("jwtitle"),{overflow:"hidden",display:"inline-block",
height:z?s:20,color:k.titlecolor,"font-size":k.titlesize,"font-weight":k.titleweight,"margin-top":z?"0 10px":10,"margin-left":10,"margin-right":10,"line-height":z?s:20});c(h("jwdescription"),{display:"block","font-size":k.fontsize,"line-height":18,"margin-left":10,"margin-right":10,overflow:"hidden",height:36,position:"relative"});n.jwAddEventListener(b.JWPLAYER_PLAYLIST_LOADED,function(){l.innerHTML="";for(var b=n.jwGetPlaylist(),d=[],g=0;g<b.length;g++)b[g]["ova.hidden"]||d.push(b[g]);if(I=d){b=
q("ul","jwlist");b.id=p.id+"_ul"+Math.round(1E7*Math.random());t=b;for(b=0;b<I.length;b++){var h=b,d=I[h],g=q("li","jwitem"),j=void 0;g.id=t.id+"_item_"+h;0<h?(j=q("div","jwplaylistdivider"),g.appendChild(j)):(h=v.divider?v.divider.height:0,g.style.height=s-h+"px",g.style["background-size"]="100% "+(s-h)+"px");h=q("div","jwplaylistimg jwfill");j=void 0;d["playlist.image"]&&v.itemImage?j=d["playlist.image"]:d.image&&v.itemImage?j=d.image:v.itemImage&&(j=v.itemImage.src);j&&!z&&(c("#"+g.id+" .jwplaylistimg",
{"background-image":j}),g.appendChild(h));h=q("div","jwtextwrapper");j=q("span","jwtitle");j.innerHTML=d&&d.title?d.title:"";h.appendChild(j);d.description&&!z&&(j=q("span","jwdescription"),j.innerHTML=d.description,h.appendChild(j));g.appendChild(h);d=g;a?(new e.touch(d)).addEventListener(e.touchEvents.TAP,A(b)):d.onclick=A(b);t.appendChild(d)}w=n.jwGetPlaylistIndex();l.appendChild(t);x=new f.playlistslider(p.id+"_slider",n.skin,p,t)}});n.jwAddEventListener(b.JWPLAYER_PLAYLIST_ITEM,function(a){0<=
w&&(d.getElementById(t.id+"_item_"+w).className="jwitem",w=a.index);d.getElementById(t.id+"_item_"+a.index).className="jwitem active";a=n.jwGetPlaylistIndex();a!=D&&(D=-1,x&&x.visible()&&x.thumbPosition(a/(n.jwGetPlaylist().length-1)))});var M=setInterval(function(){var a=d.getElementById(p.id),b=e.bounds(a).height;a!=p?clearInterval(M):b!=m&&(m=b,u.redraw())},200);return this};c(".jwplaylist",{position:"absolute",width:"100%",height:"100%"});e.dragStyle(".jwplaylist","none");c(".jwplaylist .jwplaylistimg",
{position:"relative",width:"100%","float":"left",margin:"0 5px 0 0",background:"#000",overflow:"hidden"});c(".jwplaylist .jwlist",{position:"absolute",width:"100%","list-style":"none",margin:0,padding:0,overflow:"hidden"});c(".jwplaylist .jwlistcontainer",{position:"absolute",overflow:"hidden",width:"100%",height:"100%"});c(".jwplaylist .jwlist li",{width:"100%"});c(".jwplaylist .jwtextwrapper",{overflow:"hidden"});c(".jwplaylist .jwplaylistdivider",{position:"absolute"});a&&e.transitionStyle(".jwplaylist .jwlist",
"top .35s")})(jwplayer.html5);
(function(f){function g(){var a=[],b;for(b=0;b<arguments.length;b++)a.push(".jwplaylist ."+arguments[b]);return a.join(",")}var b=jwplayer.utils,e=b.touchEvents,c=b.css,a=document,d=window,r=void 0;f.playlistslider=function(g,f,q,A){function n(a){return"#"+s.id+(a?" ."+a:"")}function y(b,d,e,g){var f=a.createElement("div");b&&(f.className=b,d&&c(n(b),{"background-image":d.src?d.src:r,"background-repeat":g?"repeat-y":"no-repeat",height:g?r:d.height}));e&&e.appendChild(f);return f}function k(a){return(a=
x.getSkinElement("playlist",a))?a:{width:0,height:0,src:r}}function p(a){if(M)return a=a?a:d.event,aa(B-(a.detail?-1*a.detail:a.wheelDelta/40)/10),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.cancel=!0,a.returnValue=!1}function l(b){0==b.button&&(u=!0);a.onselectstart=function(){return!1};d.addEventListener("mousemove",t,!1);d.addEventListener("mouseup",D,!1)}function I(a){aa(B-2*a.deltaY/m.clientHeight)}function t(a){if(u||"click"==a.type){var c=
b.bounds(v),d=z.clientHeight/2;aa((a.pageY-c.top-d)/(c.height-d-d))}}function w(a){return function(b){0<b.button||(aa(B+0.05*a),G=setTimeout(function(){C=setInterval(function(){aa(B+0.05*a)},50)},500))}}function D(){u=!1;d.removeEventListener("mousemove",t);d.removeEventListener("mouseup",D);a.onselectstart=r;clearTimeout(G);clearInterval(C)}var x=f,m=A,s,v,z,u,B=0,G,C;f=b.isMobile();var M=!0,F,P,E,O,U,J,Z,Q,Y;this.element=function(){return s};this.visible=function(){return M};var da=this.redraw=
function(){clearTimeout(Y);Y=setTimeout(function(){if(m&&m.clientHeight){var a=m.parentNode.clientHeight/m.clientHeight;0>a&&(a=0);1<a?M=!1:(M=!0,c(n("jwthumb"),{height:Math.max(v.clientHeight*a,U.height+J.height)}));c(n(),{visibility:M?"visible":"hidden"});m&&(m.style.width=M?m.parentElement.clientWidth-E.width+"px":"")}else Y=setTimeout(da,10)},0)},aa=this.thumbPosition=function(a){isNaN(a)&&(a=0);B=Math.max(0,Math.min(1,a));c(n("jwthumb"),{top:Z+(v.clientHeight-z.clientHeight)*B});A&&(A.style.top=
Math.min(0,s.clientHeight-A.scrollHeight)*B+"px")};s=y("jwslider",null,q);s.id=g;g=new b.touch(m);f?g.addEventListener(e.DRAG,I):(s.addEventListener("mousedown",l,!1),s.addEventListener("click",t,!1));F=k("sliderCapTop");P=k("sliderCapBottom");E=k("sliderRail");g=k("sliderRailCapTop");q=k("sliderRailCapBottom");O=k("sliderThumb");U=k("sliderThumbCapTop");J=k("sliderThumbCapBottom");Z=F.height;Q=P.height;c(n(),{width:E.width});c(n("jwrail"),{top:Z,bottom:Q});c(n("jwthumb"),{top:Z});F=y("jwslidertop",
F,s);P=y("jwsliderbottom",P,s);v=y("jwrail",null,s);z=y("jwthumb",null,s);f||(F.addEventListener("mousedown",w(-1),!1),P.addEventListener("mousedown",w(1),!1));y("jwrailtop",g,v);y("jwrailback",E,v,!0);y("jwrailbottom",q,v);c(n("jwrailback"),{top:g.height,bottom:q.height});y("jwthumbtop",U,z);y("jwthumbback",O,z,!0);y("jwthumbbottom",J,z);c(n("jwthumbback"),{top:U.height,bottom:J.height});da();m&&!f&&(m.addEventListener("mousewheel",p,!1),m.addEventListener("DOMMouseScroll",p,!1));return this};c(g("jwslider"),
{position:"absolute",height:"100%",visibility:"hidden",right:0,top:0,cursor:"pointer","z-index":1,overflow:"hidden"});c(g("jwslider")+" *",{position:"absolute",width:"100%","background-position":"center","background-size":"100% 100%",overflow:"hidden"});c(g("jwslidertop","jwrailtop","jwthumbtop"),{top:0});c(g("jwsliderbottom","jwrailbottom","jwthumbbottom"),{bottom:0})})(jwplayer.html5);
(function(f){var g=jwplayer.utils,b=g.css,e=document,c="none";f.rightclick=function(a,b){function r(a){var b=e.createElement("div");b.className=a.replace(".","");return b}function j(){A||(n.style.display=c)}var h,q=g.extend({aboutlink:"http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d"+f.version+"\x26m\x3dh\x26e\x3do",abouttext:"About JW Player "+f.version+"..."},b),A=!1,n,y;this.element=function(){return n};this.destroy=function(){e.removeEventListener("mousedown",j,!1)};h=e.getElementById(a.id);
n=r(".jwclick");n.id=a.id+"_menu";n.style.display=c;h.oncontextmenu=function(a){if(!A){null==a&&(a=window.event);var b=null!=a.target?a.target:a.srcElement,d=g.bounds(h),b=g.bounds(b);n.style.display=c;n.style.left=(a.offsetX?a.offsetX:a.layerX)+b.left-d.left+"px";n.style.top=(a.offsetY?a.offsetY:a.layerY)+b.top-d.top+"px";n.style.display="block";a.preventDefault()}};n.onmouseover=function(){A=!0};n.onmouseout=function(){A=!1};e.addEventListener("mousedown",j,!1);y=r(".jwclick_item");y.innerHTML=
q.abouttext;y.onclick=function(){window.location.href=q.aboutlink};n.appendChild(y);h.appendChild(n)};b(".jwclick",{"background-color":"#FFF","-webkit-border-radius":5,"-moz-border-radius":5,"border-radius":5,height:"auto",border:"1px solid #bcbcbc","font-family":'"MS Sans Serif", "Geneva", sans-serif',"font-size":10,width:320,"-webkit-box-shadow":"5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset","-moz-box-shadow":"5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
"box-shadow":"5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",position:"absolute","z-index":999},!0);b(".jwclick div",{padding:"8px 21px",margin:"0px","background-color":"#FFF",border:"none","font-family":'"MS Sans Serif", "Geneva", sans-serif',"font-size":10,color:"inherit"},!0);b(".jwclick_item",{padding:"8px 21px","text-align":"left",cursor:"pointer"},!0);b(".jwclick_item:hover",{"background-color":"#595959",color:"#FFF"},!0);b(".jwclick_item a",{"text-decoration":c,color:"#000"},
!0);b(".jwclick hr",{width:"100%",padding:0,margin:0,border:"1px #e9e9e9 solid"},!0)})(jwplayer.html5);
(function(f){var g=jwplayer,b=g.utils,e=g.events,c=g.playlist,a=2,d=4;f.setup=function(g,j){function h(a,b,c){D.push({name:a,method:b,depends:c})}function q(){for(var a=0;a<D.length;a++){var b=D[a],c;a:{if(c=b.depends){c=c.toString().split(",");for(var d=0;d<c.length;d++)if(!l[c[d]]){c=!1;break a}}c=!0}if(c){D.splice(a,1);try{b.method(),q()}catch(e){k(e.message)}return}}0<D.length&&!w&&setTimeout(q,500)}function A(){l[a]=!0}function n(a){k("Error loading skin: "+a)}function y(){l[d]=!0}function k(a){w=
!0;t.sendEvent(e.JWPLAYER_ERROR,{message:a});p.setupError(a)}var p=j,l={},I,t=new e.eventdispatcher,w=!1,D=[];b.extend(this,t);this.start=q;h(1,function(){g.edition&&"invalid"==g.edition()?k("Error setting up player: Invalid license key"):l[1]=!0});h(a,function(){I=new f.skin;I.load(g.config.skin,A,n)},1);h(3,function(){switch(b.typeOf(g.config.playlist)){case "string":k("Can't load a playlist as a string anymore");case "array":var a=new c(g.config.playlist);g.setPlaylist(a);0==g.playlist[0].sources.length?
k("Error loading playlist: No playable sources found"):l[3]=!0}},1);h(d,function(){var a=g.playlist[g.item].image;if(a){var b=new Image;b.addEventListener("load",y,!1);b.addEventListener("error",y,!1);b.src=a;setTimeout(y,500)}else l[d]=!0},3);h(5,function(){p.setup(I);l[5]=!0},d+","+a);h(6,function(){l[6]=!0},"5,3");h(7,function(){t.sendEvent(e.JWPLAYER_READY);l[7]=!0},6)}})(jwplayer.html5);
(function(f){f.skin=function(){var g={},b=!1;this.load=function(e,c,a){new f.skinloader(e,function(a){b=!0;g=a;"function"==typeof c&&c()},function(b){"function"==typeof a&&a(b)})};this.getSkinElement=function(e,c){e=e.toLowerCase();c=c.toLowerCase();if(b)try{return g[e].elements[c]}catch(a){jwplayer.utils.log("No such skin component / element: ",[e,c])}return null};this.getComponentSettings=function(e){e=e.toLowerCase();return b&&g&&g[e]?g[e].settings:null};this.getComponentLayout=function(e){e=e.toLowerCase();
if(b){var c=g[e].layout;if(c&&(c.left||c.right||c.center))return g[e].layout}return null}}})(jwplayer.html5);
(function(f){var g=jwplayer.utils,b=g.foreach,e="Skin formatting error";f.skinloader=function(c,a,d){function r(a){y=a;g.ajax(g.getAbsolutePath(t),function(a){try{g.exists(a.responseXML)&&h(a.responseXML)}catch(b){p(e)}},function(a){p(a)})}function j(a,b){return a?a.getElementsByTagName(b):null}function h(a){var b=j(a,"skin")[0];a=j(b,"component");var c=b.getAttribute("target"),b=parseFloat(b.getAttribute("pixelratio"));0<b&&(x=b);(!c||parseFloat(c)>parseFloat(jwplayer.version))&&p("Incompatible player version");
if(0===a.length)k(y);else for(c=0;c<a.length;c++){var d=n(a[c].getAttribute("name")),b={settings:{},elements:{},layout:{}},e=j(j(a[c],"elements")[0],"element");y[d]=b;for(var f=0;f<e.length;f++)A(e[f],d);if((d=j(a[c],"settings")[0])&&0<d.childNodes.length){d=j(d,"setting");for(e=0;e<d.length;e++){var f=d[e].getAttribute("name"),h=d[e].getAttribute("value");/color$/.test(f)&&(h=g.stringToColor(h));b.settings[n(f)]=h}}if((d=j(a[c],"layout")[0])&&0<d.childNodes.length){d=j(d,"group");for(e=0;e<d.length;e++){h=
d[e];f={elements:[]};b.layout[n(h.getAttribute("position"))]=f;for(var r=0;r<h.attributes.length;r++){var t=h.attributes[r];f[t.name]=t.value}h=j(h,"*");for(r=0;r<h.length;r++){t=h[r];f.elements.push({type:t.tagName});for(var w=0;w<t.attributes.length;w++){var D=t.attributes[w];f.elements[r][n(D.name)]=D.value}g.exists(f.elements[r].name)||(f.elements[r].name=t.tagName)}}}l=!1;q()}}function q(){clearInterval(I);w||(I=setInterval(function(){var a=!0;b(y,function(c,d){"properties"!=c&&b(d.elements,
function(b){(y[n(c)]?y[n(c)].elements[n(b)]:null).ready||(a=!1)})});a&&!1==l&&(clearInterval(I),k(y))},100))}function A(a,b){b=n(b);var c=new Image,d=n(a.getAttribute("name")),e=a.getAttribute("src");if(0!==e.indexOf("data:image/png;base64,"))var f=g.getAbsolutePath(t),e=[f.substr(0,f.lastIndexOf("/")),b,e].join("/");y[b].elements[d]={height:0,width:0,src:"",ready:!1,image:c};c.onload=function(){var a=b,e=y[n(a)]?y[n(a)].elements[n(d)]:null;e?(e.height=Math.round(c.height/x*D),e.width=Math.round(c.width/
x*D),e.src=c.src,e.ready=!0,q()):g.log("Loaded an image for a missing element: "+a+"."+d)};c.onerror=function(){w=!0;q();p("Skin image not found: "+this.src)};c.src=e}function n(a){return a?a.toLowerCase():""}var y={},k=a,p=d,l=!0,I,t=c,w=!1,D=(jwplayer.utils.isMobile(),1),x=1;"string"!=typeof t||""===t?h(f.defaultskin().xml):"xml"!=g.extension(t)?p("Skin not a valid file type"):new f.skinloader("",r,p)}})(jwplayer.html5);
(function(f){var g=jwplayer.utils,b=jwplayer.events,e=g.css;f.thumbs=function(c){function a(a){if("array"==!g.typeOf(a))return d("Invalid data");h=a;e("#"+A,{display:"block"})}function d(a){g.log("Thumbnails could not be loaded: "+a)}function f(a){a=a.target;e("#"+A,{"background-image":a.src,"background-position":"0 0",width:a.width,height:a.height})}var j,h,q,A=c;c=new b.eventdispatcher;g.extend(this,c);this.load=function(b){e("#"+A,{display:"none"});b&&(q=b.split("?")[0].split("/").slice(0,-1).join("/"),
(new jwplayer.parsers.srt(a,d,!0)).load(b))};this.element=function(){return j};this.updateTimeline=function(a){var b=0;if(h){for(;b<h.length&&a>h[b].end;)b++;b==h.length&&b--;if(h[b].text)if(a=h[b].text,0>a.indexOf("://")&&(a=q?q+"/"+a:a),0<a.indexOf("#xywh"))try{var c=/(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(a),g=c[1];e("#"+A,{"background-image":g,"background-position":-1*c[2]+"px "+-1*c[3]+"px",width:c[4],height:c[5]})}catch(j){d("Could not parse thumbnail")}else g=new Image,g.addEventListener("load",
f,!1),g.src=a}};j=document.createElement("div");j.id=A}})(jwplayer.html5);
(function(f){var g=f.utils,b=f.events,e=b.state,c=!0,a=!1;f.html5.video=function(d){function f(a,b){O&&E.sendEvent(a,b)}function j(){}function h(){O&&(C==e.PLAYING&&!G)&&(v=Number(m.currentTime.toFixed(1)),f(b.JWPLAYER_MEDIA_TIME,{position:v,duration:s}))}function q(d){O&&(z||(z=c,A()),"loadedmetadata"==d.type&&(m.muted&&(m.muted=a,m.muted=c),f(b.JWPLAYER_MEDIA_META,{duration:m.duration,height:m.videoHeight,width:m.videoWidth})))}function A(){u||(u=c,f(b.JWPLAYER_MEDIA_BUFFER_FULL))}function n(a){O&&
!G&&(m.paused?m.currentTime==m.duration&&3<m.duration||da():(!g.isFF()||!("play"==a.type&&C==e.BUFFERING))&&l(e.PLAYING))}function y(){O&&(G||l(e.BUFFERING))}function k(a){var b;if("array"==g.typeOf(a)&&0<a.length){b=[];for(var c=0;c<a.length;c++){var d=a[c],e={};e.label=d.label&&d.label?d.label?d.label:0:c;b[c]=e}}return b}function p(){u=z=a;x=U[J];l(e.BUFFERING);m.src=x.file;m.load();F=setInterval(I,100);g.isMobile()&&A()}function l(a){if(!(a==e.PAUSED&&C==e.IDLE)&&!G&&C!=a){var c=C;C=a;f(b.JWPLAYER_PLAYER_STATE,
{oldstate:c,newstate:a})}}function I(){if(O){var a;a=0==m.buffered.length||0==m.duration?0:m.buffered.end(m.buffered.length-1)/m.duration;a!=P&&(P=a,f(b.JWPLAYER_MEDIA_BUFFER,{bufferPercent:Math.round(100*P)}));1<=a&&clearInterval(F)}}var t=g.isIE(),w={abort:j,canplay:q,canplaythrough:j,durationchange:function(){if(O){var a=Number(m.duration.toFixed(1));s!=a&&(s=a);Z&&(0<B&&a>B)&&aa(B);h()}},emptied:j,ended:function(){O&&C!=e.IDLE&&(J=-1,Y=c,f(b.JWPLAYER_MEDIA_BEFORECOMPLETE),O&&(l(e.IDLE),Y=a,f(b.JWPLAYER_MEDIA_COMPLETE)))},
error:function(){O&&(g.log("Error playing media: %o",m.error),E.sendEvent(b.JWPLAYER_MEDIA_ERROR,{message:"Error loading media: File could not be played"}),l(e.IDLE))},loadeddata:j,loadedmetadata:q,loadstart:j,pause:n,play:n,playing:n,progress:function(){z&&(0<B&&!Z)&&(t?setTimeout(function(){aa(B)},200):aa(B))},ratechange:j,readystatechange:j,seeked:function(){!G&&C!=e.PAUSED&&l(e.PLAYING)},seeking:t?y:j,stalled:j,suspend:j,timeupdate:h,volumechange:function(){f(b.JWPLAYER_MEDIA_VOLUME,{volume:Math.round(100*
m.volume)});f(b.JWPLAYER_MEDIA_MUTE,{mute:m.muted})},waiting:y},D,x,m,s,v,z,u,B,G=a,C=e.IDLE,M,F=-1,P=-1,E=new b.eventdispatcher,O=a,U,J=-1,Z=g.isAndroid(),Q=this,Y=a;g.extend(Q,E);Q.load=function(a){if(O){D=a;B=0;s=a.duration?a.duration:-1;v=0;U=D.sources;0>J&&(J=0);for(a=0;a<U.length;a++)if(U[a]["default"]){J=a;break}var c=g.getCookies().qualityLabel;if(c)for(a=0;a<U.length;a++)if(U[a].label==c){J=a;break}(a=k(U))&&E.sendEvent(b.JWPLAYER_MEDIA_LEVELS,{levels:a,currentQuality:J});p()}};Q.stop=function(){O&&
(m.removeAttribute("src"),t||m.load(),J=-1,clearInterval(F),l(e.IDLE))};Q.play=function(){O&&!G&&m.play()};var da=Q.pause=function(){O&&(m.pause(),l(e.PAUSED))};Q.seekDrag=function(a){O&&((G=a)?m.pause():m.play())};var aa=Q.seek=function(a){O&&(!G&&0==B&&f(b.JWPLAYER_MEDIA_SEEK,{position:v,offset:a}),z?(B=0,m.currentTime=a):B=a)},ga=Q.volume=function(a){g.exists(a)&&(m.volume=Math.min(Math.max(0,a/100),1),M=100*m.volume)};Q.mute=function(b){g.exists(b)||(b=!m.muted);b?(M=100*m.volume,m.muted=c):(ga(M),
m.muted=a)};this.checkComplete=function(){return Y};Q.detachMedia=function(){O=a;return m};Q.attachMedia=function(d){O=c;d||(z=a);Y&&(l(e.IDLE),f(b.JWPLAYER_MEDIA_COMPLETE),Y=a)};Q.getTag=function(){return m};Q.audioMode=function(){if(!U)return a;var b=U[0].type;return"aac"==b||"mp3"==b||"vorbis"==b};Q.setCurrentQuality=function(a){J!=a&&(a=parseInt(a),0<=a&&(U&&U.length>a)&&(J=a,g.saveCookie("qualityLabel",U[a].label),f(b.JWPLAYER_MEDIA_LEVEL_CHANGED,{currentQuality:a,levels:k(U)}),a=m.currentTime,
p(),Q.seek(a)))};Q.getCurrentQuality=function(){return J};Q.getQualityLevels=function(){return k(U)};m=d;g.foreach(w,function(b,c){m.addEventListener(b,c,a)});m.controls=c;m.controls=a;m.setAttribute("x-webkit-airplay","allow");O=c}})(jwplayer);
(function(f){var g=jwplayer.utils,b=jwplayer.events,e=b.state,c=g.css,a=g.isMobile(),d=g.isIPad(),r=g.isIPod(),j=g.isAndroid(),h=g.isIOS(),q=document,A="aspectMode",n="jwmain",y="jwvideo",k="jwplaylistcontainer",p=!0,l=!1,I="hidden",t="none",w="block";f.view=function(D,x){function m(a){a&&(a.element().addEventListener("mousemove",u,l),a.element().addEventListener("mouseout",B,l))}function s(a,b){var c=q.createElement(a);b&&(c.className=b);return c}function v(){clearTimeout(ma);ma=setTimeout(Q,Ia)}
function z(){clearTimeout(ma);if(X.jwGetState()==e.PAUSED||X.jwGetState()==e.PLAYING)Y(),ua||(ma=setTimeout(Q,Ia))}function u(){clearTimeout(ma);ua=p}function B(){ua=l}function G(a){fa.sendEvent(a.type,a)}function C(a,d,e){g.exists(e)||(e=p);g.exists(a)&&g.exists(d)&&(K.width=a,K.height=d);T.style.width=isNaN(a)?a:a+"px";-1==T.className.indexOf(A)&&(T.style.height=isNaN(d)?d:d+"px");V&&V.redraw();R&&R.redraw(p);H&&(H.offset(R&&0<=H.position().indexOf("bottom")?R.height()+R.margin():0),setTimeout(function(){N&&
N.offset("top-left"==H.position()?H.element().clientWidth+H.margin():0)},500));a=K.playlistsize;var f=K.playlistposition;M(d);if(Ea&&a&&("right"==f||"bottom"==f)){Ea.redraw();d={display:w};var h={};d[f]=0;h[f]=a;"right"==f?d.width=a:d.height=a;c(qa(k),d);c(qa(n),h)}F();e&&fa.sendEvent(b.JWPLAYER_RESIZE)}function M(a){var b=g.bounds(T);W=0<a.toString().indexOf("%")?l:0==b.height?l:"bottom"==K.playlistposition?b.height<=40+K.playlistsize:40>=b.height;R&&(W?(R.audioMode(p),Y(),V.hidePreview(p),V&&V.hide(),
da(l)):(R.audioMode(l),ab(X.jwGetState())));H&&W&&H&&H.hide(W);T.style.backgroundColor=W?"transparent":"#000"}function F(){ba&&-1==T.className.indexOf(A)&&g.stretch(K.stretching,ba,ta.clientWidth,ta.clientHeight,ba.videoWidth,ba.videoHeight)}function P(a){if(K.fullscreen)switch(a.keyCode){case 27:Na(l)}}function E(a){h||(a?(T.className+=" jwfullscreen",q.getElementsByTagName("body")[0].style["overflow-y"]=I):(T.className=T.className.replace(/\s+jwfullscreen/,""),q.getElementsByTagName("body")[0].style["overflow-y"]=
""))}function O(){var a;a:{a=[q.mozFullScreenElement,q.webkitCurrentFullScreenElement,ba.webkitDisplayingFullscreen];for(var b=0;b<a.length;b++)if(a[b]&&(!a[b].id||a[b].id==X.id)){a=p;break a}a=l}K.fullscreen!=a&&Na(a)}function U(){R&&!W&&R.hide()}function J(){N&&(!W&&K.controls)&&N.show()}function Z(){V&&K.controls&&!W&&(!r||X.jwGetState()==e.IDLE)&&V.show();if(!a||!K.fullscreen)ba.controls=l}function Q(){clearTimeout(ma);ma=0;L=l;var a=X.jwGetState();(!x.controls||a!=e.PAUSED)&&U();x.controls||
N&&!wa&&N.hide();a!=e.IDLE&&a!=e.PAUSED&&(N&&!wa&&N.hide(),H&&H.hide(W))}function Y(){L=p;if((K.controls||W)&&!(r&&La==e.PAUSED))(!r||W)&&R&&R.show(),J();oa.hide&&H&&!W&&H.show()}function da(a){(a=a&&!W)||j?c(qa(y),{visibility:"visible",opacity:1}):c(qa(y),{visibility:I,opacity:0})}function aa(){wa=p;Na(l);K.controls&&J()}function ga(){}function ka(a){wa=l;clearTimeout(Qa);Qa=setTimeout(function(){ab(a.newstate)},100)}function la(){U()}function ab(b){La=b;switch(b){case e.PLAYING:K.getVideo().audioMode()?
(da(l),V.hidePreview(W),V.setHiding(p),R&&R.hideFullscreen(p)):(da(p),F(),V.hidePreview(p),R&&R.hideFullscreen(l));Q();break;case e.IDLE:da(l);W||(V.hidePreview(l),Z(),J(),H&&!W&&H.show(),R&&R.hideFullscreen(l));break;case e.BUFFERING:Z();Q();a&&da(p);break;case e.PAUSED:Z(),Y()}}function qa(a){return"#"+X.id+(a?" ."+a:"")}function Oa(a,b){c(a,{display:b?w:t})}var X=D,K=x,T,va,ra,Va,Ya,ma=0,Ia=a?4E3:2E3,ba,ta,Da,Ha,Ca,Ka=l,R,V,N,H,oa=g.extend({},K.componentConfig("logo")),za,Ea,W,Ba=l,L=l,wa,S,ea,
ua=l,La,fa=new b.eventdispatcher;g.extend(this,fa);this.getCurrentCaptions=function(){return za.getCurrentCaptions()};this.setCurrentCaptions=function(a){za.setCurrentCaptions(a)};this.getCaptionsList=function(){return za.getCaptionsList()};this.setup=function(d){if(!Ba){X.skin=d;va=s("span",n);ta=s("span",y);ba=K.getVideo().getTag();ta.appendChild(ba);ra=s("span","jwcontrols");Da=s("span","jwinstream");Ya=s("span",k);Va=s("span","jwaspect");d=K.height;var h=K.componentConfig("controlbar"),j=K.componentConfig("display");
M(d);za=new f.captions(X,K.captions);za.addEventListener(b.JWPLAYER_CAPTIONS_LIST,G);za.addEventListener(b.JWPLAYER_CAPTIONS_CHANGED,G);ra.appendChild(za.element());V=new f.display(X,j);V.addEventListener(b.JWPLAYER_DISPLAY_CLICK,function(b){G(b);a?L?Q():Y():ka(X.jwGetState());L&&(clearTimeout(ma),ma=setTimeout(Q,Ia))});W&&V.hidePreview(p);ra.appendChild(V.element());H=new f.logo(X,oa);ra.appendChild(H.element());N=new f.dock(X,K.componentConfig("dock"));ra.appendChild(N.element());X.edition&&!a?
S=new f.rightclick(X,{abouttext:K.abouttext,aboutlink:K.aboutlink}):a||(S=new f.rightclick(X,{}));K.playlistsize&&(K.playlistposition&&K.playlistposition!=t)&&(Ea=new f.playlistcomponent(X,{}),Ya.appendChild(Ea.element()));R=new f.controlbar(X,h);R.addEventListener(b.JWPLAYER_USER_ACTION,v);ra.appendChild(R.element());r&&U();setTimeout(function(){C(K.width,K.height,l)},0);va.appendChild(ta);va.appendChild(ra);va.appendChild(Da);T.appendChild(va);T.appendChild(Va);T.appendChild(Ya);q.addEventListener("webkitfullscreenchange",
O,l);ba.addEventListener("webkitbeginfullscreen",O,l);ba.addEventListener("webkitendfullscreen",O,l);q.addEventListener("mozfullscreenchange",O,l);q.addEventListener("keydown",P,l);X.jwAddEventListener(b.JWPLAYER_PLAYER_READY,ga);X.jwAddEventListener(b.JWPLAYER_PLAYER_STATE,ka);X.jwAddEventListener(b.JWPLAYER_MEDIA_ERROR,la);X.jwAddEventListener(b.JWPLAYER_PLAYLIST_COMPLETE,aa);ka({newstate:e.IDLE});a||(ra.addEventListener("mouseout",function(){clearTimeout(ma);ma=setTimeout(Q,10)},l),ra.addEventListener("mousemove",
z,l),g.isIE()&&(ta.addEventListener("mousemove",z,l),ta.addEventListener("click",V.clickHandler)));m(R);m(N);m(H);c("#"+T.id+"."+A+" .jwaspect",{"margin-top":K.aspectratio,display:w});d=g.exists(K.aspectratio)?parseFloat(K.aspectratio):100;h=K.playlistsize;c("#"+T.id+".playlist-right .jwaspect",{"margin-bottom":-1*h*(d/100)+"px"});c("#"+T.id+".playlist-right ."+k,{width:h+"px",right:0,top:0,height:"100%"});c("#"+T.id+".playlist-bottom .jwaspect",{"padding-bottom":h+"px"});c("#"+T.id+".playlist-bottom ."+
k,{width:"100%",height:h+"px",bottom:0});c("#"+T.id+".playlist-right ."+n,{right:h+"px"});c("#"+T.id+".playlist-bottom ."+n,{bottom:h+"px"})}};var Na=this.fullscreen=function(c){g.exists(c)||(c=!K.fullscreen);c?a?(ba.webkitEnterFullScreen(),K.setFullscreen(p)):K.fullscreen||(E(p),T.requestFullScreen?T.requestFullScreen():T.mozRequestFullScreen?T.mozRequestFullScreen():T.webkitRequestFullScreen&&T.webkitRequestFullScreen(),K.setFullscreen(p)):(a?(ba.webkitExitFullScreen(),K.setFullscreen(l),d&&(ba.controls=
p,ba.controls=l)):K.fullscreen&&(E(l),K.setFullscreen(l),q.cancelFullScreen?q.cancelFullScreen():q.mozCancelFullScreen?q.mozCancelFullScreen():q.webkitCancelFullScreen&&q.webkitCancelFullScreen()),d&&X.jwGetState()==e.PAUSED&&setTimeout(Z,500));R&&R.redraw();V&&V.redraw();N&&N.redraw();F();K.fullscreen?ea=setInterval(F,200):clearInterval(ea);setTimeout(function(){var a=g.bounds(va);K.width=a.width;K.height=a.height;fa.sendEvent(b.JWPLAYER_RESIZE)},0)};this.resize=C;this.resizeMedia=F;var na=this.completeSetup=
function(){c(qa(),{opacity:1})},Qa;this.setupInstream=function(a,b,c){Oa(qa("jwinstream"),p);Oa(qa("jwcontrols"),l);Da.appendChild(a);Ha=b;Ca=c;ka({newstate:e.PLAYING});Ka=p};this.destroyInstream=function(){Oa(qa("jwinstream"),l);Oa(qa("jwcontrols"),p);Da.innerHTML="";Ka=l};this.setupError=function(a){Ba=p;jwplayer.embed.errorScreen(T,a);na()};this.addButton=function(a,b,c,d){N&&N.addButton(a,b,c,d)};this.removeButton=function(a){N&&N.removeButton(a)};this.setControls=function(a){var c=K.controls,
d=a?p:l;K.controls=d;d!=c&&(d?ka({newstate:X.jwGetState()}):(Q(),V&&V.hide()),Ka&&(a?(Ha.show(),Ca.show()):(Ha.hide(),Ca.hide())),fa.sendEvent(b.JWPLAYER_CONTROLS,{controls:d}))};this.forceState=function(a){V.forceState(a)};this.releaseState=function(){V.releaseState(X.jwGetState())};this.getSafeRegion=function(){var a=K.controls,b=g.bounds(va),c=b.top,d=g.bounds(R?R.element():null),e=0<N.numButtons(),f=g.bounds(N.element()),h=g.bounds(H.element()),j=0==H.position().indexOf("top"),e=Math.max(e?f.top+
f.height-c:0,j?h.top+h.height-c:0),f=b.width,b=d.height?(j?d.top:h.top)-e-c:b.height-e;return{x:0,y:a?e:0,width:a?f:0,height:a?b:0}};this.destroy=function(){q.removeEventListener("webkitfullscreenchange",O,l);q.removeEventListener("mozfullscreenchange",O,l);ba.removeEventListener("webkitbeginfullscreen",O,l);ba.removeEventListener("webkitendfullscreen",O,l);q.removeEventListener("keydown",P,l);S&&S.destroy()};T=s("div","jwplayer playlist-"+K.playlistposition);T.id=X.id;K.aspectratio&&(c(".jwplayer",
{display:"inline-block"}),T.className=T.className.replace("jwplayer","jwplayer "+A));C(K.width,K.height);var Ma=document.getElementById(X.id);Ma.parentNode.replaceChild(T,Ma)};c(".jwplayer",{position:"relative",display:"block",opacity:0,"min-height":0,"-webkit-transition":"opacity .25s ease","-moz-transition":"opacity .25s ease","-o-transition":"opacity .25s ease"});c("."+n,{position:"absolute",left:0,right:0,top:0,bottom:0,"-webkit-transition":"opacity .25s ease","-moz-transition":"opacity .25s ease",
"-o-transition":"opacity .25s ease"});c("."+y+" ,.jwcontrols",{position:"absolute",height:"100%",width:"100%","-webkit-transition":"opacity .25s ease","-moz-transition":"opacity .25s ease","-o-transition":"opacity .25s ease"});c("."+y,{overflow:I,visibility:I,opacity:0,cursor:"pointer"});c("."+y+" video",{background:"transparent",width:"100%",height:"100%"});c("."+k,{position:"absolute",height:"100%",width:"100%",display:t});c(".jwinstream",{position:"absolute",top:0,left:0,bottom:0,right:0,display:"none"});
c(".jwaspect",{display:"none"});c(".jwplayer."+A,{height:"auto"});c(".jwplayer.jwfullscreen",{width:"100%",height:"100%",left:0,right:0,top:0,bottom:0,"z-index":1E3,position:"fixed"},p);c(".jwplayer.jwfullscreen ."+n,{left:0,right:0,top:0,bottom:0},p);c(".jwplayer.jwfullscreen ."+k,{display:t},p);c(".jwplayer .jwuniform",{"background-size":"contain !important"});c(".jwplayer .jwfill",{"background-size":"cover !important","background-position":"center"});c(".jwplayer .jwexactfit",{"background-size":"100% 100% !important"})})(jwplayer.html5);
(function(f){var g=jwplayer.utils.extend,b=f.logo,e;e=function(c,a){"free"==c.edition()?a=null:(b.defaults.file="",b.defaults.prefix="");g(this,new b(c,a))};e.defaults={prefix:"",file:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAATCAYAAACa0IPnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUVGQjQ0N0ZEOThDMTFFMUFDMUZCMzY5RkYyQkY5NDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUVGQjQ0ODBEOThDMTFFMUFDMUZCMzY5RkYyQkY5NDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RUZCNDQ3REQ5OEMxMUUxQUMxRkIzNjlGRjJCRjk0NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RUZCNDQ3RUQ5OEMxMUUxQUMxRkIzNjlGRjJCRjk0NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr5HQqEAAArQSURBVHja3JkJUNT3Fcf3AARBQVFR8IjGCw1aT9R6UKVe0TgYOxNHG5tqD+o48ajVia21mdaJ49FoCloNKho0FkbjQRwRvAUVFUO8gCDKIbccciyw7Pbztr+1G2Sp0yKj/c28+f/3d733e993/f6r1TTSwsLCtDwcIbPq0kM6qErTeHOCau2MtVLPWpv9rE2n1pps+FQ3ssfPoR5QNHRN8+o3bSNn/Z/awoULn707NDZBr9d7ms3m3/FqqKurO8rv4Vqt1l+n031B35kG04OZ68f4Td4/bzAWxNjk+vr6Sw4ODpENgNXRP54956pDuog87JPCMxtKgO5Y0K6t/dDJyWlQSUlJbbt27V4H0PpB05UBOkOHoMfNtXmjoBUUFHTu0qXLcl5rsrOzEzw8PMagrPcNBoOHs7NzIv1P1dS2gPJXFN0KcB86OjoKqAarhzF/GfPHsV8B+2j8/f2f8bh69aq2b9++E9n3l/K7pqYmi32c2OM9+Q2gyRiLyHD26dOnJvapq6iocOzYseMrj1hhYeEPkHOz9XdZWVmau7v7ywWttLRUD2hVAGIsKioq43dKp06dzCaTaSSK80bR4g2aqqqqka1bt7aGv3bQaJR+Vn5UVlb2xbt64kk1t2/fTtq/f79x7Nix/2bs4KARENhXk5ubmxwREfE5wDjDtzvzJnp5eQ3CEDYCZgB71kMayCzPV72Vl5c7Ir8BoxMv07i4uLyH3HF2Qn/zgEYoMgth7Zpu3brpk5OTLxOiCtzc3LwBozcCWEDDM2aj/Hr6Cl1dXTvhEXMA0QIaAI/FuroQ0tLbtGmTcvjwYVODECx8TAqM/MTExHCV09q0b9/+CYf+LXsNKS4u9mBvC1gC9OsAWqtWrSznkjNawlHbtu9ifDsA79JLA00p0srU7dSpUwljxoxJx8O8UKQ/yj5FvxFQZgNc7fHjx0MXLFjwMZ4xmjEpLkwoeBjC6/HUxGvXruVMnz79+4wVAMzX4GD1J06cKFdDJVlZWRUc0BHgawBdC1+tzLPOVy0AWgR1U+Facu1nUB30J2UAYVCGDdvxas1B6KTq+wCaAXlCD6DdkFW5A6CV0FdQMfRTqAL6RKKgXaWqs8lTNWfeQ6EJcr6XApowE+WgNGHumJ+fX4anpdI3Bqv/IYp0wxPeYsiT0HY7Ly8vwmg0fshYV0DsQ38W7wNlD7wv/vr16xU2yn4ONHJmN57vKnn8evTo8QHjjjk5OUmZmZkV/fv3t8yjz6T2WUTo3iryIVcpAHtLwUN/R/ivRb5x7DkW626NQSxXLH34/WcMadyDBw8u9+rVy52+cNa9TUQph0yMTWDPQEL6CsYiOdsQwvXPONuP6NNAPRivevz4cXjXrl3tgmY9lw1o8tuPtf9gjyAFfPN7GgewgAZjS/n66NGjC3369HmH0OVPUeFOPpuBp2lQ7FkKjDxqjRsUFj8mns9AETGenp5+1dXV+Sjj7vnz5032DiZ8ePrS9YUKuc7SBw/Jc5/ideUzZszQSR+kleeuXbsyeO66efNmJgCVwstr7dq1wciznFC94+LFi1/PmTMngEgxDz5/FE9EvoEUB2Jwj44ePZq4YsWK1YzNio+PPxIeHh4LMPWTJk0aPHfu3F/z/jFjkZzRRfHtgfHE79y5M4xQryNNFC9evNiuUq3nsgVNtUB0c5ozLuA9tdlBE8aS06w55MKFC3Hjx4/Pw4IHECJ9EP5tBNMlJCREEdoMa9asOenn5zcZgUZw6GKs31Uqzxs3btybNWuW3RAifPDktEOHDn3VoUMHN3KY4datW/koNxVLP8P+dYRYq+VawuSxY8cSV61a5TRv3rwJyOCPnOJ+bdjP6eHDhx327dv3JTwlJ7ZHljms2YM8k0VejODC0KFDs8TipbDp169fdWhoaFsA1sHTgPwSFXwYe4v3GuEH4GkHDhwIEWNQOitbtmyZpqnw2NDTbNoogLvK3iG8/0VV2+b/CjSsVsdhTIqpWaxaPA3m4mkaCoUcrDiNfl9Cwx845JtUlVmExmTWmqKiohKZX4YnilA+zDOjhGunT58u2rBhg13QxCI5wOODBw9+qu40NaIUuZ6xr1EldgtJFSmKP3fu3Bq6l0nOI/xm4hEFeJtWGZoeb8/hSnGYPBpMhbqANccZn838ciLG11OnTu3MXu6ETm337t3Fot4RJ5eCh/U6gDYQAnszbhS+ACyFVizylL6IUpvwNGvzgD6CfgOFSpiGctXZ6/4jaHfu3JGd+yHsaN4jBw4cWMYBMdLWLuSAUooLy4WYsXrC3A0UHIiXTVVAxhEaq0RA7iIZHPTGgAEDJsrXCxRZInctWdeUN8tavMDIvLymlCCEodRKzuR9JQb0ZOPGjX+LjIxMwlAMVKefIZe77MteZjx/H6C9TygTj1lNBdeTXHZl8+bNsVTEXsOHD68W3qz7Eg9KByA9Stb7+Pi44+FFAJSEsU2UOejCGBgYaJD3F2lWY2wCNOtXE7kmiQGuwdCToGgMRO7BUp2Xqy9FAqTo59mXFgcO34lccBJFdEPJk9PS0jaQi4JRpAOhKoswdNOqOKrA2JEjR/6Kd1fp43Anly5davHOkJCQQgC/wJiApgHA7+R+NnPmzKYqLK0CRNewUGlQQksu06FYM4pvTxg2c7hKwuP19evX38ODpkFdbEMuIfVbDho3atQo8aLljBs5zzXOV0RuNuDZ1ymmek6bNq0rhc4ecnMF8g8BtJUZGRm/J3JkYSSOqmrVWUPei4LWRHi014YosjQAFCMuQ+4HqnK1fuar1M2fP7+cA0ThUUVY1E9QznXy1gI8JTcpKSn6yZMn+dYQtXfv3m8AOROhTDyzr1y5Em8NXSTqOiq5JKxaPM+M532ze/fuR9bxhqRKYpOyyHp786zjzDdC+ujo6Jz09PSrXMq7E86PoxzJD4sB0bIXipbQrrl06VLVmTNn9tIvHqUlTGbHxMQcVrJWbNq0KQQA4/HSsUSL80FBQRfJb3vg5U0LZI6JtWYb/pqmZLQlSSkYmO5F5zdGrO8M9QOTadB8RXOhRQ6pqamV69at28ahKkeMGDEM6+tAnio8cuRIHMXBEWuSFMuhv2rr1q2HsMxcFHdv8ODBRbbWxyX8W8DfL6fGyk8yv8aeWbHeTD66hVfHYOXnevfubdcE8fAYhP0OA7qHIeSmpKRsoHpbSG71Jv9Ub9++PdLX1/cNPND3/v37xRRMIqt5yZIll/G4NK4Qg8i/9ykmErds2WLZkwIpgfD5EZFkVkBAwDDCpysFR0lsbGwCUeME6zV3795NwyDiyIPnAbF2ypQpL/a1WKs1SSh3+JermZrx3m7Jt1qbDm+5y8gFXhUC6XYugl5QF+Wy2Q0qH0Gwu9ojw3Y9Cn9uI6y8A483JdIynmlPUub1kks+lMO8Yn5LwTJQ5QQpVm5B7kq2ZOZYvn8CkjPhORXL9QwLC1sRHBy8o5G95XL+hiqC5JL+kPV5asxdXbClSMik/4UA2LZt20iuF7/AO11QcrN97ccGngPtpTa8qiW/JA0SEMgHQYS41XjJXfLVRGTIbwnmFERuygH0zfwXjXxtqndoKS225DdDrDEKsDrC0wOgSgipuwwGQ35L8YdXhaoAm62R375XdraUIlsMtIiIiNCeNDysND4+/g6X57/Dv1DzGjfbSlSr+f9sfSUlqW98+U193H0d2z8FGACF4VIWnpOTrQAAAABJRU5ErkJggg%3D%3D"};
g(e.defaults,b.defaults);f.logo=e})(jwplayer.html5);(function(f){var g=f.model;f.model=function(b,e){var c=new jwplayer.utils.key(b.key),a=new g(b,e),d=a.componentConfig;a.edition=function(){return c.edition()};a.componentConfig=function(b){return"logo"==b?a.logo:d(b)};return a}})(jwplayer.html5);(function(f){f.player.prototype.edition=function(){return this._model.edition()}})(jwplayer.html5);
(function(f){var g=jwplayer.utils.extend,b=f.rightclick;f.rightclick=function(e,c){if("free"==e.edition())c.aboutlink="http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d"+f.version+"\x26m\x3dh\x26e\x3df",delete c.abouttext;else{if(!c.aboutlink){var a="http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d"+f.version+"\x26m\x3dh\x26e\x3d",d=e.edition();c.aboutlink=a+("pro"==d?"p":"premium"==d?"r":"ads"==d?"a":"f")}c.abouttext?c.abouttext="About "+c.abouttext+" ...":(a=e.edition(),a=a.charAt(0).toUpperCase()+
a.substr(1),c.abouttext="About JW Player "+f.version+" ("+a+" edition)")}g(this,new b(e,c))}})(jwplayer.html5);(function(f){var g=f.view;f.view=function(b,e){var c=new g(b,e);"invalid"==e.edition()&&c.setupError("Error setting up player: Invalid license key");return c}})(jwplayer.html5);
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
  "use strict";

  window.console = window.console || {
    info: function (stuff) {}
  };

  // If there's no jQuery, fancyBox can't work
  // =========================================

  if (!$) {
    return;
  }

  // Check if fancyBox is already initialized
  // ========================================

  if ($.fn.fancybox) {
    console.info("fancyBox already initialized");

    return;
  }

  // Private default settings
  // ========================

  var defaults = {
    // Close existing modals
    // Set this to false if you do not need to stack multiple instances
    closeExisting: false,

    // Enable infinite gallery navigation
    loop: false,

    // Horizontal space between slides
    gutter: 50,

    // Enable keyboard navigation
    keyboard: true,

    // Should allow caption to overlap the content
    preventCaptionOverlap: true,

    // Should display navigation arrows at the screen edges
    arrows: true,

    // Should display counter at the top left corner
    infobar: true,

    // Should display close button (using `btnTpl.smallBtn` template) over the content
    // Can be true, false, "auto"
    // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
    smallBtn: "auto",

    // Should display toolbar (buttons at the top)
    // Can be true, false, "auto"
    // If "auto" - will be automatically hidden if "smallBtn" is enabled
    toolbar: "auto",

    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      //"fullScreen",
      //"download",
      "thumbs",
      "close"
    ],

    // Detect "idle" time in seconds
    idleTime: 3,

    // Disable right-click and use simple image protection for images
    protect: false,

    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,

    image: {
      // Wait for images to load before displaying
      //   true  - wait for image to load and then display;
      //   false - display thumbnail and load the full-sized image over top,
      //           requires predefined image dimensions (`data-width` and `data-height` attributes)
      preload: false
    },

    ajax: {
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true
        }
      }
    },

    iframe: {
      // Iframe template
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',

      // Preload iframe before displaying it
      // This allows to calculate iframe content width and height
      // (note: Due to "Same Origin Policy", you can't get cross domain data).
      preload: true,

      // Custom CSS styling for iframe wrapping element
      // You can use this to set custom iframe dimensions
      css: {},

      // Iframe tag attributes
      attr: {
        scrolling: "auto"
      }
    },

    // For HTML5 video only
    video: {
      tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
        '<source src="{{src}}" type="{{format}}" />' +
        'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
        "</video>",
      format: "", // custom video format
      autoStart: true
    },

    // Default content type if cannot be detected automatically
    defaultType: "image",

    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",

    // Duration in ms for open/close animation
    animationDuration: 366,

    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",

    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "fade",

    // Duration in ms for transition animation
    transitionDuration: 366,

    // Custom CSS class for slide element
    slideClass: "",

    // Custom CSS class for layout
    baseClass: "",

    // Base template for layout
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
      '<div class="fancybox-toolbar">{{buttons}}</div>' +
      '<div class="fancybox-navigation">{{arrows}}</div>' +
      '<div class="fancybox-stage"></div>' +
      '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
      "</div>" +
      "</div>",

    // Loading indicator template
    spinnerTpl: '<div class="fancybox-loading"></div>',

    // Error message template
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',

    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
        "</a>",

      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
        "</button>",

      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",

      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
        "</button>",

      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
        "</button>",

      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
        "</button>"
    },

    // Container is injected into this element
    parentEl: "body",

    // Hide browser vertical scrollbars; use at your own risk
    hideScrollbar: true,

    // Focus handling
    // ==============

    // Try to focus on the first focusable element after opening
    autoFocus: true,

    // Put focus back to active element after closing
    backFocus: true,

    // Do not let user to focus on element outside modal content
    trapFocus: true,

    // Module specific options
    // =======================

    fullScreen: {
      autoStart: false
    },

    // Set `touch: false` to disable panning/swiping
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true // Continue movement after releasing mouse/touch when panning
    },

    // Hash value when initializing manually,
    // set `false` to disable hash change
    hash: null,

    // Customize or add new media types
    // Example:
    /*
      media : {
        youtube : {
          params : {
            autoplay : 0
          }
        }
      }
    */
    media: {},

    slideShow: {
      autoStart: false,
      speed: 3000
    },

    thumbs: {
      autoStart: false, // Display thumbnails on opening
      hideOnClose: true, // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container", // Container is injected into this element
      axis: "y" // Vertical (y) or horizontal (x) scrolling
    },

    // Use mousewheel to navigate gallery
    // If 'auto' - enabled for images only
    wheel: "auto",

    // Callbacks
    //==========

    // See Documentation/API/Events for more information
    // Example:
    /*
      afterShow: function( instance, current ) {
        console.info( 'Clicked element:' );
        console.info( current.opts.$orig );
      }
    */

    onInit: $.noop, // When instance has been initialized

    beforeLoad: $.noop, // Before the content of a slide is being loaded
    afterLoad: $.noop, // When the content of a slide is done loading

    beforeShow: $.noop, // Before open animation starts
    afterShow: $.noop, // When content is done loading and animating

    beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
    afterClose: $.noop, // After instance has been closed

    onActivate: $.noop, // When instance is brought to front
    onDeactivate: $.noop, // When other instance has been activated

    // Interaction
    // ===========

    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
    // each option can be string or method that returns value.
    //
    // Possible values:
    //   "close"           - close instance
    //   "next"            - move to next gallery item
    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
    //   "toggleControls"  - show/hide controls
    //   "zoom"            - zoom image (if loaded)
    //   false             - do nothing

    // Clicked on the content
    clickContent: function (current, event) {
      return current.type === "image" ? "zoom" : false;
    },

    // Clicked on the slide
    clickSlide: "close",

    // Clicked on the background (backdrop) element;
    // if you have not changed the layout, then most likely you need to use `clickSlide` option
    clickOutside: "close",

    // Same as previous two, but for double click
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,

    // Custom options when mobile device is detected
    // =============================================

    mobile: {
      preventCaptionOverlap: false,
      idleTime: false,
      clickContent: function (current, event) {
        return current.type === "image" ? "toggleControls" : false;
      },
      clickSlide: function (current, event) {
        return current.type === "image" ? "toggleControls" : "close";
      },
      dblclickContent: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      dblclickSlide: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      }
    },

    // Internationalization
    // ====================

    lang: "en",
    i18n: {
      en: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Start slideshow",
        PLAY_STOP: "Pause slideshow",
        FULL_SCREEN: "Full screen",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      },
      de: {
        CLOSE: "Schlie&szlig;en",
        NEXT: "Weiter",
        PREV: "Zur&uuml;ck",
        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
        PLAY_START: "Diaschau starten",
        PLAY_STOP: "Diaschau beenden",
        FULL_SCREEN: "Vollbild",
        THUMBS: "Vorschaubilder",
        DOWNLOAD: "Herunterladen",
        SHARE: "Teilen",
        ZOOM: "Vergr&ouml;&szlig;ern"
      }
    }
  };

  // Few useful variables and methods
  // ================================

  var $W = $(window);
  var $D = $(document);

  var called = 0;

  // Check if an object is a jQuery object and not a native JavaScript object
  // ========================================================================
  var isQuery = function (obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  };

  // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
  // ===============================================================================
  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  // Detect the supported transition-end event property name
  // =======================================================
  var transitionEnd = (function () {
    var el = document.createElement("fakeelement"),
      t;

    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }

    return "transitionend";
  })();

  // Force redraw on an element.
  // This helps in cases where the browser doesn't redraw an updated element properly
  // ================================================================================
  var forceRedraw = function ($el) {
    return $el && $el.length && $el[0].offsetHeight;
  };

  // Exclude array (`buttons`) options from deep merging
  // ===================================================
  var mergeOpts = function (opts1, opts2) {
    var rez = $.extend(true, {}, opts1, opts2);

    $.each(opts2, function (key, value) {
      if ($.isArray(value)) {
        rez[key] = value;
      }
    });

    return rez;
  };

  // How much of an element is visible in viewport
  // =============================================

  var inViewport = function (elem) {
    var elemCenter, rez;

    if (!elem || elem.ownerDocument !== document) {
      return false;
    }

    $(".fancybox-container").css("pointer-events", "none");

    elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };

    rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;

    $(".fancybox-container").css("pointer-events", "");

    return rez;
  };

  // Class definition
  // ================

  var FancyBox = function (content, opts, index) {
    var self = this;

    self.opts = mergeOpts({
      index: index
    }, $.fancybox.defaults);

    if ($.isPlainObject(opts)) {
      self.opts = mergeOpts(self.opts, opts);
    }

    if ($.fancybox.isMobile) {
      self.opts = mergeOpts(self.opts, self.opts.mobile);
    }

    self.id = self.opts.id || ++called;

    self.currIndex = parseInt(self.opts.index, 10) || 0;
    self.prevIndex = null;

    self.prevPos = null;
    self.currPos = 0;

    self.firstRun = true;

    // All group items
    self.group = [];

    // Existing slides (for current, next and previous gallery items)
    self.slides = {};

    // Create group elements
    self.addContent(content);

    if (!self.group.length) {
      return;
    }

    self.init();
  };

  $.extend(FancyBox.prototype, {
    // Create DOM structure
    // ====================

    init: function () {
      var self = this,
        firstItem = self.group[self.currIndex],
        firstItemOpts = firstItem.opts,
        $container,
        buttonStr;

      if (firstItemOpts.closeExisting) {
        $.fancybox.close(true);
      }

      // Hide scrollbars
      // ===============

      $("body").addClass("fancybox-active");

      if (
        !$.fancybox.getInstance() &&
        firstItemOpts.hideScrollbar !== false &&
        !$.fancybox.isMobile &&
        document.body.scrollHeight > window.innerHeight
      ) {
        $("head").append(
          '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
          (window.innerWidth - document.documentElement.clientWidth) +
          "px;}</style>"
        );

        $("body").addClass("compensate-for-scrollbar");
      }

      // Build html markup and set references
      // ====================================

      // Build html code for buttons and insert into main template
      buttonStr = "";

      $.each(firstItemOpts.buttons, function (index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || "";
      });

      // Create markup from base template, it will be initially hidden to
      // avoid unnecessary work like painting while initializing is not complete
      $container = $(
          self.translate(
            self,
            firstItemOpts.baseTpl
            .replace("{{buttons}}", buttonStr)
            .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
          )
        )
        .attr("id", "fancybox-container-" + self.id)
        .addClass(firstItemOpts.baseClass)
        .data("FancyBox", self)
        .appendTo(firstItemOpts.parentEl);

      // Create object holding references to jQuery wrapped nodes
      self.$refs = {
        container: $container
      };

      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
        self.$refs[item] = $container.find(".fancybox-" + item);
      });

      self.trigger("onInit");

      // Enable events, deactive previous instances
      self.activate();

      // Build slides, load and reveal content
      self.jumpTo(self.currIndex);
    },

    // Simple i18n support - replaces object keys found in template
    // with corresponding values
    // ============================================================

    translate: function (obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;

      return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
        return arr[n] === undefined ? match : arr[n];
      });
    },

    // Populate current group with fresh content
    // Check if each object has valid type and content
    // ===============================================

    addContent: function (content) {
      var self = this,
        items = $.makeArray(content),
        thumbs;

      $.each(items, function (i, item) {
        var obj = {},
          opts = {},
          $item,
          type,
          found,
          src,
          srcParts;

        // Step 1 - Make sure we have an object
        // ====================================

        if ($.isPlainObject(item)) {
          // We probably have manual usage here, something like
          // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === "object" && $(item).length) {
          // Here we probably have jQuery collection returned by some selector
          $item = $(item);

          // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
          opts = $item.data() || {};
          opts = $.extend(true, {}, opts, opts.options);

          // Here we store clicked element
          opts.$orig = $item;

          obj.src = self.opts.src || opts.src || $item.attr("href");

          // Assume that simple syntax is used, for example:
          //   `$.fancybox.open( $("#test"), {} );`
          if (!obj.type && !obj.src) {
            obj.type = "inline";
            obj.src = item;
          }
        } else {
          // Assume we have a simple html code, for example:
          //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
          obj = {
            type: "html",
            src: item + ""
          };
        }

        // Each gallery object has full collection of options
        obj.opts = $.extend(true, {}, self.opts, opts);

        // Do not merge buttons array
        if ($.isArray(opts.buttons)) {
          obj.opts.buttons = opts.buttons;
        }

        if ($.fancybox.isMobile && obj.opts.mobile) {
          obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
        }

        // Step 2 - Make sure we have content type, if not - try to guess
        // ==============================================================

        type = obj.type || obj.opts.type;
        src = obj.src || "";

        if (!type && src) {
          if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
            type = "video";

            if (!obj.opts.video.format) {
              obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
            }
          } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = "image";
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = "iframe";
            obj = $.extend(true, obj, {
              contentType: "pdf",
              opts: {
                iframe: {
                  preload: false
                }
              }
            });
          } else if (src.charAt(0) === "#") {
            type = "inline";
          }
        }

        if (type) {
          obj.type = type;
        } else {
          self.trigger("objectNeedsType", obj);
        }

        if (!obj.contentType) {
          obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
        }

        // Step 3 - Some adjustments
        // =========================

        obj.index = self.group.length;

        if (obj.opts.smallBtn == "auto") {
          obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
        }

        if (obj.opts.toolbar === "auto") {
          obj.opts.toolbar = !obj.opts.smallBtn;
        }

        // Find thumbnail image, check if exists and if is in the viewport
        obj.$thumb = obj.opts.$thumb || null;

        if (obj.opts.$trigger && obj.index === self.opts.index) {
          obj.$thumb = obj.opts.$trigger.find("img:first");

          if (obj.$thumb.length) {
            obj.opts.$orig = obj.opts.$trigger;
          }
        }

        if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
          obj.$thumb = obj.opts.$orig.find("img:first");
        }

        if (obj.$thumb && !obj.$thumb.length) {
          obj.$thumb = null;
        }

        obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);

        // "caption" is a "special" option, it can be used to customize caption per gallery item
        if ($.type(obj.opts.caption) === "function") {
          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
        }

        if ($.type(self.opts.caption) === "function") {
          obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
        }

        // Make sure we have caption as a string or jQuery object
        if (!(obj.opts.caption instanceof $)) {
          obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
        }

        // Check if url contains "filter" used to filter the content
        // Example: "ajax.html #something"
        if (obj.type === "ajax") {
          srcParts = src.split(/\s+/, 2);

          if (srcParts.length > 1) {
            obj.src = srcParts.shift();

            obj.opts.filter = srcParts.shift();
          }
        }

        // Hide all buttons and disable interactivity for modal items
        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            trapFocus: true,
            // Remove buttons
            infobar: 0,
            toolbar: 0,

            smallBtn: 0,

            // Disable keyboard navigation
            keyboard: 0,

            // Disable some modules
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,

            // Disable click event handlers
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        }

        // Step 4 - Add processed object to group
        // ======================================

        self.group.push(obj);
      });

      // Update controls if gallery is already opened
      if (Object.keys(self.slides).length) {
        self.updateControls();

        // Update thumbnails, if needed
        thumbs = self.Thumbs;

        if (thumbs && thumbs.isActive) {
          thumbs.create();

          thumbs.focus();
        }
      }
    },

    // Attach an event handler functions for:
    //   - navigation buttons
    //   - browser scrolling, resizing;
    //   - focusing
    //   - keyboard
    //   - detecting inactivity
    // ======================================

    addEvents: function () {
      var self = this;

      self.removeEvents();

      // Make navigation elements clickable
      // ==================================

      self.$refs.container
        .on("click.fb-close", "[data-fancybox-close]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.close(e);
        })
        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.previous();
        })
        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.next();
        })
        .on("click.fb", "[data-fancybox-zoom]", function (e) {
          // Click handler for zoom button
          self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        });

      // Handle page scrolling and browser resizing
      // ==========================================

      $W.on("orientationchange.fb resize.fb", function (e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          if (self.requestId) {
            cancelAFrame(self.requestId);
          }

          self.requestId = requestAFrame(function () {
            self.update(e);
          });
        } else {
          if (self.current && self.current.type === "iframe") {
            self.$refs.stage.hide();
          }

          setTimeout(
            function () {
              self.$refs.stage.show();

              self.update(e);
            },
            $.fancybox.isMobile ? 600 : 250
          );
        }
      });

      $D.on("keydown.fb", function (e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null,
          current = instance.current,
          keycode = e.keyCode || e.which;

        // Trap keyboard focus inside of the modal
        // =======================================

        if (keycode == 9) {
          if (current.opts.trapFocus) {
            self.focus(e);
          }

          return;
        }

        // Enable keyboard navigation
        // ==========================

        if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
          return;
        }

        // Backspace and Esc keys
        if (keycode === 8 || keycode === 27) {
          e.preventDefault();

          self.close(e);

          return;
        }

        // Left arrow and Up arrow
        if (keycode === 37 || keycode === 38) {
          e.preventDefault();

          self.previous();

          return;
        }

        // Righ arrow and Down arrow
        if (keycode === 39 || keycode === 40) {
          e.preventDefault();

          self.next();

          return;
        }

        self.trigger("afterKeydown", e, keycode);
      });

      // Hide controls after some inactivity period
      if (self.group[self.currIndex].opts.idleTime) {
        self.idleSecondsCounter = 0;

        $D.on(
          "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
          function (e) {
            self.idleSecondsCounter = 0;

            if (self.isIdle) {
              self.showControls();
            }

            self.isIdle = false;
          }
        );

        self.idleInterval = window.setInterval(function () {
          self.idleSecondsCounter++;

          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
            self.isIdle = true;
            self.idleSecondsCounter = 0;

            self.hideControls();
          }
        }, 1000);
      }
    },

    // Remove events added by the core
    // ===============================

    removeEvents: function () {
      var self = this;

      $W.off("orientationchange.fb resize.fb");
      $D.off("keydown.fb .fb-idle");

      this.$refs.container.off(".fb-close .fb-prev .fb-next");

      if (self.idleInterval) {
        window.clearInterval(self.idleInterval);

        self.idleInterval = null;
      }
    },

    // Change to previous gallery item
    // ===============================

    previous: function (duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },

    // Change to next gallery item
    // ===========================

    next: function (duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },

    // Switch to selected gallery item
    // ===============================

    jumpTo: function (pos, duration) {
      var self = this,
        groupLen = self.group.length,
        firstRun,
        isMoved,
        loop,
        current,
        previous,
        slidePos,
        stagePos,
        prop,
        diff;

      if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
        return;
      }

      // Should loop?
      pos = parseInt(pos, 10);
      loop = self.current ? self.current.opts.loop : self.opts.loop;

      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }

      // Check if opening for the first time; this helps to speed things up
      firstRun = self.firstRun = !Object.keys(self.slides).length;

      // Create slides
      previous = self.current;

      self.prevIndex = self.currIndex;
      self.prevPos = self.currPos;

      current = self.createSlide(pos);

      if (groupLen > 1) {
        if (loop || current.index < groupLen - 1) {
          self.createSlide(pos + 1);
        }

        if (loop || current.index > 0) {
          self.createSlide(pos - 1);
        }
      }

      self.current = current;
      self.currIndex = current.index;
      self.currPos = current.pos;

      self.trigger("beforeShow", firstRun);

      self.updateControls();

      // Validate duration length
      current.forcedDuration = undefined;

      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
      }

      duration = parseInt(duration, 10);

      // Check if user has swiped the slides or if still animating
      isMoved = self.isMoved(current);

      // Make sure current slide is visible
      current.$slide.addClass("fancybox-slide--current");

      // Fresh start - reveal container, current slide and start loading content
      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self.$refs.container.css("transition-duration", duration + "ms");
        }

        self.$refs.container.addClass("fancybox-is-open").trigger("focus");

        // Attempt to load content into slide
        // This will later call `afterLoad` -> `revealContent`
        self.loadSlide(current);

        self.preload("image");

        return;
      }

      // Get actual slide/stage positions (before cleaning up)
      slidePos = $.fancybox.getTranslate(previous.$slide);
      stagePos = $.fancybox.getTranslate(self.$refs.stage);

      // Clean up all slides
      $.each(self.slides, function (index, slide) {
        $.fancybox.stop(slide.$slide, true);
      });

      if (previous.pos !== current.pos) {
        previous.isComplete = false;
      }

      previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");

      // If slides are out of place, then animate them to correct position
      if (isMoved) {
        // Calculate horizontal swipe distance
        diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);

        $.each(self.slides, function (index, slide) {
          slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });

          // Make sure that each slide is in equal distance
          // This is mostly needed for freshly added slides, because they are not yet positioned
          var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;

          $.fancybox.setTranslate(slide.$slide, {
            top: 0,
            left: leftPos - stagePos.left + diff
          });

          if (slide.pos !== current.pos) {
            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
          }

          // Redraw to make sure that transition will start
          forceRedraw(slide.$slide);

          // Animate the slide
          $.fancybox.animate(
            slide.$slide, {
              top: 0,
              left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
            },
            duration,
            function () {
              slide.$slide
                .css({
                  transform: "",
                  opacity: ""
                })
                .removeClass("fancybox-slide--next fancybox-slide--previous");

              if (slide.pos === self.currPos) {
                self.complete();
              }
            }
          );
        });
      } else if (duration && current.opts.transitionEffect) {
        // Set transition effect for previously active slide
        prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;

        previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));

        $.fancybox.animate(
          previous.$slide,
          prop,
          duration,
          function () {
            previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
          },
          false
        );
      }

      if (current.isLoaded) {
        self.revealContent(current);
      } else {
        self.loadSlide(current);
      }

      self.preload("image");
    },

    // Create new "slide" element
    // These are gallery items  that are actually added to DOM
    // =======================================================

    createSlide: function (pos) {
      var self = this,
        $slide,
        index;

      index = pos % self.group.length;
      index = index < 0 ? self.group.length + index : index;

      if (!self.slides[pos] && self.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);

        self.slides[pos] = $.extend(true, {}, self.group[index], {
          pos: pos,
          $slide: $slide,
          isLoaded: false
        });

        self.updateSlide(self.slides[pos]);
      }

      return self.slides[pos];
    },

    // Scale image to the actual size of the image;
    // x and y values should be relative to the slide
    // ==============================================

    scaleToActual: function (x, y, duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        canvasWidth = $.fancybox.getTranslate(current.$slide).width,
        canvasHeight = $.fancybox.getTranslate(current.$slide).height,
        newImgWidth = current.width,
        newImgHeight = current.height,
        imgPos,
        posX,
        posY,
        scaleX,
        scaleY;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      x = x === undefined ? canvasWidth * 0.5 : x;
      y = y === undefined ? canvasHeight * 0.5 : y;

      imgPos = $.fancybox.getTranslate($content);

      imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
      imgPos.left -= $.fancybox.getTranslate(current.$slide).left;

      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height;

      // Get center position for original image
      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5;

      // Make sure image does not move away from edges
      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);

        if (posX > 0) {
          posX = 0;
        }

        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }

      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);

        if (posY > 0) {
          posY = 0;
        }

        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }

      self.updateCursor(newImgWidth, newImgHeight);

      $.fancybox.animate(
        $content, {
          top: posY,
          left: posX,
          scaleX: scaleX,
          scaleY: scaleY
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );

      // Stop slideshow
      if (self.SlideShow && self.SlideShow.isActive) {
        self.SlideShow.stop();
      }
    },

    // Scale image to fit inside parent element
    // ========================================

    scaleToFit: function (duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        end;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      end = self.getFitPos(current);

      self.updateCursor(end.width, end.height);

      $.fancybox.animate(
        $content, {
          top: end.top,
          left: end.left,
          scaleX: end.width / $content.width(),
          scaleY: end.height / $content.height()
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );
    },

    // Calculate image size to fit inside viewport
    // ===========================================

    getFitPos: function (slide) {
      var self = this,
        $content = slide.$content,
        $slide = slide.$slide,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        maxWidth,
        maxHeight,
        minRatio,
        aspectRatio,
        rez = {};

      if (!slide.isLoaded || !$content || !$content.length) {
        return false;
      }

      maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
      maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;

      maxWidth -=
        parseFloat($slide.css("paddingLeft")) +
        parseFloat($slide.css("paddingRight")) +
        parseFloat($content.css("marginLeft")) +
        parseFloat($content.css("marginRight"));

      maxHeight -=
        parseFloat($slide.css("paddingTop")) +
        parseFloat($slide.css("paddingBottom")) +
        parseFloat($content.css("marginTop")) +
        parseFloat($content.css("marginBottom"));

      if (!width || !height) {
        width = maxWidth;
        height = maxHeight;
      }

      minRatio = Math.min(1, maxWidth / width, maxHeight / height);

      width = minRatio * width;
      height = minRatio * height;

      // Adjust width/height to precisely fit into container
      if (width > maxWidth - 0.5) {
        width = maxWidth;
      }

      if (height > maxHeight - 0.5) {
        height = maxHeight;
      }

      if (slide.type === "image") {
        rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
        rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
      } else if (slide.contentType === "video") {
        // Force aspect ratio for the video
        // "I say the whole world must learn of our peaceful ways… by force!"
        aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;

        if (height > width / aspectRatio) {
          height = width / aspectRatio;
        } else if (width > height * aspectRatio) {
          width = height * aspectRatio;
        }
      }

      rez.width = width;
      rez.height = height;

      return rez;
    },

    // Update content size and position for all slides
    // ==============================================

    update: function (e) {
      var self = this;

      $.each(self.slides, function (key, slide) {
        self.updateSlide(slide, e);
      });
    },

    // Update slide content position and size
    // ======================================

    updateSlide: function (slide, e) {
      var self = this,
        $content = slide && slide.$content,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        $slide = slide.$slide;

      // First, prevent caption overlap, if needed
      self.adjustCaption(slide);

      // Then resize content to fit inside the slide
      if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
        $.fancybox.stop($content);

        $.fancybox.setTranslate($content, self.getFitPos(slide));

        if (slide.pos === self.currPos) {
          self.isAnimating = false;

          self.updateCursor();
        }
      }

      // Then some adjustments
      self.adjustLayout(slide);

      if ($slide.length) {
        $slide.trigger("refresh");

        if (slide.pos === self.currPos) {
          self.$refs.toolbar
            .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
            .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
        }
      }

      self.trigger("onUpdate", slide, e);
    },

    // Horizontally center slide
    // =========================

    centerSlide: function (duration) {
      var self = this,
        current = self.current,
        $slide = current.$slide;

      if (self.isClosing || !current) {
        return;
      }

      $slide.siblings().css({
        transform: "",
        opacity: ""
      });

      $slide
        .parent()
        .children()
        .removeClass("fancybox-slide--previous fancybox-slide--next");

      $.fancybox.animate(
        $slide, {
          top: 0,
          left: 0,
          opacity: 1
        },
        duration === undefined ? 0 : duration,
        function () {
          // Clean up
          $slide.css({
            transform: "",
            opacity: ""
          });

          if (!current.isComplete) {
            self.complete();
          }
        },
        false
      );
    },

    // Check if current slide is moved (swiped)
    // ========================================

    isMoved: function (slide) {
      var current = slide || this.current,
        slidePos,
        stagePos;

      if (!current) {
        return false;
      }

      stagePos = $.fancybox.getTranslate(this.$refs.stage);
      slidePos = $.fancybox.getTranslate(current.$slide);

      return (
        !current.$slide.hasClass("fancybox-animated") &&
        (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
      );
    },

    // Update cursor style depending if content can be zoomed
    // ======================================================

    updateCursor: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        $container = self.$refs.container,
        canPan,
        isZoomable;

      if (!current || self.isClosing || !self.Guestures) {
        return;
      }

      $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");

      canPan = self.canPan(nextWidth, nextHeight);

      isZoomable = canPan ? true : self.isZoomable();

      $container.toggleClass("fancybox-is-zoomable", isZoomable);

      $("[data-fancybox-zoom]").prop("disabled", !isZoomable);

      if (canPan) {
        $container.addClass("fancybox-can-pan");
      } else if (
        isZoomable &&
        (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
      ) {
        $container.addClass("fancybox-can-zoomIn");
      } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
        $container.addClass("fancybox-can-swipe");
      }
    },

    // Check if current slide is zoomable
    // ==================================

    isZoomable: function () {
      var self = this,
        current = self.current,
        fitPos;

      // Assume that slide is zoomable if:
      //   - image is still loading
      //   - actual size of the image is smaller than available area
      if (current && !self.isClosing && current.type === "image" && !current.hasError) {
        if (!current.isLoaded) {
          return true;
        }

        fitPos = self.getFitPos(current);

        if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
          return true;
        }
      }

      return false;
    },

    // Check if current image dimensions are smaller than actual
    // =========================================================

    isScaledDown: function (nextWidth, nextHeight) {
      var self = this,
        rez = false,
        current = self.current,
        $content = current.$content;

      if (nextWidth !== undefined && nextHeight !== undefined) {
        rez = nextWidth < current.width && nextHeight < current.height;
      } else if ($content) {
        rez = $.fancybox.getTranslate($content);
        rez = rez.width < current.width && rez.height < current.height;
      }

      return rez;
    },

    // Check if image dimensions exceed parent element
    // ===============================================

    canPan: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        pos = null,
        rez = false;

      if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
        rez = self.getFitPos(current);

        if (nextWidth !== undefined && nextHeight !== undefined) {
          pos = {
            width: nextWidth,
            height: nextHeight
          };
        } else if (current.isComplete) {
          pos = $.fancybox.getTranslate(current.$content);
        }

        if (pos && rez) {
          rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
        }
      }

      return rez;
    },

    // Load content into the slide
    // ===========================

    loadSlide: function (slide) {
      var self = this,
        type,
        $slide,
        ajaxLoad;

      if (slide.isLoading || slide.isLoaded) {
        return;
      }

      slide.isLoading = true;

      if (self.trigger("beforeLoad", slide) === false) {
        slide.isLoading = false;

        return false;
      }

      type = slide.type;
      $slide = slide.$slide;

      $slide
        .off("refresh")
        .trigger("onReset")
        .addClass(slide.opts.slideClass);

      // Create content depending on the type
      switch (type) {
        case "image":
          self.setImage(slide);

          break;

        case "iframe":
          self.setIframe(slide);

          break;

        case "html":
          self.setContent(slide, slide.src || slide.content);

          break;

        case "video":
          self.setContent(
            slide,
            slide.opts.video.tpl
            .replace(/\{\{src\}\}/gi, slide.src)
            .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
            .replace("{{poster}}", slide.thumb || "")
          );

          break;

        case "inline":
          if ($(slide.src).length) {
            self.setContent(slide, $(slide.src));
          } else {
            self.setError(slide);
          }

          break;

        case "ajax":
          self.showLoading(slide);

          ajaxLoad = $.ajax(
            $.extend({}, slide.opts.ajax.settings, {
              url: slide.src,
              success: function (data, textStatus) {
                if (textStatus === "success") {
                  self.setContent(slide, data);
                }
              },
              error: function (jqXHR, textStatus) {
                if (jqXHR && textStatus !== "abort") {
                  self.setError(slide);
                }
              }
            })
          );

          $slide.one("onReset", function () {
            ajaxLoad.abort();
          });

          break;

        default:
          self.setError(slide);

          break;
      }

      return true;
    },

    // Use thumbnail image, if possible
    // ================================

    setImage: function (slide) {
      var self = this,
        ghost;

      // Check if need to show loading icon
      setTimeout(function () {
        var $img = slide.$image;

        if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
          self.showLoading(slide);
        }
      }, 50);

      //Check if image has srcset
      self.checkSrcset(slide);

      // This will be wrapper containing both ghost and actual image
      slide.$content = $('<div class="fancybox-content"></div>')
        .addClass("fancybox-is-hidden")
        .appendTo(slide.$slide.addClass("fancybox-slide--image"));

      // If we have a thumbnail, we can display it while actual image is loading
      // Users will not stare at black screen and actual image will appear gradually
      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;

        ghost = document.createElement("img");

        ghost.onerror = function () {
          $(this).remove();

          slide.$ghost = null;
        };

        ghost.onload = function () {
          self.afterLoad(slide);
        };

        slide.$ghost = $(ghost)
          .addClass("fancybox-image")
          .appendTo(slide.$content)
          .attr("src", slide.thumb);
      }

      // Start loading actual image
      self.setBigImage(slide);
    },

    // Check if image has srcset and get the source
    // ============================================
    checkSrcset: function (slide) {
      var srcset = slide.opts.srcset || slide.opts.image.srcset,
        found,
        temp,
        pxRatio,
        windowWidth;

      // If we have "srcset", then we need to find first matching "src" value.
      // This is necessary, because when you set an src attribute, the browser will preload the image
      // before any javascript or even CSS is applied.
      if (srcset) {
        pxRatio = window.devicePixelRatio || 1;
        windowWidth = window.innerWidth * pxRatio;

        temp = srcset.split(",").map(function (el) {
          var ret = {};

          el.trim()
            .split(/\s+/)
            .forEach(function (el, i) {
              var value = parseInt(el.substring(0, el.length - 1), 10);

              if (i === 0) {
                return (ret.url = el);
              }

              if (value) {
                ret.value = value;
                ret.postfix = el[el.length - 1];
              }
            });

          return ret;
        });

        // Sort by value
        temp.sort(function (a, b) {
          return a.value - b.value;
        });

        // Ok, now we have an array of all srcset values
        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];

          if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
            found = el;
            break;
          }
        }

        // If not found, take the last one
        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }

        if (found) {
          slide.src = found.url;

          // If we have default width/height values, we can calculate height for matching source
          if (slide.width && slide.height && found.postfix == "w") {
            slide.height = (slide.width / slide.height) * found.value;
            slide.width = found.value;
          }

          slide.opts.srcset = srcset;
        }
      }
    },

    // Create full-size image
    // ======================

    setBigImage: function (slide) {
      var self = this,
        img = document.createElement("img"),
        $img = $(img);

      slide.$image = $img
        .one("error", function () {
          self.setError(slide);
        })
        .one("load", function () {
          var sizes;

          if (!slide.$ghost) {
            self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);

            self.afterLoad(slide);
          }

          if (self.isClosing) {
            return;
          }

          if (slide.opts.srcset) {
            sizes = slide.opts.sizes;

            if (!sizes || sizes === "auto") {
              sizes =
                (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
                "vw";
            }

            $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
          }

          // Hide temporary image after some delay
          if (slide.$ghost) {
            setTimeout(function () {
              if (slide.$ghost && !self.isClosing) {
                slide.$ghost.hide();
              }
            }, Math.min(300, Math.max(1000, slide.height / 1600)));
          }

          self.hideLoading(slide);
        })
        .addClass("fancybox-image")
        .attr("src", slide.src)
        .appendTo(slide.$content);

      if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
        $img.trigger("load");
      } else if (img.error) {
        $img.trigger("error");
      }
    },

    // Computes the slide size from image size and maxWidth/maxHeight
    // ==============================================================

    resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
      var maxWidth = parseInt(slide.opts.width, 10),
        maxHeight = parseInt(slide.opts.height, 10);

      // Sets the default values from the image
      slide.width = imgWidth;
      slide.height = imgHeight;

      if (maxWidth > 0) {
        slide.width = maxWidth;
        slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
      }

      if (maxHeight > 0) {
        slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
        slide.height = maxHeight;
      }
    },

    // Create iframe wrapper, iframe and bindings
    // ==========================================

    setIframe: function (slide) {
      var self = this,
        opts = slide.opts.iframe,
        $slide = slide.$slide,
        $iframe;

      slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
        .css(opts.css)
        .appendTo($slide);

      $slide.addClass("fancybox-slide--" + slide.contentType);

      slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
        .attr(opts.attr)
        .appendTo(slide.$content);

      if (opts.preload) {
        self.showLoading(slide);

        // Unfortunately, it is not always possible to determine if iframe is successfully loaded
        // (due to browser security policy)

        $iframe.on("load.fb error.fb", function (e) {
          this.isReady = 1;

          slide.$slide.trigger("refresh");

          self.afterLoad(slide);
        });

        // Recalculate iframe content size
        // ===============================

        $slide.on("refresh.fb", function () {
          var $content = slide.$content,
            frameWidth = opts.css.width,
            frameHeight = opts.css.height,
            $contents,
            $body;

          if ($iframe[0].isReady !== 1) {
            return;
          }

          try {
            $contents = $iframe.contents();
            $body = $contents.find("body");
          } catch (ignore) {}

          // Calculate content dimensions, if it is accessible
          if ($body && $body.length && $body.children().length) {
            // Avoid scrolling to top (if multiple instances)
            $slide.css("overflow", "visible");

            $content.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            });

            if (frameWidth === undefined) {
              frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
            }

            $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");

            if (frameHeight === undefined) {
              frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
            }

            $content.css("height", frameHeight ? frameHeight : "");

            $slide.css("overflow", "auto");
          }

          $content.removeClass("fancybox-is-hidden");
        });
      } else {
        self.afterLoad(slide);
      }

      $iframe.attr("src", slide.src);

      // Remove iframe if closing or changing gallery item
      $slide.one("onReset", function () {
        // This helps IE not to throw errors when closing
        try {
          $(this)
            .find("iframe")
            .hide()
            .unbind()
            .attr("src", "//about:blank");
        } catch (ignore) {}

        $(this)
          .off("refresh.fb")
          .empty();

        slide.isLoaded = false;
        slide.isRevealed = false;
      });
    },

    // Wrap and append content to the slide
    // ======================================

    setContent: function (slide, content) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      self.hideLoading(slide);

      if (slide.$content) {
        $.fancybox.stop(slide.$content);
      }

      slide.$slide.empty();

      // If content is a jQuery object, then it will be moved to the slide.
      // The placeholder is created so we will know where to put it back.
      if (isQuery(content) && content.parent().length) {
        // Make sure content is not already moved to fancyBox
        if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
          content.parents(".fancybox-slide").trigger("onReset");
        }

        // Create temporary element marking original place of the content
        slide.$placeholder = $("<div>")
          .hide()
          .insertAfter(content);

        // Make sure content is visible
        content.css("display", "inline-block");
      } else if (!slide.hasError) {
        // If content is just a plain text, try to convert it to html
        if ($.type(content) === "string") {
          content = $("<div>")
            .append(Mkt.Util.trim(content))
            .contents();
        }

        // If "filter" option is provided, then filter content
        if (slide.opts.filter) {
          content = $("<div>")
            .html(content)
            .find(slide.opts.filter);
        }
      }

      slide.$slide.one("onReset", function () {
        // Pause all html5 video/audio
        $(this)
          .find("video,audio")
          .trigger("pause");

        // Put content back
        if (slide.$placeholder) {
          slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();

          slide.$placeholder = null;
        }

        // Remove custom close button
        if (slide.$smallBtn) {
          slide.$smallBtn.remove();

          slide.$smallBtn = null;
        }

        // Remove content and mark slide as not loaded
        if (!slide.hasError) {
          $(this).empty();

          slide.isLoaded = false;
          slide.isRevealed = false;
        }
      });

      $(content).appendTo(slide.$slide);

      if ($(content).is("video,audio")) {
        $(content).addClass("fancybox-video");

        $(content).wrap("<div></div>");

        slide.contentType = "video";

        slide.opts.width = slide.opts.width || $(content).attr("width");
        slide.opts.height = slide.opts.height || $(content).attr("height");
      }

      slide.$content = slide.$slide
        .children()
        .filter("div,form,main,video,audio,article,.fancybox-content")
        .first();

      slide.$content.siblings().hide();

      // Re-check if there is a valid content
      // (in some cases, ajax response can contain various elements or plain text)
      if (!slide.$content.length) {
        slide.$content = slide.$slide
          .wrapInner("<div></div>")
          .children()
          .first();
      }

      slide.$content.addClass("fancybox-content");

      slide.$slide.addClass("fancybox-slide--" + slide.contentType);

      self.afterLoad(slide);
    },

    // Display error message
    // =====================

    setError: function (slide) {
      slide.hasError = true;

      slide.$slide
        .trigger("onReset")
        .removeClass("fancybox-slide--" + slide.contentType)
        .addClass("fancybox-slide--error");

      slide.contentType = "html";

      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));

      if (slide.pos === this.currPos) {
        this.isAnimating = false;
      }
    },

    // Show loading icon inside the slide
    // ==================================

    showLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && !slide.$spinner) {
        slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
          .appendTo(slide.$slide)
          .hide()
          .fadeIn("fast");
      }
    },

    // Remove loading icon from the slide
    // ==================================

    hideLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && slide.$spinner) {
        slide.$spinner.stop().remove();

        delete slide.$spinner;
      }
    },

    // Adjustments after slide content has been loaded
    // ===============================================

    afterLoad: function (slide) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      slide.isLoading = false;
      slide.isLoaded = true;

      self.trigger("afterLoad", slide);

      self.hideLoading(slide);

      // Add small close button
      if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
      }

      // Disable right click
      if (slide.opts.protect && slide.$content && !slide.hasError) {
        slide.$content.on("contextmenu.fb", function (e) {
          if (e.button == 2) {
            e.preventDefault();
          }

          return true;
        });

        // Add fake element on top of the image
        // This makes a bit harder for user to select image
        if (slide.type === "image") {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }

      self.adjustCaption(slide);

      self.adjustLayout(slide);

      if (slide.pos === self.currPos) {
        self.updateCursor();
      }

      self.revealContent(slide);
    },

    // Prevent caption overlap,
    // fix css inconsistency across browsers
    // =====================================

    adjustCaption: function (slide) {
      var self = this,
        current = slide || self.current,
        caption = current.opts.caption,
        preventOverlap = current.opts.preventCaptionOverlap,
        $caption = self.$refs.caption,
        $clone,
        captionH = false;

      $caption.toggleClass("fancybox-caption--separate", preventOverlap);

      if (preventOverlap && caption && caption.length) {
        if (current.pos !== self.currPos) {
          $clone = $caption.clone().appendTo($caption.parent());

          $clone
            .children()
            .eq(0)
            .empty()
            .html(caption);

          captionH = $clone.outerHeight(true);

          $clone.empty().remove();
        } else if (self.$caption) {
          captionH = self.$caption.outerHeight(true);
        }

        current.$slide.css("padding-bottom", captionH || "");
      }
    },

    // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
    // ====================================================================================

    adjustLayout: function (slide) {
      var self = this,
        current = slide || self.current,
        scrollHeight,
        marginBottom,
        inlinePadding,
        actualPadding;

      if (current.isLoaded && current.opts.disableLayoutFix !== true) {
        current.$content.css("margin-bottom", "");

        // If we would always set margin-bottom for the content,
        // then it would potentially break vertical align
        if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
          inlinePadding = current.$slide[0].style["padding-bottom"];
          actualPadding = current.$slide.css("padding-bottom");

          if (parseFloat(actualPadding) > 0) {
            scrollHeight = current.$slide[0].scrollHeight;

            current.$slide.css("padding-bottom", 0);

            if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
              marginBottom = actualPadding;
            }

            current.$slide.css("padding-bottom", inlinePadding);
          }
        }

        current.$content.css("margin-bottom", marginBottom);
      }
    },

    // Make content visible
    // This method is called right after content has been loaded or
    // user navigates gallery and transition should start
    // ============================================================

    revealContent: function (slide) {
      var self = this,
        $slide = slide.$slide,
        end = false,
        start = false,
        isMoved = self.isMoved(slide),
        isRevealed = slide.isRevealed,
        effect,
        effectClassName,
        duration,
        opacity;

      slide.isRevealed = true;

      effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
      duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];

      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

      if (isMoved || slide.pos !== self.currPos || !duration) {
        effect = false;
      }

      // Check if can zoom
      if (effect === "zoom") {
        if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
          end = self.getFitPos(slide);
        } else {
          effect = "fade";
        }
      }

      // Zoom animation
      // ==============
      if (effect === "zoom") {
        self.isAnimating = true;

        end.scaleX = end.width / start.width;
        end.scaleY = end.height / start.height;

        // Check if we need to animate opacity
        opacity = slide.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }

        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        }

        // Draw image at start position
        $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);

        forceRedraw(slide.$content);

        // Start animation
        $.fancybox.animate(slide.$content, end, duration, function () {
          self.isAnimating = false;

          self.complete();
        });

        return;
      }

      self.updateSlide(slide);

      // Simply show content if no effect
      // ================================
      if (!effect) {
        slide.$content.removeClass("fancybox-is-hidden");

        if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
          slide.$content.hide().fadeIn("fast");
        }

        if (slide.pos === self.currPos) {
          self.complete();
        }

        return;
      }

      // Prepare for CSS transiton
      // =========================
      $.fancybox.stop($slide);

      //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
      effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;

      $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

      slide.$content.removeClass("fancybox-is-hidden");

      // Force reflow
      forceRedraw($slide);

      if (slide.type !== "image") {
        slide.$content.hide().show(0);
      }

      $.fancybox.animate(
        $slide,
        "fancybox-slide--current",
        duration,
        function () {
          $slide.removeClass(effectClassName).css({
            transform: "",
            opacity: ""
          });

          if (slide.pos === self.currPos) {
            self.complete();
          }
        },
        true
      );
    },

    // Check if we can and have to zoom from thumbnail
    //================================================

    getThumbPos: function (slide) {
      var rez = false,
        $thumb = slide.$thumb,
        thumbPos,
        btw,
        brw,
        bbw,
        blw;

      if (!$thumb || !inViewport($thumb[0])) {
        return false;
      }

      thumbPos = $.fancybox.getTranslate($thumb);

      btw = parseFloat($thumb.css("border-top-width") || 0);
      brw = parseFloat($thumb.css("border-right-width") || 0);
      bbw = parseFloat($thumb.css("border-bottom-width") || 0);
      blw = parseFloat($thumb.css("border-left-width") || 0);

      rez = {
        top: thumbPos.top + btw,
        left: thumbPos.left + blw,
        width: thumbPos.width - brw - blw,
        height: thumbPos.height - btw - bbw,
        scaleX: 1,
        scaleY: 1
      };

      return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
    },

    // Final adjustments after current gallery item is moved to position
    // and it`s content is loaded
    // ==================================================================

    complete: function () {
      var self = this,
        current = self.current,
        slides = {},
        $el;

      if (self.isMoved() || !current.isLoaded) {
        return;
      }

      if (!current.isComplete) {
        current.isComplete = true;

        current.$slide.siblings().trigger("onReset");

        self.preload("inline");

        // Trigger any CSS transiton inside the slide
        forceRedraw(current.$slide);

        current.$slide.addClass("fancybox-slide--complete");

        // Remove unnecessary slides
        $.each(self.slides, function (key, slide) {
          if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
            slides[slide.pos] = slide;
          } else if (slide) {
            $.fancybox.stop(slide.$slide);

            slide.$slide.off().remove();
          }
        });

        self.slides = slides;
      }

      self.isAnimating = false;

      self.updateCursor();

      self.trigger("afterShow");

      // Autoplay first html5 video/audio
      if (!!current.opts.video.autoStart) {
        current.$slide
          .find("video,audio")
          .filter(":visible:first")
          .trigger("play")
          .one("ended", function () {
            if (Document.exitFullscreen) {
              Document.exitFullscreen();
            } else if (this.webkitExitFullscreen) {
              this.webkitExitFullscreen();
            }

            self.next();
          });
      }

      // Try to focus on the first focusable element
      if (current.opts.autoFocus && current.contentType === "html") {
        // Look for the first input with autofocus attribute
        $el = current.$content.find("input[autofocus]:enabled:visible:first");

        if ($el.length) {
          $el.trigger("focus");
        } else {
          self.focus(null, true);
        }
      }

      // Avoid jumping
      current.$slide.scrollTop(0).scrollLeft(0);
    },

    // Preload next and previous slides
    // ================================

    preload: function (type) {
      var self = this,
        prev,
        next;

      if (self.group.length < 2) {
        return;
      }

      next = self.slides[self.currPos + 1];
      prev = self.slides[self.currPos - 1];

      if (prev && prev.type === type) {
        self.loadSlide(prev);
      }

      if (next && next.type === type) {
        self.loadSlide(next);
      }
    },

    // Try to find and focus on the first focusable element
    // ====================================================

    focus: function (e, firstRun) {
      var self = this,
        focusableStr = [
          "a[href]",
          "area[href]",
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          "select:not([disabled]):not([aria-hidden])",
          "textarea:not([disabled]):not([aria-hidden])",
          "button:not([disabled]):not([aria-hidden])",
          "iframe",
          "object",
          "embed",
          "video",
          "audio",
          "[contenteditable]",
          '[tabindex]:not([tabindex^="-"])'
        ].join(","),
        focusableItems,
        focusedItemIndex;

      if (self.isClosing) {
        return;
      }

      if (e || !self.current || !self.current.isComplete) {
        // Focus on any element inside fancybox
        focusableItems = self.$refs.container.find("*:visible");
      } else {
        // Focus inside current slide
        focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
      }

      focusableItems = focusableItems.filter(focusableStr).filter(function () {
        return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
      });

      if (focusableItems.length) {
        focusedItemIndex = focusableItems.index(document.activeElement);

        if (e && e.shiftKey) {
          // Back tab
          if (focusedItemIndex < 0 || focusedItemIndex == 0) {
            e.preventDefault();

            focusableItems.eq(focusableItems.length - 1).trigger("focus");
          }
        } else {
          // Outside or Forward tab
          if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
            if (e) {
              e.preventDefault();
            }

            focusableItems.eq(0).trigger("focus");
          }
        }
      } else {
        self.$refs.container.trigger("focus");
      }
    },

    // Activates current instance - brings container to the front and enables keyboard,
    // notifies other instances about deactivating
    // =================================================================================

    activate: function () {
      var self = this;

      // Deactivate all instances
      $(".fancybox-container").each(function () {
        var instance = $(this).data("FancyBox");

        // Skip self and closing instances
        if (instance && instance.id !== self.id && !instance.isClosing) {
          instance.trigger("onDeactivate");

          instance.removeEvents();

          instance.isVisible = false;
        }
      });

      self.isVisible = true;

      if (self.current || self.isIdle) {
        self.update();

        self.updateControls();
      }

      self.trigger("onActivate");

      self.addEvents();
    },

    // Start closing procedure
    // This will start "zoom-out" animation if needed and clean everything up afterwards
    // =================================================================================

    close: function (e, d) {
      var self = this,
        current = self.current,
        effect,
        duration,
        $content,
        domRect,
        opacity,
        start,
        end;

      var done = function () {
        self.cleanUp(e);
      };

      if (self.isClosing) {
        return false;
      }

      self.isClosing = true;

      // If beforeClose callback prevents closing, make sure content is centered
      if (self.trigger("beforeClose", e) === false) {
        self.isClosing = false;

        requestAFrame(function () {
          self.update();
        });

        return false;
      }

      // Remove all events
      // If there are multiple instances, they will be set again by "activate" method
      self.removeEvents();

      $content = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;

      current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");

      if (e !== true) {
        $.fancybox.stop(current.$slide);
      } else {
        effect = false;
      }

      // Remove other slides
      current.$slide
        .siblings()
        .trigger("onReset")
        .remove();

      // Trigger animations
      if (duration) {
        self.$refs.container
          .removeClass("fancybox-is-open")
          .addClass("fancybox-is-closing")
          .css("transition-duration", duration + "ms");
      }

      // Clean up
      self.hideLoading(current);

      self.hideControls(true);

      self.updateCursor();

      // Check if possible to zoom-out
      if (
        effect === "zoom" &&
        !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
      ) {
        effect = "fade";
      }

      if (effect === "zoom") {
        $.fancybox.stop($content);

        domRect = $.fancybox.getTranslate($content);

        start = {
          top: domRect.top,
          left: domRect.left,
          scaleX: domRect.width / end.width,
          scaleY: domRect.height / end.height,
          width: end.width,
          height: end.height
        };

        // Check if we need to animate opacity
        opacity = current.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }

        if (opacity) {
          end.opacity = 0;
        }

        $.fancybox.setTranslate($content, start);

        forceRedraw($content);

        $.fancybox.animate($content, end, duration, done);

        return true;
      }

      if (effect && duration) {
        $.fancybox.animate(
          current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
          "fancybox-animated fancybox-fx-" + effect,
          duration,
          done
        );
      } else {
        // If skip animation
        if (e === true) {
          setTimeout(done, duration);
        } else {
          done();
        }
      }

      return true;
    },

    // Final adjustments after removing the instance
    // =============================================

    cleanUp: function (e) {
      var self = this,
        instance,
        $focus = self.current.opts.$orig,
        x,
        y;

      self.current.$slide.trigger("onReset");

      self.$refs.container.empty().remove();

      self.trigger("afterClose", e);

      // Place back focus
      if (!!self.current.opts.backFocus) {
        if (!$focus || !$focus.length || !$focus.is(":visible")) {
          $focus = self.$trigger;
        }

        if ($focus && $focus.length) {
          x = window.scrollX;
          y = window.scrollY;

          $focus.trigger("focus");

          $("html, body")
            .scrollTop(y)
            .scrollLeft(x);
        }
      }

      self.current = null;

      // Check if there are other instances
      instance = $.fancybox.getInstance();

      if (instance) {
        instance.activate();
      } else {
        $("body").removeClass("fancybox-active compensate-for-scrollbar");

        $("#fancybox-style-noscroll").remove();
      }
    },

    // Call callback and trigger an event
    // ==================================

    trigger: function (name, slide) {
      var args = Array.prototype.slice.call(arguments, 1),
        self = this,
        obj = slide && slide.opts ? slide : self.current,
        rez;

      if (obj) {
        args.unshift(obj);
      } else {
        obj = self;
      }

      args.unshift(self);

      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }

      if (rez === false) {
        return rez;
      }

      if (name === "afterClose" || !self.$refs) {
        $D.trigger(name + ".fb", args);
      } else {
        self.$refs.container.trigger(name + ".fb", args);
      }
    },

    // Update infobar values, navigation button states and reveal caption
    // ==================================================================

    updateControls: function () {
      var self = this,
        current = self.current,
        index = current.index,
        $container = self.$refs.container,
        $caption = self.$refs.caption,
        caption = current.opts.caption;

      // Recalculate content dimensions
      current.$slide.trigger("refresh");

      // Set caption
      if (caption && caption.length) {
        self.$caption = $caption;

        $caption
          .children()
          .eq(0)
          .html(caption);
      } else {
        self.$caption = null;
      }

      if (!self.hasHiddenControls && !self.isIdle) {
        self.showControls();
      }

      // Update info and navigation elements
      $container.find("[data-fancybox-count]").html(self.group.length);
      $container.find("[data-fancybox-index]").html(index + 1);

      $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
      $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);

      if (current.type === "image") {
        // Re-enable buttons; update download button source
        $container
          .find("[data-fancybox-zoom]")
          .show()
          .end()
          .find("[data-fancybox-download]")
          .attr("href", current.opts.image.src || current.src)
          .show();
      } else if (current.opts.toolbar) {
        $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      }

      // Make sure focus is not on disabled button/element
      if ($(document.activeElement).is(":hidden,[disabled]")) {
        self.$refs.container.trigger("focus");
      }
    },

    // Hide toolbar and caption
    // ========================

    hideControls: function (andCaption) {
      var self = this,
        arr = ["infobar", "toolbar", "nav"];

      if (andCaption || !self.current.opts.preventCaptionOverlap) {
        arr.push("caption");
      }

      this.$refs.container.removeClass(
        arr
        .map(function (i) {
          return "fancybox-show-" + i;
        })
        .join(" ")
      );

      this.hasHiddenControls = true;
    },

    showControls: function () {
      var self = this,
        opts = self.current ? self.current.opts : self.opts,
        $container = self.$refs.container;

      self.hasHiddenControls = false;
      self.idleSecondsCounter = 0;

      $container
        .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
        .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
        .toggleClass("fancybox-show-caption", !!self.$caption)
        .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
        .toggleClass("fancybox-is-modal", !!opts.modal);
    },

    // Toggle toolbar and caption
    // ==========================

    toggleControls: function () {
      if (this.hasHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });

  $.fancybox = {
    version: "3.5.7",
    defaults: defaults,

    // Get current instance and execute a command.
    //
    // Examples of usage:
    //
    //   $instance = $.fancybox.getInstance();
    //   $.fancybox.getInstance().jumpTo( 1 );
    //   $.fancybox.getInstance( 'jumpTo', 1 );
    //   $.fancybox.getInstance( function() {
    //       console.info( this.currIndex );
    //   });
    // ======================================================

    getInstance: function (command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
        args = Array.prototype.slice.call(arguments, 1);

      if (instance instanceof FancyBox) {
        if ($.type(command) === "string") {
          instance[command].apply(instance, args);
        } else if ($.type(command) === "function") {
          command.apply(instance, args);
        }

        return instance;
      }

      return false;
    },

    // Create new instance
    // ===================

    open: function (items, opts, index) {
      return new FancyBox(items, opts, index);
    },

    // Close current or all instances
    // ==============================

    close: function (all) {
      var instance = this.getInstance();

      if (instance) {
        instance.close();

        // Try to find and close next instance
        if (all === true) {
          this.close(all);
        }
      }
    },

    // Close all instances and unbind all events
    // =========================================

    destroy: function () {
      this.close(true);

      $D.add("body").off("click.fb-start", "**");
    },

    // Try to detect mobile devices
    // ============================

    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

    // Detect if 'translate3d' support is available
    // ============================================

    use3d: (function () {
      var div = document.createElement("div");

      return (
        window.getComputedStyle &&
        window.getComputedStyle(div) &&
        window.getComputedStyle(div).getPropertyValue("transform") &&
        !(document.documentMode && document.documentMode < 11)
      );
    })(),

    // Helper function to get current visual state of an element
    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
    // =====================================================================

    getTranslate: function ($el) {
      var domRect;

      if (!$el || !$el.length) {
        return false;
      }

      domRect = $el[0].getBoundingClientRect();

      return {
        top: domRect.top || 0,
        left: domRect.left || 0,
        width: domRect.width,
        height: domRect.height,
        opacity: parseFloat($el.css("opacity"))
      };
    },

    // Shortcut for setting "translate3d" properties for element
    // Can set be used to set opacity, too
    // ========================================================

    setTranslate: function ($el, props) {
      var str = "",
        css = {};

      if (!$el || !props) {
        return;
      }

      if (props.left !== undefined || props.top !== undefined) {
        str =
          (props.left === undefined ? $el.position().left : props.left) +
          "px, " +
          (props.top === undefined ? $el.position().top : props.top) +
          "px";

        if (this.use3d) {
          str = "translate3d(" + str + ", 0px)";
        } else {
          str = "translate(" + str + ")";
        }
      }

      if (props.scaleX !== undefined && props.scaleY !== undefined) {
        str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
      } else if (props.scaleX !== undefined) {
        str += " scaleX(" + props.scaleX + ")";
      }

      if (str.length) {
        css.transform = str;
      }

      if (props.opacity !== undefined) {
        css.opacity = props.opacity;
      }

      if (props.width !== undefined) {
        css.width = props.width;
      }

      if (props.height !== undefined) {
        css.height = props.height;
      }

      return $el.css(css);
    },

    // Simple CSS transition handler
    // =============================

    animate: function ($el, to, duration, callback, leaveAnimationName) {
      var self = this,
        from;

      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }

      self.stop($el);

      from = self.getTranslate($el);

      $el.on(transitionEnd, function (e) {
        // Skip events from child elements and z-index change
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
          return;
        }

        self.stop($el);

        if ($.isNumeric(duration)) {
          $el.css("transition-duration", "");
        }

        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            self.setTranslate($el, {
              top: to.top,
              left: to.left,
              width: from.width * to.scaleX,
              height: from.height * to.scaleY,
              scaleX: 1,
              scaleY: 1
            });
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }

        if ($.isFunction(callback)) {
          callback(e);
        }
      });

      if ($.isNumeric(duration)) {
        $el.css("transition-duration", duration + "ms");
      }

      // Start animation by changing CSS properties or class name
      if ($.isPlainObject(to)) {
        if (to.scaleX !== undefined && to.scaleY !== undefined) {
          delete to.width;
          delete to.height;

          if ($el.parent().hasClass("fancybox-slide--image")) {
            $el.parent().addClass("fancybox-is-scaling");
          }
        }

        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      }

      // Make sure that `transitionend` callback gets fired
      $el.data(
        "timer",
        setTimeout(function () {
          $el.trigger(transitionEnd);
        }, duration + 33)
      );
    },

    stop: function ($el, callCallback) {
      if ($el && $el.length) {
        clearTimeout($el.data("timer"));

        if (callCallback) {
          $el.trigger(transitionEnd);
        }

        $el.off(transitionEnd).css("transition-duration", "");

        $el.parent().removeClass("fancybox-is-scaling");
      }
    }
  };

  // Default click handler for "fancyboxed" links
  // ============================================

  function _run(e, opts) {
    var items = [],
      index = 0,
      $target,
      value,
      instance;

    // Avoid opening multiple times
    if (e && e.isDefaultPrevented()) {
      return;
    }

    e.preventDefault();

    opts = opts || {};

    if (e && e.data) {
      opts = mergeOpts(e.data.options, opts);
    }

    $target = opts.$target || $(e.currentTarget).trigger("blur");
    instance = $.fancybox.getInstance();

    if (instance && instance.$trigger && instance.$trigger.is($target)) {
      return;
    }

    if (opts.selector) {
      items = $(opts.selector);
    } else {
      // Get all related items and find index for clicked one
      value = $target.attr("data-fancybox") || "";

      if (value) {
        items = e.data ? e.data.items : [];
        items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      } else {
        items = [$target];
      }
    }

    index = $(items).index($target);

    // Sometimes current item can not be found
    if (index < 0) {
      index = 0;
    }

    instance = $.fancybox.open(items, opts, index);

    // Save last active element
    instance.$trigger = $target;
  }

  // Create a jQuery plugin
  // ======================

  $.fn.fancybox = function (options) {
    var selector;

    options = options || {};
    selector = options.selector || false;

    if (selector) {
      // Use body element instead of document so it executes first
      $("body")
        .off("click.fb-start", selector)
        .on("click.fb-start", selector, {
          options: options
        }, _run);
    } else {
      this.off("click.fb-start").on(
        "click.fb-start", {
          items: this,
          options: options
        },
        _run
      );
    }

    return this;
  };

  // Self initializing plugin for all elements having `data-fancybox` attribute
  // ==========================================================================

  $D.on("click.fb-start", "[data-fancybox]", _run);

  // Enable "trigger elements"
  // =========================

  $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
    $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
      .eq($(this).attr("data-fancybox-index") || 0)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });
  });

  // Track focus event for better accessibility styling
  // ==================================================
  (function () {
    var buttonStr = ".fancybox-button",
      focusStr = "fancybox-focus",
      $pressed = null;

    $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
      switch (e.type) {
        case "mousedown":
          $pressed = $(this);
          break;
        case "mouseup":
          $pressed = null;
          break;
        case "focusin":
          $(buttonStr).removeClass(focusStr);

          if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
            $(this).addClass(focusStr);
          }
          break;
        case "focusout":
          $(buttonStr).removeClass(focusStr);
          break;
      }
    });
  })();
})(window, document, jQuery);
// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
(function ($) {
  "use strict";

  // Object containing properties for each media type
  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },

    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },

    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },

    // Examples:
    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
    // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function (rez) {
        return (
          "//maps.google." +
          rez[2] +
          "/?ll=" +
          (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
          "&output=" +
          (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
        );
      }
    },

    // Examples:
    // https://www.google.com/maps/search/Empire+State+Building/
    // https://www.google.com/maps/search/?api=1&query=centurylink+field
    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function (rez) {
        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };

  // Formats matching url to final form
  var format = function (url, rez, params) {
    if (!url) {
      return;
    }

    params = params || "";

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function (key, value) {
      url = url.replace("$" + key, value || "");
    });

    if (params.length) {
      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
    }

    return url;
  };

  $(document).on("objectNeedsType.fb", function (e, instance, item) {
    var url = item.src || "",
      type = false,
      media,
      thumb,
      rez,
      params,
      urlParams,
      paramObj,
      provider;

    media = $.extend(true, {}, defaults, item.opts.media);

    // Look for any matching media type
    $.each(media, function (providerName, providerOpts) {
      rez = url.match(providerOpts.matcher);

      if (!rez) {
        return;
      }

      type = providerOpts.type;
      provider = providerName;
      paramObj = {};

      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
        urlParams = rez[providerOpts.paramPlace];

        if (urlParams[0] == "?") {
          urlParams = urlParams.substring(1);
        }

        urlParams = urlParams.split("&");

        for (var m = 0; m < urlParams.length; ++m) {
          var p = urlParams[m].split("=", 2);

          if (p.length == 2) {
            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
        }
      }

      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);

      url =
        $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);

      thumb =
        $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

      if (providerName === "youtube") {
        url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
          return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
        });
      } else if (providerName === "vimeo") {
        url = url.replace("&%23", "#");
      }

      return false;
    });

    // If it is found, then change content type and update the url

    if (type) {
      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
        item.opts.thumb = thumb;
      }

      if (type === "iframe") {
        item.opts = $.extend(true, item.opts, {
          iframe: {
            preload: false,
            attr: {
              scrolling: "no"
            }
          }
        });
      }

      $.extend(item, {
        type: type,
        src: url,
        origSrc: item.src,
        contentSource: provider,
        contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
      });
    } else if (url) {
      item.type = item.opts.defaultType;
    }
  });

  // Load YouTube/Video API on request to detect when video finished playing
  var VideoAPILoader = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: false,
      loaded: false
    },

    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: false,
      loaded: false
    },

    load: function (vendor) {
      var _this = this,
        script;

      if (this[vendor].loaded) {
        setTimeout(function () {
          _this.done(vendor);
        });
        return;
      }

      if (this[vendor].loading) {
        return;
      }

      this[vendor].loading = true;

      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = this[vendor].src;

      if (vendor === "youtube") {
        window.onYouTubeIframeAPIReady = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      } else {
        script.onload = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      }

      document.body.appendChild(script);
    },
    done: function (vendor) {
      var instance, $el, player;

      if (vendor === "youtube") {
        delete window.onYouTubeIframeAPIReady;
      }

      instance = $.fancybox.getInstance();

      if (instance) {
        $el = instance.current.$content.find("iframe");

        if (vendor === "youtube" && YT !== undefined && YT) {
          player = new YT.Player($el.attr("id"), {
            events: {
              onStateChange: function (e) {
                if (e.data == 0) {
                  instance.next();
                }
              }
            }
          });
        } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
          player = new Vimeo.Player($el);

          player.on("ended", function () {
            instance.next();
          });
        }
      }
    }
  };

  $(document).on({
    "afterShow.fb": function (e, instance, current) {
      if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
        VideoAPILoader.load(current.contentSource);
      }
    }
  });
})(jQuery);
// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  var getPointerXY = function (e) {
    var result = [];

    e = e.originalEvent || e || window.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var key in e) {
      if (e[key].pageX) {
        result.push({
          x: e[key].pageX,
          y: e[key].pageY
        });
      } else if (e[key].clientX) {
        result.push({
          x: e[key].clientX,
          y: e[key].clientY
        });
      }
    }

    return result;
  };

  var distance = function (point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }

    if (what === "x") {
      return point2.x - point1.x;
    } else if (what === "y") {
      return point2.y - point1.y;
    }

    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };

  var isClickable = function ($el) {
    if (
      $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
      $.isFunction($el.get(0).onclick) ||
      $el.data("selectable")
    ) {
      return true;
    }

    // Check for attributes like data-fancybox-next or data-fancybox-close
    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
        return true;
      }
    }

    return false;
  };

  var hasScrollbars = function (el) {
    var overflowY = window.getComputedStyle(el)["overflow-y"],
      overflowX = window.getComputedStyle(el)["overflow-x"],
      vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
      horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;

    return vertical || horizontal;
  };

  var isScrollable = function ($el) {
    var rez = false;

    while (true) {
      rez = hasScrollbars($el.get(0));

      if (rez) {
        break;
      }

      $el = $el.parent();

      if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
        break;
      }
    }

    return rez;
  };

  var Guestures = function (instance) {
    var self = this;

    self.instance = instance;

    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;

    self.destroy();

    self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
  };

  Guestures.prototype.destroy = function () {
    var self = this;

    self.$container.off(".fb.touch");

    $(document).off(".fb.touch");

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    if (self.tapped) {
      clearTimeout(self.tapped);
      self.tapped = null;
    }
  };

  Guestures.prototype.ontouchstart = function (e) {
    var self = this,
      $target = $(e.target),
      instance = self.instance,
      current = instance.current,
      $slide = current.$slide,
      $content = current.$content,
      isTouchDevice = e.type == "touchstart";

    // Do not respond to both (touch and mouse) events
    if (isTouchDevice) {
      self.$container.off("mousedown.fb.touch");
    }

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Ignore taping on links, buttons, input elements
    if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    }
    // Ignore clicks on the scrollbar
    if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Ignore clicks while zooming or closing
    if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
      e.stopPropagation();
      e.preventDefault();

      return;
    }

    self.realPoints = self.startPoints = getPointerXY(e);

    if (!self.startPoints.length) {
      return;
    }

    // Allow other scripts to catch touch event if "touch" is set to false
    if (current.touch) {
      e.stopPropagation();
    }

    self.startEvent = e;

    self.canTap = true;
    self.$target = $target;
    self.$content = $content;
    self.opts = current.opts.touch;

    self.isPanning = false;
    self.isSwiping = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.canPan = instance.canPan();

    self.startTime = new Date().getTime();
    self.distanceX = self.distanceY = self.distance = 0;

    self.canvasWidth = Math.round($slide[0].clientWidth);
    self.canvasHeight = Math.round($slide[0].clientHeight);

    self.contentLastPos = null;
    self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
      top: 0,
      left: 0
    };
    self.sliderStartPos = $.fancybox.getTranslate($slide);

    // Since position will be absolute, but we need to make it relative to the stage
    self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);

    self.sliderStartPos.top -= self.stagePos.top;
    self.sliderStartPos.left -= self.stagePos.left;

    self.contentStartPos.top -= self.stagePos.top;
    self.contentStartPos.left -= self.stagePos.left;

    $(document)
      .off(".fb.touch")
      .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
      .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));

    if ($.fancybox.isMobile) {
      document.addEventListener("scroll", self.onscroll, true);
    }

    // Skip if clicked outside the sliding area
    if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      if ($target.is(".fancybox-image")) {
        e.preventDefault();
      }

      if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
        return;
      }
    }

    self.isScrollable = isScrollable($target) || isScrollable($target.parent());

    // Check if element is scrollable and try to prevent default behavior (scrolling)
    if (!($.fancybox.isMobile && self.isScrollable)) {
      e.preventDefault();
    }

    // One finger or mouse click - swipe or pan an image
    if (self.startPoints.length === 1 || current.hasError) {
      if (self.canPan) {
        $.fancybox.stop(self.$content);

        self.isPanning = true;
      } else {
        self.isSwiping = true;
      }

      self.$container.addClass("fancybox-is-grabbing");
    }

    // Two fingers - zoom image
    if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
      self.canTap = false;
      self.isSwiping = false;
      self.isPanning = false;

      self.isZooming = true;

      $.fancybox.stop(self.$content);

      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();

      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;

      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
    }
  };

  Guestures.prototype.onscroll = function (e) {
    var self = this;

    self.isScrolling = true;

    document.removeEventListener("scroll", self.onscroll, true);
  };

  Guestures.prototype.ontouchmove = function (e) {
    var self = this;

    // Make sure user has not released over iframe or disabled element
    if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
      self.ontouchend(e);
      return;
    }

    if (self.isScrolling) {
      self.canTap = false;
      return;
    }

    self.newPoints = getPointerXY(e);

    if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
      return;
    }

    if (!(self.isSwiping && self.isSwiping === true)) {
      e.preventDefault();
    }

    self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
    self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");

    self.distance = distance(self.newPoints[0], self.startPoints[0]);

    // Skip false ontouchmove events (Chrome)
    if (self.distance > 0) {
      if (self.isSwiping) {
        self.onSwipe(e);
      } else if (self.isPanning) {
        self.onPan();
      } else if (self.isZooming) {
        self.onZoom();
      }
    }
  };

  Guestures.prototype.onSwipe = function (e) {
    var self = this,
      instance = self.instance,
      swiping = self.isSwiping,
      left = self.sliderStartPos.left || 0,
      angle;

    // If direction is not yet determined
    if (swiping === true) {
      // We need at least 10px distance to correctly calculate an angle
      if (Math.abs(self.distance) > 10) {
        self.canTap = false;

        if (instance.group.length < 2 && self.opts.vertical) {
          self.isSwiping = "y";
        } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
          self.isSwiping = "x";
        } else {
          angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);

          self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
        }

        if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
          self.isScrolling = true;

          return;
        }

        instance.isDragging = self.isSwiping;

        // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
        self.startPoints = self.newPoints;

        $.each(instance.slides, function (index, slide) {
          var slidePos, stagePos;

          $.fancybox.stop(slide.$slide);

          slidePos = $.fancybox.getTranslate(slide.$slide);
          stagePos = $.fancybox.getTranslate(instance.$refs.stage);

          slide.$slide
            .css({
              transform: "",
              opacity: "",
              "transition-duration": ""
            })
            .removeClass("fancybox-animated")
            .removeClass(function (index, className) {
              return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });

          if (slide.pos === instance.current.pos) {
            self.sliderStartPos.top = slidePos.top - stagePos.top;
            self.sliderStartPos.left = slidePos.left - stagePos.left;
          }

          $.fancybox.setTranslate(slide.$slide, {
            top: slidePos.top - stagePos.top,
            left: slidePos.left - stagePos.left
          });
        });

        // Stop slideshow
        if (instance.SlideShow && instance.SlideShow.isActive) {
          instance.SlideShow.stop();
        }
      }

      return;
    }

    // Sticky edges
    if (swiping == "x") {
      if (
        self.distanceX > 0 &&
        (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
      ) {
        left = left + Math.pow(self.distanceX, 0.8);
      } else if (
        self.distanceX < 0 &&
        (self.instance.group.length < 2 ||
          (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
      ) {
        left = left - Math.pow(-self.distanceX, 0.8);
      } else {
        left = left + self.distanceX;
      }
    }

    self.sliderLastPos = {
      top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
      left: left
    };

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      if (self.sliderLastPos) {
        $.each(self.instance.slides, function (index, slide) {
          var pos = slide.pos - self.instance.currPos;

          $.fancybox.setTranslate(slide.$slide, {
            top: self.sliderLastPos.top,
            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
          });
        });

        self.$container.addClass("fancybox-is-sliding");
      }
    });
  };

  Guestures.prototype.onPan = function () {
    var self = this;

    // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
    if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
      self.startPoints = self.newPoints;
      return;
    }

    self.canTap = false;

    self.contentLastPos = self.limitMovement();

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  // Make panning sticky to the edges
  Guestures.prototype.limitMovement = function () {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    var distanceX = self.distanceX;
    var distanceY = self.distanceY;

    var contentStartPos = self.contentStartPos;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

    if (currentWidth > canvasWidth) {
      newOffsetX = currentOffsetX + distanceX;
    } else {
      newOffsetX = currentOffsetX;
    }

    newOffsetY = currentOffsetY + distanceY;

    // Slow down proportionally to traveled distance
    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);

    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

    //   ->
    if (distanceX > 0 && newOffsetX > minTranslateX) {
      newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
    }

    //    <-
    if (distanceX < 0 && newOffsetX < maxTranslateX) {
      newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
    }

    //   \/
    if (distanceY > 0 && newOffsetY > minTranslateY) {
      newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
    }

    //   /\
    if (distanceY < 0 && newOffsetY < maxTranslateY) {
      newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      // Center horizontally
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }

    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      // Center vertically
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.onZoom = function () {
    var self = this;

    // Calculate current distance between points to get pinch ratio and new width and height
    var contentStartPos = self.contentStartPos;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);

    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio);

    // This is the translation due to pinch-zooming
    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

    // Point between the two touches
    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();

    // And this is the translation due to translation of the centerpoint
    // between the two fingers
    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

    // The new offset is the old/current one plus the total translation
    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);

    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: pinchRatio,
      scaleY: pinchRatio
    };

    self.canTap = false;

    self.newWidth = newWidth;
    self.newHeight = newHeight;

    self.contentLastPos = newPos;

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.ontouchend = function (e) {
    var self = this;

    var swiping = self.isSwiping;
    var panning = self.isPanning;
    var zooming = self.isZooming;
    var scrolling = self.isScrolling;

    self.endPoints = getPointerXY(e);
    self.dMs = Math.max(new Date().getTime() - self.startTime, 1);

    self.$container.removeClass("fancybox-is-grabbing");

    $(document).off(".fb.touch");

    document.removeEventListener("scroll", self.onscroll, true);

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.isSwiping = false;
    self.isPanning = false;
    self.isZooming = false;
    self.isScrolling = false;

    self.instance.isDragging = false;

    if (self.canTap) {
      return self.onTap(e);
    }

    self.speed = 100;

    // Speed in px/ms
    self.velocityX = (self.distanceX / self.dMs) * 0.5;
    self.velocityY = (self.distanceY / self.dMs) * 0.5;

    if (panning) {
      self.endPanning();
    } else if (zooming) {
      self.endZooming();
    } else {
      self.endSwiping(swiping, scrolling);
    }

    return;
  };

  Guestures.prototype.endSwiping = function (swiping, scrolling) {
    var self = this,
      ret = false,
      len = self.instance.group.length,
      distanceX = Math.abs(self.distanceX),
      canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
      speedX = 300;

    self.sliderLastPos = null;

    // Close if swiped vertically / navigate if horizontally
    if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
      // Continue vertical movement
      $.fancybox.animate(
        self.instance.current.$slide, {
          top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
          opacity: 0
        },
        200
      );
      ret = self.instance.close(true, 250);
    } else if (canAdvance && self.distanceX > 0) {
      ret = self.instance.previous(speedX);
    } else if (canAdvance && self.distanceX < 0) {
      ret = self.instance.next(speedX);
    }

    if (ret === false && (swiping == "x" || swiping == "y")) {
      self.instance.centerSlide(200);
    }

    self.$container.removeClass("fancybox-is-sliding");
  };

  // Limit panning from edges
  // ========================
  Guestures.prototype.endPanning = function () {
    var self = this,
      newOffsetX,
      newOffsetY,
      newPos;

    if (!self.contentLastPos) {
      return;
    }

    if (self.opts.momentum === false || self.dMs > 350) {
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
    } else {
      // Continue movement
      newOffsetX = self.contentLastPos.left + self.velocityX * 500;
      newOffsetY = self.contentLastPos.top + self.velocityY * 500;
    }

    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);

    newPos.width = self.contentStartPos.width;
    newPos.height = self.contentStartPos.height;

    $.fancybox.animate(self.$content, newPos, 366);
  };

  Guestures.prototype.endZooming = function () {
    var self = this;

    var current = self.instance.current;

    var newOffsetX, newOffsetY, newPos, reset;

    var newWidth = self.newWidth;
    var newHeight = self.newHeight;

    if (!self.contentLastPos) {
      return;
    }

    newOffsetX = self.contentLastPos.left;
    newOffsetY = self.contentLastPos.top;

    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    };

    // Reset scalex/scaleY values; this helps for perfomance and does not break animation
    $.fancybox.setTranslate(self.$content, reset);

    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
      self.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
    } else {
      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);

      $.fancybox.animate(self.$content, newPos, 150);
    }
  };

  Guestures.prototype.onTap = function (e) {
    var self = this;
    var $target = $(e.target);

    var instance = self.instance;
    var current = instance.current;

    var endPoints = (e && getPointerXY(e)) || self.startPoints;

    var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;

    var where;

    var process = function (prefix) {
      var action = current.opts[prefix];

      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }

      if (!action) {
        return;
      }

      switch (action) {
        case "close":
          instance.close(self.startEvent);

          break;

        case "toggleControls":
          instance.toggleControls();

          break;

        case "next":
          instance.next();

          break;

        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self.startEvent);
          }

          break;

        case "zoom":
          if (current.type == "image" && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self.startEvent);
            }
          }

          break;
      }
    };

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Skip if clicked on the scrollbar
    if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Check where is clicked
    if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
      where = "Outside";
    } else if ($target.is(".fancybox-slide")) {
      where = "Slide";
    } else if (
      instance.current.$content &&
      instance.current.$content
      .find($target)
      .addBack()
      .filter($target).length
    ) {
      where = "Content";
    } else {
      return;
    }

    // Check if this is a double tap
    if (self.tapped) {
      // Stop previously created single tap
      clearTimeout(self.tapped);
      self.tapped = null;

      // Skip if distance between taps is too big
      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
        return this;
      }

      // OK, now we assume that this is a double-tap
      process("dblclick" + where);
    } else {
      // Single tap will be processed if user has not clicked second time within 300ms
      // or there is no need to wait for double-tap
      self.tapX = tapX;
      self.tapY = tapY;

      if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
        self.tapped = setTimeout(function () {
          self.tapped = null;

          if (!instance.isAnimating) {
            process("click" + where);
          }
        }, 500);
      } else {
        process("click" + where);
      }
    }

    return this;
  };

  $(document)
    .on("onActivate.fb", function (e, instance) {
      if (instance && !instance.Guestures) {
        instance.Guestures = new Guestures(instance);
      }
    })
    .on("beforeClose.fb", function (e, instance) {
      if (instance && instance.Guestures) {
        instance.Guestures.destroy();
      }
    });
})(window, document, jQuery);
// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
        "</button>"
    },
    slideShow: {
      autoStart: false,
      speed: 3000,
      progress: true
    }
  });

  var SlideShow = function (instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,

    init: function () {
      var self = this,
        instance = self.instance,
        opts = instance.group[instance.currIndex].opts.slideShow;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        self.toggle();
      });

      if (instance.group.length < 2 || !opts) {
        self.$button.hide();
      } else if (opts.progress) {
        self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
      }
    },

    set: function (force) {
      var self = this,
        instance = self.instance,
        current = instance.current;

      // Check if reached last element
      if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
        if (self.isActive && current.contentType !== "video") {
          if (self.$progress) {
            $.fancybox.animate(self.$progress.show(), {
              scaleX: 1
            }, current.opts.slideShow.speed);
          }

          self.timer = setTimeout(function () {
            if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
              instance.jumpTo(0);
            } else {
              instance.next();
            }
          }, current.opts.slideShow.speed);
        }
      } else {
        self.stop();
        instance.idleSecondsCounter = 0;
        instance.showControls();
      }
    },

    clear: function () {
      var self = this;

      clearTimeout(self.timer);

      self.timer = null;

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    start: function () {
      var self = this,
        current = self.instance.current;

      if (current) {
        self.$button
          .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
          .removeClass("fancybox-button--play")
          .addClass("fancybox-button--pause");

        self.isActive = true;

        if (current.isComplete) {
          self.set(true);
        }

        self.instance.trigger("onSlideShowChange", true);
      }
    },

    stop: function () {
      var self = this,
        current = self.instance.current;

      self.clear();

      self.$button
        .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
        .removeClass("fancybox-button--pause")
        .addClass("fancybox-button--play");

      self.isActive = false;

      self.instance.trigger("onSlideShowChange", false);

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    toggle: function () {
      var self = this;

      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },

    "beforeShow.fb": function (e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;

      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },

    "afterShow.fb": function (e, instance, current) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow;

      // "P" or Spacebar
      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
        keypress.preventDefault();

        SlideShow.toggle();
      }
    },

    "beforeClose.fb onDeactivate.fb": function (e, instance) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow) {
        SlideShow.stop();
      }
    }
  });

  // Page Visibility API to pause slideshow when window is not active
  $(document).on("visibilitychange", function () {
    var instance = $.fancybox.getInstance(),
      SlideShow = instance && instance.SlideShow;

    if (SlideShow && SlideShow.isActive) {
      if (document.hidden) {
        SlideShow.clear();
      } else {
        SlideShow.set();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
(function (document, $) {
  "use strict";

  // Collection of methods supported by user browser
  var fn = (function () {
    var fnMap = [
      ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
      // new WebKit
      [
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      // old WebKit (Safari 5.1)
      [
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitCurrentFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      [
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror"
      ],
      ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];

    var ret = {};

    for (var i = 0; i < fnMap.length; i++) {
      var val = fnMap[i];

      if (val && val[1] in document) {
        for (var j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }

        return ret;
      }
    }

    return false;
  })();

  if (fn) {
    var FullScreen = {
      request: function (elem) {
        elem = elem || document.documentElement;

        elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        document[fn.exitFullscreen]();
      },
      toggle: function (elem) {
        elem = elem || document.documentElement;

        if (this.isFullscreen()) {
          this.exit();
        } else {
          this.request(elem);
        }
      },
      isFullscreen: function () {
        return Boolean(document[fn.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(document[fn.fullscreenEnabled]);
      }
    };

    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
          "</button>"
      },
      fullScreen: {
        autoStart: false
      }
    });

    $(document).on(fn.fullscreenchange, function () {
      var isFullscreen = FullScreen.isFullscreen(),
        instance = $.fancybox.getInstance();

      if (instance) {
        // If image is zooming, then force to stop and reposition properly
        if (instance.current && instance.current.type === "image" && instance.isAnimating) {
          instance.isAnimating = false;

          instance.update(true, true, 0);

          if (!instance.isComplete) {
            instance.complete();
          }
        }

        instance.trigger("onFullscreenChange", isFullscreen);

        instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);

        instance.$refs.toolbar
          .find("[data-fancybox-fullscreen]")
          .toggleClass("fancybox-button--fsenter", !isFullscreen)
          .toggleClass("fancybox-button--fsexit", isFullscreen);
      }
    });
  }

  $(document).on({
    "onInit.fb": function (e, instance) {
      var $container;

      if (!fn) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();

        return;
      }

      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;

        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          FullScreen.toggle();
        });

        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request();
        }

        // Expose API
        instance.FullScreen = FullScreen;
      } else if (instance) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      // "F"
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();

        instance.FullScreen.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
        FullScreen.exit();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var CLASS = "fancybox-thumbs",
    CLASS_ACTIVE = CLASS + "-active";

  // Make sure there are default values
  $.fancybox.defaults = $.extend(
    true, {
      btnTpl: {
        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
          "</button>"
      },
      thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
      }
    },
    $.fancybox.defaults
  );

  var FancyThumbs = function (instance) {
    this.init(instance);
  };

  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,

    init: function (instance) {
      var self = this,
        group = instance.group,
        enabled = 0;

      self.instance = instance;
      self.opts = group[instance.currIndex].opts.thumbs;

      instance.Thumbs = self;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");

      // Enable thumbs if at least two group items have thumbnails
      for (var i = 0, len = group.length; i < len; i++) {
        if (group[i].thumb) {
          enabled++;
        }

        if (enabled > 1) {
          break;
        }
      }

      if (enabled > 1 && !!self.opts) {
        self.$button.removeAttr("style").on("click", function () {
          self.toggle();
        });

        self.isActive = true;
      } else {
        self.$button.hide();
      }
    },

    create: function () {
      var self = this,
        instance = self.instance,
        parentEl = self.opts.parentEl,
        list = [],
        src;

      if (!self.$grid) {
        // Create main element
        self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
          instance.$refs.container
          .find(parentEl)
          .addBack()
          .filter(parentEl)
        );

        // Add "click" event that performs gallery navigation
        self.$grid.on("click", "a", function () {
          instance.jumpTo($(this).attr("data-index"));
        });
      }

      // Build the list
      if (!self.$list) {
        self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
      }

      $.each(instance.group, function (i, item) {
        src = item.thumb;

        if (!src && item.type === "image") {
          src = item.src;
        }

        list.push(
          '<a href="javascript:;" tabindex="0" data-index="' +
          i +
          '"' +
          (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
          "></a>"
        );
      });

      self.$list[0].innerHTML = list.join("");

      if (self.opts.axis === "x") {
        // Set fixed width for list element to enable horizontal scrolling
        self.$list.width(
          parseInt(self.$grid.css("padding-right"), 10) +
          instance.group.length *
          self.$list
          .children()
          .eq(0)
          .outerWidth(true)
        );
      }
    },

    focus: function (duration) {
      var self = this,
        $list = self.$list,
        $grid = self.$grid,
        thumb,
        thumbPos;

      if (!self.instance.current) {
        return;
      }

      thumb = $list
        .children()
        .removeClass(CLASS_ACTIVE)
        .filter('[data-index="' + self.instance.current.index + '"]')
        .addClass(CLASS_ACTIVE);

      thumbPos = thumb.position();

      // Check if need to scroll to make current thumb visible
      if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
        $list.stop().animate({
            scrollTop: $list.scrollTop() + thumbPos.top
          },
          duration
        );
      } else if (
        self.opts.axis === "x" &&
        (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
      ) {
        $list
          .parent()
          .stop()
          .animate({
              scrollLeft: thumbPos.left
            },
            duration
          );
      }
    },

    update: function () {
      var that = this;
      that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);

      if (that.isVisible) {
        if (!that.$grid) {
          that.create();
        }

        that.instance.trigger("onThumbsShow");

        that.focus(0);
      } else if (that.$grid) {
        that.instance.trigger("onThumbsHide");
      }

      // Update content position
      that.instance.update();
    },

    hide: function () {
      this.isVisible = false;
      this.update();
    },

    show: function () {
      this.isVisible = true;
      this.update();
    },

    toggle: function () {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      var Thumbs;

      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);

        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },

    "beforeShow.fb": function (e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs;

      // "G"
      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();

        Thumbs.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
        Thumbs.$grid.hide();
      }
    }
  });
})(document, jQuery);
//// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
        "</button>"
    },
    share: {
      url: function (instance, item) {
        return (
          (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
        );
      },
      tpl: '<div class="fancybox-share">' +
        "<h1>{{SHARE}}</h1>" +
        "<p>" +
        '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
        "<span>Facebook</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
        "<span>Twitter</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
        "<span>Pinterest</span>" +
        "</a>" +
        "</p>" +
        '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
        "</div>"
    }
  });

  function escapeHtml(string) {
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };

    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }

  $(document).on("click", "[data-fancybox-share]", function () {
    var instance = $.fancybox.getInstance(),
      current = instance.current || null,
      url,
      tpl;

    if (!current) {
      return;
    }

    if ($.type(current.opts.share.url) === "function") {
      url = current.opts.share.url.apply(current, [instance, current]);
    }

    tpl = current.opts.share.tpl
      .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
      .replace(/\{\{url\}\}/g, encodeURIComponent(url))
      .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
      .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");

    $.fancybox.open({
      src: instance.translate(instance, tpl),
      type: "html",
      opts: {
        touch: false,
        animationEffect: false,
        afterLoad: function (shareInstance, shareCurrent) {
          // Close self if parent instance is closing
          instance.$refs.container.one("beforeClose.fb", function () {
            shareInstance.close(null, 0);
          });

          // Opening links in a popup window
          shareCurrent.$content.find(".fancybox-share__button").click(function () {
            window.open(this.href, "Share", "width=550, height=450");
            return false;
          });
        },
        mobile: {
          autoFocus: false
        }
      }
    });
  });
})(document, jQuery);
// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  // Simple $.escapeSelector polyfill (for jQuery prior v3)
  if (!$.escapeSelector) {
    $.escapeSelector = function (sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      var fcssescape = function (ch, asCodePoint) {
        if (asCodePoint) {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0") {
            return "\uFFFD";
          }

          // Control characters and (dependent upon position) numbers get escaped as code points
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }

        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
      };

      return (sel + "").replace(rcssescape, fcssescape);
    };
  }

  // Get info about gallery name and current index from url
  function parseUrl() {
    var hash = window.location.hash.substr(1),
      rez = hash.split("-"),
      index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
      gallery = rez.join("-");

    return {
      hash: hash,
      /* Index is starting from 1 */
      index: index < 1 ? 1 : index,
      gallery: gallery
    };
  }

  // Trigger click evnt on links to open new fancyBox instance
  function triggerFromUrl(url) {
    if (url.gallery !== "") {
      // If we can find element matching 'data-fancybox' atribute,
      // then triggering click event should start fancyBox
      $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
        .eq(url.index - 1)
        .focus()
        .trigger("click.fb-start");
    }
  }

  // Get gallery name from current instance
  function getGalleryID(instance) {
    var opts, ret;

    if (!instance) {
      return false;
    }

    opts = instance.current ? instance.current.opts : instance.opts;
    ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");

    return ret === "" ? false : ret;
  }

  // Start when DOM becomes ready
  $(function () {
    // Check if user has disabled this module
    if ($.fancybox.defaults.hash === false) {
      return;
    }

    // Update hash when opening/closing fancyBox
    $(document).on({
      "onInit.fb": function (e, instance) {
        var url, gallery;

        if (instance.group[instance.currIndex].opts.hash === false) {
          return;
        }

        url = parseUrl();
        gallery = getGalleryID(instance);

        // Make sure gallery start index matches index from hash
        if (gallery && url.gallery && gallery == url.gallery) {
          instance.currIndex = url.index - 1;
        }
      },

      "beforeShow.fb": function (e, instance, current, firstRun) {
        var gallery;

        if (!current || current.opts.hash === false) {
          return;
        }

        // Check if need to update window hash
        gallery = getGalleryID(instance);

        if (!gallery) {
          return;
        }

        // Variable containing last hash value set by fancyBox
        // It will be used to determine if fancyBox needs to close after hash change is detected
        instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");

        // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
        if (window.location.hash === "#" + instance.currentHash) {
          return;
        }

        if (firstRun && !instance.origHash) {
          instance.origHash = window.location.hash;
        }

        if (instance.hashTimer) {
          clearTimeout(instance.hashTimer);
        }

        // Update hash
        instance.hashTimer = setTimeout(function () {
          if ("replaceState" in window.history) {
            window.history[firstRun ? "pushState" : "replaceState"]({},
              document.title,
              window.location.pathname + window.location.search + "#" + instance.currentHash
            );

            if (firstRun) {
              instance.hasCreatedHistory = true;
            }
          } else {
            window.location.hash = instance.currentHash;
          }

          instance.hashTimer = null;
        }, 300);
      },

      "beforeClose.fb": function (e, instance, current) {
        if (!current || current.opts.hash === false) {
          return;
        }

        clearTimeout(instance.hashTimer);

        // Goto previous history entry
        if (instance.currentHash && instance.hasCreatedHistory) {
          window.history.back();
        } else if (instance.currentHash) {
          if ("replaceState" in window.history) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
          } else {
            window.location.hash = instance.origHash;
          }
        }

        instance.currentHash = null;
      }
    });

    // Check if need to start/close after url has changed
    $(window).on("hashchange.fb", function () {
      var url = parseUrl(),
        fb = null;

      // Find last fancyBox instance that has "hash"
      $.each(
        $(".fancybox-container")
        .get()
        .reverse(),
        function (index, value) {
          var tmp = $(value).data("FancyBox");

          if (tmp && tmp.currentHash) {
            fb = tmp;
            return false;
          }
        }
      );

      if (fb) {
        // Now, compare hash values
        if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
          fb.currentHash = null;

          fb.close();
        }
      } else if (url.gallery !== "") {
        triggerFromUrl(url);
      }
    });

    // Check current hash and trigger click event on matching element to start fancyBox, if needed
    setTimeout(function () {
      if (!$.fancybox.getInstance()) {
        triggerFromUrl(parseUrl());
      }
    }, 50);
  });
})(window, document, jQuery);
// ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var prevTime = new Date().getTime();

  $(document).on({
    "onInit.fb": function (e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var current = instance.current,
          currTime = new Date().getTime();

        if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (current.$slide.hasClass("fancybox-animated")) {
          return;
        }

        e = e.originalEvent || e;

        if (currTime - prevTime < 250) {
          return;
        }

        prevTime = currTime;

        instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
      });
    }
  });
})(document, jQuery);
$(function(){
	$("body").on("touchmove",".fancybox-overlay-fixed",function(e){
		e.preventDefault();
	});
	$("body").on("touchmove",".fancybox-inner",function(e){
		e.preventDefault();
	});
		$('.cbg-jwplayer-video').click(function(e) {
		e.preventDefault();
		var eventAction = 0,
			oldEventAction = 0,
			videoStart = 0,
			videoId = $(this).data('video-id');
		var videoImage = {
			'videoPlayer': $(this).data('video-image')
		};
		var video = {
			id: videoId,
			image: videoImage[videoId],
			link: $(this).data('video-link'),
			aspectratio: $(this).data('video-ratio'),
			file: $(this).attr('href'),
			width: '100%',
			label: $(this).data('t-label'),
			thisVideo: $(this),
			autostart: true,
			flashplayer: "video/fancyBox/flash/jwplayer_cej_flash.swf",
			events: {
				"onReady": function() {
					if(video.link != null && '' != video.link) {}
				},
				"onPlay": function() {
					$(".jwdisplay").removeClass("x-mask");
					$(".jwpreview").removeClass("x-opacity");
					if(videoStart == 0) {
						try {
							trackEvent("Video Milestone", "Video Start", video.label, "");
						} catch(e) {
							console.error('trackEvent error');
						}
						videoStart = 1;
					}
				},
				"onTime": function(event) {
					var time = event.position;
					var duration = event.duration;
					var _l = jwplayer().getDuration();
					var _s = jwplayer().getPosition();
					eventAction = time / duration * 100;
					eventAction = (_s / _l) * 100
					if(eventAction <= 25) {
						eventAction = 25;
					} else if(eventAction <= 50) {
						eventAction = 50;
					} else if(eventAction <= 75) {
						eventAction = 75;
					} else if(eventAction < 100) {
						eventAction = 100;
					}
					if(eventAction != oldEventAction) {}
					oldEventAction = eventAction;
				},
				"onPause": function() {
					$(".jwdisplay").addClass("x-mask");
				},
				"onComplete": function() {
					$(".jwdisplay").addClass("x-mask");
					$(".jwpreview").addClass("x-opacity");
					try {
						trackEvent("Video Milestone", "Video Complete", video.label, "");
					} catch(e) {
						console.error('trackEvent error');
					}
				}
			}
		};
		if($('html').hasClass('ie9')) {
			video.primary = 'flash';
		}
		var width = 1600,
			height = 900;
		if(typeof(video.aspectratio) == 'string' && /^[0-9]{1,2}:[0-9]{1,2}$/.test(video.aspectratio)) {
			var ratio = video.aspectratio.split(':');
			height = width * parseInt(ratio[1]) / parseInt(ratio[0]);
		}
		$.fancybox('<div id="' + video.id + '" class="cbg-jwplayer"></div><div class="cbg-video-mask"></div>', {
			width: width,
			height: height,
			padding: 0,
			margin: 20,
			autoSize: false,
			aspectRatio: true,
			scrolling: 'no',
			beforeShow: function() {
				try {
					jwplayer(video.id).setup(video);
					jwplayer(video.id).onFullscreen(function(event) {
						event.fullscreen ? $('.fancybox-close').hide() : $('.fancybox-close').show();
					})
					jwplayer(video.id).onReady(function(event) {
						$('.cbg-video-mask').fadeOut();
					});
					$('#cbg-banner').flexslider('pause');
				} catch(e) {
					console.log(e);
				}
			},
			afterClose: function() {
				if(eventAction < 100) {
					try {
						trackEvent("Video Milestone", "Video " + eventAction + "%", video.label, "");
					} catch(e) {
						console.error('trackEvent error');
					}
				}
			},
			beforeClose: function() {}
		});
		$('.fancybox-close').click(function() {
			$('.play_video').stop();
		});
	});
});
$(function(){
	if($(".text-component.bg-img").length > 0){
		$(window).on("resize",function(){
			textComponentResize();
		}).resize();
	}
	textComponentResize();
})
var devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : window.screen.deviceXDPI / window.screen.logicalXDPI;

function textComponentResize(){
	var _width = $(window).width();
	$(".text-component.bg-color").each(function(){
		var _color = $(this).data("color");
		var _bgcolor = $(this).data("bgcolor");
		$(this).attr("style","color:" + _color + ";background:" + _bgcolor + ";");
		if($(this).hasClass("bgheight")){
            if(_width > 1023){
                _height = $(this).data("lg-h");
            }else if(_width > 767){
                _height = $(this).data("md-h");
            }else{
                _height = $(this).data("sm-h");
            }
            $(this).css("height",_height + "px");
        }
	});
	$(".text-component.bg-img").each(function(){
		var _color = $(this).data("color");
		var _height;
		if(devicePixelRatio > 1.5){
			if(_width > 1023){
				var _bgimg = $(this).data("lg-bgimg2x");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("lg-h")
				}
			}else if(_width > 767){
				var _bgimg = $(this).data("md-bgimg2x");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("md-h")
				}
			}else{
				var _bgimg = $(this).data("sm-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("sm-h")
				}
			}
		}else{
			if(_width > 1023){
				var _bgimg = $(this).data("lg-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("lg-h")
				}
			}else if(_width > 767){
				var _bgimg = $(this).data("md-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("md-h")
				}
			}else{
				var _bgimg = $(this).data("sm-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("sm-h")
				}
			}
		}
		if($(this).hasClass("bgheight")){
			$(this).attr("style","color:" + _color + ";background-image:url('" + _bgimg + "');height:"+ _height + "px;");
		}else{
			$(this).attr("style","color:" + _color + ";background-image:url('" + _bgimg + "');");
		}
	});

	$(".text-component.bg-img.imgHeight").each(function(){
		var _height;
		var _this = this;
		if(_width > 1079){
			var _bgimg = $(this).data("lg-bgimg");
		}else if(_width > 599){
			var _bgimg = $(this).data("md-bgimg");
		}else{
			var _bgimg = $(this).data("sm-bgimg");
		}
		var _image = new Image();
		_image.src = _bgimg;
		_image.onload = function(){
			_height = _image.height / _image.width * $(_this).outerWidth();
			$(_this).css("height",_height + "px");
		}
	});
}
$('.text-component.bg-img.imgHeight').outerWidth()
$(function(){
	function initIcon(){
		$(".kv-img-lr-component").each(function(){

		    if($(this).find(".icon-contain.mode-auto").length > 0){
		        $(this).find(".mode-row").addClass("icon-initial");
                    var _tmpW = 0;
                    $(this).find(".mode-row .kv-icon").each(function(){
                        _tmpW = ($(this).outerWidth() > _tmpW) ? $(this).outerWidth() : _tmpW;
                    });
                    $(this).find(".mode-row").removeClass("icon-initial");
                    _tmpW = _tmpW * 0.55;
                    var _index = 1;
                    _tmpW = iconWidth($(this),_tmpW,_index);
                    $(this).find(".mode-row .kv-icon").each(function(){
                        $(this).css("width",_tmpW + "px");
                    });
		    }else {
		        var _list= $(this).find(".icon-contain .kv-icon-list");
		        var _width = $(window).width();
                if(_width > 1023){
                    var i_w = _list.data("lg-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }else if(_width > 767){
                    var i_w = _list.data("md-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }else{
                    var i_w = _list.data("sm-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }
		    }
		});
	}

	function blr_textComponentResize(){
        $(".huawei-feature-section-left-right-component.show-background-image").each(function(){
            var _width = $(window).width();
            if(devicePixelRatio > 1.5){
                if(_width > 1023){
                    var _bgimg = $(this).data("lg-bgimg2x");
                }else if(_width > 767){
                    var _bgimg = $(this).data("md-bgimg2x");
                }else{
                    var _bgimg = $(this).data("sm-bgimg");
                }
            }else{
                if(_width > 1023){
                    var _bgimg = $(this).data("lg-bgimg");
                }else if(_width > 767){
                    var _bgimg = $(this).data("md-bgimg");
                }else{
                    var _bgimg = $(this).data("sm-bgimg");
                }
            }
            $(this).attr("style","background-image:url('" + _bgimg + "');");
        });
	}

	function iconWidth(_selector,tmpW,index){
		var s_w = _selector.find(".content-contain").width() -10 ;
		if(tmpW * _selector.find(".mode-row .kv-icon").length < s_w){
			return tmpW;
		}
		var iconN = 0;
		iconN = mathRow(_selector,index + 1);
		if(iconN <= 3 && _selector.find(".mode-row .kv-icon").length <= 4){
			return s_w / 2;
		}
		if(iconN <= 3){
			return s_w / 3;
		}
		if(tmpW * iconN < s_w){
			return s_w / iconN;
		}else{
			return iconWidth(_selector,tmpW,index + 1);
		}
	}
	
	function mathRow(_selector,_index){
		return Math.ceil(_selector.find(".mode-row .kv-icon").length / _index);
	}
	initIcon();
	blr_textComponentResize();
	$(window).resize(function(){
		if($(window).width() >= 600){
			$(".kv-img-lr-component .kv-icon-list.mode-col").removeClass("mode-row");
			$(".kv-img-lr-component .kv-icon-list.mode-col .kv-icon").css("width","auto");
		}else{
			$(".kv-img-lr-component .kv-icon-list.mode-col").addClass("mode-row");
		}
		initIcon();
		blr_textComponentResize()
	}).resize();
});
$(function(){
	function initIcon(){
		$(".kv-img-gt-component").each(function(){

		    if($(this).find(".icon-contain.mode-auto").length > 0){
		        $(this).find(".mode-row").addClass("icon-initial");
                    var _tmpW = 0;
                    $(this).find(".mode-row .kv-icon").each(function(){
                        _tmpW = ($(this).outerWidth() > _tmpW) ? $(this).outerWidth() : _tmpW;
                    });
                    $(this).find(".mode-row").removeClass("icon-initial");
                    _tmpW = _tmpW * 0.55;
                    var _index = 1;
                    _tmpW = iconWidth($(this),_tmpW,_index);
                    $(this).find(".mode-row .kv-icon").each(function(){
                        $(this).css("width",_tmpW + "px");
                    });
		    }else {
		        var _list= $(this).find(".icon-contain .kv-icon-list");
		        var _width = $(window).width();
                if(_width > 1023){
                    var i_w = _list.data("lg-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }else if(_width > 767){
                    var i_w = _list.data("md-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }else{
                    var i_w = _list.data("sm-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }
		    }
		});
	}

	function bgt_textComponentResize(){
        $(".huawei-feature-section-g-t-component.show-background-image").each(function(){
            var _width = $(window).width();
            if(devicePixelRatio > 1.5){
                if(_width > 1023){
                    var _bgimg = $(this).data("lg-bgimg2x");
                }else if(_width > 767){
                    var _bgimg = $(this).data("md-bgimg2x");
                }else{
                    var _bgimg = $(this).data("sm-bgimg");
                }
            }else{
                if(_width > 1023){
                    var _bgimg = $(this).data("lg-bgimg");
                }else if(_width > 767){
                    var _bgimg = $(this).data("md-bgimg");
                }else{
                    var _bgimg = $(this).data("sm-bgimg");
                }
            }
            $(this).attr("style","background-image:url('" + _bgimg + "');");
        });
	}

	function iconWidth(_selector,tmpW,index){
		var s_w = _selector.find(".content-contain").width() -10 ;
		if(tmpW * _selector.find(".mode-row .kv-icon").length < s_w){
			return tmpW;
		}
		var iconN = 0;
		iconN = mathRow(_selector,index + 1);
		if(iconN <= 3 && _selector.find(".mode-row .kv-icon").length <= 4){
			return s_w / 2;
		}
		if(iconN <= 3){
			return s_w / 3;
		}
		if(tmpW * iconN < s_w){
			return s_w / iconN;
		}else{
			return iconWidth(_selector,tmpW,index + 1);
		}
	}
	
	function mathRow(_selector,_index){
		return Math.ceil(_selector.find(".mode-row .kv-icon").length / _index);
	}

    function Drawrect(w, h, id, color, backColor) {
        var canvas = document.getElementById(id);
        var ctx = canvas.getContext('2d');
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.wconst = w;
        this.h = h;
        this.flag = true;
        ctx.fillStyle = backColor;
        ctx.fillRect(this.x, this.y, this.wconst, this.h);

        this.run = function () {
            if (this.flag && ($(canvas).attr("show-flag")=="show")) {
                this.w++;
                if (this.w >= this.wconst) {
                    this.flag = false;
                }
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.w, this.h);
            }

        }
    }

    function initButton(){
        $(".kv-img-gt-component").each(function(){
            var kv = $(this);
            kv.find(".images-scroll-button .buy_btn").click(function (event) {


                kv.find(".images-scroll-button .buy_btn").each(function(){
                    var width = $(this).width();
                    $(this).find("canvas").attr("width",width);
                });
                function run() {
                    requestAnimationFrame(run);
                    d.run();
                }
                kv.find(".images-scroll-button .buy_btn canvas").each(function(){
                    new Drawrect($(this).attr("width"), 3, $(this).attr("id"),  $(this).attr("back-color"), $(this).attr("back-color"));
                    $(this).attr("show-flag","not-show");
                });
                $(this).find("canvas").attr("show-flag","show");
                var d = new Drawrect(
                    $(this).find("canvas").attr("width"),
                    3,
                    $(this).find("canvas").attr("id"),
                    $(this).find("canvas").attr("color"),
                    $(this).find("canvas").attr("back-color"));
                run();
                var imageId = $(this).attr("image");
                var time = 2;
                if(isNaN(time) ) {
                    time = 2;
                }
                //kv.find(".imagesScroll").fadeOut(time*1000/2);
                //setTimeout(function(){kv.find("."+imageId).fadeIn(time*1000/2);},time*1000/2);
                kv.find(".imagesScroll").hide();
                kv.find("."+imageId).fadeIn(time*1000);
            });
            //循环播放
            var scrollTime = parseFloat($(this).attr("time"));
            if(isNaN(scrollTime) ) {
                scrollTime = 4;
            }
            scrollTime = scrollTime * 1000;
            var count = kv.find(".images-scroll-button .buy_btn").length;
            if(count>=1) {
                $(kv.find(".images-scroll-button .buy_btn")[0]).trigger("click");
                var showNow = 1;
                var setIntervalCode = window.setInterval(function(){
                    $(kv.find(".images-scroll-button .buy_btn")[showNow]).trigger("click");
                    showNow = showNow + 1;
                    if(showNow == count){
                        showNow = 0;
                    }
                },scrollTime);
               kv.find(".images-scroll-button a").click(function (event) {
                    clearInterval(setIntervalCode);
                });
            }
        });

    }

	initIcon();
    initButton();
	bgt_textComponentResize();
	$(window).resize(function(){
		if($(window).width() >= 600){
			$(".kv-img-gt-component .kv-icon-list.mode-col").removeClass("mode-row");
			$(".kv-img-gt-component .kv-icon-list.mode-col .kv-icon").css("width","auto");
		}else{
			$(".kv-img-gt-component .kv-icon-list.mode-col").addClass("mode-row");
		}
		initIcon();
		bgt_textComponentResize();


	}).resize();
});
var devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : window.screen.deviceXDPI / window.screen.logicalXDPI;

function bg_textComponentResize(){
	var _width = $(window).width();
	$(".kv-background-component.bg-color").each(function(){
		var _color = $(this).data("color");
		var _bgcolor = $(this).data("bgcolor");
		$(this).attr("style","color:" + _color + ";background:" + _bgcolor + ";");
		if($(this).hasClass("bgheight")){
			if(_width > 1023){
				_height = $(this).data("lg-h");
			}else if(_width > 767){
				_height = $(this).data("md-h");
			}else{
				_height = $(this).data("sm-h");
			}
			$(this).css("height",_height + "px");
		}
	});

	$(".kv-background-component.bg-img").each(function(){
		var _color = $(this).data("color");
		var _height;
		if(devicePixelRatio > 1.5){
			if(_width > 1023){
				var _bgimg = $(this).data("lg-bgimg2x");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("lg-h")
				}
			}else if(_width > 767){
				var _bgimg = $(this).data("md-bgimg2x");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("md-h")
				}
			}else{
				var _bgimg = $(this).data("sm-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("sm-h")
				}
			}
		}else{
			if(_width > 1023){
				var _bgimg = $(this).data("lg-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("lg-h")
				}
			}else if(_width > 767){
				var _bgimg = $(this).data("md-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("md-h")
				}
			}else{
				var _bgimg = $(this).data("sm-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("sm-h")
				}
			}
		}
		if($(this).hasClass("bgheight")){
			$(this).attr("style","color:" + _color + ";background-image:url('" + _bgimg + "');height:"+ _height + "px;");
		}else{
			$(this).attr("style","color:" + _color + ";background-image:url('" + _bgimg + "');");
		}
	});

	$(".kv-background-component.imgHeight").each(function(){
		var _height;
		var _this = this;
		if(_width > 1023){
			var _bgimg = $(this).data("lg-bgimg");
		}else if(_width > 767){
			var _bgimg = $(this).data("md-bgimg");
		}else{
			var _bgimg = $(this).data("sm-bgimg");
		}
		var _image = new Image();
		_image.src = _bgimg;
		_image.onload = function(){
			_height = _image.height / _image.width * _width;
			$(_this).css("height",_height + "px");
		}
	});
}


$(function(){
	if($(".kv-background-component.bg-img").length > 0 && $(".AEM-Edit").length == 0){
		$(window).on("resize",function(){
			bg_textComponentResize();
		}).resize();
	}
	bg_textComponentResize();

	function bg_initIcon(){
		$(".kv-background-component").each(function(){
            var _width = $(window).width();
		    if($(this).find(".icon-contain.mode-auto").length > 0){
		        $(this).find(".mode-row").addClass("icon-initial");
                var _tmpW = 0;
                $(this).find(".mode-row .kv-icon").each(function(){
                    _tmpW = ($(this).outerWidth() > _tmpW) ? $(this).outerWidth() : _tmpW;
                });
                $(this).find(".mode-row").removeClass("icon-initial");
                _tmpW = _tmpW * 0.55;
                var _index = 1;
                _tmpW = bg_iconWidth($(this),_tmpW,_index);
                $(this).find(".mode-row .kv-icon").each(function(){
                    $(this).css("width",_tmpW + "px");
                });
		    }else {
                var _list= $(this).find(".icon-contain .kv-icon-list");
                if(_width > 1023){
                    var i_w = _list.data("lg-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }else if(_width > 767){
                    var i_w = _list.data("md-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }else{
                    var i_w = _list.data("sm-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }

		    }

		});
	}

	function bg_iconWidth(_selector,tmpW,index){
		var s_w = _selector.find(".content-contain").width() -10 ;
		if(tmpW * _selector.find(".mode-row .kv-icon").length < s_w){
			return tmpW;
		}
		var iconN = 0;
		iconN = bg_mathRow(_selector,index + 1);
		if(iconN <= 3 && _selector.find(".mode-row .kv-icon").length <= 4){
			return s_w / 2;
		}
		if(iconN <= 3){
			return s_w / 3;
		}
		if(tmpW * iconN < s_w){
			return s_w / iconN;
		}else{
			return bg_iconWidth(_selector,tmpW,index + 1);
		}
	}
	
	function bg_mathRow(_selector,_index){
		return Math.ceil(_selector.find(".mode-row .kv-icon").length / _index);
	}
	bg_initIcon();
	$(window).resize(function(){
		if($(window).width() >= 768){
			$(".kv-background-component .kv-icon-list.mode-col").removeClass("mode-row");
			$(".kv-background-component .kv-icon-list.mode-col .kv-icon").css("width","auto");
		}else{
			$(".kv-background-component .kv-icon-list.mode-col").addClass("mode-row");
		}
	}).resize();
	$(window).resize(function(){bg_initIcon();}).resize();
});
var devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : window.screen.deviceXDPI / window.screen.logicalXDPI;

function bgc_textComponentResize(){
	var _width = $(window).width();
	$(".kv-background-center-component.bg-color").each(function(){
		var _color = $(this).data("color");
		var _bgcolor = $(this).data("bgcolor");
		$(this).attr("style","color:" + _color + ";background:" + _bgcolor + ";");
		if($(this).hasClass("bgheight")){
			if(_width > 1079){
				_height = $(this).data("lg-h");
			}else if(_width > 599){
				_height = $(this).data("md-h");
			}else{
				_height = $(this).data("sm-h");
			}
			$(this).css("height",_height + "px");
		}
	});

	$(".kv-background-center-component.bg-img").each(function(){
		var _color = $(this).data("color");
		var _height;
		if(devicePixelRatio > 1.5){
			if(_width > 1023){
				var _bgimg = $(this).data("lg-bgimg2x");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("lg-h")
				}
			}else if(_width > 767){
				var _bgimg = $(this).data("md-bgimg2x");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("md-h")
				}
			}else{
				var _bgimg = $(this).data("sm-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("sm-h")
				}
			}
		}else{
			if(_width > 1023){
				var _bgimg = $(this).data("lg-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("lg-h")
				}
			}else if(_width > 767){
				var _bgimg = $(this).data("md-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("md-h")
				}
			}else{
				var _bgimg = $(this).data("sm-bgimg");
				if($(this).hasClass("bgheight")){
					_height = $(this).data("sm-h")
				}
			}
		}
		if($(this).hasClass("bgheight")){
			$(this).attr("style","color:" + _color + ";background-image:url('" + _bgimg + "');height:"+ _height + "px;");
		}else{
			$(this).attr("style","color:" + _color + ";background-image:url('" + _bgimg + "');");
		}
	});

	$(".kv-background-center-component.imgHeight").each(function(){
		var _height;
		var _this = this;
		if(_width > 1079){
			var _bgimg = $(this).data("lg-bgimg");
		}else if(_width > 599){
			var _bgimg = $(this).data("md-bgimg");
		}else{
			var _bgimg = $(this).data("sm-bgimg");
		}
		var _image = new Image();
		_image.src = _bgimg;
		_image.onload = function(){
			_height = _image.height / _image.width * $(_this).outerWidth();
			$(_this).css("height",_height + "px");
		}
	});
}

$(function(){
	if($(".kv-background-center-component.bg-img").length > 0 && $(".AEM-Edit").length == 0){
		$(window).on("resize",function(){
			bgc_textComponentResize();
		}).resize();
	}
	bgc_textComponentResize();

	function bgc_initIcon(){
		$(".kv-background-center-component").each(function(){
			var _width = $(window).width();
			if($(this).find(".icon-contain.mode-auto").length > 0){
				$(this).find(".mode-row").addClass("icon-initial");
				var _tmpW = 0;
				$(this).find(".mode-row .kv-icon").each(function(){
					_tmpW = ($(this).outerWidth() > _tmpW) ? $(this).outerWidth() : _tmpW;
				});
				$(this).find(".mode-row").removeClass("icon-initial");
				_tmpW = _tmpW * 0.6;
				var _index = 1;
				_tmpW = bgc_iconWidth($(this),_tmpW,_index);
				$(this).find(".mode-row .kv-icon").each(function(){
					$(this).css("width",_tmpW + "px");
				});
			}else{
				var _list= $(this).find(".icon-contain .kv-icon-list");
				if(_width > 1079){
					var i_w = _list.data("lg-w");
					_list.find(".kv-icon").each(function(){
						$(this).css("width",i_w);
					});
				}else if(_width > 599){
					var i_w = _list.data("md-w");
					_list.find(".kv-icon").each(function(){
						$(this).css("width",i_w);
					});
				}else{
					var i_w = _list.data("sm-w");
					_list.find(".kv-icon").each(function(){
						$(this).css("width",i_w);
					});
				}
			}
		});
	}

	function bgc_iconWidth(_selector,tmpW,index){
		var _width = $(window).width();
		var s_w = _selector.find(".content-contain .icon-contain .row").width() -30 ;
		if(tmpW * _selector.find(".mode-row .kv-icon").length < s_w){
			return tmpW;
		}
		var iconN = 0;
		iconN = bgc_mathRow(_selector,index + 1);
		if(_width >= 600){
			if(tmpW * iconN < s_w){
				_selector.find(".content-contain .icon-contain .kv-icon-list").css("width",tmpW * iconN + 10);
				_selector.find(".content-contain .icon-contain .kv-icon-list").css("margin","0 auto");
				return tmpW;
			}else{
				return bgc_iconWidth(_selector,tmpW,index + 1);
			}
		}else{
			if(iconN <= 3 && _selector.find(".mode-row .kv-icon").length <= 4){
				return s_w / 2;
			}
			if(iconN <= 3){
				return s_w / 3;
			}
			if(tmpW * iconN < s_w){
				return s_w / iconN;
			}else{
				return bgc_iconWidth(_selector,tmpW,index + 1);
			}
		}
	}
	function bgc_mathRow(_selector,_index){
		return Math.ceil(_selector.find(".mode-row .kv-icon").length / _index);
	}
	bgc_initIcon();
	$(window).resize(function(){bgc_initIcon();}).resize();
});
var devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : window.screen.deviceXDPI / window.screen.logicalXDPI;


$(function(){
	function img_initIcon(){
		$(".kv-img-tb-component").each(function(){
			var _width = $(window).width();
			if($(this).find(".icon-contain.mode-auto").length > 0){
				$(this).find(".mode-row").addClass("icon-initial");
				var _tmpW = 0;
				$(this).find(".mode-row .kv-icon").each(function(){
					_tmpW = ($(this).outerWidth() > _tmpW) ? $(this).outerWidth() : _tmpW;
				});
				$(this).find(".mode-row").removeClass("icon-initial");
				_tmpW = _tmpW * 0.6;
				var _index = 1;
				_tmpW = img_iconWidth($(this),_tmpW,_index);
				$(this).find(".mode-row .kv-icon").each(function(){
					$(this).css("width",_tmpW + "px");
				});
			}else{
				var _list= $(this).find(".icon-contain .kv-icon-list");
				if(_width > 1023){
					var i_w = _list.data("lg-w") + "";
					_list.find(".kv-icon").each(function(){
						$(this).css("width",i_w);
					});
				}else if(_width > 767){
					var i_w = _list.data("md-w") + "";
					_list.find(".kv-icon").each(function(){
						$(this).css("width",i_w);
					});
				}else{
					var i_w = _list.data("sm-w") + "";
					_list.find(".kv-icon").each(function(){
						$(this).css("width",i_w);
					});
				}
			}
		});
	}

	function img_iconWidth(_selector,tmpW,index){
		var _width = $(window).width();
		var s_w = _selector.find(".content-contain .icon-contain .row").width() -30 ;
		if(tmpW * _selector.find(".mode-row .kv-icon").length < s_w){
			return tmpW;
		}
		var iconN = 0;
		iconN = img_mathRow(_selector,index + 1);
		if(_width >= 768){
			if(tmpW * iconN < s_w){
				_selector.find(".content-contain .icon-contain .kv-icon-list").css("width",tmpW * iconN + 10);
				_selector.find(".content-contain .icon-contain .kv-icon-list").css("margin","0 auto");
				return tmpW;
			}else{
				return img_iconWidth(_selector,tmpW,index + 1);
			}
		}else{
			if(iconN <= 3 && _selector.find(".mode-row .kv-icon").length <= 4){
				return s_w / 2;
			}
			if(iconN <= 3){
				return s_w / 3;
			}
			if(tmpW * iconN < s_w){
				return s_w / iconN;
			}else{
				return img_iconWidth(_selector,tmpW,index + 1);
			}
		}
	}
	function img_mathRow(_selector,_index){
		return Math.ceil(_selector.find(".mode-row .kv-icon").length / _index);
	}
	img_initIcon();
	$(window).resize(function(){img_initIcon();}).resize();
});
var devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : window.screen.deviceXDPI / window.screen.logicalXDPI;

function video_component_ComponentResize(){
    var _width = $(window).width();
    $(".huawei-video-component").each(function(){
        if(devicePixelRatio > 1.5){
            if(_width > 1023){
                var _bgimg = $(this).data("lg-bgimg2x");
            }else if(_width > 767){
                var _bgimg = $(this).data("md-bgimg2x");
            }else{
                var _bgimg = $(this).data("sm-bgimg");
            }
        }else{
            if(_width > 1023){
                var _bgimg = $(this).data("lg-bgimg");
            }else if(_width > 767){
                var _bgimg = $(this).data("md-bgimg");
            }else{
                var _bgimg = $(this).data("sm-bgimg");
            }
        }
        $(this).attr("style","background-image:url('" + _bgimg + "');");

       var _height;
        var _this = this;
        if(_width > 1023){
            var _bgimg = $(this).data("lg-bgimg");
        }else if(_width > 767){
            var _bgimg = $(this).data("md-bgimg");
        }else{
            var _bgimg = $(this).data("sm-bgimg");
        }
        var _image = new Image();
        _image.src = _bgimg;
        _image.onload = function(){
            _height = _image.height / _image.width * _width;
            $(_this).css("height",_height + "px");
        }
    });
}

$(function(){
    if($(".huawei-video-component").length > 0 && $(".AEM-Edit").length == 0){
        $(window).on("resize",function(){
            video_component_ComponentResize();
        }).resize();
    }
    video_component_ComponentResize();
});
/**
 * Swiper 4.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 14, 2018
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";var f="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,Y="undefined"==typeof window?{document:f,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function L(e,t){var a=[],i=0;if(e&&!t&&e instanceof l)return e;if(e)if("string"==typeof e){var s,r,n=e.trim();if(0<=n.indexOf("<")&&0<=n.indexOf(">")){var o="div";for(0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select"),(r=f.createElement(o)).innerHTML=n,i=0;i<r.childNodes.length;i+=1)a.push(r.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||f).querySelectorAll(e.trim()):[f.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===Y||e===f)a.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new l(a)}function r(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}L.fn=l.prototype,L.Class=l,L.Dom7=l;var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(t[a]);return this},attr:function(e,t){var a=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===a.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var a;if(void 0!==t){for(var i=0;i<this.length;i+=1)(a=this[i]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var s=a.getAttribute("data-"+e);return s||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransform=e,a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransitionDuration=e,a.transitionDuration=e}return this},on:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],r=t[1],n=t[2],s=t[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),L(t).is(r))n.apply(t,a);else for(var i=L(t).parents(),s=0;s<i.length;s+=1)L(i[s]).is(r)&&n.apply(i[s],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(i=(e=t)[0],n=e[1],s=e[2],r=void 0),s||(s=!1);for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(d=0;d<p.length;d+=1){var h=p[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[h]||(u.dom7LiveListeners[h]=[]),u.dom7LiveListeners[h].push({listener:n,proxyListener:o}),u.addEventListener(h,o,s)}else for(d=0;d<p.length;d+=1){var v=p[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,s)}}return this},off:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=(e=t)[0],r=e[1],n=e[2],s=void 0),n||(n=!1);for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],p=0;p<this.length;p+=1){var c=this[p],u=void 0;if(!s&&c.dom7Listeners?u=c.dom7Listeners[d]:s&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[d]),u&&u.length)for(var h=u.length-1;0<=h;h-=1){var v=u[h];r&&v.listener===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r||(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=e[0].split(" "),i=e[1],s=0;s<a.length;s+=1)for(var r=a[s],n=0;n<this.length;n+=1){var o=this[n],l=void 0;try{l=new Y.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0})}catch(e){(l=f.createEvent("Event")).initEvent(r,!0,!0),l.detail=i}o.dom7EventData=e.filter(function(e,t){return 0<t}),o.dispatchEvent(l),o.dom7EventData=[],delete o.dom7EventData}return this},transitionEnd:function(t){var a,i=["webkitTransitionEnd","transitionend"],s=this;function r(e){if(e.target===this)for(t.call(this,e),a=0;a<i.length;a+=1)s.off(i[a],r)}if(t)for(a=0;a<i.length;a+=1)s.on(i[a],r);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),a=f.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===Y?Y.scrollY:e.scrollTop,n=e===Y?Y.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var i in e)this[a].style[i]=e[i];return this}if(this[0])return Y.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=L(e),a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}if(e===f)return i===f;if(e===Y)return i===Y;if(e.nodeType||e instanceof l){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return new l(a-1<e?[]:e<0?(t=a+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=0;i<t.length;i+=1){e=t[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var r=f.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof l)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,a,i=this;for(t=0;t<this.length;t+=1)if("string"==typeof e){var s=f.createElement("div");for(s.innerHTML=e,a=s.childNodes.length-1;0<=a;a-=1)i[t].insertBefore(s.childNodes[a],i[t].childNodes[0])}else if(e instanceof l)for(a=0;a<e.length;a+=1)i[t].insertBefore(e[a],i[t].childNodes[0]);else i[t].insertBefore(e,i[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&L(this[0].nextElementSibling).is(e)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&L(t.previousElementSibling).is(e)?new l([t.previousElementSibling]):new l([]):t.previousElementSibling?new l([t.previousElementSibling]):new l([])}return new l([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?L(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return L(r(t))},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?L(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return L(r(t))},closest:function(e){var t=this;return void 0===e?new l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return new l(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].childNodes,s=0;s<i.length;s+=1)e?1===i[s].nodeType&&L(i[s]).is(e)&&t.push(i[s]):1===i[s].nodeType&&t.push(i[s]);return new l(r(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i;for(a=0;a<e.length;a+=1){var s=L(e[a]);for(i=0;i<s.length;i+=1)this[this.length]=s[i],this.length+=1}return this},styles:function(){return this[0]?Y.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){L.fn[e]=t[e]});var e,a,i,V={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var a,i,s;void 0===t&&(t="x");var r=Y.getComputedStyle(e,null);return Y.WebKitCSSMatrix?(6<(i=r.transform||r.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new Y.WebKitCSSMatrix("none"===i?"":i)):a=(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=Y.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=Y.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,s,r={},n=e||Y.location.href;if("string"==typeof n&&n.length)for(s=(a=(n=-1<n.indexOf("?")?n.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<s;t+=1)i=a[t].replace(/#\S+/g,"").split("="),r[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return r},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(null!=s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var l=r[n],d=Object.getOwnPropertyDescriptor(s,l);void 0!==d&&d.enumerable&&(V.isObject(a[l])&&V.isObject(s[l])?V.extend(a[l],s[l]):!V.isObject(a[l])&&V.isObject(s[l])?(a[l]={},V.extend(a[l],s[l])):a[l]=s[l])}}return a}},R=(i=f.createElement("div"),{touch:Y.Modernizr&&!0===Y.Modernizr.touch||!!("ontouchstart"in Y||Y.DocumentTouch&&f instanceof Y.DocumentTouch),pointerEvents:!(!Y.navigator.pointerEnabled&&!Y.PointerEvent),prefixedPointerEvents:!!Y.navigator.msPointerEnabled,transition:(a=i.style,"transition"in a||"webkitTransition"in a||"MozTransition"in a),transforms3d:Y.Modernizr&&!0===Y.Modernizr.csstransforms3d||(e=i.style,"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e),flexbox:function(){for(var e=i.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in Y||"WebkitMutationObserver"in Y,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});Y.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in Y}),s=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},n={components:{configurable:!0}};s.prototype.on=function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)}),i},s.prototype.once=function(i,s,e){var r=this;if("function"!=typeof s)return r;return r.on(i,function e(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];s.apply(r,t),r.off(i,e)},e)},s.prototype.off=function(e,i){var s=this;return s.eventsListeners&&e.split(" ").forEach(function(a){void 0===i?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].length&&s.eventsListeners[a].forEach(function(e,t){e===i&&s.eventsListeners[a].splice(t,1)})}),s},s.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i,s,r=this;return r.eventsListeners&&("string"==typeof e[0]||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),s=r):(a=e[0].events,i=e[0].data,s=e[0].context||r),(Array.isArray(a)?a:a.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(s,i)})}})),r},s.prototype.useModulesParams=function(a){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&V.extend(a,t.params)})},s.prototype.useModules=function(i){void 0===i&&(i={});var s=this;s.modules&&Object.keys(s.modules).forEach(function(e){var a=s.modules[e],t=i[e]||{};a.instance&&Object.keys(a.instance).forEach(function(e){var t=a.instance[e];s[e]="function"==typeof t?t.bind(s):t}),a.on&&s.on&&Object.keys(a.on).forEach(function(e){s.on(e,a.on[e])}),a.create&&a.create.bind(s)(t)})},n.components.set=function(e){this.use&&this.use(e)},s.installModule=function(t){for(var e=[],a=arguments.length-1;0<a--;)e[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=t.name||Object.keys(i.prototype.modules).length+"_"+V.now();return(i.prototype.modules[s]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},s.use=function(e){for(var t=[],a=arguments.length-1;0<a--;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(s,n);var o={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),V.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtlTranslate,r=e.wrongRTL,n=e.virtual&&t.virtual.enabled,o=n?e.virtual.slides.length:e.slides.length,l=a.children("."+e.params.slideClass),d=n?e.virtual.slides.length:l.length,p=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=e.snapGrid.length,m=e.snapGrid.length,g=t.spaceBetween,b=-h,w=0,y=0;if(void 0!==i){var x,T;"string"==typeof g&&0<=g.indexOf("%")&&(g=parseFloat(g.replace("%",""))/100*i),e.virtualSize=-g,s?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(x=Math.floor(d/t.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=x/S,M=C-(t.slidesPerColumn*C-d),k=0;k<d;k+=1){T=0;var z=l.eq(k);if(1<t.slidesPerColumn){var P=void 0,$=void 0,L=void 0;"column"===t.slidesPerColumnFill?(L=k-($=Math.floor(k/S))*S,(M<$||$===M&&L===S-1)&&S<=(L+=1)&&(L=0,$+=1),P=$+L*x/S,z.css({"-webkit-box-ordinal-group":P,"-moz-box-ordinal-group":P,"-ms-flex-order":P,"-webkit-order":P,order:P})):$=k-(L=Math.floor(k/C))*C,z.css("margin-"+(e.isHorizontal()?"top":"left"),0!==L&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",L)}if("none"!==z.css("display")){if("auto"===t.slidesPerView){var I=Y.getComputedStyle(z[0],null),D=z[0].style.transform,O=z[0].style.webkitTransform;D&&(z[0].style.transform="none"),O&&(z[0].style.webkitTransform="none"),T=t.roundLengths?e.isHorizontal()?z.outerWidth(!0):z.outerHeight(!0):e.isHorizontal()?z[0].getBoundingClientRect().width+parseFloat(I.getPropertyValue("margin-left"))+parseFloat(I.getPropertyValue("margin-right")):z[0].getBoundingClientRect().height+parseFloat(I.getPropertyValue("margin-top"))+parseFloat(I.getPropertyValue("margin-bottom")),D&&(z[0].style.transform=D),O&&(z[0].style.webkitTransform=O),t.roundLengths&&(T=Math.floor(T))}else T=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),l[k]&&(e.isHorizontal()?l[k].style.width=T+"px":l[k].style.height=T+"px");l[k]&&(l[k].swiperSlideSize=T),u.push(T),t.centeredSlides?(b=b+T/2+w/2+g,0===w&&0!==k&&(b=b-i/2-g),0===k&&(b=b-i/2-g),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b)):(t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b),b=b+T+g),e.virtualSize+=T+g,w=T,y+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+v,s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),R.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(T+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){E=[];for(var A=0;A<p.length;A+=1){var H=p[A];t.roundLengths&&(H=Math.floor(H)),p[A]<e.virtualSize+p[0]&&E.push(H)}p=E}if(!t.centeredSlides){E=[];for(var B=0;B<p.length;B+=1){var G=p[B];t.roundLengths&&(G=Math.floor(G)),p[B]<=e.virtualSize-i&&E.push(G)}p=E,1<Math.floor(e.virtualSize-i)-Math.floor(p[p.length-1])&&p.push(e.virtualSize-i)}if(0===p.length&&(p=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?l.css({marginLeft:g+"px"}):l.css({marginRight:g+"px"}):l.css({marginBottom:g+"px"})),t.centerInsufficientSlides){var N=0;if(u.forEach(function(e){N+=e+(t.spaceBetween?t.spaceBetween:0)}),(N-=t.spaceBetween)<i){var X=(i-N)/2;p.forEach(function(e,t){p[t]=e-X}),c.forEach(function(e,t){c[t]=e+X})}}V.extend(e,{slides:l,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),d!==o&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),c.length!==m&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&1<a.params.slidesPerView)for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=s<n?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(0<=d&&d<t.size||0<p&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}o.progress=s?-l:l}t.visibleSlides=L(t.visibleSlides)}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,l=n;0===i?n=r=!(s=0):(r=(s=(e-t.minTranslate())/i)<=0,n=1<=s),V.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if((t=0<=r.indexOf(i)?r.indexOf(i):Math.floor(p/n.slidesPerGroup))>=r.length&&(t=r.length-1),p!==o){var u=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);V.extend(a,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==u&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=L(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(L(i).attr("data-swiper-slide-index"),10):t.clickedIndex=L(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var d={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,a=this.rtlTranslate,i=this.translate,s=this.$wrapperEl;if(t.virtualTranslate)return a?-i:i;var r=V.getTranslate(s[0],e);return a&&(r=-r),r||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(R.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var p={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=r<i?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex;a.animating=!1,a.setTransition(0);var r=t;if(r||(r=s<i?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===r?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}};var c={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtlTranslate;if(s.animating&&n.preventInteractionOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var h,v=-o[u];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);if(s.initialized&&r!==p){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r)return!1}return h=p<r?"next":r<p?"prev":"reset",c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),"reset"!==h&&(s.transitionStart(a,h),s.transitionEnd(a,h)),!1):(0!==t&&R.transition?(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(a,h))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd))):(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.transitionEnd(a,h)),!0)},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=e;return this.params.loop&&(s+=this.loopedSlides),this.slideTo(s,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,o=i.slidesGrid,l=i.rtlTranslate;if(s.loop){if(r)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,c=d(l?i.translate:-i.translate),u=n.map(function(e){return d(e)}),h=(o.map(function(e){return d(e)}),n[u.indexOf(c)],n[u.indexOf(c)-1]);return void 0!==h&&(p=o.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.activeIndex,r=Math.floor(s/i.params.slidesPerGroup);if(r<i.snapGrid.length-1){var n=i.rtlTranslate?i.translate:-i.translate,o=i.snapGrid[r];(i.snapGrid[r+1]-o)/2<n-o&&(s=i.params.slidesPerGroup)}return i.slideTo(s,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),V.nextTick(function(){t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),V.nextTick(function(){t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}};var u={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var s=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var a=e.slidesPerGroup-s.length%e.slidesPerGroup;if(a!==e.slidesPerGroup){for(var r=0;r<a;r+=1){var n=L(f.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(n)}s=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=s.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>s.length&&(i.loopedSlides=s.length);var o=[],l=[];s.each(function(e,t){var a=L(t);e<i.loopedSlides&&l.push(t),e<s.length&&e>=s.length-i.loopedSlides&&o.push(t),a.attr("data-swiper-slide-index",e)});for(var d=0;d<l.length;d+=1)t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var p=o.length-1;0<=p;p-=1)t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext,l=t.snapGrid,d=t.rtlTranslate;t.allowSlidePrev=!0,t.allowSlideNext=!0;var p=-l[i]-t.getTranslate();i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p)):("auto"===a.slidesPerView&&2*r<=i||i>=s.length-r)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p));t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,a=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass).remove(),a.removeAttr("data-swiper-slide-index")}};var h={setGrabCursor:function(e){if(!(R.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){R.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var v={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&R.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&R.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(n<=e)a.appendSlide(t);else{for(var o=e<r?r+1:r,l=[],d=n-1;e<=d;d-=1){var p=a.slides.eq(d);p.remove(),l.unshift(p)}if("object"==typeof t&&"length"in t){for(var c=0;c<t.length;c+=1)t[c]&&i.append(t[c]);o=e<r?r+t.length:r}else i.append(t);for(var u=0;u<l.length;u+=1)i.append(l[u]);s.loop&&a.loopCreate(),s.observer&&R.observer||a.update(),s.loop?a.slideTo(o+a.loopedSlides,0,!1):a.slideTo(o,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&R.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},m=function(){var e=Y.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:Y.cordova||Y.phonegap,phonegap:Y.cordova||Y.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!s&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(s||n||r)&&(t.os="ios",t.ios=!0),n&&!r&&(t.osVersion=n[2].replace(/_/g,"."),t.iphone=!0),s&&(t.osVersion=s[2].replace(/_/g,"."),t.ipad=!0),r&&(t.osVersion=r[3]?r[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(n||s||r)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var o=t.osVersion.split("."),l=f.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(r||n)&&(1*o[0]==7?1<=1*o[1]:7<1*o[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=Y.devicePixelRatio||1,t}();function g(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var n=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}var b={attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches;if(!t.animating||!i.preventInteractionOnTransition){var r=e;if(r.originalEvent&&(r=r.originalEvent),a.isTouchEvent="touchstart"===r.type,(a.isTouchEvent||!("which"in r)||3!==r.which)&&!(!a.isTouchEvent&&"button"in r&&0<r.button||a.isTouched&&a.isMoved))if(i.noSwiping&&L(r.target).closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||L(r).closest(i.swipeHandler)[0]){s.currentX="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,s.currentY="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY;var n=s.currentX,o=s.currentY,l=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,d=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!l||!(n<=d||n>=Y.screen.width-d)){if(V.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=n,s.startY=o,a.touchStartTime=V.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(a.allowThresholdMove=!1),"touchstart"!==r.type){var p=!0;L(r.target).is(a.formElements)&&(p=!1),f.activeElement&&L(f.activeElement).is(a.formElements)&&f.activeElement!==r.target&&f.activeElement.blur(),p&&t.allowTouchMove&&i.touchStartPreventDefault&&r.preventDefault()}t.emit("touchStart",r)}}}}.bind(e),e.onTouchMove=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=e;if(n.originalEvent&&(n=n.originalEvent),a.isTouched){if(!a.isTouchEvent||"mousemove"!==n.type){var o="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,l="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(n.preventedByNestedSwiper)return s.startX=o,void(s.startY=l);if(!t.allowTouchMove)return t.allowClick=!1,void(a.isTouched&&(V.extend(s,{startX:o,startY:l,currentX:o,currentY:l}),a.touchStartTime=V.now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(l<s.startY&&t.translate<=t.maxTranslate()||l>s.startY&&t.translate>=t.minTranslate())return a.isTouched=!1,void(a.isMoved=!1)}else if(o<s.startX&&t.translate<=t.maxTranslate()||o>s.startX&&t.translate>=t.minTranslate())return;if(a.isTouchEvent&&f.activeElement&&n.target===f.activeElement&&L(n.target).is(a.formElements))return a.isMoved=!0,void(t.allowClick=!1);if(a.allowTouchCallbacks&&t.emit("touchMove",n),!(n.targetTouches&&1<n.targetTouches.length)){s.currentX=o,s.currentY=l;var d,p=s.currentX-s.startX,c=s.currentY-s.startY;if(!(t.params.threshold&&Math.sqrt(Math.pow(p,2)+Math.pow(c,2))<t.params.threshold))if(void 0===a.isScrolling&&(t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?a.isScrolling=!1:25<=p*p+c*c&&(d=180*Math.atan2(Math.abs(c),Math.abs(p))/Math.PI,a.isScrolling=t.isHorizontal()?d>i.touchAngle:90-d>i.touchAngle)),a.isScrolling&&t.emit("touchMoveOpposite",n),void 0===a.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(a.startMoving=!0)),a.isScrolling)a.isTouched=!1;else if(a.startMoving){t.allowClick=!1,n.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&n.stopPropagation(),a.isMoved||(i.loop&&t.loopFix(),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",n)),t.emit("sliderMove",n),a.isMoved=!0;var u=t.isHorizontal()?p:c;s.diff=u,u*=i.touchRatio,r&&(u=-u),t.swipeDirection=0<u?"prev":"next",a.currentTranslate=u+a.startTranslate;var h=!0,v=i.resistanceRatio;if(i.touchReleaseOnEdges&&(v=0),0<u&&a.currentTranslate>t.minTranslate()?(h=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+a.startTranslate+u,v))):u<0&&a.currentTranslate<t.maxTranslate()&&(h=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-a.startTranslate-u,v))),h&&(n.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),0<i.threshold){if(!(Math.abs(u)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,a.currentTranslate=a.startTranslate,void(s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===a.velocities.length&&a.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:V.now()})),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}}}}else a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",n)}.bind(e),e.onTouchEnd=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=V.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),u<300&&300<c-a.lastClickTime&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=V.nextTick(function(){t&&!t.destroyed&&t.emit("click",d)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=V.now(),V.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<a.velocities.length){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<m||300<V.now()-h.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-E&&(w=t.maxTranslate()-E),y=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>E&&(w=t.minTranslate()+E),y=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(i.freeModeSticky){for(var S,C=0;C<l.length;C+=1)if(l[C]>-w){S=C;break}w=-(w=Math.abs(l[S]-w)<Math.abs(l[S-1]-w)||"next"===t.swipeDirection?l[S]:l[S-1])}if(x&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&T?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(y),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,k=t.slidesSizesGrid[0],z=0;z<o.length;z+=i.slidesPerGroup)void 0!==o[z+i.slidesPerGroup]?p>=o[z]&&p<o[z+i.slidesPerGroup]&&(k=o[(M=z)+i.slidesPerGroup]-o[z]):p>=o[z]&&(M=z,k=o[o.length-1]-o[o.length-2]);var P=(p-o[M])/k;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(P>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(P>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(R.touch||!R.pointerEvents&&!R.prefixedPointerEvents){if(R.touch){var o=!("touchstart"!==a.start||!R.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,R.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!m.ios&&!m.android||t.simulateTouch&&!R.touch&&m.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),f.addEventListener("mousemove",e.onTouchMove,n),f.addEventListener("mouseup",e.onTouchEnd,!1))}else r.addEventListener(a.start,e.onTouchStart,!1),f.addEventListener(a.move,e.onTouchMove,n),f.addEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on(m.ios||m.android?"resize orientationchange observerUpdate":"resize observerUpdate",g,!0)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(R.touch||!R.pointerEvents&&!R.prefixedPointerEvents){if(R.touch){var o=!("onTouchStart"!==a.start||!R.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!m.ios&&!m.android||t.simulateTouch&&!R.touch&&m.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),f.removeEventListener("mousemove",e.onTouchMove,n),f.removeEventListener("mouseup",e.onTouchEnd,!1))}else r.removeEventListener(a.start,e.onTouchStart,!1),f.removeEventListener(a.move,e.onTouchMove,n),f.removeEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off(m.ios||m.android?"resize orientationchange observerUpdate":"resize observerUpdate",g)}};var w,y={setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides;void 0===i&&(i=0);var s=e.params,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var n=e.getBreakpoint(r);if(n&&e.currentBreakpoint!==n){var o=n in r?r[n]:e.originalParams,l=s.loop&&o.slidesPerView!==s.slidesPerView;V.extend(e.params,o),V.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=n,l&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",o)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var s=a[i];this.params.breakpointsInverse?s<=Y.innerWidth&&(t=s):s>=Y.innerWidth&&!t&&(t=s)}return t||"max"}}},I={isIE:!!Y.navigator.userAgent.match(/Trident/g)||!!Y.navigator.userAgent.match(/MSIE/g),isEdge:!!Y.navigator.userAgent.match(/Edge/g),isSafari:(w=Y.navigator.userAgent.toLowerCase(),0<=w.indexOf("safari")&&w.indexOf("chrome")<0&&w.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Y.navigator.userAgent)};var x={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsInverse:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchStartPreventDefault:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},T={update:o,translate:d,transition:p,slide:c,loop:u,grabCursor:h,manipulation:v,events:b,breakpoints:y,checkOverflow:{checkOverflow:function(){var e=this,t=e.isLocked;e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())}},classes:{addClasses:function(){var t=this.classNames,a=this.params,e=this.rtl,i=this.$el,s=[];s.push(a.direction),a.freeMode&&s.push("free-mode"),R.flexbox||s.push("no-flexbox"),a.autoHeight&&s.push("autoheight"),e&&s.push("rtl"),1<a.slidesPerColumn&&s.push("multirow"),m.android&&s.push("android"),m.ios&&s.push("ios"),(I.isIE||I.isEdge)&&(R.pointerEvents||R.prefixedPointerEvents)&&s.push("wp8-"+a.direction),s.forEach(function(e){t.push(a.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,a,i,s,r){var n;function o(){r&&r()}e.complete&&s?o():t?((n=new Y.Image).onload=o,n.onerror=o,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):o()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},E={},S=function(u){function h(){for(var e,t,s,a=[],i=arguments.length;i--;)a[i]=arguments[i];1===a.length&&a[0].constructor&&a[0].constructor===Object?s=a[0]:(t=(e=a)[0],s=e[1]),s||(s={}),s=V.extend({},s),t&&!s.el&&(s.el=t),u.call(this,s),Object.keys(T).forEach(function(t){Object.keys(T[t]).forEach(function(e){h.prototype[e]||(h.prototype[e]=T[t][e])})});var r=this;void 0===r.modules&&(r.modules={}),Object.keys(r.modules).forEach(function(e){var t=r.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i||null===i)return;if(!(a in s&&"enabled"in i))return;!0===s[a]&&(s[a]={enabled:!0}),"object"!=typeof s[a]||"enabled"in s[a]||(s[a].enabled=!0),s[a]||(s[a]={enabled:!1})}});var n=V.extend({},x);r.useModulesParams(n),r.params=V.extend({},n,E,s),r.originalParams=V.extend({},r.params),r.passedParams=V.extend({},s);var o=(r.$=L)(r.params.el);if(t=o[0]){if(1<o.length){var l=[];return o.each(function(e,t){var a=V.extend({},s,{el:t});l.push(new h(a))}),l}t.swiper=r,o.data("swiper",r);var d,p,c=o.children("."+r.params.wrapperClass);return V.extend(r,{$el:o,el:t,$wrapperEl:c,wrapperEl:c[0],classNames:[],slides:L(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===r.params.direction},isVertical:function(){return"vertical"===r.params.direction},rtl:"rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===r.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===c.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(d=["touchstart","touchmove","touchend"],p=["mousedown","mousemove","mouseup"],R.pointerEvents?p=["pointerdown","pointermove","pointerup"]:R.prefixedPointerEvents&&(p=["MSPointerDown","MSPointerMove","MSPointerUp"]),r.touchEventsTouch={start:d[0],move:d[1],end:d[2]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},R.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:V.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.useModules(),r.params.init&&r.init(),r}}u&&(h.__proto__=u);var e={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return((h.prototype=Object.create(u&&u.prototype)).constructor=h).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,s<(l+=a[d].swiperSlideSize)&&(o=!0));for(var p=r-1;0<=p;p-=1)a[p]&&!o&&(n+=1,s<(l+=a[p].swiperSlideSize)&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},h.prototype.update=function(){var a=this;if(a&&!a.destroyed){var e=a.snapGrid,t=a.params;t.breakpoints&&a.setBreakpoint(),a.updateSize(),a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.params.freeMode?(i(),a.params.autoHeight&&a.updateAutoHeight()):(("auto"===a.params.slidesPerView||1<a.params.slidesPerView)&&a.isEnd&&!a.params.centeredSlides?a.slideTo(a.slides.length-1,0,!1,!0):a.slideTo(a.activeIndex,0,!1,!0))||i(),t.watchOverflow&&e!==a.snapGrid&&a.checkOverflow(),a.emit("update")}function i(){var e=a.rtlTranslate?-1*a.translate:a.translate,t=Math.min(Math.max(e,a.maxTranslate()),a.minTranslate());a.setTranslate(t),a.updateActiveIndex(),a.updateSlidesClasses()}},h.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},h.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;return void 0===a.params||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),V.deleteProps(a)),a.destroyed=!0),null},h.extendDefaults=function(e){V.extend(E,e)},e.extendedDefaults.get=function(){return E},e.defaults.get=function(){return x},e.Class.get=function(){return u},e.$.get=function(){return L},Object.defineProperties(h,e),h}(s),C={name:"device",proto:{device:m},static:{device:m}},M={name:"support",proto:{support:R},static:{support:R}},k={name:"browser",proto:{browser:I},static:{browser:I}},z={name:"resize",create:function(){var e=this;V.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){Y.addEventListener("resize",this.resize.resizeHandler),Y.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){Y.removeEventListener("resize",this.resize.resizeHandler),Y.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},P={func:Y.MutationObserver||Y.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new P.func(function(e){if(1!==e.length){var t=function(){a.emit("observerUpdate",e[0])};Y.requestAnimationFrame?Y.requestAnimationFrame(t):Y.setTimeout(t,0)}else a.emit("observerUpdate",e[0])});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(R.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:!1}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},$={name:"observer",params:{observer:!1,observeParents:!1},create:function(){V.extend(this,{observer:{init:P.init.bind(this),attach:P.attach.bind(this),destroy:P.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},D={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,l=n.addSlidesAfter,d=t.virtual,p=d.from,c=d.to,u=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,w=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(i/2)+s+o,b=Math.floor(i/2)+s+l):(g=i+(s-1)+o,b=s+l);var y=Math.max((w||0)-b,0),x=Math.min((w||0)+g,u.length-1),T=(t.slidesGrid[y]||0)-(t.slidesGrid[0]||0);function E(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(V.extend(t.virtual,{from:y,to:x,offset:T,slidesGrid:t.slidesGrid}),p===y&&c===x&&!e)return t.slidesGrid!==h&&T!==f&&t.slides.css(m,T+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:T,from:y,to:x,slides:function(){for(var e=[],t=y;t<=x;t+=1)e.push(u[t]);return e}()}),void E();var S=[],C=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var M=p;M<=c;M+=1)(M<y||x<M)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+M+'"]').remove();for(var k=0;k<u.length;k+=1)y<=k&&k<=x&&(void 0===c||e?C.push(k):(c<k&&C.push(k),k<p&&S.push(k)));C.forEach(function(e){t.$wrapperEl.append(v(u[e],e))}),S.sort(function(e,t){return e<t}).forEach(function(e){t.$wrapperEl.prepend(v(u[e],e))}),t.$wrapperEl.children(".swiper-slide").css(m,T+"px"),E()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?L(i.renderSlide.call(a,e,t)):L('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){this.virtual.slides.push(e),this.virtual.update(!0)},prependSlide:function(e){var t=this;if(t.virtual.slides.unshift(e),t.params.virtual.cache){var a=t.virtual.cache,i={};Object.keys(a).forEach(function(e){i[e+1]=a[e]}),t.virtual.cache=i}t.virtual.update(!0),t.slideNext(0)}},O={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){var e=this;V.extend(e,{virtual:{update:D.update.bind(e),appendSlide:D.appendSlide.bind(e),prependSlide:D.prependSlide.bind(e),renderSlide:D.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};V.extend(e.params,t),V.extend(e.originalParams,t),e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},A={handle:function(e){var t=this,a=t.rtlTranslate,i=e;i.originalEvent&&(i=i.originalEvent);var s=i.keyCode||i.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===s||t.isVertical()&&40===s))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===s||t.isVertical()&&38===s))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||f.activeElement&&f.activeElement.nodeName&&("input"===f.activeElement.nodeName.toLowerCase()||"textarea"===f.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(37===s||39===s||38===s||40===s)){var r=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n=Y.innerWidth,o=Y.innerHeight,l=t.$el.offset();a&&(l.left-=t.$el[0].scrollLeft);for(var d=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],p=0;p<d.length;p+=1){var c=d[p];0<=c[0]&&c[0]<=n&&0<=c[1]&&c[1]<=o&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==s&&39!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),(39===s&&!a||37===s&&a)&&t.slideNext(),(37===s&&!a||39===s&&a)&&t.slidePrev()):(38!==s&&40!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),40===s&&t.slideNext(),38===s&&t.slidePrev()),t.emit("keyPress",s)}},enable:function(){this.keyboard.enabled||(L(f).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(L(f).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},H={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){V.extend(this,{keyboard:{enabled:!1,enable:A.enable.bind(this),disable:A.disable.bind(this),handle:A.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var B={lastScrollTime:V.now(),event:-1<Y.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in f;if(!t){var a=f.createElement("div");a.setAttribute(e,"return;"),t="function"==typeof a[e]}return!t&&f.implementation&&f.implementation.hasFeature&&!0!==f.implementation.hasFeature("","")&&(t=f.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;if(!a.mouseEntered&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var s=0,r=a.rtlTranslate?-1:1,n=B.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(n.pixelX)>Math.abs(n.pixelY)))return!0;s=n.pixelX*r}else{if(!(Math.abs(n.pixelY)>Math.abs(n.pixelX)))return!0;s=n.pixelY}else s=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(0===s)return!0;if(i.invert&&(s=-s),a.params.freeMode){a.params.loop&&a.loopFix();var o=a.getTranslate()+s*i.sensitivity,l=a.isBeginning,d=a.isEnd;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=V.nextTick(function(){a.slideToClosest()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),o===a.minTranslate()||o===a.maxTranslate())return!0}else{if(60<V.now()-a.mousewheel.lastScrollTime)if(s<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new Y.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!B.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(B.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!B.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.off(B.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},G={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&0<s.length&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=L(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=L(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",function(e){e.preventDefault(),a.isEnd&&!a.params.loop||a.slideNext()}),t&&0<t.length&&t.on("click",function(e){e.preventDefault(),a.isBeginning&&!a.params.loop||a.slidePrev()}),V.extend(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,a=e.$prevEl;t&&t.length&&(t.off("click"),t.removeClass(this.params.navigation.disabledClass)),a&&a.length&&(a.off("click"),a.removeClass(this.params.navigation.disabledClass))}},N={update:function(){var e=this,t=e.rtl,s=e.params.pagination;if(s.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var r,a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>a-1-2*e.loopedSlides&&(r-=a-2*e.loopedSlides),n-1<r&&(r-=n),r<0&&"bullets"!==e.params.paginationType&&(r=n+r)):r=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var o,l,d,p=e.pagination.bullets;if(s.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(s.dynamicMainBullets+4)+"px"),1<s.dynamicMainBullets&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=r-e.previousIndex,e.pagination.dynamicBulletIndex>s.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=s.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=r-e.pagination.dynamicBulletIndex,d=((l=o+(Math.min(p.length,s.dynamicMainBullets)-1))+o)/2),p.removeClass(s.bulletActiveClass+" "+s.bulletActiveClass+"-next "+s.bulletActiveClass+"-next-next "+s.bulletActiveClass+"-prev "+s.bulletActiveClass+"-prev-prev "+s.bulletActiveClass+"-main"),1<i.length)p.each(function(e,t){var a=L(t),i=a.index();i===r&&a.addClass(s.bulletActiveClass),s.dynamicBullets&&(o<=i&&i<=l&&a.addClass(s.bulletActiveClass+"-main"),i===o&&a.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),i===l&&a.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next"))});else if(p.eq(r).addClass(s.bulletActiveClass),s.dynamicBullets){for(var c=p.eq(o),u=p.eq(l),h=o;h<=l;h+=1)p.eq(h).addClass(s.bulletActiveClass+"-main");c.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),u.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next")}if(s.dynamicBullets){var v=Math.min(p.length,s.dynamicMainBullets+4),f=(e.pagination.bulletSize*v-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,m=t?"right":"left";p.css(e.isHorizontal()?m:"top",f+"px")}}if("fraction"===s.type&&(i.find("."+s.currentClass).text(s.formatFractionCurrent(r+1)),i.find("."+s.totalClass).text(s.formatFractionTotal(n))),"progressbar"===s.type){var g;g=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var b=(r+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,i.find("."+s.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(i.html(s.renderCustom(e,r+1,n)),e.emit("paginationRender",e,i[0])):e.emit("paginationUpdate",e,i[0]),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](s.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=L(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===a.$el.find(e.el).length&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=L(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),V.extend(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},X={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a?0<(p=-p)?(d=s-p,p=0):r<-p+s&&(d=r+p):p<0?(d=s+p,p=0):r<p+s&&(d=r-p),e.isHorizontal()?(R.transforms3d?n.transform("translate3d("+p+"px, 0, 0)"):n.transform("translateX("+p+"px)"),n[0].style.width=d+"px"):(R.transforms3d?n.transform("translate3d(0px, "+p+"px, 0)"):n.transform("translateY("+p+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=1<=n?"none":"",e.params.scrollbarHide&&(i[0].style.opacity=0),V.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,o=i.trackSize;t=((a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-r.offset()[a.isHorizontal()?"left":"top"]-n/2)/(o-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(l),a.setTranslate(l),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,a=this.$wrapperEl,i=t.$el,s=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),a.transition(0),i.transition(0),s.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=V.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEvents,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!R.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!R.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};R.touch||!R.pointerEvents&&!R.prefixedPointerEvents?(R.touch&&(r.addEventListener(a.start,e.scrollbar.onDragStart,n),r.addEventListener(a.move,e.scrollbar.onDragMove,n),r.addEventListener(a.end,e.scrollbar.onDragEnd,o)),(s.simulateTouch&&!m.ios&&!m.android||s.simulateTouch&&!R.touch&&m.ios)&&(r.addEventListener("mousedown",e.scrollbar.onDragStart,n),f.addEventListener("mousemove",e.scrollbar.onDragMove,n),f.addEventListener("mouseup",e.scrollbar.onDragEnd,o))):(r.addEventListener(i.start,e.scrollbar.onDragStart,n),f.addEventListener(i.move,e.scrollbar.onDragMove,n),f.addEventListener(i.end,e.scrollbar.onDragEnd,o))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEvents,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!R.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!R.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};R.touch||!R.pointerEvents&&!R.prefixedPointerEvents?(R.touch&&(r.removeEventListener(a.start,e.scrollbar.onDragStart,n),r.removeEventListener(a.move,e.scrollbar.onDragMove,n),r.removeEventListener(a.end,e.scrollbar.onDragEnd,o)),(s.simulateTouch&&!m.ios&&!m.android||s.simulateTouch&&!R.touch&&m.ios)&&(r.removeEventListener("mousedown",e.scrollbar.onDragStart,n),f.removeEventListener("mousemove",e.scrollbar.onDragMove,n),f.removeEventListener("mouseup",e.scrollbar.onDragEnd,o))):(r.removeEventListener(i.start,e.scrollbar.onDragStart,n),f.removeEventListener(i.move,e.scrollbar.onDragMove,n),f.removeEventListener(i.end,e.scrollbar.onDragEnd,o))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=L(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&1<s.length&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=L('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),V.extend(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},F={setTransform:function(e,t){var a=this.rtl,i=L(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=0<=n.indexOf("%")?parseInt(n,10)*t*s+"%":n*t*s+"px",o=0<=o.indexOf("%")?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,s=i.progress,r=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,s)}),t.each(function(e,t){var a=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(a+=Math.ceil(e/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,a)})})},setTransition:function(s){void 0===s&&(s=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){var a=L(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),a.transition(i)})}},q={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!R.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=q.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=L(e.target).closest(".swiper-slide"),0===s.$slideEl.length&&(s.$slideEl=t.slides.eq(t.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+a.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl.transition(0),t.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!R.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.fakeGestureMoved=!0,i.scaleMove=q.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(R.gestures?this.zoom.scale=e.scale*a.currentScale:a.scale=i.scaleMove/i.scaleStart*a.currentScale,a.scale>i.maxRatio&&(a.scale=i.maxRatio-1+Math.pow(a.scale-i.maxRatio+1,.5)),a.scale<t.minRatio&&(a.scale=t.minRatio+1-Math.pow(t.minRatio-a.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!R.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!m.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(m.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=V.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=V.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0,e.scale=1,e.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,l,d,p,c,u,h,v,f,m,g=this,b=g.zoom,w=g.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=g.clickedSlide?L(g.clickedSlide):g.slides.eq(g.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,a=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,i=y.$slideEl.offset().left+f/2-t,s=y.$slideEl.offset().top+m/2-a,o=y.$imageEl[0].offsetWidth,l=y.$imageEl[0].offsetHeight,d=o*b.scale,p=l*b.scale,h=-(c=Math.min(f/2-d/2,0)),v=-(u=Math.min(m/2-p/2,0)),(r=i*b.scale)<c&&(r=c),h<r&&(r=h),(n=s*b.scale)<u&&(n=u),v<n&&(n=v)):n=r=0,y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?L(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this,t=e.zoom;if(!t.enabled){t.enabled=!0;var a=!("touchstart"!==e.touchEvents.start||!R.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};R.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){e.zoom.enabled=!1;var a=!("touchstart"!==e.touchEvents.start||!R.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};R.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}}},W={loadInSlide:function(e,l){void 0===l&&(l=!0);var d=this,p=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var c=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children("."+d.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):d.slides.eq(e),t=c.find("."+p.elementClass+":not(."+p.loadedClass+"):not(."+p.loadingClass+")");!c.hasClass(p.elementClass)||c.hasClass(p.loadedClass)||c.hasClass(p.loadingClass)||(t=t.add(c[0])),0!==t.length&&t.each(function(e,t){var i=L(t);i.addClass(p.loadingClass);var s=i.attr("data-background"),r=i.attr("data-src"),n=i.attr("data-srcset"),o=i.attr("data-sizes");d.loadImage(i[0],r||s,n,o,!1,function(){if(null!=d&&d&&(!d||d.params)&&!d.destroyed){if(s?(i.css("background-image",'url("'+s+'")'),i.removeAttr("data-background")):(n&&(i.attr("srcset",n),i.removeAttr("data-srcset")),o&&(i.attr("sizes",o),i.removeAttr("data-sizes")),r&&(i.attr("src",r),i.removeAttr("data-src"))),i.addClass(p.loadedClass).removeClass(p.loadingClass),c.find("."+p.preloaderClass).remove(),d.params.loop&&l){var e=c.attr("data-swiper-slide-index");if(c.hasClass(d.params.slideDuplicateClass)){var t=d.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+d.params.slideDuplicateClass+")");d.lazy.loadInSlide(t.index(),!1)}else{var a=d.$wrapperEl.children("."+d.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');d.lazy.loadInSlide(a.index(),!1)}}d.emit("lazyImageReady",c[0],i[0])}}),d.emit("lazyImageLoad",c[0],i[0])})}},load:function(){var i=this,t=i.$wrapperEl,a=i.params,s=i.slides,e=i.activeIndex,r=i.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?L(e).attr("data-swiper-slide-index"):L(e).index()}if("auto"===o&&(o=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each(function(e,t){var a=r?L(t).attr("data-swiper-slide-index"):L(t).index();i.lazy.loadInSlide(a)});else if(1<o)for(var p=e;p<e+o;p+=1)l(p)&&i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);if(n.loadPrevNext)if(1<o||n.loadPrevNextAmount&&1<n.loadPrevNextAmount){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(e+u+Math.max(c,u),s.length),v=Math.max(e-Math.max(u,c),0),f=e+o;f<h;f+=1)l(f)&&i.lazy.loadInSlide(f);for(var m=v;m<e;m+=1)l(m)&&i.lazy.loadInSlide(m)}else{var g=t.children("."+a.slideNextClass);0<g.length&&i.lazy.loadInSlide(d(g));var b=t.children("."+a.slidePrevClass);0<b.length&&i.lazy.loadInSlide(d(b))}}},j={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;1<a-i;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new j.LinearSpline(t.slidesGrid,e.slidesGrid):new j.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control;function n(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof S&&n(r[o]);else r instanceof S&&t!==r&&n(r)},setTransition:function(t,e){var a,i=this,s=i.controller.control;function r(e){e.setTransition(t,i),0!==t&&(e.transitionStart(),e.params.autoHeight&&V.nextTick(function(){e.updateAutoHeight()}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===i.params.controller.by&&e.loopFix(),e.transitionEnd())}))}if(Array.isArray(s))for(a=0;a<s.length;a+=1)s[a]!==e&&s[a]instanceof S&&r(s[a]);else s instanceof S&&e!==s&&r(s)}},U={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=L(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&0<a.length&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var i=this,s=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var a=L(t);i.a11y.makeElFocusable(a),i.a11y.addElRole(a,"button"),i.a11y.addElLabel(a,s.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&0<a.a11y.liveRegion.length&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass,a.a11y.onEnterKey)}},K={init:function(){var e=this;if(e.params.history){if(!Y.history||!Y.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=K.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||Y.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||Y.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=K.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=Y.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var a=this.slides.eq(t),i=K.slugify(a.attr("data-history"));Y.location.pathname.includes(e)||(i=e+"/"+i);var s=Y.history.state;s&&s.value===i||(this.params.history.replaceState?Y.history.replaceState({value:i},null,i):Y.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(K.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},_={onHashCange:function(){var e=this,t=f.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){var a=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===a)return;e.slideTo(a)}},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&Y.history&&Y.history.replaceState)Y.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");f.location.hash=a||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=f.location.hash.replace("#","");if(t)for(var a=0,i=e.slides.length;a<i;a+=1){var s=e.slides.eq(a);if((s.attr("data-hash")||s.attr("data-history"))===t&&!s.hasClass(e.params.slideDuplicateClass)){var r=s.index();e.slideTo(r,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&L(Y).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&L(Y).off("hashchange",this.hashNavigation.onHashCange)}},Z={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=V.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))}},Q={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,i=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd(function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},J={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.params.cubeEffect,p=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var h=0;h<s.length;h+=1){var v=s.eq(h),f=h;c&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),p||(y=w,w=0);var T="rotateX("+(p?0:-m)+"deg) rotateY("+(p?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&-1<b&&(u=90*f+90*b,o&&(u=90*-f-90*b)),v.transform(T),d.slideShadows){var E=p?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=p?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(p?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(p?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(u)-90*Math.floor(Math.abs(u)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),k=d.shadowScale,z=d.shadowScale/M,P=d.shadowOffset;e.transform("scale3d("+k+", 1, "+z+") translate3d(0px, "+(n/2+P)+"px, "+-n/2/z+"px) rotateX(-90deg)")}var $=I.isSafari||I.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(t.isHorizontal()?0:u)+"deg) rotateY("+(t.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},ee={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=l,o=-n,n=l=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var a=this,t=a.slides,i=a.activeIndex,s=a.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),a.params.virtualTranslate&&0!==e){var r=!1;t.eq(i).transitionEnd(function(){if(!r&&a&&!a.destroyed){r=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)s.trigger(e[t])}})}}},te={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.$wrapperEl,r=e.slidesSizesGrid,n=e.params.coverflowEffect,o=e.isHorizontal(),l=e.translate,d=o?t/2-l:a/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,h=i.length;u<h;u+=1){var v=i.eq(u),f=r[u],m=(d-v[0].swiperSlideOffset-f/2)/f*n.modifier,g=o?p*m:0,b=o?0:p*m,w=-c*Math.abs(m),y=o?0:n.stretch*m,x=o?n.stretch*m:0;Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0);var T="translate3d("+x+"px,"+y+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg)";if(v.transform(T),v[0].style.zIndex=1-Math.abs(Math.round(m)),n.slideShadows){var E=o?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=o?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=0<m?m:0),S.length&&(S[0].style.opacity=0<-m?-m:0)}}(R.pointerEvents||R.prefixedPointerEvents)&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},ae={init:function(){var e=this,t=e.params.thumbs,a=e.constructor;t.swiper instanceof a?(e.thumbs.swiper=t.swiper,V.extend(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),V.extend(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):V.isObject(t.swiper)&&(e.thumbs.swiper=new a(V.extend({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick)},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex;if(null!=a){var i;if(i=t.params.loop?parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var s=e.activeIndex;e.slides.eq(s).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,s=e.activeIndex);var r=e.slides.eq(s).prevAll('[data-swiper-slide-index="'+i+'"]').eq(0).index(),n=e.slides.eq(s).nextAll('[data-swiper-slide-index="'+i+'"]').eq(0).index();i=void 0===r?n:void 0===n?r:n-s<s-r?n:r}e.slideTo(i)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView;if(t.realIndex!==a.realIndex){var s,r=a.activeIndex;if(a.params.loop){a.slides.eq(r).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,r=a.activeIndex);var n=a.slides.eq(r).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),o=a.slides.eq(r).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r<r-n?o:n}else s=t.realIndex;a.visibleSlidesIndexes.indexOf(s)<0&&(a.params.centeredSlides?s=r<s?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:r<s&&(s=s-i+1),a.slideTo(s,e?0:void 0))}var l=1,d=t.params.thumbs.slideThumbActiveClass;if(1<t.params.slidesPerView&&!t.params.centeredSlides&&(l=t.params.slidesPerView),a.slides.removeClass(d),a.params.loop)for(var p=0;p<l;p+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+p)+'"]').addClass(d);else for(var c=0;c<l;c+=1)a.slides.eq(t.realIndex+c).addClass(d)}}},ie=[C,M,k,z,$,O,H,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;V.extend(e,{mousewheel:{enabled:!1,enable:B.enable.bind(e),disable:B.disable.bind(e),handle:B.handle.bind(e),handleMouseEnter:B.handleMouseEnter.bind(e),handleMouseLeave:B.handleMouseLeave.bind(e),lastScrollTime:V.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){V.extend(this,{navigation:{init:G.init.bind(this),update:G.update.bind(this),destroy:G.destroy.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t=this.navigation,a=t.$nextEl,i=t.$prevEl;!this.params.navigation.hideOnClick||L(e.target).is(i)||L(e.target).is(a)||(a&&a.toggleClass(this.params.navigation.hiddenClass),i&&i.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){var e=this;V.extend(e,{pagination:{init:N.init.bind(e),render:N.render.bind(e),update:N.update.bind(e),destroy:N.destroy.bind(e),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!L(e.target).hasClass(t.params.pagination.bulletClass)&&t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){var e=this;V.extend(e,{scrollbar:{init:X.init.bind(e),destroy:X.destroy.bind(e),updateSize:X.updateSize.bind(e),setTranslate:X.setTranslate.bind(e),setTransition:X.setTransition.bind(e),enableDraggable:X.enableDraggable.bind(e),disableDraggable:X.disableDraggable.bind(e),setDragPosition:X.setDragPosition.bind(e),onDragStart:X.onDragStart.bind(e),onDragMove:X.onDragMove.bind(e),onDragEnd:X.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){V.extend(this,{parallax:{setTransform:F.setTransform.bind(this),setTranslate:F.setTranslate.bind(this),setTransition:F.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var t=this,a={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){a[e]=q[e].bind(t)}),V.extend(t,{zoom:a})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){V.extend(this,{lazy:{initialImageLoaded:!1,load:W.load.bind(this),loadInSlide:W.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;V.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:j.getInterpolateFunction.bind(e),setTranslate:j.setTranslate.bind(e),setTransition:j.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;V.extend(t,{a11y:{liveRegion:L('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(U).forEach(function(e){t.a11y[e]=U[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;V.extend(e,{history:{init:K.init.bind(e),setHistory:K.setHistory.bind(e),setHistoryPopState:K.setHistoryPopState.bind(e),scrollToSlide:K.scrollToSlide.bind(e),destroy:K.destroy.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;V.extend(e,{hashNavigation:{initialized:!1,init:_.init.bind(e),destroy:_.destroy.bind(e),setHash:_.setHash.bind(e),onHashCange:_.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var t=this;V.extend(t,{autoplay:{running:!1,paused:!1,run:Z.run.bind(t),start:Z.start.bind(t),stop:Z.stop.bind(t),pause:Z.pause.bind(t),onTransitionEnd:function(e){t&&!t.destroyed&&t.$wrapperEl&&e.target===this&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){V.extend(this,{fadeEffect:{setTranslate:Q.setTranslate.bind(this),setTransition:Q.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};V.extend(e.params,t),V.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){V.extend(this,{cubeEffect:{setTranslate:J.setTranslate.bind(this),setTransition:J.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};V.extend(e.params,t),V.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){V.extend(this,{flipEffect:{setTranslate:ee.setTranslate.bind(this),setTransition:ee.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};V.extend(e.params,t),V.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){V.extend(this,{coverflowEffect:{setTranslate:te.setTranslate.bind(this),setTransition:te.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){V.extend(this,{thumbs:{swiper:null,init:ae.init.bind(this),update:ae.update.bind(this),onThumbClick:ae.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===S.use&&(S.use=S.Class.use,S.installModule=S.Class.installModule),S.use(ie),S});

$(function(){
	var _width = $(window).width();
	if(_width < 601){
		$(".pic-wall-contain").each(function(){
			var _this = $(this);
			if(_this.find(".solo-pic").length < 1){
				_this.attr("aria-valuemax",_this.find(".swiper-wrapper .swiper-slide").length);
				var mySwiper = new Swiper(_this[0],{
					grabCursor : true,
					loop : true,
					autoplay:true,
		  			pagination: {
		    			el: _this.find(".swiper-pagination")[0],
		    			clickable: true,
		    		},
		    		on:{
		    			slideChange: function(){
		    				_this.attr("aria-valuenow",this.realIndex + 1);
		    			},
		    		},
		    	})
				_this.find(".swiper-pagination .swiper-pagination-bullet").focus(function(){
					mySwiper.autoplay.stop();
				})
			}
		});
	}else{
		$(".pic-wall-contain .grid-item").each(function(){

			$(this).on("click",function(){
				if($(this).hasClass("canClick")){
					var picture = $(this).find("picture");
					var popUpPicture= $(this).find(".popUpPicture");
					if(popUpPicture.length == 0) {
						$.fancybox($(picture).clone(),{
							openEffect : 'none',
							closeEffect	: 'none',
							autoSize : true,
							autoHeight:true,
							autoWidth:true,
							padding:0,
						});
					}else {
						$.fancybox($(popUpPicture).clone(),{
							openEffect : 'none',
							closeEffect	: 'none',
							autoSize : true,
							autoHeight:true,
							autoWidth:true,
							padding:0,
						});
					}

				}
			});
		});
	}
});

$(window).on('load',function(){
	var _width = $(window).width();
		function checkR1(_this){
		if($(_this)[0].getBoundingClientRect().width.toFixed(2) != $(_this)[0].getBoundingClientRect().height.toFixed(2)){
			$(_this).css("height",$(_this)[0].getBoundingClientRect().width.toFixed(2)+"px");
		}
	}
	function checkR2(_this){
		if($(_this)[0].getBoundingClientRect().width.toFixed(2) != $(_this)[0].getBoundingClientRect().height.toFixed(2)*2){
			$(_this).css("height",$(_this)[0].getBoundingClientRect().width.toFixed(2)/2+"px");
		}
	}
	function checkR3(_this){
		if($(_this)[0].getBoundingClientRect().width.toFixed(2) != $(_this)[0].getBoundingClientRect().height.toFixed(2)*3){
			$(_this).css("height",$(_this)[0].getBoundingClientRect().width.toFixed(2)/3+"px");
		}
	}
	function checkRhalf(_this){
		if($(_this)[0].getBoundingClientRect().width.toFixed(2) != $(_this)[0].getBoundingClientRect().height.toFixed(2)*0.5){
			$(_this).css("height",$(_this)[0].getBoundingClientRect().width.toFixed(2)*2+"px");
		}
	}
	if(_width >= 1281){
		$(".pic-wall-contain .five-pic .item1 img,.pic-wall-contain .five-pic .item3 img,.pic-wall-contain .five-pic .item4 img,.pic-wall-contain .four-pic .item1 img,.pic-wall-contain .four-pic .item3 img").each(function(){
			checkR1(this);
		});
		$(".pic-wall-contain .five-pic .item2 img,.pic-wall-contain .five-pic .item5 img,.pic-wall-contain .four-pic .item4 img").each(function(){
			checkR2(this);
		});
		$(".pic-wall-contain .four-pic .item2 img").each(function(){
			checkR3(this);
		});
	}else if(_width >= 601){
		$(".pic-wall-contain .five-pic .item2 img,.pic-wall-contain .five-pic .item3 img,.pic-wall-contain .five-pic .item4 img,.pic-wall-contain .five-pic .item5 img,.pic-wall-contain .four-pic .item3 img,.pic-wall-contain .four-pic .item4 img").each(function(){
			checkR1(this);
		});
		$(".pic-wall-contain .four-pic .item2 img").each(function(){
			checkR2(this);
		});
		$(".pic-wall-contain .five-pic .item1 img,.pic-wall-contain .four-pic .item1 img").each(function(){
			checkRhalf(this);
		});
	}
});
$(function(){
	$(".swiper-component").each(function(){
		var _this = $(this);
		_this.find(".swiper-container").attr("aria-valuemax",_this.find(".swiper-container .swiper-slide").length);
		if(_this.find(".swiper-container").data("custom") == "yes"){
			var mySwiper = new Swiper(_this.find(".swiper-container")[0],{
				grabCursor : true,
				loop : true,
				autoplay:true,
	  			pagination: {
	    			el: _this.find(".swiper-pagination")[0],
	    			clickable: true,
	    			renderBullet: function(index, className){
	    				var _slider = _this.find(".swiper-container .swiper-slide").eq(index + 1);
	    				return '<div style="border: 1px solid '+ _slider.data('icolor') +';" class="inline-icon ' + className + '"><p style="color:'+ _slider.data('icolor') +'">'+ _slider.data('iname') +'</p><b style="background-color:'+_slider.data("backcolor")+'"></b></div>';
	    			},
	    		},
	    		navigation: {
	    			nextEl: _this.find(".swiper-button-next")[0],
	    			prevEl: _this.find(".swiper-button-prev")[0],
	    		},
	    		on:{
	    			slideChange: function(){
	    				_this.find(".swiper-container").attr("aria-valuenow",this.realIndex + 1);
	    			},
	    		},
	    	})
		}else{
			var mySwiper = new Swiper(_this.find(".swiper-container")[0],{
				grabCursor : true,
				loop : true,
				autoplay:true,
	  			pagination: {
	    			el: _this.find(".swiper-pagination")[0],
	    			bulletElement : 'li',
	    			clickable: true,
	    		},
	    		navigation: {
	    			nextEl: _this.find(".swiper-button-next")[0],
	    			prevEl: _this.find(".swiper-button-prev")[0],
	    		},
	    		on:{
	    			slideChange: function(){
	    				_this.find(".swiper-container").attr("aria-valuenow",this.realIndex + 1);
	    			},
	    		},
	    	})
    	}
    	mySwiper.el.onmouseover = function(){
  			mySwiper.autoplay.stop();
		}
		mySwiper.el.onmouseout = function(){
  			mySwiper.autoplay.start();
		}
		_this.find(".swiper-pagination .swiper-pagination-bullet").focus(function(){
			mySwiper.autoplay.stop();
		})
	});
});
