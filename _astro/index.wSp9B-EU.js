import{T as Lo,a as Qa,N as eo,n as to,ar as Ma,L as ao,o as St,aN as So,as as Ro,aO as Po,G as Rt,V as Ie,M as ce,c as va,b as Q,O as Be,i as pe,j as Qe,ae as za,D as bt,a2 as vt,g as Pe,aP as ma,B as Fe,e as z,aQ as Co,S as oo,k as To,l as Do,f as Ne,p as zo,h as ko,A as Eo,ag as Io,d as Vt,K as da,aR as pa,a4 as ha,W as No,P as lo,aS as Nt}from"./three.module.BH5gECCB.js";import{P as Mt,e as Oo}from"./Lab.astro_astro_type_script_index_0_lang.DMakdsNg.js";import{g as no,n as Ho}from"./Base.astro_astro_type_script_index_0_lang.DerMldEg.js";import{a as Uo,L as Go,b as Bo}from"./LineSegments2.DI2R0bZC.js";import"./router.UeToN5xW.js";const V=6371,O={lat:50.039378,lon:15.77521},Ee=3.75,pt=Math.PI/180;function ge(e,a,t=V,o=[0,0,0]){const n=e*pt,s=a*pt,c=Math.cos(n);return o[0]=t*c*Math.sin(s),o[1]=t*Math.sin(n),o[2]=t*c*Math.cos(s),o}function ro(e,a){const t=e*pt,o=a*pt,n=Math.sin(t),s=Math.cos(t),c=Math.sin(o),p=Math.cos(o);return{e:[p,0,-c],u:[s*c,n,s*p],n:[-n*c,s,-n*p]}}function Fa(e,a){const t=e.length,o=new Float64Array(t-1),n=new Float64Array(t);for(let s=0;s<t-1;s++)o[s]=(a[s+1]-a[s])/(e[s+1]-e[s]);n[0]=o[0],n[t-1]=o[t-2];for(let s=1;s<t-1;s++)n[s]=o[s-1]*o[s]<=0?0:(o[s-1]+o[s])/2;for(let s=0;s<t-1;s++){if(o[s]===0){n[s]=0,n[s+1]=0;continue}const c=n[s]/o[s],p=n[s+1]/o[s],f=c*c+p*p;if(f>9){const A=3/Math.sqrt(f);n[s]=A*c*o[s],n[s+1]=A*p*o[s]}}return s=>{if(s<=e[0])return a[0];if(s>=e[t-1])return a[t-1];let c=0;for(;s>e[c+1];)c++;const p=e[c+1]-e[c],f=(s-e[c])/p,A=f*f,i=A*f;return(2*i-3*A+1)*a[c]+(i-2*A+f)*p*n[c]+(-2*i+3*A)*a[c+1]+(i-A)*p*n[c+1]}}function _t(e){const a=e.map(n=>n.t),t=Object.keys(e[0]).filter(n=>n!=="t"),o={};for(const n of t){const s=e.map(c=>n==="d"?Math.log(c[n]):c[n]);o[n]=Fa(a,s)}return(n,s)=>{for(const c of t)s[c]=c==="d"?Math.exp(o[c](n)):o[c](n);return s}}function io(e,a,t,o,n,s,c,p){const f=ro(e,a);ge(e,a,V,p);const A=o*pt,i=n*pt,l=f.n[0]*Math.cos(i)+f.e[0]*Math.sin(i),r=f.n[1]*Math.cos(i)+f.e[1]*Math.sin(i),g=f.n[2]*Math.cos(i)+f.e[2]*Math.sin(i),w=Math.cos(A)*t,m=Math.sin(A)*t;s[0]=p[0]+f.u[0]*w-l*m,s[1]=p[1]+f.u[1]*w-r*m,s[2]=p[2]+f.u[2]*w-g*m,c[0]=l,c[1]=r,c[2]=g}const Ve="/assets/earth/",Ot={lon0:-12,lon1:44,lat0:34,lat1:62},Ht={lon0:9.5,lon1:22.5,lat0:46.5,lat1:53.5},Wo=new Lo;function Ko(e,{srgb:a=!1,renderer:t=null}={}){return new Promise((o,n)=>{Wo.load(Ve+e,s=>{s.colorSpace=a?Qa:eo,s.wrapS=to,s.wrapT=Ma,s.minFilter=ao,s.magFilter=St,t&&(s.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy())),o(s)},void 0,n)})}function ka(e,{srgb:a=!1,red:t=!1,renderer:o=null}={}){const n=new So;return n.setOptions({imageOrientation:"flipY",premultiplyAlpha:"none"}),new Promise((s,c)=>{n.load(Ve+e,p=>{const f=new Ro(p);f.colorSpace=a?Qa:eo,f.flipY=!1,t&&(f.format=Po),f.wrapS=to,f.wrapT=Ma,f.minFilter=ao,f.magFilter=St,o&&(f.anisotropy=Math.min(8,o.capabilities.getMaxAnisotropy())),f.needsUpdate=!0,s(f)},void 0,c)})}async function qo(e=.6){const a=await(await fetch(Ve+"lines.bin")).arrayBuffer(),t=new DataView(a);let o=0;const n=t.getUint32(o,!0);o+=4;const s=[],c=[0,0,0];for(let p=0;p<n;p++){const f=t.getUint32(o,!0),A=t.getUint32(o+4,!0);o+=8;const i=new Uint32Array(f);for(let m=0;m<f;m++)i[m]=t.getUint32(o,!0),o+=4;const l=new Float32Array(A),r=new Float32Array(A);for(let m=0;m<A;m++)l[m]=t.getInt16(o,!0)/180,r[m]=t.getInt16(o+2,!0)/180,o+=4;const g=new Float32Array((A-f)*6);let w=0;for(let m=0;m<f;m++){const _=i[m],S=m+1<f?i[m+1]:A;for(let D=_;D<S-1;D++)ge(r[D],l[D],V+e,c),g[w++]=c[0],g[w++]=c[1],g[w++]=c[2],ge(r[D+1],l[D+1],V+e,c),g[w++]=c[0],g[w++]=c[1],g[w++]=c[2]}s.push(g.subarray(0,w))}return s}async function jo(e=512){const a=await(await fetch(Ve+"pardubice.webp")).blob(),t=await createImageBitmap(a,{resizeWidth:e,resizeHeight:e,resizeQuality:"medium"}),o=document.createElement("canvas");o.width=e,o.height=e;const n=o.getContext("2d",{willReadFrequently:!0});n.drawImage(t,0,0);const s=n.getImageData(0,0,e,e).data,c=new Float32Array(e*e);for(let p=0;p<c.length;p++)c[p]=s[p*4+1]/255;return t.close?.(),c}async function $o(){const e=await(await fetch("/assets/map/pardubice-houses.bin")).arrayBuffer(),a=new DataView(e),t=a.getUint32(0,!0);let o=0,n=4;for(let r=0;r<t;r++){const g=a.getUint16(n,!0);o+=g,n+=6+g*4}const s=new Uint32Array(t),c=new Uint16Array(t),p=new Float32Array(t),f=new Float32Array(t),A=new Float32Array(o),i=new Float32Array(o);n=4;let l=0;for(let r=0;r<t;r++){const g=a.getUint16(n,!0);c[r]=g,p[r]=a.getUint8(n+3)/2,f[r]=a.getUint16(n+4,!0),n+=6,s[r]=l;for(let w=0;w<g;w++)A[l]=a.getUint16(n,!0)/65535,i[l]=a.getUint16(n+2,!0)/65535,n+=4,l++}return{n:t,start:s,cnt:c,h:p,area:f,u:A,v:i}}const La=`
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
`,Ge=3.75,ve={h:13,n:1024,lo:195,hi:365,far:{h:48,n:1024,lo:180,hi:1150},hor:{h:60,n:512,lo:180,hi:1610,cz:-50}},He=24,Sa=(()=>{try{return new URLSearchParams(location.search).get("fx")==="scan"?1:0}catch{return 0}})(),so=`
#define FX ${Sa}
#define SCAN_P 8.0
#define SCAN_D 3.6
`,Vo={INK1:"#111e2d",INK2:"#29455c",INK3:"#4d677d",BLUE:"#2A6DAA",BLUE2:"#3f9be0",PALE:"#5FA8E0",GOLD:"#8a5f10",PAPER:"#d3d9de"},Xo=e=>{const a=parseInt(e.slice(1),16),t=o=>(o/255).toFixed(4);return`vec3(${t(a>>16)}, ${t(a>>8&255)}, ${t(a&255)})`},ht=Object.entries(Vo).map(([e,a])=>`#define C_${e} ${Xo(a)}`).join(`
`),Ze={blending:Qe,blendSrc:pe,blendDst:Be,blendSrcAlpha:pe,blendDstAlpha:Be},uo=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm2(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Ra=`
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
`,Yo=e=>`
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
${so}
#if FX == 1
varying float vZf;
#endif
#endif
${Ra}
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
`,Zo=e=>`
#define ${e}
${ht}
uniform float uTime;
uniform float uAlpha;
uniform float uBg;
uniform float uAsm;
uniform float uPass;
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
${so}
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
${uo}
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
  a *= vA * uAlpha * vCF;
  if (a < 0.002) discard;
  gl_FragColor = vec4(col * a, a);
}
`,co=()=>`
#define LAND_H ${ve.h.toFixed(1)}
#define LAND_N ${ve.n.toFixed(1)}
#define DEM_LO ${ve.lo.toFixed(1)}
#define DEM_HI ${ve.hi.toFixed(1)}
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
#define FAR_H ${ve.far.h.toFixed(1)}
#define FAR_N ${ve.far.n.toFixed(1)}
#define FAR_LO ${ve.far.lo.toFixed(1)}
#define FAR_HI ${ve.far.hi.toFixed(1)}
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
`,Ea=e=>`
#define ${e}
uniform float uRelief;
uniform float uCity;
uniform float uPre;
varying vec2 vP;
varying float vElev;
varying float vDepth;
#ifdef P_INK
${co()}
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
`,fo=`
#define HOR_H ${ve.hor.h.toFixed(1)}
#define HOR_N ${ve.hor.n.toFixed(1)}
#define HOR_LO ${ve.hor.lo.toFixed(1)}
#define HOR_HI ${ve.hor.hi.toFixed(1)}
#define HOR_CZ ${ve.hor.cz.toFixed(1)}
#define FAR_EDGE ${ve.far.h.toFixed(1)}
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
`,Ia=`
${fo}
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
`,Na=e=>`
${ht}
${fo}
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
`,Jo=`
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
`,Qo=e=>`
#define ${e}
#define FAB_A ${e==="P_LINES"?"0.22":"0.1"}
#define FAB_C C_INK2
${ht}
uniform sampler2D uMap;
uniform float uTime;
uniform float uBg;
uniform float uCity;
uniform float uAlpha;
uniform float uHatch;
uniform sampler2D uLA;
uniform sampler2D uLB;
uniform float uRelief;
uniform float uPre;
#define PRE_G 0.4
varying vec2 vP;
varying float vElev;
varying float vDepth;
${e==="P_INK"?co():""}
${uo}
${La}
${e==="P_INK"?Jo:""}

void main() {
  vec2 p = vP;
  float rr = length(p);
  float fade = 1.0 - smoothstep(9.0, 15.0, rr);
#ifdef P_INK
  // Земля ink — до горизонта (дальний рельеф ±FAR_H км).
  fade = 1.0 - smoothstep(0.8, 0.97, max(abs(p.x), abs(p.y)) / FAR_H);
#endif
  vec2 muv = p / ${(Ge*2).toFixed(1)} + 0.5;
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
`,e0=e=>`
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
${Ra}
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
`,t0=e=>`
#define ${e}
${ht}
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
`,Xt=24,a0=`
varying vec2 vPx;
uniform vec2 uRes;
void main() { vPx = (position.xy * 0.5 + 0.5) * uRes; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,o0=`
uniform vec4 uRects[${Xt}];
uniform int uN;
uniform float uFeather;
uniform float uStrength;
uniform vec2 uRes;
varying vec2 vPx;
void main() {
  float a = 0.0;
  for (int i = 0; i < ${Xt}; i++) {
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
`;function l0(){const e=new Fe;return e.setAttribute("position",new z(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}async function n0(){const e=await(await fetch(Ve+"streets.bin")).arrayBuffer(),a=new DataView(e);let t=0;const o=a.getUint32(t,!0);t+=4;const n=[];for(let s=0;s<o;s++){const c=a.getUint32(t,!0),p=a.getUint32(t+4,!0);t+=8;const f=[];for(let l=0;l<c;l++)f.push(a.getUint32(t,!0)),t+=4;const A=new Float32Array(p*2);for(let l=0;l<p;l++)A[l*2]=(a.getInt16(t,!0)/16384-.5)*Ge*2,A[l*2+1]=(a.getInt16(t+2,!0)/16384-.5)*Ge*2,t+=4;const i=[];for(let l=0;l<c;l++){const r=f[l],g=l+1<c?f[l+1]:p,w=[];for(let m=r;m<g;m++)w.push([A[m*2],A[m*2+1]]);i.push(w)}n.push(i)}return n}async function r0(e){const a=await(await fetch(Ve+"lines.bin")).arrayBuffer(),t=new DataView(a);let o=0;const n=t.getUint32(o,!0);o+=4;const s=[];for(let c=0;c<n;c++){const p=t.getUint32(o,!0),f=t.getUint32(o+4,!0);o+=8;const A=[];for(let r=0;r<p;r++)A.push(t.getUint32(o,!0)),o+=4;const i=new Float32Array(f*2);for(let r=0;r<f;r++)i[r*2]=t.getInt16(o,!0)/180,i[r*2+1]=t.getInt16(o+2,!0)/180,o+=4;const l=[];for(let r=0;r<p;r++){const g=A[r],w=r+1<p?A[r+1]:f,m=[];for(let _=g;_<w;_++)m.push([i[_*2],i[_*2+1]]);l.push(vo(m,c===2?e*.2:e))}s.push(l)}return s}async function i0(e){const a=await(await fetch(Ve+"region.bin")).arrayBuffer(),t=new DataView(a);let o=0;const n=t.getUint32(o,!0);o+=4;const s=[];for(let c=0;c<n;c++){const p=t.getUint32(o,!0),f=t.getUint32(o+4,!0);o+=8;const A=[];for(let r=0;r<p;r++)A.push(t.getUint32(o,!0)),o+=4;const i=[];for(let r=0;r<f;r++)i.push([t.getInt16(o,!0)/180,t.getInt16(o+2,!0)/180]),o+=4;const l=[];for(let r=0;r<p;r++)l.push(vo(i.slice(A[r],r+1<p?A[r+1]:f),e));s.push(l)}return s}function vo(e,a){if(e.length<3)return e;const t=new Uint8Array(e.length);t[0]=t[e.length-1]=1;const o=[[0,e.length-1]];for(;o.length;){const[n,s]=o.pop();let c=0,p=-1;const[f,A]=e[n],[i,l]=e[s],r=i-f,g=l-A,w=Math.hypot(r,g)||1e-9;for(let m=n+1;m<s;m++){const _=Math.abs((e[m][0]-f)*g-(e[m][1]-A)*r)/w;_>c&&(c=_,p=m)}c>a&&(t[p]=1,o.push([n,p],[p,s]))}return e.filter((n,s)=>t[s])}const s0=`
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
${Ra}
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
`,u0=e=>`
#define ${e}
${ht}
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
  float a = cov * vA * uAlpha * mix(0.6, 0.9, vTop);
  vec3 col = C_INK1;
#else
  float a = cov * vA * uAlpha * mix(0.55, 0.85, vTop);
  vec3 col = mix(C_INK3, C_INK2, vTop);
#endif
  if (a < 0.002) discard;
  gl_FragColor = vec4(col * a, a);
}
`,c0=`
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
`,f0=`
${ht}
uniform float uAlpha;
uniform float uHatch;
varying vec2 vUV;
varying float vSh;
varying float vA;
varying float vPx;
varying float vDel;
varying float vL;
varying float vV;
${La}
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
  float a = c * vSh * vA * uAlpha * 0.8;
  float sp = tip * big * vA * stroke * 0.9;
  if (a + sp < 0.002) discard;
  vec3 col = C_INK2 * a + vec3(0.36, 0.78, 1.0) * sp;
  gl_FragColor = vec4(col, min(1.0, a + sp));
}
`;function v0(e,a){const t=a?400:150,o=1.6/1e3;let n=0;for(let l=0;l<e.n;l++)e.area[l]>=t&&(n+=e.cnt[l]);const s=new Float32Array(n*4*4),c=new Float32Array(n*4*2),p=new Float32Array(n*4*2),f=new Float32Array(n*4*3);let A=0;for(let l=0;l<e.n;l++){if(e.area[l]<t)continue;const r=e.start[l],g=e.cnt[l],w=x=>(e.u[r+x]-.5)*Ge*2,m=x=>(e.v[r+x]-.5)*Ge*2;let _=0,S=0;for(let x=0;x<g;x++)_+=w(x),S+=m(x);_/=g,S/=g;const D=Math.max(3,e.h[l])*o,W=Math.hypot(_/Ge,S/Ge)/2,K=Math.min(1,W*2)*.8+l*7919%97/97*.2,C=Math.sqrt(e.area[l])/1e3;for(let x=0;x<g;x++){const G=(x+1)%g,q=w(x),T=m(x),I=w(G),H=m(G);let v=-(H-T),y=I-q;const F=Math.hypot(v,y)||1;v/=F,y/=F,v*((q+I)/2-_)+y*((T+H)/2-S)<0&&(v=-v,y=-y);for(let P=0;P<4;P++){const u=A*4+P;s.set([q,T,I,H],u*4),c.set([P&1,P>>1],u*2),p.set([v,y],u*2),f.set([D,K,C],u*3)}A++}}const i=new Fe;return i.setAttribute("position",new z(new Float32Array(n*4*3),3)),i.setAttribute("aE",new z(s,4)),i.setAttribute("aC",new z(c,2)),i.setAttribute("aN",new z(p,2)),i.setAttribute("aHD",new z(f,3)),i.setIndex(Jt(n)),i}function m0(e,a){const t=a?300:80,o=1.6/1e3;let n=0;for(let r=0;r<e.n;r++)e.area[r]<t||(n+=e.cnt[r]*(e.area[r]>=300||e.h[r]>=11?2:1));const s=new Float32Array(n*4*4),c=new Float32Array(n*4*2),p=new Float32Array(n*4*4),f=new Float32Array(n*4);let A=0;const i=(r,g,w,m,_,S,D,W,K)=>{for(let C=0;C<4;C++){const x=A*4+C;s.set([r,g,w,m],x*4),c.set([_,S],x*2),p.set([C>>1,C&1?1:-1,D,W],x*4),f[x]=K}A++};for(let r=0;r<e.n;r++){if(e.area[r]<t)continue;const g=e.start[r],w=e.cnt[r],m=Math.max(3,e.h[r])*o;let _=0,S=0;for(let x=0;x<w;x++)_+=e.u[g+x],S+=e.v[g+x];_=(_/w-.5)*2,S=(S/w-.5)*2;const D=Math.min(1,Math.hypot(_,S))*.8+r*7919%97/97*.2,W=Math.sqrt(e.area[r])/1e3,K=x=>(e.u[g+x]-.5)*Ge*2,C=x=>(e.v[g+x]-.5)*Ge*2;for(let x=0;x<w;x++){const G=(x+1)%w;i(K(x),C(x),K(G),C(G),1,1,m,D,W)}if(e.area[r]>=300||e.h[r]>=11)for(let x=0;x<w;x++)i(K(x),C(x),K(x),C(x),0,1,m,D,W)}const l=new Fe;return l.setAttribute("position",new z(new Float32Array(n*4*3),3)),l.setAttribute("aP",new z(s,4)),l.setAttribute("aY",new z(c,2)),l.setAttribute("aI",new z(p,4)),l.setAttribute("aSz",new z(f,1)),l.setIndex(Jt(n)),l}function Jt(e){const a=new Uint32Array(e*6);for(let t=0;t<e;t++){const o=t*4;a.set([o,o+1,o+2,o+2,o+1,o+3],t*6)}return new z(a,1)}function d0(e,a){const{S:t,M:o}=a,n=[0,1,2,3,5],s=5.6,c=[];let p=0;for(const v of n)for(const y of e[v]){let F=[];for(const P of y)Math.hypot(P[0],P[1])<=s?F.push(P):(F.length>1&&c.push({l:v,pts:F}),F=[]);F.length>1&&c.push({l:v,pts:F})}for(const v of c){let y=0;for(let F=1;F<v.pts.length;F++)y+=Math.hypot(v.pts[F][0]-v.pts[F-1][0],v.pts[F][1]-v.pts[F-1][1]);v.len=y,p+=y}const f=Math.max(.2,p/5200),A=[],i=(v,y)=>{let F=0;for(let P=1;P<v.pts.length;P++){const u=v.pts[P-1],L=v.pts[P],M=Math.hypot(L[0]-u[0],L[1]-u[1]);if(F+M>=y||P===v.pts.length-1){const j=M>0?Math.min(1,(y-F)/M):0;return[u[0]+(L[0]-u[0])*j,u[1]+(L[1]-u[1])*j]}F+=M}return v.pts[v.pts.length-1]};for(const v of c){if(v.len<.03)continue;const y=Math.max(1,Math.round(v.len/f));for(let F=0;F<y;F++){const P=v.len*F/y,u=v.len*(F+1)/y,L=[];for(let $=0;$<o;$++)L.push(i(v,P+(u-P)*$/(o-1)));L[o-1][0]<L[0][0]&&L.reverse();let M=0,j=0;for(const $ of L)M+=$[0],j+=$[1];A.push({l:v.l,pts:L,cx:M/o,cz:j/o})}}const l=He/(2*s),r=He/t,g=v=>{const y=Math.sin(v*12.9898)*43758.5453;return y-Math.floor(y)};for(const v of A){const y=Math.min(t-1,Math.max(0,Math.round((v.cz*l+He/2)/r-.5)));v.zl=-He/2+(y+.5)*r;let F=1/0,P=-1/0;for(const M of v.pts)F=Math.min(F,M[0]),P=Math.max(P,M[0]);const u=(F+P)/2*l,L=Math.max(.06,(P-F)/2*l);v.x0=u-L,v.x1=u+L,v.seed=g(y)}const w=new Set;if(a.look==="lines"){const v=new Map;for(const y of A)v.has(y.zl)||v.set(y.zl,[]),v.get(y.zl).push(y);for(const[y,F]of v){w.add(y),F.sort((u,L)=>u.x0+u.x1-(L.x0+L.x1));const P=F.map(u=>(u.x0+u.x1)/2);F.forEach((u,L)=>{u.x0=L===0?-He/2:(P[L-1]+P[L])/2,u.x1=L===F.length-1?He/2:(P[L]+P[L+1])/2,u.pts[0][0]>u.pts[u.pts.length-1][0]&&(u.pts=u.pts.slice().reverse())}),F.forEach((u,L)=>{const M=u.pts[0],j=u.pts[u.pts.length-1],$=F[L-1],we=F[L+1],Re=$?[($.pts[$.pts.length-1][0]+M[0])/2,($.pts[$.pts.length-1][1]+M[1])/2]:M,Te=we?[(we.pts[0][0]+j[0])/2,(we.pts[0][1]+j[1])/2]:j;u.jd=[Re[0],Re[1],Te[0],Te[1]]})}}const m=96;for(let v=0;v<t;v++){const y=-He/2+(v+.5)*r,F=[];for(let P=0;P<m;P++)F.push([0,0]);A.push({l:w.has(y)?10:9,pts:F,cx:0,cz:0,x0:-He/2,x1:He/2,zl:y,seed:g(v),field:!0})}const _=A.length,S=A.reduce((v,y)=>v+y.pts.length-1,0),D=new Float32Array(S*4*4),W=new Float32Array(S*4*4),K=new Float32Array(S*4*2),C=new Float32Array(S*4*4),x=new Float32Array(S*4*4);let G=0;const q=new Set,T=(v,y)=>Math.round(v/.05)+","+Math.round(y/.05);for(const v of a.first||[])for(let y=1;y<v.pts.length;y++){const[F,P]=v.pts[y-1],[u,L]=v.pts[y];if(Math.max(Math.abs(F),Math.abs(P),Math.abs(u),Math.abs(L))>6)continue;const M=Math.ceil(Math.hypot(u-F,L-P)/.025);for(let j=0;j<=M;j++){const $=F+(u-F)*j/M,we=P+(L-P)*j/M;for(let Re=-1;Re<=1;Re++)for(let Te=-1;Te<=1;Te++)q.add(T($+Re*.05,we+Te*.05))}}const I=v=>{if(!q.size||v.field)return!1;let y=0;for(const F of v.pts)q.has(T(F[0],F[1]))&&y++;return y>=v.pts.length*.6};for(const v of A){let y=Math.min(1,Math.hypot(v.cx,v.cz)/5.5);I(v)&&(y*=.3);const F=v.pts.length;for(let P=0;P<F-1;P++){const u=v.pts[P],L=v.pts[P+1];for(let M=0;M<4;M++){const j=G*4+M;D.set([u[0],u[1],L[0],L[1]],j*4),W.set([v.x0,v.x1,v.zl,y],j*4),K.set([P/(F-1),(P+1)/(F-1)],j*2),C.set([M>>1,M&1?1:-1,v.l,v.seed],j*4),v.jd&&x.set(v.jd,j*4)}G++}}const H=new Fe;return H.setAttribute("position",new z(new Float32Array(S*4*3),3)),H.setAttribute("aT",new z(D,4)),H.setAttribute("aSU",new z(W,4)),H.setAttribute("aUU",new z(K,2)),H.setAttribute("aInfo",new z(C,4)),H.setAttribute("aJD",new z(x,4)),H.setIndex(Jt(S)),{geometry:H,K:_,gap:r}}function p0(e,a,t,o){const n=e.map((m,_)=>m.map(S=>({kind:_,pts:S}))),s=[].concat(...n);t&&t.forEach((m,_)=>m.forEach(S=>s.push({kind:5+_,pts:S})));const c=o?ge(o.lat,o.lon,1):[0,0,1];if(a==="lines"){for(let m=-80;m<=80;m+=10){const _=[];for(let S=-180;S<=180;S+=3)_.push([S,m]);s.push({kind:4,pts:_})}for(let m=-180;m<180;m+=15){const _=[];for(let S=-84;S<=84;S+=3)_.push([m,S]);s.push({kind:4,pts:_})}}let p=0;for(const m of s)p+=Math.max(0,m.pts.length-1);const f=new Float32Array(p*4*3),A=new Float32Array(p*4*3),i=new Float32Array(p*4*4),l=[0,0,0],r=[0,0,0];let g=0;for(const m of s){const _=m.pts.length;if(_<2)continue;const S=m.kind===2?1.2:.6;for(let D=0;D<_-1;D++){ge(m.pts[D][1],m.pts[D][0],V+S,l),ge(m.pts[D+1][1],m.pts[D+1][0],V+S,r);for(let W=0;W<4;W++){const K=g*4+W;f.set(l,K*3),A.set(r,K*3);let C=(D+(W>>1))/(_-1);if(m.kind>=5){const x=W>>1?r:l,G=Math.hypot(x[0],x[1],x[2]);C=Math.acos(Math.min(1,(x[0]*c[0]+x[1]*c[1]+x[2]*c[2])/G))*V/1e3}i.set([W>>1,W&1?1:-1,m.kind,C],K*4)}g++}}const w=new Fe;return w.setAttribute("position",new z(f,3)),w.setAttribute("aA",new z(f,3)),w.setAttribute("aB",new z(A,3)),w.setAttribute("aInfo",new z(i,4)),w.setIndex(Jt(p)),w}const h0={lines:"P_LINES",ink:"P_INK"};async function x0(e,a,t){const o=h0[e],n=t.lite,[s,c,p]=await Promise.all([n0(),r0(n?.08:.04),i0(.01)]),f=new Rt,A=new Rt,i=new Ie(1,1),l={uTime:{value:0},uAsm:{value:0},uWave:{value:1},uFocal:{value:1e3},uFar:{value:30},uDpr:{value:1},uBg:{value:0},uAlpha:{value:1},uRes:{value:i},uFlat:{value:0},uFT:{value:0},uPaint:{value:0}},r=d0(s,{S:n?110:200,M:n?12:16,look:e,first:e==="ink"?t.routes:null}),g=b=>new Q({vertexShader:Yo(b),fragmentShader:Zo(b),uniforms:{...l,uGap:{value:r.gap},uPass:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1,side:bt,...Ze}),w=g(e==="ink"?"P_INK":o),m=new ce(r.geometry,w);m.name="strands",m.frustumCulled=!1,m.renderOrder=2,f.add(m);let _=null,S=null;if(e==="ink"){const b=g(`P_INK
#define INK_FG`);b.uniforms={...w.uniforms,uPass:{value:0}},_=new ce(r.geometry,b),_.frustumCulled=!1,_.renderOrder=3,f.add(_);const ae=g(`P_INK
#define INK_FG`);ae.uniforms={...w.uniforms,uPass:{value:1}},S=new ce(r.geometry,ae),S.frustumCulled=!1,S.renderOrder=3,f.add(S)}const D=e==="ink",W=D?n?300:480:1,K=new va(D?96:32,D?96:32,W,W);K.rotateX(-Math.PI/2);const C=new Q({vertexShader:Ea(o),fragmentShader:Qo(o),uniforms:{uMap:{value:a},uTime:l.uTime,uBg:{value:0},uCity:{value:0},uAlpha:{value:1},uHatch:{value:0},uRelief:{value:1},uPre:{value:0},uNN:{value:t.land?.neonN||null},uNF:{value:t.land?.neonF||null},uNeonT:{value:0},uNeonP:{value:0},uDem:{value:t.land?.dem||null},uDemF:{value:t.land?.far||null},uLA:{value:t.land?.a||null},uLB:{value:t.land?.b||null}},transparent:!0,depthWrite:!1,depthTest:D,depthFunc:za,...Ze}),x=new ce(K,C);let G=null;if(D){const b=new Q({vertexShader:Ea(o),fragmentShader:"void main() { gl_FragColor = vec4(0.0); }",uniforms:C.uniforms,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});G=new ce(K,b),G.name="washDepth",G.position.y=-.003,G.frustumCulled=!1,G.renderOrder=.9,f.add(G)}let q=null,T=null;if(D&&t.land?.hor){const b=new va(ve.hor.h*2,ve.hor.h*2,t.lite?200:320,t.lite?200:320);b.rotateX(-Math.PI/2),b.translate(0,0,ve.hor.cz);const ae={uHor:{value:t.land.hor},uHEx:{value:3.4},uCurv:{value:1},uPre:C.uniforms.uPre,uAlpha:C.uniforms.uAlpha,uBg:C.uniforms.uBg},De=new Q({vertexShader:Ia,fragmentShader:Na(!0),uniforms:ae,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});T=new Q({vertexShader:Ia,fragmentShader:Na(!1),uniforms:ae,transparent:!0,depthWrite:!1,depthTest:!0,depthFunc:za,...Ze});const ye=new ce(b,De);ye.name="horDepth",ye.frustumCulled=!1,ye.renderOrder=.88,ye.position.y=-.003,q=new ce(b,T),q.name="horizon",q.frustumCulled=!1,q.renderOrder=.95,q.position.y=-.003,q.userData.depth=ye,f.add(ye,q)}x.name="wash",x.position.y=-.003,x.frustumCulled=!1,x.renderOrder=1,f.add(x);let I=null,H=null;t.houses&&(H=new Q({vertexShader:s0,fragmentShader:u0(o),uniforms:{uGrow:{value:0},uFocal:l.uFocal,uFar:l.uFar,uDpr:l.uDpr,uRes:{value:i},uAlpha:{value:1},uHW:{value:.5}},transparent:!0,depthWrite:!1,depthTest:!1,side:bt,...Ze}),I=new ce(m0(t.houses,n),H),I.name="houses2",I.frustumCulled=!1,I.renderOrder=3,f.add(I));let v=null,y=null;e==="ink"&&t.houses&&(y=new Q({vertexShader:c0,fragmentShader:f0,uniforms:{uGrow:H.uniforms.uGrow,uFocal:l.uFocal,uFar:l.uFar,uDpr:l.uDpr,uAlpha:H.uniforms.uAlpha,uHatch:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1,side:bt,...Ze}),v=new ce(v0(t.houses,n),y),v.name="walls",v.frustumCulled=!1,v.renderOrder=2,f.add(v));const F=p0(c,e,p,t.pdb),P={lines:[.7,.6,2.2,.55,.45],ink:[.65,.55,2.2,.5,0]}[e],u={uCam:{value:new Pe},uR:{value:V},uDpr:l.uDpr,uTime:l.uTime,uFadeKm:{value:100},uRes:{value:i},uW:{value:new vt(P[0],P[1],P[2],P[3])},uWG:{value:P[4]},uAl:{value:new vt},uAG:{value:0},uDraw:{value:new vt(1,1,1,1)},uW2:{value:new Ie(.5,.65)},uAl2:{value:new Ie},uReach:{value:0}},L=new Q({vertexShader:e0(o),fragmentShader:t0(o),uniforms:u,transparent:!0,depthWrite:!1,depthTest:!1,side:bt,...Ze}),M=new ce(F,L);M.name="sphere",M.frustumCulled=!1,M.renderOrder=-10,A.add(M);const j=Array.from({length:Xt},()=>new vt),$=new Q({vertexShader:a0,fragmentShader:o0,uniforms:{uRects:{value:j},uN:{value:0},uFeather:{value:90},uStrength:{value:.85},uRes:{value:i}},transparent:!0,depthWrite:!1,depthTest:!1,blending:Qe,blendSrc:ma,blendDst:Be,blendSrcAlpha:ma,blendDstAlpha:Be});e==="lines"&&Sa===1&&(w.uniforms.uRects=$.uniforms.uRects,w.uniforms.uN=$.uniforms.uN),D&&(C.uniforms.uRects=$.uniforms.uRects,C.uniforms.uN=$.uniforms.uN);const we=new ce(l0(),$);we.frustumCulled=!1,we.renderOrder=95;let Re=[];const Te="main :is(h2, h3, p, blockquote, .arrow-link, .coverflow__item, .leader__name, .direction__head)";function xt(){Re=Array.from(document.querySelectorAll(Te))}return xt(),{cityGroup:f,sphereGroup:A,veil:we,collect:xt,textRects:{rects:$.uniforms.uRects,n:$.uniforms.uN},update(b){l.uTime.value=b.time,l.uAsm.value=b.asm,l.uWave.value=b.wave,l.uFocal.value=b.focal,l.uFar.value=b.far,l.uDpr.value=b.dpr,l.uBg.value=b.bg,l.uAlpha.value=b.alpha,l.uFlat.value=b.flat||0,l.uFT.value=b.ft??b.time,I&&(H.uniforms.uGrow.value=b.grow||0,H.uniforms.uAlpha.value=b.alpha,I.visible=b.alpha>.002&&(b.grow||0)>.001),v&&(y.uniforms.uHatch.value=b.hatch||0,v.visible=I.visible&&(b.hatch||0)>.001),i.set(b.w,b.h),m.visible=b.alpha>.002,_&&(_.visible=S.visible=m.visible&&b.asm>.001),l.uPaint.value=b.paint||0,C.uniforms.uHatch.value=b.hatch||0,C.uniforms.uBg.value=b.bg,C.uniforms.uCity.value=b.city,C.uniforms.uPre.value=b.pre||0,C.uniforms.uNeonT.value=b.neonT||0,C.uniforms.uNeonP.value=b.neonP||0,q&&(q.visible=q.userData.depth.visible=x.visible&&(b.pre||0)>.001),C.uniforms.uAlpha.value=b.alpha,x.visible=b.alpha>.002&&b.bg+b.city>.002,G&&(G.visible=x.visible),u.uCam.value.copy(b.cam),u.uFadeKm.value=b.fadeKm,u.uAl.value.set(b.sphere.al[0],b.sphere.al[1],b.sphere.al[2],b.sphere.al[3]),u.uAG.value=b.sphere.ag,u.uDraw.value.set(b.sphere.draw[0],b.sphere.draw[1],b.sphere.draw[2],b.sphere.draw[3]),u.uAl2.value.set(b.sphere.reg?.[0]||0,b.sphere.reg?.[1]||0),u.uReach.value=b.sphere.reach||0,M.visible=b.sphere.al[0]+b.sphere.al[1]+b.sphere.al[2]+b.sphere.al[3]+b.sphere.ag+u.uAl2.value.x+u.uAl2.value.y>.002;let ae=0;const De=b.w/b.cssW,ye=b.h/b.cssH,ze=18;for(let We=0;We<Re.length&&ae<Xt;We++){const Oe=Re[We];if(Oe.style.visibility==="hidden"||(Oe.classList.contains("coverflow__item")?parseFloat(Oe.style.getPropertyValue("--op")):1)<.35)continue;const Ae=Oe.getBoundingClientRect();Ae.width<2||Ae.bottom<-40||Ae.top>b.cssH+40||Ae.right<0||Ae.left>b.cssW||Ae.width*Ae.height>b.cssW*b.cssH*.5||(j[ae].set((Ae.left-ze)*De,(b.cssH-Ae.bottom-ze)*ye,(Ae.right+ze)*De,(b.cssH-Ae.top+ze)*ye),ae++)}$.uniforms.uN.value=ae,$.uniforms.uFeather.value=110*b.dpr,$.uniforms.uStrength.value=b.veil,we.visible=ae>0&&b.veil>.002}}}const g0=()=>new URLSearchParams(location.search).get("neon")!=="0",na=18;`${na}${na}${(V*1.006).toFixed(1)}${na}`;const w0=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 6; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Oa=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,y0=`
precision highp float;
uniform vec2 uRes;
uniform float uTime, uAmount, uDark;
uniform vec2 uHole;      // середина окна (центр Пардубиц на экране), пиксели
uniform float uHoleR;    // радиус окна, пиксели

${w0}
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

  float body = smoothstep(0.36, 0.66, m1);
  float puff = smoothstep(0.48, 0.68, m2);
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
  float alpha = mix(0.22 + 0.12 * puff, mix(0.38, 0.9, thick), open);

  alpha *= uAmount;
  gl_FragColor = vec4(color * alpha, alpha);
}
`,gt=.35,A0=`
precision highp float;
uniform sampler2D tClouds;
uniform vec2 uRes;
uniform float uTime, uErode, uFly, uNeon, uMapR, uTextL, uCell, uDim;
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
  if (uErode <= 0.0) { gl_FragColor = texture2D(tClouds, px / uRes); return; }
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
  gl_FragColor = spk + (1.0 - sa) * (base + (1.0 - base.a) * dim);
}
`;function b0(){const e=new Fe;e.setAttribute("position",new z(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const a=new Q({vertexShader:Oa,fragmentShader:y0,uniforms:{uRes:{value:new Ie(1,1)},uTime:{value:0},uAmount:{value:0},uHole:{value:new Ie},uHoleR:{value:1},uDark:{value:0}},depthWrite:!1,depthTest:!1,blending:Co}),t=new ce(e,a);t.frustumCulled=!1;const o=new oo;o.add(t);const n=new To,s=new Do(1,1,{depthBuffer:!1,minFilter:St,magFilter:St}),c=new Q({vertexShader:Oa,fragmentShader:A0,uniforms:{tClouds:{value:s.texture},uRes:{value:new Ie(1,1)},uTime:{value:0},uErode:{value:0},uDim:{value:0},uDimCol:{value:new Ne("#071b34")},uFly:{value:0},uNeon:{value:0},uCell:{value:5},uMapR:{value:100},uTextL:{value:1},uMap:{value:new Ie},uNeonCol:{value:new Ne("#78d0e6")}},transparent:!0,depthWrite:!1,depthTest:!1,...Ze}),p=new ce(e,c);p.frustumCulled=!1,p.renderOrder=90,p.name="clouds";const f=a.uniforms,A=new Ne;let i=!1;return{mesh:p,update(l){if(i=l.amount>.002&&!l.done,p.visible=i,!i)return;const r=c.uniforms;r.uTime.value=l.time,r.uErode.value=l.erode||0,r.uDim.value=l.dim||0,r.uFly.value=l.fly||0,r.uNeon.value=l.neon||0,r.uMapR.value=l.r,r.uTextL.value=l.textL??1,r.uMap.value.set(l.hx,l.hy),r.uCell.value=Math.max(5,4.5*(l.px||1));const g=Math.max(1,Math.round(l.w*gt)),w=Math.max(1,Math.round(l.h*gt));(s.width!==g||s.height!==w)&&s.setSize(g,w),f.uAmount.value=l.amount,f.uDark.value=l.dark||0,f.uTime.value=l.time,f.uRes.value.set(g,w),f.uHole.value.set(l.hx*gt,l.hy*gt),f.uHoleR.value=l.r*gt,c.uniforms.uRes.value.set(l.w,l.h)},prerender(l){if(!i)return;const r=l.getRenderTarget(),g=l.getClearAlpha();l.getClearColor(A),l.setRenderTarget(s),l.setClearColor(0,0),l.clear(!0,!1,!1),l.render(o,n),l.setRenderTarget(r),l.setClearColor(A,g)}}}const Ha=35,_0=.35,M0=.6,F0='a, button, input, textarea, select, label, img, video, picture, svg, header, nav, [role="button"], [contenteditable], .leader__photo, .pillar__photo',L0="h1, h2, h3, h4, h5, p, blockquote, li, figcaption, dt, dd",Y={lon:0,lat:0,on:!1,dragging:!1,dirty:!1};new zo;new Ie;new ko(new Pe,V);new Pe;const ra=typeof document<"u"?document.createRange():null;let wt=0,yt=0;function S0(e,a){const t=document.elementFromPoint(e,a);if(!t||t.closest(F0))return!0;const o=t.closest(L0);if(o&&ra){ra.selectNodeContents(o);for(const n of ra.getClientRects())if(e>=n.left-6&&e<=n.right+6&&a>=n.top-4&&a<=n.bottom+4)return!0}return!1}function R0(e,a){return Y.on,!1}const P0=(e,a)=>({globe:R0(),content:S0(e,a),el:document.elementFromPoint(e,a)?.className||""});function Ua(e){const a=document.documentElement;a.classList.toggle("earth-grab",e==="grab"),a.classList.toggle("earth-grabbing",e==="grabbing")}function C0(e,a,t){if(Y.on=a,Y.dirty=!1,!a&&Y.dragging&&(Y.dragging=!1),!Y.dragging){const o=Math.exp(-e/M0);Y.lon*=o,Y.lat*=o,wt=yt=0,Math.abs(Y.lon)<.001&&(Y.lon=0),Math.abs(Y.lat)<.001&&(Y.lat=0),(Y.lon||Y.lat)&&(Y.dirty=!0),document.documentElement.classList.contains("earth-grab")&&Ua(null);return}if(!a&&document.documentElement.classList.contains("earth-grab")&&Ua(null),!Y.dragging)if(Math.abs(wt)+Math.abs(yt)>.05){Y.lon+=wt*e,Y.lat=Math.max(-Ha,Math.min(Ha,Y.lat+yt*e));const o=Math.exp(-e/_0);wt*=o,yt*=o,Y.dirty=!0}else wt=yt=0}const T0=Math.PI,D0={tech:"#78d0e6",city:"#86a9cf",mapInk:"#7d9dc0",house:"#8fb0d2",mark:"#e2b04a",grid:"#3fd0e0"},z0={tech:"#29455c",city:"#253f57",mapInk:"#132a40",house:"#253f57",mark:"#8a5f10",grid:"#4d677d"},k0=`
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
`,E0=`
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
${k0}

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
`,I0=`
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
`,N0=`
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
`,O0=`
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
`,H0=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,U0=`
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
`,G0=`
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
`,B0=`
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
`,W0=`
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
`,K0=`
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
`,xa=new Io(new Uint8Array(4),1,1);xa.needsUpdate=!0;function Ga(e,a,t){const o=new Rt,{side:n,field:s,lite:c,light:p}=t,f=p?{LIGHT:1}:{},A=p?{blending:Qe,blendSrc:pe,blendDst:Be,blendSrcAlpha:pe,blendDstAlpha:Be}:t.glow?{blending:Qe,blendSrc:pe,blendDst:pe,blendSrcAlpha:ma,blendDstAlpha:pe}:{blending:Eo},i=p?z0:D0,l=d=>p?new Ne().setStyle(i[d],pa):new Ne(i[d]),r=n*n,g=new Float32Array(r*2),w=s/n;for(let d=0;d<n;d++)for(let R=0;R<n;R++){const B=d*n+R;g[B*2]=(R+.5)*w-s/2,g[B*2+1]=(d+.5)*w-s/2}const m=e.lumaSize,_=new Float64Array(m*m);let S=0;for(let d=0;d<m*m;d++){const R=e.luma[d];S+=R>.05?R*R+.02:.003,_[d]=S}let D=1234567;const W=()=>(D=D*16807%2147483647)/2147483647,K=new Float32Array(r*2),C=new Float32Array(r);for(let d=0;d<r;d++){const R=W()*S;let B=0,Se=m*m-1;for(;B<Se;){const qe=B+Se>>1;_[qe]<R?B=qe+1:Se=qe}const me=B%m,Ke=B/m|0,oa=(me+W())/m,la=(Ke+W())/m;K[d*2]=(oa-.5)*Ee*2,K[d*2+1]=(la-.5)*Ee*2,C[d]=e.luma[B]}const x=d=>{const R=Array.from({length:r},(B,Se)=>Se);R.sort((B,Se)=>d[B*2]-d[Se*2]);for(let B=0;B<n;B++){const Se=R.slice(B*n,(B+1)*n).sort((me,Ke)=>d[me*2+1]-d[Ke*2+1]);for(let me=0;me<n;me++)R[B*n+me]=Se[me]}return R},G=x(g),q=x(K),T=new Float32Array(r*2),I=new Float32Array(r*2),H=new Float32Array(r);for(let d=0;d<r;d++){const R=G[d],B=q[d];T[R*2]=g[R*2],T[R*2+1]=g[R*2+1],I[R*2]=K[B*2],I[R*2+1]=K[B*2+1],H[R]=C[B]}const v=new Fe;v.setAttribute("position",new z(new Float32Array(r*3),3)),v.setAttribute("aGrid",new z(T,2)),v.setAttribute("aMap",new z(I,2)),v.setAttribute("aLum",new z(H,1));const y=new Q({vertexShader:E0,fragmentShader:I0,uniforms:{uTime:{value:0},uAsm:{value:0},uWave:{value:1},uSize:{value:c?.05:.036},uFocal:{value:1e3},uFar:{value:30},uStep:{value:w},uTechCol:{value:l("tech")},uMapCol:{value:l("city")},uAlpha:{value:1},uScr:{value:0},uDust:{value:0},uFly:{value:0},uCloudA:{value:1},uDustL:{value:1},uRes:{value:new Ie(1,1)},tCloud:{value:xa},uDrift:{value:new Ie},uNeon:{value:0}},defines:t.glow?{...f,GLOW:1}:f,transparent:!0,depthWrite:!1,depthTest:!0,...t.glow?{blending:Qe,blendSrc:pe,blendDst:pe,blendSrcAlpha:pe,blendDstAlpha:pe}:A}),F=new Vt(v,y);F.name="points",F.frustumCulled=!1,F.renderOrder=2;const P=new va(Ee*2,Ee*2);P.rotateX(-T0/2);const u=new Q({vertexShader:H0,fragmentShader:U0,uniforms:{uMap:{value:a},uInk:{value:l("mapInk")},uBase:{value:new Ne("#0a1626")},uAlpha:{value:0}},defines:f,transparent:!0,depthWrite:!1,...p?A:{}}),L=new ce(P,u);L.name="map",L.position.y=-.002,L.renderOrder=0,L.frustumCulled=!1;const M=e.houses,j=1.6/1e3;let $=0;for(let d=0;d<M.n;d++)c&&M.area[d]<400||($+=M.cnt[d]*(M.h[d]>=11?2:1));const we=new Float32Array($*6),Re=new Float32Array($*2),Te=new Float32Array($*2),xt=new Float32Array($*2),b=new Float32Array($*2);let ae=0;for(let d=0;d<M.n;d++){if(c&&M.area[d]<400)continue;const R=M.start[d],B=M.cnt[d],Se=Math.max(3,M.h[d])*j;let me=0,Ke=0;for(let re=0;re<B;re++)me+=M.u[R+re],Ke+=M.v[R+re];me=(me/B-.5)*2,Ke=(Ke/B-.5)*2;const oa=Math.min(1,Math.hypot(me,Ke))*.8+d*7919%97/97*.2,la=Math.sqrt(Math.max(30,M.area[d]))/1e3,qe=(re,Et,It)=>{we[ae*3]=(re-.5)*Ee*2,we[ae*3+1]=0,we[ae*3+2]=(Et-.5)*Ee*2,Re[ae]=It,Te[ae]=Se,xt[ae]=oa,b[ae]=la,ae++};for(let re=0;re<B;re++){const Et=R+re,It=R+(re+1)%B;qe(M.u[Et],M.v[Et],1),qe(M.u[It],M.v[It],1)}if(M.h[d]>=11)for(let re=0;re<B;re++)qe(M.u[R+re],M.v[R+re],0),qe(M.u[R+re],M.v[R+re],1)}const De=new Fe;De.setAttribute("position",new z(we,3)),De.setAttribute("aTop",new z(Re,1)),De.setAttribute("aH",new z(Te,1)),De.setAttribute("aDel",new z(xt,1)),De.setAttribute("aSz",new z(b,1));const ye=new Q({vertexShader:G0,fragmentShader:B0,uniforms:{uGrow:{value:0},uFar:{value:30},uFocal:{value:1e3},uCol:{value:l("house")},uAlpha:{value:.55}},defines:f,transparent:!0,depthWrite:!1,...A}),ze=new da(De,ye);ze.name="houses",ze.frustumCulled=!1,ze.renderOrder=1;const We=e.projects,Oe=new Float32Array(We.length*3),ea=new Float32Array(We.length);We.forEach((d,R)=>{Oe[R*3]=(d.u-.5)*Ee*2,Oe[R*3+1]=.03,Oe[R*3+2]=(d.v-.5)*Ee*2,ea[R]=R/We.length});const Ae=new Fe;Ae.setAttribute("position",new z(Oe,3)),Ae.setAttribute("aSeed",new z(ea,1));const Dt=new Q({vertexShader:W0,fragmentShader:K0,uniforms:{uFocal:{value:1e3},uTime:{value:0},uCol:{value:l("mark")},uAlpha:{value:0}},defines:f,transparent:!0,depthWrite:!1,depthTest:!1,...A}),nt=new Vt(Ae,Dt);nt.name="marks",nt.frustumCulled=!1,nt.renderOrder=3;const ta=16,zt=c?96:160,Ta=Math.floor(n/ta)+1,aa=new Float32Array(Ta*2*zt*6);let kt=0;for(let d=0;d<Ta;d++){const R=Math.min(s/2,d*ta*w-s/2);for(let B=0;B<zt;B++){const Se=(B/zt-.5)*s,me=((B+1)/zt-.5)*s;aa.set([Se,0,R,me,0,R],kt),kt+=6,aa.set([R,1,Se,R,1,me],kt),kt+=6}}const Da=new Fe;Da.setAttribute("position",new z(aa,3));const rt=new Q({vertexShader:N0,fragmentShader:O0,uniforms:{uTime:{value:0},uWave:{value:1},uFar:{value:30},uFocal:{value:1e3},uGap:{value:ta*w},uCol:{value:l("grid")},uAlpha:{value:1}},defines:f,transparent:!0,depthWrite:!1,...A}),it=new da(Da,rt);return it.name="grid",it.frustumCulled=!1,it.renderOrder=1,o.add(L,it,ze,F,nt),{group:o,update(d){const R=y.uniforms;R.uTime.value=d.time,R.uAsm.value=d.asm,R.uWave.value=d.wave,R.uFocal.value=d.focal,R.uFar.value=d.far,R.uAlpha.value=d.alpha*d.points,R.uScr.value=d.scr||0,d.scr&&(R.uDust.value=d.dust,R.uFly.value=d.fly,R.uCloudA.value=d.cloudA,R.uDustL.value=d.dustL,R.uRes.value.set(d.resW,d.resH),R.tCloud.value=d.cloudTex||xa,R.uDrift.value.set(d.driftX||0,d.driftY||0),R.uNeon.value=d.neon||0),F.visible=d.alpha*d.points>.002,u.uniforms.uAlpha.value=d.map*d.alpha,L.visible=d.map*d.alpha>.002,ye.uniforms.uGrow.value=d.houses,ye.uniforms.uFar.value=d.far,ye.uniforms.uFocal.value=d.focal,ye.uniforms.uAlpha.value=.55*d.alpha,ze.visible=d.houses>.001&&d.alpha>.002,Dt.uniforms.uTime.value=d.time,Dt.uniforms.uFocal.value=d.focal,Dt.uniforms.uAlpha.value=d.marks*d.alpha,nt.visible=d.marks*d.alpha>.002;const B=d.alpha*(1-d.asm);rt.uniforms.uTime.value=d.time,rt.uniforms.uWave.value=d.wave,rt.uniforms.uFar.value=d.far,rt.uniforms.uFocal.value=d.focal,rt.uniforms.uAlpha.value=B,it.visible=B>.002,o.visible=d.alpha>.002,d.hideTech&&(F.visible=!1,it.visible=!1,ze.visible=!1,L.visible=!1),d.hideMarks&&(nt.visible=!1)}}}const q0=`
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
`,j0=e=>`
#define ${e}
${e==="LOOK_LIGHT"?el:e.startsWith("LOOK_PAPER")?tl:""}
${e.includes("P_INK")?`#define SK_SPHERE
`+La:""}
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
    col += mix(gold, blue, uMarkBlue) * uMark;
    col = mix(col, min(col, cap), capW);
    col += vec3(0.55, 0.8, 1.0) * nHot * 0.7 * uMarkBlue * uMark;
    a = 1.0;
