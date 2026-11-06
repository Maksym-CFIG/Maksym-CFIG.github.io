import{s as B}from"./about.BkmWgUAE.js";import"./preload-helper.BlTxHScW.js";import"./three.module.CforAgrD.js";const W=`
attribute vec2 p;
varying vec2 vUv;
void main() {
  vUv = vec2(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5);
  gl_Position = vec4(p, 0.0, 1.0);
}
`,O=`
precision mediump float;
varying vec2 vUv;
uniform sampler2D tex;
uniform float k;
uniform float seed;

float hash(vec2 q) { return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 q) {
  vec2 i = floor(q);
  vec2 f = fract(q);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 q) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) { s += a * noise(q); q *= 2.03; a *= 0.5; }
  return s;
}
// same as CSS grayscale(1) brightness(.92)
vec3 gray(vec3 c) { return vec3(dot(c, vec3(0.2126, 0.7152, 0.0722)) * 0.92); }

void main() {
  vec3 col = texture2D(tex, vUv).rgb;
  vec3 g = gray(col);
  // ink bloom from the face, low-frequency noise edge
  vec2 d = (vUv - vec2(0.5, 0.3)) * vec2(0.75, 1.0);
  float t = length(d) * 1.15 + (fbm(vUv * 3.2 + seed) - 0.5) * 0.55;
  float T = mix(-0.32, 1.45, k);
  float w = 0.09;
  float m = 1.0 - smoothstep(T - w, T + w, t);
  float rim = 1.0 - smoothstep(0.0, w, abs(t - T));
  vec3 outc = mix(g, col, m) + rim * 0.07 * (1.0 - k * 0.5);
  gl_FragColor = vec4(outc, 1.0);
}
`;function H(n){const e=n.getContext("webgl",{alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1});if(!e)return null;const t=(c,d)=>{const u=e.createShader(c);if(e.shaderSource(u,d),e.compileShader(u),!e.getShaderParameter(u,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(u));return u},r=e.createProgram();e.attachShader(r,t(e.VERTEX_SHADER,W)),e.attachShader(r,t(e.FRAGMENT_SHADER,O)),e.linkProgram(r),e.useProgram(r);const o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const l=e.getAttribLocation(r,"p");e.enableVertexAttribArray(l),e.vertexAttribPointer(l,2,e.FLOAT,!1,0,0);const i=e.createTexture();return e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),{gl:e,uK:e.getUniformLocation(r,"k"),uSeed:e.getUniformLocation(r,"seed")}}function k(){const n=[];for(let a=0;a<3;a++){const s=document.createElement("canvas");s.className="pp__fx",s.style.cssText="position:absolute;inset:0;display:block;width:100%;height:100%";let p=null;try{p=H(s)}catch(f){console.warn("pp fx",f),p=null}if(!p)return null;n.push({canvas:s,g:p,owner:null,loaded:null})}function e(a){const s=a.fxSlot;s&&(s.owner=null,s.canvas.remove(),a.fxSlot=null)}function t(a){const s=n.find(z=>!z.owner);if(!s||!a.color.complete||!a.color.naturalWidth)return null;s.owner=a,a.fxSlot=s;const{gl:p}=s.g,f=Math.min(2,devicePixelRatio||1),x=Math.round(a.w*f),w=Math.round(a.h*f);return(s.canvas.width!==x||s.canvas.height!==w)&&(s.canvas.width=x,s.canvas.height=w),p.viewport(0,0,x,w),s.loaded!==a.color&&(p.texImage2D(p.TEXTURE_2D,0,p.RGB,p.RGB,p.UNSIGNED_BYTE,a.color),s.loaded=a.color),p.uniform1f(s.g.uSeed,a.i*7.31%13),a.el.append(s.canvas),s}const r=1,o=new Map,l=new WeakMap;let i=0,c=0;function d(a,s){if(s<=.001||s>=.999){e(a),a.color.style.opacity=s>=.999?"1":"0";return}const p=a.fxSlot||t(a);if(!p){a.color.style.opacity=s.toFixed(2);return}a.color.style.opacity="0";const{gl:f,uK:x}=p.g;f.uniform1f(x,s),f.drawArrays(f.TRIANGLE_STRIP,0,4)}function u(a){i=0;const s=c?Math.min(.1,(a-c)/1e3):.016;c=a;for(const[p,f]of o){const x=f.target-f.shown,w=s/r;f.shown+=Math.abs(x)<=w?x:Math.sign(x)*w,l.set(p,f.shown),d(p,f.shown),f.shown===f.target&&o.delete(p)}o.size?i=requestAnimationFrame(u):c=0}return{set(a,s){const p=o.get(a)||{shown:l.get(a)??s,target:s};p.target=s,o.set(a,p),i||(i=requestAnimationFrame(u))},destroy(){cancelAnimationFrame(i),i=0,o.clear();for(const a of n)a.canvas.remove(),a.g.gl.getExtension("WEBGL_lose_context")?.loseContext();n.length=0}}}function Y(){if(!m)return 0;const n=document.querySelector("[data-coverflow]");if(!n)return 0;const e=innerHeight-n.getBoundingClientRect().bottom,t=m.getBoundingClientRect().top,r=t+e;return r>1?E(e/r,0,1):t<=0?1:0}const E=(n,e,t)=>Math.min(t,Math.max(e,n)),R=(n,e,t)=>{const r=E((t-n)/(e-n),0,1);return r*r*(3-2*r)},V=.08;let m=null,g=null,A=null,M=null,T=[],S=1e3,q=1,D=0,U=null,C=!1,h=0,N=-1,L=0,_=!1,F=null,P=null,y=null,$=1,b={};function I(){const n=document.documentElement.clientWidth,e=innerHeight;_=n<=900,$=e;const t=m.getBoundingClientRect();g.style.width=`${n}px`,g.style.marginLeft=`${-t.left}px`,Q(n,e),N=-1}function v(n,e,t,r,o){const l=Math.round(t/r)*r;n.last[e]!==l&&(n.last[e]=l,o(l))}const K=.18,j=n=>n*n*n*(n*(n*6-15)+10);function J(n){const e=Math.floor(n),t=n-e,r=K/2,o=E((t-r)/(1-2*r),0,1);return e+j(o)}function Q(n,e){const t=T.length;S=_?760:Math.round(E(n*.68,900,1250));const r=e*(_?.46:.57);b={D:_?750:850,X1:_?n*.42:n*.3,X2:n*.04,exitX:_?n*.6:n*.3},T.forEach((l,i)=>{l.side=i%2?1:-1,l.h=Math.round(r),l.w=Math.round(l.h*.75),l.el.style.width=`${l.w}px`,l.cap.dataset.side=l.side>0?"r":"l",l.last={}}),q=t-1,g.style.perspective=`${S}px`;const o=t*.47+.6;m.style.height=`${Math.round(e*(1+o))}px`}function Z(n,e,t){const r=e-t;if(r>=0)return{x:n.side*(Math.pow(Math.min(r,1),1.6)*b.X1+Math.max(0,r-1)*b.X2),y:-Math.min(r,3)*$*.025,z:-r*b.D,r:0,op:1-R(2.6,3.4,r),depth:r};const o=-r;return{x:n.side*Math.pow(o,1.5)*b.exitX,y:0,z:o*b.D*.1,r:n.side*o*6,op:1-R(.1,.9,o),depth:0}}function X(){const n=h,e=g.clientWidth/2;T.forEach((t,r)=>{const o=Z(t,r,n),l=o.op<=.004||o.z>S*.8||o.z<-4600;v(t,"vis",l?0:1,1,c=>{t.el.style.visibility=c?"":"hidden"}),l&&y&&t.fxSlot&&(y.set(t,0),t.last.col=0);let i=0;if(!l){t.el.style.transform=`translate3d(${(o.x-t.w/2).toFixed(1)}px, ${(o.y-t.h/2).toFixed(1)}px, ${o.z.toFixed(1)}px) rotateY(${o.r.toFixed(2)}deg)`;const c=R(.15,3.2,o.depth)*.82;v(t,"fog",c,.01,a=>t.el.style.setProperty("--fog",a.toFixed(2))),v(t,"op",o.op,.01,a=>{t.el.style.opacity=a.toFixed(2)});const d=o.depth>2.2?2:o.depth>1.3?1:0;v(t,"bl",d,1,a=>{t.el.style.filter=a?`blur(${a}px)`:""});const u=Math.abs(r-n);y?v(t,"col",1-R(.02,.92,u),.004,a=>y.set(t,a)):v(t,"col",1-R(.08,.75,u),.01,a=>{t.color.style.opacity=a.toFixed(2)}),i=1-R(.1,.4,u)}if(v(t,"cap",i,.02,c=>{t.cap.style.opacity=c.toFixed(2),t.cap.style.visibility=c>0?"visible":"hidden"}),i>0){const c=S/Math.max(1,S-o.z),d=(1-i)*14;let u,a;_?(u=o.x*c,a=(o.y+t.h/2)*c+22+d):(u=(o.x+t.side*t.w/2)*c+t.side*44,u=E(u,-e+40,e-40),a=(o.y+t.h/2)*c+d),t.cap.style.transform=`translate3d(${u.toFixed(1)}px, ${a.toFixed(1)}px, 0)`}})}function G(n){if(D=requestAnimationFrame(G),!C||!m)return;const e=m.getBoundingClientRect(),t=e.height-g.offsetHeight,r=t>0?E(-e.top/t,0,1):0;let o=E(r/(1-V),0,1)*q;o<T.length-1&&(o=J(o));const l=L?Math.min(.1,(n-L)/1e3):1;L=n,Math.abs(o-h)>q*.35?h=o:h+=(o-h)*(1-Math.exp(-9*l));const i=5e-5;Math.abs(o-h)<i&&(h=o),!(Math.abs(h-N)<i*.4)&&(N=h,X())}function ee(n){const e=[...n.querySelectorAll(".people .person")];m=document.createElement("div"),m.className="pp pp--big",g=document.createElement("div"),g.className="pp__stage",A=document.createElement("div"),A.className="pp__world",M=document.createElement("div"),M.className="pp__caps",g.append(A,M),m.append(g),T=e.map((t,r)=>{const o=t.querySelector("img"),l=document.createElement("figure");l.className="pp__card";const i=document.createElement("img");i.className="pp__img",i.src=o.currentSrc&&o.currentSrc.includes("@2x")?o.currentSrc:o.src.replace(/\.webp$/,"@2x.webp"),i.alt=o.alt,i.width=750,i.height=1e3,i.decoding="async";const c=i.cloneNode();c.className="pp__img pp__img--gray",c.alt="",i.classList.add("pp__img--color"),l.classList.add("pp__card--duo"),l.append(c,i);const d=document.createElement("p");d.className="pp__cap";for(const[u,a]of[["pp__name",".person__name"],["pp__role",".person__role"],["pp__co",".person__co"]]){const s=document.createElement("span");s.className=u,s.textContent=t.querySelector(a)?.textContent||"",d.append(s)}return M.append(d),A.append(l),{el:l,cap:d,color:i,i:r,last:{}}}),T.forEach((t,r)=>{t.cap.dataset.side=r%2?"r":"l"}),n.querySelector(".people").after(m),y=k()}function re(n){n&&n===P&&m?.isConnected||(te(),n&&(P=n,n.setAttribute("data-pp",""),ee(n),I(),h=0,L=0,X(),B(Y),F=()=>{I(),X()},addEventListener("resize",F),U=new IntersectionObserver(([e])=>{C=e.isIntersecting},{rootMargin:"50% 0px"}),U.observe(m),D=requestAnimationFrame(G)))}function te(){cancelAnimationFrame(D),D=0,U?.disconnect(),U=null,C=!1,F&&removeEventListener("resize",F),F=null,m=g=A=M=null,T=[],P=null,B(null),y?.destroy(),y=null}export{te as destroy,re as init};
