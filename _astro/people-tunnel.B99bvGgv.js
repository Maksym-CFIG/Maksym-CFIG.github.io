import{s as G}from"./about.DC-LkUOY.js";import"./Base.astro_astro_type_script_index_0_lang.747yHH0A.js";import"./Lab.astro_astro_type_script_index_0_lang.BKhPu4E9.js";import"./router.UeToN5xW.js";import"./three.module.B-8iX7Ma.js";const V=`
attribute vec2 p;
varying vec2 vUv;
void main() {
  vUv = vec2(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5);
  gl_Position = vec4(p, 0.0, 1.0);
}
`,j=`
precision mediump float;
varying vec2 vUv;
uniform sampler2D tex;
uniform float k;
uniform float mode;
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
  vec3 outc;
  if (mode < 0.5) {
    // a: ink bloom from the face, low-frequency noise edge
    vec2 d = (vUv - vec2(0.5, 0.3)) * vec2(0.75, 1.0);
    float t = length(d) * 1.15 + (fbm(vUv * 3.2 + seed) - 0.5) * 0.55;
    float T = mix(-0.32, 1.45, k);
    float w = 0.09;
    float m = 1.0 - smoothstep(T - w, T + w, t);
    float rim = 1.0 - smoothstep(0.0, w, abs(t - T));
    outc = mix(g, col, m) + rim * 0.07 * (1.0 - k * 0.5);
  } else {
    // b: diagonal wave, thin light band, slight channel split at the edge
    float s = (vUv.x + (1.0 - vUv.y)) * 0.5;
    float T = mix(-0.12, 1.12, k);
    float w = 0.035;
    float m = 1.0 - smoothstep(T - w, T + w, s);
    float e = 1.0 - smoothstep(0.0, w * 1.6, abs(s - T));
    vec2 dir = normalize(vec2(1.0, -1.0));
    vec2 uv2 = vUv - dir * e * 0.006;
    vec3 c2 = vec3(texture2D(tex, uv2 + dir * e * 0.004).r,
                   texture2D(tex, uv2).g,
                   texture2D(tex, uv2 - dir * e * 0.004).b);
    outc = mix(gray(c2), c2, m) + e * 0.09;
  }
  gl_FragColor = vec4(outc, 1.0);
}
`;function K(n){const t=n.getContext("webgl",{alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1});if(!t)return null;const r=(u,p)=>{const l=t.createShader(u);if(t.shaderSource(l,p),t.compileShader(l),!t.getShaderParameter(l,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(l));return l},s=t.createProgram();t.attachShader(s,r(t.VERTEX_SHADER,V)),t.attachShader(s,r(t.FRAGMENT_SHADER,j)),t.linkProgram(s),t.useProgram(s);const o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW);const c=t.getAttribLocation(s,"p");t.enableVertexAttribArray(c),t.vertexAttribPointer(c,2,t.FLOAT,!1,0,0);const e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),{gl:t,uK:t.getUniformLocation(s,"k"),uMode:t.getUniformLocation(s,"mode"),uSeed:t.getUniformLocation(s,"seed")}}function J(n){const t=n==="b"?1:0,r=[];for(let a=0;a<3;a++){const i=document.createElement("canvas");i.className="pp__fx",i.style.cssText="position:absolute;inset:0;display:block;width:100%;height:100%";let f=null;try{f=K(i)}catch(m){console.warn("pp fx",m),f=null}if(!f)return null;r.push({canvas:i,g:f,owner:null,loaded:null})}function s(a){const i=a.fxSlot;i&&(i.owner=null,i.canvas.remove(),a.fxSlot=null)}function o(a){const i=r.find(Y=>!Y.owner);if(!i||!a.color.complete||!a.color.naturalWidth)return null;i.owner=a,a.fxSlot=i;const{gl:f}=i.g,m=Math.min(2,devicePixelRatio||1),E=Math.round(a.w*m),A=Math.round(a.h*m);return(i.canvas.width!==E||i.canvas.height!==A)&&(i.canvas.width=E,i.canvas.height=A),f.viewport(0,0,E,A),i.loaded!==a.color&&(f.texImage2D(f.TEXTURE_2D,0,f.RGB,f.RGB,f.UNSIGNED_BYTE,a.color),i.loaded=a.color),f.uniform1f(i.g.uMode,t),f.uniform1f(i.g.uSeed,a.i*7.31%13),a.el.append(i.canvas),i}const c=1,e=new Map,u=new WeakMap;let p=0,l=0;function x(a,i){if(i<=.001||i>=.999){s(a),a.color.style.opacity=i>=.999?"1":"0";return}const f=a.fxSlot||o(a);if(!f){a.color.style.opacity=i.toFixed(2);return}a.color.style.opacity="0";const{gl:m,uK:E}=f.g;m.uniform1f(E,i),m.drawArrays(m.TRIANGLE_STRIP,0,4)}function d(a){p=0;const i=l?Math.min(.1,(a-l)/1e3):.016;l=a;for(const[f,m]of e){const E=m.target-m.shown,A=i/c;m.shown+=Math.abs(E)<=A?E:Math.sign(E)*A,u.set(f,m.shown),x(f,m.shown),m.shown===m.target&&e.delete(f)}e.size?p=requestAnimationFrame(d):l=0}return{set(a,i){const f=e.get(a)||{shown:u.get(a)??i,target:i};f.target=i,e.set(a,f),p||(p=requestAnimationFrame(d))},destroy(){cancelAnimationFrame(p),p=0,e.clear();for(const a of r)a.canvas.remove(),a.g.gl.getExtension("WEBGL_lose_context")?.loseContext();r.length=0}}}function Q(){if(!g)return 0;const n=document.querySelector("[data-coverflow]");if(!n)return 0;const t=innerHeight-n.getBoundingClientRect().bottom,r=g.getBoundingClientRect().top,s=r+t;return s>1?T(t/s,0,1):r<=0?1:0}const T=(n,t,r)=>Math.min(r,Math.max(t,n)),M=(n,t,r)=>{const s=T((r-n)/(t-n),0,1);return s*s*(3-2*s)},Z=.08;let g=null,y=null,U=null,D=null,_=[],F=1e3,N=1,z=0,q=null,B=!1,v=0,X=-1,P=0,b=!1,L=null,C=null,R=null,w=3,$=1,W=1,h={};function k(){const n=document.documentElement.clientWidth,t=innerHeight;b=n<=900,W=t;const r=g.getBoundingClientRect();y.style.width=`${n}px`,y.style.marginLeft=`${-r.left}px`,ot(n,t),X=-1}function S(n,t,r,s,o){const c=Math.round(r/s)*s;n.last[t]!==c&&(n.last[t]=c,o(c))}function I(){at()}const tt=.18,O=n=>n*n*n*(n*(n*6-15)+10);function et(n){const t=Math.floor(n),r=n-t,s=tt/2,o=T((r-s)/(1-2*s),0,1);return t+O(o)}function ot(n,t){const r=_.length;F=b?760:Math.round(T(n*.68,900,1250));const s=t*(b?.46:.57),o=[.2,-.55,.65,-.1,-.7,.35,.05,-.4,.55,-.25,.3,-.6];if(w===3||w>=5||b)h={kind:3,D:b?750:850,X1:b?n*.42:n*.3,X2:n*.04,exitX:b?n*.6:n*.3},_.forEach((e,u)=>{e.side=u%2?1:-1,e.h=Math.round(s),e.w=Math.round(e.h*.75),e.y=0,e.jy=o[u%o.length]});else{const e=Math.round(T(n*.3,330,520));h={kind:4,step:640,zPass:520,wallX:n*.33,rot:38,frontH:s},_.forEach((l,x)=>{l.side=x%2?1:-1,l.w=e,l.h=Math.round(e*4/3),l.y=o[x%o.length]*t*.06,l.zf=F*(1-l.h/s)})}_.forEach((e,u)=>{e.el.style.width=`${e.w}px`,e.cap.dataset.side=e.side>0?"r":"l",e.last={}}),$=r-1,N=$,y.style.perspective=`${F}px`;const c=r*.47+.6;g.style.height=`${Math.round(t*(1+c))}px`}function nt(n,t,r){const s=t-r;if(h.kind===3){if(s>=0)return{x:n.side*(Math.pow(Math.min(s,1),1.6)*h.X1+Math.max(0,s-1)*h.X2),y:-Math.min(s,3)*W*.025,z:-s*h.D,r:0,op:1-M(2.6,3.4,s),depth:s};const u=-s;return{x:n.side*Math.pow(u,1.5)*h.exitX,y:0,z:u*h.D*.1,r:n.side*u*6,op:1-M(.1,.9,u),depth:0}}const o=-s*h.step-h.zPass,c={x:n.side*h.wallX,y:n.y,z:o,r:-n.side*h.rot},e=O(1-T((Math.abs(s)-.1)/.78,0,1));return{x:c.x*(1-e),y:c.y*(1-e),z:c.z+(n.zf-c.z)*e,r:c.r*(1-e),op:(.3+.7*e)*(1-M(-150,220,c.z)*(1-e)),f:e,depth:Math.max(0,(-o-700)/900)*(1-e)}}function at(){const n=v,t=y.clientWidth/2,r=_.map((o,c)=>nt(o,c,n)),s=h.kind===4?Math.max(...r.map(o=>o.f)):0;_.forEach((o,c)=>{const e=r[c],u=e.op<=.004||e.z>F*.8||e.z<-4600;S(o,"vis",u?0:1,1,l=>{o.el.style.visibility=l?"":"hidden"}),u&&R&&o.fxSlot&&(R.set(o,0),o.last.col=0);let p=0;if(!u){o.el.style.transform=`translate3d(${(e.x-o.w/2).toFixed(1)}px, ${(e.y-o.h/2).toFixed(1)}px, ${e.z.toFixed(1)}px) rotateY(${e.r.toFixed(2)}deg)`;let l=M(.15,3.2,e.depth)*.82;h.kind===4&&(l=Math.max(l,s*(1-e.f)*.2)),S(o,"fog",l,.01,a=>o.el.style.setProperty("--fog",a.toFixed(2))),S(o,"op",e.op,.01,a=>{o.el.style.opacity=a.toFixed(2)});const x=e.depth>2.2?2:e.depth>1.3?1:0;S(o,"bl",x,1,a=>{o.el.style.filter=a?`blur(${a}px)`:""});const d=Math.abs(c-n);if(o.color){const a=h.kind!==3?1:R?1-M(.02,.92,d):1-M(.08,.75,d);R?S(o,"col",a,.004,i=>R.set(o,i)):S(o,"col",a,.01,i=>{o.color.style.opacity=i.toFixed(2)})}p=h.kind===4?M(.55,.95,e.f):1-M(.1,.4,d)}if(S(o,"cap",p,.02,l=>{o.cap.style.opacity=l.toFixed(2),o.cap.style.visibility=l>0?"visible":"hidden"}),p>0){const l=F/Math.max(1,F-e.z),x=(1-p)*14;let d,a;b?(d=e.x*l,a=(e.y+o.h/2)*l+22+x):(d=(e.x+o.side*o.w/2)*l+o.side*44,d=T(d,-t+40,t-40),a=(e.y+o.h/2)*l+x),o.cap.style.transform=`translate3d(${d.toFixed(1)}px, ${a.toFixed(1)}px, 0)`}})}function H(n){if(z=requestAnimationFrame(H),!B||!g)return;const t=g.getBoundingClientRect(),r=t.height-y.offsetHeight,s=r>0?T(-t.top/r,0,1):0;let o=T(s/(1-Z),0,1)*N;o<_.length-1&&(o=et(o));const c=P?Math.min(.1,(n-P)/1e3):1;P=n,Math.abs(o-v)>N*.35?v=o:v+=(o-v)*(1-Math.exp(-9*c));const e=5e-5;Math.abs(o-v)<e&&(v=o),!(Math.abs(v-X)<e*.4)&&(X=v,I())}function st(n){const t=[...n.querySelectorAll(".people .person")];if(g=document.createElement("div"),g.className="pp pp--big",y=document.createElement("div"),y.className="pp__stage",U=document.createElement("div"),U.className="pp__world",D=document.createElement("div"),D.className="pp__caps",y.append(U,D),g.append(y),_=t.map((r,s)=>{const o=r.querySelector("img"),c=document.createElement("figure");c.className="pp__card";const e=document.createElement("img");e.className="pp__img",e.src=o.currentSrc&&o.currentSrc.includes("@2x")?o.currentSrc:o.src.replace(/\.webp$/,"@2x.webp"),e.alt=o.alt,e.width=750,e.height=1e3,e.decoding="async";let u=null;if(w===3||w>=5||w===4&&matchMedia("(max-width: 900px)").matches){const l=e.cloneNode();l.className="pp__img pp__img--gray",l.alt="",e.classList.add("pp__img--color"),c.classList.add("pp__card--duo"),c.append(l),u=e}c.append(e);const p=document.createElement("p");p.className="pp__cap";for(const[l,x]of[["pp__name",".person__name"],["pp__role",".person__role"],["pp__co",".person__co"]]){const d=document.createElement("span");d.className=l,d.textContent=r.querySelector(x)?.textContent||"",p.append(d)}return D.append(p),U.append(c),{el:c,cap:p,color:u,i:s,last:{}}}),_.forEach((r,s)=>{r.cap.dataset.side=s%2?"r":"l"}),n.querySelector(".people").after(g),w>=5){const r=new URLSearchParams(location.search).get("fx")==="b"?"b":"a";R=J(r)}}function pt(n,t=3){w=t,!(n&&n===C&&g?.isConnected)&&(rt(),n&&(C=n,n.setAttribute("data-pp",String(w)),st(n),k(),v=0,P=0,I(),w===6&&G(Q),L=()=>{k(),I()},addEventListener("resize",L),q=new IntersectionObserver(([r])=>{B=r.isIntersecting},{rootMargin:"50% 0px"}),q.observe(g),z=requestAnimationFrame(H)))}function rt(){cancelAnimationFrame(z),z=0,q?.disconnect(),q=null,B=!1,L&&removeEventListener("resize",L),L=null,g=y=U=D=null,_=[],C=null,G(null),R?.destroy(),R=null}export{rt as destroy,pt as init};
