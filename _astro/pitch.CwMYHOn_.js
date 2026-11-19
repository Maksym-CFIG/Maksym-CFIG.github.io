import{W as Oe,T as Fe}from"./three.module.2SwsOW1X.js";import{endProgress as _t,signAway as Le,callProgress as Be,footerRoom as ie}from"./ending.B8Co_5vN.js";import{c as Xe,b as He}from"./Base.astro_astro_type_script_index_0_lang.D3EU_fwG.js";import{L as ut,a as ft,b as vt}from"./LineSegments2.CoSh0k3i.js";import{V as J,G as it,C as K,bR as F0,D as y0,cr as De,cp as wt,h as I0,df as Gt,A as L0,aC as p0,M as N,j as Ge,b as A,de as Nt,a as o0,cy as se,e as st,cz as Ne,u as Re,ac as gt,l as Ve,ae as Ye,cs as $e,cL as Tt,cF as yt,cK as a0,d6 as qe,cG as Ee,cB as Ue,d0 as Rt,K as ce,cg as je,B as le,c as bt,a8 as V0,T as Ie,bx as Ze,cf as Vt,d9 as q0,d2 as Ke,ce as Yt,f as Je,dh as ue,S as Qe,P as to,ch as eo,aq as oo}from"./three.core.Gwy6y2Io.js";import"./preload-helper.BlTxHScW.js";import"./router.UeToN5xW.js";import"./scroll.Cxvh0_mC.js";const u0=.6,i0=u0/2,$t=33.6,no=.4,ao=104.6,Z=[9,97];function ro(t){const e=(1+Math.sqrt(5))/2,n=[];for(const a of[-1,1])for(const i of[-e,e])n.push([0,a,i],[a,i,0],[i,0,a]);const s=n.map(a=>new t.Vector3(...a).normalize()),o=[],r=s[0].distanceTo(s.slice(1).reduce((a,i)=>s[0].distanceTo(i)<s[0].distanceTo(a)?i:a));for(let a=0;a<12;a++)for(let i=a+1;i<12;i++)for(let c=i+1;c<12;c++){const m=(v,l)=>Math.abs(s[v].distanceTo(s[l])-r)<.001;m(a,i)&&m(i,c)&&m(a,c)&&o.push(new t.Vector3().add(s[a]).add(s[i]).add(s[c]).normalize())}return{верш:s,грани:o}}const io=2.6,so='a, button, input, textarea, select, label, summary, header, nav, .menu, [role="dialog"], [role="button"], [contenteditable]',co="p, h1, h2, h3, h4, li, blockquote, figure, dt, dd";function lo(t,e){let n=null,s=0;if(document.caretRangeFromPoint){const a=document.caretRangeFromPoint(t,e);a&&(n=a.startContainer,s=a.startOffset)}else if(document.caretPositionFromPoint){const a=document.caretPositionFromPoint(t,e);a&&(n=a.offsetNode,s=a.offset)}if(!n||n.nodeType!==3)return!1;const o=n.textContent.length,r=Math.min(s,Math.max(0,o-1));for(const a of[r-1,r]){if(a<0||a>=o)continue;const i=document.createRange();i.setStart(n,a),i.setEnd(n,a+1);for(const c of i.getClientRects())if(t>=c.left-2&&t<=c.right+2&&e>=c.top-2&&e<=c.bottom+2)return!0}return!1}function fe(t){const e=t.target;return!e||!e.closest?!0:e.closest(so)?!1:e.closest(co)?!lo(t.clientX,t.clientY):!0}function uo({THREE:t,stage:e,lens:n,тень:s,след:o,рамка:r,ночь:a}){const{верш:i,грани:c}=ro(t),m=new t.SphereGeometry(i0,40,28),v=new t.ShaderMaterial({uniforms:{uP:{value:i},uH:{value:c},uBlur:{value:0},uAlpha:{value:1},uHorG:a.uHorG,uAt:a.uAt,uCamX:a.uCamX,uNight:a.uNight},vertexShader:`
uniform vec3 uHorG;
uniform float uAt;
uniform float uCamX;
varying vec3 vNo;
varying vec3 vN;
varying float vNight;
varying vec4 vClip;
varying vec3 vC;
void main() {
  vNo = normalize(position);
  vec4 wc = modelMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vNight = smoothstep(uHorG.x * uHorG.z, uHorG.y * uHorG.z, length(vec2(wc.x - uCamX, wc.z - uAt)));
  vN = normalize(mat3(modelMatrix) * normal);
  // Round on screen: perspective about the ball's own centre (weak
  // perspective). The full wide-angle projection stretched the outline up to
  // 15% wider than tall near the frame edges; a sphere seen orthographically
  // around its centre always projects to a circle. Depth stays per-vertex.
  //
  // ЯКОРЬ — ТОЧКА НА ЗЕМЛЕ ПОД ЦЕНТРОМ, а не сам центр. С якорем в центре
  // круг у края кадра съезжал от настоящего места касания на десяток
  // пикселей, и у нижнего контура оказывалась трава ИЗ-ЗА мяча — глубина её
  // дальше, мяч закрывал. Травинки перед мячом, что должны заходить на его
  // низ, рисовались ниже контура. Теперь низ стоит на своей траве.
  vec4 c = viewMatrix * modelMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vec4 a = viewMatrix * vec4(wc.x, 0.0, wc.z, 1.0);
  vec4 v = viewMatrix * modelMatrix * vec4(position, 1.0);
  vec4 ac = projectionMatrix * a;
  vec4 vc = projectionMatrix * v;
  // ORTHOGRAPHIC ALONG THE RAY TO THE BALL, not along the camera axis.
  // Along the camera axis the ball near the frame edges was shown as if seen
  // from another angle than the ground under it, and its rolling axis looked
  // skewed (client: "it spins around some strange axis", 2026-10-09).
  vec3 f = normalize(c.xyz);
  vec3 rr = normalize(cross(f, vec3(0.0, 1.0, 0.0)));
  vec3 uu = cross(rr, f);
  vec3 o = v.xyz - a.xyz;
  vec2 ndc = ac.xy / ac.w + vec2(projectionMatrix[0][0] * dot(o, rr), projectionMatrix[1][1] * dot(o, uu)) / length(c.xyz);
  gl_Position = vec4(ndc * vc.w, vc.z, vc.w);
  vClip = gl_Position;
  vC = c.xyz;
}`,fragmentShader:`
precision highp float;
uniform vec3 uP[12];
uniform vec3 uH[20];
uniform vec3 uNight;
uniform float uBlur;
uniform float uAlpha;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
varying vec3 vNo;
varying vec3 vN;
varying float vNight;
varying vec4 vClip;
varying vec3 vC;
// Value noise in object space: turns with the ball, no crawl when rolling.
float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vn(vec3 x) {
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(h3(i + vec3(0.0, 1.0, 0.0)), h3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(h3(i + vec3(0.0, 0.0, 1.0)), h3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(h3(i + vec3(0.0, 1.0, 1.0)), h3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
void main() {
  if (vNight > 0.995) discard;
  // ГЛУБИНА — НАСТОЯЩЕГО ШАРА. Круг на экране — weak perspective (см.
  // вершинный), и его контур составлен не из тех точек сферы, что видны
  // по настоящему лучу: глубина у нижнего края выходила ближе травинок,
  // стоящих перед мячом, и ни одна не заходила на его низ. Здесь луч через
  // этот пиксель пересекается с настоящей сферой, и глубина берётся оттуда;
  // мимо сферы (круг чуть шире настоящего силуэта) — ближайшая к центру
  // точка луча, без шва на краю.
  vec2 nd = vClip.xy / vClip.w;
  vec3 dir = normalize(vec3((nd.x + projectionMatrix[2][0]) / projectionMatrix[0][0], (nd.y + projectionMatrix[2][1]) / projectionMatrix[1][1], -1.0));
  float bq = dot(vC, dir);
  float dq = bq * bq - dot(vC, vC) + ${(i0*i0).toFixed(6)};
  vec3 hit = dir * (dq > 0.0 ? bq - sqrt(dq) : bq);
  vec4 hc = projectionMatrix * vec4(hit, 1.0);
  gl_FragDepth = 0.5 * hc.z / hc.w + 0.5;
  vec3 d = normalize(vNo);
  // Две ближайшие панели (по косинусу) и их центры.
  float b1 = -2.0, b2 = -2.0; float pent = 0.0;
  vec3 c1 = vec3(0.0), c2 = vec3(0.0);
  for (int i = 0; i < 12; i++) { float c = dot(d, uP[i]); if (c > b1) { b2 = b1; c2 = c1; b1 = c; c1 = uP[i]; pent = 1.0; } else if (c > b2) { b2 = c; c2 = uP[i]; } }
  for (int i = 0; i < 20; i++) { float c = dot(d, uH[i]); if (c > b1) { b2 = b1; c2 = c1; b1 = c; c1 = uH[i]; pent = 0.0; } else if (c > b2) { b2 = c; c2 = uH[i]; } }
  // e — удалённость от шва (0 на шве, ~0.09 в центре панели).
  float e = b1 - b2;
  float fw = fwidth(e);
  // На быстром вращении рельеф и фактура стихают вместе с узором.
  float calm = 1.0 - uBlur * 2.5;
  // ОБЪЁМ ПАНЕЛЕЙ: подушка, у шва — желобок. Нормаль наклоняется от центра
  // панели к шву (склон подушки), сильнее всего у самого шва. Наклон —
  // по градиенту e: касательная часть (c1 - c2).
  vec3 T = (c1 - c2) - d * dot(d, c1 - c2);
  float gw = 0.010 + fw;
  float slope = 1.1 * exp(-e / gw) * (0.012 / max(gw, 0.012)) + 0.3 * (1.0 - smoothstep(0.0, 0.09, e));
  vec3 nbo = normalize(d - calm * slope * T);
  vec3 n = normalize(vN);
  vec3 nb = normalize(mat3(modelMatrix) * nbo);
  // Затенение в желобке (как AO) и тёмная нитка самого шва.
  float ao = mix(0.62, 1.0, smoothstep(0.0, 0.022 + fw, e));
  ao = mix(1.0, ao, calm);
  float line = 1.0 - smoothstep(0.0, 0.0045 + fw, e);
  // Материал: белый — тёплый, чуть сероватый; чёрный — глубокий.
  vec3 white = vec3(0.93, 0.93, 0.9);
  // Потёртости: редкие бледные пятна на белом, крупные и мягкие.
  float sc = vn(d * 6.0 + 3.1) * 0.65 + vn(d * 15.0 + 7.7) * 0.35;
  white *= mix(vec3(1.0), vec3(0.84, 0.83, 0.79), smoothstep(0.58, 0.8, sc) * 0.45 * calm);
  vec3 base = mix(white, vec3(0.045, 0.05, 0.055), pent);
  base = mix(base, mix(vec3(0.22, 0.23, 0.23), vec3(0.02), pent), line * 0.85);
  // Зерно: мелкий шум, гаснет, когда его частота мельче пикселя (fwidth).
  float fd = length(fwidth(d));
  float g1 = (vn(d * 45.0) - 0.5) * (1.0 - smoothstep(0.3, 0.8, fd * 45.0));
  float g2 = (vn(d * 110.0 + 1.7) - 0.5) * (1.0 - smoothstep(0.3, 0.8, fd * 110.0));
  base *= 1.0 + calm * (g1 * 0.07 + g2 * 0.05);
  // Fast spin reads as blur, like on camera: panels melt into the average
  // tone instead of strobing (wagon-wheel) at 40-60 degrees per frame.
  base = mix(base, vec3(0.6, 0.61, 0.59), uBlur);
  // СВЕТ СТАДИОНА: прожектор сверху-спереди, полусфера — тёмное небо
  // сверху, зелёный отсвет газона снизу.
  vec3 L = normalize(vec3(-0.2, 1.0, 0.35));
  float dif = max(dot(nb, L), 0.0);
  float hy = 0.5 + 0.5 * nb.y;
  vec3 hemi = mix(vec3(0.08, 0.13, 0.06), vec3(0.3, 0.33, 0.39), hy);
  vec3 col = base * (hemi * ao + vec3(1.0, 0.97, 0.92) * 0.92 * dif * mix(0.6, 1.0, ao));
  // Светлая кромка панели, повёрнутая к свету.
  float sh = smoothstep(0.003, 0.012, e) * (1.0 - smoothstep(0.014, 0.035, e));
  col += base * sh * max(dot(nb, L) - dot(n, L), 0.0) * 0.9 * calm;
  // Мягкий блеск (кожа/PU) и френель — в осях камеры.
  vec3 Nv = normalize(mat3(viewMatrix) * nb);
  vec3 V = -dir;
  vec3 Ls = normalize(mat3(viewMatrix) * normalize(vec3(-0.1, 1.0, 0.8)));
  vec3 Hv = normalize(Ls + V);
  float nh = max(dot(Nv, Hv), 0.0);
  float nv = clamp(dot(Nv, V), 0.0, 1.0);
  float spec = (pow(nh, 18.0) * 0.16 + pow(nh, 90.0) * 0.22) * ao * step(0.0, dot(Nv, Ls));
  col += vec3(1.0, 0.98, 0.94) * spec;
  float fr = pow(1.0 - nv, 4.0);
  col *= mix(0.88, 1.0, smoothstep(0.0, 0.5, nv));
  col += fr * mix(vec3(0.05, 0.09, 0.04), vec3(0.22, 0.25, 0.3), hy) * 0.6;
  col = mix(col, uNight, vNight);
  gl_FragColor = vec4(col, uAlpha);
}`}),l=new t.Mesh(m,v);l.position.set(Z[0],i0,Z[1]),e.add(l),s.set(Z[0],Z[1],.55);const d={x0:Z[0],z0:Z[1],x1:Z[0],z1:Z[1],t0:0,dur:0,v0:0,ехал:!1},y=new t.Quaternion,W=new t.Vector3;let b=Z[0],w=Z[1],_=Z[0],F=Z[1];const k=h=>{if(!d.ехал)return[d.x1,d.z1,0];const S=Math.min(1,(h-d.t0)/d.dur),D=1-(1-S)*(1-S);return S>=1&&(d.ехал=!1),[d.x0+(d.x1-d.x0)*D,d.z0+(d.z1-d.z0)*D,S]};function T(h,S){const D=performance.now()/1e3,[e0,v0]=k(D);h=Math.max(-$t,Math.min($t,h)),S=Math.max(no,Math.min(ao,S));const U=Math.hypot(h-e0,S-v0);U<.05||(d.x0=e0,d.z0=v0,d.x1=h,d.z1=S,d.t0=D,d.dur=Math.min(4.5,Math.max(.7,Math.sqrt(2*U/io))),d.ехал=!0)}function I(h=1){v.uniforms.uAlpha.value=h,v.transparent=h<.999,v.depthWrite=h>.98,l.visible=h>.002;const[S,D]=k(performance.now()/1e3),e0=S-b,v0=D-w,U=Math.hypot(e0,v0);U>1e-6&&(W.set(v0/U,0,-e0/U),y.setFromAxisAngle(W,U/i0),l.quaternion.premultiply(y));const N0=.3*Math.min(1,Math.max(0,(U/i0-.35)/.5));if(v.uniforms.uBlur.value+=(N0-v.uniforms.uBlur.value)*.35,b=S,w=D,o&&Math.hypot(S-_,D-F)>.15){const M0=performance.now()/1e3;for(let $=0;$<31;$++)o[$].copy(o[$+1]);o[31].set(S,D,M0,1),_=S,F=D;let m0=1e4,d0=1e4,h0=-1e4,x0=-1e4;for(const $ of o)$.w>0&&M0-$.z<6&&(m0=Math.min(m0,$.x),d0=Math.min(d0,$.y),h0=Math.max(h0,$.x),x0=Math.max(x0,$.y));const r0=i0*1.2;r.set(m0-r0,d0-r0,h0+r0,x0+r0)}o&&r.x<r.z&&performance.now()/1e3-o[31].z>1.2&&r.set(1e4,1e4,-1e4,-1e4),l.position.set(S,i0,D),s.set(S,D,.55*h)}const E=new t.Raycaster,u=new t.Plane(new t.Vector3(0,1,0),0),C=new t.Vector2,R=new t.Vector3,B=h=>document.body.dataset.route!=="tiketa"||h.button!==void 0&&h.button!==0||document.documentElement.classList.contains("menu-open")?!1:fe(h),X=(h,S)=>v.uniforms.uAlpha.value<.5||(C.set(h/innerWidth*2-1,-(S/innerHeight)*2+1),n.updateMatrixWorld(),E.setFromCamera(C,n),!E.ray.intersectPlane(u,R))||R.distanceTo(n.position)>160?!1:(T(R.x,R.z),!0);let O=null;const Q=h=>{if(!B(h)){O=null;return}if(h.pointerType==="touch"||h.pointerType==="pen"){O={x:h.clientX,y:h.clientY,t:performance.now(),id:h.pointerId};return}X(h.clientX,h.clientY)},p=h=>{const S=O;O=null,!(!S||S.id!==h.pointerId||!B(h))&&(Math.hypot(h.clientX-S.x,h.clientY-S.y)>12||performance.now()-S.t>500||X(h.clientX,h.clientY))},f=()=>{O=null};let x=!1;function M(h){if(!!h===x)return;x=!!h;const S=x?addEventListener:removeEventListener;S("pointerdown",Q,{passive:!0}),S("pointerup",p,{passive:!0}),S("pointercancel",f,{passive:!0}),x||(O=null)}return M(!0),{меш:l,кадр:I,катить:T,вПоле:X,ход:d,слушать:M}}const G0="tiketa",_0=4.2,Mt=.2,fo=58,E0=-.07,ve=114,mt=.3,dt=.55,vo=.4,me=.68,de=.95,c0=1.35,pe=2.1,C0=[0,2.44*c0+.8+pe*.55,7],qt=[0,2.44*c0*.5,-1.2],mo=.8,Et=.46,he=.72,po=.6,ho=3,St=!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches),P=t=>Number.isInteger(t)?`${t}.0`:`${t}`;function V(t,e,n){const s=Math.max(0,Math.min(1,(t-e)/(n-e)));return s*s*(3-2*s)}function xe(t){return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const zt=new Map,Wt=()=>zt.clear();document.addEventListener("astro:page-load",Wt);addEventListener("resize",Wt,{passive:!0});typeof ResizeObserver=="function"&&new ResizeObserver(Wt).observe(document.documentElement);function we(t){let e=zt.get(t);if(e===void 0||e&&!e.el.isConnected){const n=document.querySelector(t);let s=0;for(let o=n;o;o=o.offsetParent)s+=o.offsetTop+(o===n?0:o.clientTop);e=n?{el:n,y:s}:null,zt.set(t,e)}return e?e.y:null}function Ut(){const t=we(".prehled");if(t===null)return 0;const e=window.innerHeight||1;return V(1-(t-(window.scrollY||0))/e,0,vo)}const ge=[[0,0,ve,0,Mt,E0,_0],[.17,7,99,.12,0,-.1,3.6],[.4,-11,74,-.38,-.14,-.08,2.6],[.53,0,54.4,0,0,-1.45,17],[.63,0,54.4,.45,0,-1.45,17],[.72,13,36,.28,Mt,-.09,3.4],[.8,0,19,0,0,E0,_0],[1,0,19,0,0,E0,_0]];function xo(t,e){const n=[];for(let o=0;o<t.length-1;o++)n.push((t[o+1][e]-t[o][e])/(t[o+1][0]-t[o][0]));const s=[0];for(let o=1;o<t.length-1;o++){if(n[o-1]*n[o]<=0){s.push(0);continue}let r=(n[o-1]+n[o])/2;const a=r/n[o-1],i=r/n[o],c=a*a+i*i;c>9&&(r*=3/Math.sqrt(c)),s.push(r)}return s.push(0),s}const wo=[1,2,3,4,5,6].map(t=>xo(ge,t));function ye(){const t=window.innerHeight||1,e=we(".sign"),n=e!==null?e-Xe():Math.max(1,document.body.scrollHeight-t),s=Math.max(0,Math.min(1,He()/Math.max(1,n))),o=ge;let r=0;for(;r<o.length-2&&s>o[r+1][0];)r++;const a=o[r+1][0]-o[r][0],i=Math.max(0,Math.min(1,(s-o[r][0])/a)),c=i*i,m=c*i,v=l=>{const d=wo[l-1];return(2*m-3*c+1)*o[r][l]+(m-2*c+i)*a*d[r]+(-2*m+3*c)*o[r+1][l]+(m-c)*a*d[r+1]};return{x:v(1),at:v(2),yaw:v(3),roll:v(4),tilt:v(5),eye:v(6),k:s}}const go={все:0,лево:0};function yo(){const t=document.querySelector(".tk--sport"),e=document.querySelector(".tk--platforma"),n=document.querySelector(".tk--duvera");if(!t||!e||!n)return go;const s=window.innerHeight||1,o=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top,a=n.getBoundingClientRect().bottom,i=1-V(o,.15*s,.9*s),c=1-V(r,.2*s,.85*s),m=V(a,.15*s,.7*s);return{все:i*m,лево:c*m}}const B0=72,X0=112,g0=30,n0=(()=>{const e=[];for(let r=0;r<16;r++){const a=(r+.5)/16*Math.PI*2,i=Math.cos(a)*B0,c=52.5+Math.sin(a)*X0;e.push({x:i,y:c,ax:0,ay:0})}const n=[];for(const r of[12,38,67,93])for(const a of[-22,-7,7,22])n.push([a,r]);const s=(r,a)=>(Math.atan2((a-52.5)/X0,r/B0)+Math.PI*2)%(Math.PI*2);return n.sort((r,a)=>s(...r)-s(...a)),e.map((r,a)=>a).sort((r,a)=>s(e[r].x,e[r].y)-s(e[a].x,e[a].y)).forEach((r,a)=>{e[r].ax=n[a][0],e[r].ay=n[a][1]}),e})(),bo=.18,Mo=.8,So=15,zo=.6,Co=.65,Ao=.92,Po=1,Z0=[5,-8],H0=new Array(n0.length).fill(1),kt=new J(0,0);function _o(){const t=new it;return Fo(t),t.add(To()),t}function To(){const t=new it,e=new o0({transparent:!0,depthWrite:!1,blending:L0,side:y0,uniforms:{uOp:{value:2.1}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vV;
      varying vec3 vR;
      void main() {
        vUv = uv;
        vec4 w = modelMatrix * vec4(position, 1.0);
        // Радиус от оси — линеен по вершинам, интерполируется точно; нормаль
        // вершины на гранях давала полосы («свет какими-то линиями»).
        vR = mat3(modelMatrix) * vec3(position.x, 0.0, position.z);
        vV = cameraPosition - w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform float uOp;
      varying vec2 vUv;
      varying vec3 vV;
      varying vec3 vR;
      void main() {
        // vUv.y: 1 у прожектора, 0 у пятна на поле.
        float t = 1.0 - vUv.y;
        float along = pow(1.0 - t, 1.6) * smoothstep(1.0, 0.75, t) * smoothstep(0.0, 0.04, t);
        // Толща: поверхность, повёрнутая к взгляду, — середина конуса;
        // скользящая — его край. Две стенки (перед и зад) складываются.
        float f = abs(dot(normalize(vR), normalize(vV)));
        float a = uOp * 0.55 * along * pow(f, 1.8);
        gl_FragColor = vec4(vec3(0.78, 0.86, 1.0) * a, a);
      }`});return n0.forEach((n,s)=>{const o=Ot(n,s).c,a=new A(n.ax,0,n.ay).clone().sub(o),i=a.length(),c=new se(Ct*.42,11,i,40,1,!0),m=e.clone();m.userData.сила=e.uniforms.uOp.value,be(s).луч=m;const v=new N(c,m);v.position.copy(o).addScaledVector(a,.5),v.quaternion.setFromUnitVectors(new A(0,1,0),a.clone().negate().normalize()),v.frustumCulled=!1,t.add(v)}),t}const K0=[];function be(t){return K0[t]||(K0[t]={})}const Wo=new K(16054527),ko=new K(1712166);function Oo(){const{все:t,лево:e}=yo(),n=t*(1-.3*e);kt.set(n,e),n0.forEach((s,o)=>{const r=V(-s.x,-8,12),a=(1-zo*n)*(1-Po*e*r);if(H0[o]===a)return;H0[o]=a;const i=K0[o];if(!i)return;const c=a*a;i.луч&&(i.луч.uniforms.uOp.value=i.луч.userData.сила*c),i.свечение&&(i.свечение.opacity=c),i.ореол&&(i.ореол.opacity=c*c),i.диск&&i.диск.color.lerpColors(ko,Wo,c)})}const Ct=5.2,jt=2.4;function At(t){return new A(Math.cos(t)*B0,g0,52.5+Math.sin(t)*X0)}function Pt(t){return new A(Math.cos(t)/B0,0,Math.sin(t)/X0).normalize()}function Ot(t,e){const n=(e+.5)/n0.length*Math.PI*2,s=At(n).addScaledVector(Pt(n),-1.7);s.y-=2.6;const o=new A(t.ax,0,t.ay).sub(s).normalize(),r=new A().crossVectors(new A(0,1,0),o).normalize(),a=new A().crossVectors(o,r);return{c:s,n:o,r,u:a}}function Fo(t){const e=n0.length,s=e*8,o=[],r=[],a=p=>{const f=p/s*Math.PI*2,x=At(f),M=Pt(f);return[x.clone().addScaledVector(M,-.95).setY(g0+1.1),x.clone().addScaledVector(M,.95).setY(g0+1.1),x.clone().setY(g0-1.2)]},i=(p,f,x)=>p.push(f.x,f.y,f.z,x.x,x.y,x.z);let c=a(0);for(let p=1;p<=s;p++){const f=a(p);for(let M=0;M<3;M++)i(o,c[M],f[M]);const x=p%2===0;i(r,x?c[0]:f[0],x?f[1]:c[1]),i(r,x?c[0]:f[0],x?f[2]:c[2]),i(r,x?c[1]:f[1],x?f[2]:c[2]),x&&(i(r,f[0],f[1]),i(r,f[1],f[2]),i(r,f[2],f[0])),c=f}const m={transparent:!0,depthWrite:!1},v=new ut({color:10727350,linewidth:1.7,opacity:.7,...m}),l=new ut({color:8358802,linewidth:.9,opacity:.55,...m}),d=new ft;d.setPositions(o);const y=new ft;y.setPositions(r),t.add(new vt(d,v)),t.add(new vt(y,l)),J0.push(v,l);const W=new F0({color:790806,side:y0}),b=new F0({color:16054527,side:y0}),w=[],_=new De(.3,20),F=document.createElement("canvas");F.width=F.height=64;const k=F.getContext("2d"),T=k.createRadialGradient(32,32,0,32,32,32);T.addColorStop(0,"rgba(255,255,255,1)"),T.addColorStop(.18,"rgba(230,242,255,0.85)"),T.addColorStop(.45,"rgba(170,205,255,0.22)"),T.addColorStop(1,"rgba(140,180,240,0)"),k.fillStyle=T,k.fillRect(0,0,64,64);const I=new wt(F);I.colorSpace=I0;const E=new Gt({map:I,transparent:!0,depthWrite:!1,blending:L0}),u=document.createElement("canvas");u.width=u.height=128;const C=u.getContext("2d"),R=C.createRadialGradient(64,64,2,64,64,64);for(let p=0;p<=20;p++){const f=p/20,x=.42*Math.exp(-f*f*9);R.addColorStop(f,`rgba(${Math.round(215-60*f)},${Math.round(232-50*f)},255,${x.toFixed(4)})`)}C.fillStyle=R,C.fillRect(0,0,128,128);const B=new wt(u);B.colorSpace=I0;const X=new Gt({map:B,transparent:!0,depthWrite:!1,blending:L0});n0.forEach((p,f)=>{const x=be(f);x.диск=b.clone(),x.свечение=E.clone(),x.ореол=X.clone();const{c:M,n:h,r:S,u:D}=Ot(p,f),e0=(S0,z0)=>M.clone().addScaledVector(S,S0*Ct/2).addScaledVector(D,z0*jt/2),v0=new p0(Ct,jt),U=new N(v0,W);U.position.copy(M),U.quaternion.setFromRotationMatrix(new Ge().makeBasis(S,D,h)),t.add(U);const N0=e0(-1,-1),M0=e0(1,-1),m0=e0(1,1),d0=e0(-1,1);i(w,N0,M0),i(w,M0,m0),i(w,m0,d0),i(w,d0,N0);const h0=(f+.5)/e*Math.PI*2,x0=At(h0).setY(g0-1.2),r0=Pt(h0).cross(new A(0,1,0)),$=Math.sign(S.dot(r0))||1;i(w,d0,x0.clone().addScaledVector(r0,-1.2*$)),i(w,m0,x0.clone().addScaledVector(r0,1.2*$));for(let S0=0;S0<2;S0++)for(let z0=0;z0<4;z0++){const R0=new N(_,x.диск);R0.position.copy(M).addScaledVector(S,(z0-1.5)*1.15).addScaledVector(D,(S0-.5)*1.05).addScaledVector(h,.05),R0.quaternion.copy(U.quaternion),t.add(R0);const lt=new Nt(x.свечение);lt.position.copy(R0.position).addScaledVector(h,.1),lt.scale.set(1.9,1.9,1),t.add(lt)}const ct=new Nt(x.ореол);ct.position.copy(M).addScaledVector(h,.4),ct.scale.set(11,11,1),t.add(ct)});const O=new ut({color:9280161,linewidth:1.3,opacity:.75,...m}),Q=new ft;Q.setPositions(w),t.add(new vt(Q,O)),J0.push(O)}const J0=[];function Lo(){K0.length=0,H0.fill(1),J0.length=0}const Me=new A(0,0,0),Se=new A(0,0,0),T0=Array.from({length:8},()=>new st(0,0,0,0)),U0=Array.from({length:8},()=>new J(1,0)),Q0=Array.from({length:32},()=>new st(0,0,0,0)),Ft=new st(1e4,1e4,-1e4,-1e4),Lt=new st(.5,.16,.46,.05),Bo=new K("#05080a");function Xo(t){return{uAt:{value:ve},uCamX:{value:0},uDraw:{value:St?1.1:0},uHigh:{value:0},uNow:{value:0},uPool:{value:Me},uLamp:{value:H0},uTma:{value:kt},uBall:{value:Se},uTrail:{value:Q0},uTrailBox:{value:Ft},uTime:{value:0},uEye:{value:_0},uSpread:{value:1},uHorG:{value:new A(18,34,1)},uNight:{value:Bo},uComb:{value:T0},uCombD:{value:U0},uCombOn:{value:0},uWord:{value:t},uWordBox:{value:Lt},uWordAmt:{value:0}}}const ze=`
vec3 toSRGB(vec3 c) {
  c = max(c, vec3(0.0));
  return mix(c * 12.92,
             1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055,
             step(vec3(0.0031308), c));
}
`,Ce=`
uniform vec4 uTrail[32];
uniform vec4 uTrailBox;
uniform float uNow;
float trailAt(vec2 w, out vec2 dir) {
  dir = vec2(0.0);
  if (w.x < uTrailBox.x || w.y < uTrailBox.y || w.x > uTrailBox.z || w.y > uTrailBox.w) return 0.0;
  float best = 0.0;
  for (int i = 0; i < 31; i++) {
    vec4 a = uTrail[i], b = uTrail[i + 1];
    if (a.w <= 0.0 || b.w <= 0.0) continue;
    vec2 ab = b.xy - a.xy;
    float L2 = max(dot(ab, ab), 1e-6);
    float t = clamp(dot(w - a.xy, ab) / L2, 0.0, 1.0);
    float d = length(w - a.xy - ab * t);
    float age = uNow - mix(a.z, b.z, t);
    // Поднимается быстро: за ~1 с, большая часть — за первые 0.6 с.
    float rec = clamp(1.0 - age / 1.0, 0.0, 1.0);
    float f = (1.0 - smoothstep(${P(u0*.22)}, ${P(u0*.42)}, d)) * rec * rec * rec;
    if (f > best) { best = f; dir = ab / sqrt(L2); }
  }
  return best;
}
`,Ae=`
uniform vec3 uPool;   // пятно света под знаком: x, z поля и сила
uniform float uHigh;  // насколько камера над полем: 0 у травы, 1 на кране
uniform vec3 uBall;   // мяч: x, z поля и сила тени
uniform float uLamp[${n0.length}];   // накал каждого прожектора: 1 — полный
uniform vec2 uTma;    // тьма под раскладками: x — общая, y — левая половина поля
float svet0(vec2 w) {
  float s = 0.0;
  vec2 d;
  // НОЧЬ: свет только от прожекторов кольца, между пятнами — ночь.
${n0.map((t,e)=>`  d = (w - vec2(${P(+t.ax.toFixed(2))}, ${P(+t.ay.toFixed(2))})) / ${P(So)}; s += uLamp[${e}] * exp(-dot(d, d));`).join(`
`)}
  // Под знаком — тень (овал шире в бок, как сам знак).
  vec2 pdn = (w - uPool.xy) / vec2(2.6, 1.5);
  // Тьма под раскладками: между пятнами ночь гуще, а левая половина поля (x < 0, сторона
  // погасших прожекторов) тонет почти целиком — в метрах поля, не в кадре.
  float tma = (1.0 - ${P(Co)} * uTma.x * (1.0 - smoothstep(-0.2, 1.2, s)))
    * (1.0 - ${P(Ao)} * uTma.y * smoothstep(${P(Z0[0])}, ${P(Z0[1])}, w.x));
  // Свет НЕ зависит от камеры: прежде с высотой пятна выравнивались, и одна
  // точка поля темнела 72 → 63 при подъёме — тень «отходила» со скроллом.
  return tma * (${P(bo)} + ${P(Mo)} * min(s, 1.3)) * (1.0 - uPool.z * exp(-dot(pdn, pdn)));
}
${Ce}
// Тень мяча — мягкое пятно под ним, плотнее у точки касания. Примятая
// следом трава чуть темнее: лист лёг и ловит меньше света.
float svet(vec2 w) {
  vec2 bd = (w - uBall.xy) / ${P(u0*.72)};
  // Плотная тень у самой точки касания (~0.35 радиуса) поверх мягкой.
  vec2 cd = (w - uBall.xy) / ${P(u0*.5*.35)};
  vec2 dd;
  float pr = trailAt(w, dd) * 1.2;
  return svet0(w) * (1.0 - uBall.z * exp(-dot(bd, bd))) * (1.0 - min(0.85, uBall.z * 1.4) * exp(-dot(cd, cd))) * (1.0 - 0.3 * pr);
}
`,Pe=`
float band(float v, float hw, float aa) {
  return 1.0 - smoothstep(hw, hw + aa, abs(v));
}
float seg(float v, float hw, float aa, float o, float a1, float b1) {
  return band(v, hw, aa) * step(a1, o) * step(o, b1);
}

// Доля линии, уже проведённая пером: t — место на дорожке линии.
float rev(float t) {
  return 1.0 - smoothstep(uDraw - 0.04, uDraw, t);
}

float razmetka(vec2 w, float hw, float aa) {
  // РАЗМЕТКА ОБОИХ КОНЦОВ. Прежде она была только у ворот, к которым едем,
  // а проезд начинается на сотом метре — у противоположного конца, где
  // не было ни линии. Первые кадры выходили «просто газончиком». E — метры
  // от БЛИЖАЙШЕЙ лицевой линии: всё, что у ворот, рисуется у обеих разом.
  float X = w.x;
  float Y = w.y;
  float E = min(Y, 105.0 - Y);
  float ax = abs(X);
  float ink = 0.0;
  // У каждой линии своя дорожка t. Лицевые, средняя — от оси к краям;
  // боковые — от лицевых к середине; круг — обходом от оси.
  // ШТРАФНАЯ И ВРАТАРСКАЯ ЧЕРТЯТСЯ ОДНИМ ХОДОМ: передняя линия от середины
  // к углам (t до 0.5), потом боковые от углов назад к лицевой.
  ink = max(ink, seg(ax - 34.0, hw, aa, Y, 0.0, 105.0) * rev(E / 52.5));
  ink = max(ink, seg(E, hw, aa, ax, 0.0, 34.0) * rev(ax / 34.0));
  ink = max(ink, seg(Y - 52.5, hw, aa, ax, 0.0, 34.0) * rev(ax / 34.0));
  // Точка центра: без неё средняя линия в перспективе читается идущей мимо
  // середины круга — дальняя половина круга сжата, и глаз ищет центр ниже.
  ink = max(ink, (1.0 - smoothstep(0.16, 0.16 + aa, length(vec2(X, Y - 52.5)))) * rev(0.2));
  ink = max(ink, band(length(vec2(X, Y - 52.5)) - 9.15, hw, aa)
    * rev(abs(atan(X, Y - 52.5)) / 3.14159));
  ink = max(ink, seg(E - 16.5, hw, aa, ax, 0.0, 20.16) * rev(ax / 20.16 * 0.5));
  ink = max(ink, seg(ax - 20.16, hw, aa, E, 0.0, 16.5) * rev(0.5 + (16.5 - E) / 16.5 * 0.5));
  ink = max(ink, seg(E - 5.5, hw, aa, ax, 0.0, 9.16) * rev(ax / 9.16 * 0.5));
  ink = max(ink, seg(ax - 9.16, hw, aa, E, 0.0, 5.5) * rev(0.5 + (5.5 - E) / 5.5 * 0.5));
  ink = max(ink, (1.0 - smoothstep(0.16, 0.16 + aa, length(vec2(X, E - 11.0)))) * rev(0.3));
  // Дуга от оси к краям: видимая её часть — около 53° в каждую сторону.
  ink = max(ink, seg(length(vec2(X, E - 11.0)) - 9.15, hw, aa, E, 16.5, 30.0)
    * rev(atan(ax, E - 11.0) / 0.93));
  return ink;
}
`,Ho="#102313",Do="#326122",Go="#e8f2ea",No=`
varying vec2 vXZ;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vXZ = world.xz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,Ro=`
precision highp float;
uniform vec3 uDark;
uniform vec3 uLight;
uniform vec3 uLine;
uniform sampler2D uNoise;
uniform float uAt;      // где стоит камера, метров от линии ворот
uniform float uCamX;    // и насколько она в стороне от оси поля
uniform float uDraw;    // ход пера по разметке: 0 — пусто, от 1.05 — всё начерчено
uniform float uGoal;    // насколько проступили ворота: их тень проступает вместе с ними
uniform vec2 uFar;      // с какой дали газон темнеет и где тонет совсем
uniform vec3 uHor;      // дали растворения в фон и полуширина видимого
uniform float uHorK;    // во сколько раз дальше горизонт: камера поднялась
varying vec2 vXZ;

${ze}

${Pe}
${Ae}

void main() {
  float X = vXZ.x;
  float Y = vXZ.y;
  // Ширина пикселя в метрах — из производных самой координаты. Так линия
  // остаётся одной толщины на любой дали и не рассыпается.
  float aa = max(fwidth(Y) * 0.9, 0.01);

  // Даль — НАСТОЯЩЕЕ расстояние от камеры, а не по оси поля: камера ходит
  // вбок и поворачивается, и горизонт должен растворяться кругом, а не полосой.
  float dep = length(vec2(X - uCamX, Y - uAt));

  // ГАЗОН. ТРИ МАСШТАБА, А НЕ ОДИН. Прежде все три слагаемых брались с шагом
  // в сотые доли — длина волны выходила в сотни метров, и дальняя половина
  // кадра получалась одним размытым пятном: «зелёная размытая подложка».
  // Здесь широкий покос, метровая пятнистость и мелкое зерно вблизи.
  float wide = texture2D(uNoise, vXZ * 0.011 + vec2(0.31, 0.17)).g;
  float near = texture2D(uNoise, vXZ * 0.14 + vec2(0.63, 0.44)).b;
  float fine = texture2D(uNoise, vXZ * 0.95 + vec2(0.29, 0.61)).r;
  // Зерно гасим вдаль: там оно тоньше пикселя и пошло бы рябью.
  float grain = (1.0 - smoothstep(8.0, 30.0, dep)) * (fine - 0.5);
  // СВЕРХУ — ЗЕРНО, А НЕ ОБЛАКА. С крана травинки видны торцом и мельче
  // пикселя, и в кадре остаётся сама земля; её крупные пятна (десятки метров
  // и метр) читались мутью. С высотой они гаснут, а проступает зерно в пару
  // сантиметров — пиксель там полтора сантиметра, и оно ещё разрешается.
  float mid = texture2D(uNoise, vXZ * 0.2 + vec2(0.47, 0.83)).g;
  float t = 0.30 + mix(0.26, 0.07, uHigh) * wide + mix(0.20, 0.05, uHigh) * near
    + grain * 0.26 + uHigh * (0.17 + 0.42 * (mid - 0.5));
  // ЗЕРНО НА СРЕДНЕЙ ДАЛИ. Ближнее зерно (0.8 см) дальше восьми метров мельче
  // пикселя и сходится в ровный тон, а травинки там уже мелкие и уходят в
  // землю, — в пятне прожектора это читалось мылом: «трава размыленная».
  // Два масштаба покрупнее: несколько сантиметров — на средних метрах,
  // около десяти — дальше. Мельче пикселя каждое гаснет само (мип-карты).
  float coarse = texture2D(uNoise, vXZ * 0.07 + vec2(0.19, 0.37)).a;
  t += (1.0 - uHigh) * (0.45 * (mid - 0.5) * smoothstep(5.0, 12.0, dep)
    + 0.32 * (coarse - 0.5) * smoothstep(12.0, 24.0, dep));

  vec3 col = mix(uDark, uLight, clamp(t, 0.0, 1.0));
  // ТЕНЬ У КОРНЕЙ (подложка темнее у камеры, с высотой уходит) стоит
  // в единице — снята; прежний вариант — тег pre-structure-1112.

  // МЕЛ, А НЕ КРАСКА. Ровная белая полоса читалась краской. У меловой
  // разметки три приметы, и каждая — свой масштаб шума:
  //   • край гуляет: полширины от 4.5 до 7 см вместо ровных 6;
  //   • мел лёг неровно: пятна по четверть метра гуще и реже;
  //   • вблизи видно зерно — порошок, а не плёнка.
  // Шум белый и с мип-картами: вдали он сам сходится к середине, и линия
  // уходит в ровный тон, а не в рябь.
  float mEdge = texture2D(uNoise, vXZ * 0.1 + vec2(0.52, 0.08)).a;
  float mBlot = texture2D(uNoise, vXZ * 0.031 + vec2(0.37, 0.12)).g;
  float mGrain = texture2D(uNoise, vXZ * 0.52 + vec2(0.71, 0.29)).r;
  float hw = 0.06 * (0.75 + 0.42 * mEdge);  // полширины линии: около 6 см
  float ink = razmetka(vXZ, hw, aa);

  // Зерно — только там, где пиксель мельче пары сантиметров: дальше его
  // не разрешить, и оно дало бы мерцание.
  float mNear = 1.0 - smoothstep(0.015, 0.05, aa);
  float chalk = mix(0.58, 1.0, smoothstep(0.2, 0.75, mBlot))
    * mix(1.0, smoothstep(0.15, 0.6, mGrain), 0.75 * mNear);
  col = mix(col, uLine, clamp(ink * chalk, 0.0, 1.0));
  col *= svet(vXZ);
  // ТЕНЬ ВОРОТ. Без неё ворота не стояли на земле, а висели вклейкой.
  // Внутри короба газон в тени сетки, под штангами — плотный след.
  // Тень — в масштабе ворот (ВОРОТА_М), иначе у крупных ворот она уже их.
  float gIn = (1.0 - smoothstep(3.5 * ${P(c0)}, 3.9 * ${P(c0)}, abs(X))) * smoothstep(-2.3 * ${P(c0)}, -1.6 * ${P(c0)}, Y)
    * (1.0 - smoothstep(-0.1, 0.35, Y));
  vec2 gq = vec2(abs(X) - 3.72 * ${P(c0)}, Y) / vec2(0.28, 0.22);
  float gPost = exp(-dot(gq, gq));
  col *= 1.0 - uGoal * (0.38 * gIn + 0.45 * gPost);

  // ТЕНЬ СТАДИОНА. Заказчик просил «ve stínu hřiště», и на присланном им
  // снимке стадион тёмен, а светится только газон. Тень считается трижды:
  //   • к боковым линиям — там кончается поле и начинаются трибуны;
  //   • за лицевой линией и за дальним краем — туда свет не достаёт;
  //   • ВДАЛЬ ОТ КАМЕРЫ — и это главное: без этого газон стелется ровным
  //     ковром до горизонта и кадр становится обоями.
  float lit = (1.0 - smoothstep(30.0, 52.0, abs(X)))
    * smoothstep(-14.0, -2.0, Y)
    * (1.0 - smoothstep(116.0, 124.0, Y))
    * (1.0 - smoothstep(uFar.x, uFar.y, dep));
  col *= 0.34 + 0.66 * lit;

  // ПОЛЕ ПРЯЧЕТСЯ ГОРИЗОНТОМ, как пол на Tronexo и Real Estate. Прежде даль
  // только темнела до трети, и в кадре стоял весь прямоугольник газона
  // с краем плоскости у горизонта. Заказчик: «полотно поля видно целиком
  // в перспективе, а на других страницах оно прячется горизонтом». Теперь
  // даль и бока уходят в ПРОЗРАЧНОСТЬ — сквозь них виден фон страницы,
  // и края у поля нет вовсе.
  float a = (1.0 - smoothstep(uHor.x * uHorK, uHor.y * uHorK, dep))
    * (1.0 - smoothstep(uHor.z, uHor.z * 1.7, abs(X)));
  gl_FragColor = vec4(toSRGB(col), a);
}
`;function Vo(){const e=new Uint8Array(65536);for(let s=0;s<e.length;s++)e[s]=Math.random()*256|0;const n=new Ne(e,128,128,Re);return n.wrapS=gt,n.wrapT=gt,n.minFilter=Ve,n.magFilter=Ye,n.generateMipmaps=!0,n.needsUpdate=!0,n}function Yo(t,e){const n=new p0(400,400);n.rotateX(-Math.PI/2);const s=new N(n,new o0({vertexShader:No,fragmentShader:Ro,extensions:{derivatives:!0},transparent:!0,depthWrite:!1,uniforms:{uDark:{value:new K(Ho)},uLight:{value:new K(Do)},uLine:{value:new K(Go)},uNoise:{value:t},uAt:e.uAt,uCamX:e.uCamX,uFar:{value:new J(38,95)},uDraw:e.uDraw,uGoal:{value:0},uHorK:{value:1},uPool:e.uPool,uLamp:e.uLamp,uTma:e.uTma,uBall:e.uBall,uTrail:e.uTrail,uTrailBox:e.uTrailBox,uNow:e.uNow,uHigh:e.uHigh,uHor:{value:new A(18,34,40)}}}));return s.frustumCulled=!1,s.renderOrder=-1,s}const $o=7e5,qo=60,Eo=68,It=.035,Uo=.085,jo=.009,Io=13,Zo=30,Ko=.35,Zt=.45,Jo=2.6,Qo=105e4,pt=0,Kt=24,tn=3,Jt=["#204219","#2b5821","#264d1e","#356727","#325b29"],en=`
precision highp float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;

attribute vec2 aXZ;       // место травинки на поле, метры
attribute float aH;       // её рост
attribute vec2 aRot;      // косинус и синус поворота
attribute vec3 aTint;
attribute float aR;       // свой случайный рубеж даля у каждой травинки

uniform float uTime;
uniform float uAt;        // где стоит камера, метров от линии ворот
uniform float uCamX;      // и насколько она в стороне от оси
uniform float uEye;       // высота глаз камеры
uniform vec3 uHorG;       // где газон растворяется в ночь: от, до, множитель высоты
uniform float uBack;      // на сколько метров кольцо посева заходит за спину камеры
uniform float uSpread;    // во сколько раз растянута полоса: камера поднялась
uniform float uThin;      // 1 у ближнего подсева: с высотой он редеет
uniform float uHigh;      // насколько камера над полем: 0 у травы, 1 на кране
uniform float uDepth;     // глубина засеянной полосы
uniform float uStart;     // с какой дали она начинается
uniform vec2 uFade;
uniform float uWindA;
uniform float uWindV;
uniform float uDraw;
uniform sampler2D uWord;
uniform vec4 uWordBox;   // середина и размер слова в долях кадра (снизу)
uniform float uWordAmt;
uniform vec3 uBall;
uniform vec4 uComb[8];   // путь курсора: x, z, время, сила
uniform vec2 uCombD[8];  // направление хода курсора в этой точке
uniform float uCombOn;   // 1 — хоть одна точка пути ещё действует (кадр считает)
${Ce}

varying vec3 vTint;
varying float vUp;
varying float vShine;
varying vec2 vW;
varying float vPaint;
varying float vWord;
varying vec3 vWordCol;
varying float vNight;
${Pe}
// Запас до ближайшей линии разметки, м: меньше нуля — травинка у мела.
// Те же линии, что в razmetka, без их отрезков — только шире, не уже.
float nearChalk(vec2 w) {
  float E = min(w.y, 105.0 - w.y);
  float ax = abs(w.x);
  float lc = length(vec2(w.x, w.y - 52.5));
  float lp = length(vec2(w.x, E - 11.0));
  float d = min(min(min(abs(ax - 34.0), abs(E)), min(abs(w.y - 52.5), abs(lc - 9.15))),
    min(min(abs(E - 16.5), abs(ax - 20.16)), min(min(abs(E - 5.5), abs(ax - 9.16)), abs(lp - 9.15))));
  return min(d - 0.1, min(lc, lp) - 0.2);
}

void main() {
  vTint = aTint;
  vUp = clamp(position.y, 0.0, 1.0);

  // ПОЛОСА СВЁРНУТА В КОЛЬЦО. Засевать всё поле незачем: травинок понадобились
  // бы миллионы, а видна сотая доля. По мере проезда каждая травинка обходит
  // полосу по кругу, и заворот приходится на дальний край, где она уже ушла
  // в землю.
  // КОЛЬЦО ЗАХОДИТ ЗА СПИНУ, КОГДА КАМЕРА СМОТРИТ ВНИЗ. Засеяно было только
  // впереди: при взгляде вдоль поля позади камеры ничего не видно. С крана,
  // отвесно, низ кадра — это земля ПОЗАДИ камеры, и там стояла голая
  // земля без единой травинки.
  float ring = uAt + uBack;
  // ПОЛОСА РАСТЯГИВАЕТСЯ С ВЫСОТОЙ КАМЕРЫ. Трава исчезала по расстоянию
  // ПО ЗЕМЛЕ, а горизонт газона при подъёме отодвигается (uHorK). С высоты
  // в 10 м место в 20 м по земле видно близко и крупно, а травы там уже
  // не было — голая гладкая земля и чёткая граница с травой: «никак не
  // можешь исправить то, что я показываю». Теперь полоса и рубеж растут
  // вместе с горизонтом; травинок на метр меньше, но каждая с высоты крупнее.
  //
  // НО РАСТЯГИВАТЬ ПОЛОСУ НЕЛЬЗЯ: пока камера поднимается, множитель плывёт,
  // и травинки ПОЛЗУТ по полю под неподвижной разметкой — «разметка живёт
  // своей жизнью». Места травинок заданы раз и навсегда; полоса просто
  // сразу глубже, а с высотой отодвигается только рубеж, до которого их видно.
  float dep = uStart + mod(ring - uStart - aXZ.y, uDepth);
  float Y = ring - dep;
  float X = aXZ.x;

  // Трава растёт только на поле: за боковой линией и за воротами газон уходит
  // в тень, и травинки там висели бы в темноте сами по себе.
  if (abs(X) > 34.5 || Y < -12.0 || Y > 117.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // ДАЛЬ: травинка не пропадает скачком, а уходит в землю.
  // Уход в землю — по расстоянию от камеры, как и горизонт земли. Оно не
  // меньше dep, так что на завороте кольца травинка по-прежнему в земле.
  // По большему из двух: по кольцу — чтобы шов на его завороте оставался
  // в земле, по расстоянию от камеры — чтобы даль растворялась кругом.
  // У КАЖДОЙ ТРАВИНКИ СВОЙ РУБЕЖ. Прежде все травинки слоя укорачивались
  // разом в одной полосе даля — под углом пять метров сжимались в несколько
  // пикселей, и на поле стояла ЧЁТКАЯ ЛИНИЯ: ближе густая резкая трава,
  // дальше редкая, между ней гладкая земля — «мыло». Теперь рубеж каждой
  // взят случайно между uFade.x и uFade.y: густота спадает постепенно,
  // линии нет ни на каком расстоянии.
  // Рубеж не дальше края полосы: там её заворот, и травинка выскочила бы.
  // ПОДСЕВ С ВЫСОТЫ РЕДЕЕТ РАВНОМЕРНО. Он вчетверо гуще основного слоя
  // и кончается в ~21 м от камеры: сверху это диск другой густоты вокруг
  // точки под камерой, и он едет с ней — «тёмная часть травы отходит назад
  // при скролле». Травинки выпадают по своему случайному числу, а не с края:
  // подсев тает весь разом, без кольца.
  if (fract(aR * 7.13 + 0.31) < uThin * uHigh) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  float cut = min(mix(uFade.x, uFade.y, aR) * uSpread, uDepth - 3.0);
  float k = 1.0 - smoothstep(cut - 2.5, cut, max(dep, length(vec2(X - uCamX, Y - uAt))));
  // Та же даль, что у газона: там, где он уходит в прозрачность, травинка
  // уходит в цвет ночи.
  vNight = smoothstep(uHorG.x * uHorG.z, uHorG.y * uHorG.z, length(vec2(X - uCamX, Y - uAt)));
  if (k < 0.004) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  float h = aH * k;
  // ПРИМЯТО: на следе мяча травинка ниже и гнётся вдоль хода.
  vec2 dTrail;
  float press = trailAt(vec2(X, Y), dTrail) * 0.85;
  h *= 1.0 - 0.7 * press;

  // ТРАВИНКА ДЕРЖИТ СВОЙ РАЗМЕР В КАДРЕ. Прежде она была девять миллиметров
  // на любом расстоянии: с крана это полпикселя, травинки пропадали, и газон
  // превращался в голую землю, «слой». Дальше семи метров травинка шире
  // ровно во столько раз, во сколько дальше, — вблизи всё как было.
  // Только с высотой: у травы, вдоль поля, прежний размер был хорош, а
  // укрупнённые дальние травинки перекрывали линии у ворот, и те шли пунктиром.
  float far = max(1.0, mix(1.0, length(vec3(X - uCamX, uEye, Y - uAt)) / 7.0, uHigh));
  vec3 p = vec3((position.x * aRot.x - position.z * aRot.y) * far,
                position.y * h * sqrt(far),
                (position.x * aRot.y + position.z * aRot.x) * far);
  // СВЕРХУ ТРАВА ЛЕЖИТ. Стоячая травинка сверху видна торцом — точкой;
  // настоящий газон с высоты читается штрихами, потому что лист лежит.
  // Наклон в свою сторону у каждой, и только когда камера поднялась.
  p.xz += vec2(-aRot.y, aRot.x) * (0.9 * uHigh * h * sqrt(far) * vUp);

  // ВЕТЕР. Гнётся верхушка, а не корень, — оттого квадрат доли высоты.
  // Волна бежит по полю: порыв кладёт траву полосой, а не всю разом.
  float ph = (X * 0.19 + Y * 0.13) - uTime * uWindV * 0.19;
  float gust = sin(ph) * 0.62 + sin(ph * 2.3 + 1.7) * 0.38;
  p.x += gust * uWindA * h * vUp * vUp * (1.0 - press);
  p.xz += dTrail * press * aH * 0.9 * vUp * vUp;
  // ПРИЧЁСЫВАНИЕ КУРСОРОМ (заказчик 2026-10-10: «провёл — травинки по
  // направлению причесались и сразу восстановились»). Последние восемь
  // точек пути мыши: у каждой травинки рядом (~0.6 м) верхушка ложится по
  // ходу курсора и за ~0.3 с выпрямляется, без колебаний. Наклон — доля
  // роста (ШЕЛЕСТ, 0.45 h): сдвиг в сантиметрах тянул травинку в
  // нитку. Дрожь (прошлый вариант) и расступание сняты.
  // Курсора не было дольше 0.45 с — ни одна точка не действует, и цикл
  // по ним не нужен ни одной травинке (uCombOn, аудит 2026-11-10, № 12).
  vec2 comb = vec2(0.0);
  if (uCombOn > 0.5) {
    for (int i = 0; i < 8; i++) {
      vec4 q = uComb[i];
      float age = uNow - q.z;
      if (q.w <= 0.0 || age < 0.0 || age > 0.45) continue;
      vec2 dq = vec2(X, Y) - q.xy;
      comb += uCombD[i] * q.w * exp(-dot(dq, dq) / 0.18) * exp(-age * 9.0);
    }
  }
  float cl = length(comb);
  if (cl > 1.0) comb /= cl;
  p.xz += comb * ${P(Zt)} * h * vUp * vUp;
  // НАКЛОН, А НЕ СДВИГ: травинка той же длины, верхушка при наклоне ниже.
  // Без этого ход мыши вверх-вниз (вдоль взгляда) уводил верхушку от камеры
  // по полу при той же высоте, и травинка на экране «вырастала» (заказчик).
  float cf = min(cl, 1.0) * ${P(Zt)} * vUp;
  p.y *= sqrt(max(0.0, 1.0 - cf * cf));
  // ДЫХАНИЕ — В ТОЙ ЖЕ ВОЛНЕ. Наклонённая прядь поворачивается к свету другой
  // стороной и светлеет; свет бежит ровно там, где гнутся верхушки, а не
  // отдельным слоем поверх.
  vShine = gust;
  vW = vec2(X, Y);
  // Травинка на линии — меловая. Мел ложится пятнами, как и на земле.
  // Дальше 10 см от любой линии и 20 см от точек мел травинки — ровно ноль
  // (полоса гаснет к hw + aa = 8.5 см, точка — к 18 см): razmetka с её
  // арктангенсами считается только у линий (аудит 2026-11-10, № 12).
  vPaint = nearChalk(vec2(X, Y)) < 0.0 ? razmetka(vec2(X, Y), 0.065, 0.02) : 0.0;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(X + p.x, p.y, Y + p.z, 1.0);

  // СЛОВО: травинка, попавшая в букву, загорается цветом этой буквы.
  // Место берётся в кадре, как у слова Tronexo на точках.
  vWord = 0.0;
  vWordCol = vec3(0.0);
  if (uWordAmt > 0.001) {
    vec2 sc = gl_Position.xy / gl_Position.w * 0.5 + 0.5;
    vec2 wu = (sc - uWordBox.xy) / uWordBox.zw + 0.5;
    if (wu.x > 0.0 && wu.x < 1.0 && wu.y > 0.0 && wu.y < 1.0) {
      vec4 m = texture2D(uWord, wu);
      vWord = m.a * uWordAmt;
      vWordCol = m.rgb;
    }
  }
}
`,on=`
precision highp float;
varying vec3 vTint;
varying float vUp;
varying float vShine;
varying vec2 vW;
varying float vPaint;
varying float vWord;
varying vec3 vWordCol;
varying float vNight;
uniform vec3 uNight;
${Ae}
${ze}

void main() {
  // Низ травинки в тени соседок, верхушка на свету: без этого газон
  // выходит плоским ковром одного тона.
  float shine = 1.0 + 0.28 * vShine * vUp * vUp;
  vec3 c = vTint * (0.62 + 0.72 * vUp) * shine;
  // Мел гуще на верхушке: кисть красит сверху, к корню его меньше.
  c = mix(c, vec3(0.62, 0.66, 0.62) * (0.7 + 0.45 * vUp), clamp(vPaint, 0.0, 1.0) * 0.9);
  c *= svet(vW);
  // Загоревшаяся травинка — ИСТОЧНИК, а не крашеная: к верхушке она ярче.
  c = mix(c, vWordCol * (0.75 + 0.7 * vUp), clamp(vWord, 0.0, 1.0));
  c = mix(c, uNight, vNight);
  gl_FragColor = vec4(toSRGB(c), 1.0);
}
`;function Qt(t,e,n,s,o,r){const a=new $e(jo,1,3,1,!0);a.translate(0,.5,0);const i=new Tt;{const b=a.attributes.position,w=new Map,_=[],F=[];for(const k of a.index.array){const T=`${Math.round(b.getX(k)*1e5)},${Math.round(b.getY(k)*1e5)},${Math.round(b.getZ(k)*1e5)}`;w.has(T)||(w.set(T,_.length/3),_.push(b.getX(k),b.getY(k),b.getZ(k))),F.push(w.get(T))}i.setIndex(F),i.setAttribute("position",new yt(_,3))}const c=new Float32Array(t*2),m=new Float32Array(t),v=new Float32Array(t*2),l=new Float32Array(t*3),d=new Float32Array(t),y=new K;for(let b=0;b<t;b++){c[b*2]=(Math.random()-.5)*qo,c[b*2+1]=Math.random()*n,m[b]=It+Math.random()*(Uo-It);const w=Math.random()*Math.PI*2;v[b*2]=Math.cos(w),v[b*2+1]=Math.sin(w),y.set(Jt[Math.random()*Jt.length|0]),y.offsetHSL(0,(Math.random()-.5)*.08,(Math.random()-.5)*.09),l[b*3]=y.r,l[b*3+1]=y.g,l[b*3+2]=y.b,d[b]=Math.random()}i.setAttribute("aXZ",new a0(c,2)),i.setAttribute("aH",new a0(m,1)),i.setAttribute("aRot",new a0(v,2)),i.setAttribute("aTint",new a0(l,3)),i.setAttribute("aR",new a0(d,1)),i.instanceCount=t;const W=new N(i,new qe({vertexShader:en,fragmentShader:on,side:y0,uniforms:{uDepth:{value:n},uStart:{value:e},uFade:{value:s},uWindA:{value:Ko},uWindV:{value:Jo},uBack:{value:0},uThin:{value:o?1:0},uTime:r.uTime,uAt:r.uAt,uCamX:r.uCamX,uDraw:r.uDraw,uPool:r.uPool,uLamp:r.uLamp,uTma:r.uTma,uBall:r.uBall,uComb:r.uComb,uCombD:r.uCombD,uCombOn:r.uCombOn,uTrail:r.uTrail,uTrailBox:r.uTrailBox,uNow:r.uNow,uHigh:r.uHigh,uEye:r.uEye,uHorG:r.uHorG,uNight:r.uNight,uSpread:r.uSpread,uWord:r.uWord,uWordBox:r.uWordBox,uWordAmt:r.uWordAmt}}));return W.frustumCulled=!1,W}function nn(t){const e=Qt($o,0,Eo,new J(Io,Zo),!1,t),n=Qt(Qo,pt,Kt,new J(pt+12,pt+Kt-1),!0,t);return{трава:e,подсев:n}}function an(t,e){const n=new it,s=.06,o=3.66+s,r=2.44+s,a=2.1,i=.025,c=i;t.add(new Ee(15135487,1454106,1.1));const m=new Ue(16777215,2.2);m.position.set(-9,14,16),t.add(m);const v=new Rt({color:15922674,roughness:.38,metalness:0}),l=(u,C,R,B,X,O,Q,p)=>{const f=new A(u,C,R),x=new A(B,X,O),M=new N(new se(Q,Q,f.distanceTo(x),24,1,!0),p);return M.position.copy(f).add(x).multiplyScalar(.5),M.quaternion.setFromUnitVectors(new A(0,1,0),x.clone().sub(f).normalize()),M},d=(u,C,R,B,X)=>{const O=new N(new je(B,24,12),X);return O.position.set(u,C,R),O};n.add(l(-o,0,0,-o,r,0,s,v)),n.add(l(o,0,0,o,r,0,s,v)),n.add(l(-o,r,0,o,r,0,s,v)),n.add(d(-o,r,0,s,v),d(o,r,0,s,v));const y=new Rt({color:7305842,roughness:.6});for(const u of[-o,o])n.add(l(u,r,0,u,a,-1,i,y)),n.add(l(u,a,-1,u,c,-2,i,y)),n.add(l(u,c,0,u,c,-2,i,y)),n.add(d(u,a,-1,i,y),d(u,c,-2,i,y));n.add(l(-o,a,-1,o,a,-1,i,y)),n.add(l(-o,c,-2,o,c,-2,i,y));const W=.12,b=document.createElement("canvas");b.width=b.height=128;const w=b.getContext("2d");w.strokeStyle="#ffffff",w.lineWidth=1.4;for(let u=0;u<=128;u+=16)w.beginPath(),w.moveTo(u,0),w.lineTo(u,128),w.stroke(),w.beginPath(),w.moveTo(0,u),w.lineTo(128,u),w.stroke();const _=W*8,F=new wt(b);F.wrapS=F.wrapT=gt,F.anisotropy=8;const k=new o0({transparent:!0,depthWrite:!1,side:y0,uniforms:{uMap:{value:F},uOp:{value:.42}},vertexShader:`
      varying vec2 vUv;
      varying float vH;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vUv = uv;
        vH = w.y;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uMap;
      uniform float uOp;
      varying vec2 vUv;
      varying float vH;
      void main() {
        float a = texture2D(uMap, vUv).a;
        float lit = 0.35 + 0.65 * smoothstep(0.0, 2.4, vH);
        gl_FragColor = vec4(vec3(0.86, 0.9, 0.87) * lit, a * uOp * (0.55 + 0.45 * lit));
      }`});k.userData.сеть=!0;const T=u=>{const C=[];for(let M=1;M<u.length-1;M++)C.push(...u[0],...u[M],...u[M+1]);const R=C.length/3,B=M=>new A(C[M*3],C[M*3+1],C[M*3+2]),X=B(0),O=B(1).sub(X).normalize(),Q=B(2).sub(X).cross(O).normalize(),p=new A().crossVectors(O,Q),f=[];for(let M=0;M<R;M++){const h=B(M).sub(X);f.push(h.dot(O)/_,h.dot(p)/_)}const x=new le;return x.setAttribute("position",new bt(new Float32Array(C),3)),x.setAttribute("uv",new bt(new Float32Array(f),2)),new N(x,k)};n.add(T([[-o,r,0],[o,r,0],[o,a,-1],[-o,a,-1]])),n.add(T([[-o,a,-1],[o,a,-1],[o,c,-2],[-o,c,-2]]));for(const u of[-o,o])n.add(T([[u,c,0],[u,r,0],[u,a,-1],[u,c,-2]]));n.scale.setScalar(c0),t.add(n),n.traverse(u=>{if(u.material)for(const C of[].concat(u.material))C.userData.доля===void 0&&(C.userData.доля=C.opacity,C.transparent=!0,C.depthWrite=!1,e.push(C))});const I=new F0({colorWrite:!1,transparent:!0,depthWrite:!0}),E=[];n.traverse(u=>{u.isMesh&&!u.material.userData.сеть&&E.push(u)});for(const u of E){const C=new N(u.geometry,I);C.position.copy(u.position),C.quaternion.copy(u.quaternion),C.renderOrder=5,n.add(C),u.renderOrder=6,u.material.depthFunc=ce}return n.traverse(u=>{u.isMesh&&u.material.userData.сеть&&(u.renderOrder=7)}),n}const Y0={шаг:.022,кант:.0065,диаметр:.01626,диоды:JSON.parse("[[-0.54887,0.20187],[-0.526,0.20187],[-0.50313,0.20187],[-0.48026,0.20187],[-0.45739,0.20187],[-0.43452,0.20187],[-0.41165,0.20187],[-0.38878,0.20187],[-0.36591,0.20187],[-0.34304,0.20187],[-0.32018,0.20187],[-0.29731,0.20187],[-0.27444,0.20187],[0.27444,0.20187],[0.29731,0.20187],[0.32018,0.20187],[0.34304,0.20187],[0.36591,0.20187],[0.38878,0.20187],[0.41165,0.20187],[0.43452,0.20187],[0.45739,0.20187],[0.48026,0.20187],[0.50313,0.20187],[0.526,0.20187],[0.54887,0.20187],[-0.54887,0.22152],[-0.526,0.22152],[-0.50313,0.22152],[-0.48026,0.22152],[-0.45739,0.22152],[-0.43452,0.22152],[-0.41165,0.22152],[-0.38878,0.22152],[-0.36591,0.22152],[-0.34304,0.22152],[-0.32018,0.22152],[-0.29731,0.22152],[-0.27444,0.22152],[-0.25157,0.22152],[0.25157,0.22152],[0.27444,0.22152],[0.29731,0.22152],[0.32018,0.22152],[0.34304,0.22152],[0.36591,0.22152],[0.38878,0.22152],[0.41165,0.22152],[0.43452,0.22152],[0.45739,0.22152],[0.48026,0.22152],[0.50313,0.22152],[0.526,0.22152],[0.54887,0.22152],[-0.54887,0.24117],[-0.526,0.24117],[-0.50313,0.24117],[-0.48026,0.24117],[-0.45739,0.24117],[-0.43452,0.24117],[-0.41165,0.24117],[-0.38878,0.24117],[-0.36591,0.24117],[-0.34304,0.24117],[-0.32018,0.24117],[-0.29731,0.24117],[-0.27444,0.24117],[-0.25157,0.24117],[-0.2287,0.24117],[0.2287,0.24117],[0.25157,0.24117],[0.27444,0.24117],[0.29731,0.24117],[0.32018,0.24117],[0.34304,0.24117],[0.36591,0.24117],[0.38878,0.24117],[0.41165,0.24117],[0.43452,0.24117],[0.45739,0.24117],[0.48026,0.24117],[0.50313,0.24117],[0.526,0.24117],[0.54887,0.24117],[-0.54887,0.26082],[-0.526,0.26082],[-0.50313,0.26082],[-0.48026,0.26082],[-0.45739,0.26082],[-0.43452,0.26082],[-0.41165,0.26082],[-0.38878,0.26082],[-0.36591,0.26082],[-0.34304,0.26082],[-0.32018,0.26082],[-0.29731,0.26082],[-0.27444,0.26082],[-0.25157,0.26082],[-0.2287,0.26082],[-0.20583,0.26082],[0.20583,0.26082],[0.2287,0.26082],[0.25157,0.26082],[0.27444,0.26082],[0.29731,0.26082],[0.32018,0.26082],[0.34304,0.26082],[0.36591,0.26082],[0.38878,0.26082],[0.41165,0.26082],[0.43452,0.26082],[0.45739,0.26082],[0.48026,0.26082],[0.50313,0.26082],[0.526,0.26082],[0.54887,0.26082],[-0.54887,0.28047],[-0.526,0.28047],[-0.50313,0.28047],[-0.48026,0.28047],[-0.45739,0.28047],[-0.43452,0.28047],[-0.41165,0.28047],[-0.38878,0.28047],[-0.36591,0.28047],[-0.34304,0.28047],[-0.32018,0.28047],[-0.29731,0.28047],[-0.27444,0.28047],[-0.25157,0.28047],[-0.2287,0.28047],[-0.20583,0.28047],[-0.18296,0.28047],[0.18296,0.28047],[0.20583,0.28047],[0.2287,0.28047],[0.25157,0.28047],[0.27444,0.28047],[0.29731,0.28047],[0.32018,0.28047],[0.34304,0.28047],[0.36591,0.28047],[0.38878,0.28047],[0.41165,0.28047],[0.43452,0.28047],[0.45739,0.28047],[0.48026,0.28047],[0.50313,0.28047],[0.526,0.28047],[0.54887,0.28047],[-0.54887,0.30012],[-0.526,0.30012],[-0.50313,0.30012],[-0.48026,0.30012],[-0.45739,0.30012],[-0.43452,0.30012],[-0.41165,0.30012],[-0.38878,0.30012],[-0.36591,0.30012],[-0.34304,0.30012],[-0.32018,0.30012],[-0.29731,0.30012],[-0.27444,0.30012],[-0.25157,0.30012],[-0.2287,0.30012],[-0.20583,0.30012],[-0.18296,0.30012],[-0.16009,0.30012],[0.16009,0.30012],[0.18296,0.30012],[0.20583,0.30012],[0.2287,0.30012],[0.25157,0.30012],[0.27444,0.30012],[0.29731,0.30012],[0.32018,0.30012],[0.34304,0.30012],[0.36591,0.30012],[0.38878,0.30012],[0.41165,0.30012],[0.43452,0.30012],[0.45739,0.30012],[0.48026,0.30012],[0.50313,0.30012],[0.526,0.30012],[0.54887,0.30012],[-0.54887,0.31977],[-0.526,0.31977],[-0.50313,0.31977],[-0.48026,0.31977],[-0.45739,0.31977],[-0.43452,0.31977],[-0.41165,0.31977],[-0.38878,0.31977],[-0.36591,0.31977],[-0.34304,0.31977],[-0.32018,0.31977],[-0.29731,0.31977],[-0.27444,0.31977],[-0.25157,0.31977],[-0.2287,0.31977],[-0.20583,0.31977],[-0.18296,0.31977],[-0.16009,0.31977],[-0.13722,0.31977],[0.13722,0.31977],[0.16009,0.31977],[0.18296,0.31977],[0.20583,0.31977],[0.2287,0.31977],[0.25157,0.31977],[0.27444,0.31977],[0.29731,0.31977],[0.32018,0.31977],[0.34304,0.31977],[0.36591,0.31977],[0.38878,0.31977],[0.41165,0.31977],[0.43452,0.31977],[0.45739,0.31977],[0.48026,0.31977],[0.50313,0.31977],[0.526,0.31977],[0.54887,0.31977],[-0.54887,0.33942],[-0.526,0.33942],[-0.50313,0.33942],[-0.48026,0.33942],[-0.45739,0.33942],[-0.43452,0.33942],[-0.41165,0.33942],[-0.38878,0.33942],[-0.36591,0.33942],[-0.34304,0.33942],[-0.32018,0.33942],[-0.29731,0.33942],[-0.27444,0.33942],[-0.25157,0.33942],[-0.2287,0.33942],[-0.20583,0.33942],[-0.18296,0.33942],[-0.16009,0.33942],[-0.13722,0.33942],[-0.11435,0.33942],[0.11435,0.33942],[0.13722,0.33942],[0.16009,0.33942],[0.18296,0.33942],[0.20583,0.33942],[0.2287,0.33942],[0.25157,0.33942],[0.27444,0.33942],[0.29731,0.33942],[0.32018,0.33942],[0.34304,0.33942],[0.36591,0.33942],[0.38878,0.33942],[0.41165,0.33942],[0.43452,0.33942],[0.45739,0.33942],[0.48026,0.33942],[0.50313,0.33942],[0.526,0.33942],[0.54887,0.33942],[-0.54887,0.35907],[-0.526,0.35907],[-0.50313,0.35907],[-0.48026,0.35907],[-0.45739,0.35907],[-0.43452,0.35907],[-0.41165,0.35907],[-0.38878,0.35907],[-0.36591,0.35907],[-0.34304,0.35907],[-0.32018,0.35907],[-0.29731,0.35907],[-0.27444,0.35907],[-0.25157,0.35907],[-0.2287,0.35907],[-0.20583,0.35907],[-0.18296,0.35907],[-0.16009,0.35907],[-0.13722,0.35907],[-0.11435,0.35907],[-0.09148,0.35907],[0.09148,0.35907],[0.11435,0.35907],[0.13722,0.35907],[0.16009,0.35907],[0.18296,0.35907],[0.20583,0.35907],[0.2287,0.35907],[0.25157,0.35907],[0.27444,0.35907],[0.29731,0.35907],[0.32018,0.35907],[0.34304,0.35907],[0.36591,0.35907],[0.38878,0.35907],[0.41165,0.35907],[0.43452,0.35907],[0.45739,0.35907],[0.48026,0.35907],[0.50313,0.35907],[0.526,0.35907],[0.54887,0.35907],[-0.54887,0.37872],[-0.526,0.37872],[-0.50313,0.37872],[-0.48026,0.37872],[-0.45739,0.37872],[-0.43452,0.37872],[-0.41165,0.37872],[-0.38878,0.37872],[-0.36591,0.37872],[-0.34304,0.37872],[-0.32018,0.37872],[-0.29731,0.37872],[-0.27444,0.37872],[-0.25157,0.37872],[-0.2287,0.37872],[-0.20583,0.37872],[-0.18296,0.37872],[-0.16009,0.37872],[-0.13722,0.37872],[-0.11435,0.37872],[-0.09148,0.37872],[-0.06861,0.37872],[0.06861,0.37872],[0.09148,0.37872],[0.11435,0.37872],[0.13722,0.37872],[0.16009,0.37872],[0.18296,0.37872],[0.20583,0.37872],[0.2287,0.37872],[0.25157,0.37872],[0.27444,0.37872],[0.29731,0.37872],[0.32018,0.37872],[0.34304,0.37872],[0.36591,0.37872],[0.38878,0.37872],[0.41165,0.37872],[0.43452,0.37872],[0.45739,0.37872],[0.48026,0.37872],[0.50313,0.37872],[0.526,0.37872],[0.54887,0.37872],[-0.54887,0.39837],[-0.526,0.39837],[-0.50313,0.39837],[-0.48026,0.39837],[-0.45739,0.39837],[-0.43452,0.39837],[-0.41165,0.39837],[-0.38878,0.39837],[-0.36591,0.39837],[-0.34304,0.39837],[-0.32018,0.39837],[-0.29731,0.39837],[-0.27444,0.39837],[-0.25157,0.39837],[-0.2287,0.39837],[-0.20583,0.39837],[-0.18296,0.39837],[-0.16009,0.39837],[-0.13722,0.39837],[-0.11435,0.39837],[-0.09148,0.39837],[-0.06861,0.39837],[-0.04574,0.39837],[0.04574,0.39837],[0.06861,0.39837],[0.09148,0.39837],[0.11435,0.39837],[0.13722,0.39837],[0.16009,0.39837],[0.18296,0.39837],[0.20583,0.39837],[0.2287,0.39837],[0.25157,0.39837],[0.27444,0.39837],[0.29731,0.39837],[0.32018,0.39837],[0.34304,0.39837],[0.36591,0.39837],[0.38878,0.39837],[0.41165,0.39837],[0.43452,0.39837],[0.45739,0.39837],[0.48026,0.39837],[0.50313,0.39837],[0.526,0.39837],[0.54887,0.39837],[-0.54887,0.41802],[-0.526,0.41802],[-0.50313,0.41802],[-0.48026,0.41802],[-0.45739,0.41802],[-0.43452,0.41802],[-0.41165,0.41802],[-0.38878,0.41802],[-0.36591,0.41802],[-0.34304,0.41802],[-0.32018,0.41802],[-0.29731,0.41802],[-0.27444,0.41802],[-0.25157,0.41802],[-0.2287,0.41802],[-0.20583,0.41802],[-0.18296,0.41802],[-0.16009,0.41802],[-0.13722,0.41802],[-0.11435,0.41802],[-0.09148,0.41802],[-0.06861,0.41802],[-0.04574,0.41802],[-0.02287,0.41802],[0.02287,0.41802],[0.04574,0.41802],[0.06861,0.41802],[0.09148,0.41802],[0.11435,0.41802],[0.13722,0.41802],[0.16009,0.41802],[0.18296,0.41802],[0.20583,0.41802],[0.2287,0.41802],[0.25157,0.41802],[0.27444,0.41802],[0.29731,0.41802],[0.32018,0.41802],[0.34304,0.41802],[0.36591,0.41802],[0.38878,0.41802],[0.41165,0.41802],[0.43452,0.41802],[0.45739,0.41802],[0.48026,0.41802],[0.50313,0.41802],[0.526,0.41802],[0.54887,0.41802],[-0.54887,0.43767],[-0.526,0.43767],[-0.50313,0.43767],[-0.48026,0.43767],[-0.45739,0.43767],[-0.43452,0.43767],[-0.41165,0.43767],[-0.38878,0.43767],[-0.36591,0.43767],[-0.34304,0.43767],[-0.32018,0.43767],[-0.29731,0.43767],[-0.27444,0.43767],[-0.25157,0.43767],[-0.2287,0.43767],[-0.20583,0.43767],[-0.18296,0.43767],[-0.16009,0.43767],[-0.13722,0.43767],[-0.11435,0.43767],[-0.09148,0.43767],[-0.06861,0.43767],[-0.04574,0.43767],[-0.02287,0.43767],[0,0.43767],[0.02287,0.43767],[0.04574,0.43767],[0.06861,0.43767],[0.09148,0.43767],[0.11435,0.43767],[0.13722,0.43767],[0.16009,0.43767],[0.18296,0.43767],[0.20583,0.43767],[0.2287,0.43767],[0.25157,0.43767],[0.27444,0.43767],[0.29731,0.43767],[0.32018,0.43767],[0.34304,0.43767],[0.36591,0.43767],[0.38878,0.43767],[0.41165,0.43767],[0.43452,0.43767],[0.45739,0.43767],[0.48026,0.43767],[0.50313,0.43767],[0.526,0.43767],[0.54887,0.43767],[-0.54887,0.45732],[-0.526,0.45732],[-0.50313,0.45732],[-0.48026,0.45732],[-0.45739,0.45732],[-0.43452,0.45732],[-0.41165,0.45732],[-0.38878,0.45732],[-0.36591,0.45732],[-0.34304,0.45732],[-0.32018,0.45732],[-0.29731,0.45732],[-0.27444,0.45732],[-0.25157,0.45732],[-0.2287,0.45732],[-0.20583,0.45732],[-0.18296,0.45732],[-0.16009,0.45732],[-0.13722,0.45732],[-0.11435,0.45732],[-0.09148,0.45732],[-0.06861,0.45732],[-0.04574,0.45732],[-0.02287,0.45732],[0,0.45732],[0.02287,0.45732],[0.04574,0.45732],[0.06861,0.45732],[0.09148,0.45732],[0.11435,0.45732],[0.13722,0.45732],[0.16009,0.45732],[0.18296,0.45732],[0.20583,0.45732],[0.2287,0.45732],[0.25157,0.45732],[0.27444,0.45732],[0.29731,0.45732],[0.32018,0.45732],[0.34304,0.45732],[0.36591,0.45732],[0.38878,0.45732],[0.41165,0.45732],[0.43452,0.45732],[0.45739,0.45732],[0.48026,0.45732],[0.50313,0.45732],[0.526,0.45732],[0.54887,0.45732],[-0.54887,0.47697],[-0.526,0.47697],[-0.50313,0.47697],[-0.48026,0.47697],[-0.45739,0.47697],[-0.43452,0.47697],[-0.41165,0.47697],[-0.38878,0.47697],[-0.36591,0.47697],[-0.34304,0.47697],[-0.32018,0.47697],[-0.29731,0.47697],[-0.27444,0.47697],[-0.25157,0.47697],[-0.2287,0.47697],[-0.20583,0.47697],[-0.18296,0.47697],[-0.16009,0.47697],[-0.13722,0.47697],[-0.11435,0.47697],[-0.09148,0.47697],[-0.06861,0.47697],[-0.04574,0.47697],[-0.02287,0.47697],[0,0.47697],[0.02287,0.47697],[0.04574,0.47697],[0.06861,0.47697],[0.09148,0.47697],[0.11435,0.47697],[0.13722,0.47697],[0.16009,0.47697],[0.18296,0.47697],[0.20583,0.47697],[0.2287,0.47697],[0.25157,0.47697],[0.27444,0.47697],[0.29731,0.47697],[0.32018,0.47697],[0.34304,0.47697],[0.36591,0.47697],[0.38878,0.47697],[0.41165,0.47697],[0.43452,0.47697],[0.45739,0.47697],[0.48026,0.47697],[0.50313,0.47697],[0.526,0.47697],[0.54887,0.47697],[-0.23914,-0.4825],[-0.2174,-0.4825],[-0.19566,-0.4825],[-0.17392,-0.4825],[-0.15218,-0.4825],[-0.13044,-0.4825],[-0.1087,-0.4825],[-0.08696,-0.4825],[-0.06522,-0.4825],[-0.04348,-0.4825],[-0.02174,-0.4825],[0,-0.4825],[0.02174,-0.4825],[0.04348,-0.4825],[0.06522,-0.4825],[0.08696,-0.4825],[0.1087,-0.4825],[0.13044,-0.4825],[0.15218,-0.4825],[0.17392,-0.4825],[0.19566,-0.4825],[0.2174,-0.4825],[0.23914,-0.4825],[-0.23914,-0.46336],[-0.2174,-0.46336],[-0.19566,-0.46336],[-0.17392,-0.46336],[-0.15218,-0.46336],[-0.13044,-0.46336],[-0.1087,-0.46336],[-0.08696,-0.46336],[-0.06522,-0.46336],[-0.04348,-0.46336],[-0.02174,-0.46336],[0,-0.46336],[0.02174,-0.46336],[0.04348,-0.46336],[0.06522,-0.46336],[0.08696,-0.46336],[0.1087,-0.46336],[0.13044,-0.46336],[0.15218,-0.46336],[0.17392,-0.46336],[0.19566,-0.46336],[0.2174,-0.46336],[0.23914,-0.46336],[-0.23914,-0.44423],[-0.2174,-0.44423],[-0.19566,-0.44423],[-0.17392,-0.44423],[-0.15218,-0.44423],[-0.13044,-0.44423],[-0.1087,-0.44423],[-0.08696,-0.44423],[-0.06522,-0.44423],[-0.04348,-0.44423],[-0.02174,-0.44423],[0,-0.44423],[0.02174,-0.44423],[0.04348,-0.44423],[0.06522,-0.44423],[0.08696,-0.44423],[0.1087,-0.44423],[0.13044,-0.44423],[0.15218,-0.44423],[0.17392,-0.44423],[0.19566,-0.44423],[0.2174,-0.44423],[0.23914,-0.44423],[-0.23914,-0.42509],[-0.2174,-0.42509],[-0.19566,-0.42509],[-0.17392,-0.42509],[-0.15218,-0.42509],[-0.13044,-0.42509],[-0.1087,-0.42509],[-0.08696,-0.42509],[-0.06522,-0.42509],[-0.04348,-0.42509],[-0.02174,-0.42509],[0,-0.42509],[0.02174,-0.42509],[0.04348,-0.42509],[0.06522,-0.42509],[0.08696,-0.42509],[0.1087,-0.42509],[0.13044,-0.42509],[0.15218,-0.42509],[0.17392,-0.42509],[0.19566,-0.42509],[0.2174,-0.42509],[0.23914,-0.42509],[-0.23914,-0.40596],[-0.2174,-0.40596],[-0.19566,-0.40596],[-0.17392,-0.40596],[-0.15218,-0.40596],[-0.13044,-0.40596],[-0.1087,-0.40596],[-0.08696,-0.40596],[-0.06522,-0.40596],[-0.04348,-0.40596],[-0.02174,-0.40596],[0,-0.40596],[0.02174,-0.40596],[0.04348,-0.40596],[0.06522,-0.40596],[0.08696,-0.40596],[0.1087,-0.40596],[0.13044,-0.40596],[0.15218,-0.40596],[0.17392,-0.40596],[0.19566,-0.40596],[0.2174,-0.40596],[0.23914,-0.40596],[-0.23914,-0.38682],[-0.2174,-0.38682],[-0.19566,-0.38682],[-0.17392,-0.38682],[-0.15218,-0.38682],[-0.13044,-0.38682],[-0.1087,-0.38682],[-0.08696,-0.38682],[-0.06522,-0.38682],[-0.04348,-0.38682],[-0.02174,-0.38682],[0,-0.38682],[0.02174,-0.38682],[0.04348,-0.38682],[0.06522,-0.38682],[0.08696,-0.38682],[0.1087,-0.38682],[0.13044,-0.38682],[0.15218,-0.38682],[0.17392,-0.38682],[0.19566,-0.38682],[0.2174,-0.38682],[0.23914,-0.38682],[-0.23914,-0.36769],[-0.2174,-0.36769],[-0.19566,-0.36769],[-0.17392,-0.36769],[-0.15218,-0.36769],[-0.13044,-0.36769],[-0.1087,-0.36769],[-0.08696,-0.36769],[-0.06522,-0.36769],[-0.04348,-0.36769],[-0.02174,-0.36769],[0,-0.36769],[0.02174,-0.36769],[0.04348,-0.36769],[0.06522,-0.36769],[0.08696,-0.36769],[0.1087,-0.36769],[0.13044,-0.36769],[0.15218,-0.36769],[0.17392,-0.36769],[0.19566,-0.36769],[0.2174,-0.36769],[0.23914,-0.36769],[-0.23914,-0.34855],[-0.2174,-0.34855],[-0.19566,-0.34855],[-0.17392,-0.34855],[-0.15218,-0.34855],[-0.13044,-0.34855],[-0.1087,-0.34855],[-0.08696,-0.34855],[-0.06522,-0.34855],[-0.04348,-0.34855],[-0.02174,-0.34855],[0,-0.34855],[0.02174,-0.34855],[0.04348,-0.34855],[0.06522,-0.34855],[0.08696,-0.34855],[0.1087,-0.34855],[0.13044,-0.34855],[0.15218,-0.34855],[0.17392,-0.34855],[0.19566,-0.34855],[0.2174,-0.34855],[0.23914,-0.34855],[-0.23914,-0.32942],[-0.2174,-0.32942],[-0.19566,-0.32942],[-0.17392,-0.32942],[-0.15218,-0.32942],[-0.13044,-0.32942],[-0.1087,-0.32942],[-0.08696,-0.32942],[-0.06522,-0.32942],[-0.04348,-0.32942],[-0.02174,-0.32942],[0,-0.32942],[0.02174,-0.32942],[0.04348,-0.32942],[0.06522,-0.32942],[0.08696,-0.32942],[0.1087,-0.32942],[0.13044,-0.32942],[0.15218,-0.32942],[0.17392,-0.32942],[0.19566,-0.32942],[0.2174,-0.32942],[0.23914,-0.32942],[-0.23914,-0.31028],[-0.2174,-0.31028],[-0.19566,-0.31028],[-0.17392,-0.31028],[-0.15218,-0.31028],[-0.13044,-0.31028],[-0.1087,-0.31028],[-0.08696,-0.31028],[-0.06522,-0.31028],[-0.04348,-0.31028],[-0.02174,-0.31028],[0,-0.31028],[0.02174,-0.31028],[0.04348,-0.31028],[0.06522,-0.31028],[0.08696,-0.31028],[0.1087,-0.31028],[0.13044,-0.31028],[0.15218,-0.31028],[0.17392,-0.31028],[0.19566,-0.31028],[0.2174,-0.31028],[0.23914,-0.31028],[-0.23914,-0.29115],[-0.2174,-0.29115],[-0.19566,-0.29115],[-0.17392,-0.29115],[-0.15218,-0.29115],[-0.13044,-0.29115],[-0.1087,-0.29115],[-0.08696,-0.29115],[-0.06522,-0.29115],[-0.04348,-0.29115],[-0.02174,-0.29115],[0,-0.29115],[0.02174,-0.29115],[0.04348,-0.29115],[0.06522,-0.29115],[0.08696,-0.29115],[0.1087,-0.29115],[0.13044,-0.29115],[0.15218,-0.29115],[0.17392,-0.29115],[0.19566,-0.29115],[0.2174,-0.29115],[0.23914,-0.29115],[-0.23914,-0.27201],[-0.2174,-0.27201],[-0.19566,-0.27201],[-0.17392,-0.27201],[-0.15218,-0.27201],[-0.13044,-0.27201],[-0.1087,-0.27201],[-0.08696,-0.27201],[-0.06522,-0.27201],[-0.04348,-0.27201],[-0.02174,-0.27201],[0,-0.27201],[0.02174,-0.27201],[0.04348,-0.27201],[0.06522,-0.27201],[0.08696,-0.27201],[0.1087,-0.27201],[0.13044,-0.27201],[0.15218,-0.27201],[0.17392,-0.27201],[0.19566,-0.27201],[0.2174,-0.27201],[0.23914,-0.27201],[-0.23914,-0.25288],[-0.2174,-0.25288],[-0.19566,-0.25288],[-0.17392,-0.25288],[-0.15218,-0.25288],[-0.13044,-0.25288],[-0.1087,-0.25288],[-0.08696,-0.25288],[-0.06522,-0.25288],[-0.04348,-0.25288],[-0.02174,-0.25288],[0,-0.25288],[0.02174,-0.25288],[0.04348,-0.25288],[0.06522,-0.25288],[0.08696,-0.25288],[0.1087,-0.25288],[0.13044,-0.25288],[0.15218,-0.25288],[0.17392,-0.25288],[0.19566,-0.25288],[0.2174,-0.25288],[0.23914,-0.25288],[-0.23914,-0.23374],[-0.2174,-0.23374],[-0.19566,-0.23374],[-0.17392,-0.23374],[-0.15218,-0.23374],[-0.13044,-0.23374],[-0.1087,-0.23374],[-0.08696,-0.23374],[-0.06522,-0.23374],[-0.04348,-0.23374],[-0.02174,-0.23374],[0,-0.23374],[0.02174,-0.23374],[0.04348,-0.23374],[0.06522,-0.23374],[0.08696,-0.23374],[0.1087,-0.23374],[0.13044,-0.23374],[0.15218,-0.23374],[0.17392,-0.23374],[0.19566,-0.23374],[0.2174,-0.23374],[0.23914,-0.23374],[-0.23914,-0.21461],[-0.2174,-0.21461],[-0.19566,-0.21461],[-0.17392,-0.21461],[-0.15218,-0.21461],[-0.13044,-0.21461],[-0.1087,-0.21461],[-0.08696,-0.21461],[-0.06522,-0.21461],[-0.04348,-0.21461],[-0.02174,-0.21461],[0,-0.21461],[0.02174,-0.21461],[0.04348,-0.21461],[0.06522,-0.21461],[0.08696,-0.21461],[0.1087,-0.21461],[0.13044,-0.21461],[0.15218,-0.21461],[0.17392,-0.21461],[0.19566,-0.21461],[0.2174,-0.21461],[0.23914,-0.21461],[-0.23914,-0.19547],[-0.2174,-0.19547],[-0.19566,-0.19547],[-0.17392,-0.19547],[-0.15218,-0.19547],[-0.13044,-0.19547],[-0.1087,-0.19547],[-0.08696,-0.19547],[-0.06522,-0.19547],[-0.04348,-0.19547],[-0.02174,-0.19547],[0,-0.19547],[0.02174,-0.19547],[0.04348,-0.19547],[0.06522,-0.19547],[0.08696,-0.19547],[0.1087,-0.19547],[0.13044,-0.19547],[0.15218,-0.19547],[0.17392,-0.19547],[0.19566,-0.19547],[0.2174,-0.19547],[0.23914,-0.19547],[-0.23914,-0.17634],[-0.2174,-0.17634],[-0.19566,-0.17634],[-0.17392,-0.17634],[-0.15218,-0.17634],[-0.13044,-0.17634],[-0.1087,-0.17634],[-0.08696,-0.17634],[-0.06522,-0.17634],[-0.04348,-0.17634],[-0.02174,-0.17634],[0,-0.17634],[0.02174,-0.17634],[0.04348,-0.17634],[0.06522,-0.17634],[0.08696,-0.17634],[0.1087,-0.17634],[0.13044,-0.17634],[0.15218,-0.17634],[0.17392,-0.17634],[0.19566,-0.17634],[0.2174,-0.17634],[0.23914,-0.17634],[-0.23914,-0.1572],[-0.2174,-0.1572],[-0.19566,-0.1572],[-0.17392,-0.1572],[-0.15218,-0.1572],[-0.13044,-0.1572],[-0.1087,-0.1572],[-0.08696,-0.1572],[-0.06522,-0.1572],[-0.04348,-0.1572],[-0.02174,-0.1572],[0,-0.1572],[0.02174,-0.1572],[0.04348,-0.1572],[0.06522,-0.1572],[0.08696,-0.1572],[0.1087,-0.1572],[0.13044,-0.1572],[0.15218,-0.1572],[0.17392,-0.1572],[0.19566,-0.1572],[0.2174,-0.1572],[0.23914,-0.1572],[-0.2174,-0.13807],[-0.19566,-0.13807],[-0.17392,-0.13807],[-0.15218,-0.13807],[-0.13044,-0.13807],[-0.1087,-0.13807],[-0.08696,-0.13807],[-0.06522,-0.13807],[-0.04348,-0.13807],[-0.02174,-0.13807],[0,-0.13807],[0.02174,-0.13807],[0.04348,-0.13807],[0.06522,-0.13807],[0.08696,-0.13807],[0.1087,-0.13807],[0.13044,-0.13807],[0.15218,-0.13807],[0.17392,-0.13807],[0.19566,-0.13807],[0.2174,-0.13807],[-0.2174,-0.11893],[-0.19566,-0.11893],[-0.17392,-0.11893],[-0.15218,-0.11893],[-0.13044,-0.11893],[-0.1087,-0.11893],[-0.08696,-0.11893],[-0.06522,-0.11893],[-0.04348,-0.11893],[-0.02174,-0.11893],[0,-0.11893],[0.02174,-0.11893],[0.04348,-0.11893],[0.06522,-0.11893],[0.08696,-0.11893],[0.1087,-0.11893],[0.13044,-0.11893],[0.15218,-0.11893],[0.17392,-0.11893],[0.19566,-0.11893],[0.2174,-0.11893],[-0.19566,-0.0998],[-0.17392,-0.0998],[-0.15218,-0.0998],[-0.13044,-0.0998],[-0.1087,-0.0998],[-0.08696,-0.0998],[-0.06522,-0.0998],[-0.04348,-0.0998],[-0.02174,-0.0998],[0,-0.0998],[0.02174,-0.0998],[0.04348,-0.0998],[0.06522,-0.0998],[0.08696,-0.0998],[0.1087,-0.0998],[0.13044,-0.0998],[0.15218,-0.0998],[0.17392,-0.0998],[0.19566,-0.0998],[-0.17392,-0.08066],[-0.15218,-0.08066],[-0.13044,-0.08066],[-0.1087,-0.08066],[-0.08696,-0.08066],[-0.06522,-0.08066],[-0.04348,-0.08066],[-0.02174,-0.08066],[0,-0.08066],[0.02174,-0.08066],[0.04348,-0.08066],[0.06522,-0.08066],[0.08696,-0.08066],[0.1087,-0.08066],[0.13044,-0.08066],[0.15218,-0.08066],[0.17392,-0.08066],[-0.15218,-0.06153],[-0.13044,-0.06153],[-0.1087,-0.06153],[-0.08696,-0.06153],[-0.06522,-0.06153],[-0.04348,-0.06153],[-0.02174,-0.06153],[0,-0.06153],[0.02174,-0.06153],[0.04348,-0.06153],[0.06522,-0.06153],[0.08696,-0.06153],[0.1087,-0.06153],[0.13044,-0.06153],[0.15218,-0.06153],[-0.13044,-0.04239],[-0.1087,-0.04239],[-0.08696,-0.04239],[-0.06522,-0.04239],[-0.04348,-0.04239],[-0.02174,-0.04239],[0,-0.04239],[0.02174,-0.04239],[0.04348,-0.04239],[0.06522,-0.04239],[0.08696,-0.04239],[0.1087,-0.04239],[0.13044,-0.04239],[-0.1087,-0.02326],[-0.08696,-0.02326],[-0.06522,-0.02326],[-0.04348,-0.02326],[-0.02174,-0.02326],[0,-0.02326],[0.02174,-0.02326],[0.04348,-0.02326],[0.06522,-0.02326],[0.08696,-0.02326],[0.1087,-0.02326],[-0.08696,-0.00412],[-0.06522,-0.00412],[-0.04348,-0.00412],[-0.02174,-0.00412],[0,-0.00412],[0.02174,-0.00412],[0.04348,-0.00412],[0.06522,-0.00412],[0.08696,-0.00412],[-0.06522,0.01501],[-0.04348,0.01501],[-0.02174,0.01501],[0,0.01501],[0.02174,0.01501],[0.04348,0.01501],[0.06522,0.01501],[-0.04348,0.03415],[-0.02174,0.03415],[0,0.03415],[0.02174,0.03415],[0.04348,0.03415],[-0.02174,0.05328],[0,0.05328],[0.02174,0.05328],[0,0.07242]]")},$0=3134570,te={blending:Ze,blendEquation:Ie,blendSrc:V0,blendDst:V0,blendSrcAlpha:V0,blendDstAlpha:V0},rn=8577079;function sn(){const t=.0014749262536873156,e=(r,a)=>new J((r-492)*t,(491-a)*t),n=r=>{const a=new q0;a.moveTo(r[0].x,r[0].y);for(const i of r.slice(1))a.lineTo(i.x,i.y);return a.closePath(),a},s=n([e(108,152),e(876,152),e(876,366),e(672,366),e(660,356),e(492,210),e(325,356),e(313,366),e(108,366)]),o=n([e(492,426),e(655,570),e(666,595),e(666,830),e(318,830),e(318,592),e(330,572)]);return[s,o]}function cn(){const t=sn(),e=un(t);return e.scale.setScalar(pe),e.visible=!1,e}function ln(t,e){let n=0;for(let a=0;a<t.length;a++){const i=t[a],c=t[(a+1)%t.length];n+=i.x*c.y-c.x*i.y}const s=n>0?1:-1,o=t.length,r=[];for(let a=0;a<o;a++){const i=t[(a-1+o)%o],c=t[a],m=t[(a+1)%o],v=new J().subVectors(c,i).normalize(),l=new J().subVectors(m,c).normalize(),d=new J(-v.y*s,v.x*s),y=new J(-l.y*s,l.x*s),W=i.clone().addScaledVector(d,e),b=c.clone().addScaledVector(y,e),w=v.x*l.y-v.y*l.x;if(Math.abs(w)<1e-6){r.push(c.clone().addScaledVector(d,e));continue}const _=((b.x-W.x)*l.y-(b.y-W.y)*l.x)/w;r.push(W.clone().addScaledVector(v,_))}return r}function un(t){const e=Y0.шаг,n=t.map(p=>{const f=p.getPoints();return f[0].distanceTo(f[f.length-1])<1e-6&&f.pop(),f}),s=Y0.кант,o=n.map(p=>ln(p,s)),r=Y0.диоды,a=new Tt;a.index=new p0(1,1).index,a.setAttribute("position",new p0(1,1).attributes.position),a.setAttribute("uv",new p0(1,1).attributes.uv);const i=new Float32Array(r.length*3);r.forEach(([p,f],x)=>{i[x*3]=p,i[x*3+1]=f,i[x*3+2]=Math.random()}),a.setAttribute("iPos",new a0(i,3)),a.instanceCount=r.length;const c=`
float litAt(float y, float seed, float rise) {
  float th = (0.5 - y) * 0.72 + seed * 0.22;   // строка сверху вниз с разбросом
  return smoothstep(th, th + 0.08, rise * 1.02);
}`,m=new o0({transparent:!0,depthWrite:!1,...te,extensions:{derivatives:!0},uniforms:{uRise:{value:0},uOp:{value:1},uPitch:{value:e},uDiam:{value:Y0.диаметр},uCol:{value:new K($0)},uSolid:{value:0}},vertexShader:`
attribute vec3 iPos;
uniform float uDiam;
uniform float uPitch;
varying vec2 vUv;
varying vec2 vO;
varying float vY;
varying float vSeed;
void main() {
  vUv = uv;
  vec2 p = iPos.xy + position.xy * uDiam;
  vO = p;
  vY = iPos.y;
  vSeed = iPos.z;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 0.1, 1.0);
}`,fragmentShader:`
precision highp float;
uniform float uRise;
uniform float uOp;
uniform float uPitch;
uniform vec3 uCol;
uniform float uSolid;
varying vec2 vUv;
varying vec2 vO;
varying float vY;
varying float vSeed;
${c}
void main() {
  float far = smoothstep(0.3, 0.6, max(fwidth(vO.x), fwidth(vO.y)) / uPitch);
  vec2 f = vUv - 0.5;
  float d = length(f) * 2.0;                 // 1 — край диска
  float aa = max(fwidth(d), 1e-4);
  float disc = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, d);
  float core = disc * (1.0 - 0.6 * d);
  float lit = litAt(vY, vSeed, uRise);
  float a = core * mix(0.07, 1.25, lit) * (0.72 + 0.28 * vSeed) * (1.0 - far) * (1.0 - uSolid);
  if (a < 0.001) discard;
  vec3 col = mix(uCol, vec3(1.0), 0.35 * lit * (1.0 - d));
  gl_FragColor = vec4(col * a * uOp, uOp);
}`}),v=new o0({transparent:!0,depthWrite:!1,...te,extensions:{derivatives:!0},uniforms:{uRise:{value:0},uOp:{value:1},uPitch:{value:e},uCol:{value:new K($0)},uSolid:{value:0},uSolidCol:{value:new K(rn)}},vertexShader:`
varying vec2 vO;
void main() {
  vO = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,fragmentShader:`
precision highp float;
uniform float uRise;
uniform float uOp;
uniform float uPitch;
uniform vec3 uCol;
uniform float uSolid;
uniform vec3 uSolidCol;
varying vec2 vO;
${c}
void main() {
  float far = smoothstep(0.3, 0.6, max(fwidth(vO.x), fwidth(vO.y)) / uPitch);
  if (far < 0.001 && uSolid < 0.001) discard;
  float lit = litAt(vO.y, 0.5, uRise);
  float a = 0.38 * mix(0.07, 1.25, lit) * 0.86 * far;
  // СПЛОШНОЙ ЛОГОТИП в воротах: диоды сливаются в ровную заливку
  // фирменного лайма с лёгким свечением.
  vec3 col = mix(uCol * a, uSolidCol * 1.08, uSolid);
  gl_FragColor = vec4(col * uOp, uOp);
}`}),l=new it,d=.2,y=new Vt(t,{depth:d,bevelEnabled:!1,curveSegments:1});y.translate(0,0,.097-d),y.computeVertexNormals();const W=new o0({transparent:!0,uniforms:{uOp:{value:1},uGlow:{value:0},uCol:{value:new K($0)}},vertexShader:`
varying vec3 vN;
varying vec3 vO;
void main() {
  vO = position;
  vN = normalize(mat3(modelMatrix) * normal);
  // Та же запись, что у предпрохода глубины (MeshBasicMaterial): иначе
  // глубина расходится в последних битах, и LessEqual у корпуса мигает
  // через кадр — на подлёте пропадала и появлялась боковая стенка.
  gl_Position = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
}`,fragmentShader:`
precision highp float;
uniform float uOp;
uniform float uGlow;
uniform vec3 uCol;
varying vec3 vN;
varying vec3 vO;
void main() {
  vec3 n = normalize(vN);
  vec3 L = normalize(vec3(0.25, 1.0, 0.6));
  float dif = max(dot(n, L), 0.0);
  // Антрацит; лицо корпуса (под диодами) почти чёрное.
  float front = step(0.9, n.z);
  vec3 base = mix(vec3(0.16, 0.17, 0.18), vec3(0.012, 0.02, 0.016), front);
  // Бока гладкие: шлифовка штрихами и шов посередине сняты — на экране
  // они сыпались в полосы-кирпичи (заказчик 2026-10-10: «на гранях какие-то
  // полосы»). Объём держит свет: верх светлее, низ темнее.
  vec3 col = base * (0.35 + 1.1 * dif);
  // Лицо под диодами чуть зеленеет от горящих точек — внутреннее свечение.
  col += uCol * 0.06 * uGlow * front;
  gl_FragColor = vec4(col, uOp);
}`}),b=new N(y,W);l.add(b);const w=new o0({transparent:!0,uniforms:{uOp:{value:1},uGlow:{value:0},uCol:{value:new K($0)}},vertexShader:`
attribute float aIn;
varying vec3 vN;
varying vec3 vL;
varying float vIn;
void main() {
  vN = normalize(mat3(modelMatrix) * normal);
  vL = normal;
  vIn = aIn;
  // Та же запись, что у предпрохода глубины (MeshBasicMaterial): иначе
  // глубина расходится в последних битах, и LessEqual у корпуса мигает
  // через кадр — на подлёте пропадала и появлялась боковая стенка.
  gl_Position = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
}`,fragmentShader:`
precision highp float;
uniform float uOp;
uniform float uGlow;
uniform vec3 uCol;
varying vec3 vN;
varying vec3 vL;
varying float vIn;
void main() {
  vec3 n = normalize(vN);
  float dif = max(dot(n, normalize(vec3(0.25, 1.0, 0.6))), 0.0);
  vec3 col = vec3(0.24, 0.25, 0.26) * (0.4 + 1.2 * dif);
  // Свет диодов ложится только на внутреннюю кромку канта (стенка у лица).
  float wall = 1.0 - abs(normalize(vL).z);
  col += uCol * 0.22 * uGlow * vIn * wall;
  gl_FragColor = vec4(col, uOp);
}`}),_=.007,F=n.map((p,f)=>{const x=new q0(p);return x.holes.push(new Ke(o[f].slice().reverse())),x}),k=new Vt(F,{depth:_,bevelEnabled:!1,curveSegments:1});k.translate(0,0,.097);const T=k.attributes.position,I=new Float32Array(T.count),E=(p,f,x)=>x.some(M=>Math.abs(M.x-p)+Math.abs(M.y-f)<1e-5);for(let p=0;p<T.count;p++)I[p]=o.some(f=>E(T.getX(p),T.getY(p),f))?1:0;k.setAttribute("aIn",new bt(I,1));const u=new N(k,w);u.renderOrder=1,l.add(u);const C=new Yt(o.map(p=>new q0(p))),R=new F0({color:266249,transparent:!0,opacity:.7,depthWrite:!1,side:y0}),B=new N(C,R);B.position.z=.098,B.renderOrder=1,l.add(B);const X=new N(a,m);X.frustumCulled=!1,X.renderOrder=2,l.add(X);const O=new N(new Yt(o.map(p=>new q0(p))),v);O.position.z=.1,O.renderOrder=2,l.add(O);const Q=new F0({colorWrite:!1,transparent:!0,depthWrite:!0});W.depthWrite=w.depthWrite=!1;for(const p of[b,u]){const f=new N(p.geometry,Q);f.renderOrder=8,l.add(f),p.renderOrder=8.5,p.material.depthFunc=ce}return B.renderOrder=9,X.renderOrder=O.renderOrder=9.5,l.userData.кадр=({рост:p,место:f,уход:x=0})=>{m.uniforms.uRise.value=v.uniforms.uRise.value=p,m.uniforms.uOp.value=v.uniforms.uOp.value=f;const M=V(x,he,1);m.uniforms.uSolid.value=v.uniforms.uSolid.value=M;const h=f*Math.min(1,p*3);R.opacity=.7*h,W.uniforms.uOp.value=h,W.uniforms.uGlow.value=p,w.uniforms.uOp.value=h,w.uniforms.uGlow.value=p},l}function fn(t){const e=new N(new p0(1,1),new o0({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uMap:{value:t},uBox:{value:Lt},uAmt:{value:0}},vertexShader:`
uniform vec4 uBox;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec2 sc = uBox.xy + position.xy * uBox.zw;
  gl_Position = vec4(sc * 2.0 - 1.0, 0.0, 1.0);
}`,fragmentShader:`
uniform sampler2D uMap;
uniform float uAmt;
varying vec2 vUv;
void main() {
  vec4 t = texture2D(uMap, vUv);
  // Текстура в sRGB читается линейной — обратно в sRGB, как на картинке.
  gl_FragColor = vec4(pow(max(t.rgb, vec3(0.0)), vec3(1.0 / 2.2)), t.a * uAmt);
}`}));return e.frustumCulled=!1,e.renderOrder=10,e.visible=!1,e}function vn(){const t=xe(5370206),e=180,n=[],s=[];for(;n.length<e*3;){const i=t()*Math.PI*2,c=.72+t()*.36,m=Math.cos(i)*B0*c,v=52.5+Math.sin(i)*X0*c;if(Math.abs(m)<40&&v>-6&&v<111)continue;const l=1.5+(c-.72)/.36*(g0-6)*(.6+t()*.4);n.push(m,l,v),s.push(12+t()*28,t())}const o=new le;o.setAttribute("position",new yt(n,3)),o.setAttribute("aBeat",new yt(s,2));const r=new o0({transparent:!0,depthWrite:!1,blending:L0,uniforms:{uTime:{value:0},uPx:{value:800},uClear:{value:0}},vertexShader:`
      attribute vec2 aBeat;
      uniform float uTime;
      uniform float uPx;
      uniform float uClear;
      varying float vK;
      void main() {
        float ph = fract(uTime / aBeat.x + aBeat.y) * aBeat.x;
        // Вспышка: 70 мс, мгновенный взлёт, быстрый спад.
        vK = exp(-ph / 0.11) * step(0.0, ph);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        // В финале — не поверх ворот и знака: то же чистое окно, что у дыма.
        vec2 ndc = gl_Position.xy / gl_Position.w;
        vK *= 1.0 - uClear * (1.0 - smoothstep(0.22, 0.5, length((ndc - vec2(0.0, -0.05)) * vec2(1.0, 1.25))));
        // Размер в пикселях кадра: вспышка видна точкой и вдали.
        gl_PointSize = vK > 0.01 ? uPx * (0.03 + 0.06 * vK) : 0.0;
      }`,fragmentShader:`
      varying float vK;
      void main() {
        vec2 p = gl_PointCoord * 2.0 - 1.0;
        float r = dot(p, p);
        // Яркая сердцевина, лучики-крест и широкий ореол — как вспышка в кадре.
        float core = exp(-r * 60.0) * 1.6;
        float cross = (exp(-abs(p.x) * 30.0) + exp(-abs(p.y) * 30.0)) * exp(-r * 3.0) * 0.35;
        float halo = exp(-r * 6.0) * 0.4;
        float a = vK * (core + cross + halo);
        gl_FragColor = vec4(vec3(0.95, 0.97, 1.0) * a, a);
      }`}),a=new Je(o,r);return a.frustumCulled=!1,a}const ee=1,mn=6;function dn(){const t=new ue().load("/assets/tiketa/fog.png");return t.colorSpace=I0,t}function pn(){const t=n0.map((l,d)=>{const y=Ot(l,d).c;return[y,new A(y.x*.75,0,52.5+(y.z-52.5)*.75)]}),e=l=>`vec3(${P(+l.x.toFixed(2))}, ${P(+l.y.toFixed(2))}, ${P(+l.z.toFixed(2))})`,n=260,s=new Float32Array(n*3),o=new Float32Array(n),r=new Float32Array(n),a=xe(2654435769);for(let l=0;l<n;l++){const d=l%13,y=Math.floor(l/13)%20;s[l*3]=-90+(d+.15+a()*.7)*(180/13),s[l*3+1]=3+Math.pow(a(),1.4)*30,s[l*3+2]=-70+(y+.15+a()*.7)*(245/20),o[l]=45*(.7+a()*.6),r[l]=a()}const i=new Tt,c=new p0(1,1);i.index=c.index,i.setAttribute("position",c.attributes.position),i.setAttribute("uv",c.attributes.uv),i.setAttribute("aPos",new a0(s,3)),i.setAttribute("aSize",new a0(o,1)),i.setAttribute("aSeed",new a0(r,1)),i.instanceCount=n;const m=new o0({transparent:!0,depthWrite:!1,blending:L0,uniforms:{uTex:{value:dn()},uTime:{value:0},uOp:{value:mn},uWind:{value:1},uClear:{value:0},uLamp:{value:H0},uTma:{value:kt}},vertexShader:`
      attribute vec3 aPos;
      attribute float aSize;
      attribute float aSeed;
      uniform float uTime;
      uniform float uWind;
      uniform float uClear;
      uniform float uLamp[${n0.length}];
      uniform vec2 uTma;
      varying vec2 vUv;
      varying float vA;
      varying float vY;
      varying float vD;
      float cone(vec3 p, vec3 a, vec3 b) {
        vec3 ab = b - a;
        float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
        float r = mix(3.0, 12.0, t);
        float d = length(p - (a + ab * t));
        // Клуб у самой лампы не вспыхивает: свет набирается к четверти луча.
        // Прежде клуб, проплывая у панели, на пару секунд становился яркой
        // тучкой (замер: пик 124 против обычных 60–90).
        return exp(-(d * d) / (r * r)) * smoothstep(0.0, 0.3, t) * pow(1.0 - t, 0.9);
      }
      float light(vec3 p) {
        float s = 0.0;
${t.map(([l,d],y)=>`        s += uLamp[${y}] * cone(p, ${e(l)}, ${e(d)});`).join(`
`)}
        return s;
      }
      void main() {
        vUv = uv;
        // Ветер несёт клуб через стадион; за краем он возвращается с другой
        // стороны, у краёв тает — без щелчка.
        // Скорость одна у всех: при разных скоростях строй перемешивался
        // и снова сбивался в кучи.
        float sp = uWind;
        vec3 c = aPos;
        c.x = mod(aPos.x + uTime * sp + 90.0, 180.0) - 90.0;
        c.z = mod(aPos.z + uTime * sp * 0.45 + 70.0, 245.0) - 70.0;
        // Подъём по кругу: в конце круга клуб прыгал на 6 м вниз без
        // растворения — «кусками появляется и пропадает». Теперь клуб
        // проявляется в начале подъёма и тает к концу (sin по фазе).
        float ph = fract(uTime * 0.04 * (0.5 + aSeed) + aSeed * 7.0);
        c.y = aPos.y + ph * 6.0 - 3.0;
        float rise = sin(ph * 3.14159);
        float edge = rise * smoothstep(90.0, 76.0, abs(c.x)) * smoothstep(-70.0, -56.0, c.z) * smoothstep(175.0, 161.0, c.z);
        // Без вращения — заказчик против; угол у каждого свой, постоянный.
        float ang = aSeed * 6.2832;
        vec2 q = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * position.xy * aSize;
        vec4 mv = viewMatrix * vec4(c, 1.0);
        mv.xy += q;
        // Высота этой точки клуба над травой — чтобы клуб таял у земли, а не
        // резал траву чёткой линией там, где его плоскость в неё входит.
        vY = (inverse(viewMatrix) * mv).y;
        vD = -mv.z;
        float d = -mv.z;
        // Свет в луче не выше единицы: у ламп клуб становился белым пятном.
        // Пик ниже: «в пике дым слишком яркий». Свет в луче мягко насыщается
        // (1 − e^−x), а не растёт до потолка, и сам потолок ниже.
        // Средний свет как прежде (0.14 + 0.9·min(x,1) при x≈0.5 → 0.59),
        // пик срезан: к 0.8 вместо 1.04 — насыщение 1 − e^−1.8x.
        float L = 0.14 + 0.66 * (1.0 - exp(-1.8 * light(c)));
        // Тьма под раскладками: и дым темнее — ровный отсвет слабеет со всеми
        // прожекторами, над левой половиной поля гаснет почти весь.
        L *= (1.0 - 0.6 * uTma.x) * (1.0 - 0.9 * uTma.y * smoothstep(${P(Z0[0])}, ${P(Z0[1])}, c.x));
        vA = L * edge * smoothstep(8.0, 25.0, d)
          // Ближе своего размера клуб раздувается на полэкрана — в финале он
          // висел пятном перед воротами и знаком. Такой клуб тает.
          * smoothstep(aSize * 0.5, aSize * 1.05, d);
        gl_Position = projectionMatrix * mv;
        // ЧИСТОЕ ОКНО В ФИНАЛЕ. Ворота со знаком — главное в кадре конца
        // страницы; клуб, попавший в их область кадра, растворяется. Окно
        // открывается вместе с воротами (uClear — их проявление).
        vec2 ndc = gl_Position.xy / gl_Position.w;
        float win = 1.0 - smoothstep(0.22, 0.5, length((ndc - vec2(0.0, -0.05)) * vec2(1.0, 1.25)));
        vA *= 1.0 - uClear * win;
      }`,fragmentShader:`
      uniform sampler2D uTex;
      uniform float uOp;
      varying vec2 vUv;
      varying float vA;
      varying float vY;
      varying float vD;
      void main() {
        // Таять у земли — только вблизи: вдали «5 м над травой» ложатся тонкой
        // полосой по горизонту, и дым ниже неё обрезался ровной линией.
        float ground = mix(smoothstep(0.0, 5.0, vY), 1.0, smoothstep(25.0, 55.0, vD));
        // Сила ×3 против первого захода: с картинкой скетча «fog 5» было едва
        // видно, вид «как на стадионе» — при прежних 15.
        float raw = texture2D(uTex, vUv).a * vA * uOp * 0.36 / 5.0 * 7.5 * ground;
        // ОДИН КЛУБ НЕ ЯРЧЕ ПОТОЛКА. Плотная сердцевина картинки в луче давала
        // больше единицы — клуб на пару секунд становился яркой тучкой. Мягкий
        // потолок: слабый дым как был, яркий упирается в КЛУБ_ПОТОЛОК.
        float a = ${P(ee)} * (1.0 - exp(-raw / ${P(ee)}));
        gl_FragColor = vec4(vec3(0.78, 0.85, 0.97) * a, a);
      }`}),v=new N(i,m);return v.frustumCulled=!1,v}let z=null,t0=null,L=null,g=null,j=null,f0=null,l0=null,b0=null,G=null,W0=null,s0=null;const hn=new eo,xn=new oo(new A(0,1,0),0),wn=new J,gn=new A;function oe(t){const e=hn,n=xn,s=wn,o=gn;if(t.pointerType!=="mouse"||!j||document.body.dataset.route!==G0||document.documentElement.classList.contains("menu-open"))return;const r=fe(t);if(document.documentElement.classList.toggle("tk-field",r&&!!t.target.closest?.("main")),!r)return;if(s.set(t.clientX/innerWidth*2-1,-(t.clientY/innerHeight)*2+1),g.updateMatrixWorld(),e.setFromCamera(s,g),!e.ray.intersectPlane(n,o)||o.distanceTo(g.position)>60){s0=null;return}const a=Xt??performance.now()/1e3;if(!s0||a-s0[2]>.2){s0=[o.x,o.z,a];return}const i=o.x-s0[0],c=o.z-s0[1],m=Math.hypot(i,c);if(m<.12)return;const v=m/Math.max(1/240,a-s0[2]);for(let l=0;l<7;l++)T0[l].copy(T0[l+1]),U0[l].copy(U0[l+1]);T0[7].set(o.x,o.z,a,Math.min(1,Math.max(.3,v/4))),U0[7].set(i/m,c/m),s0=[o.x,o.z,a]}let ht=!1;function ne(t){!!t!==ht&&(ht=!!t,ht?addEventListener("pointermove",oe,{passive:!0}):removeEventListener("pointermove",oe,{passive:!0})),q&&q.слушать(t)}let A0=null,D0=null,q=null,ae=1,_e=1600/290,k0=null,tt=null;const Bt=[];let P0=!1,j0=null,et=null;const xt=new A;let Xt=null,ot=!1,Te=performance.now(),O0=null,Y=0,We=0;const re=performance.now();function yn(){const t=document.querySelector("#canvas-wrapper");if(!t)return null;let e=t.querySelector("canvas.canvas-pitch");return e||(e=document.createElement("canvas"),e.className="canvas-pitch",e.setAttribute("aria-hidden","true"),t.append(e)),e}let nt=0,at=0;const Ht=typeof ResizeObserver=="function"?new ResizeObserver(()=>{z&&(nt=z.clientWidth,at=z.clientHeight)}):null;function bn(){if(!t0||!z)return;Ht||(nt=z.clientWidth,at=z.clientHeight);const t=Math.min(2,window.devicePixelRatio||1),e=Math.max(1,Math.round(nt*t)),n=Math.max(1,Math.round(at*t));z.width===e&&z.height===n||(t0.setPixelRatio(1),t0.setSize(e,n,!1),g.aspect=e/n,g.updateProjectionMatrix())}let ke=!1,rt=!1;function Mn(){if(z=yn(),!z)return!1;try{t0=new Oe({canvas:z,alpha:!0,antialias:!0})}catch{return ke=!0,t0=null,z.remove(),z=null,!1}t0.setClearColor(0,0),nt=z.clientWidth,at=z.clientHeight,Ht?.observe(z);const t=z;z.addEventListener("webglcontextlost",()=>{t===z&&(rt=!0,Y&&(cancelAnimationFrame(Y),Y=0))}),z.addEventListener("webglcontextrestored",()=>{t===z&&(rt=!1,!Y&&document.body.dataset.route===G0&&(Y=requestAnimationFrame(Dt)))}),L=new Qe,g||(g=new to(fo,1,.05,400),g.rotation.order="YXZ",g.rotation.set(E0,0,Mt)),L.add(g);const e=Vo();A0=new ue().load("/assets/tiketa/wordmark.webp",r=>{r.image&&r.image.height&&(_e=r.image.width/r.image.height)}),A0.colorSpace=I0,W0=Xo(A0),l0=Yo(e,W0),L.add(l0),{трава:j,подсев:f0}=nn(W0),L.add(j),L.add(f0),b0=an(L,Bt),G=cn(),L.add(G);const n=j.material.uniforms;q?(L.add(q.меш),Object.assign(q.меш.material.uniforms,{uHorG:n.uHorG,uAt:n.uAt,uCamX:n.uCamX,uNight:n.uNight})):q=uo({THREE:Fe,stage:L,lens:g,тень:Se,след:Q0,рамка:Ft,ночь:{uHorG:n.uHorG,uAt:n.uAt,uCamX:n.uCamX,uNight:n.uNight}}),D0=fn(A0),L.add(D0),L.add(_o());const s=pn();tt=s.material,L.add(s);const o=vn();return k0=o.material,L.add(o),!0}const Sn=new J;function Dt(){bn();const t=ot||St;(O0===null||!t)&&(O0=t?(performance.now()-re)/1e3:null);const e=t?O0:(performance.now()-re)/1e3,{at:n,x:s,yaw:o,roll:r,tilt:a,eye:i}=ye();g.position.set(s,i,n),g.rotation.set(a,o,r),j0&&(g.position.set(...j0[0]),g.lookAt(...j0[1]));const c=W0;c.uCamX.value=s;const m=Math.max(1,i/_0),v=(Math.hypot(s,n)+4)/18,l=m+Math.max(0,v-m)*Ut();l0.material.uniforms.uHorK.value=l,c.uHorG.value.z=l;const d=V(i,5,13);if(c.uHigh.value=d,c.uEye.value=i,j.material.uniforms.uBack.value=14*d,f0.material.uniforms.uBack.value=Math.max(tn,12*d),c.uSpread.value=m,c.uAt.value=n,!St){const u=Math.max(0,Math.min(1,((performance.now()-Te)/1e3-po)/ho));c.uDraw.value=u*u*(3-2*u)*1.1}c.uTime.value=e;const y=_t(),W=Math.max(Ut(),V(y,mt,dt));for(const u of Bt)u.userData.сеть?u.uniforms.uOp.value=.42*W:u.opacity=u.userData.доля*W;l0.material.uniforms.uGoal.value=P0?0:W,b0.visible=!P0&&W>.001;const b=V(y,me,de),w=Le(Be()),_=ie();G.visible=b>.001&&_>.001,G.visible&&(G.position.set(C0[0],C0[1]+(qt[1]-C0[1])*w,C0[2]+(qt[2]-C0[2])*w),G.rotation.set(.06,-.38+w*.38,0),G.updateMatrixWorld(),G.userData.кадр({рост:b,место:_,уход:w})),et&&G.visible&&(xt.copy(G.position).project(g),et.push([performance.now(),scrollY,window.__cfigScroll?.lenis?.animatedScroll??-1,y,b,w,_,xt.x,xt.y,g.position.z,g.position.y])),Me.set(G.position.x,G.position.z,.55*b*_*(1-.7*w));const F=V(w,he,1),k=Math.min(1,Math.sqrt(V(w,0,.5)))*_*(1-F);ae=1-V(w,0,.5)*_,D0.material.uniforms.uAmt.value=F*_,D0.visible=F*_>.001;const T=window.innerWidth||1,I=window.innerHeight||1;Lt.set(.5,1-mo,Et,Et*(T/I)/_e),c.uWordAmt.value=k;for(const u of J0)u.resolution.set(T,I);k0.uniforms.uTime.value=e,k0.uniforms.uPx.value=t0.getDrawingBufferSize(Sn).y,k0.uniforms.uClear.value=P0?0:V(y,mt,dt),tt.uniforms.uTime.value=e,tt.uniforms.uClear.value=P0?0:V(y,mt,dt),q.кадр(ae);const E=Xt??performance.now()/1e3;c.uNow.value=E,c.uCombOn.value=T0.some(u=>u.w>0&&E-u.z>-.05&&E-u.z<.5)?1:0,Oo(),t0.render(L,g),We++,Y=requestAnimationFrame(Dt)}function H(){return{собрано:!!(L&&j&&l0&&b0&&G),знак:G&&G.visible?+V(_t(),me,de).toFixed(3):0,слово:j?+j.material.uniforms.uWordAmt.value.toFixed(3):0,травинок:(j?j.geometry.instanceCount:0)+(f0?f0.geometry.instanceCount:0),кадров:We,перо:l0?+l0.material.uniforms.uDraw.value.toFixed(3):null,at:g?g.position.z:null,крен:g?+g.rotation.z.toFixed(4):null,k:g?+ye().k.toFixed(3):null}}H.экран=(t,e)=>{if(!g)return null;const n=new A(t,0,e).project(g);return[(n.x*.5+.5)*innerWidth,(.5-n.y*.5)*innerHeight]};H.мяч=()=>q;H.след=()=>({точки:Q0.filter(t=>t.w>0).length,рамка:Ft.toArray(),сейчас:performance.now()/1e3,последняя:Q0[31].toArray()});H.кам=()=>g&&{p:g.position.toArray(),fov:g.fov};H.мячПикс=()=>{if(!q||!g)return null;g.updateMatrixWorld();const t=q.меш.position,e=u0/2,n=new A(t.x,t.y-e,t.z).project(g),s=new A(t.x,t.y+e,t.z).project(g),o=window.innerHeight;return{px:Math.abs(s.y-n.y)*.5*o,x:(n.x*.5+.5)*window.innerWidth,y:(.5-n.y*.5)*o,видно:Math.abs(n.x)<1&&Math.abs(n.y)<1&&n.z<1}};H.трава=t=>{j&&(j.visible=!!t),f0&&(f0.visible=!!t)};H.мячЭкран=()=>{if(!q||!g)return null;g.updateMatrixWorld();const t=q.меш.position,e=u0/2,n=t.clone().applyMatrix4(g.matrixWorldInverse),s=new A(t.x,0,t.z).project(g),o=new A(t.x,0,t.z).applyMatrix4(g.matrixWorldInverse),r=g.projectionMatrix.elements,a=window.innerHeight,i=window.innerWidth,c=s.x+r[0]*(n.x-o.x)/-n.z,m=s.y+r[5]*(n.y-o.y)/-n.z;return{cx:(c*.5+.5)*i,cy:(.5-m*.5)*a,r:r[5]*e/-n.z*.5*a}};H.мячКруг=()=>{if(!q||!g)return null;g.updateMatrixWorld();const t=q.меш.position,e=u0/2,n=new A;let s=1e9,o=-1e9,r=1e9,a=-1e9;for(let i=0;i<=48;i++)for(let c=0;c<96;c++){const m=i/48*Math.PI,v=c/96*Math.PI*2;n.set(t.x+e*Math.sin(m)*Math.cos(v),t.y+e*Math.cos(m),t.z+e*Math.sin(m)*Math.sin(v)).project(g);const l=(n.x*.5+.5)*window.innerWidth,d=(.5-n.y*.5)*window.innerHeight;s=Math.min(s,l),o=Math.max(o,l),r=Math.min(r,d),a=Math.max(a,d)}return{ш:+(o-s).toFixed(1),в:+(a-r).toFixed(1),x:Math.round((s+o)/2),y:Math.round((r+a)/2)}};H.время=t=>{ot=!0,O0=t};H.стоп=t=>{ot=!!t,ot||(O0=null)};H.глаз=(t,e)=>{j0=t?[t,e]:null};H.кон=()=>_t();H.лог=t=>{const e=et;return et=t?[]:null,e};H.часы=t=>(Xt=t??null,performance.now()/1e3);H.место=()=>ie();H.знак=()=>G;H.ворота=t=>{P0=!t,b0&&(b0.visible=!!t)};document.addEventListener("astro:before-preparation",t=>{!z||document.body.dataset.route!==G0||!t.to||new URL(t.to).pathname===location.pathname||(z.style.transition="opacity 600ms ease-in",z.style.opacity="0")});const zn=15e3;let w0=0;function Cn(){if(w0=0,!L||document.body.dataset.route===G0)return;Y&&(cancelAnimationFrame(Y),Y=0);const t=new Set,e=new Set,n=new Set;L.traverse(o=>{o.geometry&&!o.isSprite&&t.add(o.geometry);for(const r of[].concat(o.material||[]))e.add(r)});const s=o=>{o&&o.isTexture&&n.add(o)};for(const o of e){for(const r of Object.keys(o))s(o[r]);if(o.uniforms)for(const r of Object.keys(o.uniforms)){const a=o.uniforms[r]&&o.uniforms[r].value;Array.isArray(a)?a.forEach(s):s(a)}}for(const o of t)o.dispose();for(const o of e)o.dispose();for(const o of n)o.dispose();L.clear(),t0.dispose(),t0.forceContextLoss(),Ht?.unobserve(z),z.remove(),z=t0=L=null,rt=!1,j=f0=l0=b0=G=null,A0=D0=W0=null,k0=tt=null,Bt.length=0,Lo()}function Ln(){if(document.body.dataset.route!==G0){Y&&(cancelAnimationFrame(Y),Y=0),z&&(z.style.opacity="0"),ne(!1),L&&!w0&&(w0=setTimeout(Cn,zn));return}w0&&(clearTimeout(w0),w0=0),!ke&&(!L&&!Mn()||(ne(!0),Y||(Te=performance.now()),z&&(z.style.transition="",z.style.opacity="1"),window.__cfigPitch=H,!Y&&!rt&&(Y=requestAnimationFrame(Dt))))}export{Ln as init};
