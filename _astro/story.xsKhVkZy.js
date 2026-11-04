import{W as on,S as sn,G as kt,P as an,T as rn,a as ie,b as vt,V as Ot,A as gt,D as re,M as le,c as ln,d as ce,B as Bt,C as cn,e as V,f as un,g as ft}from"./three.module.DHSGe32l.js";import{S as dn,s as Ht,a as ot,h as fn,b as mn,F as Wt,c as Gt,d as Nt,e as Ge,f as ue,g as Ne,M as st,i as Tt,j as pn,k as hn,l as de}from"./Base.astro_astro_type_script_index_0_lang.CUaOGETM.js";import"./Lab.astro_astro_type_script_index_0_lang.CAB2FFuo.js";import"./router.UeToN5xW.js";const vn="realEstate",dt=new URLSearchParams(location.search),o=(t,n)=>dt.has(t)?Number(dt.get(t)):n;o("slinepx",2.2);const qt=2*Math.atan(.5/Wt.FOCAL)*180/Math.PI,_=[{key:"palachovka",share:.854,cut:.45,size:.86},{key:"kostelicek",share:.88},{key:"karlovina",share:.9,side:.05},{key:"labska",share:.86,side:.04,left:.2},{key:"hradecka",share:.92}],gn=o("sfill",.52),wn=o("slens",-.17),yn=o("slensl",-.07),xn=o("slensout",1),fe=o("sbase",.05),Mn=o("sfill2",.62),bn=o("snear2",1.1),ct=[0,0,1,1,1],Sn=[null,null,o("slensk",-.1),o("slens4",-.1),o("slens5",-.1)],_n=[null,null,o("sneark",1.95),o("snear4",1.75),o("snear5",1.55)],me=[null,null,o("sbasek",.13),o("sbase4",.17),o("sbase5",.15)],An=[null,null,o("sfillk",.62),o("sfill4",.56),o("sfill5",.56)];function Yt(t,n){let e=t[0];for(let s=1;s<_.length;s++){const i=t[s]-t[s-1];if(!i)continue;const r=I(s-1)[2],a=I(s)[0];e+=i*T(v((n-r)/Math.max(.001,a-r)))}return e}const Tn=o("sfillw",.44),pe=o("sscan",.35),he=o("sscann",34),Ue=o("sscanv",.7),ve=o("sbeam",2.2),ge=o("sbeam0",.012),we=o("sbeam1",.7);o("sbeamup",0);const Pn=o("sbreach",.15),Cn=o("sbfill",.01),En=o("sbrim",.25),Rn=o("sbrimpow",.8),Ut=o("sbdots",70),Fn=o("sbdot",.4),ut=o("smidx",.62),In=o("smidxl",.3);let at=st;const Ln=[1,1,o("sax3",1),o("sax4",.85),1];let je=1;const kn=o("saxa",.375),jt=(t,n)=>t*(ut-.5)+t*(n-ut)*je*Math.max(0,J-at)/J,Gn=o("ssidefrom",.5),Nn=[0,0,1,0,o("ssidegap5",1)];let D=[];function Un(t){if((window.innerWidth||0)<1024||D.length<2)return 0;let n=D[0]||0;for(let e=1;e<D.length&&e<_.length;e++){const s=(D[e]||0)-(D[e-1]||0);if(!s)continue;const i=Nn[e],r=i?I(e-1)[2]:I(e-1)[2]-Gn,a=i?I(e)[0]:I(e)[1];n+=s*T(v((t-r)/Math.max(.001,a-r)))}return n}const J=o("sdepth",3.2),ye=o("splot",.3),xe=o("smetres",17.5);o("syaw",-.62);o("stilt",.1);const jn=o("sdraw",.34),Me=o("shold",.825),Dn=o("sgone",.965),zn=o("scome",.16),y=dt.get("sscene")==="old",be=dt.get("sdebug")==="1",On=dt.get("stune")==="1";let nt=null,it=null,wt=null;const Se=o("sdust0",0),Bn=o("sdust1",1),_e=o("sdustvis",.62),yt=o("sdustfrom",.18),Ae=o("sbeamoff0",.05),Hn=o("sbeamoff1",.5),Wn=o("sdrawin",.8),qn=o("sbeamin",.26),Te=o("shousefrom",.07),Pe=o("scomein",.44),Yn=Tt.parseEase("power2.out"),Vn=o("sbeamfar",1.5),De=t=>{const n=Math.min(1,t/(Te+Pe));return{луч:qn*n,дом:Te*n,вход:Pe*n}},Jn=o("sappr",.72),At=o("sapprlen",.72),ze=o("sgap",.6),Dt=o("sfar",.3),Kn=o("sgrow",.1),G=[Jn,o("sappr2",.72),o("sappr3",2),o("sappr4",At),o("sappr5",At)],Vt=t=>G[t]??At,Oe=o("sleavelen",1),Be=[1.58,o("send2",1.27),o("send3",1.3),.8,.9],K=[o("sfullat1",.514),o("sfullat2",.6),o("sfullat3",.41),o("sfullat4",.6),o("sfullat5",.6)];function $n(t,n){const[e,s,i]=I(t);return n<e||n>=i?0:n<s?T(v((n-e)/De(s-e).луч)):1-T(v(((n-s)/(i-s)-.2)/.8))}const Ce=[];let zt=!1;function Xn(t){if(Ce.push(t),zt)return;zt=!0;const n=()=>{const e=Ce.shift();if(!e){zt=!1;return}e(()=>window.requestIdleCallback?window.requestIdleCallback(n,{timeout:2e3}):setTimeout(n,50))};window.requestIdleCallback?window.requestIdleCallback(n,{timeout:2e3}):setTimeout(n,50)}const I=t=>{const e=O(_.length)[t]-Vt(t),s=e+(K[t]??.6)*Vt(t);return[e,s,s+(Be[t]??1.29)]},Zn=o("stail",0),Qn=t=>Vt(t)*((K[t]??.6)-1)+(Be[t]??1.29),He=[0,o("sgapx",2.2),0,0,0],$=t=>Array.from({length:t},(n,e)=>y?1:e===t-1?Qn(e)+Zn:Oe+ze+At+(He[e]||0)),to=o("sgapsoft",.5),Ee=t=>t<=0?0:t>=1?t-.5:t*t*t-t*t*t*t/2;function eo(t){const n=y?0:He[t.i]||0;if(!n||t.xs===void 0)return t.t;const e=t.L-n,s=Oe,i=s+ze+n,r=Math.max(.001,Math.min(to,s,(i-s)/2,t.L-i)),a=n/(i-s),c=2*r*(Ee((t.xs-s+r)/(2*r))-Ee((t.xs-i+r)/(2*r)));return v((t.xs-a*c)/e)}const O=t=>$(t).reduce((n,e,s)=>(n.push(s?n[s-1]+$(t)[s-1]:0),n),[]),xt=75,Jt=o("sdustn",380),Kt=o("sdustrep",3),no=o("sswap",.12),oo=o("sdustfly",2.4),so=o("sdustlift",1),ao=o("sdustchaos",1),io=o("sdustspread",.16),ro=o("sdustk",1.55),lo=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,co=`
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
  float scan = 1.0 + uScan * sin(vUv.y * uScanN - uTime * ${Ue.toFixed(3)});
  // ДРОЖАНИЕ. Еле заметное: сильное читается поломкой, а не голограммой.
  float flick = 1.0 + 0.035 * sin(uTime * 7.3) * sin(uTime * 3.1 + 1.7);
  a *= scan * flick;
  gl_FragColor = vec4(c.rgb * a, a);
}
`,uo=`
attribute vec2 aUv;
attribute vec3 aLayer;   // слой 0..1, угол сдвига, угол поворота
attribute vec3 aJit;     // своё у каждой точки: сдвиг x, y и задержка
uniform float uChaos;    // хаос распада (0 — слоями, как в образце)
uniform float uDis;      // 0..1 — ход рассыпания
uniform float uPx;       // размер точки в пикселях
uniform float uFly;      // сила разлёта (1 — как в образце)
uniform float uLift;     // во сколько раз ярче точка, вышедшая из стопки
varying vec2 vUv;
varying float vFade;
varying float vLift;
void main() {
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
`,fo=`
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
  float scan = 1.0 + uScan * sin(vUv.y * uScanN - uTime * ${Ue.toFixed(3)});
  float flick = 1.0 + 0.035 * sin(uTime * 7.3) * sin(uTime * 3.1 + 1.7);
  a *= scan * flick;
  if (a < 0.002) discard;
  gl_FragColor = vec4(c.rgb * a, a);
}
`;function mo(t,n){const e=Jt,s=Math.max(8,Math.round(Jt*t)),i=s*e*Kt,r=new Float32Array(i*2),a=new Float32Array(i*3),c=new Float32Array(i*3),f=[];for(let p=0;p<xt;p++)f.push([(Math.random()-.5)*2*Math.PI,30*(Math.random()-.5)*Math.PI/180]);let d=0,m=0;const l=()=>{for(let p=0;p<s;p++)for(let h=0;h<Kt;h++){const M=(p+.5)/s,Pt=(m+.5)/e,mt=Math.min(xt-1,Math.floor(xt*(Math.random()+2*M)/3));r[d*2]=M,r[d*2+1]=Pt,a[d*3]=mt/xt,a[d*3+1]=f[mt][0],a[d*3+2]=f[mt][1];const Z=Math.sqrt(-2*Math.log(1-Math.random()))*io,L=Math.random()*2*Math.PI;c[d*3]=Math.cos(L)*Z,c[d*3+1]=Math.sin(L)*Z,c[d*3+2]=Math.random(),d++}m++},u=p=>{const h=performance.now()+Math.max(2,Math.min(8,p&&p.timeRemaining?p.timeRemaining()-1:6));for(;m<e&&performance.now()<h;)l();if(m<e){Re(u);return}const M=new Bt;M.setAttribute("position",new V(new Float32Array(i*3),3)),M.setAttribute("aUv",new V(r,2)),M.setAttribute("aLayer",new V(a,3)),M.setAttribute("aJit",new V(c,3)),n({g:M,GH:e})};Re(u)}const Re=t=>window.requestIdleCallback?window.requestIdleCallback(t,{timeout:1e3}):setTimeout(t,16),po=`
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
`,ho=`
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
`,vo=`
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
`,go=`
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
`;function wo(t,n){const e=getComputedStyle(document.body).getPropertyValue(t).trim();return new un(e||n)}let B=null,w=null,rt=null,P=null,N=null,g=[],lt=0,$t=-1,Y=null,x=null;const E=new ft,R=new ft,yo=new ft,Mt=new ft,C=new ft,xo=new Ot,Mo=performance.now(),Fe=()=>typeof window.__cfigStoryT=="number"?window.__cfigStoryT:(performance.now()-Mo)/1e3,X=()=>document.querySelector("[data-story-band]")||document.querySelector(".story");function Xt(){const t=X();if(!t)return null;let n=Y;if(n===null)if(x&&x.end>x.start)n=Math.min(Math.max((window.scrollY-x.start)/(x.end-x.start),0),1);else{const f=window.innerHeight||1,d=t.getBoundingClientRect(),m=d.height-f;if(m<=0)return null;n=Math.min(Math.max(-d.top,0),m)/m}const e=g.length,s=$(e),i=O(e),r=i[e-1]+s[e-1],a=Math.min(r-1e-4,n*r);let c=0;for(;c+1<e&&a>=i[c+1];)c++;if(n<=0&&!y){const f=window.innerHeight||1,d=x&&x.end>x.start?x.start:t.getBoundingClientRect().top+window.scrollY,m=x&&x.end>x.start?Math.min(1,(x.end-x.start)/f/r):1,l=d-G[0]*f*m;if(window.scrollY<d)return{i:0,t:0,passed:n,pre:v((window.scrollY-l)/(d-l))}}return{i:c,t:(a-i[c])/s[c],xs:a-i[c],L:s[c],passed:n}}function bo(t){const n=X();if(n)for(const e of n.querySelectorAll("[data-story-item]"))e.classList.toggle("is-on",Number(e.dataset.storyItem)===t)}function So(){const t=document.querySelector("#canvas-wrapper");if(!t)return null;let n=t.querySelector("canvas.canvas-story");return n||(n=document.createElement("canvas"),n.className="canvas-story",n.setAttribute("aria-hidden","true"),t.append(n)),n}function _o(){if(!N||!P)return;const t=Math.min(2,window.devicePixelRatio||1),n=Math.max(1,Math.round(P.clientWidth*t)),e=Math.max(1,Math.round(P.clientHeight*t));P.width===n&&P.height===e||(N.setPixelRatio(1),N.setSize(n,e,!1),w.aspect=n/e,w.updateProjectionMatrix())}function Ao(){if(P=So(),!P)return!1;N=new on({canvas:P,alpha:!0,antialias:!0}),N.setClearColor(0,0),B=new sn,rt=new kt,B.add(rt),w=new an(qt,1,.05,400);const t=wo("--accent-section","#B69600"),n=new rn;return g=_.map(e=>{const s=n.load(`/assets/houses/${e.key}-${e.src||"photo"}.webp`,u=>{const p=u.image;l.ratio=p.width/p.height,u.colorSpace=ie,Xn(h=>mo(l.ratio,({g:M})=>{l.dust.geometry.dispose(),l.dust.geometry=M,h()}))});s.colorSpace=ie;const i=new vt({vertexShader:lo,fragmentShader:co,transparent:!0,depthWrite:!1,depthTest:!1,side:re,blending:gt,uniforms:{uMap:{value:s},uAlpha:{value:0},uGrow:{value:0},uEdge:{value:2.2},uCut:{value:e.cut||0},uSide:{value:new Ot(e.left??e.side??.14,e.side??.14)},uTime:{value:0},uScan:{value:pe},uScanN:{value:he}}}),r=new le(new ln(1,1),i);r.frustumCulled=!1,r.visible=!1;const a=new kt;a.add(r);const c=new ce(new Bt,new vt({vertexShader:uo,fragmentShader:fo,transparent:!0,depthWrite:!1,depthTest:!1,blending:gt,uniforms:{uMap:{value:s},uAlpha:{value:0},uDis:{value:0},uPx:{value:2},uGain:{value:1},uFly:{value:oo},uLift:{value:1},uChaos:{value:ao},uGrow:{value:0},uEdge:{value:2.2},uCut:{value:e.cut||0},uSide:{value:new Ot(e.left??e.side??.14,e.side??.14)},uTime:{value:0},uScan:{value:pe},uScanN:{value:he}}}));c.frustumCulled=!1,c.visible=!1,r.add(c);const f=new vt({vertexShader:po,fragmentShader:ho,transparent:!0,depthWrite:!1,depthTest:!1,side:re,blending:gt,uniforms:{uTint:{value:t.clone()},uAmt:{value:0},uTime:{value:0},uGrow:{value:0},uReach:{value:Pn},uFill:{value:Cn},uRimK:{value:En},uRimPow:{value:Rn},uR0:{value:ge},uR1:{value:we},uPx:{value:2.5*Math.min(window.devicePixelRatio||1,2)},uDot:{value:Fn}}}),d=new le(new cn(we,ge,1,40,1,!0),f);if(d.frustumCulled=!1,d.visible=!1,d.renderOrder=-1,Ut>0){const u=new Bt,p=new Float32Array(Ut*4);for(let M=0;M<p.length;M++)p[M]=Math.random();u.setAttribute("aSeed",new V(p,4)),u.setAttribute("position",new V(new Float32Array(Ut*3),3));const h=new ce(u,new vt({vertexShader:vo,fragmentShader:go,uniforms:f.uniforms,transparent:!0,depthWrite:!1,depthTest:!1,blending:gt}));h.frustumCulled=!1,h.renderOrder=-1,d.add(h)}const m=new kt;m.add(d),rt.add(m),rt.add(a);const l={key:e.key,share:e.share,tilt:e.tilt||0,size:e.size||1,mesh:r,holder:a,beam:d,post:m,dust:c,ratio:1.2};return l}),!0}const To=Tt.parseEase("power2.out"),Po=Tt.parseEase("power2.in"),T=Tt.parseEase("sine.inOut"),v=t=>Math.max(0,Math.min(1,t));let Zt=NaN;function Co(t){t===Zt&&w.projectionMatrix.elements[9]===-2*t||(Zt=t,w.updateProjectionMatrix(),w.projectionMatrix.elements[9]=-2*t,w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),Ne(t))}function Eo(t){if(!t||y)return at=st,de(at),0;const n=window.innerHeight||1,e=x&&x.end>x.start?x.end:1/0,s=1-T(v((window.scrollY-e)/(n*xn))),i=t.pre!==void 0?-G[0]*(1-t.pre):O(g.length)[t.i]+(t.xs||0),r=(window.innerWidth||0)<1024,a=g.map((f,d)=>Sn[d]??(ct[d]?wn+yn*(r?0:D[d]||0):0)),c=g.map((f,d)=>_n[d]??(ct[d]?bn:st));return at=st+(Yt(c,i)-st)*s,de(at),Yt(a,i)*s}function Ro(){const t=Xt();if(_o(),Co(Eo(t)),!t){for(const m of g)m.mesh.visible=!1,m.beam.visible=!1;Gt(0,0,0),Nt(0,0,0,0,0,0,0),Ge(-1),N.render(B,w);return}t.i!==$t&&($t=t.i,bo(t.i));let n=t.i,e=!1,s=!1,i=1,r=0,a=0,c=1;if(!y){const m=t.pre!==void 0?-G[0]*(1-t.pre):O(g.length)[t.i]+t.xs;a=m,n=g.length;for(let l=0;l<g.length;l++){const[u,p,h]=I(l);if(!(m<u||m>=h)){n=l,m<p?(e=!0,i=(m-u)/(p-u),c=p-u):(s=!0,r=(m-p)/(h-p));break}}if(s){const l=ot(),u=Ht(n),p=window.innerHeight||1,h=window.innerWidth||1;!u||u.x<0||u.x>h||u.y>p?r=1:l&&u.y>l.y&&(r=Math.max(r,v((u.y-l.y)/Math.max(1,p-l.y))))}}const f=e||s,d=y?ut:ut+(In-ut)*Un(a);je=y?1:Yt(Ln,a)*(1+kn*((w.aspect||1.6)-1.6));for(let m=0;m<g.length;m++){const l=g[m],u=l.mesh.material.uniforms;if(m!==n){l.mesh.visible=!1,l.beam.visible=!1,l.dust.visible=!1;continue}l.mesh.visible=!0,l.beam.visible=!0;const p=i*c,h=De(c),M=y?v(t.t/jn):e?v((p-h.дом)/Math.max(.001,Wn*c-h.дом)):1,Pt=v((t.t-Me)/(Dn-Me)),Z=2*Math.tan(qt*Math.PI/360)*J,L=Z*w.aspect,Q=Math.min(Z*(An[m]??(ct[m]?Mn:gn)),L*Tn/l.ratio)*l.size,U=Q*l.ratio;l.mesh.scale.set(U,Q,1),l.mesh.position.y=Q*(l.share-.5),l.holder.rotation.x=-(l.tilt||0),l.holder.position.set(L*(d-.5),-Wt.CAM_Y,-J);const Qt=l.holder.position.z;if(y){const b=T(t.t);l.holder.position.x+=L*.07*(.5-b),l.holder.position.z+=J*.06*b}let A=null,j=1;if(f){const b=Ht(m),S=ot();if(b&&S?l.сдвиг=[b.x-S.x,b.y-S.y]:e&&(l.сдвиг=null),S&&l.сдвиг){j=e?Dt+(1-Dt)*i:1+Kn*r;const q=1,et=j;E.copy(l.holder.position).project(w);const se=window.innerWidth||1,Lt=window.innerHeight||1,Qe=S.x+l.сдвиг[0]*q+((E.x*.5+.5)*se-S.x)*et,ae=me[m]??fe,tn=ct[m]&&ae>=0?S.y-ae*Lt:(.5-E.y*.5)*Lt,en=S.y+l.сдвиг[1]*q+(tn-S.y)*et;C.set(Qe/se*2-1,-(en/Lt)*2+1,.5).unproject(w);const nn=l.holder.position.z/j;C.z<-1e-4&&(C.multiplyScalar(nn/C.z),l.holder.position.copy(C),A=b||{x:NaN,y:NaN,s:j,нет:!0})}}const te=y||!e?.02:Math.max(.02,1-l.share);u.uGrow.value=te+(1.06-te)*To(M);const Je=y?T(v(t.t/zn)):e?A?Yn(v((p-h.дом)/h.вход)):0:s&&!A?0:1,H=y||e||r<=0?0:yt+(_e-yt)*v((r-Se)/(Bn-Se))+(r>=1?1:0),W=.95*Je*(y?1-Po(Pt):1),Ct=y?0:T(v(r/no));if(u.uAlpha.value=y?W:W*(1-Ct),l.dust.visible=!y&&H<1&&Ct>0,l.dust.visible){const b=l.dust.material.uniforms;b.uDis.value=H,b.uAlpha.value=W*Ct*(s?1-T(v((r-.75)/.25)):1),b.uGrow.value=u.uGrow.value,b.uTime.value=Fe(),l.holder.updateMatrixWorld(!0),Mt.set(0,-.5,0).applyMatrix4(l.mesh.matrixWorld).project(w),R.set(0,.5,0).applyMatrix4(l.mesh.matrixWorld).project(w);const S=Math.abs(R.y-Mt.y)*.5*N.getDrawingBufferSize(xo).y,q=Number.isFinite(S)&&S>0?S/Jt:1;b.uPx.value=Math.min(6,Math.max(1,q*1.15));const et=Kt*Math.max(1,(b.uPx.value/Math.max(q,.001))**2);b.uGain.value=ro/et,b.uLift.value=1+(et-1)*so}const ee=Fe();u.uTime.value=ee;const Et=f?A&&!A.нет?A:null:ot();let ne=!1;const pt=yo.copy(l.holder.position);if(Et){const b=window.innerWidth||1,S=window.innerHeight||1;C.set(Et.x/b*2-1,-(Et.y/S)*2+1,.5).unproject(w),C.y<-1e-4&&(C.multiplyScalar(-Wt.CAM_Y/C.y),pt.copy(C),ne=!0)}Mt.copy(l.holder.position).project(w);const Ke=(.5-Mt.y*.5)*(window.innerHeight||1);let Rt=.02*Q,Ft=3*Q/Math.min(1,A&&A.s?A.s:1,j);for(let b=0;b<24;b++){const S=(Rt+Ft)*.5;R.copy(pt),R.y+=S,R.project(w),(.5-R.y*.5)*(window.innerHeight||1)>Ke?Rt=S:Ft=S}const tt=Math.max(.05,(Rt+Ft)*.5),$e=R.copy(pt);$e.y+=tt,l.beam.scale.set(tt,tt,tt),l.post.position.copy(pt),l.post.position.y+=tt*.5,l.post.quaternion.identity();const ht=l.beam.material.uniforms,It=y||e?1:1-T(v((r-Ae)/(Hn-Ae))),oe=v(p/h.луч),Xe=e?1+Vn*v((1-j)/(1-Dt)):1;ht.uAmt.value=ne?ve*(e?.95*T(oe)*Xe:W*It):0,ht.uTime.value=ee,ht.uGrow.value=e?.02+1.04*T(oe):u.uGrow.value;const Ze=ct[m]&&(me[m]??fe)>=0;E.copy(l.holder.position).project(w),Gt((E.x*.5+.5)*window.innerWidth,(.5-E.y*.5)*window.innerHeight,Ze?0:.75*W*It),Nt(jt(L,d),-Qt,U*.5,U*.5*ye,0,y?W*It:0,U*xe),wt=[jt(L,d),-Qt,U*.5,U*.5*ye,0,0,U*xe],be&&(l.holder.updateMatrixWorld(!0),R.set(0,.5,0).applyMatrix4(l.mesh.matrixWorld).project(w),E.copy(l.holder.position).project(w),it={k:m,фаза:e?"подъезд":s?H>=1?"растворилось":"уход":"на месте",подъезд:e?i:1,уход:r,размер:j,высота:(R.y-E.y)*.5*(window.innerHeight||1),низY:(.5-E.y*.5)*(window.innerHeight||1),распад:H>=1?1:v((H-yt)/(_e-yt))*(H>0?1:0),луч:ht.uAmt.value/ve,кольцо:A&&!A.нет?A:ot()})}if(Ho(t),n>=g.length&&(Gt(0,0,0),wt)){const m=2*Math.tan(qt*Math.PI/360)*J*w.aspect;wt[0]=jt(m,d),Nt(...wt)}y?ue(null):ue(g.map((m,l)=>$n(l,a))),N.render(B,w),be&&Io(t,n)}function Fo(){if(document.getElementById("cfig-tune"))return;const t=document.createElement("div");t.id="cfig-tune",t.style.cssText="position:fixed;left:12px;bottom:12px;z-index:99999;padding:10px 12px;width:330px;background:rgba(0,0,0,.78);color:#ffd36a;font:12px/1.4 ui-monospace,Menlo,monospace;border:1px solid rgba(255,211,106,.4);border-radius:6px";const n=()=>{const a=new URLSearchParams(location.search);for(let c=1;c<k.length;c++){const f=Math.round(k[c]*180/Math.PI);f?a.set("sang"+c,String(f)):a.delete("sang"+c),z[c]?a.set("sside"+c,z[c].toFixed(3)):a.delete("sside"+c),c<=K.length&&a.set("sfullat"+c,K[c-1].toFixed(2)),c<=G.length&&a.set(c===1?"sappr":"sappr"+c,G[c-1].toFixed(2))}a.set("sangw",F.окно.toFixed(2)),a.set("slift2",F.подъём.toFixed(2)),g[0]&&(a.set("sbrim",g[0].beam.material.uniforms.uRimK.value.toFixed(2)),a.set("sbrimpow",g[0].beam.material.uniforms.uRimPow.value.toFixed(1))),history.replaceState(history.state,"",location.pathname+"?"+a.toString()),r.textContent=location.search},e=(a,c,f,d,m,l)=>{const u=document.createElement("label");u.style.cssText="display:grid;grid-template-columns:120px 1fr 52px;gap:6px;align-items:center;margin:2px 0";const p=document.createElement("span");p.textContent=a;const h=document.createElement("input");h.type="range",h.min=c,h.max=f,h.step=d,h.value=m();const M=document.createElement("span");return M.textContent=m(),h.addEventListener("input",()=>{l(Number(h.value)),M.textContent=h.value,n()}),u.append(p,h,M),u},s=a=>{const c=document.createElement("div");return c.textContent=a,c.style.cssText="margin:8px 0 2px;color:#fff",c};t.append(s("Заход камеры к проектам"));for(let a=1;a<k.length&&a<=_.length;a++)t.append(s(_[a-1].key)),t.append(e("поворот, °",-180,180,1,()=>Math.round(k[a]*180/Math.PI),c=>{k[a]=c*Math.PI/180})),t.append(e("сдвиг (+ влево)",-.08,.08,.001,()=>z[a],c=>{z[a]=c})),t.append(e("подъезд, экр",.2,3,.01,()=>G[a-1],c=>{G[a-1]=c})),t.append(e("полный на доле",.2,1,.01,()=>K[a-1],c=>{K[a-1]=c}));t.append(s("Общее")),t.append(e("зона поворота",.2,1.6,.05,()=>F.окно,a=>{F.окно=a})),t.append(e("подъём камеры",0,.6,.01,()=>F.подъём,a=>{F.подъём=a})),t.append(s("Луч"));const i=(a,c)=>{for(const f of g)f.beam.material.uniforms[a].value=c};t.append(e("грани",0,1.5,.05,()=>g[0].beam.material.uniforms.uRimK.value,a=>i("uRimK",a))),t.append(e("резкость граней",.8,4,.1,()=>g[0].beam.material.uniforms.uRimPow.value,a=>i("uRimPow",a)));const r=document.createElement("div");r.style.cssText="margin-top:8px;color:#9fb3c8;word-break:break-all",t.append(r),document.body.appendChild(t),n()}function Io(t,n){nt||(nt=document.createElement("pre"),nt.style.cssText="position:fixed;right:12px;bottom:12px;z-index:99999;margin:0;padding:10px 12px;background:rgba(0,0,0,.72);color:#ffd36a;font:12px/1.45 ui-monospace,Menlo,monospace;border:1px solid rgba(255,211,106,.4);border-radius:6px;pointer-events:none;white-space:pre",document.body.appendChild(nt));const e=X(),s=window.innerHeight||1,i=e?e.getBoundingClientRect().top+window.scrollY:0,r=(window.scrollY-i)/s,a=(d,m=2)=>d==null||Number.isNaN(d)?"—":Number(d).toFixed(m),c=d=>_[d]?_[d].key:"—",f=it&&it.k===n?it:null;nt.textContent=["прокрутка от начала проектов: "+a(r)+" экр","отрезок: "+c(t.i)+(t.xs!==void 0?"  +"+a(t.xs)+" из "+a(t.L)+" экр":"")+(t.pre!==void 0?"  (заезд "+a(t.pre)+")":""),"на экране: "+(f?c(f.k):"—"),f?"фаза: "+f.фаза:"",f?"подъезд: "+a(f.подъезд)+"   уход: "+a(f.уход):"",f?"размер: "+a(f.размер)+"   высота: "+a(f.высота,0)+" px   низ: "+a(f.низY,0)+" px":"",f?"распад (на глаз): "+a(f.распад)+"   луч: "+a(f.луч):"",f&&f.кольцо?"кольцо: "+a(f.кольцо.x,0)+", "+a(f.кольцо.y,0)+" px":""].filter(Boolean).join(`
`),it=null}let bt=null,St=null;function We(){if(bt)return bt;const t=hn();if(!t)return null;const n=_.map(d=>t[d.key]).filter(Boolean).map(d=>[d.u,d.v]);if(n.length<2)return null;const e=1500/10400,s=[n[1][0]-n[0][0],n[1][1]-n[0][1]],i=Math.hypot(s[0],s[1])||1,r=n.length,a=[n[r-1][0]-n[r-2][0],n[r-1][1]-n[r-2][1]],c=Math.hypot(a[0],a[1])||1,f=[n[r-1][0]+a[0]/c*e,n[r-1][1]+a[1]/c*e];return bt=[[n[0][0]-s[0]/i*e,n[0][1]-s[1]/i*e],...n,f],bt}function Lo(){if(St)return St;const t=We();if(!t)return null;const n=[];for(let i=0;i+1<t.length;i++)n.push(Math.atan2(t[i+1][1]-t[i][1],t[i+1][0]-t[i][0]));const e=[0],s=[ke];for(let i=1;i<n.length;i++){let r=n[i]-n[i-1];for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;e.push(r),s.push(Math.max(ke,1.5*Math.abs(r)/Bo))}return St={начало:n[0]||0,шаги:e,окна:s},St}function ko(t,n){const e=Lo();if(!e)return{dx:1,dy:0};let s=e.начало;for(let i=1;i<e.шаги.length;i++){const r=v((n-i)/e.окна[i]+.5);s+=e.шаги[i]*(r*r*(3-2*r))}for(let i=1;i<k.length;i++){if(!k[i])continue;const r=(n-i)/F.окно;Math.abs(r)<1&&(s+=k[i]*.5*(1+Math.cos(Math.PI*r)))}return{dx:Math.cos(s),dy:Math.sin(s)}}const k=[0,o("sang1",0),o("sang2",68),o("sang3",-90),o("sang4",0),o("sang5",0)].map(t=>t*Math.PI/180),F={окно:o("sangw",1.2),подъём:o("slift2",.15)},z=[0,o("sside1",0),o("sside2",0),o("sside3",0),o("sside4",0),o("sside5",0)];function _t(t,n){return t[Math.max(0,Math.min(t.length-1,n))]}function Go(t,n){const e=Math.floor(n),s=n-e,i=_t(t,e-1),r=_t(t,e),a=_t(t,e+1),c=_t(t,e+2),f=s*s,d=f*s,m=u=>.5*(2*r[u]+(-i[u]+a[u])*s+(2*i[u]-5*r[u]+4*a[u]-c[u])*f+(-i[u]+3*r[u]-3*a[u]+c[u])*d),l=u=>.5*(-i[u]+a[u]+2*(2*i[u]-5*r[u]+4*a[u]-c[u])*s+3*(-i[u]+3*r[u]-3*a[u]+c[u])*f);return{u:m(0),v:m(1),du:l(0),dv:l(1)}}const No=o("sfrom",.35);function qe(t){const n=X();if(!n)return 0;const e=window.innerHeight||1,s=n.getBoundingClientRect().top+window.scrollY;if(t.passed<=0){const r=e*No,a=Math.max(1,s-fn()-r);return zo(v((mn()-r)/a),y?0:(1-Ye)*a/e/$(_.length)[0])}const i=Math.min(t.i,_.length-1);if(!y&&i===_.length-1){const r=(window.scrollY-s)/e,a=v((r-O(_.length)[i])/Uo);return 1+i+a*a*(3-2*a)}return 1+i+Do(eo(t))}const Uo=o("sexit",3),Ie=o("sdwell",.32),jo=t=>{const n=v(t);return n-Math.sin(2*Math.PI*n)/(2*Math.PI)},Ye=o("sease",.7),Do=t=>{if(y)return jo((v(t)-Ie)/(1-Ie));const n=v(t);return n-Ye*Math.sin(2*Math.PI*n)/(2*Math.PI)},zo=(t,n=0)=>{const e=v(t),s=Math.min(1.6,Math.max(0,n));return s*e+(1-s)*(1-(1-e)*(1-e))},Le=o("szoom",.42),Oo=t=>{const n=v(t),e=n*n*(3-2*n);return Le+(1-Le)*e},Bo=o("sturnrate",44)*Math.PI/180,ke=o("sturn",1);function Ho(t){const n=We();if(!n)return;const e=Math.min(qe(t),n.length-1.0001);let{u:s,v:i}=Go(n,e);const{dx:r,dy:a}=ko(n,e);for(let l=1;l<z.length;l++){if(!z[l])continue;const u=(e-l)/F.окно;if(Math.abs(u)>=1)continue;const p=z[l]*.5*(1+Math.cos(Math.PI*u));s+=-a*p,i+=r*p}Ge(e-1,s,i,-a,r);const c=Oo(Math.min(1,e)),f=Math.max(0,e-1),d=f-Math.floor(f),m=e>1&&e<=n.length-2?Math.sin(Math.PI*d)**2:0;pn(c*(1-F.подъём*m))}function Ve(){B&&Ro(),lt=requestAnimationFrame(Ve)}function Jo(){if(document.body.dataset.route!==vn||!X()){lt&&(cancelAnimationFrame(lt),lt=0),Ne(0),Zt=NaN;for(const s of g)s.mesh.visible=!1,s.beam.visible=!1;P&&(P.style.opacity="0");return}if(!B&&!Ao())return;P&&(P.style.opacity="1");const t=X(),n=$(g.length),e=O(g.length);t.style.setProperty("--screens",String(e[e.length-1]+n[n.length-1]));for(const s of t.querySelectorAll("[data-story-item]")){const i=Number(s.dataset.storyItem);i<e.length&&s.style.setProperty("--y",String(e[i]+.33+.5))}D=[...t.querySelectorAll(":scope > [data-story-side]")].map(s=>s.dataset.storySide==="left"?1:0),t.classList.add("is-live"),$t=-1,x?.kill(),Y=null,x=dn.create({trigger:t,start:"top top",end:"bottom bottom",onUpdate:s=>{Y=s.progress},onLeave:()=>{Y=1},onLeaveBack:()=>{Y=null},onEnterBack:s=>{Y=s.progress}}),lt||Ve(),On&&Fo(),window.__cfigStory={houses:g,place:Xt,путь:()=>{const s=Xt();return s?qe(s):null},lens:w,group:rt,stage:B,mark:x,якорь:ot,точка:Ht,начала:O(g.length),отрезки:$(g.length),жизни:g.map((s,i)=>I(i))}}export{Jo as init};
