import{T as Yo,a as Mo,N as ia,n as Ua,ar as Ot,L as sa,o as ht,aN as So,as as Ra,aO as Zo,G as Rt,V as xe,M as fe,c as Ta,b as ae,O as Ye,i as Le,j as ft,ae as Za,D as zt,a2 as tt,g as J,aP as Pa,B as Pe,e as N,aQ as Jo,S as _o,k as Qo,l as e0,f as Ge,p as t0,h as a0,A as o0,ag as Fo,d as Gt,K as Ca,aR as Da,a4 as ka,W as l0,P as Lo,aS as Vt}from"./three.module.BH5gECCB.js";import{P as It,e as n0}from"./Lab.astro_astro_type_script_index_0_lang.DMakdsNg.js";import{g as Ro,n as r0}from"./Base.astro_astro_type_script_index_0_lang.xIIUCufL.js";import{a as i0,L as s0,b as u0}from"./LineSegments2.DI2R0bZC.js";import"./router.UeToN5xW.js";const V=6371,$={lat:50.039378,lon:15.77521},Ue=3.75,Tt=Math.PI/180;function Ce(e,t,a=V,l=[0,0,0]){const r=e*Tt,i=t*Tt,c=Math.cos(r);return l[0]=a*c*Math.sin(i),l[1]=a*Math.sin(r),l[2]=a*c*Math.cos(i),l}function To(e,t){const a=e*Tt,l=t*Tt,r=Math.sin(a),i=Math.cos(a),c=Math.sin(l),h=Math.cos(l);return{e:[h,0,-c],u:[i*c,r,i*h],n:[-r*c,i,-r*h]}}function va(e,t){const a=e.length,l=new Float64Array(a-1),r=new Float64Array(a);for(let i=0;i<a-1;i++)l[i]=(t[i+1]-t[i])/(e[i+1]-e[i]);r[0]=l[0],r[a-1]=l[a-2];for(let i=1;i<a-1;i++)r[i]=l[i-1]*l[i]<=0?0:(l[i-1]+l[i])/2;for(let i=0;i<a-1;i++){if(l[i]===0){r[i]=0,r[i+1]=0;continue}const c=r[i]/l[i],h=r[i+1]/l[i],v=c*c+h*h;if(v>9){const m=3/Math.sqrt(v);r[i]=m*c*l[i],r[i+1]=m*h*l[i]}}return i=>{if(i<=e[0])return t[0];if(i>=e[a-1])return t[a-1];let c=0;for(;i>e[c+1];)c++;const h=e[c+1]-e[c],v=(i-e[c])/h,m=v*v,s=m*v;return(2*s-3*m+1)*t[c]+(s-2*m+v)*h*r[c]+(-2*s+3*m)*t[c+1]+(s-m)*h*r[c+1]}}function Et(e){const t=e.map(r=>r.t),a=Object.keys(e[0]).filter(r=>r!=="t"),l={};for(const r of a){const i=e.map(c=>r==="d"?Math.log(c[r]):c[r]);l[r]=va(t,i)}return(r,i)=>{for(const c of a)i[c]=c==="d"?Math.exp(l[c](r)):l[c](r);return i}}function Po(e,t,a,l,r,i,c,h){const v=To(e,t);Ce(e,t,V,h);const m=l*Tt,s=r*Tt,o=v.n[0]*Math.cos(s)+v.e[0]*Math.sin(s),n=v.n[1]*Math.cos(s)+v.e[1]*Math.sin(s),w=v.n[2]*Math.cos(s)+v.e[2]*Math.sin(s),b=Math.cos(m)*a,x=Math.sin(m)*a;i[0]=h[0]+v.u[0]*b-o*x,i[1]=h[1]+v.u[1]*b-n*x,i[2]=h[2]+v.u[2]*b-w*x,c[0]=o,c[1]=n,c[2]=w}const lt="/assets/earth/",Xt={lon0:-12,lon1:44,lat0:34,lat1:62},Yt={lon0:9.5,lon1:22.5,lat0:46.5,lat1:53.5},c0=new Yo;function f0(e,{srgb:t=!1,renderer:a=null}={}){return new Promise((l,r)=>{c0.load(lt+e,i=>{i.colorSpace=t?Mo:ia,i.wrapS=Ua,i.wrapT=Ot,i.minFilter=sa,i.magFilter=ht,a&&(i.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy())),l(i)},void 0,r)})}function Ja(e,{srgb:t=!1,red:a=!1,renderer:l=null}={}){const r=new So;return r.setOptions({imageOrientation:"flipY",premultiplyAlpha:"none"}),new Promise((i,c)=>{r.load(lt+e,h=>{const v=new Ra(h);v.colorSpace=t?Mo:ia,v.flipY=!1,a&&(v.format=Zo),v.wrapS=Ua,v.wrapT=Ot,v.minFilter=sa,v.magFilter=ht,l&&(v.anisotropy=Math.min(8,l.capabilities.getMaxAnisotropy())),v.needsUpdate=!0,i(v)},void 0,c)})}async function v0(e=.6){const t=await(await fetch(lt+"lines.bin")).arrayBuffer(),a=new DataView(t);let l=0;const r=a.getUint32(l,!0);l+=4;const i=[],c=[0,0,0];for(let h=0;h<r;h++){const v=a.getUint32(l,!0),m=a.getUint32(l+4,!0);l+=8;const s=new Uint32Array(v);for(let x=0;x<v;x++)s[x]=a.getUint32(l,!0),l+=4;const o=new Float32Array(m),n=new Float32Array(m);for(let x=0;x<m;x++)o[x]=a.getInt16(l,!0)/180,n[x]=a.getInt16(l+2,!0)/180,l+=4;const w=new Float32Array((m-v)*6);let b=0;for(let x=0;x<v;x++){const S=s[x],T=x+1<v?s[x+1]:m;for(let E=S;E<T-1;E++)Ce(n[E],o[E],V+e,c),w[b++]=c[0],w[b++]=c[1],w[b++]=c[2],Ce(n[E+1],o[E+1],V+e,c),w[b++]=c[0],w[b++]=c[1],w[b++]=c[2]}i.push(w.subarray(0,b))}return i}async function m0(e=512){const t=await(await fetch(lt+"pardubice.webp")).blob(),a=await createImageBitmap(t,{resizeWidth:e,resizeHeight:e,resizeQuality:"medium"}),l=document.createElement("canvas");l.width=e,l.height=e;const r=l.getContext("2d",{willReadFrequently:!0});r.drawImage(a,0,0);const i=r.getImageData(0,0,e,e).data,c=new Float32Array(e*e);for(let h=0;h<c.length;h++)c[h]=i[h*4+1]/255;return a.close?.(),c}async function d0(){const e=await(await fetch("/assets/map/pardubice-houses.bin")).arrayBuffer(),t=new DataView(e),a=t.getUint32(0,!0);let l=0,r=4;for(let n=0;n<a;n++){const w=t.getUint16(r,!0);l+=w,r+=6+w*4}const i=new Uint32Array(a),c=new Uint16Array(a),h=new Float32Array(a),v=new Float32Array(a),m=new Float32Array(l),s=new Float32Array(l);r=4;let o=0;for(let n=0;n<a;n++){const w=t.getUint16(r,!0);c[n]=w,h[n]=t.getUint8(r+3)/2,v[n]=t.getUint16(r+4,!0),r+=6,i[n]=o;for(let b=0;b<w;b++)m[o]=t.getUint16(r,!0)/65535,s[o]=t.getUint16(r+2,!0)/65535,r+=4,o++}return{n:a,start:i,cnt:c,h,area:v,u:m,v:s}}const Wa=`
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
`,Xe=3.75,Se={h:13,n:1024,lo:195,hi:365,far:{h:48,n:1024,lo:180,hi:1150},hor:{h:60,n:512,lo:180,hi:1610,cz:-50}},je=24,Ka=(()=>{try{return new URLSearchParams(location.search).get("fx")==="scan"?1:0}catch{return 0}})(),Co=`
#define FX ${Ka}
#define SCAN_P 8.0
#define SCAN_D 3.6
`,p0={INK1:"#111e2d",INK2:"#29455c",INK3:"#4d677d",BLUE:"#2A6DAA",BLUE2:"#3f9be0",PALE:"#5FA8E0",GOLD:"#8a5f10",PAPER:"#d3d9de"},h0=e=>{const t=parseInt(e.slice(1),16),a=l=>(l/255).toFixed(4);return`vec3(${a(t>>16)}, ${a(t>>8&255)}, ${a(t&255)})`},Pt=Object.entries(p0).map(([e,t])=>`#define C_${e} ${h0(t)}`).join(`
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
`,We={blending:ft,blendSrc:Le,blendDst:Ye,blendSrcAlpha:Le,blendDstAlpha:Ye},Do=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm2(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,qa=`
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
`,x0=e=>`
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
${Co}
#if FX == 1
varying float vZf;
#endif
#endif
${qa}
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
`,g0=e=>`
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
${Co}
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
${Do}
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
`,ko=()=>`
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
`,Qa=e=>`
#define ${e}
uniform float uRelief;
uniform float uCity;
uniform float uPre;
varying vec2 vP;
varying float vElev;
varying float vDepth;
#ifdef P_INK
${ko()}
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
`,zo=`
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
`,eo=`
${zo}
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
`,to=e=>`
${Pt}
${zo}
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
`,w0=`
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
`,y0=e=>`
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
${e==="P_INK"?ko():""}
${Do}
${Wa}
${e==="P_INK"?w0:""}

void main() {
  vec2 p = vP;
  float rr = length(p);
  float fade = 1.0 - smoothstep(9.0, 15.0, rr);
#ifdef P_INK
  // Земля ink — до горизонта (дальний рельеф ±FAR_H км).
  fade = 1.0 - smoothstep(0.8, 0.97, max(abs(p.x), abs(p.y)) / FAR_H);
#endif
  vec2 muv = p / ${(Xe*2).toFixed(1)} + 0.5;
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
`,A0=e=>`
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
${qa}
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
`,b0=e=>`
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
`,ua=24,M0=`
varying vec2 vPx;
uniform vec2 uRes;
void main() { vPx = (position.xy * 0.5 + 0.5) * uRes; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,S0=`
uniform vec4 uRects[${ua}];
uniform int uN;
uniform float uFeather;
uniform float uStrength;
uniform vec2 uRes;
varying vec2 vPx;
void main() {
  float a = 0.0;
  for (int i = 0; i < ${ua}; i++) {
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
`;function _0(){const e=new Pe;return e.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}async function F0(){const e=await(await fetch(lt+"streets.bin")).arrayBuffer(),t=new DataView(e);let a=0;const l=t.getUint32(a,!0);a+=4;const r=[];for(let i=0;i<l;i++){const c=t.getUint32(a,!0),h=t.getUint32(a+4,!0);a+=8;const v=[];for(let o=0;o<c;o++)v.push(t.getUint32(a,!0)),a+=4;const m=new Float32Array(h*2);for(let o=0;o<h;o++)m[o*2]=(t.getInt16(a,!0)/16384-.5)*Xe*2,m[o*2+1]=(t.getInt16(a+2,!0)/16384-.5)*Xe*2,a+=4;const s=[];for(let o=0;o<c;o++){const n=v[o],w=o+1<c?v[o+1]:h,b=[];for(let x=n;x<w;x++)b.push([m[x*2],m[x*2+1]]);s.push(b)}r.push(s)}return r}async function L0(e){const t=await(await fetch(lt+"lines.bin")).arrayBuffer(),a=new DataView(t);let l=0;const r=a.getUint32(l,!0);l+=4;const i=[];for(let c=0;c<r;c++){const h=a.getUint32(l,!0),v=a.getUint32(l+4,!0);l+=8;const m=[];for(let n=0;n<h;n++)m.push(a.getUint32(l,!0)),l+=4;const s=new Float32Array(v*2);for(let n=0;n<v;n++)s[n*2]=a.getInt16(l,!0)/180,s[n*2+1]=a.getInt16(l+2,!0)/180,l+=4;const o=[];for(let n=0;n<h;n++){const w=m[n],b=n+1<h?m[n+1]:v,x=[];for(let S=w;S<b;S++)x.push([s[S*2],s[S*2+1]]);o.push(Eo(x,c===2?e*.2:e))}i.push(o)}return i}async function R0(e){const t=await(await fetch(lt+"region.bin")).arrayBuffer(),a=new DataView(t);let l=0;const r=a.getUint32(l,!0);l+=4;const i=[];for(let c=0;c<r;c++){const h=a.getUint32(l,!0),v=a.getUint32(l+4,!0);l+=8;const m=[];for(let n=0;n<h;n++)m.push(a.getUint32(l,!0)),l+=4;const s=[];for(let n=0;n<v;n++)s.push([a.getInt16(l,!0)/180,a.getInt16(l+2,!0)/180]),l+=4;const o=[];for(let n=0;n<h;n++)o.push(Eo(s.slice(m[n],n+1<h?m[n+1]:v),e));i.push(o)}return i}function Eo(e,t){if(e.length<3)return e;const a=new Uint8Array(e.length);a[0]=a[e.length-1]=1;const l=[[0,e.length-1]];for(;l.length;){const[r,i]=l.pop();let c=0,h=-1;const[v,m]=e[r],[s,o]=e[i],n=s-v,w=o-m,b=Math.hypot(n,w)||1e-9;for(let x=r+1;x<i;x++){const S=Math.abs((e[x][0]-v)*w-(e[x][1]-m)*n)/b;S>c&&(c=S,h=x)}c>t&&(a[h]=1,l.push([r,h],[h,i]))}return e.filter((r,i)=>a[i])}const T0=`
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
${qa}
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
`,P0=e=>`
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
`,C0=`
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
`,D0=`
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
${Wa}
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
`;function k0(e,t){const a=t?400:150,l=1.6/1e3;let r=0;for(let o=0;o<e.n;o++)e.area[o]>=a&&(r+=e.cnt[o]);const i=new Float32Array(r*4*4),c=new Float32Array(r*4*2),h=new Float32Array(r*4*2),v=new Float32Array(r*4*3);let m=0;for(let o=0;o<e.n;o++){if(e.area[o]<a)continue;const n=e.start[o],w=e.cnt[o],b=y=>(e.u[n+y]-.5)*Xe*2,x=y=>(e.v[n+y]-.5)*Xe*2;let S=0,T=0;for(let y=0;y<w;y++)S+=b(y),T+=x(y);S/=w,T/=w;const E=Math.max(3,e.h[o])*l,B=Math.hypot(S/Xe,T/Xe)/2,j=Math.min(1,B*2)*.8+o*7919%97/97*.2,k=Math.sqrt(e.area[o])/1e3;for(let y=0;y<w;y++){const O=(y+1)%w,G=b(y),P=x(y),I=b(O),R=x(O);let f=-(R-P),d=I-G;const p=Math.hypot(f,d)||1;f/=p,d/=p,f*((G+I)/2-S)+d*((P+R)/2-T)<0&&(f=-f,d=-d);for(let F=0;F<4;F++){const u=m*4+F;i.set([G,P,I,R],u*4),c.set([F&1,F>>1],u*2),h.set([f,d],u*2),v.set([E,j,k],u*3)}m++}}const s=new Pe;return s.setAttribute("position",new N(new Float32Array(r*4*3),3)),s.setAttribute("aE",new N(i,4)),s.setAttribute("aC",new N(c,2)),s.setAttribute("aN",new N(h,2)),s.setAttribute("aHD",new N(v,3)),s.setIndex(da(r)),s}function z0(e,t){const a=t?300:80,l=1.6/1e3;let r=0;for(let n=0;n<e.n;n++)e.area[n]<a||(r+=e.cnt[n]*(e.area[n]>=300||e.h[n]>=11?2:1));const i=new Float32Array(r*4*4),c=new Float32Array(r*4*2),h=new Float32Array(r*4*4),v=new Float32Array(r*4);let m=0;const s=(n,w,b,x,S,T,E,B,j)=>{for(let k=0;k<4;k++){const y=m*4+k;i.set([n,w,b,x],y*4),c.set([S,T],y*2),h.set([k>>1,k&1?1:-1,E,B],y*4),v[y]=j}m++};for(let n=0;n<e.n;n++){if(e.area[n]<a)continue;const w=e.start[n],b=e.cnt[n],x=Math.max(3,e.h[n])*l;let S=0,T=0;for(let y=0;y<b;y++)S+=e.u[w+y],T+=e.v[w+y];S=(S/b-.5)*2,T=(T/b-.5)*2;const E=Math.min(1,Math.hypot(S,T))*.8+n*7919%97/97*.2,B=Math.sqrt(e.area[n])/1e3,j=y=>(e.u[w+y]-.5)*Xe*2,k=y=>(e.v[w+y]-.5)*Xe*2;for(let y=0;y<b;y++){const O=(y+1)%b;s(j(y),k(y),j(O),k(O),1,1,x,E,B)}if(e.area[n]>=300||e.h[n]>=11)for(let y=0;y<b;y++)s(j(y),k(y),j(y),k(y),0,1,x,E,B)}const o=new Pe;return o.setAttribute("position",new N(new Float32Array(r*4*3),3)),o.setAttribute("aP",new N(i,4)),o.setAttribute("aY",new N(c,2)),o.setAttribute("aI",new N(h,4)),o.setAttribute("aSz",new N(v,1)),o.setIndex(da(r)),o}function da(e){const t=new Uint32Array(e*6);for(let a=0;a<e;a++){const l=a*4;t.set([l,l+1,l+2,l+2,l+1,l+3],a*6)}return new N(t,1)}function E0(e,t){const{S:a,M:l}=t,r=[0,1,2,3,5],i=5.6,c=[];let h=0;for(const f of r)for(const d of e[f]){let p=[];for(const F of d)Math.hypot(F[0],F[1])<=i?p.push(F):(p.length>1&&c.push({l:f,pts:p}),p=[]);p.length>1&&c.push({l:f,pts:p})}for(const f of c){let d=0;for(let p=1;p<f.pts.length;p++)d+=Math.hypot(f.pts[p][0]-f.pts[p-1][0],f.pts[p][1]-f.pts[p-1][1]);f.len=d,h+=d}const v=Math.max(.2,h/5200),m=[],s=(f,d)=>{let p=0;for(let F=1;F<f.pts.length;F++){const u=f.pts[F-1],L=f.pts[F],_=Math.hypot(L[0]-u[0],L[1]-u[1]);if(p+_>=d||F===f.pts.length-1){const z=_>0?Math.min(1,(d-p)/_):0;return[u[0]+(L[0]-u[0])*z,u[1]+(L[1]-u[1])*z]}p+=_}return f.pts[f.pts.length-1]};for(const f of c){if(f.len<.03)continue;const d=Math.max(1,Math.round(f.len/v));for(let p=0;p<d;p++){const F=f.len*p/d,u=f.len*(p+1)/d,L=[];for(let C=0;C<l;C++)L.push(s(f,F+(u-F)*C/(l-1)));L[l-1][0]<L[0][0]&&L.reverse();let _=0,z=0;for(const C of L)_+=C[0],z+=C[1];m.push({l:f.l,pts:L,cx:_/l,cz:z/l})}}const o=je/(2*i),n=je/a,w=f=>{const d=Math.sin(f*12.9898)*43758.5453;return d-Math.floor(d)};for(const f of m){const d=Math.min(a-1,Math.max(0,Math.round((f.cz*o+je/2)/n-.5)));f.zl=-je/2+(d+.5)*n;let p=1/0,F=-1/0;for(const _ of f.pts)p=Math.min(p,_[0]),F=Math.max(F,_[0]);const u=(p+F)/2*o,L=Math.max(.06,(F-p)/2*o);f.x0=u-L,f.x1=u+L,f.seed=w(d)}const b=new Set;if(t.look==="lines"){const f=new Map;for(const d of m)f.has(d.zl)||f.set(d.zl,[]),f.get(d.zl).push(d);for(const[d,p]of f){b.add(d),p.sort((u,L)=>u.x0+u.x1-(L.x0+L.x1));const F=p.map(u=>(u.x0+u.x1)/2);p.forEach((u,L)=>{u.x0=L===0?-je/2:(F[L-1]+F[L])/2,u.x1=L===p.length-1?je/2:(F[L]+F[L+1])/2,u.pts[0][0]>u.pts[u.pts.length-1][0]&&(u.pts=u.pts.slice().reverse())}),p.forEach((u,L)=>{const _=u.pts[0],z=u.pts[u.pts.length-1],C=p[L-1],ue=p[L+1],_e=C?[(C.pts[C.pts.length-1][0]+_[0])/2,(C.pts[C.pts.length-1][1]+_[1])/2]:_,Ne=ue?[(ue.pts[0][0]+z[0])/2,(ue.pts[0][1]+z[1])/2]:z;u.jd=[_e[0],_e[1],Ne[0],Ne[1]]})}}const x=96;for(let f=0;f<a;f++){const d=-je/2+(f+.5)*n,p=[];for(let F=0;F<x;F++)p.push([0,0]);m.push({l:b.has(d)?10:9,pts:p,cx:0,cz:0,x0:-je/2,x1:je/2,zl:d,seed:w(f),field:!0})}const S=m.length,T=m.reduce((f,d)=>f+d.pts.length-1,0),E=new Float32Array(T*4*4),B=new Float32Array(T*4*4),j=new Float32Array(T*4*2),k=new Float32Array(T*4*4),y=new Float32Array(T*4*4);let O=0;const G=new Set,P=(f,d)=>Math.round(f/.05)+","+Math.round(d/.05);for(const f of t.first||[])for(let d=1;d<f.pts.length;d++){const[p,F]=f.pts[d-1],[u,L]=f.pts[d];if(Math.max(Math.abs(p),Math.abs(F),Math.abs(u),Math.abs(L))>6)continue;const _=Math.ceil(Math.hypot(u-p,L-F)/.025);for(let z=0;z<=_;z++){const C=p+(u-p)*z/_,ue=F+(L-F)*z/_;for(let _e=-1;_e<=1;_e++)for(let Ne=-1;Ne<=1;Ne++)G.add(P(C+_e*.05,ue+Ne*.05))}}const I=f=>{if(!G.size||f.field)return!1;let d=0;for(const p of f.pts)G.has(P(p[0],p[1]))&&d++;return d>=f.pts.length*.6};for(const f of m){let d=Math.min(1,Math.hypot(f.cx,f.cz)/5.5);I(f)&&(d*=.3);const p=f.pts.length;for(let F=0;F<p-1;F++){const u=f.pts[F],L=f.pts[F+1];for(let _=0;_<4;_++){const z=O*4+_;E.set([u[0],u[1],L[0],L[1]],z*4),B.set([f.x0,f.x1,f.zl,d],z*4),j.set([F/(p-1),(F+1)/(p-1)],z*2),k.set([_>>1,_&1?1:-1,f.l,f.seed],z*4),f.jd&&y.set(f.jd,z*4)}O++}}const R=new Pe;return R.setAttribute("position",new N(new Float32Array(T*4*3),3)),R.setAttribute("aT",new N(E,4)),R.setAttribute("aSU",new N(B,4)),R.setAttribute("aUU",new N(j,2)),R.setAttribute("aInfo",new N(k,4)),R.setAttribute("aJD",new N(y,4)),R.setIndex(da(T)),{geometry:R,K:S,gap:n}}function I0(e,t,a,l){const r=e.map((x,S)=>x.map(T=>({kind:S,pts:T}))),i=[].concat(...r);a&&a.forEach((x,S)=>x.forEach(T=>i.push({kind:5+S,pts:T})));const c=l?Ce(l.lat,l.lon,1):[0,0,1];if(t==="lines"){for(let x=-80;x<=80;x+=10){const S=[];for(let T=-180;T<=180;T+=3)S.push([T,x]);i.push({kind:4,pts:S})}for(let x=-180;x<180;x+=15){const S=[];for(let T=-84;T<=84;T+=3)S.push([x,T]);i.push({kind:4,pts:S})}}let h=0;for(const x of i)h+=Math.max(0,x.pts.length-1);const v=new Float32Array(h*4*3),m=new Float32Array(h*4*3),s=new Float32Array(h*4*4),o=[0,0,0],n=[0,0,0];let w=0;for(const x of i){const S=x.pts.length;if(S<2)continue;const T=x.kind===2?1.2:.6;for(let E=0;E<S-1;E++){Ce(x.pts[E][1],x.pts[E][0],V+T,o),Ce(x.pts[E+1][1],x.pts[E+1][0],V+T,n);for(let B=0;B<4;B++){const j=w*4+B;v.set(o,j*3),m.set(n,j*3);let k=(E+(B>>1))/(S-1);if(x.kind>=5){const y=B>>1?n:o,O=Math.hypot(y[0],y[1],y[2]);k=Math.acos(Math.min(1,(y[0]*c[0]+y[1]*c[1]+y[2]*c[2])/O))*V/1e3}s.set([B>>1,B&1?1:-1,x.kind,k],j*4)}w++}}const b=new Pe;return b.setAttribute("position",new N(v,3)),b.setAttribute("aA",new N(v,3)),b.setAttribute("aB",new N(m,3)),b.setAttribute("aInfo",new N(s,4)),b.setIndex(da(h)),b}const H0={lines:"P_LINES",ink:"P_INK"};async function N0(e,t,a){const l=H0[e],r=a.lite,[i,c,h]=await Promise.all([F0(),L0(r?.08:.04),R0(.01)]),v=new Rt,m=new Rt,s=new xe(1,1),o={uTime:{value:0},uAsm:{value:0},uWave:{value:1},uFocal:{value:1e3},uFar:{value:30},uDpr:{value:1},uBg:{value:0},uAlpha:{value:1},uRes:{value:s},uFlat:{value:0},uFT:{value:0},uPaint:{value:0},uHoldA:{value:0},uBake:{value:0},uGround:{value:1},uTint:{value:0}},n=E0(i,{S:r?110:200,M:r?12:16,look:e,first:e==="ink"?a.routes:null}),w=M=>new ae({vertexShader:x0(M),fragmentShader:g0(M),uniforms:{...o,uGap:{value:n.gap},uPass:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1,side:zt,...We}),b=w(e==="ink"?"P_INK":l),x=new fe(n.geometry,b);x.name="strands",x.frustumCulled=!1,x.renderOrder=2,v.add(x);let S=null,T=null;if(e==="ink"){const M=w(`P_INK
#define INK_FG`);M.uniforms={...b.uniforms,uPass:{value:0}},S=new fe(n.geometry,M),S.frustumCulled=!1,S.renderOrder=3,v.add(S);const Y=w(`P_INK
#define INK_FG`);Y.uniforms={...b.uniforms,uPass:{value:1}},T=new fe(n.geometry,Y),T.frustumCulled=!1,T.renderOrder=3,v.add(T)}const E=e==="ink",B=E?r?300:480:1,j=new Ta(E?96:32,E?96:32,B,B);j.rotateX(-Math.PI/2);const k=new ae({vertexShader:Qa(l),fragmentShader:y0(l),uniforms:{uMap:{value:t},uTime:o.uTime,uBg:{value:0},uCity:{value:0},uAlpha:{value:1},uHoldA:o.uHoldA,uBake:o.uBake,uGround:o.uGround,uTint:o.uTint,uHatch:{value:0},uRelief:{value:1},uPre:{value:0},uNN:{value:a.land?.neonN||null},uNF:{value:a.land?.neonF||null},uNeonT:{value:0},uNeonP:{value:0},uDem:{value:a.land?.dem||null},uDemF:{value:a.land?.far||null},uLA:{value:a.land?.a||null},uLB:{value:a.land?.b||null}},transparent:!0,depthWrite:!1,depthTest:E,depthFunc:Za,...We}),y=new fe(j,k);let O=null;if(E){const M=new ae({vertexShader:Qa(l),fragmentShader:"void main() { gl_FragColor = vec4(0.0); }",uniforms:k.uniforms,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});O=new fe(j,M),O.name="washDepth",O.position.y=-.003,O.frustumCulled=!1,O.renderOrder=.9,v.add(O)}let G=null,P=null;if(E&&a.land?.hor){const M=new Ta(Se.hor.h*2,Se.hor.h*2,a.lite?200:320,a.lite?200:320);M.rotateX(-Math.PI/2),M.translate(0,0,Se.hor.cz);const Y={uHor:{value:a.land.hor},uHEx:{value:3.4},uCurv:{value:1},uPre:k.uniforms.uPre,uAlpha:k.uniforms.uAlpha,uBg:k.uniforms.uBg},ce=new ae({vertexShader:eo,fragmentShader:to(!0),uniforms:Y,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});P=new ae({vertexShader:eo,fragmentShader:to(!1),uniforms:Y,transparent:!0,depthWrite:!1,depthTest:!0,depthFunc:Za,...We});const de=new fe(M,ce);de.name="horDepth",de.frustumCulled=!1,de.renderOrder=.88,de.position.y=-.003,G=new fe(M,P),G.name="horizon",G.frustumCulled=!1,G.renderOrder=.95,G.position.y=-.003,G.userData.depth=de,v.add(de,G)}y.name="wash",y.position.y=-.003,y.frustumCulled=!1,y.renderOrder=1,v.add(y);let I=null,R=null;a.houses&&(R=new ae({vertexShader:T0,fragmentShader:P0(l),uniforms:{uGrow:{value:0},uFocal:o.uFocal,uFar:o.uFar,uDpr:o.uDpr,uRes:{value:s},uAlpha:{value:1},uHoldA:o.uHoldA,uBake:o.uBake,uGround:o.uGround,uTint:o.uTint,uHW:{value:.5}},transparent:!0,depthWrite:!1,depthTest:!1,side:zt,...We}),I=new fe(z0(a.houses,r),R),I.name="houses2",I.frustumCulled=!1,I.renderOrder=3,v.add(I));let f=null,d=null;e==="ink"&&a.houses&&(d=new ae({vertexShader:C0,fragmentShader:D0,uniforms:{uGrow:R.uniforms.uGrow,uFocal:o.uFocal,uFar:o.uFar,uDpr:o.uDpr,uAlpha:R.uniforms.uAlpha,uHatch:{value:0},uHoldA:o.uHoldA,uBake:o.uBake,uGround:o.uGround,uTint:o.uTint},transparent:!0,depthWrite:!1,depthTest:!1,side:zt,...We}),f=new fe(k0(a.houses,r),d),f.name="walls",f.frustumCulled=!1,f.renderOrder=2,v.add(f));const p=I0(c,e,h,a.pdb),F={lines:[.7,.6,2.2,.55,.45],ink:[.65,.55,2.2,.5,0]}[e],u={uCam:{value:new J},uR:{value:V},uDpr:o.uDpr,uTime:o.uTime,uFadeKm:{value:100},uRes:{value:s},uW:{value:new tt(F[0],F[1],F[2],F[3])},uWG:{value:F[4]},uAl:{value:new tt},uAG:{value:0},uDraw:{value:new tt(1,1,1,1)},uW2:{value:new xe(.5,.65)},uAl2:{value:new xe},uReach:{value:0}},L=new ae({vertexShader:A0(l),fragmentShader:b0(l),uniforms:u,transparent:!0,depthWrite:!1,depthTest:!1,side:zt,...We}),_=new fe(p,L);_.name="sphere",_.frustumCulled=!1,_.renderOrder=-10,m.add(_);const z=Array.from({length:ua},()=>new tt),C=new ae({vertexShader:M0,fragmentShader:S0,uniforms:{uRects:{value:z},uN:{value:0},uFeather:{value:90},uStrength:{value:.85},uRes:{value:s}},transparent:!0,depthWrite:!1,depthTest:!1,blending:ft,blendSrc:Pa,blendDst:Ye,blendSrcAlpha:Pa,blendDstAlpha:Ye});e==="lines"&&Ka===1&&(b.uniforms.uRects=C.uniforms.uRects,b.uniforms.uN=C.uniforms.uN),E&&(k.uniforms.uRects=C.uniforms.uRects,k.uniforms.uN=C.uniforms.uN);const ue=new fe(_0(),C);ue.frustumCulled=!1,ue.renderOrder=95;let _e=[];const Ne="main :is(h2, h3, p, blockquote, .arrow-link, .coverflow__item, .leader__name, .direction__head)";function Ke(){_e=Array.from(document.querySelectorAll(Ne))}return Ke(),{cityGroup:v,sphereGroup:m,veil:ue,collect:Ke,textRects:{rects:C.uniforms.uRects,n:C.uniforms.uN},update(M){o.uTime.value=M.time,o.uAsm.value=M.asm,o.uWave.value=M.wave,o.uFocal.value=M.focal,o.uFar.value=M.far,o.uDpr.value=M.dpr,o.uBg.value=M.bg,o.uAlpha.value=M.alpha,o.uFlat.value=M.flat||0,o.uFT.value=M.ft??M.time,o.uHoldA.value=M.holdA||0,o.uBake.value=M.bake||0,o.uGround.value=M.ground??1,o.uTint.value=M.tint||0,I&&(R.uniforms.uGrow.value=M.grow||0,R.uniforms.uAlpha.value=M.alpha,I.visible=Math.max(M.alpha,M.holdA||0)>.002&&(M.grow||0)>.001),f&&(d.uniforms.uHatch.value=M.hatch||0,f.visible=I.visible&&(M.hatch||0)>.001),s.set(M.w,M.h),x.visible=Math.max(M.alpha,M.holdA||0)>.002,S&&(S.visible=T.visible=x.visible&&M.asm>.001),o.uPaint.value=M.paint||0,k.uniforms.uHatch.value=M.hatch||0,k.uniforms.uBg.value=M.bg,k.uniforms.uCity.value=M.city,k.uniforms.uPre.value=M.pre||0,k.uniforms.uNeonT.value=M.neonT||0,k.uniforms.uNeonP.value=M.neonP||0,G&&(G.visible=G.userData.depth.visible=y.visible&&(M.pre||0)>.001),k.uniforms.uAlpha.value=M.alpha,y.visible=Math.max(M.alpha,M.holdA||0)>.002&&M.bg+M.city>.002,O&&(O.visible=y.visible&&M.alpha>.5),u.uCam.value.copy(M.cam),u.uFadeKm.value=M.fadeKm,u.uAl.value.set(M.sphere.al[0],M.sphere.al[1],M.sphere.al[2],M.sphere.al[3]),u.uAG.value=M.sphere.ag,u.uDraw.value.set(M.sphere.draw[0],M.sphere.draw[1],M.sphere.draw[2],M.sphere.draw[3]),u.uAl2.value.set(M.sphere.reg?.[0]||0,M.sphere.reg?.[1]||0),u.uReach.value=M.sphere.reach||0,_.visible=M.sphere.al[0]+M.sphere.al[1]+M.sphere.al[2]+M.sphere.al[3]+M.sphere.ag+u.uAl2.value.x+u.uAl2.value.y>.002;let Y=0;const ce=M.w/M.cssW,de=M.h/M.cssH,De=18;for(let ke=0;ke<_e.length&&Y<ua;ke++){const ge=_e[ke];if(ge.style.visibility==="hidden"||(ge.classList.contains("coverflow__item")?parseFloat(ge.style.getPropertyValue("--op")):1)<.35)continue;const W=ge.getBoundingClientRect();W.width<2||W.bottom<-40||W.top>M.cssH+40||W.right<0||W.left>M.cssW||W.width*W.height>M.cssW*M.cssH*.5||(z[Y].set((W.left-De)*ce,(M.cssH-W.bottom-De)*de,(W.right+De)*ce,(M.cssH-W.top+De)*de),Y++)}C.uniforms.uN.value=Y,C.uniforms.uFeather.value=110*M.dpr,C.uniforms.uStrength.value=M.veil,ue.visible=Y>0&&M.veil>.002}}}const O0=()=>new URLSearchParams(location.search).get("neon")!=="0",ya=18;`${ya}${ya}${(V*1.006).toFixed(1)}${ya}`;const G0=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 6; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,ao=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,B0=`
precision highp float;
uniform vec2 uRes;
uniform float uTime, uAmount, uDark;
uniform vec2 uHole;      // середина окна (центр Пардубиц на экране), пиксели
uniform float uHoleR;    // радиус окна, пиксели

${G0}
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
`,Ct=.35,U0=`
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
`;function W0(){const e=new Pe;e.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const t=new ae({vertexShader:ao,fragmentShader:B0,uniforms:{uRes:{value:new xe(1,1)},uTime:{value:0},uAmount:{value:0},uHole:{value:new xe},uHoleR:{value:1},uDark:{value:0}},depthWrite:!1,depthTest:!1,blending:Jo}),a=new fe(e,t);a.frustumCulled=!1;const l=new _o;l.add(a);const r=new Qo,i=new e0(1,1,{depthBuffer:!1,minFilter:ht,magFilter:ht}),c=new ae({vertexShader:ao,fragmentShader:U0,uniforms:{tClouds:{value:i.texture},uRes:{value:new xe(1,1)},uTime:{value:0},uErode:{value:0},uDim:{value:0},uDimCol:{value:new Ge("#071b34")},uFly:{value:0},uNeon:{value:0},uCell:{value:5},uMapR:{value:100},uTextL:{value:1},uTop:{value:1e6},uTopF:{value:1},uMap:{value:new xe},uNeonCol:{value:new Ge("#78d0e6")}},transparent:!0,depthWrite:!1,depthTest:!1,...We}),h=new fe(e,c);h.frustumCulled=!1,h.renderOrder=90,h.name="clouds";const v=t.uniforms,m=new Ge;let s=!1;return{mesh:h,update(o){if(s=o.amount>.002&&!o.done,h.visible=s,!s)return;const n=c.uniforms;n.uTime.value=o.time,n.uErode.value=o.erode||0,n.uDim.value=o.dim||0,n.uFly.value=o.fly||0,n.uNeon.value=o.neon||0,n.uMapR.value=o.r,n.uTextL.value=o.textL??1,n.uTop.value=o.top??1e6,n.uTopF.value=Math.max(1,o.topF??1),n.uMap.value.set(o.hx,o.hy),n.uCell.value=Math.max(5,4.5*(o.px||1));const w=Math.max(1,Math.round(o.w*Ct)),b=Math.max(1,Math.round(o.h*Ct));(i.width!==w||i.height!==b)&&i.setSize(w,b),v.uAmount.value=o.amount,v.uDark.value=o.dark||0,v.uTime.value=o.time,v.uRes.value.set(w,b),v.uHole.value.set(o.hx*Ct,o.hy*Ct),v.uHoleR.value=o.r*Ct,c.uniforms.uRes.value.set(o.w,o.h)},prerender(o){if(!s)return;const n=o.getRenderTarget(),w=o.getClearAlpha();o.getClearColor(m),o.setRenderTarget(i),o.setClearColor(0,0),o.clear(!0,!1,!1),o.render(l,r),o.setRenderTarget(n),o.setClearColor(m,w)}}}const oo=35,K0=.35,q0=.6,j0='a, button, input, textarea, select, label, img, video, picture, svg, header, nav, [role="button"], [contenteditable], .leader__photo, .pillar__photo',$0="h1, h2, h3, h4, h5, p, blockquote, li, figcaption, dt, dd",te={lon:0,lat:0,on:!1,dragging:!1,dirty:!1};new t0;new xe;new a0(new J,V);new J;const Aa=typeof document<"u"?document.createRange():null;let Dt=0,kt=0;function V0(e,t){const a=document.elementFromPoint(e,t);if(!a||a.closest(j0))return!0;const l=a.closest($0);if(l&&Aa){Aa.selectNodeContents(l);for(const r of Aa.getClientRects())if(e>=r.left-6&&e<=r.right+6&&t>=r.top-4&&t<=r.bottom+4)return!0}return!1}function X0(e,t){return te.on,!1}const Y0=(e,t)=>({globe:X0(),content:V0(e,t),el:document.elementFromPoint(e,t)?.className||""});function lo(e){const t=document.documentElement;t.classList.toggle("earth-grab",e==="grab"),t.classList.toggle("earth-grabbing",e==="grabbing")}function Z0(e,t,a){if(te.on=t,te.dirty=!1,!t&&te.dragging&&(te.dragging=!1),!te.dragging){const l=Math.exp(-e/q0);te.lon*=l,te.lat*=l,Dt=kt=0,Math.abs(te.lon)<.001&&(te.lon=0),Math.abs(te.lat)<.001&&(te.lat=0),(te.lon||te.lat)&&(te.dirty=!0),document.documentElement.classList.contains("earth-grab")&&lo(null);return}if(!t&&document.documentElement.classList.contains("earth-grab")&&lo(null),!te.dragging)if(Math.abs(Dt)+Math.abs(kt)>.05){te.lon+=Dt*e,te.lat=Math.max(-oo,Math.min(oo,te.lat+kt*e));const l=Math.exp(-e/K0);Dt*=l,kt*=l,te.dirty=!0}else Dt=kt=0}const J0=Math.PI,Q0={tech:"#78d0e6",city:"#86a9cf",mapInk:"#7d9dc0",house:"#8fb0d2",mark:"#e2b04a",grid:"#3fd0e0"},el={tech:"#29455c",city:"#253f57",mapInk:"#132a40",house:"#253f57",mark:"#8a5f10",grid:"#4d677d"},tl=`
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
`,al=`
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
${tl}

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
`,ol=`
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
`,ll=`
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
`,nl=`
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
`,rl=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,il=`
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
`,sl=`
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
`,ul=`
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
`,cl=`
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
`,fl=`
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
`,za=new Fo(new Uint8Array(4),1,1);za.needsUpdate=!0;function no(e,t,a){const l=new Rt,{side:r,field:i,lite:c,light:h}=a,v=h?{LIGHT:1}:{},m=h?{blending:ft,blendSrc:Le,blendDst:Ye,blendSrcAlpha:Le,blendDstAlpha:Ye}:a.glow?{blending:ft,blendSrc:Le,blendDst:Le,blendSrcAlpha:Pa,blendDstAlpha:Le}:{blending:o0},s=h?el:Q0,o=A=>h?new Ge().setStyle(s[A],Da):new Ge(s[A]),n=r*r,w=new Float32Array(n*2),b=i/r;for(let A=0;A<r;A++)for(let D=0;D<r;D++){const X=A*r+D;w[X*2]=(D+.5)*b-i/2,w[X*2+1]=(A+.5)*b-i/2}const x=e.lumaSize,S=new Float64Array(x*x);let T=0;for(let A=0;A<x*x;A++){const D=e.luma[A];T+=D>.05?D*D+.02:.003,S[A]=T}let E=1234567;const B=()=>(E=E*16807%2147483647)/2147483647,j=new Float32Array(n*2),k=new Float32Array(n);for(let A=0;A<n;A++){const D=B()*T;let X=0,Ie=x*x-1;for(;X<Ie;){const Je=X+Ie>>1;S[Je]<D?X=Je+1:Ie=Je}const Fe=X%x,Ze=X/x|0,ga=(Fe+B())/x,wa=(Ze+B())/x;j[A*2]=(ga-.5)*Ue*2,j[A*2+1]=(wa-.5)*Ue*2,k[A]=e.luma[X]}const y=A=>{const D=Array.from({length:n},(X,Ie)=>Ie);D.sort((X,Ie)=>A[X*2]-A[Ie*2]);for(let X=0;X<r;X++){const Ie=D.slice(X*r,(X+1)*r).sort((Fe,Ze)=>A[Fe*2+1]-A[Ze*2+1]);for(let Fe=0;Fe<r;Fe++)D[X*r+Fe]=Ie[Fe]}return D},O=y(w),G=y(j),P=new Float32Array(n*2),I=new Float32Array(n*2),R=new Float32Array(n);for(let A=0;A<n;A++){const D=O[A],X=G[A];P[D*2]=w[D*2],P[D*2+1]=w[D*2+1],I[D*2]=j[X*2],I[D*2+1]=j[X*2+1],R[D]=k[X]}const f=new Pe;f.setAttribute("position",new N(new Float32Array(n*3),3)),f.setAttribute("aGrid",new N(P,2)),f.setAttribute("aMap",new N(I,2)),f.setAttribute("aLum",new N(R,1));const d=new ae({vertexShader:al,fragmentShader:ol,uniforms:{uTime:{value:0},uAsm:{value:0},uWave:{value:1},uSize:{value:c?.05:.036},uFocal:{value:1e3},uFar:{value:30},uStep:{value:b},uTechCol:{value:o("tech")},uMapCol:{value:o("city")},uAlpha:{value:1},uScr:{value:0},uDust:{value:0},uFly:{value:0},uCloudA:{value:1},uDustL:{value:1},uRes:{value:new xe(1,1)},tCloud:{value:za},uDrift:{value:new xe},uNeon:{value:0}},defines:a.glow?{...v,GLOW:1}:v,transparent:!0,depthWrite:!1,depthTest:!0,...a.glow?{blending:ft,blendSrc:Le,blendDst:Le,blendSrcAlpha:Le,blendDstAlpha:Le}:m}),p=new Gt(f,d);p.name="points",p.frustumCulled=!1,p.renderOrder=2;const F=new Ta(Ue*2,Ue*2);F.rotateX(-J0/2);const u=new ae({vertexShader:rl,fragmentShader:il,uniforms:{uMap:{value:t},uInk:{value:o("mapInk")},uBase:{value:new Ge("#0a1626")},uAlpha:{value:0}},defines:v,transparent:!0,depthWrite:!1,...h?m:{}}),L=new fe(F,u);L.name="map",L.position.y=-.002,L.renderOrder=0,L.frustumCulled=!1;const _=e.houses,z=1.6/1e3;let C=0;for(let A=0;A<_.n;A++)c&&_.area[A]<400||(C+=_.cnt[A]*(_.h[A]>=11?2:1));const ue=new Float32Array(C*6),_e=new Float32Array(C*2),Ne=new Float32Array(C*2),Ke=new Float32Array(C*2),M=new Float32Array(C*2);let Y=0;for(let A=0;A<_.n;A++){if(c&&_.area[A]<400)continue;const D=_.start[A],X=_.cnt[A],Ie=Math.max(3,_.h[A])*z;let Fe=0,Ze=0;for(let pe=0;pe<X;pe++)Fe+=_.u[D+pe],Ze+=_.v[D+pe];Fe=(Fe/X-.5)*2,Ze=(Ze/X-.5)*2;const ga=Math.min(1,Math.hypot(Fe,Ze))*.8+A*7919%97/97*.2,wa=Math.sqrt(Math.max(30,_.area[A]))/1e3,Je=(pe,jt,$t)=>{ue[Y*3]=(pe-.5)*Ue*2,ue[Y*3+1]=0,ue[Y*3+2]=(jt-.5)*Ue*2,_e[Y]=$t,Ne[Y]=Ie,Ke[Y]=ga,M[Y]=wa,Y++};for(let pe=0;pe<X;pe++){const jt=D+pe,$t=D+(pe+1)%X;Je(_.u[jt],_.v[jt],1),Je(_.u[$t],_.v[$t],1)}if(_.h[A]>=11)for(let pe=0;pe<X;pe++)Je(_.u[D+pe],_.v[D+pe],0),Je(_.u[D+pe],_.v[D+pe],1)}const ce=new Pe;ce.setAttribute("position",new N(ue,3)),ce.setAttribute("aTop",new N(_e,1)),ce.setAttribute("aH",new N(Ne,1)),ce.setAttribute("aDel",new N(Ke,1)),ce.setAttribute("aSz",new N(M,1));const de=new ae({vertexShader:sl,fragmentShader:ul,uniforms:{uGrow:{value:0},uFar:{value:30},uFocal:{value:1e3},uCol:{value:o("house")},uAlpha:{value:.55}},defines:v,transparent:!0,depthWrite:!1,...m}),De=new Ca(ce,de);De.name="houses",De.frustumCulled=!1,De.renderOrder=1;const ke=e.projects,ge=new Float32Array(ke.length*3),gt=new Float32Array(ke.length);ke.forEach((A,D)=>{ge[D*3]=(A.u-.5)*Ue*2,ge[D*3+1]=.03,ge[D*3+2]=(A.v-.5)*Ue*2,gt[D]=D/ke.length});const W=new Pe;W.setAttribute("position",new N(ge,3)),W.setAttribute("aSeed",new N(gt,1));const qe=new ae({vertexShader:cl,fragmentShader:fl,uniforms:{uFocal:{value:1e3},uTime:{value:0},uCol:{value:o("mark")},uAlpha:{value:0}},defines:v,transparent:!0,depthWrite:!1,depthTest:!1,...m}),wt=new Gt(W,qe);wt.name="marks",wt.frustumCulled=!1,wt.renderOrder=3;const ha=16,Kt=c?96:160,Xa=Math.floor(r/ha)+1,xa=new Float32Array(Xa*2*Kt*6);let qt=0;for(let A=0;A<Xa;A++){const D=Math.min(i/2,A*ha*b-i/2);for(let X=0;X<Kt;X++){const Ie=(X/Kt-.5)*i,Fe=((X+1)/Kt-.5)*i;xa.set([Ie,0,D,Fe,0,D],qt),qt+=6,xa.set([D,1,Ie,D,1,Fe],qt),qt+=6}}const Ya=new Pe;Ya.setAttribute("position",new N(xa,3));const yt=new ae({vertexShader:ll,fragmentShader:nl,uniforms:{uTime:{value:0},uWave:{value:1},uFar:{value:30},uFocal:{value:1e3},uGap:{value:ha*b},uCol:{value:o("grid")},uAlpha:{value:1}},defines:v,transparent:!0,depthWrite:!1,...m}),At=new Ca(Ya,yt);return At.name="grid",At.frustumCulled=!1,At.renderOrder=1,l.add(L,At,De,p,wt),{group:l,update(A){const D=d.uniforms;D.uTime.value=A.time,D.uAsm.value=A.asm,D.uWave.value=A.wave,D.uFocal.value=A.focal,D.uFar.value=A.far,D.uAlpha.value=A.alpha*A.points,D.uScr.value=A.scr||0,A.scr&&(D.uDust.value=A.dust,D.uFly.value=A.fly,D.uCloudA.value=A.cloudA,D.uDustL.value=A.dustL,D.uRes.value.set(A.resW,A.resH),D.tCloud.value=A.cloudTex||za,D.uDrift.value.set(A.driftX||0,A.driftY||0),D.uNeon.value=A.neon||0),p.visible=A.alpha*A.points>.002,u.uniforms.uAlpha.value=A.map*A.alpha,L.visible=A.map*A.alpha>.002,de.uniforms.uGrow.value=A.houses,de.uniforms.uFar.value=A.far,de.uniforms.uFocal.value=A.focal,de.uniforms.uAlpha.value=.55*A.alpha,De.visible=A.houses>.001&&A.alpha>.002,qe.uniforms.uTime.value=A.time,qe.uniforms.uFocal.value=A.focal,qe.uniforms.uAlpha.value=A.marks*A.alpha,wt.visible=A.marks*A.alpha>.002;const X=A.alpha*(1-A.asm);yt.uniforms.uTime.value=A.time,yt.uniforms.uWave.value=A.wave,yt.uniforms.uFar.value=A.far,yt.uniforms.uFocal.value=A.focal,yt.uniforms.uAlpha.value=X,At.visible=X>.002,l.visible=A.alpha>.002,A.hideTech&&(p.visible=!1,At.visible=!1,De.visible=!1,L.visible=!1),A.hideMarks&&(wt.visible=!1)}}}const vl=`
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
`,ml=e=>`
#define ${e}
${e==="LOOK_LIGHT"?Al:e.startsWith("LOOK_PAPER")?bl:""}
${e.includes("P_INK")?`#define SK_SPHERE
`+Wa:""}
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
`,dl=`
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
`,pl=`
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
`,hl=`
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
`,xl=`
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
`,gl=`
varying vec2 vP;
void main() { vP = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,wl=`
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
`;function ro(){const e=new Pe;return e.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}const yl={dots:"LOOK_DOTS",photo:"LOOK_PHOTO",mix:"LOOK_MIX",light:"LOOK_LIGHT",lines:`LOOK_PAPER
#define P_LINES`,ink:`LOOK_PAPER
#define P_INK`},io={lines:1,ink:1},Io=e=>{const t=parseInt(e.slice(1),16),a=l=>(l/255).toFixed(4);return`vec3(${a(t>>16)}, ${a(t>>8&255)}, ${a(t&255)})`},Al=[["L_SEA","#6c8194"],["L_GROUND","#2c4760"],["L_GOLD","#8a5f10"],["L_DISC","#d3d9de"],["L_RIM","#29455c"],["L_AURA","#e4e8ec"]].map(([e,t])=>`#define ${e} ${Io(t)}`).join(`
`),bl=[["L_SEA","#5b7086"],["L_GROUND","#1c3349"],["L_GOLD","#8a5f10"],["L_GLOW","#2A6DAA"],["L_DISC","#d3d9de"],["L_RIM","#2A6DAA"],["L_AURA","#5FA8E0"],["L_PALE","#5FA8E0"],["L_GOLDL","#c9a24e"],["L_INK3","#4d677d"],["L_INK2","#29455c"]].map(([e,t])=>`#define ${e} ${Io(t)}`).join(`
`);function ba(e,t,a,l){let r=0,i=0;const c=[0,0,0],h=new Rt,v={blending:ft,blendSrc:Le,blendDst:Ye,blendSrcAlpha:Le,blendDstAlpha:Ye},m=Ce(l.pdb.lat,l.pdb.lon,1),s={uCam:{value:new J},uC:{value:0},uR:{value:V},uAlpha:{value:0},uHaloA:{value:0},uSpace:{value:0},uAtm:{value:0},uS0:{value:1},uLod:{value:0},uMarkR:{value:10},uMark:{value:0},uMarkBlue:{value:0},uMarkGrow:{value:1},uTime:{value:0},uNight:{value:0},uClouds:{value:0},uHole:{value:0},uHoleR:{value:3.75},uRevMode:{value:0},uRevR:{value:1},uRevA:{value:1},uVeil:{value:0},uCzK:{value:0},uSc:{value:1},uInkH:{value:1},uInkP:{value:1},uPdb:{value:new J(m[0],m[1],m[2])},uSun:{value:new J(...Ce(18,-28,1)).normalize()},uLand:{value:t.land},uEu:{value:t.eu},uEuBox:{value:new tt(Xt.lon0,Xt.lat0,Xt.lon1,Xt.lat1)},uCamWorld:{value:new ka},uInvProj:{value:new ka}};e==="photo"&&(s.uDay={value:t.day},s.uDayEu={value:t.dayEu},s.uCloudTex={value:t.clouds},s.uDayCe={value:t.dayCe},s.uCeBox={value:new tt(Yt.lon0,Yt.lat0,Yt.lon1,Yt.lat1)},s.uPhoto={value:0}),e==="mix"&&(s.uNightTex={value:t.night},s.uNightEu={value:t.nightEu});const o=new ae({vertexShader:vl,fragmentShader:ml(yl[e]),uniforms:s,transparent:!0,depthTest:!1,depthWrite:!1,...v}),n=new fe(ro(),o);n.name="globe",n.frustumCulled=!1,n.renderOrder=-20;const w=(u,L,_)=>new ae({vertexShader:dl,fragmentShader:pl,uniforms:{uCam:s.uCam,uR:s.uR,uPdb:s.uPdb,uMarkR:s.uMarkR,uMark:s.uMark,uCol:{value:e==="light"?new Ge().setStyle(u,Da):new Ge(u)},uAlpha:{value:L},uFadeKm:{value:_}},transparent:!0,depthTest:!1,depthWrite:!1,...v}),b={dots:{coast:"#6f9cc4",border:"#8fb4d8",river:"#4f86b8"},photo:{coast:"#ffffff",border:"#ffffff",river:"#9cc8ff"},mix:{coast:"#5b8fc8",border:"#7fa9dc",river:"#3f6f9f"},light:{coast:"#4d677d",border:"#29455c",river:"#6c8194"}}[io[e]?"light":e],x=(u,L)=>{const _=new Pe;_.setAttribute("position",new N(u,3));const z=new Ca(_,w(L,0,400));return z.frustumCulled=!1,z.renderOrder=-10,z},S=x(a[0],b.coast),T=x(a[1],b.border),E=x(a[3],b.river);S.name="coast",T.name="border",E.name="river";const B=new i0().setPositions(a[2]),j=new s0({color:e==="light"?9068304:15317072,linewidth:l.lite?1.6:2.2,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),k=new u0(B,j);k.frustumCulled=!1,k.renderOrder=-9;const y=l.lite?900:2400,O=new Float32Array(y*3),G=new Float32Array(y);let P=4242;const I=()=>(P=P*16807%2147483647)/2147483647;for(let u=0;u<y;u++){const L=I()*2-1,_=I()*Math.PI*2,z=Math.sqrt(1-L*L);O[u*3]=z*Math.cos(_)*1e5,O[u*3+1]=L*1e5,O[u*3+2]=z*Math.sin(_)*1e5,G[u]=Math.pow(I(),4)}const R=new Pe;R.setAttribute("position",new N(O,3)),R.setAttribute("aMag",new N(G,1));const f=new ae({vertexShader:hl,fragmentShader:xl,uniforms:{uAlpha:{value:0},uPx:{value:1},uOcc:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,...v}),d=new Gt(R,f);d.frustumCulled=!1,d.renderOrder=-15,d.name="stars";const p=new ae({vertexShader:gl,fragmentShader:wl,uniforms:{uLeft:{value:0},uAll:{value:0},uCol:{value:e==="light"?new Ge().setStyle("#c4cad0",Da):new Ge("#040b15")}},transparent:!0,depthTest:!1,depthWrite:!1,...v}),F=new fe(ro(),p);return F.name="scrim",F.frustumCulled=!1,F.renderOrder=100,h.add(d,n,S,T,E,k,F),{group:h,resize(u,L){j.resolution.set(u,L)},setPhoto(u,L){const _=[];return s.uDay&&u&&s.uDay.value!==u&&(_.push(s.uDay.value),s.uDay.value=u),s.uCloudTex&&L&&s.uCloudTex.value!==L&&(_.push(s.uCloudTex.value),s.uCloudTex.value=L),_},update(u,L){const _=L.position;s.uCam.value.copy(_);const z=Math.hypot(_.x,_.y,_.z);s.uC.value=(z-V)*(z+V),s.uCamWorld.value.copy(L.matrixWorld),s.uInvProj.value.copy(L.projectionMatrixInverse),s.uAlpha.value=u.alpha,s.uHaloA.value=u.haloAlpha??u.alpha,s.uSpace.value=u.space,s.uAtm.value=u.atm,s.uS0.value=u.s0,s.uLod.value=u.lod,s.uMarkR.value=u.markR,s.uMark.value=u.mark,s.uMarkBlue.value=u.markBlue||0,s.uMarkGrow.value=u.markGrow||1,s.uTime.value=u.time,s.uNight.value=u.night,s.uPhoto&&(s.uPhoto.value=u.photo),s.uClouds.value=u.clouds,s.uHole.value=u.hole,s.uHoleR.value=u.holeR,s.uRevMode.value=u.revMode||0,s.uRevR.value=u.revR||1,s.uRevA.value=u.revA??1,s.uVeil.value=u.veil||0,((u.spin||0)!==r||(u.sunLat||0)!==i)&&(r=u.spin||0,i=u.sunLat||0,Ce(18+i,-28+r,1,c),s.uSun.value.set(c[0],c[1],c[2]).normalize()),s.uCzK.value=u.czk,s.uSc.value=u.sc||1,s.uInkH.value=u.inkH??1,s.uInkP.value=u.inkP??1,n.visible=u.alpha>.002||u.space>.002,S.material.uniforms.uAlpha.value=u.lines*(e==="photo"?.18:.38),T.material.uniforms.uAlpha.value=u.lines*(e==="photo"?.3:.5),E.material.uniforms.uAlpha.value=u.rivers*.35;for(const C of[S,T,E])C.material.uniforms.uFadeKm.value=Math.max(1,z-V)*.05,C.visible=C.material.uniforms.uAlpha.value>.002;j.opacity=u.cz,k.visible=u.cz>.002,d.position.copy(_),f.uniforms.uAlpha.value=u.stars,f.uniforms.uOcc.value=Math.min(1,20*Math.max(u.alpha,u.haloAlpha??u.alpha)),f.uniforms.uPx.value=u.px,d.visible=u.stars>.002,io[e]&&(S.visible=T.visible=E.visible=k.visible=d.visible=!1),p.uniforms.uLeft.value=u.scrimLeft,p.uniforms.uAll.value=u.scrimAll,F.visible=u.scrimLeft+u.scrimAll>.002}}}const xt=[[48.2082,16.3738],[52.52,13.405],[47.4979,19.0402],[48.8566,2.3522],[51.5074,-.1278],[41.9028,12.4964],[40.4168,-3.7038],[59.3293,18.0686],[50.4501,30.5234],[39.9334,32.8597],[24.4539,54.3773],[39.9042,116.4074],[56.9496,24.1052],[37.9838,23.7275],[35.6762,139.6503],[1.3521,103.8198]],Zt=128,vt=2.5,Ml=vt*xt.length,Sl=`
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
`,_l=`
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
  float k = floor(uTime / ${vt.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = 2.0 * floor(h * ${xt.length/2}.0) + mod(j, 2.0);
    float since = uTime - j * ${vt.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${vt.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
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
  float order = vArc.y * float(${xt.length});
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
  float k = floor(uTime / ${vt.toFixed(1)});
  float best = -1.0;
  for (int i = 0; i < 3; i++) {
    float j = k - float(i);
    float h = fract(sin(j * 12.9898 + 4.1) * 43758.5453);
    float d = 2.0 * floor(h * ${xt.length/2}.0) + mod(j, 2.0);
    float since = uTime - j * ${vt.toFixed(1)};
    // Дуга ещё не прорисована к выпуску — кометы нет.
    if (abs(d - order) < 0.5 && since <= travel + 0.5 && j * ${vt.toFixed(1)} >= uStart + order * 0.15 + 2.5) best = since;
  }
  return best;
}
void main() {
  vec4 cp = projectionMatrix * viewMatrix * vec4(position, 1.0);
  gl_Position = cp;
  // Вспышка, когда приходит голова (конец пути), и тихое тление.
  float order = aArc.y * float(${xt.length});
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
`,Ll=`
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
`,so={blending:ft,blendSrc:Le,blendDst:Le,blendSrcAlpha:Le,blendDstAlpha:Ye};function Rl(e){const t=new J(...Ce(e.lat,e.lon,1)),a=xt.length,l=a*(Zt+1)*2,r=new Float32Array(l*3),i=new Float32Array(l),c=new Float32Array(l),h=new Float32Array(l*4),v=[];let m=7;const s=()=>(m=m*16807%2147483647)/2147483647,o=xt.map(([P,I],R)=>{const f=new J(...Ce(P,I,1)),d=Math.acos(Math.min(1,Math.max(-1,t.dot(f)))),p=Math.min(.22*V,d*V*.2);return{e:f,ang:d,a:[3+2*Math.min(1,d/1.45),0,p,.75+.25*s()]}}),n=o.map((P,I)=>I);for(let P=n.length-1;P>0;P--){const I=Math.floor(s()*(P+1));[n[P],n[I]]=[n[I],n[P]]}n.forEach((P,I)=>{o[P].a[1]=I/a});let w=0;o.forEach(({e:P,a:I})=>{const R=w;for(let f=0;f<=Zt;f++){for(const d of[-1,1])r.set([P.x,P.y,P.z],w*3),i[w]=f/Zt,c[w]=d,h.set(I,w*4),w++;if(f<Zt){const d=R+f*2;v.push(d,d+1,d+2,d+1,d+3,d+2)}}});const b=new Pe;b.setAttribute("position",new N(new Float32Array(l*3),3)),b.setAttribute("aEnd",new N(r,3)),b.setAttribute("aT",new N(i,1)),b.setAttribute("aSide",new N(c,1)),b.setAttribute("aArc",new N(h,4)),b.setIndex(v);const x=new Ge("#78d0e6"),S=new ae({vertexShader:Sl,fragmentShader:_l,uniforms:{uP:{value:t},uRes:{value:new xe(1,1)},uHalfW:{value:5},uTime:{value:0},uPeriod:{value:Ml},uAlpha:{value:0},uStart:{value:0},uTextL:{value:1},uDpr:{value:1},uNear:{value:0},uCol:{value:x}},transparent:!0,depthWrite:!1,depthTest:!1,side:zt,...so}),T=new fe(b,S);T.frustumCulled=!1,T.name="arcs";const E=new Float32Array((a+1)*3),B=new Float32Array((a+1)*4),j=new Float32Array(a+1);o.forEach(({e:P,a:I},R)=>{E.set([P.x*V,P.y*V,P.z*V],R*3),B.set(I,R*4)}),E.set([t.x*V,t.y*V,t.z*V],a*3),B.set([1,0,0,1],a*4),j[a]=1;const k=new Pe;k.setAttribute("position",new N(E,3)),k.setAttribute("aArc",new N(B,4)),k.setAttribute("aHome",new N(j,1));const y=new ae({vertexShader:Fl,fragmentShader:Ll,uniforms:{uTime:S.uniforms.uTime,uPeriod:S.uniforms.uPeriod,uStart:S.uniforms.uStart,uNear:S.uniforms.uNear,uAlpha:S.uniforms.uAlpha,uCol:{value:x},uDpr:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,...so}),O=new Gt(k,y);O.frustumCulled=!1,O.name="arcDots";const G=new Rt;return G.add(T,O),T.renderOrder=50,O.renderOrder=51,{group:G,update(P){const I=G.visible;if(G.visible=P.alpha>.002,!G.visible)return;I||(S.uniforms.uStart.value=P.time),S.uniforms.uTextL.value=P.textL??1,S.uniforms.uAlpha.value=P.alpha,S.uniforms.uTime.value=P.time,S.uniforms.uRes.value.set(P.w,P.h);const R=Math.log(Math.max(1,P.d||2e4)),f=1-Math.min(1,Math.max(0,(R-Math.log(2e3))/(Math.log(2e4)-Math.log(2e3)))),d=f*f*(3-2*f);S.uniforms.uNear.value=d,S.uniforms.uHalfW.value=5*P.dpr*(1+.8*d),y.uniforms.uDpr.value=P.dpr,S.uniforms.uDpr.value=P.dpr}}}const Ma="/assets/dawn/",uo=6336/2688,Tl=.62,co=.668,bt={x:.712,y:.676},fo={x:.775,y:.3},nt=[-1,-.45,0,.35,1],Pl={zen:["#03091a","#0a1532","#28427f","#1f68c0","#1478d8"],hor:["#0e1b34","#2a2a4a","#c88a90","#b4d6ee","#bfe0f6"],glow:["#000000","#4c2a34","#ff7a2e","#ffc78a","#ffe9c8"],halo:["#000000","#160a0c","#ff8d3f","#ffdcb0","#f6f8ff"],disc:["#000000","#000000","#ffb070","#fff0d0","#fffaf0"],cLit:["#05070f","#4a2c3a","#ffbc9c","#ffeedd","#ffffff"],cSh:["#03050c","#1a1830","#8e6490","#b6b2c8","#aebfd6"],cCream:["#ffffff","#ffffff","#ffe2cc","#ffeedd","#fff1de"],mBase:["#050a17","#0b0f22","#2a2140","#46526e","#5a6a86"],mTint:["#6f86c0","#7a6aa0","#ffb28a","#ffe6cc","#ffffff"],nTint:["#7d95d0","#8a7aa8","#ffb088","#fff0dc","#ffffff"],nAmb:["#020408","#04040c","#0c0710","#05060a","#000000"],rim:["#000000","#3a1a12","#ff8a3a","#ffcf94","#fff2dc"]},Cl={horPow:[4,3.4,2.6,3.4,4.2],glowW:[.6,.55,.42,.42,.4],haloW:[.08,.08,.075,.07,.06],pol:[0,0,.12,.35,.48],mLight:[0,.015,.16,.65,1],mHaze:[.85,.85,.85,.4,.16],nLight:[.01,.02,.075,.6,1],rimK:[0,.25,1.15,.45,.12],veil:[0,0,.14,.3,.34]},Dl=e=>{const t=new Ge(e);return[t.r,t.g,t.b]},vo=Object.fromEntries(Object.entries(Pl).map(([e,t])=>[e,t.map(Dl)]));function Ho(e){if(e<=nt[0])return[0,0];for(let t=0;t<nt.length-1;t++)if(e<=nt[t+1])return[t,(e-nt[t])/(nt[t+1]-nt[t])];return[nt.length-2,1]}function He(e,t,a){const[l,r]=Ho(t),i=vo[e][l],c=vo[e][l+1];a.set(i[0]+(c[0]-i[0])*r,i[1]+(c[1]-i[1])*r,i[2]+(c[2]-i[2])*r)}function $e(e,t){const[a,l]=Ho(t),r=Cl[e];return r[a]+(r[a+1]-r[a])*l}const mo=`
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,kl=`
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
`,ja=`
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
`,zl=`
precision highp float;
${ja}
${kl}
uniform float uA, uStars, uCell, uDiscA, uSunR, uRays;
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
    float db = dot(q - vec2(0.55, 0.62), n);
    float mw = exp(-db * db / 0.018);
    float lane = smoothstep(0.35, 0.75, vn(q * vec2(7.0, 5.0) + 3.0) * 0.6 + vn(q * 19.0) * 0.4);
    vec2 cid = floor(sp / uCell);
    vec2 cw = mod(cid, 4096.0);
    vec2 h = hash22(cw);
    float hk = hash12(cw + 17.0), hm = hash12(cw + 91.0), ht = hash12(cw + 5.3);
    float dens = 0.13 + 0.42 * mw * (1.0 - 0.7 * lane);
    vec2 pt = (cid + 0.25 + 0.5 * h) * uCell;
    float mag = pow(hm, 7.0);
    float rad = mix(0.5, 1.45, mag);
    float d = length(sp - pt);
    float s = 1.0 - smoothstep(rad - 0.55, rad + 0.55, d);
    float br = mix(0.16, 1.15, mag) * step(hk, dens);
    vec3 sc = mix(vec3(0.72, 0.82, 1.0), vec3(1.0, 0.9, 0.78), ht * ht);
    float ext = smoothstep(0.0, 0.16, hy);
    c += sc * s * br * ext * uStars;
    // свечение полосы, с прожилками
    c += vec3(0.010, 0.013, 0.024) * mw * (1.0 - 0.75 * lane) * ext * uStars;
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
`,El=`
precision highp float;
uniform sampler2D tCl;
uniform vec2 uRes, uSunC;
uniform float uA, uHor0, uSpan, uAsp, uDrift, uLeftK;
uniform vec3 uLit, uSh, uCream, uGlowC;
void main() {
  vec2 px = gl_FragCoord.xy;
  float sh = max(1.0, uRes.y - uHor0) * uSpan;
  float v = (uRes.y - px.y) / sh;
  vec2 uv = vec2((px.x + uDrift) / (sh * uAsp), clamp(v, 0.0, 1.0));
  vec4 t = texture2D(tCl, uv);
  float d = t.r * step(v, 1.0);
  // над колонкой текста облака редеют до прозрачной синевы
  float keep = mix(uLeftK, 1.0, smoothstep(0.5, 0.78, px.x / uRes.x));
  float a = d * keep * uA;
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
`,No=`
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
`,Il=`
precision highp float;
${ja}
${No}
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
${ja}
${No}
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
`,Nl=`
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
`,Ol=`
attribute float aMag;
uniform float uPx;
varying float vM;
varying float vBehind;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vM = aMag;
  vec3 ro = cameraPosition, rd = normalize((modelMatrix * vec4(position, 1.0)).xyz - ro);
  float b = dot(ro, rd);
  float h = b * b - dot(ro, ro) + ${V.toFixed(1)} * ${V.toFixed(1)};
  vBehind = (h > 0.0 && -b - sqrt(max(h, 0.0)) > 0.0) ? 1.0 : 0.0;
  gl_PointSize = (1.0 + aMag * 1.6) * uPx;
}
`,Gl=`
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
`;function Bl(){const e=new Pe;return e.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}const la=new Fo(new Uint8Array([0,0,0,0]),1,1);la.needsUpdate=!0;function Ul(){return{uRes:{value:new xe(1,1)},uPx:{value:1},uHor:{value:0},uHorPow:{value:3},uGlowW:{value:.5},uHaloW:{value:.08},uPol:{value:0},uSun:{value:new xe},uZen:{value:new J},uHorC:{value:new J},uGlow:{value:new J},uHalo:{value:new J}}}function Wl({lite:e=!1}={}){const t=new Rt;t.name="dawn";const a=Bl(),l=Ul(),r=(R,f,d,p)=>{const F=new fe(a,new ae({vertexShader:mo,fragmentShader:R,uniforms:{...l,...f},transparent:!0,depthTest:!1,depthWrite:!1,...We}));return F.frustumCulled=!1,F.renderOrder=d,F.name=p,t.add(F),F},i=r(zl,{uA:{value:0},uStars:{value:0},uCell:{value:e?8:7},uDiscA:{value:0},uSunR:{value:10},uRays:{value:0},uStarOff:{value:new xe},uDisc:{value:new J}},200,"dawn-sky"),c=new fe(a,new ae({vertexShader:mo,fragmentShader:El,uniforms:{tCl:{value:la},uRes:{value:new xe(1,1)},uSunC:{value:new xe},uA:{value:0},uHor0:{value:0},uSpan:{value:.754},uAsp:{value:1003/652},uDrift:{value:0},uLeftK:{value:.12},uLit:{value:new J},uSh:{value:new J},uCream:{value:new J(1,1,1)},uGlowC:{value:new J}},transparent:!0,depthTest:!1,depthWrite:!1,...We}));c.frustumCulled=!1,c.renderOrder=202,c.name="dawn-clouds",t.add(c);const h=r(Il,{tL:{value:la},uPlate:{value:new tt(0,0,1,1)},uTop:{value:0},uA:{value:0},uMLight:{value:0},uMHaze:{value:0},uMBase:{value:new J},uMTint:{value:new J}},203,"dawn-far"),v=r(Hl,{tL:{value:la},uPlate:{value:new tt(0,0,1,1)},uTop:{value:0},uA:{value:0},uNLight:{value:0},uRimK:{value:0},uNTint:{value:new J},uNAmb:{value:new J},uRim:{value:new J}},204,"dawn-near"),m=r(Nl,{uVeil:{value:0},uFlat:{value:e?1:0}},205,"dawn-veil");let s=null;const o=new ae({vertexShader:Ol,fragmentShader:Gl,uniforms:{uAlpha:{value:0},uPx:{value:1},uOcc:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,...We});let n=null,w=!1,b=0,x=0,S=!1;const T={near:.4673,far:.6369};function E(R,f){if(n)return n;const d=new So;d.setOptions({imageOrientation:"none",premultiplyAlpha:"none",colorSpaceConversion:"none"});const p=u=>new Promise((L,_)=>d.load(Ma+u+(f?"":"-s")+".webp",z=>{const C=new Ra(z);C.colorSpace=ia,C.flipY=!1,C.wrapS=C.wrapT=Ot,C.minFilter=sa,C.magFilter=ht,C.anisotropy=4,C.needsUpdate=!0,L(C)},void 0,_)),F=new Promise((u,L)=>d.load(Ma+"clouds.png",_=>{const z=new Ra(_);z.colorSpace=ia,z.flipY=!1,z.wrapS=Ua,z.wrapT=Ot,z.minFilter=sa,z.magFilter=ht,z.needsUpdate=!0,u(z)},void 0,L));return n=Promise.all([fetch(Ma+"dawn.json").then(u=>u.json()),p("near"),p("far"),F]).then(([u,L,_,z])=>{R.initTexture(z);const C=c.material.uniforms;C.tCl.value=z,u.clouds&&(C.uSpan.value=u.clouds.span,C.uAsp.value=u.clouds.w/u.clouds.h),S=!0,T.near=u.layers.near.top,T.far=u.layers.far.top,R.initTexture(L),R.initTexture(_),v.material.uniforms.tL.value=L,h.material.uniforms.tL.value=_,v.material.uniforms.uTop.value=T.near,h.material.uniforms.uTop.value=T.far,w=!0}).catch(u=>console.warn("[cfig] рассвет: слои не подгрузились:",u)),n}const B=new J,j=new xe,k=new J;let y=!1;const O=new xe;let G=!1,P=!1;function I(R,f,d,p){const F=.035*f,u=Math.max(R/uo,(d?.62:.86)*f)+F,L=u*uo,_=d?.52:.66;return{x0:Math.min(0,Math.max(R-L,_*R-Tl*L)),top:u-F+p,Wp:L,Hp:u}}return{group:t,load:E,get ready(){return w},adoptStars(R){s||!R||(s=new Gt(R.geometry,o),s.frustumCulled=!1,s.renderOrder=201,s.name="dawn-estars",s.userData.src=R,t.add(s))},update(R){if(G=!!R.on,t.visible=G,!G){P=!1;return}const{w:f,h:d,e:p,lite:F}=R,u=R.now||0,L=Math.min(.1,Math.max(0,(u-x)/1e3));x=u,b=w?Math.min(1,b+L/.5):0,R.instant&&w&&(b=1);const _=R.D-.5,z=I(f,d,F,_*.006*d),C=I(f,d,F,_*.016*d),ue=I(f,d,F,_*.034*d),_e=W=>C.top-W*C.Hp,Ne=_e(co);let Ke,M;if(p<0)Ke=bt.x,M=bt.y+.12*-p;else{const W=p,qe=Math.sin(W*Math.PI/2);Ke=bt.x+(fo.x-bt.x)*W,M=bt.y+(fo.y-bt.y)*qe}j.set(Math.min(C.x0+Ke*C.Wp,.9*f),_e(M));const Y=l;Y.uRes.value.set(f,d),Y.uPx.value=R.px,Y.uHor.value=Ne,Y.uSun.value.copy(j),He("zen",p,Y.uZen.value),He("hor",p,Y.uHorC.value),He("glow",p,Y.uGlow.value),He("halo",p,Y.uHalo.value),Y.uHorPow.value=$e("horPow",p),Y.uGlowW.value=$e("glowW",p),Y.uHaloW.value=$e("haloW",p),Y.uPol.value=$e("pol",p);const ce=i.material.uniforms;if(ce.uA.value=R.A,ce.uStars.value=R.stars,He("disc",p,ce.uDisc.value),ce.uDisc.value.multiplyScalar(1.8),ce.uDiscA.value=Math.min(1,Math.max(0,(p+.06)/.1)),ce.uSunR.value=(.0105+.004*Math.max(0,1-p/.4))*C.Hp,ce.uRays.value=Math.min(1,Math.max(0,(p-.25)/.5)),R.camera){const W=R.camera;y||(W.getWorldDirection(k),y=!0,B.copy(W.position).addScaledVector(k,1e4).project(W),O.set(B.x,B.y)),B.copy(W.position).addScaledVector(k,1e4).project(W),ce.uStarOff.value.set((B.x-O.x)*.5*f,(B.y-O.y)*.5*d+(z.top-I(f,d,F,0).top))}if(s){const W=s.userData.src;s.position.copy(W.position),o.uniforms.uAlpha.value=R.estars,o.uniforms.uPx.value=W.material.uniforms.uPx.value,o.uniforms.uOcc.value=W.material.uniforms.uOcc.value,s.visible=R.estars>.002}const de=R.A*Math.min(1,Math.max(0,(p+.75)/.5))*(S?1:0);if(P=de>.002,c.visible=P,P){const W=c.material.uniforms,qe=I(f,d,F,0);W.uRes.value.set(f,d),W.uHor0.value=qe.top-co*qe.Hp,W.uDrift.value=R.time*1.6*R.px,W.uA.value=de,W.uSunC.value.copy(j),He("cLit",p,W.uLit.value),He("cSh",p,W.uSh.value),He("cCream",p,W.uCream.value),He("glow",p,W.uGlowC.value),W.uGlowC.value.multiplyScalar(.3)}const De=R.A*b;h.visible=v.visible=De>.002;const ke=h.material.uniforms;ke.uPlate.value.set(C.x0,C.top,C.Wp,C.Hp),ke.uA.value=De,ke.uMLight.value=$e("mLight",p),ke.uMHaze.value=$e("mHaze",p),He("mBase",p,ke.uMBase.value),He("mTint",p,ke.uMTint.value);const ge=v.material.uniforms;ge.uPlate.value.set(ue.x0,ue.top,ue.Wp,ue.Hp),ge.uA.value=De,ge.uNLight.value=$e("nLight",p),ge.uRimK.value=$e("rimK",p),He("nTint",p,ge.uNTint.value),He("nAmb",p,ge.uNAmb.value),He("rim",p,ge.uRim.value);const gt=$e("veil",p)*(F?.75:1)*R.A;m.material.uniforms.uVeil.value=gt,m.visible=gt>.002},prerender(){}}}const Sa="home",_t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Oo=5,po=new URLSearchParams(location.search).get("earthfreeze"),Ea=!0,mt=[3.1,3.9];let na=.5;const Mt={a:0,b:0};let se=null,Oe=null,Z=null,me=null,Lt=null,Re=null,dt=null,Te=null,ct=null,ca=null,at=null;const Qe={alpha:0,time:0,w:1,h:1,dpr:1,textL:1},Me=[5.08,6.2];let be=null;const Ia=new Lo(35,1,1,1e6),he={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},Jt=[0,0,0],Qt=[0,0,0],ea=[0,0,0],Bt=new J,Be={lat:0,lon:0,tilt:0,head:0,sx:0,sy:0,ok:!1};function $a(e,t){if(!Te||e<=Me[0])return;Be.ok||(Wt(Me[0],Be),Be.ok=!0);const a=g(Me[0],Me[1],e);t.lat=Be.lat,t.lon=Be.lon,t.head=Be.head,t.tilt=Be.tilt*(1-a),t.sx=Be.sx+(.3-Be.sx)*a,t.sy=Be.sy+(0-Be.sy)*a}function Ha(e,t,a){Wt(t,he),$a(t,he),Po(he.lat,he.lon+e,he.d,he.tilt,he.head,Jt,Qt,ea),a.position.set(Jt[0],Jt[1],Jt[2]),a.up.set(Qt[0],Qt[1],Qt[2]),a.lookAt(ea[0],ea[1],ea[2]),a.aspect=oe/ve,a.near=Math.max(.02,he.d*.02),a.far=Math.max(he.d*4,he.d+2.2*V)+2e5,a.updateProjectionMatrix(),a.projectionMatrix.elements[8]=-he.sx,a.projectionMatrix.elements[9]=-he.sy,a.projectionMatrixInverse.copy(a.projectionMatrix).invert(),a.updateMatrixWorld();const l=Ce($.lat,$.lon);return Bt.set(l[0],l[1],l[2]).project(a),(Bt.x*.5+.5)*(me.clientWidth||innerWidth)}function Go(){const e=document.querySelector("#container-probe i")?.getBoundingClientRect();return e&&e.width>0?e.left+e.width/2:innerWidth/2}function Kl(){const e=oe+"x"+ve;if(be&&be.key===e)return be.v;const t=Go();let a=0,l=1/0;for(let r=-30;r<=60;r+=.25){const i=Ha(r,Me[1],Ia);Bt.z<1&&Math.abs(i-t)<l&&(l=Math.abs(i-t),a=r)}return Wt(Me[1],he),$a(Me[1],he),be={key:e,v:a,goal:t,lat:he.lat,lon:he.lon,sx:he.sx,sy:he.sy},be.v}const rt=[4.85,5.08];let pt=null,Ve=null,Ft=null,q=null,fa=0,ho=null,ee=!1,Ee=null;const ql=performance.now(),pa=[{t:0,lat:$.lat-.012,lon:$.lon,d:6.5,tilt:74,head:-30,sx:.3,sy:.02},{t:1,lat:$.lat-.008,lon:$.lon,d:7.2,tilt:70,head:-20,sx:.3,sy:0},{t:2,lat:$.lat-.004,lon:$.lon,d:8.4,tilt:62,head:-9,sx:.3,sy:0},{t:3,lat:$.lat,lon:$.lon,d:9.6,tilt:52,head:2,sx:.3,sy:0},{t:4,lat:$.lat,lon:$.lon,d:11,tilt:46,head:12,sx:.8,sy:-.22},{t:4.5,lat:$.lat,lon:$.lon-.05,d:75,tilt:32,head:8,sx:.55,sy:-.26},{t:5,lat:49.85,lon:15.45,d:780,tilt:14,head:0,sx:.32,sy:-.2},{t:5.5,lat:50,lon:14.2,d:2300,tilt:6,head:0,sx:.3,sy:-.1},{t:6,lat:49,lon:12,d:5600,tilt:0,head:0,sx:.3,sy:0},{t:7,lat:38,lon:9,d:23e3,tilt:0,head:0,sx:.32,sy:0},{t:8,lat:30,lon:-4,d:34e3,tilt:0,head:0,sx:1.2,sy:.95}],Bo=pa.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),Uo=pa.map(e=>e.t===5?{...e,d:1500,sx:-.3,sy:-.52}:e.t===5.5?{...e,sx:-.42,sy:-.56}:e),Wo=[...Uo.map(e=>e.t===2?{...e,tilt:58,head:-18}:e.t===3?{...e,tilt:50,head:6,d:9.2}:e),{t:2.5,lat:$.lat-.002,lon:$.lon,d:8.8,tilt:54,head:-8,sx:.3,sy:0}].sort((e,t)=>e.t-t.t),jl=Wo.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),ra={lat:$.lat,lon:$.lon,head:10.2},_a={...ra,d:11,tilt:46,sx:.62,sy:-.08},Ko=[{t:0,...ra,d:12.5,tilt:76,sx:.3,sy:0},{t:1,...ra,d:11.2,tilt:72,sx:.3,sy:0},{t:2,...ra,d:11,tilt:56,sx:.5,sy:-.04},{t:2.5,..._a},{t:3,..._a},{t:4,..._a},...pa.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],$l=[...Ko.filter(e=>e.t<=4).map(e=>({...e,sx:0,sy:-.12})).map(e=>e.t===2?{...e,d:16}:e.t===2.5?{...e,d:19}:e.t===3||e.t===4?{...e,d:22}:e),...Bo.filter(e=>e.t>4).map(e=>e.t===8?{...e,lat:38,lon:9}:e)],ut=1.5,Vl=[{t:0,lat:$.lat-.012,lon:$.lon,d:8,tilt:80,sx:.3,sy:.02},{t:1,lat:$.lat-.008,lon:$.lon,d:8.5,tilt:76,sx:.3,sy:0}],xo=[[0,10.2],[ut,10.2]];function Xl(e,t){const a=Et(e),l=n=>({t:n,...a(n,{})}),r=Vl.map(n=>t?{...n,sx:0,sy:-.12}:n),i=[...r,l(ut),l(ut+.3)],c=va([...xo.map(n=>n[0]),ut+.3],[...xo.map(n=>n[1]),i[i.length-1].head]),h=Et(i.map(({head:n,...w})=>w)),v={lat:$.lat,lon:$.lon,head:10.2,sx:t?0:.69,sy:t?-.12:-.05},m=Et([[0,12.5,76],[1,11.2,72],[2,9.4,62],[2.5,8.3,53],[3,7.48,47.5],[4,7.48,47.5]].map(([n,w,b])=>({t:n,...v,d:w,tilt:b}))),s=n=>{const w=m(n,{});return delete w.head,{t:n,...w}},o=Et([...r,s(ut),s(ut+.3)]);return(n,w)=>n>=ut?a(n,w):(n<=1?o(n,w):h(n,w),w.head=c(n),w)}let Wt=null;const g=(e,t,a)=>{const l=Math.min(1,Math.max(0,(a-e)/(t-e)));return l*l*(3-2*l)},K={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},ie={resW:1,resH:1,time:0,asm:0,wave:1,map:0,houses:0,marks:0,alpha:1,points:1,focal:1e3,far:30},U={alpha:0,space:0,atm:0,s0:1,lod:0,markR:1,mark:0,time:0,night:0,photo:0,clouds:0,lines:0,rivers:0,cz:0,czk:0,stars:0,px:1,scrimLeft:0,scrimAll:0,hole:0,holeR:Ue},we={},ne={},re={};let Ae=0,ot=0,Fa=0,et=0,Na=0,Ht=0,go=0;const it=[0,0,0],ta=[0,0,0],aa=[0,0,0],Yl=14,ze={a:0,b:0,f0:0,f1:0,spin:0,leave:0,on:!1};function Zl(e){if(!ze.on){ze.spin=0,ze.leave=0;return}ze.spin=Yl*g(ze.a,ze.b,e),ze.leave=g(ze.f0,ze.f1,e)}function Jl(){const e=document.querySelector("#canvas-wrapper");if(!e)return null;let t=e.querySelector("canvas.canvas-earth");return t||(t=document.createElement("canvas"),t.className="canvas-earth",t.setAttribute("aria-hidden","true"),e.append(t)),t}function La(){Ut.measures++;const e=innerHeight,t=n=>{const w=document.querySelector(n);if(!w)return null;const b=w.getBoundingClientRect();return{y:b.top+scrollY,h:b.height}},a=t("main .about"),l=t("main .growth"),r=t("main .reach"),i=t("main .companies"),c=t("main .values"),h=t("main .social");if(!a||!l||!r||!i||!c||!h){Ee=null;return}const v=r0(),m=new Array(11).fill(0);m[0]=v;const s=n=>n.y+.5*n.h-.5*e;if(m[1]=v+.8*e,m[2]=m[1]+.842*e,m[3]=m[2]+1.1*e,Mt.a=m[3]-.25*e,Mt.b=Mt.a+1*e,m[4]=Mt.b+.15*e,m[5]=s(r),m[6]=Math.max(m[5]+1.05*e,i.y-.55*e),m[9]=c.y-.2*e,m[8]=m[9]-1.5*e,m[7]=(m[6]+m[8])/2,m[10]=c.y+.6*e,!(q==="ink"&&Ea)){if(q==="ink"){const n=[1.1,.7,1.2,1.2,1,1.2,1.4,1.6],w=n.reduce((S,T)=>S+T,0),b=document.documentElement.scrollHeight-e-m[2],x=Math.min(1,Math.max(.3,b/(w*e)));for(let S=0;S<n.length;S++)m[S+3]=m[S+2]+n[S]*e*x}}for(let n=1;n<m.length;n++)m[n]=Math.max(m[n],m[n-1]+40);const o=[0,1,2,3,4,4.5,5,5.5,6,7,8];Ee={ys:m,ts:o,start:v,map:va(m,o)},q==="ink"&&Ea&&(mt[0]=Ee.map(Mt.a),mt[1]=Ee.map(Mt.b),en(h)),ze.on=!1}function qo(e){return Ee?Ee.map(e):0}function Oa(e){if(!Ee)return 0;let t=Ee.ys[0],a=Ee.ys[Ee.ys.length-1];for(let l=0;l<40;l++){const r=(t+a)/2;Ee.map(r)<e?t=r:a=r}return(t+a)/2}let oe=0,ve=0;function jo(){const e=Math.min(ee?1.5:1.75,window.devicePixelRatio||1),t=Math.max(1,Math.round(me.clientWidth*e)),a=Math.max(1,Math.round(me.clientHeight*e));t===oe&&a===ve||(oe=t,ve=a,se.setPixelRatio(1),se.setSize(t,a,!1),Z.aspect=t/a,pt?.resize(t,a),Ve?.resize(t,a),ct?.resize(t,a))}const st=new J,St=new J,oa=new J,le={amount:0,time:0,w:1,h:1,hx:0,hy:0,r:1,dark:0,erode:0,dim:0,fly:0,neon:0,done:!1,textL:1,px:1};function Ql(e,t){if(le.amount=g(.35,1,e)*(Te?1:1-g(3.8,4.4,e)),le.dark=0,le.erode=Na,le.dim=.55*g(0,.35,Ae)*(1-ot),le.fly=Ht,le.neon=ne.neon||0,le.done=!!Te&&Ht>=1,le.textL=ee?1:.45,le.px=oe/(me.clientWidth||oe),le.amount>.002){const a=Ce($.lat,$.lon);st.set(a[0],a[1],a[2]).project(Z),le.hx=(st.x*.5+.5)*oe,le.hy=(st.y*.5+.5)*ve;const l=Ue/(111.32*Math.cos($.lat*Math.PI/180)),r=Ce($.lat,$.lon+l);st.set(r[0],r[1],r[2]).project(Z),le.r=Math.max(.33*ve,Math.abs((st.x*.5+.5)*oe-le.hx)),Z.getWorldDirection(St),oa.copy(Z.position).normalize();const i=Z.position.length(),c=St.dot(oa);if(St.addScaledVector(oa,-c),i>V&&St.lengthSq()>1e-8){St.normalize();const h=V/i,v=Math.sqrt(1-h*h);st.copy(St).multiplyScalar(h).addScaledVector(oa,-v).multiplyScalar(Math.sqrt(i*i-V*V)).add(Z.position).project(Z),le.top=(st.y*.5+.5)*ve-.04*ve}else le.top=1e6;le.topF=.1*ve}le.time=t,le.w=oe,le.h=ve,dt.update(le)}const Q={yc:0,y0:0,y1:0,ok:!1,map:null},ye={on:!1,A:0,D:0,e:-1,stars:0,estars:0,time:0,w:1,h:1,px:1,lite:!1,camera:null,now:0};function en(e){if(Q.ok=!1,!e)return;const t=innerHeight;Q.yc=Oa(Me[1]+.3),Q.y0=Math.max(Q.yc,Oa(6.75)),Q.y1=Math.max(Q.y0+1.5*t,e.y+e.h-t);const a=Math.min(Q.y1-.5*t,Math.max(Q.y0+.5*t,e.y-.6*t));Q.map=va([Q.y0,a,Q.y1],[0,.22,1]),Q.ok=!0}function tn(e){return-1+g(.22,.56,e)+g(.56,1,e)}function an(e,t){if(!at||!Q.ok)return;const a=innerHeight;e>Q.yc-2.5*a&&at.load(se,!ee||oe>1100),ye.on=e>=Q.yc;const l=Math.min(1,Math.max(0,Q.map(Math.min(Q.y1,Math.max(Q.y0,e))))),r=tn(l),i=1-g(-.4,.05,r);ye.D=l,ye.e=r,ye.A=g(Q.y0,Q.y0+.5*a,e),ye.stars=g(Q.y0,Q.y0+1.1*a,e)*i,ye.estars=(1-(re.stars||0))*i,ye.time=t,ye.w=oe,ye.h=ve,ye.px=oe/(me.clientWidth||oe),ye.lite=ee,ye.camera=Z,ye.now=performance.now(),at.update(ye)}function $o(e,t){if(Ae=Te?Math.min(1,Math.max(0,(e-mt[0])/(mt[1]-mt[0]))):0,et=g(.6,.9,Ae),Na=Math.pow(Math.min(1,Ae/na),.55),Ht=Math.min(1,Math.max(0,(Ae-na)/(1-na))),ot=g(.6,.95,Ae),Fa=g(.65,1,Ae),Wt(e,K),Te){$a(e,K);const o=Kl();if(!(e<=Me[0]))if(e<=Me[1]){be.x0===void 0&&(be.x0=Ha(0,Me[0],Ia));const n=be.x0+(be.goal-be.x0)*g(Me[0],Me[1],e);let w=0,b=o*1.3;for(let x=0;x<22;x++){const S=(w+b)/2;Ha(S,e,Ia)>n?w=S:b=S}K.lon+=(w+b)/2}else{K.lat=be.lat,K.lon=be.lon+o;const n=g(Me[1],7.3,e);K.sx=be.sx+(1.3-be.sx)*n,K.sy=be.sy+(.15-be.sy)*n}}ze.spin&&(K.lon+=ze.spin);const a=0;Po(K.lat,K.lon,K.d,K.tilt,K.head,it,ta,aa),Z.position.set(it[0],it[1],it[2]),Z.up.set(ta[0],ta[1],ta[2]),Z.lookAt(aa[0],aa[1],aa[2]);const l=Math.hypot(it[0],it[1],it[2])-V;Z.near=Math.max(.02,K.d*.02),Z.far=Math.max(K.d*4,K.d+2.2*V)+2e5,Z.updateProjectionMatrix(),Z.projectionMatrix.elements[8]=-K.sx,Z.projectionMatrix.elements[9]=-K.sy,Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.updateMatrixWorld();const r=ve/(2*Math.tan(Z.fov*Math.PI/360)),i=Re?1-g(30,140,K.d):1-g(14,42,K.d);if(ie.time=t,ie.asm=g(1.85,3.05,e),ie.wave=1-g(1.9,3,e),ie.map=g(2.45,3.2,e),ie.houses=g(2.55,3.45,e),ie.marks=g(3,3.5,e)*(1-g(13,24,K.d)),ie.points=1-.45*g(3,4,e),ie.alpha=i*(1-ot),ie.focal=r,ie.resW=oe,ie.resH=ve,ie.far=Math.max(14,K.d*2.6),ie.hideTech=!!Re,ie.hideMarks=q==="ink",Lt?.update(ie),Te){Object.assign(ne,ie),ne.hideTech=!1,ne.hideMarks=!1,ne.asm=1,ne.wave=0,ne.scr=dt&&Ht<1?1:0,ne.dust=Na,ne.fly=Ht,ne.neon=g(.72,.86,Ae),ne.cloudA=Math.max(.001,g(1.5,2.4,e)),ne.cloudTex=dt?.texture,Ae<=0&&(go=t);const o=t-go;ne.driftX=Math.min(.035,o*(.035/1.6)*2*ve/oe),ne.driftY=-Math.min(.006,o*(.006/1.6)*2),ne.dustL=ee?1:.45,ne.map=g(.7,1,Ae),ne.camera=Z,ne.houses=g(.75,1,Ae),ne.marks=g(.88,1,Ae)*(1-g(13,24,K.d)),ne.points=1-.45*g(.9,1,Ae),ne.alpha=(1-g(40,75,K.d))*(Ae>0?1:0),Te.update(ne)}dt&&Ql(e,t);const c=Math.max(.03,K.d*.0055),h=Math.log2(c),v=Math.floor(h);U.s0=Math.pow(2,v),U.sc=c,U.lod=h-v;const m=Re?g(3.7,4.5,e):g(2.8,3.8,e)*.6+g(4,4.6,e)*.4,s=Te?g(Me[1]+.05,6.75,e):g(7.2,7.95,e);if(U.alpha=m*(1-s),U.spin=ze.spin+te.lon*a,U.sunLat=te.lat*a,U.space=g(5.2,6.4,e),U.atm=g(5,6.2,e),U.markR=Math.max(.6,l*.012),U.mark=q==="ink"?0:g(18,50,K.d)*(1-s),U.time=t,U.night=q==="mix"?g(5.6,6.6,e):0,U.photo=q==="photo"?g(120,420,K.d):0,U.clouds=q==="photo"?g(5.4,6.6,e)*.85:0,U.lines=g(4.1,4.9,e)*(1-s),U.rivers=g(4.1,4.7,e)*(1-g(5.6,6.2,e))*(1-U.photo),U.cz=g(4.3,5,e)*(1-s),U.stars=q==="light"||Re?0:g(5.6,6.8,e),U.px=Math.min(2,se.getPixelRatio()*(oe/me.clientWidth||1)),U.czk=Re?g(40,260,K.d):g(120,520,K.d),U.hole=i*ie.map,U.holeR=Ue,U.scrimLeft=ee?0:q==="light"?.6:.72,U.scrimAll=ee?q==="light"?.45:.5:0,Re&&(U.scrimLeft=0,U.scrimAll=0),Ve){const o=g(4.9,6,e),n=Math.exp(Math.log(5e3)+(Math.log(15)-Math.log(5e3))*o);U.revMode=0,U.revR=n,U.revA=1-o,Object.assign(we,U),we.revMode=0,we.revA=o,we.alpha=o>.001?U.alpha*o:0,U.alpha*=1-g(.85,1,o),we.space=0,we.stars=0,we.hole=0,we.photo=1,we.clouds=g(5.4,6.6,e)*.7,we.night=0,we.rivers=0,we.lines=U.lines*.5*o,we.veil=.5*(1-g(5.9,6.7,e)),we.cz=U.cz*o,we.scrimLeft=0,we.scrimAll=0,Ve.update(we,Z),U.revRibbons=1-o}else U.revRibbons=1;if(ct){Object.assign(re,U);const o=g(2.8,3.8,e)*.6+g(4,4.6,e)*.4;re.alpha=o*(1-s)*Fa*g(.5,1,et),re.haloAlpha=o*(1-g(Me[1]+.3,7,e))*Fa*g(.5,1,et),re.mark=g(18,50,K.d)*(1-s),re.markBlue=g(rt[0],rt[1],e),re.markGrow=1+.75*(1-g(rt[0],6,e)),re.stars=g(5.6,6.8,e)*(1-g(Me[1]+.3,7,e)),re.czk=g(120,520,K.d);const n=g(30,75,K.d);re.hole=ie.map*(1-g(72,100,K.d)),re.holeR=7+(re.markR*.45-7)*n,re.scrimLeft=(ee?0:.72)*et,re.scrimAll=(ee?.5:0)*et,re.photo=0,re.clouds=0,re.night=0,re.spin=0,re.sunLat=0,re.revRibbons=1,ct.update(re,Z),ca&&(Qe.alpha=g(rt[0]+.6*(rt[1]-rt[0]),rt[1],e)*(1-s),Qe.textL=ee?1:.3,Qe.time=t,Qe.d=K.d,Qe.w=oe,Qe.h=ve,Qe.dpr=oe/(me.clientWidth||oe),ca.update(Qe)),U.alpha*=1-ot}pt?.update(U,Z),Re&&nn(e,t,r,l,i,s)}const Va=new Set,Ut={log:null,measures:0},on=e=>{Va.has(e.name)&&(e.visible=!1)};let wo=0;const H={flat:0,pre:0,neonT:0,neonP:0,grow:0,ft:0,time:0,asm:0,wave:1,focal:1,far:30,dpr:1,w:1,h:1,cssW:1,cssH:1,bg:0,city:0,alpha:1,cam:null,fadeKm:100,veil:.9,sphere:{al:[0,0,0,0],ag:0,draw:[1,1,1,1],reg:[0,0],reach:0}},ln={lines:[.62,.55,.95,.5],ink:[.85,.7,1,.65]};function nn(e,t,a,l,r,i){if(H.time=t,H.asm=ie.asm,H.wave=ie.wave,H.focal=a,H.far=ie.far,H.w=oe,H.h=ve,H.cssW=me.clientWidth||1,H.cssH=me.clientHeight||1,H.dpr=oe/H.cssW,H.bg=g(-.6,.9,e),H.city=q==="ink"?g(1.9,2.8,e):q==="lines"?g(3,3.5,e):g(2.4,3.3,e),H.alpha=r*(1-ot),Te){const o=le.done?0:le.dim;H.holdA=g(.18,.3,Ae)*(1-g(40,75,K.d)),H.bake=Math.max(0,1-.17/Math.max(.17,1-o)),H.ground=1-et,H.tint=et}else H.holdA=0,H.bake=0,H.ground=1,H.tint=0;H.cam=Z.position,H.camera=Z,H.fadeKm=Math.max(1,l*.05),H.veil=0;{const o=q==="ink"?-.5:0;H.flat=g(1.55,2.25,e),H.pre=1-g(1,1.45,e);const n=q==="ink"&&O0()?1:0;H.neonT=n*(1-g(1.6,2.3,e)),H.neonP=n*(1-g(3.9,4.5,e))*(1-.6*H.city),H.neonP*=1-ot,H.asm=g(2+o,3.05+o,e),H.grow=q==="lines"?g(2.95,3.6,e):g(2.6+o,3.45+o,e),H.hatch=g(2.85+o,3.4+o,e),H.paint=g(2.75+o,3.15+o,e),U.inkH=g(4.7,5.4,e),U.inkP=g(4.55,5.1,e),H.ft+=Math.max(0,t-wo)*(1-.9*H.flat)*(q==="lines"&&Ka?.5:1);const w=g(3.3,4,e)*(1-g(5.8,6.5,e)),b=g(4.3,4.9,e),x=q==="ink"?g(110,220,K.d):1,S=1-ot;H.sphere.reg[0]=.55*w*x*(1-.6*b)*S,H.sphere.reg[1]=.8*w*x*(1-.45*b)*S,H.sphere.reach=Math.exp(Math.log(.004)+(Math.log(.45)-Math.log(.004))*g(3.35,5.2,e))}wo=t;const c=ln[q],h=g(3.8,4.4,e)*(1-i)*(1-ot),v=1-g(5.6,6.3,e),m=U.revRibbons??1,s=q==="ink"?g(500,1100,K.d):1;H.sphere.al[0]=c[0]*h*m*s,H.sphere.al[1]=c[1]*h*m*s,H.sphere.al[2]=c[2]*h,H.sphere.al[3]=c[3]*h*v*m*s,H.sphere.ag=q==="lines"?.32*g(5.4,6.4,e)*(1-i):0,H.sphere.draw[0]=g(3.9,5.4,e),H.sphere.draw[1]=g(4,5.2,e),H.sphere.draw[2]=g(3.9,4.6,e),H.sphere.draw[3]=g(3.85,4.5,e),Re.update(H)}let Ga=-1;function rn(e,t=e>=.5){const a=Math.round(e*100)/100,l=document.documentElement;l.classList.toggle("earth-night",t),a!==Ga&&(Ga=a,l.style.setProperty("--earth-dark",String(a)))}let Nt=-1,yo=-1,Vo=!1,Ao=performance.now();function Xo(){if(!Ee||!Lt||!pt)return;const e=window.scrollY||0,t=innerHeight,a=_t?1:g(Ee.start-.55*t,Ee.start+.05*t,e),l=a.toFixed(3);if(me.style.opacity!==l&&(me.style.opacity=l),a<=.001)return;jo();const r=_t?Oo:qo(e);_t?(ze.spin=0,ze.leave=0):Zl(e);const i=_t?0:po!==null?Number(po):(performance.now()-ql)/1e3,c=performance.now();Z0(Math.min(.1,(c-Ao)/1e3),Vo&&me.style.opacity>.5),Ao=c,!(_t&&r===yo&&e===Nt&&!te.dirty)&&(yo=r,Nt=e,$o(r,i),Te&&rn(Math.max(et,g(0,.4,Ae)),g(.08,.2,Ae)>.5),an(e,i),Ut.log&&Ut.log.push([performance.now(),e,r,K.d,K.tilt,K.head]),Va.size&&Oe.traverse(on),dt?.prerender(se),at?.prerender(se),se.render(Oe,Z))}async function sn(){const e=ee?256:512,t=(y,O)=>f0(y,{srgb:O,renderer:se}),a=[t("land.webp"),t("europe.webp"),t("pardubice.webp",!1)];(q==="photo"||Ft==="photo")&&a.push(t("day.webp",!0),t("day-eu.webp",!0),t("clouds.webp"),t("day-ce.webp",!0)),q==="mix"&&a.push(t("night.webp",!0),t("night-eu.webp",!0));const[l,r,i,c,h]=await Promise.all([Promise.all(a),m0(e),d0(),v0(),fetch("/assets/map/pardubice.json").then(y=>y.json())]),[v,m,s,o,n,w,b]=l;if(!It.includes(q))for(const y of[v,m])y.generateMipmaps=!1,y.minFilter=ht;const x=Object.values(h.проекты||{});Lt=no({luma:r,lumaSize:e,houses:i,projects:x},s,{side:ee?128:256,field:24,lite:ee,light:q==="light"||It.includes(q)}),q==="ink"&&Ea&&(Te=no({luma:r,lumaSize:e,houses:i,projects:x},s,{side:ee?128:256,field:24,lite:ee,light:!1,glow:!0}));let S=null,T=null;if(q==="ink"){const[y,O,G,P,I,R,f]=await Promise.all([t("land-dem.webp"),t("land-a.webp"),t("land-b.webp"),t("land-far.webp"),t("land-hor.webp"),t("neon-near.webp"),t("neon-far.webp")]);for(const d of[y,O,G,P,I,R,f])d.wrapS=d.wrapT=Ot,d.flipY=!1,d.needsUpdate=!0;G.magFilter=Vt,G.minFilter=Vt,G.generateMipmaps=!1;for(const d of[y,P,I,R,f])d.magFilter=Vt,d.minFilter=Vt,d.generateMipmaps=!1;S={dem:y,a:O,b:G,far:P,hor:I,neonN:R,neonF:f},T=(await(await fetch(lt+"land-routes.json")).json()).routes,l.push(y,O,G,P,I,R,f)}It.includes(q)&&(Re=await N0(q,s,{lite:ee,houses:i,pdb:$,land:S,routes:T}));const E=new ka,B=To($.lat,$.lon),j=Ce($.lat,$.lon);E.makeBasis(new J(...B.e),new J(...B.u),new J(-B.n[0],-B.n[1],-B.n[2])).setPosition(j[0],j[1],j[2]),Lt.group.matrixAutoUpdate=!1,Lt.group.matrix.copy(E),Te&&(Te.group.matrixAutoUpdate=!1,Te.group.matrix.copy(E));const k={land:v,eu:m};(q==="photo"||Ft==="photo")&&Object.assign(k,{day:o,dayEu:n,clouds:w,dayCe:b}),q==="mix"&&Object.assign(k,{night:o,nightEu:n}),pt=ba(q,k,c,{pdb:$,lite:ee}),Ft&&(Ve=ba(Ft,k,c,{pdb:$,lite:ee}),Ve.group.traverse(y=>{y.isGroup||(y.renderOrder+=.5)})),Oe.add(pt.group,Lt.group),Ve&&Oe.add(Ve.group),Te&&(ct=ba("dots",k,c,{pdb:$,lite:ee}),Oe.add(ct.group,Te.group),ca=Rl($),Oe.add(ca.group),at=Wl({lite:ee}),at.adoptStars(ct.group.getObjectByName("stars")),Oe.add(at.group)),Re&&(Re.cityGroup.matrixAutoUpdate=!1,Re.cityGroup.matrix.copy(E),Oe.add(Re.cityGroup,Re.sphereGroup,Re.veil),q==="ink"&&(dt=W0(),Oe.add(dt.mesh))),oe=0,jo(),pt.resize(oe,ve),Ve?.resize(oe,ve),ct?.resize(oe,ve);for(const y of l)se.initTexture(y);Oe.traverse(y=>{y.visible=!0}),se.compile(Oe,Z),$o(_t?Oo:0,0),(q==="photo"||Ft==="photo")&&un(),window.__cfigEarth={hide:Va,dbg:Ut,grab:te,grabProbe:Y0,yOf:Oa,look:q,get t(){return qo(scrollY)},knots:()=>Ee,P:K,renderer:se,scene:Oe,clouds:le,dig:()=>[mt[0],mt[1],na],dawn:()=>({yc:Q.yc,y0:Q.y0,y1:Q.y1,ok:Q.ok,D:ye.D,e:ye.e,A:ye.A,ready:at?.ready,yOfD:y=>{let O=Q.y0,G=Q.y1;for(let P=0;P<40;P++){const I=(O+G)/2;Q.map(I)<y?O=I:G=I}return(O+G)/2}}),pdbX:()=>{Z.updateMatrixWorld();const y=Ce($.lat,$.lon);return Bt.set(y[0],y[1],y[2]).project(Z),{x:(Bt.x*.5+.5)*me.clientWidth,mid:Go(),spin:be?.v}}}}let bo=null;function un(){if(bo)return;const e=ee?"4k":se.capabilities.maxTextureSize>=8192?"8k":"4k";bo=Promise.all([Ja(`day-${e}.webp`,{srgb:!0,renderer:se}),Ja(`clouds-${e}.webp`,{red:!0,renderer:se})]).then(([t,a])=>{se.initTexture(t),se.initTexture(a);const l=new Set;for(const r of[pt,Ve])for(const i of r?.setPhoto(t,a)||[])l.add(i);for(const r of l)r?.dispose();Ut.photoHi=e}).catch(t=>console.warn("[cfig] резкая Земля не подгрузилась:",t))}function Ba(){te.on=!1,Vo=!1,document.documentElement.classList.remove("earth-grab","earth-grabbing"),fa&&(Ro.ticker.remove(Xo),fa=0),me&&(me.style.opacity="0")}function pn(){if(q=n0(),Ft=null,document.body.dataset.route!==Sa||!q){Ba();return}if(!se){if(me=Jl(),!me)return;ee=Math.min(innerWidth,innerHeight)<720||matchMedia("(pointer: coarse)").matches;try{se=new l0({canvas:me,alpha:!0,antialias:!ee,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{se=null;return}se.setClearColor(0,0),se.sortObjects=!0,Oe=new _o,Z=new Lo(35,1,.05,1e6),Wt=q==="ink"?Xl(ee?$l:Ko,ee):Et(It.includes(q)?ee?jl:Wo:ee?Bo:It.includes(q)?Uo:pa),ho=sn().catch(e=>{console.warn("[cfig] Земля не поднялась:",e),Ba()}),addEventListener("resize",()=>{La(),Nt=-1},{passive:!0}),new ResizeObserver(()=>{document.body.dataset.route===Sa&&(La(),Nt=-1)}).observe(document.documentElement)}La(),Nt=-1,Ga=-1,ho.then(()=>{Re?.collect(),!fa&&document.body.dataset.route===Sa&&(Ro.ticker.add(Xo),fa=1)})}document.addEventListener("astro:before-preparation",e=>{me&&e.to&&new URL(e.to).pathname!==location.pathname&&Ba()});export{pn as init};
