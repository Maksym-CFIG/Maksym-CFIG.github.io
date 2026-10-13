import{T as Ya,a as Ma,N as Sa,n as Pa,ar as jt,L as Ra,o as $t,aN as Za,as as Ja,aO as Qa,G as Lt,V as lt,M as fe,c as Kt,b as Q,O as Ue,i as Qe,j as Ct,ae as na,D as gt,a2 as De,g as de,aP as la,B as ge,e as N,a4 as ut,p as eo,h as to,A as ao,d as Bt,f as We,K as Wt,aQ as qt,W as oo,S as no,P as lo,aR as wt}from"./three.module.CaAq71Xp.js";import{e as ro,P as rt}from"./Lab.astro_astro_type_script_index_0_lang.DctTLjHW.js";import{g as za,n as io}from"./Base.astro_astro_type_script_index_0_lang.C-6qa_Um.js";import{a as so,L as uo,b as co}from"./LineSegments2.BLbgtv0o.js";import"./router.UeToN5xW.js";const ae=6371,q={lat:50.039378,lon:15.77521},Se=3.75,et=Math.PI/180;function Le(e,t,a=ae,o=[0,0,0]){const n=e*et,i=t*et,c=Math.cos(n);return o[0]=a*c*Math.sin(i),o[1]=a*Math.sin(n),o[2]=a*c*Math.cos(i),o}function Ca(e,t){const a=e*et,o=t*et,n=Math.sin(a),i=Math.cos(a),c=Math.sin(o),m=Math.cos(o);return{e:[m,0,-c],u:[i*c,n,i*m],n:[-n*c,i,-n*m]}}function Ft(e,t){const a=e.length,o=new Float64Array(a-1),n=new Float64Array(a);for(let i=0;i<a-1;i++)o[i]=(t[i+1]-t[i])/(e[i+1]-e[i]);n[0]=o[0],n[a-1]=o[a-2];for(let i=1;i<a-1;i++)n[i]=o[i-1]*o[i]<=0?0:(o[i-1]+o[i])/2;for(let i=0;i<a-1;i++){if(o[i]===0){n[i]=0,n[i+1]=0;continue}const c=n[i]/o[i],m=n[i+1]/o[i],u=c*c+m*m;if(u>9){const d=3/Math.sqrt(u);n[i]=d*c*o[i],n[i+1]=d*m*o[i]}}return i=>{if(i<=e[0])return t[0];if(i>=e[a-1])return t[a-1];let c=0;for(;i>e[c+1];)c++;const m=e[c+1]-e[c],u=(i-e[c])/m,d=u*u,l=d*u;return(2*l-3*d+1)*t[c]+(l-2*d+u)*m*n[c]+(-2*l+3*d)*t[c+1]+(l-d)*m*n[c+1]}}function nt(e){const t=e.map(n=>n.t),a=Object.keys(e[0]).filter(n=>n!=="t"),o={};for(const n of a){const i=e.map(c=>n==="d"?Math.log(c[n]):c[n]);o[n]=Ft(t,i)}return(n,i)=>{for(const c of a)i[c]=c==="d"?Math.exp(o[c](n)):o[c](n);return i}}function fo(e,t,a,o,n,i,c,m){const u=Ca(e,t);Le(e,t,ae,m);const d=o*et,l=n*et,s=u.n[0]*Math.cos(l)+u.e[0]*Math.sin(l),r=u.n[1]*Math.cos(l)+u.e[1]*Math.sin(l),y=u.n[2]*Math.cos(l)+u.e[2]*Math.sin(l),g=Math.cos(d)*a,f=Math.sin(d)*a;i[0]=m[0]+u.u[0]*g-s*f,i[1]=m[1]+u.u[1]*g-r*f,i[2]=m[2]+u.u[2]*g-y*f,c[0]=s,c[1]=r,c[2]=y}const He="/assets/earth/",yt={lon0:-12,lon1:44,lat0:34,lat1:62},At={lon0:9.5,lon1:22.5,lat0:46.5,lat1:53.5},vo=new Ya;function mo(e,{srgb:t=!1,renderer:a=null}={}){return new Promise((o,n)=>{vo.load(He+e,i=>{i.colorSpace=t?Ma:Sa,i.wrapS=Pa,i.wrapT=jt,i.minFilter=Ra,i.magFilter=$t,a&&(i.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy())),o(i)},void 0,n)})}function ra(e,{srgb:t=!1,red:a=!1,renderer:o=null}={}){const n=new Za;return n.setOptions({imageOrientation:"flipY",premultiplyAlpha:"none"}),new Promise((i,c)=>{n.load(He+e,m=>{const u=new Ja(m);u.colorSpace=t?Ma:Sa,u.flipY=!1,a&&(u.format=Qa),u.wrapS=Pa,u.wrapT=jt,u.minFilter=Ra,u.magFilter=$t,o&&(u.anisotropy=Math.min(8,o.capabilities.getMaxAnisotropy())),u.needsUpdate=!0,i(u)},void 0,c)})}async function po(e=.6){const t=await(await fetch(He+"lines.bin")).arrayBuffer(),a=new DataView(t);let o=0;const n=a.getUint32(o,!0);o+=4;const i=[],c=[0,0,0];for(let m=0;m<n;m++){const u=a.getUint32(o,!0),d=a.getUint32(o+4,!0);o+=8;const l=new Uint32Array(u);for(let f=0;f<u;f++)l[f]=a.getUint32(o,!0),o+=4;const s=new Float32Array(d),r=new Float32Array(d);for(let f=0;f<d;f++)s[f]=a.getInt16(o,!0)/180,r[f]=a.getInt16(o+2,!0)/180,o+=4;const y=new Float32Array((d-u)*6);let g=0;for(let f=0;f<u;f++){const A=l[f],L=f+1<u?l[f+1]:d;for(let z=A;z<L-1;z++)Le(r[z],s[z],ae+e,c),y[g++]=c[0],y[g++]=c[1],y[g++]=c[2],Le(r[z+1],s[z+1],ae+e,c),y[g++]=c[0],y[g++]=c[1],y[g++]=c[2]}i.push(y.subarray(0,g))}return i}async function ho(e=512){const t=await(await fetch(He+"pardubice.webp")).blob(),a=await createImageBitmap(t,{resizeWidth:e,resizeHeight:e,resizeQuality:"medium"}),o=document.createElement("canvas");o.width=e,o.height=e;const n=o.getContext("2d",{willReadFrequently:!0});n.drawImage(a,0,0);const i=n.getImageData(0,0,e,e).data,c=new Float32Array(e*e);for(let m=0;m<c.length;m++)c[m]=i[m*4+1]/255;return a.close?.(),c}async function xo(){const e=await(await fetch("/assets/map/pardubice-houses.bin")).arrayBuffer(),t=new DataView(e),a=t.getUint32(0,!0);let o=0,n=4;for(let r=0;r<a;r++){const y=t.getUint16(n,!0);o+=y,n+=6+y*4}const i=new Uint32Array(a),c=new Uint16Array(a),m=new Float32Array(a),u=new Float32Array(a),d=new Float32Array(o),l=new Float32Array(o);n=4;let s=0;for(let r=0;r<a;r++){const y=t.getUint16(n,!0);c[r]=y,m[r]=t.getUint8(n+3)/2,u[r]=t.getUint16(n+4,!0),n+=6,i[r]=s;for(let g=0;g<y;g++)d[s]=t.getUint16(n,!0)/65535,l[s]=t.getUint16(n+2,!0)/65535,n+=4,s++}return{n:a,start:i,cnt:c,h:m,area:u,u:d,v:l}}const Xt=`
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
`,Ie=3.75,ne={h:13,n:1024,lo:195,hi:365,far:{h:48,n:1024,lo:180,hi:1150},hor:{h:60,n:512,lo:180,hi:1610,cz:-50}},ze=24,Yt=(()=>{try{return new URLSearchParams(location.search).get("fx")==="scan"?1:0}catch{return 0}})(),Ta=`
#define FX ${Yt}
#define SCAN_P 8.0
#define SCAN_D 3.6
`,go={INK1:"#111e2d",INK2:"#29455c",INK3:"#4d677d",BLUE:"#2A6DAA",BLUE2:"#3f9be0",PALE:"#5FA8E0",GOLD:"#8a5f10",PAPER:"#d3d9de"},wo=e=>{const t=parseInt(e.slice(1),16),a=o=>(o/255).toFixed(4);return`vec3(${a(t>>16)}, ${a(t>>8&255)}, ${a(t&255)})`},tt=Object.entries(go).map(([e,t])=>`#define C_${e} ${wo(t)}`).join(`
`),Ke={blending:Ct,blendSrc:Qe,blendDst:Ue,blendSrcAlpha:Qe,blendDstAlpha:Ue},Da=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float n2(vec2 x) {
  vec2 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm2(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Zt=`
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
`,yo=e=>`
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
${Ta}
#if FX == 1
varying float vZf;
#endif
#endif
${Zt}
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
`,Ao=e=>`
#define ${e}
${tt}
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
${Ta}
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
${Da}
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
`,Ia=()=>`
#define LAND_H ${ne.h.toFixed(1)}
#define LAND_N ${ne.n.toFixed(1)}
#define DEM_LO ${ne.lo.toFixed(1)}
#define DEM_HI ${ne.hi.toFixed(1)}
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
#define FAR_H ${ne.far.h.toFixed(1)}
#define FAR_N ${ne.far.n.toFixed(1)}
#define FAR_LO ${ne.far.lo.toFixed(1)}
#define FAR_HI ${ne.far.hi.toFixed(1)}
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
`,ia=e=>`
#define ${e}
uniform float uRelief;
uniform float uCity;
uniform float uPre;
varying vec2 vP;
varying float vElev;
varying float vDepth;
#ifdef P_INK
${Ia()}
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
`,Ea=`
#define HOR_H ${ne.hor.h.toFixed(1)}
#define HOR_N ${ne.hor.n.toFixed(1)}
#define HOR_LO ${ne.hor.lo.toFixed(1)}
#define HOR_HI ${ne.hor.hi.toFixed(1)}
#define HOR_CZ ${ne.hor.cz.toFixed(1)}
#define FAR_EDGE ${ne.far.h.toFixed(1)}
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
`,sa=`
${Ea}
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
`,ua=e=>`
${tt}
${Ea}
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
`,bo=`
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
`,_o=e=>`
#define ${e}
#define FAB_A ${e==="P_LINES"?"0.22":"0.1"}
#define FAB_C C_INK2
${tt}
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
${e==="P_INK"?Ia():""}
${Da}
${Xt}
${e==="P_INK"?bo:""}

void main() {
  vec2 p = vP;
  float rr = length(p);
  float fade = 1.0 - smoothstep(9.0, 15.0, rr);
#ifdef P_INK
  // Земля ink — до горизонта (дальний рельеф ±FAR_H км).
  fade = 1.0 - smoothstep(0.8, 0.97, max(abs(p.x), abs(p.y)) / FAR_H);
#endif
  vec2 muv = p / ${(Ie*2).toFixed(1)} + 0.5;
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
`,Lo=e=>`
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
${Zt}
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
`,Fo=e=>`
#define ${e}
${tt}
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
`,Mt=24,Mo=`
varying vec2 vPx;
uniform vec2 uRes;
void main() { vPx = (position.xy * 0.5 + 0.5) * uRes; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,So=`
uniform vec4 uRects[${Mt}];
uniform int uN;
uniform float uFeather;
uniform float uStrength;
uniform vec2 uRes;
varying vec2 vPx;
void main() {
  float a = 0.0;
  for (int i = 0; i < ${Mt}; i++) {
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
`;function Po(){const e=new ge;return e.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}async function Ro(){const e=await(await fetch(He+"streets.bin")).arrayBuffer(),t=new DataView(e);let a=0;const o=t.getUint32(a,!0);a+=4;const n=[];for(let i=0;i<o;i++){const c=t.getUint32(a,!0),m=t.getUint32(a+4,!0);a+=8;const u=[];for(let s=0;s<c;s++)u.push(t.getUint32(a,!0)),a+=4;const d=new Float32Array(m*2);for(let s=0;s<m;s++)d[s*2]=(t.getInt16(a,!0)/16384-.5)*Ie*2,d[s*2+1]=(t.getInt16(a+2,!0)/16384-.5)*Ie*2,a+=4;const l=[];for(let s=0;s<c;s++){const r=u[s],y=s+1<c?u[s+1]:m,g=[];for(let f=r;f<y;f++)g.push([d[f*2],d[f*2+1]]);l.push(g)}n.push(l)}return n}async function zo(e){const t=await(await fetch(He+"lines.bin")).arrayBuffer(),a=new DataView(t);let o=0;const n=a.getUint32(o,!0);o+=4;const i=[];for(let c=0;c<n;c++){const m=a.getUint32(o,!0),u=a.getUint32(o+4,!0);o+=8;const d=[];for(let r=0;r<m;r++)d.push(a.getUint32(o,!0)),o+=4;const l=new Float32Array(u*2);for(let r=0;r<u;r++)l[r*2]=a.getInt16(o,!0)/180,l[r*2+1]=a.getInt16(o+2,!0)/180,o+=4;const s=[];for(let r=0;r<m;r++){const y=d[r],g=r+1<m?d[r+1]:u,f=[];for(let A=y;A<g;A++)f.push([l[A*2],l[A*2+1]]);s.push(ka(f,c===2?e*.2:e))}i.push(s)}return i}async function Co(e){const t=await(await fetch(He+"region.bin")).arrayBuffer(),a=new DataView(t);let o=0;const n=a.getUint32(o,!0);o+=4;const i=[];for(let c=0;c<n;c++){const m=a.getUint32(o,!0),u=a.getUint32(o+4,!0);o+=8;const d=[];for(let r=0;r<m;r++)d.push(a.getUint32(o,!0)),o+=4;const l=[];for(let r=0;r<u;r++)l.push([a.getInt16(o,!0)/180,a.getInt16(o+2,!0)/180]),o+=4;const s=[];for(let r=0;r<m;r++)s.push(ka(l.slice(d[r],r+1<m?d[r+1]:u),e));i.push(s)}return i}function ka(e,t){if(e.length<3)return e;const a=new Uint8Array(e.length);a[0]=a[e.length-1]=1;const o=[[0,e.length-1]];for(;o.length;){const[n,i]=o.pop();let c=0,m=-1;const[u,d]=e[n],[l,s]=e[i],r=l-u,y=s-d,g=Math.hypot(r,y)||1e-9;for(let f=n+1;f<i;f++){const A=Math.abs((e[f][0]-u)*y-(e[f][1]-d)*r)/g;A>c&&(c=A,m=f)}c>t&&(a[m]=1,o.push([n,m],[m,i]))}return e.filter((n,i)=>a[i])}const To=`
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
${Zt}
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
`,Do=e=>`
#define ${e}
${tt}
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
`,Io=`
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
`,Eo=`
${tt}
uniform float uAlpha;
uniform float uHatch;
varying vec2 vUV;
varying float vSh;
varying float vA;
varying float vPx;
varying float vDel;
varying float vL;
varying float vV;
${Xt}
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
`;function ko(e,t){const a=t?400:150,o=1.6/1e3;let n=0;for(let s=0;s<e.n;s++)e.area[s]>=a&&(n+=e.cnt[s]);const i=new Float32Array(n*4*4),c=new Float32Array(n*4*2),m=new Float32Array(n*4*2),u=new Float32Array(n*4*3);let d=0;for(let s=0;s<e.n;s++){if(e.area[s]<a)continue;const r=e.start[s],y=e.cnt[s],g=x=>(e.u[r+x]-.5)*Ie*2,f=x=>(e.v[r+x]-.5)*Ie*2;let A=0,L=0;for(let x=0;x<y;x++)A+=g(x),L+=f(x);A/=y,L/=y;const z=Math.max(3,e.h[s])*o,U=Math.hypot(A/Ie,L/Ie)/2,H=Math.min(1,U*2)*.8+s*7919%97/97*.2,C=Math.sqrt(e.area[s])/1e3;for(let x=0;x<y;x++){const G=(x+1)%y,X=g(x),V=f(x),$=g(G),B=f(G);let p=-(B-V),b=$-X;const _=Math.hypot(p,b)||1;p/=_,b/=_,p*((X+$)/2-A)+b*((V+B)/2-L)<0&&(p=-p,b=-b);for(let P=0;P<4;P++){const v=d*4+P;i.set([X,V,$,B],v*4),c.set([P&1,P>>1],v*2),m.set([p,b],v*2),u.set([z,H,C],v*3)}d++}}const l=new ge;return l.setAttribute("position",new N(new Float32Array(n*4*3),3)),l.setAttribute("aE",new N(i,4)),l.setAttribute("aC",new N(c,2)),l.setAttribute("aN",new N(m,2)),l.setAttribute("aHD",new N(u,3)),l.setIndex(Tt(n)),l}function No(e,t){const a=t?300:80,o=1.6/1e3;let n=0;for(let r=0;r<e.n;r++)e.area[r]<a||(n+=e.cnt[r]*(e.area[r]>=300||e.h[r]>=11?2:1));const i=new Float32Array(n*4*4),c=new Float32Array(n*4*2),m=new Float32Array(n*4*4),u=new Float32Array(n*4);let d=0;const l=(r,y,g,f,A,L,z,U,H)=>{for(let C=0;C<4;C++){const x=d*4+C;i.set([r,y,g,f],x*4),c.set([A,L],x*2),m.set([C>>1,C&1?1:-1,z,U],x*4),u[x]=H}d++};for(let r=0;r<e.n;r++){if(e.area[r]<a)continue;const y=e.start[r],g=e.cnt[r],f=Math.max(3,e.h[r])*o;let A=0,L=0;for(let x=0;x<g;x++)A+=e.u[y+x],L+=e.v[y+x];A=(A/g-.5)*2,L=(L/g-.5)*2;const z=Math.min(1,Math.hypot(A,L))*.8+r*7919%97/97*.2,U=Math.sqrt(e.area[r])/1e3,H=x=>(e.u[y+x]-.5)*Ie*2,C=x=>(e.v[y+x]-.5)*Ie*2;for(let x=0;x<g;x++){const G=(x+1)%g;l(H(x),C(x),H(G),C(G),1,1,f,z,U)}if(e.area[r]>=300||e.h[r]>=11)for(let x=0;x<g;x++)l(H(x),C(x),H(x),C(x),0,1,f,z,U)}const s=new ge;return s.setAttribute("position",new N(new Float32Array(n*4*3),3)),s.setAttribute("aP",new N(i,4)),s.setAttribute("aY",new N(c,2)),s.setAttribute("aI",new N(m,4)),s.setAttribute("aSz",new N(u,1)),s.setIndex(Tt(n)),s}function Tt(e){const t=new Uint32Array(e*6);for(let a=0;a<e;a++){const o=a*4;t.set([o,o+1,o+2,o+2,o+1,o+3],a*6)}return new N(t,1)}function Oo(e,t){const{S:a,M:o}=t,n=[0,1,2,3,5],i=5.6,c=[];let m=0;for(const p of n)for(const b of e[p]){let _=[];for(const P of b)Math.hypot(P[0],P[1])<=i?_.push(P):(_.length>1&&c.push({l:p,pts:_}),_=[]);_.length>1&&c.push({l:p,pts:_})}for(const p of c){let b=0;for(let _=1;_<p.pts.length;_++)b+=Math.hypot(p.pts[_][0]-p.pts[_-1][0],p.pts[_][1]-p.pts[_-1][1]);p.len=b,m+=b}const u=Math.max(.2,m/5200),d=[],l=(p,b)=>{let _=0;for(let P=1;P<p.pts.length;P++){const v=p.pts[P-1],M=p.pts[P],F=Math.hypot(M[0]-v[0],M[1]-v[1]);if(_+F>=b||P===p.pts.length-1){const T=F>0?Math.min(1,(b-_)/F):0;return[v[0]+(M[0]-v[0])*T,v[1]+(M[1]-v[1])*T]}_+=F}return p.pts[p.pts.length-1]};for(const p of c){if(p.len<.03)continue;const b=Math.max(1,Math.round(p.len/u));for(let _=0;_<b;_++){const P=p.len*_/b,v=p.len*(_+1)/b,M=[];for(let W=0;W<o;W++)M.push(l(p,P+(v-P)*W/(o-1)));M[o-1][0]<M[0][0]&&M.reverse();let F=0,T=0;for(const W of M)F+=W[0],T+=W[1];d.push({l:p.l,pts:M,cx:F/o,cz:T/o})}}const s=ze/(2*i),r=ze/a,y=p=>{const b=Math.sin(p*12.9898)*43758.5453;return b-Math.floor(b)};for(const p of d){const b=Math.min(a-1,Math.max(0,Math.round((p.cz*s+ze/2)/r-.5)));p.zl=-ze/2+(b+.5)*r;let _=1/0,P=-1/0;for(const F of p.pts)_=Math.min(_,F[0]),P=Math.max(P,F[0]);const v=(_+P)/2*s,M=Math.max(.06,(P-_)/2*s);p.x0=v-M,p.x1=v+M,p.seed=y(b)}const g=new Set;if(t.look==="lines"){const p=new Map;for(const b of d)p.has(b.zl)||p.set(b.zl,[]),p.get(b.zl).push(b);for(const[b,_]of p){g.add(b),_.sort((v,M)=>v.x0+v.x1-(M.x0+M.x1));const P=_.map(v=>(v.x0+v.x1)/2);_.forEach((v,M)=>{v.x0=M===0?-ze/2:(P[M-1]+P[M])/2,v.x1=M===_.length-1?ze/2:(P[M]+P[M+1])/2,v.pts[0][0]>v.pts[v.pts.length-1][0]&&(v.pts=v.pts.slice().reverse())}),_.forEach((v,M)=>{const F=v.pts[0],T=v.pts[v.pts.length-1],W=_[M-1],ve=_[M+1],Ae=W?[(W.pts[W.pts.length-1][0]+F[0])/2,(W.pts[W.pts.length-1][1]+F[1])/2]:F,we=ve?[(ve.pts[0][0]+T[0])/2,(ve.pts[0][1]+T[1])/2]:T;v.jd=[Ae[0],Ae[1],we[0],we[1]]})}}const f=96;for(let p=0;p<a;p++){const b=-ze/2+(p+.5)*r,_=[];for(let P=0;P<f;P++)_.push([0,0]);d.push({l:g.has(b)?10:9,pts:_,cx:0,cz:0,x0:-ze/2,x1:ze/2,zl:b,seed:y(p),field:!0})}const A=d.length,L=d.reduce((p,b)=>p+b.pts.length-1,0),z=new Float32Array(L*4*4),U=new Float32Array(L*4*4),H=new Float32Array(L*4*2),C=new Float32Array(L*4*4),x=new Float32Array(L*4*4);let G=0;const X=new Set,V=(p,b)=>Math.round(p/.05)+","+Math.round(b/.05);for(const p of t.first||[])for(let b=1;b<p.pts.length;b++){const[_,P]=p.pts[b-1],[v,M]=p.pts[b];if(Math.max(Math.abs(_),Math.abs(P),Math.abs(v),Math.abs(M))>6)continue;const F=Math.ceil(Math.hypot(v-_,M-P)/.025);for(let T=0;T<=F;T++){const W=_+(v-_)*T/F,ve=P+(M-P)*T/F;for(let Ae=-1;Ae<=1;Ae++)for(let we=-1;we<=1;we++)X.add(V(W+Ae*.05,ve+we*.05))}}const $=p=>{if(!X.size||p.field)return!1;let b=0;for(const _ of p.pts)X.has(V(_[0],_[1]))&&b++;return b>=p.pts.length*.6};for(const p of d){let b=Math.min(1,Math.hypot(p.cx,p.cz)/5.5);$(p)&&(b*=.3);const _=p.pts.length;for(let P=0;P<_-1;P++){const v=p.pts[P],M=p.pts[P+1];for(let F=0;F<4;F++){const T=G*4+F;z.set([v[0],v[1],M[0],M[1]],T*4),U.set([p.x0,p.x1,p.zl,b],T*4),H.set([P/(_-1),(P+1)/(_-1)],T*2),C.set([F>>1,F&1?1:-1,p.l,p.seed],T*4),p.jd&&x.set(p.jd,T*4)}G++}}const B=new ge;return B.setAttribute("position",new N(new Float32Array(L*4*3),3)),B.setAttribute("aT",new N(z,4)),B.setAttribute("aSU",new N(U,4)),B.setAttribute("aUU",new N(H,2)),B.setAttribute("aInfo",new N(C,4)),B.setAttribute("aJD",new N(x,4)),B.setIndex(Tt(L)),{geometry:B,K:A,gap:r}}function Uo(e,t,a,o){const n=e.map((f,A)=>f.map(L=>({kind:A,pts:L}))),i=[].concat(...n);a&&a.forEach((f,A)=>f.forEach(L=>i.push({kind:5+A,pts:L})));const c=o?Le(o.lat,o.lon,1):[0,0,1];if(t==="lines"){for(let f=-80;f<=80;f+=10){const A=[];for(let L=-180;L<=180;L+=3)A.push([L,f]);i.push({kind:4,pts:A})}for(let f=-180;f<180;f+=15){const A=[];for(let L=-84;L<=84;L+=3)A.push([f,L]);i.push({kind:4,pts:A})}}let m=0;for(const f of i)m+=Math.max(0,f.pts.length-1);const u=new Float32Array(m*4*3),d=new Float32Array(m*4*3),l=new Float32Array(m*4*4),s=[0,0,0],r=[0,0,0];let y=0;for(const f of i){const A=f.pts.length;if(A<2)continue;const L=f.kind===2?1.2:.6;for(let z=0;z<A-1;z++){Le(f.pts[z][1],f.pts[z][0],ae+L,s),Le(f.pts[z+1][1],f.pts[z+1][0],ae+L,r);for(let U=0;U<4;U++){const H=y*4+U;u.set(s,H*3),d.set(r,H*3);let C=(z+(U>>1))/(A-1);if(f.kind>=5){const x=U>>1?r:s,G=Math.hypot(x[0],x[1],x[2]);C=Math.acos(Math.min(1,(x[0]*c[0]+x[1]*c[1]+x[2]*c[2])/G))*ae/1e3}l.set([U>>1,U&1?1:-1,f.kind,C],H*4)}y++}}const g=new ge;return g.setAttribute("position",new N(u,3)),g.setAttribute("aA",new N(u,3)),g.setAttribute("aB",new N(d,3)),g.setAttribute("aInfo",new N(l,4)),g.setIndex(Tt(m)),g}const Ho={lines:"P_LINES",ink:"P_INK"};async function Go(e,t,a){const o=Ho[e],n=a.lite,[i,c,m]=await Promise.all([Ro(),zo(n?.08:.04),Co(.01)]),u=new Lt,d=new Lt,l=new lt(1,1),s={uTime:{value:0},uAsm:{value:0},uWave:{value:1},uFocal:{value:1e3},uFar:{value:30},uDpr:{value:1},uBg:{value:0},uAlpha:{value:1},uRes:{value:l},uFlat:{value:0},uFT:{value:0},uPaint:{value:0}},r=Oo(i,{S:n?110:200,M:n?12:16,look:e,first:e==="ink"?a.routes:null}),y=w=>new Q({vertexShader:yo(w),fragmentShader:Ao(w),uniforms:{...s,uGap:{value:r.gap},uPass:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1,side:gt,...Ke}),g=y(e==="ink"?"P_INK":o),f=new fe(r.geometry,g);f.name="strands",f.frustumCulled=!1,f.renderOrder=2,u.add(f);let A=null,L=null;if(e==="ink"){const w=y(`P_INK
#define INK_FG`);w.uniforms={...g.uniforms,uPass:{value:0}},A=new fe(r.geometry,w),A.frustumCulled=!1,A.renderOrder=3,u.add(A);const Z=y(`P_INK
#define INK_FG`);Z.uniforms={...g.uniforms,uPass:{value:1}},L=new fe(r.geometry,Z),L.frustumCulled=!1,L.renderOrder=3,u.add(L)}const z=e==="ink",U=z?n?300:480:1,H=new Kt(z?96:32,z?96:32,U,U);H.rotateX(-Math.PI/2);const C=new Q({vertexShader:ia(o),fragmentShader:_o(o),uniforms:{uMap:{value:t},uTime:s.uTime,uBg:{value:0},uCity:{value:0},uAlpha:{value:1},uHatch:{value:0},uRelief:{value:1},uPre:{value:0},uNN:{value:a.land?.neonN||null},uNF:{value:a.land?.neonF||null},uNeonT:{value:0},uNeonP:{value:0},uDem:{value:a.land?.dem||null},uDemF:{value:a.land?.far||null},uLA:{value:a.land?.a||null},uLB:{value:a.land?.b||null}},transparent:!0,depthWrite:!1,depthTest:z,depthFunc:na,...Ke}),x=new fe(H,C);if(z){const w=new Q({vertexShader:ia(o),fragmentShader:"void main() { gl_FragColor = vec4(0.0); }",uniforms:C.uniforms,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0}),Z=new fe(H,w);Z.name="washDepth",Z.position.y=-.003,Z.frustumCulled=!1,Z.renderOrder=.9,u.add(Z)}let G=null,X=null;if(z&&a.land?.hor){const w=new Kt(ne.hor.h*2,ne.hor.h*2,a.lite?200:320,a.lite?200:320);w.rotateX(-Math.PI/2),w.translate(0,0,ne.hor.cz);const Z={uHor:{value:a.land.hor},uHEx:{value:3.4},uCurv:{value:1},uPre:C.uniforms.uPre,uAlpha:C.uniforms.uAlpha,uBg:C.uniforms.uBg},xe=new Q({vertexShader:sa,fragmentShader:ua(!0),uniforms:Z,transparent:!0,colorWrite:!1,depthWrite:!0,depthTest:!0});X=new Q({vertexShader:sa,fragmentShader:ua(!1),uniforms:Z,transparent:!0,depthWrite:!1,depthTest:!0,depthFunc:na,...Ke});const re=new fe(w,xe);re.name="horDepth",re.frustumCulled=!1,re.renderOrder=.88,re.position.y=-.003,G=new fe(w,X),G.name="horizon",G.frustumCulled=!1,G.renderOrder=.95,G.position.y=-.003,G.userData.depth=re,u.add(re,G)}x.name="wash",x.position.y=-.003,x.frustumCulled=!1,x.renderOrder=1,u.add(x);let V=null,$=null;a.houses&&($=new Q({vertexShader:To,fragmentShader:Do(o),uniforms:{uGrow:{value:0},uFocal:s.uFocal,uFar:s.uFar,uDpr:s.uDpr,uRes:{value:l},uAlpha:{value:1},uHW:{value:.5}},transparent:!0,depthWrite:!1,depthTest:!1,side:gt,...Ke}),V=new fe(No(a.houses,n),$),V.name="houses2",V.frustumCulled=!1,V.renderOrder=3,u.add(V));let B=null,p=null;e==="ink"&&a.houses&&(p=new Q({vertexShader:Io,fragmentShader:Eo,uniforms:{uGrow:$.uniforms.uGrow,uFocal:s.uFocal,uFar:s.uFar,uDpr:s.uDpr,uAlpha:$.uniforms.uAlpha,uHatch:{value:0}},transparent:!0,depthWrite:!1,depthTest:!1,side:gt,...Ke}),B=new fe(ko(a.houses,n),p),B.name="walls",B.frustumCulled=!1,B.renderOrder=2,u.add(B));const b=Uo(c,e,m,a.pdb),_={lines:[.7,.6,2.2,.55,.45],ink:[.65,.55,2.2,.5,0]}[e],P={uCam:{value:new de},uR:{value:ae},uDpr:s.uDpr,uTime:s.uTime,uFadeKm:{value:100},uRes:{value:l},uW:{value:new De(_[0],_[1],_[2],_[3])},uWG:{value:_[4]},uAl:{value:new De},uAG:{value:0},uDraw:{value:new De(1,1,1,1)},uW2:{value:new lt(.5,.65)},uAl2:{value:new lt},uReach:{value:0}},v=new Q({vertexShader:Lo(o),fragmentShader:Fo(o),uniforms:P,transparent:!0,depthWrite:!1,depthTest:!1,side:gt,...Ke}),M=new fe(b,v);M.name="sphere",M.frustumCulled=!1,M.renderOrder=-10,d.add(M);const F=Array.from({length:Mt},()=>new De),T=new Q({vertexShader:Mo,fragmentShader:So,uniforms:{uRects:{value:F},uN:{value:0},uFeather:{value:90},uStrength:{value:.85},uRes:{value:l}},transparent:!0,depthWrite:!1,depthTest:!1,blending:Ct,blendSrc:la,blendDst:Ue,blendSrcAlpha:la,blendDstAlpha:Ue});e==="lines"&&Yt===1&&(g.uniforms.uRects=T.uniforms.uRects,g.uniforms.uN=T.uniforms.uN),z&&(C.uniforms.uRects=T.uniforms.uRects,C.uniforms.uN=T.uniforms.uN);const W=new fe(Po(),T);W.frustumCulled=!1,W.renderOrder=95;let ve=[];const Ae="main :is(h2, h3, p, blockquote, .arrow-link, .coverflow__item, .leader__name, .direction__head)";function we(){ve=Array.from(document.querySelectorAll(Ae))}return we(),{cityGroup:u,sphereGroup:d,veil:W,collect:we,textRects:{rects:T.uniforms.uRects,n:T.uniforms.uN},update(w){s.uTime.value=w.time,s.uAsm.value=w.asm,s.uWave.value=w.wave,s.uFocal.value=w.focal,s.uFar.value=w.far,s.uDpr.value=w.dpr,s.uBg.value=w.bg,s.uAlpha.value=w.alpha,s.uFlat.value=w.flat||0,s.uFT.value=w.ft??w.time,V&&($.uniforms.uGrow.value=w.grow||0,$.uniforms.uAlpha.value=w.alpha,V.visible=w.alpha>.002&&(w.grow||0)>.001),B&&(p.uniforms.uHatch.value=w.hatch||0,B.visible=V.visible&&(w.hatch||0)>.001),l.set(w.w,w.h),f.visible=w.alpha>.002,A&&(A.visible=L.visible=f.visible&&w.asm>.001),s.uPaint.value=w.paint||0,C.uniforms.uHatch.value=w.hatch||0,C.uniforms.uBg.value=w.bg,C.uniforms.uCity.value=w.city,C.uniforms.uPre.value=w.pre||0,C.uniforms.uNeonT.value=w.neonT||0,C.uniforms.uNeonP.value=w.neonP||0,G&&(G.visible=G.userData.depth.visible=x.visible&&(w.pre||0)>.001),C.uniforms.uAlpha.value=w.alpha,x.visible=w.alpha>.002&&w.bg+w.city>.002,P.uCam.value.copy(w.cam),P.uFadeKm.value=w.fadeKm,P.uAl.value.set(w.sphere.al[0],w.sphere.al[1],w.sphere.al[2],w.sphere.al[3]),P.uAG.value=w.sphere.ag,P.uDraw.value.set(w.sphere.draw[0],w.sphere.draw[1],w.sphere.draw[2],w.sphere.draw[3]),P.uAl2.value.set(w.sphere.reg?.[0]||0,w.sphere.reg?.[1]||0),P.uReach.value=w.sphere.reach||0,M.visible=w.sphere.al[0]+w.sphere.al[1]+w.sphere.al[2]+w.sphere.al[3]+w.sphere.ag+P.uAl2.value.x+P.uAl2.value.y>.002;let Z=0;const xe=w.w/w.cssW,re=w.h/w.cssH,Fe=18;for(let Me=0;Me<ve.length&&Z<Mt;Me++){const Re=ve[Me];if(Re.style.visibility==="hidden"||(Re.classList.contains("coverflow__item")?parseFloat(Re.style.getPropertyValue("--op")):1)<.35)continue;const me=Re.getBoundingClientRect();me.width<2||me.bottom<-40||me.top>w.cssH+40||me.right<0||me.left>w.cssW||me.width*me.height>w.cssW*w.cssH*.5||(F[Z].set((me.left-Fe)*xe,(w.cssH-me.bottom-Fe)*re,(me.right+Fe)*xe,(w.cssH-me.top+Fe)*re),Z++)}T.uniforms.uN.value=Z,T.uniforms.uFeather.value=110*w.dpr,T.uniforms.uStrength.value=w.veil,W.visible=Z>0&&w.veil>.002}}}const Na=()=>new URLSearchParams(location.search).get("neon")!=="0",Ne=18,Ko=`
uniform mat4 uProjInv;
uniform mat4 uCamWorld;
uniform vec3 uCamPos;
uniform vec2 uRes;
uniform float uTime;
uniform float uAlpha;
uniform vec3 uP;           // Пардубице (единичный вектор)
uniform vec4 uAx[${Ne}];   // xyz — ось большого круга, w — фаза
uniform vec4 uRay[${Ne}];  // x — период (с), y — длина (рад), z — яркость
uniform vec4 uRects[24];
uniform int uN;
#define RS ${(ae*1.006).toFixed(1)}
#define DUTY 0.34
float textSoft() {
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
void main() {
  vec2 ndc = gl_FragCoord.xy / uRes * 2.0 - 1.0;
  vec4 v = uProjInv * vec4(ndc, 1.0, 1.0);
  vec3 dir = normalize((uCamWorld * vec4(v.xyz / v.w, 0.0)).xyz);
  float b = dot(uCamPos, dir);
  vec3 o = uCamPos - dir * b;
  float h2 = RS * RS - dot(o, o);
  if (h2 <= 0.0) discard;
  vec3 n = (o - dir * sqrt(h2)) / RS;
  float limb = smoothstep(0.03, 0.25, dot(n, -dir));
  float a = 0.0, hot = 0.0, glowA = 0.0;
  for (int i = 0; i < ${Ne}; i++) {
    vec4 ax = uAx[i];
    vec4 ry = uRay[i];
    // Путь кометы: голова идёт DUTY периода, остальное время луч пуст.
    float cyc = fract(uTime / ry.x + ax.w);
    if (cyc > DUTY) continue;
    float d = dot(n, ax.xyz);
    float fw = max(fwidth(d), 1e-7);
    float px = abs(d) / fw;
    if (px > 14.0) continue;
    vec3 t = cross(ax.xyz, uP);
    float s = atan(dot(n, t), dot(n, uP));
    if (s < 0.0) continue;
    float len = ry.y;
    float sh = cyc / DUTY * len * 1.25;
    float x = sh - s;
    if (x < -0.004) continue;
    // Хвост — экспонента (~0.35 длины пути), голова мягкая.
    float tail = exp(-max(x, 0.0) / (0.35 * len)) * smoothstep(-0.004, 0.0015, x);
    // К концу пути комета тает и тоньше.
    float k = 1.0 - smoothstep(0.45 * len, len, s);
    float w = 0.55 + 0.45 * k;
    float core = 1.0 - smoothstep(0.35 * w, 1.1 * w, px);
    float glow = exp(-px * px / (36.0 * w * w));
    float c = tail * k * ry.z;
    a += core * 0.95 * c;
    glowA += glow * 0.38 * c;
    hot = max(hot, core * c * (1.0 - smoothstep(0.0, 0.01, abs(x))));
  }
  // Источник и редкая волна по поверхности.
  float ang = acos(clamp(dot(n, uP), -1.0, 1.0));
  float fwa = max(fwidth(ang), 1e-7);
  float pp = ang / fwa;
  float src = (1.0 - smoothstep(1.2, 2.6, pp)) * 0.8 + exp(-pp * pp / 50.0) * 0.3;
  float wp = fract(uTime / 7.0);
  float rho = wp * 0.3;
  float ring = (1.0 - smoothstep(0.4, 1.3, abs(ang - rho) / fwa)) * (1.0 - wp) * (1.0 - wp) * 0.22 * smoothstep(0.0, 0.05, wp);
  a += src + ring;
  hot = max(hot, 1.0 - smoothstep(0.8, 1.8, pp));
  float tot = min(a + glowA, 0.9) * limb * uAlpha * textSoft();
  if (tot < 0.003) discard;
  // Сердцевина — голубая, свечение — чуть менее насыщенное.
  vec3 cc = vec3(0.561, 0.827, 1.0);
  vec3 cg = mix(cc, vec3(0.72, 0.8, 0.88), 0.35);
  vec3 col = (cc * a + cg * glowA) / max(a + glowA, 1e-4);
  col = mix(col, vec3(1.0), hot * 0.6);
  gl_FragColor = vec4(col * tot, tot);
}
`;function Bo(e,t){const a=t.textRects||{rects:{value:Array.from({length:24},()=>new De)},n:{value:0}},o=new de(...Le(e.lat,e.lon,1)),n=new de(0,1,0).sub(o.clone().multiplyScalar(o.y)).normalize(),i=new de().crossVectors(n,o).normalize();let c=11;const m=()=>(c=c*16807%2147483647,c/2147483647),u=[],d=[],l=Array.from({length:Ne},(f,A)=>A);for(let f=Ne-1;f>0;f--){const A=Math.floor(m()*(f+1));[l[f],l[A]]=[l[A],l[f]]}for(let f=0;f<Ne;f++){const A=(f+.15+.7*m())/Ne*Math.PI*2,L=n.clone().multiplyScalar(Math.cos(A)).add(i.clone().multiplyScalar(Math.sin(A))),z=new de().crossVectors(o,L).normalize();u.push(new De(z.x,z.y,z.z,(l[f]+.25*m())/Ne));const U=m()<.22,H=U?4500+m()*4e3:1100+m()*1300;d.push(new De(8,H/ae,U||m()<.2?1:.5,0))}const s=new lt(1,1),r=new Q({vertexShader:"void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Ko,uniforms:{uProjInv:{value:new ut},uCamWorld:{value:new ut},uCamPos:{value:new de},uRes:{value:s},uTime:{value:0},uAlpha:{value:0},uAx:{value:u},uRay:{value:d},uP:{value:o},uRects:a.rects,uN:a.n},transparent:!0,depthWrite:!1,depthTest:!1,...Ke}),y=new ge;y.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const g=new fe(y,r);return g.frustumCulled=!1,g.renderOrder=9,g.name="neonShell",{mesh:g,update(f,A){const L=r.uniforms;L.uTime.value=f.time,L.uAlpha.value=f.alpha,s.set(f.w,f.h),L.uProjInv.value.copy(A.projectionMatrixInverse),L.uCamWorld.value.copy(A.matrixWorld),L.uCamPos.value.copy(A.position),g.visible=f.alpha>.002}}}const St=35,Wo=.35,qo=.6,Vo='a, button, input, textarea, select, label, img, video, picture, svg, header, nav, [role="button"], [contenteditable], .leader__photo, .pillar__photo',jo="h1, h2, h3, h4, h5, p, blockquote, li, figcaption, dt, dd",k={lon:0,lat:0,on:!1,dragging:!1,dirty:!1},ca=new eo,fa=new lt,$o=new to(new de,ae),Xo=new de,Ut=typeof document<"u"?document.createRange():null;let ct=null,Pt=null,be=0,_e=0,ue=null,ye=null;function Yo(){const e=Pt.clientHeight||innerHeight,t=ct.position.length();return e/2/Math.tan(ct.fov*Math.PI/360)*Math.tan(Math.asin(Math.min(1,ae/t)))}function Oa(e,t){const a=document.elementFromPoint(e,t);if(!a||a.closest(Vo))return!0;const o=a.closest(jo);if(o&&Ut){Ut.selectNodeContents(o);for(const n of Ut.getClientRects())if(e>=n.left-6&&e<=n.right+6&&t>=n.top-4&&t<=n.bottom+4)return!0}return!1}function Ua(e,t){if(!k.on||!ct||!Pt)return!1;const a=Pt.getBoundingClientRect();return fa.set((e-a.left)/a.width*2-1,-((t-a.top)/a.height)*2+1),ca.setFromCamera(fa,ct),ca.ray.intersectSphere($o,Xo)!==null}const Dt=(e,t)=>Ua(e,t)&&!Oa(e,t),Zo=(e,t)=>({globe:Ua(e,t),content:Oa(e,t),el:document.elementFromPoint(e,t)?.className||""});function ft(e){const t=document.documentElement;t.classList.toggle("earth-grab",e==="grab"),t.classList.toggle("earth-grabbing",e==="grabbing")}function Ha(e,t,a,o){const n=Math.max(40,Yo()),i=180/Math.PI/n,c=Math.max(.35,Math.cos(k.lat*Math.PI/180)),m=-e*i/c,u=o?t*i:0;if(k.lon+=m,k.lat=Math.max(-St,Math.min(St,k.lat+u)),a>0){const d=Math.min(1,a/.05);be=be*(1-d)+m/a*d,_e=o?_e*(1-d)+u/a*d:0}k.dirty=!0}function Jo(e){e.pointerType!=="mouse"||e.button!==0||Dt(e.clientX,e.clientY)&&(e.preventDefault(),k.dragging=!0,be=_e=0,ue={x:e.clientX,y:e.clientY,t:performance.now()},ft("grabbing"))}function Qo(e){if(e.pointerType==="mouse"){if(k.dragging&&ue){const t=performance.now();Ha(e.clientX-ue.x,e.clientY-ue.y,(t-ue.t)/1e3,!0),ue={x:e.clientX,y:e.clientY,t};return}ft(Dt(e.clientX,e.clientY)?"grab":null)}}function va(e){e.pointerType!=="mouse"||!k.dragging||(k.dragging=!1,ue&&performance.now()-ue.t>80&&(be=_e=0),ue=null,ft(Dt(e.clientX,e.clientY)?"grab":null))}function e0(e){if(e.touches.length!==1){ye=null;return}const t=e.touches[0];ye=Dt(t.clientX,t.clientY)?{x0:t.clientX,y0:t.clientY,mode:null}:null,ye&&(be=_e=0,ue={x:t.clientX,y:t.clientY,t:performance.now()})}function t0(e){if(!ye)return;const t=e.touches[0];if(!ye.mode){const o=t.clientX-ye.x0,n=t.clientY-ye.y0;if(Math.hypot(o,n)<9)return;if(ye.mode=Math.abs(o)>Math.abs(n)?"rot":"scroll",ye.mode==="scroll"){ye=null;return}k.dragging=!0}e.preventDefault();const a=performance.now();Ha(t.clientX-ue.x,0,(a-ue.t)/1e3,!1),ue={x:t.clientX,y:t.clientY,t:a}}function ma(){ye&&(ue&&performance.now()-ue.t>80&&(be=_e=0),ye=null,ue=null,k.dragging=!1)}let pa=!1;function a0(e,t){ct=e,Pt=t,!pa&&(pa=!0,addEventListener("pointerdown",Jo,{capture:!0}),addEventListener("pointermove",Qo,{passive:!0}),addEventListener("pointerup",va),addEventListener("pointercancel",va),addEventListener("touchstart",e0,{passive:!0}),addEventListener("touchmove",t0,{passive:!1}),addEventListener("touchend",ma,{passive:!0}),addEventListener("touchcancel",ma,{passive:!0}),addEventListener("selectstart",a=>{k.dragging&&a.preventDefault()}))}function o0(e,t,a){if(k.on=t,k.dirty=!1,!t&&k.dragging&&(k.dragging=!1),a&&!k.dragging){const o=Math.exp(-e/qo);k.lon*=o,k.lat*=o,be=_e=0,Math.abs(k.lon)<.001&&(k.lon=0),Math.abs(k.lat)<.001&&(k.lat=0),(k.lon||k.lat)&&(k.dirty=!0),document.documentElement.classList.contains("earth-grab")&&ft(null);return}if(!t&&document.documentElement.classList.contains("earth-grab")&&ft(null),!k.dragging)if(Math.abs(be)+Math.abs(_e)>.05){k.lon+=be*e,k.lat=Math.max(-St,Math.min(St,k.lat+_e*e));const o=Math.exp(-e/Wo);be*=o,_e*=o,k.dirty=!0}else be=_e=0}const n0=Math.PI,l0={tech:"#78d0e6",city:"#86a9cf",mapInk:"#7d9dc0",house:"#8fb0d2",mark:"#e2b04a",grid:"#3fd0e0"},r0={tech:"#29455c",city:"#253f57",mapInk:"#132a40",house:"#253f57",mark:"#8a5f10",grid:"#4d677d"},i0=`
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
varying float vLum;
varying float vA;
varying float vTech;

float wave(vec2 p, float t) {
  return 0.34 * sin(p.x * 0.38 + t * 0.55) * cos(p.y * 0.29 - t * 0.4)
       + 0.16 * sin((p.x + p.y) * 0.71 - t * 0.9)
       + 0.07 * sin(length(p - vec2(2.0, -3.0)) * 1.3 - t * 1.4);
}

void main() {
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
}
`,s0=`
uniform vec3 uTechCol;
uniform vec3 uMapCol;
uniform float uAlpha;
varying float vLum;
varying float vA;
varying float vTech;
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
  vec3 c = mix(uMapCol, uTechCol, vTech) * vLum;
  gl_FragColor = vec4(c * k * vA * uAlpha, 1.0);
#endif
}
`,u0=`
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
`,c0=`
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
`,f0=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,v0=`
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
`,m0=`
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
`,p0=`
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
`,d0=`
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
`,h0=`
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
`;function x0(e,t,a){const o=new Lt,{side:n,field:i,lite:c,light:m}=a,u=m?{LIGHT:1}:{},d=m?{blending:Ct,blendSrc:Qe,blendDst:Ue,blendSrcAlpha:Qe,blendDstAlpha:Ue}:{blending:ao},l=m?r0:l0,s=h=>m?new We().setStyle(l[h],qt):new We(l[h]),r=n*n,y=new Float32Array(r*2),g=i/n;for(let h=0;h<n;h++)for(let R=0;R<n;R++){const O=h*n+R;y[O*2]=(R+.5)*g-i/2,y[O*2+1]=(h+.5)*g-i/2}const f=e.lumaSize,A=new Float64Array(f*f);let L=0;for(let h=0;h<f*f;h++){const R=e.luma[h];L+=R>.05?R*R+.02:.003,A[h]=L}let z=1234567;const U=()=>(z=z*16807%2147483647)/2147483647,H=new Float32Array(r*2),C=new Float32Array(r);for(let h=0;h<r;h++){const R=U()*L;let O=0,pe=f*f-1;for(;O<pe;){const ke=O+pe>>1;A[ke]<R?O=ke+1:pe=ke}const ie=O%f,Ee=O/f|0,Nt=(ie+U())/f,Ot=(Ee+U())/f;H[h*2]=(Nt-.5)*Se*2,H[h*2+1]=(Ot-.5)*Se*2,C[h]=e.luma[O]}const x=h=>{const R=Array.from({length:r},(O,pe)=>pe);R.sort((O,pe)=>h[O*2]-h[pe*2]);for(let O=0;O<n;O++){const pe=R.slice(O*n,(O+1)*n).sort((ie,Ee)=>h[ie*2+1]-h[Ee*2+1]);for(let ie=0;ie<n;ie++)R[O*n+ie]=pe[ie]}return R},G=x(y),X=x(H),V=new Float32Array(r*2),$=new Float32Array(r*2),B=new Float32Array(r);for(let h=0;h<r;h++){const R=G[h],O=X[h];V[R*2]=y[R*2],V[R*2+1]=y[R*2+1],$[R*2]=H[O*2],$[R*2+1]=H[O*2+1],B[R]=C[O]}const p=new ge;p.setAttribute("position",new N(new Float32Array(r*3),3)),p.setAttribute("aGrid",new N(V,2)),p.setAttribute("aMap",new N($,2)),p.setAttribute("aLum",new N(B,1));const b=new Q({vertexShader:i0,fragmentShader:s0,uniforms:{uTime:{value:0},uAsm:{value:0},uWave:{value:1},uSize:{value:c?.05:.036},uFocal:{value:1e3},uFar:{value:30},uStep:{value:g},uTechCol:{value:s("tech")},uMapCol:{value:s("city")},uAlpha:{value:1}},defines:u,transparent:!0,depthWrite:!1,depthTest:!0,...d}),_=new Bt(p,b);_.name="points",_.frustumCulled=!1,_.renderOrder=2;const P=new Kt(Se*2,Se*2);P.rotateX(-n0/2);const v=new Q({vertexShader:f0,fragmentShader:v0,uniforms:{uMap:{value:t},uInk:{value:s("mapInk")},uBase:{value:new We("#0a1626")},uAlpha:{value:0}},defines:u,transparent:!0,depthWrite:!1,...m?d:{}}),M=new fe(P,v);M.name="map",M.position.y=-.002,M.renderOrder=0,M.frustumCulled=!1;const F=e.houses,T=1.6/1e3;let W=0;for(let h=0;h<F.n;h++)c&&F.area[h]<400||(W+=F.cnt[h]*(F.h[h]>=11?2:1));const ve=new Float32Array(W*6),Ae=new Float32Array(W*2),we=new Float32Array(W*2),w=new Float32Array(W*2),Z=new Float32Array(W*2);let xe=0;for(let h=0;h<F.n;h++){if(c&&F.area[h]<400)continue;const R=F.start[h],O=F.cnt[h],pe=Math.max(3,F.h[h])*T;let ie=0,Ee=0;for(let ee=0;ee<O;ee++)ie+=F.u[R+ee],Ee+=F.v[R+ee];ie=(ie/O-.5)*2,Ee=(Ee/O-.5)*2;const Nt=Math.min(1,Math.hypot(ie,Ee))*.8+h*7919%97/97*.2,Ot=Math.sqrt(Math.max(30,F.area[h]))/1e3,ke=(ee,ht,xt)=>{ve[xe*3]=(ee-.5)*Se*2,ve[xe*3+1]=0,ve[xe*3+2]=(ht-.5)*Se*2,Ae[xe]=xt,we[xe]=pe,w[xe]=Nt,Z[xe]=Ot,xe++};for(let ee=0;ee<O;ee++){const ht=R+ee,xt=R+(ee+1)%O;ke(F.u[ht],F.v[ht],1),ke(F.u[xt],F.v[xt],1)}if(F.h[h]>=11)for(let ee=0;ee<O;ee++)ke(F.u[R+ee],F.v[R+ee],0),ke(F.u[R+ee],F.v[R+ee],1)}const re=new ge;re.setAttribute("position",new N(ve,3)),re.setAttribute("aTop",new N(Ae,1)),re.setAttribute("aH",new N(we,1)),re.setAttribute("aDel",new N(w,1)),re.setAttribute("aSz",new N(Z,1));const Fe=new Q({vertexShader:m0,fragmentShader:p0,uniforms:{uGrow:{value:0},uFar:{value:30},uFocal:{value:1e3},uCol:{value:s("house")},uAlpha:{value:.55}},defines:u,transparent:!0,depthWrite:!1,...d}),Me=new Wt(re,Fe);Me.name="houses",Me.frustumCulled=!1,Me.renderOrder=1;const Re=e.projects,at=new Float32Array(Re.length*3),me=new Float32Array(Re.length);Re.forEach((h,R)=>{at[R*3]=(h.u-.5)*Se*2,at[R*3+1]=.03,at[R*3+2]=(h.v-.5)*Se*2,me[R]=R/Re.length});const It=new ge;It.setAttribute("position",new N(at,3)),It.setAttribute("aSeed",new N(me,1));const mt=new Q({vertexShader:d0,fragmentShader:h0,uniforms:{uFocal:{value:1e3},uTime:{value:0},uCol:{value:s("mark")},uAlpha:{value:0}},defines:u,transparent:!0,depthWrite:!1,depthTest:!1,...d}),Ve=new Bt(It,mt);Ve.name="marks",Ve.frustumCulled=!1,Ve.renderOrder=3;const Et=16,pt=c?96:160,aa=Math.floor(n/Et)+1,kt=new Float32Array(aa*2*pt*6);let dt=0;for(let h=0;h<aa;h++){const R=Math.min(i/2,h*Et*g-i/2);for(let O=0;O<pt;O++){const pe=(O/pt-.5)*i,ie=((O+1)/pt-.5)*i;kt.set([pe,0,R,ie,0,R],dt),dt+=6,kt.set([R,1,pe,R,1,ie],dt),dt+=6}}const oa=new ge;oa.setAttribute("position",new N(kt,3));const je=new Q({vertexShader:u0,fragmentShader:c0,uniforms:{uTime:{value:0},uWave:{value:1},uFar:{value:30},uFocal:{value:1e3},uGap:{value:Et*g},uCol:{value:s("grid")},uAlpha:{value:1}},defines:u,transparent:!0,depthWrite:!1,...d}),$e=new Wt(oa,je);return $e.name="grid",$e.frustumCulled=!1,$e.renderOrder=1,o.add(M,$e,Me,_,Ve),{group:o,update(h){const R=b.uniforms;R.uTime.value=h.time,R.uAsm.value=h.asm,R.uWave.value=h.wave,R.uFocal.value=h.focal,R.uFar.value=h.far,R.uAlpha.value=h.alpha*h.points,_.visible=h.alpha*h.points>.002,v.uniforms.uAlpha.value=h.map*h.alpha,M.visible=h.map*h.alpha>.002,Fe.uniforms.uGrow.value=h.houses,Fe.uniforms.uFar.value=h.far,Fe.uniforms.uFocal.value=h.focal,Fe.uniforms.uAlpha.value=.55*h.alpha,Me.visible=h.houses>.001&&h.alpha>.002,mt.uniforms.uTime.value=h.time,mt.uniforms.uFocal.value=h.focal,mt.uniforms.uAlpha.value=h.marks*h.alpha,Ve.visible=h.marks*h.alpha>.002;const O=h.alpha*(1-h.asm);je.uniforms.uTime.value=h.time,je.uniforms.uWave.value=h.wave,je.uniforms.uFar.value=h.far,je.uniforms.uFocal.value=h.focal,je.uniforms.uAlpha.value=O,$e.visible=O>.002,o.visible=h.alpha>.002,h.hideTech&&(_.visible=!1,$e.visible=!1,Me.visible=!1,M.visible=!1),h.hideMarks&&(Ve.visible=!1)}}}const g0=`
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
`,w0=e=>`
#define ${e}
${e==="LOOK_LIGHT"?S0:e.startsWith("LOOK_PAPER")?P0:""}
${e.includes("P_INK")?`#define SK_SPHERE
`+Xt:""}
#define PI 3.14159265
uniform vec3 uCam;
uniform float uC;
uniform float uR;
uniform float uAlpha;
uniform float uSpace;
uniform float uAtm;
uniform float uS0;
uniform float uLod;
uniform float uMarkR;
uniform float uMark;
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
    float ph = fract(uTime * 0.35);
    float ring = (1.0 - smoothstep(0.06, 0.16, abs(q - (0.8 + 2.4 * ph)))) * (1.0 - ph);
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
    col += vec3(1.0, 0.72, 0.30) * (core * 1.4 + ring * 0.8) * uMark;
    a = 1.0;
    a *= hole;
#endif
  }
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
    float ha = halo * uAtm * 0.85 * uAlpha * uRevA;
    if (a < 1.0) { col = mix(col, hc, ha * (1.0 - a)); a = max(a, ha); }
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
  float sa = uSpace * (1.0 - a * uAlpha);
  // Выход — с умноженной альфой (смешение ONE, ONE_MINUS_SRC_ALPHA).
  gl_FragColor = vec4(col * a * uAlpha + spaceCol * sa, a * uAlpha + sa);
}
`,y0=`
uniform vec3 uCam;
uniform float uR;
varying float vVis;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  // Видна ли точка из камеры: за краем диска линии нет.
  vVis = dot(normalize(position), uCam) - uR * uR / length(position);
}
`,A0=`
uniform vec3 uCol;
uniform float uAlpha;
uniform float uFadeKm;
varying float vVis;
void main() {
  if (vVis < 0.0) discard;
  float a = uAlpha * smoothstep(0.0, uFadeKm, vVis);
  gl_FragColor = vec4(uCol * a, a);
}
`,b0=`
attribute float aMag;
uniform float uPx;
varying float vM;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  vM = aMag;
  gl_PointSize = (1.0 + aMag * 1.6) * uPx;
}
`,_0=`
uniform float uAlpha;
varying float vM;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float d = dot(q, q);
  if (d > 1.0) discard;
  float a = (1.0 - d) * (0.25 + 0.75 * vM) * uAlpha;
  gl_FragColor = vec4(vec3(0.75, 0.85, 1.0) * a, a);
}
`,L0=`
varying vec2 vP;
void main() { vP = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,F0=`
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
`;function da(){const e=new ge;return e.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e}const M0={dots:"LOOK_DOTS",photo:"LOOK_PHOTO",mix:"LOOK_MIX",light:"LOOK_LIGHT",lines:`LOOK_PAPER
#define P_LINES`,ink:`LOOK_PAPER
#define P_INK`},ha={lines:1,ink:1},Ga=e=>{const t=parseInt(e.slice(1),16),a=o=>(o/255).toFixed(4);return`vec3(${a(t>>16)}, ${a(t>>8&255)}, ${a(t&255)})`},S0=[["L_SEA","#6c8194"],["L_GROUND","#2c4760"],["L_GOLD","#8a5f10"],["L_DISC","#d3d9de"],["L_RIM","#29455c"],["L_AURA","#e4e8ec"]].map(([e,t])=>`#define ${e} ${Ga(t)}`).join(`
`),P0=[["L_SEA","#5b7086"],["L_GROUND","#1c3349"],["L_GOLD","#8a5f10"],["L_GLOW","#2A6DAA"],["L_DISC","#d3d9de"],["L_RIM","#2A6DAA"],["L_AURA","#5FA8E0"],["L_PALE","#5FA8E0"],["L_GOLDL","#c9a24e"],["L_INK3","#4d677d"],["L_INK2","#29455c"]].map(([e,t])=>`#define ${e} ${Ga(t)}`).join(`
`);function xa(e,t,a,o){let n=0,i=0;const c=[0,0,0],m=new Lt,u={blending:Ct,blendSrc:Qe,blendDst:Ue,blendSrcAlpha:Qe,blendDstAlpha:Ue},d=Le(o.pdb.lat,o.pdb.lon,1),l={uCam:{value:new de},uC:{value:0},uR:{value:ae},uAlpha:{value:0},uSpace:{value:0},uAtm:{value:0},uS0:{value:1},uLod:{value:0},uMarkR:{value:10},uMark:{value:0},uTime:{value:0},uNight:{value:0},uClouds:{value:0},uHole:{value:0},uHoleR:{value:3.75},uRevMode:{value:0},uRevR:{value:1},uRevA:{value:1},uVeil:{value:0},uCzK:{value:0},uSc:{value:1},uInkH:{value:1},uInkP:{value:1},uPdb:{value:new de(d[0],d[1],d[2])},uSun:{value:new de(...Le(18,-28,1)).normalize()},uLand:{value:t.land},uEu:{value:t.eu},uEuBox:{value:new De(yt.lon0,yt.lat0,yt.lon1,yt.lat1)},uCamWorld:{value:new ut},uInvProj:{value:new ut}};e==="photo"&&(l.uDay={value:t.day},l.uDayEu={value:t.dayEu},l.uCloudTex={value:t.clouds},l.uDayCe={value:t.dayCe},l.uCeBox={value:new De(At.lon0,At.lat0,At.lon1,At.lat1)},l.uPhoto={value:0}),e==="mix"&&(l.uNightTex={value:t.night},l.uNightEu={value:t.nightEu});const s=new Q({vertexShader:g0,fragmentShader:w0(M0[e]),uniforms:l,transparent:!0,depthTest:!1,depthWrite:!1,...u}),r=new fe(da(),s);r.name="globe",r.frustumCulled=!1,r.renderOrder=-20;const y=(v,M,F)=>new Q({vertexShader:y0,fragmentShader:A0,uniforms:{uCam:l.uCam,uR:l.uR,uCol:{value:e==="light"?new We().setStyle(v,qt):new We(v)},uAlpha:{value:M},uFadeKm:{value:F}},transparent:!0,depthTest:!1,depthWrite:!1,...u}),g={dots:{coast:"#6f9cc4",border:"#8fb4d8",river:"#4f86b8"},photo:{coast:"#ffffff",border:"#ffffff",river:"#9cc8ff"},mix:{coast:"#5b8fc8",border:"#7fa9dc",river:"#3f6f9f"},light:{coast:"#4d677d",border:"#29455c",river:"#6c8194"}}[ha[e]?"light":e],f=(v,M)=>{const F=new ge;F.setAttribute("position",new N(v,3));const T=new Wt(F,y(M,0,400));return T.frustumCulled=!1,T.renderOrder=-10,T},A=f(a[0],g.coast),L=f(a[1],g.border),z=f(a[3],g.river),U=new so().setPositions(a[2]),H=new uo({color:e==="light"?9068304:15317072,linewidth:o.lite?1.6:2.2,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),C=new co(U,H);C.frustumCulled=!1,C.renderOrder=-9;const x=o.lite?900:2400,G=new Float32Array(x*3),X=new Float32Array(x);let V=4242;const $=()=>(V=V*16807%2147483647)/2147483647;for(let v=0;v<x;v++){const M=$()*2-1,F=$()*Math.PI*2,T=Math.sqrt(1-M*M);G[v*3]=T*Math.cos(F)*1e5,G[v*3+1]=M*1e5,G[v*3+2]=T*Math.sin(F)*1e5,X[v]=Math.pow($(),4)}const B=new ge;B.setAttribute("position",new N(G,3)),B.setAttribute("aMag",new N(X,1));const p=new Q({vertexShader:b0,fragmentShader:_0,uniforms:{uAlpha:{value:0},uPx:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,...u}),b=new Bt(B,p);b.frustumCulled=!1,b.renderOrder=-15;const _=new Q({vertexShader:L0,fragmentShader:F0,uniforms:{uLeft:{value:0},uAll:{value:0},uCol:{value:e==="light"?new We().setStyle("#c4cad0",qt):new We("#040b15")}},transparent:!0,depthTest:!1,depthWrite:!1,...u}),P=new fe(da(),_);return P.name="scrim",P.frustumCulled=!1,P.renderOrder=100,m.add(b,r,A,L,z,C,P),{group:m,resize(v,M){H.resolution.set(v,M)},setPhoto(v,M){const F=[];return l.uDay&&v&&l.uDay.value!==v&&(F.push(l.uDay.value),l.uDay.value=v),l.uCloudTex&&M&&l.uCloudTex.value!==M&&(F.push(l.uCloudTex.value),l.uCloudTex.value=M),F},update(v,M){const F=M.position;l.uCam.value.copy(F);const T=Math.hypot(F.x,F.y,F.z);l.uC.value=(T-ae)*(T+ae),l.uCamWorld.value.copy(M.matrixWorld),l.uInvProj.value.copy(M.projectionMatrixInverse),l.uAlpha.value=v.alpha,l.uSpace.value=v.space,l.uAtm.value=v.atm,l.uS0.value=v.s0,l.uLod.value=v.lod,l.uMarkR.value=v.markR,l.uMark.value=v.mark,l.uTime.value=v.time,l.uNight.value=v.night,l.uPhoto&&(l.uPhoto.value=v.photo),l.uClouds.value=v.clouds,l.uHole.value=v.hole,l.uHoleR.value=v.holeR,l.uRevMode.value=v.revMode||0,l.uRevR.value=v.revR||1,l.uRevA.value=v.revA??1,l.uVeil.value=v.veil||0,((v.spin||0)!==n||(v.sunLat||0)!==i)&&(n=v.spin||0,i=v.sunLat||0,Le(18+i,-28+n,1,c),l.uSun.value.set(c[0],c[1],c[2]).normalize()),l.uCzK.value=v.czk,l.uSc.value=v.sc||1,l.uInkH.value=v.inkH??1,l.uInkP.value=v.inkP??1,r.visible=v.alpha>.002||v.space>.002,A.material.uniforms.uAlpha.value=v.lines*(e==="photo"?.18:.38),L.material.uniforms.uAlpha.value=v.lines*(e==="photo"?.3:.5),z.material.uniforms.uAlpha.value=v.rivers*.35;for(const W of[A,L,z])W.material.uniforms.uFadeKm.value=Math.max(1,T-ae)*.05,W.visible=W.material.uniforms.uAlpha.value>.002;H.opacity=v.cz,C.visible=v.cz>.002,b.position.copy(F),p.uniforms.uAlpha.value=v.stars,p.uniforms.uPx.value=v.px,b.visible=v.stars>.002,ha[e]&&(A.visible=L.visible=z.visible=C.visible=b.visible=!1),_.uniforms.uLeft.value=v.scrimLeft,_.uniforms.uAll.value=v.scrimAll,P.visible=v.scrimLeft+v.scrimAll>.002}}}const Ht="home",Ye=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ka=5,ga=new URLSearchParams(location.search).get("earthfreeze");let te=null,Ce=null,Y=null,ce=null,Je=null,le=null,Rt=null;const ot={time:0,w:1,h:1,alpha:0};let qe=null,Te=null,Ze=null,D=null,zt=0,wa=null,se=!1,he=null;const R0=performance.now(),Jt=[{t:0,lat:q.lat-.012,lon:q.lon,d:6.5,tilt:74,head:-30,sx:.3,sy:.02},{t:1,lat:q.lat-.008,lon:q.lon,d:7.2,tilt:70,head:-20,sx:.3,sy:0},{t:2,lat:q.lat-.004,lon:q.lon,d:8.4,tilt:62,head:-9,sx:.3,sy:0},{t:3,lat:q.lat,lon:q.lon,d:9.6,tilt:52,head:2,sx:.3,sy:0},{t:4,lat:q.lat,lon:q.lon,d:11,tilt:46,head:12,sx:.8,sy:-.22},{t:4.5,lat:q.lat,lon:q.lon-.05,d:75,tilt:32,head:8,sx:.55,sy:-.26},{t:5,lat:49.85,lon:15.45,d:780,tilt:14,head:0,sx:.32,sy:-.2},{t:5.5,lat:50,lon:14.2,d:2300,tilt:6,head:0,sx:.3,sy:-.1},{t:6,lat:49,lon:12,d:5600,tilt:0,head:0,sx:.3,sy:0},{t:7,lat:38,lon:9,d:23e3,tilt:0,head:0,sx:.32,sy:0},{t:8,lat:30,lon:-4,d:34e3,tilt:0,head:0,sx:1.2,sy:.95}],z0=Jt.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),Ba=Jt.map(e=>e.t===5?{...e,d:1500,sx:-.3,sy:-.52}:e.t===5.5?{...e,sx:-.42,sy:-.56}:e),Qt=[...Ba.map(e=>e.t===2?{...e,tilt:58,head:-18}:e.t===3?{...e,tilt:50,head:6,d:9.2}:e),{t:2.5,lat:q.lat-.002,lon:q.lon,d:8.8,tilt:54,head:-8,sx:.3,sy:0}].sort((e,t)=>e.t-t.t),C0=Qt.map(e=>({...e,sx:0,sy:e.t>=8?.9:-.12})),Xe={lat:q.lat+.003,lon:q.lon,head:10.2,sx:0,sy:0},ya=10.2,it=[{t:0,...Xe,d:12.5,tilt:76},{t:1,...Xe,d:11.2,tilt:72},{t:2,...Xe,d:10.9,tilt:62},{t:2.5,...Xe,d:10.5,tilt:53},{t:3,...Xe,d:ya,tilt:47.5},{t:4,...Xe,d:ya,tilt:47.5},...Qt.filter(e=>e.t>4&&e.t<8).map(e=>e.t===7?{...e,lat:47,lon:12,d:8100,sx:0,sy:0}:e)];it.push({...it[it.length-1],t:8});const T0=it.map(e=>({...e,sx:0,sy:-.12})).map(e=>e.t===5||e.t===5.5?{...e,d:e.d*1.9,sx:-.3,sy:-.55}:e.t>=7?{...e,d:2e4,sy:0}:e).map(e=>e.t===2?{...e,d:16}:e.t===2.5?{...e,d:19}:e.t===3||e.t===4?{...e,d:22}:e),Be=1.5,D0=[{t:0,lat:q.lat-.012,lon:q.lon,d:8,tilt:80,sx:.3,sy:.02},{t:1,lat:q.lat-.008,lon:q.lon,d:8.5,tilt:76,sx:.3,sy:0}],Aa=[[0,10.2],[Be,10.2]];function I0(e,t){const a=nt(e),o=r=>({t:r,...a(r,{})}),n=D0.map(r=>t?{...r,sx:0,sy:-.12}:r),i=[...n,o(Be),o(Be+.3)],c=Ft([...Aa.map(r=>r[0]),Be+.3],[...Aa.map(r=>r[1]),i[i.length-1].head]),m=nt(i.map(({head:r,...y})=>y)),u={lat:q.lat,lon:q.lon,head:10.2,sx:t?0:.69,sy:t?-.12:-.05},d=nt([[0,12.5,76],[1,11.2,72],[2,9.4,62],[2.5,8.3,53],[3,7.48,47.5],[4,7.48,47.5]].map(([r,y,g])=>({t:r,...u,d:y,tilt:g}))),l=r=>{const y=d(r,{});return delete y.head,{t:r,...y}},s=nt([...n,l(Be),l(Be+.3)]);return(r,y)=>r>=Be?a(r,y):(r<=1?s(r,y):m(r,y),y.head=c(r),y)}let Wa=null;const S=(e,t,a)=>{const o=Math.min(1,Math.max(0,(a-e)/(t-e)));return o*o*(3-2*o)},K={lat:0,lon:0,d:1,tilt:0,head:0,sx:0,sy:0},J={resW:1,resH:1,time:0,asm:0,wave:1,map:0,houses:0,marks:0,alpha:1,points:1,focal:1e3,far:30},E={alpha:0,space:0,atm:0,s0:1,lod:0,markR:1,mark:0,time:0,night:0,photo:0,clouds:0,lines:0,rivers:0,cz:0,czk:0,stars:0,px:1,scrimLeft:0,scrimAll:0,hole:0,holeR:Se},oe={},Ge=[0,0,0],bt=[0,0,0],_t=[0,0,0],E0=14,j={a:0,b:0,f0:0,f1:0,spin:0,leave:0,on:!1};function k0(e){if(!j.on){j.spin=0,j.leave=0;return}j.spin=E0*S(j.a,j.b,e),j.leave=S(j.f0,j.f1,e)}function N0(){const e=document.querySelector("#canvas-wrapper");if(!e)return null;let t=e.querySelector("canvas.canvas-earth");return t||(t=document.createElement("canvas"),t.className="canvas-earth",t.setAttribute("aria-hidden","true"),e.append(t)),t}function Gt(){vt.measures++;const e=innerHeight,t=l=>{const s=document.querySelector(l);if(!s)return null;const r=s.getBoundingClientRect();return{y:r.top+scrollY,h:r.height}},a=t("main .about"),o=t("main .doing"),n=t("main .history"),i=t("main .people"),c=t("main .social");if(!a||!o||!n||!i||!c){he=null;return}const m=io(),u=[m,a.y-.1*e,o.y-.3*e,o.y+.5*o.h-.5*e,n.y-.4*e,n.y+.12*n.h,n.y+.42*n.h,n.y+.72*n.h,i.y-.25*e,c.y-.7*e,c.y+.25*e];if(D==="ink"){const l=[1.1,.7,1.2,1.2,1,1.2,1.4,1.6],s=l.reduce((g,f)=>g+f,0),r=document.documentElement.scrollHeight-e-u[2],y=Math.min(1,Math.max(.3,r/(s*e)));for(let g=0;g<l.length;g++)u[g+3]=u[g+2]+l[g]*e*y}for(let l=1;l<u.length;l++)u[l]=Math.max(u[l],u[l-1]+40);const d=[0,1,2,3,4,4.5,5,5.5,6,7,8];if(he={ys:u,ts:d,start:m,map:Ft(u,d)},j.on=!1,D==="ink"){const l=f=>{const A=document.querySelector(f);return A?A.getBoundingClientRect().top+scrollY:null},s=l("main .people .leader__photo"),r=l("main .people .people__link"),y=l("main .social .marker"),g=l("main .social .pillar__photo");if(s!==null&&r!==null&&y!==null&&g!==null){j.a=s-.1*e,j.f1=Math.max(j.a+.3*e,Math.min(r-.08*e,g-e)),j.b=j.f1,j.f0=Math.min(y-.85*e,j.f1-.3*e),j.on=!0;const f=d.indexOf(7);if(u[f]>j.a){const A=(j.a-u[2])/(u[f]-u[2]);for(let L=3;L<u.length;L++)u[L]=u[2]+(u[L]-u[2])*A;he.map=Ft(u,d)}}}}function qa(e){return he?he.map(e):0}function O0(e){if(!he)return 0;let t=he.ys[0],a=he.ys[he.ys.length-1];for(let o=0;o<40;o++){const n=(t+a)/2;he.map(n)<e?t=n:a=n}return(t+a)/2}let Pe=0,Oe=0;function Va(){const e=Math.min(se?1.5:1.75,window.devicePixelRatio||1),t=Math.max(1,Math.round(ce.clientWidth*e)),a=Math.max(1,Math.round(ce.clientHeight*e));t===Pe&&a===Oe||(Pe=t,Oe=a,te.setPixelRatio(1),te.setSize(t,a,!1),Y.aspect=t/a,qe?.resize(t,a),Te?.resize(t,a))}function ja(e,t){Wa(e,K),j.spin&&(K.lon+=j.spin);const a=D==="ink"?S(1700,2400,K.d):0;a>0&&(K.lon+=k.lon*a,K.lat+=k.lat*a),fo(K.lat,K.lon,K.d,K.tilt,K.head,Ge,bt,_t),Y.position.set(Ge[0],Ge[1],Ge[2]),Y.up.set(bt[0],bt[1],bt[2]),Y.lookAt(_t[0],_t[1],_t[2]);const o=Math.hypot(Ge[0],Ge[1],Ge[2])-ae;Y.near=Math.max(.02,K.d*.02),Y.far=Math.max(K.d*4,K.d+2.2*ae)+2e5,Y.updateProjectionMatrix(),Y.projectionMatrix.elements[8]=-K.sx,Y.projectionMatrix.elements[9]=-K.sy,Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.updateMatrixWorld();const n=Oe/(2*Math.tan(Y.fov*Math.PI/360)),i=le?1-S(30,140,K.d):1-S(14,42,K.d);J.time=t,J.asm=S(1.85,3.05,e),J.wave=1-S(1.9,3,e),J.map=S(2.45,3.2,e),J.houses=S(2.55,3.45,e),J.marks=S(3,3.5,e)*(1-S(13,24,K.d)),J.points=1-.45*S(3,4,e),J.alpha=i,J.focal=n,J.resW=Pe,J.resH=Oe,J.far=Math.max(14,K.d*2.6),J.hideTech=!!le,J.hideMarks=D==="ink",Je?.update(J);const c=Math.max(.03,K.d*.0055),m=Math.log2(c),u=Math.floor(m);E.s0=Math.pow(2,u),E.sc=c,E.lod=m-u;const d=le?S(3.7,4.5,e):S(2.8,3.8,e)*.6+S(4,4.6,e)*.4,l=D==="ink"?j.leave:S(7.2,7.95,e);if(E.alpha=d*(1-l),E.spin=j.spin+k.lon*a,E.sunLat=k.lat*a,E.space=S(5.2,6.4,e),E.atm=S(5,6.2,e),E.markR=Math.max(.6,o*.012),E.mark=D==="ink"?0:S(18,50,K.d)*(1-l),E.time=t,E.night=D==="mix"?S(5.6,6.6,e):0,E.photo=D==="photo"?S(120,420,K.d):0,E.clouds=D==="photo"?S(5.4,6.6,e)*.85:0,E.lines=S(4.1,4.9,e)*(1-l),E.rivers=S(4.1,4.7,e)*(1-S(5.6,6.2,e))*(1-E.photo),E.cz=S(4.3,5,e)*(1-l),E.stars=D==="light"||le?0:S(5.6,6.8,e),E.px=Math.min(2,te.getPixelRatio()*(Pe/ce.clientWidth||1)),E.czk=le?S(40,260,K.d):S(120,520,K.d),E.hole=i*J.map,E.holeR=Se,E.scrimLeft=se?0:D==="light"?.6:.72,E.scrimAll=se?D==="light"?.45:.5:0,le&&(E.scrimLeft=0,E.scrimAll=0),Te){const s=S(4.9,6,e),r=Math.exp(Math.log(5e3)+(Math.log(15)-Math.log(5e3))*s);E.revMode=0,E.revR=r,E.revA=1-s,Object.assign(oe,E),oe.revMode=0,oe.revA=s,oe.alpha=s>.001?E.alpha*s:0,E.alpha*=1-S(.85,1,s),oe.space=0,oe.stars=0,oe.hole=0,oe.photo=1,oe.clouds=S(5.4,6.6,e)*.7,oe.night=0,oe.rivers=0,oe.lines=E.lines*.5*s,oe.veil=.5*(1-S(5.9,6.7,e)),oe.cz=E.cz*s,oe.scrimLeft=0,oe.scrimAll=0,Te.update(oe,Y),E.revRibbons=1-s}else E.revRibbons=1;qe?.update(E,Y),le&&G0(e,t,n,o,i,l),Rt&&(ot.time=t,ot.w=Pe,ot.h=Oe,ot.alpha=S(1700,2400,K.d)*(1-l)*(1-.15*S(6.6,7,e)),ta=S(1700,2400,K.d)*(1-l)>.3,$a=S(1700,2400,K.d)*(1-l)<.01,Rt.update(ot,Y))}const ea=new Set,vt={log:null,measures:0},U0=e=>{ea.has(e.name)&&(e.visible=!1)};let ba=0;const I={flat:0,pre:0,neonT:0,neonP:0,grow:0,ft:0,time:0,asm:0,wave:1,focal:1,far:30,dpr:1,w:1,h:1,cssW:1,cssH:1,bg:0,city:0,alpha:1,cam:null,fadeKm:100,veil:.9,sphere:{al:[0,0,0,0],ag:0,draw:[1,1,1,1],reg:[0,0],reach:0}},H0={lines:[.62,.55,.95,.5],ink:[.85,.7,1,.65]};function G0(e,t,a,o,n,i){I.time=t,I.asm=J.asm,I.wave=J.wave,I.focal=a,I.far=J.far,I.w=Pe,I.h=Oe,I.cssW=ce.clientWidth||1,I.cssH=ce.clientHeight||1,I.dpr=Pe/I.cssW,I.bg=S(-.6,.9,e),I.city=D==="ink"?S(1.9,2.8,e):D==="lines"?S(3,3.5,e):S(2.4,3.3,e),I.alpha=n,I.cam=Y.position,I.camera=Y,I.fadeKm=Math.max(1,o*.05),I.veil=0;{const s=D==="ink"?-.5:0;I.flat=S(1.55,2.25,e),I.pre=1-S(1,1.45,e);const r=D==="ink"&&Na()?1:0;I.neonT=r*(1-S(1.6,2.3,e)),I.neonP=r*(1-S(3.9,4.5,e))*(1-.6*I.city),I.asm=S(2+s,3.05+s,e),I.grow=D==="lines"?S(2.95,3.6,e):S(2.6+s,3.45+s,e),I.hatch=S(2.85+s,3.4+s,e),I.paint=S(2.75+s,3.15+s,e),E.inkH=S(4.7,5.4,e),E.inkP=S(4.55,5.1,e),I.ft+=Math.max(0,t-ba)*(1-.9*I.flat)*(D==="lines"&&Yt?.5:1);const y=S(3.3,4,e)*(1-S(5.8,6.5,e)),g=S(4.3,4.9,e),f=D==="ink"?S(110,220,K.d):1;I.sphere.reg[0]=.55*y*f*(1-.6*g),I.sphere.reg[1]=.8*y*f*(1-.45*g),I.sphere.reach=Math.exp(Math.log(.004)+(Math.log(.45)-Math.log(.004))*S(3.35,5.2,e))}ba=t;const c=H0[D],m=S(3.8,4.4,e)*(1-i),u=1-S(5.6,6.3,e),d=E.revRibbons??1,l=D==="ink"?S(500,1100,K.d):1;I.sphere.al[0]=c[0]*m*d*l,I.sphere.al[1]=c[1]*m*d*l,I.sphere.al[2]=c[2]*m,I.sphere.al[3]=c[3]*m*u*d*l,I.sphere.ag=D==="lines"?.32*S(5.4,6.4,e)*(1-i):0,I.sphere.draw[0]=S(3.9,5.4,e),I.sphere.draw[1]=S(4,5.2,e),I.sphere.draw[2]=S(3.9,4.6,e),I.sphere.draw[3]=S(3.85,4.5,e),le.update(I)}let st=-1,_a=-1,ta=!1,$a=!0,La=performance.now();function Xa(){if(!he||!Je||!qe)return;const e=window.scrollY||0,t=innerHeight,a=Ye?1:S(he.start-.55*t,he.start+.05*t,e),o=a.toFixed(3);if(ce.style.opacity!==o&&(ce.style.opacity=o),a<=.001)return;Va();const n=Ye?Ka:qa(e);Ye?(j.spin=0,j.leave=0):k0(e);const i=Ye?0:ga!==null?Number(ga):(performance.now()-R0)/1e3,c=performance.now();o0(Math.min(.1,(c-La)/1e3),ta&&ce.style.opacity>.5,$a||ce.style.opacity<.01),La=c,!(Ye&&n===_a&&e===st&&!k.dirty)&&(_a=n,st=e,ja(n,i),vt.log&&vt.log.push([performance.now(),e,n,K.d,K.tilt,K.head]),ea.size&&Ce.traverse(U0),te.render(Ce,Y))}async function K0(){const e=se?256:512,t=(x,G)=>mo(x,{srgb:G,renderer:te}),a=[t("land.webp"),t("europe.webp"),t("pardubice.webp",!1)];(D==="photo"||Ze==="photo")&&a.push(t("day.webp",!0),t("day-eu.webp",!0),t("clouds.webp"),t("day-ce.webp",!0)),D==="mix"&&a.push(t("night.webp",!0),t("night-eu.webp",!0));const[o,n,i,c,m]=await Promise.all([Promise.all(a),ho(e),xo(),po(),fetch("/assets/map/pardubice.json").then(x=>x.json())]),[u,d,l,s,r,y,g]=o;if(!rt.includes(D))for(const x of[u,d])x.generateMipmaps=!1,x.minFilter=$t;const f=Object.values(m.проекты||{});Je=x0({luma:n,lumaSize:e,houses:i,projects:f},l,{side:se?128:256,field:24,lite:se,light:D==="light"||rt.includes(D)});let A=null,L=null;if(D==="ink"){const[x,G,X,V,$,B,p]=await Promise.all([t("land-dem.webp"),t("land-a.webp"),t("land-b.webp"),t("land-far.webp"),t("land-hor.webp"),t("neon-near.webp"),t("neon-far.webp")]);for(const b of[x,G,X,V,$,B,p])b.wrapS=b.wrapT=jt,b.flipY=!1,b.needsUpdate=!0;X.magFilter=wt,X.minFilter=wt,X.generateMipmaps=!1;for(const b of[x,V,$,B,p])b.magFilter=wt,b.minFilter=wt,b.generateMipmaps=!1;A={dem:x,a:G,b:X,far:V,hor:$,neonN:B,neonF:p},L=(await(await fetch(He+"land-routes.json")).json()).routes,o.push(x,G,X,V,$,B,p)}rt.includes(D)&&(le=await Go(D,l,{lite:se,houses:i,pdb:q,land:A,routes:L}));const z=new ut,U=Ca(q.lat,q.lon),H=Le(q.lat,q.lon);z.makeBasis(new de(...U.e),new de(...U.u),new de(-U.n[0],-U.n[1],-U.n[2])).setPosition(H[0],H[1],H[2]),Je.group.matrixAutoUpdate=!1,Je.group.matrix.copy(z);const C={land:u,eu:d};(D==="photo"||Ze==="photo")&&Object.assign(C,{day:s,dayEu:r,clouds:y,dayCe:g}),D==="mix"&&Object.assign(C,{night:s,nightEu:r}),qe=xa(D,C,c,{pdb:q,lite:se}),Ze&&(Te=xa(Ze,C,c,{pdb:q,lite:se}),Te.group.traverse(x=>{x.isGroup||(x.renderOrder+=.5)})),Ce.add(qe.group,Je.group),Te&&Ce.add(Te.group),le&&(le.cityGroup.matrixAutoUpdate=!1,le.cityGroup.matrix.copy(z),Ce.add(le.cityGroup,le.sphereGroup,le.veil),D==="ink"&&Na()&&(Rt=Bo(q,{textRects:le.textRects}),Ce.add(Rt.mesh))),Pe=0,Va(),qe.resize(Pe,Oe),Te?.resize(Pe,Oe);for(const x of o)te.initTexture(x);Ce.traverse(x=>{x.visible=!0}),te.compile(Ce,Y),ja(Ye?Ka:0,0),(D==="photo"||Ze==="photo")&&B0(),window.__cfigEarth={hide:ea,dbg:vt,grab:k,grabProbe:Zo,yOf:O0,look:D,get t(){return qa(scrollY)},knots:()=>he,P:K,renderer:te}}let Fa=null;function B0(){if(Fa)return;const e=se?"4k":te.capabilities.maxTextureSize>=8192?"8k":"4k";Fa=Promise.all([ra(`day-${e}.webp`,{srgb:!0,renderer:te}),ra(`clouds-${e}.webp`,{red:!0,renderer:te})]).then(([t,a])=>{te.initTexture(t),te.initTexture(a);const o=new Set;for(const n of[qe,Te])for(const i of n?.setPhoto(t,a)||[])o.add(i);for(const n of o)n?.dispose();vt.photoHi=e}).catch(t=>console.warn("[cfig] резкая Земля не подгрузилась:",t))}function Vt(){k.on=!1,ta=!1,document.documentElement.classList.remove("earth-grab","earth-grabbing"),zt&&(za.ticker.remove(Xa),zt=0),ce&&(ce.style.opacity="0")}function X0(){if(D=ro(),Ze=D==="ink"?"photo":null,document.body.dataset.route!==Ht||!D){Vt();return}if(!te){if(ce=N0(),!ce)return;se=Math.min(innerWidth,innerHeight)<720||matchMedia("(pointer: coarse)").matches;try{te=new oo({canvas:ce,alpha:!0,antialias:!se,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{te=null;return}te.setClearColor(0,0),te.sortObjects=!0,Ce=new no,Y=new lo(35,1,.05,1e6),Wa=D==="ink"?I0(se?T0:it,se):nt(rt.includes(D)?se?C0:Qt:se?z0:rt.includes(D)?Ba:Jt),D==="ink"&&a0(Y,ce),wa=K0().catch(e=>{console.warn("[cfig] Земля не поднялась:",e),Vt()}),addEventListener("resize",()=>{Gt(),st=-1},{passive:!0}),new ResizeObserver(()=>{document.body.dataset.route===Ht&&(Gt(),st=-1)}).observe(document.documentElement)}Gt(),st=-1,wa.then(()=>{le?.collect(),!zt&&document.body.dataset.route===Ht&&(za.ticker.add(Xa),zt=1)})}document.addEventListener("astro:before-preparation",e=>{ce&&e.to&&new URL(e.to).pathname!==location.pathname&&Vt()});export{X0 as init};
