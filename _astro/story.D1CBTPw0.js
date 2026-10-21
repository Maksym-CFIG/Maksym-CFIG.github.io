import{W as De,S as ze,G as St,P as Oe,T as Ne,a as $t,b as ut,V as Ft,A as ct,D as Xt,M as Zt,c as Be,d as Qt,B as It,C as je,e as Y,f as He,g as it}from"./three.module.BH5gECCB.js";import{S as We,s as Lt,a as tt,h as qe,b as Ye,F as Gt,c as At,d as Tt,e as Me,f as te,g as gt,i as Ve,j as Je}from"./Base.astro_astro_type_script_index_0_lang.DEazspft.js";import"./Lab.astro_astro_type_script_index_0_lang.DMakdsNg.js";import"./router.UeToN5xW.js";const Ke="realEstate",st=new URLSearchParams(location.search),s=(t,n)=>st.has(t)?Number(st.get(t)):n;s("slinepx",2.2);const be=2*Math.atan(.5/Gt.FOCAL)*180/Math.PI,_=[{key:"palachovka",share:.854,cut:.45,size:.86},{key:"kostelicek",share:.88},{key:"karlovina",share:.9,side:.05},{key:"labska",share:.86,side:.04,left:.2},{key:"hradecka",share:.92}],$e=s("sfill",.52),Xe=s("sfillw",.44),ee=s("sscan",.35),ne=s("sscann",34),Se=s("sscanv",.7),oe=s("sbeam",2.2),ae=s("sbeam0",.012),se=s("sbeam1",.7);s("sbeamup",0);const Ze=s("sbreach",.15),Qe=s("sbfill",.01),tn=s("sbrim",.25),en=s("sbrimpow",.8),_t=s("sbdots",70),nn=s("sbdot",.4),on=s("smidx",.62),Pt=s("sdepth",3.2),ie=s("splot",.3),re=s("smetres",17.5);s("syaw",-.62);s("stilt",.1);const an=s("sdraw",.34),le=s("shold",.825),sn=s("sgone",.965),rn=s("scome",.16),b=st.get("sscene")==="old",ue=st.get("sdebug")==="1",ln=st.get("stune")==="1";let Q=null,et=null,Ct=null;const ce=s("sdust0",0),un=s("sdust1",1),de=s("sdustvis",.62),dt=s("sdustfrom",.18),fe=s("sbeamoff0",.05),cn=s("sbeamoff1",.5),dn=s("sdrawin",.8),fn=s("sbeamin",.26),me=s("shousefrom",.07),pe=s("scomein",.44),mn=gt.parseEase("power2.out"),pn=s("sbeamfar",1.5),Ae=t=>{const n=Math.min(1,t/(me+pe));return{луч:fn*n,дом:me*n,вход:pe*n}},hn=s("sappr",.72),at=s("sapprlen",.72),vn=s("sgap",.6),Et=s("sfar",.3),gn=s("sgrow",.1),D=[hn,s("sappr2",.72),s("sappr3",at),s("sappr4",at),s("sappr5",at)],kt=t=>D[t]??at,wn=s("sleavelen",1),Te=[1.58,1.68,1.32,.8,.9],V=[s("sfullat1",.514),s("sfullat2",.6),s("sfullat3",.6),s("sfullat4",.6),s("sfullat5",.6)];function yn(t,n){const[e,i,r]=Nt(t);return n<e||n>=r?0:n<i?R(h((n-e)/Ae(i-e).луч)):1-R(h(((n-i)/(r-i)-.2)/.8))}const he=[];let Rt=!1;function xn(t){if(he.push(t),Rt)return;Rt=!0;const n=()=>{const e=he.shift();if(!e){Rt=!1;return}e(()=>window.requestIdleCallback?window.requestIdleCallback(n,{timeout:2e3}):setTimeout(n,50))};window.requestIdleCallback?window.requestIdleCallback(n,{timeout:2e3}):setTimeout(n,50)}const Nt=t=>{const e=K(_.length)[t]-kt(t),i=e+(V[t]??.6)*kt(t);return[e,i,i+(Te[t]??1.29)]},Mn=s("stail",0),bn=t=>kt(t)*((V[t]??.6)-1)+(Te[t]??1.29),J=t=>Array.from({length:t},(n,e)=>b?1:e===t-1?bn(e)+Mn:wn+vn+at),K=t=>J(t).reduce((n,e,i)=>(n.push(i?n[i-1]+J(t)[i-1]:0),n),[]),ft=75,Ut=s("sdustn",380),Dt=s("sdustrep",3),Sn=s("sswap",.12),An=s("sdustfly",2.4),Tn=s("sdustlift",1),_n=s("sdustchaos",1),Pn=s("sdustspread",.16),Cn=s("sdustk",1.55),En=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Rn=`
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
  float scan = 1.0 + uScan * sin(vUv.y * uScanN - uTime * ${Se.toFixed(3)});
  // ДРОЖАНИЕ. Еле заметное: сильное читается поломкой, а не голограммой.
  float flick = 1.0 + 0.035 * sin(uTime * 7.3) * sin(uTime * 3.1 + 1.7);
  a *= scan * flick;
  gl_FragColor = vec4(c.rgb * a, a);
}
`,Fn=`
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
`,In=`
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
  float scan = 1.0 + uScan * sin(vUv.y * uScanN - uTime * ${Se.toFixed(3)});
  float flick = 1.0 + 0.035 * sin(uTime * 7.3) * sin(uTime * 3.1 + 1.7);
  a *= scan * flick;
  if (a < 0.002) discard;
  gl_FragColor = vec4(c.rgb * a, a);
}
`;function Ln(t,n){const e=Ut,i=Math.max(8,Math.round(Ut*t)),r=i*e*Dt,u=new Float32Array(r*2),o=new Float32Array(r*3),l=new Float32Array(r*3),f=[];for(let p=0;p<ft;p++)f.push([(Math.random()-.5)*2*Math.PI,30*(Math.random()-.5)*Math.PI/180]);let c=0,a=0;const m=()=>{for(let p=0;p<i;p++)for(let v=0;v<Dt;v++){const y=(p+.5)/i,Bt=(a+.5)/e,N=Math.min(ft-1,Math.floor(ft*(Math.random()+2*y)/3));u[c*2]=y,u[c*2+1]=Bt,o[c*3]=N/ft,o[c*3+1]=f[N][0],o[c*3+2]=f[N][1];const B=Math.sqrt(-2*Math.log(1-Math.random()))*Pn,I=Math.random()*2*Math.PI;l[c*3]=Math.cos(I)*B,l[c*3+1]=Math.sin(I)*B,l[c*3+2]=Math.random(),c++}a++},d=p=>{const v=performance.now()+Math.max(2,Math.min(8,p&&p.timeRemaining?p.timeRemaining()-1:6));for(;a<e&&performance.now()<v;)m();if(a<e){ve(d);return}const y=new It;y.setAttribute("position",new Y(new Float32Array(r*3),3)),y.setAttribute("aUv",new Y(u,2)),y.setAttribute("aLayer",new Y(o,3)),y.setAttribute("aJit",new Y(l,3)),n({g:y,GH:e})};ve(d)}const ve=t=>window.requestIdleCallback?window.requestIdleCallback(t,{timeout:1e3}):setTimeout(t,16),Gn=`
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
`,kn=`
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
`,Un=`
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
`,Dn=`
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
`;function zn(t,n){const e=getComputedStyle(document.body).getPropertyValue(t).trim();return new He(e||n)}let O=null,S=null,nt=null,T=null,G=null,g=[],ot=0,zt=-1,q=null,M=null;const C=new it,E=new it,On=new it,mt=new it,P=new it,Nn=new Ft,Bn=performance.now(),ge=()=>typeof window.__cfigStoryT=="number"?window.__cfigStoryT:(performance.now()-Bn)/1e3,$=()=>document.querySelector("[data-story-band]")||document.querySelector(".story");function Ot(){const t=$();if(!t)return null;let n=q;if(n===null)if(M&&M.end>M.start)n=Math.min(Math.max((window.scrollY-M.start)/(M.end-M.start),0),1);else{const f=window.innerHeight||1,c=t.getBoundingClientRect(),a=c.height-f;if(a<=0)return null;n=Math.min(Math.max(-c.top,0),a)/a}const e=g.length,i=J(e),r=K(e),u=r[e-1]+i[e-1],o=Math.min(u-1e-4,n*u);let l=0;for(;l+1<e&&o>=r[l+1];)l++;if(n<=0&&!b){const f=window.innerHeight||1,c=M&&M.end>M.start?M.start:t.getBoundingClientRect().top+window.scrollY,a=M&&M.end>M.start?Math.min(1,(M.end-M.start)/f/u):1,m=c-D[0]*f*a;if(window.scrollY<c)return{i:0,t:0,passed:n,pre:h((window.scrollY-m)/(c-m))}}return{i:l,t:(o-r[l])/i[l],xs:o-r[l],L:i[l],passed:n}}function jn(t){const n=$();if(n)for(const e of n.querySelectorAll("[data-story-item]"))e.classList.toggle("is-on",Number(e.dataset.storyItem)===t)}function Hn(){const t=document.querySelector("#canvas-wrapper");if(!t)return null;let n=t.querySelector("canvas.canvas-story");return n||(n=document.createElement("canvas"),n.className="canvas-story",n.setAttribute("aria-hidden","true"),t.append(n)),n}function Wn(){if(!G||!T)return;const t=Math.min(2,window.devicePixelRatio||1),n=Math.max(1,Math.round(T.clientWidth*t)),e=Math.max(1,Math.round(T.clientHeight*t));T.width===n&&T.height===e||(G.setPixelRatio(1),G.setSize(n,e,!1),S.aspect=n/e,S.updateProjectionMatrix())}function qn(){if(T=Hn(),!T)return!1;G=new De({canvas:T,alpha:!0,antialias:!0}),G.setClearColor(0,0),O=new ze,nt=new St,O.add(nt),S=new Oe(be,1,.05,400);const t=zn("--accent-section","#B69600"),n=new Ne;return g=_.map(e=>{const i=n.load(`/assets/houses/${e.key}-${e.src||"photo"}.webp`,d=>{const p=d.image;m.ratio=p.width/p.height,d.colorSpace=$t,xn(v=>Ln(m.ratio,({g:y})=>{m.dust.geometry.dispose(),m.dust.geometry=y,v()}))});i.colorSpace=$t;const r=new ut({vertexShader:En,fragmentShader:Rn,transparent:!0,depthWrite:!1,depthTest:!1,side:Xt,blending:ct,uniforms:{uMap:{value:i},uAlpha:{value:0},uGrow:{value:0},uEdge:{value:2.2},uCut:{value:e.cut||0},uSide:{value:new Ft(e.left??e.side??.14,e.side??.14)},uTime:{value:0},uScan:{value:ee},uScanN:{value:ne}}}),u=new Zt(new Be(1,1),r);u.frustumCulled=!1,u.visible=!1;const o=new St;o.add(u);const l=new Qt(new It,new ut({vertexShader:Fn,fragmentShader:In,transparent:!0,depthWrite:!1,depthTest:!1,blending:ct,uniforms:{uMap:{value:i},uAlpha:{value:0},uDis:{value:0},uPx:{value:2},uGain:{value:1},uFly:{value:An},uLift:{value:1},uChaos:{value:_n},uGrow:{value:0},uEdge:{value:2.2},uCut:{value:e.cut||0},uSide:{value:new Ft(e.left??e.side??.14,e.side??.14)},uTime:{value:0},uScan:{value:ee},uScanN:{value:ne}}}));l.frustumCulled=!1,l.visible=!1,u.add(l);const f=new ut({vertexShader:Gn,fragmentShader:kn,transparent:!0,depthWrite:!1,depthTest:!1,side:Xt,blending:ct,uniforms:{uTint:{value:t.clone()},uAmt:{value:0},uTime:{value:0},uGrow:{value:0},uReach:{value:Ze},uFill:{value:Qe},uRimK:{value:tn},uRimPow:{value:en},uR0:{value:ae},uR1:{value:se},uPx:{value:2.5*Math.min(window.devicePixelRatio||1,2)},uDot:{value:nn}}}),c=new Zt(new je(se,ae,1,40,1,!0),f);if(c.frustumCulled=!1,c.visible=!1,c.renderOrder=-1,_t>0){const d=new It,p=new Float32Array(_t*4);for(let y=0;y<p.length;y++)p[y]=Math.random();d.setAttribute("aSeed",new Y(p,4)),d.setAttribute("position",new Y(new Float32Array(_t*3),3));const v=new Qt(d,new ut({vertexShader:Un,fragmentShader:Dn,uniforms:f.uniforms,transparent:!0,depthWrite:!1,depthTest:!1,blending:ct}));v.frustumCulled=!1,v.renderOrder=-1,c.add(v)}const a=new St;a.add(c),nt.add(a),nt.add(o);const m={key:e.key,share:e.share,tilt:e.tilt||0,size:e.size||1,mesh:u,holder:o,beam:c,post:a,dust:l,ratio:1.2};return m}),!0}const Yn=gt.parseEase("power2.out"),Vn=gt.parseEase("power2.in"),R=gt.parseEase("sine.inOut"),h=t=>Math.max(0,Math.min(1,t));function Jn(){const t=Ot();if(Wn(),!t){for(const c of g)c.mesh.visible=!1,c.beam.visible=!1;At(0,0,0),Tt(0,0,0,0,0,0,0),Me(-1),G.render(O,S);return}t.i!==zt&&(zt=t.i,jn(t.i));let n=t.i,e=!1,i=!1,r=1,u=0,o=0,l=1;if(!b){const c=t.pre!==void 0?-D[0]*(1-t.pre):K(g.length)[t.i]+t.xs;o=c,n=g.length;for(let a=0;a<g.length;a++){const[m,d,p]=Nt(a);if(!(c<m||c>=p)){n=a,c<d?(e=!0,r=(c-m)/(d-m),l=d-m):(i=!0,u=(c-d)/(p-d));break}}if(i){const a=tt(),m=Lt(n),d=window.innerHeight||1,p=window.innerWidth||1;!m||m.x<0||m.x>p||m.y>d?u=1:a&&m.y>a.y&&(u=Math.max(u,h((m.y-a.y)/Math.max(1,d-a.y))))}}const f=e||i;for(let c=0;c<g.length;c++){const a=g[c],m=a.mesh.material.uniforms;if(c!==n){a.mesh.visible=!1,a.beam.visible=!1,a.dust.visible=!1;continue}a.mesh.visible=!0,a.beam.visible=!0;const d=r*l,p=Ae(l),v=b?h(t.t/an):e?h((d-p.дом)/Math.max(.001,dn*l-p.дом)):1,y=h((t.t-le)/(sn-le)),N=2*Math.tan(be*Math.PI/360)*Pt,B=N*S.aspect,I=Math.min(N*$e,B*Xe/a.ratio)*a.size,k=I*a.ratio;a.mesh.scale.set(k,I,1),a.mesh.position.y=I*(a.share-.5),a.holder.rotation.x=-(a.tilt||0),a.holder.position.set(B*(on-.5),-Gt.CAM_Y,-Pt);const jt=a.holder.position.x,Ht=a.holder.position.z;if(b){const w=R(t.t);a.holder.position.x+=B*.07*(.5-w),a.holder.position.z+=Pt*.06*w}let A=null,U=1;if(f){const w=Lt(c),x=tt();if(w&&x?a.сдвиг=[w.x-x.x,w.y-x.y]:e&&(a.сдвиг=null),x&&a.сдвиг){U=e?Et+(1-Et)*r:1+gn*u;const W=1,Z=U;C.copy(a.holder.position).project(S);const Jt=window.innerWidth||1,Kt=window.innerHeight||1,Ge=x.x+a.сдвиг[0]*W+((C.x*.5+.5)*Jt-x.x)*Z,ke=x.y+a.сдвиг[1]*W+((.5-C.y*.5)*Kt-x.y)*Z;P.set(Ge/Jt*2-1,-(ke/Kt)*2+1,.5).unproject(S);const Ue=a.holder.position.z/U;P.z<-1e-4&&(P.multiplyScalar(Ue/P.z),a.holder.position.copy(P),A=w||{x:NaN,y:NaN,s:U,нет:!0})}}const Wt=b||!e?.02:Math.max(.02,1-a.share);m.uGrow.value=Wt+(1.06-Wt)*Yn(v);const Re=b?R(h(t.t/rn)):e?A?mn(h((d-p.дом)/p.вход)):0:i&&!A?0:1,j=b||e||u<=0?0:dt+(de-dt)*h((u-ce)/(un-ce))+(u>=1?1:0),H=.95*Re*(b?1-Vn(y):1),wt=b?0:R(h(u/Sn));if(m.uAlpha.value=b?H:H*(1-wt),a.dust.visible=!b&&j<1&&wt>0,a.dust.visible){const w=a.dust.material.uniforms;w.uDis.value=j,w.uAlpha.value=H*wt*(i?1-R(h((u-.75)/.25)):1),w.uGrow.value=m.uGrow.value,w.uTime.value=ge(),a.holder.updateMatrixWorld(!0),mt.set(0,-.5,0).applyMatrix4(a.mesh.matrixWorld).project(S),E.set(0,.5,0).applyMatrix4(a.mesh.matrixWorld).project(S);const x=Math.abs(E.y-mt.y)*.5*G.getDrawingBufferSize(Nn).y,W=Number.isFinite(x)&&x>0?x/Ut:1;w.uPx.value=Math.min(6,Math.max(1,W*1.15));const Z=Dt*Math.max(1,(w.uPx.value/Math.max(W,.001))**2);w.uGain.value=Cn/Z,w.uLift.value=1+(Z-1)*Tn}const qt=ge();m.uTime.value=qt;const yt=f?A&&!A.нет?A:null:tt();let Yt=!1;const rt=On.copy(a.holder.position);if(yt){const w=window.innerWidth||1,x=window.innerHeight||1;P.set(yt.x/w*2-1,-(yt.y/x)*2+1,.5).unproject(S),P.y<-1e-4&&(P.multiplyScalar(-Gt.CAM_Y/P.y),rt.copy(P),Yt=!0)}mt.copy(a.holder.position).project(S);const Fe=(.5-mt.y*.5)*(window.innerHeight||1);let xt=.02*I,Mt=3*I/Math.min(1,A&&A.s?A.s:1,U);for(let w=0;w<24;w++){const x=(xt+Mt)*.5;E.copy(rt),E.y+=x,E.project(S),(.5-E.y*.5)*(window.innerHeight||1)>Fe?xt=x:Mt=x}const X=Math.max(.05,(xt+Mt)*.5),Ie=E.copy(rt);Ie.y+=X,a.beam.scale.set(X,X,X),a.post.position.copy(rt),a.post.position.y+=X*.5,a.post.quaternion.identity();const lt=a.beam.material.uniforms,bt=b||e?1:1-R(h((u-fe)/(cn-fe))),Vt=h(d/p.луч),Le=e?1+pn*h((1-U)/(1-Et)):1;lt.uAmt.value=Yt?oe*(e?.95*R(Vt)*Le:H*bt):0,lt.uTime.value=qt,lt.uGrow.value=e?.02+1.04*R(Vt):m.uGrow.value,C.copy(a.holder.position).project(S),At((C.x*.5+.5)*window.innerWidth,(.5-C.y*.5)*window.innerHeight,.75*H*bt),Tt(jt,-Ht,k*.5,k*.5*ie,0,b?H*bt:0,k*re),Ct=[jt,-Ht,k*.5,k*.5*ie,0,0,k*re],ue&&(a.holder.updateMatrixWorld(!0),E.set(0,.5,0).applyMatrix4(a.mesh.matrixWorld).project(S),C.copy(a.holder.position).project(S),et={k:c,фаза:e?"подъезд":i?j>=1?"растворилось":"уход":"на месте",подъезд:e?r:1,уход:u,размер:U,высота:(E.y-C.y)*.5*(window.innerHeight||1),низY:(.5-C.y*.5)*(window.innerHeight||1),распад:j>=1?1:h((j-dt)/(de-dt))*(j>0?1:0),луч:lt.uAmt.value/oe,кольцо:A&&!A.нет?A:tt()})}ro(t),n>=g.length&&(At(0,0,0),Ct&&Tt(...Ct)),b?te(null):te(g.map((c,a)=>yn(a,o))),G.render(O,S),ue&&$n(t,n)}function Kn(){if(document.getElementById("cfig-tune"))return;const t=document.createElement("div");t.id="cfig-tune",t.style.cssText="position:fixed;left:12px;bottom:12px;z-index:99999;padding:10px 12px;width:330px;background:rgba(0,0,0,.78);color:#ffd36a;font:12px/1.4 ui-monospace,Menlo,monospace;border:1px solid rgba(255,211,106,.4);border-radius:6px";const n=()=>{const o=new URLSearchParams(location.search);for(let l=1;l<L.length;l++){const f=Math.round(L[l]*180/Math.PI);f?o.set("sang"+l,String(f)):o.delete("sang"+l),z[l]?o.set("sside"+l,z[l].toFixed(3)):o.delete("sside"+l),l<=V.length&&o.set("sfullat"+l,V[l-1].toFixed(2)),l<=D.length&&o.set(l===1?"sappr":"sappr"+l,D[l-1].toFixed(2))}o.set("sangw",F.окно.toFixed(2)),o.set("slift2",F.подъём.toFixed(2)),g[0]&&(o.set("sbrim",g[0].beam.material.uniforms.uRimK.value.toFixed(2)),o.set("sbrimpow",g[0].beam.material.uniforms.uRimPow.value.toFixed(1))),history.replaceState(history.state,"",location.pathname+"?"+o.toString()),u.textContent=location.search},e=(o,l,f,c,a,m)=>{const d=document.createElement("label");d.style.cssText="display:grid;grid-template-columns:120px 1fr 52px;gap:6px;align-items:center;margin:2px 0";const p=document.createElement("span");p.textContent=o;const v=document.createElement("input");v.type="range",v.min=l,v.max=f,v.step=c,v.value=a();const y=document.createElement("span");return y.textContent=a(),v.addEventListener("input",()=>{m(Number(v.value)),y.textContent=v.value,n()}),d.append(p,v,y),d},i=o=>{const l=document.createElement("div");return l.textContent=o,l.style.cssText="margin:8px 0 2px;color:#fff",l};t.append(i("Заход камеры к проектам"));for(let o=1;o<L.length&&o<=_.length;o++)t.append(i(_[o-1].key)),t.append(e("поворот, °",-180,180,1,()=>Math.round(L[o]*180/Math.PI),l=>{L[o]=l*Math.PI/180})),t.append(e("сдвиг (+ влево)",-.08,.08,.001,()=>z[o],l=>{z[o]=l})),t.append(e("подъезд, экр",.2,3,.01,()=>D[o-1],l=>{D[o-1]=l})),t.append(e("полный на доле",.2,1,.01,()=>V[o-1],l=>{V[o-1]=l}));t.append(i("Общее")),t.append(e("зона поворота",.2,1.6,.05,()=>F.окно,o=>{F.окно=o})),t.append(e("подъём камеры",0,.6,.01,()=>F.подъём,o=>{F.подъём=o})),t.append(i("Луч"));const r=(o,l)=>{for(const f of g)f.beam.material.uniforms[o].value=l};t.append(e("грани",0,1.5,.05,()=>g[0].beam.material.uniforms.uRimK.value,o=>r("uRimK",o))),t.append(e("резкость граней",.8,4,.1,()=>g[0].beam.material.uniforms.uRimPow.value,o=>r("uRimPow",o)));const u=document.createElement("div");u.style.cssText="margin-top:8px;color:#9fb3c8;word-break:break-all",t.append(u),document.body.appendChild(t),n()}function $n(t,n){Q||(Q=document.createElement("pre"),Q.style.cssText="position:fixed;right:12px;bottom:12px;z-index:99999;margin:0;padding:10px 12px;background:rgba(0,0,0,.72);color:#ffd36a;font:12px/1.45 ui-monospace,Menlo,monospace;border:1px solid rgba(255,211,106,.4);border-radius:6px;pointer-events:none;white-space:pre",document.body.appendChild(Q));const e=$(),i=window.innerHeight||1,r=e?e.getBoundingClientRect().top+window.scrollY:0,u=(window.scrollY-r)/i,o=(c,a=2)=>c==null||Number.isNaN(c)?"—":Number(c).toFixed(a),l=c=>_[c]?_[c].key:"—",f=et&&et.k===n?et:null;Q.textContent=["прокрутка от начала проектов: "+o(u)+" экр","отрезок: "+l(t.i)+(t.xs!==void 0?"  +"+o(t.xs)+" из "+o(t.L)+" экр":"")+(t.pre!==void 0?"  (заезд "+o(t.pre)+")":""),"на экране: "+(f?l(f.k):"—"),f?"фаза: "+f.фаза:"",f?"подъезд: "+o(f.подъезд)+"   уход: "+o(f.уход):"",f?"размер: "+o(f.размер)+"   высота: "+o(f.высота,0)+" px   низ: "+o(f.низY,0)+" px":"",f?"распад (на глаз): "+o(f.распад)+"   луч: "+o(f.луч):"",f&&f.кольцо?"кольцо: "+o(f.кольцо.x,0)+", "+o(f.кольцо.y,0)+" px":""].filter(Boolean).join(`
`),et=null}let pt=null,ht=null;function _e(){if(pt)return pt;const t=Je();if(!t)return null;const n=_.map(c=>t[c.key]).filter(Boolean).map(c=>[c.u,c.v]);if(n.length<2)return null;const e=1500/10400,i=[n[1][0]-n[0][0],n[1][1]-n[0][1]],r=Math.hypot(i[0],i[1])||1,u=n.length,o=[n[u-1][0]-n[u-2][0],n[u-1][1]-n[u-2][1]],l=Math.hypot(o[0],o[1])||1,f=[n[u-1][0]+o[0]/l*e,n[u-1][1]+o[1]/l*e];return pt=[[n[0][0]-i[0]/r*e,n[0][1]-i[1]/r*e],...n,f],pt}function Xn(){if(ht)return ht;const t=_e();if(!t)return null;const n=[];for(let r=0;r+1<t.length;r++)n.push(Math.atan2(t[r+1][1]-t[r][1],t[r+1][0]-t[r][0]));const e=[0],i=[xe];for(let r=1;r<n.length;r++){let u=n[r]-n[r-1];for(;u>Math.PI;)u-=2*Math.PI;for(;u<-Math.PI;)u+=2*Math.PI;e.push(u),i.push(Math.max(xe,1.5*Math.abs(u)/io))}return ht={начало:n[0]||0,шаги:e,окна:i},ht}function Zn(t,n){const e=Xn();if(!e)return{dx:1,dy:0};let i=e.начало;for(let r=1;r<e.шаги.length;r++){const u=h((n-r)/e.окна[r]+.5);i+=e.шаги[r]*(u*u*(3-2*u))}for(let r=1;r<L.length;r++){if(!L[r])continue;const u=(n-r)/F.окно;Math.abs(u)<1&&(i+=L[r]*.5*(1+Math.cos(Math.PI*u)))}return{dx:Math.cos(i),dy:Math.sin(i)}}const L=[0,s("sang1",0),s("sang2",68),s("sang3",-90),s("sang4",0),s("sang5",0)].map(t=>t*Math.PI/180),F={окно:s("sangw",1.2),подъём:s("slift2",.15)},z=[0,s("sside1",0),s("sside2",0),s("sside3",0),s("sside4",0),s("sside5",0)];function vt(t,n){return t[Math.max(0,Math.min(t.length-1,n))]}function Qn(t,n){const e=Math.floor(n),i=n-e,r=vt(t,e-1),u=vt(t,e),o=vt(t,e+1),l=vt(t,e+2),f=i*i,c=f*i,a=d=>.5*(2*u[d]+(-r[d]+o[d])*i+(2*r[d]-5*u[d]+4*o[d]-l[d])*f+(-r[d]+3*u[d]-3*o[d]+l[d])*c),m=d=>.5*(-r[d]+o[d]+2*(2*r[d]-5*u[d]+4*o[d]-l[d])*i+3*(-r[d]+3*u[d]-3*o[d]+l[d])*f);return{u:a(0),v:a(1),du:m(0),dv:m(1)}}const to=s("sfrom",.35);function Pe(t){const n=$();if(!n)return 0;const e=window.innerHeight||1,i=n.getBoundingClientRect().top+window.scrollY;if(t.passed<=0){const u=e*to,o=Math.max(1,i-qe()-u);return ao(h((Ye()-u)/o),b?0:(1-Ce)*o/e/J(_.length)[0])}const r=Math.min(t.i,_.length-1);if(!b&&r===_.length-1){const u=(window.scrollY-i)/e,o=h((u-K(_.length)[r])/eo);return 1+r+o*o*(3-2*o)}return 1+r+oo(t.t)}const eo=s("sexit",3),we=s("sdwell",.32),no=t=>{const n=h(t);return n-Math.sin(2*Math.PI*n)/(2*Math.PI)},Ce=s("sease",.7),oo=t=>{if(b)return no((h(t)-we)/(1-we));const n=h(t);return n-Ce*Math.sin(2*Math.PI*n)/(2*Math.PI)},ao=(t,n=0)=>{const e=h(t),i=Math.min(1.6,Math.max(0,n));return i*e+(1-i)*(1-(1-e)*(1-e))},ye=s("szoom",.42),so=t=>{const n=h(t),e=n*n*(3-2*n);return ye+(1-ye)*e},io=s("sturnrate",44)*Math.PI/180,xe=s("sturn",1);function ro(t){const n=_e();if(!n)return;const e=Math.min(Pe(t),n.length-1.0001);let{u:i,v:r}=Qn(n,e);const{dx:u,dy:o}=Zn(n,e);for(let m=1;m<z.length;m++){if(!z[m])continue;const d=(e-m)/F.окно;if(Math.abs(d)>=1)continue;const p=z[m]*.5*(1+Math.cos(Math.PI*d));i+=-o*p,r+=u*p}Me(e-1,i,r,-o,u);const l=so(Math.min(1,e)),f=Math.max(0,e-1),c=f-Math.floor(f),a=e>1&&e<=n.length-2?Math.sin(Math.PI*c)**2:0;Ve(l*(1-F.подъём*a))}function Ee(){O&&Jn(),ot=requestAnimationFrame(Ee)}function mo(){if(document.body.dataset.route!==Ke||!$()){ot&&(cancelAnimationFrame(ot),ot=0);for(const i of g)i.mesh.visible=!1,i.beam.visible=!1;T&&(T.style.opacity="0");return}if(!O&&!qn())return;T&&(T.style.opacity="1");const t=$(),n=J(g.length),e=K(g.length);t.style.setProperty("--screens",String(e[e.length-1]+n[n.length-1]));for(const i of t.querySelectorAll("[data-story-item]")){const r=Number(i.dataset.storyItem);r<e.length&&i.style.setProperty("--y",String(e[r]+.33+.5))}t.classList.add("is-live"),zt=-1,M?.kill(),q=null,M=We.create({trigger:t,start:"top top",end:"bottom bottom",onUpdate:i=>{q=i.progress},onLeave:()=>{q=1},onLeaveBack:()=>{q=null},onEnterBack:i=>{q=i.progress}}),ot||Ee(),ln&&Kn(),window.__cfigStory={houses:g,place:Ot,путь:()=>{const i=Ot();return i?Pe(i):null},lens:S,group:nt,stage:O,mark:M,якорь:tt,точка:Lt,начала:K(g.length),отрезки:J(g.length),жизни:g.map((i,r)=>Nt(r))}}export{mo as init};