#ifdef LOOK_DOTS
    // В окне под городом гаснут только точки, тёмное тело планеты остаётся:
    // иначе сквозь окно (и по его мягкому краю) проступал синий градиент
    // фона страницы — заказчик: «зачем синюю пелену оставил, по краю окна».
    col = mix(vec3(0.020, 0.045, 0.080), col, hole);
#else
    a *= hole;
#endif
#endif
  }
  // Ореол атмосферы за краем диска — своим слоем (hk, hcol): у него своя
  // сила uHaloA, и при уходе Земли он гаснет позже планеты.
  float hk = 0.0; vec3 hcol = vec3(0.0);
  // Ореол атмосферы за краем диска.
  if (b < 0.0 || hR > uR) {
    float hgt = max(hR - uR, 0.0);
    float halo = exp(-hgt / (uR * 0.035)) * step(uR, hR);
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
  gl_FragColor = vec4(col * pa + hcol * ho + spaceCol * sa, pa + ho + sa);
}
`,$0=`
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
`,V0=`
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
`,X0=`
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
  float h = b * b - dot(ro, ro) + ${V.toFixed(1)} * ${V.toFixed(1)};
  vBehind = (h > 0.0 && -b - sqrt(max(h, 0.0)) > 0.0) ? 1.0 : 0.0;
  gl_PointSize = (1.0 + aMag * 1.6) * uPx;
}
`,Y0=`
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
`,Z0=`
varying vec2 vP;
void main() { vP = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,J0=`
uniform float uLeft;
uniform float uAll;
uniform vec3 uCol;
varying vec2 vP;
void main() {
  // Под колонкой текста слева — темнее; дальше сцена в полную силу.
  float a = uLeft * (1.0 - smoothstep(0.28, 0.62, vP.x)) + uAll;
  a = clamp(a, 0.0, 1.0);
  gl_FragColor = vec4(uCol * a, a);
}
`;function Ba(){const e=new Fe;return e.setAttribute("position",new z(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}const Q0={dots:"LOOK_DOTS",photo:"LOOK_PHOTO",mix:"LOOK_MIX",light:"LOOK_LIGHT",lines:`LOOK_PAPER
#define P_LINES`,ink:`LOOK_PAPER
#define P_INK`},Wa={lines:1,ink:1},mo=e=>{const a=parseInt(e.slice(1),16),t=o=>(o/255).toFixed(4);return`vec3(${t(a>>16)}, ${t(a>>8&255)}, ${t(a&255)})`},el=[["L_SEA","#6c8194"],["L_GROUND","#2c4760"],["L_GOLD","#8a5f10"],["L_DISC","#d3d9de"],["L_RIM","#29455c"],["L_AURA","#e4e8ec"]].map(([e,a])=>`#define ${e} ${mo(a)}`).join(`
`),tl=[["L_SEA","#5b7086"],["L_GROUND","#1c3349"],["L_GOLD","#8a5f10"],["L_GLOW","#2A6DAA"],["L_DISC","#d3d9de"],["L_RIM","#2A6DAA"],["L_AURA","#5FA8E0"],["L_PALE","#5FA8E0"],["L_GOLDL","#c9a24e"],["L_INK3","#4d677d"],["L_INK2","#29455c"]].map(([e,a])=>`#define ${e} ${mo(a)}`).join(`
`);function ia(e,a,t,o){let n=0,s=0;const c=[0,0,0],p=new Rt,f={blending:Qe,blendSrc:pe,blendDst:Be,blendSrcAlpha:pe,blendDstAlpha:Be},A=ge(o.pdb.lat,o.pdb.lon,1),i={uCam:{value:new Pe},uC:{value:0},uR:{value:V},uAlpha:{value:0},uHaloA:{value:0},uSpace:{value:0},uAtm:{value:0},uS0:{value:1},uLod:{value:0},uMarkR:{value:10},uMark:{value:0},uMarkBlue:{value:0},uMarkGrow:{value:1},uTime:{value:0},uNight:{value:0},uClouds:{value:0},uHole:{value:0},uHoleR:{value:3.75},uRevMode:{value:0},uRevR:{value:1},uRevA:{value:1},uVeil:{value:0},uCzK:{value:0},uSc:{value:1},uInkH:{value:1},uInkP:{value:1},uPdb:{value:new Pe(A[0],A[1],A[2])},uSun:{value:new Pe(...ge(18,-28,1)).normalize()},uLand:{value:a.land},uEu:{value:a.eu},uEuBox:{value:new vt(Ot.lon0,Ot.lat0,Ot.lon1,Ot.lat1)},uCamWorld:{value:new ha},uInvProj:{value:new ha}};e==="photo"&&(i.uDay={value:a.day},i.uDayEu={value:a.dayEu},i.uCloudTex={value:a.clouds},i.uDayCe={value:a.dayCe},i.uCeBox={value:new vt(Ht.lon0,Ht.lat0,Ht.lon1,Ht.lat1)},i.uPhoto={value:0}),e==="mix"&&(i.uNightTex={value:a.night},i.uNightEu={value:a.nightEu});const l=new Q({vertexShader:q0,fragmentShader:j0(Q0[e]),uniforms:i,transparent:!0,depthTest:!1,depthWrite:!1,...f}),r=new ce(Ba(),l);r.name="globe",r.frustumCulled=!1,r.renderOrder=-20;const g=(u,L,M)=>new Q({vertexShader:$0,fragmentShader:V0,uniforms:{uCam:i.uCam,uR:i.uR,uPdb:i.uPdb,uMarkR:i.uMarkR,uMark:i.uMark,uCol:{value:e==="light"?new Ne().setStyle(u,pa):new Ne(u)},uAlpha:{value:L},uFadeKm:{value:M}},transparent:!0,depthTest:!1,depthWrite:!1,...f}),w={dots:{coast:"#6f9cc4",border:"#8fb4d8",river:"#4f86b8"},photo:{coast:"#ffffff",border:"#ffffff",river:"#9cc8ff"},mix:{coast:"#5b8fc8",border:"#7fa9dc",river:"#3f6f9f"},light:{coast:"#4d677d",border:"#29455c",river:"#6c8194"}}[Wa[e]?"light":e],m=(u,L)=>{const M=new Fe;M.setAttribute("position",new z(u,3));const j=new da(M,g(L,0,400));return j.frustumCulled=!1,j.renderOrder=-10,j},_=m(t[0],w.coast),S=m(t[1],w.border),D=m(t[3],w.river);_.name="coast",S.name="border",D.name="river";const W=new Uo().setPositions(t[2]),K=new Go({color:e==="light"?9068304:15317072,linewidth:o.lite?1.6:2.2,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),C=new Bo(W,K);C.frustumCulled=!1,C.renderOrder=-9;const x=o.lite?900:2400,G=new Float32Array(x*3),q=new Float32Array(x);let T=4242;const I=()=>(T=T*16807%2147483647)/2147483647;for(let u=0;u<x;u++){const L=I()*2-1,M=I()*Math.PI*2,j=Math.sqrt(1-L*L);G[u*3]=j*Math.cos(M)*1e5,G[u*3+1]=L*1e5,G[u*3+2]=j*Math.sin(M)*1e5,q[u]=Math.pow(I(),4)}const H=new Fe;H.setAttribute("position",new z(G,3)),H.setAttribute("aMag",new z(q,1));const v=new Q({vertexShader:X0,fragmentShader:Y0,uniforms:{uAlpha:{value:0},uPx:{value:1},uOcc:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,...f}),y=new Vt(H,v);y.frustumCulled=!1,y.renderOrder=-15,y.name="stars";const F=new Q({vertexShader:Z0,fragmentShader:J0,uniforms:{uLeft:{value:0},uAll:{value:0},uCol:{value:e==="light"?new Ne().setStyle("#c4cad0",pa):new Ne("#040b15")}},transparent:!0,depthTest:!1,depthWrite:!1,...f}),P=new ce(Ba(),F);return P.name="scrim",P.frustumCulled=!1,P.renderOrder=100,p.add(y,r,_,S,D,C,P),{group:p,resize(u,L){K.resolution.set(u,L)},setPhoto(u,L){const M=[];return i.uDay&&u&&i.uDay.value!==u&&(M.push(i.uDay.value),i.uDay.value=u),i.uCloudTex&&L&&i.uCloudTex.value!==L&&(M.push(i.uCloudTex.value),i.uCloudTex.value=L),M},update(u,L){const M=L.position;i.uCam.value.copy(M);const j=Math.hypot(M.x,M.y,M.z);i.uC.value=(j-V)*(j+V),i.uCamWorld.value.copy(L.matrixWorld),i.uInvProj.value.copy(L.projectionMatrixInverse),i.uAlpha.value=u.alpha,i.uHaloA.value=u.haloAlpha??u.alpha,i.uSpace.value=u.space,i.uAtm.value=u.atm,i.uS0.value=u.s0,i.uLod.value=u.lod,i.uMarkR.value=u.markR,i.uMark.value=u.mark,i.uMarkBlue.value=u.markBlue||0,i.uMarkGrow.value=u.markGrow||1,i.uTime.value=u.time,i.uNight.value=u.night,i.uPhoto&&(i.uPhoto.value=u.photo),i.uClouds.value=u.clouds,i.uHole.value=u.hole,i.uHoleR.value=u.holeR,i.uRevMode.value=u.revMode||0,i.uRevR.value=u.revR||1,i.uRevA.value=u.revA??1,i.uVeil.value=u.veil||0,((u.spin||0)!==n||(u.sunLat||0)!==s)&&(n=u.spin||0,s=u.sunLat||0,ge(18+s,-28+n,1,c),i.uSun.value.set(c[0],c[1],c[2]).normalize()),i.uCzK.value=u.czk,i.uSc.value=u.sc||1,i.uInkH.value=u.inkH??1,i.uInkP.value=u.inkP??1,r.visible=u.alpha>.002||u.space>.002,_.material.uniforms.uAlpha.value=u.lines*(e==="photo"?.18:.38),S.material.uniforms.uAlpha.value=u.lines*(e==="photo"?.3:.5),D.material.uniforms.uAlpha.value=u.rivers*.35;for(const $ of[_,S,D])$.material.uniforms.uFadeKm.value=Math.max(1,j-V)*.05,$.visible=$.material.uniforms.uAlpha.value>.002;K.opacity=u.cz,C.visible=u.cz>.002,y.position.copy(M),v.uniforms.uAlpha.value=u.stars,v.uniforms.uOcc.value=Math.min(1,20*Math.max(u.alpha,u.haloAlpha??u.alpha)),v.uniforms.uPx.value=u.px,y.visible=u.stars>.002,Wa[e]&&(_.visible=S.visible=D.visible=C.visible=y.visible=!1),F.uniforms.uLeft.value=u.scrimLeft,F.uniforms.uAll.value=u.scrimAll,P.visible=u.scrimLeft+u.scrimAll>.002}}}const lt=[[48.2082,16.3738],[52.52,13.405],[47.4979,19.0402],[48.8566,2.3522],[51.5074,-.1278],[41.9028,12.4964],[40.4168,-3.7038],[59.3293,18.0686],[50.4501,30.5234],[39.9334,32.8597],[24.4539,54.3773],[39.9042,116.4074],[56.9496,24.1052],[37.9838,23.7275],[35.6762,139.6503],[1.3521,103.8198]],Ut=128,et=2.5,al=et*lt.length,ol=`
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
  return d * (${V.toFixed(1)} + aArc.z * sin(3.14159265 * t));
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
  vec4 ch = pv * vec4(uP * ${V.toFixed(1)}, 1.0);
  vHome = (ch.xy / ch.w * 0.5 + 0.5) * uRes;
  // Закрыта ли точка шаром Земли (луч из камеры к ней пересекает шар).
  vec3 ro = cameraPosition, rd = p - ro;
  float L = length(rd); rd /= L;
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${(V*.998).toFixed(1)} * ${(V*.998).toFixed(1)};
  float tHit = -b - sqrt(max(h, 0.0));
  vOcc = (h > 0.0 && tHit > 0.0 && tHit < L - 1.0) ? 0.0 : 1.0;
  vT = aT;
  vS = aSide;
  vArc = aArc;
}
`,ll=`
uniform float uTime;
uniform float uPeriod;
uniform float uAlpha;
uniform float uHalfW;
uniform float uStart;
uniform float uTextL;
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
  float k = floor(uTime / ${et.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = 2.0 * floor(h * ${lt.length/2}.0) + mod(j, 2.0);
    float since = uTime - j * ${et.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${et.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
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
  float order = vArc.y * float(${lt.length});
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
  float tx = mix(uTextL, 1.0, smoothstep(0.22, 0.5, gl_FragCoord.x / uRes.x));
  // Пока камера близко (Чехия, Европа), нити и кометы ярче; к целой Земле —
  // прежний вид (uNear по расстоянию камеры).
  float i = (core * (0.7 + 0.6 * head) + 0.45 * halo) * k * vArc.w * vOcc * uAlpha * tx * home * (1.0 + 0.7 * uNear);
  // Голова — ярче, но синяя, без белого: потолок насыщенного неона.
  vec3 c = min(mix(uCol, vec3(0.3, 0.72, 1.0), 0.7 * head) * i, vec3(0.28, 0.70, 1.0));
  // У головы — крошечное светлое ядро по оси нити (неон), не белая клякса.
  c += vec3(0.5, 0.78, 1.0) * head * (1.0 - smoothstep(0.2, 0.7, px)) * 0.45 * vOcc * uAlpha * tx * home;
  gl_FragColor = vec4(c, min(1.0, max(c.r, max(c.g, c.b))));
}
`,nl=`
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
  float k = floor(uTime / ${et.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = 2.0 * floor(h * ${lt.length/2}.0) + mod(j, 2.0);
    float since = uTime - j * ${et.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${et.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
  }
  return best;
}
void main() {
  vec4 cp = projectionMatrix * viewMatrix * vec4(position, 1.0);
  gl_Position = cp;
  // Вспышка, когда приходит голова (конец пути), и тихое тление.
  float order = aArc.y * float(${lt.length});
  float since = arcLaunch(order, aArc.x + 3.0) - aArc.x;
  float flash = since > -0.25 ? smoothstep(-0.25, 0.0, since) * exp(-max(since, 0.0) * 1.6) : 0.0;
  float drawn = step(uStart + order * 0.15 + 2.4, uTime);
  // В Пардубицах точку даёт метка Земли (globe.js, дышит) — здесь её нет.
  vI = aHome > 0.5 ? 0.0 : (0.35 + 1.4 * flash) * drawn;
  gl_PointSize = (aHome > 0.5 ? 12.0 : 9.0 + 6.0 * flash) * uDpr * (1.0 + 0.4 * uNear);
  vec3 ro = cameraPosition, rd = position - ro;
  float L = length(rd); rd /= L;
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${(V*.998).toFixed(1)} * ${(V*.998).toFixed(1)};
  float tHit = -b - sqrt(max(h, 0.0));
  vOcc = (h > 0.0 && tHit > 0.0 && tHit < L - 1.0) ? 0.0 : 1.0;
}
`,rl=`
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
`,Ka={blending:Qe,blendSrc:pe,blendDst:pe,blendSrcAlpha:pe,blendDstAlpha:Be};function il(e){const a=new Pe(...ge(e.lat,e.lon,1)),t=lt.length,o=t*(Ut+1)*2,n=new Float32Array(o*3),s=new Float32Array(o),c=new Float32Array(o),p=new Float32Array(o*4),f=[];let A=7;const i=()=>(A=A*16807%2147483647)/2147483647,l=lt.map(([T,I],H)=>{const v=new Pe(...ge(T,I,1)),y=Math.acos(Math.min(1,Math.max(-1,a.dot(v)))),F=Math.min(.22*V,y*V*.2);return{e:v,ang:y,a:[3+2*Math.min(1,y/1.45),0,F,.75+.25*i()]}}),r=l.map((T,I)=>I);for(let T=r.length-1;T>0;T--){const I=Math.floor(i()*(T+1));[r[T],r[I]]=[r[I],r[T]]}r.forEach((T,I)=>{l[T].a[1]=I/t});let g=0;l.forEach(({e:T,a:I})=>{const H=g;for(let v=0;v<=Ut;v++){for(const y of[-1,1])n.set([T.x,T.y,T.z],g*3),s[g]=v/Ut,c[g]=y,p.set(I,g*4),g++;if(v<Ut){const y=H+v*2;f.push(y,y+1,y+2,y+1,y+3,y+2)}}});const w=new Fe;w.setAttribute("position",new z(new Float32Array(o*3),3)),w.setAttribute("aEnd",new z(n,3)),w.setAttribute("aT",new z(s,1)),w.setAttribute("aSide",new z(c,1)),w.setAttribute("aArc",new z(p,4)),w.setIndex(f);const m=new Ne("#78d0e6"),_=new Q({vertexShader:ol,fragmentShader:ll,uniforms:{uP:{value:a},uRes:{value:new Ie(1,1)},uHalfW:{value:5},uTime:{value:0},uPeriod:{value:al},uAlpha:{value:0},uStart:{value:0},uTextL:{value:1},uDpr:{value:1},uNear:{value:0},uCol:{value:m}},transparent:!0,depthWrite:!1,depthTest:!1,side:bt,...Ka}),S=new ce(w,_);S.frustumCulled=!1,S.name="arcs";const D=new Float32Array((t+1)*3),W=new Float32Array((t+1)*4),K=new Float32Array(t+1);l.forEach(({e:T,a:I},H)=>{D.set([T.x*V,T.y*V,T.z*V],H*3),W.set(I,H*4)}),D.set([a.x*V,a.y*V,a.z*V],t*3),W.set([1,0,0,1],t*4),K[t]=1;const C=new Fe;C.setAttribute("position",new z(D,3)),C.setAttribute("aArc",new z(W,4)),C.setAttribute("aHome",new z(K,1));const x=new Q({vertexShader:nl,fragmentShader:rl,uniforms:{uTime:_.uniforms.uTime,uPeriod:_.uniforms.uPeriod,uStart:_.uniforms.uStart,uNear:_.uniforms.uNear,uAlpha:_.uniforms.uAlpha,uCol:{value:m},uDpr:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,...Ka}),G=new Vt(C,x);G.frustumCulled=!1,G.name="arcDots";const q=new Rt;return q.add(S,G),S.renderOrder=50,G.renderOrder=51,{group:q,update(T){const I=q.visible;if(q.visible=T.alpha>.002,!q.visible)return;I||(_.uniforms.uStart.value=T.time),_.uniforms.uTextL.value=T.textL??1,_.uniforms.uAlpha.value=T.alpha,_.uniforms.uTime.value=T.time,_.uniforms.uRes.value.set(T.w,T.h);const H=Math.log(Math.max(1,T.d||2e4)),v=1-Math.min(1,Math.max(0,(H-Math.log(2e3))/(Math.log(2e4)-Math.log(2e3)))),y=v*v*(3-2*v);_.uniforms.uNear.value=y,_.uniforms.uHalfW.value=5*T.dpr*(1+.8*y),x.uniforms.uDpr.value=T.dpr,_.uniforms.uDpr.value=T.dpr}}}const sa="home",ut=window.matchMedia("(prefers-reduced-motion: reduce)").matches,po=5,qa=new URLSearchParams(location.search).get("earthfreeze"),ga=!0,tt=[3.1,3.9];let jt=.5;const st={a:0,b:0};let ne=null,Ce=null,X=null,se=null,mt=null,xe=null,at=null,_e=null,dt=null,Yt=null;const je={alpha:0,time:0,w:1,h:1,dpr:1,textL:1},he=[5.08,6.2];let fe=null;const wa=new lo(35,1,1,1e6),ie={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},Gt=[0,0,0],Bt=[0,0,0],Wt=[0,0,0],Pt=new Pe,ke={lat:0,lon:0,tilt:0,head:0,sx:0,sy:0,ok:!1};function Pa(e,a){if(!_e||e<=he[0])return;ke.ok||(Tt(he[0],ke),ke.ok=!0);const t=h(he[0],he[1],e);a.lat=ke.lat,a.lon=ke.lon,a.head=ke.head,a.tilt=ke.tilt*(1-t),a.sx=ke.sx+(.3-ke.sx)*t,a.sy=ke.sy+(0-ke.sy)*t}function ya(e,a,t){Tt(a,ie),Pa(a,ie),io(ie.lat,ie.lon+e,ie.d,ie.tilt,ie.head,Gt,Bt,Wt),t.position.set(Gt[0],Gt[1],Gt[2]),t.up.set(Bt[0],Bt[1],Bt[2]),t.lookAt(Wt[0],Wt[1],Wt[2]),t.aspect=te/Le,t.near=Math.max(.02,ie.d*.02),t.far=Math.max(ie.d*4,ie.d+2.2*V)+2e5,t.updateProjectionMatrix(),t.projectionMatrix.elements[8]=-ie.sx,t.projectionMatrix.elements[9]=-ie.sy,t.projectionMatrixInverse.copy(t.projectionMatrix).invert(),t.updateMatrixWorld();const o=ge(O.lat,O.lon);return Pt.set(o[0],o[1],o[2]).project(t),(Pt.x*.5+.5)*(se.clientWidth||innerWidth)}function ho(){const e=document.querySelector("#container-probe i")?.getBoundingClientRect();return e&&e.width>0?e.left+e.width/2:innerWidth/2}function sl(){const e=te+"x"+Le;if(fe&&fe.key===e)return fe.v;const a=ho();let t=0,o=1/0;for(let n=-30;n<=60;n+=.25){const s=ya(n,he[1],wa);Pt.z<1&&Math.abs(s-a)<o&&(o=Math.abs(s-a),t=n)}return Tt(he[1],ie),Pa(he[1],ie),fe={key:e,v:t,goal:a,lat:ie.lat,lon:ie.lon,sx:ie.sx,sy:ie.sy},fe.v}const Xe=[4.85,5.08];let ot=null,Ue=null,ct=null,N=null,Zt=0,ja=null,Z=!1,Me=null;const ul=performance.now(),Qt=[{t:0,lat:O.lat-.012,lon:O.lon,d:6.5,tilt:74,head:-30,sx:.3,sy:.02},{t:1,lat:O.lat-.008,lon:O.lon,d:7.2,tilt:70,head:-20,sx:.3,sy:0},{t:2,lat:O.lat-.004,lon:O.lon,d:8.4,tilt:62,head:-9,sx:.3,sy:0},{t:3,lat:O.lat,lon:O.lon,d:9.6,tilt:52,head:2,sx:.3,sy:0},{t:4,lat:O.lat,lon:O.lon,d:11,tilt:46,head:12,sx:.8,sy:-.22},{t:4.5,lat:O.lat,lon:O.lon-.05,d:75,tilt:32,head:8,sx:.55,sy:-.26},{t:5,lat:49.85,lon:15.45,d:780,tilt:14,head:0,sx:.32,sy:-.2},{t:5.5,lat:50,lon:14.2,d:2300,tilt:6,head:0,sx:.3,sy:-.1},{t:6,lat:49,lon:12,d:5600,tilt:0,head:0,sx:.3,sy:0},{t:7,lat:38,lon:9,d:23e3,tilt:0,head:0,sx:.32,sy:0},{t:8,lat:30,lon:-4,d:34e3,tilt:0,head:0,sx:1.2,sy:.95}],xo=Qt.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),go=Qt.map(e=>e.t===5?{...e,d:1500,sx:-.3,sy:-.52}:e.t===5.5?{...e,sx:-.42,sy:-.56}:e),wo=[...go.map(e=>e.t===2?{...e,tilt:58,head:-18}:e.t===3?{...e,tilt:50,head:6,d:9.2}:e),{t:2.5,lat:O.lat-.002,lon:O.lon,d:8.8,tilt:54,head:-8,sx:.3,sy:0}].sort((e,a)=>e.t-a.t),cl=wo.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),$t={lat:O.lat,lon:O.lon,head:10.2},ua={...$t,d:11,tilt:46,sx:.62,sy:-.08},yo=[{t:0,...$t,d:12.5,tilt:76,sx:.3,sy:0},{t:1,...$t,d:11.2,tilt:72,sx:.3,sy:0},{t:2,...$t,d:11,tilt:56,sx:.5,sy:-.04},{t:2.5,...ua},{t:3,...ua},{t:4,...ua},...Qt.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],fl=[...yo.filter(e=>e.t<=4).map(e=>({...e,sx:0,sy:-.12})).map(e=>e.t===2?{...e,d:16}:e.t===2.5?{...e,d:19}:e.t===3||e.t===4?{...e,d:22}:e),...xo.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],Je=1.5,vl=[{t:0,lat:O.lat-.012,lon:O.lon,d:8,tilt:80,sx:.3,sy:.02},{t:1,lat:O.lat-.008,lon:O.lon,d:8.5,tilt:76,sx:.3,sy:0}],$a=[[0,10.2],[Je,10.2]];function ml(e,a){const t=_t(e),o=r=>({t:r,...t(r,{})}),n=vl.map(r=>a?{...r,sx:0,sy:-.12}:r),s=[...n,o(Je),o(Je+.3)],c=Fa([...$a.map(r=>r[0]),Je+.3],[...$a.map(r=>r[1]),s[s.length-1].head]),p=_t(s.map(({head:r,...g})=>g)),f={lat:O.lat,lon:O.lon,head:10.2,sx:a?0:.69,sy:a?-.12:-.05},A=_t([[0,12.5,76],[1,11.2,72],[2,9.4,62],[2.5,8.3,53],[3,7.48,47.5],[4,7.48,47.5]].map(([r,g,w])=>({t:r,...f,d:g,tilt:w}))),i=r=>{const g=A(r,{});return delete g.head,{t:r,...g}},l=_t([...n,i(Je),i(Je+.3)]);return(r,g)=>r>=Je?t(r,g):(r<=1?l(r,g):p(r,g),g.head=c(r),g)}let Tt=null;const h=(e,a,t)=>{const o=Math.min(1,Math.max(0,(t-e)/(a-e)));return o*o*(3-2*o)},U={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},ee={resW:1,resH:1,time:0,asm:0,wave:1,map:0,houses:0,marks:0,alpha:1,points:1,focal:1e3,far:30},E={alpha:0,space:0,atm:0,s0:1,lod:0,markR:1,mark:0,time:0,night:0,photo:0,clouds:0,lines:0,rivers:0,cz:0,czk:0,stars:0,px:1,scrimLeft:0,scrimAll:0,hole:0,holeR:Ee},ue={},J={},oe={};let de=0,$e=0,ca=0,ft=0,Aa=0,Ft=0,Va=0;const Ye=[0,0,0],Kt=[0,0,0],qt=[0,0,0],dl=14,be={a:0,b:0,f0:0,f1:0,spin:0,leave:0,on:!1};function pl(e){if(!be.on){be.spin=0,be.leave=0;return}be.spin=dl*h(be.a,be.b,e),be.leave=h(be.f0,be.f1,e)}function hl(){const e=document.querySelector("#canvas-wrapper");if(!e)return null;let a=e.querySelector("canvas.canvas-earth");return a||(a=document.createElement("canvas"),a.className="canvas-earth",a.setAttribute("aria-hidden","true"),e.append(a)),a}function fa(){Ct.measures++;const e=innerHeight,a=i=>{const l=document.querySelector(i);if(!l)return null;const r=l.getBoundingClientRect();return{y:r.top+scrollY,h:r.height}},t=a("main .about"),o=a("main .doing"),n=a("main .history"),s=a("main .people"),c=a("main .social");if(!t||!o||!n||!s||!c){Me=null;return}const p=Ho(),f=[p,t.y-.1*e,o.y-.3*e,o.y+.5*o.h-.5*e,n.y-.4*e,n.y+.12*n.h,n.y+.42*n.h,n.y+.72*n.h,s.y-.25*e,c.y-.7*e,c.y+.25*e];if(N==="ink"&&ga)f[3]=f[2]+1.1*e,st.a=f[3]-.25*e,st.b=st.a+1.25*e,f[4]=st.b+.15*e;else if(N==="ink"){const i=[1.1,.7,1.2,1.2,1,1.2,1.4,1.6],l=i.reduce((w,m)=>w+m,0),r=document.documentElement.scrollHeight-e-f[2],g=Math.min(1,Math.max(.3,r/(l*e)));for(let w=0;w<i.length;w++)f[w+3]=f[w+2]+i[w]*e*g}for(let i=1;i<f.length;i++)f[i]=Math.max(f[i],f[i-1]+40);const A=[0,1,2,3,4,4.5,5,5.5,6,7,8];Me={ys:f,ts:A,start:p,map:Fa(f,A)},N==="ink"&&ga&&(tt[0]=Me.map(st.a),tt[1]=Me.map(st.b)),be.on=!1}function Ao(e){return Me?Me.map(e):0}function xl(e){if(!Me)return 0;let a=Me.ys[0],t=Me.ys[Me.ys.length-1];for(let o=0;o<40;o++){const n=(a+t)/2;Me.map(n)<e?a=n:t=n}return(a+t)/2}let te=0,Le=0;function bo(){const e=Math.min(Z?1.5:1.75,window.devicePixelRatio||1),a=Math.max(1,Math.round(se.clientWidth*e)),t=Math.max(1,Math.round(se.clientHeight*e));a===te&&t===Le||(te=a,Le=t,ne.setPixelRatio(1),ne.setSize(a,t,!1),X.aspect=a/t,ot?.resize(a,t),Ue?.resize(a,t),dt?.resize(a,t))}const At=new Pe,le={amount:0,time:0,w:1,h:1,hx:0,hy:0,r:1,dark:0,erode:0,dim:0,fly:0,neon:0,done:!1,textL:1,px:1};function gl(e,a){if(le.amount=h(1.5,2.4,e)*(_e?1:1-h(3.8,4.4,e)),le.dark=0,le.erode=Aa,le.dim=.55*h(0,.35,de)*(1-$e),le.fly=Ft,le.neon=J.neon||0,le.done=!!_e&&Ft>=1,le.textL=Z?1:.45,le.px=te/(se.clientWidth||te),le.amount>.002){const t=ge(O.lat,O.lon);At.set(t[0],t[1],t[2]).project(X),le.hx=(At.x*.5+.5)*te,le.hy=(At.y*.5+.5)*Le;const o=Ee/(111.32*Math.cos(O.lat*Math.PI/180)),n=ge(O.lat,O.lon+o);At.set(n[0],n[1],n[2]).project(X),le.r=Math.max(.33*Le,Math.abs((At.x*.5+.5)*te-le.hx))}le.time=a,le.w=te,le.h=Le,at.update(le)}function _o(e,a){if(de=_e?Math.min(1,Math.max(0,(e-tt[0])/(tt[1]-tt[0]))):0,ft=h(.6,.9,de),Aa=Math.pow(Math.min(1,de/jt),.55),Ft=Math.min(1,Math.max(0,(de-jt)/(1-jt))),$e=h(.6,.95,de),ca=h(.65,1,de),Tt(e,U),_e){Pa(e,U);const l=sl();if(!(e<=he[0]))if(e<=he[1]){fe.x0===void 0&&(fe.x0=ya(0,he[0],wa));const r=fe.x0+(fe.goal-fe.x0)*h(he[0],he[1],e);let g=0,w=l*1.3;for(let m=0;m<22;m++){const _=(g+w)/2;ya(_,e,wa)>r?g=_:w=_}U.lon+=(g+w)/2}else{U.lat=fe.lat,U.lon=fe.lon+l;const r=h(he[1],7.3,e);U.sx=fe.sx+(1.3-fe.sx)*r,U.sy=fe.sy+(.15-fe.sy)*r}}be.spin&&(U.lon+=be.spin);const t=0;io(U.lat,U.lon,U.d,U.tilt,U.head,Ye,Kt,qt),X.position.set(Ye[0],Ye[1],Ye[2]),X.up.set(Kt[0],Kt[1],Kt[2]),X.lookAt(qt[0],qt[1],qt[2]);const o=Math.hypot(Ye[0],Ye[1],Ye[2])-V;X.near=Math.max(.02,U.d*.02),X.far=Math.max(U.d*4,U.d+2.2*V)+2e5,X.updateProjectionMatrix(),X.projectionMatrix.elements[8]=-U.sx,X.projectionMatrix.elements[9]=-U.sy,X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.updateMatrixWorld();const n=Le/(2*Math.tan(X.fov*Math.PI/360)),s=xe?1-h(30,140,U.d):1-h(14,42,U.d);if(ee.time=a,ee.asm=h(1.85,3.05,e),ee.wave=1-h(1.9,3,e),ee.map=h(2.45,3.2,e),ee.houses=h(2.55,3.45,e),ee.marks=h(3,3.5,e)*(1-h(13,24,U.d)),ee.points=1-.45*h(3,4,e),ee.alpha=s*(1-$e),ee.focal=n,ee.resW=te,ee.resH=Le,ee.far=Math.max(14,U.d*2.6),ee.hideTech=!!xe,ee.hideMarks=N==="ink",mt?.update(ee),_e){Object.assign(J,ee),J.hideTech=!1,J.hideMarks=!1,J.asm=1,J.wave=0,J.scr=at&&Ft<1?1:0,J.dust=Aa,J.fly=Ft,J.neon=h(.72,.86,de),J.cloudA=Math.max(.001,h(1.5,2.4,e)),J.cloudTex=at?.texture,de<=0&&(Va=a);const l=a-Va;J.driftX=Math.min(.035,l*(.035/1.6)*2*Le/te),J.driftY=-Math.min(.006,l*(.006/1.6)*2),J.dustL=Z?1:.45,J.map=h(.7,1,de),J.camera=X,J.houses=h(.75,1,de),J.marks=h(.88,1,de)*(1-h(13,24,U.d)),J.points=1-.45*h(.9,1,de),J.alpha=(1-h(14,42,U.d))*(de>0?1:0),_e.update(J)}at&&gl(e,a);const c=Math.max(.03,U.d*.0055),p=Math.log2(c),f=Math.floor(p);E.s0=Math.pow(2,f),E.sc=c,E.lod=p-f;const A=xe?h(3.7,4.5,e):h(2.8,3.8,e)*.6+h(4,4.6,e)*.4,i=_e?h(he[1]+.05,6.75,e):h(7.2,7.95,e);if(E.alpha=A*(1-i),E.spin=be.spin+Y.lon*t,E.sunLat=Y.lat*t,E.space=h(5.2,6.4,e),E.atm=h(5,6.2,e),E.markR=Math.max(.6,o*.012),E.mark=N==="ink"?0:h(18,50,U.d)*(1-i),E.time=a,E.night=N==="mix"?h(5.6,6.6,e):0,E.photo=N==="photo"?h(120,420,U.d):0,E.clouds=N==="photo"?h(5.4,6.6,e)*.85:0,E.lines=h(4.1,4.9,e)*(1-i),E.rivers=h(4.1,4.7,e)*(1-h(5.6,6.2,e))*(1-E.photo),E.cz=h(4.3,5,e)*(1-i),E.stars=N==="light"||xe?0:h(5.6,6.8,e),E.px=Math.min(2,ne.getPixelRatio()*(te/se.clientWidth||1)),E.czk=xe?h(40,260,U.d):h(120,520,U.d),E.hole=s*ee.map,E.holeR=Ee,E.scrimLeft=Z?0:N==="light"?.6:.72,E.scrimAll=Z?N==="light"?.45:.5:0,xe&&(E.scrimLeft=0,E.scrimAll=0),Ue){const l=h(4.9,6,e),r=Math.exp(Math.log(5e3)+(Math.log(15)-Math.log(5e3))*l);E.revMode=0,E.revR=r,E.revA=1-l,Object.assign(ue,E),ue.revMode=0,ue.revA=l,ue.alpha=l>.001?E.alpha*l:0,E.alpha*=1-h(.85,1,l),ue.space=0,ue.stars=0,ue.hole=0,ue.photo=1,ue.clouds=h(5.4,6.6,e)*.7,ue.night=0,ue.rivers=0,ue.lines=E.lines*.5*l,ue.veil=.5*(1-h(5.9,6.7,e)),ue.cz=E.cz*l,ue.scrimLeft=0,ue.scrimAll=0,Ue.update(ue,X),E.revRibbons=1-l}else E.revRibbons=1;if(dt){Object.assign(oe,E);const l=h(2.8,3.8,e)*.6+h(4,4.6,e)*.4;oe.alpha=l*(1-i)*ca*h(.5,1,ft),oe.haloAlpha=l*(1-h(he[1]+.3,7,e))*ca*h(.5,1,ft),oe.mark=h(18,50,U.d)*(1-i),oe.markBlue=h(Xe[0],Xe[1],e),oe.markGrow=1+.75*(1-h(Xe[0],6,e)),oe.stars=h(5.6,6.8,e)*(1-h(he[1]+.3,7,e)),oe.czk=h(120,520,U.d),oe.hole=(1-h(14,42,U.d))*ee.map,oe.holeR=7,oe.scrimLeft=(Z?0:.72)*ft,oe.scrimAll=(Z?.5:0)*ft,oe.photo=0,oe.clouds=0,oe.night=0,oe.spin=0,oe.sunLat=0,oe.revRibbons=1,dt.update(oe,X),Yt&&(je.alpha=h(Xe[0]+.6*(Xe[1]-Xe[0]),Xe[1],e)*(1-i),je.textL=Z?1:.3,je.time=a,je.d=U.d,je.w=te,je.h=Le,je.dpr=te/(se.clientWidth||te),Yt.update(je)),E.alpha*=1-$e}ot?.update(E,X),xe&&Al(e,a,n,o,s,i)}const Ca=new Set,Ct={log:null,measures:0},wl=e=>{Ca.has(e.name)&&(e.visible=!1)};let Xa=0;const k={flat:0,pre:0,neonT:0,neonP:0,grow:0,ft:0,time:0,asm:0,wave:1,focal:1,far:30,dpr:1,w:1,h:1,cssW:1,cssH:1,bg:0,city:0,alpha:1,cam:null,fadeKm:100,veil:.9,sphere:{al:[0,0,0,0],ag:0,draw:[1,1,1,1],reg:[0,0],reach:0}},yl={lines:[.62,.55,.95,.5],ink:[.85,.7,1,.65]};function Al(e,a,t,o,n,s){k.time=a,k.asm=ee.asm,k.wave=ee.wave,k.focal=t,k.far=ee.far,k.w=te,k.h=Le,k.cssW=se.clientWidth||1,k.cssH=se.clientHeight||1,k.dpr=te/k.cssW,k.bg=h(-.6,.9,e),k.city=N==="ink"?h(1.9,2.8,e):N==="lines"?h(3,3.5,e):h(2.4,3.3,e),k.alpha=n*(1-$e),k.cam=X.position,k.camera=X,k.fadeKm=Math.max(1,o*.05),k.veil=0;{const l=N==="ink"?-.5:0;k.flat=h(1.55,2.25,e),k.pre=1-h(1,1.45,e);const r=N==="ink"&&g0()?1:0;k.neonT=r*(1-h(1.6,2.3,e)),k.neonP=r*(1-h(3.9,4.5,e))*(1-.6*k.city),k.neonP*=1-$e,k.asm=h(2+l,3.05+l,e),k.grow=N==="lines"?h(2.95,3.6,e):h(2.6+l,3.45+l,e),k.hatch=h(2.85+l,3.4+l,e),k.paint=h(2.75+l,3.15+l,e),E.inkH=h(4.7,5.4,e),E.inkP=h(4.55,5.1,e),k.ft+=Math.max(0,a-Xa)*(1-.9*k.flat)*(N==="lines"&&Sa?.5:1);const g=h(3.3,4,e)*(1-h(5.8,6.5,e)),w=h(4.3,4.9,e),m=N==="ink"?h(110,220,U.d):1,_=1-$e;k.sphere.reg[0]=.55*g*m*(1-.6*w)*_,k.sphere.reg[1]=.8*g*m*(1-.45*w)*_,k.sphere.reach=Math.exp(Math.log(.004)+(Math.log(.45)-Math.log(.004))*h(3.35,5.2,e))}Xa=a;const c=yl[N],p=h(3.8,4.4,e)*(1-s)*(1-$e),f=1-h(5.6,6.3,e),A=E.revRibbons??1,i=N==="ink"?h(500,1100,U.d):1;k.sphere.al[0]=c[0]*p*A*i,k.sphere.al[1]=c[1]*p*A*i,k.sphere.al[2]=c[2]*p,k.sphere.al[3]=c[3]*p*f*A*i,k.sphere.ag=N==="lines"?.32*h(5.4,6.4,e)*(1-s):0,k.sphere.draw[0]=h(3.9,5.4,e),k.sphere.draw[1]=h(4,5.2,e),k.sphere.draw[2]=h(3.9,4.6,e),k.sphere.draw[3]=h(3.85,4.5,e),xe.update(k)}let ba=-1;function bl(e,a=e>=.5){const t=Math.round(e*100)/100,o=document.documentElement;o.classList.toggle("earth-night",a),t!==ba&&(ba=t,o.style.setProperty("--earth-dark",String(t)))}let Lt=-1,Ya=-1,Mo=!1,Za=performance.now();function Fo(){if(!Me||!mt||!ot)return;const e=window.scrollY||0,a=innerHeight,t=ut?1:h(Me.start-.55*a,Me.start+.05*a,e),o=t.toFixed(3);if(se.style.opacity!==o&&(se.style.opacity=o),t<=.001)return;bo();const n=ut?po:Ao(e);ut?(be.spin=0,be.leave=0):pl(e);const s=ut?0:qa!==null?Number(qa):(performance.now()-ul)/1e3,c=performance.now();C0(Math.min(.1,(c-Za)/1e3),Mo&&se.style.opacity>.5),Za=c,!(ut&&n===Ya&&e===Lt&&!Y.dirty)&&(Ya=n,Lt=e,_o(n,s),_e&&bl(Math.max(ft,h(0,.4,de)),h(.08,.2,de)>.5),Ct.log&&Ct.log.push([performance.now(),e,n,U.d,U.tilt,U.head]),Ca.size&&Ce.traverse(wl),at?.prerender(ne),ne.render(Ce,X))}async function _l(){const e=Z?256:512,a=(x,G)=>Ko(x,{srgb:G,renderer:ne}),t=[a("land.webp"),a("europe.webp"),a("pardubice.webp",!1)];(N==="photo"||ct==="photo")&&t.push(a("day.webp",!0),a("day-eu.webp",!0),a("clouds.webp"),a("day-ce.webp",!0)),N==="mix"&&t.push(a("night.webp",!0),a("night-eu.webp",!0));const[o,n,s,c,p]=await Promise.all([Promise.all(t),jo(e),$o(),qo(),fetch("/assets/map/pardubice.json").then(x=>x.json())]),[f,A,i,l,r,g,w]=o;if(!Mt.includes(N))for(const x of[f,A])x.generateMipmaps=!1,x.minFilter=St;const m=Object.values(p.проекты||{});mt=Ga({luma:n,lumaSize:e,houses:s,projects:m},i,{side:Z?128:256,field:24,lite:Z,light:N==="light"||Mt.includes(N)}),N==="ink"&&ga&&(_e=Ga({luma:n,lumaSize:e,houses:s,projects:m},i,{side:Z?128:256,field:24,lite:Z,light:!1,glow:!0}));let _=null,S=null;if(N==="ink"){const[x,G,q,T,I,H,v]=await Promise.all([a("land-dem.webp"),a("land-a.webp"),a("land-b.webp"),a("land-far.webp"),a("land-hor.webp"),a("neon-near.webp"),a("neon-far.webp")]);for(const y of[x,G,q,T,I,H,v])y.wrapS=y.wrapT=Ma,y.flipY=!1,y.needsUpdate=!0;q.magFilter=Nt,q.minFilter=Nt,q.generateMipmaps=!1;for(const y of[x,T,I,H,v])y.magFilter=Nt,y.minFilter=Nt,y.generateMipmaps=!1;_={dem:x,a:G,b:q,far:T,hor:I,neonN:H,neonF:v},S=(await(await fetch(Ve+"land-routes.json")).json()).routes,o.push(x,G,q,T,I,H,v)}Mt.includes(N)&&(xe=await x0(N,i,{lite:Z,houses:s,pdb:O,land:_,routes:S}));const D=new ha,W=ro(O.lat,O.lon),K=ge(O.lat,O.lon);D.makeBasis(new Pe(...W.e),new Pe(...W.u),new Pe(-W.n[0],-W.n[1],-W.n[2])).setPosition(K[0],K[1],K[2]),mt.group.matrixAutoUpdate=!1,mt.group.matrix.copy(D),_e&&(_e.group.matrixAutoUpdate=!1,_e.group.matrix.copy(D));const C={land:f,eu:A};(N==="photo"||ct==="photo")&&Object.assign(C,{day:l,dayEu:r,clouds:g,dayCe:w}),N==="mix"&&Object.assign(C,{night:l,nightEu:r}),ot=ia(N,C,c,{pdb:O,lite:Z}),ct&&(Ue=ia(ct,C,c,{pdb:O,lite:Z}),Ue.group.traverse(x=>{x.isGroup||(x.renderOrder+=.5)})),Ce.add(ot.group,mt.group),Ue&&Ce.add(Ue.group),_e&&(dt=ia("dots",C,c,{pdb:O,lite:Z}),Ce.add(dt.group,_e.group),Yt=il(O),Ce.add(Yt.group)),xe&&(xe.cityGroup.matrixAutoUpdate=!1,xe.cityGroup.matrix.copy(D),Ce.add(xe.cityGroup,xe.sphereGroup,xe.veil),N==="ink"&&(at=b0(),Ce.add(at.mesh))),te=0,bo(),ot.resize(te,Le),Ue?.resize(te,Le),dt?.resize(te,Le);for(const x of o)ne.initTexture(x);Ce.traverse(x=>{x.visible=!0}),ne.compile(Ce,X),_o(ut?po:0,0),(N==="photo"||ct==="photo")&&Ml(),window.__cfigEarth={hide:Ca,dbg:Ct,grab:Y,grabProbe:P0,yOf:xl,look:N,get t(){return Ao(scrollY)},knots:()=>Me,P:U,renderer:ne,scene:Ce,clouds:le,dig:()=>[tt[0],tt[1],jt],pdbX:()=>{X.updateMatrixWorld();const x=ge(O.lat,O.lon);return Pt.set(x[0],x[1],x[2]).project(X),{x:(Pt.x*.5+.5)*se.clientWidth,mid:ho(),spin:fe?.v}}}}let Ja=null;function Ml(){if(Ja)return;const e=Z?"4k":ne.capabilities.maxTextureSize>=8192?"8k":"4k";Ja=Promise.all([ka(`day-${e}.webp`,{srgb:!0,renderer:ne}),ka(`clouds-${e}.webp`,{red:!0,renderer:ne})]).then(([a,t])=>{ne.initTexture(a),ne.initTexture(t);const o=new Set;for(const n of[ot,Ue])for(const s of n?.setPhoto(a,t)||[])o.add(s);for(const n of o)n?.dispose();Ct.photoHi=e}).catch(a=>console.warn("[cfig] резкая Земля не подгрузилась:",a))}function _a(){Y.on=!1,Mo=!1,document.documentElement.classList.remove("earth-grab","earth-grabbing"),Zt&&(no.ticker.remove(Fo),Zt=0),se&&(se.style.opacity="0")}function Cl(){if(N=Oo(),ct=null,document.body.dataset.route!==sa||!N){_a();return}if(!ne){if(se=hl(),!se)return;Z=Math.min(innerWidth,innerHeight)<720||matchMedia("(pointer: coarse)").matches;try{ne=new No({canvas:se,alpha:!0,antialias:!Z,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{ne=null;return}ne.setClearColor(0,0),ne.sortObjects=!0,Ce=new oo,X=new lo(35,1,.05,1e6),Tt=N==="ink"?ml(Z?fl:yo,Z):_t(Mt.includes(N)?Z?cl:wo:Z?xo:Mt.includes(N)?go:Qt),ja=_l().catch(e=>{console.warn("[cfig] Земля не поднялась:",e),_a()}),addEventListener("resize",()=>{fa(),Lt=-1},{passive:!0}),new ResizeObserver(()=>{document.body.dataset.route===sa&&(fa(),Lt=-1)}).observe(document.documentElement)}fa(),Lt=-1,ba=-1,ja.then(()=>{xe?.collect(),!Zt&&document.body.dataset.route===sa&&(no.ticker.add(Fo),Zt=1)})}document.addEventListener("astro:before-preparation",e=>{se&&e.to&&new URL(e.to).pathname!==location.pathname&&_a()});export{Cl as init};
