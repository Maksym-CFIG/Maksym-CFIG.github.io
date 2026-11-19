import{W as Ye}from"./three.module.BDbTcLBq.js";import{setSpot as xe,setMapZoom as Je,spots as Ke,spotScreen as Ft,anchorScreen as ft,FIELD as Gt,setSignGlow as At,setPlot as Tt,setRings as Xe,setLens as Se,MAP_NEAR as $,setMapNear as Qt}from"./track.CyaGMw3i.js";import{g as Ot,S as Ze}from"./scroll.Cxvh0_mC.js";import{dh as Qe,f as te,b as at,V as Lt,A as st,k as ee,av as ne,aD as tn,G as It,d as oe,B as dt,cy as en,a as kt,S as nn,P as on,C as an,h as tt}from"./three.core.Bs7hxDeK.js";import{h as sn,a as rn}from"./Base.astro_astro_type_script_index_0_lang.xDffbqgW.js";import"./router.UeToN5xW.js";import"./preload-helper.BlTxHScW.js";const k=[{key:"palachovka",share:.854,cut:.45,size:.86},{key:"kostelicek",share:.88},{key:"karlovina",share:.9,side:.05},{key:"labska",share:.86,side:.04,left:.2},{key:"hradecka",share:.92}],ln=.52,cn=-.17,un=-.07,fn=1,ae=.05,dn=.62,mn=1.1,K=[0,0,1,1,1],vn=[null,null,-.1,-.1,-.1],hn=[null,null,1.95,1.75,1.55],se=[null,null,.13,.17,.15],pn=[null,null,.62,.56,.56];function zt(t,e){let n=t[0];for(let a=1;a<k.length;a++){const o=t[a]-t[a-1];if(!o)continue;const i=G[a-1][2],r=G[a][0];n+=o*E(w((e-i)/Math.max(.001,r-i)))}return n}const wn=.44,yn=.5,gn=[0,0,1,0,1];let U=[];function Mn(t){U=t}function xn(t){if((window.innerWidth||0)<1024||U.length<2)return 0;let e=U[0]||0;for(let n=1;n<U.length&&n<k.length;n++){const a=(U[n]||0)-(U[n-1]||0);if(!a)continue;const o=gn[n],i=o?G[n-1][2]:G[n-1][2]-yn,r=o?G[n][0]:G[n][1];e+=a*E(w((t-i)/Math.max(.001,r-i)))}return e}const X=3.2,Sn=.62,ie=.18,re=.05,_n=.5,bn=.8,An=.26,le=.07,ce=.44,Tn=Ot.parseEase("power2.out"),Pn=1.5,_e=t=>{const e=Math.min(1,t/(le+ce));return{луч:An*e,дом:le*e,вход:ce*e}},Cn=.72,mt=.72,be=.6,Pt=.3,Rn=.1,Ae=[Cn,.72,2,mt,mt],Ut=t=>Ae[t]??mt,Te=1,Pe=[1.58,1.27,1.3,.8,.9],Ce=[.514,.6,.41,.6,.6];function En(t,e){const[n,a,o]=G[t];return e<n||e>=o?0:e<a?E(w((e-n)/_e(a-n).луч)):1-E(w(((e-a)/(o-a)-.2)/.8))}const Fn=t=>{const n=L[t]-Ut(t),a=n+(Ce[t]??.6)*Ut(t);return[n,a,a+(Pe[t]??1.29)]},Gn=t=>Ut(t)*((Ce[t]??.6)-1)+(Pe[t]??1.29),Re=[0,2.2,0,0,0],Q=k.length,D=Array.from({length:Q},(t,e)=>e===Q-1?Gn(e):Te+be+mt+(Re[e]||0)),Ln=.5,ue=t=>t<=0?0:t>=1?t-.5:t*t*t-t*t*t*t/2;function In(t){const e=Re[t.i]||0;if(!e||t.xs===void 0)return t.t;const n=t.L-e,a=Te,o=a+be+e,i=Math.max(.001,Math.min(Ln,a,(o-a)/2,t.L-o)),r=e/(o-a),u=2*i*(ue((t.xs-a+i)/(2*i))-ue((t.xs-o+i)/(2*i)));return w((t.xs-r*u)/n)}const L=D.reduce((t,e,n)=>(t.push(n?t[n-1]+D[n-1]:0),t),[]),G=k.map((t,e)=>Fn(e)),kn=L[Q-1]+D[Q-1],zn=Ot.parseEase("power2.out"),E=Ot.parseEase("sine.inOut"),w=t=>Math.max(0,Math.min(1,t)),fe=.35,de=34,Ee=.7,Un=globalThis.__cfigTest?.sbeam??2.2,me=.012,ve=.7,Wn=.15,Dn=.01,Nn=.25,On=.8,he=70,jn=.4,pe=[];let Ct=!1;function Bn(t){if(pe.push(t),Ct)return;Ct=!0;const e=()=>{const n=pe.shift();if(!n){Ct=!1;return}n(()=>window.requestIdleCallback?window.requestIdleCallback(e,{timeout:2e3}):setTimeout(e,50))};window.requestIdleCallback?window.requestIdleCallback(e,{timeout:2e3}):setTimeout(e,50)}const W=75,vt=380,ht=3,Hn=.12,qn=2.4,Vn=1,$n=1,Yn=.16,Wt=3,Jn=1.55,Kn=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Xn=`
precision highp float;
uniform sampler2D uMap;
uniform float uAlpha;
uniform float uGrow;    // до какой доли уже вырисовано
uniform float uEdge;    // насколько светится сама кромка стройки
uniform float uCut;     // наклон линии реза: вырисовка идёт ВДОЛЬ основания
uniform float uTime;
uniform float uScan;    // сила полос развёртки
uniform float uScanN;   // сколько их по высоте
varying vec2 vUv;
// SIDES OF THE PHOTO FADE OUT (see JS comment above SHOTS).
uniform vec2 uSide;   // fade width: x - left, y - right
float sideFade(vec2 uv) {
  float k = smoothstep(0.0, uSide.x, uv.x) * smoothstep(0.0, uSide.y, 1.0 - uv.x);
  // Bottom edge of the photo fades too (no hard horizontal cut).
  float b = smoothstep(0.0, 0.08, uv.y);
  return k * k * (3.0 - 2.0 * k) * b;
}
void main() {
  // РЕЗ ИДЁТ ПАРАЛЛЕЛЬНО НИЗУ ЗДАНИЯ, а не строго по горизонтали. У снимка
  // сверху низ дома в кадре наклонён, и горизонтальный рез открывал сперва
  // один край, потом отдельно второй — читалось это как две вырисовки подряд.
  // uCut — наклон этой линии, сосчитанный пекарем по самой картинке.
  // (обратные кавычки здесь нельзя: шейдер лежит в шаблонной строке.)
  float span = 1.0 + abs(uCut);
  float lvl = (vUv.y + uCut * (vUv.x - 0.5) + abs(uCut) * 0.5) / span;
  if (lvl > uGrow) discard;
  vec4 c = texture2D(uMap, vUv);
  float edge = smoothstep(uGrow - 0.06, uGrow, lvl);
  float a = c.a * uAlpha * (1.0 + uEdge * edge) * sideFade(vUv);

  // ПОЛОСЫ РАЗВЁРТКИ. Тонкие горизонтальные полосы, медленно ползущие вверх:
  // ими изображение читается ПЕРЕДАННЫМ, а не нарисованным. Сам рисунок они
  // не трогают — только яркость, и слабо: заказчик просил сменить способ
  // подачи, а не рисунок.
  float scan = 1.0 + uScan * sin(vUv.y * uScanN - uTime * ${Ee.toFixed(3)});
  // ДРОЖАНИЕ. Еле заметное: сильное читается поломкой, а не голограммой.
  float flick = 1.0 + 0.035 * sin(uTime * 7.3) * sin(uTime * 3.1 + 1.7);
  a *= scan * flick;
  gl_FragColor = vec4(c.rgb * a, a);
}
`,Zn=`
attribute vec4 aPack;    // номер слоя (как есть), сдвиг x, y и задержка (0..1)
uniform int uGW;         // клеток в строке сетки
uniform vec2 uAng[${W}];  // у каждого слоя: угол сдвига, угол поворота
uniform float uChaos;    // хаос распада (0 — слоями, как в образце)
uniform float uDis;      // 0..1 — ход рассыпания
uniform float uPx;       // размер точки в пикселях
uniform float uFly;      // сила разлёта (1 — как в образце)
uniform float uLift;     // во сколько раз ярче точка, вышедшая из стопки
varying vec2 vUv;
varying float vFade;
varying float vLift;
void main() {
  int cell = gl_VertexID / ${ht};
  vec2 aUv = vec2((float(cell - (cell / uGW) * uGW) + 0.5) / float(uGW), (float(cell / uGW) + 0.5) / ${vt.toFixed(1)});
  int li = int(aPack.x * 65535.0 + 0.5);
  vec3 aLayer = vec3(float(li) / ${W.toFixed(1)}, uAng[li]);
  vec3 aJit = vec3((aPack.yz - 0.5) * ${Wt.toFixed(1)}, aPack.w);
  vUv = aUv;
  // Каждый слой идёт единицу времени, трогаясь с задержкой 2·слой; всего три.
  // Своя задержка точки (до 0.3) рвёт слой: соседи трогаются вразнобой.
  float d = aLayer.x * 2.0 * (1.0 - 0.15 * uChaos) + aJit.z * 0.3 * uChaos;
  float k = clamp(uDis * 3.0 - d, 0.0, 1.0);
  float e = 1.0 - (1.0 - k) * (1.0 - k);
  vec2 p = aUv - 0.5;
  float r = aLayer.z * e;
  p = vec2(p.x * cos(r) - p.y * sin(r), p.x * sin(r) + p.y * cos(r));
  // Сдвиг в долях картинки: как 40 px на 600 × 400 у образца, чуть смелее.
  // Как в образце: 40 px на картинке 600 × 400.
  p += vec2(sin(aLayer.y) * 0.067, cos(aLayer.y) * 0.1) * e * uFly;
  // ХАОС. Слой целиком — та же картинка, сдвинутая: линии и формы здания
  // читались в пыли. Свой сдвиг каждой точки их рвёт; растёт быстрее
  // общего (sqrt), чтобы рисунок рассыпался сразу, а не в конце.
  p += aJit.xy * sqrt(e) * uChaos;
  vFade = 1.0 - e;
  vLift = mix(1.0, uLift, e);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 0.0, 1.0);
  gl_PointSize = vFade > 0.001 ? uPx : 0.0;
}
`,Qn=`
precision highp float;
uniform sampler2D uMap;
uniform float uAlpha;
uniform float uGain;
uniform float uGrow;
uniform float uEdge;
uniform float uCut;
uniform float uTime;
uniform float uScan;
uniform float uScanN;
varying vec2 vUv;
varying float vFade;
varying float vLift;
// SIDES OF THE PHOTO FADE OUT (see JS comment above SHOTS).
uniform vec2 uSide;   // fade width: x - left, y - right
float sideFade(vec2 uv) {
  float k = smoothstep(0.0, uSide.x, uv.x) * smoothstep(0.0, uSide.y, 1.0 - uv.x);
  // Bottom edge of the photo fades too (no hard horizontal cut).
  float b = smoothstep(0.0, 0.08, uv.y);
  return k * k * (3.0 - 2.0 * k) * b;
}
void main() {
  float span = 1.0 + abs(uCut);
  float lvl = (vUv.y + uCut * (vUv.x - 0.5) + abs(uCut) * 0.5) / span;
  if (lvl > uGrow) discard;
  float edge = smoothstep(uGrow - 0.06, uGrow, lvl);
  vec4 c = texture2D(uMap, vUv);
  // ПЕРЕКРЫТИЕ ТОЧЕК КОМПЕНСИРУЕТСЯ. Каждый пиксель лежит в ПОВТОР слоях,
  // а точка чуть больше клетки; сложение давало картинку вдвое-втрое ярче
  // той, что была до распада, — заказчик увидел это вспышкой.
  // Разлетевшаяся точка уже ни с кем не складывается — ей возвращается
  // часть яркости (vLift), иначе разлёт тонет в темноте.
  float a = c.a * uAlpha * vFade * vLift * uGain * (1.0 + uEdge * edge) * sideFade(vUv);
  float scan = 1.0 + uScan * sin(vUv.y * uScanN - uTime * ${Ee.toFixed(3)});
  float flick = 1.0 + 0.035 * sin(uTime * 7.3) * sin(uTime * 3.1 + 1.7);
  a *= scan * flick;
  if (a < 0.002) discard;
  gl_FragColor = vec4(c.rgb * a, a);
}
`;function to(t,e,n=0){const a=globalThis.__cfigTest?.dustSeed,o=a?eo(a*1e3+n):Math.random,i={мс:0,точек:0};Fe[n]=i;const r=vt,u=Math.max(8,Math.round(vt*t)),c=u*r*ht;i.точек=c;const f=new Uint16Array(c*4),d=new Float32Array(W*2);for(let y=0;y<W;y++)d[y*2]=(o()-.5)*2*Math.PI,d[y*2+1]=30*(o()-.5)*Math.PI/180;const l=y=>Math.round(Math.min(1,Math.max(0,y))*65535);let s=0,h=0;const g=()=>{for(let y=0;y<u;y++)for(let P=0;P<ht;P++){const N=(y+.5)/u,C=Math.min(W-1,Math.floor(W*(o()+2*N)/3));f[s*4]=C;const T=Math.sqrt(-2*Math.log(1-o()))*Yn,et=o()*2*Math.PI;f[s*4+1]=l(Math.cos(et)*T/Wt+.5),f[s*4+2]=l(Math.sin(et)*T/Wt+.5),f[s*4+3]=l(o()),s++}h++},M=y=>{const P=performance.now(),N=P+Math.max(2,Math.min(8,y&&y.timeRemaining?y.timeRemaining()-1:6));for(;h<r&&performance.now()<N;)g();if(i.мс+=performance.now()-P,h<r){we(M);return}const C=new dt,T=new kt(f,4,!0);T.onUpload(function(){this.array=null}),C.setAttribute("aPack",T),C.setDrawRange(0,c),e({g:C,GH:r,GW:u,углы:d})};we(M)}const Fe=[];function eo(t){return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const we=t=>window.requestIdleCallback?window.requestIdleCallback(t,{timeout:1e3}):setTimeout(t,16);function Ge(t,e){Bn(n=>t.снят?n():to(t.ratio,({g:a,GW:o,углы:i})=>{if(t.снят){a.dispose(),n();return}t.dust.geometry.dispose(),t.dust.geometry=a;const r=t.dust.material.uniforms;r.uGW.value=o,r.uAng.value=i,n()},e))}const no=`
varying float vUp;
varying vec3 vNrm;
varying vec3 vPos;
void main() {
  // ВЫСОТА БЕРЁТСЯ ИЗ САМОЙ ВЕРШИНЫ, а не из развёртки. У цилиндра three.js
  // развёртка идёт сверху вниз, и построенный на ней луч горел ярче всего
  // ВВЕРХУ, а к полу гас — ровно наоборот задуманному. По координате вершины
  // двусмысленности нет: у заготовки высота единичная, значит y идёт
  // от −0.5 внизу до +0.5 вверху.
  vUp = position.y + 0.5;
  vNrm = normalMatrix * normal;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vPos = mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`,oo=`
precision highp float;
uniform vec3 uTint;
uniform float uAmt;
uniform float uTime;
uniform float uGrow;   // докуда дом уже вырисован: луч растёт вместе с ним
uniform float uReach;
uniform float uFill;
uniform float uRimK;
uniform float uRimPow;
varying float vUp;
varying vec3 vNrm;
varying vec3 vPos;
void main() {
  // КРОМКА. Чем косее смотрим на стенку конуса, тем длиннее путь взгляда
  // внутри неё, тем ярче. У образца так же: середина луча почти пуста,
  // а края горят.
  float rim = 1.0 - abs(dot(normalize(vNrm), normalize(-vPos)));
  rim = uRimK * pow(clamp(rim, 0.0, 1.0), uRimPow);
  // ПО ВЫСОТЕ: у самого пола луч ярче всего, кверху растворяется ДО НУЛЯ.
  // Не до сотых, как было: верх конуса виден почти вскользь, и кромка там
  // во много раз сильнее любого остатка — на кадре верх заливало светом,
  // а низ терялся, то есть луч читался падающим сверху, а не идущим от пола.
  // Ноль наверху заодно убирает обрез: обрезу в луче взяться неоткуда.
  float up = clamp(vUp, 0.0, 1.0);
  // До дома свет доходит остатком uReach и лишь у самого верха мягко
  // сходит на нет — обреза нет, но и пустоты под рисунком тоже.
  float fall = mix(pow(clamp(1.0 - up, 0.0, 1.0), 1.5), 1.0 - (1.0 - uReach) * up, step(0.001, uReach));
  fall *= 1.0 - smoothstep(0.9, 1.0, up);
  // ПОЛОСЫ, БЕГУЩИЕ ВВЕРХ. Ими луч читается лучом, а не конусом из стекла:
  // глаз видит, что сквозь него что-то передаётся.
  float band = 0.78 + 0.22 * sin(vUp * 38.0 - uTime * 2.4);
  // Луч не обгоняет стройку: покуда дом вырисован до половины, и луч
  // доходит дотуда же.
  float lvl = 1.0 - smoothstep(uGrow, uGrow + 0.12, up);
  // Кромка к верху слабеет быстрее самого луча: верх конуса виден вскользь,
  // и полная кромка там горела бы жёлтым эллипсом поверх низа рисунка.
  float rimUp = rim * (1.0 - 0.8 * smoothstep(0.3, 1.0, up) * step(0.001, uReach));
  float a = uAmt * (rimUp + uFill) * fall * band * lvl;
  gl_FragColor = vec4(uTint * a, a);
}
`,ao=`
uniform float uTime;
uniform float uR0;
uniform float uR1;
uniform float uPx;
attribute vec4 aSeed;
varying float vA;
void main() {
  float y = fract(aSeed.w + uTime * (0.04 + 0.05 * aSeed.z));
  float r = mix(uR0, uR1, y) * sqrt(aSeed.y);
  float az = aSeed.x * 6.2831853 + uTime * 0.05 * (aSeed.z - 0.5);
  vec3 p = vec3(cos(az) * r, y - 0.5, sin(az) * r);
  vA = smoothstep(0.0, 0.15, y) * (1.0 - smoothstep(0.7, 0.95, y)) * (0.5 + 0.5 * sin(uTime * (1.0 + aSeed.z * 2.0) + aSeed.x * 40.0));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = uPx * (1.0 + aSeed.z);
}
`,so=`
precision highp float;
uniform vec3 uTint;
uniform float uAmt;
uniform float uGrow;
uniform float uDot;
varying float vA;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = uAmt * uDot * vA * (1.0 - smoothstep(0.1, 0.5, d)) * step(0.5, uGrow);
  gl_FragColor = vec4(uTint * a, a);
}
`;function io(t,e){const n=new Qe;return k.map((a,o)=>{const i=n.load(`/assets/houses/${a.key}-${a.src||"photo"}.webp`,g=>{const M=g.image;h.ratio=M.width/M.height,g.colorSpace=te,Ge(h,o)});i.colorSpace=te;const r=new at({vertexShader:Kn,fragmentShader:Xn,transparent:!0,depthWrite:!1,depthTest:!1,side:ee,blending:st,uniforms:{uMap:{value:i},uAlpha:{value:0},uGrow:{value:0},uEdge:{value:2.2},uCut:{value:a.cut||0},uSide:{value:new Lt(a.left??a.side??.14,a.side??.14)},uTime:{value:0},uScan:{value:fe},uScanN:{value:de}}}),u=new ne(new tn(1,1),r);u.frustumCulled=!1,u.visible=!1;const c=new It;c.add(u);const f=new oe(new dt,new at({vertexShader:Zn,fragmentShader:Qn,transparent:!0,depthWrite:!1,depthTest:!1,blending:st,uniforms:{uMap:{value:i},uAlpha:{value:0},uDis:{value:0},uPx:{value:2},uGain:{value:1},uFly:{value:qn},uLift:{value:1},uChaos:{value:$n},uGrow:{value:0},uEdge:{value:2.2},uCut:{value:a.cut||0},uSide:{value:new Lt(a.left??a.side??.14,a.side??.14)},uTime:{value:0},uScan:{value:fe},uScanN:{value:de},uGW:{value:1},uAng:{value:new Float32Array(W*2)}}}));f.frustumCulled=!1,f.visible=!1,u.add(f);const d=new at({vertexShader:no,fragmentShader:oo,transparent:!0,depthWrite:!1,depthTest:!1,side:ee,blending:st,uniforms:{uTint:{value:e.clone()},uAmt:{value:0},uTime:{value:0},uGrow:{value:0},uReach:{value:Wn},uFill:{value:Dn},uRimK:{value:Nn},uRimPow:{value:On},uR0:{value:me},uR1:{value:ve},uPx:{value:2.5*Math.min(window.devicePixelRatio||1,2)},uDot:{value:jn}}}),l=new ne(new en(ve,me,1,40,1,!0),d);l.frustumCulled=!1,l.visible=!1,l.renderOrder=-1;{const g=new dt,M=new Float32Array(he*4);for(let P=0;P<M.length;P++)M[P]=Math.random();g.setAttribute("aSeed",new kt(M,4)),g.setAttribute("position",new kt(new Float32Array(he*3),3));const y=new oe(g,new at({vertexShader:ao,fragmentShader:so,uniforms:d.uniforms,transparent:!0,depthWrite:!1,depthTest:!1,blending:st}));y.frustumCulled=!1,y.renderOrder=-1,l.add(y)}const s=new It;s.add(l),t.add(s),t.add(c);const h={key:a.key,share:a.share,tilt:a.tilt||0,size:a.size||1,mesh:u,holder:c,beam:l,post:s,dust:f,ratio:1.2};return h})}const pt=()=>document.querySelector("[data-story-band]");let it=null,rt=null;function Le(){if(it)return it;const t=Ke();if(!t)return null;const e=k.map(f=>t[f.key]).filter(Boolean).map(f=>[f.u,f.v]);if(e.length<2)return null;const n=1500/10400,a=[e[1][0]-e[0][0],e[1][1]-e[0][1]],o=Math.hypot(a[0],a[1])||1,i=e.length,r=[e[i-1][0]-e[i-2][0],e[i-1][1]-e[i-2][1]],u=Math.hypot(r[0],r[1])||1,c=[e[i-1][0]+r[0]/u*n,e[i-1][1]+r[1]/u*n];return it=[[e[0][0]-a[0]/o*n,e[0][1]-a[1]/o*n],...e,c],it}function ro(){if(rt)return rt;const t=Le();if(!t)return null;const e=[];for(let o=0;o+1<t.length;o++)e.push(Math.atan2(t[o+1][1]-t[o][1],t[o+1][0]-t[o][0]));const n=[0],a=[ge];for(let o=1;o<e.length;o++){let i=e[o]-e[o-1];for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;n.push(i),a.push(Math.max(ge,1.5*Math.abs(i)/wo))}return rt={начало:e[0]||0,шаги:n,окна:a},rt}function lo(t,e){const n=ro();if(!n)return{dx:1,dy:0};let a=n.начало;for(let o=1;o<n.шаги.length;o++){const i=w((e-o)/n.окна[o]+.5);a+=n.шаги[o]*(i*i*(3-2*i))}for(let o=1;o<Rt.length;o++){if(!Rt[o])continue;const i=(e-o)/Ie.окно;Math.abs(i)<1&&(a+=Rt[o]*.5*(1+Math.cos(Math.PI*i)))}return{dx:Math.cos(a),dy:Math.sin(a)}}const Rt=[0,0,68,-90,0,0].map(t=>t*Math.PI/180),Ie={окно:1.2,подъём:.15};function lt(t,e){return t[Math.max(0,Math.min(t.length-1,e))]}function co(t,e){const n=Math.floor(e),a=e-n,o=lt(t,n-1),i=lt(t,n),r=lt(t,n+1),u=lt(t,n+2),c=a*a,f=c*a,d=s=>.5*(2*i[s]+(-o[s]+r[s])*a+(2*o[s]-5*i[s]+4*r[s]-u[s])*c+(-o[s]+3*i[s]-3*r[s]+u[s])*f),l=s=>.5*(-o[s]+r[s]+2*(2*o[s]-5*i[s]+4*r[s]-u[s])*a+3*(-o[s]+3*i[s]-3*r[s]+u[s])*c);return{u:d(0),v:d(1),du:l(0),dv:l(1)}}const uo=.35;let Y=null;const jt=()=>{Y=null};document.addEventListener("astro:page-load",jt);addEventListener("resize",jt,{passive:!0});typeof ResizeObserver=="function"&&new ResizeObserver(jt).observe(document.documentElement);function fo(t){if(!Y||Y.el!==t){let e=0;for(let n=t;n;n=n.offsetParent)e+=n.offsetTop+(n===t?0:n.clientTop);Y={el:t,y:e}}return Y.y}function ke(t){const e=pt();if(!e)return 0;const n=window.innerHeight||1,a=fo(e);if(t.passed<=0){const i=n*uo,r=Math.max(1,a-sn()-i);return ho(w((rn()-i)/r),(1-ze)*r/n/D[0])}const o=Math.min(t.i,k.length-1);if(o===k.length-1){const i=(window.scrollY-a)/n,r=w((i-L[o])/mo);return 1+o+r*r*(3-2*r)}return 1+o+vo(In(t))}const mo=3,ze=.7,vo=t=>{const e=w(t);return e-ze*Math.sin(2*Math.PI*e)/(2*Math.PI)},ho=(t,e=0)=>{const n=w(t),a=Math.min(1.6,Math.max(0,e));return a*n+(1-a)*(1-(1-n)*(1-n))},ye=.42,po=t=>{const e=w(t),n=e*e*(3-2*e);return ye+(1-ye)*n},wo=44*Math.PI/180,ge=1;function yo(t){const e=Le();if(!e)return;const n=Math.min(ke(t),e.length-1.0001),{u:a,v:o}=co(e,n),{dx:i,dy:r}=lo(e,n);xe(n-1,a,o,-r,i);const u=po(Math.min(1,n)),c=Math.max(0,n-1),f=c-Math.floor(c),d=n>1&&n<=e.length-2?Math.sin(Math.PI*f)**2:0;Je(u*(1-Ie.подъём*d))}const Bt="realEstate",Dt=2*Math.atan(.5/Gt.FOCAL)*180/Math.PI,wt=.62,go=.3;let J=$;const Mo=[1,1,1,.85,1];let Ue=1;const xo=.375,Et=(t,e)=>t*(wt-.5)+t*(e-wt)*Ue*Math.max(0,X-J)/X;let ct=null;function So(t,e){const n=getComputedStyle(document.body).getPropertyValue(t).trim();return new an(n||e)}let b=null,v=null,Z=null,m=null,A=null,_=[],I=0,B=null,p=null;const j=new tt,q=new tt,_o=new tt,ut=new tt,R=new tt,bo=new Lt,Ao=performance.now(),Me=()=>typeof window.__cfigStoryT=="number"?window.__cfigStoryT:(performance.now()-Ao)/1e3;function Nt(){const t=pt();if(!t)return null;let e=B;if(e===null)if(p&&p.end>p.start)e=Math.min(Math.max((window.scrollY-p.start)/(p.end-p.start),0),1);else{const i=window.innerHeight||1,r=t.getBoundingClientRect(),u=r.height-i;if(u<=0)return null;e=Math.min(Math.max(-r.top,0),u)/u}const n=kn,a=Math.min(n-1e-4,e*n);let o=0;for(;o+1<Q&&a>=L[o+1];)o++;if(e<=0){const i=window.innerHeight||1,r=p&&p.end>p.start?p.start:t.getBoundingClientRect().top+window.scrollY,u=p&&p.end>p.start?Math.min(1,(p.end-p.start)/i/n):1,c=r-Ae[0]*i*u;if(window.scrollY<r)return{i:0,t:0,passed:e,pre:w((window.scrollY-c)/(r-c))}}return{i:o,t:(a-L[o])/D[o],xs:a-L[o],L:D[o],passed:e}}function To(){const t=document.querySelector("#canvas-wrapper");if(!t)return null;let e=t.querySelector("canvas.canvas-story");return e||(e=document.createElement("canvas"),e.className="canvas-story",e.setAttribute("aria-hidden","true"),t.append(e)),e}let yt=0,gt=0;const Ht=typeof ResizeObserver=="function"?new ResizeObserver(()=>{m&&(yt=m.clientWidth,gt=m.clientHeight)}):null;function Po(){if(!A||!m)return;Ht||(yt=m.clientWidth,gt=m.clientHeight);const t=Math.min(2,window.devicePixelRatio||1),e=Math.max(1,Math.round(yt*t)),n=Math.max(1,Math.round(gt*t));m.width===e&&m.height===n||(A.setPixelRatio(1),A.setSize(e,n,!1),v.aspect=e/n,v.updateProjectionMatrix())}let We=!1;function Co(){if(m=To(),!m)return!1;try{A=new Ye({canvas:m,alpha:!0,antialias:!0})}catch{return We=!0,A=null,m.remove(),m=null,!1}A.setClearColor(0,0),yt=m.clientWidth,gt=m.clientHeight,Ht?.observe(m),m.addEventListener("webglcontextrestored",()=>{_.forEach((e,n)=>{e.dust.geometry=new dt,e.ratio&&Ge(e,n)})}),b=new nn,Z=new It,b.add(Z),v=new on(Dt,1,.05,400);const t=So("--accent-section","#B69600");return _=io(Z,t),!0}let Mt=NaN;function Ro(t){t===Mt&&v.projectionMatrix.elements[9]===-2*t||(Mt=t,v.updateProjectionMatrix(),v.projectionMatrix.elements[9]=-2*t,v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),Se(t))}function Eo(t){if(!t)return J=$,Qt(J),0;const e=window.innerHeight||1,n=p&&p.end>p.start?p.end:1/0,a=1-E(w((window.scrollY-n)/(e*fn))),o=t.pre!==void 0?-.72*(1-t.pre):L[t.i]+(t.xs||0),i=(window.innerWidth||0)<1024,r=_.map((c,f)=>vn[f]??(K[f]?cn+un*(i?0:U[f]||0):0)),u=_.map((c,f)=>hn[f]??(K[f]?mn:$));return J=$+(zt(u,o)-$)*a,Qt(J),zt(r,o)*a}const Fo=39;function Go(t,e,n,a,o){const i=window.innerHeight||1,r=v.projectionMatrix.elements,u=v.matrixWorldInverse.elements,c=t.лучКлюч||(t.лучКлюч=new Float64Array(Fo).fill(NaN));let f=c[0]===e.x&&c[1]===e.y&&c[2]===e.z&&c[3]===n&&c[4]===a&&c[5]===o&&c[6]===i;for(let d=0;f&&d<16;d++)f=c[7+d]===r[d]&&c[23+d]===u[d];if(f)return t.лучВысота;c[0]=e.x,c[1]=e.y,c[2]=e.z,c[3]=n,c[4]=a,c[5]=o,c[6]=i;for(let d=0;d<16;d++)c[7+d]=r[d],c[23+d]=u[d];for(let d=0;d<24;d++){const l=(a+o)*.5;q.copy(e),q.y+=l,q.project(v),(.5-q.y*.5)*i>n?a=l:o=l}return t.лучВысота=Math.max(.05,(a+o)*.5),t.лучВысота}function Lo(){const t=Nt();if(Po(),Ro(Eo(t)),!t){for(const l of _)l.mesh.visible=!1,l.beam.visible=!1;At(0,0,0),Tt(0,0),xe(-1),A.render(b,v);return}let e=_.length,n=!1,a=!1,o=1,i=0,r=1;const u=t.pre!==void 0?-.72*(1-t.pre):L[t.i]+t.xs,c=u;for(let l=0;l<_.length;l++){const[s,h,g]=G[l];if(!(u<s||u>=g)){e=l,u<h?(n=!0,o=(u-s)/(h-s),r=h-s):(a=!0,i=(u-h)/(g-h));break}}if(a){const l=ft(),s=Ft(e),h=window.innerHeight||1,g=window.innerWidth||1;!s||s.x<0||s.x>g||s.y>h?i=1:l&&s.y>l.y&&(i=Math.max(i,w((s.y-l.y)/Math.max(1,h-l.y))))}const f=n||a,d=wt+(go-wt)*xn(c);Ue=zt(Mo,c)*(1+xo*((v.aspect||1.6)-1.6));for(let l=0;l<_.length;l++){const s=_[l],h=s.mesh.material.uniforms;if(l!==e){s.mesh.visible=!1,s.beam.visible=!1,s.dust.visible=!1;continue}s.mesh.visible=!0,s.beam.visible=!0;const g=o*r,M=_e(r),y=n?w((g-M.дом)/Math.max(.001,bn*r-M.дом)):1,N=2*Math.tan(Dt*Math.PI/360)*X,C=N*v.aspect,T=Math.min(N*(pn[l]??(K[l]?dn:ln)),C*wn/s.ratio)*s.size,et=T*s.ratio;s.mesh.scale.set(et,T,1),s.mesh.position.y=T*(s.share-.5),s.holder.rotation.x=-(s.tilt||0),s.holder.position.set(C*(d-.5),-Gt.CAM_Y,-X);const qt=s.holder.position.z;let F=null,z=1;if(f){const x=Ft(l),S=ft();if(x&&S?s.сдвиг=[x.x-S.x,x.y-S.y]:n&&(s.сдвиг=null),S&&s.сдвиг){z=n?Pt+(1-Pt)*o:1+Rn*i,j.copy(s.holder.position).project(v);const V=window.innerWidth||1,O=window.innerHeight||1,He=S.x+s.сдвиг[0]+((j.x*.5+.5)*V-S.x)*z,Zt=se[l]??ae,qe=K[l]&&Zt>=0?S.y-Zt*O:(.5-j.y*.5)*O,Ve=S.y+s.сдвиг[1]+(qe-S.y)*z;R.set(He/V*2-1,-(Ve/O)*2+1,.5).unproject(v);const $e=s.holder.position.z/z;R.z<-1e-4&&(R.multiplyScalar($e/R.z),s.holder.position.copy(R),F=x||{x:NaN,y:NaN,s:z,нет:!0})}}const Vt=n?Math.max(.02,1-s.share):.02;h.uGrow.value=Vt+(1.06-Vt)*zn(y);const Ne=n?F?Tn(w((g-M.дом)/M.вход)):0:a&&!F?0:1,$t=n||i<=0?0:ie+(Sn-ie)*w(i)+(i>=1?1:0),nt=.95*Ne,xt=E(w(i/Hn));if(h.uAlpha.value=nt*(1-xt),s.dust.visible=$t<1&&xt>0,s.dust.visible){const x=s.dust.material.uniforms;x.uDis.value=$t,x.uAlpha.value=nt*xt*(a?1-E(w((i-.75)/.25)):1),x.uGrow.value=h.uGrow.value,x.uTime.value=Me(),s.holder.updateMatrixWorld(!0),ut.set(0,-.5,0).applyMatrix4(s.mesh.matrixWorld).project(v),q.set(0,.5,0).applyMatrix4(s.mesh.matrixWorld).project(v);const S=Math.abs(q.y-ut.y)*.5*A.getDrawingBufferSize(bo).y,V=Number.isFinite(S)&&S>0?S/vt:1;x.uPx.value=Math.min(6,Math.max(1,V*1.15));const O=ht*Math.max(1,(x.uPx.value/Math.max(V,.001))**2);x.uGain.value=Jn/O,x.uLift.value=1+(O-1)*Vn}const Yt=Me();h.uTime.value=Yt;const St=f?F&&!F.нет?F:null:ft();let Jt=!1;const _t=_o.copy(s.holder.position);if(St){const x=window.innerWidth||1,S=window.innerHeight||1;R.set(St.x/x*2-1,-(St.y/S)*2+1,.5).unproject(v),R.y<-1e-4&&(R.multiplyScalar(-Gt.CAM_Y/R.y),_t.copy(R),Jt=!0)}ut.copy(s.holder.position).project(v);const Oe=(.5-ut.y*.5)*(window.innerHeight||1),ot=Go(s,_t,Oe,.02*T,3*T/Math.min(1,F&&F.s?F.s:1,z));s.beam.scale.set(ot,ot,ot),s.post.position.copy(_t),s.post.position.y+=ot*.5,s.post.quaternion.identity();const bt=s.beam.material.uniforms,Kt=n?1:1-E(w((i-re)/(_n-re))),Xt=w(g/M.луч),je=n?1+Pn*w((1-z)/(1-Pt)):1;bt.uAmt.value=Jt?Un*(n?.95*E(Xt)*je:nt*Kt):0,bt.uTime.value=Yt,bt.uGrow.value=n?.02+1.04*E(Xt):h.uGrow.value;const Be=K[l]&&(se[l]??ae)>=0;j.copy(s.holder.position).project(v),At((j.x*.5+.5)*window.innerWidth,(.5-j.y*.5)*window.innerHeight,Be?0:.75*nt*Kt),Tt(Et(C,d),-qt),ct=[Et(C,d),-qt]}if(yo(t),e>=_.length&&(At(0,0,0),ct)){const l=2*Math.tan(Dt*Math.PI/360)*X*v.aspect;ct[0]=Et(l,d),Tt(...ct)}Xe(_.map((l,s)=>En(s,c))),A.render(b,v)}function De(){b&&Lo(),I=requestAnimationFrame(De)}document.addEventListener("astro:before-preparation",t=>{if(!(document.body.dataset.route!==Bt||!t.to||new URL(t.to).pathname===location.pathname))for(const e of document.querySelectorAll("#canvas-wrapper canvas.canvas-track, #canvas-wrapper canvas.canvas-story, #canvas-wrapper canvas.canvas-resign"))e.style.transition="opacity 600ms ease-in",e.style.opacity="0"});const Io=15e3;let H=0;function ko(){if(H=0,!b||document.body.dataset.route===Bt)return;I&&(cancelAnimationFrame(I),I=0);for(const o of _)o.снят=!0;const t=new Set,e=new Set,n=new Set;b.traverse(o=>{o.geometry&&t.add(o.geometry);for(const i of[].concat(o.material||[]))e.add(i)});for(const o of e)if(o.uniforms)for(const i of Object.keys(o.uniforms)){const r=o.uniforms[i]&&o.uniforms[i].value;r&&r.isTexture&&n.add(r)}for(const o of t)o.dispose();for(const o of e)o.dispose();for(const o of n)o.dispose();b.clear(),Ht?.unobserve(m),A.dispose(),A.forceContextLoss();const a=m.cloneNode(!1);a.removeAttribute("width"),a.removeAttribute("height"),m.replaceWith(a),m=A=b=Z=v=null,_=[],Mt=NaN,window.__cfigStory=null}function Bo(){if(document.body.dataset.route!==Bt||!pt()){I&&(cancelAnimationFrame(I),I=0),Se(0),Mt=NaN;for(const e of _)e.mesh.visible=!1,e.beam.visible=!1;m&&(m.style.opacity="0"),b&&!H&&(H=setTimeout(ko,Io));return}if(H&&(clearTimeout(H),H=0),We||!b&&!Co())return;m&&(m.style.transition="",m.style.opacity="1");const t=pt();Mn([...t.querySelectorAll(":scope > [data-story-side]")].map(e=>e.dataset.storySide==="left"?1:0)),p?.kill(),B=null,p=Ze.create({trigger:t,start:"top top",end:"bottom bottom",onUpdate:e=>{B=e.progress},onLeave:()=>{B=1},onLeaveBack:()=>{B=null},onEnterBack:e=>{B=e.progress}}),I||De(),window.__cfigStory={houses:_,place:Nt,пыльЗамер:Fe,путь:()=>{const e=Nt();return e?ke(e):null},lens:v,group:Z,stage:b,mark:p,якорь:ft,точка:Ft,начала:[...L],отрезки:[...D],жизни:G.map(e=>[...e])}}export{Bo as init};
