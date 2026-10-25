import{T as e0,a as _o,N as ia,n as Ka,ar as Ot,L as ua,o as pt,aN as Ro,as as Pa,aO as t0,G as Ft,V as Re,M as me,c as Ca,b as ae,O as Xe,i as Te,j as ct,ae as Qa,D as zt,a2 as Qe,g as J,aP as Da,B as Ce,e as N,aQ as a0,S as Lo,k as o0,l as l0,f as Ge,p as n0,h as r0,A as i0,ag as Fo,d as Gt,K as ka,aR as za,a4 as Ea,W as u0,P as To,aS as Vt}from"./three.module.BH5gECCB.js";import{P as It,e as s0}from"./Lab.astro_astro_type_script_index_0_lang.BeoES-qh.js";import{g as Po,n as c0}from"./Base.astro_astro_type_script_index_0_lang.BYkY_PG5.js";import{a as f0,L as v0,b as m0}from"./LineSegments2.DI2R0bZC.js";import"./router.UeToN5xW.js";const j=6371,B={lat:50.039378,lon:15.77521},Ue=3.75,Tt=Math.PI/180;function Le(e,t,a=j,l=[0,0,0]){const r=e*Tt,i=t*Tt,f=Math.cos(r);return l[0]=a*f*Math.sin(i),l[1]=a*Math.sin(r),l[2]=a*f*Math.cos(i),l}function Co(e,t){const a=e*Tt,l=t*Tt,r=Math.sin(a),i=Math.cos(a),f=Math.sin(l),d=Math.cos(l);return{e:[d,0,-f],u:[i*f,r,i*d],n:[-r*f,i,-r*d]}}function va(e,t){const a=e.length,l=new Float64Array(a-1),r=new Float64Array(a);for(let i=0;i<a-1;i++)l[i]=(t[i+1]-t[i])/(e[i+1]-e[i]);r[0]=l[0],r[a-1]=l[a-2];for(let i=1;i<a-1;i++)r[i]=l[i-1]*l[i]<=0?0:(l[i-1]+l[i])/2;for(let i=0;i<a-1;i++){if(l[i]===0){r[i]=0,r[i+1]=0;continue}const f=r[i]/l[i],d=r[i+1]/l[i],m=f*f+d*d;if(m>9){const v=3/Math.sqrt(m);r[i]=v*f*l[i],r[i+1]=v*d*l[i]}}return i=>{if(i<=e[0])return t[0];if(i>=e[a-1])return t[a-1];let f=0;for(;i>e[f+1];)f++;const d=e[f+1]-e[f],m=(i-e[f])/d,v=m*m,u=v*m;return(2*u-3*v+1)*t[f]+(u-2*v+m)*d*r[f]+(-2*u+3*v)*t[f+1]+(u-v)*d*r[f+1]}}function Et(e){const t=e.map(r=>r.t),a=Object.keys(e[0]).filter(r=>r!=="t"),l={};for(const r of a){const i=e.map(f=>r==="d"?Math.log(f[r]):f[r]);l[r]=va(t,i)}return(r,i)=>{for(const f of a)i[f]=f==="d"?Math.exp(l[f](r)):l[f](r);return i}}function Do(e,t,a,l,r,i,f,d){const m=Co(e,t);Le(e,t,j,d);const v=l*Tt,u=r*Tt,o=m.n[0]*Math.cos(u)+m.e[0]*Math.sin(u),n=m.n[1]*Math.cos(u)+m.e[1]*Math.sin(u),g=m.n[2]*Math.cos(u)+m.e[2]*Math.sin(u),A=Math.cos(v)*a,p=Math.sin(v)*a;i[0]=d[0]+m.u[0]*A-o*p,i[1]=d[1]+m.u[1]*A-n*p,i[2]=d[2]+m.u[2]*A-g*p,f[0]=o,f[1]=n,f[2]=g}const at="/assets/earth/",Xt={lon0:-12,lon1:44,lat0:34,lat1:62},Yt={lon0:9.5,lon1:22.5,lat0:46.5,lat1:53.5},d0=new e0;function p0(e,{srgb:t=!1,renderer:a=null}={}){return new Promise((l,r)=>{d0.load(at+e,i=>{i.colorSpace=t?_o:ia,i.wrapS=Ka,i.wrapT=Ot,i.minFilter=ua,i.magFilter=pt,a&&(i.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy())),l(i)},void 0,r)})}function eo(e,{srgb:t=!1,red:a=!1,renderer:l=null}={}){const r=new Ro;return r.setOptions({imageOrientation:"flipY",premultiplyAlpha:"none"}),new Promise((i,f)=>{r.load(at+e,d=>{const m=new Pa(d);m.colorSpace=t?_o:ia,m.flipY=!1,a&&(m.format=t0),m.wrapS=Ka,m.wrapT=Ot,m.minFilter=ua,m.magFilter=pt,l&&(m.anisotropy=Math.min(8,l.capabilities.getMaxAnisotropy())),m.needsUpdate=!0,i(m)},void 0,f)})}async function h0(e=.6){const t=await(await fetch(at+"lines.bin")).arrayBuffer(),a=new DataView(t);let l=0;const r=a.getUint32(l,!0);l+=4;const i=[],f=[0,0,0];for(let d=0;d<r;d++){const m=a.getUint32(l,!0),v=a.getUint32(l+4,!0);l+=8;const u=new Uint32Array(m);for(let p=0;p<m;p++)u[p]=a.getUint32(l,!0),l+=4;const o=new Float32Array(v),n=new Float32Array(v);for(let p=0;p<v;p++)o[p]=a.getInt16(l,!0)/180,n[p]=a.getInt16(l+2,!0)/180,l+=4;const g=new Float32Array((v-m)*6);let A=0;for(let p=0;p<m;p++){const M=u[p],P=p+1<m?u[p+1]:v;for(let I=M;I<P-1;I++)Le(n[I],o[I],j+e,f),g[A++]=f[0],g[A++]=f[1],g[A++]=f[2],Le(n[I+1],o[I+1],j+e,f),g[A++]=f[0],g[A++]=f[1],g[A++]=f[2]}i.push(g.subarray(0,A))}return i}async function x0(e=512){const t=await(await fetch(at+"pardubice.webp")).blob(),a=await createImageBitmap(t,{resizeWidth:e,resizeHeight:e,resizeQuality:"medium"}),l=document.createElement("canvas");l.width=e,l.height=e;const r=l.getContext("2d",{willReadFrequently:!0});r.drawImage(a,0,0);const i=r.getImageData(0,0,e,e).data,f=new Float32Array(e*e);for(let d=0;d<f.length;d++)f[d]=i[d*4+1]/255;return a.close?.(),f}async function g0(){const e=await(await fetch("/assets/map/pardubice-houses.bin")).arrayBuffer(),t=new DataView(e),a=t.getUint32(0,!0);let l=0,r=4;for(let n=0;n<a;n++){const g=t.getUint16(r,!0);l+=g,r+=6+g*4}const i=new Uint32Array(a),f=new Uint16Array(a),d=new Float32Array(a),m=new Float32Array(a),v=new Float32Array(l),u=new Float32Array(l);r=4;let o=0;for(let n=0;n<a;n++){const g=t.getUint16(r,!0);f[n]=g,d[n]=t.getUint8(r+3)/2,m[n]=t.getUint16(r+4,!0),r+=6,i[n]=o;for(let A=0;A<g;A++)v[o]=t.getUint16(r,!0)/65535,u[o]=t.getUint16(r+2,!0)/65535,r+=4,o++}return{n:a,start:i,cnt:f,h:d,area:m,u:v,v:u}}const qa=`
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
`,Ve=3.75,Se={h:13,n:1024,lo:195,hi:365,far:{h:48,n:1024,lo:180,hi:1150},hor:{h:60,n:512,lo:180,hi:1610,cz:-50}},Ke=24,ja=(()=>{try{return new URLSearchParams(location.search).get("fx")==="scan"?1:0}catch{return 0}})(),ko=`
#define FX ${ja}
#define SCAN_P 8.0
#define SCAN_D 3.6
`,w0={INK1:"#111e2d",INK2:"#29455c",INK3:"#4d677d",BLUE:"#2A6DAA",BLUE2:"#3f9be0",PALE:"#5FA8E0",GOLD:"#8a5f10",PAPER:"#d3d9de"},y0=e=>{const t=parseInt(e.slice(1),16),a=l=>(l/255).toFixed(4);return`vec3(${a(t>>16)}, ${a(t>>8&255)}, ${a(t&255)})`},Pt=Object.entries(w0).map(([e,t])=>`#define C_${e} ${y0(t)}`).join(`
`),ma=`
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
`,We={blending:ct,blendSrc:Te,blendDst:Xe,blendSrcAlpha:Te,blendDstAlpha:Xe},zo=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm2(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,$a=`
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
`,A0=e=>`
#define ${e}
attribute vec4 aT;
attribute vec4 aSU;
attribute vec4 aJD;
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
#if defined(P_LINES)
${ko}
#if FX == 1
varying float vZf;
#endif
#endif
${$a}
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
#if defined(P_LINES)
  // Шёлк: линии почти параллельны, волна общая, лёгкий сдвиг по фазе —
  // как горизонтали рельефа. Перед сборкой шёлк замедляется (своё время
  // uFT идёт медленнее) и ложится на землю (uFlat гасит волну и изгиб).
  t = uFT;
  float fl = 1.0 - uFlat;
  z += (0.20 * sin(x * 0.37 + z * 0.21 - t * 0.45) + 0.07 * sin(x * 1.05 + t * 0.7 + z * 1.3)) * fl;
  float y = wave(vec2(x, z), t) * uWave * fl;
#else
  t = uFT;
  float fl = 1.0 - uFlat;
  z += (0.16 * sin(x * 0.29 + z * 0.4 + t * 0.2) + 0.05 * sin(x * 0.9 + ph)) * fl;
  float y = wave(vec2(x, z), t) * uWave * 0.45 * fl;
#endif
  return vec3(x, y, z);
}
varying float vCF;
void main() {
  bool field = aInfo.z > 8.5;
  float r = aSU.w;
  float a = clamp((uAsm - r * 0.35) / 0.65, 0.0, 1.0);
  a = a * a * (3.0 - 2.0 * a);
#if defined(P_LINES)
  // lines (раунд 48): три фазы по сборке. 1) СЖАТИЕ — весь лист шёлка
  // собирается к городу (линии сближаются, концы втягиваются с краёв поля,
  // волна уже легла), и каждая линия понемногу гнётся к форме своих улиц;
  // 2) ПОСАДКА — уже над городом куски точно ложатся на улицы (короткий
  // путь, от центра наружу); 3) дорисовка (дома, ткань) — после, в index.js.
  float cmp = smoothstep(0.0, 0.6, uAsm);
  float bend = smoothstep(0.05, 0.62, uAsm);
  float settle = clamp((uAsm - 0.6 - r * 0.12) / 0.3, 0.0, 1.0);
  settle = settle * settle * (3.0 - 2.0 * settle);
  a = mix(bend * 0.6, 1.0, settle);
  // Город растянут на поле в KF раз: сжатие возвращает лист к нему.
  // Лист не сжимается целиком (иначе его край виден рваной кромкой на
  // пустой бумаге, раунд 49): линии сами стягиваются к городу изгибом.
  float sq = mix(1.0, 0.82, cmp);
#endif
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
#if defined(P_LINES)
  sA.xz *= sq; sB.xz *= sq;
  sA.y *= mix(1.0, 0.3, cmp); sB.y *= mix(1.0, 0.3, cmp);
#endif
#if defined(P_LINES)
  // Цель на сжатии — хорда между точками стыка с соседями (гладкая
  // ломаная через стыки, без зигзагов улиц); на посадке — сама улица.
  vec3 cA = vec3(mix(aJD.x, aJD.z, aUU.x), 0.004, mix(aJD.y, aJD.w, aUU.x));
  vec3 cB = vec3(mix(aJD.x, aJD.z, aUU.y), 0.004, mix(aJD.y, aJD.w, aUU.y));
  vec3 jA = mix(cA, tA, settle), jB = mix(cB, tB, settle);
  float wj = field ? 0.0 : max(bend, settle);
  vec3 pA = mix(sA, jA, wj), pB = mix(sB, jB, wj);
  float lift = field ? 0.0 : sin(bend * 3.14159265) * 0.02;
#else
  vec3 pA = mix(sA, tA, a), pB = mix(sB, tB, a);
#endif
#if defined(P_LINES)
#else
  float lift = sin(a * 3.14159265) * 0.03;
#endif
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
#if defined(P_LINES)
  // Перед сборкой линию рисует линия поля; с первых долей сборки — куски,
  // лежащие встык ровно на ней (подмена невидима), и они сами летят в улицы.
  float hand = smoothstep(0.0, 0.015, uAsm);
  vCF = field ? (aInfo.z > 9.5 ? (1.0 - hand) * thin : (1.0 - smoothstep(0.35, 0.9, af)) * thin) : hand * mix(thin, 1.0, a);
  // Раунд 49: концы линий на сжатии тают на длинном отрезке (20 % длины)
  // — края листа не кромка; линии без улиц (ряды вне города) гаснут до
  // посадки; концевые куски, у которых улица на краю города, а путь
  // длинный, — тоже на посадке («лишнее уходит», основная масса садится).
  float fx01 = (mix(aSU.x, aSU.y, aInfo.x > 0.5 ? aUU.y : aUU.x) + 12.0) / 24.0;
  float endF = smoothstep(0.0, 0.2, fx01) * smoothstep(0.0, 0.2, 1.0 - fx01);
  vCF *= mix(1.0, endF, cmp * (1.0 - settle));
  if (field && aInfo.z < 9.5) vCF *= 1.0 - smoothstep(0.05, 0.45, uAsm);
  float far = smoothstep(4.2, 5.6, length(aT.xy * (1.0 - aUU.x) + aT.zw * aUU.x));
  vCF *= 1.0 - far * smoothstep(0.55, 0.9, uAsm) * (1.0 - settle * settle);
  // Куски с длинным путём (растянутые края рядов) — тоже лишнее: тают,
  // пока летят, и проявляются уже на месте.
  float trav = length(srcAt(0.5).xz * sq - (aT.xy + aT.zw) * 0.5);
  vCF *= 1.0 - smoothstep(2.5, 5.0, trav) * smoothstep(0.3, 0.6, uAsm) * (1.0 - smoothstep(0.75, 1.0, settle));
#else
  vCF = field ? (1.0 - smoothstep(0.35, 0.9, af)) * thin : smoothstep(0.0, 0.3, a);
#endif
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
#if defined(P_LINES)
  // Шёлк, легший на землю под скользящим взглядом, сжимается на экране —
  // порог ниже, чем у прочих, и не до нуля: иначе на сборке поле пропадало.
  vA *= mix(0.12 + 0.88 * smoothstep(1.2, 3.5, gapPx), 1.0, a);
  // Магистрали толще, местные улицы — волосяные (0.45 px с покрытием).
  float hwT = (vType > 1.5 && vType < 2.5 ? 1.5 : vType < 0.5 ? 0.9 : vType > 4.5 ? 0.42 : 0.6) * uDpr;
  vHW = mix(0.55 * uDpr, hwT, a);
#if FX == 1
  vZf = aSU.z;
#endif
#else
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
#endif
  vec4 ca = projectionMatrix * va;
  vec4 cb = projectionMatrix * vb;
  gl_Position = ribbon(ca, cb, aInfo.x, aInfo.y, vHW);
}
`,b0=e=>`
#define ${e}
${Pt}
uniform float uTime;
uniform float uAlpha;
uniform float uBg;
uniform float uAsm;
uniform float uPass;
${ma}
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
#if defined(P_LINES)
${ko}
#if FX == 1
uniform vec4 uRects[24];
uniform int uN;
varying float vZf;
float fxText() {
  float m = 0.0;
  vec2 q = gl_FragCoord.xy;
  for (int i = 0; i < 24; i++) {
    if (i >= uN) break;
    vec4 r = uRects[i];
    vec2 c = (r.xy + r.zw) * 0.5, h = (r.zw - r.xy) * 0.5;
    vec2 d = abs(q - c) - h;
    float dd = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
    m = max(m, 1.0 - smoothstep(0.0, 140.0, dd));
  }
  return 1.0 - 0.4 * m;
}
#endif
#endif
${zo}
void main() {
  float e = abs(vSide);
  float px = e * (vHW + 1.0);
  // Покрытие с пиксельным сглаживанием краёв; тонкая линия — тоньше альфой.
  float cov = clamp(vHW + 0.5 - px, 0.0, 1.0);
  bool river = vType > 1.5 && vType < 2.5;
  vec3 col;
  float a;
#if defined(P_LINES)
  // Блик бежит вдоль линии — по шёлку проходит свет.
  float g = smoothstep(0.82, 1.0, sin(vX * 0.55 - uTime * 1.25 + vSeed * 6.2832));
  col = mix(C_INK2, C_BLUE2, g);
  if (river) col = mix(col, C_BLUE, vMix);
  a = cov * mix(0.36 + 0.55 * g, river ? 0.95 : vType > 4.5 ? 0.62 : 0.8, vMix);
#if FX == 1
  // ── Скан: волна света по полю. Полоса (гаусс) идёт от ближнего края
  // к дальнему по диагонали в координатах поля — вместе с волнами; за ней
  // слабый хвост. Линии в ней ярче и голубее. Только шёлк на поле.
  float sc = mod(uTime, SCAN_P);
  float run = sc / SCAN_D;
  float env = smoothstep(0.0, 0.12, run) * (1.0 - smoothstep(0.85, 1.0, run));
  float dd = vZf * 0.92 - vX * 0.38;
  float c0 = mix(11.0, -13.0, clamp(run, 0.0, 1.0));
  float off = dd - c0;
  float band = exp(-off * off / 2.0) + 0.35 * exp(-max(off, 0.0) / 2.6) * step(0.0, off);
  float fx = band * env * (1.0 - vMix) * fxText();
  col = mix(col, vec3(0.56, 0.83, 1.0), clamp(fx * 1.1, 0.0, 1.0));
  col = mix(col, vec3(0.86, 0.95, 1.0), clamp(fx - 0.6, 0.0, 0.4));
  a = clamp(a * (1.0 + 2.4 * fx), 0.0, 1.0);
#endif
#else
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
#endif
  // В полёте куски улиц — отдельные пряди: концы мягкие, иначе на сборке
  // читались прямоугольные полоски. На поле (vMix 0) и на месте (vMix 1)
  // кусок продолжает соседа — концы целые.
  float ends = smoothstep(0.0, 0.18, vU) * (1.0 - smoothstep(0.82, 1.0, vU));
#if defined(P_LINES)
  // Во время сжатия линия цельная; мягкие концы — только на посадке.
  a *= mix(1.0, ends, sin(vMix * 3.14159265) * smoothstep(0.6, 0.8, vMix));
#else
  a *= mix(1.0, ends, sin(vMix * 3.14159265));
#endif
  col = holdBake(col);
  a *= vA * max(uAlpha, uHoldA) * vCF * (1.0 - 0.35 * uTint);
  if (a < 0.002) discard;
  gl_FragColor = vec4(col * a, a);
}
`,Eo=()=>`
#define LAND_H ${Se.h.toFixed(1)}
#define LAND_N ${Se.n.toFixed(1)}
#define DEM_LO ${Se.lo.toFixed(1)}
#define DEM_HI ${Se.hi.toFixed(1)}
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
#define FAR_H ${Se.far.h.toFixed(1)}
#define FAR_N ${Se.far.n.toFixed(1)}
#define FAR_LO ${Se.far.lo.toFixed(1)}
#define FAR_HI ${Se.far.hi.toFixed(1)}
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
`,to=e=>`
#define ${e}
uniform float uRelief;
uniform float uCity;
uniform float uPre;
varying vec2 vP;
varying float vElev;
varying float vDepth;
#ifdef P_INK
${Eo()}
#endif
void main() {
  vP = position.xz;
  vec3 q = position;
  vElev = 0.0;
#ifdef P_INK
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
#endif
  vec4 mv = modelViewMatrix * vec4(q, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,Io=`
#define HOR_H ${Se.hor.h.toFixed(1)}
#define HOR_N ${Se.hor.n.toFixed(1)}
#define HOR_LO ${Se.hor.lo.toFixed(1)}
#define HOR_HI ${Se.hor.hi.toFixed(1)}
#define HOR_CZ ${Se.hor.cz.toFixed(1)}
#define FAR_EDGE ${Se.far.h.toFixed(1)}
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
`,ao=`
${Io}
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
`,oo=e=>`
${Pt}
${Io}
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
`,M0=`
uniform sampler2D uNN;
uniform sampler2D uNF;
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
  vec4 fN = nfTex(uNN, 2048.0, 13.0, 160.0, p);
  vec4 fF = nfTex(uNF, 2048.0, 48.0, 640.0, p);
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
`,S0=e=>`
#define ${e}
#define FAB_A ${e==="P_LINES"?"0.22":"0.1"}
#define FAB_C C_INK2
${Pt}
uniform sampler2D uMap;
uniform float uTime;
uniform float uBg;
uniform float uCity;
uniform float uAlpha;
uniform float uHatch;
${ma}
uniform sampler2D uLA;
uniform sampler2D uLB;
uniform float uRelief;
uniform float uPre;
#define PRE_G 0.4
varying vec2 vP;
varying float vElev;
varying float vDepth;
${e==="P_INK"?Eo():""}
${zo}
${qa}
${e==="P_INK"?M0:""}

void main() {
  vec2 p = vP;
  float rr = length(p);
  float fade = 1.0 - smoothstep(9.0, 15.0, rr);
#ifdef P_INK
  // Земля ink — до горизонта (дальний рельеф ±FAR_H км).
  fade = 1.0 - smoothstep(0.8, 0.97, max(abs(p.x), abs(p.y)) / FAR_H);
#endif
  vec2 muv = p / ${(Ve*2).toFixed(1)} + 0.5;
#ifdef P_INK
  // Подложка RE загружена с переворотом по вертикали (flipY): север —
  // наверху картинки, v = 1. Здесь z растёт на юг — v переворачиваем.
  // (У lines это зеркало осталось — вид не трогаем, см. DECISIONS.)
  muv.y = 1.0 - muv.y;
#endif
  float inMap = step(0.0, muv.x) * step(muv.x, 1.0) * step(0.0, muv.y) * step(muv.y, 1.0);
  // Город мягко, по крупным мип-уровням подложки: пятно ткани, не рисунок.
  float city = texture2D(uMap, muv, 4.0).g * inMap;
  city = smoothstep(0.05, 0.35, city) * (1.0 - smoothstep(0.7, 1.0, length(muv - 0.5) * 2.0));
  // Мельче пикселя зерно не рисуем (под скользящим взглядом — муар).
  float fw = length(fwidth(p));
  vec3 col;
  float a;
#if defined(P_INK)
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
#else
  // Линии: заливки почти нет — лёгкая тень города под шёлком.
  col = C_PALE;
  a = city * 0.12 * uCity;
#endif
  // Ткань города — тонкий рисунок подложки (улицы, кварталы) поверх
  // заливки: по нему Пардубице узнаются, а не только по магистралям.
  float fab = texture2D(uMap, muv).g * inMap * (1.0 - smoothstep(0.6, 0.95, length(muv - 0.5) * 2.0));
  fab = clamp(fab * 1.4, 0.0, 1.0) * FAB_A * uCity * (1.0 - smoothstep(0.01, 0.05, fw * 0.3));
  col = (col * a + FAB_C * fab * (1.0 - a));
  a = a + fab * (1.0 - a);
  col /= max(a, 0.0001);
#if defined(P_INK)
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
#endif
  a *= fade * uAlpha;
#if defined(P_INK)
  // Неон на земле — поле, не геометрия (раунд 35).
  vec4 nn = neonGround(p, vDepth);
  col = (col * a * (1.0 - nn.a) + nn.rgb * nn.a) / max(a + nn.a * (1.0 - a), 0.0001);
  a = a + nn.a * (1.0 - a);
#endif
  if (a < 0.002) discard;
  gl_FragColor = vec4(col * a, a);
}
`,_0=e=>`
#define ${e}
attribute vec3 aA;
attribute vec3 aB;
attribute vec4 aInfo;
uniform vec3 uCam;
uniform float uR;
uniform float uDpr;
uniform float uTime;
uniform float uFadeKm;
uniform vec4 uW;
uniform float uWG;
uniform vec2 uW2;
varying float vSide;
varying float vHW;
varying float vVis;
varying float vKind;
varying float vS;
${$a}
void main() {
  bool atB = aInfo.x > 0.5;
  vec3 P = atB ? aB : aA;
  vSide = aInfo.y;
  vKind = aInfo.z;
  vS = aInfo.w;
  vVis = smoothstep(0.0, uFadeKm, dot(normalize(P), uCam) - uR * uR / length(P));
  float k = vKind;
  float hw = k < 0.5 ? uW.x : k < 1.5 ? uW.y : k < 2.5 ? uW.z : k < 3.5 ? uW.w : k < 4.5 ? uWG : k < 5.5 ? uW2.x : uW2.y;
  vHW = hw * uDpr;
  vec4 ca = projectionMatrix * (modelViewMatrix * vec4(aA, 1.0));
  vec4 cb = projectionMatrix * (modelViewMatrix * vec4(aB, 1.0));
  vec4 c = ribbon(ca, cb, aInfo.x, aInfo.y, vHW);
  gl_Position = c;
}
`,R0=e=>`
#define ${e}
${Pt}
uniform float uTime;
uniform vec4 uAl;
uniform float uAG;
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
  float al = k < 0.5 ? uAl.x : k < 1.5 ? uAl.y : k < 2.5 ? uAl.z : k < 3.5 ? uAl.w : k < 4.5 ? uAG : k < 5.5 ? uAl2.x : uAl2.y;
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
#if defined(P_LINES)
  float g = smoothstep(0.85, 1.0, sin(vS * 160.0 - uTime * 1.3));
  if (!(k > 1.5 && k < 2.5) && !reg) col = mix(k > 3.5 ? C_INK3 : C_INK2, C_BLUE2, g);
  cov *= 1.0 + 0.6 * g;
#else
  // Карандаш: нажим меняется вдоль линии.
  if (k < 1.5) col = mix(C_INK1, C_INK2, 0.4);
  cov *= 0.55 + 0.45 * (0.5 + 0.5 * sin(vS * 157.0 + k * 2.0) * sin(vS * 61.0 + 1.3));
#endif
  float a = clamp(cov * al * drawn * vVis, 0.0, 1.0);
  if (a < 0.002) discard;
  gl_FragColor = vec4(col * a, a);
}
`,sa=24,L0=`
varying vec2 vPx;
uniform vec2 uRes;
void main() { vPx = (position.xy * 0.5 + 0.5) * uRes; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,F0=`
uniform vec4 uRects[${sa}];
uniform int uN;
uniform float uFeather;
uniform float uStrength;
uniform vec2 uRes;
varying vec2 vPx;
void main() {
  float a = 0.0;
  for (int i = 0; i < ${sa}; i++) {
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
`;function T0(){const e=new Ce;return e.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}async function P0(){const e=await(await fetch(at+"streets.bin")).arrayBuffer(),t=new DataView(e);let a=0;const l=t.getUint32(a,!0);a+=4;const r=[];for(let i=0;i<l;i++){const f=t.getUint32(a,!0),d=t.getUint32(a+4,!0);a+=8;const m=[];for(let o=0;o<f;o++)m.push(t.getUint32(a,!0)),a+=4;const v=new Float32Array(d*2);for(let o=0;o<d;o++)v[o*2]=(t.getInt16(a,!0)/16384-.5)*Ve*2,v[o*2+1]=(t.getInt16(a+2,!0)/16384-.5)*Ve*2,a+=4;const u=[];for(let o=0;o<f;o++){const n=m[o],g=o+1<f?m[o+1]:d,A=[];for(let p=n;p<g;p++)A.push([v[p*2],v[p*2+1]]);u.push(A)}r.push(u)}return r}async function C0(e){const t=await(await fetch(at+"lines.bin")).arrayBuffer(),a=new DataView(t);let l=0;const r=a.getUint32(l,!0);l+=4;const i=[];for(let f=0;f<r;f++){const d=a.getUint32(l,!0),m=a.getUint32(l+4,!0);l+=8;const v=[];for(let n=0;n<d;n++)v.push(a.getUint32(l,!0)),l+=4;const u=new Float32Array(m*2);for(let n=0;n<m;n++)u[n*2]=a.getInt16(l,!0)/180,u[n*2+1]=a.getInt16(l+2,!0)/180,l+=4;const o=[];for(let n=0;n<d;n++){const g=v[n],A=n+1<d?v[n+1]:m,p=[];for(let M=g;M<A;M++)p.push([u[M*2],u[M*2+1]]);o.push(Ho(p,f===2?e*.2:e))}i.push(o)}return i}async function D0(e){const t=await(await fetch(at+"region.bin")).arrayBuffer(),a=new DataView(t);let l=0;const r=a.getUint32(l,!0);l+=4;const i=[];for(let f=0;f<r;f++){const d=a.getUint32(l,!0),m=a.getUint32(l+4,!0);l+=8;const v=[];for(let n=0;n<d;n++)v.push(a.getUint32(l,!0)),l+=4;const u=[];for(let n=0;n<m;n++)u.push([a.getInt16(l,!0)/180,a.getInt16(l+2,!0)/180]),l+=4;const o=[];for(let n=0;n<d;n++)o.push(Ho(u.slice(v[n],n+1<d?v[n+1]:m),e));i.push(o)}return i}function Ho(e,t){if(e.length<3)return e;const a=new Uint8Array(e.length);a[0]=a[e.length-1]=1;const l=[[0,e.length-1]];for(;l.length;){const[r,i]=l.pop();let f=0,d=-1;const[m,v]=e[r],[u,o]=e[i],n=u-m,g=o-v,A=Math.hypot(n,g)||1e-9;for(let p=r+1;p<i;p++){const M=Math.abs((e[p][0]-m)*g-(e[p][1]-v)*n)/A;M>f&&(f=M,d=p)}f>t&&(a[d]=1,l.push([r,d],[d,i]))}return e.filter((r,i)=>a[i])}const k0=`
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
${$a}
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
`,z0=e=>`
#define ${e}
${Pt}
${ma}
uniform float uAlpha;
varying float vSide;
varying float vHW;
varying float vA;
varying float vTop;
void main() {
  float e = abs(vSide);
  float cov = clamp(vHW + 0.5 - e * (vHW + 1.0), 0.0, 1.0);
#if defined(P_INK)
  // Чертёж тушью поверх акварели — чёткий и тёмный.
  float a = cov * vA * max(uAlpha, uHoldA) * mix(0.6, 0.9, vTop) * (1.0 - 0.35 * uTint);
  vec3 col = holdBake(C_INK1);
#else
  float a = cov * vA * uAlpha * mix(0.55, 0.85, vTop);
  vec3 col = mix(C_INK3, C_INK2, vTop);
#endif
  if (a < 0.002) discard;
  gl_FragColor = vec4(col * a, a);
}
`,E0=`
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
`,I0=`
${Pt}
${ma}
uniform float uAlpha;
uniform float uHatch;
varying vec2 vUV;
varying float vSh;
varying float vA;
varying float vPx;
varying float vDel;
varying float vL;
varying float vV;
${qa}
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
`;function H0(e,t){const a=t?400:150,l=1.6/1e3;let r=0;for(let o=0;o<e.n;o++)e.area[o]>=a&&(r+=e.cnt[o]);const i=new Float32Array(r*4*4),f=new Float32Array(r*4*2),d=new Float32Array(r*4*2),m=new Float32Array(r*4*3);let v=0;for(let o=0;o<e.n;o++){if(e.area[o]<a)continue;const n=e.start[o],g=e.cnt[o],A=w=>(e.u[n+w]-.5)*Ve*2,p=w=>(e.v[n+w]-.5)*Ve*2;let M=0,P=0;for(let w=0;w<g;w++)M+=A(w),P+=p(w);M/=g,P/=g;const I=Math.max(3,e.h[o])*l,W=Math.hypot(M/Ve,P/Ve)/2,K=Math.min(1,W*2)*.8+o*7919%97/97*.2,D=Math.sqrt(e.area[o])/1e3;for(let w=0;w<g;w++){const R=(w+1)%g,z=A(w),L=p(w),S=A(R),E=p(R);let c=-(E-L),x=S-z;const _=Math.hypot(c,x)||1;c/=_,x/=_,c*((z+S)/2-M)+x*((L+E)/2-P)<0&&(c=-c,x=-x);for(let F=0;F<4;F++){const s=v*4+F;i.set([z,L,S,E],s*4),f.set([F&1,F>>1],s*2),d.set([c,x],s*2),m.set([I,K,D],s*3)}v++}}const u=new Ce;return u.setAttribute("position",new N(new Float32Array(r*4*3),3)),u.setAttribute("aE",new N(i,4)),u.setAttribute("aC",new N(f,2)),u.setAttribute("aN",new N(d,2)),u.setAttribute("aHD",new N(m,3)),u.setIndex(da(r)),u}function N0(e,t){const a=t?300:80,l=1.6/1e3;let r=0;for(let n=0;n<e.n;n++)e.area[n]<a||(r+=e.cnt[n]*(e.area[n]>=300||e.h[n]>=11?2:1));const i=new Float32Array(r*4*4),f=new Float32Array(r*4*2),d=new Float32Array(r*4*4),m=new Float32Array(r*4);let v=0;const u=(n,g,A,p,M,P,I,W,K)=>{for(let D=0;D<4;D++){const w=v*4+D;i.set([n,g,A,p],w*4),f.set([M,P],w*2),d.set([D>>1,D&1?1:-1,I,W],w*4),m[w]=K}v++};for(let n=0;n<e.n;n++){if(e.area[n]<a)continue;const g=e.start[n],A=e.cnt[n],p=Math.max(3,e.h[n])*l;let M=0,P=0;for(let w=0;w<A;w++)M+=e.u[g+w],P+=e.v[g+w];M=(M/A-.5)*2,P=(P/A-.5)*2;const I=Math.min(1,Math.hypot(M,P))*.8+n*7919%97/97*.2,W=Math.sqrt(e.area[n])/1e3,K=w=>(e.u[g+w]-.5)*Ve*2,D=w=>(e.v[g+w]-.5)*Ve*2;for(let w=0;w<A;w++){const R=(w+1)%A;u(K(w),D(w),K(R),D(R),1,1,p,I,W)}if(e.area[n]>=300||e.h[n]>=11)for(let w=0;w<A;w++)u(K(w),D(w),K(w),D(w),0,1,p,I,W)}const o=new Ce;return o.setAttribute("position",new N(new Float32Array(r*4*3),3)),o.setAttribute("aP",new N(i,4)),o.setAttribute("aY",new N(f,2)),o.setAttribute("aI",new N(d,4)),o.setAttribute("aSz",new N(m,1)),o.setIndex(da(r)),o}function da(e){const t=new Uint32Array(e*6);for(let a=0;a<e;a++){const l=a*4;t.set([l,l+1,l+2,l+2,l+1,l+3],a*6)}return new N(t,1)}function O0(e,t){const{S:a,M:l}=t,r=[0,1,2,3,5],i=5.6,f=[];let d=0;for(const c of r)for(const x of e[c]){let _=[];for(const F of x)Math.hypot(F[0],F[1])<=i?_.push(F):(_.length>1&&f.push({l:c,pts:_}),_=[]);_.length>1&&f.push({l:c,pts:_})}for(const c of f){let x=0;for(let _=1;_<c.pts.length;_++)x+=Math.hypot(c.pts[_][0]-c.pts[_-1][0],c.pts[_][1]-c.pts[_-1][1]);c.len=x,d+=x}const m=Math.max(.2,d/5200),v=[],u=(c,x)=>{let _=0;for(let F=1;F<c.pts.length;F++){const s=c.pts[F-1],C=c.pts[F],T=Math.hypot(C[0]-s[0],C[1]-s[1]);if(_+T>=x||F===c.pts.length-1){const $=T>0?Math.min(1,(x-_)/T):0;return[s[0]+(C[0]-s[0])*$,s[1]+(C[1]-s[1])*$]}_+=T}return c.pts[c.pts.length-1]};for(const c of f){if(c.len<.03)continue;const x=Math.max(1,Math.round(c.len/m));for(let _=0;_<x;_++){const F=c.len*_/x,s=c.len*(_+1)/x,C=[];for(let q=0;q<l;q++)C.push(u(c,F+(s-F)*q/(l-1)));C[l-1][0]<C[0][0]&&C.reverse();let T=0,$=0;for(const q of C)T+=q[0],$+=q[1];v.push({l:c.l,pts:C,cx:T/l,cz:$/l})}}const o=Ke/(2*i),n=Ke/a,g=c=>{const x=Math.sin(c*12.9898)*43758.5453;return x-Math.floor(x)};for(const c of v){const x=Math.min(a-1,Math.max(0,Math.round((c.cz*o+Ke/2)/n-.5)));c.zl=-Ke/2+(x+.5)*n;let _=1/0,F=-1/0;for(const T of c.pts)_=Math.min(_,T[0]),F=Math.max(F,T[0]);const s=(_+F)/2*o,C=Math.max(.06,(F-_)/2*o);c.x0=s-C,c.x1=s+C,c.seed=g(x)}const A=new Set;if(t.look==="lines"){const c=new Map;for(const x of v)c.has(x.zl)||c.set(x.zl,[]),c.get(x.zl).push(x);for(const[x,_]of c){A.add(x),_.sort((s,C)=>s.x0+s.x1-(C.x0+C.x1));const F=_.map(s=>(s.x0+s.x1)/2);_.forEach((s,C)=>{s.x0=C===0?-Ke/2:(F[C-1]+F[C])/2,s.x1=C===_.length-1?Ke/2:(F[C]+F[C+1])/2,s.pts[0][0]>s.pts[s.pts.length-1][0]&&(s.pts=s.pts.slice().reverse())}),_.forEach((s,C)=>{const T=s.pts[0],$=s.pts[s.pts.length-1],q=_[C-1],ve=_[C+1],ee=q?[(q.pts[q.pts.length-1][0]+T[0])/2,(q.pts[q.pts.length-1][1]+T[1])/2]:T,ie=ve?[(ve.pts[0][0]+$[0])/2,(ve.pts[0][1]+$[1])/2]:$;s.jd=[ee[0],ee[1],ie[0],ie[1]]})}}const p=96;for(let c=0;c<a;c++){const x=-Ke/2+(c+.5)*n,_=[];for(let F=0;F<p;F++)_.push([0,0]);v.push({l:A.has(x)?10:9,pts:_,cx:0,cz:0,x0:-Ke/2,x1:Ke/2,zl:x,seed:g(c),field:!0})}const M=v.length,P=v.reduce((c,x)=>c+x.pts.length-1,0),I=new Float32Array(P*4*4),W=new Float32Array(P*4*4),K=new Float32Array(P*4*2),D=new Float32Array(P*4*4),w=new Float32Array(P*4*4);let R=0;const z=new Set,L=(c,x)=>Math.round(c/.05)+","+Math.round(x/.05);for(const c of t.first||[])for(let x=1;x<c.pts.length;x++){const[_,F]=c.pts[x-1],[s,C]=c.pts[x];if(Math.max(Math.abs(_),Math.abs(F),Math.abs(s),Math.abs(C))>6)continue;const T=Math.ceil(Math.hypot(s-_,C-F)/.025);for(let $=0;$<=T;$++){const q=_+(s-_)*$/T,ve=F+(C-F)*$/T;for(let ee=-1;ee<=1;ee++)for(let ie=-1;ie<=1;ie++)z.add(L(q+ee*.05,ve+ie*.05))}}const S=c=>{if(!z.size||c.field)return!1;let x=0;for(const _ of c.pts)z.has(L(_[0],_[1]))&&x++;return x>=c.pts.length*.6};for(const c of v){let x=Math.min(1,Math.hypot(c.cx,c.cz)/5.5);S(c)&&(x*=.3);const _=c.pts.length;for(let F=0;F<_-1;F++){const s=c.pts[F],C=c.pts[F+1];for(let T=0;T<4;T++){const $=R*4+T;I.set([s[0],s[1],C[0],C[1]],$*4),W.set([c.x0,c.x1,c.zl,x],$*4),K.set([F/(_-1),(F+1)/(_-1)],$*2),D.set([T>>1,T&1?1:-1,c.l,c.seed],$*4),c.jd&&w.set(c.jd,$*4)}R++}}const E=new Ce;return E.setAttribute("position",new N(new Float32Array(P*4*3),3)),E.setAttribute("aT",new N(I,4)),E.setAttribute("aSU",new N(W,4)),E.setAttribute("aUU",new N(K,2)),E.setAttribute("aInfo",new N(D,4)),E.setAttribute("aJD",new N(w,4)),E.setIndex(da(P)),{geometry:E,K:M,gap:n}}function G0(e,t,a,l){const r=e.map((p,M)=>p.map(P=>({kind:M,pts:P}))),i=[].concat(...r);a&&a.forEach((p,M)=>p.forEach(P=>i.push({kind:5+M,pts:P})));const f=l?Le(l.lat,l.lon,1):[0,0,1];if(t==="lines"){for(let p=-80;p<=80;p+=10){const M=[];for(let P=-180;P<=180;P+=3)M.push([P,p]);i.push({kind:4,pts:M})}for(let p=-180;p<180;p+=15){const M=[];for(let P=-84;P<=84;P+=3)M.push([p,P]);i.push({kind:4,pts:M})}}let d=0;for(const p of i)d+=Math.max(0,p.pts.length-1);const m=new Float32Array(d*4*3),v=new Float32Array(d*4*3),u=new Float32Array(d*4*4),o=[0,0,0],n=[0,0,0];let g=0;for(const p of i){const M=p.pts.length;if(M<2)continue;const P=p.kind===2?1.2:.6;for(let I=0;I<M-1;I++){Le(p.pts[I][1],p.pts[I][0],j+P,o),Le(p.pts[I+1][1],p.pts[I+1][0],j+P,n);for(let W=0;W<4;W++){const K=g*4+W;m.set(o,K*3),v.set(n,K*3);let D=(I+(W>>1))/(M-1);if(p.kind>=5){const w=W>>1?n:o,R=Math.hypot(w[0],w[1],w[2]);D=Math.acos(Math.min(1,(w[0]*f[0]+w[1]*f[1]+w[2]*f[2])/R))*j/1e3}u.set([W>>1,W&1?1:-1,p.kind,D],K*4)}g++}}const A=new Ce;return A.setAttribute("position",new N(m,3)),A.setAttribute("aA",new N(m,3)),A.setAttribute("aB",new N(v,3)),A.setAttribute("aInfo",new N(u,4)),A.setIndex(da(d)),A}const B0={lines:"P_LINES",ink:"P_INK"};async function U0(e,t,a){const l=B0[e],r=a.lite,[i,f,d]=await Promise.all([P0(),C0(r?.08:.04),D0(.01)]),m=new Ft,v=new Ft,u=new Re(1,1),o={uTime:{value:0},uAsm:{value:0},uWave:{value:1},uFocal:{value:1e3},uFar:{value:30},uDpr:{value:1},uBg:{value:0},uAlpha:{value:1},uRes:{value:u},uFlat:{value:0},uFT:{value:0},uPaint:{value:0},uHoldA:{value:0},uBake:{value:0},uGround:{value:1},uTint:{value:0}},n=O0(i,{S:r?110:200,M:r?12:16,look:e,first:e==="ink"?a.routes:null}),g=b=>new ae({vertexShader:A0(b),fragmentShader:b0(b),uniforms:{...o,uGap:{value:n.gap},uPass:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1,side:zt,...We}),A=g(e==="ink"?"P_INK":l),p=new me(n.geometry,A);p.name="strands",p.frustumCulled=!1,p.renderOrder=2,m.add(p);let M=null,P=null;if(e==="ink"){const b=g(`P_INK
#define INK_FG`);b.uniforms={...A.uniforms,uPass:{value:0}},M=new me(n.geometry,b),M.frustumCulled=!1,M.renderOrder=3,m.add(M);const le=g(`P_INK
#define INK_FG`);le.uniforms={...A.uniforms,uPass:{value:1}},P=new me(n.geometry,le),P.frustumCulled=!1,P.renderOrder=3,m.add(P)}const I=e==="ink",W=I?r?300:480:1,K=new Ca(I?96:32,I?96:32,W,W);K.rotateX(-Math.PI/2);const D=new ae({vertexShader:to(l),fragmentShader:S0(l),uniforms:{uMap:{value:t},uTime:o.uTime,uBg:{value:0},uCity:{value:0},uAlpha:{value:1},uHoldA:o.uHoldA,uBake:o.uBake,uGround:o.uGround,uTint:o.uTint,uHatch:{value:0},uRelief:{value:1},uPre:{value:0},uNN:{value:a.land?.neonN||null},uNF:{value:a.land?.neonF||null},uNeonT:{value:0},uNeonP:{value:0},uDem:{value:a.land?.dem||null},uDemF:{value:a.land?.far||null},uLA:{value:a.land?.a||null},uLB:{value:a.land?.b||null}},transparent:!0,depthWrite:!1,depthTest:I,depthFunc:Qa,...We}),w=new me(K,D);let R=null;if(I){const b=new ae({vertexShader:to(l),fragmentShader:"void main() { gl_FragColor = vec4(0.0); }",uniforms:D.uniforms,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});R=new me(K,b),R.name="washDepth",R.position.y=-.003,R.frustumCulled=!1,R.renderOrder=.9,m.add(R)}let z=null,L=null;if(I&&a.land?.hor){const b=new Ca(Se.hor.h*2,Se.hor.h*2,a.lite?200:320,a.lite?200:320);b.rotateX(-Math.PI/2),b.translate(0,0,Se.hor.cz);const le={uHor:{value:a.land.hor},uHEx:{value:3.4},uCurv:{value:1},uPre:D.uniforms.uPre,uAlpha:D.uniforms.uAlpha,uBg:D.uniforms.uBg},he=new ae({vertexShader:ao,fragmentShader:oo(!0),uniforms:le,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});L=new ae({vertexShader:ao,fragmentShader:oo(!1),uniforms:le,transparent:!0,depthWrite:!1,depthTest:!0,depthFunc:Qa,...We});const re=new me(b,he);re.name="horDepth",re.frustumCulled=!1,re.renderOrder=.88,re.position.y=-.003,z=new me(b,L),z.name="horizon",z.frustumCulled=!1,z.renderOrder=.95,z.position.y=-.003,z.userData.depth=re,m.add(re,z)}w.name="wash",w.position.y=-.003,w.frustumCulled=!1,w.renderOrder=1,m.add(w);let S=null,E=null;a.houses&&(E=new ae({vertexShader:k0,fragmentShader:z0(l),uniforms:{uGrow:{value:0},uFocal:o.uFocal,uFar:o.uFar,uDpr:o.uDpr,uRes:{value:u},uAlpha:{value:1},uHoldA:o.uHoldA,uBake:o.uBake,uGround:o.uGround,uTint:o.uTint,uHW:{value:.5}},transparent:!0,depthWrite:!1,depthTest:!1,side:zt,...We}),S=new me(N0(a.houses,r),E),S.name="houses2",S.frustumCulled=!1,S.renderOrder=3,m.add(S));let c=null,x=null;e==="ink"&&a.houses&&(x=new ae({vertexShader:E0,fragmentShader:I0,uniforms:{uGrow:E.uniforms.uGrow,uFocal:o.uFocal,uFar:o.uFar,uDpr:o.uDpr,uAlpha:E.uniforms.uAlpha,uHatch:{value:0},uHoldA:o.uHoldA,uBake:o.uBake,uGround:o.uGround,uTint:o.uTint},transparent:!0,depthWrite:!1,depthTest:!1,side:zt,...We}),c=new me(H0(a.houses,r),x),c.name="walls",c.frustumCulled=!1,c.renderOrder=2,m.add(c));const _=G0(f,e,d,a.pdb),F={lines:[.7,.6,2.2,.55,.45],ink:[.65,.55,2.2,.5,0]}[e],s={uCam:{value:new J},uR:{value:j},uDpr:o.uDpr,uTime:o.uTime,uFadeKm:{value:100},uRes:{value:u},uW:{value:new Qe(F[0],F[1],F[2],F[3])},uWG:{value:F[4]},uAl:{value:new Qe},uAG:{value:0},uDraw:{value:new Qe(1,1,1,1)},uW2:{value:new Re(.5,.65)},uAl2:{value:new Re},uReach:{value:0}},C=new ae({vertexShader:_0(l),fragmentShader:R0(l),uniforms:s,transparent:!0,depthWrite:!1,depthTest:!1,side:zt,...We}),T=new me(_,C);T.name="sphere",T.frustumCulled=!1,T.renderOrder=-10,v.add(T);const $=Array.from({length:sa},()=>new Qe),q=new ae({vertexShader:L0,fragmentShader:F0,uniforms:{uRects:{value:$},uN:{value:0},uFeather:{value:90},uStrength:{value:.85},uRes:{value:u}},transparent:!0,depthWrite:!1,depthTest:!1,blending:ct,blendSrc:Da,blendDst:Xe,blendSrcAlpha:Da,blendDstAlpha:Xe});e==="lines"&&ja===1&&(A.uniforms.uRects=q.uniforms.uRects,A.uniforms.uN=q.uniforms.uN),I&&(D.uniforms.uRects=q.uniforms.uRects,D.uniforms.uN=q.uniforms.uN);const ve=new me(T0(),q);ve.frustumCulled=!1,ve.renderOrder=95;let ee=[];const ie="main :is(h2, h3, p, blockquote, .arrow-link, .coverflow__item, .leader__name, .direction__head)";function ot(){ee=Array.from(document.querySelectorAll(ie))}return ot(),{cityGroup:m,sphereGroup:v,veil:ve,collect:ot,textRects:{rects:q.uniforms.uRects,n:q.uniforms.uN},update(b){o.uTime.value=b.time,o.uAsm.value=b.asm,o.uWave.value=b.wave,o.uFocal.value=b.focal,o.uFar.value=b.far,o.uDpr.value=b.dpr,o.uBg.value=b.bg,o.uAlpha.value=b.alpha,o.uFlat.value=b.flat||0,o.uFT.value=b.ft??b.time,o.uHoldA.value=b.holdA||0,o.uBake.value=b.bake||0,o.uGround.value=b.ground??1,o.uTint.value=b.tint||0,S&&(E.uniforms.uGrow.value=b.grow||0,E.uniforms.uAlpha.value=b.alpha,S.visible=Math.max(b.alpha,b.holdA||0)>.002&&(b.grow||0)>.001),c&&(x.uniforms.uHatch.value=b.hatch||0,c.visible=S.visible&&(b.hatch||0)>.001),u.set(b.w,b.h),p.visible=Math.max(b.alpha,b.holdA||0)>.002,M&&(M.visible=P.visible=p.visible&&b.asm>.001),o.uPaint.value=b.paint||0,D.uniforms.uHatch.value=b.hatch||0,D.uniforms.uBg.value=b.bg,D.uniforms.uCity.value=b.city,D.uniforms.uPre.value=b.pre||0,D.uniforms.uNeonT.value=b.neonT||0,D.uniforms.uNeonP.value=b.neonP||0,z&&(z.visible=z.userData.depth.visible=w.visible&&(b.pre||0)>.001),D.uniforms.uAlpha.value=b.alpha,w.visible=Math.max(b.alpha,b.holdA||0)>.002&&b.bg+b.city>.002,R&&(R.visible=w.visible&&b.alpha>.5),s.uCam.value.copy(b.cam),s.uFadeKm.value=b.fadeKm,s.uAl.value.set(b.sphere.al[0],b.sphere.al[1],b.sphere.al[2],b.sphere.al[3]),s.uAG.value=b.sphere.ag,s.uDraw.value.set(b.sphere.draw[0],b.sphere.draw[1],b.sphere.draw[2],b.sphere.draw[3]),s.uAl2.value.set(b.sphere.reg?.[0]||0,b.sphere.reg?.[1]||0),s.uReach.value=b.sphere.reach||0,T.visible=b.sphere.al[0]+b.sphere.al[1]+b.sphere.al[2]+b.sphere.al[3]+b.sphere.ag+s.uAl2.value.x+s.uAl2.value.y>.002;let le=0;const he=b.w/b.cssW,re=b.h/b.cssH,Ee=18;for(let Y=0;Y<ee.length&&le<sa;Y++){const Ie=ee[Y];if(Ie.style.visibility==="hidden"||(Ie.classList.contains("coverflow__item")?parseFloat(Ie.style.getPropertyValue("--op")):1)<.35)continue;const De=Ie.getBoundingClientRect();De.width<2||De.bottom<-40||De.top>b.cssH+40||De.right<0||De.left>b.cssW||De.width*De.height>b.cssW*b.cssH*.5||($[le].set((De.left-Ee)*he,(b.cssH-De.bottom-Ee)*re,(De.right+Ee)*he,(b.cssH-De.top+Ee)*re),le++)}q.uniforms.uN.value=le,q.uniforms.uFeather.value=110*b.dpr,q.uniforms.uStrength.value=b.veil,ve.visible=le>0&&b.veil>.002}}}const W0=()=>new URLSearchParams(location.search).get("neon")!=="0",Aa=18;`${Aa}${Aa}${(j*1.006).toFixed(1)}${Aa}`;const K0=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 6; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,lo=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,q0=`
precision highp float;
uniform vec2 uRes;
uniform float uTime, uAmount, uDark;
uniform vec2 uHole;      // середина окна (центр Пардубиц на экране), пиксели
uniform float uHoleR;    // радиус окна, пиксели

${K0}
// Облачная масса в точке: клубы (fbm с искажением), вытянутые по горизонтали.
float mass(vec2 p, float T) {
  vec2 q = p + 0.35 * vec2(fbm(p * 0.8 + vec2(0.03, 0.01) * T), fbm(p * 0.8 - vec2(0.02, 0.03) * T + 4.1));
  return fbm(q * vec2(1.0, 1.6));
}

void main() {
  vec2 px = gl_FragCoord.xy;
  vec2 uv = px / uRes.y;
  float T = uTime;
  // Ветер справа налево; ближний слой быстрее (параллакс).
  vec2 wind = vec2(-0.035, 0.006) * T;

  // ДВА СЛОЯ КЛУБОВ, как на образце (Монтфорт, «Fort Energy»): сплошная
  // пасмурная пелена, клубы со светлыми верхушками и тёмными низами.
  // Свет сверху: верхушка — где масса выше, чем чуть выше по кадру.
  vec2 p1 = uv * 1.6 + wind;
  float m1 = mass(p1, T);
  float lit1 = clamp((m1 - mass(p1 + vec2(0.0, 0.045), T)) * 5.0 + 0.5, 0.0, 1.0);
  vec2 p2 = uv * 2.4 + 1.8 * wind + 9.3;
  float m2 = mass(p2, T);
  float lit2 = clamp((m2 - mass(p2 + vec2(0.0, 0.05), T)) * 5.0 + 0.5, 0.0, 1.0);

  // Внизу кадра облаков больше (заказчик 2026-10-21: «снизу их можно
  // сделать побольше»): к низу пороги клубов ниже, пелена плотнее. Затем:
  // «слишком пустил по низу, можно поднять чуть-чуть выше» — густо до
  // пятой части высоты, сходит на нет к 0.7 (было 0 → 0.5).
  float low = 1.0 - smoothstep(0.2, 0.7, px.y / uRes.y);
  float body = smoothstep(0.36 - 0.14 * low, 0.66 - 0.1 * low, m1);
  float puff = smoothstep(0.48 - 0.14 * low, 0.68 - 0.08 * low, m2);
  // Светлота: основа по массе, верхушки клубов светлее, низы темнее —
  // контраст как на образце (клубы читаются объёмом, а не пятнами).
  float shade = 0.22 + 0.3 * body + 0.38 * puff;
  shade += 0.7 * (lit1 - 0.5) * body + 0.6 * (lit2 - 0.5) * puff;
  shade = clamp(shade, 0.0, 1.0);

  // Палитра — СВЕТЛАЯ (заказчик: «не делай тёмный фон»). С образца взяты
  // рисунок и контраст клубов, а тон — светлой бумаги главной: тени как
  // фон за конём, света почти белые (у Монтфорта на светлом фоне —
  // 0.737/0.773/0.800 → 0.961/0.969/0.976). Тёмная палитра образца
  // (95/108/120 → 180/191/199) — в истории коммитов.
  vec3 c0 = vec3(0.620, 0.666, 0.710);
  vec3 c1 = vec3(0.760, 0.792, 0.820);
  vec3 c2 = vec3(0.950, 0.960, 0.968);
  vec3 color = shade < 0.5 ? mix(c0, c1, shade * 2.0) : mix(c1, c2, shade * 2.0 - 1.0);

  // Лучи света по диагонали (godrays у Монтфорта): тонкие, редкие, едва.
  vec2 g = vec2(uv.x * 0.94 + uv.y * 0.34, -uv.x * 0.34 + uv.y * 0.94);
  float rays = smoothstep(0.62, 0.95, n2(vec2(g.x * 9.0, g.y * 0.06) + vec2(-0.02 * T, 0.0)));
  rays *= smoothstep(0.35, 0.8, n2(vec2(g.x * 3.0, g.y * 0.04) + vec2(0.015 * T, 0.0)));
  color += vec3(0.05) * rays;
  // Гибрид ink → dots: облака темнеют к фону dots, пока уходят.
  color = mix(color, color * vec3(0.16, 0.2, 0.28), uDark);

  // ОКНО над картой: круг вокруг центра Пардубиц с рваным мягким краем;
  // внутри — лёгкая дымка, как над кораблём на образце.
  float r = length(px - uHole) / max(uHoleR, 1.0);
  float edge = 0.35 * (m1 - 0.5) + 0.2 * (m2 - 0.5);
  float open = smoothstep(0.55, 1.15, r + edge);
  // Пелена не сплошная (заказчик: «под облаками не читается ландшафт из-за
  // непрозрачного фона»): плотность — по самим клубам; в тонких местах
  // ландшафт просвечивает, плотные клубы почти закрывают.
  float thick = clamp(0.6 * body + 0.6 * puff, 0.0, 1.0);
  float alpha = mix(0.22 + 0.12 * puff + 0.12 * low, mix(0.38 + 0.18 * low, 0.9, thick), open);

  alpha *= uAmount;
  gl_FragColor = vec4(color * alpha, alpha);
}
`,Ct=.35,j0=`
precision highp float;
uniform sampler2D tClouds;
uniform vec2 uRes;
uniform float uTime, uErode, uFly, uNeon, uMapR, uTextL, uCell, uDim;
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
  vec2 wind = vec2(0.035, -0.006) / 1.6 * uTime * uRes.y;
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
  float dens = clamp(cs.a / 0.9, 0.0, 1.0);
  float rad = mix(0.6, 1.2, hr);
  // Расстояние до пылинки — в точках экрана (в полёте пылинка не растёт и
  // не тянется: масштаб потока снимается).
  float dist = length(w - pt) * fs;
  float speck = (1.0 - smoothstep(rad - 0.5, rad + 0.5, dist)) * step(hk, dens * 0.45);
  float show = smoothstep(0.0, 0.35, uErode);
  vec3 col = mix(cs.rgb / max(cs.a, 0.001), uNeonCol, uNeon);
  float sa = min(1.0, cs.a * 1.8) * speck * show;
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
`;function $0(){const e=new Ce;e.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const t=new ae({vertexShader:lo,fragmentShader:q0,uniforms:{uRes:{value:new Re(1,1)},uTime:{value:0},uAmount:{value:0},uHole:{value:new Re},uHoleR:{value:1},uDark:{value:0}},depthWrite:!1,depthTest:!1,blending:a0}),a=new me(e,t);a.frustumCulled=!1;const l=new Lo;l.add(a);const r=new o0,i=new l0(1,1,{depthBuffer:!1,minFilter:pt,magFilter:pt}),f=new ae({vertexShader:lo,fragmentShader:j0,uniforms:{tClouds:{value:i.texture},uRes:{value:new Re(1,1)},uTime:{value:0},uErode:{value:0},uDim:{value:0},uDimCol:{value:new Ge("#071b34")},uFly:{value:0},uNeon:{value:0},uCell:{value:5},uMapR:{value:100},uTextL:{value:1},uTop:{value:1e6},uTopF:{value:1},uMap:{value:new Re},uNeonCol:{value:new Ge("#78d0e6")}},transparent:!0,depthWrite:!1,depthTest:!1,...We}),d=new me(e,f);d.frustumCulled=!1,d.renderOrder=90,d.name="clouds";const m=t.uniforms,v=new Ge;let u=!1;return{mesh:d,update(o){if(u=o.amount>.002&&!o.done,d.visible=u,!u)return;const n=f.uniforms;n.uTime.value=o.time,n.uErode.value=o.erode||0,n.uDim.value=o.dim||0,n.uFly.value=o.fly||0,n.uNeon.value=o.neon||0,n.uMapR.value=o.r,n.uTextL.value=o.textL??1,n.uTop.value=o.top??1e6,n.uTopF.value=Math.max(1,o.topF??1),n.uMap.value.set(o.hx,o.hy),n.uCell.value=Math.max(5,4.5*(o.px||1));const g=Math.max(1,Math.round(o.w*Ct)),A=Math.max(1,Math.round(o.h*Ct));(i.width!==g||i.height!==A)&&i.setSize(g,A),m.uAmount.value=o.amount,m.uDark.value=o.dark||0,m.uTime.value=o.time,m.uRes.value.set(g,A),m.uHole.value.set(o.hx*Ct,o.hy*Ct),m.uHoleR.value=o.r*Ct,f.uniforms.uRes.value.set(o.w,o.h)},prerender(o){if(!u)return;const n=o.getRenderTarget(),g=o.getClearAlpha();o.getClearColor(v),o.setRenderTarget(i),o.setClearColor(0,0),o.clear(!0,!1,!1),o.render(l,r),o.setRenderTarget(n),o.setClearColor(v,g)}}}const no=35,V0=.35,X0=.6,Y0='a, button, input, textarea, select, label, img, video, picture, svg, header, nav, [role="button"], [contenteditable], .leader__photo, .pillar__photo',Z0="h1, h2, h3, h4, h5, p, blockquote, li, figcaption, dt, dd",te={lon:0,lat:0,on:!1,dragging:!1,dirty:!1};new n0;new Re;new r0(new J,j);new J;const ba=typeof document<"u"?document.createRange():null;let Dt=0,kt=0;function J0(e,t){const a=document.elementFromPoint(e,t);if(!a||a.closest(Y0))return!0;const l=a.closest(Z0);if(l&&ba){ba.selectNodeContents(l);for(const r of ba.getClientRects())if(e>=r.left-6&&e<=r.right+6&&t>=r.top-4&&t<=r.bottom+4)return!0}return!1}function Q0(e,t){return te.on,!1}const el=(e,t)=>({globe:Q0(),content:J0(e,t),el:document.elementFromPoint(e,t)?.className||""});function ro(e){const t=document.documentElement;t.classList.toggle("earth-grab",e==="grab"),t.classList.toggle("earth-grabbing",e==="grabbing")}function tl(e,t,a){if(te.on=t,te.dirty=!1,!t&&te.dragging&&(te.dragging=!1),!te.dragging){const l=Math.exp(-e/X0);te.lon*=l,te.lat*=l,Dt=kt=0,Math.abs(te.lon)<.001&&(te.lon=0),Math.abs(te.lat)<.001&&(te.lat=0),(te.lon||te.lat)&&(te.dirty=!0),document.documentElement.classList.contains("earth-grab")&&ro(null);return}if(!t&&document.documentElement.classList.contains("earth-grab")&&ro(null),!te.dragging)if(Math.abs(Dt)+Math.abs(kt)>.05){te.lon+=Dt*e,te.lat=Math.max(-no,Math.min(no,te.lat+kt*e));const l=Math.exp(-e/V0);Dt*=l,kt*=l,te.dirty=!0}else Dt=kt=0}const al=Math.PI,ol={tech:"#78d0e6",city:"#86a9cf",mapInk:"#7d9dc0",house:"#8fb0d2",mark:"#e2b04a",grid:"#3fd0e0"},ll={tech:"#29455c",city:"#253f57",mapInk:"#132a40",house:"#253f57",mark:"#8a5f10",grid:"#4d677d"},nl=`
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
`,rl=`
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
${nl}

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
    float rr = clamp(length((s - mc) * vec2(uRes.x / uRes.y, 1.0)) / 2.4, 0.0, 1.0);
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
`,il=`
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
#ifdef LIGHT
  // Светлый вид: тушь по бумаге — сила точки идёт в непрозрачность,
  // а не в яркость; смешение «поверх» с умноженной альфой.
  // Тушь бледнее света: та же точка на бумаге читается слабее, чем
  // светящаяся на тёмном, — поэтому сила вдвое (подбор по кадрам).
  float al = clamp(k * vA * uAlpha * (0.3 + 0.7 * vLum) * 2.0, 0.0, 1.0);
  // В полёте тушь тише: тёмные струи на бумаге перекрывали текст сильнее,
  // чем светящиеся на тёмном.
  al *= 1.0 - 2.2 * vTech * (1.0 - vTech);
  gl_FragColor = vec4(mix(uMapCol, uTechCol, vTech) * al, al);
#else
  vec3 c = mix(mix(uMapCol, uTechCol, vTech), vec3(0.9, 0.93, 1.0), vWhite) * vLum;
  gl_FragColor = vec4(c * k * vA * uAlpha, 1.0);
#ifdef GLOW
  // Гибрид: свет на прозрачном холсте должен нести свою альфу (не меньше
  // самого яркого канала): Chrome при сведении холста с умноженной альфой
  // режет цвет до альфы, и точка там, где под ней холст пуст, пропадала.
  gl_FragColor.a = min(1.0, max(gl_FragColor.r, max(gl_FragColor.g, gl_FragColor.b)));
#endif
#endif
}
`,ul=`
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
`,sl=`
uniform vec3 uCol;
uniform float uAlpha;
varying float vA;
varying float vRun;
void main() {
  float f = fract(vRun);
  float pulse = smoothstep(0.86, 0.995, f) * (1.0 - smoothstep(0.995, 1.0, f));
  float a = vA * uAlpha * (0.16 + 1.1 * pulse);
#ifdef LIGHT
  a = clamp(a, 0.0, 1.0);
  gl_FragColor = vec4(uCol * a, a);
#else
  gl_FragColor = vec4(uCol * a, 1.0);
#endif
}
`,cl=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,fl=`
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
#ifdef LIGHT
  // Светлые на карте улицы и дома — тёмной тушью; пустое — бумага.
  // Яркость в непрозрачность — ЛИНЕЙНО: крутой порог после мип-фильтра
  // снова делал тонкие улицы ступенькой, и они рябили на ходу камеры
  // (замер: ~2 900 вспышек на кадр против ~3 у тёмного вида).
  float a = uAlpha * edge * clamp(l * 1.5, 0.0, 1.0) * 0.7;
  gl_FragColor = vec4(uInk * a, a);
#else
  vec3 c = mix(uBase, uInk, pow(l, 0.85));
  float a = uAlpha * edge * (0.55 + 0.45 * smoothstep(0.02, 0.2, l));
  gl_FragColor = vec4(c, a);
#endif
}
`,vl=`
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
  // ДОМ МЕЛЬЧЕ ДЕСЯТКА ПИКСЕЛЕЙ НЕ РИСУЕТСЯ. Контур в пару пикселей — это
  // отрезки короче пикселя, и при малейшем сдвиге камеры они то попадают
  // на пиксель, то нет: покадровый замер дал от них 90 % всех вспышек
  // над городом. Порог — по размеру дома на экране, а не по расстоянию:
  // крупный дом вдали остаётся, мелкий рядом — тоже.
  float px = aSz * uFocal / max(-mv.z, 0.001);
  vA *= smoothstep(7.0, 16.0, px);
  vTop = aTop;
}
`,ml=`
uniform vec3 uCol;
uniform float uAlpha;
varying float vA;
varying float vTop;
void main() {
#ifdef LIGHT
  float al = clamp((0.45 + 0.55 * vTop) * vA * uAlpha, 0.0, 1.0);
  gl_FragColor = vec4(uCol * al, al);
#else
  gl_FragColor = vec4(uCol * (0.45 + 0.55 * vTop) * vA * uAlpha, 1.0);
#endif
}
`,dl=`
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
`,pl=`
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
#ifdef LIGHT
  a = min(a, 1.0);
  gl_FragColor = vec4(uCol * a, a);
#else
  gl_FragColor = vec4(uCol * a, 1.0);
#endif
}
`,Ia=new Fo(new Uint8Array(4),1,1);Ia.needsUpdate=!0;function io(e,t,a){const l=new Ft,{side:r,field:i,lite:f,light:d}=a,m=d?{LIGHT:1}:{},v=d?{blending:ct,blendSrc:Te,blendDst:Xe,blendSrcAlpha:Te,blendDstAlpha:Xe}:a.glow?{blending:ct,blendSrc:Te,blendDst:Te,blendSrcAlpha:Da,blendDstAlpha:Te}:{blending:i0},u=d?ll:ol,o=y=>d?new Ge().setStyle(u[y],za):new Ge(u[y]),n=r*r,g=new Float32Array(n*2),A=i/r;for(let y=0;y<r;y++)for(let k=0;k<r;k++){const V=y*r+k;g[V*2]=(k+.5)*A-i/2,g[V*2+1]=(y+.5)*A-i/2}const p=e.lumaSize,M=new Float64Array(p*p);let P=0;for(let y=0;y<p*p;y++){const k=e.luma[y];P+=k>.05?k*k+.02:.003,M[y]=P}let I=1234567;const W=()=>(I=I*16807%2147483647)/2147483647,K=new Float32Array(n*2),D=new Float32Array(n);for(let y=0;y<n;y++){const k=W()*P;let V=0,He=p*p-1;for(;V<He;){const Ze=V+He>>1;M[Ze]<k?V=Ze+1:He=Ze}const Fe=V%p,Ye=V/p|0,wa=(Fe+W())/p,ya=(Ye+W())/p;K[y*2]=(wa-.5)*Ue*2,K[y*2+1]=(ya-.5)*Ue*2,D[y]=e.luma[V]}const w=y=>{const k=Array.from({length:n},(V,He)=>He);k.sort((V,He)=>y[V*2]-y[He*2]);for(let V=0;V<r;V++){const He=k.slice(V*r,(V+1)*r).sort((Fe,Ye)=>y[Fe*2+1]-y[Ye*2+1]);for(let Fe=0;Fe<r;Fe++)k[V*r+Fe]=He[Fe]}return k},R=w(g),z=w(K),L=new Float32Array(n*2),S=new Float32Array(n*2),E=new Float32Array(n);for(let y=0;y<n;y++){const k=R[y],V=z[y];L[k*2]=g[k*2],L[k*2+1]=g[k*2+1],S[k*2]=K[V*2],S[k*2+1]=K[V*2+1],E[k]=D[V]}const c=new Ce;c.setAttribute("position",new N(new Float32Array(n*3),3)),c.setAttribute("aGrid",new N(L,2)),c.setAttribute("aMap",new N(S,2)),c.setAttribute("aLum",new N(E,1));const x=new ae({vertexShader:rl,fragmentShader:il,uniforms:{uTime:{value:0},uAsm:{value:0},uWave:{value:1},uSize:{value:f?.05:.036},uFocal:{value:1e3},uFar:{value:30},uStep:{value:A},uTechCol:{value:o("tech")},uMapCol:{value:o("city")},uAlpha:{value:1},uScr:{value:0},uDust:{value:0},uFly:{value:0},uCloudA:{value:1},uDustL:{value:1},uRes:{value:new Re(1,1)},tCloud:{value:Ia},uDrift:{value:new Re},uNeon:{value:0}},defines:a.glow?{...m,GLOW:1}:m,transparent:!0,depthWrite:!1,depthTest:!0,...a.glow?{blending:ct,blendSrc:Te,blendDst:Te,blendSrcAlpha:Te,blendDstAlpha:Te}:v}),_=new Gt(c,x);_.name="points",_.frustumCulled=!1,_.renderOrder=2;const F=new Ca(Ue*2,Ue*2);F.rotateX(-al/2);const s=new ae({vertexShader:cl,fragmentShader:fl,uniforms:{uMap:{value:t},uInk:{value:o("mapInk")},uBase:{value:new Ge("#0a1626")},uAlpha:{value:0}},defines:m,transparent:!0,depthWrite:!1,...d?v:{}}),C=new me(F,s);C.name="map",C.position.y=-.002,C.renderOrder=0,C.frustumCulled=!1;const T=e.houses,$=1.6/1e3;let q=0;for(let y=0;y<T.n;y++)f&&T.area[y]<400||(q+=T.cnt[y]*(T.h[y]>=11?2:1));const ve=new Float32Array(q*6),ee=new Float32Array(q*2),ie=new Float32Array(q*2),ot=new Float32Array(q*2),b=new Float32Array(q*2);let le=0;for(let y=0;y<T.n;y++){if(f&&T.area[y]<400)continue;const k=T.start[y],V=T.cnt[y],He=Math.max(3,T.h[y])*$;let Fe=0,Ye=0;for(let xe=0;xe<V;xe++)Fe+=T.u[k+xe],Ye+=T.v[k+xe];Fe=(Fe/V-.5)*2,Ye=(Ye/V-.5)*2;const wa=Math.min(1,Math.hypot(Fe,Ye))*.8+y*7919%97/97*.2,ya=Math.sqrt(Math.max(30,T.area[y]))/1e3,Ze=(xe,jt,$t)=>{ve[le*3]=(xe-.5)*Ue*2,ve[le*3+1]=0,ve[le*3+2]=(jt-.5)*Ue*2,ee[le]=$t,ie[le]=He,ot[le]=wa,b[le]=ya,le++};for(let xe=0;xe<V;xe++){const jt=k+xe,$t=k+(xe+1)%V;Ze(T.u[jt],T.v[jt],1),Ze(T.u[$t],T.v[$t],1)}if(T.h[y]>=11)for(let xe=0;xe<V;xe++)Ze(T.u[k+xe],T.v[k+xe],0),Ze(T.u[k+xe],T.v[k+xe],1)}const he=new Ce;he.setAttribute("position",new N(ve,3)),he.setAttribute("aTop",new N(ee,1)),he.setAttribute("aH",new N(ie,1)),he.setAttribute("aDel",new N(ot,1)),he.setAttribute("aSz",new N(b,1));const re=new ae({vertexShader:vl,fragmentShader:ml,uniforms:{uGrow:{value:0},uFar:{value:30},uFocal:{value:1e3},uCol:{value:o("house")},uAlpha:{value:.55}},defines:m,transparent:!0,depthWrite:!1,...v}),Ee=new ka(he,re);Ee.name="houses",Ee.frustumCulled=!1,Ee.renderOrder=1;const Y=e.projects,Ie=new Float32Array(Y.length*3),ha=new Float32Array(Y.length);Y.forEach((y,k)=>{Ie[k*3]=(y.u-.5)*Ue*2,Ie[k*3+1]=.03,Ie[k*3+2]=(y.v-.5)*Ue*2,ha[k]=k/Y.length});const De=new Ce;De.setAttribute("position",new N(Ie,3)),De.setAttribute("aSeed",new N(ha,1));const Wt=new ae({vertexShader:dl,fragmentShader:pl,uniforms:{uFocal:{value:1e3},uTime:{value:0},uCol:{value:o("mark")},uAlpha:{value:0}},defines:m,transparent:!0,depthWrite:!1,depthTest:!1,...v}),gt=new Gt(De,Wt);gt.name="marks",gt.frustumCulled=!1,gt.renderOrder=3;const xa=16,Kt=f?96:160,Za=Math.floor(r/xa)+1,ga=new Float32Array(Za*2*Kt*6);let qt=0;for(let y=0;y<Za;y++){const k=Math.min(i/2,y*xa*A-i/2);for(let V=0;V<Kt;V++){const He=(V/Kt-.5)*i,Fe=((V+1)/Kt-.5)*i;ga.set([He,0,k,Fe,0,k],qt),qt+=6,ga.set([k,1,He,k,1,Fe],qt),qt+=6}}const Ja=new Ce;Ja.setAttribute("position",new N(ga,3));const wt=new ae({vertexShader:ul,fragmentShader:sl,uniforms:{uTime:{value:0},uWave:{value:1},uFar:{value:30},uFocal:{value:1e3},uGap:{value:xa*A},uCol:{value:o("grid")},uAlpha:{value:1}},defines:m,transparent:!0,depthWrite:!1,...v}),yt=new ka(Ja,wt);return yt.name="grid",yt.frustumCulled=!1,yt.renderOrder=1,l.add(C,yt,Ee,_,gt),{group:l,update(y){const k=x.uniforms;k.uTime.value=y.time,k.uAsm.value=y.asm,k.uWave.value=y.wave,k.uFocal.value=y.focal,k.uFar.value=y.far,k.uAlpha.value=y.alpha*y.points,k.uScr.value=y.scr||0,y.scr&&(k.uDust.value=y.dust,k.uFly.value=y.fly,k.uCloudA.value=y.cloudA,k.uDustL.value=y.dustL,k.uRes.value.set(y.resW,y.resH),k.tCloud.value=y.cloudTex||Ia,k.uDrift.value.set(y.driftX||0,y.driftY||0),k.uNeon.value=y.neon||0),_.visible=y.alpha*y.points>.002,s.uniforms.uAlpha.value=y.map*y.alpha,C.visible=y.map*y.alpha>.002,re.uniforms.uGrow.value=y.houses,re.uniforms.uFar.value=y.far,re.uniforms.uFocal.value=y.focal,re.uniforms.uAlpha.value=.55*y.alpha,Ee.visible=y.houses>.001&&y.alpha>.002,Wt.uniforms.uTime.value=y.time,Wt.uniforms.uFocal.value=y.focal,Wt.uniforms.uAlpha.value=y.marks*y.alpha,gt.visible=y.marks*y.alpha>.002;const V=y.alpha*(1-y.asm);wt.uniforms.uTime.value=y.time,wt.uniforms.uWave.value=y.wave,wt.uniforms.uFar.value=y.far,wt.uniforms.uFocal.value=y.focal,wt.uniforms.uAlpha.value=V,yt.visible=V>.002,l.visible=y.alpha>.002,y.hideTech&&(_.visible=!1,yt.visible=!1,Ee.visible=!1,C.visible=!1),y.hideMarks&&(gt.visible=!1)}}}const hl=`
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
`,xl=e=>`
#define ${e}
${e==="LOOK_LIGHT"?_l:e.startsWith("LOOK_PAPER")?Rl:""}
${e.includes("P_INK")?`#define SK_SPHERE
`+qa:""}
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
uniform float uNight;
uniform float uClouds;
uniform float uHole;
uniform float uHoleR;
uniform float uRevMode;
uniform float uRevR;
uniform float uRevA;
uniform float uVeil;
uniform float uCzK;
uniform float uSc;
uniform float uInkH;
uniform float uInkP;
uniform vec3 uPdb;
uniform vec3 uSun;
uniform sampler2D uLand;
uniform sampler2D uEu;
uniform vec4 uEuBox;
#ifdef LOOK_PHOTO
uniform sampler2D uDay;
uniform sampler2D uDayEu;
uniform sampler2D uDayCe;
uniform vec4 uCeBox;
uniform float uPhoto;
uniform sampler2D uCloudTex;
#endif
#ifdef LOOK_MIX
uniform sampler2D uNightTex;
uniform sampler2D uNightEu;
#endif
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
#ifdef LOOK_LIGHT
  // Светлый вид: тушь цвета коня по бумаге (DECISIONS 2026-10-12).
  vec3 sea = L_SEA;
  vec3 ground = L_GROUND;
  vec3 gold = L_GOLD;
  vec3 col = mix(sea, ground, land);
  col = mix(col, gold, cz);
  col = mix(col, gold, 0.35 * l.z * (1.0 - cz) * land);
  m = k * mix(0.3, 1.0, land);
  return col;
#else
  vec3 sea = vec3(0.16, 0.30, 0.42) * 0.22;
  vec3 ground = vec3(0.42, 0.62, 0.80);
  vec3 gold = vec3(0.89, 0.69, 0.29);
  vec3 col = mix(sea, ground, land);
  col = mix(col, gold * 1.15, cz);
  // Ореол Чехии подсвечивает соседние точки — граница читается светом.
  col += gold * 0.35 * l.z * (1.0 - cz) * land;
  m = k * mix(0.55, 1.0, land);
  return col;
#endif
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
    // Светлые виды без точек (paper.js): диск — бумага, суша — по виду.
    // Маска суши мягкая (крупный мип-уровень), зерно и волокна — шумом на
    // сфере, зерно — одной величины на экране на любой высоте.
    // В окне Европы маска — из europe.webp (36 пикс/градус против 6 у мира):
    // мировая на крупном мипе давала ступенчатые берега Скандинавии.
    vec3 eC = euUv(lon, lat);
    float landS = textureLod(uLand, worldUv(lon, lat), 1.5).r;
    if (eC.z > 0.0) landS = mix(landS, textureLod(uEu, eC.xy, 2.0).r, eC.z);
    float czS = eC.z > 0.0 ? textureLod(uEu, eC.xy, 1.0).g * eC.z : 0.0;
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
#if defined(P_INK)
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
#else
    // Шёлк: суша — штриховкой по параллелям (две ступени шага, как точки
    // у dots), океан пуст; Чехия — золотом.
    float h0 = abs(fract(lat * uR / (uS0 * 3.0)) - 0.5);
    float h1 = abs(fract(lat * uR / (uS0 * 6.0)) - 0.5);
    float f0 = fwidth(lat * uR / (uS0 * 3.0)), f1 = fwidth(lat * uR / (uS0 * 6.0));
    float l0 = (1.0 - smoothstep(0.0, f0 * 1.2, h0 - 0.0)) * (1.0 - smoothstep(0.25, 0.45, f0));
    float l1 = (1.0 - smoothstep(0.0, f1 * 1.2, h1 - 0.0)) * (1.0 - smoothstep(0.25, 0.45, f1));
    float hatch = mix(l0, l1, uLod);
    float landH = smoothstep(0.45, 0.6, landS);
    lc = mix(L_INK2, L_GOLD, smoothstep(0.3, 0.6, czS));
    // Штриховка суши — только с высоты Европы и тише: над Чехией
    // полосы во весь кадр спорили с годами истории.
    la = (hatch * 0.32 + 0.05) * landH * smoothstep(6.0, 20.0, uSc);
#endif
    // Заливка суши — только издали: изнутри страны (над городом) суша —
    // весь кадр, и заливка легла бы ровным пятном во весь экран.
    la *= uCzK;
#if defined(P_INK)
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
#else
    // Чехия — светлым золотом поверх суши (контур тёмным золотом рисуют
    // ленты paper.js, Пардубице — золотая метка внутри).
    float czF = smoothstep(0.35, 0.6, czS) * uCzK;
    lc = mix(lc, L_GOLDL, czF);
    la = mix(la, 0.42, czF);
    pc = pc * (1.0 - la) + lc * la;
    pa = pa * (1.0 - la) + la;
    float rimL = smoothstep(0.8, 0.99, 1.0 - mu) * uAtm * 0.85;
    pc = pc * (1.0 - rimL) + L_RIM * rimL;
    pa = pa * (1.0 - rimL) + rimL;
#endif
#endif
#ifdef LOOK_LIGHT
    // Точки поверх диска поверх страницы, всё с умноженной альфой (pc, pa).
    // Диск — бумага чуть светлее фона, проступает только в космосе (uSpace):
    // вблизи земля — сама страница. Кромка диска — линия тушью вместо
    // свечения атмосферы.
    float mw = m0 * (1.0 - uLod) + m1 * uLod;
    // Тушью решётка суши тяжелее светящейся: под текстом истории она
    // спорила с ним — 0.7 силы. (Синий перелив по суше забракован —
    // тег zeme-light-neon.)
    float dm = clamp(mw, 0.0, 1.0) * 0.7;
    vec3 dcol = dots / max(mw, 0.0001);
    float bodyA = uSpace * 0.9;
    vec3 pc = dcol * dm + L_DISC * bodyA * (1.0 - dm);
    float pa = dm + bodyA * (1.0 - dm);
    float rimL = smoothstep(0.82, 0.99, 1.0 - mu) * uAtm * 0.75;
    pc = pc * (1.0 - rimL) + L_RIM * rimL;
    pa = pa * (1.0 - rimL) + rimL;
#endif
#ifdef LOOK_MIX
    vec3 e = euUv(lon, lat);
    vec3 nw = texture2D(uNightTex, worldUv(lon, lat)).rgb;
    vec3 ne = e.z > 0.0 ? texture2D(uNightEu, e.xy).rgb : nw;
    vec3 night = mix(nw, ne, e.z);
    // Огни — тёплым по яркости снимка, тёмная вода — тёмным телом.
    float li = dot(night, vec3(0.3, 0.5, 0.2));
    vec3 lights = vec3(1.0, 0.72, 0.38) * pow(li, 1.6) * 2.2;
    vec3 nightCol = vec3(0.012, 0.025, 0.05) + lights + vec3(0.2, 0.45, 0.85) * rim * 0.5 * uAtm;
    vec3 schem = body + dots * 1.1 + vec3(0.25, 0.5, 0.8) * rim * 0.45 * uAtm;
    col = mix(schem, nightCol, uNight);
#endif
#ifdef LOOK_PHOTO
    // Три яруса снимка: мир 20 км/пикс → Европа 3 км → Средняя Европа
    // 0.45 км (Blue Marble 500 м). Края окон — мягкие, мипмапы и анизотропия
    // у каждой текстуры свои, поэтому на подъёме ярусы сменяют друг друга
    // без шва: дальний ярус и так выбирает свой мелкий уровень.
    vec3 e = euUv(lon, lat);
    vec2 dce = degrees(vec2(lon, lat));
    vec2 uvc = (dce - uCeBox.xy) / (uCeBox.zw - uCeBox.xy);
    vec2 ec = smoothstep(vec2(0.0), vec2(0.06), uvc) * smoothstep(vec2(0.0), vec2(0.06), 1.0 - uvc);
    float wc = ec.x * ec.y;
    vec3 dw = texture2D(uDay, worldUv(lon, lat)).rgb;
    vec3 de = e.z > 0.0 ? texture2D(uDayEu, e.xy).rgb : dw;
    vec3 dc = wc > 0.0 ? texture2D(uDayCe, uvc).rgb : de;
    vec3 day = mix(mix(dw, de, e.z), dc, wc);
    // Blue Marble июля тёмен (хвоя, поля в тени): подъём тёмных тонов и
    // насыщенности, иначе Чехия под затемнением текста читалась мутной.
    day = pow(day, vec3(0.72)) * 1.5;
    float lum = dot(day, vec3(0.3, 0.55, 0.15));
    day = mix(vec3(lum), day, 1.18);
    float cl = texture2D(uCloudTex, worldUv(lon, lat)).r;
    cl = smoothstep(0.25, 0.9, cl) * uClouds;
    float sun = dot(n, uSun);
    float lit = smoothstep(-0.12, 0.25, sun);
    vec3 surf = mix(day, vec3(0.92), cl);
    col = surf * (0.04 + 0.96 * lit);
    // Атмосфера: голубая кромка по солнечной стороне, рассеянная дымка.
    col += vec3(0.30, 0.55, 1.0) * rim * (0.25 + 0.75 * lit) * 0.9 * uAtm;
    col = mix(col, vec3(0.55, 0.7, 0.95), 0.12 * rim * uAtm);
    // Вблизи (пока снимок крупнее своего разрешения) — та же схема точек,
    // что у остальных видов; снимок проступает с высоты Чехии.
    vec3 schem = body + dots * 1.1;
    col = mix(schem, col, uPhoto);
    // Фото на бумаге (ink): пока планета близко и под текстом, снимок
    // высветлен к тону бумаги — текст читается; в космосе — полный снимок.
    col = mix(col, vec3(0.80, 0.82, 0.85), uVeil);
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
    float hole = mix(1.0, smoothstep(uHoleR * 0.6, uHoleR, km), uHole);
    // СМЕНА СЛОЯ ПЛАНЕТЫ (ink → фото или техно): новый слой расходится от
    // Пардубиц кругом радиуса uRevR (км) с рваной кромкой, старый — уходит
    // тем же кругом. uRevMode: 0 — нет, 1 — виден внутри круга, 2 — снаружи.
    if (uRevMode > 0.5) {
      // Рваная, но гладкая кромка (сумма синусов на сфере) — без «пикселей».
      float edgeN = 0.07 * sin(n.x * 83.0 + n.y * 51.0) + 0.05 * sin(n.z * 127.0 - n.x * 61.0)
        + 0.04 * sin(n.y * 211.0 + n.z * 97.0) + 0.05 * sin(atan(n.x - uPdb.x, n.z - uPdb.z) * 7.0);
      float rk = km / max(uRevR, 1.0) + edgeN;
      float inside = 1.0 - smoothstep(0.82, 1.0, rk);
      hole *= uRevMode < 1.5 ? inside : 1.0 - inside;
    }
#if defined(LOOK_LIGHT) || defined(LOOK_PAPER)
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
#ifdef LOOK_DOTS
    // В окне под городом гаснут только точки, тёмное тело планеты остаётся:
    // иначе сквозь окно (и по его мягкому краю) проступал синий градиент
    // фона страницы — заказчик: «зачем синюю пелену оставил, по краю окна».
    // Окно — ДО метки: окно сужается к золотой точке (index.js), и метка
    // должна стоять в нём, а не гаснуть вместе с полем.
    col = mix(vec3(0.020, 0.045, 0.080), col, hole);
#endif
    col += mix(gold, blue, uMarkBlue) * uMark;
    col = mix(col, min(col, cap), capW);
    col += vec3(0.55, 0.8, 1.0) * nHot * 0.7 * uMarkBlue * uMark;
    a = 1.0;
#ifndef LOOK_DOTS
    a *= hole;
#endif
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
#ifdef LOOK_PHOTO
    vec3 hc = vec3(0.35, 0.6, 1.0);
#else
    vec3 hc = vec3(0.25, 0.5, 0.85);
#endif
    // Ореол уходит вместе с планетой (uAlpha), иначе после её ухода под CSR
    // на краю кадра оставалась голубая дуга.
    float ha = halo * uAtm * 0.85 * uRevA;
    if (a < 1.0) { hk = ha * (1.0 - a) * uHaloA; hcol = hc; }
  }
#if defined(LOOK_LIGHT) || defined(LOOK_PAPER)
  // Светлый вид: космоса нет — вокруг планеты та же бумага страницы,
  // ореол — чуть светлее бумаги.
  {
    float hgt = max(hR - uR, 0.0);
#ifdef LOOK_LIGHT
    float ha = exp(-hgt / (uR * 0.05)) * step(uR, hR) * uAtm * 0.45 * uAlpha * uRevA;
#else
    float ha = exp(-hgt / (uR * 0.035)) * step(uR, hR) * uAtm * 0.5 * uAlpha * uRevA;
#endif
#ifdef P_INK
    // Рисунок: вокруг планеты только бумага — без свечения.
    ha = 0.0;
#endif
    gl_FragColor = vec4(L_AURA * ha, ha);
    return;
  }
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
`,gl=`
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
`,wl=`
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
`,yl=`
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
  float h = b * b - dot(ro, ro) + ${j.toFixed(1)} * ${j.toFixed(1)};
  vBehind = (h > 0.0 && -b - sqrt(max(h, 0.0)) > 0.0) ? 1.0 : 0.0;
  gl_PointSize = (1.0 + aMag * 1.6) * uPx;
}
`,Al=`
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
`,bl=`
varying vec2 vP;
void main() { vP = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Ml=`
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
`;function uo(){const e=new Ce;return e.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}const Sl={dots:"LOOK_DOTS",photo:"LOOK_PHOTO",mix:"LOOK_MIX",light:"LOOK_LIGHT",lines:`LOOK_PAPER
#define P_LINES`,ink:`LOOK_PAPER
#define P_INK`},so={lines:1,ink:1},No=e=>{const t=parseInt(e.slice(1),16),a=l=>(l/255).toFixed(4);return`vec3(${a(t>>16)}, ${a(t>>8&255)}, ${a(t&255)})`},_l=[["L_SEA","#6c8194"],["L_GROUND","#2c4760"],["L_GOLD","#8a5f10"],["L_DISC","#d3d9de"],["L_RIM","#29455c"],["L_AURA","#e4e8ec"]].map(([e,t])=>`#define ${e} ${No(t)}`).join(`
`),Rl=[["L_SEA","#5b7086"],["L_GROUND","#1c3349"],["L_GOLD","#8a5f10"],["L_GLOW","#2A6DAA"],["L_DISC","#d3d9de"],["L_RIM","#2A6DAA"],["L_AURA","#5FA8E0"],["L_PALE","#5FA8E0"],["L_GOLDL","#c9a24e"],["L_INK3","#4d677d"],["L_INK2","#29455c"]].map(([e,t])=>`#define ${e} ${No(t)}`).join(`
`);function Ma(e,t,a,l){let r=0,i=0;const f=[0,0,0],d=new Ft,m={blending:ct,blendSrc:Te,blendDst:Xe,blendSrcAlpha:Te,blendDstAlpha:Xe},v=Le(l.pdb.lat,l.pdb.lon,1),u={uCam:{value:new J},uC:{value:0},uR:{value:j},uAlpha:{value:0},uHaloA:{value:0},uSpace:{value:0},uAtm:{value:0},uS0:{value:1},uLod:{value:0},uMarkR:{value:10},uMark:{value:0},uMarkBlue:{value:0},uMarkGrow:{value:1},uTime:{value:0},uNight:{value:0},uClouds:{value:0},uHole:{value:0},uHoleR:{value:3.75},uRevMode:{value:0},uRevR:{value:1},uRevA:{value:1},uVeil:{value:0},uCzK:{value:0},uSc:{value:1},uInkH:{value:1},uInkP:{value:1},uPdb:{value:new J(v[0],v[1],v[2])},uSun:{value:new J(...Le(18,-28,1)).normalize()},uLand:{value:t.land},uEu:{value:t.eu},uEuBox:{value:new Qe(Xt.lon0,Xt.lat0,Xt.lon1,Xt.lat1)},uCamWorld:{value:new Ea},uInvProj:{value:new Ea}};e==="photo"&&(u.uDay={value:t.day},u.uDayEu={value:t.dayEu},u.uCloudTex={value:t.clouds},u.uDayCe={value:t.dayCe},u.uCeBox={value:new Qe(Yt.lon0,Yt.lat0,Yt.lon1,Yt.lat1)},u.uPhoto={value:0}),e==="mix"&&(u.uNightTex={value:t.night},u.uNightEu={value:t.nightEu});const o=new ae({vertexShader:hl,fragmentShader:xl(Sl[e]),uniforms:u,transparent:!0,depthTest:!1,depthWrite:!1,...m}),n=new me(uo(),o);n.name="globe",n.frustumCulled=!1,n.renderOrder=-20;const g=(s,C,T)=>new ae({vertexShader:gl,fragmentShader:wl,uniforms:{uCam:u.uCam,uR:u.uR,uPdb:u.uPdb,uMarkR:u.uMarkR,uMark:u.uMark,uCol:{value:e==="light"?new Ge().setStyle(s,za):new Ge(s)},uAlpha:{value:C},uFadeKm:{value:T}},transparent:!0,depthTest:!1,depthWrite:!1,...m}),A={dots:{coast:"#6f9cc4",border:"#8fb4d8",river:"#4f86b8"},photo:{coast:"#ffffff",border:"#ffffff",river:"#9cc8ff"},mix:{coast:"#5b8fc8",border:"#7fa9dc",river:"#3f6f9f"},light:{coast:"#4d677d",border:"#29455c",river:"#6c8194"}}[so[e]?"light":e],p=(s,C)=>{const T=new Ce;T.setAttribute("position",new N(s,3));const $=new ka(T,g(C,0,400));return $.frustumCulled=!1,$.renderOrder=-10,$},M=p(a[0],A.coast),P=p(a[1],A.border),I=p(a[3],A.river);M.name="coast",P.name="border",I.name="river";const W=new f0().setPositions(a[2]),K=new v0({color:e==="light"?9068304:15317072,linewidth:l.lite?1.6:2.2,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),D=new m0(W,K);D.frustumCulled=!1,D.renderOrder=-9;const w=l.lite?900:2400,R=new Float32Array(w*3),z=new Float32Array(w);let L=4242;const S=()=>(L=L*16807%2147483647)/2147483647;for(let s=0;s<w;s++){const C=S()*2-1,T=S()*Math.PI*2,$=Math.sqrt(1-C*C);R[s*3]=$*Math.cos(T)*1e5,R[s*3+1]=C*1e5,R[s*3+2]=$*Math.sin(T)*1e5,z[s]=Math.pow(S(),4)}const E=new Ce;E.setAttribute("position",new N(R,3)),E.setAttribute("aMag",new N(z,1));const c=new ae({vertexShader:yl,fragmentShader:Al,uniforms:{uAlpha:{value:0},uPx:{value:1},uOcc:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,...m}),x=new Gt(E,c);x.frustumCulled=!1,x.renderOrder=-15,x.name="stars";const _=new ae({vertexShader:bl,fragmentShader:Ml,uniforms:{uLeft:{value:0},uAll:{value:0},uSide:{value:0},uCol:{value:e==="light"?new Ge().setStyle("#c4cad0",za):new Ge("#040b15")}},transparent:!0,depthTest:!1,depthWrite:!1,...m}),F=new me(uo(),_);return F.name="scrim",F.frustumCulled=!1,F.renderOrder=100,d.add(x,n,M,P,I,D,F),{group:d,resize(s,C){K.resolution.set(s,C)},setPhoto(s,C){const T=[];return u.uDay&&s&&u.uDay.value!==s&&(T.push(u.uDay.value),u.uDay.value=s),u.uCloudTex&&C&&u.uCloudTex.value!==C&&(T.push(u.uCloudTex.value),u.uCloudTex.value=C),T},update(s,C){const T=C.position;u.uCam.value.copy(T);const $=Math.hypot(T.x,T.y,T.z);u.uC.value=($-j)*($+j),u.uCamWorld.value.copy(C.matrixWorld),u.uInvProj.value.copy(C.projectionMatrixInverse),u.uAlpha.value=s.alpha,u.uHaloA.value=s.haloAlpha??s.alpha,u.uSpace.value=s.space,u.uAtm.value=s.atm,u.uS0.value=s.s0,u.uLod.value=s.lod,u.uMarkR.value=s.markR,u.uMark.value=s.mark,u.uMarkBlue.value=s.markBlue||0,u.uMarkGrow.value=s.markGrow||1,u.uTime.value=s.time,u.uNight.value=s.night,u.uPhoto&&(u.uPhoto.value=s.photo),u.uClouds.value=s.clouds,u.uHole.value=s.hole,u.uHoleR.value=s.holeR,u.uRevMode.value=s.revMode||0,u.uRevR.value=s.revR||1,u.uRevA.value=s.revA??1,u.uVeil.value=s.veil||0,((s.spin||0)!==r||(s.sunLat||0)!==i)&&(r=s.spin||0,i=s.sunLat||0,Le(18+i,-28+r,1,f),u.uSun.value.set(f[0],f[1],f[2]).normalize()),u.uCzK.value=s.czk,u.uSc.value=s.sc||1,u.uInkH.value=s.inkH??1,u.uInkP.value=s.inkP??1,n.visible=s.alpha>.002||s.space>.002,M.material.uniforms.uAlpha.value=s.lines*(e==="photo"?.18:.38),P.material.uniforms.uAlpha.value=s.lines*(e==="photo"?.3:.5),I.material.uniforms.uAlpha.value=s.rivers*.35;for(const q of[M,P,I])q.material.uniforms.uFadeKm.value=Math.max(1,$-j)*.05,q.visible=q.material.uniforms.uAlpha.value>.002;K.opacity=s.cz,D.visible=s.cz>.002,x.position.copy(T),c.uniforms.uAlpha.value=s.stars,c.uniforms.uOcc.value=Math.min(1,20*Math.max(s.alpha,s.haloAlpha??s.alpha)),c.uniforms.uPx.value=s.px,x.visible=s.stars>.002,so[e]&&(M.visible=P.visible=I.visible=D.visible=x.visible=!1),_.uniforms.uLeft.value=s.scrimLeft,_.uniforms.uAll.value=s.scrimAll,_.uniforms.uSide.value=s.scrimSide??0,F.visible=s.scrimLeft+s.scrimAll>.002}}}const ht=[[48.2082,16.3738],[52.52,13.405],[47.4979,19.0402],[48.8566,2.3522],[51.5074,-.1278],[41.9028,12.4964],[40.4168,-3.7038],[59.3293,18.0686],[50.4501,30.5234],[39.9334,32.8597],[24.4539,54.3773],[39.9042,116.4074],[56.9496,24.1052],[37.9838,23.7275],[35.6762,139.6503],[1.3521,103.8198]],Zt=128,ft=2.5,Ll=ft*ht.length,Fl=`
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
  return d * (${j.toFixed(1)} + aArc.z * sin(3.14159265 * t));
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
  vec4 ch = pv * vec4(uP * ${j.toFixed(1)}, 1.0);
  vHome = (ch.xy / ch.w * 0.5 + 0.5) * uRes;
  // Закрыта ли точка шаром Земли (луч из камеры к ней пересекает шар).
  vec3 ro = cameraPosition, rd = p - ro;
  float L = length(rd); rd /= L;
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${(j*.998).toFixed(1)} * ${(j*.998).toFixed(1)};
  float tHit = -b - sqrt(max(h, 0.0));
  vOcc = (h > 0.0 && tHit > 0.0 && tHit < L - 1.0) ? 0.0 : 1.0;
  vT = aT;
  vS = aSide;
  vArc = aArc;
}
`,Tl=`
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
  float k = floor(uTime / ${ft.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = 2.0 * floor(h * ${ht.length/2}.0) + mod(j, 2.0);
    float since = uTime - j * ${ft.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${ft.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
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
  float order = vArc.y * float(${ht.length});
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
`,Pl=`
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
  float k = floor(uTime / ${ft.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = 2.0 * floor(h * ${ht.length/2}.0) + mod(j, 2.0);
    float since = uTime - j * ${ft.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${ft.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
  }
  return best;
}
void main() {
  vec4 cp = projectionMatrix * viewMatrix * vec4(position, 1.0);
  gl_Position = cp;
  // Вспышка, когда приходит голова (конец пути), и тихое тление.
  float order = aArc.y * float(${ht.length});
  float since = arcLaunch(order, aArc.x + 3.0) - aArc.x;
  float flash = since > -0.25 ? smoothstep(-0.25, 0.0, since) * exp(-max(since, 0.0) * 1.6) : 0.0;
  float drawn = step(uStart + order * 0.15 + 2.4, uTime);
  // В Пардубицах точку даёт метка Земли (globe.js, дышит) — здесь её нет.
  vI = aHome > 0.5 ? 0.0 : (0.35 + 1.4 * flash) * drawn;
  gl_PointSize = (aHome > 0.5 ? 12.0 : 9.0 + 6.0 * flash) * uDpr * (1.0 + 0.4 * uNear);
  vec3 ro = cameraPosition, rd = position - ro;
  float L = length(rd); rd /= L;
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${(j*.998).toFixed(1)} * ${(j*.998).toFixed(1)};
  float tHit = -b - sqrt(max(h, 0.0));
  vOcc = (h > 0.0 && tHit > 0.0 && tHit < L - 1.0) ? 0.0 : 1.0;
}
`,Cl=`
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
`,co={blending:ct,blendSrc:Te,blendDst:Te,blendSrcAlpha:Te,blendDstAlpha:Xe};function Dl(e){const t=new J(...Le(e.lat,e.lon,1)),a=ht.length,l=a*(Zt+1)*2,r=new Float32Array(l*3),i=new Float32Array(l),f=new Float32Array(l),d=new Float32Array(l*4),m=[];let v=7;const u=()=>(v=v*16807%2147483647)/2147483647,o=ht.map(([L,S],E)=>{const c=new J(...Le(L,S,1)),x=Math.acos(Math.min(1,Math.max(-1,t.dot(c)))),_=Math.min(.22*j,x*j*.2);return{e:c,ang:x,a:[3+2*Math.min(1,x/1.45),0,_,.75+.25*u()]}}),n=o.map((L,S)=>S);for(let L=n.length-1;L>0;L--){const S=Math.floor(u()*(L+1));[n[L],n[S]]=[n[S],n[L]]}n.forEach((L,S)=>{o[L].a[1]=S/a});let g=0;o.forEach(({e:L,a:S})=>{const E=g;for(let c=0;c<=Zt;c++){for(const x of[-1,1])r.set([L.x,L.y,L.z],g*3),i[g]=c/Zt,f[g]=x,d.set(S,g*4),g++;if(c<Zt){const x=E+c*2;m.push(x,x+1,x+2,x+1,x+3,x+2)}}});const A=new Ce;A.setAttribute("position",new N(new Float32Array(l*3),3)),A.setAttribute("aEnd",new N(r,3)),A.setAttribute("aT",new N(i,1)),A.setAttribute("aSide",new N(f,1)),A.setAttribute("aArc",new N(d,4)),A.setIndex(m);const p=new Ge("#78d0e6"),M=new ae({vertexShader:Fl,fragmentShader:Tl,uniforms:{uP:{value:t},uRes:{value:new Re(1,1)},uHalfW:{value:5},uTime:{value:0},uPeriod:{value:Ll},uAlpha:{value:0},uStart:{value:0},uTextL:{value:1},uTextR:{value:0},uDpr:{value:1},uNear:{value:0},uCol:{value:p}},transparent:!0,depthWrite:!1,depthTest:!1,side:zt,...co}),P=new me(A,M);P.frustumCulled=!1,P.name="arcs";const I=new Float32Array((a+1)*3),W=new Float32Array((a+1)*4),K=new Float32Array(a+1);o.forEach(({e:L,a:S},E)=>{I.set([L.x*j,L.y*j,L.z*j],E*3),W.set(S,E*4)}),I.set([t.x*j,t.y*j,t.z*j],a*3),W.set([1,0,0,1],a*4),K[a]=1;const D=new Ce;D.setAttribute("position",new N(I,3)),D.setAttribute("aArc",new N(W,4)),D.setAttribute("aHome",new N(K,1));const w=new ae({vertexShader:Pl,fragmentShader:Cl,uniforms:{uTime:M.uniforms.uTime,uPeriod:M.uniforms.uPeriod,uStart:M.uniforms.uStart,uNear:M.uniforms.uNear,uAlpha:M.uniforms.uAlpha,uCol:{value:p},uDpr:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,...co}),R=new Gt(D,w);R.frustumCulled=!1,R.name="arcDots";const z=new Ft;return z.add(P,R),P.renderOrder=50,R.renderOrder=51,{group:z,update(L){const S=z.visible;if(z.visible=L.alpha>.002,!z.visible)return;S||(M.uniforms.uStart.value=L.time),M.uniforms.uTextL.value=L.textL??1,M.uniforms.uTextR.value=L.textR??0,M.uniforms.uAlpha.value=L.alpha,M.uniforms.uTime.value=L.time,M.uniforms.uRes.value.set(L.w,L.h);const E=Math.log(Math.max(1,L.d||2e4)),c=1-Math.min(1,Math.max(0,(E-Math.log(2e3))/(Math.log(2e4)-Math.log(2e3)))),x=c*c*(3-2*c);M.uniforms.uNear.value=x,M.uniforms.uHalfW.value=5*L.dpr*(1+.8*x),w.uniforms.uDpr.value=L.dpr,M.uniforms.uDpr.value=L.dpr}}}const Sa="/assets/dawn/",fo=6336/2688,kl=.62,vo=.668,At={x:.712,y:.676},mo={x:.775,y:.3},lt=[-1,-.45,0,.35,1],zl={zen:["#03091a","#0a1532","#28427f","#1f68c0","#1478d8"],hor:["#0e1b34","#2a2a4a","#c88a90","#b4d6ee","#bfe0f6"],glow:["#000000","#4c2a34","#ff7a2e","#ffc78a","#ffe9c8"],halo:["#000000","#160a0c","#ff8d3f","#ffdcb0","#f6f8ff"],disc:["#000000","#000000","#ffb070","#fff0d0","#fffaf0"],cLit:["#05070f","#4a2c3a","#ffbc9c","#ffeedd","#ffffff"],cSh:["#03050c","#1a1830","#8e6490","#b6b2c8","#aebfd6"],cCream:["#ffffff","#ffffff","#ffe2cc","#ffeedd","#fff1de"],mBase:["#050a17","#0b0f22","#2a2140","#46526e","#5a6a86"],mTint:["#6f86c0","#7a6aa0","#ffb28a","#ffe6cc","#ffffff"],nTint:["#7d95d0","#8a7aa8","#ffb088","#fff0dc","#ffffff"],nAmb:["#020408","#04040c","#0c0710","#05060a","#000000"],rim:["#000000","#3a1a12","#ff8a3a","#ffcf94","#fff2dc"]},El={horPow:[4,3.4,2.6,3.4,4.2],glowW:[.6,.55,.42,.42,.4],haloW:[.08,.08,.075,.07,.06],pol:[0,0,.12,.35,.48],mLight:[0,.015,.16,.65,1],mHaze:[.85,.85,.85,.4,.16],nLight:[.01,.02,.075,.6,1],rimK:[0,.25,1.15,.45,.12],veil:[0,0,.14,.3,.34]},Il=e=>{const t=new Ge(e);return[t.r,t.g,t.b]},po=Object.fromEntries(Object.entries(zl).map(([e,t])=>[e,t.map(Il)]));function Oo(e){if(e<=lt[0])return[0,0];for(let t=0;t<lt.length-1;t++)if(e<=lt[t+1]){const a=(e-lt[t])/(lt[t+1]-lt[t]);return[t,t===1?Math.pow(a,1.6):a]}return[lt.length-2,1]}function Ne(e,t,a){const[l,r]=Oo(t),i=po[e][l],f=po[e][l+1];a.set(i[0]+(f[0]-i[0])*r,i[1]+(f[1]-i[1])*r,i[2]+(f[2]-i[2])*r)}function qe(e,t){const[a,l]=Oo(t),r=El[e];return r[a]+(r[a+1]-r[a])*l}const ho=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Hl=`
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
`,Va=`
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
`,Go=`
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
`,Nl=`
precision highp float;
${Va}
${Hl}
uniform float uA, uStars, uCell, uDiscA, uSunR, uRays, uTime, uGlowP;
uniform sampler2D tCl;
uniform float uHor0, uSpan, uAsp, uDrift, uRise, uClA;
${Go}
uniform vec2 uStarOff;
uniform vec3 uDisc;
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
`,Ol=`
precision highp float;
uniform sampler2D tCl;
uniform vec2 uRes, uSunC;
uniform float uA, uHor0, uSpan, uAsp, uDrift, uLeftK, uRise;
uniform vec3 uLit, uSh, uCream, uGlowC;
${Go}
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
`,Bo=`
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
`,Gl=`
precision highp float;
${Va}
${Bo}
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
`,Bl=`
precision highp float;
${Va}
${Bo}
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
`,Ul=`
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
`,Wl=`
attribute float aMag;
uniform float uPx;
varying float vM;
varying float vBehind;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vM = aMag;
  vec3 ro = cameraPosition, rd = normalize((modelMatrix * vec4(position, 1.0)).xyz - ro);
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${j.toFixed(1)} * ${j.toFixed(1)};
  vBehind = (h > 0.0 && -b - sqrt(max(h, 0.0)) > 0.0) ? 1.0 : 0.0;
  gl_PointSize = (1.0 + aMag * 1.6) * uPx;
}
`,Kl=`
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
`;function ql(){const e=new Ce;return e.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}const la=new Fo(new Uint8Array([0,0,0,0]),1,1);la.needsUpdate=!0;function jl(){return{uRes:{value:new Re(1,1)},uPx:{value:1},uHor:{value:0},uHorPow:{value:3},uGlowW:{value:.5},uHaloW:{value:.08},uPol:{value:0},uSun:{value:new Re},uZen:{value:new J},uHorC:{value:new J},uGlow:{value:new J},uHalo:{value:new J}}}function $l({lite:e=!1}={}){const t=new Ft;t.name="dawn";const a=ql(),l=jl(),r=(R,z,L,S)=>{const E=new me(a,new ae({vertexShader:ho,fragmentShader:R,uniforms:{...l,...z},transparent:!0,depthTest:!1,depthWrite:!1,...We}));return E.frustumCulled=!1,E.renderOrder=L,E.name=S,t.add(E),E},i=r(Nl,{uA:{value:0},uStars:{value:0},uTime:{value:0},uGlowP:{value:0},uClA:{value:0},uCell:{value:e?8:7},uDiscA:{value:0},uSunR:{value:10},uRays:{value:0},uStarOff:{value:new Re},uDisc:{value:new J}},200,"dawn-sky"),f=new me(a,new ae({vertexShader:ho,fragmentShader:Ol,uniforms:{tCl:{value:la},uRes:{value:new Re(1,1)},uSunC:{value:new Re},uA:{value:0},uHor0:{value:0},uSpan:{value:.754},uAsp:{value:1003/652},uDrift:{value:0},uLeftK:{value:.12},uRise:{value:0},uMorph:{value:0},uLit:{value:new J},uSh:{value:new J},uCream:{value:new J(1,1,1)},uGlowC:{value:new J}},transparent:!0,depthTest:!1,depthWrite:!1,...We}));f.frustumCulled=!1,f.renderOrder=202;for(const R of["tCl","uHor0","uSpan","uAsp","uDrift","uRise","uMorph"])i.material.uniforms[R]=f.material.uniforms[R];f.name="dawn-clouds",t.add(f);const d=r(Gl,{tL:{value:la},uPlate:{value:new Qe(0,0,1,1)},uTop:{value:0},uA:{value:0},uMLight:{value:0},uMHaze:{value:0},uMBase:{value:new J},uMTint:{value:new J}},203,"dawn-far"),m=r(Bl,{tL:{value:la},uPlate:{value:new Qe(0,0,1,1)},uTop:{value:0},uA:{value:0},uNLight:{value:0},uRimK:{value:0},uNTint:{value:new J},uNAmb:{value:new J},uRim:{value:new J}},204,"dawn-near"),v=r(Ul,{uVeil:{value:0},uFlat:{value:e?1:0}},205,"dawn-veil");let u=null;const o=new ae({vertexShader:Wl,fragmentShader:Kl,uniforms:{uAlpha:{value:0},uPx:{value:1},uOcc:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,...We});let n=null,g=!1,A=0,p=0,M=!1;const P={near:.4673,far:.6369};function I(R,z){if(n)return n;const L=new Ro;L.setOptions({imageOrientation:"none",premultiplyAlpha:"none",colorSpaceConversion:"none"});const S=c=>new Promise((x,_)=>L.load(Sa+c+(z?"":"-s")+".webp",F=>{const s=new Pa(F);s.colorSpace=ia,s.flipY=!1,s.wrapS=s.wrapT=Ot,s.minFilter=ua,s.magFilter=pt,s.anisotropy=4,s.needsUpdate=!0,x(s)},void 0,_)),E=new Promise((c,x)=>L.load(Sa+"clouds.png",_=>{const F=new Pa(_);F.colorSpace=ia,F.flipY=!1,F.wrapS=Ka,F.wrapT=Ot,F.minFilter=ua,F.magFilter=pt,F.needsUpdate=!0,c(F)},void 0,x));return n=Promise.all([fetch(Sa+"dawn.json").then(c=>c.json()),S("near"),S("far"),E]).then(([c,x,_,F])=>{R.initTexture(F);const s=f.material.uniforms;s.tCl.value=F,c.clouds&&(s.uSpan.value=c.clouds.span,s.uAsp.value=c.clouds.w/c.clouds.h),M=!0,P.near=c.layers.near.top,P.far=c.layers.far.top,R.initTexture(x),R.initTexture(_),m.material.uniforms.tL.value=x,d.material.uniforms.tL.value=_,m.material.uniforms.uTop.value=P.near,d.material.uniforms.uTop.value=P.far,g=!0}).catch(c=>console.warn("[cfig] рассвет: слои не подгрузились:",c)),n}const W=new Re;let K=!1,D=!1;function w(R,z,L,S){const E=.035*z,c=Math.max(R/fo,(L?.62:.86)*z)+E,x=c*fo,_=L?.52:.66;return{x0:Math.min(0,Math.max(R-x,_*R-kl*x)),top:c-E+S,Wp:x,Hp:c}}return{group:t,load:I,get ready(){return g},adoptStars(R){u||!R||(u=new Gt(R.geometry,o),u.frustumCulled=!1,u.renderOrder=201,u.name="dawn-estars",u.userData.src=R,t.add(u))},update(R){if(K=!!R.on,t.visible=K,!K){D=!1;return}const{w:z,h:L,e:S,lite:E}=R,c=R.now||0,x=Math.min(.1,Math.max(0,(c-p)/1e3));p=c,A=g?Math.min(1,A+x/.5):0,R.instant&&g&&(A=1);const _=R.D-.5,F=w(z,L,E,_*.0105*L),s=w(z,L,E,_*.028*L),C=w(z,L,E,_*.06*L),T=Y=>s.top-Y*s.Hp,$=T(vo);let q,ve;if(S<0)q=At.x,ve=At.y+.12*-S;else{const Y=S,Ie=Math.sin(Y*Math.PI/2);q=At.x+(mo.x-At.x)*Y,ve=At.y+(mo.y-At.y)*Ie}W.set(Math.min(s.x0+q*s.Wp,.9*z),T(ve));const ee=l;ee.uRes.value.set(z,L),ee.uPx.value=R.px,ee.uHor.value=$,ee.uSun.value.copy(W),Ne("zen",S,ee.uZen.value),Ne("hor",S,ee.uHorC.value),Ne("glow",S,ee.uGlow.value),Ne("halo",S,ee.uHalo.value),ee.uHorPow.value=qe("horPow",S),ee.uGlowW.value=qe("glowW",S),ee.uHaloW.value=qe("haloW",S),ee.uPol.value=qe("pol",S);const ie=i.material.uniforms;if(ie.uA.value=R.A,ie.uStars.value=R.stars,ie.uTime.value=R.time||0,ie.uGlowP.value=Math.min(1,Math.max(0,(S+1)/1.5)),Ne("disc",S,ie.uDisc.value),ie.uDisc.value.multiplyScalar(1.8),ie.uDiscA.value=Math.min(1,Math.max(0,(S+.06)/.1)),ie.uSunR.value=(.0105+.004*Math.max(0,1-S/.4))*s.Hp,ie.uRays.value=Math.min(1,Math.max(0,(S-.25)/.5)),ie.uStarOff.value.set(.0845*z,F.top-w(z,L,E,0).top),u){const Y=u.userData.src;u.position.copy(Y.position),o.uniforms.uAlpha.value=R.estars,o.uniforms.uPx.value=Y.material.uniforms.uPx.value,o.uniforms.uOcc.value=Y.material.uniforms.uOcc.value,u.visible=R.estars>.002}const ot=Math.min(1,Math.max(0,(S+.8)/.75)),b=R.A*Math.min(1,Math.max(0,(S+.85)/.3))*(M?1:0);if(D=b>.002,i.material.uniforms.uClA.value=D?b:0,f.visible=D,D){const Y=f.material.uniforms,Ie=w(z,L,E,0);Y.uRes.value.set(z,L),Y.uHor0.value=Ie.top-vo*Ie.Hp,Y.uDrift.value=R.time*4*R.px,Y.uMorph.value=R.time,Y.uA.value=b,Y.uRise.value=ot,Y.uSunC.value.copy(W),Ne("cLit",S,Y.uLit.value),Ne("cSh",S,Y.uSh.value),Ne("cCream",S,Y.uCream.value),Ne("glow",S,Y.uGlowC.value),Y.uGlowC.value.multiplyScalar(.3)}const le=R.A*A;d.visible=m.visible=le>.002;const he=d.material.uniforms;he.uPlate.value.set(s.x0,s.top,s.Wp,s.Hp),he.uA.value=le,he.uMLight.value=qe("mLight",S),he.uMHaze.value=qe("mHaze",S),Ne("mBase",S,he.uMBase.value),Ne("mTint",S,he.uMTint.value);const re=m.material.uniforms;re.uPlate.value.set(C.x0,C.top,C.Wp,C.Hp),re.uA.value=le,re.uNLight.value=qe("nLight",S),re.uRimK.value=qe("rimK",S),Ne("nTint",S,re.uNTint.value),Ne("nAmb",S,re.uNAmb.value),Ne("rim",S,re.uRim.value);const Ee=qe("veil",S)*(E?.75:1)*R.A;v.material.uniforms.uVeil.value=Ee,v.visible=Ee>.002},prerender(){}}}const _a="home",_t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Uo=5,xo=new URLSearchParams(location.search).get("earthfreeze"),Ha=!0,vt=[3.1,3.9];let na=.5;const bt={a:0,b:0};let fe=null,Oe=null,X=null,pe=null,Lt=null,Pe=null,mt=null,_e=null,st=null,ca=null,et=null;const je={alpha:0,time:0,w:1,h:1,dpr:1,textL:1},Me=[5.08,6.2],Vl=.5,Xl=.05,Ra=[5.4,6.14];function Yl(e,t){t.k=Na?h(4.9,5.2,e)*(1-h(6.3,6.8,e)):0;const a=Math.min(1,Math.max(-.5,(e-Ra[0])/(Ra[1]-Ra[0])));return t.c=-Math.cos(2*Math.PI*a),t.u=(1+t.c)/2,t.textR=t.k*(1-t.u),t}const Mt={k:0,u:0,c:0,textR:0};let Na=!1,be=null;const Oa=new To(35,1,1,1e6),ge={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},Jt=[0,0,0],Qt=[0,0,0],ea=[0,0,0],xt=new J,Be={lat:0,lon:0,tilt:0,head:0,sx:0,sy:0,ok:!1};function Xa(e,t){if(!_e||e<=Me[0])return;Be.ok||(Ut(Me[0],Be),Be.ok=!0);const a=h(Me[0],Me[1],e);t.lat=Be.lat,t.lon=Be.lon,t.head=Be.head,t.tilt=Be.tilt*(1-a),t.sx=Be.sx+(.3-Be.sx)*a,t.sy=Be.sy+(0-Be.sy)*a}function Ga(e,t,a){Ut(t,ge),Xa(t,ge),Do(ge.lat,ge.lon+e,ge.d,ge.tilt,ge.head,Jt,Qt,ea),a.position.set(Jt[0],Jt[1],Jt[2]),a.up.set(Qt[0],Qt[1],Qt[2]),a.lookAt(ea[0],ea[1],ea[2]),a.aspect=oe/de,a.near=Math.max(.02,ge.d*.02),a.far=Math.max(ge.d*4,ge.d+2.2*j)+2e5,a.updateProjectionMatrix(),a.projectionMatrix.elements[8]=-ge.sx,a.projectionMatrix.elements[9]=-ge.sy,a.projectionMatrixInverse.copy(a.projectionMatrix).invert(),a.updateMatrixWorld();const l=Le(B.lat,B.lon);return xt.set(l[0],l[1],l[2]).project(a),(xt.x*.5+.5)*(pe.clientWidth||innerWidth)}function Wo(){const e=document.querySelector("#container-probe i")?.getBoundingClientRect();return e&&e.width>0?e.left+e.width/2:innerWidth/2}function Zl(){const e=oe+"x"+de;if(be&&be.key===e)return be.v;const t=Wo();let a=0,l=1/0;for(let r=-30;r<=60;r+=.25){const i=Ga(r,Me[1],Oa);xt.z<1&&Math.abs(i-t)<l&&(l=Math.abs(i-t),a=r)}return Ut(Me[1],ge),Xa(Me[1],ge),be={key:e,v:a,goal:t,lat:ge.lat,lon:ge.lon,sx:ge.sx,sy:ge.sy},be.v}const nt=[4.85,5.08];let dt=null,$e=null,Rt=null,U=null,fa=0,go=null,Q=!1,ze=null;const Jl=performance.now(),pa=[{t:0,lat:B.lat-.012,lon:B.lon,d:6.5,tilt:74,head:-30,sx:.3,sy:.02},{t:1,lat:B.lat-.008,lon:B.lon,d:7.2,tilt:70,head:-20,sx:.3,sy:0},{t:2,lat:B.lat-.004,lon:B.lon,d:8.4,tilt:62,head:-9,sx:.3,sy:0},{t:3,lat:B.lat,lon:B.lon,d:9.6,tilt:52,head:2,sx:.3,sy:0},{t:4,lat:B.lat,lon:B.lon,d:11,tilt:46,head:12,sx:.8,sy:-.22},{t:4.5,lat:B.lat,lon:B.lon-.05,d:75,tilt:32,head:8,sx:.55,sy:-.26},{t:5,lat:49.85,lon:15.45,d:780,tilt:14,head:0,sx:.32,sy:-.2},{t:5.5,lat:50,lon:14.2,d:2300,tilt:6,head:0,sx:.3,sy:-.1},{t:6,lat:49,lon:12,d:5600,tilt:0,head:0,sx:.3,sy:0},{t:7,lat:38,lon:9,d:23e3,tilt:0,head:0,sx:.32,sy:0},{t:8,lat:30,lon:-4,d:34e3,tilt:0,head:0,sx:1.2,sy:.95}],Ko=pa.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),qo=pa.map(e=>e.t===5?{...e,d:1500,sx:-.3,sy:-.52}:e.t===5.5?{...e,sx:-.42,sy:-.56}:e),jo=[...qo.map(e=>e.t===2?{...e,tilt:58,head:-18}:e.t===3?{...e,tilt:50,head:6,d:9.2}:e),{t:2.5,lat:B.lat-.002,lon:B.lon,d:8.8,tilt:54,head:-8,sx:.3,sy:0}].sort((e,t)=>e.t-t.t),Ql=jo.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),ra={lat:B.lat,lon:B.lon,head:10.2},La={...ra,d:11,tilt:46,sx:.62,sy:-.08},$o=[{t:0,...ra,d:12.5,tilt:76,sx:.3,sy:0},{t:1,...ra,d:11.2,tilt:72,sx:.3,sy:0},{t:2,...ra,d:11,tilt:56,sx:.5,sy:-.04},{t:2.5,...La},{t:3,...La},{t:4,...La},...pa.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],en=[...$o.filter(e=>e.t<=4).map(e=>({...e,sx:0,sy:-.12})).map(e=>e.t===2?{...e,d:16}:e.t===2.5?{...e,d:19}:e.t===3||e.t===4?{...e,d:22}:e),...Ko.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],ut=1.5,tn=[{t:0,lat:B.lat-.012,lon:B.lon,d:8,tilt:80,sx:.3,sy:.02},{t:1,lat:B.lat-.008,lon:B.lon,d:8.5,tilt:76,sx:.3,sy:0}],wo=[[0,10.2],[ut,10.2]];function an(e,t){const a=Et(e),l=n=>({t:n,...a(n,{})}),r=tn.map(n=>t?{...n,sx:0,sy:-.12}:n),i=[...r,l(ut),l(ut+.3)],f=va([...wo.map(n=>n[0]),ut+.3],[...wo.map(n=>n[1]),i[i.length-1].head]),d=Et(i.map(({head:n,...g})=>g)),m={lat:B.lat,lon:B.lon,head:10.2,sx:t?0:.69,sy:t?-.12:-.05},v=Et([[0,12.5,76],[1,11.2,72],[2,9.4,62],[2.5,8.3,53],[3,7.48,47.5],[4,7.48,47.5]].map(([n,g,A])=>({t:n,...m,d:g,tilt:A}))),u=n=>{const g=v(n,{});return delete g.head,{t:n,...g}},o=Et([...r,u(ut),u(ut+.3)]);return(n,g)=>n>=ut?a(n,g):(n<=1?o(n,g):d(n,g),g.head=f(n),g)}let Ut=null;const h=(e,t,a)=>{const l=Math.min(1,Math.max(0,(a-e)/(t-e)));return l*l*(3-2*l)},G={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},ce={resW:1,resH:1,time:0,asm:0,wave:1,map:0,houses:0,marks:0,alpha:1,points:1,focal:1e3,far:30},O={alpha:0,space:0,atm:0,s0:1,lod:0,markR:1,mark:0,time:0,night:0,photo:0,clouds:0,lines:0,rivers:0,cz:0,czk:0,stars:0,px:1,scrimLeft:0,scrimAll:0,hole:0,holeR:Ue},we={},ue={},se={};let Ae=0,tt=0,Fa=0,Je=0,Ba=0,Ht=0,yo=0;const rt=[0,0,0],ta=[0,0,0],aa=[0,0,0],on=14,ke={a:0,b:0,f0:0,f1:0,spin:0,leave:0,on:!1};function ln(e){if(!ke.on){ke.spin=0,ke.leave=0;return}ke.spin=on*h(ke.a,ke.b,e),ke.leave=h(ke.f0,ke.f1,e)}function nn(){const e=document.querySelector("#canvas-wrapper");if(!e)return null;let t=e.querySelector("canvas.canvas-earth");return t||(t=document.createElement("canvas"),t.className="canvas-earth",t.setAttribute("aria-hidden","true"),e.append(t)),t}function Ta(){Bt.measures++;const e=innerHeight,t=n=>{const g=document.querySelector(n);if(!g)return null;const A=g.getBoundingClientRect();return{y:A.top+scrollY,h:A.height}},a=t("main .about"),l=t("main .growth"),r=t("main .reach"),i=t("main .companies"),f=t("main .values"),d=t("main .social");if(!a||!l||!r||!i||!f||!d){ze=null;return}const m=c0(),v=new Array(11).fill(0);v[0]=m;const u=n=>n.y+.5*n.h-.5*e;if(v[1]=m+.8*e,v[2]=v[1]+.842*e,v[3]=v[2]+1.1*e,bt.a=v[3]-.25*e,bt.b=bt.a+1*e,v[4]=bt.b+.15*e,Na=matchMedia("(min-width: 901px)").matches,Na?(v[5]=v[4]+1.5175*e,v[6]=v[5]+1.0508*e,v[9]=v[6]+3.5016*e):(v[5]=u(r),v[6]=Math.max(v[5]+1.05*e,i.y-.55*e),v[9]=f.y-.2*e),v[8]=v[9]-1.5*e,v[7]=(v[6]+v[8])/2,v[10]=v[9]+.8*e,!(U==="ink"&&Ha)){if(U==="ink"){const n=[1.1,.7,1.2,1.2,1,1.2,1.4,1.6],g=n.reduce((M,P)=>M+P,0),A=document.documentElement.scrollHeight-e-v[2],p=Math.min(1,Math.max(.3,A/(g*e)));for(let M=0;M<n.length;M++)v[M+3]=v[M+2]+n[M]*e*p}}for(let n=1;n<v.length;n++)v[n]=Math.max(v[n],v[n-1]+40);const o=[0,1,2,3,4,4.5,5,5.5,6,7,8];ze={ys:v,ts:o,start:m,map:va(v,o)},U==="ink"&&Ha&&(vt[0]=ze.map(bt.a),vt[1]=ze.map(bt.b),un(d)),ke.on=!1}function Vo(e){return ze?ze.map(e):0}function Xo(e){if(!ze)return 0;let t=ze.ys[0],a=ze.ys[ze.ys.length-1];for(let l=0;l<40;l++){const r=(t+a)/2;ze.map(r)<e?t=r:a=r}return(t+a)/2}let oe=0,de=0;function Yo(){const e=Math.min(Q?1.5:1.75,window.devicePixelRatio||1),t=Math.max(1,Math.round(pe.clientWidth*e)),a=Math.max(1,Math.round(pe.clientHeight*e));t===oe&&a===de||(oe=t,de=a,fe.setPixelRatio(1),fe.setSize(t,a,!1),X.aspect=t/a,dt?.resize(t,a),$e?.resize(t,a),st?.resize(t,a))}const it=new J,St=new J,oa=new J,ne={amount:0,time:0,w:1,h:1,hx:0,hy:0,r:1,dark:0,erode:0,dim:0,fly:0,neon:0,done:!1,textL:1,px:1};function rn(e,t){if(ne.amount=h(.35,1,e)*(_e?1:1-h(3.8,4.4,e)),ne.dark=0,ne.erode=Ba,ne.dim=.55*h(0,.35,Ae)*(1-tt),ne.fly=Ht,ne.neon=ue.neon||0,ne.done=!!_e&&Ht>=1,ne.textL=Q?1:.45,ne.px=oe/(pe.clientWidth||oe),ne.amount>.002){const a=Le(B.lat,B.lon);it.set(a[0],a[1],a[2]).project(X),ne.hx=(it.x*.5+.5)*oe,ne.hy=(it.y*.5+.5)*de;const l=Ue/(111.32*Math.cos(B.lat*Math.PI/180)),r=Le(B.lat,B.lon+l);it.set(r[0],r[1],r[2]).project(X),ne.r=Math.max(.33*de,Math.abs((it.x*.5+.5)*oe-ne.hx)),X.getWorldDirection(St),oa.copy(X.position).normalize();const i=X.position.length(),f=St.dot(oa);if(St.addScaledVector(oa,-f),i>j&&St.lengthSq()>1e-8){St.normalize();const d=j/i,m=Math.sqrt(1-d*d);it.copy(St).multiplyScalar(d).addScaledVector(oa,-m).multiplyScalar(Math.sqrt(i*i-j*j)).add(X.position).project(X),ne.top=(it.y*.5+.5)*de-.04*de}else ne.top=1e6;ne.topF=.1*de}ne.time=t,ne.w=oe,ne.h=de,mt.update(ne)}const Z={yc:0,y0:0,y1:0,ok:!1,map:null},ye={on:!1,A:0,D:0,e:-1,stars:0,estars:0,time:0,w:1,h:1,px:1,lite:!1,camera:null,now:0};function un(e){if(Z.ok=!1,!e)return;const t=innerHeight;Z.yc=Xo(7),Z.y0=Z.yc,Z.y1=Math.max(Z.y0+1.5*t,e.y+e.h-t);const a=Math.min(Z.y1-.5*t,Math.max(Z.y0+.5*t,e.y-.6*t));Z.map=va([Z.y0,a,Z.y1],[0,.22,1]),Z.ok=!0}function sn(e){return-1+.5*Math.min(1,Math.max(0,(e-.14)/.6))+.5*h(.14,.74,e)+h(.74,1,e)}function cn(e,t){if(!et||!Z.ok)return;const a=innerHeight;e>Z.yc-2.5*a&&et.load(fe,!Q||oe>1100),ye.on=e>=Z.yc;const l=Math.min(1,Math.max(0,Z.map(Math.min(Z.y1,Math.max(Z.y0,e))))),r=sn(l),i=1-h(-.3,.45,r);ye.D=l,ye.e=r,ye.A=h(Z.y0,Z.y0+.5*a,e),ye.stars=h(Z.y0,Z.y0+1.1*a,e)*i,ye.estars=0,ye.time=t,ye.w=oe,ye.h=de,ye.px=oe/(pe.clientWidth||oe),ye.lite=Q,ye.camera=X,ye.now=performance.now(),et.update(ye)}function Zo(e,t){if(Ae=_e?Math.min(1,Math.max(0,(e-vt[0])/(vt[1]-vt[0]))):0,Je=h(.6,.9,Ae),Ba=Math.pow(Math.min(1,Ae/na),.55),Ht=Math.min(1,Math.max(0,(Ae-na)/(1-na))),tt=h(.6,.95,Ae),Fa=h(.65,1,Ae),Ut(e,G),_e){Xa(e,G);const o=Zl();if(!(e<=Me[0]))if(e<=Me[1]){be.x0===void 0&&(be.x0=Ga(0,Me[0],Oa));const n=be.x0+(be.goal-be.x0)*h(Me[0],Me[1],e);let g=0,A=o*1.3;for(let p=0;p<22;p++){const M=(g+A)/2;Ga(M,e,Oa)>n?g=M:A=M}G.lon+=(g+A)/2}else{G.lat=be.lat,G.lon=be.lon+o;const n=h(Me[1],7.3,e);G.sx=be.sx+(1.3-be.sx)*n,G.sy=be.sy+(.15-be.sy)*n}}ke.spin&&(G.lon+=ke.spin);const a=0;Do(G.lat,G.lon,G.d,G.tilt,G.head,rt,ta,aa),X.position.set(rt[0],rt[1],rt[2]),X.up.set(ta[0],ta[1],ta[2]),X.lookAt(aa[0],aa[1],aa[2]);const l=Math.hypot(rt[0],rt[1],rt[2])-j;if(X.near=Math.max(.02,G.d*.02),X.far=Math.max(G.d*4,G.d+2.2*j)+2e5,X.updateProjectionMatrix(),X.projectionMatrix.elements[8]=-G.sx,X.projectionMatrix.elements[9]=-G.sy,X.updateMatrixWorld(),Yl(e,Mt),Mt.k>0&&_e){const o=Le(B.lat,B.lon);xt.set(o[0],o[1],o[2]).project(X);const n=xt.x*.5+.5,g=Vl+Xl*Mt.c;G.sx+=2*(g-n)*Mt.k,X.projectionMatrix.elements[8]=-G.sx}X.projectionMatrixInverse.copy(X.projectionMatrix).invert();const r=de/(2*Math.tan(X.fov*Math.PI/360)),i=Pe?1-h(30,140,G.d):1-h(14,42,G.d);if(ce.time=t,ce.asm=h(1.85,3.05,e),ce.wave=1-h(1.9,3,e),ce.map=h(2.45,3.2,e),ce.houses=h(2.55,3.45,e),ce.marks=h(3,3.5,e)*(1-h(13,24,G.d)),ce.points=1-.45*h(3,4,e),ce.alpha=i*(1-tt),ce.focal=r,ce.resW=oe,ce.resH=de,ce.far=Math.max(14,G.d*2.6),ce.hideTech=!!Pe,ce.hideMarks=U==="ink",Lt?.update(ce),_e){Object.assign(ue,ce),ue.hideTech=!1,ue.hideMarks=!1,ue.asm=1,ue.wave=0,ue.scr=mt&&Ht<1?1:0,ue.dust=Ba,ue.fly=Ht,ue.neon=h(.72,.86,Ae),ue.cloudA=Math.max(.001,h(1.5,2.4,e)),ue.cloudTex=mt?.texture,Ae<=0&&(yo=t);const o=t-yo;ue.driftX=Math.min(.035,o*(.035/1.6)*2*de/oe),ue.driftY=-Math.min(.006,o*(.006/1.6)*2),ue.dustL=Q?1:.45,ue.map=h(.7,1,Ae),ue.camera=X,ue.houses=h(.75,1,Ae),ue.marks=h(.88,1,Ae)*(1-h(13,24,G.d)),ue.points=1-.45*h(.9,1,Ae),ue.alpha=(1-h(40,75,G.d))*(Ae>0?1:0),_e.update(ue)}mt&&rn(e,t);const f=Math.max(.03,G.d*.0055),d=Math.log2(f),m=Math.floor(d);O.s0=Math.pow(2,m),O.sc=f,O.lod=d-m;const v=Pe?h(3.7,4.5,e):h(2.8,3.8,e)*.6+h(4,4.6,e)*.4,u=_e?h(Me[1]+.05,6.75,e):h(7.2,7.95,e);if(O.alpha=v*(1-u),O.spin=ke.spin+te.lon*a,O.sunLat=te.lat*a,O.space=h(5.2,6.4,e),O.atm=h(5,6.2,e),O.markR=Math.max(.6,l*.012),O.mark=U==="ink"?0:h(18,50,G.d)*(1-u),O.time=t,O.night=U==="mix"?h(5.6,6.6,e):0,O.photo=U==="photo"?h(120,420,G.d):0,O.clouds=U==="photo"?h(5.4,6.6,e)*.85:0,O.lines=h(4.1,4.9,e)*(1-u),O.rivers=h(4.1,4.7,e)*(1-h(5.6,6.2,e))*(1-O.photo),O.cz=h(4.3,5,e)*(1-u),O.stars=U==="light"||Pe?0:h(5.6,6.8,e),O.px=Math.min(2,fe.getPixelRatio()*(oe/pe.clientWidth||1)),O.czk=Pe?h(40,260,G.d):h(120,520,G.d),O.hole=i*ce.map,O.holeR=Ue,O.scrimLeft=Q?0:U==="light"?.6:.72,O.scrimAll=Q?U==="light"?.45:.5:0,Pe&&(O.scrimLeft=0,O.scrimAll=0),$e){const o=h(4.9,6,e),n=Math.exp(Math.log(5e3)+(Math.log(15)-Math.log(5e3))*o);O.revMode=0,O.revR=n,O.revA=1-o,Object.assign(we,O),we.revMode=0,we.revA=o,we.alpha=o>.001?O.alpha*o:0,O.alpha*=1-h(.85,1,o),we.space=0,we.stars=0,we.hole=0,we.photo=1,we.clouds=h(5.4,6.6,e)*.7,we.night=0,we.rivers=0,we.lines=O.lines*.5*o,we.veil=.5*(1-h(5.9,6.7,e)),we.cz=O.cz*o,we.scrimLeft=0,we.scrimAll=0,$e.update(we,X),O.revRibbons=1-o}else O.revRibbons=1;if(st){Object.assign(se,O);const o=h(2.8,3.8,e)*.6+h(4,4.6,e)*.4;se.alpha=o*(1-u)*Fa*h(.5,1,Je),se.haloAlpha=o*(1-h(Me[1]+.3,7,e))*Fa*h(.5,1,Je),se.mark=h(18,50,G.d)*(1-u),se.markBlue=h(nt[0],nt[1],e),se.markGrow=1+.75*(1-h(nt[0],6,e)),se.stars=h(5.6,6,e)*(1-h(Me[1],Me[1]+.25,e)),se.czk=h(120,520,G.d);const n=h(30,75,G.d);se.hole=ce.map*(1-h(72,100,G.d)),se.holeR=7+(se.markR*.45-7)*n,se.scrimLeft=(Q?0:.72)*Je,se.scrimSide=Mt.textR,se.scrimAll=(Q?.5:0)*Je,se.photo=0,se.clouds=0,se.night=0,se.spin=0,se.sunLat=0,se.revRibbons=1,st.update(se,X),ca&&(je.alpha=h(nt[0]+.6*(nt[1]-nt[0]),nt[1],e)*(1-u),je.textL=Q?1:.3,je.textR=Mt.textR,je.time=t,je.d=G.d,je.w=oe,je.h=de,je.dpr=oe/(pe.clientWidth||oe),ca.update(je)),O.alpha*=1-tt}dt?.update(O,X),Pe&&mn(e,t,r,l,i,u)}const Ya=new Set,Bt={log:null,measures:0},fn=e=>{Ya.has(e.name)&&(e.visible=!1)};let Ao=0;const H={flat:0,pre:0,neonT:0,neonP:0,grow:0,ft:0,time:0,asm:0,wave:1,focal:1,far:30,dpr:1,w:1,h:1,cssW:1,cssH:1,bg:0,city:0,alpha:1,cam:null,fadeKm:100,veil:.9,sphere:{al:[0,0,0,0],ag:0,draw:[1,1,1,1],reg:[0,0],reach:0}},vn={lines:[.62,.55,.95,.5],ink:[.85,.7,1,.65]};function mn(e,t,a,l,r,i){if(H.time=t,H.asm=ce.asm,H.wave=ce.wave,H.focal=a,H.far=ce.far,H.w=oe,H.h=de,H.cssW=pe.clientWidth||1,H.cssH=pe.clientHeight||1,H.dpr=oe/H.cssW,H.bg=h(-.6,.9,e),H.city=U==="ink"?h(1.9,2.8,e):U==="lines"?h(3,3.5,e):h(2.4,3.3,e),H.alpha=r*(1-tt),_e){const o=ne.done?0:ne.dim;H.holdA=h(.18,.3,Ae)*(1-h(40,75,G.d)),H.bake=Math.max(0,1-.17/Math.max(.17,1-o)),H.ground=1-Je,H.tint=Je}else H.holdA=0,H.bake=0,H.ground=1,H.tint=0;H.cam=X.position,H.camera=X,H.fadeKm=Math.max(1,l*.05),H.veil=0;{const o=U==="ink"?-.5:0;H.flat=h(1.55,2.25,e),H.pre=1-h(1,1.45,e);const n=U==="ink"&&W0()?1:0;H.neonT=n*(1-h(1.6,2.3,e)),H.neonP=n*(1-h(3.9,4.5,e))*(1-.6*H.city),H.neonP*=1-tt,H.asm=h(2+o,3.05+o,e),H.grow=U==="lines"?h(2.95,3.6,e):h(2.6+o,3.45+o,e),H.hatch=h(2.85+o,3.4+o,e),H.paint=h(2.75+o,3.15+o,e),O.inkH=h(4.7,5.4,e),O.inkP=h(4.55,5.1,e),H.ft+=Math.max(0,t-Ao)*(1-.9*H.flat)*(U==="lines"&&ja?.5:1);const g=h(3.3,4,e)*(1-h(5.8,6.5,e)),A=h(4.3,4.9,e),p=U==="ink"?h(110,220,G.d):1,M=1-tt;H.sphere.reg[0]=.55*g*p*(1-.6*A)*M,H.sphere.reg[1]=.8*g*p*(1-.45*A)*M,H.sphere.reach=Math.exp(Math.log(.004)+(Math.log(.45)-Math.log(.004))*h(3.35,5.2,e))}Ao=t;const f=vn[U],d=h(3.8,4.4,e)*(1-i)*(1-tt),m=1-h(5.6,6.3,e),v=O.revRibbons??1,u=U==="ink"?h(500,1100,G.d):1;H.sphere.al[0]=f[0]*d*v*u,H.sphere.al[1]=f[1]*d*v*u,H.sphere.al[2]=f[2]*d,H.sphere.al[3]=f[3]*d*m*v*u,H.sphere.ag=U==="lines"?.32*h(5.4,6.4,e)*(1-i):0,H.sphere.draw[0]=h(3.9,5.4,e),H.sphere.draw[1]=h(4,5.2,e),H.sphere.draw[2]=h(3.9,4.6,e),H.sphere.draw[3]=h(3.85,4.5,e),Pe.update(H)}let Ua=-1;function dn(e,t=e>=.5){const a=Math.round(e*100)/100,l=document.documentElement;l.classList.toggle("earth-night",t),a!==Ua&&(Ua=a,l.style.setProperty("--earth-dark",String(a)))}let Nt=-1,bo=-1,Jo=!1,Mo=performance.now();function Qo(){if(!ze||!Lt||!dt)return;const e=window.scrollY||0,t=innerHeight,a=_t?1:h(ze.start-.55*t,ze.start+.05*t,e),l=a.toFixed(3);if(pe.style.opacity!==l&&(pe.style.opacity=l),a<=.001)return;Yo();const r=_t?Uo:Vo(e);_t?(ke.spin=0,ke.leave=0):ln(e);const i=_t?0:xo!==null?Number(xo):(performance.now()-Jl)/1e3,f=performance.now();tl(Math.min(.1,(f-Mo)/1e3),Jo&&pe.style.opacity>.5),Mo=f,!(_t&&r===bo&&e===Nt&&!te.dirty)&&(bo=r,Nt=e,Zo(r,i),_e&&dn(Math.max(Je,h(0,.4,Ae)),h(.08,.2,Ae)>.5),cn(e,i),Bt.log&&Bt.log.push([performance.now(),e,r,G.d,G.tilt,G.head]),Ya.size&&Oe.traverse(fn),mt?.prerender(fe),et?.prerender(fe),fe.render(Oe,X))}async function pn(){const e=Q?256:512,t=(w,R)=>p0(w,{srgb:R,renderer:fe}),a=[t("land.webp"),t("europe.webp"),t("pardubice.webp",!1)];(U==="photo"||Rt==="photo")&&a.push(t("day.webp",!0),t("day-eu.webp",!0),t("clouds.webp"),t("day-ce.webp",!0)),U==="mix"&&a.push(t("night.webp",!0),t("night-eu.webp",!0));const[l,r,i,f,d]=await Promise.all([Promise.all(a),x0(e),g0(),h0(),fetch("/assets/map/pardubice.json").then(w=>w.json())]),[m,v,u,o,n,g,A]=l;if(!It.includes(U))for(const w of[m,v])w.generateMipmaps=!1,w.minFilter=pt;const p=Object.values(d.проекты||{});Lt=io({luma:r,lumaSize:e,houses:i,projects:p},u,{side:Q?128:256,field:24,lite:Q,light:U==="light"||It.includes(U)}),U==="ink"&&Ha&&(_e=io({luma:r,lumaSize:e,houses:i,projects:p},u,{side:Q?128:256,field:24,lite:Q,light:!1,glow:!0}));let M=null,P=null;if(U==="ink"){const[w,R,z,L,S,E,c]=await Promise.all([t("land-dem.webp"),t("land-a.webp"),t("land-b.webp"),t("land-far.webp"),t("land-hor.webp"),t("neon-near.webp"),t("neon-far.webp")]);for(const x of[w,R,z,L,S,E,c])x.wrapS=x.wrapT=Ot,x.flipY=!1,x.needsUpdate=!0;z.magFilter=Vt,z.minFilter=Vt,z.generateMipmaps=!1;for(const x of[w,L,S,E,c])x.magFilter=Vt,x.minFilter=Vt,x.generateMipmaps=!1;M={dem:w,a:R,b:z,far:L,hor:S,neonN:E,neonF:c},P=(await(await fetch(at+"land-routes.json")).json()).routes,l.push(w,R,z,L,S,E,c)}It.includes(U)&&(Pe=await U0(U,u,{lite:Q,houses:i,pdb:B,land:M,routes:P}));const I=new Ea,W=Co(B.lat,B.lon),K=Le(B.lat,B.lon);I.makeBasis(new J(...W.e),new J(...W.u),new J(-W.n[0],-W.n[1],-W.n[2])).setPosition(K[0],K[1],K[2]),Lt.group.matrixAutoUpdate=!1,Lt.group.matrix.copy(I),_e&&(_e.group.matrixAutoUpdate=!1,_e.group.matrix.copy(I));const D={land:m,eu:v};(U==="photo"||Rt==="photo")&&Object.assign(D,{day:o,dayEu:n,clouds:g,dayCe:A}),U==="mix"&&Object.assign(D,{night:o,nightEu:n}),dt=Ma(U,D,f,{pdb:B,lite:Q}),Rt&&($e=Ma(Rt,D,f,{pdb:B,lite:Q}),$e.group.traverse(w=>{w.isGroup||(w.renderOrder+=.5)})),Oe.add(dt.group,Lt.group),$e&&Oe.add($e.group),_e&&(st=Ma("dots",D,f,{pdb:B,lite:Q}),Oe.add(st.group,_e.group),ca=Dl(B),Oe.add(ca.group),et=$l({lite:Q}),et.adoptStars(st.group.getObjectByName("stars")),Oe.add(et.group)),Pe&&(Pe.cityGroup.matrixAutoUpdate=!1,Pe.cityGroup.matrix.copy(I),Oe.add(Pe.cityGroup,Pe.sphereGroup,Pe.veil),U==="ink"&&(mt=$0(),Oe.add(mt.mesh))),oe=0,Yo(),dt.resize(oe,de),$e?.resize(oe,de),st?.resize(oe,de);for(const w of l)fe.initTexture(w);Oe.traverse(w=>{w.visible=!0}),fe.compile(Oe,X),Zo(_t?Uo:0,0),(U==="photo"||Rt==="photo")&&hn(),window.__cfigEarth={hide:Ya,dbg:Bt,grab:te,grabProbe:el,yOf:Xo,look:U,get t(){return Vo(scrollY)},knots:()=>ze,P:G,renderer:fe,scene:Oe,clouds:ne,dig:()=>[vt[0],vt[1],na],dawn:()=>({yc:Z.yc,y0:Z.y0,y1:Z.y1,ok:Z.ok,D:ye.D,e:ye.e,A:ye.A,ready:et?.ready,yOfD:w=>{let R=Z.y0,z=Z.y1;for(let L=0;L<40;L++){const S=(R+z)/2;Z.map(S)<w?R=S:z=S}return(R+z)/2}}),pdbX:()=>{X.updateMatrixWorld();const w=Le(B.lat,B.lon);return xt.set(w[0],w[1],w[2]).project(X),{x:(xt.x*.5+.5)*pe.clientWidth,mid:Wo(),spin:be?.v}}}}let So=null;function hn(){if(So)return;const e=Q?"4k":fe.capabilities.maxTextureSize>=8192?"8k":"4k";So=Promise.all([eo(`day-${e}.webp`,{srgb:!0,renderer:fe}),eo(`clouds-${e}.webp`,{red:!0,renderer:fe})]).then(([t,a])=>{fe.initTexture(t),fe.initTexture(a);const l=new Set;for(const r of[dt,$e])for(const i of r?.setPhoto(t,a)||[])l.add(i);for(const r of l)r?.dispose();Bt.photoHi=e}).catch(t=>console.warn("[cfig] резкая Земля не подгрузилась:",t))}function Wa(){te.on=!1,Jo=!1,document.documentElement.classList.remove("earth-grab","earth-grabbing"),fa&&(Po.ticker.remove(Qo),fa=0),pe&&(pe.style.opacity="0")}function bn(){if(U=s0(),Rt=null,document.body.dataset.route!==_a||!U){Wa();return}if(!fe){if(pe=nn(),!pe)return;Q=Math.min(innerWidth,innerHeight)<720||matchMedia("(pointer: coarse)").matches;try{fe=new u0({canvas:pe,alpha:!0,antialias:!Q,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{fe=null;return}fe.setClearColor(0,0),fe.sortObjects=!0,Oe=new Lo,X=new To(35,1,.05,1e6),Ut=U==="ink"?an(Q?en:$o,Q):Et(It.includes(U)?Q?Ql:jo:Q?Ko:It.includes(U)?qo:pa),go=pn().catch(e=>{console.warn("[cfig] Земля не поднялась:",e),Wa()}),addEventListener("resize",()=>{Ta(),Nt=-1},{passive:!0}),new ResizeObserver(()=>{document.body.dataset.route===_a&&(Ta(),Nt=-1)}).observe(document.documentElement)}Ta(),Nt=-1,Ua=-1,go.then(()=>{Pe?.collect(),!fa&&document.body.dataset.route===_a&&(Po.ticker.add(Qo),fa=1)})}document.addEventListener("astro:before-preparation",e=>{pe&&e.to&&new URL(e.to).pathname!==location.pathname&&Wa()});export{bn as init};
