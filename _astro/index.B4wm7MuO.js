import{T as m0,a as ko,N as da,n as Aa,ag as $t,L as pa,o as Je,aN as zo,ah as Ia,aO as d0,G as Ft,V as ve,M as xe,c as ha,b as ae,O as rt,i as Ee,j as At,aD as no,D as Ht,a5 as $e,g as J,aP as Oa,B as Se,e as B,aQ as p0,S as ba,k as Eo,l as Ga,aR as Ho,aS as h0,f as Ve,P as Za,aT as x0,aH as La,a7 as xa,Q as ro,aU as g0,s as w0,h as y0,A as A0,aE as No,d as Vt,X as Ua,aV as Wa,W as b0,aW as Qt}from"./three.module.CforAgrD.js";import{P as Kt,e as M0}from"./Lab.astro_astro_type_script_index_0_lang.Bf3DnYpR.js";import{i as Io,q as S0}from"./Base.astro_astro_type_script_index_0_lang.DjyTVt6c.js";import{a as R0,L as F0,b as _0}from"./LineSegments2.Bt4EYbhq.js";import"./router.UeToN5xW.js";const X=6371,j={lat:50.039378,lon:15.77521},Be=3.75,It=Math.PI/180;function De(e,a,t=X,o=[0,0,0]){const l=e*It,s=a*It,u=Math.cos(l);return o[0]=t*u*Math.sin(s),o[1]=t*Math.sin(l),o[2]=t*u*Math.cos(s),o}function Oo(e,a){const t=e*It,o=a*It,l=Math.sin(t),s=Math.cos(t),u=Math.sin(o),g=Math.cos(o);return{e:[g,0,-u],u:[s*u,l,s*g],n:[-l*u,s,-l*g]}}function Ma(e,a){const t=e.length,o=new Float64Array(t-1),l=new Float64Array(t);for(let s=0;s<t-1;s++)o[s]=(a[s+1]-a[s])/(e[s+1]-e[s]);l[0]=o[0],l[t-1]=o[t-2];for(let s=1;s<t-1;s++)l[s]=o[s-1]*o[s]<=0?0:(o[s-1]+o[s])/2;for(let s=0;s<t-1;s++){if(o[s]===0){l[s]=0,l[s+1]=0;continue}const u=l[s]/o[s],g=l[s+1]/o[s],d=u*u+g*g;if(d>9){const v=3/Math.sqrt(d);l[s]=v*u*o[s],l[s+1]=v*g*o[s]}}return s=>{if(s<=e[0])return a[0];if(s>=e[t-1])return a[t-1];let u=0;for(;s>e[u+1];)u++;const g=e[u+1]-e[u],d=(s-e[u])/g,v=d*d,c=v*d;return(2*c-3*v+1)*a[u]+(c-2*v+d)*g*l[u]+(-2*c+3*v)*a[u+1]+(c-v)*g*l[u+1]}}function Bt(e){const a=e.map(l=>l.t),t=Object.keys(e[0]).filter(l=>l!=="t"),o={};for(const l of t){const s=e.map(u=>l==="d"?Math.log(u[l]):u[l]);o[l]=Ma(a,s)}return(l,s)=>{for(const u of t)s[u]=u==="d"?Math.exp(o[u](l)):o[u](l);return s}}function Go(e,a,t,o,l,s,u,g){const d=Oo(e,a);De(e,a,X,g);const v=o*It,c=l*It,i=d.n[0]*Math.cos(c)+d.e[0]*Math.sin(c),r=d.n[1]*Math.cos(c)+d.e[1]*Math.sin(c),x=d.n[2]*Math.cos(c)+d.e[2]*Math.sin(c),b=Math.cos(v)*t,p=Math.sin(v)*t;s[0]=g[0]+d.u[0]*b-i*p,s[1]=g[1]+d.u[1]*b-r*p,s[2]=g[2]+d.u[2]*b-x*p,u[0]=i,u[1]=r,u[2]=x}const mt="/assets/earth/",ea={lon0:-12,lon1:44,lat0:34,lat1:62},ta={lon0:9.5,lon1:22.5,lat0:46.5,lat1:53.5},T0=new m0;function L0(e,{srgb:a=!1,renderer:t=null}={}){return new Promise((o,l)=>{T0.load(mt+e,s=>{s.colorSpace=a?ko:da,s.wrapS=Aa,s.wrapT=$t,s.minFilter=pa,s.magFilter=Je,t&&(s.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy())),o(s)},void 0,l)})}function io(e,{srgb:a=!1,red:t=!1,renderer:o=null}={}){const l=new zo;return l.setOptions({imageOrientation:"flipY",premultiplyAlpha:"none"}),new Promise((s,u)=>{l.load(mt+e,g=>{const d=new Ia(g);d.colorSpace=a?ko:da,d.flipY=!1,t&&(d.format=d0),d.wrapS=Aa,d.wrapT=$t,d.minFilter=pa,d.magFilter=Je,o&&(d.anisotropy=Math.min(8,o.capabilities.getMaxAnisotropy())),d.needsUpdate=!0,s(d)},void 0,u)})}async function C0(e=.6){const a=await(await fetch(mt+"lines.bin")).arrayBuffer(),t=new DataView(a);let o=0;const l=t.getUint32(o,!0);o+=4;const s=[],u=[0,0,0];for(let g=0;g<l;g++){const d=t.getUint32(o,!0),v=t.getUint32(o+4,!0);o+=8;const c=new Uint32Array(d);for(let p=0;p<d;p++)c[p]=t.getUint32(o,!0),o+=4;const i=new Float32Array(v),r=new Float32Array(v);for(let p=0;p<v;p++)i[p]=t.getInt16(o,!0)/180,r[p]=t.getInt16(o+2,!0)/180,o+=4;const x=new Float32Array((v-d)*6);let b=0;for(let p=0;p<d;p++){const M=c[p],z=p+1<d?c[p+1]:v;for(let N=M;N<z-1;N++)De(r[N],i[N],X+e,u),x[b++]=u[0],x[b++]=u[1],x[b++]=u[2],De(r[N+1],i[N+1],X+e,u),x[b++]=u[0],x[b++]=u[1],x[b++]=u[2]}s.push(x.subarray(0,b))}return s}async function P0(e=512){const a=await(await fetch(mt+"pardubice.webp")).blob(),t=await createImageBitmap(a,{resizeWidth:e,resizeHeight:e,resizeQuality:"medium"}),o=document.createElement("canvas");o.width=e,o.height=e;const l=o.getContext("2d",{willReadFrequently:!0});l.drawImage(t,0,0);const s=l.getImageData(0,0,e,e).data,u=new Float32Array(e*e);for(let g=0;g<u.length;g++)u[g]=s[g*4+1]/255;return t.close?.(),u}async function D0(){const e=await(await fetch("/assets/map/pardubice-houses.bin")).arrayBuffer(),a=new DataView(e),t=a.getUint32(0,!0);let o=0,l=4;for(let r=0;r<t;r++){const x=a.getUint16(l,!0);o+=x,l+=6+x*4}const s=new Uint32Array(t),u=new Uint16Array(t),g=new Float32Array(t),d=new Float32Array(t),v=new Float32Array(o),c=new Float32Array(o);l=4;let i=0;for(let r=0;r<t;r++){const x=a.getUint16(l,!0);u[r]=x,g[r]=a.getUint8(l+3)/2,d[r]=a.getUint16(l+4,!0),l+=6,s[r]=i;for(let b=0;b<x;b++)v[i]=a.getUint16(l,!0)/65535,c[i]=a.getUint16(l+2,!0)/65535,l+=4,i++}return{n:t,start:s,cnt:u,h:g,area:d,u:v,v:c}}const Ja=`
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
`,lt=3.75,Ce={h:13,n:1024,lo:195,hi:365,far:{h:48,n:1024,lo:180,hi:1150},hor:{h:60,n:512,lo:180,hi:1610,cz:-50}},et=24,Qa=(()=>{try{return new URLSearchParams(location.search).get("fx")==="scan"?1:0}catch{return 0}})(),Uo=`
#define FX ${Qa}
#define SCAN_P 8.0
#define SCAN_D 3.6
`,k0={INK1:"#111e2d",INK2:"#29455c",INK3:"#4d677d",BLUE:"#2A6DAA",BLUE2:"#3f9be0",PALE:"#5FA8E0",GOLD:"#8a5f10",PAPER:"#d3d9de"},z0=e=>{const a=parseInt(e.slice(1),16),t=o=>(o/255).toFixed(4);return`vec3(${t(a>>16)}, ${t(a>>8&255)}, ${t(a&255)})`},Ot=Object.entries(k0).map(([e,a])=>`#define C_${e} ${z0(a)}`).join(`
`),Sa=`
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
`,qe={blending:At,blendSrc:Ee,blendDst:rt,blendSrcAlpha:Ee,blendDstAlpha:rt},Wo=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm2(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,eo=`
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
`,E0=e=>`
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
${Uo}
#if FX == 1
varying float vZf;
#endif
#endif
${eo}
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
`,H0=e=>`
#define ${e}
${Ot}
uniform float uTime;
uniform float uAlpha;
uniform float uBg;
uniform float uAsm;
uniform float uPass;
${Sa}
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
${Uo}
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
${Wo}
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
`,Bo=()=>`
#define LAND_H ${Ce.h.toFixed(1)}
#define LAND_N ${Ce.n.toFixed(1)}
#define DEM_LO ${Ce.lo.toFixed(1)}
#define DEM_HI ${Ce.hi.toFixed(1)}
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
#define FAR_H ${Ce.far.h.toFixed(1)}
#define FAR_N ${Ce.far.n.toFixed(1)}
#define FAR_LO ${Ce.far.lo.toFixed(1)}
#define FAR_HI ${Ce.far.hi.toFixed(1)}
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
`,so=e=>`
#define ${e}
uniform float uRelief;
uniform float uCity;
uniform float uPre;
varying vec2 vP;
varying float vElev;
varying float vDepth;
#ifdef P_INK
${Bo()}
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
`,Ko=`
#define HOR_H ${Ce.hor.h.toFixed(1)}
#define HOR_N ${Ce.hor.n.toFixed(1)}
#define HOR_LO ${Ce.hor.lo.toFixed(1)}
#define HOR_HI ${Ce.hor.hi.toFixed(1)}
#define HOR_CZ ${Ce.hor.cz.toFixed(1)}
#define FAR_EDGE ${Ce.far.h.toFixed(1)}
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
`,uo=`
${Ko}
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
${Ot}
${Ko}
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
`,N0=`
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
`,I0=e=>`
#define ${e}
#define FAB_A ${e==="P_LINES"?"0.22":"0.1"}
#define FAB_C C_INK2
${Ot}
uniform sampler2D uMap;
uniform float uTime;
uniform float uBg;
uniform float uCity;
uniform float uAlpha;
uniform float uHatch;
${Sa}
uniform sampler2D uLA;
uniform sampler2D uLB;
uniform float uRelief;
uniform float uPre;
#define PRE_G 0.4
varying vec2 vP;
varying float vElev;
varying float vDepth;
${e==="P_INK"?Bo():""}
${Wo}
${Ja}
${e==="P_INK"?N0:""}

void main() {
  vec2 p = vP;
  float rr = length(p);
  float fade = 1.0 - smoothstep(9.0, 15.0, rr);
#ifdef P_INK
  // Земля ink — до горизонта (дальний рельеф ±FAR_H км).
  fade = 1.0 - smoothstep(0.8, 0.97, max(abs(p.x), abs(p.y)) / FAR_H);
#endif
  vec2 muv = p / ${(lt*2).toFixed(1)} + 0.5;
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
`,O0=e=>`
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
${eo}
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
`,G0=e=>`
#define ${e}
${Ot}
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
`,ga=24,U0=`
varying vec2 vPx;
uniform vec2 uRes;
void main() { vPx = (position.xy * 0.5 + 0.5) * uRes; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,W0=`
uniform vec4 uRects[${ga}];
uniform int uN;
uniform float uFeather;
uniform float uStrength;
uniform vec2 uRes;
varying vec2 vPx;
void main() {
  float a = 0.0;
  for (int i = 0; i < ${ga}; i++) {
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
`;function B0(){const e=new Se;return e.setAttribute("position",new B(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}async function K0(){const e=await(await fetch(mt+"streets.bin")).arrayBuffer(),a=new DataView(e);let t=0;const o=a.getUint32(t,!0);t+=4;const l=[];for(let s=0;s<o;s++){const u=a.getUint32(t,!0),g=a.getUint32(t+4,!0);t+=8;const d=[];for(let i=0;i<u;i++)d.push(a.getUint32(t,!0)),t+=4;const v=new Float32Array(g*2);for(let i=0;i<g;i++)v[i*2]=(a.getInt16(t,!0)/16384-.5)*lt*2,v[i*2+1]=(a.getInt16(t+2,!0)/16384-.5)*lt*2,t+=4;const c=[];for(let i=0;i<u;i++){const r=d[i],x=i+1<u?d[i+1]:g,b=[];for(let p=r;p<x;p++)b.push([v[p*2],v[p*2+1]]);c.push(b)}l.push(c)}return l}async function q0(e){const a=await(await fetch(mt+"lines.bin")).arrayBuffer(),t=new DataView(a);let o=0;const l=t.getUint32(o,!0);o+=4;const s=[];for(let u=0;u<l;u++){const g=t.getUint32(o,!0),d=t.getUint32(o+4,!0);o+=8;const v=[];for(let r=0;r<g;r++)v.push(t.getUint32(o,!0)),o+=4;const c=new Float32Array(d*2);for(let r=0;r<d;r++)c[r*2]=t.getInt16(o,!0)/180,c[r*2+1]=t.getInt16(o+2,!0)/180,o+=4;const i=[];for(let r=0;r<g;r++){const x=v[r],b=r+1<g?v[r+1]:d,p=[];for(let M=x;M<b;M++)p.push([c[M*2],c[M*2+1]]);i.push(qo(p,u===2?e*.2:e))}s.push(i)}return s}async function j0(e){const a=await(await fetch(mt+"region.bin")).arrayBuffer(),t=new DataView(a);let o=0;const l=t.getUint32(o,!0);o+=4;const s=[];for(let u=0;u<l;u++){const g=t.getUint32(o,!0),d=t.getUint32(o+4,!0);o+=8;const v=[];for(let r=0;r<g;r++)v.push(t.getUint32(o,!0)),o+=4;const c=[];for(let r=0;r<d;r++)c.push([t.getInt16(o,!0)/180,t.getInt16(o+2,!0)/180]),o+=4;const i=[];for(let r=0;r<g;r++)i.push(qo(c.slice(v[r],r+1<g?v[r+1]:d),e));s.push(i)}return s}function qo(e,a){if(e.length<3)return e;const t=new Uint8Array(e.length);t[0]=t[e.length-1]=1;const o=[[0,e.length-1]];for(;o.length;){const[l,s]=o.pop();let u=0,g=-1;const[d,v]=e[l],[c,i]=e[s],r=c-d,x=i-v,b=Math.hypot(r,x)||1e-9;for(let p=l+1;p<s;p++){const M=Math.abs((e[p][0]-d)*x-(e[p][1]-v)*r)/b;M>u&&(u=M,g=p)}u>a&&(t[g]=1,o.push([l,g],[g,s]))}return e.filter((l,s)=>t[s])}const $0=`
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
${eo}
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
`,V0=e=>`
#define ${e}
${Ot}
${Sa}
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
`,X0=`
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
`,Y0=`
${Ot}
${Sa}
uniform float uAlpha;
uniform float uHatch;
varying vec2 vUV;
varying float vSh;
varying float vA;
varying float vPx;
varying float vDel;
varying float vL;
varying float vV;
${Ja}
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
`;function Z0(e,a){const t=a?400:150,o=1.6/1e3;let l=0;for(let i=0;i<e.n;i++)e.area[i]>=t&&(l+=e.cnt[i]);const s=new Float32Array(l*4*4),u=new Float32Array(l*4*2),g=new Float32Array(l*4*2),d=new Float32Array(l*4*3);let v=0;for(let i=0;i<e.n;i++){if(e.area[i]<t)continue;const r=e.start[i],x=e.cnt[i],b=f=>(e.u[r+f]-.5)*lt*2,p=f=>(e.v[r+f]-.5)*lt*2;let M=0,z=0;for(let f=0;f<x;f++)M+=b(f),z+=p(f);M/=x,z/=x;const N=Math.max(3,e.h[i])*o,_=Math.hypot(M/lt,z/lt)/2,H=Math.min(1,_*2)*.8+i*7919%97/97*.2,L=Math.sqrt(e.area[i])/1e3;for(let f=0;f<x;f++){const R=(f+1)%x,I=b(f),k=p(f),E=b(R),G=p(R);let m=-(G-k),y=E-I;const C=Math.hypot(m,y)||1;m/=C,y/=C,m*((I+E)/2-M)+y*((k+G)/2-z)<0&&(m=-m,y=-y);for(let P=0;P<4;P++){const n=v*4+P;s.set([I,k,E,G],n*4),u.set([P&1,P>>1],n*2),g.set([m,y],n*2),d.set([N,H,L],n*3)}v++}}const c=new Se;return c.setAttribute("position",new B(new Float32Array(l*4*3),3)),c.setAttribute("aE",new B(s,4)),c.setAttribute("aC",new B(u,2)),c.setAttribute("aN",new B(g,2)),c.setAttribute("aHD",new B(d,3)),c.setIndex(Ra(l)),c}function J0(e,a){const t=a?300:80,o=1.6/1e3;let l=0;for(let r=0;r<e.n;r++)e.area[r]<t||(l+=e.cnt[r]*(e.area[r]>=300||e.h[r]>=11?2:1));const s=new Float32Array(l*4*4),u=new Float32Array(l*4*2),g=new Float32Array(l*4*4),d=new Float32Array(l*4);let v=0;const c=(r,x,b,p,M,z,N,_,H)=>{for(let L=0;L<4;L++){const f=v*4+L;s.set([r,x,b,p],f*4),u.set([M,z],f*2),g.set([L>>1,L&1?1:-1,N,_],f*4),d[f]=H}v++};for(let r=0;r<e.n;r++){if(e.area[r]<t)continue;const x=e.start[r],b=e.cnt[r],p=Math.max(3,e.h[r])*o;let M=0,z=0;for(let f=0;f<b;f++)M+=e.u[x+f],z+=e.v[x+f];M=(M/b-.5)*2,z=(z/b-.5)*2;const N=Math.min(1,Math.hypot(M,z))*.8+r*7919%97/97*.2,_=Math.sqrt(e.area[r])/1e3,H=f=>(e.u[x+f]-.5)*lt*2,L=f=>(e.v[x+f]-.5)*lt*2;for(let f=0;f<b;f++){const R=(f+1)%b;c(H(f),L(f),H(R),L(R),1,1,p,N,_)}if(e.area[r]>=300||e.h[r]>=11)for(let f=0;f<b;f++)c(H(f),L(f),H(f),L(f),0,1,p,N,_)}const i=new Se;return i.setAttribute("position",new B(new Float32Array(l*4*3),3)),i.setAttribute("aP",new B(s,4)),i.setAttribute("aY",new B(u,2)),i.setAttribute("aI",new B(g,4)),i.setAttribute("aSz",new B(d,1)),i.setIndex(Ra(l)),i}function Ra(e){const a=new Uint32Array(e*6);for(let t=0;t<e;t++){const o=t*4;a.set([o,o+1,o+2,o+2,o+1,o+3],t*6)}return new B(a,1)}function Q0(e,a){const{S:t,M:o}=a,l=[0,1,2,3,5],s=5.6,u=[];let g=0;for(const m of l)for(const y of e[m]){let C=[];for(const P of y)Math.hypot(P[0],P[1])<=s?C.push(P):(C.length>1&&u.push({l:m,pts:C}),C=[]);C.length>1&&u.push({l:m,pts:C})}for(const m of u){let y=0;for(let C=1;C<m.pts.length;C++)y+=Math.hypot(m.pts[C][0]-m.pts[C-1][0],m.pts[C][1]-m.pts[C-1][1]);m.len=y,g+=y}const d=Math.max(.2,g/5200),v=[],c=(m,y)=>{let C=0;for(let P=1;P<m.pts.length;P++){const n=m.pts[P-1],S=m.pts[P],w=Math.hypot(S[0]-n[0],S[1]-n[1]);if(C+w>=y||P===m.pts.length-1){const T=w>0?Math.min(1,(y-C)/w):0;return[n[0]+(S[0]-n[0])*T,n[1]+(S[1]-n[1])*T]}C+=w}return m.pts[m.pts.length-1]};for(const m of u){if(m.len<.03)continue;const y=Math.max(1,Math.round(m.len/d));for(let C=0;C<y;C++){const P=m.len*C/y,n=m.len*(C+1)/y,S=[];for(let D=0;D<o;D++)S.push(c(m,P+(n-P)*D/(o-1)));S[o-1][0]<S[0][0]&&S.reverse();let w=0,T=0;for(const D of S)w+=D[0],T+=D[1];v.push({l:m.l,pts:S,cx:w/o,cz:T/o})}}const i=et/(2*s),r=et/t,x=m=>{const y=Math.sin(m*12.9898)*43758.5453;return y-Math.floor(y)};for(const m of v){const y=Math.min(t-1,Math.max(0,Math.round((m.cz*i+et/2)/r-.5)));m.zl=-et/2+(y+.5)*r;let C=1/0,P=-1/0;for(const w of m.pts)C=Math.min(C,w[0]),P=Math.max(P,w[0]);const n=(C+P)/2*i,S=Math.max(.06,(P-C)/2*i);m.x0=n-S,m.x1=n+S,m.seed=x(y)}const b=new Set;if(a.look==="lines"){const m=new Map;for(const y of v)m.has(y.zl)||m.set(y.zl,[]),m.get(y.zl).push(y);for(const[y,C]of m){b.add(y),C.sort((n,S)=>n.x0+n.x1-(S.x0+S.x1));const P=C.map(n=>(n.x0+n.x1)/2);C.forEach((n,S)=>{n.x0=S===0?-et/2:(P[S-1]+P[S])/2,n.x1=S===C.length-1?et/2:(P[S]+P[S+1])/2,n.pts[0][0]>n.pts[n.pts.length-1][0]&&(n.pts=n.pts.slice().reverse())}),C.forEach((n,S)=>{const w=n.pts[0],T=n.pts[n.pts.length-1],D=C[S-1],U=C[S+1],$=D?[(D.pts[D.pts.length-1][0]+w[0])/2,(D.pts[D.pts.length-1][1]+w[1])/2]:w,Y=U?[(U.pts[0][0]+T[0])/2,(U.pts[0][1]+T[1])/2]:T;n.jd=[$[0],$[1],Y[0],Y[1]]})}}const p=96;for(let m=0;m<t;m++){const y=-et/2+(m+.5)*r,C=[];for(let P=0;P<p;P++)C.push([0,0]);v.push({l:b.has(y)?10:9,pts:C,cx:0,cz:0,x0:-et/2,x1:et/2,zl:y,seed:x(m),field:!0})}const M=v.length,z=v.reduce((m,y)=>m+y.pts.length-1,0),N=new Float32Array(z*4*4),_=new Float32Array(z*4*4),H=new Float32Array(z*4*2),L=new Float32Array(z*4*4),f=new Float32Array(z*4*4);let R=0;const I=new Set,k=(m,y)=>Math.round(m/.05)+","+Math.round(y/.05);for(const m of a.first||[])for(let y=1;y<m.pts.length;y++){const[C,P]=m.pts[y-1],[n,S]=m.pts[y];if(Math.max(Math.abs(C),Math.abs(P),Math.abs(n),Math.abs(S))>6)continue;const w=Math.ceil(Math.hypot(n-C,S-P)/.025);for(let T=0;T<=w;T++){const D=C+(n-C)*T/w,U=P+(S-P)*T/w;for(let $=-1;$<=1;$++)for(let Y=-1;Y<=1;Y++)I.add(k(D+$*.05,U+Y*.05))}}const E=m=>{if(!I.size||m.field)return!1;let y=0;for(const C of m.pts)I.has(k(C[0],C[1]))&&y++;return y>=m.pts.length*.6};for(const m of v){let y=Math.min(1,Math.hypot(m.cx,m.cz)/5.5);E(m)&&(y*=.3);const C=m.pts.length;for(let P=0;P<C-1;P++){const n=m.pts[P],S=m.pts[P+1];for(let w=0;w<4;w++){const T=R*4+w;N.set([n[0],n[1],S[0],S[1]],T*4),_.set([m.x0,m.x1,m.zl,y],T*4),H.set([P/(C-1),(P+1)/(C-1)],T*2),L.set([w>>1,w&1?1:-1,m.l,m.seed],T*4),m.jd&&f.set(m.jd,T*4)}R++}}const G=new Se;return G.setAttribute("position",new B(new Float32Array(z*4*3),3)),G.setAttribute("aT",new B(N,4)),G.setAttribute("aSU",new B(_,4)),G.setAttribute("aUU",new B(H,2)),G.setAttribute("aInfo",new B(L,4)),G.setAttribute("aJD",new B(f,4)),G.setIndex(Ra(z)),{geometry:G,K:M,gap:r}}function el(e,a,t,o){const l=e.map((p,M)=>p.map(z=>({kind:M,pts:z}))),s=[].concat(...l);t&&t.forEach((p,M)=>p.forEach(z=>s.push({kind:5+M,pts:z})));const u=o?De(o.lat,o.lon,1):[0,0,1];if(a==="lines"){for(let p=-80;p<=80;p+=10){const M=[];for(let z=-180;z<=180;z+=3)M.push([z,p]);s.push({kind:4,pts:M})}for(let p=-180;p<180;p+=15){const M=[];for(let z=-84;z<=84;z+=3)M.push([p,z]);s.push({kind:4,pts:M})}}let g=0;for(const p of s)g+=Math.max(0,p.pts.length-1);const d=new Float32Array(g*4*3),v=new Float32Array(g*4*3),c=new Float32Array(g*4*4),i=[0,0,0],r=[0,0,0];let x=0;for(const p of s){const M=p.pts.length;if(M<2)continue;const z=p.kind===2?1.2:.6;for(let N=0;N<M-1;N++){De(p.pts[N][1],p.pts[N][0],X+z,i),De(p.pts[N+1][1],p.pts[N+1][0],X+z,r);for(let _=0;_<4;_++){const H=x*4+_;d.set(i,H*3),v.set(r,H*3);let L=(N+(_>>1))/(M-1);if(p.kind>=5){const f=_>>1?r:i,R=Math.hypot(f[0],f[1],f[2]);L=Math.acos(Math.min(1,(f[0]*u[0]+f[1]*u[1]+f[2]*u[2])/R))*X/1e3}c.set([_>>1,_&1?1:-1,p.kind,L],H*4)}x++}}const b=new Se;return b.setAttribute("position",new B(d,3)),b.setAttribute("aA",new B(d,3)),b.setAttribute("aB",new B(v,3)),b.setAttribute("aInfo",new B(c,4)),b.setIndex(Ra(g)),b}const tl={lines:"P_LINES",ink:"P_INK"};async function al(e,a,t){const o=tl[e],l=t.lite,[s,u,g]=await Promise.all([K0(),q0(l?.08:.04),j0(.01)]),d=new Ft,v=new Ft,c=new ve(1,1),i={uTime:{value:0},uAsm:{value:0},uWave:{value:1},uFocal:{value:1e3},uFar:{value:30},uDpr:{value:1},uBg:{value:0},uAlpha:{value:1},uRes:{value:c},uFlat:{value:0},uFT:{value:0},uPaint:{value:0},uHoldA:{value:0},uBake:{value:0},uGround:{value:1},uTint:{value:0}},r=Q0(s,{S:l?110:200,M:l?12:16,look:e,first:e==="ink"?t.routes:null}),x=h=>new ae({vertexShader:E0(h),fragmentShader:H0(h),uniforms:{...i,uGap:{value:r.gap},uPass:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1,side:Ht,...qe}),b=x(e==="ink"?"P_INK":o),p=new xe(r.geometry,b);p.name="strands",p.frustumCulled=!1,p.renderOrder=2,d.add(p);let M=null,z=null;if(e==="ink"){const h=x(`P_INK
#define INK_FG`);h.uniforms={...b.uniforms,uPass:{value:0}},M=new xe(r.geometry,h),M.frustumCulled=!1,M.renderOrder=3,d.add(M);const ee=x(`P_INK
#define INK_FG`);ee.uniforms={...b.uniforms,uPass:{value:1}},z=new xe(r.geometry,ee),z.frustumCulled=!1,z.renderOrder=3,d.add(z)}const N=e==="ink",_=N?l?300:480:1,H=new ha(N?96:32,N?96:32,_,_);H.rotateX(-Math.PI/2);const L=new ae({vertexShader:so(o),fragmentShader:I0(o),uniforms:{uMap:{value:a},uTime:i.uTime,uBg:{value:0},uCity:{value:0},uAlpha:{value:1},uHoldA:i.uHoldA,uBake:i.uBake,uGround:i.uGround,uTint:i.uTint,uHatch:{value:0},uRelief:{value:1},uPre:{value:0},uNN:{value:t.land?.neonN||null},uNF:{value:t.land?.neonF||null},uNeonT:{value:0},uNeonP:{value:0},uDem:{value:t.land?.dem||null},uDemF:{value:t.land?.far||null},uLA:{value:t.land?.a||null},uLB:{value:t.land?.b||null}},transparent:!0,depthWrite:!1,depthTest:N,depthFunc:no,...qe}),f=new xe(H,L);let R=null;if(N){const h=new ae({vertexShader:so(o),fragmentShader:"void main() { gl_FragColor = vec4(0.0); }",uniforms:L.uniforms,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});R=new xe(H,h),R.name="washDepth",R.position.y=-.003,R.frustumCulled=!1,R.renderOrder=.9,d.add(R)}let I=null,k=null;if(N&&t.land?.hor){const h=new ha(Ce.hor.h*2,Ce.hor.h*2,t.lite?200:320,t.lite?200:320);h.rotateX(-Math.PI/2),h.translate(0,0,Ce.hor.cz);const ee={uHor:{value:t.land.hor},uHEx:{value:3.4},uCurv:{value:1},uPre:L.uniforms.uPre,uAlpha:L.uniforms.uAlpha,uBg:L.uniforms.uBg},ke=new ae({vertexShader:uo,fragmentShader:co(!0),uniforms:ee,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});k=new ae({vertexShader:uo,fragmentShader:co(!1),uniforms:ee,transparent:!0,depthWrite:!1,depthTest:!0,depthFunc:no,...qe});const me=new xe(h,ke);me.name="horDepth",me.frustumCulled=!1,me.renderOrder=.88,me.position.y=-.003,I=new xe(h,k),I.name="horizon",I.frustumCulled=!1,I.renderOrder=.95,I.position.y=-.003,I.userData.depth=me,d.add(me,I)}f.name="wash",f.position.y=-.003,f.frustumCulled=!1,f.renderOrder=1,d.add(f);let E=null,G=null;t.houses&&(G=new ae({vertexShader:$0,fragmentShader:V0(o),uniforms:{uGrow:{value:0},uFocal:i.uFocal,uFar:i.uFar,uDpr:i.uDpr,uRes:{value:c},uAlpha:{value:1},uHoldA:i.uHoldA,uBake:i.uBake,uGround:i.uGround,uTint:i.uTint,uHW:{value:.5}},transparent:!0,depthWrite:!1,depthTest:!1,side:Ht,...qe}),E=new xe(J0(t.houses,l),G),E.name="houses2",E.frustumCulled=!1,E.renderOrder=3,d.add(E));let m=null,y=null;e==="ink"&&t.houses&&(y=new ae({vertexShader:X0,fragmentShader:Y0,uniforms:{uGrow:G.uniforms.uGrow,uFocal:i.uFocal,uFar:i.uFar,uDpr:i.uDpr,uAlpha:G.uniforms.uAlpha,uHatch:{value:0},uHoldA:i.uHoldA,uBake:i.uBake,uGround:i.uGround,uTint:i.uTint},transparent:!0,depthWrite:!1,depthTest:!1,side:Ht,...qe}),m=new xe(Z0(t.houses,l),y),m.name="walls",m.frustumCulled=!1,m.renderOrder=2,d.add(m));const C=el(u,e,g,t.pdb),P={lines:[.7,.6,2.2,.55,.45],ink:[.65,.55,2.2,.5,0]}[e],n={uCam:{value:new J},uR:{value:X},uDpr:i.uDpr,uTime:i.uTime,uFadeKm:{value:100},uRes:{value:c},uW:{value:new $e(P[0],P[1],P[2],P[3])},uWG:{value:P[4]},uAl:{value:new $e},uAG:{value:0},uDraw:{value:new $e(1,1,1,1)},uW2:{value:new ve(.5,.65)},uAl2:{value:new ve},uReach:{value:0}},S=new ae({vertexShader:O0(o),fragmentShader:G0(o),uniforms:n,transparent:!0,depthWrite:!1,depthTest:!1,side:Ht,...qe}),w=new xe(C,S);w.name="sphere",w.frustumCulled=!1,w.renderOrder=-10,v.add(w);const T=Array.from({length:ga},()=>new $e),D=new ae({vertexShader:U0,fragmentShader:W0,uniforms:{uRects:{value:T},uN:{value:0},uFeather:{value:90},uStrength:{value:.85},uRes:{value:c}},transparent:!0,depthWrite:!1,depthTest:!1,blending:At,blendSrc:Oa,blendDst:rt,blendSrcAlpha:Oa,blendDstAlpha:rt});e==="lines"&&Qa===1&&(b.uniforms.uRects=D.uniforms.uRects,b.uniforms.uN=D.uniforms.uN),N&&(L.uniforms.uRects=D.uniforms.uRects,L.uniforms.uN=D.uniforms.uN);const U=new xe(B0(),D);U.frustumCulled=!1,U.renderOrder=95;let $=[];const Y="main :is(h2, h3, p, blockquote, .arrow-link, .coverflow__item, .leader__name, .direction__head)";function oe(){$=Array.from(document.querySelectorAll(Y))}return oe(),{cityGroup:d,sphereGroup:v,veil:U,collect:oe,textRects:{rects:D.uniforms.uRects,n:D.uniforms.uN},update(h){i.uTime.value=h.time,i.uAsm.value=h.asm,i.uWave.value=h.wave,i.uFocal.value=h.focal,i.uFar.value=h.far,i.uDpr.value=h.dpr,i.uBg.value=h.bg,i.uAlpha.value=h.alpha,i.uFlat.value=h.flat||0,i.uFT.value=h.ft??h.time,i.uHoldA.value=h.holdA||0,i.uBake.value=h.bake||0,i.uGround.value=h.ground??1,i.uTint.value=h.tint||0,E&&(G.uniforms.uGrow.value=h.grow||0,G.uniforms.uAlpha.value=h.alpha,E.visible=Math.max(h.alpha,h.holdA||0)>.002&&(h.grow||0)>.001),m&&(y.uniforms.uHatch.value=h.hatch||0,m.visible=E.visible&&(h.hatch||0)>.001),c.set(h.w,h.h),p.visible=Math.max(h.alpha,h.holdA||0)>.002,M&&(M.visible=z.visible=p.visible&&h.asm>.001),i.uPaint.value=h.paint||0,L.uniforms.uHatch.value=h.hatch||0,L.uniforms.uBg.value=h.bg,L.uniforms.uCity.value=h.city,L.uniforms.uPre.value=h.pre||0,L.uniforms.uNeonT.value=h.neonT||0,L.uniforms.uNeonP.value=h.neonP||0,I&&(I.visible=I.userData.depth.visible=f.visible&&(h.pre||0)>.001),L.uniforms.uAlpha.value=h.alpha,f.visible=Math.max(h.alpha,h.holdA||0)>.002&&h.bg+h.city>.002,R&&(R.visible=f.visible&&h.alpha>.5),n.uCam.value.copy(h.cam),n.uFadeKm.value=h.fadeKm,n.uAl.value.set(h.sphere.al[0],h.sphere.al[1],h.sphere.al[2],h.sphere.al[3]),n.uAG.value=h.sphere.ag,n.uDraw.value.set(h.sphere.draw[0],h.sphere.draw[1],h.sphere.draw[2],h.sphere.draw[3]),n.uAl2.value.set(h.sphere.reg?.[0]||0,h.sphere.reg?.[1]||0),n.uReach.value=h.sphere.reach||0,w.visible=h.sphere.al[0]+h.sphere.al[1]+h.sphere.al[2]+h.sphere.al[3]+h.sphere.ag+n.uAl2.value.x+n.uAl2.value.y>.002;let ee=0;const ke=h.w/h.cssW,me=h.h/h.cssH,de=18;for(let Ne=0;Ne<$.length&&ee<ga;Ne++){const ie=$[Ne];if(ie.style.visibility==="hidden"||(ie.classList.contains("coverflow__item")?parseFloat(ie.style.getPropertyValue("--op")):1)<.35)continue;const Re=ie.getBoundingClientRect();Re.width<2||Re.bottom<-40||Re.top>h.cssH+40||Re.right<0||Re.left>h.cssW||Re.width*Re.height>h.cssW*h.cssH*.5||(T[ee].set((Re.left-de)*ke,(h.cssH-Re.bottom-de)*me,(Re.right+de)*ke,(h.cssH-Re.top+de)*me),ee++)}D.uniforms.uN.value=ee,D.uniforms.uFeather.value=110*h.dpr,D.uniforms.uStrength.value=h.veil,U.visible=ee>0&&h.veil>.002}}}const ol=()=>new URLSearchParams(location.search).get("neon")!=="0",Ca=18;`${Ca}${Ca}${(X*1.006).toFixed(1)}${Ca}`;const ll=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 6; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,fo=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,nl=`
precision highp float;
uniform vec2 uRes;
uniform float uTime, uAmount, uDark;
uniform vec2 uHole;      // середина окна (центр Пардубиц на экране), пиксели
uniform float uHoleR;    // радиус окна, пиксели

${ll}
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
`,Ct=.35,rl=`
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
`;function il(e=null){const a=new Se;a.setAttribute("position",new B(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const t=new ae({vertexShader:fo,fragmentShader:nl,uniforms:{uRes:{value:new ve(1,1)},uTime:{value:0},uAmount:{value:0},uHole:{value:new ve},uHoleR:{value:1},uDark:{value:0}},depthWrite:!1,depthTest:!1,blending:p0}),o=new xe(a,t);o.frustumCulled=!1;const l=new ba;l.add(o);const s=new Eo,u=new Ga(1,1,{depthBuffer:!1,minFilter:Je,magFilter:Je,type:e?Ho:h0}),g=new ae({vertexShader:fo,fragmentShader:rl,uniforms:{tClouds:{value:u.texture},uRes:{value:new ve(1,1)},uTime:{value:0},uErode:{value:0},uDim:{value:0},uDimCol:{value:new Ve("#071b34")},uFly:{value:0},uNeon:{value:0},uCell:{value:5},uMapR:{value:100},uTextL:{value:1},uTop:{value:1e6},uTopF:{value:1},uWindK:{value:e?0:1},uDustK:{value:e?e.dustK??1:1},uMap:{value:new ve},uNeonCol:{value:new Ve("#78d0e6")}},transparent:!0,depthWrite:!1,depthTest:!1,...qe}),d=new xe(a,g);d.frustumCulled=!1,d.renderOrder=90,d.name="clouds";const v=t.uniforms,c=new Ve;let i=!1,r=null,x=0,b=0,p=null,M=null;const z=(_,H,L)=>{if(!_)return{x:H,v:0};const f=2/.6,R=f*L,I=1/(1+R+.48*R*R+.235*R*R*R),k=_.x-H,E=(_.v+f*k)*L;return{x:H+(k+E)*I,v:(_.v-f*E)*I}},N=new Za;return{mesh:d,update(_){if(i=_.amount>.002&&!_.done,d.visible=i,!i)return;const H=g.uniforms;H.uTime.value=_.time,H.uErode.value=_.erode||0,H.uDim.value=_.dim||0,H.uFly.value=_.fly||0,H.uNeon.value=_.neon||0,H.uMapR.value=_.r,H.uTextL.value=_.textL??1,H.uTop.value=_.top??1e6,H.uTopF.value=Math.max(1,_.topF??1),H.uMap.value.set(_.hx,_.hy),H.uCell.value=Math.max(5,4.5*(_.px||1));const L=Math.max(1,Math.round(_.w*Ct)),f=Math.max(1,Math.round(_.h*Ct));if((u.width!==L||u.height!==f)&&u.setSize(L,f),v.uAmount.value=_.amount,v.uDark.value=_.dark||0,v.uTime.value=_.time,v.uRes.value.set(L,f),v.uHole.value.set(_.hx*Ct,_.hy*Ct),v.uHoleR.value=_.r*Ct,g.uniforms.uRes.value.set(_.w,_.h),e){const R=e.uniforms;R.uAmount.value=_.amount,R.uDark.value=_.dark||0,R.uTime.value=_.time,R.uRes.value.set(L,f),R.uHole.value.copy(v.uHole.value),R.uHoleR.value=v.uHoleR.value,R.uTop.value=_.top!=null&&_.top<1e5?_.top*Ct:1e6;const I=(_.t??1.3)-1.3,k=performance.now();if(r===null)r=I,x=0;else{const m=Math.min(.1,Math.max(0,(k-b)/1e3)),y=2/.6,C=y*m,P=1/(1+C+.48*C*C+.235*C*C*C),n=r-I,S=(x+y*n)*m;x=(x-y*S)*P,r=I+(n+S)*P}const E=r===null?0:Math.min(.1,Math.max(0,(k-b)/1e3));b=k,R.uScroll.value=r;const G=_.accP||[0,0];p=z(p,G[0],E),M=z(M,G[1],E),R.uAccForm.value=p.x,R.uAccFade.value=M.x,R.uAccDrift.value=p.x*(e.accKm??.6)}},prerender(_,H){if(!i)return;const L=_.getRenderTarget(),f=_.getClearAlpha();_.getClearColor(c),e&&e.preRender&&e.preRender(_,u.width,u.height),_.setRenderTarget(u),_.setClearColor(0,0),_.clear(!0,!1,!1),e?(N.copy(H),N.projectionMatrix.elements[8]=-.3,N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),_.render(e.scene,N)):_.render(l,s),_.setRenderTarget(L),_.setClearColor(c,f)}}}const sl=`
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
`,ul=`
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
`,cl=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,fl=`
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
`,vl=10,jo={cam:-9.5,d0:2.6,k:1.24,n:12,hK:.42,hMax:5,lean0:.85,lean1:.25,wK:2.4};function $o(e=jo){const a=[];let t=e.d0;for(let o=0;o<e.n;o++){const l=o/(e.n-1),s=Math.min(e.hMax,e.hK*t+.6)*(1+.18*Math.sin(o*2.3+.7)),u=e.wK*t+6,g=-.25*t+(o%2?1:-1)*.08*t,d=.35+.3*(.5+.5*Math.sin(o*1.9+.4)),v=.12*u,c=d*u+v,i=(1-d)*u+v,r=[{off:-u/2+c/2,ww:c,da:0,hk:1},{off:u/2-i/2,ww:i,da:.12*t*(o%2?1:-1),hk:.88+.2*(.5+.5*Math.sin(o*3.1))}];for(const x of r)a.push({a:e.cam+t+x.da,b:g+x.off,w:x.ww,h:s*x.hk,base:-.3,yaw:(o%2?1:-1)*(3+2*(o%3))+(x.da?-4:0),lean:e.lean0+(e.lean1-e.lean0)*l,far:l,par:1-.95*Math.pow(l,.7)});t*=e.k*(1+.12*Math.sin(o*1.7+.3))}return a}const Vo={a:-7.4,b:-1,w:13,h:2.6,base:-.2,yaw:0,lean:0,far:0,par:0},ml={a:-1.75,b:-.4,w:6,h:3.4,base:-.4,yaw:0,lean:.7,far:.15,par:0,acc:1},Xo={tiers:[...$o(),Vo,ml]},dl=`
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
`;function pl(e){const a={type:Ho,depthBuffer:!1,minFilter:Je,magFilter:Je};let t=new Ga(1,1,a),o=new Ga(1,1,a);const l={tLast:{value:t.texture},tNoise:{value:e},uMouse:{value:new ve(-1,-1)},uRes:{value:new ve(1,1)},uTime:{value:0},uKeep:{value:1},uGain:{value:0},uOn:{value:0},uR:{value:.07},uRects:{value:Array.from({length:8},()=>new $e)},uFeather:{value:new ve(.02,.03)}},s=new Se;s.setAttribute("position",new B(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const u=new xe(s,new ae({vertexShader:"void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:dl,uniforms:l,depthTest:!1,depthWrite:!1}));u.frustumCulled=!1;const g=new ba;g.add(u);const d=new Eo,v=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let c=-1,i=-1,r=-1e9,x=0,b=!1,p=!1;!v&&typeof window<"u"&&(window.addEventListener("pointermove",L=>{if(L.pointerType==="touch")return;const f=document.querySelector("canvas.canvas-earth"),R=f?f.getBoundingClientRect():{left:0,top:0,width:innerWidth,height:innerHeight};c=(L.clientX-R.left)/(R.width||1),i=1-(L.clientY-R.top)/(R.height||1),r=performance.now(),p=!0},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>{p=!1}),window.addEventListener("blur",()=>{p=!1}));const M=".statement, .section-lead, .acc-areas, .arrow-link, .values__text, .values__close";let z=[],N=-1e9;function _(L){L-N>2e3&&(z=[...document.querySelectorAll(M)],N=L);const f=document.querySelector("canvas.canvas-earth"),R=f?f.getBoundingClientRect():{left:0,top:0,width:innerWidth,height:innerHeight},I=R.width||1,k=R.height||1;l.uFeather.value.set(32/I,32/k);let E=0;for(const G of z){if(E>=8)break;const m=G.getBoundingClientRect();m.width<1||m.bottom<R.top||m.top>R.top+k||l.uRects.value[E++].set((m.left-R.left)/I,1-(m.bottom-R.top)/k,(m.right-R.left)/I,1-(m.top-R.top)/k)}for(;E<8;E++)l.uRects.value[E].set(0,0,0,0)}const H=new Uint16Array(4);return{probe(L,f,R){return L.readRenderTargetPixels(t,Math.floor(f*t.width),Math.floor(R*t.height),1,1,H),g0.fromHalfFloat(H[0])},step(L,f,R,I){const k=Math.max(1,Math.round(f*.5)),E=Math.max(1,Math.round(R*.5));(t.width!==k||t.height!==E)&&(t.setSize(k,E),o.setSize(k,E),b=!1);const G=performance.now(),m=p;if(!p&&G-r>2500){if(!b){for(const P of[t,o])L.setRenderTarget(P),L.setClearColor(0,0),L.clear(!0,!1,!1);b=!0}return x=0,t.texture}b=!1;const y=x?Math.min(.1,Math.max(0,(G-x)/1e3)):.016;x=G,l.uKeep.value=Math.exp(-y/.45),l.uGain.value=1-Math.exp(-y/.35),l.uOn.value=m?1:0,l.uMouse.value.set(c,i),l.uRes.value.set(k,E),l.uTime.value=I,l.tLast.value=t.texture,_(G),L.setRenderTarget(o),L.render(g,d);const C=t;return t=o,o=C,t.texture}}}function hl({noise:e,perlin:a,frame:t}){for(const y of[e,a])y.wrapS=y.wrapT=Aa,y.magFilter=Je,y.needsUpdate=!0;const o={tNoise:{value:e},tPerlin:{value:a},uTime:{value:0},uAmount:{value:0},uDark:{value:0},uSpeed:{value:1},uRes:{value:new ve(1,1)},uHole:{value:new ve},uHoleR:{value:1},uTop:{value:1e6},uDens:{value:.55},tTrail:{value:null},uAccDrift:{value:0},uAccForm:{value:0},uAccFade:{value:0},uScroll:{value:0},uLat:{value:0},uRise:{value:.18},uRight:{value:new J}},l=new ba,s=new Ft;s.matrixAutoUpdate=!1,s.matrix.copy(t),l.add(s);const u=new Se;u.setAttribute("position",new B(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const g={};for(const[y,C,P]of[["haze",0,-3],["veil",1,5]]){const n=new xe(u,new ae({vertexShader:cl,fragmentShader:fl,uniforms:{...o,uVeil:{value:C}},transparent:!0,depthWrite:!1,depthTest:!1,...qe}));n.frustumCulled=!1,n.renderOrder=P,l.add(n),g[y]=n}const d=new ha(1,1),v=32,c=new ae({vertexShader:sl,fragmentShader:ul,uniforms:{...o,uHoleIn:{value:.1}},transparent:!0,depthWrite:!1,depthTest:!1,side:Ht,...qe}),i=new x0(d,c,v),r=new La(new Float32Array(v),1);i.geometry.setAttribute("aFar",r);const x=new La(new Float32Array(v),1);i.geometry.setAttribute("aPar",x);const b=new La(new Float32Array(v),1);i.geometry.setAttribute("aAcc",b),i.frustumCulled=!1,s.add(i);const p={tiers:i},M=vl*Math.PI/180,z=new J(Math.sin(M),0,-Math.cos(M)),N=new J(Math.cos(M),0,Math.sin(M));o.uRight.value.copy(N);const _=new xa,H=new ro,L=new ro,f=new J,R=new J,I=new J,k=new J(1,0,0),E=new J(0,1,0);function G(y=Xo){const C=[...y.tiers].sort((P,n)=>n.a-P.a).slice(0,v);i.count=C.length,C.forEach((P,n)=>{H.setFromAxisAngle(E,-M-(P.yaw||0)*Math.PI/180),L.setFromAxisAngle(k,-(P.lean||0)),H.multiply(L),I.set(0,1,0).applyQuaternion(H),f.copy(z).multiplyScalar(P.a).addScaledVector(N,P.b),f.y=P.base||0,f.addScaledVector(I,.5*P.h),R.set(P.w,P.h,1),_.compose(f,H,R),i.setMatrixAt(n,_),r.setX(n,P.far||0),x.setX(n,P.par||0),b.setX(n,P.acc?1:0)}),i.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,x.needsUpdate=!0,b.needsUpdate=!0}G();const m=pl(e);return{scene:l,uniforms:o,place:G,sets:p,screen:g,accKm:.6,dustK:2.2,trail:m,preRender(y,C,P){o.tTrail.value=m.step(y,C,P,o.uTime.value)}}}const vo=35,xl=.35,gl=.6,wl='a, button, input, textarea, select, label, img, video, picture, svg, header, nav, [role="button"], [contenteditable], .leader__photo, .pillar__photo',yl="h1, h2, h3, h4, h5, p, blockquote, li, figcaption, dt, dd",ue={lon:0,lat:0,on:!1,dragging:!1,dirty:!1};new w0;new ve;new y0(new J,X);new J;const Pa=typeof document<"u"?document.createRange():null;let Ut=0,Wt=0;function Al(e,a){const t=document.elementFromPoint(e,a);if(!t||t.closest(wl))return!0;const o=t.closest(yl);if(o&&Pa){Pa.selectNodeContents(o);for(const l of Pa.getClientRects())if(e>=l.left-6&&e<=l.right+6&&a>=l.top-4&&a<=l.bottom+4)return!0}return!1}function bl(e,a){return ue.on,!1}const Ml=(e,a)=>({globe:bl(),content:Al(e,a),el:document.elementFromPoint(e,a)?.className||""});function mo(e){const a=document.documentElement;a.classList.toggle("earth-grab",e==="grab"),a.classList.toggle("earth-grabbing",e==="grabbing")}function Sl(e,a,t){if(ue.on=a,ue.dirty=!1,!a&&ue.dragging&&(ue.dragging=!1),!ue.dragging){const o=Math.exp(-e/gl);ue.lon*=o,ue.lat*=o,Ut=Wt=0,Math.abs(ue.lon)<.001&&(ue.lon=0),Math.abs(ue.lat)<.001&&(ue.lat=0),(ue.lon||ue.lat)&&(ue.dirty=!0),document.documentElement.classList.contains("earth-grab")&&mo(null);return}if(!a&&document.documentElement.classList.contains("earth-grab")&&mo(null),!ue.dragging)if(Math.abs(Ut)+Math.abs(Wt)>.05){ue.lon+=Ut*e,ue.lat=Math.max(-vo,Math.min(vo,ue.lat+Wt*e));const o=Math.exp(-e/xl);Ut*=o,Wt*=o,ue.dirty=!0}else Ut=Wt=0}const Rl=Math.PI,Fl={tech:"#78d0e6",city:"#86a9cf",mapInk:"#7d9dc0",house:"#8fb0d2",mark:"#e2b04a",grid:"#3fd0e0"},_l={tech:"#29455c",city:"#253f57",mapInk:"#132a40",house:"#253f57",mark:"#8a5f10",grid:"#4d677d"},Tl=`
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
`,Ll=`
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
${Tl}

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
  float cr = length(aMap) / ${Be.toFixed(2)};
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
`,Cl=`
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
`,Pl=`
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
`,Dl=`
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
`,kl=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,zl=`
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
`,El=`
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
  vA *= 1.0 - smoothstep(cth, cth + 0.25, length(position.xz) / ${Be.toFixed(2)});
  // ДОМ МЕЛЬЧЕ ДЕСЯТКА ПИКСЕЛЕЙ НЕ РИСУЕТСЯ. Контур в пару пикселей — это
  // отрезки короче пикселя, и при малейшем сдвиге камеры они то попадают
  // на пиксель, то нет: покадровый замер дал от них 90 % всех вспышек
  // над городом. Порог — по размеру дома на экране, а не по расстоянию:
  // крупный дом вдали остаётся, мелкий рядом — тоже.
  float px = aSz * uFocal / max(-mv.z, 0.001);
  vA *= smoothstep(7.0, 16.0, px);
  vTop = aTop;
}
`,Hl=`
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
`,Nl=`
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
`,Il=`
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
`,Ba=new No(new Uint8Array(4),1,1);Ba.needsUpdate=!0;function po(e,a,t){const o=new Ft,{side:l,field:s,lite:u,light:g}=t,d=g?{LIGHT:1}:{},v=g?{blending:At,blendSrc:Ee,blendDst:rt,blendSrcAlpha:Ee,blendDstAlpha:rt}:t.glow?{blending:At,blendSrc:Ee,blendDst:Ee,blendSrcAlpha:Oa,blendDstAlpha:Ee}:{blending:A0},c=g?_l:Fl,i=F=>g?new Ve().setStyle(c[F],Wa):new Ve(c[F]),r=l*l,x=new Float32Array(r*2),b=s/l;for(let F=0;F<l;F++)for(let O=0;O<l;O++){const Z=F*l+O;x[Z*2]=(O+.5)*b-s/2,x[Z*2+1]=(F+.5)*b-s/2}const p=e.lumaSize,M=new Float64Array(p*p);let z=0;for(let F=0;F<p*p;F++){const O=e.luma[F];z+=O>.05?O*O+.02:.003,M[F]=z}let N=1234567;const _=()=>(N=N*16807%2147483647)/2147483647,H=new Float32Array(r*2),L=new Float32Array(r);for(let F=0;F<r;F++){const O=_()*z;let Z=0,Ge=p*p-1;for(;Z<Ge;){const ut=Z+Ge>>1;M[ut]<O?Z=ut+1:Ge=ut}const ze=Z%p,st=Z/p|0,_a=(ze+_())/p,Ta=(st+_())/p;H[F*2]=(_a-.5)*Be*2,H[F*2+1]=(Ta-.5)*Be*2,L[F]=e.luma[Z]}const f=F=>{const O=Array.from({length:r},(Z,Ge)=>Ge);O.sort((Z,Ge)=>F[Z*2]-F[Ge*2]);for(let Z=0;Z<l;Z++){const Ge=O.slice(Z*l,(Z+1)*l).sort((ze,st)=>F[ze*2+1]-F[st*2+1]);for(let ze=0;ze<l;ze++)O[Z*l+ze]=Ge[ze]}return O},R=f(x),I=f(H),k=new Float32Array(r*2),E=new Float32Array(r*2),G=new Float32Array(r);for(let F=0;F<r;F++){const O=R[F],Z=I[F];k[O*2]=x[O*2],k[O*2+1]=x[O*2+1],E[O*2]=H[Z*2],E[O*2+1]=H[Z*2+1],G[O]=L[Z]}const m=new Se;m.setAttribute("position",new B(new Float32Array(r*3),3)),m.setAttribute("aGrid",new B(k,2)),m.setAttribute("aMap",new B(E,2)),m.setAttribute("aLum",new B(G,1));const y=new ae({vertexShader:Ll,fragmentShader:Cl,uniforms:{uTime:{value:0},uAsm:{value:0},uWave:{value:1},uSize:{value:u?.05:.036},uFocal:{value:1e3},uFar:{value:30},uStep:{value:b},uTechCol:{value:i("tech")},uMapCol:{value:i("city")},uAlpha:{value:1},uScr:{value:0},uDust:{value:0},uFly:{value:0},uCloudA:{value:1},uDustL:{value:1},uRes:{value:new ve(1,1)},tCloud:{value:Ba},uDrift:{value:new ve},uNeon:{value:0}},defines:t.glow?{...d,GLOW:1}:d,transparent:!0,depthWrite:!1,depthTest:!0,...t.glow?{blending:At,blendSrc:Ee,blendDst:Ee,blendSrcAlpha:Ee,blendDstAlpha:Ee}:v}),C=new Vt(m,y);C.name="points",C.frustumCulled=!1,C.renderOrder=2;const P=new ha(Be*2,Be*2);P.rotateX(-Rl/2);const n=new ae({vertexShader:kl,fragmentShader:zl,uniforms:{uMap:{value:a},uInk:{value:i("mapInk")},uBase:{value:new Ve("#0a1626")},uAlpha:{value:0}},defines:d,transparent:!0,depthWrite:!1,...g?v:{}}),S=new xe(P,n);S.name="map",S.position.y=-.002,S.renderOrder=0,S.frustumCulled=!1;const w=e.houses,T=1.6/1e3;let D=0;for(let F=0;F<w.n;F++)u&&w.area[F]<400||(D+=w.cnt[F]*(w.h[F]>=11?2:1));const U=new Float32Array(D*6),$=new Float32Array(D*2),Y=new Float32Array(D*2),oe=new Float32Array(D*2),h=new Float32Array(D*2);let ee=0;for(let F=0;F<w.n;F++){if(u&&w.area[F]<400)continue;const O=w.start[F],Z=w.cnt[F],Ge=Math.max(3,w.h[F])*T;let ze=0,st=0;for(let Ae=0;Ae<Z;Ae++)ze+=w.u[O+Ae],st+=w.v[O+Ae];ze=(ze/Z-.5)*2,st=(st/Z-.5)*2;const _a=Math.min(1,Math.hypot(ze,st))*.8+F*7919%97/97*.2,Ta=Math.sqrt(Math.max(30,w.area[F]))/1e3,ut=(Ae,Zt,Jt)=>{U[ee*3]=(Ae-.5)*Be*2,U[ee*3+1]=0,U[ee*3+2]=(Zt-.5)*Be*2,$[ee]=Jt,Y[ee]=Ge,oe[ee]=_a,h[ee]=Ta,ee++};for(let Ae=0;Ae<Z;Ae++){const Zt=O+Ae,Jt=O+(Ae+1)%Z;ut(w.u[Zt],w.v[Zt],1),ut(w.u[Jt],w.v[Jt],1)}if(w.h[F]>=11)for(let Ae=0;Ae<Z;Ae++)ut(w.u[O+Ae],w.v[O+Ae],0),ut(w.u[O+Ae],w.v[O+Ae],1)}const ke=new Se;ke.setAttribute("position",new B(U,3)),ke.setAttribute("aTop",new B($,1)),ke.setAttribute("aH",new B(Y,1)),ke.setAttribute("aDel",new B(oe,1)),ke.setAttribute("aSz",new B(h,1));const me=new ae({vertexShader:El,fragmentShader:Hl,uniforms:{uGrow:{value:0},uFar:{value:30},uFocal:{value:1e3},uCol:{value:i("house")},uAlpha:{value:.55}},defines:d,transparent:!0,depthWrite:!1,...v}),de=new Ua(ke,me);de.name="houses",de.frustumCulled=!1,de.renderOrder=1;const Ne=e.projects,ie=new Float32Array(Ne.length*3),ye=new Float32Array(Ne.length);Ne.forEach((F,O)=>{ie[O*3]=(F.u-.5)*Be*2,ie[O*3+1]=.03,ie[O*3+2]=(F.v-.5)*Be*2,ye[O]=O/Ne.length});const Re=new Se;Re.setAttribute("position",new B(ie,3)),Re.setAttribute("aSeed",new B(ye,1));const it=new ae({vertexShader:Nl,fragmentShader:Il,uniforms:{uFocal:{value:1e3},uTime:{value:0},uCol:{value:i("mark")},uAlpha:{value:0}},defines:d,transparent:!0,depthWrite:!1,depthTest:!1,...v}),Ye=new Vt(Re,it);Ye.name="marks",Ye.frustumCulled=!1,Ye.renderOrder=3;const Ze=16,Ke=u?96:160,Gt=Math.floor(l/Ze)+1,se=new Float32Array(Gt*2*Ke*6);let Qe=0;for(let F=0;F<Gt;F++){const O=Math.min(s/2,F*Ze*b-s/2);for(let Z=0;Z<Ke;Z++){const Ge=(Z/Ke-.5)*s,ze=((Z+1)/Ke-.5)*s;se.set([Ge,0,O,ze,0,O],Qe),Qe+=6,se.set([O,1,Ge,O,1,ze],Qe),Qe+=6}}const lo=new Se;lo.setAttribute("position",new B(se,3));const Tt=new ae({vertexShader:Pl,fragmentShader:Dl,uniforms:{uTime:{value:0},uWave:{value:1},uFar:{value:30},uFocal:{value:1e3},uGap:{value:Ze*b},uCol:{value:i("grid")},uAlpha:{value:1}},defines:d,transparent:!0,depthWrite:!1,...v}),Lt=new Ua(lo,Tt);return Lt.name="grid",Lt.frustumCulled=!1,Lt.renderOrder=1,o.add(S,Lt,de,C,Ye),{group:o,update(F){const O=y.uniforms;O.uTime.value=F.time,O.uAsm.value=F.asm,O.uWave.value=F.wave,O.uFocal.value=F.focal,O.uFar.value=F.far,O.uAlpha.value=F.alpha*F.points,O.uScr.value=F.scr||0,F.scr&&(O.uDust.value=F.dust,O.uFly.value=F.fly,O.uCloudA.value=F.cloudA,O.uDustL.value=F.dustL,O.uRes.value.set(F.resW,F.resH),O.tCloud.value=F.cloudTex||Ba,O.uDrift.value.set(F.driftX||0,F.driftY||0),O.uNeon.value=F.neon||0),C.visible=F.alpha*F.points>.002,n.uniforms.uAlpha.value=F.map*F.alpha,S.visible=F.map*F.alpha>.002,me.uniforms.uGrow.value=F.houses,me.uniforms.uFar.value=F.far,me.uniforms.uFocal.value=F.focal,me.uniforms.uAlpha.value=.55*F.alpha,de.visible=F.houses>.001&&F.alpha>.002,it.uniforms.uTime.value=F.time,it.uniforms.uFocal.value=F.focal,it.uniforms.uAlpha.value=F.marks*F.alpha,Ye.visible=F.marks*F.alpha>.002;const Z=F.alpha*(1-F.asm);Tt.uniforms.uTime.value=F.time,Tt.uniforms.uWave.value=F.wave,Tt.uniforms.uFar.value=F.far,Tt.uniforms.uFocal.value=F.focal,Tt.uniforms.uAlpha.value=Z,Lt.visible=Z>.002,o.visible=F.alpha>.002,F.hideTech&&(C.visible=!1,Lt.visible=!1,de.visible=!1,S.visible=!1),F.hideMarks&&(Ye.visible=!1)}}}const Ol=`
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
`,Gl=e=>`
#define ${e}
${e==="LOOK_LIGHT"?Vl:e.startsWith("LOOK_PAPER")?Xl:""}
${e.includes("P_INK")?`#define SK_SPHERE
`+Ja:""}
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
`,Ul=`
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
`,Wl=`
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
`,Bl=`
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
  float h = b * b - dot(ro, ro) + ${X.toFixed(1)} * ${X.toFixed(1)};
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
`,ql=`
varying vec2 vP;
void main() { vP = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,jl=`
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
`;function ho(){const e=new Se;return e.setAttribute("position",new B(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}const $l={dots:"LOOK_DOTS",photo:"LOOK_PHOTO",mix:"LOOK_MIX",light:"LOOK_LIGHT",lines:`LOOK_PAPER
#define P_LINES`,ink:`LOOK_PAPER
#define P_INK`},xo={lines:1,ink:1},Yo=e=>{const a=parseInt(e.slice(1),16),t=o=>(o/255).toFixed(4);return`vec3(${t(a>>16)}, ${t(a>>8&255)}, ${t(a&255)})`},Vl=[["L_SEA","#6c8194"],["L_GROUND","#2c4760"],["L_GOLD","#8a5f10"],["L_DISC","#d3d9de"],["L_RIM","#29455c"],["L_AURA","#e4e8ec"]].map(([e,a])=>`#define ${e} ${Yo(a)}`).join(`
`),Xl=[["L_SEA","#5b7086"],["L_GROUND","#1c3349"],["L_GOLD","#8a5f10"],["L_GLOW","#2A6DAA"],["L_DISC","#d3d9de"],["L_RIM","#2A6DAA"],["L_AURA","#5FA8E0"],["L_PALE","#5FA8E0"],["L_GOLDL","#c9a24e"],["L_INK3","#4d677d"],["L_INK2","#29455c"]].map(([e,a])=>`#define ${e} ${Yo(a)}`).join(`
`);function Da(e,a,t,o){let l=0,s=0;const u=[0,0,0],g=new Ft,d={blending:At,blendSrc:Ee,blendDst:rt,blendSrcAlpha:Ee,blendDstAlpha:rt},v=De(o.pdb.lat,o.pdb.lon,1),c={uCam:{value:new J},uC:{value:0},uR:{value:X},uAlpha:{value:0},uHaloA:{value:0},uSpace:{value:0},uAtm:{value:0},uS0:{value:1},uLod:{value:0},uMarkR:{value:10},uMark:{value:0},uMarkBlue:{value:0},uMarkGrow:{value:1},uTime:{value:0},uNight:{value:0},uClouds:{value:0},uHole:{value:0},uHoleR:{value:3.75},uRevMode:{value:0},uRevR:{value:1},uRevA:{value:1},uVeil:{value:0},uCzK:{value:0},uSc:{value:1},uInkH:{value:1},uInkP:{value:1},uPdb:{value:new J(v[0],v[1],v[2])},uSun:{value:new J(...De(18,-28,1)).normalize()},uLand:{value:a.land},uEu:{value:a.eu},uEuBox:{value:new $e(ea.lon0,ea.lat0,ea.lon1,ea.lat1)},uCamWorld:{value:new xa},uInvProj:{value:new xa}};e==="photo"&&(c.uDay={value:a.day},c.uDayEu={value:a.dayEu},c.uCloudTex={value:a.clouds},c.uDayCe={value:a.dayCe},c.uCeBox={value:new $e(ta.lon0,ta.lat0,ta.lon1,ta.lat1)},c.uPhoto={value:0}),e==="mix"&&(c.uNightTex={value:a.night},c.uNightEu={value:a.nightEu});const i=new ae({vertexShader:Ol,fragmentShader:Gl($l[e]),uniforms:c,transparent:!0,depthTest:!1,depthWrite:!1,...d}),r=new xe(ho(),i);r.name="globe",r.frustumCulled=!1,r.renderOrder=-20;const x=(n,S,w)=>new ae({vertexShader:Ul,fragmentShader:Wl,uniforms:{uCam:c.uCam,uR:c.uR,uPdb:c.uPdb,uMarkR:c.uMarkR,uMark:c.uMark,uCol:{value:e==="light"?new Ve().setStyle(n,Wa):new Ve(n)},uAlpha:{value:S},uFadeKm:{value:w}},transparent:!0,depthTest:!1,depthWrite:!1,...d}),b={dots:{coast:"#6f9cc4",border:"#8fb4d8",river:"#4f86b8"},photo:{coast:"#ffffff",border:"#ffffff",river:"#9cc8ff"},mix:{coast:"#5b8fc8",border:"#7fa9dc",river:"#3f6f9f"},light:{coast:"#4d677d",border:"#29455c",river:"#6c8194"}}[xo[e]?"light":e],p=(n,S)=>{const w=new Se;w.setAttribute("position",new B(n,3));const T=new Ua(w,x(S,0,400));return T.frustumCulled=!1,T.renderOrder=-10,T},M=p(t[0],b.coast),z=p(t[1],b.border),N=p(t[3],b.river);M.name="coast",z.name="border",N.name="river";const _=new R0().setPositions(t[2]),H=new F0({color:e==="light"?9068304:15317072,linewidth:o.lite?1.6:2.2,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),L=new _0(_,H);L.frustumCulled=!1,L.renderOrder=-9;const f=o.lite?900:2400,R=new Float32Array(f*3),I=new Float32Array(f);let k=4242;const E=()=>(k=k*16807%2147483647)/2147483647;for(let n=0;n<f;n++){const S=E()*2-1,w=E()*Math.PI*2,T=Math.sqrt(1-S*S);R[n*3]=T*Math.cos(w)*1e5,R[n*3+1]=S*1e5,R[n*3+2]=T*Math.sin(w)*1e5,I[n]=Math.pow(E(),4)}const G=new Se;G.setAttribute("position",new B(R,3)),G.setAttribute("aMag",new B(I,1));const m=new ae({vertexShader:Bl,fragmentShader:Kl,uniforms:{uAlpha:{value:0},uPx:{value:1},uOcc:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,...d}),y=new Vt(G,m);y.frustumCulled=!1,y.renderOrder=-15,y.name="stars";const C=new ae({vertexShader:ql,fragmentShader:jl,uniforms:{uLeft:{value:0},uAll:{value:0},uSide:{value:0},uCol:{value:e==="light"?new Ve().setStyle("#c4cad0",Wa):new Ve("#040b15")}},transparent:!0,depthTest:!1,depthWrite:!1,...d}),P=new xe(ho(),C);return P.name="scrim",P.frustumCulled=!1,P.renderOrder=100,g.add(y,r,M,z,N,L,P),{group:g,resize(n,S){H.resolution.set(n,S)},setPhoto(n,S){const w=[];return c.uDay&&n&&c.uDay.value!==n&&(w.push(c.uDay.value),c.uDay.value=n),c.uCloudTex&&S&&c.uCloudTex.value!==S&&(w.push(c.uCloudTex.value),c.uCloudTex.value=S),w},update(n,S){const w=S.position;c.uCam.value.copy(w);const T=Math.hypot(w.x,w.y,w.z);c.uC.value=(T-X)*(T+X),c.uCamWorld.value.copy(S.matrixWorld),c.uInvProj.value.copy(S.projectionMatrixInverse),c.uAlpha.value=n.alpha,c.uHaloA.value=n.haloAlpha??n.alpha,c.uSpace.value=n.space,c.uAtm.value=n.atm,c.uS0.value=n.s0,c.uLod.value=n.lod,c.uMarkR.value=n.markR,c.uMark.value=n.mark,c.uMarkBlue.value=n.markBlue||0,c.uMarkGrow.value=n.markGrow||1,c.uTime.value=n.time,c.uNight.value=n.night,c.uPhoto&&(c.uPhoto.value=n.photo),c.uClouds.value=n.clouds,c.uHole.value=n.hole,c.uHoleR.value=n.holeR,c.uRevMode.value=n.revMode||0,c.uRevR.value=n.revR||1,c.uRevA.value=n.revA??1,c.uVeil.value=n.veil||0,((n.spin||0)!==l||(n.sunLat||0)!==s)&&(l=n.spin||0,s=n.sunLat||0,De(18+s,-28+l,1,u),c.uSun.value.set(u[0],u[1],u[2]).normalize()),c.uCzK.value=n.czk,c.uSc.value=n.sc||1,c.uInkH.value=n.inkH??1,c.uInkP.value=n.inkP??1,r.visible=n.alpha>.002||n.space>.002,M.material.uniforms.uAlpha.value=n.lines*(e==="photo"?.18:.38),z.material.uniforms.uAlpha.value=n.lines*(e==="photo"?.3:.5),N.material.uniforms.uAlpha.value=n.rivers*.35;for(const D of[M,z,N])D.material.uniforms.uFadeKm.value=Math.max(1,T-X)*.05,D.visible=D.material.uniforms.uAlpha.value>.002;H.opacity=n.cz,L.visible=n.cz>.002,y.position.copy(w),m.uniforms.uAlpha.value=n.stars,m.uniforms.uOcc.value=Math.min(1,20*Math.max(n.alpha,n.haloAlpha??n.alpha)),m.uniforms.uPx.value=n.px,y.visible=n.stars>.002,xo[e]&&(M.visible=z.visible=N.visible=L.visible=y.visible=!1),C.uniforms.uLeft.value=n.scrimLeft,C.uniforms.uAll.value=n.scrimAll,C.uniforms.uSide.value=n.scrimSide??0,P.visible=n.scrimLeft+n.scrimAll>.002}}}const nt=[[48.2082,16.3738],[52.52,13.405],[47.4979,19.0402],[48.8566,2.3522],[51.5074,-.1278],[41.9028,12.4964],[40.4168,-3.7038],[59.3293,18.0686],[50.4501,30.5234],[39.9334,32.8597],[24.4539,54.3773],[56.9496,24.1052],[37.9838,23.7275],[35.6762,139.6503],[1.3521,103.8198],[33,2.5],[30.5,14]],aa=128,bt=2.5,Yl=bt*nt.length,Zl=`
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
  return d * (${X.toFixed(1)} + aArc.z * sin(3.14159265 * t));
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
  vec4 ch = pv * vec4(uP * ${X.toFixed(1)}, 1.0);
  vHome = (ch.xy / ch.w * 0.5 + 0.5) * uRes;
  // Закрыта ли точка шаром Земли (луч из камеры к ней пересекает шар).
  vec3 ro = cameraPosition, rd = p - ro;
  float L = length(rd); rd /= L;
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${(X*.998).toFixed(1)} * ${(X*.998).toFixed(1)};
  float tHit = -b - sqrt(max(h, 0.0));
  vOcc = (h > 0.0 && tHit > 0.0 && tHit < L - 1.0) ? 0.0 : 1.0;
  vT = aT;
  vS = aSide;
  vArc = aArc;
}
`,Jl=`
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
  float k = floor(uTime / ${bt.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = min(2.0 * floor(h * ${Math.ceil(nt.length/2)}.0) + mod(j, 2.0), ${nt.length-1}.0);
    float since = uTime - j * ${bt.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${bt.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
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
  float order = vArc.y * float(${nt.length});
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
`,Ql=`
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
  float k = floor(uTime / ${bt.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = min(2.0 * floor(h * ${Math.ceil(nt.length/2)}.0) + mod(j, 2.0), ${nt.length-1}.0);
    float since = uTime - j * ${bt.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${bt.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
  }
  return best;
}
void main() {
  vec4 cp = projectionMatrix * viewMatrix * vec4(position, 1.0);
  gl_Position = cp;
  // Вспышка, когда приходит голова (конец пути), и тихое тление.
  float order = aArc.y * float(${nt.length});
  float since = arcLaunch(order, aArc.x + 3.0) - aArc.x;
  float flash = since > -0.25 ? smoothstep(-0.25, 0.0, since) * exp(-max(since, 0.0) * 1.6) : 0.0;
  float drawn = step(uStart + order * 0.15 + 2.4, uTime);
  // В Пардубицах точку даёт метка Земли (globe.js, дышит) — здесь её нет.
  vI = aHome > 0.5 ? 0.0 : (0.35 + 1.4 * flash) * drawn;
  gl_PointSize = (aHome > 0.5 ? 12.0 : 9.0 + 6.0 * flash) * uDpr * (1.0 + 0.4 * uNear);
  vec3 ro = cameraPosition, rd = position - ro;
  float L = length(rd); rd /= L;
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${(X*.998).toFixed(1)} * ${(X*.998).toFixed(1)};
  float tHit = -b - sqrt(max(h, 0.0));
  vOcc = (h > 0.0 && tHit > 0.0 && tHit < L - 1.0) ? 0.0 : 1.0;
}
`,en=`
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
`,go={blending:At,blendSrc:Ee,blendDst:Ee,blendSrcAlpha:Ee,blendDstAlpha:rt};function tn(e){const a=new J(...De(e.lat,e.lon,1)),t=nt.length,o=t*(aa+1)*2,l=new Float32Array(o*3),s=new Float32Array(o),u=new Float32Array(o),g=new Float32Array(o*4),d=[];let v=7;const c=()=>(v=v*16807%2147483647)/2147483647,i=nt.map(([k,E],G)=>{const m=new J(...De(k,E,1)),y=Math.acos(Math.min(1,Math.max(-1,a.dot(m)))),C=Math.min(.06*X,y*X*.2);return{e:m,ang:y,a:[3+2*Math.min(1,y/1.45),0,C,.75+.25*c()]}}),r=i.map((k,E)=>E);for(let k=r.length-1;k>0;k--){const E=Math.floor(c()*(k+1));[r[k],r[E]]=[r[E],r[k]]}r.forEach((k,E)=>{i[k].a[1]=E/t});let x=0;i.forEach(({e:k,a:E})=>{const G=x;for(let m=0;m<=aa;m++){for(const y of[-1,1])l.set([k.x,k.y,k.z],x*3),s[x]=m/aa,u[x]=y,g.set(E,x*4),x++;if(m<aa){const y=G+m*2;d.push(y,y+1,y+2,y+1,y+3,y+2)}}});const b=new Se;b.setAttribute("position",new B(new Float32Array(o*3),3)),b.setAttribute("aEnd",new B(l,3)),b.setAttribute("aT",new B(s,1)),b.setAttribute("aSide",new B(u,1)),b.setAttribute("aArc",new B(g,4)),b.setIndex(d);const p=new Ve("#78d0e6"),M=new ae({vertexShader:Zl,fragmentShader:Jl,uniforms:{uP:{value:a},uRes:{value:new ve(1,1)},uHalfW:{value:5},uTime:{value:0},uPeriod:{value:Yl},uAlpha:{value:0},uStart:{value:0},uTextL:{value:1},uTextR:{value:0},uDpr:{value:1},uNear:{value:0},uCol:{value:p}},transparent:!0,depthWrite:!1,depthTest:!1,side:Ht,...go}),z=new xe(b,M);z.frustumCulled=!1,z.name="arcs";const N=new Float32Array((t+1)*3),_=new Float32Array((t+1)*4),H=new Float32Array(t+1);i.forEach(({e:k,a:E},G)=>{N.set([k.x*X,k.y*X,k.z*X],G*3),_.set(E,G*4)}),N.set([a.x*X,a.y*X,a.z*X],t*3),_.set([1,0,0,1],t*4),H[t]=1;const L=new Se;L.setAttribute("position",new B(N,3)),L.setAttribute("aArc",new B(_,4)),L.setAttribute("aHome",new B(H,1));const f=new ae({vertexShader:Ql,fragmentShader:en,uniforms:{uTime:M.uniforms.uTime,uPeriod:M.uniforms.uPeriod,uStart:M.uniforms.uStart,uNear:M.uniforms.uNear,uAlpha:M.uniforms.uAlpha,uCol:{value:p},uDpr:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,...go}),R=new Vt(L,f);R.frustumCulled=!1,R.name="arcDots";const I=new Ft;return I.add(z,R),z.renderOrder=50,R.renderOrder=51,{group:I,update(k){const E=I.visible;if(I.visible=k.alpha>.002,!I.visible)return;E||(M.uniforms.uStart.value=k.time),M.uniforms.uTextL.value=k.textL??1,M.uniforms.uTextR.value=k.textR??0,M.uniforms.uAlpha.value=k.alpha,M.uniforms.uTime.value=k.time,M.uniforms.uRes.value.set(k.w,k.h);const G=Math.log(Math.max(1,k.d||2e4)),m=1-Math.min(1,Math.max(0,(G-Math.log(2e3))/(Math.log(2e4)-Math.log(2e3)))),y=m*m*(3-2*m);M.uniforms.uNear.value=y,M.uniforms.uHalfW.value=5*k.dpr*(1+.8*y),f.uniforms.uDpr.value=k.dpr,M.uniforms.uDpr.value=k.dpr}}}const ka="/assets/dawn/",ft=4,wo=6336/2688,an=.62,yo=.668,Pt={x:.712,y:.676},Ao={x:.775,y:.3},dt=[-1,-.45,0,.35,1],on={zen:["#03091a","#0a1532","#28427f","#1f68c0","#1478d8"],hor:["#0e1b34","#2a2a4a","#c88a90","#b4d6ee","#bfe0f6"],glow:["#000000","#4c2a34","#ff7a2e","#ffc78a","#ffe9c8"],halo:["#000000","#160a0c","#ff8d3f","#ffdcb0","#f6f8ff"],disc:["#000000","#000000","#ffb070","#fff0d0","#fffaf0"],cLit:["#05070f","#4a2c3a","#ffbc9c","#ffeedd","#ffffff"],cSh:["#03050c","#1a1830","#8e6490","#b6b2c8","#aebfd6"],cCream:["#ffffff","#ffffff","#ffe2cc","#ffeedd","#fff1de"],mBase:["#050a17","#0b0f22","#2a2140","#46526e","#5a6a86"],mTint:["#6f86c0","#7a6aa0","#ffb28a","#ffe6cc","#ffffff"],nTint:["#7d95d0","#8a7aa8","#ffb088","#fff0dc","#ffffff"],nAmb:["#020408","#04040c","#0c0710","#05060a","#000000"],rim:["#000000","#3a1a12","#ff8a3a","#ffcf94","#fff2dc"]},ln={horPow:[4,3.4,2.6,3.4,4.2],glowW:[.6,.55,.42,.42,.4],haloW:[.08,.08,.075,.07,.06],pol:[0,0,.12,.35,.48],mLight:[0,.015,.16,.65,1],mHaze:[.85,.85,.85,.4,.16],nLight:[.01,.02,.075,.6,1],rimK:[0,.25,1.15,.45,.12],veil:[0,0,.14,.3,.34]},nn=e=>{const a=new Ve(e);return[a.r,a.g,a.b]},bo=Object.fromEntries(Object.entries(on).map(([e,a])=>[e,a.map(nn)]));function Zo(e){if(e<=dt[0])return[0,0];for(let a=0;a<dt.length-1;a++)if(e<=dt[a+1]){const t=(e-dt[a])/(dt[a+1]-dt[a]);return[a,a===1?Math.pow(t,1.6):t]}return[dt.length-2,1]}function Ue(e,a,t){const[o,l]=Zo(a),s=bo[e][o],u=bo[e][o+1];t.set(s[0]+(u[0]-s[0])*l,s[1]+(u[1]-s[1])*l,s[2]+(u[2]-s[2])*l)}const oa=e=>{const a=Math.min(1,Math.max(0,e));return a*a*(3-2*a)};function tt(e,a){const[t,o]=Zo(a),l=ln[e];return l[t]+(l[t+1]-l[t])*o}const Mo=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,rn=`
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
`,to=`
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
`,Jo=`
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
`,sn=`
precision highp float;
${to}
${rn}
uniform float uA, uStars, uCell, uDiscA, uSunR, uRays, uTime, uGlowP;
uniform sampler2D tCl;
uniform float uHor0, uSpan, uAsp, uDrift, uRise, uClA;
${Jo}
uniform vec2 uStarOff;
uniform vec3 uDisc;
// метеоры (по клику на ночное небо): uMetN штрихов; uMa — голова (точки
// холста, GL) и направление полёта; uMb — длина хвоста, блеск, полуширина
// хвоста и радиус головы (точки холста); uMc — зерно шума, шаг клочьев
// хвоста, сила свечения головы, пройденный путь
uniform float uMetN, uMetA;
uniform vec4 uMa[${ft}];
uniform vec4 uMb[${ft}];
uniform vec4 uMc[${ft}];
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
    for (int i = 0; i < ${ft}; i++) {
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
`,un=`
precision highp float;
uniform sampler2D tCl;
uniform vec2 uRes, uSunC;
uniform float uA, uHor0, uSpan, uAsp, uDrift, uLeftK, uRise;
uniform vec3 uLit, uSh, uCream, uGlowC;
${Jo}
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
`,Qo=`
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
`,cn=`
precision highp float;
${to}
${Qo}
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
`,fn=`
precision highp float;
${to}
${Qo}
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
`,vn=`
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
`,mn=`
attribute float aMag;
uniform float uPx;
varying float vM;
varying float vBehind;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vM = aMag;
  vec3 ro = cameraPosition, rd = normalize((modelMatrix * vec4(position, 1.0)).xyz - ro);
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${X.toFixed(1)} * ${X.toFixed(1)};
  vBehind = (h > 0.0 && -b - sqrt(max(h, 0.0)) > 0.0) ? 1.0 : 0.0;
  gl_PointSize = (1.0 + aMag * 1.6) * uPx;
}
`,dn=`
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
`;function pn(){const e=new Se;return e.setAttribute("position",new B(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}const ca=new No(new Uint8Array([0,0,0,0]),1,1);ca.needsUpdate=!0;function hn(){return{uRes:{value:new ve(1,1)},uPx:{value:1},uHor:{value:0},uHorPow:{value:3},uGlowW:{value:.5},uHaloW:{value:.08},uPol:{value:0},uSun:{value:new ve},uZen:{value:new J},uHorC:{value:new J},uGlow:{value:new J},uHalo:{value:new J}}}function xn({lite:e=!1}={}){const a=new Ft;a.name="dawn";const t=pn(),o=hn(),l=(n,S,w,T)=>{const D=new xe(t,new ae({vertexShader:Mo,fragmentShader:n,uniforms:{...o,...S},transparent:!0,depthTest:!1,depthWrite:!1,...qe}));return D.frustumCulled=!1,D.renderOrder=w,D.name=T,a.add(D),D},s=l(sn,{uA:{value:0},uStars:{value:0},uTime:{value:0},uGlowP:{value:0},uClA:{value:0},uCell:{value:e?8:7},uDiscA:{value:0},uSunR:{value:10},uRays:{value:0},uStarOff:{value:new ve},uDisc:{value:new J},uMetN:{value:0},uMetA:{value:0},uMa:{value:Array.from({length:ft},()=>new $e)},uMb:{value:Array.from({length:ft},()=>new $e)},uMc:{value:Array.from({length:ft},()=>new $e)}},200,"dawn-sky"),u=new xe(t,new ae({vertexShader:Mo,fragmentShader:un,uniforms:{tCl:{value:ca},uRes:{value:new ve(1,1)},uSunC:{value:new ve},uA:{value:0},uHor0:{value:0},uSpan:{value:.754},uAsp:{value:1003/652},uDrift:{value:0},uLeftK:{value:.12},uRise:{value:0},uMorph:{value:0},uLit:{value:new J},uSh:{value:new J},uCream:{value:new J(1,1,1)},uGlowC:{value:new J}},transparent:!0,depthTest:!1,depthWrite:!1,...qe}));u.frustumCulled=!1,u.renderOrder=202;for(const n of["tCl","uHor0","uSpan","uAsp","uDrift","uRise","uMorph"])s.material.uniforms[n]=u.material.uniforms[n];u.name="dawn-clouds",a.add(u);const g=l(cn,{tL:{value:ca},uPlate:{value:new $e(0,0,1,1)},uTop:{value:0},uA:{value:0},uMLight:{value:0},uMHaze:{value:0},uMBase:{value:new J},uMTint:{value:new J}},203,"dawn-far"),d=l(fn,{tL:{value:ca},uPlate:{value:new $e(0,0,1,1)},uTop:{value:0},uA:{value:0},uNLight:{value:0},uRimK:{value:0},uNTint:{value:new J},uNAmb:{value:new J},uRim:{value:new J}},204,"dawn-near"),v=l(vn,{uVeil:{value:0},uFlat:{value:e?1:0}},205,"dawn-veil");let c=null;const i=new ae({vertexShader:mn,fragmentShader:dn,uniforms:{uAlpha:{value:0},uPx:{value:1},uOcc:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,...qe});let r=null,x=!1,b=0,p=0,M=!1;const z={near:.4673,far:.6369};function N(n,S){if(r)return r;const w=new zo;w.setOptions({imageOrientation:"none",premultiplyAlpha:"none",colorSpaceConversion:"none"});const T=U=>new Promise(($,Y)=>w.load(ka+U+(S?"":"-s")+".webp",oe=>{const h=new Ia(oe);h.colorSpace=da,h.flipY=!1,h.wrapS=h.wrapT=$t,h.minFilter=pa,h.magFilter=Je,h.anisotropy=4,h.needsUpdate=!0,$(h)},void 0,Y)),D=new Promise((U,$)=>w.load(ka+"clouds.png",Y=>{const oe=new Ia(Y);oe.colorSpace=da,oe.flipY=!1,oe.wrapS=Aa,oe.wrapT=$t,oe.minFilter=pa,oe.magFilter=Je,oe.needsUpdate=!0,U(oe)},void 0,$));return r=Promise.all([fetch(ka+"dawn.json").then(U=>U.json()),T("near"),T("far"),D]).then(([U,$,Y,oe])=>{n.initTexture(oe);const h=u.material.uniforms;h.tCl.value=oe,U.clouds&&(h.uSpan.value=U.clouds.span,h.uAsp.value=U.clouds.w/U.clouds.h),M=!0,z.near=U.layers.near.top,z.far=U.layers.far.top,n.initTexture($),n.initTexture(Y),d.material.uniforms.tL.value=$,g.material.uniforms.tL.value=Y,d.material.uniforms.uTop.value=z.near,g.material.uniforms.uTop.value=z.far,x=!0}).catch(U=>console.warn("[cfig] рассвет: слои не подгрузились:",U)),r}const _=new ve;let H=!1,L=!1;const f={e:1,stars:0,A:0,px:1,w:1,h:1,hor:0,pFar:null,pNear:null},R=[];let I=null;function k(n){const w=Math.max(1,Math.round(768*n.height/n.width)),T=document.createElement("canvas");T.width=768,T.height=w;const D=T.getContext("2d",{willReadFrequently:!0});D.drawImage(n,0,0,768,w);const U=D.getImageData(0,0,768,w).data,$=new Uint8Array(768*w);for(let Y=0;Y<$.length;Y++)$[Y]=U[Y*4+3];return{W:768,H:w,a:$}}function E(n,S,w,T,D){const U=(T-S.x0)/S.Wp,$=((S.top-D)/S.Hp-w)/(1-w);return U<0||U>=1||$<0?!1:n.a[Math.min(n.H-1,Math.floor($*n.H))*n.W+Math.floor(U*n.W)]>40}function G(n,S){if(S<=f.hor)return!1;if(!x||!f.pFar)return!0;try{I||={far:k(g.material.uniforms.tL.value.image),near:k(d.material.uniforms.tL.value.image)}}catch{return!0}return!E(I.far,f.pFar,z.far,n,S)&&!E(I.near,f.pNear,z.near,n,S)}const m=(n,S)=>n+Math.random()*(S-n);function y(n,S,w){if(!H||f.A<.6||f.stars<.2||f.e>-.1||R.length>=ft||!G(n,S))return!1;const T=f.px,D=performance.now(),U=f.w,$=f.h;let Y=w?.x,oe=w?.y;for(let Ne=0;Ne<12&&Y===void 0;Ne++){const ie=m(.45,.9)*U,ye=m(f.hor+.35*($-f.hor),.84*$);ye>f.hor&&G(ie,ye)&&(Y=ie,oe=ye)}if(Y===void 0)return!1;const h=w?.sg??(Y/U>.68?-1:1),ee=(w?.ang??m(18,42))*Math.PI/180,ke=[h*Math.cos(ee),-Math.sin(ee)],me=m(.15,.3)*U,de=w?.I??.22*Math.pow(7,Math.pow(Math.random(),1.6));return R.push({t0:D,x:Y,y:oe,dir:ke,dist:me,life:m(1.4,2.2),I:de,L:me*m(.3,.45)*(.8+.15*de),w:(.5+.35*de)*T,r:(.75+.55*de)*T,glow:.06+.1*de,seed:Math.floor(m(1,97)),grain:m(4,7)*T}),!0}function C(n,S){const w=s.material.uniforms;let T=0;for(let D=R.length-1;D>=0;D--)(n-R[D].t0)/1e3>R[D].life&&R.splice(D,1);for(const D of R){const U=(n-D.t0)/1e3/D.life,$=D.dist*(1-Math.pow(1-U,1.5)),Y=Math.min($,D.L*oa(U/.4)*(1-.6*oa((U-.55)/.45))),oe=1+.08*(Math.random()-.5),h=D.I*oa(U/.15)*(1-oa((U-.45)/.55))*oe;w.uMa.value[T].set(D.x+D.dir[0]*$,D.y+D.dir[1]*$,D.dir[0],D.dir[1]),w.uMb.value[T].set(Y,h,D.w,D.r),w.uMc.value[T].set(D.seed,D.grain,D.glow,$),T++}w.uMetN.value=T,w.uMetA.value=S}function P(n,S,w,T){const D=.035*S,U=Math.max(n/wo,(w?.62:.86)*S)+D,$=U*wo,Y=w?.52:.66;return{x0:Math.min(0,Math.max(n-$,Y*n-an*$)),top:U-D+T,Wp:$,Hp:U}}return{group:a,load:N,get ready(){return x},meteor:y,get meteors(){return R.length},adoptStars(n){c||!n||(c=new Vt(n.geometry,i),c.frustumCulled=!1,c.renderOrder=201,c.name="dawn-estars",c.userData.src=n,a.add(c))},update(n){if(H=!!n.on,a.visible=H,!H){L=!1,R.length=0,s.material.uniforms.uMetN.value=0;return}const{w:S,h:w,e:T,lite:D}=n,U=n.now||0,$=Math.min(.1,Math.max(0,(U-p)/1e3));p=U,b=x?Math.min(1,b+$/.5):0,n.instant&&x&&(b=1);const Y=n.D-.5,oe=P(S,w,D,Y*.0105*w),h=P(S,w,D,Y*.028*w),ee=P(S,w,D,Y*.06*w),ke=se=>h.top-se*h.Hp,me=ke(yo);Object.assign(f,{e:T,stars:n.stars,A:n.A,px:n.px,w:S,h:w,hor:me,pFar:h,pNear:ee});let de,Ne;if(T<0)de=Pt.x,Ne=Pt.y+.12*-T;else{const se=T,Qe=Math.sin(se*Math.PI/2);de=Pt.x+(Ao.x-Pt.x)*se,Ne=Pt.y+(Ao.y-Pt.y)*Qe}_.set(Math.min(h.x0+de*h.Wp,.9*S),ke(Ne));const ie=o;ie.uRes.value.set(S,w),ie.uPx.value=n.px,ie.uHor.value=me,ie.uSun.value.copy(_),Ue("zen",T,ie.uZen.value),Ue("hor",T,ie.uHorC.value),Ue("glow",T,ie.uGlow.value),Ue("halo",T,ie.uHalo.value),ie.uHorPow.value=tt("horPow",T),ie.uGlowW.value=tt("glowW",T),ie.uHaloW.value=tt("haloW",T),ie.uPol.value=tt("pol",T);const ye=s.material.uniforms;if(ye.uA.value=n.A,ye.uStars.value=n.stars,ye.uTime.value=n.time||0,R.length?C(performance.now(),n.A):ye.uMetN.value=0,ye.uGlowP.value=Math.min(1,Math.max(0,(T+1)/1.5)),Ue("disc",T,ye.uDisc.value),ye.uDisc.value.multiplyScalar(1.8),ye.uDiscA.value=Math.min(1,Math.max(0,(T+.06)/.1)),ye.uSunR.value=(.0105+.004*Math.max(0,1-T/.4))*h.Hp,ye.uRays.value=Math.min(1,Math.max(0,(T-.25)/.5)),ye.uStarOff.value.set(.0845*S,oe.top-P(S,w,D,0).top),c){const se=c.userData.src;c.position.copy(se.position),i.uniforms.uAlpha.value=n.estars,i.uniforms.uPx.value=se.material.uniforms.uPx.value,i.uniforms.uOcc.value=se.material.uniforms.uOcc.value,c.visible=n.estars>.002}const Re=Math.min(1,Math.max(0,(T+.8)/.75)),it=n.A*Math.min(1,Math.max(0,(T+.85)/.3))*(M?1:0);if(L=it>.002,s.material.uniforms.uClA.value=L?it:0,u.visible=L,L){const se=u.material.uniforms,Qe=P(S,w,D,0);se.uRes.value.set(S,w),se.uHor0.value=Qe.top-yo*Qe.Hp,se.uDrift.value=n.time*4*n.px,se.uMorph.value=n.time,se.uA.value=it,se.uRise.value=Re,se.uSunC.value.copy(_),Ue("cLit",T,se.uLit.value),Ue("cSh",T,se.uSh.value),Ue("cCream",T,se.uCream.value),Ue("glow",T,se.uGlowC.value),se.uGlowC.value.multiplyScalar(.3)}const Ye=n.A*b;g.visible=d.visible=Ye>.002;const Ze=g.material.uniforms;Ze.uPlate.value.set(h.x0,h.top,h.Wp,h.Hp),Ze.uA.value=Ye,Ze.uMLight.value=tt("mLight",T),Ze.uMHaze.value=tt("mHaze",T),Ue("mBase",T,Ze.uMBase.value),Ue("mTint",T,Ze.uMTint.value);const Ke=d.material.uniforms;Ke.uPlate.value.set(ee.x0,ee.top,ee.Wp,ee.Hp),Ke.uA.value=Ye,Ke.uNLight.value=tt("nLight",T),Ke.uRimK.value=tt("rimK",T),Ue("nTint",T,Ke.uNTint.value),Ue("nAmb",T,Ke.uNAmb.value),Ue("rim",T,Ke.uRim.value);const Gt=tt("veil",T)*(D?.75:1)*n.A;v.material.uniforms.uVeil.value=Gt,v.visible=Gt>.002},prerender(){}}}const fa="home",wt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,e0=5,So=new URLSearchParams(location.search).get("earthfreeze"),t0=new URLSearchParams(location.search).get("cl")!=="old",Ka=!0,Mt=[3.1,3.9];let va=.5;const Dt={a:0,b:0};let fe=null,We=null,Q=null,we=null,Nt=null,He=null,St=null,Pe=null,yt=null,wa=null,je=null;const at={alpha:0,time:0,w:1,h:1,dpr:1,textL:1},Le=[5.08,6.2],gn=.5,wn=.05,za=[5.4,6.14];function yn(e,a){a.k=qa?A(4.9,5.2,e)*(1-A(6.3,6.8,e)):0;const t=Math.min(1,Math.max(-.5,(e-za[0])/(za[1]-za[0])));return a.c=-Math.cos(2*Math.PI*t),a.u=(1+a.c)/2,a.textR=a.k*(1-a.u),a}const kt={k:0,u:0,c:0,textR:0};let qa=!1,Te=null;const ja=new Za(35,1,1,1e6),Me={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},la=[0,0,0],na=[0,0,0],ra=[0,0,0],_t=new J,Xe={lat:0,lon:0,tilt:0,head:0,sx:0,sy:0,ok:!1};function ao(e,a){if(!Pe||e<=Le[0])return;Xe.ok||(Yt(Le[0],Xe),Xe.ok=!0);const t=A(Le[0],Le[1],e);a.lat=Xe.lat,a.lon=Xe.lon,a.head=Xe.head,a.tilt=Xe.tilt*(1-t),a.sx=Xe.sx+(.3-Xe.sx)*t,a.sy=Xe.sy+(0-Xe.sy)*t}function $a(e,a,t){Yt(a,Me),ao(a,Me),Go(Me.lat,Me.lon+e,Me.d,Me.tilt,Me.head,la,na,ra),t.position.set(la[0],la[1],la[2]),t.up.set(na[0],na[1],na[2]),t.lookAt(ra[0],ra[1],ra[2]),t.aspect=re/ge,t.near=Math.max(.02,Me.d*.02),t.far=Math.max(Me.d*4,Me.d+2.2*X)+2e5,t.updateProjectionMatrix(),t.projectionMatrix.elements[8]=-Me.sx,t.projectionMatrix.elements[9]=-Me.sy,t.projectionMatrixInverse.copy(t.projectionMatrix).invert(),t.updateMatrixWorld();const o=De(j.lat,j.lon);return _t.set(o[0],o[1],o[2]).project(t),(_t.x*.5+.5)*(we.clientWidth||innerWidth)}function a0(){const e=document.querySelector("#container-probe i")?.getBoundingClientRect();return e&&e.width>0?e.left+e.width/2:innerWidth/2}function An(){const e=re+"x"+ge;if(Te&&Te.key===e)return Te.v;const a=a0();let t=0,o=1/0;for(let l=-30;l<=60;l+=.25){const s=$a(l,Le[1],ja);_t.z<1&&Math.abs(s-a)<o&&(o=Math.abs(s-a),t=l)}return Yt(Le[1],Me),ao(Le[1],Me),Te={key:e,v:t,goal:a,lat:Me.lat,lon:Me.lon,sx:Me.sx,sy:Me.sy},Te.v}const pt=[4.85,5.08];let Rt=null,ot=null,Et=null,V=null,ya=0,Ro=null,ne=!1,Oe=null;const bn=performance.now(),Fa=[{t:0,lat:j.lat-.012,lon:j.lon,d:6.5,tilt:74,head:-30,sx:.3,sy:.02},{t:1,lat:j.lat-.008,lon:j.lon,d:7.2,tilt:70,head:-20,sx:.3,sy:0},{t:2,lat:j.lat-.004,lon:j.lon,d:8.4,tilt:62,head:-9,sx:.3,sy:0},{t:3,lat:j.lat,lon:j.lon,d:9.6,tilt:52,head:2,sx:.3,sy:0},{t:4,lat:j.lat,lon:j.lon,d:11,tilt:46,head:12,sx:.8,sy:-.22},{t:4.5,lat:j.lat,lon:j.lon-.05,d:75,tilt:32,head:8,sx:.55,sy:-.26},{t:5,lat:49.85,lon:15.45,d:780,tilt:14,head:0,sx:.32,sy:-.2},{t:5.5,lat:50,lon:14.2,d:2300,tilt:6,head:0,sx:.3,sy:-.1},{t:6,lat:49,lon:12,d:5600,tilt:0,head:0,sx:.3,sy:0},{t:7,lat:38,lon:9,d:23e3,tilt:0,head:0,sx:.32,sy:0},{t:8,lat:30,lon:-4,d:34e3,tilt:0,head:0,sx:1.2,sy:.95}],o0=Fa.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),l0=Fa.map(e=>e.t===5?{...e,d:1500,sx:-.3,sy:-.52}:e.t===5.5?{...e,sx:-.42,sy:-.56}:e),n0=[...l0.map(e=>e.t===2?{...e,tilt:58,head:-18}:e.t===3?{...e,tilt:50,head:6,d:9.2}:e),{t:2.5,lat:j.lat-.002,lon:j.lon,d:8.8,tilt:54,head:-8,sx:.3,sy:0}].sort((e,a)=>e.t-a.t),Mn=n0.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),ma={lat:j.lat,lon:j.lon,head:10.2},Ea={...ma,d:11,tilt:46,sx:.62,sy:-.08},r0=[{t:0,...ma,d:12.5,tilt:76,sx:.3,sy:0},{t:1,...ma,d:11.2,tilt:72,sx:.3,sy:0},{t:2,...ma,d:11,tilt:56,sx:.5,sy:-.04},{t:2.5,...Ea},{t:3,...Ea},{t:4,...Ea},...Fa.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],Sn=[...r0.filter(e=>e.t<=4).map(e=>({...e,sx:0,sy:-.12})).map(e=>e.t===2?{...e,d:16}:e.t===2.5?{...e,d:19}:e.t===3||e.t===4?{...e,d:22}:e),...o0.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],gt=1.5,Rn=[{t:0,lat:j.lat-.012,lon:j.lon,d:8,tilt:80,sx:.3,sy:.02},{t:1,lat:j.lat-.008,lon:j.lon,d:8.5,tilt:76,sx:.3,sy:0}],Fo=[[0,10.2],[gt,10.2]];function Fn(e,a){const t=Bt(e),o=r=>({t:r,...t(r,{})}),l=Rn.map(r=>a?{...r,sx:0,sy:-.12}:r),s=[...l,o(gt),o(gt+.3)],u=Ma([...Fo.map(r=>r[0]),gt+.3],[...Fo.map(r=>r[1]),s[s.length-1].head]),g=Bt(s.map(({head:r,...x})=>x)),d={lat:j.lat,lon:j.lon,head:10.2,sx:a?0:.69,sy:a?-.12:-.05},v=Bt([[0,12.5,76],[1,11.2,72],[2,9.4,62],[2.5,8.3,53],[3,7.48,47.5],[4,7.48,47.5]].map(([r,x,b])=>({t:r,...d,d:x,tilt:b}))),c=r=>{const x=v(r,{});return delete x.head,{t:r,...x}},i=Bt([...l,c(gt),c(gt+.3)]);return(r,x)=>r>=gt?t(r,x):(r<=1?i(r,x):g(r,x),x.head=u(r),x)}let Yt=null;const A=(e,a,t)=>{const o=Math.min(1,Math.max(0,(t-e)/(a-e)));return o*o*(3-2*o)},q={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},he={resW:1,resH:1,time:0,asm:0,wave:1,map:0,houses:0,marks:0,alpha:1,points:1,focal:1e3,far:30},K={alpha:0,space:0,atm:0,s0:1,lod:0,markR:1,mark:0,time:0,night:0,photo:0,clouds:0,lines:0,rivers:0,cz:0,czk:0,stars:0,px:1,scrimLeft:0,scrimAll:0,hole:0,holeR:Be},Fe={},ce={},pe={};let _e=0,vt=0,Ha=0,ct=0,Va=0,qt=0,_o=0;const ht=[0,0,0],ia=[0,0,0],sa=[0,0,0],_n=14,Ie={a:0,b:0,f0:0,f1:0,spin:0,leave:0,on:!1};function Tn(e){if(!Ie.on){Ie.spin=0,Ie.leave=0;return}Ie.spin=_n*A(Ie.a,Ie.b,e),Ie.leave=A(Ie.f0,Ie.f1,e)}function Ln(){const e=document.querySelector("#canvas-wrapper");if(!e)return null;let a=e.querySelector("canvas.canvas-earth");return a||(a=document.createElement("canvas"),a.className="canvas-earth",a.setAttribute("aria-hidden","true"),e.append(a)),a}function Na(){Xt.measures++;const e=innerHeight,a=r=>{const x=document.querySelector(r);if(!x)return null;const b=x.getBoundingClientRect();return{y:b.top+scrollY,h:b.height}},t=a("main .about"),o=a("main .growth"),l=a("main .reach"),s=a("main .companies"),u=a("main .values"),g=a("main .social");if(!t||!o||!l||!s||!u||!g){Oe=null;return}const d=S0(),v=new Array(11).fill(0);v[0]=d;const c=r=>r.y+.5*r.h-.5*e;if(v[1]=d+.8*e,v[2]=v[1]+1.1*e,v[3]=v[2]+1.1*e,Dt.a=v[3]-.25*e,Dt.b=Dt.a+1*e,v[4]=Dt.b+.15*e,qa=matchMedia("(min-width: 901px)").matches,qa?(v[5]=v[4]+1.5175*e,v[6]=v[5]+1.0508*e,v[9]=v[6]+3.5016*e):(v[5]=c(l),v[6]=Math.max(v[5]+1.05*e,s.y-.55*e),v[9]=u.y-.2*e),v[8]=v[9]-1.5*e,v[7]=(v[6]+v[8])/2,v[10]=v[9]+.8*e,!(V==="ink"&&Ka)){if(V==="ink"){const r=[1.1,.7,1.2,1.2,1,1.2,1.4,1.6],x=r.reduce((M,z)=>M+z,0),b=document.documentElement.scrollHeight-e-v[2],p=Math.min(1,Math.max(.3,b/(x*e)));for(let M=0;M<r.length;M++)v[M+3]=v[M+2]+r[M]*e*p}}for(let r=1;r<v.length;r++)v[r]=Math.max(v[r],v[r-1]+40);const i=[0,1,2,3,4,4.5,5,5.5,6,7,8];Oe={ys:v,ts:i,start:d,map:Ma(v,i)},V==="ink"&&Ka&&(Mt[0]=Oe.map(Dt.a),Mt[1]=Oe.map(Dt.b),Pn(g)),Ie.on=!1}function i0(e){return Oe?Oe.map(e):0}function s0(e){if(!Oe)return 0;let a=Oe.ys[0],t=Oe.ys[Oe.ys.length-1];for(let o=0;o<40;o++){const l=(a+t)/2;Oe.map(l)<e?a=l:t=l}return(a+t)/2}let re=0,ge=0;function u0(){const e=Math.min(ne?1.5:1.75,window.devicePixelRatio||1),a=Math.max(1,Math.round(we.clientWidth*e)),t=Math.max(1,Math.round(we.clientHeight*e));a===re&&t===ge||(re=a,ge=t,fe.setPixelRatio(1),fe.setSize(a,t,!1),Q.aspect=a/t,Rt?.resize(a,t),ot?.resize(a,t),yt?.resize(a,t))}const xt=new J,zt=new J,ua=new J,le={amount:0,time:0,w:1,h:1,hx:0,hy:0,r:1,dark:0,erode:0,dim:0,fly:0,neon:0,done:!1,textL:1,px:1};let To=null;function Cn(e,a){if(le.amount=A(.35,1,e)*(Pe?1:1-A(3.8,4.4,e)),le.dark=0,le.erode=Va,le.dim=.55*A(0,.35,_e)*(1-vt),le.fly=qt,le.neon=ce.neon||0,le.done=!!Pe&&qt>=1,le.textL=ne?1:.45,le.px=re/(we.clientWidth||re),le.amount>.002){const t=De(j.lat,j.lon);xt.set(t[0],t[1],t[2]).project(Q),le.hx=(xt.x*.5+.5)*re,le.hy=(xt.y*.5+.5)*ge;const o=Be/(111.32*Math.cos(j.lat*Math.PI/180)),l=De(j.lat,j.lon+o);xt.set(l[0],l[1],l[2]).project(Q),le.r=Math.max(.33*ge,Math.abs((xt.x*.5+.5)*re-le.hx)),Q.getWorldDirection(zt),ua.copy(Q.position).normalize();const s=Q.position.length(),u=zt.dot(ua);if(zt.addScaledVector(ua,-u),s>X&&zt.lengthSq()>1e-8){zt.normalize();const g=X/s,d=Math.sqrt(1-g*g);xt.copy(zt).multiplyScalar(g).addScaledVector(ua,-d).multiplyScalar(Math.sqrt(s*s-X*X)).add(Q.position).project(Q),le.top=(xt.y*.5+.5)*ge-.04*ge}else le.top=1e6;le.topF=.1*ge}if(le.t=e,t0){const t=To||(To=document.querySelector(".acc-areas")),o=t&&t.getBoundingClientRect();if(o&&o.height>0){const l=innerHeight,s=o.top+.5*o.height,u=l+.5*o.height,g=.5*l;le.accP=[Math.min(1,Math.max(0,(u-s)/(u-g))),Math.min(1,Math.max(0,(g-s)/(.5*l)))]}else le.accP=null}le.time=a,le.w=re,le.h=ge,St.update(le)}const te={yc:0,y0:0,y1:0,ok:!1,map:null},be={on:!1,A:0,D:0,e:-1,stars:0,estars:0,time:0,w:1,h:1,px:1,lite:!1,camera:null,now:0};function Pn(e){if(te.ok=!1,!e)return;const a=innerHeight;te.yc=s0(7),te.y0=te.yc,te.y1=Math.max(te.y0+1.5*a,e.y+e.h-a);const t=Math.min(te.y1-.5*a,Math.max(te.y0+.5*a,e.y-.6*a));te.map=Ma([te.y0,t,te.y1],[0,.22,1]),te.ok=!0}function Dn(e){return-1+.5*Math.min(1,Math.max(0,(e-.14)/.6))+.5*A(.14,.74,e)+A(.74,1,e)}function kn(e,a){if(!je||!te.ok)return;const t=innerHeight;e>te.yc-2.5*t&&je.load(fe,!ne||re>1100),be.on=e>=te.yc;const o=Math.min(1,Math.max(0,te.map(Math.min(te.y1,Math.max(te.y0,e))))),l=Dn(o),s=1-A(-.3,.45,l);be.D=o,be.e=l,be.A=A(te.y0,te.y0+.5*t,e),be.stars=A(te.y0,te.y0+1.1*t,e)*s,be.estars=0,be.time=a,be.w=re,be.h=ge,be.px=re/(we.clientWidth||re),be.lite=ne,be.camera=Q,be.now=performance.now(),je.update(be)}const zn="a,button,input,textarea,select,label,summary,details,video,audio,img,picture,svg,iframe,[role=button],[role=link],[contenteditable],[tabindex]";function En(e,a){const t=document.caretRangeFromPoint?.(e,a),o=t?.startContainer;if(!o||o.nodeType!==3||!o.data.trim())return!1;const l=document.createRange();for(const s of[t.startOffset-1,t.startOffset])if(!(s<0||s>=o.data.length)){l.setStart(o,s),l.setEnd(o,s+1);for(const u of l.getClientRects())if(e>=u.left-2&&e<=u.right+2&&a>=u.top-2&&a<=u.bottom+2)return!0}return!1}function Hn(e){if(!je||!be.on||e.button!==0||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||document.body.dataset.route!==fa)return;const a=e.target;if(!(a instanceof Element)||a.closest(zn)||getSelection&&!getSelection().isCollapsed||En(e.clientX,e.clientY))return;const t=we.getBoundingClientRect();!t.width||!t.height||je.meteor((e.clientX-t.left)*(re/t.width),ge-(e.clientY-t.top)*(ge/t.height))}function c0(e,a){if(_e=Pe?Math.min(1,Math.max(0,(e-Mt[0])/(Mt[1]-Mt[0]))):0,ct=A(.6,.9,_e),Va=Math.pow(Math.min(1,_e/va),.55),qt=Math.min(1,Math.max(0,(_e-va)/(1-va))),vt=A(.6,.95,_e),Ha=A(.65,1,_e),Yt(e,q),Pe){ao(e,q);const i=An();if(!(e<=Le[0]))if(e<=Le[1]){Te.x0===void 0&&(Te.x0=$a(0,Le[0],ja));const r=Te.x0+(Te.goal-Te.x0)*A(Le[0],Le[1],e);let x=0,b=i*1.3;for(let p=0;p<22;p++){const M=(x+b)/2;$a(M,e,ja)>r?x=M:b=M}q.lon+=(x+b)/2}else{q.lat=Te.lat,q.lon=Te.lon+i;const r=A(Le[1],7.3,e);q.sx=Te.sx+(1.3-Te.sx)*r,q.sy=Te.sy+(.15-Te.sy)*r}}Ie.spin&&(q.lon+=Ie.spin);const t=0;Go(q.lat,q.lon,q.d,q.tilt,q.head,ht,ia,sa),Q.position.set(ht[0],ht[1],ht[2]),Q.up.set(ia[0],ia[1],ia[2]),Q.lookAt(sa[0],sa[1],sa[2]);const o=Math.hypot(ht[0],ht[1],ht[2])-X;if(Q.near=Math.max(.02,q.d*.02),Q.far=Math.max(q.d*4,q.d+2.2*X)+2e5,Q.updateProjectionMatrix(),Q.projectionMatrix.elements[8]=-q.sx,Q.projectionMatrix.elements[9]=-q.sy,Q.updateMatrixWorld(),yn(e,kt),kt.k>0&&Pe){const i=De(j.lat,j.lon);_t.set(i[0],i[1],i[2]).project(Q);const r=_t.x*.5+.5,x=gn+wn*kt.c;q.sx+=2*(x-r)*kt.k,Q.projectionMatrix.elements[8]=-q.sx}Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert();const l=ge/(2*Math.tan(Q.fov*Math.PI/360)),s=He?1-A(30,140,q.d):1-A(14,42,q.d);if(he.time=a,he.asm=A(1.85,3.05,e),he.wave=1-A(1.9,3,e),he.map=A(2.45,3.2,e),he.houses=A(2.55,3.45,e),he.marks=A(3,3.5,e)*(1-A(13,24,q.d)),he.points=1-.45*A(3,4,e),he.alpha=s*(1-vt),he.focal=l,he.resW=re,he.resH=ge,he.far=Math.max(14,q.d*2.6),he.hideTech=!!He,he.hideMarks=V==="ink",Nt?.update(he),Pe){Object.assign(ce,he),ce.hideTech=!1,ce.hideMarks=!1,ce.asm=1,ce.wave=0,ce.scr=St&&qt<1?1:0,ce.dust=Va,ce.fly=qt,ce.neon=A(.72,.86,_e),ce.cloudA=Math.max(.001,A(1.5,2.4,e)),ce.cloudTex=St?.texture,_e<=0&&(_o=a);const i=a-_o;ce.driftX=Math.min(.035,i*(.035/1.6)*2*ge/re),ce.driftY=-Math.min(.006,i*(.006/1.6)*2),ce.dustL=ne?1:.45,ce.map=A(.7,1,_e),ce.camera=Q,ce.houses=A(.75,1,_e),ce.marks=A(.88,1,_e)*(1-A(13,24,q.d)),ce.points=1-.45*A(.9,1,_e),ce.alpha=(1-A(40,75,q.d))*(_e>0?1:0),Pe.update(ce)}St&&Cn(e,a);const u=Math.max(.03,q.d*.0055),g=Math.log2(u),d=Math.floor(g);K.s0=Math.pow(2,d),K.sc=u,K.lod=g-d;const v=He?A(3.7,4.5,e):A(2.8,3.8,e)*.6+A(4,4.6,e)*.4,c=Pe?A(Le[1]+.05,6.75,e):A(7.2,7.95,e);if(K.alpha=v*(1-c),K.spin=Ie.spin+ue.lon*t,K.sunLat=ue.lat*t,K.space=A(5.2,6.4,e),K.atm=A(5,6.2,e),K.markR=Math.max(.6,o*.012),K.mark=V==="ink"?0:A(18,50,q.d)*(1-c),K.time=a,K.night=V==="mix"?A(5.6,6.6,e):0,K.photo=V==="photo"?A(120,420,q.d):0,K.clouds=V==="photo"?A(5.4,6.6,e)*.85:0,K.lines=A(4.1,4.9,e)*(1-c),K.rivers=A(4.1,4.7,e)*(1-A(5.6,6.2,e))*(1-K.photo),K.cz=A(4.3,5,e)*(1-c),K.stars=V==="light"||He?0:A(5.6,6.8,e),K.px=Math.min(2,fe.getPixelRatio()*(re/we.clientWidth||1)),K.czk=He?A(40,260,q.d):A(120,520,q.d),K.hole=s*he.map,K.holeR=Be,K.scrimLeft=ne?0:V==="light"?.6:.72,K.scrimAll=ne?V==="light"?.45:.5:0,He&&(K.scrimLeft=0,K.scrimAll=0),ot){const i=A(4.9,6,e),r=Math.exp(Math.log(5e3)+(Math.log(15)-Math.log(5e3))*i);K.revMode=0,K.revR=r,K.revA=1-i,Object.assign(Fe,K),Fe.revMode=0,Fe.revA=i,Fe.alpha=i>.001?K.alpha*i:0,K.alpha*=1-A(.85,1,i),Fe.space=0,Fe.stars=0,Fe.hole=0,Fe.photo=1,Fe.clouds=A(5.4,6.6,e)*.7,Fe.night=0,Fe.rivers=0,Fe.lines=K.lines*.5*i,Fe.veil=.5*(1-A(5.9,6.7,e)),Fe.cz=K.cz*i,Fe.scrimLeft=0,Fe.scrimAll=0,ot.update(Fe,Q),K.revRibbons=1-i}else K.revRibbons=1;if(yt){Object.assign(pe,K);const i=A(2.8,3.8,e)*.6+A(4,4.6,e)*.4;pe.alpha=i*(1-c)*Ha*A(.5,1,ct),pe.haloAlpha=i*(1-A(Le[1]+.3,7,e))*Ha*A(.5,1,ct),pe.mark=A(18,50,q.d)*(1-c),pe.markBlue=A(pt[0],pt[1],e),pe.markGrow=1+.75*(1-A(pt[0],6,e)),pe.stars=A(5.6,6,e)*(1-A(Le[1],Le[1]+.25,e)),pe.czk=A(120,520,q.d);const r=A(30,75,q.d);pe.hole=he.map*(1-A(72,100,q.d)),pe.holeR=7+(pe.markR*.45-7)*r,pe.scrimLeft=(ne?0:.72)*ct,pe.scrimSide=kt.textR,pe.scrimAll=(ne?.5:0)*ct,pe.photo=0,pe.clouds=0,pe.night=0,pe.spin=0,pe.sunLat=0,pe.revRibbons=1,yt.update(pe,Q),wa&&(at.alpha=A(pt[0]+.6*(pt[1]-pt[0]),pt[1],e)*(1-c),at.textL=ne?1:.3,at.textR=kt.textR,at.time=a,at.d=q.d,at.w=re,at.h=ge,at.dpr=re/(we.clientWidth||re),wa.update(at)),K.alpha*=1-vt}Rt?.update(K,Q),He&&On(e,a,l,o,s,c)}const oo=new Set,Xt={log:null,measures:0},Nn=e=>{oo.has(e.name)&&(e.visible=!1)};let Lo=0;const W={flat:0,pre:0,neonT:0,neonP:0,grow:0,ft:0,time:0,asm:0,wave:1,focal:1,far:30,dpr:1,w:1,h:1,cssW:1,cssH:1,bg:0,city:0,alpha:1,cam:null,fadeKm:100,veil:.9,sphere:{al:[0,0,0,0],ag:0,draw:[1,1,1,1],reg:[0,0],reach:0}},In={lines:[.62,.55,.95,.5],ink:[.85,.7,1,.65]};function On(e,a,t,o,l,s){if(W.time=a,W.asm=he.asm,W.wave=he.wave,W.focal=t,W.far=he.far,W.w=re,W.h=ge,W.cssW=we.clientWidth||1,W.cssH=we.clientHeight||1,W.dpr=re/W.cssW,W.bg=A(-.6,.9,e),W.city=V==="ink"?A(1.9,2.8,e):V==="lines"?A(3,3.5,e):A(2.4,3.3,e),W.alpha=l*(1-vt),Pe){const i=le.done?0:le.dim;W.holdA=A(.18,.3,_e)*(1-A(40,75,q.d)),W.bake=Math.max(0,1-.17/Math.max(.17,1-i)),W.ground=1-ct,W.tint=ct}else W.holdA=0,W.bake=0,W.ground=1,W.tint=0;W.cam=Q.position,W.camera=Q,W.fadeKm=Math.max(1,o*.05),W.veil=0;{const i=V==="ink"?-.5:0;W.flat=A(1.55,2.25,e),W.pre=1-A(1,1.45,e);const r=V==="ink"&&ol()?1:0;W.neonT=r*(1-A(1.6,2.3,e)),W.neonP=r*(1-A(3.9,4.5,e))*(1-.6*W.city),W.neonP*=1-vt,W.asm=A(2+i,3.05+i,e),W.grow=V==="lines"?A(2.95,3.6,e):A(2.6+i,3.45+i,e),W.hatch=A(2.85+i,3.4+i,e),W.paint=A(2.75+i,3.15+i,e),K.inkH=A(4.7,5.4,e),K.inkP=A(4.55,5.1,e),W.ft+=Math.max(0,a-Lo)*(1-.9*W.flat)*(V==="lines"&&Qa?.5:1);const x=A(3.3,4,e)*(1-A(5.8,6.5,e)),b=A(4.3,4.9,e),p=V==="ink"?A(110,220,q.d):1,M=1-vt;W.sphere.reg[0]=.55*x*p*(1-.6*b)*M,W.sphere.reg[1]=.8*x*p*(1-.45*b)*M,W.sphere.reach=Math.exp(Math.log(.004)+(Math.log(.45)-Math.log(.004))*A(3.35,5.2,e))}Lo=a;const u=In[V],g=A(3.8,4.4,e)*(1-s)*(1-vt),d=1-A(5.6,6.3,e),v=K.revRibbons??1,c=V==="ink"?A(500,1100,q.d):1;W.sphere.al[0]=u[0]*g*v*c,W.sphere.al[1]=u[1]*g*v*c,W.sphere.al[2]=u[2]*g,W.sphere.al[3]=u[3]*g*d*v*c,W.sphere.ag=V==="lines"?.32*A(5.4,6.4,e)*(1-s):0,W.sphere.draw[0]=A(3.9,5.4,e),W.sphere.draw[1]=A(4,5.2,e),W.sphere.draw[2]=A(3.9,4.6,e),W.sphere.draw[3]=A(3.85,4.5,e),He.update(W)}let Xa=-1;function Gn(e,a=e>=.5){const t=Math.round(e*100)/100,o=document.documentElement;o.classList.toggle("earth-night",a),t!==Xa&&(Xa=t,o.style.setProperty("--earth-dark",String(t)))}let jt=-1,Co=-1,f0=!1,Po=performance.now();function v0(){if(!Oe||!Nt||!Rt)return;const e=window.scrollY||0,a=innerHeight,t=wt?1:A(Oe.start-.55*a,Oe.start+.05*a,e),o=t.toFixed(3);if(we.style.opacity!==o&&(we.style.opacity=o),t<=.001)return;u0();const l=wt?e0:i0(e);wt?(Ie.spin=0,Ie.leave=0):Tn(e);const s=wt?0:So!==null?Number(So):(performance.now()-bn)/1e3,u=performance.now();Sl(Math.min(.1,(u-Po)/1e3),f0&&we.style.opacity>.5),Po=u,!(wt&&l===Co&&e===jt&&!ue.dirty)&&(Co=l,jt=e,c0(l,s),Pe&&Gn(Math.max(ct,A(0,.4,_e)),A(.08,.2,_e)>.5),kn(e,s),Xt.log&&Xt.log.push([performance.now(),e,l,q.d,q.tilt,q.head]),oo.size&&We.traverse(Nn),St?.prerender(fe,Q),je?.prerender(fe),fe.render(We,Q))}async function Un(){const e=ne?256:512,a=(f,R)=>L0(f,{srgb:R,renderer:fe}),t=[a("land.webp"),a("europe.webp"),a("pardubice.webp",!1)];(V==="photo"||Et==="photo")&&t.push(a("day.webp",!0),a("day-eu.webp",!0),a("clouds.webp"),a("day-ce.webp",!0)),V==="mix"&&t.push(a("night.webp",!0),a("night-eu.webp",!0));const[o,l,s,u,g]=await Promise.all([Promise.all(t),P0(e),D0(),C0(),fetch("/assets/map/pardubice.json").then(f=>f.json())]),[d,v,c,i,r,x,b]=o;if(!Kt.includes(V))for(const f of[d,v])f.generateMipmaps=!1,f.minFilter=Je;const p=Object.values(g.проекты||{});Nt=po({luma:l,lumaSize:e,houses:s,projects:p},c,{side:ne?128:256,field:24,lite:ne,light:V==="light"||Kt.includes(V)}),V==="ink"&&Ka&&(Pe=po({luma:l,lumaSize:e,houses:s,projects:p},c,{side:ne?128:256,field:24,lite:ne,light:!1,glow:!0}));let M=null,z=null;if(V==="ink"){const[f,R,I,k,E,G,m]=await Promise.all([a("land-dem.webp"),a("land-a.webp"),a("land-b.webp"),a("land-far.webp"),a("land-hor.webp"),a("neon-near.webp"),a("neon-far.webp")]);for(const y of[f,R,I,k,E,G,m])y.wrapS=y.wrapT=$t,y.flipY=!1,y.needsUpdate=!0;I.magFilter=Qt,I.minFilter=Qt,I.generateMipmaps=!1;for(const y of[f,k,E,G,m])y.magFilter=Qt,y.minFilter=Qt,y.generateMipmaps=!1;M={dem:f,a:R,b:I,far:k,hor:E,neonN:G,neonF:m},z=(await(await fetch(mt+"land-routes.json")).json()).routes,o.push(f,R,I,k,E,G,m)}Kt.includes(V)&&(He=await al(V,c,{lite:ne,houses:s,pdb:j,land:M,routes:z}));const N=new xa,_=Oo(j.lat,j.lon),H=De(j.lat,j.lon);N.makeBasis(new J(..._.e),new J(..._.u),new J(-_.n[0],-_.n[1],-_.n[2])).setPosition(H[0],H[1],H[2]),Nt.group.matrixAutoUpdate=!1,Nt.group.matrix.copy(N),Pe&&(Pe.group.matrixAutoUpdate=!1,Pe.group.matrix.copy(N));const L={land:d,eu:v};if((V==="photo"||Et==="photo")&&Object.assign(L,{day:i,dayEu:r,clouds:x,dayCe:b}),V==="mix"&&Object.assign(L,{night:i,nightEu:r}),Rt=Da(V,L,u,{pdb:j,lite:ne}),Et&&(ot=Da(Et,L,u,{pdb:j,lite:ne}),ot.group.traverse(f=>{f.isGroup||(f.renderOrder+=.5)})),We.add(Rt.group,Nt.group),ot&&We.add(ot.group),Pe&&(yt=Da("dots",L,u,{pdb:j,lite:ne}),We.add(yt.group,Pe.group),wa=tn(j),We.add(wa.group),je=xn({lite:ne}),je.adoptStars(yt.group.getObjectByName("stars")),We.add(je.group),wt||document.addEventListener("click",Hn)),He&&(He.cityGroup.matrixAutoUpdate=!1,He.cityGroup.matrix.copy(N),We.add(He.cityGroup,He.sphereGroup,He.veil),V==="ink")){let f=null;if(t0){const[R,I]=await Promise.all([a("cloud-noise.png"),a("cloud-perlin.png")]);f=hl({noise:R,perlin:I,frame:N}),o.push(R,I),fe.compile(f.scene,Q),window.__cfigMF={layout:Xo,cfg:jo,fly:Vo,tiers:$o,place:f.place,u:f.uniforms,sets:f.sets,screen:f.screen,mf:f}}St=il(f),We.add(St.mesh)}re=0,u0(),Rt.resize(re,ge),ot?.resize(re,ge),yt?.resize(re,ge);for(const f of o)fe.initTexture(f);We.traverse(f=>{f.visible=!0}),fe.compile(We,Q),c0(wt?e0:0,0),(V==="photo"||Et==="photo")&&Wn(),window.__cfigEarth={hide:oo,dbg:Xt,grab:ue,grabProbe:Ml,yOf:s0,look:V,get t(){return i0(scrollY)},knots:()=>Oe,P:q,renderer:fe,scene:We,clouds:le,dig:()=>[Mt[0],Mt[1],va],meteors:()=>je?.meteors??0,meteorAt:(f,R,I,k,E)=>je?.meteor(f,R,{x:f,y:R,ang:I,sg:k,I:E}),dawn:()=>({yc:te.yc,y0:te.y0,y1:te.y1,ok:te.ok,D:be.D,e:be.e,A:be.A,ready:je?.ready,yOfD:f=>{let R=te.y0,I=te.y1;for(let k=0;k<40;k++){const E=(R+I)/2;te.map(E)<f?R=E:I=E}return(R+I)/2}}),pdbX:()=>{Q.updateMatrixWorld();const f=De(j.lat,j.lon);return _t.set(f[0],f[1],f[2]).project(Q),{x:(_t.x*.5+.5)*we.clientWidth,mid:a0(),spin:Te?.v}}}}let Do=null;function Wn(){if(Do)return;const e=ne?"4k":fe.capabilities.maxTextureSize>=8192?"8k":"4k";Do=Promise.all([io(`day-${e}.webp`,{srgb:!0,renderer:fe}),io(`clouds-${e}.webp`,{red:!0,renderer:fe})]).then(([a,t])=>{fe.initTexture(a),fe.initTexture(t);const o=new Set;for(const l of[Rt,ot])for(const s of l?.setPhoto(a,t)||[])o.add(s);for(const l of o)l?.dispose();Xt.photoHi=e}).catch(a=>console.warn("[cfig] резкая Земля не подгрузилась:",a))}function Ya(){ue.on=!1,f0=!1,document.documentElement.classList.remove("earth-grab","earth-grabbing"),ya&&(Io.ticker.remove(v0),ya=0),we&&(we.style.opacity="0")}function Vn(){if(V=M0(),Et=null,document.body.dataset.route!==fa||!V){Ya();return}if(!fe){if(we=Ln(),!we)return;ne=Math.min(innerWidth,innerHeight)<720||matchMedia("(pointer: coarse)").matches;try{fe=new b0({canvas:we,alpha:!0,antialias:!ne,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{fe=null;return}fe.setClearColor(0,0),fe.sortObjects=!0,We=new ba,Q=new Za(35,1,.05,1e6),Yt=V==="ink"?Fn(ne?Sn:r0,ne):Bt(Kt.includes(V)?ne?Mn:n0:ne?o0:Kt.includes(V)?l0:Fa),Ro=Un().catch(e=>{console.warn("[cfig] Земля не поднялась:",e),Ya()}),addEventListener("resize",()=>{Na(),jt=-1},{passive:!0}),new ResizeObserver(()=>{document.body.dataset.route===fa&&(Na(),jt=-1)}).observe(document.documentElement)}Na(),jt=-1,Xa=-1,Ro.then(()=>{He?.collect(),!ya&&document.body.dataset.route===fa&&(Io.ticker.add(v0),ya=1)})}document.addEventListener("astro:before-preparation",e=>{we&&e.to&&new URL(e.to).pathname!==location.pathname&&Ya()});export{Vn as init};
