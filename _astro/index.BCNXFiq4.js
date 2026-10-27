import{T as a0,a as Ro,N as da,n as $a,ar as $t,L as pa,o as St,aN as Fo,as as Da,aO as o0,G as Et,V as Pe,M as we,c as za,b as se,O as lt,i as ze,j as wt,ae as to,D as Ut,a2 as Ve,g as te,aP as Ea,B as Ie,e as O,aQ as l0,S as To,k as n0,l as r0,f as qe,p as i0,h as s0,A as u0,ag as Po,d as Vt,K as Ia,aR as Na,a4 as Ha,W as c0,P as Co,aS as Qt}from"./three.module.B-8iX7Ma.js";import{P as Kt,e as f0}from"./Lab.astro_astro_type_script_index_0_lang.BKhPu4E9.js";import{g as ko,n as v0}from"./Base.astro_astro_type_script_index_0_lang.Cv7DTtj1.js";import{a as m0,L as d0,b as p0}from"./LineSegments2.BFSDPGbA.js";import"./router.UeToN5xW.js";const X=6371,K={lat:50.039378,lon:15.77521},$e=3.75,It=Math.PI/180;function Ce(e,t,a=X,l=[0,0,0]){const i=e*It,s=t*It,c=Math.cos(i);return l[0]=a*c*Math.sin(s),l[1]=a*Math.sin(i),l[2]=a*c*Math.cos(s),l}function Do(e,t){const a=e*It,l=t*It,i=Math.sin(a),s=Math.cos(a),c=Math.sin(l),x=Math.cos(l);return{e:[x,0,-c],u:[s*c,i,s*x],n:[-i*c,s,-i*x]}}function wa(e,t){const a=e.length,l=new Float64Array(a-1),i=new Float64Array(a);for(let s=0;s<a-1;s++)l[s]=(t[s+1]-t[s])/(e[s+1]-e[s]);i[0]=l[0],i[a-1]=l[a-2];for(let s=1;s<a-1;s++)i[s]=l[s-1]*l[s]<=0?0:(l[s-1]+l[s])/2;for(let s=0;s<a-1;s++){if(l[s]===0){i[s]=0,i[s+1]=0;continue}const c=i[s]/l[s],x=i[s+1]/l[s],d=c*c+x*x;if(d>9){const v=3/Math.sqrt(d);i[s]=v*c*l[s],i[s+1]=v*x*l[s]}}return s=>{if(s<=e[0])return t[0];if(s>=e[a-1])return t[a-1];let c=0;for(;s>e[c+1];)c++;const x=e[c+1]-e[c],d=(s-e[c])/x,v=d*d,u=v*d;return(2*u-3*v+1)*t[c]+(u-2*v+d)*x*i[c]+(-2*u+3*v)*t[c+1]+(u-v)*x*i[c+1]}}function Wt(e){const t=e.map(i=>i.t),a=Object.keys(e[0]).filter(i=>i!=="t"),l={};for(const i of a){const s=e.map(c=>i==="d"?Math.log(c[i]):c[i]);l[i]=wa(t,s)}return(i,s)=>{for(const c of a)s[c]=c==="d"?Math.exp(l[c](i)):l[c](i);return s}}function zo(e,t,a,l,i,s,c,x){const d=Do(e,t);Ce(e,t,X,x);const v=l*It,u=i*It,o=d.n[0]*Math.cos(u)+d.e[0]*Math.sin(u),n=d.n[1]*Math.cos(u)+d.e[1]*Math.sin(u),y=d.n[2]*Math.cos(u)+d.e[2]*Math.sin(u),M=Math.cos(v)*a,g=Math.sin(v)*a;s[0]=x[0]+d.u[0]*M-o*g,s[1]=x[1]+d.u[1]*M-n*g,s[2]=x[2]+d.u[2]*M-y*g,c[0]=o,c[1]=n,c[2]=y}const ft="/assets/earth/",ea={lon0:-12,lon1:44,lat0:34,lat1:62},ta={lon0:9.5,lon1:22.5,lat0:46.5,lat1:53.5},h0=new a0;function x0(e,{srgb:t=!1,renderer:a=null}={}){return new Promise((l,i)=>{h0.load(ft+e,s=>{s.colorSpace=t?Ro:da,s.wrapS=$a,s.wrapT=$t,s.minFilter=pa,s.magFilter=St,a&&(s.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy())),l(s)},void 0,i)})}function ao(e,{srgb:t=!1,red:a=!1,renderer:l=null}={}){const i=new Fo;return i.setOptions({imageOrientation:"flipY",premultiplyAlpha:"none"}),new Promise((s,c)=>{i.load(ft+e,x=>{const d=new Da(x);d.colorSpace=t?Ro:da,d.flipY=!1,a&&(d.format=o0),d.wrapS=$a,d.wrapT=$t,d.minFilter=pa,d.magFilter=St,l&&(d.anisotropy=Math.min(8,l.capabilities.getMaxAnisotropy())),d.needsUpdate=!0,s(d)},void 0,c)})}async function g0(e=.6){const t=await(await fetch(ft+"lines.bin")).arrayBuffer(),a=new DataView(t);let l=0;const i=a.getUint32(l,!0);l+=4;const s=[],c=[0,0,0];for(let x=0;x<i;x++){const d=a.getUint32(l,!0),v=a.getUint32(l+4,!0);l+=8;const u=new Uint32Array(d);for(let g=0;g<d;g++)u[g]=a.getUint32(l,!0),l+=4;const o=new Float32Array(v),n=new Float32Array(v);for(let g=0;g<v;g++)o[g]=a.getInt16(l,!0)/180,n[g]=a.getInt16(l+2,!0)/180,l+=4;const y=new Float32Array((v-d)*6);let M=0;for(let g=0;g<d;g++){const L=u[g],T=g+1<d?u[g+1]:v;for(let I=L;I<T-1;I++)Ce(n[I],o[I],X+e,c),y[M++]=c[0],y[M++]=c[1],y[M++]=c[2],Ce(n[I+1],o[I+1],X+e,c),y[M++]=c[0],y[M++]=c[1],y[M++]=c[2]}s.push(y.subarray(0,M))}return s}async function w0(e=512){const t=await(await fetch(ft+"pardubice.webp")).blob(),a=await createImageBitmap(t,{resizeWidth:e,resizeHeight:e,resizeQuality:"medium"}),l=document.createElement("canvas");l.width=e,l.height=e;const i=l.getContext("2d",{willReadFrequently:!0});i.drawImage(a,0,0);const s=i.getImageData(0,0,e,e).data,c=new Float32Array(e*e);for(let x=0;x<c.length;x++)c[x]=s[x*4+1]/255;return a.close?.(),c}async function y0(){const e=await(await fetch("/assets/map/pardubice-houses.bin")).arrayBuffer(),t=new DataView(e),a=t.getUint32(0,!0);let l=0,i=4;for(let n=0;n<a;n++){const y=t.getUint16(i,!0);l+=y,i+=6+y*4}const s=new Uint32Array(a),c=new Uint16Array(a),x=new Float32Array(a),d=new Float32Array(a),v=new Float32Array(l),u=new Float32Array(l);i=4;let o=0;for(let n=0;n<a;n++){const y=t.getUint16(i,!0);c[n]=y,x[n]=t.getUint8(i+3)/2,d[n]=t.getUint16(i+4,!0),i+=6,s[n]=o;for(let M=0;M<y;M++)v[o]=t.getUint16(i,!0)/65535,u[o]=t.getUint16(i+2,!0)/65535,i+=4,o++}return{n:a,start:s,cnt:c,h:x,area:d,u:v,v:u}}const Va=`
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
`,ot=3.75,Fe={h:13,n:1024,lo:195,hi:365,far:{h:48,n:1024,lo:180,hi:1150},hor:{h:60,n:512,lo:180,hi:1610,cz:-50}},Qe=24,Xa=(()=>{try{return new URLSearchParams(location.search).get("fx")==="scan"?1:0}catch{return 0}})(),Eo=`
#define FX ${Xa}
#define SCAN_P 8.0
#define SCAN_D 3.6
`,A0={INK1:"#111e2d",INK2:"#29455c",INK3:"#4d677d",BLUE:"#2A6DAA",BLUE2:"#3f9be0",PALE:"#5FA8E0",GOLD:"#8a5f10",PAPER:"#d3d9de"},b0=e=>{const t=parseInt(e.slice(1),16),a=l=>(l/255).toFixed(4);return`vec3(${a(t>>16)}, ${a(t>>8&255)}, ${a(t&255)})`},Nt=Object.entries(A0).map(([e,t])=>`#define C_${e} ${b0(t)}`).join(`
`),ya=`
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
`,Ze={blending:wt,blendSrc:ze,blendDst:lt,blendSrcAlpha:ze,blendDstAlpha:lt},Io=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm2(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Ya=`
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
`,M0=e=>`
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
${Eo}
#if FX == 1
varying float vZf;
#endif
#endif
${Ya}
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
`,S0=e=>`
#define ${e}
${Nt}
uniform float uTime;
uniform float uAlpha;
uniform float uBg;
uniform float uAsm;
uniform float uPass;
${ya}
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
${Eo}
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
${Io}
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
`,No=()=>`
#define LAND_H ${Fe.h.toFixed(1)}
#define LAND_N ${Fe.n.toFixed(1)}
#define DEM_LO ${Fe.lo.toFixed(1)}
#define DEM_HI ${Fe.hi.toFixed(1)}
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
#define FAR_H ${Fe.far.h.toFixed(1)}
#define FAR_N ${Fe.far.n.toFixed(1)}
#define FAR_LO ${Fe.far.lo.toFixed(1)}
#define FAR_HI ${Fe.far.hi.toFixed(1)}
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
`,oo=e=>`
#define ${e}
uniform float uRelief;
uniform float uCity;
uniform float uPre;
varying vec2 vP;
varying float vElev;
varying float vDepth;
#ifdef P_INK
${No()}
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
`,Ho=`
#define HOR_H ${Fe.hor.h.toFixed(1)}
#define HOR_N ${Fe.hor.n.toFixed(1)}
#define HOR_LO ${Fe.hor.lo.toFixed(1)}
#define HOR_HI ${Fe.hor.hi.toFixed(1)}
#define HOR_CZ ${Fe.hor.cz.toFixed(1)}
#define FAR_EDGE ${Fe.far.h.toFixed(1)}
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
`,lo=`
${Ho}
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
`,no=e=>`
${Nt}
${Ho}
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
`,_0=`
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
`,L0=e=>`
#define ${e}
#define FAB_A ${e==="P_LINES"?"0.22":"0.1"}
#define FAB_C C_INK2
${Nt}
uniform sampler2D uMap;
uniform float uTime;
uniform float uBg;
uniform float uCity;
uniform float uAlpha;
uniform float uHatch;
${ya}
uniform sampler2D uLA;
uniform sampler2D uLB;
uniform float uRelief;
uniform float uPre;
#define PRE_G 0.4
varying vec2 vP;
varying float vElev;
varying float vDepth;
${e==="P_INK"?No():""}
${Io}
${Va}
${e==="P_INK"?_0:""}

void main() {
  vec2 p = vP;
  float rr = length(p);
  float fade = 1.0 - smoothstep(9.0, 15.0, rr);
#ifdef P_INK
  // Земля ink — до горизонта (дальний рельеф ±FAR_H км).
  fade = 1.0 - smoothstep(0.8, 0.97, max(abs(p.x), abs(p.y)) / FAR_H);
#endif
  vec2 muv = p / ${(ot*2).toFixed(1)} + 0.5;
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
`,R0=e=>`
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
${Ya}
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
`,F0=e=>`
#define ${e}
${Nt}
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
`,ha=24,T0=`
varying vec2 vPx;
uniform vec2 uRes;
void main() { vPx = (position.xy * 0.5 + 0.5) * uRes; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,P0=`
uniform vec4 uRects[${ha}];
uniform int uN;
uniform float uFeather;
uniform float uStrength;
uniform vec2 uRes;
varying vec2 vPx;
void main() {
  float a = 0.0;
  for (int i = 0; i < ${ha}; i++) {
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
`;function C0(){const e=new Ie;return e.setAttribute("position",new O(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}async function k0(){const e=await(await fetch(ft+"streets.bin")).arrayBuffer(),t=new DataView(e);let a=0;const l=t.getUint32(a,!0);a+=4;const i=[];for(let s=0;s<l;s++){const c=t.getUint32(a,!0),x=t.getUint32(a+4,!0);a+=8;const d=[];for(let o=0;o<c;o++)d.push(t.getUint32(a,!0)),a+=4;const v=new Float32Array(x*2);for(let o=0;o<x;o++)v[o*2]=(t.getInt16(a,!0)/16384-.5)*ot*2,v[o*2+1]=(t.getInt16(a+2,!0)/16384-.5)*ot*2,a+=4;const u=[];for(let o=0;o<c;o++){const n=d[o],y=o+1<c?d[o+1]:x,M=[];for(let g=n;g<y;g++)M.push([v[g*2],v[g*2+1]]);u.push(M)}i.push(u)}return i}async function D0(e){const t=await(await fetch(ft+"lines.bin")).arrayBuffer(),a=new DataView(t);let l=0;const i=a.getUint32(l,!0);l+=4;const s=[];for(let c=0;c<i;c++){const x=a.getUint32(l,!0),d=a.getUint32(l+4,!0);l+=8;const v=[];for(let n=0;n<x;n++)v.push(a.getUint32(l,!0)),l+=4;const u=new Float32Array(d*2);for(let n=0;n<d;n++)u[n*2]=a.getInt16(l,!0)/180,u[n*2+1]=a.getInt16(l+2,!0)/180,l+=4;const o=[];for(let n=0;n<x;n++){const y=v[n],M=n+1<x?v[n+1]:d,g=[];for(let L=y;L<M;L++)g.push([u[L*2],u[L*2+1]]);o.push(Oo(g,c===2?e*.2:e))}s.push(o)}return s}async function z0(e){const t=await(await fetch(ft+"region.bin")).arrayBuffer(),a=new DataView(t);let l=0;const i=a.getUint32(l,!0);l+=4;const s=[];for(let c=0;c<i;c++){const x=a.getUint32(l,!0),d=a.getUint32(l+4,!0);l+=8;const v=[];for(let n=0;n<x;n++)v.push(a.getUint32(l,!0)),l+=4;const u=[];for(let n=0;n<d;n++)u.push([a.getInt16(l,!0)/180,a.getInt16(l+2,!0)/180]),l+=4;const o=[];for(let n=0;n<x;n++)o.push(Oo(u.slice(v[n],n+1<x?v[n+1]:d),e));s.push(o)}return s}function Oo(e,t){if(e.length<3)return e;const a=new Uint8Array(e.length);a[0]=a[e.length-1]=1;const l=[[0,e.length-1]];for(;l.length;){const[i,s]=l.pop();let c=0,x=-1;const[d,v]=e[i],[u,o]=e[s],n=u-d,y=o-v,M=Math.hypot(n,y)||1e-9;for(let g=i+1;g<s;g++){const L=Math.abs((e[g][0]-d)*y-(e[g][1]-v)*n)/M;L>c&&(c=L,x=g)}c>t&&(a[x]=1,l.push([i,x],[x,s]))}return e.filter((i,s)=>a[s])}const E0=`
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
${Ya}
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
`,I0=e=>`
#define ${e}
${Nt}
${ya}
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
`,N0=`
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
`,H0=`
${Nt}
${ya}
uniform float uAlpha;
uniform float uHatch;
varying vec2 vUV;
varying float vSh;
varying float vA;
varying float vPx;
varying float vDel;
varying float vL;
varying float vV;
${Va}
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
`;function O0(e,t){const a=t?400:150,l=1.6/1e3;let i=0;for(let o=0;o<e.n;o++)e.area[o]>=a&&(i+=e.cnt[o]);const s=new Float32Array(i*4*4),c=new Float32Array(i*4*2),x=new Float32Array(i*4*2),d=new Float32Array(i*4*3);let v=0;for(let o=0;o<e.n;o++){if(e.area[o]<a)continue;const n=e.start[o],y=e.cnt[o],M=p=>(e.u[n+p]-.5)*ot*2,g=p=>(e.v[n+p]-.5)*ot*2;let L=0,T=0;for(let p=0;p<y;p++)L+=M(p),T+=g(p);L/=y,T/=y;const I=Math.max(3,e.h[o])*l,V=Math.hypot(L/ot,T/ot)/2,q=Math.min(1,V*2)*.8+o*7919%97/97*.2,k=Math.sqrt(e.area[o])/1e3;for(let p=0;p<y;p++){const z=(p+1)%y,G=M(p),C=g(p),N=M(z),W=g(z);let f=-(W-C),_=N-G;const F=Math.hypot(f,_)||1;f/=F,_/=F,f*((G+N)/2-L)+_*((C+W)/2-T)<0&&(f=-f,_=-_);for(let P=0;P<4;P++){const r=v*4+P;s.set([G,C,N,W],r*4),c.set([P&1,P>>1],r*2),x.set([f,_],r*2),d.set([I,q,k],r*3)}v++}}const u=new Ie;return u.setAttribute("position",new O(new Float32Array(i*4*3),3)),u.setAttribute("aE",new O(s,4)),u.setAttribute("aC",new O(c,2)),u.setAttribute("aN",new O(x,2)),u.setAttribute("aHD",new O(d,3)),u.setIndex(Aa(i)),u}function G0(e,t){const a=t?300:80,l=1.6/1e3;let i=0;for(let n=0;n<e.n;n++)e.area[n]<a||(i+=e.cnt[n]*(e.area[n]>=300||e.h[n]>=11?2:1));const s=new Float32Array(i*4*4),c=new Float32Array(i*4*2),x=new Float32Array(i*4*4),d=new Float32Array(i*4);let v=0;const u=(n,y,M,g,L,T,I,V,q)=>{for(let k=0;k<4;k++){const p=v*4+k;s.set([n,y,M,g],p*4),c.set([L,T],p*2),x.set([k>>1,k&1?1:-1,I,V],p*4),d[p]=q}v++};for(let n=0;n<e.n;n++){if(e.area[n]<a)continue;const y=e.start[n],M=e.cnt[n],g=Math.max(3,e.h[n])*l;let L=0,T=0;for(let p=0;p<M;p++)L+=e.u[y+p],T+=e.v[y+p];L=(L/M-.5)*2,T=(T/M-.5)*2;const I=Math.min(1,Math.hypot(L,T))*.8+n*7919%97/97*.2,V=Math.sqrt(e.area[n])/1e3,q=p=>(e.u[y+p]-.5)*ot*2,k=p=>(e.v[y+p]-.5)*ot*2;for(let p=0;p<M;p++){const z=(p+1)%M;u(q(p),k(p),q(z),k(z),1,1,g,I,V)}if(e.area[n]>=300||e.h[n]>=11)for(let p=0;p<M;p++)u(q(p),k(p),q(p),k(p),0,1,g,I,V)}const o=new Ie;return o.setAttribute("position",new O(new Float32Array(i*4*3),3)),o.setAttribute("aP",new O(s,4)),o.setAttribute("aY",new O(c,2)),o.setAttribute("aI",new O(x,4)),o.setAttribute("aSz",new O(d,1)),o.setIndex(Aa(i)),o}function Aa(e){const t=new Uint32Array(e*6);for(let a=0;a<e;a++){const l=a*4;t.set([l,l+1,l+2,l+2,l+1,l+3],a*6)}return new O(t,1)}function B0(e,t){const{S:a,M:l}=t,i=[0,1,2,3,5],s=5.6,c=[];let x=0;for(const f of i)for(const _ of e[f]){let F=[];for(const P of _)Math.hypot(P[0],P[1])<=s?F.push(P):(F.length>1&&c.push({l:f,pts:F}),F=[]);F.length>1&&c.push({l:f,pts:F})}for(const f of c){let _=0;for(let F=1;F<f.pts.length;F++)_+=Math.hypot(f.pts[F][0]-f.pts[F-1][0],f.pts[F][1]-f.pts[F-1][1]);f.len=_,x+=_}const d=Math.max(.2,x/5200),v=[],u=(f,_)=>{let F=0;for(let P=1;P<f.pts.length;P++){const r=f.pts[P-1],b=f.pts[P],h=Math.hypot(b[0]-r[0],b[1]-r[1]);if(F+h>=_||P===f.pts.length-1){const S=h>0?Math.min(1,(_-F)/h):0;return[r[0]+(b[0]-r[0])*S,r[1]+(b[1]-r[1])*S]}F+=h}return f.pts[f.pts.length-1]};for(const f of c){if(f.len<.03)continue;const _=Math.max(1,Math.round(f.len/d));for(let F=0;F<_;F++){const P=f.len*F/_,r=f.len*(F+1)/_,b=[];for(let R=0;R<l;R++)b.push(u(f,P+(r-P)*R/(l-1)));b[l-1][0]<b[0][0]&&b.reverse();let h=0,S=0;for(const R of b)h+=R[0],S+=R[1];v.push({l:f.l,pts:b,cx:h/l,cz:S/l})}}const o=Qe/(2*s),n=Qe/a,y=f=>{const _=Math.sin(f*12.9898)*43758.5453;return _-Math.floor(_)};for(const f of v){const _=Math.min(a-1,Math.max(0,Math.round((f.cz*o+Qe/2)/n-.5)));f.zl=-Qe/2+(_+.5)*n;let F=1/0,P=-1/0;for(const h of f.pts)F=Math.min(F,h[0]),P=Math.max(P,h[0]);const r=(F+P)/2*o,b=Math.max(.06,(P-F)/2*o);f.x0=r-b,f.x1=r+b,f.seed=y(_)}const M=new Set;if(t.look==="lines"){const f=new Map;for(const _ of v)f.has(_.zl)||f.set(_.zl,[]),f.get(_.zl).push(_);for(const[_,F]of f){M.add(_),F.sort((r,b)=>r.x0+r.x1-(b.x0+b.x1));const P=F.map(r=>(r.x0+r.x1)/2);F.forEach((r,b)=>{r.x0=b===0?-Qe/2:(P[b-1]+P[b])/2,r.x1=b===F.length-1?Qe/2:(P[b]+P[b+1])/2,r.pts[0][0]>r.pts[r.pts.length-1][0]&&(r.pts=r.pts.slice().reverse())}),F.forEach((r,b)=>{const h=r.pts[0],S=r.pts[r.pts.length-1],R=F[b-1],E=F[b+1],j=R?[(R.pts[R.pts.length-1][0]+h[0])/2,(R.pts[R.pts.length-1][1]+h[1])/2]:h,Y=E?[(E.pts[0][0]+S[0])/2,(E.pts[0][1]+S[1])/2]:S;r.jd=[j[0],j[1],Y[0],Y[1]]})}}const g=96;for(let f=0;f<a;f++){const _=-Qe/2+(f+.5)*n,F=[];for(let P=0;P<g;P++)F.push([0,0]);v.push({l:M.has(_)?10:9,pts:F,cx:0,cz:0,x0:-Qe/2,x1:Qe/2,zl:_,seed:y(f),field:!0})}const L=v.length,T=v.reduce((f,_)=>f+_.pts.length-1,0),I=new Float32Array(T*4*4),V=new Float32Array(T*4*4),q=new Float32Array(T*4*2),k=new Float32Array(T*4*4),p=new Float32Array(T*4*4);let z=0;const G=new Set,C=(f,_)=>Math.round(f/.05)+","+Math.round(_/.05);for(const f of t.first||[])for(let _=1;_<f.pts.length;_++){const[F,P]=f.pts[_-1],[r,b]=f.pts[_];if(Math.max(Math.abs(F),Math.abs(P),Math.abs(r),Math.abs(b))>6)continue;const h=Math.ceil(Math.hypot(r-F,b-P)/.025);for(let S=0;S<=h;S++){const R=F+(r-F)*S/h,E=P+(b-P)*S/h;for(let j=-1;j<=1;j++)for(let Y=-1;Y<=1;Y++)G.add(C(R+j*.05,E+Y*.05))}}const N=f=>{if(!G.size||f.field)return!1;let _=0;for(const F of f.pts)G.has(C(F[0],F[1]))&&_++;return _>=f.pts.length*.6};for(const f of v){let _=Math.min(1,Math.hypot(f.cx,f.cz)/5.5);N(f)&&(_*=.3);const F=f.pts.length;for(let P=0;P<F-1;P++){const r=f.pts[P],b=f.pts[P+1];for(let h=0;h<4;h++){const S=z*4+h;I.set([r[0],r[1],b[0],b[1]],S*4),V.set([f.x0,f.x1,f.zl,_],S*4),q.set([P/(F-1),(P+1)/(F-1)],S*2),k.set([h>>1,h&1?1:-1,f.l,f.seed],S*4),f.jd&&p.set(f.jd,S*4)}z++}}const W=new Ie;return W.setAttribute("position",new O(new Float32Array(T*4*3),3)),W.setAttribute("aT",new O(I,4)),W.setAttribute("aSU",new O(V,4)),W.setAttribute("aUU",new O(q,2)),W.setAttribute("aInfo",new O(k,4)),W.setAttribute("aJD",new O(p,4)),W.setIndex(Aa(T)),{geometry:W,K:L,gap:n}}function U0(e,t,a,l){const i=e.map((g,L)=>g.map(T=>({kind:L,pts:T}))),s=[].concat(...i);a&&a.forEach((g,L)=>g.forEach(T=>s.push({kind:5+L,pts:T})));const c=l?Ce(l.lat,l.lon,1):[0,0,1];if(t==="lines"){for(let g=-80;g<=80;g+=10){const L=[];for(let T=-180;T<=180;T+=3)L.push([T,g]);s.push({kind:4,pts:L})}for(let g=-180;g<180;g+=15){const L=[];for(let T=-84;T<=84;T+=3)L.push([g,T]);s.push({kind:4,pts:L})}}let x=0;for(const g of s)x+=Math.max(0,g.pts.length-1);const d=new Float32Array(x*4*3),v=new Float32Array(x*4*3),u=new Float32Array(x*4*4),o=[0,0,0],n=[0,0,0];let y=0;for(const g of s){const L=g.pts.length;if(L<2)continue;const T=g.kind===2?1.2:.6;for(let I=0;I<L-1;I++){Ce(g.pts[I][1],g.pts[I][0],X+T,o),Ce(g.pts[I+1][1],g.pts[I+1][0],X+T,n);for(let V=0;V<4;V++){const q=y*4+V;d.set(o,q*3),v.set(n,q*3);let k=(I+(V>>1))/(L-1);if(g.kind>=5){const p=V>>1?n:o,z=Math.hypot(p[0],p[1],p[2]);k=Math.acos(Math.min(1,(p[0]*c[0]+p[1]*c[1]+p[2]*c[2])/z))*X/1e3}u.set([V>>1,V&1?1:-1,g.kind,k],q*4)}y++}}const M=new Ie;return M.setAttribute("position",new O(d,3)),M.setAttribute("aA",new O(d,3)),M.setAttribute("aB",new O(v,3)),M.setAttribute("aInfo",new O(u,4)),M.setIndex(Aa(x)),M}const W0={lines:"P_LINES",ink:"P_INK"};async function K0(e,t,a){const l=W0[e],i=a.lite,[s,c,x]=await Promise.all([k0(),D0(i?.08:.04),z0(.01)]),d=new Et,v=new Et,u=new Pe(1,1),o={uTime:{value:0},uAsm:{value:0},uWave:{value:1},uFocal:{value:1e3},uFar:{value:30},uDpr:{value:1},uBg:{value:0},uAlpha:{value:1},uRes:{value:u},uFlat:{value:0},uFT:{value:0},uPaint:{value:0},uHoldA:{value:0},uBake:{value:0},uGround:{value:1},uTint:{value:0}},n=B0(s,{S:i?110:200,M:i?12:16,look:e,first:e==="ink"?a.routes:null}),y=m=>new se({vertexShader:M0(m),fragmentShader:S0(m),uniforms:{...o,uGap:{value:n.gap},uPass:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1,side:Ut,...Ze}),M=y(e==="ink"?"P_INK":l),g=new we(n.geometry,M);g.name="strands",g.frustumCulled=!1,g.renderOrder=2,d.add(g);let L=null,T=null;if(e==="ink"){const m=y(`P_INK
#define INK_FG`);m.uniforms={...M.uniforms,uPass:{value:0}},L=new we(n.geometry,m),L.frustumCulled=!1,L.renderOrder=3,d.add(L);const Q=y(`P_INK
#define INK_FG`);Q.uniforms={...M.uniforms,uPass:{value:1}},T=new we(n.geometry,Q),T.frustumCulled=!1,T.renderOrder=3,d.add(T)}const I=e==="ink",V=I?i?300:480:1,q=new za(I?96:32,I?96:32,V,V);q.rotateX(-Math.PI/2);const k=new se({vertexShader:oo(l),fragmentShader:L0(l),uniforms:{uMap:{value:t},uTime:o.uTime,uBg:{value:0},uCity:{value:0},uAlpha:{value:1},uHoldA:o.uHoldA,uBake:o.uBake,uGround:o.uGround,uTint:o.uTint,uHatch:{value:0},uRelief:{value:1},uPre:{value:0},uNN:{value:a.land?.neonN||null},uNF:{value:a.land?.neonF||null},uNeonT:{value:0},uNeonP:{value:0},uDem:{value:a.land?.dem||null},uDemF:{value:a.land?.far||null},uLA:{value:a.land?.a||null},uLB:{value:a.land?.b||null}},transparent:!0,depthWrite:!1,depthTest:I,depthFunc:to,...Ze}),p=new we(q,k);let z=null;if(I){const m=new se({vertexShader:oo(l),fragmentShader:"void main() { gl_FragColor = vec4(0.0); }",uniforms:k.uniforms,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});z=new we(q,m),z.name="washDepth",z.position.y=-.003,z.frustumCulled=!1,z.renderOrder=.9,d.add(z)}let G=null,C=null;if(I&&a.land?.hor){const m=new za(Fe.hor.h*2,Fe.hor.h*2,a.lite?200:320,a.lite?200:320);m.rotateX(-Math.PI/2),m.translate(0,0,Fe.hor.cz);const Q={uHor:{value:a.land.hor},uHEx:{value:3.4},uCurv:{value:1},uPre:k.uniforms.uPre,uAlpha:k.uniforms.uAlpha,uBg:k.uniforms.uBg},ke=new se({vertexShader:lo,fragmentShader:no(!0),uniforms:Q,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});C=new se({vertexShader:lo,fragmentShader:no(!1),uniforms:Q,transparent:!0,depthWrite:!1,depthTest:!0,depthFunc:to,...Ze});const fe=new we(m,ke);fe.name="horDepth",fe.frustumCulled=!1,fe.renderOrder=.88,fe.position.y=-.003,G=new we(m,C),G.name="horizon",G.frustumCulled=!1,G.renderOrder=.95,G.position.y=-.003,G.userData.depth=fe,d.add(fe,G)}p.name="wash",p.position.y=-.003,p.frustumCulled=!1,p.renderOrder=1,d.add(p);let N=null,W=null;a.houses&&(W=new se({vertexShader:E0,fragmentShader:I0(l),uniforms:{uGrow:{value:0},uFocal:o.uFocal,uFar:o.uFar,uDpr:o.uDpr,uRes:{value:u},uAlpha:{value:1},uHoldA:o.uHoldA,uBake:o.uBake,uGround:o.uGround,uTint:o.uTint,uHW:{value:.5}},transparent:!0,depthWrite:!1,depthTest:!1,side:Ut,...Ze}),N=new we(G0(a.houses,i),W),N.name="houses2",N.frustumCulled=!1,N.renderOrder=3,d.add(N));let f=null,_=null;e==="ink"&&a.houses&&(_=new se({vertexShader:N0,fragmentShader:H0,uniforms:{uGrow:W.uniforms.uGrow,uFocal:o.uFocal,uFar:o.uFar,uDpr:o.uDpr,uAlpha:W.uniforms.uAlpha,uHatch:{value:0},uHoldA:o.uHoldA,uBake:o.uBake,uGround:o.uGround,uTint:o.uTint},transparent:!0,depthWrite:!1,depthTest:!1,side:Ut,...Ze}),f=new we(O0(a.houses,i),_),f.name="walls",f.frustumCulled=!1,f.renderOrder=2,d.add(f));const F=U0(c,e,x,a.pdb),P={lines:[.7,.6,2.2,.55,.45],ink:[.65,.55,2.2,.5,0]}[e],r={uCam:{value:new te},uR:{value:X},uDpr:o.uDpr,uTime:o.uTime,uFadeKm:{value:100},uRes:{value:u},uW:{value:new Ve(P[0],P[1],P[2],P[3])},uWG:{value:P[4]},uAl:{value:new Ve},uAG:{value:0},uDraw:{value:new Ve(1,1,1,1)},uW2:{value:new Pe(.5,.65)},uAl2:{value:new Pe},uReach:{value:0}},b=new se({vertexShader:R0(l),fragmentShader:F0(l),uniforms:r,transparent:!0,depthWrite:!1,depthTest:!1,side:Ut,...Ze}),h=new we(F,b);h.name="sphere",h.frustumCulled=!1,h.renderOrder=-10,v.add(h);const S=Array.from({length:ha},()=>new Ve),R=new se({vertexShader:T0,fragmentShader:P0,uniforms:{uRects:{value:S},uN:{value:0},uFeather:{value:90},uStrength:{value:.85},uRes:{value:u}},transparent:!0,depthWrite:!1,depthTest:!1,blending:wt,blendSrc:Ea,blendDst:lt,blendSrcAlpha:Ea,blendDstAlpha:lt});e==="lines"&&Xa===1&&(M.uniforms.uRects=R.uniforms.uRects,M.uniforms.uN=R.uniforms.uN),I&&(k.uniforms.uRects=R.uniforms.uRects,k.uniforms.uN=R.uniforms.uN);const E=new we(C0(),R);E.frustumCulled=!1,E.renderOrder=95;let j=[];const Y="main :is(h2, h3, p, blockquote, .arrow-link, .coverflow__item, .leader__name, .direction__head)";function ae(){j=Array.from(document.querySelectorAll(Y))}return ae(),{cityGroup:d,sphereGroup:v,veil:E,collect:ae,textRects:{rects:R.uniforms.uRects,n:R.uniforms.uN},update(m){o.uTime.value=m.time,o.uAsm.value=m.asm,o.uWave.value=m.wave,o.uFocal.value=m.focal,o.uFar.value=m.far,o.uDpr.value=m.dpr,o.uBg.value=m.bg,o.uAlpha.value=m.alpha,o.uFlat.value=m.flat||0,o.uFT.value=m.ft??m.time,o.uHoldA.value=m.holdA||0,o.uBake.value=m.bake||0,o.uGround.value=m.ground??1,o.uTint.value=m.tint||0,N&&(W.uniforms.uGrow.value=m.grow||0,W.uniforms.uAlpha.value=m.alpha,N.visible=Math.max(m.alpha,m.holdA||0)>.002&&(m.grow||0)>.001),f&&(_.uniforms.uHatch.value=m.hatch||0,f.visible=N.visible&&(m.hatch||0)>.001),u.set(m.w,m.h),g.visible=Math.max(m.alpha,m.holdA||0)>.002,L&&(L.visible=T.visible=g.visible&&m.asm>.001),o.uPaint.value=m.paint||0,k.uniforms.uHatch.value=m.hatch||0,k.uniforms.uBg.value=m.bg,k.uniforms.uCity.value=m.city,k.uniforms.uPre.value=m.pre||0,k.uniforms.uNeonT.value=m.neonT||0,k.uniforms.uNeonP.value=m.neonP||0,G&&(G.visible=G.userData.depth.visible=p.visible&&(m.pre||0)>.001),k.uniforms.uAlpha.value=m.alpha,p.visible=Math.max(m.alpha,m.holdA||0)>.002&&m.bg+m.city>.002,z&&(z.visible=p.visible&&m.alpha>.5),r.uCam.value.copy(m.cam),r.uFadeKm.value=m.fadeKm,r.uAl.value.set(m.sphere.al[0],m.sphere.al[1],m.sphere.al[2],m.sphere.al[3]),r.uAG.value=m.sphere.ag,r.uDraw.value.set(m.sphere.draw[0],m.sphere.draw[1],m.sphere.draw[2],m.sphere.draw[3]),r.uAl2.value.set(m.sphere.reg?.[0]||0,m.sphere.reg?.[1]||0),r.uReach.value=m.sphere.reach||0,h.visible=m.sphere.al[0]+m.sphere.al[1]+m.sphere.al[2]+m.sphere.al[3]+m.sphere.ag+r.uAl2.value.x+r.uAl2.value.y>.002;let Q=0;const ke=m.w/m.cssW,fe=m.h/m.cssH,ve=18;for(let Ne=0;Ne<j.length&&Q<ha;Ne++){const ne=j[Ne];if(ne.style.visibility==="hidden"||(ne.classList.contains("coverflow__item")?parseFloat(ne.style.getPropertyValue("--op")):1)<.35)continue;const Me=ne.getBoundingClientRect();Me.width<2||Me.bottom<-40||Me.top>m.cssH+40||Me.right<0||Me.left>m.cssW||Me.width*Me.height>m.cssW*m.cssH*.5||(S[Q].set((Me.left-ve)*ke,(m.cssH-Me.bottom-ve)*fe,(Me.right+ve)*ke,(m.cssH-Me.top+ve)*fe),Q++)}R.uniforms.uN.value=Q,R.uniforms.uFeather.value=110*m.dpr,R.uniforms.uStrength.value=m.veil,E.visible=Q>0&&m.veil>.002}}}const q0=()=>new URLSearchParams(location.search).get("neon")!=="0",_a=18;`${_a}${_a}${(X*1.006).toFixed(1)}${_a}`;const j0=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 6; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,ro=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,$0=`
precision highp float;
uniform vec2 uRes;
uniform float uTime, uAmount, uDark;
uniform vec2 uHole;      // середина окна (центр Пардубиц на экране), пиксели
uniform float uHoleR;    // радиус окна, пиксели

${j0}
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
`,Ot=.35,V0=`
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
`;function X0(){const e=new Ie;e.setAttribute("position",new O(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const t=new se({vertexShader:ro,fragmentShader:$0,uniforms:{uRes:{value:new Pe(1,1)},uTime:{value:0},uAmount:{value:0},uHole:{value:new Pe},uHoleR:{value:1},uDark:{value:0}},depthWrite:!1,depthTest:!1,blending:l0}),a=new we(e,t);a.frustumCulled=!1;const l=new To;l.add(a);const i=new n0,s=new r0(1,1,{depthBuffer:!1,minFilter:St,magFilter:St}),c=new se({vertexShader:ro,fragmentShader:V0,uniforms:{tClouds:{value:s.texture},uRes:{value:new Pe(1,1)},uTime:{value:0},uErode:{value:0},uDim:{value:0},uDimCol:{value:new qe("#071b34")},uFly:{value:0},uNeon:{value:0},uCell:{value:5},uMapR:{value:100},uTextL:{value:1},uTop:{value:1e6},uTopF:{value:1},uMap:{value:new Pe},uNeonCol:{value:new qe("#78d0e6")}},transparent:!0,depthWrite:!1,depthTest:!1,...Ze}),x=new we(e,c);x.frustumCulled=!1,x.renderOrder=90,x.name="clouds";const d=t.uniforms,v=new qe;let u=!1;return{mesh:x,update(o){if(u=o.amount>.002&&!o.done,x.visible=u,!u)return;const n=c.uniforms;n.uTime.value=o.time,n.uErode.value=o.erode||0,n.uDim.value=o.dim||0,n.uFly.value=o.fly||0,n.uNeon.value=o.neon||0,n.uMapR.value=o.r,n.uTextL.value=o.textL??1,n.uTop.value=o.top??1e6,n.uTopF.value=Math.max(1,o.topF??1),n.uMap.value.set(o.hx,o.hy),n.uCell.value=Math.max(5,4.5*(o.px||1));const y=Math.max(1,Math.round(o.w*Ot)),M=Math.max(1,Math.round(o.h*Ot));(s.width!==y||s.height!==M)&&s.setSize(y,M),d.uAmount.value=o.amount,d.uDark.value=o.dark||0,d.uTime.value=o.time,d.uRes.value.set(y,M),d.uHole.value.set(o.hx*Ot,o.hy*Ot),d.uHoleR.value=o.r*Ot,c.uniforms.uRes.value.set(o.w,o.h)},prerender(o){if(!u)return;const n=o.getRenderTarget(),y=o.getClearAlpha();o.getClearColor(v),o.setRenderTarget(s),o.setClearColor(0,0),o.clear(!0,!1,!1),o.render(l,i),o.setRenderTarget(n),o.setClearColor(v,y)}}}const io=35,Y0=.35,Z0=.6,J0='a, button, input, textarea, select, label, img, video, picture, svg, header, nav, [role="button"], [contenteditable], .leader__photo, .pillar__photo',Q0="h1, h2, h3, h4, h5, p, blockquote, li, figcaption, dt, dd",ie={lon:0,lat:0,on:!1,dragging:!1,dirty:!1};new i0;new Pe;new s0(new te,X);new te;const La=typeof document<"u"?document.createRange():null;let Gt=0,Bt=0;function el(e,t){const a=document.elementFromPoint(e,t);if(!a||a.closest(J0))return!0;const l=a.closest(Q0);if(l&&La){La.selectNodeContents(l);for(const i of La.getClientRects())if(e>=i.left-6&&e<=i.right+6&&t>=i.top-4&&t<=i.bottom+4)return!0}return!1}function tl(e,t){return ie.on,!1}const al=(e,t)=>({globe:tl(),content:el(e,t),el:document.elementFromPoint(e,t)?.className||""});function so(e){const t=document.documentElement;t.classList.toggle("earth-grab",e==="grab"),t.classList.toggle("earth-grabbing",e==="grabbing")}function ol(e,t,a){if(ie.on=t,ie.dirty=!1,!t&&ie.dragging&&(ie.dragging=!1),!ie.dragging){const l=Math.exp(-e/Z0);ie.lon*=l,ie.lat*=l,Gt=Bt=0,Math.abs(ie.lon)<.001&&(ie.lon=0),Math.abs(ie.lat)<.001&&(ie.lat=0),(ie.lon||ie.lat)&&(ie.dirty=!0),document.documentElement.classList.contains("earth-grab")&&so(null);return}if(!t&&document.documentElement.classList.contains("earth-grab")&&so(null),!ie.dragging)if(Math.abs(Gt)+Math.abs(Bt)>.05){ie.lon+=Gt*e,ie.lat=Math.max(-io,Math.min(io,ie.lat+Bt*e));const l=Math.exp(-e/Y0);Gt*=l,Bt*=l,ie.dirty=!0}else Gt=Bt=0}const ll=Math.PI,nl={tech:"#78d0e6",city:"#86a9cf",mapInk:"#7d9dc0",house:"#8fb0d2",mark:"#e2b04a",grid:"#3fd0e0"},rl={tech:"#29455c",city:"#253f57",mapInk:"#132a40",house:"#253f57",mark:"#8a5f10",grid:"#4d677d"},il=`
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
`,sl=`
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
${il}

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
`,ul=`
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
`,cl=`
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
`,fl=`
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
`,vl=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ml=`
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
`,dl=`
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
`,pl=`
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
`,hl=`
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
`,xl=`
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
`,Oa=new Po(new Uint8Array(4),1,1);Oa.needsUpdate=!0;function uo(e,t,a){const l=new Et,{side:i,field:s,lite:c,light:x}=a,d=x?{LIGHT:1}:{},v=x?{blending:wt,blendSrc:ze,blendDst:lt,blendSrcAlpha:ze,blendDstAlpha:lt}:a.glow?{blending:wt,blendSrc:ze,blendDst:ze,blendSrcAlpha:Ea,blendDstAlpha:ze}:{blending:u0},u=x?rl:nl,o=A=>x?new qe().setStyle(u[A],Na):new qe(u[A]),n=i*i,y=new Float32Array(n*2),M=s/i;for(let A=0;A<i;A++)for(let D=0;D<i;D++){const Z=A*i+D;y[Z*2]=(D+.5)*M-s/2,y[Z*2+1]=(A+.5)*M-s/2}const g=e.lumaSize,L=new Float64Array(g*g);let T=0;for(let A=0;A<g*g;A++){const D=e.luma[A];T+=D>.05?D*D+.02:.003,L[A]=T}let I=1234567;const V=()=>(I=I*16807%2147483647)/2147483647,q=new Float32Array(n*2),k=new Float32Array(n);for(let A=0;A<n;A++){const D=V()*T;let Z=0,Ge=g*g-1;for(;Z<Ge;){const it=Z+Ge>>1;L[it]<D?Z=it+1:Ge=it}const De=Z%g,rt=Z/g|0,Ma=(De+V())/g,Sa=(rt+V())/g;q[A*2]=(Ma-.5)*$e*2,q[A*2+1]=(Sa-.5)*$e*2,k[A]=e.luma[Z]}const p=A=>{const D=Array.from({length:n},(Z,Ge)=>Ge);D.sort((Z,Ge)=>A[Z*2]-A[Ge*2]);for(let Z=0;Z<i;Z++){const Ge=D.slice(Z*i,(Z+1)*i).sort((De,rt)=>A[De*2+1]-A[rt*2+1]);for(let De=0;De<i;De++)D[Z*i+De]=Ge[De]}return D},z=p(y),G=p(q),C=new Float32Array(n*2),N=new Float32Array(n*2),W=new Float32Array(n);for(let A=0;A<n;A++){const D=z[A],Z=G[A];C[D*2]=y[D*2],C[D*2+1]=y[D*2+1],N[D*2]=q[Z*2],N[D*2+1]=q[Z*2+1],W[D]=k[Z]}const f=new Ie;f.setAttribute("position",new O(new Float32Array(n*3),3)),f.setAttribute("aGrid",new O(C,2)),f.setAttribute("aMap",new O(N,2)),f.setAttribute("aLum",new O(W,1));const _=new se({vertexShader:sl,fragmentShader:ul,uniforms:{uTime:{value:0},uAsm:{value:0},uWave:{value:1},uSize:{value:c?.05:.036},uFocal:{value:1e3},uFar:{value:30},uStep:{value:M},uTechCol:{value:o("tech")},uMapCol:{value:o("city")},uAlpha:{value:1},uScr:{value:0},uDust:{value:0},uFly:{value:0},uCloudA:{value:1},uDustL:{value:1},uRes:{value:new Pe(1,1)},tCloud:{value:Oa},uDrift:{value:new Pe},uNeon:{value:0}},defines:a.glow?{...d,GLOW:1}:d,transparent:!0,depthWrite:!1,depthTest:!0,...a.glow?{blending:wt,blendSrc:ze,blendDst:ze,blendSrcAlpha:ze,blendDstAlpha:ze}:v}),F=new Vt(f,_);F.name="points",F.frustumCulled=!1,F.renderOrder=2;const P=new za($e*2,$e*2);P.rotateX(-ll/2);const r=new se({vertexShader:vl,fragmentShader:ml,uniforms:{uMap:{value:t},uInk:{value:o("mapInk")},uBase:{value:new qe("#0a1626")},uAlpha:{value:0}},defines:d,transparent:!0,depthWrite:!1,...x?v:{}}),b=new we(P,r);b.name="map",b.position.y=-.002,b.renderOrder=0,b.frustumCulled=!1;const h=e.houses,S=1.6/1e3;let R=0;for(let A=0;A<h.n;A++)c&&h.area[A]<400||(R+=h.cnt[A]*(h.h[A]>=11?2:1));const E=new Float32Array(R*6),j=new Float32Array(R*2),Y=new Float32Array(R*2),ae=new Float32Array(R*2),m=new Float32Array(R*2);let Q=0;for(let A=0;A<h.n;A++){if(c&&h.area[A]<400)continue;const D=h.start[A],Z=h.cnt[A],Ge=Math.max(3,h.h[A])*S;let De=0,rt=0;for(let ye=0;ye<Z;ye++)De+=h.u[D+ye],rt+=h.v[D+ye];De=(De/Z-.5)*2,rt=(rt/Z-.5)*2;const Ma=Math.min(1,Math.hypot(De,rt))*.8+A*7919%97/97*.2,Sa=Math.sqrt(Math.max(30,h.area[A]))/1e3,it=(ye,Zt,Jt)=>{E[Q*3]=(ye-.5)*$e*2,E[Q*3+1]=0,E[Q*3+2]=(Zt-.5)*$e*2,j[Q]=Jt,Y[Q]=Ge,ae[Q]=Ma,m[Q]=Sa,Q++};for(let ye=0;ye<Z;ye++){const Zt=D+ye,Jt=D+(ye+1)%Z;it(h.u[Zt],h.v[Zt],1),it(h.u[Jt],h.v[Jt],1)}if(h.h[A]>=11)for(let ye=0;ye<Z;ye++)it(h.u[D+ye],h.v[D+ye],0),it(h.u[D+ye],h.v[D+ye],1)}const ke=new Ie;ke.setAttribute("position",new O(E,3)),ke.setAttribute("aTop",new O(j,1)),ke.setAttribute("aH",new O(Y,1)),ke.setAttribute("aDel",new O(ae,1)),ke.setAttribute("aSz",new O(m,1));const fe=new se({vertexShader:dl,fragmentShader:pl,uniforms:{uGrow:{value:0},uFar:{value:30},uFocal:{value:1e3},uCol:{value:o("house")},uAlpha:{value:.55}},defines:d,transparent:!0,depthWrite:!1,...v}),ve=new Ia(ke,fe);ve.name="houses",ve.frustumCulled=!1,ve.renderOrder=1;const Ne=e.projects,ne=new Float32Array(Ne.length*3),ge=new Float32Array(Ne.length);Ne.forEach((A,D)=>{ne[D*3]=(A.u-.5)*$e*2,ne[D*3+1]=.03,ne[D*3+2]=(A.v-.5)*$e*2,ge[D]=D/Ne.length});const Me=new Ie;Me.setAttribute("position",new O(ne,3)),Me.setAttribute("aSeed",new O(ge,1));const nt=new se({vertexShader:hl,fragmentShader:xl,uniforms:{uFocal:{value:1e3},uTime:{value:0},uCol:{value:o("mark")},uAlpha:{value:0}},defines:d,transparent:!0,depthWrite:!1,depthTest:!1,...v}),Xe=new Vt(Me,nt);Xe.name="marks",Xe.frustumCulled=!1,Xe.renderOrder=3;const Ye=16,We=c?96:160,Ht=Math.floor(i/Ye)+1,re=new Float32Array(Ht*2*We*6);let Je=0;for(let A=0;A<Ht;A++){const D=Math.min(s/2,A*Ye*M-s/2);for(let Z=0;Z<We;Z++){const Ge=(Z/We-.5)*s,De=((Z+1)/We-.5)*s;re.set([Ge,0,D,De,0,D],Je),Je+=6,re.set([D,1,Ge,D,1,De],Je),Je+=6}}const eo=new Ie;eo.setAttribute("position",new O(re,3));const Rt=new se({vertexShader:cl,fragmentShader:fl,uniforms:{uTime:{value:0},uWave:{value:1},uFar:{value:30},uFocal:{value:1e3},uGap:{value:Ye*M},uCol:{value:o("grid")},uAlpha:{value:1}},defines:d,transparent:!0,depthWrite:!1,...v}),Ft=new Ia(eo,Rt);return Ft.name="grid",Ft.frustumCulled=!1,Ft.renderOrder=1,l.add(b,Ft,ve,F,Xe),{group:l,update(A){const D=_.uniforms;D.uTime.value=A.time,D.uAsm.value=A.asm,D.uWave.value=A.wave,D.uFocal.value=A.focal,D.uFar.value=A.far,D.uAlpha.value=A.alpha*A.points,D.uScr.value=A.scr||0,A.scr&&(D.uDust.value=A.dust,D.uFly.value=A.fly,D.uCloudA.value=A.cloudA,D.uDustL.value=A.dustL,D.uRes.value.set(A.resW,A.resH),D.tCloud.value=A.cloudTex||Oa,D.uDrift.value.set(A.driftX||0,A.driftY||0),D.uNeon.value=A.neon||0),F.visible=A.alpha*A.points>.002,r.uniforms.uAlpha.value=A.map*A.alpha,b.visible=A.map*A.alpha>.002,fe.uniforms.uGrow.value=A.houses,fe.uniforms.uFar.value=A.far,fe.uniforms.uFocal.value=A.focal,fe.uniforms.uAlpha.value=.55*A.alpha,ve.visible=A.houses>.001&&A.alpha>.002,nt.uniforms.uTime.value=A.time,nt.uniforms.uFocal.value=A.focal,nt.uniforms.uAlpha.value=A.marks*A.alpha,Xe.visible=A.marks*A.alpha>.002;const Z=A.alpha*(1-A.asm);Rt.uniforms.uTime.value=A.time,Rt.uniforms.uWave.value=A.wave,Rt.uniforms.uFar.value=A.far,Rt.uniforms.uFocal.value=A.focal,Rt.uniforms.uAlpha.value=Z,Ft.visible=Z>.002,l.visible=A.alpha>.002,A.hideTech&&(F.visible=!1,Ft.visible=!1,ve.visible=!1,b.visible=!1),A.hideMarks&&(Xe.visible=!1)}}}const gl=`
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
`,wl=e=>`
#define ${e}
${e==="LOOK_LIGHT"?Rl:e.startsWith("LOOK_PAPER")?Fl:""}
${e.includes("P_INK")?`#define SK_SPHERE
`+Va:""}
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
`,yl=`
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
`,Al=`
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
`,bl=`
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
`,Ml=`
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
`,Sl=`
varying vec2 vP;
void main() { vP = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,_l=`
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
`;function co(){const e=new Ie;return e.setAttribute("position",new O(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}const Ll={dots:"LOOK_DOTS",photo:"LOOK_PHOTO",mix:"LOOK_MIX",light:"LOOK_LIGHT",lines:`LOOK_PAPER
#define P_LINES`,ink:`LOOK_PAPER
#define P_INK`},fo={lines:1,ink:1},Go=e=>{const t=parseInt(e.slice(1),16),a=l=>(l/255).toFixed(4);return`vec3(${a(t>>16)}, ${a(t>>8&255)}, ${a(t&255)})`},Rl=[["L_SEA","#6c8194"],["L_GROUND","#2c4760"],["L_GOLD","#8a5f10"],["L_DISC","#d3d9de"],["L_RIM","#29455c"],["L_AURA","#e4e8ec"]].map(([e,t])=>`#define ${e} ${Go(t)}`).join(`
`),Fl=[["L_SEA","#5b7086"],["L_GROUND","#1c3349"],["L_GOLD","#8a5f10"],["L_GLOW","#2A6DAA"],["L_DISC","#d3d9de"],["L_RIM","#2A6DAA"],["L_AURA","#5FA8E0"],["L_PALE","#5FA8E0"],["L_GOLDL","#c9a24e"],["L_INK3","#4d677d"],["L_INK2","#29455c"]].map(([e,t])=>`#define ${e} ${Go(t)}`).join(`
`);function Ra(e,t,a,l){let i=0,s=0;const c=[0,0,0],x=new Et,d={blending:wt,blendSrc:ze,blendDst:lt,blendSrcAlpha:ze,blendDstAlpha:lt},v=Ce(l.pdb.lat,l.pdb.lon,1),u={uCam:{value:new te},uC:{value:0},uR:{value:X},uAlpha:{value:0},uHaloA:{value:0},uSpace:{value:0},uAtm:{value:0},uS0:{value:1},uLod:{value:0},uMarkR:{value:10},uMark:{value:0},uMarkBlue:{value:0},uMarkGrow:{value:1},uTime:{value:0},uNight:{value:0},uClouds:{value:0},uHole:{value:0},uHoleR:{value:3.75},uRevMode:{value:0},uRevR:{value:1},uRevA:{value:1},uVeil:{value:0},uCzK:{value:0},uSc:{value:1},uInkH:{value:1},uInkP:{value:1},uPdb:{value:new te(v[0],v[1],v[2])},uSun:{value:new te(...Ce(18,-28,1)).normalize()},uLand:{value:t.land},uEu:{value:t.eu},uEuBox:{value:new Ve(ea.lon0,ea.lat0,ea.lon1,ea.lat1)},uCamWorld:{value:new Ha},uInvProj:{value:new Ha}};e==="photo"&&(u.uDay={value:t.day},u.uDayEu={value:t.dayEu},u.uCloudTex={value:t.clouds},u.uDayCe={value:t.dayCe},u.uCeBox={value:new Ve(ta.lon0,ta.lat0,ta.lon1,ta.lat1)},u.uPhoto={value:0}),e==="mix"&&(u.uNightTex={value:t.night},u.uNightEu={value:t.nightEu});const o=new se({vertexShader:gl,fragmentShader:wl(Ll[e]),uniforms:u,transparent:!0,depthTest:!1,depthWrite:!1,...d}),n=new we(co(),o);n.name="globe",n.frustumCulled=!1,n.renderOrder=-20;const y=(r,b,h)=>new se({vertexShader:yl,fragmentShader:Al,uniforms:{uCam:u.uCam,uR:u.uR,uPdb:u.uPdb,uMarkR:u.uMarkR,uMark:u.uMark,uCol:{value:e==="light"?new qe().setStyle(r,Na):new qe(r)},uAlpha:{value:b},uFadeKm:{value:h}},transparent:!0,depthTest:!1,depthWrite:!1,...d}),M={dots:{coast:"#6f9cc4",border:"#8fb4d8",river:"#4f86b8"},photo:{coast:"#ffffff",border:"#ffffff",river:"#9cc8ff"},mix:{coast:"#5b8fc8",border:"#7fa9dc",river:"#3f6f9f"},light:{coast:"#4d677d",border:"#29455c",river:"#6c8194"}}[fo[e]?"light":e],g=(r,b)=>{const h=new Ie;h.setAttribute("position",new O(r,3));const S=new Ia(h,y(b,0,400));return S.frustumCulled=!1,S.renderOrder=-10,S},L=g(a[0],M.coast),T=g(a[1],M.border),I=g(a[3],M.river);L.name="coast",T.name="border",I.name="river";const V=new m0().setPositions(a[2]),q=new d0({color:e==="light"?9068304:15317072,linewidth:l.lite?1.6:2.2,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),k=new p0(V,q);k.frustumCulled=!1,k.renderOrder=-9;const p=l.lite?900:2400,z=new Float32Array(p*3),G=new Float32Array(p);let C=4242;const N=()=>(C=C*16807%2147483647)/2147483647;for(let r=0;r<p;r++){const b=N()*2-1,h=N()*Math.PI*2,S=Math.sqrt(1-b*b);z[r*3]=S*Math.cos(h)*1e5,z[r*3+1]=b*1e5,z[r*3+2]=S*Math.sin(h)*1e5,G[r]=Math.pow(N(),4)}const W=new Ie;W.setAttribute("position",new O(z,3)),W.setAttribute("aMag",new O(G,1));const f=new se({vertexShader:bl,fragmentShader:Ml,uniforms:{uAlpha:{value:0},uPx:{value:1},uOcc:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,...d}),_=new Vt(W,f);_.frustumCulled=!1,_.renderOrder=-15,_.name="stars";const F=new se({vertexShader:Sl,fragmentShader:_l,uniforms:{uLeft:{value:0},uAll:{value:0},uSide:{value:0},uCol:{value:e==="light"?new qe().setStyle("#c4cad0",Na):new qe("#040b15")}},transparent:!0,depthTest:!1,depthWrite:!1,...d}),P=new we(co(),F);return P.name="scrim",P.frustumCulled=!1,P.renderOrder=100,x.add(_,n,L,T,I,k,P),{group:x,resize(r,b){q.resolution.set(r,b)},setPhoto(r,b){const h=[];return u.uDay&&r&&u.uDay.value!==r&&(h.push(u.uDay.value),u.uDay.value=r),u.uCloudTex&&b&&u.uCloudTex.value!==b&&(h.push(u.uCloudTex.value),u.uCloudTex.value=b),h},update(r,b){const h=b.position;u.uCam.value.copy(h);const S=Math.hypot(h.x,h.y,h.z);u.uC.value=(S-X)*(S+X),u.uCamWorld.value.copy(b.matrixWorld),u.uInvProj.value.copy(b.projectionMatrixInverse),u.uAlpha.value=r.alpha,u.uHaloA.value=r.haloAlpha??r.alpha,u.uSpace.value=r.space,u.uAtm.value=r.atm,u.uS0.value=r.s0,u.uLod.value=r.lod,u.uMarkR.value=r.markR,u.uMark.value=r.mark,u.uMarkBlue.value=r.markBlue||0,u.uMarkGrow.value=r.markGrow||1,u.uTime.value=r.time,u.uNight.value=r.night,u.uPhoto&&(u.uPhoto.value=r.photo),u.uClouds.value=r.clouds,u.uHole.value=r.hole,u.uHoleR.value=r.holeR,u.uRevMode.value=r.revMode||0,u.uRevR.value=r.revR||1,u.uRevA.value=r.revA??1,u.uVeil.value=r.veil||0,((r.spin||0)!==i||(r.sunLat||0)!==s)&&(i=r.spin||0,s=r.sunLat||0,Ce(18+s,-28+i,1,c),u.uSun.value.set(c[0],c[1],c[2]).normalize()),u.uCzK.value=r.czk,u.uSc.value=r.sc||1,u.uInkH.value=r.inkH??1,u.uInkP.value=r.inkP??1,n.visible=r.alpha>.002||r.space>.002,L.material.uniforms.uAlpha.value=r.lines*(e==="photo"?.18:.38),T.material.uniforms.uAlpha.value=r.lines*(e==="photo"?.3:.5),I.material.uniforms.uAlpha.value=r.rivers*.35;for(const R of[L,T,I])R.material.uniforms.uFadeKm.value=Math.max(1,S-X)*.05,R.visible=R.material.uniforms.uAlpha.value>.002;q.opacity=r.cz,k.visible=r.cz>.002,_.position.copy(h),f.uniforms.uAlpha.value=r.stars,f.uniforms.uOcc.value=Math.min(1,20*Math.max(r.alpha,r.haloAlpha??r.alpha)),f.uniforms.uPx.value=r.px,_.visible=r.stars>.002,fo[e]&&(L.visible=T.visible=I.visible=k.visible=_.visible=!1),F.uniforms.uLeft.value=r.scrimLeft,F.uniforms.uAll.value=r.scrimAll,F.uniforms.uSide.value=r.scrimSide??0,P.visible=r.scrimLeft+r.scrimAll>.002}}}const _t=[[48.2082,16.3738],[52.52,13.405],[47.4979,19.0402],[48.8566,2.3522],[51.5074,-.1278],[41.9028,12.4964],[40.4168,-3.7038],[59.3293,18.0686],[50.4501,30.5234],[39.9334,32.8597],[24.4539,54.3773],[39.9042,116.4074],[56.9496,24.1052],[37.9838,23.7275],[35.6762,139.6503],[1.3521,103.8198]],aa=128,yt=2.5,Tl=yt*_t.length,Pl=`
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
`,Cl=`
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
  float k = floor(uTime / ${yt.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = 2.0 * floor(h * ${_t.length/2}.0) + mod(j, 2.0);
    float since = uTime - j * ${yt.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${yt.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
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
  float order = vArc.y * float(${_t.length});
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
`,kl=`
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
  float k = floor(uTime / ${yt.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = 2.0 * floor(h * ${_t.length/2}.0) + mod(j, 2.0);
    float since = uTime - j * ${yt.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${yt.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
  }
  return best;
}
void main() {
  vec4 cp = projectionMatrix * viewMatrix * vec4(position, 1.0);
  gl_Position = cp;
  // Вспышка, когда приходит голова (конец пути), и тихое тление.
  float order = aArc.y * float(${_t.length});
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
`,Dl=`
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
`,vo={blending:wt,blendSrc:ze,blendDst:ze,blendSrcAlpha:ze,blendDstAlpha:lt};function zl(e){const t=new te(...Ce(e.lat,e.lon,1)),a=_t.length,l=a*(aa+1)*2,i=new Float32Array(l*3),s=new Float32Array(l),c=new Float32Array(l),x=new Float32Array(l*4),d=[];let v=7;const u=()=>(v=v*16807%2147483647)/2147483647,o=_t.map(([C,N],W)=>{const f=new te(...Ce(C,N,1)),_=Math.acos(Math.min(1,Math.max(-1,t.dot(f)))),F=Math.min(.06*X,_*X*.2);return{e:f,ang:_,a:[3+2*Math.min(1,_/1.45),0,F,.75+.25*u()]}}),n=o.map((C,N)=>N);for(let C=n.length-1;C>0;C--){const N=Math.floor(u()*(C+1));[n[C],n[N]]=[n[N],n[C]]}n.forEach((C,N)=>{o[C].a[1]=N/a});let y=0;o.forEach(({e:C,a:N})=>{const W=y;for(let f=0;f<=aa;f++){for(const _ of[-1,1])i.set([C.x,C.y,C.z],y*3),s[y]=f/aa,c[y]=_,x.set(N,y*4),y++;if(f<aa){const _=W+f*2;d.push(_,_+1,_+2,_+1,_+3,_+2)}}});const M=new Ie;M.setAttribute("position",new O(new Float32Array(l*3),3)),M.setAttribute("aEnd",new O(i,3)),M.setAttribute("aT",new O(s,1)),M.setAttribute("aSide",new O(c,1)),M.setAttribute("aArc",new O(x,4)),M.setIndex(d);const g=new qe("#78d0e6"),L=new se({vertexShader:Pl,fragmentShader:Cl,uniforms:{uP:{value:t},uRes:{value:new Pe(1,1)},uHalfW:{value:5},uTime:{value:0},uPeriod:{value:Tl},uAlpha:{value:0},uStart:{value:0},uTextL:{value:1},uTextR:{value:0},uDpr:{value:1},uNear:{value:0},uCol:{value:g}},transparent:!0,depthWrite:!1,depthTest:!1,side:Ut,...vo}),T=new we(M,L);T.frustumCulled=!1,T.name="arcs";const I=new Float32Array((a+1)*3),V=new Float32Array((a+1)*4),q=new Float32Array(a+1);o.forEach(({e:C,a:N},W)=>{I.set([C.x*X,C.y*X,C.z*X],W*3),V.set(N,W*4)}),I.set([t.x*X,t.y*X,t.z*X],a*3),V.set([1,0,0,1],a*4),q[a]=1;const k=new Ie;k.setAttribute("position",new O(I,3)),k.setAttribute("aArc",new O(V,4)),k.setAttribute("aHome",new O(q,1));const p=new se({vertexShader:kl,fragmentShader:Dl,uniforms:{uTime:L.uniforms.uTime,uPeriod:L.uniforms.uPeriod,uStart:L.uniforms.uStart,uNear:L.uniforms.uNear,uAlpha:L.uniforms.uAlpha,uCol:{value:g},uDpr:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,...vo}),z=new Vt(k,p);z.frustumCulled=!1,z.name="arcDots";const G=new Et;return G.add(T,z),T.renderOrder=50,z.renderOrder=51,{group:G,update(C){const N=G.visible;if(G.visible=C.alpha>.002,!G.visible)return;N||(L.uniforms.uStart.value=C.time),L.uniforms.uTextL.value=C.textL??1,L.uniforms.uTextR.value=C.textR??0,L.uniforms.uAlpha.value=C.alpha,L.uniforms.uTime.value=C.time,L.uniforms.uRes.value.set(C.w,C.h);const W=Math.log(Math.max(1,C.d||2e4)),f=1-Math.min(1,Math.max(0,(W-Math.log(2e3))/(Math.log(2e4)-Math.log(2e3)))),_=f*f*(3-2*f);L.uniforms.uNear.value=_,L.uniforms.uHalfW.value=5*C.dpr*(1+.8*_),p.uniforms.uDpr.value=C.dpr,L.uniforms.uDpr.value=C.dpr}}}const Fa="/assets/dawn/",ut=4,mo=6336/2688,El=.62,po=.668,Tt={x:.712,y:.676},ho={x:.775,y:.3},vt=[-1,-.45,0,.35,1],Il={zen:["#03091a","#0a1532","#28427f","#1f68c0","#1478d8"],hor:["#0e1b34","#2a2a4a","#c88a90","#b4d6ee","#bfe0f6"],glow:["#000000","#4c2a34","#ff7a2e","#ffc78a","#ffe9c8"],halo:["#000000","#160a0c","#ff8d3f","#ffdcb0","#f6f8ff"],disc:["#000000","#000000","#ffb070","#fff0d0","#fffaf0"],cLit:["#05070f","#4a2c3a","#ffbc9c","#ffeedd","#ffffff"],cSh:["#03050c","#1a1830","#8e6490","#b6b2c8","#aebfd6"],cCream:["#ffffff","#ffffff","#ffe2cc","#ffeedd","#fff1de"],mBase:["#050a17","#0b0f22","#2a2140","#46526e","#5a6a86"],mTint:["#6f86c0","#7a6aa0","#ffb28a","#ffe6cc","#ffffff"],nTint:["#7d95d0","#8a7aa8","#ffb088","#fff0dc","#ffffff"],nAmb:["#020408","#04040c","#0c0710","#05060a","#000000"],rim:["#000000","#3a1a12","#ff8a3a","#ffcf94","#fff2dc"]},Nl={horPow:[4,3.4,2.6,3.4,4.2],glowW:[.6,.55,.42,.42,.4],haloW:[.08,.08,.075,.07,.06],pol:[0,0,.12,.35,.48],mLight:[0,.015,.16,.65,1],mHaze:[.85,.85,.85,.4,.16],nLight:[.01,.02,.075,.6,1],rimK:[0,.25,1.15,.45,.12],veil:[0,0,.14,.3,.34]},Hl=e=>{const t=new qe(e);return[t.r,t.g,t.b]},xo=Object.fromEntries(Object.entries(Il).map(([e,t])=>[e,t.map(Hl)]));function Bo(e){if(e<=vt[0])return[0,0];for(let t=0;t<vt.length-1;t++)if(e<=vt[t+1]){const a=(e-vt[t])/(vt[t+1]-vt[t]);return[t,t===1?Math.pow(a,1.6):a]}return[vt.length-2,1]}function Be(e,t,a){const[l,i]=Bo(t),s=xo[e][l],c=xo[e][l+1];a.set(s[0]+(c[0]-s[0])*i,s[1]+(c[1]-s[1])*i,s[2]+(c[2]-s[2])*i)}const oa=e=>{const t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function et(e,t){const[a,l]=Bo(t),i=Nl[e];return i[a]+(i[a+1]-i[a])*l}const go=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Ol=`
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
`,Za=`
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
`,Uo=`
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
`,Gl=`
precision highp float;
${Za}
${Ol}
uniform float uA, uStars, uCell, uDiscA, uSunR, uRays, uTime, uGlowP;
uniform sampler2D tCl;
uniform float uHor0, uSpan, uAsp, uDrift, uRise, uClA;
${Uo}
uniform vec2 uStarOff;
uniform vec3 uDisc;
// метеоры (по клику на ночное небо): uMetN штрихов; uMa — голова (точки
// холста, GL) и направление полёта; uMb — длина хвоста, блеск, полуширина
// хвоста и радиус головы (точки холста); uMc — зерно шума, шаг клочьев
// хвоста, сила свечения головы, пройденный путь
uniform float uMetN, uMetA;
uniform vec4 uMa[${ut}];
uniform vec4 uMb[${ut}];
uniform vec4 uMc[${ut}];
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
    for (int i = 0; i < ${ut}; i++) {
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
`,Bl=`
precision highp float;
uniform sampler2D tCl;
uniform vec2 uRes, uSunC;
uniform float uA, uHor0, uSpan, uAsp, uDrift, uLeftK, uRise;
uniform vec3 uLit, uSh, uCream, uGlowC;
${Uo}
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
`,Wo=`
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
`,Ul=`
precision highp float;
${Za}
${Wo}
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
`,Wl=`
precision highp float;
${Za}
${Wo}
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
`,Kl=`
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
`,ql=`
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
`,jl=`
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
`;function $l(){const e=new Ie;return e.setAttribute("position",new O(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}const ca=new Po(new Uint8Array([0,0,0,0]),1,1);ca.needsUpdate=!0;function Vl(){return{uRes:{value:new Pe(1,1)},uPx:{value:1},uHor:{value:0},uHorPow:{value:3},uGlowW:{value:.5},uHaloW:{value:.08},uPol:{value:0},uSun:{value:new Pe},uZen:{value:new te},uHorC:{value:new te},uGlow:{value:new te},uHalo:{value:new te}}}function Xl({lite:e=!1}={}){const t=new Et;t.name="dawn";const a=$l(),l=Vl(),i=(r,b,h,S)=>{const R=new we(a,new se({vertexShader:go,fragmentShader:r,uniforms:{...l,...b},transparent:!0,depthTest:!1,depthWrite:!1,...Ze}));return R.frustumCulled=!1,R.renderOrder=h,R.name=S,t.add(R),R},s=i(Gl,{uA:{value:0},uStars:{value:0},uTime:{value:0},uGlowP:{value:0},uClA:{value:0},uCell:{value:e?8:7},uDiscA:{value:0},uSunR:{value:10},uRays:{value:0},uStarOff:{value:new Pe},uDisc:{value:new te},uMetN:{value:0},uMetA:{value:0},uMa:{value:Array.from({length:ut},()=>new Ve)},uMb:{value:Array.from({length:ut},()=>new Ve)},uMc:{value:Array.from({length:ut},()=>new Ve)}},200,"dawn-sky"),c=new we(a,new se({vertexShader:go,fragmentShader:Bl,uniforms:{tCl:{value:ca},uRes:{value:new Pe(1,1)},uSunC:{value:new Pe},uA:{value:0},uHor0:{value:0},uSpan:{value:.754},uAsp:{value:1003/652},uDrift:{value:0},uLeftK:{value:.12},uRise:{value:0},uMorph:{value:0},uLit:{value:new te},uSh:{value:new te},uCream:{value:new te(1,1,1)},uGlowC:{value:new te}},transparent:!0,depthTest:!1,depthWrite:!1,...Ze}));c.frustumCulled=!1,c.renderOrder=202;for(const r of["tCl","uHor0","uSpan","uAsp","uDrift","uRise","uMorph"])s.material.uniforms[r]=c.material.uniforms[r];c.name="dawn-clouds",t.add(c);const x=i(Ul,{tL:{value:ca},uPlate:{value:new Ve(0,0,1,1)},uTop:{value:0},uA:{value:0},uMLight:{value:0},uMHaze:{value:0},uMBase:{value:new te},uMTint:{value:new te}},203,"dawn-far"),d=i(Wl,{tL:{value:ca},uPlate:{value:new Ve(0,0,1,1)},uTop:{value:0},uA:{value:0},uNLight:{value:0},uRimK:{value:0},uNTint:{value:new te},uNAmb:{value:new te},uRim:{value:new te}},204,"dawn-near"),v=i(Kl,{uVeil:{value:0},uFlat:{value:e?1:0}},205,"dawn-veil");let u=null;const o=new se({vertexShader:ql,fragmentShader:jl,uniforms:{uAlpha:{value:0},uPx:{value:1},uOcc:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,...Ze});let n=null,y=!1,M=0,g=0,L=!1;const T={near:.4673,far:.6369};function I(r,b){if(n)return n;const h=new Fo;h.setOptions({imageOrientation:"none",premultiplyAlpha:"none",colorSpaceConversion:"none"});const S=E=>new Promise((j,Y)=>h.load(Fa+E+(b?"":"-s")+".webp",ae=>{const m=new Da(ae);m.colorSpace=da,m.flipY=!1,m.wrapS=m.wrapT=$t,m.minFilter=pa,m.magFilter=St,m.anisotropy=4,m.needsUpdate=!0,j(m)},void 0,Y)),R=new Promise((E,j)=>h.load(Fa+"clouds.png",Y=>{const ae=new Da(Y);ae.colorSpace=da,ae.flipY=!1,ae.wrapS=$a,ae.wrapT=$t,ae.minFilter=pa,ae.magFilter=St,ae.needsUpdate=!0,E(ae)},void 0,j));return n=Promise.all([fetch(Fa+"dawn.json").then(E=>E.json()),S("near"),S("far"),R]).then(([E,j,Y,ae])=>{r.initTexture(ae);const m=c.material.uniforms;m.tCl.value=ae,E.clouds&&(m.uSpan.value=E.clouds.span,m.uAsp.value=E.clouds.w/E.clouds.h),L=!0,T.near=E.layers.near.top,T.far=E.layers.far.top,r.initTexture(j),r.initTexture(Y),d.material.uniforms.tL.value=j,x.material.uniforms.tL.value=Y,d.material.uniforms.uTop.value=T.near,x.material.uniforms.uTop.value=T.far,y=!0}).catch(E=>console.warn("[cfig] рассвет: слои не подгрузились:",E)),n}const V=new Pe;let q=!1,k=!1;const p={e:1,stars:0,A:0,px:1,w:1,h:1,hor:0,pFar:null,pNear:null},z=[];let G=null;function C(r){const h=Math.max(1,Math.round(768*r.height/r.width)),S=document.createElement("canvas");S.width=768,S.height=h;const R=S.getContext("2d",{willReadFrequently:!0});R.drawImage(r,0,0,768,h);const E=R.getImageData(0,0,768,h).data,j=new Uint8Array(768*h);for(let Y=0;Y<j.length;Y++)j[Y]=E[Y*4+3];return{W:768,H:h,a:j}}function N(r,b,h,S,R){const E=(S-b.x0)/b.Wp,j=((b.top-R)/b.Hp-h)/(1-h);return E<0||E>=1||j<0?!1:r.a[Math.min(r.H-1,Math.floor(j*r.H))*r.W+Math.floor(E*r.W)]>40}function W(r,b){if(b<=p.hor)return!1;if(!y||!p.pFar)return!0;try{G||={far:C(x.material.uniforms.tL.value.image),near:C(d.material.uniforms.tL.value.image)}}catch{return!0}return!N(G.far,p.pFar,T.far,r,b)&&!N(G.near,p.pNear,T.near,r,b)}const f=(r,b)=>r+Math.random()*(b-r);function _(r,b,h){if(!q||p.A<.6||p.stars<.2||p.e>-.1||z.length>=ut||!W(r,b))return!1;const S=p.px,R=performance.now(),E=p.w,j=p.h;let Y=h?.x,ae=h?.y;for(let Ne=0;Ne<12&&Y===void 0;Ne++){const ne=f(.45,.9)*E,ge=f(p.hor+.35*(j-p.hor),.84*j);ge>p.hor&&W(ne,ge)&&(Y=ne,ae=ge)}if(Y===void 0)return!1;const m=h?.sg??(Y/E>.68?-1:1),Q=(h?.ang??f(18,42))*Math.PI/180,ke=[m*Math.cos(Q),-Math.sin(Q)],fe=f(.15,.3)*E,ve=h?.I??.22*Math.pow(7,Math.pow(Math.random(),1.6));return z.push({t0:R,x:Y,y:ae,dir:ke,dist:fe,life:f(1.4,2.2),I:ve,L:fe*f(.3,.45)*(.8+.15*ve),w:(.5+.35*ve)*S,r:(.75+.55*ve)*S,glow:.06+.1*ve,seed:Math.floor(f(1,97)),grain:f(4,7)*S}),!0}function F(r,b){const h=s.material.uniforms;let S=0;for(let R=z.length-1;R>=0;R--)(r-z[R].t0)/1e3>z[R].life&&z.splice(R,1);for(const R of z){const E=(r-R.t0)/1e3/R.life,j=R.dist*(1-Math.pow(1-E,1.5)),Y=Math.min(j,R.L*oa(E/.4)*(1-.6*oa((E-.55)/.45))),ae=1+.08*(Math.random()-.5),m=R.I*oa(E/.15)*(1-oa((E-.45)/.55))*ae;h.uMa.value[S].set(R.x+R.dir[0]*j,R.y+R.dir[1]*j,R.dir[0],R.dir[1]),h.uMb.value[S].set(Y,m,R.w,R.r),h.uMc.value[S].set(R.seed,R.grain,R.glow,j),S++}h.uMetN.value=S,h.uMetA.value=b}function P(r,b,h,S){const R=.035*b,E=Math.max(r/mo,(h?.62:.86)*b)+R,j=E*mo,Y=h?.52:.66;return{x0:Math.min(0,Math.max(r-j,Y*r-El*j)),top:E-R+S,Wp:j,Hp:E}}return{group:t,load:I,get ready(){return y},meteor:_,get meteors(){return z.length},adoptStars(r){u||!r||(u=new Vt(r.geometry,o),u.frustumCulled=!1,u.renderOrder=201,u.name="dawn-estars",u.userData.src=r,t.add(u))},update(r){if(q=!!r.on,t.visible=q,!q){k=!1,z.length=0,s.material.uniforms.uMetN.value=0;return}const{w:b,h,e:S,lite:R}=r,E=r.now||0,j=Math.min(.1,Math.max(0,(E-g)/1e3));g=E,M=y?Math.min(1,M+j/.5):0,r.instant&&y&&(M=1);const Y=r.D-.5,ae=P(b,h,R,Y*.0105*h),m=P(b,h,R,Y*.028*h),Q=P(b,h,R,Y*.06*h),ke=re=>m.top-re*m.Hp,fe=ke(po);Object.assign(p,{e:S,stars:r.stars,A:r.A,px:r.px,w:b,h,hor:fe,pFar:m,pNear:Q});let ve,Ne;if(S<0)ve=Tt.x,Ne=Tt.y+.12*-S;else{const re=S,Je=Math.sin(re*Math.PI/2);ve=Tt.x+(ho.x-Tt.x)*re,Ne=Tt.y+(ho.y-Tt.y)*Je}V.set(Math.min(m.x0+ve*m.Wp,.9*b),ke(Ne));const ne=l;ne.uRes.value.set(b,h),ne.uPx.value=r.px,ne.uHor.value=fe,ne.uSun.value.copy(V),Be("zen",S,ne.uZen.value),Be("hor",S,ne.uHorC.value),Be("glow",S,ne.uGlow.value),Be("halo",S,ne.uHalo.value),ne.uHorPow.value=et("horPow",S),ne.uGlowW.value=et("glowW",S),ne.uHaloW.value=et("haloW",S),ne.uPol.value=et("pol",S);const ge=s.material.uniforms;if(ge.uA.value=r.A,ge.uStars.value=r.stars,ge.uTime.value=r.time||0,z.length?F(performance.now(),r.A):ge.uMetN.value=0,ge.uGlowP.value=Math.min(1,Math.max(0,(S+1)/1.5)),Be("disc",S,ge.uDisc.value),ge.uDisc.value.multiplyScalar(1.8),ge.uDiscA.value=Math.min(1,Math.max(0,(S+.06)/.1)),ge.uSunR.value=(.0105+.004*Math.max(0,1-S/.4))*m.Hp,ge.uRays.value=Math.min(1,Math.max(0,(S-.25)/.5)),ge.uStarOff.value.set(.0845*b,ae.top-P(b,h,R,0).top),u){const re=u.userData.src;u.position.copy(re.position),o.uniforms.uAlpha.value=r.estars,o.uniforms.uPx.value=re.material.uniforms.uPx.value,o.uniforms.uOcc.value=re.material.uniforms.uOcc.value,u.visible=r.estars>.002}const Me=Math.min(1,Math.max(0,(S+.8)/.75)),nt=r.A*Math.min(1,Math.max(0,(S+.85)/.3))*(L?1:0);if(k=nt>.002,s.material.uniforms.uClA.value=k?nt:0,c.visible=k,k){const re=c.material.uniforms,Je=P(b,h,R,0);re.uRes.value.set(b,h),re.uHor0.value=Je.top-po*Je.Hp,re.uDrift.value=r.time*4*r.px,re.uMorph.value=r.time,re.uA.value=nt,re.uRise.value=Me,re.uSunC.value.copy(V),Be("cLit",S,re.uLit.value),Be("cSh",S,re.uSh.value),Be("cCream",S,re.uCream.value),Be("glow",S,re.uGlowC.value),re.uGlowC.value.multiplyScalar(.3)}const Xe=r.A*M;x.visible=d.visible=Xe>.002;const Ye=x.material.uniforms;Ye.uPlate.value.set(m.x0,m.top,m.Wp,m.Hp),Ye.uA.value=Xe,Ye.uMLight.value=et("mLight",S),Ye.uMHaze.value=et("mHaze",S),Be("mBase",S,Ye.uMBase.value),Be("mTint",S,Ye.uMTint.value);const We=d.material.uniforms;We.uPlate.value.set(Q.x0,Q.top,Q.Wp,Q.Hp),We.uA.value=Xe,We.uNLight.value=et("nLight",S),We.uRimK.value=et("rimK",S),Be("nTint",S,We.uNTint.value),Be("nAmb",S,We.uNAmb.value),Be("rim",S,We.uRim.value);const Ht=et("veil",S)*(R?.75:1)*r.A;v.material.uniforms.uVeil.value=Ht,v.visible=Ht>.002},prerender(){}}}const fa="home",xt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ko=5,wo=new URLSearchParams(location.search).get("earthfreeze"),Ga=!0,At=[3.1,3.9];let va=.5;const Pt={a:0,b:0};let he=null,Ue=null,J=null,xe=null,zt=null,Ee=null,bt=null,Te=null,gt=null,xa=null,Ke=null;const tt={alpha:0,time:0,w:1,h:1,dpr:1,textL:1},Re=[5.08,6.2],Yl=.5,Zl=.05,Ta=[5.4,6.14];function Jl(e,t){t.k=Ba?w(4.9,5.2,e)*(1-w(6.3,6.8,e)):0;const a=Math.min(1,Math.max(-.5,(e-Ta[0])/(Ta[1]-Ta[0])));return t.c=-Math.cos(2*Math.PI*a),t.u=(1+t.c)/2,t.textR=t.k*(1-t.u),t}const Ct={k:0,u:0,c:0,textR:0};let Ba=!1,Le=null;const Ua=new Co(35,1,1,1e6),be={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},la=[0,0,0],na=[0,0,0],ra=[0,0,0],Lt=new te,je={lat:0,lon:0,tilt:0,head:0,sx:0,sy:0,ok:!1};function Ja(e,t){if(!Te||e<=Re[0])return;je.ok||(Yt(Re[0],je),je.ok=!0);const a=w(Re[0],Re[1],e);t.lat=je.lat,t.lon=je.lon,t.head=je.head,t.tilt=je.tilt*(1-a),t.sx=je.sx+(.3-je.sx)*a,t.sy=je.sy+(0-je.sy)*a}function Wa(e,t,a){Yt(t,be),Ja(t,be),zo(be.lat,be.lon+e,be.d,be.tilt,be.head,la,na,ra),a.position.set(la[0],la[1],la[2]),a.up.set(na[0],na[1],na[2]),a.lookAt(ra[0],ra[1],ra[2]),a.aspect=le/pe,a.near=Math.max(.02,be.d*.02),a.far=Math.max(be.d*4,be.d+2.2*X)+2e5,a.updateProjectionMatrix(),a.projectionMatrix.elements[8]=-be.sx,a.projectionMatrix.elements[9]=-be.sy,a.projectionMatrixInverse.copy(a.projectionMatrix).invert(),a.updateMatrixWorld();const l=Ce(K.lat,K.lon);return Lt.set(l[0],l[1],l[2]).project(a),(Lt.x*.5+.5)*(xe.clientWidth||innerWidth)}function qo(){const e=document.querySelector("#container-probe i")?.getBoundingClientRect();return e&&e.width>0?e.left+e.width/2:innerWidth/2}function Ql(){const e=le+"x"+pe;if(Le&&Le.key===e)return Le.v;const t=qo();let a=0,l=1/0;for(let i=-30;i<=60;i+=.25){const s=Wa(i,Re[1],Ua);Lt.z<1&&Math.abs(s-t)<l&&(l=Math.abs(s-t),a=i)}return Yt(Re[1],be),Ja(Re[1],be),Le={key:e,v:a,goal:t,lat:be.lat,lon:be.lon,sx:be.sx,sy:be.sy},Le.v}const mt=[4.85,5.08];let Mt=null,at=null,Dt=null,$=null,ga=0,yo=null,oe=!1,Oe=null;const en=performance.now(),ba=[{t:0,lat:K.lat-.012,lon:K.lon,d:6.5,tilt:74,head:-30,sx:.3,sy:.02},{t:1,lat:K.lat-.008,lon:K.lon,d:7.2,tilt:70,head:-20,sx:.3,sy:0},{t:2,lat:K.lat-.004,lon:K.lon,d:8.4,tilt:62,head:-9,sx:.3,sy:0},{t:3,lat:K.lat,lon:K.lon,d:9.6,tilt:52,head:2,sx:.3,sy:0},{t:4,lat:K.lat,lon:K.lon,d:11,tilt:46,head:12,sx:.8,sy:-.22},{t:4.5,lat:K.lat,lon:K.lon-.05,d:75,tilt:32,head:8,sx:.55,sy:-.26},{t:5,lat:49.85,lon:15.45,d:780,tilt:14,head:0,sx:.32,sy:-.2},{t:5.5,lat:50,lon:14.2,d:2300,tilt:6,head:0,sx:.3,sy:-.1},{t:6,lat:49,lon:12,d:5600,tilt:0,head:0,sx:.3,sy:0},{t:7,lat:38,lon:9,d:23e3,tilt:0,head:0,sx:.32,sy:0},{t:8,lat:30,lon:-4,d:34e3,tilt:0,head:0,sx:1.2,sy:.95}],jo=ba.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),$o=ba.map(e=>e.t===5?{...e,d:1500,sx:-.3,sy:-.52}:e.t===5.5?{...e,sx:-.42,sy:-.56}:e),Vo=[...$o.map(e=>e.t===2?{...e,tilt:58,head:-18}:e.t===3?{...e,tilt:50,head:6,d:9.2}:e),{t:2.5,lat:K.lat-.002,lon:K.lon,d:8.8,tilt:54,head:-8,sx:.3,sy:0}].sort((e,t)=>e.t-t.t),tn=Vo.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),ma={lat:K.lat,lon:K.lon,head:10.2},Pa={...ma,d:11,tilt:46,sx:.62,sy:-.08},Xo=[{t:0,...ma,d:12.5,tilt:76,sx:.3,sy:0},{t:1,...ma,d:11.2,tilt:72,sx:.3,sy:0},{t:2,...ma,d:11,tilt:56,sx:.5,sy:-.04},{t:2.5,...Pa},{t:3,...Pa},{t:4,...Pa},...ba.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],an=[...Xo.filter(e=>e.t<=4).map(e=>({...e,sx:0,sy:-.12})).map(e=>e.t===2?{...e,d:16}:e.t===2.5?{...e,d:19}:e.t===3||e.t===4?{...e,d:22}:e),...jo.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],ht=1.5,on=[{t:0,lat:K.lat-.012,lon:K.lon,d:8,tilt:80,sx:.3,sy:.02},{t:1,lat:K.lat-.008,lon:K.lon,d:8.5,tilt:76,sx:.3,sy:0}],Ao=[[0,10.2],[ht,10.2]];function ln(e,t){const a=Wt(e),l=n=>({t:n,...a(n,{})}),i=on.map(n=>t?{...n,sx:0,sy:-.12}:n),s=[...i,l(ht),l(ht+.3)],c=wa([...Ao.map(n=>n[0]),ht+.3],[...Ao.map(n=>n[1]),s[s.length-1].head]),x=Wt(s.map(({head:n,...y})=>y)),d={lat:K.lat,lon:K.lon,head:10.2,sx:t?0:.69,sy:t?-.12:-.05},v=Wt([[0,12.5,76],[1,11.2,72],[2,9.4,62],[2.5,8.3,53],[3,7.48,47.5],[4,7.48,47.5]].map(([n,y,M])=>({t:n,...d,d:y,tilt:M}))),u=n=>{const y=v(n,{});return delete y.head,{t:n,...y}},o=Wt([...i,u(ht),u(ht+.3)]);return(n,y)=>n>=ht?a(n,y):(n<=1?o(n,y):x(n,y),y.head=c(n),y)}let Yt=null;const w=(e,t,a)=>{const l=Math.min(1,Math.max(0,(a-e)/(t-e)));return l*l*(3-2*l)},U={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},de={resW:1,resH:1,time:0,asm:0,wave:1,map:0,houses:0,marks:0,alpha:1,points:1,focal:1e3,far:30},B={alpha:0,space:0,atm:0,s0:1,lod:0,markR:1,mark:0,time:0,night:0,photo:0,clouds:0,lines:0,rivers:0,cz:0,czk:0,stars:0,px:1,scrimLeft:0,scrimAll:0,hole:0,holeR:$e},Se={},ce={},me={};let _e=0,ct=0,Ca=0,st=0,Ka=0,qt=0,bo=0;const dt=[0,0,0],ia=[0,0,0],sa=[0,0,0],nn=14,He={a:0,b:0,f0:0,f1:0,spin:0,leave:0,on:!1};function rn(e){if(!He.on){He.spin=0,He.leave=0;return}He.spin=nn*w(He.a,He.b,e),He.leave=w(He.f0,He.f1,e)}function sn(){const e=document.querySelector("#canvas-wrapper");if(!e)return null;let t=e.querySelector("canvas.canvas-earth");return t||(t=document.createElement("canvas"),t.className="canvas-earth",t.setAttribute("aria-hidden","true"),e.append(t)),t}function ka(){Xt.measures++;const e=innerHeight,t=n=>{const y=document.querySelector(n);if(!y)return null;const M=y.getBoundingClientRect();return{y:M.top+scrollY,h:M.height}},a=t("main .about"),l=t("main .growth"),i=t("main .reach"),s=t("main .companies"),c=t("main .values"),x=t("main .social");if(!a||!l||!i||!s||!c||!x){Oe=null;return}const d=v0(),v=new Array(11).fill(0);v[0]=d;const u=n=>n.y+.5*n.h-.5*e;if(v[1]=d+.8*e,v[2]=v[1]+1.1*e,v[3]=v[2]+1.1*e,Pt.a=v[3]-.25*e,Pt.b=Pt.a+1*e,v[4]=Pt.b+.15*e,Ba=matchMedia("(min-width: 901px)").matches,Ba?(v[5]=v[4]+1.5175*e,v[6]=v[5]+1.0508*e,v[9]=v[6]+3.5016*e):(v[5]=u(i),v[6]=Math.max(v[5]+1.05*e,s.y-.55*e),v[9]=c.y-.2*e),v[8]=v[9]-1.5*e,v[7]=(v[6]+v[8])/2,v[10]=v[9]+.8*e,!($==="ink"&&Ga)){if($==="ink"){const n=[1.1,.7,1.2,1.2,1,1.2,1.4,1.6],y=n.reduce((L,T)=>L+T,0),M=document.documentElement.scrollHeight-e-v[2],g=Math.min(1,Math.max(.3,M/(y*e)));for(let L=0;L<n.length;L++)v[L+3]=v[L+2]+n[L]*e*g}}for(let n=1;n<v.length;n++)v[n]=Math.max(v[n],v[n-1]+40);const o=[0,1,2,3,4,4.5,5,5.5,6,7,8];Oe={ys:v,ts:o,start:d,map:wa(v,o)},$==="ink"&&Ga&&(At[0]=Oe.map(Pt.a),At[1]=Oe.map(Pt.b),cn(x)),He.on=!1}function Yo(e){return Oe?Oe.map(e):0}function Zo(e){if(!Oe)return 0;let t=Oe.ys[0],a=Oe.ys[Oe.ys.length-1];for(let l=0;l<40;l++){const i=(t+a)/2;Oe.map(i)<e?t=i:a=i}return(t+a)/2}let le=0,pe=0;function Jo(){const e=Math.min(oe?1.5:1.75,window.devicePixelRatio||1),t=Math.max(1,Math.round(xe.clientWidth*e)),a=Math.max(1,Math.round(xe.clientHeight*e));t===le&&a===pe||(le=t,pe=a,he.setPixelRatio(1),he.setSize(t,a,!1),J.aspect=t/a,Mt?.resize(t,a),at?.resize(t,a),gt?.resize(t,a))}const pt=new te,kt=new te,ua=new te,ue={amount:0,time:0,w:1,h:1,hx:0,hy:0,r:1,dark:0,erode:0,dim:0,fly:0,neon:0,done:!1,textL:1,px:1};function un(e,t){if(ue.amount=w(.35,1,e)*(Te?1:1-w(3.8,4.4,e)),ue.dark=0,ue.erode=Ka,ue.dim=.55*w(0,.35,_e)*(1-ct),ue.fly=qt,ue.neon=ce.neon||0,ue.done=!!Te&&qt>=1,ue.textL=oe?1:.45,ue.px=le/(xe.clientWidth||le),ue.amount>.002){const a=Ce(K.lat,K.lon);pt.set(a[0],a[1],a[2]).project(J),ue.hx=(pt.x*.5+.5)*le,ue.hy=(pt.y*.5+.5)*pe;const l=$e/(111.32*Math.cos(K.lat*Math.PI/180)),i=Ce(K.lat,K.lon+l);pt.set(i[0],i[1],i[2]).project(J),ue.r=Math.max(.33*pe,Math.abs((pt.x*.5+.5)*le-ue.hx)),J.getWorldDirection(kt),ua.copy(J.position).normalize();const s=J.position.length(),c=kt.dot(ua);if(kt.addScaledVector(ua,-c),s>X&&kt.lengthSq()>1e-8){kt.normalize();const x=X/s,d=Math.sqrt(1-x*x);pt.copy(kt).multiplyScalar(x).addScaledVector(ua,-d).multiplyScalar(Math.sqrt(s*s-X*X)).add(J.position).project(J),ue.top=(pt.y*.5+.5)*pe-.04*pe}else ue.top=1e6;ue.topF=.1*pe}ue.time=t,ue.w=le,ue.h=pe,bt.update(ue)}const ee={yc:0,y0:0,y1:0,ok:!1,map:null},Ae={on:!1,A:0,D:0,e:-1,stars:0,estars:0,time:0,w:1,h:1,px:1,lite:!1,camera:null,now:0};function cn(e){if(ee.ok=!1,!e)return;const t=innerHeight;ee.yc=Zo(7),ee.y0=ee.yc,ee.y1=Math.max(ee.y0+1.5*t,e.y+e.h-t);const a=Math.min(ee.y1-.5*t,Math.max(ee.y0+.5*t,e.y-.6*t));ee.map=wa([ee.y0,a,ee.y1],[0,.22,1]),ee.ok=!0}function fn(e){return-1+.5*Math.min(1,Math.max(0,(e-.14)/.6))+.5*w(.14,.74,e)+w(.74,1,e)}function vn(e,t){if(!Ke||!ee.ok)return;const a=innerHeight;e>ee.yc-2.5*a&&Ke.load(he,!oe||le>1100),Ae.on=e>=ee.yc;const l=Math.min(1,Math.max(0,ee.map(Math.min(ee.y1,Math.max(ee.y0,e))))),i=fn(l),s=1-w(-.3,.45,i);Ae.D=l,Ae.e=i,Ae.A=w(ee.y0,ee.y0+.5*a,e),Ae.stars=w(ee.y0,ee.y0+1.1*a,e)*s,Ae.estars=0,Ae.time=t,Ae.w=le,Ae.h=pe,Ae.px=le/(xe.clientWidth||le),Ae.lite=oe,Ae.camera=J,Ae.now=performance.now(),Ke.update(Ae)}const mn="a,button,input,textarea,select,label,summary,details,video,audio,img,picture,svg,iframe,[role=button],[role=link],[contenteditable],[tabindex]";function dn(e,t){const a=document.caretRangeFromPoint?.(e,t),l=a?.startContainer;if(!l||l.nodeType!==3||!l.data.trim())return!1;const i=document.createRange();for(const s of[a.startOffset-1,a.startOffset])if(!(s<0||s>=l.data.length)){i.setStart(l,s),i.setEnd(l,s+1);for(const c of i.getClientRects())if(e>=c.left-2&&e<=c.right+2&&t>=c.top-2&&t<=c.bottom+2)return!0}return!1}function pn(e){if(!Ke||!Ae.on||e.button!==0||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||document.body.dataset.route!==fa)return;const t=e.target;if(!(t instanceof Element)||t.closest(mn)||getSelection&&!getSelection().isCollapsed||dn(e.clientX,e.clientY))return;const a=xe.getBoundingClientRect();!a.width||!a.height||Ke.meteor((e.clientX-a.left)*(le/a.width),pe-(e.clientY-a.top)*(pe/a.height))}function Qo(e,t){if(_e=Te?Math.min(1,Math.max(0,(e-At[0])/(At[1]-At[0]))):0,st=w(.6,.9,_e),Ka=Math.pow(Math.min(1,_e/va),.55),qt=Math.min(1,Math.max(0,(_e-va)/(1-va))),ct=w(.6,.95,_e),Ca=w(.65,1,_e),Yt(e,U),Te){Ja(e,U);const o=Ql();if(!(e<=Re[0]))if(e<=Re[1]){Le.x0===void 0&&(Le.x0=Wa(0,Re[0],Ua));const n=Le.x0+(Le.goal-Le.x0)*w(Re[0],Re[1],e);let y=0,M=o*1.3;for(let g=0;g<22;g++){const L=(y+M)/2;Wa(L,e,Ua)>n?y=L:M=L}U.lon+=(y+M)/2}else{U.lat=Le.lat,U.lon=Le.lon+o;const n=w(Re[1],7.3,e);U.sx=Le.sx+(1.3-Le.sx)*n,U.sy=Le.sy+(.15-Le.sy)*n}}He.spin&&(U.lon+=He.spin);const a=0;zo(U.lat,U.lon,U.d,U.tilt,U.head,dt,ia,sa),J.position.set(dt[0],dt[1],dt[2]),J.up.set(ia[0],ia[1],ia[2]),J.lookAt(sa[0],sa[1],sa[2]);const l=Math.hypot(dt[0],dt[1],dt[2])-X;if(J.near=Math.max(.02,U.d*.02),J.far=Math.max(U.d*4,U.d+2.2*X)+2e5,J.updateProjectionMatrix(),J.projectionMatrix.elements[8]=-U.sx,J.projectionMatrix.elements[9]=-U.sy,J.updateMatrixWorld(),Jl(e,Ct),Ct.k>0&&Te){const o=Ce(K.lat,K.lon);Lt.set(o[0],o[1],o[2]).project(J);const n=Lt.x*.5+.5,y=Yl+Zl*Ct.c;U.sx+=2*(y-n)*Ct.k,J.projectionMatrix.elements[8]=-U.sx}J.projectionMatrixInverse.copy(J.projectionMatrix).invert();const i=pe/(2*Math.tan(J.fov*Math.PI/360)),s=Ee?1-w(30,140,U.d):1-w(14,42,U.d);if(de.time=t,de.asm=w(1.85,3.05,e),de.wave=1-w(1.9,3,e),de.map=w(2.45,3.2,e),de.houses=w(2.55,3.45,e),de.marks=w(3,3.5,e)*(1-w(13,24,U.d)),de.points=1-.45*w(3,4,e),de.alpha=s*(1-ct),de.focal=i,de.resW=le,de.resH=pe,de.far=Math.max(14,U.d*2.6),de.hideTech=!!Ee,de.hideMarks=$==="ink",zt?.update(de),Te){Object.assign(ce,de),ce.hideTech=!1,ce.hideMarks=!1,ce.asm=1,ce.wave=0,ce.scr=bt&&qt<1?1:0,ce.dust=Ka,ce.fly=qt,ce.neon=w(.72,.86,_e),ce.cloudA=Math.max(.001,w(1.5,2.4,e)),ce.cloudTex=bt?.texture,_e<=0&&(bo=t);const o=t-bo;ce.driftX=Math.min(.035,o*(.035/1.6)*2*pe/le),ce.driftY=-Math.min(.006,o*(.006/1.6)*2),ce.dustL=oe?1:.45,ce.map=w(.7,1,_e),ce.camera=J,ce.houses=w(.75,1,_e),ce.marks=w(.88,1,_e)*(1-w(13,24,U.d)),ce.points=1-.45*w(.9,1,_e),ce.alpha=(1-w(40,75,U.d))*(_e>0?1:0),Te.update(ce)}bt&&un(e,t);const c=Math.max(.03,U.d*.0055),x=Math.log2(c),d=Math.floor(x);B.s0=Math.pow(2,d),B.sc=c,B.lod=x-d;const v=Ee?w(3.7,4.5,e):w(2.8,3.8,e)*.6+w(4,4.6,e)*.4,u=Te?w(Re[1]+.05,6.75,e):w(7.2,7.95,e);if(B.alpha=v*(1-u),B.spin=He.spin+ie.lon*a,B.sunLat=ie.lat*a,B.space=w(5.2,6.4,e),B.atm=w(5,6.2,e),B.markR=Math.max(.6,l*.012),B.mark=$==="ink"?0:w(18,50,U.d)*(1-u),B.time=t,B.night=$==="mix"?w(5.6,6.6,e):0,B.photo=$==="photo"?w(120,420,U.d):0,B.clouds=$==="photo"?w(5.4,6.6,e)*.85:0,B.lines=w(4.1,4.9,e)*(1-u),B.rivers=w(4.1,4.7,e)*(1-w(5.6,6.2,e))*(1-B.photo),B.cz=w(4.3,5,e)*(1-u),B.stars=$==="light"||Ee?0:w(5.6,6.8,e),B.px=Math.min(2,he.getPixelRatio()*(le/xe.clientWidth||1)),B.czk=Ee?w(40,260,U.d):w(120,520,U.d),B.hole=s*de.map,B.holeR=$e,B.scrimLeft=oe?0:$==="light"?.6:.72,B.scrimAll=oe?$==="light"?.45:.5:0,Ee&&(B.scrimLeft=0,B.scrimAll=0),at){const o=w(4.9,6,e),n=Math.exp(Math.log(5e3)+(Math.log(15)-Math.log(5e3))*o);B.revMode=0,B.revR=n,B.revA=1-o,Object.assign(Se,B),Se.revMode=0,Se.revA=o,Se.alpha=o>.001?B.alpha*o:0,B.alpha*=1-w(.85,1,o),Se.space=0,Se.stars=0,Se.hole=0,Se.photo=1,Se.clouds=w(5.4,6.6,e)*.7,Se.night=0,Se.rivers=0,Se.lines=B.lines*.5*o,Se.veil=.5*(1-w(5.9,6.7,e)),Se.cz=B.cz*o,Se.scrimLeft=0,Se.scrimAll=0,at.update(Se,J),B.revRibbons=1-o}else B.revRibbons=1;if(gt){Object.assign(me,B);const o=w(2.8,3.8,e)*.6+w(4,4.6,e)*.4;me.alpha=o*(1-u)*Ca*w(.5,1,st),me.haloAlpha=o*(1-w(Re[1]+.3,7,e))*Ca*w(.5,1,st),me.mark=w(18,50,U.d)*(1-u),me.markBlue=w(mt[0],mt[1],e),me.markGrow=1+.75*(1-w(mt[0],6,e)),me.stars=w(5.6,6,e)*(1-w(Re[1],Re[1]+.25,e)),me.czk=w(120,520,U.d);const n=w(30,75,U.d);me.hole=de.map*(1-w(72,100,U.d)),me.holeR=7+(me.markR*.45-7)*n,me.scrimLeft=(oe?0:.72)*st,me.scrimSide=Ct.textR,me.scrimAll=(oe?.5:0)*st,me.photo=0,me.clouds=0,me.night=0,me.spin=0,me.sunLat=0,me.revRibbons=1,gt.update(me,J),xa&&(tt.alpha=w(mt[0]+.6*(mt[1]-mt[0]),mt[1],e)*(1-u),tt.textL=oe?1:.3,tt.textR=Ct.textR,tt.time=t,tt.d=U.d,tt.w=le,tt.h=pe,tt.dpr=le/(xe.clientWidth||le),xa.update(tt)),B.alpha*=1-ct}Mt?.update(B,J),Ee&&gn(e,t,i,l,s,u)}const Qa=new Set,Xt={log:null,measures:0},hn=e=>{Qa.has(e.name)&&(e.visible=!1)};let Mo=0;const H={flat:0,pre:0,neonT:0,neonP:0,grow:0,ft:0,time:0,asm:0,wave:1,focal:1,far:30,dpr:1,w:1,h:1,cssW:1,cssH:1,bg:0,city:0,alpha:1,cam:null,fadeKm:100,veil:.9,sphere:{al:[0,0,0,0],ag:0,draw:[1,1,1,1],reg:[0,0],reach:0}},xn={lines:[.62,.55,.95,.5],ink:[.85,.7,1,.65]};function gn(e,t,a,l,i,s){if(H.time=t,H.asm=de.asm,H.wave=de.wave,H.focal=a,H.far=de.far,H.w=le,H.h=pe,H.cssW=xe.clientWidth||1,H.cssH=xe.clientHeight||1,H.dpr=le/H.cssW,H.bg=w(-.6,.9,e),H.city=$==="ink"?w(1.9,2.8,e):$==="lines"?w(3,3.5,e):w(2.4,3.3,e),H.alpha=i*(1-ct),Te){const o=ue.done?0:ue.dim;H.holdA=w(.18,.3,_e)*(1-w(40,75,U.d)),H.bake=Math.max(0,1-.17/Math.max(.17,1-o)),H.ground=1-st,H.tint=st}else H.holdA=0,H.bake=0,H.ground=1,H.tint=0;H.cam=J.position,H.camera=J,H.fadeKm=Math.max(1,l*.05),H.veil=0;{const o=$==="ink"?-.5:0;H.flat=w(1.55,2.25,e),H.pre=1-w(1,1.45,e);const n=$==="ink"&&q0()?1:0;H.neonT=n*(1-w(1.6,2.3,e)),H.neonP=n*(1-w(3.9,4.5,e))*(1-.6*H.city),H.neonP*=1-ct,H.asm=w(2+o,3.05+o,e),H.grow=$==="lines"?w(2.95,3.6,e):w(2.6+o,3.45+o,e),H.hatch=w(2.85+o,3.4+o,e),H.paint=w(2.75+o,3.15+o,e),B.inkH=w(4.7,5.4,e),B.inkP=w(4.55,5.1,e),H.ft+=Math.max(0,t-Mo)*(1-.9*H.flat)*($==="lines"&&Xa?.5:1);const y=w(3.3,4,e)*(1-w(5.8,6.5,e)),M=w(4.3,4.9,e),g=$==="ink"?w(110,220,U.d):1,L=1-ct;H.sphere.reg[0]=.55*y*g*(1-.6*M)*L,H.sphere.reg[1]=.8*y*g*(1-.45*M)*L,H.sphere.reach=Math.exp(Math.log(.004)+(Math.log(.45)-Math.log(.004))*w(3.35,5.2,e))}Mo=t;const c=xn[$],x=w(3.8,4.4,e)*(1-s)*(1-ct),d=1-w(5.6,6.3,e),v=B.revRibbons??1,u=$==="ink"?w(500,1100,U.d):1;H.sphere.al[0]=c[0]*x*v*u,H.sphere.al[1]=c[1]*x*v*u,H.sphere.al[2]=c[2]*x,H.sphere.al[3]=c[3]*x*d*v*u,H.sphere.ag=$==="lines"?.32*w(5.4,6.4,e)*(1-s):0,H.sphere.draw[0]=w(3.9,5.4,e),H.sphere.draw[1]=w(4,5.2,e),H.sphere.draw[2]=w(3.9,4.6,e),H.sphere.draw[3]=w(3.85,4.5,e),Ee.update(H)}let qa=-1;function wn(e,t=e>=.5){const a=Math.round(e*100)/100,l=document.documentElement;l.classList.toggle("earth-night",t),a!==qa&&(qa=a,l.style.setProperty("--earth-dark",String(a)))}let jt=-1,So=-1,e0=!1,_o=performance.now();function t0(){if(!Oe||!zt||!Mt)return;const e=window.scrollY||0,t=innerHeight,a=xt?1:w(Oe.start-.55*t,Oe.start+.05*t,e),l=a.toFixed(3);if(xe.style.opacity!==l&&(xe.style.opacity=l),a<=.001)return;Jo();const i=xt?Ko:Yo(e);xt?(He.spin=0,He.leave=0):rn(e);const s=xt?0:wo!==null?Number(wo):(performance.now()-en)/1e3,c=performance.now();ol(Math.min(.1,(c-_o)/1e3),e0&&xe.style.opacity>.5),_o=c,!(xt&&i===So&&e===jt&&!ie.dirty)&&(So=i,jt=e,Qo(i,s),Te&&wn(Math.max(st,w(0,.4,_e)),w(.08,.2,_e)>.5),vn(e,s),Xt.log&&Xt.log.push([performance.now(),e,i,U.d,U.tilt,U.head]),Qa.size&&Ue.traverse(hn),bt?.prerender(he),Ke?.prerender(he),he.render(Ue,J))}async function yn(){const e=oe?256:512,t=(p,z)=>x0(p,{srgb:z,renderer:he}),a=[t("land.webp"),t("europe.webp"),t("pardubice.webp",!1)];($==="photo"||Dt==="photo")&&a.push(t("day.webp",!0),t("day-eu.webp",!0),t("clouds.webp"),t("day-ce.webp",!0)),$==="mix"&&a.push(t("night.webp",!0),t("night-eu.webp",!0));const[l,i,s,c,x]=await Promise.all([Promise.all(a),w0(e),y0(),g0(),fetch("/assets/map/pardubice.json").then(p=>p.json())]),[d,v,u,o,n,y,M]=l;if(!Kt.includes($))for(const p of[d,v])p.generateMipmaps=!1,p.minFilter=St;const g=Object.values(x.проекты||{});zt=uo({luma:i,lumaSize:e,houses:s,projects:g},u,{side:oe?128:256,field:24,lite:oe,light:$==="light"||Kt.includes($)}),$==="ink"&&Ga&&(Te=uo({luma:i,lumaSize:e,houses:s,projects:g},u,{side:oe?128:256,field:24,lite:oe,light:!1,glow:!0}));let L=null,T=null;if($==="ink"){const[p,z,G,C,N,W,f]=await Promise.all([t("land-dem.webp"),t("land-a.webp"),t("land-b.webp"),t("land-far.webp"),t("land-hor.webp"),t("neon-near.webp"),t("neon-far.webp")]);for(const _ of[p,z,G,C,N,W,f])_.wrapS=_.wrapT=$t,_.flipY=!1,_.needsUpdate=!0;G.magFilter=Qt,G.minFilter=Qt,G.generateMipmaps=!1;for(const _ of[p,C,N,W,f])_.magFilter=Qt,_.minFilter=Qt,_.generateMipmaps=!1;L={dem:p,a:z,b:G,far:C,hor:N,neonN:W,neonF:f},T=(await(await fetch(ft+"land-routes.json")).json()).routes,l.push(p,z,G,C,N,W,f)}Kt.includes($)&&(Ee=await K0($,u,{lite:oe,houses:s,pdb:K,land:L,routes:T}));const I=new Ha,V=Do(K.lat,K.lon),q=Ce(K.lat,K.lon);I.makeBasis(new te(...V.e),new te(...V.u),new te(-V.n[0],-V.n[1],-V.n[2])).setPosition(q[0],q[1],q[2]),zt.group.matrixAutoUpdate=!1,zt.group.matrix.copy(I),Te&&(Te.group.matrixAutoUpdate=!1,Te.group.matrix.copy(I));const k={land:d,eu:v};($==="photo"||Dt==="photo")&&Object.assign(k,{day:o,dayEu:n,clouds:y,dayCe:M}),$==="mix"&&Object.assign(k,{night:o,nightEu:n}),Mt=Ra($,k,c,{pdb:K,lite:oe}),Dt&&(at=Ra(Dt,k,c,{pdb:K,lite:oe}),at.group.traverse(p=>{p.isGroup||(p.renderOrder+=.5)})),Ue.add(Mt.group,zt.group),at&&Ue.add(at.group),Te&&(gt=Ra("dots",k,c,{pdb:K,lite:oe}),Ue.add(gt.group,Te.group),xa=zl(K),Ue.add(xa.group),Ke=Xl({lite:oe}),Ke.adoptStars(gt.group.getObjectByName("stars")),Ue.add(Ke.group),xt||document.addEventListener("click",pn)),Ee&&(Ee.cityGroup.matrixAutoUpdate=!1,Ee.cityGroup.matrix.copy(I),Ue.add(Ee.cityGroup,Ee.sphereGroup,Ee.veil),$==="ink"&&(bt=X0(),Ue.add(bt.mesh))),le=0,Jo(),Mt.resize(le,pe),at?.resize(le,pe),gt?.resize(le,pe);for(const p of l)he.initTexture(p);Ue.traverse(p=>{p.visible=!0}),he.compile(Ue,J),Qo(xt?Ko:0,0),($==="photo"||Dt==="photo")&&An(),window.__cfigEarth={hide:Qa,dbg:Xt,grab:ie,grabProbe:al,yOf:Zo,look:$,get t(){return Yo(scrollY)},knots:()=>Oe,P:U,renderer:he,scene:Ue,clouds:ue,dig:()=>[At[0],At[1],va],meteors:()=>Ke?.meteors??0,meteorAt:(p,z,G,C,N)=>Ke?.meteor(p,z,{x:p,y:z,ang:G,sg:C,I:N}),dawn:()=>({yc:ee.yc,y0:ee.y0,y1:ee.y1,ok:ee.ok,D:Ae.D,e:Ae.e,A:Ae.A,ready:Ke?.ready,yOfD:p=>{let z=ee.y0,G=ee.y1;for(let C=0;C<40;C++){const N=(z+G)/2;ee.map(N)<p?z=N:G=N}return(z+G)/2}}),pdbX:()=>{J.updateMatrixWorld();const p=Ce(K.lat,K.lon);return Lt.set(p[0],p[1],p[2]).project(J),{x:(Lt.x*.5+.5)*xe.clientWidth,mid:qo(),spin:Le?.v}}}}let Lo=null;function An(){if(Lo)return;const e=oe?"4k":he.capabilities.maxTextureSize>=8192?"8k":"4k";Lo=Promise.all([ao(`day-${e}.webp`,{srgb:!0,renderer:he}),ao(`clouds-${e}.webp`,{red:!0,renderer:he})]).then(([t,a])=>{he.initTexture(t),he.initTexture(a);const l=new Set;for(const i of[Mt,at])for(const s of i?.setPhoto(t,a)||[])l.add(s);for(const i of l)i?.dispose();Xt.photoHi=e}).catch(t=>console.warn("[cfig] резкая Земля не подгрузилась:",t))}function ja(){ie.on=!1,e0=!1,document.documentElement.classList.remove("earth-grab","earth-grabbing"),ga&&(ko.ticker.remove(t0),ga=0),xe&&(xe.style.opacity="0")}function Rn(){if($=f0(),Dt=null,document.body.dataset.route!==fa||!$){ja();return}if(!he){if(xe=sn(),!xe)return;oe=Math.min(innerWidth,innerHeight)<720||matchMedia("(pointer: coarse)").matches;try{he=new c0({canvas:xe,alpha:!0,antialias:!oe,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{he=null;return}he.setClearColor(0,0),he.sortObjects=!0,Ue=new To,J=new Co(35,1,.05,1e6),Yt=$==="ink"?ln(oe?an:Xo,oe):Wt(Kt.includes($)?oe?tn:Vo:oe?jo:Kt.includes($)?$o:ba),yo=yn().catch(e=>{console.warn("[cfig] Земля не поднялась:",e),ja()}),addEventListener("resize",()=>{ka(),jt=-1},{passive:!0}),new ResizeObserver(()=>{document.body.dataset.route===fa&&(ka(),jt=-1)}).observe(document.documentElement)}ka(),jt=-1,qa=-1,yo.then(()=>{Ee?.collect(),!ga&&document.body.dataset.route===fa&&(ko.ticker.add(t0),ga=1)})}document.addEventListener("astro:before-preparation",e=>{xe&&e.to&&new URL(e.to).pathname!==location.pathname&&ja()});export{Rn as init};
