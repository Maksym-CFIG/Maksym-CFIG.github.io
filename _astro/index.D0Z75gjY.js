import{W as qo}from"./three.module.2SwsOW1X.js";import{dh as jo,h as $o,N as Ha,ac as $a,ab as ua,l as Ea,ae as ut,a1 as Wt,a8 as Oe,bx as Ot,B as Ie,c as G,G as gt,V as ve,M as ue,aC as sa,a as te,K as no,D as Tt,e as Ke,b as V,a9 as Na,W as Ia,H as bo,C as Ve,P as Va,S as Xa,cN as Vo,cK as Ra,j as ia,ci as ro,co as Xo,cz as Mo,f as ca,L as Wa,cH as Yo,aB as uo,ah as $t}from"./three.core.Gwy6y2Io.js";import{g as Fo}from"./scroll.Cxvh0_mC.js";import{a as Zo,L as Qo,b as Jo}from"./LineSegments2.CoSh0k3i.js";import{c as e0}from"./Base.astro_astro_type_script_index_0_lang.D3EU_fwG.js";import"./router.UeToN5xW.js";import"./preload-helper.BlTxHScW.js";const q=6371,Y={lat:50.039378,lon:15.77521},Ne=3.75,Ct=Math.PI/180;function Ge(e,t,a=q,l=[0,0,0]){const o=e*Ct,r=t*Ct,u=Math.cos(o);return l[0]=a*u*Math.sin(r),l[1]=a*Math.sin(o),l[2]=a*u*Math.cos(r),l}function So(e,t){const a=e*Ct,l=t*Ct,o=Math.sin(a),r=Math.cos(a),u=Math.sin(l),v=Math.cos(l);return{e:[v,0,-u],u:[r*u,o,r*v],n:[-o*u,r,-o*v]}}function Ya(e,t){const a=e.length,l=new Float64Array(a-1),o=new Float64Array(a);for(let r=0;r<a-1;r++)l[r]=(t[r+1]-t[r])/(e[r+1]-e[r]);o[0]=l[0],o[a-1]=l[a-2];for(let r=1;r<a-1;r++)o[r]=l[r-1]*l[r]<=0?0:(l[r-1]+l[r])/2;for(let r=0;r<a-1;r++){if(l[r]===0){o[r]=0,o[r+1]=0;continue}const u=o[r]/l[r],v=o[r+1]/l[r],m=u*u+v*v;if(m>9){const s=3/Math.sqrt(m);o[r]=s*u*l[r],o[r+1]=s*v*l[r]}}return r=>{if(r<=e[0])return t[0];if(r>=e[a-1])return t[a-1];let u=0;for(;r>e[u+1];)u++;const v=e[u+1]-e[u],m=(r-e[u])/v,s=m*m,i=s*m;return(2*i-3*s+1)*t[u]+(i-2*s+m)*v*o[u]+(-2*i+3*s)*t[u+1]+(i-s)*v*o[u+1]}}function Vt(e){const t=e.map(o=>o.t),a=Object.keys(e[0]).filter(o=>o!=="t"),l={};for(const o of a){const r=e.map(u=>o==="d"?Math.log(u[o]):u[o]);l[o]=Ya(t,r)}return(o,r)=>{for(const u of a)r[u]=u==="d"?Math.exp(l[u](o)):l[u](o);return r}}function Ro(e,t,a,l,o,r,u,v){const m=So(e,t);Ge(e,t,q,v);const s=l*Ct,i=o*Ct,c=m.n[0]*Math.cos(i)+m.e[0]*Math.sin(i),n=m.n[1]*Math.cos(i)+m.e[1]*Math.sin(i),p=m.n[2]*Math.cos(i)+m.e[2]*Math.sin(i),h=Math.cos(s)*a,S=Math.sin(s)*a;r[0]=v[0]+m.u[0]*h-c*S,r[1]=v[1]+m.u[1]*h-n*S,r[2]=v[2]+m.u[2]*h-p*S,u[0]=c,u[1]=n,u[2]=p}const Za="/assets/earth/",Xt={lon0:-12,lon1:44,lat0:34,lat1:62};async function Gt(e){const t=await fetch(e);if(!t.ok)throw new Error(`${e}: ${t.status}`);return t}const t0=new jo;function a0(e,{srgb:t=!1,renderer:a=null}={}){return new Promise((l,o)=>{t0.load(Za+e,r=>{r.colorSpace=t?$o:Ha,r.wrapS=$a,r.wrapT=ua,r.minFilter=Ea,r.magFilter=ut,a&&(r.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy())),l(r)},void 0,o)})}const Yt=new Map;function Aa(e){if(!Yt.has(e)){const t=Gt(Za+e).then(a=>a.arrayBuffer()).then(a=>{const l=new DataView(a);let o=0;const r=l.getUint32(o,!0);o+=4;const u=[];for(let v=0;v<r;v++){const m=l.getUint32(o,!0),s=l.getUint32(o+4,!0);o+=8;const i=new Uint32Array(m);for(let n=0;n<m;n++)i[n]=l.getUint32(o,!0),o+=4;const c=new Int16Array(s*2);for(let n=0;n<s*2;n++)c[n]=l.getInt16(o,!0),o+=2;u.push({L:m,P:s,starts:i,raw:c})}return u});t.catch(()=>Yt.delete(e)),Yt.set(e,t)}return Yt.get(e)}async function o0(e=.6){const t=await Aa("lines.bin"),a=[],l=[0,0,0];for(const{L:o,P:r,starts:u,raw:v}of t){const m=new Float32Array(r),s=new Float32Array(r);for(let n=0;n<r;n++)m[n]=v[n*2]/180,s[n]=v[n*2+1]/180;const i=new Float32Array((r-o)*6);let c=0;for(let n=0;n<o;n++){const p=u[n],h=n+1<o?u[n+1]:r;for(let S=p;S<h-1;S++)Ge(s[S],m[S],q+e,l),i[c++]=l[0],i[c++]=l[1],i[c++]=l[2],Ge(s[S+1],m[S+1],q+e,l),i[c++]=l[0],i[c++]=l[1],i[c++]=l[2]}a.push(i.subarray(0,c))}return a}async function l0(e,t){const a=await createImageBitmap(t,{resizeWidth:e,resizeHeight:e,resizeQuality:"medium"}),l=document.createElement("canvas");l.width=e,l.height=e;const o=l.getContext("2d",{willReadFrequently:!0});o.drawImage(a,0,0);const r=o.getImageData(0,0,e,e).data,u=new Float32Array(e*e);for(let v=0;v<u.length;v++)u[v]=r[v*4+1]/255;return a.close?.(),u}async function n0(){const e=await(await Gt("/assets/map/pardubice-houses.bin")).arrayBuffer(),t=new DataView(e),a=t.getUint32(0,!0);let l=0,o=4;for(let n=0;n<a;n++){const p=t.getUint16(o,!0);l+=p,o+=6+p*4}const r=new Uint32Array(a),u=new Uint16Array(a),v=new Float32Array(a),m=new Float32Array(a),s=new Float32Array(l),i=new Float32Array(l);o=4;let c=0;for(let n=0;n<a;n++){const p=t.getUint16(o,!0);u[n]=p,v[n]=t.getUint8(o+3)/2,m[n]=t.getUint16(o+4,!0),o+=6,r[n]=c;for(let h=0;h<p;h++)s[c]=t.getUint16(o,!0)/65535,i[c]=t.getUint16(o+2,!0)/65535,o+=4,c++}return{n:a,start:r,cnt:u,h:v,area:m,u:s,v:i}}function At(){const e=new Ie;return e.setAttribute("position",new G(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}const Ce={blending:Ot,blendSrc:Oe,blendDst:Wt,blendSrcAlpha:Oe,blendDstAlpha:Wt},Qa=`
float sk_h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float sk_n(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(sk_h(i), sk_h(i + vec2(1.0, 0.0)), f.x), mix(sk_h(i + vec2(0.0, 1.0)), sk_h(i + vec2(1.0, 1.0)), f.x), f.y);
}

#ifdef SK_SPHERE
// На сфере: штрих на диске 45–100 px, у края взгляд скользит сильнее всего.
vec4 skLim = vec4(110.0, 160.0, 2.6, 5.0);
#else
vec4 skLim = vec4(16.0, 28.0, 2.2, 3.6);
#endif
// Один слой штрихов: q — координаты в плоскости штриховки (км), ряды вдоль x,
// s — шаг рядов (км). Покрытие пикселя 0..1.
float sk_layer(vec2 q, float s, float seed, float reveal) {
  float v = q.y / s;
  float row = floor(v);
  float hr = sk_h(vec2(row, seed));
  float L = s * (7.0 + 9.0 * hr);
  float u = q.x / L + hr * 5.3;
  float sid = floor(u);
  float t = fract(u);
  float hs = sk_h(vec2(row * 1.37 + sid * 7.1, seed + 3.1));
  float ho = sk_h(vec2(sid * 3.7 - row, seed + 9.4));
  // Штрих немного кривой и наклонный: середина ряда гуляет вдоль штриха.
  float c = 0.5 + 0.16 * (hs - 0.5) + 0.12 * sin(t * 3.1416 + hr * 6.0) * (ho - 0.5) + (t - 0.5) * 0.14 * (hr - 0.5);
  float dv = abs(fract(v) - c);
  // Расстояние в пикселях — по длине градиента (fwidth завышает его по
  // диагонали, и штрих расплывался в мазок).
  float px = length(vec2(dFdx(v), dFdy(v)));
  float dpx = dv / max(px, 1e-6);
  // ~1 px с нажимом; концы сходят на нет (штрих начинается и кончается).
  float press = 0.55 + 0.45 * hs;
  float w = 0.7 + 0.5 * press;
  float cov = 1.0 - smoothstep(w * 0.5 - 0.35, w * 0.5 + 0.45, dpx);
  cov *= smoothstep(0.0, 0.07, t) * (1.0 - smoothstep(0.86, 1.0, t));
  cov *= step(0.14, hs);
  // ДЛИНА ШТРИХА В ПИКСЕЛЯХ. Под скользящим взглядом ряды по экрану
  // сжаты, а вдоль ряда штрих растянут — длинные штрихи читались «лучами».
  // Штрих длиннее ~22 px гаснет, и вся штриховка гаснет там, где плоскость
  // видна слишком наискось (отношение масштабов вдоль и поперёк рядов —
  // это только выбор густоты, сам рисунок привязан к земле).
  float pxU = length(vec2(dFdx(q.x), dFdy(q.x)));
  float Lpx = L / max(pxU, 1e-7);
  float kmV = px * s;
  float an = max(kmV / max(pxU, 1e-9), pxU / max(kmV, 1e-9));
  // Пределы длины штриха (px) и косого взгляда — skLim: город строже
  // (иначе «лучи»), ландшафт и сфера свободнее (там штриховка — главное).
  cov *= 1.0 - smoothstep(skLim.x, skLim.y, Lpx);
  cov *= 1.0 - smoothstep(skLim.z, skLim.w, an);
  cov *= press;
  cov *= step(ho, reveal);
  return cov;
}

// Штриховка с выбором шага: целевой шаг ~ step6 px на экране. Возвращает
// покрытие с плавным переходом между двумя ступенями.
float sk_hatch(vec2 p, float ang, float seed, float reveal, float pxPerKm) {
  float ca = cos(ang), sa = sin(ang);
  vec2 q = vec2(ca * p.x + sa * p.y, -sa * p.x + ca * p.y);
  float kmPx = length(vec2(dFdx(q.y), dFdy(q.y)));
  float l = log2(max(6.5 * kmPx, 1e-6) / 0.002);
  float f = floor(l);
  float s0 = 0.002 * exp2(f);
  float k = l - f;
  float a0 = sk_layer(q, s0, seed + f, reveal);
  float a1 = sk_layer(q, s0 * 2.0, seed + f + 1.0, reveal);
  // Переход ступеней — во всю октаву: узкий переход мерцал на подъёме.
  return mix(a0, a1, smoothstep(0.0, 1.0, k));
}

// Направление штриховки по участкам: участок ~ cell км, граница неровная.
float sk_angle(vec2 p, float cell, float seed) {
  vec2 w = p / cell + 0.45 * vec2(sk_n(p / cell * 1.7 + seed), sk_n(p / cell * 1.7 - seed + 4.0));
  float h = sk_h(floor(w) + seed);
  return 0.45 + floor(h * 4.0) * 0.62;
}

// Тон штриховкой: tone 0..1 → один слой, потом перекрёстный, потом третий.
float sk_tone(vec2 p, float tone, float cell, float seed, float reveal) {
  if (tone < 0.02) return 0.0;
  float ang = sk_angle(p, cell, seed);
  float a = sk_hatch(p, ang, seed, reveal, 0.0) * smoothstep(0.02, 0.3, tone);
  if (tone > 0.35) a = max(a, sk_hatch(p, ang + 1.25, seed + 17.0, reveal, 0.0) * smoothstep(0.35, 0.65, tone));
  if (tone > 0.7) a = max(a, sk_hatch(p, ang + 0.55, seed + 31.0, reveal, 0.0) * smoothstep(0.7, 0.95, tone));
  return a;
}

// Зерно графита ~1.6 px на экране, привязанное к миру (ступени степени
// двойки с переходом по доле октавы — без мерцания).
float sk_grain(vec2 p) {
  float k = length(fwidth(p));
  float l = log2(max(1.6 * k, 1e-7) / 0.0005);
  float f = floor(l);
  float s0 = 0.0005 * exp2(f);
  return mix(sk_n(p / s0 + f * 7.0), sk_n(p / (2.0 * s0) + f * 7.0 + 3.0), smoothstep(0.0, 1.0, l - f));
}

// Акварель: пятно по маске m (0..1) с неровным краем, пигмент копится у
// кромки, зерно бумаги внутри. Возвращает альфу краски.
float sk_wash(float m, vec2 p, float scale) {
  float n = sk_n(p * scale) * 0.6 + sk_n(p * scale * 2.7 + 3.0) * 0.4;
  float e = m + (n - 0.5) * 0.35;
  float body = smoothstep(0.42, 0.55, e);
  float rim = smoothstep(0.4, 0.47, e) * (1.0 - smoothstep(0.5, 0.62, e));
  float gran = 0.78 + 0.44 * sk_n(p * scale * 9.0);
  return clamp((body * 0.55 + rim * 0.45) * gran, 0.0, 1.0);
}
`,at=3.75,ye={h:13,n:1024,lo:195,hi:365,far:{h:48,n:1024,lo:180,hi:1150},hor:{h:60,n:512,lo:180,hi:1610,cz:-50}},it=24,r0={INK1:"#111e2d",INK2:"#29455c",INK3:"#4d677d",BLUE:"#2A6DAA",PALE:"#5FA8E0",GOLD:"#8a5f10",PAPER:"#d3d9de"},u0=e=>{const t=parseInt(e.slice(1),16),a=l=>(l/255).toFixed(4);return`vec3(${a(t>>16)}, ${a(t>>8&255)}, ${a(t&255)})`},Dt=Object.entries(r0).map(([e,t])=>`#define C_${e} ${u0(t)}`).join(`
`),ba=`
uniform float uHoldA;
uniform float uBake;
// С приходом тёмного фона dots (DARK) сизая подложка города уходит (uGround
// 1 → 0) — город ложится прямо на фон, без светлого пятна (заказчик:
// «какого хера тут появилось светлое пятно»); тушь тем же ходом плавно
// уходит в приглушённый сине-серый (MUTE_C, uTint 0 → 1) — тихая подложка
// под неоновыми точками.
uniform float uGround;
uniform float uTint;
#define MUTE_C vec3(0.184, 0.275, 0.424)
#define DIM_C vec3(0.0275, 0.1059, 0.2039)
#define HOLD_BG vec3(0.745, 0.765, 0.792)
vec3 holdBake(vec3 c) { return mix(mix(c, DIM_C, uBake), MUTE_C, uTint); }
`,ko=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm2(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Ja=`
uniform vec2 uRes;
vec4 ribbon(vec4 ca, vec4 cb, float atB, float side, float hw) {
  vec2 sa = ca.xy / ca.w * uRes * 0.5;
  vec2 sb = cb.xy / cb.w * uRes * 0.5;
  vec2 d = sb - sa;
  float L = length(d);
  d = L > 0.0001 ? d / L : vec2(1.0, 0.0);
  vec2 nrm = vec2(-d.y, d.x);
  vec4 c = atB > 0.5 ? cb : ca;
  c.xy += nrm * side * (hw + 1.0) * 2.0 / uRes * c.w;
  return c;
}
`,s0=e=>`
${e?"#define INK_FG":""}
attribute vec4 aT;
attribute vec4 aSU;
attribute vec2 aUU;
attribute vec4 aInfo;
uniform float uTime;
uniform float uAsm;
uniform float uWave;
uniform float uFocal;
uniform float uFar;
uniform float uGap;
uniform float uDpr;
uniform float uBg;
uniform float uFlat;
uniform float uFT;
uniform float uPass;
varying float vPr;
varying float vDraw;
varying float vSide;
varying float vHW;
varying float vA;
varying float vX;
varying float vType;
varying float vMix;
varying float vU;
varying float vSeed;
${Ja}
float wave(vec2 p, float t) {
  return 0.34 * sin(p.x * 0.38 + t * 0.55) * cos(p.y * 0.29 - t * 0.4)
       + 0.16 * sin((p.x + p.y) * 0.71 - t * 0.9)
       + 0.07 * sin(length(p - vec2(2.0, -3.0)) * 1.3 - t * 1.4);
}
vec3 srcAt(float u) {
  float t = uTime;
  float x = mix(aSU.x, aSU.y, u);
  float z = aSU.z;
  float ph = aInfo.w * 6.2832;
  // Перед сборкой поле замедляется (своё время uFT идёт медленнее)
  // и ложится на землю (uFlat гасит волну и изгиб).
  t = uFT;
  float fl = 1.0 - uFlat;
  z += (0.16 * sin(x * 0.29 + z * 0.4 + t * 0.2) + 0.05 * sin(x * 0.9 + ph)) * fl;
  float y = wave(vec2(x, z), t) * uWave * 0.45 * fl;
  return vec3(x, y, z);
}
varying float vCF;
void main() {
  bool field = aInfo.z > 8.5;
  float r = aSU.w;
  float a = clamp((uAsm - r * 0.35) / 0.65, 0.0, 1.0);
  a = a * a * (3.0 - 2.0 * a);
  if (field) a = 0.0;
#ifdef INK_FG
  // Карандаш: сразу на месте улицы и дорисовывается по длине куска.
  // Рука не идеальна — штрих чуть заходит за концы куска (на стыках
  // кусков линии перехлёстываются, как в эскизе), дрожит поперёк себя
  // (дрожь привязана к земле, не к камере) и местами проведён дважды.
  vec3 pA = vec3(aT.x, 0.004, aT.y);
  vec3 pB = vec3(aT.z, 0.004, aT.w);
  vec2 sd = pB.xz - pA.xz;
  vec2 dir = length(sd) > 1e-6 ? normalize(sd) : vec2(1.0, 0.0);
  if (aUU.x < 0.001) pA.xz -= dir * 0.016;
  if (aUU.y > 0.999) pB.xz += dir * 0.016;
  vec2 nr = vec2(-dir.y, dir.x);
  float ph = uPass * 3.7 + aInfo.w * 10.0;
  float wob = 0.005 + 0.004 * uPass;
  pA.xz += nr * wob * sin(dot(pA.xz, vec2(29.0, 21.0)) + ph);
  pB.xz += nr * wob * sin(dot(pB.xz, vec2(29.0, 21.0)) + ph);
#else
  vec3 tA = vec3(aT.x, 0.004, aT.y), tB = vec3(aT.z, 0.004, aT.w);
  vec3 sA = srcAt(aUU.x), sB = srcAt(aUU.y);
  vec3 pA = mix(sA, tA, a), pB = mix(sB, tB, a);
  float lift = sin(a * 3.14159265) * 0.03;
  pA.y += lift * distance(sA.xz, tA.xz);
  pB.y += lift * distance(sB.xz, tB.xz);
#endif
  vec4 va = modelViewMatrix * vec4(pA, 1.0);
  vec4 vb = modelViewMatrix * vec4(pB, 1.0);
  // Линия поля гаснет там, где куски уже снялись (та же очередь по кольцу,
  // в координатах поля); кусок проступает со своим стартом. Нечётные
  // линии поля редеют, пока шёлк ложится: иначе под скользящим взглядом
  // легшие линии сжимались в частую рябь.
  vec3 pf = aInfo.x > 0.5 ? pB : pA;
  float rf = min(1.0, length(pf.xz) / 12.0);
  float af = clamp((uAsm - rf * 0.35) / 0.65, 0.0, 1.0);
  float li = floor((aSU.z + 12.0) / uGap);
  float thin = 1.0 - 0.8 * uFlat * mod(li, 2.0);
  // Линия поля держится, пока кусок не прошёл больше половины пути:
  // глаз видит, как из неё выходят изгибы улиц, а не пустое место.
  vCF = field ? (1.0 - smoothstep(0.35, 0.9, af)) * thin : smoothstep(0.0, 0.3, a);
#ifdef INK_FG
  if (field) vCF = 0.0;
#endif
  vec3 pw = aInfo.x > 0.5 ? pB : pA;
  vPr = 0.5 + 0.5 * sin(pw.x * 7.3 + pw.z * 5.1 + aInfo.w * 6.0) * cos(pw.x * 2.9 - pw.z * 3.7);
#ifdef INK_FG
  // Второй проход — только у части кусков.
  if (uPass > 0.5 && fract(sin(dot(aSU.xz, vec2(12.9898, 78.233))) * 43758.5453) < 0.55) vCF = 0.0;
#endif
  vSide = aInfo.y;
  vType = aInfo.z;
  vMix = a;
  vSeed = aInfo.w;
  vU = aInfo.x > 0.5 ? aUU.y : aUU.x;
  vX = mix(aSU.x, aSU.y, vU);
  if (-va.z < 0.02 || -vb.z < 0.02) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vA = 0.0; vHW = 0.0; return; }
  vec4 mv = aInfo.x > 0.5 ? vb : va;
  vec3 p = aInfo.x > 0.5 ? pB : pA;
  float dist = -mv.z;
  // Затухания: вдаль, к краю поля и там, где фоновые линии сходятся на
  // экране теснее нескольких пикселей (иначе муар у горизонта).
  vA = 1.0 - smoothstep(uFar * 0.55, uFar, dist);
  vA *= 1.0 - smoothstep(0.55, 0.95, max(abs(p.x), abs(p.z)) / 12.0);
  vec3 upV = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
  float el = abs(dot(upV, normalize(mv.xyz)));
  float gapPx = uGap * uFocal / dist * max(el, 0.05) / uDpr;
  vA *= mix(smoothstep(4.0, 9.0, gapPx), 1.0, a);
#ifdef INK_FG
  // КАРАНДАШ ВЕДЁТ ЛИНИЮ («ш-ш-ш»): у каждого куска улицы свой старт
  // (очередь от середины плюс разброс) и своя длительность — 0.1–0.3
  // отрезка сборки; ход ускоряется в начале и тормозит в конце, с лёгкой
  // неровностью скорости. Вперёд рисует, назад стирает (от прокрутки).
  float hc = fract(sin(dot(aSU.xy + aSU.z, vec2(12.9898, 78.233))) * 43758.5453);
  float hc2 = fract(hc * 7.31 + 0.17);
  float dur = 0.1 + 0.2 * hc2;
  float st0 = min(aSU.w * 0.62 + hc * 0.22, 1.0 - dur);
  float pr = clamp((uAsm - st0) / dur, 0.0, 1.0);
  vDraw = pr * pr * (3.0 - 2.0 * pr) + 0.05 * sin(pr * 9.42 + hc * 6.2832) * pr * (1.0 - pr);
  // Кончик грифеля — толще.
  float tipV = (vDraw > 0.001 && vDraw < 0.999) ? exp(-pow((vDraw - vU) / 0.09, 2.0)) * step(vU, vDraw + 0.05) : 0.0;
  vHW = (vType > 1.5 && vType < 2.5 ? 0.8 : vType < 0.5 ? 0.85 : vType > 4.5 ? 0.42 : 0.6) * uDpr * (0.7 + 0.6 * vPr) * (1.0 - 0.35 * uPass) * (1.0 + 1.1 * tipV);
#else
  // Акварель: Лабе на сборке растекается широкой заливкой.
  // Ширина Лабе — от расстояния (~110 м русла), а не постоянные 11 px:
  // на подъёме город сжимался, а река оставалась толстой лентой, и стыки
  // её кусков читались поперечными полосами (раунд 34).
  float rivW = clamp(0.055 * uFocal / dist / uDpr, 0.6, 11.0);
  vHW = mix(0.5, vType > 1.5 && vType < 2.5 ? rivW : 0.5, a) * uDpr;
#endif
  vec4 ca = projectionMatrix * va;
  vec4 cb = projectionMatrix * vb;
  gl_Position = ribbon(ca, cb, aInfo.x, aInfo.y, vHW);
}
`,i0=e=>`
${e?"#define INK_FG":""}
${Dt}
uniform float uTime;
uniform float uAlpha;
uniform float uBg;
uniform float uAsm;
uniform float uPass;
${ba}
uniform float uPaint;
varying float vPr;
varying float vDraw;
varying float vSide;
varying float vHW;
varying float vA;
varying float vX;
varying float vType;
varying float vMix;
varying float vU;
varying float vSeed;
varying float vCF;
${ko}
void main() {
  float e = abs(vSide);
  float px = e * (vHW + 1.0);
  // Покрытие с пиксельным сглаживанием краёв; тонкая линия — тоньше альфой.
  float cov = clamp(vHW + 0.5 - px, 0.0, 1.0);
  bool river = vType > 1.5 && vType < 2.5;
  vec3 col;
  float a;
#ifdef INK_FG
  // Чертёж дорисовывается вдоль куска: виден до доли vMix.
  float drawn = 1.0 - smoothstep(vDraw - 0.015, vDraw, vU);
  col = mix(C_INK1, C_INK2, 0.35 + 0.3 * vPr);
  a = cov * (0.45 + 0.45 * vPr) * drawn * (uPass > 0.5 ? 0.5 : 1.0);
  // Кончик грифеля: темнее, с зерном графита вдоль штриха.
  float tip = (vDraw > 0.001 && vDraw < 0.999) ? exp(-pow((vDraw - vU) / 0.035, 2.0)) * drawn : 0.0;
  float grn = 0.55 + 0.45 * n2(vec2(vU * 60.0 + vSeed * 13.0, e * 4.0));
  a = max(a, cov * tip * grn * 0.95);
  col = mix(col, C_INK1, tip);
  // Голубая искра у самого кончика грифеля (чуть впереди штриха) —
  // «связь» неона и карандаша.
  float spark = (vDraw > 0.001 && vDraw < 0.999) ? exp(-pow((vU - vDraw - 0.01) / 0.02, 2.0)) : 0.0;
  col = mix(col, vec3(0.36, 0.78, 1.0), spark * 0.85);
  a = max(a, (exp(-e * e * 1.5)) * spark * 0.8);
  if (river) a *= 0.6;
#else
  // Фоновые горизонтали — бледной синей тушью, рисуются по прокрутке
  // слева направо (uBg), со сборкой уходят — их сменяет чертёж улиц.
  float drawn = 1.0 - smoothstep(uBg - 0.03, uBg, (vX + 12.0) / 24.0 * 0.85 + vSeed * 0.15);
  // Горизонтальных линий поля и летящих кусков нет (заказчик: «убери эти
  // горизонтальные вьющиеся линии»; прежнее — тег zeme-ink-silk): улицы
  // рисует карандаш прямо на бумаге (INK_FG, от середины наружу), здесь
  // остаётся только Лабе акварелью.
  col = C_INK2;
  a = 0.0;
  // Лабе — акварелью: неровный край, пигмент у кромки, зерно бумаги.
  if (river) {
    float mm = (1.0 - e) * 1.15 + (n2(vec2(vX * 2.3, vSeed * 9.0)) - 0.5) * 0.45;
    float body = smoothstep(0.32, 0.5, mm);
    float rimW = smoothstep(0.28, 0.36, mm) * (1.0 - smoothstep(0.4, 0.55, mm));
    float gran = 0.8 + 0.4 * n2(vec2(vX * 21.0, e * 5.0 + vSeed));
    // Лабе — заметнее: в собранном городе она главный цветной акцент.
    float paint = (body * 0.62 + rimW * 0.38) * gran * uPaint * vMix;
    col = mix(col, mix(C_PALE, C_BLUE, 0.7), step(a, paint));
    a = max(a, paint);
  }
#endif
  // В полёте куски улиц — отдельные пряди: концы мягкие, иначе на сборке
  // читались прямоугольные полоски. На поле (vMix 0) и на месте (vMix 1)
  // кусок продолжает соседа — концы целые.
  float ends = smoothstep(0.0, 0.18, vU) * (1.0 - smoothstep(0.82, 1.0, vU));
  a *= mix(1.0, ends, sin(vMix * 3.14159265));
  col = holdBake(col);
  a *= vA * max(uAlpha, uHoldA) * vCF * (1.0 - 0.35 * uTint);
  if (a < 0.002) discard;
  gl_FragColor = vec4(col * a, a);
}
`,_o=()=>`
#define LAND_H ${ye.h.toFixed(1)}
#define LAND_N ${ye.n.toFixed(1)}
#define DEM_LO ${ye.lo.toFixed(1)}
#define DEM_HI ${ye.hi.toFixed(1)}
// Уровень Лабе у Пардубиц. Геометрия — спокойное усиление (×3): горы
// встают силуэтом, горизонт не «колется»; форму склонов даёт тон
// (свет по нормали с усилением ×12), а не высота.
#define DEM_BASE 215.0
#define DEM_EX 3.0
#define SHADE_EX 12.0
// Кунетицкая гора (50.0797, 15.8114) в км местного базиса; добавка к ×DEM_EX.
#define KH_XZ vec2(2.59, -4.49)
#define KH_EX 4.5
uniform sampler2D uDem;
float demTex(vec2 c) { vec2 v = texture2D(uDem, (c + 0.5) / LAND_N).rg; return (v.r * 255.0 * 256.0 + v.g * 255.0) / 65535.0; }
float demAt(vec2 uv) {
  vec2 x = clamp(uv, 0.0, 1.0) * LAND_N - 0.5;
  vec2 i = floor(x), f = x - i;
  float h = mix(mix(demTex(i), demTex(i + vec2(1.0, 0.0)), f.x), mix(demTex(i + vec2(0.0, 1.0)), demTex(i + vec2(1.0, 1.0)), f.x), f.y);
  return DEM_LO + h * (DEM_HI - DEM_LO);
}
// Дальний рельеф ±FAR_H км — до Железных гор и горизонта.
#define FAR_H ${ye.far.h.toFixed(1)}
#define FAR_N ${ye.far.n.toFixed(1)}
#define FAR_LO ${ye.far.lo.toFixed(1)}
#define FAR_HI ${ye.far.hi.toFixed(1)}
uniform sampler2D uDemF;
float farTex(vec2 c) { vec2 v = texture2D(uDemF, (c + 0.5) / FAR_N).rg; return (v.r * 255.0 * 256.0 + v.g * 255.0) / 65535.0; }
float farAt(vec2 xz) {
  vec2 x = clamp(xz / (2.0 * FAR_H) + 0.5, 0.0, 1.0) * FAR_N - 0.5;
  vec2 i = floor(x), f = x - i;
  float h = mix(mix(farTex(i), farTex(i + vec2(1.0, 0.0)), f.x), mix(farTex(i + vec2(0.0, 1.0)), farTex(i + vec2(1.0, 1.0)), f.x), f.y);
  return FAR_LO + h * (FAR_HI - FAR_LO);
}
// Высота в точке (км местного базиса): ближний растр внутри окна, дальний
// снаружи, с плавным швом.
float elevAt(vec2 xz) {
  float ef = farAt(xz);
  vec2 luv = xz / (2.0 * LAND_H) + 0.5;
  float w = (1.0 - smoothstep(0.38, 0.46, abs(luv.x - 0.5))) * (1.0 - smoothstep(0.38, 0.46, abs(luv.y - 0.5)));
  return w > 0.001 ? mix(ef, demAt(luv), w) : ef;
}
`,so=`
uniform float uRelief;
uniform float uCity;
uniform float uPre;
varying vec2 vP;
varying float vElev;
varying float vDepth;
${_o()}
void main() {
  vP = position.xz;
  vec3 q = position;
  vElev = 0.0;
  // ОБЪЁМ: земля поднята по настоящему рельефу (×DEM_EX) — от Полабья до
  // Железных гор у горизонта. Под городом рельеф по мере сборки уходит
  // в ноль (радиус 4.5–7 км): дома не висят и не тонут, город не сдвинут.
  float e = elevAt(q.xz);
  vElev = e;
  float edge = 1.0 - smoothstep(0.86, 1.0, max(abs(q.x), abs(q.z)) / FAR_H);
  float under = mix(1.0, smoothstep(4.5, 7.0, length(q.xz)), uCity);
  q.y += max(e - DEM_BASE, -6.0) * DEM_EX / 1000.0 * uRelief * under * edge;
  // Под конём Кунетицкая гора (307 м, ~5 км к северу, прямо на курсе) —
  // доминанта: местное усиление высоты, чтобы стояла узнаваемым холмом.
  float kh = 1.0 - smoothstep(0.9, 2.4, length(q.xz - KH_XZ));
  q.y += max(e - DEM_BASE - 12.0, 0.0) * KH_EX / 1000.0 * kh * uPre;
  vec4 mv = modelViewMatrix * vec4(q, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,To=`
#define HOR_H ${ye.hor.h.toFixed(1)}
#define HOR_N ${ye.hor.n.toFixed(1)}
#define HOR_LO ${ye.hor.lo.toFixed(1)}
#define HOR_HI ${ye.hor.hi.toFixed(1)}
#define HOR_CZ ${ye.hor.cz.toFixed(1)}
#define FAR_EDGE ${ye.far.h.toFixed(1)}
uniform sampler2D uHor;
uniform float uHEx;
uniform float uCurv;
float horTex(vec2 c) { vec2 v = texture2D(uHor, (c + 0.5) / HOR_N).rg; return (v.r * 255.0 * 256.0 + v.g * 255.0) / 65535.0; }
float horAt(vec2 xz) {
  vec2 x = clamp((xz - vec2(0.0, HOR_CZ)) / (2.0 * HOR_H) + 0.5, 0.0, 1.0) * HOR_N - 0.5;
  vec2 i = floor(x), f = x - i;
  float h = mix(mix(horTex(i), horTex(i + vec2(1.0, 0.0)), f.x), mix(horTex(i + vec2(0.0, 1.0)), horTex(i + vec2(1.0, 1.0)), f.x), f.y);
  return HOR_LO + h * (HOR_HI - HOR_LO);
}
// Усиление растёт от края основной земли (там ×3, как у неё) к горам.
float horEx(vec2 xz) { return mix(3.0, uHEx, smoothstep(FAR_EDGE, FAR_EDGE + 14.0, max(abs(xz.x), abs(xz.y)))); }
float horY(vec2 xz) {
  float r = length(xz);
  float drop = max(r - 45.0, 0.0);
  return (horAt(xz) - 215.0) * horEx(xz) / 1000.0 - drop * drop / (2.0 * 6371.0) * uCurv;
}
`,io=`
${To}
varying vec2 vP;
varying float vDepth;
void main() {
  vP = position.xz;
  vec3 q = position;
  q.y = horY(q.xz);
  vec4 mv = modelViewMatrix * vec4(q, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,co=e=>`
${Dt}
${To}
uniform float uPre;
uniform float uAlpha;
uniform float uBg;
varying vec2 vP;
varying float vDepth;
void main() {
  vec2 p = vP;
  // Внутри основной земли — она сама (горизонт начинается за её краем).
  float sq = max(abs(p.x), abs(p.y));
  if (sq < FAR_EDGE - 0.5) discard;
${e?"  gl_FragColor = vec4(0.0); return;":""}
  float e = horAt(p);
  float st = 0.35;
  float ex = (horAt(p + vec2(st, 0.0)) - horAt(p - vec2(st, 0.0))) / (2.0 * st);
  float ez = (horAt(p + vec2(0.0, st)) - horAt(p - vec2(0.0, st))) / (2.0 * st);
  vec3 nrm = normalize(vec3(-ex * 6.0, 1000.0, -ez * 6.0));
  vec3 L = normalize(vec3(-0.6, 0.55, -0.58));
  float dl = dot(nrm, L) - L.y;
  // Планы: дальше — бледнее (дымка бумаги).
  float far = smoothstep(45.0, 115.0, vDepth);
  float mt = smoothstep(300.0, 1100.0, e);
  float T = (0.035 + 0.30 * mt) * (1.0 - 0.55 * far);
  T += smoothstep(0.0, 0.3, -dl) * (0.10 + 0.12 * mt) * (1.0 - 0.6 * far);
  T -= smoothstep(0.0, 0.3, dl) * 0.05 * mt;
  T = clamp(T, 0.0, 0.6);
  // Шов с основной землёй — мягко.
  T *= smoothstep(FAR_EDGE - 0.5, FAR_EDGE + 3.0, sq);
  vec3 col = mix(C_INK3, vec3(0.6, 0.67, 0.74), far * 0.75);
  // Горы проявляются вместе с землёй (не раньше неё).
  float a = T * uPre * uAlpha * smoothstep(0.35, 0.95, uBg);
  if (a < 0.002) discard;
  gl_FragColor = vec4(col * a, a);
}
`,c0=`
uniform sampler2D uNN;
uniform sampler2D uNF;
// Сторона полей неона: 2048 — как было; 1024 — лёгкие neon-*-s.webp
// (телефон под ключом ?hl=2; аудит, п. 2, 2026-11-12).
uniform float uNeonN;
uniform float uNeonT;
uniform float uNeonP;
uniform vec4 uRects[24];
uniform int uN;
// Четыре соседних текселя вручную. Вектор до дороги смешивается линейно —
// у прямого отрезка это точно (дорога тоньше текселя без «бусин»); если
// у четырёх текселей разные ближайшие дороги (развилка, середина между
// дорогами), смешиваем длины — иначе посередине появилась бы ложная линия.
// «Вдоль» — линейно, если все четыре на связанной сети, иначе ближайший.
vec4 nfTex(sampler2D T, float N, float H, float KR, vec2 p) {
  vec2 x = clamp(p / (2.0 * H) + 0.5, 0.0, 1.0) * N - 0.5;
  vec2 i = floor(x), f = x - i;
  vec4 a = texture2D(T, (i + 0.5) / N), b = texture2D(T, (i + vec2(1.5, 0.5)) / N);
  vec4 c = texture2D(T, (i + vec2(0.5, 1.5)) / N), d = texture2D(T, (i + 1.5) / N);
  float tm = 2.0 * H * 1000.0 / N;
  vec2 va = (a.rg * 255.0 - 128.0) / 127.0 * KR, vb = (b.rg * 255.0 - 128.0) / 127.0 * KR;
  vec2 vc = (c.rg * 255.0 - 128.0) / 127.0 * KR, vd = (d.rg * 255.0 - 128.0) / 127.0 * KR;
  // Ближайшие точки дороги от каждого текселя (метры, от текселя a).
  vec2 pb = vb + vec2(tm, 0.0), pc = vc + vec2(0.0, tm), pd = vd + vec2(tm);
  // Одна ли дорога у четырёх текселей: их ближайшие точки должны лежать на
  // одной линии — поперёк неё (вдоль вектора до дороги) они не расходятся.
  vec2 nv = va;
  if (dot(vb, vb) > dot(nv, nv)) nv = vb;
  if (dot(vc, vc) > dot(nv, nv)) nv = vc;
  if (dot(vd, vd) > dot(nv, nv)) nv = vd;
  nv = length(nv) > 1e-3 ? normalize(nv) : vec2(1.0, 0.0);
  vec4 off = abs(vec4(0.0, dot(pb - va, nv), dot(pc - va, nv), dot(pd - va, nv)));
  float spread = max(max(off.y, off.z), off.w);
  vec2 vv = mix(mix(va, vb, f.x), mix(vc, vd, f.x), f.y);
  // Точка пикселя (метры от текселя a) и расстояния до ближайших точек
  // дорог каждого из четырёх текселей.
  vec2 q = f * tm;
  vec4 dq = vec4(length(va - q), length(pb - q), length(pc - q), length(pd - q));
  float dm = min(min(dq.x, dq.y), min(dq.z, dq.w));
  float sd = mix(length(vv), dm, smoothstep(0.35, 0.8, spread / tm));
  // Фаза импульса (B): 0 — дорога не связана с городом; 1…254 — доля
  // периода. Смешивается с развёрткой через 1 (фаза циклична), и только от
  // текселей, чья дорога ближайшая к пикселю (рядом железная дорога и шоссе
  // с разной фазой не перемешиваются в пунктир).
  vec4 ph = vec4(a.b, b.b, c.b, d.b) * 255.0;
  vec4 bw = vec4((1.0 - f.x) * (1.0 - f.y), f.x * (1.0 - f.y), (1.0 - f.x) * f.y, f.x * f.y);
  bw *= step(dq, vec4(dm + 0.35 * tm)) + 1e-4;
  float wsum = dot(bw, vec4(1.0));
  float bad = dot(bw, step(ph, vec4(0.5))) / wsum;
  vec4 u = (ph - 1.0) / 254.0;
  u -= floor(u - u.x + 0.5);
  float dl = bad > 0.5 ? -1.0 : fract(dot(bw, u) / wsum);
  // Направление к дороге — для толщины в пикселях (см. neonGround).
  vec2 dn = length(vv) > 0.5 ? normalize(vv) : nv;
  return vec4(sd, dl, dn);
}
float neonText() {
  float m = 0.0;
  vec2 q = gl_FragCoord.xy;
  for (int i = 0; i < 24; i++) {
    if (i >= uN) break;
    vec4 r = uRects[i];
    vec2 c = (r.xy + r.zw) * 0.5, h = (r.zw - r.xy) * 0.5;
    vec2 d = abs(q - c) - h;
    float dd = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
    m = max(m, 1.0 - smoothstep(0.0, 24.0, dd));
  }
  return 1.0 - 0.5 * m;
}
vec4 neonGround(vec2 p, float depth) {
  if (uNeonT + uNeonP < 0.002) return vec4(0.0);
  vec4 fN = nfTex(uNN, uNeonN, 13.0, 160.0, p);
  vec4 fF = nfTex(uNF, uNeonN, 48.0, 640.0, p);
  float wN = (1.0 - smoothstep(12.0, 12.8, abs(p.x))) * (1.0 - smoothstep(12.0, 12.8, abs(p.y)));
  float sd = mix(fF.x, fN.x, wN);
  float al = wN > 0.5 ? fN.y : fF.y;
  // Метров на пиксель экрана — толщина постоянна в пикселях.
  // Метров на пиксель поперёк дороги — из производных точки земли по
  // экрану (гладкие), а не fwidth(SDF): у SDF излом на оси дороги, и его
  // fwidth шумит по квадам 2×2 — линия рвалась пунктиром.
  vec2 dn = wN > 0.5 ? fN.zw : fF.zw;
  vec2 gx = dFdx(p) * 1000.0, gy = dFdy(p) * 1000.0;
  float fw = max(abs(dot(dn, gx)) + abs(dot(dn, gy)), 0.3);
  float px = sd / fw;
  float core = 1.0 - smoothstep(0.7, 1.6, px);
  float halo = exp(-px * px / 60.0);
  // Импульс: полоса к центру; фаза чуть плывёт по краю (низкочастотный шум),
  // чтобы волны на разных дорогах не шли кольцами.
  float pulse = 0.0, tip = 0.0;
  if (al >= 0.0) {
    // Реже и спокойнее (раунд 36): медленнее и только ~каждая четвёртая
    // волна (у каждой волны свой номер floor(ph) — она гаснет целиком).
    float ph = al + uTime * 0.09 + 0.8 * sk_n(p * 0.06 + 3.0);
    float x = fract(ph);
    float on = step(0.74, fract(sin(floor(ph) * 12.9898 + 4.1) * 43758.5453));
    // Комета (раунд 37): мягкая голова, длинный хвост, растворяется.
    pulse = smoothstep(0.0, 0.03, x) * exp(-x / 0.3) * (1.0 - smoothstep(0.55, 0.95, x)) * on;
    tip = smoothstep(0.0, 0.02, x) * (1.0 - smoothstep(0.02, 0.07, x)) * on;
  }
  // Дымка: вдали бледнее, но не до нуля.
  float hz = smoothstep(6.0, 40.0, depth);
  float trace = core * 0.15 * uNeonT;
  float pa = (core * 0.7 + halo * 0.5) * pulse * uNeonP;
  float a = (trace + pa) * (1.0 - 0.5 * hz) * neonText();
  vec3 c = mix(vec3(0.45, 0.82, 1.0), vec3(0.561, 0.827, 1.0), pulse);
  c = mix(c, vec3(1.0), tip * core * 0.6);
  c = mix(c, vec3(0.62, 0.74, 0.86), hz * 0.35);
  return vec4(c, clamp(a, 0.0, 0.95));
}
`,f0=`
#define FAB_A 0.1
#define FAB_C C_INK2
${Dt}
uniform sampler2D uMap;
uniform float uTime;
uniform float uBg;
uniform float uCity;
uniform float uAlpha;
uniform float uHatch;
${ba}
uniform sampler2D uLA;
uniform sampler2D uLB;
uniform float uRelief;
uniform float uPre;
#define PRE_G 0.4
varying vec2 vP;
varying float vElev;
varying float vDepth;
${_o()}
${ko}
${Qa}
${c0}

void main() {
  vec2 p = vP;
  // Земля ink — до горизонта (дальний рельеф ±FAR_H км).
  float fade = 1.0 - smoothstep(0.8, 0.97, max(abs(p.x), abs(p.y)) / FAR_H);
  vec2 muv = p / ${(at*2).toFixed(1)} + 0.5;
  // Подложка RE загружена с переворотом по вертикали (flipY): север —
  // наверху картинки, v = 1. Здесь z растёт на юг — v переворачиваем.
  muv.y = 1.0 - muv.y;
  float inMap = step(0.0, muv.x) * step(muv.x, 1.0) * step(0.0, muv.y) * step(muv.y, 1.0);
  // Мельче пикселя зерно не рисуем (под скользящим взглядом — муар).
  float fw = length(fwidth(p));
  vec3 col;
  float a;
  // ── ЛАНДШАФТ КАК ЖИВОПИСЬ (заказчик: «как художники рисуют картину —
  // и объём виден, и нет этих горизонтальных линий»): форма — светом и
  // тенью от настоящего рельефа (SRTM), без линий и контуров; воздушная
  // перспектива — вдали бледнее и мягче; горы у горизонта — силуэтами.
  // Всё привязано к земле; глубина — для дымки, как у живописца.
  vec2 luv = p / (2.0 * LAND_H) + 0.5;
  float inL = (1.0 - smoothstep(0.42, 0.5, abs(luv.x - 0.5))) * (1.0 - smoothstep(0.42, 0.5, abs(luv.y - 0.5)));
  float sweep = (p.x + 30.0) / 60.0 + 0.2 * sk_n(p * 0.15);
  float drawnB = 1.0 - smoothstep(uBg * 1.3 - 0.15, uBg * 1.3, sweep);
  float elev = elevAt(p);
  // Свет по нормали рельефа с усилением SHADE_EX (геометрия спокойнее).
  float st = 0.12;
  float ex = (elevAt(p + vec2(st, 0.0)) - elevAt(p - vec2(st, 0.0))) / (2.0 * st);
  float ez = (elevAt(p + vec2(0.0, st)) - elevAt(p - vec2(0.0, st))) / (2.0 * st);
  // Под конём склоны (террасы Лабе, гора) — сильнее светом, не геометрией.
  float khF = (1.0 - smoothstep(0.9, 2.4, length(p - KH_XZ))) * uPre;
  float shK = (1.0 + 0.7 * uPre) * (1.0 + 1.5 * khF);
  vec3 nrm = normalize(vec3(-ex * SHADE_EX * uRelief * shK, 1000.0, -ez * SHADE_EX * uRelief * shK));
  vec3 L = normalize(vec3(-0.6, 0.55, -0.58));
  float dl = dot(nrm, L) - L.y;
  // Воздушная перспектива: глубина в км (дымка — как у живописца).
  // Под конём ближний план без серой дымки (контраст 5bb6955).
  float haze = smoothstep(3.0, 42.0, vDepth);
  haze = mix(haze, haze * haze * (1.6 - 0.6 * haze), uPre);
  float near0 = 1.0 - haze;
  // Зерно бумаги и неровный слой пигмента (привязаны к земле).
  float grain = sk_grain(p);
  float pig = 0.75 + 0.5 * sk_n(p * 0.35 + 3.0);
  // Зерно спокойнее («снежная» крупа на пятнах леса была непонятна).
  // uPre — земля ДО начала рисунка (под конём): тон и зерно как в 5bb6955
  // (зелень — лёгкой лессировкой, тени и объём видны). С началом рисунка
  // uPre = 0 — ровно вид 51455a6 (одобренный город не трогаем).
  float tex = (mix(0.9, 0.7, uPre) + mix(0.2, 0.6, uPre) * smoothstep(0.1, 0.9, grain)) * pig;
  // Тень склонов — мягкий графит; свет — чуть светлее бумаги.
  float shadow = smoothstep(0.0, 0.32, -dl) * ((0.3 + 0.12 * uPre) * near0 + 0.08);
  float light = smoothstep(0.0, 0.25, dl) * 0.16 * near0;
  // Планы: возвышенности (Железные горы, Кунетицкая гора) — силуэтом
  // ровного тона, каждый дальше — бледнее.
  float upl = smoothstep(240.0, 480.0, elev) * (0.16 * (1.0 - 0.55 * haze));
  // Ближний план — немного плотнее (найденные края вблизи, потерянные вдали).
  float base = 0.05 * near0;
  float T = clamp(shadow + upl + base, 0.0, 0.6) * tex;

  // Леса — тёмная «комковатая» масса с теневой стороной; поля — едва
  // заметные светлые и тёмные пятна по участкам. Без линий и штриховки.
  vec4 la = texture2D(uLA, luv);
  vec4 lb = texture2D(uLB, luv);
  // КРАЙ ЛЕСА — ЖИВОЙ, а не угловатый полигон OSM: маска размыта и
  // разбита шумом в масштабе крон (~60 и ~25 м, привязан к земле) —
  // кромка комковатая, у края отдельные куртины; вдали шум тише.
  float fBase = texture2D(uLA, luv, 2.4).g;
  float crownN = sk_n(p * 9.0 + 3.1) * 0.5 + sk_n(p * 22.0 + 9.2) * 0.3 + sk_n(p * 55.0) * 0.2;
  float edgeBand = smoothstep(0.02, 0.35, fBase) * (1.0 - smoothstep(0.65, 0.98, fBase));
  float fOrg = fBase + (crownN - 0.5) * 1.1 * edgeBand + (sk_n(p * 2.0 + 1.3) - 0.5) * 0.15;
  // Отдельные куртины за кромкой: где крона-шум высок, а лес рядом.
  float tufts = smoothstep(0.62, 0.78, crownN) * smoothstep(0.03, 0.2, fBase) * (1.0 - smoothstep(0.3, 0.5, fBase));
  // Кромка мягкая, но с комками: широкий переход по «живой» маске.
  float fo = max(smoothstep(0.32, 0.68, fOrg), tufts * 0.7) * inL;
  float clump = mix(0.85 + 0.3 * sk_n(p * 5.0 + 7.0), 0.6 + 0.8 * sk_n(p * 5.0 + 7.0) * sk_n(p * 1.7), uPre);
  float foSh = smoothstep(0.3, 0.7, la.g - texture2D(uLA, luv + vec2(-0.0025, -0.0025)).g + 0.3);
  // Под конём дальние леса тише: под скользящим взглядом они сжимаются
  // в горизонтальные полосы.
  float foFar = mix(1.0, 1.0 - 0.65 * smoothstep(5.0, 20.0, vDepth), uPre);
  T += fo * (0.07 + 0.04 * clump + 0.05 * foSh) * (0.4 + 0.6 * near0) * pig * foFar;
  float code = lb.r * 255.0;
  float fieldV = (fract(code * 0.6180339) - 0.5) * 0.07;
  // Поля — без жёсткой кромки (размытая маска, неровный край шумом).
  float fm = smoothstep(0.25, 0.75, texture2D(uLB, luv, 2.5).g + (sk_n(p * 3.0 + 4.0) - 0.5) * 0.2) * inL * step(0.5, code);
  T += fm * max(fieldV, 0.0) * near0;
  light += fm * max(-fieldV, 0.0) * near0;
  // Под городом ландшафт тише — город рисуется поверх.
  float cityK = 1.0 - 0.55 * uCity;
  T *= drawnB * cityK;
  light *= drawnB * cityK * pig;

  // Вода — живописно: ровная заливка, темнее у берега, мягкий блик.
  float wv = texture2D(uLA, luv).r;
  float wIn = smoothstep(0.42, 0.58, wv) * inL;
  float wBlur = texture2D(uLA, luv, 2.5).r;
  float bank = wIn * (1.0 - smoothstep(0.55, 0.95, wBlur));
  float hl = smoothstep(0.62, 0.85, sk_n(p * 0.8 + 11.0)) * wIn * (1.0 - bank);
  float wsh = (wIn * 0.26 + bank * 0.18) * (0.4 + 0.6 * near0) * drawnB * pig;
  vec3 wcol = mix(mix(C_PALE, C_BLUE, 0.45), C_BLUE, bank * 0.6);
  wcol = mix(wcol, vec3(0.92, 0.95, 0.98), hl * 0.6);
  T *= 1.0 - wIn;
  light *= 1.0 - wIn;

  // Слой ландшафта: свет (светлее бумаги) и тон (графит цвета коня).
  vec3 paperL = vec3(0.93, 0.945, 0.955);
  vec3 lcol = paperL * light;
  float lA = light;
  lcol = lcol * (1.0 - T) + C_INK3 * T;
  lA = lA * (1.0 - T) + T;
  // Горизонт растворяется в дымке бумаги — без твёрдой кромки края земли.
  float dist = 1.0 - smoothstep(26.0, 46.0, vDepth);
  lcol *= dist; lA *= dist;

  // ЗЕЛЕНЬ — ЛЁГКОЙ ЛЕССИРОВКОЙ ПОВЕРХ ТОНА (заказчик: «добавить зелени»,
  // затем: «потерялись тени и объёмы» — зелень не заменяет тон рельефа,
  // а подкрашивает его). Края — растёкшейся акварелью (размытая маска +
  // шум), насыщенность низкая. Лес — чуть темнее и плотнее, с тоном внутри
  // массы (темнее от света, кроны-бугорки на земле), без отдельной тени.
  // Поля — цвета нет: бумага и рельеф.
  float gF = texture2D(uLA, luv, 2.2).g;
  float gM = texture2D(uLB, luv, 2.2).b;
  float wob = (sk_n(p * 1.6 + 5.0) - 0.5) * 0.3 + (sk_n(p * 6.0) - 0.5) * 0.1;
  // Лессировка леса — по той же живой кромке (fo), гаснет неровно.
  float fG = max(smoothstep(0.3, 0.7, gF + wob) * smoothstep(0.35, 0.7, fOrg + wob * 0.5), fo) * inL;
  float mG = smoothstep(0.3, 0.7, gM + wob) * inL * (1.0 - fG);
  float crowns = sk_n(p * 26.0) * 0.6 + sk_n(p * 9.0) * 0.4;
  float fSide = clamp(0.5 - dl * 4.0, 0.0, 1.0);
  float gA = (fG * (0.26 + 0.1 * crowns * near0 + 0.06 * fSide) + mG * 0.13) * (0.45 + 0.55 * near0) * drawnB;
  gA *= 1.0 - 0.55 * uCity;
  // Под конём лессировка вдвое легче: зелень подкрашивает тон, не кроет.
  // Кроны дышат сквозь лессировку (не ровная плашка).
  gA *= 1.0 - PRE_G * uPre;
  gA *= foFar;
  gA *= mix(1.0, 0.55 + 0.9 * crowns, uPre * fG);
  vec3 gCol = mix(vec3(0.53, 0.62, 0.52), vec3(0.36, 0.46, 0.38), fG);
  // Вдали зелень синеет вместе с дымкой.
  gCol = mix(gCol, vec3(0.66, 0.72, 0.78), haze * 0.6);
  // Под конём зелень тоньше, но чище по цвету — видна, не кроет тон.
  gCol = mix(gCol, gCol * vec3(0.88, 1.1, 0.9), uPre);
  float pen = 0.0;
  skLim = vec4(16.0, 28.0, 2.2, 3.6);
  // ── Город: тон штриховкой по застройке ──
  float dens = texture2D(uMap, muv, 3.0).g * inMap;
  float tone = smoothstep(0.06, 0.42, dens) * (1.0 - smoothstep(0.75, 1.0, length(muv - 0.5) * 2.0));
  float hatC = sk_tone(p, tone, 0.55, 1.0, uHatch) * 0.85 * uCity;
  float under = 0.0;


  // Слои: живописный ландшафт → вода → карандаш города.
  col = lcol / max(lA, 0.0001); a = lA;
  // Лессировка зелени поверх тона: множит бумагу и тон (тени видны сквозь).
  float gO = gA * (1.0 - 0.5 * uPre);
  col = (col * a + gCol * gO * (1.0 - a)) / max(a + gO * (1.0 - a), 0.0001);
  col = mix(col, col * gCol * 1.35, gA * a);
  a = a + gO * (1.0 - a);
  col = (col * a * (1.0 - wsh) + wcol * wsh) / max(a * (1.0 - wsh) + wsh, 0.0001);
  a = a * (1.0 - wsh) + wsh;
  float g = clamp(pen + hatC, 0.0, 0.85);
  col = (col * a + C_INK2 * g * (1.0 - a)) / max(a + g * (1.0 - a), 0.0001);
  a = a + g * (1.0 - a);
  // Ткань города — тонкий рисунок подложки (улицы, кварталы) поверх
  // заливки: по нему Пардубице узнаются, а не только по магистралям.
  float fab = texture2D(uMap, muv).g * inMap * (1.0 - smoothstep(0.6, 0.95, length(muv - 0.5) * 2.0));
  fab = clamp(fab * 1.4, 0.0, 1.0) * FAB_A * uCity * (1.0 - smoothstep(0.01, 0.05, fw * 0.3));
  col = (col * a + FAB_C * fab * (1.0 - a));
  a = a + fab * (1.0 - a);
  col /= max(a, 0.0001);
  if (uHoldA > 0.0) {
    // Удержание: в пределах карты города — тот же кадр, сведённый с тёмным
    // фоном под ним (непрозрачный), запечённый сумерками; вне карты —
    // ландшафт гаснет по uAlpha.
    float cm = inMap * (1.0 - smoothstep(0.6, 1.0, length(muv - 0.5) * 2.0)) * fade;
    // штрихи города: пока есть подложка — весь кадр города; без неё —
    // только рисунок (штриховка, ткань улиц, вода), без тона рельефа
    float aS = 1.0 - (1.0 - g) * (1.0 - fab) * (1.0 - wsh);
    float sA = mix(aS * 0.8, a, uGround);
    vec3 sc = holdBake(col);
    vec3 gc = mix(HOLD_BG, DIM_C, uBake);
    float hA = cm * uHoldA;
    vec3 hp = (sc * sA + gc * (1.0 - sA) * uGround) * hA;
    float hAl = (sA + (1.0 - sA) * uGround) * hA;
    float fA = a * fade * uAlpha;
    // город поверх гаснущего ландшафта
    vec3 pc = hp + col * fA * (1.0 - hAl);
    a = hAl + fA * (1.0 - hAl);
    col = pc / max(a, 0.0001);
  } else
  a *= fade * uAlpha;
  // Неон на земле — поле, не геометрия (раунд 35).
  vec4 nn = neonGround(p, vDepth);
  col = (col * a * (1.0 - nn.a) + nn.rgb * nn.a) / max(a + nn.a * (1.0 - a), 0.0001);
  a = a + nn.a * (1.0 - a);
  if (a < 0.002) discard;
  gl_FragColor = vec4(col * a, a);
}
`,v0=`
attribute vec3 aA;
attribute vec3 aB;
attribute vec4 aInfo;
uniform vec3 uCam;
uniform float uR;
uniform float uDpr;
uniform float uTime;
uniform float uFadeKm;
uniform vec4 uW;
uniform vec2 uW2;
varying float vSide;
varying float vHW;
varying float vVis;
varying float vKind;
varying float vS;
${Ja}
void main() {
  bool atB = aInfo.x > 0.5;
  vec3 P = atB ? aB : aA;
  vSide = aInfo.y;
  vKind = aInfo.z;
  vS = aInfo.w;
  vVis = smoothstep(0.0, uFadeKm, dot(normalize(P), uCam) - uR * uR / length(P));
  float k = vKind;
  // Виды лент: 0 берега, 1 границы, 2 Чехия, 3 реки, 5 дороги края, 6 реки края.
  float hw = k < 0.5 ? uW.x : k < 1.5 ? uW.y : k < 2.5 ? uW.z : k < 3.5 ? uW.w : k < 5.5 ? uW2.x : uW2.y;
  vHW = hw * uDpr;
  vec4 ca = projectionMatrix * (modelViewMatrix * vec4(aA, 1.0));
  vec4 cb = projectionMatrix * (modelViewMatrix * vec4(aB, 1.0));
  vec4 c = ribbon(ca, cb, aInfo.x, aInfo.y, vHW);
  gl_Position = c;
}
`,m0=`
${Dt}
uniform float uTime;
uniform vec4 uAl;
uniform vec4 uDraw;
uniform vec2 uAl2;
uniform float uReach;
varying float vSide;
varying float vHW;
varying float vVis;
varying float vKind;
varying float vS;
void main() {
  float k = vKind;
  float al = k < 0.5 ? uAl.x : k < 1.5 ? uAl.y : k < 2.5 ? uAl.z : k < 3.5 ? uAl.w : k < 5.5 ? uAl2.x : uAl2.y;
  float dr = k < 0.5 ? uDraw.x : k < 1.5 ? uDraw.y : k < 2.5 ? uDraw.z : k < 3.5 ? uDraw.w : 1.0;
  // Дороги и реки края дорисовываются от Пардубиц наружу: vS у них —
  // расстояние от города (тыс. км), uReach — докуда уже дошло.
  bool reg = k > 4.5;
  if (reg) dr = 2.0;
  float e = abs(vSide);
  float cov = clamp(vHW + 0.5 - e * (vHW + 1.0), 0.0, 1.0);
  // Линия рисуется сама — по доле своей длины.
  float drawn = reg ? 1.0 - smoothstep(uReach * 0.85, uReach, vS) : 1.0 - smoothstep(dr - 0.02, dr, vS);
  vec3 col = k > 1.5 && k < 2.5 ? C_GOLD : (k > 2.5 && k < 3.5) || k > 5.5 ? C_BLUE : k > 4.5 ? C_INK3 : C_INK2;
  // Карандаш: нажим меняется вдоль линии.
  if (k < 1.5) col = mix(C_INK1, C_INK2, 0.4);
  cov *= 0.55 + 0.45 * (0.5 + 0.5 * sin(vS * 157.0 + k * 2.0) * sin(vS * 61.0 + 1.3));
  float a = clamp(cov * al * drawn * vVis, 0.0, 1.0);
  if (a < 0.002) discard;
  gl_FragColor = vec4(col * a, a);
}
`,fa=24,p0=`
varying vec2 vPx;
uniform vec2 uRes;
void main() { vPx = (position.xy * 0.5 + 0.5) * uRes; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,d0=`
uniform vec4 uRects[${fa}];
uniform int uN;
uniform float uFeather;
uniform float uStrength;
uniform vec2 uRes;
varying vec2 vPx;
void main() {
  float a = 0.0;
  for (int i = 0; i < ${fa}; i++) {
    if (i >= uN) break;
    vec4 r = uRects[i];
    vec2 c = (r.xy + r.zw) * 0.5, h = (r.zw - r.xy) * 0.5;
    vec2 q = abs(vPx - c) - h;
    float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
    // Мягкий край — без «коробки»: спад по гладкой кривой на uFeather.
    float k = clamp(1.0 - d / uFeather, 0.0, 1.0);
    a = max(a, k * k * (3.0 - 2.0 * k));
  }
  a *= uStrength;
  if (a < 0.002) discard;
  // Не краска, а стирание: уже нарисованное под текстом гасится к
  // прозрачному (смешение ZERO, ONE_MINUS_SRC_ALPHA), и сквозь холст видна
  // сама страница. Краска цвета бумаги давала заметные «коробки» — фон
  // страницы под виньеткой не совпадает с ней до уровня.
  gl_FragColor = vec4(0.0, 0.0, 0.0, a);
}
`;async function h0(){const e=[];for(const{L:t,P:a,starts:l,raw:o}of await Aa("streets.bin")){const r=new Float32Array(a*2);for(let v=0;v<a*2;v++)r[v]=(o[v]/16384-.5)*at*2;const u=[];for(let v=0;v<t;v++){const m=l[v],s=v+1<t?l[v+1]:a,i=[];for(let c=m;c<s;c++)i.push([r[c*2],r[c*2+1]]);u.push(i)}e.push(u)}return e}async function x0(e){const t=[];for(const[a,{L:l,P:o,starts:r,raw:u}]of(await Aa("lines.bin")).entries()){const v=new Float32Array(o*2);for(let s=0;s<o*2;s++)v[s]=u[s]/180;const m=[];for(let s=0;s<l;s++){const i=r[s],c=s+1<l?r[s+1]:o,n=[];for(let p=i;p<c;p++)n.push([v[p*2],v[p*2+1]]);m.push(Co(n,a===2?e*.2:e))}t.push(m)}return t}async function g0(e){const t=[];for(const{L:a,P:l,starts:o,raw:r}of await Aa("region.bin")){const u=[];for(let m=0;m<l;m++)u.push([r[m*2]/180,r[m*2+1]/180]);const v=[];for(let m=0;m<a;m++)v.push(Co(u.slice(o[m],m+1<a?o[m+1]:l),e));t.push(v)}return t}function Co(e,t){if(e.length<3)return e;const a=new Uint8Array(e.length);a[0]=a[e.length-1]=1;const l=[[0,e.length-1]];for(;l.length;){const[o,r]=l.pop();let u=0,v=-1;const[m,s]=e[o],[i,c]=e[r],n=i-m,p=c-s,h=Math.hypot(n,p)||1e-9;for(let S=o+1;S<r;S++){const R=Math.abs((e[S][0]-m)*p-(e[S][1]-s)*n)/h;R>u&&(u=R,v=S)}u>t&&(a[v]=1,l.push([o,v],[v,r]))}return e.filter((o,r)=>a[r])}const w0=`
attribute vec4 aP;
attribute vec2 aY;
attribute vec4 aI;
attribute float aSz;
uniform float uGrow;
uniform float uFocal;
uniform float uFar;
uniform float uDpr;
uniform float uHW;
varying float vSide;
varying float vHW;
varying float vA;
varying float vTop;
${Ja}
void main() {
  float g = clamp((uGrow * 1.5 - aI.w) / 0.5, 0.0, 1.0);
  g = g * g * (3.0 - 2.0 * g);
  vec3 pA = vec3(aP.x, aY.x * aI.z * g + 0.004, aP.y);
  vec3 pB = vec3(aP.z, aY.y * aI.z * g + 0.004, aP.w);
  vec4 va = modelViewMatrix * vec4(pA, 1.0);
  vec4 vb = modelViewMatrix * vec4(pB, 1.0);
  vSide = aI.y;
  vTop = min(aY.x, aY.y);
  if (-va.z < 0.02 || -vb.z < 0.02 || g < 0.001) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vA = 0.0; vHW = 0.0; return; }
  vec4 mv = aI.x > 0.5 ? vb : va;
  float dist = -mv.z;
  float px = aSz * uFocal / dist / uDpr;
  vA = g * smoothstep(2.0, 6.5, px) * (1.0 - smoothstep(uFar * 0.5, uFar, dist));
  vHW = uHW * uDpr;
  gl_Position = ribbon(projectionMatrix * va, projectionMatrix * vb, aI.x, aI.y, vHW);
}
`,y0=`
${Dt}
${ba}
uniform float uAlpha;
varying float vSide;
varying float vHW;
varying float vA;
varying float vTop;
void main() {
  float e = abs(vSide);
  float cov = clamp(vHW + 0.5 - e * (vHW + 1.0), 0.0, 1.0);
  // Чертёж тушью поверх акварели — чёткий и тёмный.
  float a = cov * vA * max(uAlpha, uHoldA) * mix(0.6, 0.9, vTop) * (1.0 - 0.35 * uTint);
  vec3 col = holdBake(C_INK1);
  if (a < 0.002) discard;
  gl_FragColor = vec4(col * a, a);
}
`,A0=`
attribute vec4 aE;
attribute vec2 aC;
attribute vec2 aN;
attribute vec3 aHD;
uniform float uGrow;
uniform float uFocal;
uniform float uFar;
uniform float uDpr;
varying vec2 vUV;
varying float vSh;
varying float vA;
varying float vPx;
varying float vDel;
varying float vL;
varying float vV;
void main() {
  vDel = aHD.y;
  vL = length(aE.zw - aE.xy);
  vV = aC.y;
  float g = clamp((uGrow * 1.5 - aHD.y) / 0.5, 0.0, 1.0);
  g = g * g * (3.0 - 2.0 * g);
  vec2 xz = mix(aE.xy, aE.zw, aC.x);
  float h = aHD.x * g;
  vec3 p = vec3(xz.x, aC.y * h + 0.004, xz.y);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float L = length(aE.zw - aE.xy);
  vUV = vec2(aC.x * L, aC.y * aHD.x);
  vec2 sun = normalize(vec2(-0.75, -0.66));
  vSh = smoothstep(0.05, 0.5, -dot(aN, sun));
  float px = aHD.z * uFocal / max(-mv.z, 0.001) / uDpr;
  vPx = px;
  vA = g * smoothstep(1.5, 4.0, px) * (1.0 - smoothstep(uFar * 0.5, uFar, -mv.z));
}
`,b0=`
${Dt}
${ba}
uniform float uAlpha;
uniform float uHatch;
varying vec2 vUV;
varying float vSh;
varying float vA;
varying float vPx;
varying float vDel;
varying float vL;
varying float vV;
${Qa}
void main() {
  if (vSh * vA < 0.01) discard;
  // «Ш-Ш-Ш»: тень стены — быстрым зигзагом, 2–4 прохода туда-обратно;
  // кончик бежит по зигзагу (у каждого дома свой старт по очереди от
  // середины), за ним остаётся штрих, у кончика — голубая искра.
  // Мелкая стена (штриху негде лечь) — ровным тоном графита.
  float hz = fract(sin(vDel * 91.7 + vL * 13.1) * 43758.5453);
  float nZ = 2.0 + floor(hz * 3.0);
  // Ход кончика: быстрый, с разгоном и торможением (0.35 отрезка сборки).
  float pr = clamp((uHatch * 1.7 - vDel * 0.8 - 0.05) / 0.35, 0.0, 1.0);
  pr = pr * pr * (3.0 - 2.0 * pr);
  // Зигзаг в координатах стены: x — доля длины, vV — доля высоты.
  float x = vUV.x / max(vL, 1e-6);
  float tri = abs(fract(x * nZ * 0.5) * 2.0 - 1.0);
  float yt = 0.1 + 0.8 * tri;
  float dpx = abs(vV - yt) / max(fwidth(vV - yt), 1e-6);
  float stroke = (1.0 - smoothstep(0.6, 1.5, dpx)) * step(x, pr);
  float tip = (pr > 0.001 && pr < 0.999) ? exp(-pow((x - pr) * 14.0, 2.0)) : 0.0;
  float big = smoothstep(10.0, 22.0, vPx);
  float c = mix(0.38 * uHatch, stroke * 0.9 + 0.12 * pr, big);
  float a = c * vSh * vA * max(uAlpha, uHoldA) * 0.8 * (1.0 - 0.35 * uTint);
  float sp = tip * big * vA * stroke * 0.9;
  if (a + sp < 0.002) discard;
  vec3 col = holdBake(C_INK2) * a + vec3(0.36, 0.78, 1.0) * sp;
  gl_FragColor = vec4(col, min(1.0, a + sp));
}
`;function M0(e,t){const a=t?400:150,l=1.6/1e3;let o=0;for(let c=0;c<e.n;c++)e.area[c]>=a&&(o+=e.cnt[c]);const r=new Float32Array(o*4*4),u=new Float32Array(o*4*2),v=new Float32Array(o*4*2),m=new Float32Array(o*4*3);let s=0;for(let c=0;c<e.n;c++){if(e.area[c]<a)continue;const n=e.start[c],p=e.cnt[c],h=k=>(e.u[n+k]-.5)*at*2,S=k=>(e.v[n+k]-.5)*at*2;let R=0,H=0;for(let k=0;k<p;k++)R+=h(k),H+=S(k);R/=p,H/=p;const N=Math.max(3,e.h[c])*l,E=Math.hypot(R/at,H/at)/2,C=Math.min(1,E*2)*.8+c*7919%97/97*.2,P=Math.sqrt(e.area[c])/1e3;for(let k=0;k<p;k++){const O=(k+1)%p,L=h(k),_=S(k),f=h(O),M=S(O);let w=-(M-_),y=f-L;const d=Math.hypot(w,y)||1;w/=d,y/=d,w*((L+f)/2-R)+y*((_+M)/2-H)<0&&(w=-w,y=-y);for(let T=0;T<4;T++){const b=s*4+T;r.set([L,_,f,M],b*4),u.set([T&1,T>>1],b*2),v.set([w,y],b*2),m.set([N,C,P],b*3)}s++}}const i=new Ie;return i.setAttribute("position",new G(new Float32Array(o*4*3),3)),i.setAttribute("aE",new G(r,4)),i.setAttribute("aC",new G(u,2)),i.setAttribute("aN",new G(v,2)),i.setAttribute("aHD",new G(m,3)),i.setIndex(Ma(o)),i}function F0(e,t){const a=t?300:80,l=1.6/1e3;let o=0;for(let n=0;n<e.n;n++)e.area[n]<a||(o+=e.cnt[n]*(e.area[n]>=300||e.h[n]>=11?2:1));const r=new Float32Array(o*4*4),u=new Float32Array(o*4*2),v=new Float32Array(o*4*4),m=new Float32Array(o*4);let s=0;const i=(n,p,h,S,R,H,N,E,C)=>{for(let P=0;P<4;P++){const k=s*4+P;r.set([n,p,h,S],k*4),u.set([R,H],k*2),v.set([P>>1,P&1?1:-1,N,E],k*4),m[k]=C}s++};for(let n=0;n<e.n;n++){if(e.area[n]<a)continue;const p=e.start[n],h=e.cnt[n],S=Math.max(3,e.h[n])*l;let R=0,H=0;for(let k=0;k<h;k++)R+=e.u[p+k],H+=e.v[p+k];R=(R/h-.5)*2,H=(H/h-.5)*2;const N=Math.min(1,Math.hypot(R,H))*.8+n*7919%97/97*.2,E=Math.sqrt(e.area[n])/1e3,C=k=>(e.u[p+k]-.5)*at*2,P=k=>(e.v[p+k]-.5)*at*2;for(let k=0;k<h;k++){const O=(k+1)%h;i(C(k),P(k),C(O),P(O),1,1,S,N,E)}if(e.area[n]>=300||e.h[n]>=11)for(let k=0;k<h;k++)i(C(k),P(k),C(k),P(k),0,1,S,N,E)}const c=new Ie;return c.setAttribute("position",new G(new Float32Array(o*4*3),3)),c.setAttribute("aP",new G(r,4)),c.setAttribute("aY",new G(u,2)),c.setAttribute("aI",new G(v,4)),c.setAttribute("aSz",new G(m,1)),c.setIndex(Ma(o)),c}function Ma(e){const t=new Uint32Array(e*6);for(let a=0;a<e;a++){const l=a*4;t.set([l,l+1,l+2,l+2,l+1,l+3],a*6)}return new G(t,1)}function S0(e,t){const{S:a,M:l}=t,o=[0,1,2,3,5],r=5.6,u=[];let v=0;for(const f of o)for(const M of e[f]){let w=[];for(const y of M)Math.hypot(y[0],y[1])<=r?w.push(y):(w.length>1&&u.push({l:f,pts:w}),w=[]);w.length>1&&u.push({l:f,pts:w})}for(const f of u){let M=0;for(let w=1;w<f.pts.length;w++)M+=Math.hypot(f.pts[w][0]-f.pts[w-1][0],f.pts[w][1]-f.pts[w-1][1]);f.len=M,v+=M}const m=Math.max(.2,v/5200),s=[],i=(f,M)=>{let w=0;for(let y=1;y<f.pts.length;y++){const d=f.pts[y-1],T=f.pts[y],b=Math.hypot(T[0]-d[0],T[1]-d[1]);if(w+b>=M||y===f.pts.length-1){const x=b>0?Math.min(1,(M-w)/b):0;return[d[0]+(T[0]-d[0])*x,d[1]+(T[1]-d[1])*x]}w+=b}return f.pts[f.pts.length-1]};for(const f of u){if(f.len<.03)continue;const M=Math.max(1,Math.round(f.len/m));for(let w=0;w<M;w++){const y=f.len*w/M,d=f.len*(w+1)/M,T=[];for(let D=0;D<l;D++)T.push(i(f,y+(d-y)*D/(l-1)));T[l-1][0]<T[0][0]&&T.reverse();let b=0,x=0;for(const D of T)b+=D[0],x+=D[1];s.push({l:f.l,pts:T,cx:b/l,cz:x/l})}}const c=it/(2*r),n=it/a,p=f=>{const M=Math.sin(f*12.9898)*43758.5453;return M-Math.floor(M)};for(const f of s){const M=Math.min(a-1,Math.max(0,Math.round((f.cz*c+it/2)/n-.5)));f.zl=-it/2+(M+.5)*n;let w=1/0,y=-1/0;for(const b of f.pts)w=Math.min(w,b[0]),y=Math.max(y,b[0]);const d=(w+y)/2*c,T=Math.max(.06,(y-w)/2*c);f.x0=d-T,f.x1=d+T,f.seed=p(M)}const h=96;for(let f=0;f<a;f++){const M=-it/2+(f+.5)*n,w=[];for(let y=0;y<h;y++)w.push([0,0]);s.push({l:9,pts:w,cx:0,cz:0,x0:-it/2,x1:it/2,zl:M,seed:p(f),field:!0})}const S=s.length,R=s.reduce((f,M)=>f+M.pts.length-1,0),H=new Float32Array(R*4*4),N=new Float32Array(R*4*4),E=new Float32Array(R*4*2),C=new Float32Array(R*4*4);let P=0;const k=new Set,O=(f,M)=>Math.round(f/.05)+","+Math.round(M/.05);for(const f of t.first||[])for(let M=1;M<f.pts.length;M++){const[w,y]=f.pts[M-1],[d,T]=f.pts[M];if(Math.max(Math.abs(w),Math.abs(y),Math.abs(d),Math.abs(T))>6)continue;const b=Math.ceil(Math.hypot(d-w,T-y)/.025);for(let x=0;x<=b;x++){const D=w+(d-w)*x/b,I=y+(T-y)*x/b;for(let B=-1;B<=1;B++)for(let K=-1;K<=1;K++)k.add(O(D+B*.05,I+K*.05))}}const L=f=>{if(!k.size||f.field)return!1;let M=0;for(const w of f.pts)k.has(O(w[0],w[1]))&&M++;return M>=f.pts.length*.6};for(const f of s){let M=Math.min(1,Math.hypot(f.cx,f.cz)/5.5);L(f)&&(M*=.3);const w=f.pts.length;for(let y=0;y<w-1;y++){const d=f.pts[y],T=f.pts[y+1];for(let b=0;b<4;b++){const x=P*4+b;H.set([d[0],d[1],T[0],T[1]],x*4),N.set([f.x0,f.x1,f.zl,M],x*4),E.set([y/(w-1),(y+1)/(w-1)],x*2),C.set([b>>1,b&1?1:-1,f.l,f.seed],x*4)}P++}}const _=new Ie;return _.setAttribute("position",new G(new Float32Array(R*4*3),3)),_.setAttribute("aT",new G(H,4)),_.setAttribute("aSU",new G(N,4)),_.setAttribute("aUU",new G(E,2)),_.setAttribute("aInfo",new G(C,4)),_.setIndex(Ma(R)),{geometry:_,K:S,gap:n}}function R0(e,t,a){const l=e.map((h,S)=>h.map(R=>({kind:S,pts:R}))),o=[].concat(...l);t&&t.forEach((h,S)=>h.forEach(R=>o.push({kind:5+S,pts:R})));const r=a?Ge(a.lat,a.lon,1):[0,0,1];let u=0;for(const h of o)u+=Math.max(0,h.pts.length-1);const v=new Float32Array(u*4*3),m=new Float32Array(u*4*3),s=new Float32Array(u*4*4),i=[0,0,0],c=[0,0,0];let n=0;for(const h of o){const S=h.pts.length;if(S<2)continue;const R=h.kind===2?1.2:.6;for(let H=0;H<S-1;H++){Ge(h.pts[H][1],h.pts[H][0],q+R,i),Ge(h.pts[H+1][1],h.pts[H+1][0],q+R,c);for(let N=0;N<4;N++){const E=n*4+N;v.set(i,E*3),m.set(c,E*3);let C=(H+(N>>1))/(S-1);if(h.kind>=5){const P=N>>1?c:i,k=Math.hypot(P[0],P[1],P[2]);C=Math.acos(Math.min(1,(P[0]*r[0]+P[1]*r[1]+P[2]*r[2])/k))*q/1e3}s.set([N>>1,N&1?1:-1,h.kind,C],E*4)}n++}}const p=new Ie;return p.setAttribute("position",new G(v,3)),p.setAttribute("aA",new G(v,3)),p.setAttribute("aB",new G(m,3)),p.setAttribute("aInfo",new G(s,4)),p.setIndex(Ma(u)),p}async function k0(e,t){const a=t.lite,[l,o,r]=await Promise.all([h0(),x0(a?.08:.04),g0(.01)]),u=new gt,v=new gt,m=new ve(1,1),s={uTime:{value:0},uAsm:{value:0},uWave:{value:1},uFocal:{value:1e3},uFar:{value:30},uDpr:{value:1},uBg:{value:0},uAlpha:{value:1},uRes:{value:m},uFlat:{value:0},uFT:{value:0},uPaint:{value:0},uHoldA:{value:0},uBake:{value:0},uGround:{value:1},uTint:{value:0}},i=S0(l,{S:a?110:200,M:a?12:16,first:t.routes}),c=g=>new te({vertexShader:s0(g),fragmentShader:i0(g),uniforms:{...s,uGap:{value:i.gap},uPass:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1,side:Tt,...Ce}),n=c(!1),p=new ue(i.geometry,n);p.name="strands",p.frustumCulled=!1,p.renderOrder=2,u.add(p);const h=c(!0);h.uniforms={...n.uniforms,uPass:{value:0}};const S=new ue(i.geometry,h);S.frustumCulled=!1,S.renderOrder=3,u.add(S);const R=c(!0);R.uniforms={...n.uniforms,uPass:{value:1}};const H=new ue(i.geometry,R);H.frustumCulled=!1,H.renderOrder=3,u.add(H);const N=a?300:480,E=new sa(96,96,N,N);E.rotateX(-Math.PI/2);const C=new te({vertexShader:so,fragmentShader:f0,uniforms:{uMap:{value:e},uTime:s.uTime,uBg:{value:0},uCity:{value:0},uAlpha:{value:1},uHoldA:s.uHoldA,uBake:s.uBake,uGround:s.uGround,uTint:s.uTint,uHatch:{value:0},uRelief:{value:1},uPre:{value:0},uNN:{value:t.land?.neonN||null},uNF:{value:t.land?.neonF||null},uNeonN:{value:t.neonN||2048},uNeonT:{value:0},uNeonP:{value:0},uDem:{value:t.land?.dem||null},uDemF:{value:t.land?.far||null},uLA:{value:t.land?.a||null},uLB:{value:t.land?.b||null}},transparent:!0,depthWrite:!1,depthTest:!0,depthFunc:no,...Ce}),P=new ue(E,C),k=new te({vertexShader:so,fragmentShader:"void main() { gl_FragColor = vec4(0.0); }",uniforms:C.uniforms,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0}),O=new ue(E,k);O.name="washDepth",O.position.y=-.003,O.frustumCulled=!1,O.renderOrder=.9,u.add(O);let L=null,_=null;if(t.land?.hor){const g=new sa(ye.hor.h*2,ye.hor.h*2,t.lite?200:320,t.lite?200:320);g.rotateX(-Math.PI/2),g.translate(0,0,ye.hor.cz);const Q={uHor:{value:t.land.hor},uHEx:{value:3.4},uCurv:{value:1},uPre:C.uniforms.uPre,uAlpha:C.uniforms.uAlpha,uBg:C.uniforms.uBg},J=new te({vertexShader:io,fragmentShader:co(!0),uniforms:Q,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});_=new te({vertexShader:io,fragmentShader:co(!1),uniforms:Q,transparent:!0,depthWrite:!1,depthTest:!0,depthFunc:no,...Ce});const Pe=new ue(g,J);Pe.name="horDepth",Pe.frustumCulled=!1,Pe.renderOrder=.88,Pe.position.y=-.003,L=new ue(g,_),L.name="horizon",L.frustumCulled=!1,L.renderOrder=.95,L.position.y=-.003,L.userData.depth=Pe,u.add(Pe,L)}P.name="wash",P.position.y=-.003,P.frustumCulled=!1,P.renderOrder=1,u.add(P);let f=null,M=null;t.houses&&(M=new te({vertexShader:w0,fragmentShader:y0,uniforms:{uGrow:{value:0},uFocal:s.uFocal,uFar:s.uFar,uDpr:s.uDpr,uRes:{value:m},uAlpha:{value:1},uHoldA:s.uHoldA,uBake:s.uBake,uGround:s.uGround,uTint:s.uTint,uHW:{value:.5}},transparent:!0,depthWrite:!1,depthTest:!1,side:Tt,...Ce}),f=new ue(F0(t.houses,a),M),f.name="houses2",f.frustumCulled=!1,f.renderOrder=3,u.add(f));let w=null,y=null;t.houses&&(y=new te({vertexShader:A0,fragmentShader:b0,uniforms:{uGrow:M.uniforms.uGrow,uFocal:s.uFocal,uFar:s.uFar,uDpr:s.uDpr,uAlpha:M.uniforms.uAlpha,uHatch:{value:0},uHoldA:s.uHoldA,uBake:s.uBake,uGround:s.uGround,uTint:s.uTint},transparent:!0,depthWrite:!1,depthTest:!1,side:Tt,...Ce}),w=new ue(M0(t.houses,a),y),w.name="walls",w.frustumCulled=!1,w.renderOrder=2,u.add(w));const d=R0(o,r,t.pdb),T=[.65,.55,2.2,.5],b={uCam:{value:new V},uR:{value:q},uDpr:s.uDpr,uTime:s.uTime,uFadeKm:{value:100},uRes:{value:m},uW:{value:new Ke(T[0],T[1],T[2],T[3])},uAl:{value:new Ke},uDraw:{value:new Ke(1,1,1,1)},uW2:{value:new ve(.5,.65)},uAl2:{value:new ve},uReach:{value:0}},x=new te({vertexShader:v0,fragmentShader:m0,uniforms:b,transparent:!0,depthWrite:!1,depthTest:!1,side:Tt,...Ce}),D=new ue(d,x);D.name="sphere",D.frustumCulled=!1,D.renderOrder=-10,v.add(D);const I=Array.from({length:fa},()=>new Ke),B=new te({vertexShader:p0,fragmentShader:d0,uniforms:{uRects:{value:I},uN:{value:0},uFeather:{value:90},uStrength:{value:.85},uRes:{value:m}},transparent:!0,depthWrite:!1,depthTest:!1,blending:Ot,blendSrc:Na,blendDst:Wt,blendSrcAlpha:Na,blendDstAlpha:Wt});C.uniforms.uRects=B.uniforms.uRects,C.uniforms.uN=B.uniforms.uN;const K=new ue(At(),B);K.frustumCulled=!1,K.renderOrder=95;let Z=[];const X="main :is(h2, h3, p, blockquote, .arrow-link, .leader__name, .direction__head)",be=new Set;let xe=!1;const Me=typeof IntersectionObserver>"u"?null:new IntersectionObserver(g=>{for(const Q of g)Q.isIntersecting?be.add(Q.target):be.delete(Q.target);xe=!0},{rootMargin:"50% 50% 50% 50%"});function me(){if(Z=Array.from(document.querySelectorAll(X)),!!Me){Me.disconnect(),be.clear(),xe=!1;for(const g of Z)Me.observe(g)}}return me(),{cityGroup:u,sphereGroup:v,veil:K,collect:me,update(g){if(s.uTime.value=g.time,s.uAsm.value=g.asm,s.uWave.value=g.wave,s.uFocal.value=g.focal,s.uFar.value=g.far,s.uDpr.value=g.dpr,s.uBg.value=g.bg,s.uAlpha.value=g.alpha,s.uFlat.value=g.flat||0,s.uFT.value=g.ft??g.time,s.uHoldA.value=g.holdA||0,s.uBake.value=g.bake||0,s.uGround.value=g.ground??1,s.uTint.value=g.tint||0,f&&(M.uniforms.uGrow.value=g.grow||0,M.uniforms.uAlpha.value=g.alpha,f.visible=Math.max(g.alpha,g.holdA||0)>.002&&(g.grow||0)>.001),w&&(y.uniforms.uHatch.value=g.hatch||0,w.visible=f.visible&&(g.hatch||0)>.001),m.set(g.w,g.h),p.visible=Math.max(g.alpha,g.holdA||0)>.002,S.visible=H.visible=p.visible&&g.asm>.001,s.uPaint.value=g.paint||0,C.uniforms.uHatch.value=g.hatch||0,C.uniforms.uBg.value=g.bg,C.uniforms.uCity.value=g.city,C.uniforms.uPre.value=g.pre||0,C.uniforms.uNeonT.value=g.neonT||0,C.uniforms.uNeonP.value=g.neonP||0,L&&(L.visible=L.userData.depth.visible=P.visible&&(g.pre||0)>.001),C.uniforms.uAlpha.value=g.alpha,P.visible=Math.max(g.alpha,g.holdA||0)>.002&&g.bg+g.city>.002,O.visible=P.visible&&g.alpha>.5,b.uCam.value.copy(g.cam),b.uFadeKm.value=g.fadeKm,b.uAl.value.set(g.sphere.al[0],g.sphere.al[1],g.sphere.al[2],g.sphere.al[3]),b.uDraw.value.set(g.sphere.draw[0],g.sphere.draw[1],g.sphere.draw[2],g.sphere.draw[3]),b.uAl2.value.set(g.sphere.reg?.[0]||0,g.sphere.reg?.[1]||0),b.uReach.value=g.sphere.reach||0,D.visible=g.sphere.al[0]+g.sphere.al[1]+g.sphere.al[2]+g.sphere.al[3]+b.uAl2.value.x+b.uAl2.value.y>.002,!(P.visible&&(g.neonT||0)+(g.neonP||0)>.001||g.veil>.002)){K.visible=!1;return}let J=0;const Pe=g.w/g.cssW,Ue=g.h/g.cssH,Ee=18;for(let Fe=0;Fe<Z.length&&J<fa;Fe++){const _e=Z[Fe];if(_e.style.visibility==="hidden"||xe&&!be.has(_e))continue;const fe=_e.getBoundingClientRect();fe.width<2||fe.bottom<-40||fe.top>g.cssH+40||fe.right<0||fe.left>g.cssW||fe.width*fe.height>g.cssW*g.cssH*.5||(I[J].set((fe.left-Ee)*Pe,(g.cssH-fe.bottom-Ee)*Ue,(fe.right+Ee)*Pe,(g.cssH-fe.top+Ee)*Ue),J++)}B.uniforms.uN.value=J,B.uniforms.uFeather.value=110*g.dpr,B.uniforms.uStrength.value=g.veil,K.visible=J>0&&g.veil>.002}}}const F=(e,t,a)=>{const l=Math.min(1,Math.max(0,(a-e)/(t-e)));return l*l*(3-2*l)};function ka(e,t,a){if(!e)return{x:t,v:0};const l=2/.6,o=l*a,r=1/(1+o+.48*o*o+.235*o*o*o),u=e.x-t,v=(e.v+l*u)*a;return e.v=(e.v-l*v)*r,e.x=t+(u+v)*r,e}function _0(e,t,a,l){for(let o=0;o<40;o++){const r=(a+l)/2;e(r)<t?a=r:l=r}return(a+l)/2}const T0=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Mt=.35,C0=`
precision highp float;
uniform sampler2D tClouds;
uniform vec2 uRes;
uniform float uTime, uErode, uFly, uNeon, uMapR, uTextL, uCell, uDim;
// Доля ветра пыли: 1 — прежние облака (плывут с ветром), 0 — стены ?cl=mf
// (стоят в мире, их шум не сносит — пыль стоит с ними).
uniform float uWindK;
// Поправка плотности для пыли (1 — основной вид; ?cl=mf — см. ниже).
uniform float uDustK;
// Верхняя кромка облаков (пиксели снизу) и ширина её растушёвки: пока
// в кадре горизонт с горами, облака лежат ниже гор.
uniform float uTop, uTopF;
uniform vec3 uDimCol;
uniform vec2 uMap;
uniform vec3 uNeonCol;
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float flyE(float r0, float rMax) {
  float e = clamp((uFly - 0.12 * min(r0 / rMax, 1.0)) / 0.88, 0.0, 1.0);
  return e * e * (3.0 - 2.0 * e);
}
float flyR(float r0, float rMax, float sEnd) {
  return r0 * (1.0 - flyE(r0, rMax) * (1.0 - sEnd));
}
void main() {
  vec2 px = gl_FragCoord.xy;
  float below = 1.0 - smoothstep(uTop - uTopF, uTop, px.y);
  if (uErode <= 0.0) { gl_FragColor = texture2D(tClouds, px / uRes) * below; return; }
  // Откуда пришла пыль, что сейчас в px (до полёта — она же); fs — масштаб
  // потока (экран / исход).
  vec2 p0 = px;
  float e = 0.0, fs = 1.0;
  if (uFly > 0.0) {
    float rMax = length(uRes);
    float sEnd = clamp(uMapR / rMax, 0.02, 0.6);
    vec2 v = px - uMap;
    float R = length(v);
    float lo = R, hi = R / sEnd + 1.0;
    for (int i = 0; i < 14; i++) {
      float m = 0.5 * (lo + hi);
      if (flyR(m, rMax, sEnd) < R) lo = m; else hi = m;
    }
    float r0 = 0.5 * (lo + hi);
    e = flyE(r0, rMax);
    fs = max(R, 1.0) / max(r0, 1.0);
    p0 = uMap + (R > 0.001 ? v / R : vec2(1.0, 0.0)) * r0;
  }
  // Система облака: плывёт с ветром ближнего слоя клубов (FRAG: масса
  // сдвигается на 0.035/1.6 высоты кадра в секунду вправо, 0.006/1.6 вниз).
  vec2 wind = vec2(0.035, -0.006) / 1.6 * uTime * uRes.y * uWindK;
  vec2 w = p0 - wind;
  // Пылинка своей клетки (радиус ≤ 1.2 точки, точка в середине клетки —
  // за край клетки не выходит).
  vec2 cid = floor(w / uCell);
  vec2 cidW = mod(cid, 4096.0);
  vec2 h = hash22(cidW);
  float hk = hash12(cidW + 17.0);
  float hr = hash12(cidW + 91.0);
  vec2 pt = (cid + 0.25 + 0.5 * h) * uCell;
  vec4 cs = texture2D(tClouds, (pt + wind) / uRes);
  // Плотность — источник пыли. ?cl=mf (uDustK > 1): ярусы там нарочно
  // реже (заказчик: «не такими густыми») — без поправки пыли рождалось
  // меньше, карта проступала раньше, и переход читался «сдвинутым и
  // быстрее» (заказчик 2026-11-05). Пыль берёт плотность, приведённую
  // к основному виду; без ключа uDustK = 1 — ровно как было.
  float csa = min(1.0, cs.a * uDustK);
  float dens = clamp(csa / 0.9, 0.0, 1.0);
  float rad = mix(0.6, 1.2, hr);
  // Расстояние до пылинки — в точках экрана (в полёте пылинка не растёт и
  // не тянется: масштаб потока снимается).
  float dist = length(w - pt) * fs;
  float speck = (1.0 - smoothstep(rad - 0.5, rad + 0.5, dist)) * step(hk, dens * 0.45);
  float show = smoothstep(0.0, 0.35, uErode);
  vec3 col = mix(cs.rgb / max(cs.a, 0.001), uNeonCol, uNeon);
  float sa = min(1.0, csa * 1.8) * speck * show;
  sa *= 1.0 - smoothstep(0.45, 0.95, e);
  sa *= mix(1.0, mix(uTextL, 1.0, smoothstep(0.08, 0.45, px.x / uRes.x)), e);
  // Сплошное облако выедается мельчайшим зерном — по случайному числу точки
  // экрана в плывущей системе облака; к концу рассыпания его нет.
  vec4 c = texture2D(tClouds, p0 / uRes);
  // Узор выедания — неподвижный, по точке холста. Пока он плыл с ветром,
  // однопиксельный шум сдвигался почти каждый кадр, и облако «кипело»
  // (заказчик: «в этом моменте перехода есть мерцание»; замер — кадр к кадру
  // 10/255 в среднем, со скрытым слоем облаков 0.3). Неподвижный узор
  // меняется только с прокруткой (порог uErode), облако под ним плывёт.
  float hp = hash12(mod(floor(px), 8192.0) + 0.5);
  float fill = step(uErode * 1.05, hp) * (1.0 - step(0.999, uErode));
  if (uFly > 0.0) fill = 0.0;
  vec4 spk = vec4(col * sa, sa);
  // Сцена под облаком темнеет вместе с началом рассыпания (заказчик: «на
  // светлом фоне белых точек вообще не видно») — сумерки цвета фона dots
  // поверх рисунка ink, под облаком и пылинками.
  vec4 base = c * fill;
  vec4 dim = vec4(uDimCol * uDim, uDim);
  // Выше кромки (below) нет ни облака, ни пылинок; сумерки — на всём кадре.
  spk *= below; base *= below; sa *= below;
  gl_FragColor = spk + (1.0 - sa) * (base + (1.0 - base.a) * dim);
}
`;function P0(e){const t=At(),a=new Ia(1,1,{depthBuffer:!1,minFilter:ut,magFilter:ut,type:bo}),l=new te({vertexShader:T0,fragmentShader:C0,uniforms:{tClouds:{value:a.texture},uRes:{value:new ve(1,1)},uTime:{value:0},uErode:{value:0},uDim:{value:0},uDimCol:{value:new Ve("#071b34")},uFly:{value:0},uNeon:{value:0},uCell:{value:5},uMapR:{value:100},uTextL:{value:1},uTop:{value:1e6},uTopF:{value:1},uWindK:{value:0},uDustK:{value:e.dustK??1},uMap:{value:new ve},uNeonCol:{value:new Ve("#78d0e6")}},transparent:!0,depthWrite:!1,depthTest:!1,...Ce}),o=new ue(t,l);o.frustumCulled=!1,o.renderOrder=90,o.name="clouds";const r=new Ve;let u=!1,v=null,m=0,s=null,i=null;const c=new Va;return{mesh:o,update(n){if(u=n.amount>.002&&!n.done,o.visible=u,!u)return;const p=l.uniforms;p.uTime.value=n.time,p.uErode.value=n.erode||0,p.uDim.value=n.dim||0,p.uFly.value=n.fly||0,p.uNeon.value=n.neon||0,p.uMapR.value=n.r,p.uTextL.value=n.textL??1,p.uTop.value=n.top??1e6,p.uTopF.value=Math.max(1,n.topF??1),p.uMap.value.set(n.hx,n.hy),p.uCell.value=Math.max(5,4.5*(n.px||1));const h=Math.max(1,Math.round(n.w*Mt)),S=Math.max(1,Math.round(n.h*Mt));(a.width!==h||a.height!==S)&&a.setSize(h,S),l.uniforms.uRes.value.set(n.w,n.h);const R=e.uniforms;R.uAmount.value=n.amount,R.uDark.value=n.dark||0,R.uTime.value=n.time,R.uRes.value.set(h,S),R.uHole.value.set(n.hx*Mt,n.hy*Mt),R.uHoleR.value=n.r*Mt,R.uTop.value=n.top!=null&&n.top<1e5?n.top*Mt:1e6;const H=(n.t??1.3)-1.3,N=performance.now(),E=Math.min(.1,Math.max(0,(N-m)/1e3));v=ka(v,H,E),m=N,R.uScroll.value=v.x;const C=n.accP||[0,0];s=ka(s,C[0],E),i=ka(i,C[1],E),R.uAccForm.value=s.x,R.uAccFade.value=i.x,R.uAccDrift.value=s.x*e.accKm},prerender(n,p){if(!u)return;const h=n.getRenderTarget(),S=n.getClearAlpha();n.getClearColor(r),e.preRender&&e.preRender(n,a.width,a.height),n.setRenderTarget(a),n.setClearColor(0,0),n.clear(!0,!1,!1),c.copy(p),c.projectionMatrix.elements[8]=-.3,c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),n.render(e.scene,c),n.setRenderTarget(h),n.setClearColor(r,S)}}}const D0=`
attribute float aFar, aPar, aAcc;
// ПАРАЛЛАКС ЯРУСОВ ПО ПРОКРУТКЕ (заказчик 2026-11-04: «можно сделать, чтобы
// на скролл разные слои облаков по-разному реагировали, а не так, что вся
// сцена одинаково движется»). Сверх хода камеры каждый ярус сдвигается
// по доле прокрутки: uScroll — t − 1.3 с собственной инерцией (clouds.js:
// мягкая пружина ~0.6 с, от времени кадра — не от частоты). aPar — доля яруса: ближние 1 (вбок заметно и чуть
// вверх), средние меньше, дальняя дымка почти 0, два яруса — против
// хода (−0.6, только вбок): слои расходятся по глубине. Вбок — вдоль
// яруса (они в 2–3 раза шире кадра — край не выходит), вверх — немного
// (низ ближних и так за кадром). Время (дрейф шума) — прежнее.
uniform float uScroll, uLat, uRise;
// ОБЛАКО ЗА РАСКРЫВАШКАМИ (заказчик 2026-11-05: «мне надо в это место
// чуть-чуть больше облаков»; о прежней сдвижной гряде, ехавшей на 4.4 км:
// «двигается пиздец как быстро и неестественно; может, просто сделать
// какое-то другое дополнительно специально под эту задачу?»). Отдельное
// облако (aAcc = 1) стоит в мире за строками .acc-areas; по прокрутке
// секции оно не едет, а СГУЩАЕТСЯ: на подходе (uAccForm 0 → 1) из клочьев
// растёт тело и поднимается гребень, сдвиг — не больше uAccDrift (0.6 км
// вправо за весь подход, скорость облака); на уходе (uAccFade 0 → 1) оно
// редеет и тает по своему шуму. Это исключение заказчика из правила
// «облака не от прокрутки» — только для него; доли идут мягкой пружиной
// (clouds.js), обратимо.
uniform float uAccDrift;
uniform vec3 uRight;
varying vec2 vUv;
varying float vSeed, vFacing, vFar, vAcc;
varying vec2 vSize;
void main() {
  vUv = uv;
  vFar = aFar;
  vAcc = aAcc;
  vec4 p = instanceMatrix * vec4(position, 1.0);
  p.xyz += aAcc * uAccDrift * uRight;
  p.xyz += aPar * uScroll * uLat * uRight + max(aPar, 0.0) * uScroll * uRise * vec3(0.0, 1.0, 0.0);
  // Зерно стены — по её месту (у образца так же: сумма сдвига).
  vSeed = instanceMatrix[3][0] * 0.37 + instanceMatrix[3][1] * 0.11 + instanceMatrix[3][2] * 0.53;
  // Размер стены в км.
  vSize = vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz));
  // Насколько стена смотрит на камеру (1 — в лоб, 0 — ребром).
  vec4 w = modelMatrix * p;
  vec3 n = normalize(mat3(modelMatrix) * instanceMatrix[2].xyz);
  vFacing = abs(dot(n, normalize(cameraPosition - w.xyz)));
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,L0=`
precision highp float;
uniform sampler2D tNoise, tPerlin;
uniform float uTime, uAmount, uDark, uSpeed, uHoleIn, uDens, uAccForm, uAccFade;
// След курсора (MouseTrail ниже): R — свежесть следа в точке экрана.
uniform sampler2D tTrail;
uniform vec2 uRes;
uniform vec2 uHole;
uniform float uHoleR;
varying vec2 vUv;
varying float vSeed, vFacing, vFar, vAcc;
varying vec2 vSize;

// Шум с разбросом ~0.07 вокруг 0.5 — в единицы разброса.
float z(float v) { return (v - 0.5) * 14.0; }

void main() {
  float W = vSize.x, H = vSize.y;
  vec2 km = vUv * vSize;
  vec2 p = km + vSeed * 3.1;
  float time = uTime * 0.5 * uSpeed;
  // Характер яруса — по его месту в мире (vFar: 0 — у камеры, 1 — у
  // горизонта), не по положению камеры: ближние резче и светлее, дальние
  // мягче и голубее.
  float soft = mix(0.035, 0.16, vFar);
  // Край гряды: крупная волна, зубцы и пух (в км) — шум двумерный: клубы,
  // а не столбики. Медленно плывёт по времени.
  float nc = z(texture2D(tNoise, p * 0.035 + vec2(0.004, 0.0) * time).r);
  float nf = z(texture2D(tNoise, p * 0.16 + vec2(-0.004, -0.02) * time).r);
  float nx = z(texture2D(tNoise, p * 0.55 + vec2(0.01, -0.01) * time).r);
  float pz = z(texture2D(tPerlin, p * 0.05 - 0.004 * time).r);
  // НЕ РЯДАМИ (из пятого захода): гребень плавно поднимается и опускается
  // по ширине (очень крупный перлин, ±3 % высоты) и местами проседает на
  // пятую часть — там виден ярус за ним. Больше — уже «горы облаков»
  // (заказчик). Ветер — прежний, как у образца (рисунок плывёт вверх по
  // стене); эти крупные формы лишь чуть сползают вбок.
  float sky = z(texture2D(tPerlin, vec2(p.x * 0.012 + 0.0004 * time, vSeed * 0.37)).r);
  float dipN = z(texture2D(tNoise, vec2(p.x * 0.02 + 0.0006 * time, vSeed * 0.71)).r);
  float dip = smoothstep(-0.5, -1.5, dipN);
  float E = H * (0.8 + 0.03 * sky + 0.035 * nc + 0.02 * pz - 0.2 * dip) + 0.11 * nf + 0.035 * nx;
  // К концам куска гребень чуть опускается, а сам конец растворяется по
  // пуху — без отвесного среза («горы облаков» с крутыми склонами — нет).
  float sx = vUv.x + 0.03 * nf;
  float taper = smoothstep(0.0, 0.3, sx) * smoothstep(1.0, 0.7, sx);
  E *= 0.7 + 0.3 * taper;
  // КУРСОР (заказчик 2026-11-05: «на ховер в месте курсора облака как бы
  // растворялись или разъезжались немного»): под следом гребень чуть
  // оседает (гряда «расступается»), ниже — тело редеет с рваным краем.
  float trl = texture2D(tTrail, gl_FragCoord.xy / uRes).r;
  // Вдвое слабее первой пробы (заказчик: «слишком сильный эффект»).
  E -= 0.11 * H * trl;
  // Облако за раскрывашками: гребень поднимается, пока оно сгущается.
  if (vAcc > 0.5) E *= mix(0.35, 1.0, uAccForm);
  float clouds = smoothstep(E + soft, E - soft, km.y);
  // ТЕЛО — сплошное до самого низа (у образца — alpha += внутренний
  // прямоугольник): низ яруса прячется под гребнем ближнего, и между
  // грядами нет голой земли. Сходит на нет только у самого низа.
  clouds *= smoothstep(0.0, 0.06 * H, km.y + 0.02 * H * nc);
  // Бока растворяются неровно, по пуху — без отвесного среза.
  float sxf = sx + 0.04 * nx;
  clouds *= smoothstep(0.0, 0.14, sxf) * smoothstep(1.0, 0.86, sxf);
  // Ребром к камере — гаснет (у образца: smoothstep по нормали в кадре).
  clouds *= smoothstep(0.08, 0.25, vFacing);

  // Объём: светлый гребень, серо-голубое тело, к низу темнее — это тень под
  // гребнем ближнего яруса, она и отделяет ярусы друг от друга.
  float dd = (E - km.y) / max(H, 0.001);
  float lightness = smoothstep(0.16, 0.0, dd) - 0.35 * smoothstep(0.35, 0.9, dd);
  lightness = clamp(0.35 + 0.65 * lightness + 0.05 * nx + 0.03 * nc, 0.0, 1.0);
  vec3 c0 = vec3(0.620, 0.666, 0.710);
  vec3 c1 = vec3(0.760, 0.792, 0.820);
  vec3 c2 = vec3(0.950, 0.960, 0.968);
  vec3 shadow = mix(c0, c1, 0.3);
  vec3 color = lightness < 0.5 ? mix(shadow, c1, lightness * 2.0) : mix(c1, c2, lightness * 2.0 - 1.0);
  // Дальние — голубее и без резких светов (воздушная дымка).
  color = mix(color, mix(c1, c0, 0.25), 0.45 * vFar);
  color = mix(color, color * vec3(0.16, 0.2, 0.28), uDark);

  // РЕЖЕ (заказчик 2026-11-05: «можно их сделать не такими густыми»):
  // по ярусу — крупные «просветы» (шум в км стены, плывёт с рисунком):
  // тело местами редеет на две трети, гребень остаётся ярким; общая
  // плотность ярусов — uDens (0.55).
  float air = smoothstep(-0.6, 1.4, z(texture2D(tNoise, p * 0.028 + vec2(0.37, 0.11) * vSeed + vec2(0.002, 0.0) * time).r));
  float body = mix(1.0, 1.0 - 0.65 * air, smoothstep(0.08, 0.3, dd));

  // НАД ГОРОДОМ — НЕ ОКНО (заказчик: «чтобы не выглядело типа как дырка
  // над картой»). Прежде — круг с рваным краем и стеной облаков вокруг.
  // Теперь облака редеют к Пардубицам постепенно: расстояние до города
  // искажено крупным медленным шумом (форма просвета неровная, без
  // кольца), и внутри остаются клочья — по своему шуму, плывут.
  vec2 px = gl_FragCoord.xy;
  float r = length(px - uHole) / max(uHoleR, 1.0);
  vec2 sp = px / uRes.y;
  float w1 = texture2D(tNoise, sp * 0.22 + vec2(0.0025, 0.0006) * uTime).r - 0.5;
  float w2 = texture2D(tNoise, sp * 0.9 + vec2(-0.004, 0.001) * uTime).r - 0.5;
  float thin = smoothstep(0.1, 1.6, r + 4.0 * w1 + 1.2 * w2);
  float wisp = smoothstep(-0.2, 1.6, z(texture2D(tNoise, sp * 0.55 + vec2(0.006, 0.002) * uTime).r));
  float near = mix(uHoleIn + 0.22 * wisp, 1.0, thin);
  // Облако за раскрывашками — у самого города: просвет над Пардубицами его
  // почти не трогает (заказчику там нужно «чуть больше облаков»), и оно
  // плотнее прочих (×1.45): при общей разреженности иначе не читалось.
  if (vAcc > 0.5) near = max(near, 0.8) * 1.45;
  float alpha = clouds * body * uDens * mix(0.95, 0.82, vFar) * near * uAmount;
  alpha *= 1.0 - 0.38 * smoothstep(0.15, 0.85, trl + 0.35 * (air - 0.5));
  // Сгущение — с клочьев: сначала там, где «просветов» нет, затем всё тело;
  // таяние — обратно, по тому же шуму, без ровного угасания плашкой.
  if (vAcc > 0.5) {
    alpha *= smoothstep(0.0, 1.0, 1.7 * uAccForm - 0.7 * air);
    alpha *= 1.0 - smoothstep(0.0, 1.0, uAccFade * (1.5 - 0.8 * air));
  }
  gl_FragColor = vec4(color * alpha, alpha);
}
`,z0=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,H0=`
precision highp float;
uniform sampler2D tNoise;
uniform float uTime, uAmount, uDark, uTop, uVeil;
uniform sampler2D tTrail;
uniform vec2 uRes, uHole;
uniform float uHoleR;
float z(float v) { return (v - 0.5) * 14.0; }
void main() {
  vec2 px = gl_FragCoord.xy;
  vec2 s = px / uRes;
  float slow = z(texture2D(tNoise, px / uRes.y * 0.06 + vec2(0.0015, 0.0) * uTime).r);
  vec3 c0 = vec3(0.620, 0.666, 0.710);
  vec3 c1 = vec3(0.760, 0.792, 0.820);
  vec3 c2 = vec3(0.950, 0.960, 0.968);
  float r = length(px - uHole) / max(uHoleR, 1.0);
  // Просвет над городом — тот же неровный спад, что у ярусов, без кольца.
  vec2 sp = px / uRes.y;
  float w1 = texture2D(tNoise, sp * 0.22 + vec2(0.0025, 0.0006) * uTime).r - 0.5;
  float open = smoothstep(0.15, 1.9, r + 4.0 * w1);
  vec3 color;
  float alpha;
  if (uVeil > 0.5) {
    // Вуаль под текстом: левая колонка (как uTextL вывода: до ~45 % ширины).
    float m = smoothstep(0.0, 0.08, s.x) * smoothstep(0.5, 0.36, s.x);
    color = mix(c1, c2, 0.75);
    alpha = 0.34 * m * open;
  } else {
    float hz = uTop < 1e5 ? smoothstep(uTop - 0.4 * uRes.y, uTop, px.y) : 0.0;
    float low = smoothstep(0.35, 0.0, s.y);
    color = mix(mix(c1, c2, 0.55), mix(c0, c1, 0.7), hz);
    // Реже (заказчик): ровная пелена тоньше — между грядами видна земля.
    alpha = (0.1 + 0.3 * hz + 0.12 * low + 0.02 * slow) * mix(0.3, 1.0, open);
  }
  color = mix(color, color * vec3(0.16, 0.2, 0.28), uDark);
  // След курсора: ровная пелена под ним тоже редеет, немного.
  alpha *= 1.0 - 0.25 * texture2D(tTrail, px / uRes).r;
  alpha *= uAmount;
  gl_FragColor = vec4(color * alpha, alpha);
}
`,E0=10,N0={cam:-9.5,d0:2.6,k:1.24,n:12,hK:.42,hMax:5,lean0:.85,lean1:.25,wK:2.4};function I0(e=N0){const t=[];let a=e.d0;for(let l=0;l<e.n;l++){const o=l/(e.n-1),r=Math.min(e.hMax,e.hK*a+.6)*(1+.18*Math.sin(l*2.3+.7)),u=e.wK*a+6,v=-.25*a+(l%2?1:-1)*.08*a,m=.35+.3*(.5+.5*Math.sin(l*1.9+.4)),s=.12*u,i=m*u+s,c=(1-m)*u+s,n=[{off:-u/2+i/2,ww:i,da:0,hk:1},{off:u/2-c/2,ww:c,da:.12*a*(l%2?1:-1),hk:.88+.2*(.5+.5*Math.sin(l*3.1))}];for(const p of n)t.push({a:e.cam+a+p.da,b:v+p.off,w:p.ww,h:r*p.hk,base:-.3,yaw:(l%2?1:-1)*(3+2*(l%3))+(p.da?-4:0),lean:e.lean0+(e.lean1-e.lean0)*o,far:o,par:1-.95*Math.pow(o,.7)});a*=e.k*(1+.12*Math.sin(l*1.7+.3))}return t}const W0={a:-7.4,b:-1,w:13,h:2.6,base:-.2,yaw:0,lean:0,far:0,par:0},O0={a:-1.75,b:-.4,w:6,h:3.4,base:-.4,yaw:0,lean:.7,far:.15,par:0,acc:1},G0={tiers:[...I0(),W0,O0]},B0=`
precision highp float;
uniform sampler2D tLast, tNoise;
uniform vec2 uMouse, uRes;
uniform float uTime, uKeep, uGain, uOn, uR;
// Без следа под текстом (заказчик 2026-11-05: «эффект не должен действовать
// под текстовыми секциями»): до 8 прямоугольников текста (0…1 по кадру,
// y снизу) с растушёвкой uFeather; внутри след обнуляется — и новый круг,
// и растёкшийся из соседних мест.
uniform vec4 uRects[8];
uniform vec2 uFeather;
float textMask(vec2 uv) {
  float m = 0.0;
  for (int i = 0; i < 8; i++) {
    vec4 r = uRects[i];
    if (r.z <= r.x) continue;
    vec2 a = smoothstep(r.xy - uFeather, r.xy, uv) * smoothstep(r.zw + uFeather, r.zw, uv);
    m = max(m, a.x * a.y);
  }
  return m;
}
void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float n = texture2D(tNoise, uv * 1.7 + uTime * 0.01).r * 2.0 - 1.0;
  vec2 d = vec2(n * 0.004, 0.0), e = vec2(0.0, n * 0.004);
  float last = 0.25 * (texture2D(tLast, uv + d).r + texture2D(tLast, uv - d).r + texture2D(tLast, uv + e).r + texture2D(tLast, uv - e).r);
  vec2 q = (uv - uMouse) * vec2(uRes.x / uRes.y, 1.0);
  float c = smoothstep(uR, 0.0, length(q)) * uOn;
  // Нарастание — так же плавно, как спад (заказчик: «малейшее движение —
  // и под курсором моментально дырка, а возвращается плавно; надо так же
  // в обе стороны»): под курсором след не гаснет и подходит к 1 по
  // экспоненте (uGain — доля шага, ~0.35 с), вне его — гаснет (uKeep,
  // ~0.45 с). Быстрый мах оставляет лишь слабый след, задержка курсора —
  // плавно углубляет.
  float v = last * mix(uKeep, 1.0, c);
  v += uGain * c * (1.0 - v);
  v *= 1.0 - textMask(uv);
  gl_FragColor = vec4(min(v, 1.0), 0.0, 0.0, 1.0);
}
`;function K0(e){const t={type:bo,depthBuffer:!1,minFilter:ut,magFilter:ut};let a=new Ia(1,1,t),l=new Ia(1,1,t);const o={tLast:{value:a.texture},tNoise:{value:e},uMouse:{value:new ve(-1,-1)},uRes:{value:new ve(1,1)},uTime:{value:0},uKeep:{value:1},uGain:{value:0},uOn:{value:0},uR:{value:.07},uRects:{value:Array.from({length:8},()=>new Ke)},uFeather:{value:new ve(.02,.03)}},r=new ue(At(),new te({vertexShader:"void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:B0,uniforms:o,depthTest:!1,depthWrite:!1}));r.frustumCulled=!1;const u=new Xa;u.add(r);const v=new Xo,m=typeof matchMedia<"u"?matchMedia("(prefers-reduced-motion: reduce)"):null;let s=-1,i=-1,c=-1e9,n=0,p=!1,h=!1,S=!1;const R=L=>{L.pointerType==="touch"||m?.matches||(s=L.clientX,i=L.clientY,c=performance.now(),h=!0)},H=()=>{h=!1};function N(L){if(L===S||typeof window>"u")return;S=L;const _=L?"addEventListener":"removeEventListener";window[_]("pointermove",R,{passive:!0}),document.documentElement[_]("pointerleave",H),window[_]("blur",H),L||(h=!1)}function E(){const L=document.querySelector("canvas.canvas-earth");return L?L.getBoundingClientRect():{left:0,top:0,width:innerWidth,height:innerHeight}}const C=".statement, .section-lead, .acc-areas, .arrow-link, .values__text, .values__close";let P=[],k=-1e9;function O(L,_){L-k>2e3&&(P=[...document.querySelectorAll(C)],k=L);const f=_.width||1,M=_.height||1;o.uFeather.value.set(32/f,32/M);let w=0;for(const y of P){if(w>=8)break;const d=y.getBoundingClientRect();d.width<1||d.bottom<_.top||d.top>_.top+M||o.uRects.value[w++].set((d.left-_.left)/f,1-(d.bottom-_.top)/M,(d.right-_.left)/f,1-(d.top-_.top)/M)}for(;w<8;w++)o.uRects.value[w].set(0,0,0,0)}return{listen:N,step(L,_,f,M){const w=Math.max(1,Math.round(_*.5)),y=Math.max(1,Math.round(f*.5));(a.width!==w||a.height!==y)&&(a.setSize(w,y),l.setSize(w,y),p=!1);const d=performance.now(),T=h;if(!h&&d-c>2500){if(!p){for(const I of[a,l])L.setRenderTarget(I),L.setClearColor(0,0),L.clear(!0,!1,!1);p=!0}return n=0,a.texture}p=!1;const b=n?Math.min(.1,Math.max(0,(d-n)/1e3)):.016;n=d,o.uKeep.value=Math.exp(-b/.45),o.uGain.value=1-Math.exp(-b/.35),o.uOn.value=T?1:0;const x=E();s<0&&i<0?o.uMouse.value.set(-1,-1):o.uMouse.value.set((s-x.left)/(x.width||1),1-(i-x.top)/(x.height||1)),o.uRes.value.set(w,y),o.uTime.value=M,o.tLast.value=a.texture,O(d,x),L.setRenderTarget(l),L.render(u,v);const D=a;return a=l,l=D,a.texture}}}function U0({noise:e,perlin:t,frame:a}){for(const M of[e,t])M.wrapS=M.wrapT=$a,M.magFilter=ut,M.needsUpdate=!0;const l={tNoise:{value:e},tPerlin:{value:t},uTime:{value:0},uAmount:{value:0},uDark:{value:0},uSpeed:{value:1},uRes:{value:new ve(1,1)},uHole:{value:new ve},uHoleR:{value:1},uTop:{value:1e6},uDens:{value:.55},tTrail:{value:null},uAccDrift:{value:0},uAccForm:{value:0},uAccFade:{value:0},uScroll:{value:0},uLat:{value:0},uRise:{value:.18},uRight:{value:new V}},o=new Xa,r=new gt;r.matrixAutoUpdate=!1,r.matrix.copy(a),o.add(r);const u=At();for(const[M,w,y]of[["haze",0,-3],["veil",1,5]]){const d=new ue(u,new te({vertexShader:z0,fragmentShader:H0,uniforms:{...l,uVeil:{value:w}},transparent:!0,depthWrite:!1,depthTest:!1,...Ce}));d.frustumCulled=!1,d.renderOrder=y,d.name=M,o.add(d)}const v=new sa(1,1),m=32,s=new te({vertexShader:D0,fragmentShader:L0,uniforms:{...l,uHoleIn:{value:.1}},transparent:!0,depthWrite:!1,depthTest:!1,side:Tt,...Ce}),i=new Vo(v,s,m),c=new Ra(new Float32Array(m),1);i.geometry.setAttribute("aFar",c);const n=new Ra(new Float32Array(m),1);i.geometry.setAttribute("aPar",n);const p=new Ra(new Float32Array(m),1);i.geometry.setAttribute("aAcc",p),i.frustumCulled=!1,r.add(i);const h=E0*Math.PI/180,S=new V(Math.sin(h),0,-Math.cos(h)),R=new V(Math.cos(h),0,Math.sin(h));l.uRight.value.copy(R);const H=new ia,N=new ro,E=new ro,C=new V,P=new V,k=new V,O=new V(1,0,0),L=new V(0,1,0);function _(M=G0){const w=[...M.tiers].sort((y,d)=>d.a-y.a).slice(0,m);i.count=w.length,w.forEach((y,d)=>{N.setFromAxisAngle(L,-h-(y.yaw||0)*Math.PI/180),E.setFromAxisAngle(O,-(y.lean||0)),N.multiply(E),k.set(0,1,0).applyQuaternion(N),C.copy(S).multiplyScalar(y.a).addScaledVector(R,y.b),C.y=y.base||0,C.addScaledVector(k,.5*y.h),P.set(y.w,y.h,1),H.compose(C,N,P),i.setMatrixAt(d,H),c.setX(d,y.far||0),n.setX(d,y.par||0),p.setX(d,y.acc?1:0)}),i.instanceMatrix.needsUpdate=!0,c.needsUpdate=!0,n.needsUpdate=!0,p.needsUpdate=!0}_();const f=K0(e);return{scene:o,uniforms:l,accKm:.6,dustK:2.2,trail:f,preRender(M,w,y){l.tTrail.value=f.step(M,w,y,l.uTime.value)}}}const Po=[{t:0,lat:Y.lat-.012,lon:Y.lon,d:6.5,tilt:74,head:-30,sx:.3,sy:.02},{t:1,lat:Y.lat-.008,lon:Y.lon,d:7.2,tilt:70,head:-20,sx:.3,sy:0},{t:2,lat:Y.lat-.004,lon:Y.lon,d:8.4,tilt:62,head:-9,sx:.3,sy:0},{t:3,lat:Y.lat,lon:Y.lon,d:9.6,tilt:52,head:2,sx:.3,sy:0},{t:4,lat:Y.lat,lon:Y.lon,d:11,tilt:46,head:12,sx:.8,sy:-.22},{t:4.5,lat:Y.lat,lon:Y.lon-.05,d:75,tilt:32,head:8,sx:.55,sy:-.26},{t:5,lat:49.85,lon:15.45,d:780,tilt:14,head:0,sx:.32,sy:-.2},{t:5.5,lat:50,lon:14.2,d:2300,tilt:6,head:0,sx:.3,sy:-.1},{t:6,lat:49,lon:12,d:5600,tilt:0,head:0,sx:.3,sy:0},{t:7,lat:38,lon:9,d:23e3,tilt:0,head:0,sx:.32,sy:0},{t:8,lat:30,lon:-4,d:34e3,tilt:0,head:0,sx:1.2,sy:.95}],q0=Po.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),Et={lat:Y.lat,lon:Y.lon,head:10.2},_a={...Et,d:11,tilt:46,sx:.62,sy:-.08},Do=[{t:0,...Et,d:12.5,tilt:76,sx:.3,sy:0},{t:1,...Et,d:11.2,tilt:72,sx:.3,sy:0},{t:2,...Et,d:11,tilt:56,sx:.5,sy:-.04},{t:2.5,..._a},{t:3,..._a},{t:4,..._a},...Po.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],j0=[...Do.filter(e=>e.t<=4).map(e=>({...e,sx:0,sy:-.12})).map(e=>e.t===2?{...e,d:16}:e.t===2.5?{...e,d:19}:e.t===3||e.t===4?{...e,d:22}:e),...q0.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],Ht=1.5,$0=[{t:0,lat:Y.lat-.012,lon:Y.lon,d:8,tilt:80,sx:.3,sy:.02},{t:1,lat:Y.lat-.008,lon:Y.lon,d:8.5,tilt:76,sx:.3,sy:0}];function V0(e,t){const a=Vt(e),l=c=>({t:c,...a(c,{})}),o=$0.map(c=>t?{...c,sx:0,sy:-.12}:c),r=[...o,l(Ht),l(Ht+.3)],u=Vt(r.map(({head:c,...n})=>n)),v={lat:Y.lat,lon:Y.lon,head:10.2,sx:t?0:.69,sy:t?-.12:-.05},m=Vt([[0,12.5,76],[1,11.2,72],[2,9.4,62],[2.5,8.3,53],[3,7.48,47.5],[4,7.48,47.5]].map(([c,n,p])=>({t:c,...v,d:n,tilt:p}))),s=c=>{const n=m(c,{});return delete n.head,{t:c,...n}},i=Vt([...o,s(Ht),s(Ht+.3)]);return(c,n)=>c>=Ht?a(c,n):(c<=1?i(c,n):u(c,n),n.head=Et.head,n)}const X0=Math.PI,Y0={tech:"#78d0e6",city:"#86a9cf",mapInk:"#7d9dc0",house:"#8fb0d2",mark:"#e2b04a",grid:"#3fd0e0"},Z0=`
uniform vec2 uDrift;
uniform float uFly;
// Доля перевода зерна в неоновый синий dots (заказчик: «в неоновый цвет
// эти частицы лучше переводить уже вот в этом моменте, не раньше» — когда
// фон уже темнеет и зерно садится на карту). До того зерно цвета облака.
uniform float uNeon;
float dustHash(vec2 g) { return fract(sin(dot(g, vec2(12.9898, 78.233))) * 43758.5453); }
void dustAt(vec2 grid, vec2 sub, out vec2 s, out float d, out vec4 cl) {
  vec2 cellN = vec2(uStep / 12.0 * 1.04);
  vec2 s0 = vec2(grid.x, -grid.y) / 12.0 * 1.04 + sub * cellN + uDrift;
  cl = texture2D(tCloud, s0 * 0.5 + 0.5);
  float h1 = dustHash(grid + sub * 7.1);
  d = clamp((uDust - 0.3 - 0.1 * h1) / 0.6, 0.0, 1.0) * 0.7 + 0.3 * step(0.3, uDust);
  // Пока облако становится точками, они на узлах (шатры сходятся в облако);
  // расходясь, сдвигаются во всю клетку — решётка не читается.
  vec2 sc = vec2(fract(h1 * 91.7 + 0.31), fract(h1 * 53.1 + 0.7)) - 0.5;
  s = s0 + sc * cellN * 0.9 * smoothstep(0.3, 1.0, d);
}
// Доля полёта: старт у всех разом (разброс 0.06), путь дольше у дальних
// от карты (rr — расстояние до середины карты, 0…1).
float dustFly(float rr, float h) {
  float f = clamp((uFly - 0.06 * h) / (0.4 + 0.5 * rr), 0.0, 1.0);
  return f * f * (3.0 - 2.0 * f);
}
`,Q0=`
attribute vec2 aGrid;
attribute vec2 aMap;
attribute float aLum;
uniform float uTime;
uniform float uAsm;
uniform float uWave;
uniform float uSize;
uniform float uFocal;
uniform float uFar;
uniform float uStep;
// Гибрид ink → dots: точки начинают не с поля, а с экрана — пылью облаков.
uniform float uScr;
uniform float uDust;
uniform float uCloudA;
uniform float uDustL;
uniform vec2 uRes;
uniform sampler2D tCloud;
varying float vLum;
varying float vA;
varying float vTech;
varying float vWhite;
${Z0}

float wave(vec2 p, float t) {
  return 0.34 * sin(p.x * 0.38 + t * 0.55) * cos(p.y * 0.29 - t * 0.4)
       + 0.16 * sin((p.x + p.y) * 0.71 - t * 0.9)
       + 0.07 * sin(length(p - vec2(2.0, -3.0)) * 1.3 - t * 1.4);
}

void main() {
  vWhite = 0.0;
  float r = clamp(length(aGrid) / 12.0, 0.0, 1.0);
  // Очередь — ТОЛЬКО по кольцу, без случайного разброса: соседи летят
  // вместе, и поле стягивается к городу сплошным полотном. Разброс по зерну
  // делал из схода пыль: в одном месте одна точка уже в полёте, соседняя
  // ещё на поле.
  float a = clamp((uAsm - r * 0.35) / 0.65, 0.0, 1.0);
  a = a * a * (3.0 - 2.0 * a);
  float h = wave(aGrid, uTime) * uWave;
  vec3 g = vec3(aGrid.x, h, aGrid.y);
  vec3 m = vec3(aMap.x, 0.006, aMap.y);
  vec3 p = mix(g, m, a);
  // Лёгкая дуга по длине пути, одинаковая у соседей. Прежняя дуга
  // со случайной высотой до 1.25 км выносила точки в небо над текстом.
  p.y += sin(a * 3.14159265) * 0.03 * distance(aGrid, aMap);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float dist = -mv.z;
  // Точка не мельче двух пикселей: единичная точка то попадает в пиксель,
  // то делится между двумя и мигает при сдвиге камеры. Меньший размер
  // отдаётся яркостью (площадь), и полотно светит так же.
  float sz = uSize * uFocal / dist;
  gl_PointSize = clamp(sz, 2.0, 5.0);
  float cover = min(1.0, (sz * sz) / 4.0);
  // Гребни волны — светлее: волна читается светом, а не только формой.
  float crest = clamp(0.7 + h * 1.8, 0.35, 1.25);
  vTech = 1.0 - a;
  vLum = mix(crest, 0.35 + 0.65 * aLum, a);
  // Дальние точки гаснут: поле уходит в темноту, а не в край.
  vA = 1.0 - smoothstep(uFar * 0.55, uFar, dist);
  // Точки фона вне города после сборки — тише (их место занял город).
  vA *= mix(1.0, 0.85, a) * cover;
  // РЕШЁТКА ГАСНЕТ ТАМ, ГДЕ ЕЁ ШАГ НА ЭКРАНЕ МЕНЬШЕ 3–6 ПИКСЕЛЕЙ. Вдали,
  // под скользящим взглядом, ряды сходятся теснее двух размеров точки, и сдвиг
  // камеры на полпикселя гонит по полю муар — покадровый замер дал от
  // него ~6 500 вспыхивающих пикселей на кадр. Шаг меряется с учётом
  // ракурса (ряды сжимаются по синусу угла к полу). В собранном городе
  // точки стоят не решёткой — там это не нужно.
  vec3 upV = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
  float el = abs(dot(upV, normalize(mv.xyz)));
  float gap = uStep * uFocal / dist * max(el, 0.05);
  vA *= mix(smoothstep(3.0, 6.0, gap), 1.0, a);
  // Край поля — в темноту, иначе дальний край решётки читается линией.
  // По ТЕКУЩЕМУ месту точки, а не по её узлу: край поля — это место,
  // а не свойство точки. Иначе точки с края (их больше половины) были
  // невидимы и загорались по пути — город появлялся «из ниоткуда».
  float edge = max(abs(p.x), abs(p.z)) / 12.0;
  vA *= 1.0 - smoothstep(0.62, 0.98, edge);
  // КРАЙ КАРТЫ ГОРОДА — БЕЗ КВАДРАТА (заказчик 2026-10-31: «цифровая пыль
  // ложится чётким квадратом, границы которого видны»). Места точек берутся
  // из подложки ±HALF_KM, и редкая пыль по тёмному заполняла квадрат до края:
  // его сторона читалась ровной линией. Теперь точка на месте гаснет по
  // расстоянию от середины города — кругом, с порогом по хешу у каждой
  // (0.5–0.8 полуширины, сход 0.25): поле пыли редеет к краю вразброс и
  // к стороне квадрата сходит на нет. Середина города (кольца) не тронута.
  float cr = length(aMap) / ${Ne.toFixed(2)};
  float ch = fract(sin(dot(aGrid, vec2(41.31, 289.17))) * 43758.5453);
  float cth = 0.5 + 0.3 * ch;
  vA *= mix(1.0, 1.0 - smoothstep(cth, cth + 0.25, cr), a);

  // ГИБРИД ink → dots: ТОЧКА ГОРОДА ПРИЛЕТАЕТ С МЕСТА ОБЛАКА. Здесь выше
  // точка уже на своём месте в городе (uAsm = 1); начало — узел поля на
  // экране (DUST_AT). Пары «узел — место» те же, что у поля: соседи на
  // экране остаются соседями на карте, и поток сходится; летит по очереди
  // от карты наружу, лёгкой дугой. Видна только на подлёте — до того пыль
  // рисует вывод облаков (clouds.js).
  if (uScr > 0.0) {
    vec2 s; float dt; vec4 cl;
    dustAt(aGrid, vec2(-0.25), s, dt, cl);
    float hs = dustHash(aGrid);
    float dens = cl.a / max(uCloudA, 0.001);
    vec4 c0 = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec2 mc = c0.xy / c0.w;
    // СРОК ПОЛЁТА — НЕ ТОЛЬКО ПО РАССТОЯНИЮ (заказчик 2026-10-31: «видишь
    // границу слева чёткую… почти перед самым концом перехода»). Узлы и места
    // разложены полосами по x (buildCity), а на широком кадре весь левый край
    // экрана упирался в rr = 1: западная половина города (вся, что западнее
    // железной дороги) садилась последней и одним мигом — пыль подлёта стояла
    // плотной полосой и обрывалась ровной линией по дороге. Теперь rr за 0.8
    // мягко насыщается к 1 (без обреза), а срок на 70 % — случайный по
    // точке: дальние в среднем по-прежнему позже, но фронт размыт по всему
    // городу, и пыль садится постепенно. Самый долгий путь тот же
    // (0.06 + 0.4 + 0.5) — к uFly 1 сели все.
    float rr = length((s - mc) * vec2(uRes.x / uRes.y, 1.0)) / 2.4;
    rr = rr < 0.8 ? rr : 0.8 + 0.2 * (1.0 - exp((0.8 - rr) / 0.2));
    rr = mix(rr, fract(hs * 71.37 + 0.13), 0.7);
    float f = dustFly(rr, hs);
    float g = uNeon;
    vec2 mN = gl_Position.xy / gl_Position.w;
    vec2 d = mN - s;
    vec2 q = mix(s, mN, f) + vec2(-d.y, d.x) * sin(f * 3.14159265) * 0.12;
    // Глубина: пока пыль не села вся, точки у ближней плоскости — летят над
    // кадром, и предпроход глубины рисунка ink (рельеф) их не режет. После
    // сборки (uScr 0) — глубина своего места, как у dots.
    gl_Position = vec4(q * gl_Position.w, -0.999 * gl_Position.w, gl_Position.w);
    // Размер в пути — как у пыли облаков.
    gl_PointSize = mix(2.2, gl_PointSize, f);
    // Пыль под колонкой текста тише (как затемнение под текстом у Земли).
    // Точка проступает на подлёте, где пыль облаков гаснет.
    float dA = smoothstep(0.85, 1.0, f) * mix(uDustL, 1.0, smoothstep(-0.85, -0.1, q.x));
    // Яркость по плотности облака; в полёте ярче —
    // поток читается светящимися струями, как сход поля у dots.
    vLum = mix(0.9 + 1.0 * dens, vLum, f) + 0.7 * sin(f * 3.14159265);
    vTech = 1.0 - f;
    vA = mix(dA, vA, f);
    // До неонового момента севшая точка — светлая, цвета облака.
    vWhite = 1.0 - g;
  }
}
`,J0=`
uniform vec3 uTechCol;
uniform vec3 uMapCol;
uniform float uAlpha;
varying float vLum;
varying float vA;
varying float vTech;
varying float vWhite;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float d = dot(q, q);
  if (d > 1.0) discard;
  float k = (1.0 - d) * (1.0 - d);
  vec3 c = mix(mix(uMapCol, uTechCol, vTech), vec3(0.9, 0.93, 1.0), vWhite) * vLum;
  gl_FragColor = vec4(c * k * vA * uAlpha, 1.0);
#ifdef GLOW
  // Гибрид: свет на прозрачном холсте должен нести свою альфу (не меньше
  // самого яркого канала): Chrome при сведении холста с умноженной альфой
  // режет цвет до альфы, и точка там, где под ней холст пуст, пропадала.
  gl_FragColor.a = min(1.0, max(gl_FragColor.r, max(gl_FragColor.g, gl_FragColor.b)));
#endif
}
`,el=`
uniform float uTime;
uniform float uWave;
uniform float uFar;
uniform float uFocal;
uniform float uGap;
varying float vA;
varying float vRun;
float wave(vec2 p, float t) {
  return 0.34 * sin(p.x * 0.38 + t * 0.55) * cos(p.y * 0.29 - t * 0.4)
       + 0.16 * sin((p.x + p.y) * 0.71 - t * 0.9)
       + 0.07 * sin(length(p - vec2(2.0, -3.0)) * 1.3 - t * 1.4);
}
void main() {
  vec2 g = position.xz;
  vec3 p = vec3(g.x, wave(g, uTime) * uWave, g.y);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float edge = max(abs(g.x), abs(g.y)) / 12.0;
  vA = (1.0 - smoothstep(uFar * 0.55, uFar, -mv.z)) * (1.0 - smoothstep(0.55, 0.95, edge));
  // То же для линий: где соседние линии ближе десятка пикселей — гаснут
  // (вдали тонкие линии сливаются и рябят).
  vec3 upV = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
  float el = abs(dot(upV, normalize(mv.xyz)));
  vA *= smoothstep(6.0, 14.0, uGap * uFocal / -mv.z * max(el, 0.05));
  // Бегущая вспышка: вдоль ряда (position.y хранит, ряд это или столбец).
  float along = position.y > 0.5 ? g.y : g.x;
  vRun = along * 0.09 - uTime * 0.16 + fract(sin(dot(floor(g * 0.0625 + 0.5), vec2(12.9, 78.2))) * 437.5);
}
`,tl=`
uniform vec3 uCol;
uniform float uAlpha;
varying float vA;
varying float vRun;
void main() {
  float f = fract(vRun);
  float pulse = smoothstep(0.86, 0.995, f) * (1.0 - smoothstep(0.995, 1.0, f));
  float a = vA * uAlpha * (0.16 + 1.1 * pulse);
  gl_FragColor = vec4(uCol * a, 1.0);
}
`,al=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ol=`
uniform sampler2D uMap;
uniform vec3 uInk;
uniform vec3 uBase;
uniform float uAlpha;
varying vec2 vUv;
void main() {
  float l = texture2D(uMap, vUv).g;
  // Край карты — мягкий круг: город растворяется в поле, а не обрезан.
  float r = length(vUv - 0.5) * 2.0;
  float edge = 1.0 - smoothstep(0.62, 0.98, r);
  vec3 c = mix(uBase, uInk, pow(l, 0.85));
  float a = uAlpha * edge * (0.55 + 0.45 * smoothstep(0.02, 0.2, l));
  gl_FragColor = vec4(c, a);
}
`,ll=`
attribute float aTop;
attribute float aH;
attribute float aDel;
attribute float aSz;
uniform float uGrow;
uniform float uFar;
uniform float uFocal;
varying float vA;
varying float vTop;
void main() {
  float g = clamp((uGrow * 1.5 - aDel) / 0.5, 0.0, 1.0);
  g = g * g * (3.0 - 2.0 * g);
  vec3 p = position;
  p.y = aTop * aH * g + 0.004;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vA = g * (1.0 - smoothstep(uFar * 0.5, uFar, -mv.z));
  // Край карты — кругом и вразброс, как у точек (POINTS_VERT): дома у
  // стороны квадрата охвата не обрываются линией. Порог — по дому (aDel).
  float cth = 0.5 + 0.3 * fract(aDel * 97.13);
  vA *= 1.0 - smoothstep(cth, cth + 0.25, length(position.xz) / ${Ne.toFixed(2)});
  // ДОМ МЕЛЬЧЕ ДЕСЯТКА ПИКСЕЛЕЙ НЕ РИСУЕТСЯ. Контур в пару пикселей — это
  // отрезки короче пикселя, и при малейшем сдвиге камеры они то попадают
  // на пиксель, то нет: покадровый замер дал от них 90 % всех вспышек
  // над городом. Порог — по размеру дома на экране, а не по расстоянию:
  // крупный дом вдали остаётся, мелкий рядом — тоже.
  float px = aSz * uFocal / max(-mv.z, 0.001);
  vA *= smoothstep(7.0, 16.0, px);
  vTop = aTop;
}
`,nl=`
uniform vec3 uCol;
uniform float uAlpha;
varying float vA;
varying float vTop;
void main() {
  gl_FragColor = vec4(uCol * (0.45 + 0.55 * vTop) * vA * uAlpha, 1.0);
}
`,rl=`
uniform float uFocal;
uniform float uTime;
attribute float aSeed;
varying float vP;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  vP = fract(uTime * 0.35 + aSeed);
  gl_PointSize = clamp(0.32 * uFocal / -mv.z, 10.0, 46.0);
}
`,ul=`
uniform vec3 uCol;
uniform float uAlpha;
varying float vP;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q);
  float core = 1.0 - smoothstep(0.16, 0.24, r);
  float ring = (1.0 - smoothstep(0.03, 0.08, abs(r - (0.3 + 0.65 * vP)))) * (1.0 - vP);
  float a = (core + ring * 0.8) * uAlpha;
  if (a < 0.003) discard;
  gl_FragColor = vec4(uCol * a, 1.0);
}
`,Oa=new Mo(new Uint8Array(4),1,1);Oa.needsUpdate=!0;function sl(e,t,a){const l=new gt,{side:o,field:r,lite:u}=a,v={},m={blending:Ot,blendSrc:Oe,blendDst:Oe,blendSrcAlpha:Na,blendDstAlpha:Oe},s=Y0,i=A=>new Ve(s[A]),c=o*o,n=new Float32Array(c*2),p=r/o;for(let A=0;A<o;A++)for(let z=0;z<o;z++){const U=A*o+z;n[U*2]=(z+.5)*p-r/2,n[U*2+1]=(A+.5)*p-r/2}const h=e.lumaSize,S=new Float64Array(h*h);let R=0;for(let A=0;A<h*h;A++){const z=e.luma[A];R+=z>.05?z*z+.02:.003,S[A]=R}let H=1234567;const N=()=>(H=H*16807%2147483647)/2147483647,E=new Float32Array(c*2),C=new Float32Array(c);for(let A=0;A<c;A++){const z=N()*R;let U=0,De=h*h-1;for(;U<De;){const Je=U+De>>1;S[Je]<z?U=Je+1:De=Je}const Se=U%h,Qe=U/h|0,Fa=(Se+N())/h,Sa=(Qe+N())/h;E[A*2]=(Fa-.5)*Ne*2,E[A*2+1]=(Sa-.5)*Ne*2,C[A]=e.luma[U]}const P=A=>{const z=Array.from({length:c},(U,De)=>De);z.sort((U,De)=>A[U*2]-A[De*2]);for(let U=0;U<o;U++){const De=z.slice(U*o,(U+1)*o).sort((Se,Qe)=>A[Se*2+1]-A[Qe*2+1]);for(let Se=0;Se<o;Se++)z[U*o+Se]=De[Se]}return z},k=P(n),O=P(E),L=new Float32Array(c*2),_=new Float32Array(c*2),f=new Float32Array(c);for(let A=0;A<c;A++){const z=k[A],U=O[A];L[z*2]=n[z*2],L[z*2+1]=n[z*2+1],_[z*2]=E[U*2],_[z*2+1]=E[U*2+1],f[z]=C[U]}const M=new Ie;M.setAttribute("position",new G(new Float32Array(c*3),3)),M.setAttribute("aGrid",new G(L,2)),M.setAttribute("aMap",new G(_,2)),M.setAttribute("aLum",new G(f,1));const w=new te({vertexShader:Q0,fragmentShader:J0,uniforms:{uTime:{value:0},uAsm:{value:0},uWave:{value:1},uSize:{value:u?.05:.036},uFocal:{value:1e3},uFar:{value:30},uStep:{value:p},uTechCol:{value:i("tech")},uMapCol:{value:i("city")},uAlpha:{value:1},uScr:{value:0},uDust:{value:0},uFly:{value:0},uCloudA:{value:1},uDustL:{value:1},uRes:{value:new ve(1,1)},tCloud:{value:Oa},uDrift:{value:new ve},uNeon:{value:0}},defines:{...v,GLOW:1},transparent:!0,depthWrite:!1,depthTest:!0,blending:Ot,blendSrc:Oe,blendDst:Oe,blendSrcAlpha:Oe,blendDstAlpha:Oe}),y=new ca(M,w);y.name="points",y.frustumCulled=!1,y.renderOrder=2;const d=new sa(Ne*2,Ne*2);d.rotateX(-X0/2);const T=new te({vertexShader:al,fragmentShader:ol,uniforms:{uMap:{value:t},uInk:{value:i("mapInk")},uBase:{value:new Ve("#0a1626")},uAlpha:{value:0}},defines:v,transparent:!0,depthWrite:!1}),b=new ue(d,T);b.name="map",b.position.y=-.002,b.renderOrder=0,b.frustumCulled=!1;const x=e.houses,D=1.6/1e3;let I=0;for(let A=0;A<x.n;A++)u&&x.area[A]<400||(I+=x.cnt[A]*(x.h[A]>=11?2:1));const B=new Float32Array(I*6),K=new Float32Array(I*2),Z=new Float32Array(I*2),X=new Float32Array(I*2),be=new Float32Array(I*2);let xe=0;for(let A=0;A<x.n;A++){if(u&&x.area[A]<400)continue;const z=x.start[A],U=x.cnt[A],De=Math.max(3,x.h[A])*D;let Se=0,Qe=0;for(let pe=0;pe<U;pe++)Se+=x.u[z+pe],Qe+=x.v[z+pe];Se=(Se/U-.5)*2,Qe=(Qe/U-.5)*2;const Fa=Math.min(1,Math.hypot(Se,Qe))*.8+A*7919%97/97*.2,Sa=Math.sqrt(Math.max(30,x.area[A]))/1e3,Je=(pe,qt,jt)=>{B[xe*3]=(pe-.5)*Ne*2,B[xe*3+1]=0,B[xe*3+2]=(qt-.5)*Ne*2,K[xe]=jt,Z[xe]=De,X[xe]=Fa,be[xe]=Sa,xe++};for(let pe=0;pe<U;pe++){const qt=z+pe,jt=z+(pe+1)%U;Je(x.u[qt],x.v[qt],1),Je(x.u[jt],x.v[jt],1)}if(x.h[A]>=11)for(let pe=0;pe<U;pe++)Je(x.u[z+pe],x.v[z+pe],0),Je(x.u[z+pe],x.v[z+pe],1)}const Me=new Ie;Me.setAttribute("position",new G(B,3)),Me.setAttribute("aTop",new G(K,1)),Me.setAttribute("aH",new G(Z,1)),Me.setAttribute("aDel",new G(X,1)),Me.setAttribute("aSz",new G(be,1));const me=new te({vertexShader:ll,fragmentShader:nl,uniforms:{uGrow:{value:0},uFar:{value:30},uFocal:{value:1e3},uCol:{value:i("house")},uAlpha:{value:.55}},defines:v,transparent:!0,depthWrite:!1,...m}),g=new Wa(Me,me);g.name="houses",g.frustumCulled=!1,g.renderOrder=1;const Q=e.projects,J=new Float32Array(Q.length*3),Pe=new Float32Array(Q.length);Q.forEach((A,z)=>{J[z*3]=(A.u-.5)*Ne*2,J[z*3+1]=.03,J[z*3+2]=(A.v-.5)*Ne*2,Pe[z]=z/Q.length});const Ue=new Ie;Ue.setAttribute("position",new G(J,3)),Ue.setAttribute("aSeed",new G(Pe,1));const Ee=new te({vertexShader:rl,fragmentShader:ul,uniforms:{uFocal:{value:1e3},uTime:{value:0},uCol:{value:i("mark")},uAlpha:{value:0}},defines:v,transparent:!0,depthWrite:!1,depthTest:!1,...m}),Fe=new ca(Ue,Ee);Fe.name="marks",Fe.frustumCulled=!1,Fe.renderOrder=3;const _e=16,fe=u?96:160,re=Math.floor(o/_e)+1,Ze=new Float32Array(re*2*fe*6);let Ut=0;for(let A=0;A<re;A++){const z=Math.min(r/2,A*_e*p-r/2);for(let U=0;U<fe;U++){const De=(U/fe-.5)*r,Se=((U+1)/fe-.5)*r;Ze.set([De,0,z,Se,0,z],Ut),Ut+=6,Ze.set([z,1,De,z,1,Se],Ut),Ut+=6}}const lo=new Ie;lo.setAttribute("position",new G(Ze,3));const bt=new te({vertexShader:el,fragmentShader:tl,uniforms:{uTime:{value:0},uWave:{value:1},uFar:{value:30},uFocal:{value:1e3},uGap:{value:_e*p},uCol:{value:i("grid")},uAlpha:{value:1}},defines:v,transparent:!0,depthWrite:!1,...m}),zt=new Wa(lo,bt);return zt.name="grid",zt.frustumCulled=!1,zt.renderOrder=1,l.add(b,zt,g,y,Fe),{group:l,update(A){const z=w.uniforms;z.uTime.value=A.time,z.uAsm.value=A.asm,z.uWave.value=A.wave,z.uFocal.value=A.focal,z.uFar.value=A.far,z.uAlpha.value=A.alpha*A.points,z.uScr.value=A.scr||0,A.scr&&(z.uDust.value=A.dust,z.uFly.value=A.fly,z.uCloudA.value=A.cloudA,z.uDustL.value=A.dustL,z.uRes.value.set(A.resW,A.resH),z.tCloud.value=A.cloudTex||Oa,z.uDrift.value.set(A.driftX||0,A.driftY||0),z.uNeon.value=A.neon||0),y.visible=A.alpha*A.points>.002,T.uniforms.uAlpha.value=A.map*A.alpha,b.visible=A.map*A.alpha>.002,me.uniforms.uGrow.value=A.houses,me.uniforms.uFar.value=A.far,me.uniforms.uFocal.value=A.focal,me.uniforms.uAlpha.value=.55*A.alpha,g.visible=A.houses>.001&&A.alpha>.002,Ee.uniforms.uTime.value=A.time,Ee.uniforms.uFocal.value=A.focal,Ee.uniforms.uAlpha.value=A.marks*A.alpha,Fe.visible=A.marks*A.alpha>.002;const U=A.alpha*(1-A.asm);bt.uniforms.uTime.value=A.time,bt.uniforms.uWave.value=A.wave,bt.uniforms.uFar.value=A.far,bt.uniforms.uFocal.value=A.focal,bt.uniforms.uAlpha.value=U,zt.visible=U>.002,l.visible=A.alpha>.002}}}const il=`
uniform mat4 uCamWorld;
uniform mat4 uInvProj;
varying vec3 vDir;
void main() {
  vec2 p = position.xy;
  gl_Position = vec4(p, 0.0, 1.0);
  vec4 v = uInvProj * vec4(p, 1.0, 1.0);
  v.xyz /= v.w;
  vDir = mat3(uCamWorld) * v.xyz;
}
`,cl=e=>`
#define ${e}
${e==="LOOK_PAPER"?wl+`
#define SK_SPHERE
`+Qa:""}
#define PI 3.14159265
uniform vec3 uCam;
uniform float uC;
uniform float uR;
uniform float uAlpha;
uniform float uHaloA;   // сила ореола атмосферы (гибрид: гаснет позже планеты)
uniform float uSpace;
uniform float uAtm;
uniform float uS0;
uniform float uLod;
uniform float uMarkR;
uniform float uMark;
// Гибрид: метка Пардубиц из золотой с волной — в синюю дышащую точку
// (0 — золото и волна, 1 — синяя точка дышит, волны нет).
uniform float uMarkBlue;
uniform float uMarkGrow;
uniform float uTime;
uniform float uHole;
uniform float uHoleR;
uniform float uCzK;
uniform float uInkH;
uniform float uInkP;
uniform vec3 uPdb;
uniform sampler2D uLand;
uniform sampler2D uEu;
uniform vec4 uEuBox;
// Сдвиг явных мип-уровней масок: 0 — как было; -1 — у вдвое меньших
// копий (*-s.webp, телефон под ключом ?hl=2; аудит, п. 2, 2026-11-12).
uniform float uMipK;
varying vec3 vDir;

#ifdef LOOK_PAPER
float h31(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float n3(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h31(i), h31(i + vec3(1, 0, 0)), f.x), mix(h31(i + vec3(0, 1, 0)), h31(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(h31(i + vec3(0, 0, 1)), h31(i + vec3(1, 0, 1)), f.x), mix(h31(i + vec3(0, 1, 1)), h31(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float fbm3(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * n3(p); p = p * 2.02 + 11.3; a *= 0.5; } return s; }
#endif
vec2 worldUv(float lon, float lat) { return vec2((lon + PI) / (2.0 * PI), (lat + 0.5 * PI) / PI); }
// Доля окна Европы и вес его (мягкий край, чтобы шва не было).
vec3 euUv(float lon, float lat) {
  vec2 d = degrees(vec2(lon, lat));
  vec2 uv = (d - uEuBox.xy) / (uEuBox.zw - uEuBox.xy);
  vec2 e = smoothstep(vec2(0.0), vec2(0.04), uv) * smoothstep(vec2(0.0), vec2(0.04), 1.0 - uv);
  return vec3(uv, e.x * e.y);
}

// Решётка точек шага s (км): расстояние до центра ближайшей точки в долях
// шага и широта/долгота этого центра.
float dotGrid(float lat, float lon, float s, out vec2 c) {
  float rowF = lat * uR / s;
  float row = floor(rowF + 0.5);
  float latc = row * s / uR;
  float n = max(1.0, floor(2.0 * PI * uR * cos(latc) / s));
  float colF = (lon + PI) / (2.0 * PI) * n;
  float col = floor(colF + 0.5);
  float lonc = col / n * 2.0 * PI - PI;
  float dy = (rowF - row);
  float dx = (colF - col) / n * 2.0 * PI * uR * cos(lat) / s;
  c = vec2(lonc, latc);
  return length(vec2(dx, dy));
}

// Суша, Чехия и ореол Чехии в точке.
vec3 landAt(vec2 c) {
  float w = textureLod(uLand, worldUv(c.x, c.y), 0.0).r;
  vec3 e = euUv(c.x, c.y);
  vec3 eu = e.z > 0.0 ? textureLod(uEu, e.xy, 0.0).rgb : vec3(0.0);
  return vec3(mix(w, eu.r, e.z), eu.g * e.z, eu.b * e.z);
}

vec3 dotLayer(float lat, float lon, float s, out float m) {
  vec2 c;
  float d = dotGrid(lat, lon, s, c);
  vec3 l = landAt(c);
  float aa = fwidth(d);
  float r = 0.2;
  float k = 1.0 - smoothstep(r - aa, r + aa, d);
  // Точки мельче пикселя не рисуем — иначе муар у края диска.
  k *= 1.0 - smoothstep(0.25, 0.55, aa);
  float land = step(0.5, l.x);
  // Золото Чехии — только издали: изнутри страны (над городом) вся
  // решётка была бы золотой.
  float cz = smoothstep(0.35, 0.65, l.y) * uCzK;
  vec3 sea = vec3(0.16, 0.30, 0.42) * 0.22;
  vec3 ground = vec3(0.42, 0.62, 0.80);
  vec3 gold = vec3(0.89, 0.69, 0.29);
  vec3 col = mix(sea, ground, land);
  col = mix(col, gold * 1.15, cz);
  // Ореол Чехии подсвечивает соседние точки — граница читается светом.
  col += gold * 0.35 * l.z * (1.0 - cz) * land;
  m = k * mix(0.55, 1.0, land);
  return col;
}

void main() {
  vec3 d = normalize(vDir);
  float b = dot(uCam, d);
  float disc = b * b - uC;
  vec3 col = vec3(0.0);
  float a = 0.0;
  // Расстояние от центра до луча — для ореола атмосферы.
  float hR = sqrt(max(dot(uCam, uCam) - b * b, 0.0));
  if (disc > 0.0 && b < 0.0) {
    float t = uC / (-b + sqrt(disc));
    vec3 p = uCam + t * d;
    vec3 n = p / uR;
    float lat = asin(clamp(n.y, -1.0, 1.0));
    float lon = atan(n.x, n.z);
    float mu = max(dot(n, -d), 0.0);
    float rim = pow(1.0 - mu, 3.0);
    vec3 body = vec3(0.020, 0.045, 0.080);
    float m0, m1;
    vec3 c0 = dotLayer(lat, lon, uS0, m0);
    vec3 c1 = dotLayer(lat, lon, uS0 * 2.0, m1);
    vec3 dots = c0 * m0 * (1.0 - uLod) + c1 * m1 * uLod;
#ifdef LOOK_DOTS
    col = body + dots * 1.1 + vec3(0.25, 0.5, 0.8) * rim * 0.45 * uAtm;
#endif
#ifdef LOOK_PAPER
    // Рисунок ink (paper.js): диск — бумага, суша — акварелью.
    // Маска суши мягкая (крупный мип-уровень), зерно и волокна — шумом на
    // сфере, зерно — одной величины на экране на любой высоте.
    // В окне Европы маска — из europe.webp (36 пикс/градус против 6 у мира):
    // мировая на крупном мипе давала ступенчатые берега Скандинавии.
    vec3 eC = euUv(lon, lat);
    float landS = textureLod(uLand, worldUv(lon, lat), max(1.5 + uMipK, 0.0)).r;
    if (eC.z > 0.0) landS = mix(landS, textureLod(uEu, eC.xy, max(2.0 + uMipK, 0.0)).r, eC.z);
    float czS = eC.z > 0.0 ? textureLod(uEu, eC.xy, max(1.0 + uMipK, 0.0)).g * eC.z : 0.0;
    vec3 sp = n * uR;
    float big = fbm3(sp / 900.0 + vec3(0.0, uTime * 0.01, 0.0));
    // Зерно привязано к Земле ступенями шага (uS0 — степень двойки) и
    // смешивается по доле октавы: масштаб шума, тянущийся за камерой
    // непрерывно, «плыл» каждый кадр — замер показал мерцание на подъёме.
    float fine = mix(fbm3(sp / (uS0 * 9.0)), fbm3(sp / (uS0 * 18.0)), uLod);
    float bodyA = uSpace * 0.9;
    vec3 pc = L_DISC * bodyA;
    float pa = bodyA;
    vec3 lc = vec3(0.0); float la = 0.0;
    // Карта рисунком от руки: суша — штриховкой (тон густотой штрихов,
    // направление — по участкам ~900 км), бледная акварель по суше,
    // Чехия — золотой краской с кромкой. Штрихи — в километрах по
    // поверхности, ступени шага по экрану (sketch.js).
    vec2 tq = vec2(lon * cos(lat), lat) * uR;
    float landH = smoothstep(0.42, 0.58, landS);
    // Штриховки суши нет: на уровне Чехии она читалась косым «дождём».
    float hatL = 0.0;
    float landW = landH * (0.05 + 0.05 * big);
    lc = L_PALE; la = landW * uInkH;
    float g = hatL * 0.42;
    lc = (lc * la + L_INK2 * g * (1.0 - la)) / max(la + g * (1.0 - la), 0.0001);
    la = la + g * (1.0 - la);
    // Планета: карандашная тень у терминатора (тон по освещению, одно
    // направление, у самой ночи — перекрёстно) и бледная акварель диска,
    // гуще к краю — пигмент копится у кромки.
    // Свет для рисунка — слева сверху (с запада), тень ложится к востоку.
    float ndl = dot(n, normalize(vec3(-0.62, 0.42, 0.66)));
    float sh = smoothstep(0.45, -0.5, ndl) * uSpace;
    float hatS = sk_tone(tq * 0.37, sh * 0.85, 1e5, 11.0, 1.0) * 0.6;
    float discW = (0.1 + 0.3 * pow(1.0 - mu, 3.0)) * (0.8 + 0.4 * fine) * uSpace;
    pc = pc * (1.0 - discW) + L_PALE * discW;
    pa = pa * (1.0 - discW) + discW;
    pc = pc * (1.0 - hatS) + L_INK2 * hatS;
    pa = pa * (1.0 - hatS) + hatS;
    // Заливка суши — только издали: изнутри страны (над городом) суша —
    // весь кадр, и заливка легла бы ровным пятном во весь экран.
    la *= uCzK;
    pc = pc * (1.0 - la) + lc * la;
    pa = pa * (1.0 - la) + la;
    // Чехия — золотой акварелью: неровный край, пигмент у кромки, зерно.
    float mc = czS + (fine - 0.5) * 0.3;
    float czB = smoothstep(0.42, 0.56, mc), czR = smoothstep(0.38, 0.46, mc) * (1.0 - smoothstep(0.5, 0.64, mc));
    float czA = (czB * 0.42 + czR * 0.4) * (0.8 + 0.4 * fine) * uCzK * uInkP;
    vec3 czC = mix(L_GOLDL, L_GOLD, czR);
    pc = pc * (1.0 - czA) + czC * czA;
    pa = pa * (1.0 - czA) + czA;
    // Контур диска — карандашом, с дрожью.
    float fm = fwidth(mu);
    float mw2 = mu + (fine - 0.5) * fm * 1.5;
    float rimP = (1.0 - smoothstep(fm * 0.8, fm * 2.4, mw2)) * uAtm * 0.8;
    pc = pc * (1.0 - rimP) + L_INK2 * rimP;
    pa = pa * (1.0 - rimP) + rimP;
#endif
    // Пардубице — золотая метка с волной, размер постоянен на экране.
    // Расстояние — хордой, а не acos скалярного произведения: у единицы
    // acos теряет точность float (ошибка ~2 км), и метка над городом
    // рассыпалась в шумный золотой ком. Хорда точна до метров.
    float km = length(p - uPdb * uR);
    float q = km / uMarkR;
    float core = 1.0 - smoothstep(0.3, 0.42, q);
    // СИНЯЯ НЕОНОВАЯ ТОЧКА (гибрид, uMarkBlue). Заказчик: «точка получилась
    // как синее пятно, а надо неоновая… с белым я погорячился — его было
    // просто пиздец как много; и если точка пульсирует, то волн уже не
    // должно быть». Неон: крошечное светлое ядро (только самый центр),
    // насыщенно-синее тело, мягкий синий ореол на 3–4 радиуса ядра. Дыхание
    // (период 2.5 с, вспышка в начале — в этот миг точка «выпускает»
    // комету, arcs.js PULSE) меняет только силу и размер ореола; ядро
    // стоит. Волн нет: ring гаснет вместе с золотом.
    float br = exp(-fract(uTime / 2.5) * 3.0);
    // Синяя точка рождается размером с золотую (uMarkGrow ≈ 1.75: тело 0.24
    // → ядро золота 0.42) и плавно сжимается до своего размера к виду всей
    // Европы (заказчик: «сразу маленькая относительно жёлтой… могла бы
    // уменьшиться до этого размера к моменту, когда видна вся Европа»).
    float qb = q / max(uMarkGrow, 1.0);
    float nHot = 1.0 - smoothstep(0.05, 0.12, qb);
    float nBody = 1.0 - smoothstep(0.13, 0.24, qb);
    float hr = 0.55 * (1.0 + 0.25 * br);
    float nHalo = exp(-qb * qb / (hr * hr)) * (0.45 + 0.4 * br);
    float ph = fract(uTime * 0.35);
    float ring = (1.0 - smoothstep(0.06, 0.16, abs(q - (0.8 + 2.4 * ph)))) * (1.0 - ph) * (1.0 - uMarkBlue);
    // Дыра под картой города: подложка сама даёт пол, а глобус её не перекрывает.
#ifdef LOOK_DOTS
    // Окно в поле точек вокруг города — с широким мягким краем (заказчик
    // 2026-10-31: «слева видна чёткая граница этой диджитал пыли»). Сход
    // 0.6–1.0 радиуса на скользящем взгляде ложился в ~50 пикселей и читался
    // линией, где поле точек обрывается; теперь поле редеет от 0.5 до 1.25
    // радиуса — за край окна оно уходит плавно, без шва.
    float hole = mix(1.0, smoothstep(uHoleR * 0.5, uHoleR * 1.25, km), uHole);
#else
    float hole = mix(1.0, smoothstep(uHoleR * 0.6, uHoleR, km), uHole);
#endif
#ifdef LOOK_PAPER
    float mk = clamp(core * 1.2 + ring * 0.7, 0.0, 1.0) * uMark;
    pc = pc * (1.0 - mk) + L_GOLD * mk;
    pa = pa * (1.0 - mk) + mk;
    gl_FragColor = vec4(pc, pa) * hole * uAlpha;
    return;
#else
    // Золото с волной гаснет, неон проступает; потолок насыщенного синего
    // на теле и ореоле — сложение с точками поля не выбеливает; светлое —
    // только крошечное ядро, поверх потолка.
    vec3 gold = vec3(1.0, 0.72, 0.30) * (core * 1.4 + ring * 0.8);
    vec3 blue = vec3(0.12, 0.45, 1.0) * (nBody * 1.3 + nHalo);
    vec3 cap = mix(vec3(1.0, 0.78, 0.36), vec3(0.26, 0.66, 1.0), uMarkBlue);
    float capW = uMark * clamp(max(core, nBody + nHalo) * 3.0, 0.0, 1.0) * smoothstep(0.0, 0.25, uMarkBlue);
    // В окне под городом гаснут только точки, тёмное тело планеты остаётся:
    // иначе сквозь окно (и по его мягкому краю) проступал синий градиент
    // фона страницы — заказчик: «зачем синюю пелену оставил, по краю окна».
    // Окно — ДО метки: окно сужается к золотой точке (index.js), и метка
    // должна стоять в нём, а не гаснуть вместе с полем.
    col = mix(vec3(0.020, 0.045, 0.080), col, hole);
    col += mix(gold, blue, uMarkBlue) * uMark;
    col = mix(col, min(col, cap), capW);
    col += vec3(0.55, 0.8, 1.0) * nHot * 0.7 * uMarkBlue * uMark;
    a = 1.0;
#endif
  }
  // Ореол атмосферы за краем диска — своим слоем (hk, hcol): у него своя
  // сила uHaloA, и при уходе Земли он гаснет позже планеты.
  float hk = 0.0; vec3 hcol = vec3(0.0);
  // СГЛАЖЕННЫЙ КРАЙ ДИСКА (заказчик 2026-10-25: «лесенка осталась» — край
  // планеты против зарева шёл ступенями пикселей): покрытие диска в точках
  // у кромки — доля по расстоянию до неё в пикселях (fwidth), а не да/нет
  // пересечения луча; зарево — и под этой полоской.
  float fwR = max(fwidth(hR), 1e-4);
  float cov = clamp((uR - hR) / fwR + 0.5, 0.0, 1.0);
  a *= cov;
  // Ореол атмосферы за краем диска.
  if (b < 0.0 || hR > uR - fwR) {
    float hgt = max(hR - uR, 0.0);
    float halo = exp(-hgt / (uR * 0.035)) * (1.0 - cov);
    vec3 hc = vec3(0.25, 0.5, 0.85);
    // Ореол уходит вместе с планетой (uAlpha), иначе после её ухода под CSR
    // на краю кадра оставалась голубая дуга.
    float ha = halo * uAtm * 0.85;
    if (a < 1.0) { hk = ha * (1.0 - a) * uHaloA; hcol = hc; }
  }
#ifdef LOOK_PAPER
  // Рисунок: космоса нет — вокруг планеты только бумага, без свечения.
  gl_FragColor = vec4(0.0);
  return;
#endif
  // Космос: вне диска фон уходит в почти чёрный.
  vec3 spaceCol = vec3(0.004, 0.010, 0.020);
  // Космос — и там, где планета уже погашена (uAlpha): иначе на её месте
  // при уходе под CSR оставался светлый диск фона страницы.
  float pa = a * uAlpha;
  // Ореол — поверх космоса, под диском планеты.
  float ho = hk * (1.0 - pa);
  float sa = uSpace * (1.0 - pa) * (1.0 - hk);
  // Выход — с умноженной альфой (смешение ONE, ONE_MINUS_SRC_ALPHA).
  // Дизеринг ореола и космоса: тёмный ход зарева шёл «лесенкой» 8-битных
  // ступеней (заказчик 2026-10-25: «что это за лесенка»).
  vec3 q3 = fract(vec3(gl_FragCoord.xyx) * 0.1031);
  q3 += dot(q3, q3.yzx + 33.33);
  float dn = (fract((q3.x + q3.y) * q3.z) - 0.5) * (1.5 / 255.0);
  vec3 outC = col * pa + hcol * ho + spaceCol * sa;
  float outA = pa + ho + sa;
  // Под холстом — светлый фон страницы: 8-битная ступень прозрачности
  // пропускает его полосами, поэтому дизеринг и у альфы (в покрытой
  // части), не только у цвета.
  float aD = clamp(outA - abs(dn) * step(0.001, outA) * step(outA, 0.999), 0.0, 1.0);
  gl_FragColor = vec4(max(outC * (aD / max(outA, 1e-4)) + dn * step(0.001, outA), 0.0), aD);
}
`,fl=`
uniform vec3 uCam;
uniform float uR;
varying float vVis;
varying vec3 vP;
void main() {
  vP = position;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  // Видна ли точка из камеры: за краем диска линии нет.
  vVis = dot(normalize(position), uCam) - uR * uR / length(position);
}
`,vl=`
uniform vec3 uCol;
uniform float uAlpha;
uniform float uFadeKm;
uniform float uR;
uniform vec3 uPdb;
uniform float uMarkR;
uniform float uMark;
varying float vVis;
varying vec3 vP;
void main() {
  if (vVis < 0.0) discard;
  float a = uAlpha * smoothstep(0.0, uFadeKm, vVis);
  // Метку Пардубиц линии (границы, реки) не перекрывают (заказчик: «тонкие
  // синие линии… не должны перекрывать точку»): вокруг неё они гаснут.
  float q = length(vP - uPdb * uR) / uMarkR;
  // Радиус — вся видимая метка с волной (~1.5 радиуса) и запас.
  a *= mix(1.0, smoothstep(1.4, 2.2, q), step(0.001, uMark));
  gl_FragColor = vec4(uCol * a, a);
}
`,ml=`
attribute float aMag;
uniform float uPx;
varying float vM;
varying float vBehind;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  vM = aMag;
  // Звезда за диском Земли (луч от камеры пересекает шар): её закрывает
  // планета — и пока гаснет зарево, иначе в пустом кольце ореола звёзды
  // читались огоньками на планете (заказчик 2026-10-20).
  vec3 ro = cameraPosition, rd = normalize((modelMatrix * vec4(position, 1.0)).xyz - ro);
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${q.toFixed(1)} * ${q.toFixed(1)};
  vBehind = (h > 0.0 && -b - sqrt(max(h, 0.0)) > 0.0) ? 1.0 : 0.0;
  gl_PointSize = (1.0 + aMag * 1.6) * uPx;
}
`,pl=`
uniform float uAlpha;
uniform float uOcc;
varying float vM;
varying float vBehind;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float d = dot(q, q);
  if (d > 1.0) discard;
  float a = (1.0 - d) * (0.25 + 0.75 * vM) * uAlpha * (1.0 - vBehind * uOcc);
  gl_FragColor = vec4(vec3(0.75, 0.85, 1.0) * a, a);
}
`,dl=`
varying vec2 vP;
void main() { vP = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,hl=`
uniform float uLeft;
uniform float uAll;
uniform float uSide;
uniform vec3 uCol;
varying vec2 vP;
void main() {
  // Под колонкой текста — темнее; дальше сцена в полную силу. Колонка слева,
  // у компаний в шахматном порядке — и справа (uSide 1), с плавной сменой.
  float a = uLeft * mix(1.0 - smoothstep(0.28, 0.62, vP.x), smoothstep(0.38, 0.72, vP.x), uSide) + uAll;
  a = clamp(a, 0.0, 1.0);
  // Дизеринг: плавный ход прозрачности по ширине кадра на тёмном фоне
  // ложился 8-битными ступенями — вертикальными полосами разных оттенков
  // (заказчик 2026-10-25: «разные оттенки полосы после того, как Земля
  // уходит»). Шум ±1 ступень по точке экрана ступени разбивает.
  vec3 p3 = fract(vec3(gl_FragCoord.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  float n = fract((p3.x + p3.y) * p3.z) - 0.5;
  // Шум — прямо в цвет выхода (смешение ONE, ONE_MINUS_SRC_ALPHA
  // прибавляет его к кадру как есть): ±1 уровень итоговой картинки.
  // Шум в прозрачности не помогал — на тёмном он меньше уровня.
  gl_FragColor = vec4(max(uCol * a + n * (2.0 / 255.0) * step(0.001, a), 0.0), a);
}
`,xl={dots:"LOOK_DOTS",ink:"LOOK_PAPER"},gl=e=>{const t=parseInt(e.slice(1),16),a=l=>(l/255).toFixed(4);return`vec3(${a(t>>16)}, ${a(t>>8&255)}, ${a(t&255)})`},wl=[["L_GOLD","#8a5f10"],["L_DISC","#d3d9de"],["L_PALE","#5FA8E0"],["L_GOLDL","#c9a24e"],["L_INK2","#29455c"]].map(([e,t])=>`#define ${e} ${gl(t)}`).join(`
`);function fo(e,t,a,l){const o=new gt,r=Ge(l.pdb.lat,l.pdb.lon,1),u={uCam:{value:new V},uC:{value:0},uR:{value:q},uAlpha:{value:0},uHaloA:{value:0},uSpace:{value:0},uAtm:{value:0},uS0:{value:1},uLod:{value:0},uMarkR:{value:10},uMark:{value:0},uMarkBlue:{value:0},uMarkGrow:{value:1},uTime:{value:0},uHole:{value:0},uHoleR:{value:3.75},uCzK:{value:0},uInkH:{value:1},uInkP:{value:1},uPdb:{value:new V(r[0],r[1],r[2])},uLand:{value:t.land},uEu:{value:t.eu},uEuBox:{value:new Ke(Xt.lon0,Xt.lat0,Xt.lon1,Xt.lat1)},uMipK:{value:t.mipK||0},uCamWorld:{value:new ia},uInvProj:{value:new ia}},v=new te({vertexShader:il,fragmentShader:cl(xl[e]),uniforms:u,transparent:!0,depthTest:!1,depthWrite:!1,...Ce}),m=new ue(At(),v);m.name="globe",m.frustumCulled=!1,m.renderOrder=-20;const s=e==="dots"?yl(u,a,l):null;return s?o.add(s.stars,m,s.coast,s.border,s.river,s.cz,s.scrim):o.add(m),{group:o,resize(i,c){s?.czMat.resolution.set(i,c)},update(i,c){const n=c.position;u.uCam.value.copy(n);const p=Math.hypot(n.x,n.y,n.z);if(u.uC.value=(p-q)*(p+q),u.uCamWorld.value.copy(c.matrixWorld),u.uInvProj.value.copy(c.projectionMatrixInverse),u.uAlpha.value=i.alpha,u.uHaloA.value=i.haloAlpha??i.alpha,u.uSpace.value=i.space,u.uAtm.value=i.atm,u.uS0.value=i.s0,u.uLod.value=i.lod,u.uMarkR.value=i.markR,u.uMark.value=i.mark,u.uMarkBlue.value=i.markBlue||0,u.uMarkGrow.value=i.markGrow||1,u.uTime.value=i.time,u.uHole.value=i.hole,u.uHoleR.value=i.holeR,u.uCzK.value=i.czk,u.uInkH.value=i.inkH??1,u.uInkP.value=i.inkP??1,m.visible=e==="ink"?i.alpha>0:i.alpha>.002||i.space>.002,!s)return;const{coast:h,border:S,river:R,cz:H,czMat:N,stars:E,smat:C,scrimMat:P,scrim:k}=s;h.material.uniforms.uAlpha.value=i.lines*.38,S.material.uniforms.uAlpha.value=i.lines*.5,R.material.uniforms.uAlpha.value=i.rivers*.35;for(const O of[h,S,R])O.material.uniforms.uFadeKm.value=Math.max(1,p-q)*.05,O.visible=O.material.uniforms.uAlpha.value>.002;N.opacity=i.cz,H.visible=i.cz>.002,E.position.copy(n),C.uniforms.uAlpha.value=i.stars,C.uniforms.uOcc.value=Math.min(1,20*Math.max(i.alpha,i.haloAlpha??i.alpha)),C.uniforms.uPx.value=i.px,E.visible=i.stars>.002,P.uniforms.uLeft.value=i.scrimLeft,P.uniforms.uAll.value=i.scrimAll,P.uniforms.uSide.value=i.scrimSide??0,k.visible=i.scrimLeft+i.scrimAll>.002}}}function yl(e,t,a){const l=(k,O,L)=>new te({vertexShader:fl,fragmentShader:vl,uniforms:{uCam:e.uCam,uR:e.uR,uPdb:e.uPdb,uMarkR:e.uMarkR,uMark:e.uMark,uCol:{value:new Ve(k)},uAlpha:{value:O},uFadeKm:{value:L}},transparent:!0,depthTest:!1,depthWrite:!1,...Ce}),o={coast:"#6f9cc4",border:"#8fb4d8",river:"#4f86b8"},r=(k,O)=>{const L=new Ie;L.setAttribute("position",new G(k,3));const _=new Wa(L,l(O,0,400));return _.frustumCulled=!1,_.renderOrder=-10,_},u=r(t[0],o.coast),v=r(t[1],o.border),m=r(t[3],o.river);u.name="coast",v.name="border",m.name="river";const s=new Zo().setPositions(t[2]),i=new Qo({color:15317072,linewidth:a.lite?1.6:2.2,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),c=new Jo(s,i);c.frustumCulled=!1,c.renderOrder=-9;const n=a.lite?900:2400,p=new Float32Array(n*3),h=new Float32Array(n);let S=4242;const R=()=>(S=S*16807%2147483647)/2147483647;for(let k=0;k<n;k++){const O=R()*2-1,L=R()*Math.PI*2,_=Math.sqrt(1-O*O);p[k*3]=_*Math.cos(L)*1e5,p[k*3+1]=O*1e5,p[k*3+2]=_*Math.sin(L)*1e5,h[k]=Math.pow(R(),4)}const H=new Ie;H.setAttribute("position",new G(p,3)),H.setAttribute("aMag",new G(h,1));const N=new te({vertexShader:ml,fragmentShader:pl,uniforms:{uAlpha:{value:0},uPx:{value:1},uOcc:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,...Ce}),E=new ca(H,N);E.frustumCulled=!1,E.renderOrder=-15,E.name="stars";const C=new te({vertexShader:dl,fragmentShader:hl,uniforms:{uLeft:{value:0},uAll:{value:0},uSide:{value:0},uCol:{value:new Ve("#040b15")}},transparent:!0,depthTest:!1,depthWrite:!1,...Ce}),P=new ue(At(),C);return P.name="scrim",P.frustumCulled=!1,P.renderOrder=100,{coast:u,border:v,river:m,cz:c,czMat:i,stars:E,smat:N,scrim:P,scrimMat:C}}const Xe=[[48.2082,16.3738],[52.52,13.405],[47.4979,19.0402],[48.8566,2.3522],[51.5074,-.1278],[41.9028,12.4964],[40.4168,-3.7038],[59.3293,18.0686],[50.4501,30.5234],[39.9334,32.8597],[24.4539,54.3773],[56.9496,24.1052],[37.9838,23.7275],[35.6762,139.6503],[1.3521,103.8198],[33,2.5],[30.5,14]],Zt=128,dt=2.5,Al=dt*Xe.length,bl=`
attribute vec3 aEnd;
attribute float aT;
attribute float aSide;
attribute vec4 aArc;      // x — время пути (с), y — фаза в общем периоде, z — высота (км), w — яркость
uniform vec3 uP;
uniform vec2 uRes;
uniform float uHalfW;
varying float vT;
varying float vS;
varying float vOcc;
varying vec4 vArc;
varying vec2 vHome;
vec3 arcPos(float t) {
  float c = clamp(dot(uP, aEnd), -1.0, 1.0);
  float om = acos(c);
  vec3 d = (sin((1.0 - t) * om) * uP + sin(t * om) * aEnd) / sin(om);
  return d * (${q.toFixed(1)} + aArc.z * sin(3.14159265 * t));
}
void main() {
  vec3 p = arcPos(aT);
  float t2 = aT < 0.99 ? aT + 0.01 : aT - 0.01;
  vec3 q = arcPos(t2);
  mat4 pv = projectionMatrix * viewMatrix;
  vec4 cp = pv * vec4(p, 1.0);
  vec4 cq = pv * vec4(q, 1.0);
  vec2 sp = cp.xy / cp.w * uRes, sq = cq.xy / cq.w * uRes;
  vec2 dir = normalize((sq - sp) * (aT < 0.99 ? 1.0 : -1.0) + 1e-6);
  vec2 nrm = vec2(-dir.y, dir.x);
  cp.xy += nrm * aSide * uHalfW * 2.0 / uRes * cp.w;
  gl_Position = cp;
  // Экранное место Пардубиц: нити у самой точки не рисуются — точка поверх.
  vec4 ch = pv * vec4(uP * ${q.toFixed(1)}, 1.0);
  vHome = (ch.xy / ch.w * 0.5 + 0.5) * uRes;
  // Закрыта ли точка шаром Земли (луч из камеры к ней пересекает шар).
  vec3 ro = cameraPosition, rd = p - ro;
  float L = length(rd); rd /= L;
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${(q*.998).toFixed(1)} * ${(q*.998).toFixed(1)};
  float tHit = -b - sqrt(max(h, 0.0));
  vOcc = (h > 0.0 && tHit > 0.0 && tHit < L - 1.0) ? 0.0 : 1.0;
  vT = aT;
  vS = aSide;
  vArc = aArc;
}
`,Ml=`
uniform float uTime;
uniform float uPeriod;
uniform float uAlpha;
uniform float uHalfW;
uniform float uStart;
uniform float uTextL;
uniform float uTextR;
uniform vec2 uRes;
uniform vec3 uCol;
uniform float uDpr;
uniform float uNear;
varying float vT;
varying float vS;
varying float vOcc;
varying vec4 vArc;
varying vec2 vHome;
// Выпуск комет: ровно одна на вздох точки (globe.js: период PULSE, пик
// в начале периода), в случайную столицу — хеш номера вздоха; соседние
// вздохи берут дуги разной чётности очереди, поэтому одна дуга не идёт
// дважды подряд. Возвращает время с выпуска по этой дуге (−1 — нет).
float arcLaunch(float order, float travel) {
  float k = floor(uTime / ${dt.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = min(2.0 * floor(h * ${Math.ceil(Xe.length/2)}.0) + mod(j, 2.0), ${Xe.length-1}.0);
    float since = uTime - j * ${dt.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${dt.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
  }
  return best;
}
void main() {
  float px = abs(vS) * uHalfW;
  float home = smoothstep(11.0 * uDpr, 17.0 * uDpr, length(gl_FragCoord.xy - vHome));
  float core = 1.0 - smoothstep(0.5, 1.4, px);
  float halo = exp(-px * px / 10.0);
  // Дуга сначала прорисовывается сама от Пардубиц к столице (2.5 с),
  // дуги — одна за другой (очередь, через 0.5 с). Конец растущей дуги не
  // светлее нити — не читается выстрелом.
  float order = vArc.y * float(${Xe.length});
  float drawn = clamp((uTime - uStart - order * 0.15) / 2.5, 0.0, 1.0);
  drawn = drawn * drawn * (3.0 - 2.0 * drawn);
  float vis = 1.0 - smoothstep(drawn - 0.03, drawn, vT);
  // Комета — одна на вздох точки (arcLaunch). Путь 3–5 с, с разгоном
  // и торможением.
  float since = arcLaunch(order, vArc.x);
  float tt = since < 0.0 ? 2.0 : since / vArc.x;
  float on = tt <= 1.0 ? 1.0 : 0.0;
  // Выход — РЕЗКИЙ, в миг вздоха (заказчик: «всё ещё не по пульсу»):
  // прежде smoothstep давал медленный разгон, и первые ~0.5 с голова стояла
  // под точкой (там нить вырезана) — комета показывалась уже после вздоха.
  // Теперь торможение только к концу: 1 − (1 − t)².
  float u0 = min(tt, 1.0);
  float u = 1.0 - (1.0 - u0) * (1.0 - u0);
  float dt = u - vT;
  // Голова — мягкий штрих, проявляется на выходе и тает на подходе.
  float env = smoothstep(0.0, 0.02, tt) * (1.0 - smoothstep(0.85, 1.0, tt));
  float head = on * env * exp(-dt * dt / 0.0006);
  float tail = on * env * (dt > 0.0 ? exp(-dt / 0.2) : 0.0);
  // Нить тише у концов (выход из точки и уход в столицу).
  float base = 0.4 * smoothstep(0.0, 0.06, vT) * (0.6 + 0.4 * smoothstep(1.0, 0.85, vT));
  float k = (base + 1.3 * tail + 2.4 * head) * vis;
  // Под колонкой текста слева — тише.
  // Колонка справа (шахматный порядок компаний) — зеркально, с плавной сменой.
  float fx = gl_FragCoord.x / uRes.x;
  float tx = mix(mix(uTextL, 1.0, smoothstep(0.22, 0.5, fx)), mix(uTextL, 1.0, 1.0 - smoothstep(0.5, 0.78, fx)), uTextR);
  // Пока камера близко (Чехия, Европа), нити и кометы ярче; к целой Земле —
  // прежний вид (uNear по расстоянию камеры).
  float i = (core * (0.7 + 0.6 * head) + 0.45 * halo) * k * vArc.w * vOcc * uAlpha * tx * home * (1.0 + 0.7 * uNear);
  // Голова — ярче, но синяя, без белого: потолок насыщенного неона.
  vec3 c = min(mix(uCol, vec3(0.3, 0.72, 1.0), 0.7 * head) * i, vec3(0.28, 0.70, 1.0));
  // У головы — крошечное светлое ядро по оси нити (неон), не белая клякса.
  c += vec3(0.5, 0.78, 1.0) * head * (1.0 - smoothstep(0.2, 0.7, px)) * 0.45 * vOcc * uAlpha * tx * home;
  gl_FragColor = vec4(c, min(1.0, max(c.r, max(c.g, c.b))));
}
`,Fl=`
attribute vec4 aArc;
attribute float aHome;
uniform float uTime;
uniform float uPeriod;
uniform float uStart;
uniform float uDpr;
uniform float uNear;
varying float vI;
varying float vOcc;
// Выпуск комет: ровно одна на вздох точки (globe.js: период PULSE, пик
// в начале периода), в случайную столицу — хеш номера вздоха; соседние
// вздохи берут дуги разной чётности очереди, поэтому одна дуга не идёт
// дважды подряд. Возвращает время с выпуска по этой дуге (−1 — нет).
float arcLaunch(float order, float travel) {
  float k = floor(uTime / ${dt.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = min(2.0 * floor(h * ${Math.ceil(Xe.length/2)}.0) + mod(j, 2.0), ${Xe.length-1}.0);
    float since = uTime - j * ${dt.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${dt.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
  }
  return best;
}
void main() {
  vec4 cp = projectionMatrix * viewMatrix * vec4(position, 1.0);
  gl_Position = cp;
  // Вспышка, когда приходит голова (конец пути), и тихое тление.
  float order = aArc.y * float(${Xe.length});
  float since = arcLaunch(order, aArc.x + 3.0) - aArc.x;
  float flash = since > -0.25 ? smoothstep(-0.25, 0.0, since) * exp(-max(since, 0.0) * 1.6) : 0.0;
  float drawn = step(uStart + order * 0.15 + 2.4, uTime);
  // В Пардубицах точку даёт метка Земли (globe.js, дышит) — здесь её нет.
  vI = aHome > 0.5 ? 0.0 : (0.35 + 1.4 * flash) * drawn;
  gl_PointSize = (aHome > 0.5 ? 12.0 : 9.0 + 6.0 * flash) * uDpr * (1.0 + 0.4 * uNear);
  vec3 ro = cameraPosition, rd = position - ro;
  float L = length(rd); rd /= L;
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${(q*.998).toFixed(1)} * ${(q*.998).toFixed(1)};
  float tHit = -b - sqrt(max(h, 0.0));
  vOcc = (h > 0.0 && tHit > 0.0 && tHit < L - 1.0) ? 0.0 : 1.0;
}
`,Sl=`
uniform float uAlpha;
uniform vec3 uCol;
varying float vI;
varying float vOcc;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q);
  if (r > 1.0) discard;
  float core = 1.0 - smoothstep(0.12, 0.3, r);
  float glow = (1.0 - r) * (1.0 - r);
  float i = (core + 0.45 * glow) * vI * vOcc * uAlpha;
  vec3 c = min(mix(uCol, vec3(0.3, 0.72, 1.0), 0.6 * core) * i, vec3(0.28, 0.70, 1.0));
  gl_FragColor = vec4(c, min(1.0, max(c.r, max(c.g, c.b))));
}
`,vo={blending:Ot,blendSrc:Oe,blendDst:Oe,blendSrcAlpha:Oe,blendDstAlpha:Wt};function Rl(e){const t=new V(...Ge(e.lat,e.lon,1)),a=Xe.length,l=a*(Zt+1)*2,o=new Float32Array(l*3),r=new Float32Array(l),u=new Float32Array(l),v=new Float32Array(l*4),m=[];let s=7;const i=()=>(s=s*16807%2147483647)/2147483647,c=Xe.map(([_,f],M)=>{const w=new V(...Ge(_,f,1)),y=Math.acos(Math.min(1,Math.max(-1,t.dot(w)))),d=Math.min(.06*q,y*q*.2);return{e:w,ang:y,a:[3+2*Math.min(1,y/1.45),0,d,.75+.25*i()]}}),n=c.map((_,f)=>f);for(let _=n.length-1;_>0;_--){const f=Math.floor(i()*(_+1));[n[_],n[f]]=[n[f],n[_]]}n.forEach((_,f)=>{c[_].a[1]=f/a});let p=0;c.forEach(({e:_,a:f})=>{const M=p;for(let w=0;w<=Zt;w++){for(const y of[-1,1])o.set([_.x,_.y,_.z],p*3),r[p]=w/Zt,u[p]=y,v.set(f,p*4),p++;if(w<Zt){const y=M+w*2;m.push(y,y+1,y+2,y+1,y+3,y+2)}}});const h=new Ie;h.setAttribute("position",new G(new Float32Array(l*3),3)),h.setAttribute("aEnd",new G(o,3)),h.setAttribute("aT",new G(r,1)),h.setAttribute("aSide",new G(u,1)),h.setAttribute("aArc",new G(v,4)),h.setIndex(m);const S=new Ve("#78d0e6"),R=new te({vertexShader:bl,fragmentShader:Ml,uniforms:{uP:{value:t},uRes:{value:new ve(1,1)},uHalfW:{value:5},uTime:{value:0},uPeriod:{value:Al},uAlpha:{value:0},uStart:{value:0},uTextL:{value:1},uTextR:{value:0},uDpr:{value:1},uNear:{value:0},uCol:{value:S}},transparent:!0,depthWrite:!1,depthTest:!1,side:Tt,...vo}),H=new ue(h,R);H.frustumCulled=!1,H.name="arcs";const N=new Float32Array((a+1)*3),E=new Float32Array((a+1)*4),C=new Float32Array(a+1);c.forEach(({e:_,a:f},M)=>{N.set([_.x*q,_.y*q,_.z*q],M*3),E.set(f,M*4)}),N.set([t.x*q,t.y*q,t.z*q],a*3),E.set([1,0,0,1],a*4),C[a]=1;const P=new Ie;P.setAttribute("position",new G(N,3)),P.setAttribute("aArc",new G(E,4)),P.setAttribute("aHome",new G(C,1));const k=new te({vertexShader:Fl,fragmentShader:Sl,uniforms:{uTime:R.uniforms.uTime,uPeriod:R.uniforms.uPeriod,uStart:R.uniforms.uStart,uNear:R.uniforms.uNear,uAlpha:R.uniforms.uAlpha,uCol:{value:S},uDpr:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,...vo}),O=new ca(P,k);O.frustumCulled=!1,O.name="arcDots";const L=new gt;return L.add(H,O),H.renderOrder=50,O.renderOrder=51,{group:L,update(_){const f=L.visible;if(L.visible=_.alpha>.002,!L.visible)return;f||(R.uniforms.uStart.value=_.time),R.uniforms.uTextL.value=_.textL??1,R.uniforms.uTextR.value=_.textR??0,R.uniforms.uAlpha.value=_.alpha,R.uniforms.uTime.value=_.time,R.uniforms.uRes.value.set(_.w,_.h);const M=Math.log(Math.max(1,_.d||2e4)),w=1-Math.min(1,Math.max(0,(M-Math.log(2e3))/(Math.log(2e4)-Math.log(2e3)))),y=w*w*(3-2*w);R.uniforms.uNear.value=y,R.uniforms.uHalfW.value=5*_.dpr*(1+.8*y),k.uniforms.uDpr.value=_.dpr,R.uniforms.uDpr.value=_.dpr}}}const Ta="/assets/dawn/",ot=4,mo=6336/2688,kl=.62,po=.668,Ft={x:.712,y:.676},ho={x:.775,y:.3},ct=[-1,-.45,0,.35,1],_l={zen:["#03091a","#0a1532","#28427f","#1f68c0","#1478d8"],hor:["#0e1b34","#2a2a4a","#c88a90","#b4d6ee","#bfe0f6"],glow:["#000000","#4c2a34","#ff7a2e","#ffc78a","#ffe9c8"],halo:["#000000","#160a0c","#ff8d3f","#ffdcb0","#f6f8ff"],disc:["#000000","#000000","#ffb070","#fff0d0","#fffaf0"],cLit:["#05070f","#4a2c3a","#ffbc9c","#ffeedd","#ffffff"],cSh:["#03050c","#1a1830","#8e6490","#b6b2c8","#aebfd6"],cCream:["#ffffff","#ffffff","#ffe2cc","#ffeedd","#fff1de"],mBase:["#050a17","#0b0f22","#2a2140","#46526e","#5a6a86"],mTint:["#6f86c0","#7a6aa0","#ffb28a","#ffe6cc","#ffffff"],nTint:["#7d95d0","#8a7aa8","#ffb088","#fff0dc","#ffffff"],nAmb:["#020408","#04040c","#0c0710","#05060a","#000000"],rim:["#000000","#3a1a12","#ff8a3a","#ffcf94","#fff2dc"]},Tl={horPow:[4,3.4,2.6,3.4,4.2],glowW:[.6,.55,.42,.42,.4],haloW:[.08,.08,.075,.07,.06],pol:[0,0,.12,.35,.48],mLight:[0,.015,.16,.65,1],mHaze:[.85,.85,.85,.4,.16],nLight:[.01,.02,.075,.6,1],rimK:[0,.25,1.15,.45,.12],veil:[0,0,.14,.3,.34]},Cl=e=>{const t=new Ve(e);return[t.r,t.g,t.b]},xo=Object.fromEntries(Object.entries(_l).map(([e,t])=>[e,t.map(Cl)]));function Lo(e){if(e<=ct[0])return[0,0];for(let t=0;t<ct.length-1;t++)if(e<=ct[t+1]){const a=(e-ct[t])/(ct[t+1]-ct[t]);return[t,t===1?Math.pow(a,1.6):a]}return[ct.length-2,1]}function Le(e,t,a){const[l,o]=Lo(t),r=xo[e][l],u=xo[e][l+1];a.set(r[0]+(u[0]-r[0])*o,r[1]+(u[1]-r[1])*o,r[2]+(u[2]-r[2])*o)}const Qt=e=>F(0,1,e);function je(e,t){const[a,l]=Lo(t),o=Tl[e];return o[a]+(o[a+1]-o[a])*l}const go=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Pl=`
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
`,eo=`
uniform vec2 uRes;
uniform float uPx, uHor, uHorPow, uGlowW, uHaloW, uPol;
uniform vec2 uSun;
uniform vec3 uZen, uHorC, uGlow, uHalo;
vec3 skyAt(vec2 px) {
  float H = uRes.y;
  // высота над горизонтом с мягким нулём (softplus): с жёстким clamp ниже
  // горизонта растяжка вставала ровной полкой, и там, где гребень ниже
  // линии горизонта, по небу шла складка
  float x = (px.y - uHor) / max(1.0, H - uHor);
  float hy = clamp(log(1.0 + exp(x * 40.0)) / 40.0, 0.0, 1.0);
  float k = pow(1.0 - hy, uHorPow);
  vec3 c = mix(uZen, uHorC, k);
  vec2 ds = (px - uSun) / H;
  float sd = length(ds);
  c += uGlow * exp(-abs(ds.x) / uGlowW) * pow(1.0 - hy, uHorPow * 1.7);
  c += uHalo * (0.55 * exp(-sd / uHaloW) + 0.3 * exp(-sd / (uHaloW * 4.5)));
  c *= 1.0 - uPol * smoothstep(0.2, 1.2, sd) * smoothstep(0.0, 0.35, hy);
  return c;
}
// Мягкое плечо у белого: свет у солнца не срезается ступенью.
vec3 shoulder(vec3 c) {
  vec3 o = c - 0.82;
  return mix(c, 0.82 + 0.18 * (1.0 - exp(-o / 0.18)), step(0.82, c));
}
vec3 toSrgb(vec3 c) { return pow(max(shoulder(c), 0.0), vec3(1.0 / 2.2)); }
`,zo=`
uniform float uMorph;
float clH(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float clN(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  vec2 w = mod(i, 4096.0);
  return mix(mix(clH(w), clH(w + vec2(1.0, 0.0)), f.x), mix(clH(w + vec2(0.0, 1.0)), clH(w + vec2(1.0, 1.0)), f.x), f.y);
}
// Три слоя по высоте (слой облака — в B текстуры, build-dawn-clouds.mjs):
// верхние плывут медленнее (0.6 скорости), нижние быстрее (1.4) — каждое
// облако целиком со своим слоем. По времени (uMorph, секунды) форма
// чуть меняется: мягкий сдвиг выборки шумом и «дыхание» плотности —
// клочья медленно набухают и тают (заказчик 2026-10-23: «и пусть по мере
// движения меняют свою форму немного»). Ближний слой — поверх дальних.
vec4 clSample(vec2 px, out float v) {
  float sh = max(1.0, uRes.y - uHor0) * uSpan;
  v = (uRes.y - px.y) / sh;
  float accD = 0.0, accL = 0.0;
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec2 base = vec2((px.x + uDrift * mix(0.6, 1.4, fi * 0.5)) / (sh * uAsp), v);
    vec2 g = base * vec2(6.0, 4.0);
    vec2 w = vec2(clN(g + vec2(uMorph * 0.11, fi * 7.3)), clN(g + vec2(3.1, uMorph * 0.09 + fi * 5.1))) - 0.5;
    vec2 uv = base + w * vec2(0.012, 0.02);
    uv.y = clamp(uv.y, 0.0, 1.0);
    vec4 t = texture2D(tCl, uv);
    float m = clamp(1.0 - abs(t.b * 2.0 - fi), 0.0, 1.0);
    float d = clamp(t.r * m * (0.8 + 0.4 * clN(base * vec2(9.0, 6.0) + vec2(uMorph * 0.07, fi * 11.0))), 0.0, 1.0);
    float nd = d + accD * (1.0 - d);
    accL = (d * t.g + accL * accD * (1.0 - d)) / max(nd, 0.0001);
    accD = nd;
  }
  return vec4(accD, accL, 0.0, 1.0);
}
float clRise(float v) {
  float edge = mix(1.35, -0.4, uRise);
  return smoothstep(edge, edge + 0.35, v);
}
`,Dl=`
precision highp float;
${eo}
${Pl}
uniform float uA, uStars, uCell, uDiscA, uSunR, uRays, uTime, uGlowP;
uniform sampler2D tCl;
uniform float uHor0, uSpan, uAsp, uDrift, uRise, uClA;
${zo}
uniform vec2 uStarOff;
uniform vec3 uDisc;
// метеоры (по клику на ночное небо): uMetN штрихов; uMa — голова (точки
// холста, GL) и направление полёта; uMb — длина хвоста, блеск, полуширина
// хвоста и радиус головы (точки холста); uMc — зерно шума, шаг клочьев
// хвоста, сила свечения головы, пройденный путь
uniform float uMetN, uMetA;
uniform vec4 uMa[${ot}];
uniform vec4 uMb[${ot}];
uniform vec4 uMc[${ot}];
float vn(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  vec2 w = mod(i, 4096.0);
  return mix(mix(hash12(w), hash12(w + vec2(1.0, 0.0)), f.x), mix(hash12(w + vec2(0.0, 1.0)), hash12(w + vec2(1.0, 1.0)), f.x), f.y);
}
void main() {
  vec2 px = gl_FragCoord.xy;
  vec3 c = skyAt(px);
  vec3 sky0 = c;
  float hy = clamp((px.y - uHor) / max(1.0, uRes.y - uHor), 0.0, 1.0);
  if (uStars > 0.001) {
    // ЗВЁЗДЫ: клетка ~uCell CSS px, в клетке — одна случайная звезда (точка
    // в средней половине клетки — за край не выходит), яркость — степенью
    // (почти все тусклые, яркие редки). Млечный Путь — полоса наискосок:
    // в ней звёзд гуще, слабое свечение и тёмные прожилки пыли.
    vec2 sp = (px - uStarOff) / uPx;
    float Hc = uRes.y / uPx;
    vec2 q = sp / Hc;
    vec2 n = normalize(vec2(0.78, 0.62));
    // Полоса — в правой части неба (заказчик 2026-10-23: «Млечный Путь
    // лучше справа»): ось сдвинута на 0.55 высоты кадра вправо.
    // на узком экране (телефон) ось — в правой части его ширины, иначе
    // полоса уходила за край кадра
    float db = dot(q - vec2(min(1.1, 0.72 * uRes.x / uRes.y), 0.62), n);
    float mw = exp(-db * db / 0.018);
    float lane = smoothstep(0.35, 0.75, vn(q * vec2(7.0, 5.0) + 3.0) * 0.6 + vn(q * 19.0) * 0.4);
    vec2 cid = floor(sp / uCell);
    vec2 cw = mod(cid, 4096.0);
    vec2 h = hash22(cw);
    float hk = hash12(cw + 17.0), hm = hash12(cw + 91.0), ht = hash12(cw + 5.3);
    // Реже и неравномерно (заказчик 2026-10-23: «звёзд слишком много, и
    // они слишком равномерно, нереалистично расположены»): фон втрое реже,
    // плотность пятнами крупного шума (сгущения и пустоты), точка — почти
    // в любом месте клетки (сетка клеток не читается).
    float clump = smoothstep(0.3, 0.8, vn(q * 3.2 + 11.0) * 0.7 + vn(q * 9.0 + 4.0) * 0.3);
    float dens = (0.035 + 0.1 * clump + 0.3 * mw * (1.0 - 0.7 * lane)) * (0.55 + 0.9 * clump);
    vec2 pt = (cid + 0.12 + 0.76 * h) * uCell;
    float mag = pow(hm, 7.0);
    float rad = mix(0.5, 1.45, mag);
    float d = length(sp - pt);
    float s = 1.0 - smoothstep(rad - 0.55, rad + 0.55, d);
    float br = mix(0.16, 1.15, mag) * step(hk, dens);
    vec3 sc = mix(vec3(0.72, 0.82, 1.0), vec3(1.0, 0.9, 0.78), ht * ht);
    float ext = smoothstep(0.0, 0.16, hy);
    // Звёзды зажигаются ПО ОДНОЙ, вразброс (заказчик 2026-10-23: «появляются
    // сплошным полотном, выходят слева направо — не нравится»): у каждой
    // свой порог по доле uStars, яркие — раньше, тусклые — позже; своя
    // короткая растушёвка. Прежде всё поле проявлялось разом и ехало
    // вслед за камерой.
    float on = mix(hash12(cw + 47.0), 0.0, 0.55 * mag) * 0.82;
    float lit = smoothstep(on, on + 0.18, uStars);
    // МЕРЦАНИЕ (заказчик 2026-10-23: «не как огоньки самолёта —
    // теребение света: то чуть ярче, то чуть тусклее»). Не ровный пульс,
    // а неровное дрожание: шум во времени ~7–12 смен в секунду, сглаженный,
    // плюс медленная волна; сильнее у ярких звёзд (как в жизни — их
    // мерцание и видно). Мерцает примерно треть звёзд, у яркой — почти
    // всегда; у каждой свой ход шума. Первая проба (синус, каждая
    // седьмая, 0.55–1) была не видна.
    float hw = hash12(cw + 63.0);
    float twk = step(hw, 0.25 + 0.6 * mag);
    if (twk > 0.5) {
      float f = mix(7.0, 12.0, hash12(cw + 71.0));
      float tt = uTime * f + hash12(cw + 79.0) * 100.0;
      float i0 = floor(tt), fr = fract(tt);
      fr = fr * fr * (3.0 - 2.0 * fr);
      float nz = mix(hash12(cw + vec2(i0, 7.0)), hash12(cw + vec2(i0 + 1.0, 7.0)), fr);
      float slow = 0.5 + 0.5 * sin(uTime * mix(0.7, 1.6, hash12(cw + 83.0)) + hw * 40.0);
      float amp = mix(0.28, 0.5, mag);
      lit *= 1.0 + amp * ((nz - 0.5) * 1.6 + (slow - 0.5) * 0.6);
    }
    // ЗВЁЗДЫ ГАСНУТ ПО СВЕТУ НЕБА (заказчик 2026-10-23: «по мере светления
    // должны пропадать… на заре видно только несколько самых ярких, и их
    // свет приглушён относительно того, насколько небо светлое»). Звезда
    // видна, пока её блеск выше порога, растущего с яркостью неба в этой
    // точке: на светлеющем небе первыми уходят тусклые, у горизонта —
    // раньше, чем в зените; оставшиеся тускнеют на фоне неба.
    // Затем (снимок-образец заказчика: звёзды только в тёмной синеве
    // сверху; в розовой полосе зари — свет солнца, звёзд там нет): тёплый
    // свет зари гасит звёзды целиком — по превышению красного над синим
    // в небе; яркость неба режет тусклые сильнее (порог ×22).
    float skyL = dot(sky0, vec3(0.2126, 0.7152, 0.0722));
    float warm = max(0.0, sky0.r - sky0.b);
    // Порог блеска ×8 (было ×22): на голубеющем зените самые яркие
    // держатся до восхода (заказчик 2026-10-23: «у шапки и под шапкой
    // ещё немного звёзд — но не держать их, а рассчитать уход так»).
    // Затем: «в этом моменте они слишком яркие» (ранняя заря, низ неба
    // сиреневый): строгость по высоте — у зенита ×8, ниже ×22, как прежде;
    // и приглушение светом неба сильнее и раньше: 1 / (1 + 28·яркость).
    float thr = skyL * mix(22.0, 8.0, hy * hy);
    float vis = smoothstep(thr, thr + 0.6, br) / (1.0 + 28.0 * skyL)
      * (1.0 - smoothstep(0.002, 0.04, warm));
    // Снизу вверх мягким градиентом (заказчик: «как только начинает
    // проступать зарево — нижние звёзды уже убирать плавно в опасити,
    // с градиентом»): кромка поднимается от горизонта с ходом зари
    // (uGlowP 0 → 1), переход — 0.5 высоты неба.
    // Кромка поднимается быстро в начале зари и медленно у верха
    // (заказчик 2026-10-23: «к этому моменту в средней части экрана звёзд
    // уже не было», а у шапки на восходе — единичные): pow 0.4.
    float cut = mix(-0.5, 1.05, pow(uGlowP, 0.4));
    vis *= smoothstep(cut, cut + 0.5, hy);
    // под облаком звезды нет: облако её закрывает (даже тонкое — почти)
    float cv;
    float cd = clSample(px, cv).r * step(cv, 1.0) * clRise(cv) * uClA;
    vis *= 1.0 - smoothstep(0.02, 0.25, cd);
    c += sc * s * br * ext * lit * vis;
    // свечение полосы, с прожилками
    c += vec3(0.010, 0.013, 0.024) * mw * (1.0 - 0.75 * lane) * ext * smoothstep(0.4, 1.0, uStars);
  }
  // МЕТЕОРЫ (заказчик 2026-10-26: «по клику на звёздное небо пролетали
  // типа кометы»). Штрих — яркая голова и хвост, который сужается и гаснет
  // к концу; вокруг — слабое свечение. Рисуются здесь же, в небе: горы,
  // человек и облака ложатся поверх (renderOrder выше), а гаснут по той же
  // логике, что звёзды, — по яркости неба, по тёплому свету зари, кромкой
  // снизу и под облаком. Метеор ярок — порог блеска как у яркой звезды.
  if (uMetN > 0.5) {
    vec3 m = vec3(0.0);
    for (int i = 0; i < ${ot}; i++) {
      if (float(i) >= uMetN) break;
      vec4 a = uMa[i], b = uMb[i], q = uMc[i];
      vec2 r = px - a.xy;
      float back = -dot(r, a.zw);
      float side = dot(r, vec2(-a.w, a.z));
      float d2 = dot(r, r);
      float L = max(b.x, 1.0);
      // дальше 24 радиусов головы штрих уже ноль (свечение — гауссом, без
      // хвоста экспоненты: на тёмном небе он читался бы квадратом)
      if (back < -24.0 * b.w || back > L + 24.0 * b.w || abs(side) > 24.0 * b.w) continue;
      float u = max(back, 0.0) / L;
      // хвост: ярче всего сразу за головой, спад экспонентой, мягкие концы
      float tl = smoothstep(-b.z, b.z, back) * (1.0 - smoothstep(0.65, 1.0, u)) * exp(-3.2 * u);
      // к концу хвост рвётся на клочья: шум вдоль пути, привязанный к небу
      // (от точки старта, q.w — пройденный путь), зерно q.y точек
      float g = (q.w - back) / q.y;
      float i0 = floor(g), fg = fract(g);
      fg = fg * fg * (3.0 - 2.0 * fg);
      float nz = mix(hash12(vec2(i0, q.x)), hash12(vec2(i0 + 1.0, q.x)), fg);
      tl *= 1.0 - 0.8 * smoothstep(0.2, 0.85, u) * nz;
      // сужается от головы к концу; не тоньше пикселя — без лесенки
      float wd = max(b.z * (0.3 + 0.7 * exp(-2.0 * u)), 0.6);
      float tail = tl * (exp(-side * side / (2.0 * wd * wd)) + 0.08 * exp(-side * side / (18.0 * wd * wd)));
      // цвет: у головы — бело-голубой, к концу — слабая синева
      vec3 tc = mix(vec3(0.85, 0.91, 1.0), vec3(0.4, 0.55, 1.0), smoothstep(0.0, 0.8, u));
      // голова и мягкое свечение вокруг (q.z — сила свечения, растёт с блеском)
      float head = exp(-d2 / (2.0 * b.w * b.w)) + q.z * exp(-d2 / (32.0 * b.w * b.w));
      m += (tc * tail * 0.8 + vec3(0.92, 0.95, 1.0) * head * 1.5) * b.y;
    }
    if (m.b > 0.0001) {
      float skyL = dot(sky0, vec3(0.2126, 0.7152, 0.0722));
      float warm = max(0.0, sky0.r - sky0.b);
      float thr = skyL * mix(22.0, 8.0, hy * hy);
      float vis = smoothstep(thr, thr + 0.6, 1.3) / (1.0 + 28.0 * skyL)
        * (1.0 - smoothstep(0.002, 0.04, warm));
      float cut = mix(-0.5, 1.05, pow(uGlowP, 0.4));
      vis *= smoothstep(cut, cut + 0.5, hy) * smoothstep(0.0, 0.05, hy);
      float cv;
      float cd = clSample(px, cv).r * step(cv, 1.0) * clRise(cv) * uClA;
      vis *= 1.0 - smoothstep(0.02, 0.25, cd);
      c += m * vis * uMetA;
    }
  }
  // Диск солнца (за горами и облаками — они рисуются поверх).
  float sd = length(px - uSun);
  float disc = 1.0 - smoothstep(uSunR - 1.2 * uPx, uSunR + 1.2 * uPx, sd);
  c = mix(c, uDisc, disc * uDiscA);
  // Блеск днём: тонкие лучи от солнца (угловой шум), гаснут за несколько
  // радиусов диска.
  if (uRays > 0.001) {
    vec2 v = px - uSun;
    float ang = atan(v.y, v.x);
    float r = vn(vec2(ang * 9.0, 0.5)) * 0.6 + vn(vec2(ang * 23.0, 3.5)) * 0.4;
    float fall = exp(-sd / (uSunR * 7.0));
    c += uDisc * uRays * fall * smoothstep(0.5, 1.0, r) * 0.12;
    c += uDisc * uRays * exp(-sd / (uSunR * 2.5)) * 0.3;
  }
  vec3 o = toSrgb(c);
  // Подмешивание шума против полос в растяжке неба (треугольный, ±1/255).
  float dn = hash12(mod(px, 4096.0) + 0.37) + hash12(mod(px, 4096.0) + 7.73) - 1.0;
  o += dn / 255.0;
  gl_FragColor = vec4(o * uA, uA);
}
`,Ll=`
precision highp float;
uniform sampler2D tCl;
uniform vec2 uRes, uSunC;
uniform float uA, uHor0, uSpan, uAsp, uDrift, uLeftK, uRise;
uniform vec3 uLit, uSh, uCream, uGlowC;
${zo}
void main() {
  vec2 px = gl_FragCoord.xy;
  float v;
  vec4 t = clSample(px, v);
  float d = t.r * step(v, 1.0);
  // над колонкой текста облака редеют до прозрачной синевы
  float keep = mix(uLeftK, 1.0, smoothstep(0.5, 0.78, px.x / uRes.x));
  float a = d * keep * uA * clRise(v);
  if (a < 0.002) { gl_FragColor = vec4(0.0); return; }
  vec3 col = mix(uSh, uLit, t.g);
  // к горизонту — тёплее (кремовые облака у дымки)
  col = mix(col, col * uCream, smoothstep(0.35, 1.0, v));
  // у солнца — тёплая подсветка на просвет (тонкие края светятся сильнее)
  float sd = length(uSunC - px) / uRes.y;
  col += uGlowC * (exp(-sd / 0.22) + 0.35 * exp(-sd / 0.7)) * (0.4 + 0.6 * (1.0 - d));
  vec3 o = pow(max(col, 0.0), vec3(1.0 / 2.2));
  gl_FragColor = vec4(o * a, a);
}
`,Ho=`
uniform sampler2D tL;
uniform vec4 uPlate;
uniform float uTop;
vec2 plateUv(vec2 px) {
  float u = (px.x - uPlate.x) / uPlate.z;
  float v = (uPlate.y - px.y) / uPlate.w;
  return vec2(u, (v - uTop) / (1.0 - uTop));
}
// Выборка — всегда, маска — после: выборка внутри ветки на границе слоя
// получала в квадрате 2×2 неверные производные и брала грубый мип-уровень —
// по верхнему краю слоя шла тонкая серая линия через весь кадр.
vec4 plateTex(vec2 uv) {
  vec4 t = texture2D(tL, vec2(clamp(uv.x, 0.0, 1.0), clamp(uv.y, 0.0, 0.999)));
  float inside = step(0.0, uv.y) * step(0.0, uv.x) * step(uv.x, 1.0);
  return t * inside;
}
`,zl=`
precision highp float;
${eo}
${Ho}
uniform float uA, uMLight, uMHaze;
uniform vec3 uMBase, uMTint;
void main() {
  vec2 px = gl_FragCoord.xy;
  vec4 t = plateTex(plateUv(px));
  if (t.a <= 0.002) discard;
  vec3 s = t.rgb;
  vec3 l = pow(s, vec3(2.2));
  float lum = dot(s, vec3(0.3, 0.59, 0.11));
  float hz = smoothstep(0.3, 0.86, lum);
  vec3 hc = skyAt(vec2(px.x, uHor + 3.0 * uPx));
  vec3 c = l * uMTint * uMLight + uMBase * (1.0 - uMLight) * (1.0 - hz);
  c = mix(c, hc, hz * uMHaze);
  float a = t.a * uA;
  gl_FragColor = vec4(toSrgb(c) * a, a);
}
`,Hl=`
precision highp float;
${eo}
${Ho}
uniform float uA, uNLight, uRimK;
uniform vec3 uNTint, uNAmb, uRim;
float aAt(vec2 px) { return plateTex(plateUv(px)).a; }
void main() {
  vec2 px = gl_FragCoord.xy;
  vec4 t = plateTex(plateUv(px));
  if (t.a <= 0.002) discard;
  vec3 s = t.rgb;
  vec3 l = pow(s, vec3(2.2));
  vec3 c = l * uNTint * uNLight + uNAmb;
  if (uRimK > 0.001) {
    vec2 toSun = uSun - px;
    float ds = length(toSun);
    vec2 dir = toSun / max(ds, 1.0);
    // Кромка прижата к краю: ближняя выборка весит больше, и спад —
    // квадратом. С тремя равными выборками до 7 px кромка шла ровной
    // полосой, как обводка поверх силуэта.
    float o = 0.5 * aAt(px + dir * 1.0 * uPx) + 0.3 * aAt(px + dir * 2.2 * uPx) + 0.2 * aAt(px + dir * 4.0 * uPx);
    float rim = t.a * pow(clamp(1.0 - o, 0.0, 1.0), 2.0);
    float near = exp(-ds / (0.75 * uRes.y)) * 0.8 + 0.2;
    float lum = dot(s, vec3(0.3, 0.59, 0.11));
    c += uRim * uRimK * rim * near * (0.35 + 0.9 * lum);
  }
  float a = t.a * uA;
  gl_FragColor = vec4(toSrgb(c) * a, a);
}
`,El=`
precision highp float;
uniform vec2 uRes;
uniform float uVeil, uFlat;
void main() {
  float x = gl_FragCoord.x / uRes.x;
  float k = mix(1.0 - smoothstep(0.0, 0.62, x), 1.0, uFlat);
  k = k * k * (3.0 - 2.0 * k);
  float a = uVeil * k;
  gl_FragColor = vec4(vec3(0.016, 0.06, 0.13) * a, a);
}
`,na=new Mo(new Uint8Array([0,0,0,0]),1,1);na.needsUpdate=!0;function Nl(){return{uRes:{value:new ve(1,1)},uPx:{value:1},uHor:{value:0},uHorPow:{value:3},uGlowW:{value:.5},uHaloW:{value:.08},uPol:{value:0},uSun:{value:new ve},uZen:{value:new V},uHorC:{value:new V},uGlow:{value:new V},uHalo:{value:new V}}}function Il({lite:e=!1}={}){const t=new gt;t.name="dawn";const a=At(),l=Nl(),o=(d,T,b,x)=>{const D=new ue(a,new te({vertexShader:go,fragmentShader:d,uniforms:{...l,...T},transparent:!0,depthTest:!1,depthWrite:!1,...Ce}));return D.frustumCulled=!1,D.renderOrder=b,D.name=x,t.add(D),D},r=o(Dl,{uA:{value:0},uStars:{value:0},uTime:{value:0},uGlowP:{value:0},uClA:{value:0},uCell:{value:e?8:7},uDiscA:{value:0},uSunR:{value:10},uRays:{value:0},uStarOff:{value:new ve},uDisc:{value:new V},uMetN:{value:0},uMetA:{value:0},uMa:{value:Array.from({length:ot},()=>new Ke)},uMb:{value:Array.from({length:ot},()=>new Ke)},uMc:{value:Array.from({length:ot},()=>new Ke)}},200,"dawn-sky"),u=new ue(a,new te({vertexShader:go,fragmentShader:Ll,uniforms:{tCl:{value:na},uRes:{value:new ve(1,1)},uSunC:{value:new ve},uA:{value:0},uHor0:{value:0},uSpan:{value:.754},uAsp:{value:1003/652},uDrift:{value:0},uLeftK:{value:.12},uRise:{value:0},uMorph:{value:0},uLit:{value:new V},uSh:{value:new V},uCream:{value:new V(1,1,1)},uGlowC:{value:new V}},transparent:!0,depthTest:!1,depthWrite:!1,...Ce}));u.frustumCulled=!1,u.renderOrder=202;for(const d of["tCl","uHor0","uSpan","uAsp","uDrift","uRise","uMorph"])r.material.uniforms[d]=u.material.uniforms[d];u.name="dawn-clouds",t.add(u);const v=o(zl,{tL:{value:na},uPlate:{value:new Ke(0,0,1,1)},uTop:{value:0},uA:{value:0},uMLight:{value:0},uMHaze:{value:0},uMBase:{value:new V},uMTint:{value:new V}},203,"dawn-far"),m=o(Hl,{tL:{value:na},uPlate:{value:new Ke(0,0,1,1)},uTop:{value:0},uA:{value:0},uNLight:{value:0},uRimK:{value:0},uNTint:{value:new V},uNAmb:{value:new V},uRim:{value:new V}},204,"dawn-near"),s=o(El,{uVeil:{value:0},uFlat:{value:e?1:0}},205,"dawn-veil");let i=null,c=!1,n=0,p=0,h=!1;const S={near:.4673,far:.6369};function R(d,T){if(i)return i;const b=new Yo;b.setOptions({imageOrientation:"none",premultiplyAlpha:"none",colorSpaceConversion:"none"});const x=I=>new Promise((B,K)=>b.load(Ta+I+(T?"":"-s")+".webp",Z=>{const X=new uo(Z);X.colorSpace=Ha,X.flipY=!1,X.wrapS=X.wrapT=ua,X.minFilter=Ea,X.magFilter=ut,X.anisotropy=4,X.needsUpdate=!0,B(X)},void 0,K)),D=new Promise((I,B)=>b.load(Ta+"clouds.png",K=>{const Z=new uo(K);Z.colorSpace=Ha,Z.flipY=!1,Z.wrapS=$a,Z.wrapT=ua,Z.minFilter=Ea,Z.magFilter=ut,Z.needsUpdate=!0,I(Z)},void 0,B));return i=Promise.all([Gt(Ta+"dawn.json").then(I=>I.json()),x("near"),x("far"),D]).then(([I,B,K,Z])=>{d.initTexture(Z);const X=u.material.uniforms;X.tCl.value=Z,I.clouds&&(X.uSpan.value=I.clouds.span,X.uAsp.value=I.clouds.w/I.clouds.h),h=!0,S.near=I.layers.near.top,S.far=I.layers.far.top,d.initTexture(B),d.initTexture(K),m.material.uniforms.tL.value=B,v.material.uniforms.tL.value=K,m.material.uniforms.uTop.value=S.near,v.material.uniforms.uTop.value=S.far,c=!0}).catch(I=>console.warn("[cfig] рассвет: слои не подгрузились:",I)),i}const H=new ve;let N=!1,E=!1;const C={e:1,stars:0,A:0,px:1,w:1,h:1,hor:0,pFar:null,pNear:null},P=[];let k=null;function O(d){const b=Math.max(1,Math.round(768*d.height/d.width)),x=document.createElement("canvas");x.width=768,x.height=b;const D=x.getContext("2d",{willReadFrequently:!0});D.drawImage(d,0,0,768,b);const I=D.getImageData(0,0,768,b).data,B=new Uint8Array(768*b);for(let K=0;K<B.length;K++)B[K]=I[K*4+3];return{W:768,H:b,a:B}}function L(d,T,b,x,D){const I=(x-T.x0)/T.Wp,B=((T.top-D)/T.Hp-b)/(1-b);return I<0||I>=1||B<0?!1:d.a[Math.min(d.H-1,Math.floor(B*d.H))*d.W+Math.floor(I*d.W)]>40}function _(d,T){if(T<=C.hor)return!1;if(!c||!C.pFar)return!0;try{k||={far:O(v.material.uniforms.tL.value.image),near:O(m.material.uniforms.tL.value.image)}}catch{return!0}return!L(k.far,C.pFar,S.far,d,T)&&!L(k.near,C.pNear,S.near,d,T)}const f=(d,T)=>d+Math.random()*(T-d);function M(d,T,b){if(!N||C.A<.6||C.stars<.2||C.e>-.1||P.length>=ot||!_(d,T))return!1;const x=C.px,D=performance.now(),I=C.w,B=C.h;let K=b?.x,Z=b?.y;for(let g=0;g<12&&K===void 0;g++){const Q=f(.45,.9)*I,J=f(C.hor+.35*(B-C.hor),.84*B);J>C.hor&&_(Q,J)&&(K=Q,Z=J)}if(K===void 0)return!1;const X=b?.sg??(K/I>.68?-1:1),be=(b?.ang??f(18,42))*Math.PI/180,xe=[X*Math.cos(be),-Math.sin(be)],Me=f(.15,.3)*I,me=b?.I??.22*Math.pow(7,Math.pow(Math.random(),1.6));return P.push({t0:D,x:K,y:Z,dir:xe,dist:Me,life:f(1.4,2.2),I:me,L:Me*f(.3,.45)*(.8+.15*me),w:(.5+.35*me)*x,r:(.75+.55*me)*x,glow:.06+.1*me,seed:Math.floor(f(1,97)),grain:f(4,7)*x}),!0}function w(d,T){const b=r.material.uniforms;let x=0;for(let D=P.length-1;D>=0;D--)(d-P[D].t0)/1e3>P[D].life&&P.splice(D,1);for(const D of P){const I=(d-D.t0)/1e3/D.life,B=D.dist*(1-Math.pow(1-I,1.5)),K=Math.min(B,D.L*Qt(I/.4)*(1-.6*Qt((I-.55)/.45))),Z=1+.08*(Math.random()-.5),X=D.I*Qt(I/.15)*(1-Qt((I-.45)/.55))*Z;b.uMa.value[x].set(D.x+D.dir[0]*B,D.y+D.dir[1]*B,D.dir[0],D.dir[1]),b.uMb.value[x].set(K,X,D.w,D.r),b.uMc.value[x].set(D.seed,D.grain,D.glow,B),x++}b.uMetN.value=x,b.uMetA.value=T}function y(d,T,b,x){const D=.035*T,I=Math.max(d/mo,(b?.62:.86)*T)+D,B=I*mo,K=b?.52:.66;return{x0:Math.min(0,Math.max(d-B,K*d-kl*B)),top:I-D+x,Wp:B,Hp:I}}return{group:t,load:R,get ready(){return c},meteor:M,get meteors(){return P.length},update(d){if(N=!!d.on,t.visible=N,!N){E=!1,P.length=0,r.material.uniforms.uMetN.value=0;return}const{w:T,h:b,e:x,lite:D}=d,I=d.now||0,B=Math.min(.1,Math.max(0,(I-p)/1e3));p=I,n=c?Math.min(1,n+B/.5):0,d.instant&&c&&(n=1);const K=d.D-.5,Z=y(T,b,D,K*.0105*b),X=y(T,b,D,K*.028*b),be=y(T,b,D,K*.06*b),xe=re=>X.top-re*X.Hp,Me=xe(po);Object.assign(C,{e:x,stars:d.stars,A:d.A,px:d.px,w:T,h:b,hor:Me,pFar:X,pNear:be});let me,g;if(x<0)me=Ft.x,g=Ft.y+.12*-x;else{const re=x,Ze=Math.sin(re*Math.PI/2);me=Ft.x+(ho.x-Ft.x)*re,g=Ft.y+(ho.y-Ft.y)*Ze}H.set(Math.min(X.x0+me*X.Wp,.9*T),xe(g));const Q=l;Q.uRes.value.set(T,b),Q.uPx.value=d.px,Q.uHor.value=Me,Q.uSun.value.copy(H),Le("zen",x,Q.uZen.value),Le("hor",x,Q.uHorC.value),Le("glow",x,Q.uGlow.value),Le("halo",x,Q.uHalo.value),Q.uHorPow.value=je("horPow",x),Q.uGlowW.value=je("glowW",x),Q.uHaloW.value=je("haloW",x),Q.uPol.value=je("pol",x);const J=r.material.uniforms;J.uA.value=d.A,J.uStars.value=d.stars,J.uTime.value=d.time||0,P.length?w(performance.now(),d.A):J.uMetN.value=0,J.uGlowP.value=Math.min(1,Math.max(0,(x+1)/1.5)),Le("disc",x,J.uDisc.value),J.uDisc.value.multiplyScalar(1.8),J.uDiscA.value=Math.min(1,Math.max(0,(x+.06)/.1)),J.uSunR.value=(.0105+.004*Math.max(0,1-x/.4))*X.Hp,J.uRays.value=Math.min(1,Math.max(0,(x-.25)/.5)),J.uStarOff.value.set(.0845*T,Z.top-y(T,b,D,0).top);const Pe=Math.min(1,Math.max(0,(x+.8)/.75)),Ue=d.A*Math.min(1,Math.max(0,(x+.85)/.3))*(h?1:0);if(E=Ue>.002,r.material.uniforms.uClA.value=E?Ue:0,u.visible=E,E){const re=u.material.uniforms,Ze=y(T,b,D,0);re.uRes.value.set(T,b),re.uHor0.value=Ze.top-po*Ze.Hp,re.uDrift.value=d.time*4*d.px,re.uMorph.value=d.time,re.uA.value=Ue,re.uRise.value=Pe,re.uSunC.value.copy(H),Le("cLit",x,re.uLit.value),Le("cSh",x,re.uSh.value),Le("cCream",x,re.uCream.value),Le("glow",x,re.uGlowC.value),re.uGlowC.value.multiplyScalar(.3)}const Ee=d.A*n;v.visible=m.visible=Ee>.002;const Fe=v.material.uniforms;Fe.uPlate.value.set(X.x0,X.top,X.Wp,X.Hp),Fe.uA.value=Ee,Fe.uMLight.value=je("mLight",x),Fe.uMHaze.value=je("mHaze",x),Le("mBase",x,Fe.uMBase.value),Le("mTint",x,Fe.uMTint.value);const _e=m.material.uniforms;_e.uPlate.value.set(be.x0,be.top,be.Wp,be.Hp),_e.uA.value=Ee,_e.uNLight.value=je("nLight",x),_e.uRimK.value=je("rimK",x),Le("nTint",x,_e.uNTint.value),Le("nAmb",x,_e.uNAmb.value),Le("rim",x,_e.uRim.value);const fe=je("veil",x)*(D?.75:1)*d.A;s.material.uniforms.uVeil.value=fe,s.visible=fe>.002}}}const Bt="home",Ga=window.matchMedia("(prefers-reduced-motion: reduce)");let pt=Ga.matches;Ga.addEventListener?.("change",()=>{pt=Ga.matches,yt=-1,ga=-1});const Eo=5,Nt=[3.1,3.9];let Ca=.5;const St={a:0,b:0};let Ae=null,We=null,$=null,ke=null,qe=null,ht=null,ze=null,nt=null,va=null,rt=null;const $e={alpha:0,time:0,w:1,h:1,dpr:1,textL:1},we=[5.08,6.2],Wl=.5,Ol=.05,Pa=[5.4,6.14];function Gl(e,t){t.k=Ba?F(4.9,5.2,e)*(1-F(6.3,6.8,e)):0;const a=Math.min(1,Math.max(-.5,(e-Pa[0])/(Pa[1]-Pa[0])));return t.c=-Math.cos(2*Math.PI*a),t.u=(1+t.c)/2,t.textR=t.k*(1-t.u),t}const Rt={k:0,u:0,c:0,textR:0};let Ba=!1,he=null;const kt={t:NaN,c:null,v:0},Ka=new Va(35,1,1,1e6),se={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},Jt=[0,0,0],ea=[0,0,0],ta=[0,0,0],Kt=new V,Be={lat:0,lon:0,tilt:0,head:0,sx:0,sy:0,ok:!1};function ma(e,t){if(!ze||e<=we[0])return;Be.ok||(Pt(we[0],Be),Be.ok=!0);const a=F(we[0],we[1],e);t.lat=Be.lat,t.lon=Be.lon,t.head=Be.head,t.tilt=Be.tilt*(1-a),t.sx=Be.sx+(.3-Be.sx)*a,t.sy=Be.sy+(0-Be.sy)*a}const Ye=Ge(Y.lat,Y.lon);function No(e,t,a){return Pt(t,se),ma(t,se),Io(e,a)}function Io(e,t){return Ro(se.lat,se.lon+e,se.d,se.tilt,se.head,Jt,ea,ta),t.position.set(Jt[0],Jt[1],Jt[2]),t.up.set(ea[0],ea[1],ea[2]),t.lookAt(ta[0],ta[1],ta[2]),t.aspect=ae/ce,t.near=Math.max(.02,se.d*.02),t.far=Math.max(se.d*4,se.d+2.2*q)+2e5,t.updateProjectionMatrix(),t.projectionMatrix.elements[8]=-se.sx,t.projectionMatrix.elements[9]=-se.sy,t.updateMatrixWorld(),Kt.set(Ye[0],Ye[1],Ye[2]).project(t),(Kt.x*.5+.5)*(st||innerWidth)}function Bl(){const e=document.querySelector("#container-probe i")?.getBoundingClientRect();return e&&e.width>0?e.left+e.width/2:innerWidth/2}function Kl(){const e=ae+"x"+ce;if(he&&he.key===e)return he.v;const t=Bl();let a=0,l=1/0;for(let o=-30;o<=60;o+=.25){const r=No(o,we[1],Ka);Kt.z<1&&Math.abs(r-t)<l&&(l=Math.abs(r-t),a=o)}return Pt(we[1],se),ma(we[1],se),he={key:e,v:a,goal:t,lat:se.lat,lon:se.lon,sx:se.sx,sy:se.sy},he.v}const ft=[4.85,5.08];let xt=null,pa=0,da=null,ie=!1,ra=!1,He=null;const Ul=performance.now();let Pt=null;const j={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},de={resW:1,resH:1,time:0,asm:0,wave:1,map:0,houses:0,marks:0,alpha:1,points:1,focal:1e3,far:30},le={alpha:0,space:0,atm:0,s0:1,lod:0,markR:1,mark:0,time:0,lines:0,rivers:0,cz:0,czk:0,stars:0,px:1,scrimLeft:0,scrimAll:0,hole:0,holeR:Ne},ne={},Te={};let ge=0,lt=0,Da=0,tt=0,Ua=0,It=0,wo=0;const vt=[0,0,0],aa=[0,0,0],oa=[0,0,0];function ql(){const e=document.querySelector("#canvas-wrapper");if(!e)return null;let t=e.querySelector("canvas.canvas-earth");return t||(t=document.createElement("canvas"),t.className="canvas-earth",t.setAttribute("aria-hidden","true"),e.append(t)),t}const Wo=matchMedia("(pointer: coarse)");let et=0,ha=0;function Lt(){const e=innerWidth,t=innerHeight;return et&&Wo.matches&&e===ha&&Math.abs(t-et)<.25*et||(ha=e,et=t),et}function jl(){wt=!0;const e=et,t=ha;Lt(),!(Wo.matches&&et===e&&ha===t)&&(qa(),yt=-1)}function qa(){const e=Lt(),t=n=>{const p=document.querySelector(n);if(!p)return null;const h=p.getBoundingClientRect();return{y:h.top+scrollY,h:h.height}},a=t("main .about"),l=t("main .growth"),o=t("main .reach"),r=t("main .companies"),u=t("main .values"),v=t("main .social");if(!a||!l||!o||!r||!u||!v){He=null;return}const m=e0(),s=new Array(11).fill(0);s[0]=m;const i=n=>n.y+.5*n.h-.5*e;s[1]=m+.8*e,s[2]=s[1]+1.1*e,s[3]=s[2]+1.1*e,St.a=s[3]-.25*e,St.b=St.a+1*e,s[4]=St.b+.15*e,Ba=matchMedia("(min-width: 901px)").matches,Ba?(s[5]=s[4]+1.5175*e,s[6]=s[5]+1.0508*e,s[9]=s[6]+3.5016*e):(s[5]=i(o),s[6]=Math.max(s[5]+1.05*e,r.y-.55*e),s[9]=u.y-.2*e),s[8]=s[9]-1.5*e,s[7]=(s[6]+s[8])/2,s[10]=s[9]+.8*e;for(let n=1;n<s.length;n++)s[n]=Math.max(s[n],s[n-1]+40);const c=[0,1,2,3,4,4.5,5,5.5,6,7,8];He={ys:s,ts:c,start:m,map:Ya(s,c)},Nt[0]=He.map(St.a),Nt[1]=He.map(St.b),Zl(v)}function $l(e){return He?He.map(e):0}function Vl(e){return He?_0(He.map,e,He.ys[0],He.ys[He.ys.length-1]):0}let ae=0,ce=0,st=0,ja=0,wt=!0,yo=0;function to(){const e=Math.min(ie?1.5:1.75,window.devicePixelRatio||1);if(!wt&&e===yo)return;wt=!1,yo=e,st=ke.clientWidth,ja=ke.clientHeight;const t=Math.max(1,Math.round(st*e)),a=Math.max(1,Math.round(ja*e));t===ae&&a===ce||(ae=t,ce=a,Ae.setPixelRatio(1),Ae.setSize(t,a,!1),$.aspect=t/a,xt?.resize(t,a),nt?.resize(t,a))}const mt=new V,_t=new V,la=new V,La=Ge(Y.lat,Y.lon+Ne/(111.32*Math.cos(Y.lat*Math.PI/180))),ee={amount:0,time:0,w:1,h:1,hx:0,hy:0,r:1,dark:0,erode:0,dim:0,fly:0,neon:0,done:!1,textL:1,px:1};let za=null;function Xl(e,t){if(ee.amount=F(.35,1,e),ee.dark=0,ee.erode=Ua,ee.dim=.55*F(0,.35,ge)*(1-lt),ee.fly=It,ee.neon=ne.neon||0,ee.done=It>=1,ee.textL=ie?1:.45,ee.px=ae/(st||ae),ee.amount>.002){mt.set(Ye[0],Ye[1],Ye[2]).project($),ee.hx=(mt.x*.5+.5)*ae,ee.hy=(mt.y*.5+.5)*ce,mt.set(La[0],La[1],La[2]).project($),ee.r=Math.max(.33*ce,Math.abs((mt.x*.5+.5)*ae-ee.hx)),$.getWorldDirection(_t),la.copy($.position).normalize();const r=$.position.length(),u=_t.dot(la);if(_t.addScaledVector(la,-u),r>q&&_t.lengthSq()>1e-8){_t.normalize();const v=q/r,m=Math.sqrt(1-v*v);mt.copy(_t).multiplyScalar(v).addScaledVector(la,-m).multiplyScalar(Math.sqrt(r*r-q*q)).add($.position).project($),ee.top=(mt.y*.5+.5)*ce-.04*ce}else ee.top=1e6;ee.topF=.1*ce}ee.t=e;const l=ee.amount>.002&&!ee.done?za?.isConnected?za:za=document.querySelector(".acc-areas"):null,o=l&&l.getBoundingClientRect();if(o&&o.height>0){const r=innerHeight,u=o.top+.5*o.height,v=r+.5*o.height,m=.5*r;ee.accP=[Math.min(1,Math.max(0,(v-u)/(v-m))),Math.min(1,Math.max(0,(m-u)/(.5*r)))]}else ee.accP=null;ee.time=t,ee.w=ae,ee.h=ce,ht.update(ee)}const oe={yc:0,y0:0,y1:0,ok:!1,map:null},Yl=.75,Re={on:!1,A:0,D:0,e:-1,stars:0,time:0,w:1,h:1,px:1,lite:!1,camera:null,now:0};function Oo(e){const t=window.__cfigDawnHold;if(!t)return e;const a=t.a,l=t.b;return!(l>a)||e<=a?e:e-Math.min(e-a,l-a)}function Zl(e){if(oe.ok=!1,!e)return;const t=Lt();oe.yc=Vl(7),oe.y0=oe.yc,oe.y1=Math.max(oe.y0+1.5*t,Oo(e.y+e.h-t));const a=window.__cfigDawnHold;a&&a.b>a.a&&(oe.y1=Math.max(oe.y0+1.5*t,a.a+1.8*t));const l=Math.min(oe.y1-.5*t,Math.max(oe.y0+.5*t,e.y-.6*t));oe.map=Ya([oe.y0,l,oe.y1],[0,.22,Yl]),oe.ok=!0}function Ql(e){return-1+.5*Math.min(1,Math.max(0,(e-.14)/.6))+.5*F(.14,.74,e)+F(.74,1,e)}function Jl(e,t){if(!rt||!oe.ok)return;const a=Lt();e=Oo(e),e>oe.yc-2.5*a&&rt.load(Ae,!ie||ae>1100),Re.on=e>=oe.yc;const l=Math.min(1,Math.max(0,oe.map(Math.min(oe.y1,Math.max(oe.y0,e))))),o=Ql(l),r=1-F(-.3,.45,o);Re.D=l,Re.e=o,Re.A=F(oe.y0,oe.y0+.5*a,e),Re.stars=F(oe.y0,oe.y0+1.1*a,e)*r,Re.time=t,Re.w=ae,Re.h=ce,Re.px=ae/(st||ae),Re.lite=ie,Re.camera=$,Re.now=performance.now(),rt.update(Re)}const en="a,button,input,textarea,select,label,summary,details,video,audio,img,picture,svg,iframe,[role=button],[role=link],[contenteditable],[tabindex]";function tn(e,t){const a=document.caretRangeFromPoint?.(e,t),l=a?.startContainer;if(!l||l.nodeType!==3||!l.data.trim())return!1;const o=document.createRange();for(const r of[a.startOffset-1,a.startOffset])if(!(r<0||r>=l.data.length)){o.setStart(l,r),o.setEnd(l,r+1);for(const u of o.getClientRects())if(e>=u.left-2&&e<=u.right+2&&t>=u.top-2&&t<=u.bottom+2)return!0}return!1}function an(e){if(pt||!rt||!Re.on||e.button!==0||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||document.body.dataset.route!==Bt)return;const t=e.target;if(!(t instanceof Element)||t.closest(en)||getSelection&&!getSelection().isCollapsed||tn(e.clientX,e.clientY))return;const a=ke.getBoundingClientRect();!a.width||!a.height||rt.meteor((e.clientX-a.left)*(ae/a.width),ce-(e.clientY-a.top)*(ce/a.height))}function Go(e,t){if(ge=ze?Math.min(1,Math.max(0,(e-Nt[0])/(Nt[1]-Nt[0]))):0,tt=F(.6,.9,ge),Ua=Math.pow(Math.min(1,ge/Ca),.55),It=Math.min(1,Math.max(0,(ge-Ca)/(1-Ca))),lt=F(.6,.95,ge),Da=F(.65,1,ge),Pt(e,j),ze){ma(e,j);const i=Kl();if(!(e<=we[0]))if(e<=we[1]){if(kt.t!==e||kt.c!==he){he.x0===void 0&&(he.x0=No(0,we[0],Ka));const c=he.x0+(he.goal-he.x0)*F(we[0],we[1],e);let n=0,p=i*1.3;Pt(e,se),ma(e,se);for(let h=0;h<22;h++){const S=(n+p)/2;Io(S,Ka)>c?n=S:p=S}kt.t=e,kt.c=he,kt.v=(n+p)/2}j.lon+=kt.v}else{j.lat=he.lat,j.lon=he.lon+i;const c=F(we[1],7.3,e);j.sx=he.sx+(1.3-he.sx)*c,j.sy=he.sy+(.15-he.sy)*c}}Ro(j.lat,j.lon,j.d,j.tilt,j.head,vt,aa,oa),$.position.set(vt[0],vt[1],vt[2]),$.up.set(aa[0],aa[1],aa[2]),$.lookAt(oa[0],oa[1],oa[2]);const a=Math.hypot(vt[0],vt[1],vt[2])-q;if($.near=Math.max(.02,j.d*.02),$.far=Math.max(j.d*4,j.d+2.2*q)+2e5,$.updateProjectionMatrix(),$.projectionMatrix.elements[8]=-j.sx,$.projectionMatrix.elements[9]=-j.sy,$.updateMatrixWorld(),Gl(e,Rt),Rt.k>0&&ze){Kt.set(Ye[0],Ye[1],Ye[2]).project($);const i=Kt.x*.5+.5,c=Wl+Ol*Rt.c;j.sx+=2*(c-i)*Rt.k,$.projectionMatrix.elements[8]=-j.sx}$.projectionMatrixInverse.copy($.projectionMatrix).invert();const l=ce/(2*Math.tan($.fov*Math.PI/360)),o=1-F(30,140,j.d);if(de.time=t,de.asm=F(1.85,3.05,e),de.wave=1-F(1.9,3,e),de.map=F(2.45,3.2,e),de.houses=F(2.55,3.45,e),de.marks=F(3,3.5,e)*(1-F(13,24,j.d)),de.points=1-.45*F(3,4,e),de.alpha=o*(1-lt),de.focal=l,de.resW=ae,de.resH=ce,de.far=Math.max(14,j.d*2.6),ze){Object.assign(ne,de),ne.hideTech=!1,ne.hideMarks=!1,ne.asm=1,ne.wave=0,ne.scr=ht&&It<1?1:0,ne.dust=Ua,ne.fly=It,ne.neon=F(.72,.86,ge),ne.cloudA=Math.max(.001,F(1.5,2.4,e)),ne.cloudTex=ht?.texture,ge<=0&&(wo=t);const i=t-wo;ne.driftX=Math.min(.035,i*(.035/1.6)*2*ce/ae),ne.driftY=-Math.min(.006,i*(.006/1.6)*2),ne.dustL=ie?1:.45,ne.map=F(.7,1,ge),ne.camera=$,ne.houses=F(.75,1,ge),ne.marks=F(.88,1,ge)*(1-F(13,24,j.d)),ne.points=1-.45*F(.9,1,ge),ne.alpha=(1-F(40,75,j.d))*(ge>0?1:0),ze.update(ne)}ht&&Xl(e,t);const r=Math.max(.03,j.d*.0055),u=Math.log2(r),v=Math.floor(u);le.s0=Math.pow(2,v),le.lod=u-v;const m=F(3.7,4.5,e),s=F(we[1]+.05,6.75,e);if(le.alpha=m*(1-s),le.space=F(5.2,6.4,e),le.atm=F(5,6.2,e),le.markR=Math.max(.6,a*.012),le.mark=0,le.time=t,le.lines=F(4.1,4.9,e)*(1-s),le.rivers=F(4.1,4.7,e)*(1-F(5.6,6.2,e)),le.cz=F(4.3,5,e)*(1-s),le.stars=0,le.px=Math.min(2,Ae.getPixelRatio()*(ae/st||1)),le.czk=F(40,260,j.d),le.hole=o*de.map,le.holeR=Ne,le.scrimLeft=0,le.scrimAll=0,nt){Object.assign(Te,le);const i=F(2.8,3.8,e)*.6+F(4,4.6,e)*.4;Te.alpha=i*(1-s)*Da*F(.5,1,tt),Te.haloAlpha=i*(1-F(we[1]+.3,7,e))*Da*F(.5,1,tt),Te.mark=F(18,50,j.d)*(1-s),Te.markBlue=F(ft[0],ft[1],e),Te.markGrow=1+.75*(1-F(ft[0],6,e)),Te.stars=F(5.6,6,e)*(1-F(we[1],we[1]+.25,e)),Te.czk=F(120,520,j.d);const c=F(30,75,j.d);Te.hole=de.map*(1-F(72,100,j.d)),Te.holeR=7+(Te.markR*.45-7)*c,Te.scrimLeft=(ie?0:.72)*tt,Te.scrimSide=Rt.textR,Te.scrimAll=(ie?.5:0)*tt,nt.update(Te,$),va&&($e.alpha=F(ft[0]+.6*(ft[1]-ft[0]),ft[1],e)*(1-s),$e.textL=ie?1:.3,$e.textR=Rt.textR,$e.time=t,$e.d=j.d,$e.w=ae,$e.h=ce,$e.dpr=ae/(st||ae),va.update($e)),le.alpha*=1-lt}xt?.update(le,$),qe&&ln(e,t,l,a,o,s)}let Ao=0;const W={flat:0,pre:0,neonT:0,neonP:0,grow:0,ft:0,time:0,asm:0,wave:1,focal:1,far:30,dpr:1,w:1,h:1,cssW:1,cssH:1,bg:0,city:0,alpha:1,cam:null,fadeKm:100,veil:.9,sphere:{al:[0,0,0,0],draw:[1,1,1,1],reg:[0,0],reach:0}},on=[.85,.7,1,.65];function ln(e,t,a,l,o,r){if(W.time=t,W.asm=de.asm,W.wave=de.wave,W.focal=a,W.far=de.far,W.w=ae,W.h=ce,W.cssW=st||1,W.cssH=ja||1,W.dpr=ae/W.cssW,W.bg=F(-.6,.9,e),W.city=F(1.9,2.8,e),W.alpha=o*(1-lt),ze){const S=ee.done?0:ee.dim;W.holdA=F(.18,.3,ge)*(1-F(40,75,j.d)),W.bake=Math.max(0,1-.17/Math.max(.17,1-S)),W.ground=1-tt,W.tint=tt}else W.holdA=0,W.bake=0,W.ground=1,W.tint=0;W.cam=$.position,W.camera=$,W.fadeKm=Math.max(1,l*.05),W.veil=0;const u=-.5;W.flat=F(1.55,2.25,e),W.pre=1-F(1,1.45,e),W.neonT=1-F(1.6,2.3,e),W.neonP=(1-F(3.9,4.5,e))*(1-.6*W.city),W.neonP*=1-lt,W.asm=F(2+u,3.05+u,e),W.grow=F(2.6+u,3.45+u,e),W.hatch=F(2.85+u,3.4+u,e),W.paint=F(2.75+u,3.15+u,e),le.inkH=F(4.7,5.4,e),le.inkP=F(4.55,5.1,e),W.ft+=Math.max(0,t-Ao)*(1-.9*W.flat);const v=F(3.3,4,e)*(1-F(5.8,6.5,e)),m=F(4.3,4.9,e),s=F(110,220,j.d),i=1-lt;W.sphere.reg[0]=.55*v*s*(1-.6*m)*i,W.sphere.reg[1]=.8*v*s*(1-.45*m)*i,W.sphere.reach=Math.exp(Math.log(.004)+(Math.log(.45)-Math.log(.004))*F(3.35,5.2,e)),Ao=t;const c=on,n=F(3.8,4.4,e)*(1-r)*(1-lt),p=1-F(5.6,6.3,e),h=F(500,1100,j.d);W.sphere.al[0]=c[0]*n*h,W.sphere.al[1]=c[1]*n*h,W.sphere.al[2]=c[2]*n,W.sphere.al[3]=c[3]*n*p*h,W.sphere.draw[0]=F(3.9,5.4,e),W.sphere.draw[1]=F(4,5.2,e),W.sphere.draw[2]=F(3.9,4.6,e),W.sphere.draw[3]=F(3.85,4.5,e),qe.update(W)}let xa=-1;function nn(e,t=e>=.5){const a=Math.round(e*100)/100;document.documentElement.classList.toggle("earth-night",t),a!==xa&&(xa=a,ke.parentElement?.style.setProperty("--earth-dark",String(a)))}document.addEventListener("astro:after-swap",()=>{document.body.dataset.route!==Bt&&(ke?.parentElement?.style.removeProperty("--earth-dark"),xa=-1)});let yt=-1,ga=-1;function Bo(){if(!He||!ze||!xt)return;const e=window.scrollY||0,t=Lt(),a=pt?1:F(He.start-.55*t,He.start+.05*t,e),l=a.toFixed(3);if(ke.style.opacity!==l&&(ke.style.opacity=l),a<=.001)return;to();const o=pt?Eo:$l(e),r=pt?0:(performance.now()-Ul)/1e3;if(pt&&o===ga&&e===yt)return;ga=o,yt=e,Go(o,r),ze&&nn(Math.max(tt,F(0,.4,ge)),F(.08,.2,ge)>.5),Jl(e,r);const u=!(rt&&Re.on&&Re.A>=1);xt.group.visible=u,nt&&(nt.group.visible=u),ht?.prerender(Ae,$),Ae.render(We,$)}async function rn(){const e=ie?256:512,t=(f,M)=>a0(f,{srgb:M,renderer:Ae}),a=ra?"-s":"",l=[t("land"+a+".webp"),t("europe"+a+".webp"),t("pardubice"+a+".webp",!1)],[o,r,u,v,m]=await Promise.all([Promise.all(l),l[2].then(f=>l0(e,f.image)),n0(),o0(),Gt("/assets/map/pardubice.json").then(f=>f.json())]),[s,i,c]=o,n=Object.values(m.проекты||{});ze=sl({luma:r,lumaSize:e,houses:u,projects:n},c,{side:ie?128:256,field:24,lite:ie});const[p,h,S,R,H,N,E]=await Promise.all([t("land-dem.webp"),t("land-a.webp"),t("land-b.webp"),t("land-far.webp"),t("land-hor.webp"),t("neon-near"+a+".webp"),t("neon-far"+a+".webp")]);for(const f of[p,h,S,R,H,N,E])f.wrapS=f.wrapT=ua,f.flipY=!1,f.needsUpdate=!0;S.magFilter=$t,S.minFilter=$t,S.generateMipmaps=!1;for(const f of[p,R,H,N,E])f.magFilter=$t,f.minFilter=$t,f.generateMipmaps=!1;const C={dem:p,a:h,b:S,far:R,hor:H,neonN:N,neonF:E},P=(await(await Gt(Za+"land-routes.json")).json()).routes;o.push(p,h,S,R,H,N,E),qe=await k0(c,{lite:ie,houses:u,pdb:Y,land:C,routes:P,neonN:ra?1024:2048});const k=new ia,O=So(Y.lat,Y.lon),L=Ge(Y.lat,Y.lon);k.makeBasis(new V(...O.e),new V(...O.u),new V(-O.n[0],-O.n[1],-O.n[2])).setPosition(L[0],L[1],L[2]),ze.group.matrixAutoUpdate=!1,ze.group.matrix.copy(k);const _={land:s,eu:i,mipK:ra?-1:0};if(xt=fo("ink",_,null,{pdb:Y,lite:ie}),We.add(xt.group),ze&&(nt=fo("dots",_,v,{pdb:Y,lite:ie}),We.add(nt.group,ze.group),va=Rl(Y),We.add(va.group),rt=Il({lite:ie}),We.add(rt.group),document.addEventListener("click",an)),qe){qe.cityGroup.matrixAutoUpdate=!1,qe.cityGroup.matrix.copy(k),We.add(qe.cityGroup,qe.sphereGroup,qe.veil);const[f,M]=await Promise.all([t("cloud-noise.png"),t("cloud-perlin.png")]),w=U0({noise:f,perlin:M,frame:k});o.push(f,M),Ae.compile(w.scene,$),ht=P0(w),We.add(ht.mesh),oo=w.trail}ae=0,wt=!0,to(),xt.resize(ae,ce),nt?.resize(ae,ce);for(const f of o)Ae.initTexture(f);Uo=o,We.traverse(f=>{f.visible=!0}),Ae.compile(We,$),Go(pt?Eo:0,0)}function wa(){pa&&(Fo.ticker.remove(Bo),pa=0),ke&&(ke.style.opacity="0"),oo?.listen(!1)}function Ko(){pa||ya||ao||document.body.dataset.route!==Bt||(Fo.ticker.add(Bo),pa=1,oo?.listen(!0))}let ao=!1,ya=!1,oo=null,Uo=[];function un(){ao=!0,wa()}function sn(){if(ao=!1,!(!We||ya)){ae=0,wt=!0,yt=-1,ga=-1,to();for(const e of Uo)Ae.initTexture(e);Ae.compile(We,$),da&&da.then(Ko)}}function xn(){if(document.body.dataset.route!==Bt){wa();return}if(!Ae){if(ke=ql(),!ke)return;ie=Math.min(innerWidth,innerHeight)<720||matchMedia("(pointer: coarse)").matches,ra=ie;try{Ae=new qo({canvas:ke,alpha:!0,antialias:!ie,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{Ae=null;return}Ae.setClearColor(0,0),Ae.sortObjects=!0,We=new Xa,$=new Va(35,1,.05,1e6),Pt=V0(ie?j0:Do,ie),ke.addEventListener("webglcontextlost",un),ke.addEventListener("webglcontextrestored",sn),da=rn().catch(e=>{ya=!0,console.warn("[cfig] Земля не поднялась:",e),wa()}),Lt(),addEventListener("resize",jl,{passive:!0}),new ResizeObserver(()=>{wt=!0}).observe(ke),new ResizeObserver(()=>{document.body.dataset.route===Bt&&(qa(),yt=-1)}).observe(document.documentElement)}qa(),yt=-1,xa=-1,wt=!0,da.then(()=>{ya||(qe?.collect(),Ko())})}document.addEventListener("astro:before-preparation",e=>{ke&&e.to&&new URL(e.to).pathname!==location.pathname&&wa()});export{xn as init};
