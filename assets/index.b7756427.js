var q=Object.defineProperty;var O=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var U=(n,t,i)=>t in n?q(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i,B=(n,t)=>{for(var i in t||(t={}))V.call(t,i)&&U(n,i,t[i]);if(O)for(var i of O(t))X.call(t,i)&&U(n,i,t[i]);return n};var J=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);import{l as Y,t as _,R as u,a as $}from"./vendor.898904d5.js";var ot=J((ct,A)=>{const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}};F();async function K(){let n="MLP_3hl_128nphl";return n+="/model.json",n.includes("MLP")&&(n="mlp/"+n),await Y(window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")+(window.location.hostname.includes("github")?"/gru/":"/")+"models/"+n)}class k{constructor(){this.top=1/0,this.bottom=0,this.left=1/0,this.right=0,Object.defineProperty(this,"width",{get:function(){return this.right-this.left},enumerable:!0}),Object.defineProperty(this,"height",{get:function(){return this.bottom-this.top},enumerable:!0}),Object.defineProperty(this,"ratio",{get:function(){return this.width/this.height},enumerable:!0}),Object.defineProperty(this,"size",{get:function(){return this.width*this.height},enumerable:!0}),this.add=function(i,e){this.top=Math.min(this.top,e),this.bottom=Math.max(this.bottom,e+1),this.left=Math.min(this.left,i),this.right=Math.max(this.right,i+1)},this.intersect=function(i){var e=!(i.left>this.right||i.right<this.left||i.top>this.bottom||i.bottom<this.top);return e&&(e=new k,e.left=Math.max(this.left,i.left),e.top=Math.max(this.top,i.top),e.right=Math.min(this.right,i.right),e.bottom=Math.min(this.bottom,i.bottom)),e},this.merge=function(i,e){if(e){var s=this.intersect(i);if(!s||s.size<this.size/4)return}this.top=Math.min(this.top,i.top),this.bottom=Math.max(this.bottom,i.bottom),this.left=Math.min(this.left,i.left),this.right=Math.max(this.right,i.right)}}}class L{constructor(t){this.level=t,this.moments=[0,0,0,0,0],this.area=0,this.variation=1/0,this.stable=!1,this.rect=new k,this.accumulate=function(e,s){this.area+=1,this.moments[0]+=e,this.moments[1]+=s,this.moments[2]+=e*e,this.moments[3]+=e*s,this.moments[4]+=s*s,this.rect.add(e,s)},this.merge=function(e){this.area+=e.area,this.moments[0]+=e.moments[0],this.moments[1]+=e.moments[1],this.moments[2]+=e.moments[2],this.moments[3]+=e.moments[3],this.moments[4]+=e.moments[4],e.next=this.child,this.child=e,e.parent=this,this.rect.merge(e.rect)},this.process=function(e,s,o,a,d){for(var h=this;h.parent&&h.parent.level<=this.level+e;)h=h.parent;for(this.variation=(h.area-this.area)/this.area,this.stable=this.area>=s&&this.area<=o&&this.variation<=a,h=this.parent;h&&this.area>d*h.area;h=h.parent)h.variation<=this.variation&&(this.stable=!1),this.variation<h.variation&&(h.stable=!1);for(var c=this.child;c;c=c.next)c.process(e,s,o,a)},this.save=function(e){this.stable&&e.push(this);for(var s=this.child;s;s=s.next)s.save(e)},this.getRect=function(){return this.rect}}}class Q{constructor(t){var i=Object.assign({delta:2,minArea:5e-4,maxArea:.1,maxVariation:.5,minDiversity:.5},t),e=256;this.eight=!0,this.extract=function(o){var a=[],d=[],h=[],c=e,l=[],P=[],w=o.data,f=o.width,v=o.height,M=function(D,G){for(var N;D>l[l.length-1].level;){if(N=l.pop(),D<l[l.length-1].level){l.push(new L(D,G)),l[l.length-1].merge(N);return}l[l.length-1].merge(N)}},R=0,r,m=w.length;for(r=0;r<m;r+=4)a[R]=w[r],R+=1;for(m=f*v,r=0;r<m;r+=1)d[r]=!1;for(r=0;r<e;r+=1)h[r]=[];l.push(new L(e));var g=0,p=0,x=a[0];d[0]=!0,l.push(new L(x));for(var y,C,T,I,b,E,S,z=[[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[-1,-1],[1,-1]];;){for(y=g%f,C=Math.floor(g/f);p<(this.eight?8:4);++p)if(T=y+z[p][0],I=C+z[p][1],T>=0&&I>=0&&T<f&&I<v&&(b=I*f+T,!d[b])){if(E=a[b],d[b]=!0,E<x){h[x].push(g<<4|p+1),c=Math.min(x,c),g=b,p=0,x=E,l.push(new L(x)),y=g%f,C=Math.floor(g/f);continue}h[E].push(b<<4),c=Math.min(E,c)}if(l[l.length-1].accumulate(y,C),c===e)return M(e,g),l[l.length-1].process(i.delta,i.minArea*f*v,i.maxArea*f*v,i.maxVariation,i.minDiversity),l[l.length-1].save(P),P;for(g=h[c][h[c].length-1]>>4,p=h[c][h[c].length-1]&15,h[c].pop();c<e&&h[c].length===0;)++c;S=a[g],S!==x&&(M(S,g),x=S)}}}}A.exports={MSER:Q};let j;(async()=>{j=await K()})();let W=new(void 0)({delta:100,minArea:1e-4,maxArea:.5,maxVariation:.5,minDiversity:.33});function Z(n){let t=n.getContext("2d");if(!t)throw"Could not get context";let i=t.getImageData(0,0,n.width,n.height),e={x:0,y:0},s=B({},e),o=B({},e);for(var a=0;a<i.data.length;a+=4)i.data[a+3]!==0&&((e.x<=s.x||s.x==0)&&(s.x=e.x),(e.y<=s.y||s.y==0)&&(s.y=e.y),(e.x>=o.x||o.x==0)&&(o.x=e.x),(e.y>=o.y||o.y==0)&&(o.y=e.y)),e.x+=1,e.x==n.width&&(e.x=0,e.y+=1);return{upperLeft:s,lowerRight:o}}function H(n,t){t||(t=Z(n));let{upperLeft:i,lowerRight:e}=t,s=document.createElement("canvas"),o=s.getContext("2d");if(!o)throw"Could not get context";s.width=500,s.height=500;let a=e.x-i.x,d=e.y-i.y,h=a/d;return a>d?(a=300,d=a/h):(d=300,a=d*h),o.drawImage(n,i.x,i.y,e.x-i.x,e.y-i.y,250-a/2,250-d/2,a,d),s}function tt(n,t){let i=[],e=[];for(var s=0;s<n.data.length;s+=4)n.data[s+3]==0?(n.data[s]=0,n.data[s+1]=0,n.data[s+2]=0,n.data[s+3]=255,e.push(0)):(n.data[s]=255,n.data[s+1]=255,n.data[s+2]=255,e.push(n.data[s+3]==255?255:0)),e.length==t&&(i.push(e),e=[]);return i}function et(n){for(var t=0;t<n.data.length;t+=4)n.data[t+3]==0?(n.data[t]=255,n.data[t+1]=255,n.data[t+2]=255,n.data[t+3]=255):(n.data[t]=0,n.data[t+1]=0,n.data[t+2]=0,n.data[t+3]=255);return n}function it(n,t,i){return new Promise((e,s)=>{let o=n.toDataURL(),a=document.createElement("canvas");a||s("Canvas failed to initialize"),a.width=28,a.height=28;let d=a.getContext("2d"),h=n.getContext("2d"),c=document.createElement("img");c.src=o,c.onload=()=>{let l=h.getImageData(0,0,n.width,n.height);et(l);let P=W.extract(l).map(r=>r.rect),w,f;d.scale(t/c.width,i/c.height);let v=[],M=[];P.forEach(r=>{let m={upperLeft:{x:r.left,y:r.top},lowerRight:{x:r.left+r.width,y:r.top+r.height}};M.push(m),d.clearRect(0,0,500,500),d.drawImage(H(n,m),0,0),w=d.getImageData(0,0,t,i),f=tt(w,t);let g=f.map(x=>x.map(y=>[y])),p=j.predict(_([g],[1,28,28,1]));v.push({prediction:p.dataSync().indexOf(1),left:r.left}),d.putImageData(w,0,0)}),v.sort((r,m)=>r.left-m.left);let R=parseInt(v.reduce((r,m)=>r+(m.prediction>0?m.prediction:""),""));console.log("Number "+R),e({img:a.toDataURL(),boundingBoxes:M,prediction:R})},c.onerror=s})}class st extends u.Component{constructor(t){super(t);this.state={pen:{color:"#ff7f90",size:25},pts:[],touchPts:[],isDown:!1,guess:""},this.canvasRef=u.createRef(),this.imgRef=u.createRef(),this.canvas=null,this.context=null,this.canvasBoundingRect=null,this.drawPoints=this.drawPoints.bind(this),this.drawPointsTouch=this.drawPointsTouch.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.getContext=this.getContext.bind(this),this.clear=this.clear.bind(this),this.updateImg=this.updateImg.bind(this),this.getEventRelativeCoordinates=this.getEventRelativeCoordinates.bind(this),this.handleResize=this.handleResize.bind(this)}getContext(){var t,i,e,s;!this.canvasRef.current||(this.canvas=this.canvasRef.current,this.canvas2=document.createElement("canvas"),this.context2=(i=(t=this.canvas2)==null?void 0:t.getContext("2d"))!=null?i:null,this.context=(s=(e=this.canvas)==null?void 0:e.getContext("2d"))!=null?s:null,this.canvas&&(this.canvasBoundingRect=this.canvas.getBoundingClientRect(),this.canvas2.width=this.canvas.width,this.canvas2.height=this.canvas.height))}componentDidMount(){this.getContext(),window.addEventListener("resize",this.handleResize)}componentDidUpdate(){if(this.canvas2&&this.context2&&this.canvas){let t=this.canvas2;this.getContext(),this.context2.drawImage(t,0,0,this.canvas.width,this.canvas.height)}}handleResize(){this.componentDidUpdate()}clear(){this.context&&this.canvas&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context2&&this.canvas2&&this.context2.clearRect(0,0,this.canvas2.width,this.canvas2.height)}updateImg(){this.canvas&&it(this.canvas,28,28).then(({img:t,boundingBoxes:i,prediction:e})=>{if(this.imgRef.current&&(this.imgRef.current.src=t),!this.context)return null;this.setState({guess:e.toString()})})}onMouseDown(t){t.preventDefault(),this.state.isDown=!0,this.state.pts.push(this.getEventRelativeCoordinates(t)),this.drawPoints()}onTouchStart(t){this.state.isDown=!0,this.getEventRelativeCoordinates(t).forEach(e=>{this.state.touchPts.push([e])}),this.drawPointsTouch()}onMouseUp(t){t.preventDefault(),this.state.isDown=!1,this.context2&&this.canvas&&this.context2.clearRect(0,0,this.canvas.width,this.canvas.height),this.context2&&this.canvas&&this.context2.drawImage(this.canvas,0,0,this.canvas.width,this.canvas.height),this.setState({pts:[]}),this.updateImg()}onTouchEnd(t){this.state.isDown=!1,this.context2&&this.canvas&&this.context2.clearRect(0,0,this.canvas.width,this.canvas.height),this.context2&&this.canvas&&this.context2.drawImage(this.canvas,0,0,this.canvas.width,this.canvas.height),this.setState({touchPts:[]}),this.updateImg()}onMouseMove(t){t.preventDefault(),!(!this.state.isDown||!this.context||!this.canvas)&&(this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.canvas2&&this.context.drawImage(this.canvas2,0,0),this.state.pts.push(this.getEventRelativeCoordinates(t)),this.drawPoints())}onTouchMove(t){let i=this.getEventRelativeCoordinates(t);console.log(i.length),i.forEach((e,s)=>{if(!(s>1)){if(!this.state.isDown||!this.context||!this.canvas||!this.canvas2)throw"No canvas";this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.canvas2,0,0),this.state.touchPts[this.state.touchPts.length-1-s].push(e),this.drawPointsTouch()}})}getEventRelativeCoordinates(t){if(!this.canvasBoundingRect)throw"No bounding rect for canvas found";if(t.nativeEvent instanceof TouchEvent){t=t;let i=[];for(let e=0;e<t.touches.length;e++)i.push({x:(t.touches[e].clientX-this.canvasBoundingRect.left)*t.target.width/this.canvasBoundingRect.width,y:(t.touches[e].clientY-this.canvasBoundingRect.top)*t.target.height/this.canvasBoundingRect.height});return i}else return t=t,{x:(t.clientX-this.canvasBoundingRect.left)*t.target.width/this.canvasBoundingRect.width,y:(t.clientY-this.canvasBoundingRect.top)*t.target.height/this.canvasBoundingRect.height}}drawPointsTouch(){this.state.touchPts.forEach(t=>{if(!!this.context){this.context.lineCap="round",this.context.lineWidth=this.state.pen.size;var i=0,e=t.length>1?1:0;for(this.context.beginPath(),this.context.lineJoin="round",this.context.moveTo(t[0].x,t[0].y);i<t.length-e;i++)this.context.quadraticCurveTo(t[i].x,t[i].y,(t[i].x+t[i+e].x)/2,(t[i].y+t[i+e].y)/2);this.context.strokeStyle=this.state.pen.color,this.context.stroke(),this.context.closePath()}})}drawPoints(){if(!this.context)return;this.context.lineCap="round",this.context.lineWidth=this.state.pen.size;let t=this.state.pts;var i=0,e=t.length>1?1:0;for(this.context.beginPath(),this.context.lineJoin="round",this.context.moveTo(t[0].x,t[0].y);i<t.length-e;i++)this.context.quadraticCurveTo(t[i].x,t[i].y,(t[i].x+t[i+e].x)/2,(t[i].y+t[i+e].y)/2);this.context.strokeStyle=this.state.pen.color,this.context.stroke(),this.context.closePath()}render(){return u.createElement("div",null,u.createElement("div",{className:"flex justify-between p-3 border-4 border-gray-500 border-dashed rounded-3xl mb-2"},u.createElement("div",{className:"flex flex-col justify-center"},u.createElement("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-light font-mono py-2 px-4 rounded-2xl focus:outline-none",onMouseUpCapture:()=>this.clear()},"clear")),u.createElement("div",{className:"inline-flex"},u.createElement("div",{className:"flex flex-col justify-center"},u.createElement("div",{className:"text-stroke-cyan-700 p-2 text-transparent opacity-85   overflow-hidden text-4xl text-stroke-sm md:text-stroke-md "},"Guess:")),u.createElement("div",{className:"flex flex-col justify-center"},u.createElement("div",{className:"text-stroke-orange-300 p-2 text-transparent opacity-85   overflow-hidden text-4xl text-stroke-sm md:text-stroke-md"},this.state.guess)))),u.createElement("canvas",{className:" border-4 border-gray-500 border rounded-3xl shadow-2xl",onMouseMove:t=>this.onMouseMove(t),onMouseDown:t=>this.onMouseDown(t),onMouseUp:t=>this.onMouseUp(t),onMouseLeave:t=>this.onMouseUp(t),onTouchMove:t=>this.onTouchMove(t),onTouchStart:t=>this.onTouchStart(t),onTouchEnd:t=>this.onTouchEnd(t),ref:this.canvasRef,width:"500",height:"500",style:{padding:"0",margin:"auto",display:"block",width:"100%",touchAction:"none"}}),u.createElement("img",{ref:this.imgRef,width:"200px",className:" border-4 border-gray-500"}))}}class nt extends u.Component{render(){return u.createElement("div",{style:{display:"grid",placeItems:"center",width:"100%",paddingTop:"10px"}},u.createElement(st,null))}}$.render(u.createElement(u.StrictMode,null,u.createElement(nt,null)),document.getElementById("root"))});export default ot();
