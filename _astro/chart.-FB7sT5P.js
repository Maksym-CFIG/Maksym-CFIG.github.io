import{b as rn,V as vt,f as se,D as ot,M as at,S as ve,P as ln,R as cn,O as un,i as ct,j as Lt,B as Mt,e as N,k as fn,l as hn,m as vn,n as de,L as dn,o as mn,N as Je,F as me,p as pn,q as gn,r as wn,s as An,g as fe,t as bn,E as yn,Q as he}from"./three.module.iOA9vxPz.js";import{c as Ht,l as $t,m as Vt,n as pe}from"./Base.astro_astro_type_script_index_0_lang.CCV8Cd1e.js";import{endProgress as xn,signAway as _n,callProgress as Mn,footerRoom as Sn,ribbonFade as En,signRise as Rn}from"./ending.D5skQFQd.js";import"./Lab.astro_astro_type_script_index_0_lang.CppYHvj-.js";import"./router.UeToN5xW.js";function Ln(n=2654435769){let a=n>>>0;return()=>{a|=0,a=a+1831565813|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Tn(n,a,{span:e=1.44,drift:y=.42,cap:R=.62,wick:d=.16,PULL:w=.12}={}){const h=Ln(n);let f=0;const p=[],S=()=>{const m=f;f+=(h()-.5)*y-f*w,f=Math.max(-R,Math.min(R,f));const x=f;return{open:m,close:x,lo:Math.min(m,x)-h()*d,hi:Math.max(m,x)+h()*d}};for(let m=0;m<a;m++)p.push(S());let b=1/0,s=-1/0;for(const m of p)b=Math.min(b,m.lo),s=Math.max(s,m.hi);const v=(b+s)/2,r=e/(s-b),o=e/2*1.08,t=o*.72,l=m=>{const x=(m-v)*r,P=Math.abs(x);return P<=t?x:Math.sign(x)*(t+(o-t)*Math.tanh((P-t)/(o-t)))},g=m=>({open:l(m.open),close:l(m.close),lo:l(m.lo),hi:l(m.hi)});return{series:p.map(g),next:()=>g(S())}}function Fn(n,a,{even:e=0,stat:y=140,...R}={}){const d=Tn(n,Math.min(a,14),R),w=d.series.slice();for(;w.length<a;)w.push(d.next());if(e<=0)return w;const h=w.map(t=>Math.abs(t.close-t.open)/2),f=w.map(t=>t.hi-Math.max(t.open,t.close)),p=w.map(t=>Math.min(t.open,t.close)-t.lo),S=Math.max(1,Math.min(y,w.length)),b=t=>t.slice(0,S).reduce((l,g)=>l+g,0)/S,s=b(h),v=b(f),r=b(p),o=(t,l)=>l+(t-l)*(1-e);return w.map((t,l)=>{const g=(t.open+t.close)/2,m=Math.max(o(h[l],s),0),x=t.close>=t.open?1:-1,P=g-x*m,c=g+x*m;return{open:P,close:c,hi:Math.max(P,c)+Math.max(o(f[l],v),0),lo:Math.min(P,c)-Math.max(o(p[l],r),0)}})}const q=.5,X=.252,_t=.697,rt=-.697,ht=.185,yt=.25,ie=-.234,re=.231,le=-.004,st=.158,Kt=12,gt=2,zt=4,wt=6,Tt=7,In=4,ge=1,Ft=2,we=4,Gn=1;function Ae(n){const a=q-ht;if(n<=a)return rt;const e=(n-a)/ht;return rt+ht*(1-Math.sqrt(Math.max(0,1-e*e)))}function Pn(n){const a=X+yt;if(n>=a)return _t;const e=(a-n)/yt;return _t-yt*(1-Math.sqrt(Math.max(0,1-e*e)))}function be(n){const a=(X-n)/(X+q),e=ie+(le-ie)*a,y=re+(le-re)*a;return[e,y]}function Dn(){const n=[];n.push([rt+ht,q],[_t,q]);for(let a=1;a<=Tt;a++){const e=Math.PI/2*(a/Tt);n.push([_t-yt*(1-Math.cos(e)),X+yt*(1-Math.sin(e))])}n.push([re,X],[le,-q],[ie,X],[rt,X],[rt,q-ht]);for(let a=1;a<=Tt;a++){const e=Math.PI/2*(a/Tt);n.push([rt+ht*(1-Math.cos(e)),q-ht*(1-Math.sin(e))])}return n}function Cn(n,{cells:a=1,ribs:e=1,backRibs:y=!1,mode:R="grid"}={}){const d=R==="grid",w=[],h=[],f=(v,r)=>{w.push(v[0],v[1],v[2]),h.push(r[0],r[1])},p=(v,r,o,t,l,g,m,x)=>{f(v,l),f(r,g),f(o,m),f(v,l),f(o,m),f(t,x)};for(const v of[st,-st])for(let r=0;r<gt;r++){const o=X+(q-X)*r/gt,t=X+(q-X)*(r+1)/gt;for(let l=0;l<Kt;l++){const g=l/Kt,m=(l+1)/Kt,x=(T,W)=>Ae(T)+(Pn(T)-Ae(T))*W,P=[x(o,g),o,v],c=[x(o,m),o,v],i=[x(t,m),t,v],A=[x(t,g),t,v],_=r/gt*ge*a,C=(r+1)/gt*ge*a,I=In*e*(v>0||y?1:0),E=T=>(T[0]-rt)/(_t-rt)*I*a,L=T=>[T[0]*a,T[1]*a],O=d?L(P):[E(P),_],M=d?L(c):[E(c),_],G=d?L(i):[E(i),C],D=d?L(A):[E(A),C];v>0?p(P,c,i,A,O,M,G,D):p(A,i,c,P,D,G,M,O)}}for(const v of[st,-st])for(let r=0;r<wt;r++){const o=X-(X+q)*r/wt,t=X-(X+q)*(r+1)/wt,[l,g]=be(o),[m,x]=be(t);for(let P=0;P<zt;P++){const c=P/zt,i=(P+1)/zt,A=[l+(g-l)*c,o,v],_=[l+(g-l)*i,o,v],C=[m+(x-m)*i,t,v],I=[m+(x-m)*c,t,v],E=r/wt*we*a,L=(r+1)/wt*we*a,O=v>0||y?1:0,M=$=>[$[0]*a,$[1]*a],G=d?M(A):[c*Ft*a,E*O],D=d?M(_):[i*Ft*a,E*O],T=d?M(C):[i*Ft*a,L*O],W=d?M(I):[c*Ft*a,L*O];v>0?p(A,_,C,I,G,D,T,W):p(I,C,_,A,W,T,D,G)}}const S=Dn();for(let v=0;v<S.length;v++){const r=S[v],o=S[(v+1)%S.length],t=[r[0],r[1],st],l=[o[0],o[1],st],g=[o[0],o[1],-st],m=[r[0],r[1],-st],x=Gn*a;if(d){const P=Math.abs(o[0]-r[0]),c=Math.abs(o[1]-r[1]),i=P>=c?A=>[A[0]*a,A[2]*a]:A=>[A[2]*a,A[1]*a];p(t,l,g,m,i(t),i(l),i(g),i(m))}else p(t,l,g,m,[0,x],[0,x],[0,0],[0,0])}const b=w.length/3,s=new n.BufferGeometry;return s.setAttribute("position",new n.BufferAttribute(new Float32Array(w),3)),s.setAttribute("aUv",new n.BufferAttribute(new Float32Array(h),2)),s.setAttribute("aFill",new n.BufferAttribute(new Float32Array(b).fill(.16),1)),s.setAttribute("aBase",new n.BufferAttribute(new Float32Array(b).fill(-q),1)),s.setAttribute("aTop",new n.BufferAttribute(new Float32Array(b).fill(q),1)),s.setAttribute("aSlot",new n.BufferAttribute(new Float32Array(b),1)),s.setAttribute("aRank",new n.BufferAttribute(new Float32Array(b*2),2)),s.computeBoundingSphere(),s}const Nn="__cfigScene",u=new URLSearchParams(location.search),Bn=u.get("mesh")!=="0",On=Number(u.get("step"))||0,kn=u.get("grow")!=="0",tn=u.has("drift")?Number(u.get("drift")):null,Wn=u.get("ink")??"hard",Hn=u.has("bias")?Number(u.get("bias")):.8,ye=u.has("aniso")?Number(u.get("aniso")):0,xe=u.has("lw")?Number(u.get("lw")):1,$n=u.has("gain")?Number(u.get("gain")):0,_e=u.has("taps")?Number(u.get("taps")):1,Vn=u.get("grid")??"fw",xt=u.has("linepx")?Number(u.get("linepx")):0,Kn=u.has("glowwall")?Number(u.get("glowwall")):.55,zn=u.has("glowpath")?Number(u.get("glowpath")):.55,Un=u.has("cells")?Number(u.get("cells")):1,jn=u.has("spark")?Number(u.get("spark")):1,Z=u.has("ss")?Number(u.get("ss")):3,Xn=u.get("ssall")==="1",qn=u.has("farbias")?Number(u.get("farbias")):1.5,Yn=u.has("flat")?Number(u.get("flat")):1,Qn=u.has("back")?Number(u.get("back")):1,Zn=u.has("sparkfade")?Number(u.get("sparkfade")):1,Jn=u.has("fade")?Number(u.get("fade")):.62,it=20,Y=it+1,to=.3,eo=1200,Bt=3.2,no=1129270355,oo=1.35,Me=5,Ut=3,It=.1,ao=.62,so=.55,io=.75,ce=14,en=6,ro=1,Se=.055,lo=.06,co=.42,jt=.08,Gt=32,lt=[4,2];let nn=0;function uo(n){const a=document.createElement("canvas");a.width=Gt*lt[0],a.height=Gt*lt[1];const e=a.getContext("2d");e.clearRect(0,0,a.width,a.height),e.strokeStyle="#fff",e.lineCap="butt";const y=(p,S)=>{e.lineWidth=S,e.beginPath(),e.moveTo(p,0),e.lineTo(p,a.height),e.stroke(),p===0&&(e.beginPath(),e.moveTo(a.width,0),e.lineTo(a.width,a.height),e.stroke())},R=(p,S)=>{e.lineWidth=S,e.beginPath(),e.moveTo(0,p),e.lineTo(a.width,p),e.stroke(),p===0&&(e.beginPath(),e.moveTo(0,a.height),e.lineTo(a.width,a.height),e.stroke())};for(let p=0;p<lt[0];p++)y(p*Gt,(p===0?3.4:1.8)*xe);for(let p=0;p<lt[1];p++)R(p*Gt,1.8*xe);const d=e.getImageData(0,0,a.width,a.height).data;let w=0;for(let p=3;p<d.length;p+=4)w+=d[p]/255;nn=Math.min(1,w/(d.length/4)*on);const h=new vn(a);h.wrapS=de,h.wrapT=de,h.generateMipmaps=!0,h.minFilter=dn,h.magFilter=mn,h.colorSpace=Je;const f=n?n.capabilities.getMaxAnisotropy():1;return h.anisotropy=ye?Math.min(ye,f):f,h}const fo=`
attribute vec2 aUv;
attribute float aFill;
attribute float aSlot;   // номер свечи в кольце
attribute float aBase;   // низ свечи
attribute float aTop;    // верх свечи: между ними идёт линия пера
attribute vec2 aRank;    // x — тень (сплошная, тише, гаснет), y — строенный штрих
uniform float uHead;     // слот новейшей свечи
uniform float uTail;     // слот старейшей
uniform float uGrow;     // насколько выросла новейшая, 0..1
uniform float uGone;     // насколько ушла старейшая, 0..1
uniform float uCell;     // частота решётки: 1 у ленты, реже у знака
uniform float uFillMul;  // сила заливки тем же порядком
varying vec2 vGrid;
varying float vFill;
varying float vDepth;   // расстояние до камеры, для затухания дальних рёбер
varying vec2 vRank;
varying vec2 vLocal;    // место на предмете: по нему идёт проблеск
varying float vLiveA;   // множитель прозрачности: уход старейшей
varying float vRise;    // доля высоты свечи, 0 у низа, 1 у верха
varying float vHead;    // 1 у новейшей свечи: только она прорисовывается
varying float vSlot;    // номер свечи в кольце
varying vec4 vClip;     // место фрагмента в кадре: по нему растекается свет
varying float vLit;     // сколько света на ЭТОЙ свече
varying vec3 vView;     // место в координатах камеры: по нему считается кромка
varying vec3 vAxis;     // ось толщины предмета в координатах камеры
varying vec2 vLitAt;    // где курсор пересёк её: отсюда свет и растекается
uniform float uLit[${Y}];
uniform vec2 uLitAt[${Y}];
#ifdef EDGES
attribute vec3 aV0;     // вершины треугольника — все три в каждой вершине
attribute vec3 aV1;
attribute vec3 aV2;
#ifdef RIBBON
attribute float aSide;  // сторона ленты: -1 или +1
attribute float aEnd;   // конец отрезка: 0 или 1
#endif
attribute vec3 aHard;   // какие рёбра треугольника принадлежат форме
attribute float aCap;   // 1 у лицевой и задней крышек, 0 у стенок
varying vec2 vS0;       // те же вершины, но в пикселях кадра
varying vec2 vS1;
varying vec2 vS2;
varying vec3 vHard;
varying float vCap;
uniform vec2 uRes;      // размер буфера, куда идёт отрисовка
// Толщина линии и плотность буфера приходят УНИЯМИ, а не дефайнами: дефайны
// с этими числами собираются ниже по файлу, чем сам шейдер, и обращение к ним
// отсюда падает молча — модуль просто не соберётся.
uniform float uPx;
uniform float uLinePx;
vec2 toPx(vec3 p) {
  vec4 c = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  return (c.xy / max(1e-6, c.w) * 0.5 + 0.5) * uRes;
}
#endif
void main() {
  // Ось Z предмета, переведённая в камеру: по ней считается толщина тела
  // на просвет. Одна на весь меш — потому и берётся из матрицы, а не из
  // нормали грани.
  vAxis = normalize((modelViewMatrix * vec4(0.0, 0.0, 1.0, 0.0)).xyz);
#ifdef EDGES
  vS0 = toPx(aV0);
  vS1 = toPx(aV1);
  vS2 = toPx(aV2);
  vHard = aHard;
  vCap = aCap;
#endif
  // Развёртка под ПОВТОР БЛОКА текстуры: координата у нас в клетках топологии,
  // поэтому деление на размер блока кладёт повтор ровно по рёбрам сетки.
  // uCell — множитель частоты решётки, uFillMul — силы заливки. Унии, а не
  // константы: у знака и у ленты разный масштаб на экране, и одна и та же
  // сетка читается на них по-разному — на знаке она выходила клеткой.
  vGrid = aUv * uCell * ${Un.toFixed(4)} / vec2(${lt[0]}.0, ${lt[1]}.0);
  vFill = aFill * uFillMul;

  // ЛЕНТА ЖИВЁТ. Новейшая свеча растёт от своего низа, старейшая гаснет —
  // и обе делают это ОДНИМ И ТЕМ ЖЕ шагом, потому что на следующем шаге
  // старейшая и становится новейшей: кольцо на BARS слотов, и слот,
  // догоревший слева, переписывается справа.
  //
  // Сравнение слотов через abs(...) < 0.5, а не на равенство: слот приходит
  // числом с плавающей точкой, и равенство здесь ненадёжно.
  float isHead = 1.0 - step(0.5, abs(aSlot - uHead));
  float isTail = 1.0 - step(0.5, abs(aSlot - uTail));

  // ПРИХОД И УХОД УСТРОЕНЫ ПО-РАЗНОМУ, И ЭТО НАРОЧНО.
  //
  // Справа, где свеча ПРИХОДИТ, идёт прорисовка: линия пера поднимается
  // по высоте свечи, и ниже неё каркас проявлен. Слева, где свеча уходит,
  // никакой прорисовки нет — только прозрачность.
  //
  // Симметрия здесь была ошибкой. Сначала обе кромки рисовали одним приёмом
  // (перо стирало старейшую сверху вниз), и заказчик забраковал: «не нравится,
  // что с двух сторон оно анимируется». Потом я убрал прорисовку совсем —
  // и это тоже неверно: «левая часть в опасити, а у правой прорисовка должна
  // остаться». Приход события и его забывание — разные вещи, и выглядеть
  // одинаково они не должны.
  vec3 p = position;
  vRise = (p.y - aBase) / max(aTop - aBase, 1e-4);
  vHead = isHead;
  vLiveA = mix(1.0, 1.0 - uGone, isTail);
  vRank = aRank;
  vSlot = aSlot;
  // У КАЖДОЙ СВЕЧИ СВОЙ УРОВЕНЬ СВЕТА.
  //
  // Раньше держались две свечи, текущая и предыдущая, с переливом между ними.
  // При быстром ведении мыши слот менялся чаще, чем шёл перелив: предыдущая
  // затиралась, и её свет пропадал разом — заказчик увидел это как «резкие
  // перескоки». Теперь уровень у каждой свечи свой и гаснет сам, поэтому
  // быстрый проход оставляет затухающий след, а не щелчки.
  //
  // Выборка из массива по номеру делается ЗДЕСЬ, в вершине: в GLSL ES
  // переменная как индекс массива униформ разрешена только в вершинном
  // шейдере, а свеча у всех вершин одна, и варьинг по ней постоянен.
  int li = int(aSlot + 0.5);
  vLit = uLit[li];
  vLitAt = uLitAt[li];
  vLocal = p.xy;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vView = mv.xyz;
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;

#ifdef RIBBON
  // ЛЕНТА РАЗВОРАЧИВАЕТСЯ В ПИКСЕЛЯХ КАДРА. Толщина линии задана в пикселях,
  // поэтому и раздвигать углы надо там же: в мире это дало бы линию, которая
  // у дальнего конца тоньше. Место вершины — конец отрезка плюс поперечный
  // сдвиг на половину ширины и продольный на столько же, чтобы стыки
  // отрезков перекрывались и на изломах не было просветов.
  {
    vec4 c0 = projectionMatrix * modelViewMatrix * vec4(aV0, 1.0);
    vec4 c1 = projectionMatrix * modelViewMatrix * vec4(aV1, 1.0);
    vec2 p0 = (c0.xy / max(1e-6, c0.w) * 0.5 + 0.5) * uRes;
    vec2 p1 = (c1.xy / max(1e-6, c1.w) * 0.5 + 0.5) * uRes;
    vec2 dir = normalize(p1 - p0 + vec2(1e-6));
    vec2 nrm = vec2(-dir.y, dir.x);
    // Имя не half: это зарезервированное слово GLSL, и шейдер на нём не
    // собирается — ленты тогда просто не рисуются, молча. Та же ловушка уже
    // ловила flat в фрагментном шейдере.
    float wHalf = uLinePx * uPx * 0.5 + 1.5;
    vec4 cw = mix(c0, c1, aEnd);
    vec2 sp = mix(p0, p1, aEnd) + nrm * aSide * wHalf + dir * (aEnd * 2.0 - 1.0) * wHalf;
    vec2 ndc = (sp / uRes) * 2.0 - 1.0;
    gl_Position = vec4(ndc * cw.w, cw.z, cw.w);
    vClip = gl_Position;
  }
#endif
  // Клип отдаётся как есть, деление на w — во фрагменте: готовый NDC
  // интерполировать нельзя, он не линеен по треугольнику.
  vClip = gl_Position;
}
`,k=n=>Number.isInteger(n)?`${n}.0`:`${n}`,ho=.11,vo=4,mo=.45,po=.3,go=.7,wo=.25,on=4.2,ue=2.6,Ao=3.8,bo=4,yo=2,xo=900,_o=5.5,Mo=.07,So=2.6,Eo=16,Ro=.22,Lo=2.4,To=.42,Fo=2.8,Io=`
precision highp float;
#define GLINT_SCALE ${k(_o)}
#define GLINT_DRIFT ${k(Mo)}
#define GLINT ${k(So)}
#define SPECK_SCALE ${k(Eo)}
#define SPECK_DRIFT ${k(Ro)}
#define SPECK ${k(Lo)}
#define SPARK ${k(Fo)}
#define WIRE_GAIN ${k($n||on)}
#define MIP_BIAS ${k(Hn)}
#define TAPS ${_e}
// Смещение мипа под число выборок: каждая выборка отвечает за свою долю
// пикселя, поэтому берёт уровень мельче ровно во столько же раз.
#define TAP_BIAS ${k(-Math.log2(Math.sqrt(_e)))}
#define SPARK_MUL ${k(jn)}
#define FARBIAS ${k(qn)}
#define FLAT ${k(Yn)}
// КРОМКА ШТРИХА. Жёсткое колено min(1, x) было причиной мерцания: усиление
// множит и сам штрих, и его подпиксельные колебания, а обрезание по единице
// делает из плавного ската ступеньку. Пиксель у кромки щёлкает включено —
// выключено вместо того, чтобы гаснуть, и лента на медленном ходу кажется
// дёрганой. Замер: за 50 мс лента проходит 0.22 px, а менялось 41.5% пикселей.
//
// Мягкое насыщение снимает именно колено: у ядра штриха яркость та же
// (1 - e^-4.2 = 0.985), а скат тянется дальше и меняется непрерывно.
#define INK(x) ${Wn==="hard"?"(min(1.0, x))":"(1.0 - exp(-(x)))"}
#define BACK ${k(To)}
#define BACKMODE ${Qn}
#define SPARKFADE ${k(Zn)}
#define LINE_PX ${k(xt||ue)}
#define MAJOR_PX ${k(xt?xt*1.6:Ao)}
#define GRID_X ${k(bo)}
#define GRID_Y ${k(yo)}
#define ANALYTIC ${Vn==="fw"?1:0}
#define HOVER_R ${k(mo)}
#define HOVER_R0 ${k(po)}
#define HOVER_GLOW ${k(go)}
#define HOVER_ALPHA ${k(wo)}
#define WICK_DIM ${k(ao)}
#define WICK_TIP ${k(so)}
#define WICK_TIP_FADE ${k(io)}
#define PEN ${k(ho)}
#define PEN_GLOW ${k(vo)}
// Насколько быстро свет тела набирает силу с толщиной: чем больше, тем
// раньше он выходит на полную. Подбиралось кадрами.
#define GLOW_WALL ${k(Kn)}
uniform vec3 uFill;
uniform vec3 uLine;
uniform float uAlpha;
uniform sampler2D uWire;   // каркас: линии сетки с мипмапами
uniform vec2 uDepth;
uniform float uInkAvg;   // средняя плотность рисунка, предел для дали    // ближняя и дальняя границы затухания
uniform float uTime;    // секунды: ими движется проблеск
uniform float uGrow;    // где линия пера у новейшей свечи
uniform float uHoverSpread; // насколько свет уже растёкся, 0..1
/**
 * Нормаль грани из производных положения в камере, безопасная к вырождению.
 *
 * Объявлена ВНЕ всяких #ifdef: ею пользуются и лента, и знак. Спрятав её
 * внутрь блока знака, я оставил ленту без функции — её шейдер перестал
 * собираться, и лента исчезла целиком. Поймала это суита, а не глаз.
 */
vec3 faceNormal(vec3 v) {
  vec3 n = cross(dFdx(v), dFdy(v));
  float len = length(n);
  return len > 1e-9 ? n / len : vec3(0.0, 0.0, 1.0);
}

uniform float uRim;         // сила кромки по силуэту: 0 у ленты, 1 у знака
uniform float uEdges;       // рисовать линии формы вместо решётки
uniform float uGlass;       // сила стеклянного блика по силуэту
uniform float uEdgeFace;    // с какого наклона грань рисует свои линии
uniform float uLinePx;      // толщина линии контура в пикселях кадра
uniform float uGlow;        // слой свечения тела: рисовать не линии, а свет
// Как быстро свет набирает силу с толщиной. УНИЕЙ, а не дефайном: подбирается
// глазом, и требовать перезагрузку ради каждого шага ползунка — неуважение
// к тому, кто подбирает.
uniform float uGlowPath;
uniform float uMul;         // общий множитель силы слоя
uniform float uFar;         // слой дальнего контура: берёт перевёрнутые метки
// СКОЛЬКО ПИКСЕЛЕЙ БУФЕРА В ПИКСЕЛЕ КАДРА. Толщина линии задана в пикселях,
// и производная fwidth считает их в буфере, куда идёт отрисовка. При
// передискретизации буфер вдвое плотнее — та же двойка давала линию вдвое
// тоньше и тусклее, и вместо сглаживания получалась лесенка.
uniform float uPx;
#ifdef EDGES
varying vec2 vS0;
varying vec2 vS1;
varying vec2 vS2;
varying vec3 vHard;
varying float vCap;
// Расстояние от точки до ОТРЕЗКА, а не до прямой: за концами кромки линия
// не продолжается, и стыки двух кромок не дают заусенцев.
float segDist(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float t = clamp(dot(p - a, ab) / max(1e-6, dot(ab, ab)), 0.0, 1.0);
  return length(p - (a + ab * t));
}
#endif
uniform float uAspect;      // иначе пятно выходит овальным
varying vec2 vGrid;
varying float vFill;    // сила заливки: приходит с вершины, см. aFill
varying float vDepth;
varying vec3 vAxis;
varying vec2 vRank;
varying vec2 vLocal;
varying float vLiveA;
varying float vRise;
varying float vHead;
varying float vSlot;
varying vec4 vClip;
varying float vLit;
varying vec2 vLitAt;
varying vec3 vView;

// Шум значений на хешах: проблеску нужна плавная случайная величина, а везти
// для неё текстуру незачем — предмет мелкий, и двух октав хватает.
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  // КАРКАС БЕРЁТСЯ ИЗ ТЕКСТУРЫ, а не считается на пиксель.
  //
  // Фильтрацией занимается железо: мип-цепочка усредняет линии при уменьшении,
  // анизотропная фильтрация — на скользящих углах. Это та же технология, что
  // у образца (у их бочки minFilter LINEAR_MIPMAP_LINEAR), и именно она даёт
  // чистый рисунок при любом размере предмета.
  //
  // Прежняя аналитическая решётка требовала руками писать всё, что мип-цепочка
  // делает бесплатно, и каждая найденная поломка — моаре, рябь, разрывы линий,
  // кривые донца — была местом, где ручная фильтрация не дотягивала.
  // Усиление: после фильтрации штрих отдаёт малую долю (мип усредняет линию
  // по клетке), и без множителя рисунок уходит в темноту. Умножение здесь,
  // а не толщиной линии в текстуре: толщина задаёт рисунок, а множитель —
  // его силу, и крутить надо именно силу.
  // ВЫБОРКА РИСУНКА С ЗАПАСОМ. Одна выборка на пиксель — источник переливания:
  // покрытие оценивается по одной точке, и на медленном ходу оценка пляшет,
  // хотя сам рисунок едет ровно (замер: ход 0.031 px за кадр при разбросе
  // 0.012, а пик яркости линии — 3.3%).
  //
  // Выборки раскладываются по производным координаты сетки, то есть по РЕАЛЬНОМУ
  // следу пикселя на поверхности: у ближней свечи он один, у дальней другой,
  // и подбирать ничего не надо.
  // Доля дали считается ЗДЕСЬ, до выборки рисунка: от неё зависит и уровень
  // мипа, и растворение сетки в ровный тон. Ниже она же идёт в затухание.
  // НОРМАЛЬ ИЗ ПРОИЗВОДНЫХ — ТОЛЬКО ЧЕРЕЗ ЭТУ ФУНКЦИЮ.
  //
  // У ленты контура соседние вершины квада совпадают по положению, поэтому
  // производные vView вырождаются в ноль, а normalize(vec3(0)) даёт NaN.
  // Дальше NaN проходит через всю арифметику прозрачности, и проверка
  // «a < 0.01 — отбрось» его НЕ ловит: сравнение с NaN всегда ложно.
  // Фрагмент оставался нарисованным при нулевой силе знака — заказчик видел
  // яркую черту там, где всё уже погасло.
  float farAmt = smoothstep(uDepth.x, uDepth.y, vDepth);
  float bias = MIP_BIAS + farAmt * FARBIAS;

#if ANALYTIC
  // СЧИТАЕМАЯ РЕШЁТКА. Координата в клетках, её экранная производная даёт
  // размер клетки в пикселях — отсюда толщина линии в пикселях, одна и та же
  // и вблизи, и вдали.
  vec2 g = vGrid * vec2(GRID_X, GRID_Y);
  vec2 gw = max(fwidth(g), vec2(1e-5));      // клеток на пиксель
  vec2 cellPos = fract(g);
  vec2 dist = min(cellPos, 1.0 - cellPos) / gw;   // до ближайшей линии, в пикселях

  // Каждая четвёртая вертикаль толще — так было и в текстуре.
  float nx = floor(g.x + 0.5);
  float maj = 1.0 - step(0.5, abs(mod(nx, GRID_X)));
  float hx = mix(LINE_PX, MAJOR_PX, maj) * 0.5 * uPx;
  float hy = LINE_PX * 0.5 * uPx;

  // Покрытие с мягкой кромкой в один пиксель — это и есть сглаживание,
  // и оно непрерывно по подпиксельному сдвигу.
  float cx = 1.0 - smoothstep(hx - 0.5, hx + 0.5, dist.x);
  float cy = 1.0 - smoothstep(hy - 0.5, hy + 0.5, dist.y);
  float raw = max(cx, cy);

  // ВДАЛИ клетка мельче линии, и решётка обязана сойтись в ровный тон,
  // а не в кашу: берём среднюю плотность — долю площади под линиями.
  vec2 dens = clamp(vec2(mix(LINE_PX, MAJOR_PX, 0.25), LINE_PX) * uPx * gw, 0.0, 1.0);
  // Имя не flat: это зарезервированное слово GLSL, и шейдер на нём не собрался.
  float even = 1.0 - (1.0 - dens.x) * (1.0 - dens.y);
  raw = max(raw, even);
#else
  vec2 gdx = dFdx(vGrid);
  vec2 gdy = dFdy(vGrid);
  float raw = 0.0;
#if TAPS == 9
  for (int i = -1; i <= 1; i++) {
    for (int j = -1; j <= 1; j++) {
      raw += texture2D(uWire, vGrid + gdx * (float(i) / 3.0) + gdy * (float(j) / 3.0),
                       bias + TAP_BIAS).a;
    }
  }
  raw /= 9.0;
#elif TAPS == 4
  vec2 t1 = (gdx + gdy) * 0.25;
  vec2 t2 = (gdx - gdy) * 0.25;
  raw = 0.25 * (texture2D(uWire, vGrid + t1, bias + TAP_BIAS).a
              + texture2D(uWire, vGrid - t1, bias + TAP_BIAS).a
              + texture2D(uWire, vGrid + t2, bias + TAP_BIAS).a
              + texture2D(uWire, vGrid - t2, bias + TAP_BIAS).a);
#else
  raw = texture2D(uWire, vGrid, bias).a;
#endif
  raw = raw * WIRE_GAIN;
#endif
#ifdef EDGES
  // ЛИНИИ ПО ФОРМЕ. Барицентрика равна нулю на своём ребре и растёт внутрь
  // треугольника; её экранная производная переводит это в пиксели — той же
  // мерой, что и клетка решётки, поэтому линии знака и линии ленты выходят
  // одной толщины. Рисуются только размеченные рёбра: остальные — членение
  // меша, и от них знак снова стал бы решёткой.
  if (uEdges > 0.0) {
    // Своя мера у каждой кромки: расстояние от пикселя до её отрезка,
    // прямо в пикселях кадра. Ни производных, ни барицентрики — значит,
    // ни зависимости от раскроя, ни выхода за концы.
    vec3 w = uFar > 0.5 ? max(-vHard, vec3(0.0)) : max(vHard, vec3(0.0));
    vec3 hw = uLinePx * uPx * mix(vec3(0.6), vec3(1.0), w);
    vec3 d = vec3(
      segDist(gl_FragCoord.xy, vS1, vS2),   // ребро напротив вершины 0
      segDist(gl_FragCoord.xy, vS2, vS0),
      segDist(gl_FragCoord.xy, vS0, vS1));
    vec3 cov = (1.0 - smoothstep(hw - 0.5, hw + 0.5, d))
             * step(0.05, w) * mix(vec3(0.45), vec3(1.0), w);
    // Линии рисуют только крышки: у пояса стенки, стоящего ребром, на экране
    // сотни треугольников в три пикселя, и рисовать там нечего.
    if (uEdgeFace > 0.0) cov *= step(0.5, vCap);
    raw = max(max(cov.x, cov.y), cov.z);
  }
#endif
#ifdef EDGES
  // ПРОБА РАЗМЕТКИ: показать сами метки рёбер цветом. Красный — вес ребра,
  // напротив которого лежит вершина 0, зелёный и синий — двух других.
  // Так видно, размечено ли ребро вообще, а не гадать по итоговой линии.
  if (uEdges > 1.5 && uEdges < 2.5) { gl_FragColor = vec4(abs(vHard), 1.0); return; }
  // Проба 2: САМО ПОКРЫТИЕ линии, без затухания, стекла и мишуры. Если рябь
  // видна уже здесь — она в счёте линии, если нет — в том, что идёт после.
  if (uEdges > 2.5 && uEdges < 3.5) { gl_FragColor = vec4(vec3(raw), 1.0); return; }
#ifdef RIBBON
  // Проба 4: сама лента — заливкой, без всякой меры расстояния. Видно, где
  // её четырёхугольники лежат на самом деле.
  if (uEdges > 4.5) { gl_FragColor = vec4(1.0, 0.25, 0.0, 1.0); return; }
#endif
  // Проба 3: где крышка, а где стенка.
  if (uEdges > 3.5) { gl_FragColor = vec4(vec3(vCap), 1.0); return; }
#endif
  // У считаемой решётки покрытие уже готово: усиливать нечего, и это
  // половина дела — усиление множило не только штрих, но и его дрожание.
  float ink = INK(raw);
  // РАСТВОРЕНИЕ СЕТКИ В ДАЛИ. Когда след пикселя накрывает клетку целиком,
  // правильный ответ — средняя плотность рисунка, а не «линия или не линия».
  // Мип-цепочка к этому и стремится, но с анизотропией берёт по одной оси
  // уровень мельче следа, и оценка пляшет: у дальних свечей это и видно
  // как дрожь. Здесь предел задан прямо — средняя плотность самой текстуры.
  ink = mix(ink, uInkAvg, farAmt * FLAT);

  // КРОМКА ПО СИЛУЭТУ. Знак — это прежде всего контур: каркас рисует только
  // сетку, и без контура буква читается решёткой, а не знаком (заказчик:
  // «она сейчас выглядит как клетка какая-то»).
  //
  // Считается из нормали, а нормаль — из производных положения в координатах
  // камеры: отдельного атрибута для неё не нужно, и работает это на любой
  // геометрии. Там, где поверхность отворачивается от взгляда, ink доводится
  // до полной — это и есть край предмета.
  //
  // У ленты кромка выключена унией: у цилиндра её роль играет сама сетка,
  // а лишняя обводка сделала бы свечи жирными.
  if (uRim > 0.0) {
    float face = abs(dot(faceNormal(vView), normalize(-vView)));
    ink = max(ink, uRim * smoothstep(0.5, 0.12, face));
  }

  // Тень заливается целиком: у неё нет ни объёма, ни членения.
  ink = max(ink, vRank.x);

  // Тень тише тела и гаснет к своим концам.
  float tip = smoothstep(WICK_TIP, 1.0, abs(vRise - 0.5) * 2.0);
  float wick = mix(1.0, WICK_DIM * (1.0 - tip * WICK_TIP_FADE), vRank.x);

  // ОБРАТНЫЕ ГРАНИ ТИШЕ ЛИЦЕВЫХ.
  //
  // Предмет сквозной и глубину не пишет, поэтому сквозь ближнюю стенку светит
  // дальняя, и две её же сетки дают биения — вторую половину «волн». Приглушая
  // обратные грани, мы и биения ослабляем, и получаем даром признак объёма:
  // ближняя стенка ярче дальней.
#if BACKMODE == 0
  if (!gl_FrontFacing) discard;              // проба: дальней стенки нет вовсе
#endif
  float facing = gl_FrontFacing ? 1.0 : BACK;

  // ЗАТУХАНИЕ ПО ГЛУБИНЕ. Без него каркас читается плоско, как бы густо
  // ни был начерчен: все рёбра одной силы, и глаз не отделяет ближнюю стенку
  // от дальней. С затуханием предмет становится объёмным сам, без света —
  // это и есть то, чем держится сквозная модель.
  // Дальний конец уходит в ноль — ряд обязан пропадать в черноте. Но кривая
  // ВЫПУКЛАЯ: при линейном затухании гасла половина ряда, и от графика
  // оставалось тусклое пятно. В квадрате сила держится почти до конца
  // и падает круто у самого хвоста — гаснут последние свечи, а не весь ряд.
  float far = farAmt;
  float dim = 1.0 - far * far;

  // ПРОБЛЕСК, как у дорожки: медленно дрейфующее поле шума поднимает яркость
  // на части линий. У дорожки этим держится жизнь поля, когда точки уже
  // мельче пикселя; здесь — то же для каркаса: без него все рёбра одной
  // силы, и предмет читается штампом.
  //
  // Координата берётся МЕСТНАЯ, а не экранная: проблеск принадлежит предмету
  // и уезжает вместе со свечой, а не висит на экране пятном.
  float n = vnoise(vLocal * GLINT_SCALE + vec2(uTime * GLINT_DRIFT, uTime * GLINT_DRIFT * 0.6));
  float glint = smoothstep(0.52, 0.96, n);

  // Мелкая октава: короткие блики по отдельным штрихам, свой ход и вчетверо
  // более частая сетка шума.
  float n2 = vnoise(vLocal * SPECK_SCALE + vec2(-uTime * SPECK_DRIFT, uTime * SPECK_DRIFT * 0.8));
  float speck = smoothstep(0.72, 0.99, n2);

  // ИСКРЫ НА УЗЛАХ. Узел — там, где рядом ОБЕ линии сразу, то есть у угла
  // клетки. Считается по развёртке, а не по толщине линии: сама линия теперь
  // приходит из текстуры, и её толщины в шейдере нет.
  //
  // Искра взвешена по ink, поэтому там, где мип-цепочка усреднила решётку
  // в ровный тон, искр не появляется — гаснуть отдельно им не нужно.
  vec2 f = abs(fract(vGrid * vec2(${lt[0]}.0, ${lt[1]}.0)) - 0.5);   // проблеск идёт по той же сетке
  float node = smoothstep(0.32, 0.5, min(f.x, f.y));
  float spark = node * ink * smoothstep(0.5, 0.95, n2);

  // СТЕКЛЯННЫЙ БЛИК ПО СИЛУЭТУ. Заказчик: «видны грани как бы за буквой,
  // якобы стекло, но сама буква стеклянной не выглядит». Задние грани убраны
  // (буква больше не просвечивает), а вместо них — то, чем стекло и читается
  // на самом деле: к краю, где поверхность уходит от взгляда, тело светлеет.
  // Нормаль берётся из производных положения в камере — отдельного атрибута
  // для неё не нужно, и работает это на любой геометрии.
  float glass = 0.0;
  if (uGlass > 0.0) {
    float face = abs(dot(faceNormal(vView), normalize(-vView)));
    glass = uGlass * pow(1.0 - face, 2.0);
  }
  vec3 c = mix(uFill, uLine, min(1.0, ink + glass * 0.5));
  // Заливка тише линий: предмет читается сквозным каркасом, а не телом.
  // Её сила приходит АТРИБУТОМ: у растущей свечи тело пустое, у падающей
  // залитое — так свечу и рисуют, и в этом половина её узнаваемости.
  // Прорисовка ТОЛЬКО у новейшей: видно то, что ниже линии пера.
  float drawn = mix(1.0, smoothstep(uGrow + PEN, uGrow - PEN, vRise), vHead);
  // Само перо: узкая яркая кромка там, где линия рисуется сейчас. Без неё
  // прорисовка читается шторкой, а не рисованием.
  float pen = vHead * smoothstep(PEN * 2.2, 0.0, abs(vRise - uGrow));

  float a = uAlpha * mix(vFill * (1.0 + glass * 3.0), 1.0, ink) * dim * vLiveA * drawn * facing * wick;

  // СЛОЙ СВЕЧЕНИЯ ТЕЛА. Заказчик: «чтобы внутри типа была заполнена зелёным
  // светом… чтобы была объёмная эта буква». Объём даёт не заливка, а ПУТЬ
  // ЛУЧА в веществе: чем косее мы смотрим на поверхность, тем длиннее путь
  // сквозь тело и тем ярче должен светиться этот кусок. Косинус наклона
  // считается из нормали, а нормаль — из производных положения в камере.
  //
  // Слой рисуется СЛОЖЕНИЕМ и по обеим сторонам сразу: там, где за передней
  // стенкой стоит задняя, света вдвое больше — это и читается как толщина.
  // Никакого честного объёмного интеграла здесь нет и не нужно: у знака
  // простая форма, а глазу довольно того, что свет копится с толщиной.
  if (uGlow > 0.0) {
    // ТОЛЩИНА СЧИТАЕТСЯ ПО ОСИ ПРЕДМЕТА, а не по нормали грани.
    //
    // По нормали свет копился ПО ПОВЕРХНОСТЯМ: там, где луч задевал ещё и
    // стенку скругления, слоёв выходило три, а рядом два — и граница между
    // ними читалась резким уступом поперёк тела. Это заказчик и увидел.
    //
    // У призмы толщина на просвет считается точно: путь луча равен глубине,
    // делённой на косинус угла между лучом и осью. Величина гладкая по всему
    // кадру, швов не бывает нигде, и слой рисуется ОДИН раз (только лицевые
    // грани) — копить больше нечего.
    // Свет идёт ТОЛЬКО С ЛИЦЕВОЙ ПЛОСКОСТИ. Стенки — торцы, у них своей
    // толщины на просвет нет: считать её по оси предмета неверно, и как раз
    // это давало мягкий тёмный серп у скруглений. Отличаем стенку от лица
    // по нормали: у лица она смотрит вдоль оси, у стенки — поперёк.
    // ОДНА ТОЛЩИНА НА ПИКСЕЛЬ.
    //
    // Луч, прошедший сквозь призму, пересекает РОВНО ДВЕ поверхности: лицо
    // и спину, лицо и стенку или стенку и стенку. Поэтому слой рисуется
    // двусторонним и берётся вполсилы — сумма двух вкладов и даёт толщину,
    // одинаково честно и в середине тела, и у скруглений.
    //
    // Так вышло не сразу. Сначала толщина считалась по нормали грани: у
    // стенок она упиралась в предел, и граница этого предела читалась
    // уступом поперёк тела. Потом слой сделали односторонним — тогда там,
    // где стенка отвёрнута (а сквозь стекло она видна), вклада не
    // доставалось вовсе, и у скруглений появился тёмный серп. Обе поправки
    // лечили следствие; причина была в том, что вклад считался от
    // поверхности, а толщина принадлежит ЛУЧУ.
    vec3 eye = normalize(-vView);
    float ct = max(0.06, abs(dot(vAxis, eye)));
    float thick = 0.5 * (1.0 - exp(-uGlowPath / ct));
    float ga = uAlpha * uGlow * thick * drawn * vLiveA;
    // Цвет и прозрачность идут вместе: слой складывается с кадром (One/One),
    // и прозрачность тоже должна копиться — канвас лежит НАД страницей, и
    // пиксель с цветом, но нулевой прозрачностью, до экрана не доходит.
    gl_FragColor = vec4(uLine * ga * uMul, ga * uMul);
    return;
  }


  // СВЕЧА ПОД КУРСОРОМ. Совпадение по номеру в кольце, а не по расстоянию
  // до курсора: светится предмет, а не место.
  //
  // Прибавка к прозрачности идёт ДО отбрасывания: у дальних свечей
  // прозрачность мала, и без этого они бы под курсором не отзывались вовсе.
  // Растекание: радиус растёт от HOVER_R0 к полному, а сила внутри падает
  // от места, где курсор пересёк ЭТУ свечу, к её краям. Дважды сглаженный ход
  // убирает и границу пятна, и резкий центр.
  //
  // Якорь у каждой свечи свой и остаётся при ней, когда курсор ушёл: иначе
  // след от быстрого прохода гас бы мгновенно — пятно-то уехало с мышью.
  float gate = vLit;
  float rad = HOVER_R * mix(HOVER_R0, 1.0, uHoverSpread);
  vec2 hd = (vClip.xy / vClip.w - vLitAt) * vec2(uAspect, 1.0);
  float ht = clamp(1.0 - length(hd) / rad, 0.0, 1.0);
  // ОДИНАРНОЕ сглаживание, не квадрат. С квадратом спад выходил крутым:
  // у курсора 1.85 раза, а до низа той же свечи доходило 4% силы (1.04) —
  // то есть светилось пятно, а не свеча. Здесь свет доходит до её концов,
  // оставаясь неровным.
  float hov = gate * ht * ht * (3.0 - 2.0 * ht);
  a = min(1.0, a * (1.0 + HOVER_ALPHA * hov));

  // НЕВИДИМОЕ ОТБРАСЫВАЕМ, а не рисуем с нулевой прозрачностью.
  //
  // Тело теперь пишет глубину, и фрагмент с нулевой прозрачностью всё равно
  // её пишет: непроявленная часть приходящей свечи закрывала собой всё,
  // что за ней, и вместо растущей свечи получалась дыра. Заказчик это
  // и увидел: «новые свечки не вырисовываются, как было раньше».
  if (a < 0.01) discard;
  // Всё сияние взвешено по ink, то есть достаётся ЛИНИЯМ, а не заливке.
  // Мишура гаснет к дали: там её сетка мельче пикселя, и порог по шуму
  // щёлкает от подпиксельного сдвига. Вблизи, где она читается, остаётся как есть.
  float mul = SPARK_MUL * (1.0 - SPARKFADE * farAmt);
  // Подсветка достаётся и линиям, и заливке: если взвесить её по ink, как
  // проблеск, у дальних свечей она пропадёт вместе с растворённой сеткой.
  float fl = 1.0 + mul * ((GLINT * glint + SPECK * speck) * ink + SPARK * spark)
    + PEN_GLOW * pen * ink + HOVER_GLOW * hov * max(ink, 0.3);
#if BACKMODE == 2
  // Проба: обратные грани в маркер, чтобы посчитать, где они видны.
  if (!gl_FrontFacing) { gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); return; }
#endif
  gl_FragColor = vec4(c * a * fl * uMul, min(1.0, a * uMul * (1.0 + 0.35 * (fl - 1.0))));
}
`;function Ee(n,a,e,y,R,d,w,h,f,p,S,b,s){const v=[a,e,y,a,y,R],r=[[d,w],[h,w],[h,f],[d,w],[h,f],[d,f]];for(let o=0;o<6;o++)n.pos.push(...v[o]),n.uv.push(...r[o]),n.fill.push(p),n.base.push(S),n.top.push(b),n.rank.push(...s)}function Pt(n,a,e,y,R,d,w,h,f,p,S=ce,b=en,s=!1){const v=e-d,r=e+d,o=(t,l,g)=>{const m=t/S*Math.PI*2;return[a+Math.cos(m)*l,g,y+Math.sin(m)*l]};for(let t=0;t<S;t++)for(let l=0;l<b;l++){const g=v+(r-v)*(l/b),m=v+(r-v)*((l+1)/b);Ee(n,o(t,R,g),o(t+1,R,g),o(t+1,R,m),o(t,R,m),t,l,t+1,l+1,w,h,f,p)}if(s)for(const t of[v,r])for(let l=0;l<S;l++)for(let g=0;g<Ut;g++){const m=It+(1-It)*(g/Ut),x=It+(1-It)*((g+1)/Ut);Ee(n,o(l,R*m,t),o(l+1,R*m,t),o(l+1,R*x,t),o(l,R*x,t),l,g,l+1,g+1,w,h,f,p)}}function Re(n,a,e){const y={pos:[],uv:[],fill:[],base:[],top:[],rank:[]},d=n.close>=n.open?lo:co;if(n.hi-n.lo<jt){const r=(n.hi+n.lo)/2;n={...n,lo:r-jt/2,hi:r+jt/2}}const h=e*.13,f=Math.min(n.open,n.close),p=Math.max(n.open,n.close),S=Math.max((p-f)/2,e*.55),b=(f+p)/2,s=Math.min(n.lo,b-S),v=Math.max(n.hi,b+S);n.hi>p&&Pt(y,a,(n.hi+p)/2,0,h,(n.hi-p)/2,d,s,v,[1,0],Me,1),f>n.lo&&Pt(y,a,(f+n.lo)/2,0,h,(f-n.lo)/2,d,s,v,[1,0],Me,1),Pt(y,a,b,0,e,S,d,s,v,[0,0],ce,en,!0);for(const r of[-1,1])Pt(y,a,b+r*(S-Se*e*.5),0,e*ro,Se*e*.5,d,s,v,[0,1],ce,1);return y}function Go(){const n=Fn(no,eo,{span:oo,even:to}),a=Bt/it,e=a*.4,y=r=>-Bt/2+a*(r+.5),d=Re(n[0],y(0),e).pos.length/3,w=d*Y,h={pos:new Float32Array(w*3),uv:new Float32Array(w*2),fill:new Float32Array(w),base:new Float32Array(w),top:new Float32Array(w),slot:new Float32Array(w),rank:new Float32Array(w*2)},f=(r,o)=>{if(o.pos.length/3!==d)throw new Error("свеча иной топологии");h.pos.set(o.pos,r*d*3),h.uv.set(o.uv,r*d*2),h.fill.set(o.fill,r*d),h.base.set(o.base,r*d),h.top.set(o.top,r*d),h.rank.set(o.rank,r*d*2),h.slot.fill(r,r*d,(r+1)*d)},p=new Array(Y).fill(-1),S=new Float32Array(Y*2),b=r=>{const o=r%Y;if(p[o]===r)return!1;const t=n[Math.min(r,n.length-1)];return f(o,Re(t,y(r),e)),S[o*2]=y(r),S[o*2+1]=(t.hi+t.lo)/2,p[o]=r,!0};for(let r=0;r<=it;r++)b(r);const s=new Mt;s.setAttribute("position",new N(h.pos,3)),s.setAttribute("aUv",new N(h.uv,2)),s.setAttribute("aFill",new N(h.fill,1)),s.setAttribute("aBase",new N(h.base,1)),s.setAttribute("aTop",new N(h.top,1)),s.setAttribute("aSlot",new N(h.slot,1)),s.setAttribute("aRank",new N(h.rank,2)),console.log(`[cfig] лента свечей: ${w/3} треугольников, шаг ${d} вершин`);const v=["position","aUv","aFill","aBase","aTop","aSlot","aRank"];return{geo:s,step:a,maxGen:Math.max(0,n.length-it-2),slotAt:r=>h.slot[r],axisOf:(r,o)=>o.set(S[r*2],S[r*2+1],0),sync(r){let o=!1;for(let t=0;t<=it;t++)o=b(r+t)||o;if(o){for(const t of v)s.getAttribute(t).needsUpdate=!0;s.computeBoundingSphere()}return{head:(r+it)%Y,tail:r%Y}}}}const Po=(n,a)=>{const e=getComputedStyle(document.body).getPropertyValue(n).trim()||a,y=/^#([0-9a-f]{6})$/i.exec(e),R=parseInt(y?y[1]:a.slice(1),16);return new se().setRGB((R>>16&255)/255,(R>>8&255)/255,(R&255)/255,Je)},Do=-.85,Co=0,No=.7,Bo=.319,Oo=.07,ko=.42,Wo=.34,Le=.42,Ho=1.1,$o=1.5,Vo=.7,Ko=.9,Te=1.1,Fe=6,Xt=.34,zo=.12,Dt=.9,Uo=On||140,jo="/data/letter-t.bin",Ie=u.get("lwire")!=="0",Xo=u.has("ledge")?Number(u.get("ledge")):15,Ge=u.has("lw")?Number(u.get("lw")):.5,qo=70,Pe=u.has("laway")?Number(u.get("laway")):.6,Yo=1.1,qt={near:u.has("lnear")?Number(u.get("lnear")):1,far:u.has("lfar")?Number(u.get("lfar")):2.6},Qo=u.get("lfit")==="band"?"band":"fixed",De=["glb","hand"].includes(u.get("lgeo"))?u.get("lgeo"):"prism",ft={size:u.has("lsize")?Number(u.get("lsize")):.62,yaw:u.has("lyaw")?Number(u.get("lyaw")):-.22,tilt:u.has("ltilt")?Number(u.get("ltilt")):.05,roll:u.has("lroll")?Number(u.get("lroll")):0};ft.size;const Zo={grid:{cells:9,fill:1,rim:0,ribs:1},lines:{cells:1,fill:1.6,rim:2.6,ribs:1}},an=u.get("lmode")==="lines"?"lines":"grid",Ot=Zo[an],Jo=u.has("lcell")?Number(u.get("lcell")):Ot.cells,ta=u.has("lfill")?Number(u.get("lfill")):Ot.fill,ea=u.has("lrim")?Number(u.get("lrim")):Ot.rim,Ce=u.get("lback")==="1",na=u.has("lglass")?Number(u.get("lglass")):.9,oa=u.get("lface")==="0"?0:1,Ne=u.get("lskin")!=="0",Be=u.has("lglow")?Number(u.get("lglow")):.3,Yt=u.has("lbackline")?Number(u.get("lbackline")):.25,aa=u.has("libs")?Number(u.get("libs")):Ot.ribs,sa=u.get("lback2")==="1",ia=7,ra=tn||1/ia,Oe=12,la=.45,ke=tn===0?"still":u.get("tick")==="1"?"tick":"flow",ca=.1;let Qt=0,We=0;const He=matchMedia("(prefers-reduced-motion: reduce)"),B={x:0,y:0,sx:0,sy:0,px:0,py:0,v:0,on:!1};let J=-1,Zt=0;const ut=new Float32Array(Y),Ct=new Float32Array(Y*2);let $e=!1;const Ve=new An,Ke=new vt,At=new fe;function ua(){$e||($e=!0,addEventListener("pointermove",n=>{n.pointerType&&n.pointerType!=="mouse"||(B.x=n.clientX/innerWidth*2-1,B.y=-(n.clientY/innerHeight*2-1),B.on||(B.sx=B.x,B.sy=B.y),B.on=!0)},{passive:!0}),addEventListener("pointerout",n=>{n.relatedTarget||(B.on=!1)},{passive:!0}),addEventListener("blur",()=>{B.on=!1}))}const ze=30,Jt=new fe;function fa(n){const a=new DataView(n).getUint32(0,!0),e=new Float32Array(n,4,a*3),y=new Float32Array(n,4+a*12,a*2);let R=1/0,d=-1/0;for(let h=1;h<e.length;h+=3)e[h]<R&&(R=e[h]),e[h]>d&&(d=e[h]);const w=new Mt;return w.setAttribute("position",new N(e,3)),w.setAttribute("aUv",new N(y,2)),w.setAttribute("aFill",new N(new Float32Array(a).fill(.16),1)),w.setAttribute("aBase",new N(new Float32Array(a).fill(R),1)),w.setAttribute("aTop",new N(new Float32Array(a).fill(d),1)),w.setAttribute("aSlot",new N(new Float32Array(a),1)),w.setAttribute("aRank",new N(new Float32Array(a*2),2)),w.computeBoundingSphere(),w}function ha(n,a){const e=n.getAttribute("position"),y=e.count,R=Math.floor(y/3),d=new Float32Array(R*3),w=o=>`${Math.round(e.getX(o)*1e4)},${Math.round(e.getY(o)*1e4)},${Math.round(e.getZ(o)*1e4)}`,h=(o,t)=>{const l=w(o),g=w(t);return l<g?`${l}|${g}`:`${g}|${l}`};for(let o=0;o<R;o++){const t=o*3,l=e.getX(t),g=e.getY(t),m=e.getZ(t),x=e.getX(t+1)-l,P=e.getY(t+1)-g,c=e.getZ(t+1)-m,i=e.getX(t+2)-l,A=e.getY(t+2)-g,_=e.getZ(t+2)-m;let C=P*_-c*A,I=c*i-x*_,E=x*A-P*i;const L=Math.hypot(C,I,E)||1;d[o*3]=C/L,d[o*3+1]=I/L,d[o*3+2]=E/L}const f=[2,0,1],p=new Map;for(let o=0;o<R;o++)for(let t=0;t<3;t++){const l=h(o*3+t,o*3+(t+1)%3),g=p.get(l);g?g.push({t:o,e:t}):p.set(l,[{t:o,e:t}])}const S=Math.cos(a*Math.PI/180),b=new Float32Array(y*3);for(let o=0;o<R;o++)for(let t=0;t<3;t++){const l=p.get(h(o*3+t,o*3+(t+1)%3));let g=l.length<2,m=1;for(const x of l){if(x.t===o)continue;const P=d[o*3]*d[x.t*3]+d[o*3+1]*d[x.t*3+1]+d[o*3+2]*d[x.t*3+2];if(P<S){g=!0;const c=Math.acos(Math.max(-1,Math.min(1,P)))*180/Math.PI;m=Math.min(m,Ge+(1-Ge)*Math.min(1,Math.max(0,(c-a)/(qo-a))))}}if(g)for(let x=0;x<3;x++)b[(o*3+x)*3+f[t]]=m}const s=new Float32Array(y*3),v=new Float32Array(y*3),r=new Float32Array(y*3);for(let o=0;o<R;o++){const t=o*3;for(let l=0;l<3;l++)for(let g=0;g<3;g++)s[(t+l)*3+g]=e.getComponent(t,g),v[(t+l)*3+g]=e.getComponent(t+1,g),r[(t+l)*3+g]=e.getComponent(t+2,g)}return n.setAttribute("aV0",new N(s,3)),n.setAttribute("aV1",new N(v,3)),n.setAttribute("aV2",new N(r,3)),n.setAttribute("aHard",new N(b,3)),n}const bt=new fe,Ue=.55,va=u.has("lwhite")?Number(u.get("lwhite")):1.13,da=u.has("lwhitepx")?Number(u.get("lwhitepx")):650,ma=.6,pa=.75,je={box:{x0:111.9,x1:888.1,y0:221.3},path:(n,a)=>{n.moveTo(...a(888.1,221.3)),n.lineTo(...a(250.6,221.3)),n.bezierCurveTo(...a(174.3,221.3),...a(112.3,283),...a(111.9,359.3)),n.lineTo(...a(369.9,359.3)),n.lineTo(...a(497.7,778.6)),n.lineTo(...a(628.8,359.3)),n.lineTo(...a(749.4,359.3)),n.bezierCurveTo(...a(825.7,359.3),...a(887.7,297.6),...a(888.1,221.3))}},ga=n=>.6*n+.4*n*n*(3-2*n),Xe=n=>n*n*(3-2*n),qe=new he,te=new he,Ye=new he,ee=new yn,wa=u.has("poolaway")?Number(u.get("poolaway")):.6,Aa=(()=>{const a=getComputedStyle(document.body).getPropertyValue("--accent-section").trim().match(/^#?([0-9a-f]{6})$/i);return a?[0,2,4].map(e=>parseInt(a[1].slice(e,e+2),16)/255):[0,.906,.6]})();function ba(n){const a=new DataView(n).getUint32(0,!0),e=new Float32Array(n,4,a*3);let y=-1/0;for(let c=2;c<e.length;c+=3)e[c]>y&&(y=e[c]);const R=[];for(let c=0;c<a/3;c++){const i=c*9,A=e[i+3]-e[i],_=e[i+4]-e[i+1],C=e[i+5]-e[i+2],I=e[i+6]-e[i],E=e[i+7]-e[i+1],L=e[i+8]-e[i+2],O=_*L-C*E,M=C*I-A*L,G=A*E-_*I,D=Math.hypot(O,M,G)||1;G/D>.98&&R.push([[e[i],e[i+1]],[e[i+3],e[i+4]],[e[i+6],e[i+7]]])}const d=c=>`${Math.round(c[0]*1e4)},${Math.round(c[1]*1e4)}`,w=new Map;for(const c of R)for(let i=0;i<3;i++){const A=c[i],_=c[(i+1)%3],C=d(A)<d(_)?`${d(A)}|${d(_)}`:`${d(_)}|${d(A)}`,I=w.get(C);I?I.push([A,_]):w.set(C,[[A,_]])}const h=[];for(const c of w.values())c.length===1&&h.push(c[0]);const f=[];{const c=new Map;for(const[A,_]of h)c.set(d(A),[_,A]);let i=h[0][0];for(let A=0;A<h.length;A++){f.push(i);const _=c.get(d(i));if(!_)break;i=_[0]}}const p=Math.cos(55*Math.PI/180);{const c=_=>{const C=f[(_+f.length-1)%f.length],I=f[_],E=f[(_+1)%f.length],L=[I[0]-C[0],I[1]-C[1]],O=[E[0]-I[0],E[1]-I[1]],M=Math.hypot(L[0],L[1])||1,G=Math.hypot(O[0],O[1])||1;return(L[0]*O[0]+L[1]*O[1])/(M*G)},i=f.map((_,C)=>c(C)>p),A=[];for(let _=0;_<f.length;_++){const C=f[(_+f.length-1)%f.length],I=f[_],E=f[(_+1)%f.length],L=f[(_+2)%f.length];if(A.push(I),!i[_]||!i[(_+1)%f.length])continue;const O=Math.sqrt(Math.hypot(I[0]-C[0],I[1]-C[1]))||1e-4,M=Math.sqrt(Math.hypot(E[0]-I[0],E[1]-I[1]))||1e-4,G=Math.sqrt(Math.hypot(L[0]-E[0],L[1]-E[1]))||1e-4,D=0,T=D+O,W=T+M,$=W+G,K=(V,j,Q)=>[V[0]+(j[0]-V[0])*Q,V[1]+(j[1]-V[1])*Q],z=6;for(let V=1;V<z;V++){const j=T+(W-T)*V/z,Q=K(C,I,(j-D)/(T-D)),dt=K(I,E,(j-T)/(W-T)),kt=K(E,L,(j-W)/($-W)),St=K(Q,dt,(j-D)/(W-D)),Et=K(dt,kt,(j-T)/($-T));A.push(K(St,Et,(j-T)/(W-T)))}}f.length=0,f.push(...A)}const S=(c,i,A)=>(i[0]-c[0])*(A[1]-c[1])-(i[1]-c[1])*(A[0]-c[0]),b=(c,i,A,_)=>S(c,i,_)>=0&&S(i,A,_)>=0&&S(A,c,_)>=0;{let c=0;for(let i=0;i<f.length;i++){const A=f[i],_=f[(i+1)%f.length];c+=(_[0]-A[0])*(_[1]+A[1])}c>0&&f.reverse()}{const i=[];for(const A of f){const _=i[i.length-1];(!_||Math.hypot(A[0]-_[0],A[1]-_[1])>2e-4)&&i.push(A)}for(;i.length>3&&Math.hypot(i[0][0]-i[i.length-1][0],i[0][1]-i[i.length-1][1])<=2e-4;)i.pop();f.length=0,f.push(...i)}const s=[];{const c=f.map((E,L)=>L),i=E=>f[E];let A=c.length*c.length;for(;c.length>2&&A-- >0;){let E=!1;for(let L=0;L<c.length;L++){const O=c[(L+c.length-1)%c.length],M=c[L],G=c[(L+1)%c.length];if(S(i(O),i(M),i(G))<=0)continue;let D=!0;for(const T of c)if(!(T===O||T===M||T===G)&&b(i(O),i(M),i(G),i(T))){D=!1;break}if(D){s.push([O,M,G]),c.splice(L,1),E=!0;break}}if(!E)break}const _=(E,L)=>E<L?`${E}|${L}`:`${L}|${E}`,C=(E,L,O,M)=>{const G=E[0]-M[0],D=E[1]-M[1],T=L[0]-M[0],W=L[1]-M[1],$=O[0]-M[0],K=O[1]-M[1];return(G*G+D*D)*(T*K-W*$)-(T*T+W*W)*(G*K-D*$)+($*$+K*K)*(G*W-D*T)>1e-12},I=new Set;for(let E=0;E<f.length;E++)I.add(_(E,(E+1)%f.length));for(let E=0;E<8;E++){const L=new Map;for(let M=0;M<s.length;M++){const[G,D,T]=s[M];for(const[W,$]of[[G,D],[D,T],[T,G]]){const K=_(W,$),z=L.get(K);z?z.push(M):L.set(K,[M])}}let O=0;for(const[M,G]of L){if(G.length!==2||I.has(M))continue;const[D,T]=G,[W,$]=M.split("|").map(Number),K=j=>s[j].find(Q=>Q!==W&&Q!==$),z=K(D),V=K(T);z===void 0||V===void 0||C(i(W),i(z),i($),i(V))&&(S(i(z),i(W),i(V))<=0||S(i(V),i($),i(z))<=0||(s[D]=[z,W,V],s[T]=[V,$,z],O++))}if(!O)break}for(let E=0;E<s.length;E++)s[E]=s[E].map(L=>f[L])}const v={pos:[],uv:[],cap:[]};let r=1;const o=(c,i)=>{v.pos.push(c[0],c[1],i),v.uv.push(c[0],c[1]),v.cap.push(r)},t=y,l=s.length>R.length/2?s:R;for(const[c,i,A]of l)o(c,t),o(i,t),o(A,t),o(c,-t),o(A,-t),o(i,-t);r=0;for(let c=0;c<f.length;c++){const i=f[c],A=f[(c+1)%f.length];o(i,t),o(A,-t),o(A,t),o(i,t),o(i,-t),o(A,-t)}const g=v.pos.length/3,m=new Mt;m.setAttribute("position",new N(new Float32Array(v.pos),3)),m.setAttribute("aUv",new N(new Float32Array(v.uv),2)),m.setAttribute("aCap",new N(new Float32Array(v.cap),1)),m.setAttribute("aFill",new N(new Float32Array(g).fill(.16),1));let x=1/0,P=-1/0;for(let c=1;c<v.pos.length;c+=3)v.pos[c]<x&&(x=v.pos[c]),v.pos[c]>P&&(P=v.pos[c]);return m.setAttribute("aBase",new N(new Float32Array(g).fill(x),1)),m.setAttribute("aTop",new N(new Float32Array(g).fill(P),1)),m.setAttribute("aSlot",new N(new Float32Array(g),1)),m.setAttribute("aRank",new N(new Float32Array(g*2),2)),m.computeBoundingSphere(),m.userData.depth=t,m.userData.loop=f,m}function ya(n,a,e,y){const R=n.length,d=[],w=[],h=[],f=[],p=[];for(let r=0;r<R;r++){const o=n[r],t=n[(r+1)%R],l=[o[0],o[1],y],g=[t[0],t[1],y],m=[[0,-1],[0,1],[1,1],[0,-1],[1,1],[1,-1]];for(const[x,P]of m)d.push(...x?g:l),w.push(...l),h.push(...g),f.push(P),p.push(x)}const S=d.length/3,b=new Mt,s=r=>new N(new Float32Array(S).fill(r),1);b.setAttribute("position",new N(new Float32Array(d),3)),b.setAttribute("aV0",new N(new Float32Array(w),3)),b.setAttribute("aV1",new N(new Float32Array(h),3)),b.setAttribute("aV2",new N(new Float32Array(w),3)),b.setAttribute("aSide",s(0)),b.getAttribute("aSide").array.set(f),b.setAttribute("aEnd",s(0)),b.getAttribute("aEnd").array.set(p);const v=new Float32Array(S*3);for(let r=0;r<S;r++)v[r*3+2]=1;return b.setAttribute("aHard",new N(v,3)),b.setAttribute("aCap",s(1)),b.setAttribute("aUv",new N(new Float32Array(S*2),2)),b.setAttribute("aFill",s(0)),b.setAttribute("aBase",s(a)),b.setAttribute("aTop",s(e)),b.setAttribute("aSlot",s(0)),b.setAttribute("aRank",new N(new Float32Array(S*2),2)),b.computeBoundingSphere(),b}function xa(n){const a=n.userData.depth;if(!a)return n;const e=n.getAttribute("position"),y=n.getAttribute("aHard"),R=w=>e.getZ(w)<-a+1e-4,d=[2,0,1];for(let w=0;w<e.count/3;w++){const h=w*3;for(let f=0;f<3;f++)if(R(h+f)&&R(h+(f+1)%3))for(let p=0;p<3;p++)y.setComponent(h+p,d[f],-Math.abs(y.getComponent(h+p,d[f])))}return y.needsUpdate=!0,n}let Qe=!1,H=null,tt=null,U=null,et=null,ne=0,F=null,nt=null,Ze=!1,Nt=null,oe=null,ae=0;function _a(){if(!Bn)return;const n=window[Nn]?.cloud;if(!n?.ready){requestAnimationFrame(_a);return}if(!H){const a=uo(n.renderer),e=new rn({vertexShader:fo,fragmentShader:Io,transparent:!0,depthWrite:!0,side:ot,extensions:{derivatives:!0},uniforms:{uFill:{value:new se(.03,.11,.14)},uLine:{value:Po("--accent-section","#00E799")},uAlpha:{value:Dt},uWire:{value:a},uInkAvg:{value:nn},uDepth:{value:new vt(0,1)},uHead:{value:it},uTail:{value:0},uGrow:{value:1},uGone:{value:0},uTime:{value:0},uLit:{value:ut},uLitAt:{value:Ct},uHoverSpread:{value:0},uCell:{value:1},uFillMul:{value:1},uRim:{value:0},uEdges:{value:0},uGlass:{value:0},uEdgeFace:{value:0},uGlow:{value:0},uGlowPath:{value:zn},uMul:{value:1},uFar:{value:0},uPx:{value:1},uLinePx:{value:xt||ue},uRes:{value:new vt(1,1)},uAspect:{value:1}}});tt=Go(),H=new at(tt.geo,e),H.frustumCulled=!1}if(!et){et=new ve,U=new ln(ze,1,.1,100),et.add(H);const a=new cn({vertexShader:`
        precision highp float;
        attribute vec3 position;
        varying vec2 vUv;
        void main() {
          vUv = position.xy * 0.5 + 0.5;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uTex;
        uniform vec2 uTexel;
        varying vec2 vUv;
        void main() {
          vec4 sum = vec4(0.0);
          for (int i = 0; i < ${Z}; i++) {
            for (int j = 0; j < ${Z}; j++) {
              vec2 o = (vec2(float(i), float(j)) + 0.5) / ${k(Z)} - 0.5;
              sum += texture2D(uTex, vUv + o * uTexel * ${k(Z)});
            }
          }
          gl_FragColor = sum / ${k(Z*Z)};
        }
      `,uniforms:{uTex:{value:null},uTexel:{value:new vt}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Lt,blendSrc:ct,blendDst:un}),e=new Mt;e.setAttribute("position",new N(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const y=new at(e,a);y.frustumCulled=!1;const R=new ve;R.add(y);const d=new fn,w=new vt;let h=null;const f=()=>{const s=H.material.clone();return s.uniforms.uHead.value=0,s.uniforms.uTail.value=-1,s.uniforms.uGone.value=0,s.uniforms.uAlpha.value=0,s.uniforms.uGrow.value=0,s.uniforms.uDepth.value.set(1e3,1e4),s.uniforms.uFillMul.value=ta,s.uniforms.uRim.value=ea,Ie&&(s.defines={...s.defines||{},EDGES:1},s.uniforms.uEdges.value={1:2,2:3,3:4,4:5}[u.get("ldbg")]||1,s.needsUpdate=!0),s.side=Ce?ot:me,s.uniforms.uGlass.value=na,s.uniforms.uEdgeFace.value=oa,u.get("ltest")==="0"&&(s.depthTest=!1),u.get("lwrite")==="0"&&(s.depthWrite=!1),s},p=s=>{const v=f();F=new at(Ie?xa(ha(s,Xo)):s,v);const r=t=>{const l=v.clone();return l.uniforms=Object.assign({},v.uniforms,t.uniforms),l.side=ot,l.depthWrite=!1,delete t.uniforms,Object.assign(l,t),l};if(Be>0){const t=r({uniforms:{uGlow:{value:Be},uMul:{value:1}},side:ot,depthTest:!1,blending:Lt,blendSrc:ct,blendDst:ct}),l=new at(F.geometry,t);l.renderOrder=-2,l.frustumCulled=!1,F.add(l)}const o=F.geometry.userData.loop;if(o){v.uniforms.uEdges.value=0;const t=F.geometry.boundingSphere,l=t.center.y-t.radius,g=t.center.y+t.radius,m=F.geometry.userData.depth,x=(i,A,_)=>{const C=r(Object.assign({uniforms:{uMul:{value:A}}},_));C.defines={...C.defines||{},EDGES:1,RIBBON:1},C.uniforms.uEdges.value={1:2,2:3,3:4,4:5}[u.get("ldbg")]||1,C.needsUpdate=!0;const I=new at(ya(o,l,g,i),C);return I.frustumCulled=!1,I},P=x(-m,Yt,{depthTest:!1,blending:Lt,blendSrc:ct,blendDst:ct});P.renderOrder=-1,F.add(P);const c=x(m,1,{depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});c.renderOrder=1,F.add(c)}if(!o&&Yt>0&&Ne){const t=r({uniforms:{uMul:{value:Yt},uFar:{value:1}},depthTest:!1,blending:Lt,blendSrc:ct,blendDst:ct}),l=new at(F.geometry,t);l.renderOrder=-1,l.frustumCulled=!1,F.add(l)}if(Ne){const t=v.clone();t.uniforms=v.uniforms,t.colorWrite=!1,t.depthWrite=!0,t.side=ot;const l=new at(F.geometry,t);l.renderOrder=-1,l.frustumCulled=!1,F.add(l),v.depthWrite=!1,v.side=ot}else v.side=Ce?ot:me;{const t=F.geometry.userData.loop,l=F.geometry.userData.depth||0;let g=-.672,m=.672,x=.477;t&&(g=Math.min(...t.map(I=>I[0])),m=Math.max(...t.map(I=>I[0])),x=Math.max(...t.map(I=>I[1])));const P=je.box,c=(m-g)/(P.x1-P.x0),i=(g+m)/2,A=(I,E)=>[i+(I-(P.x0+P.x1)/2)*c,x-(E-P.y0)*c],_=new pn;je.path(_,A);const C=new gn(_,32);C.translate(0,0,l+.002),nt=new at(C,new wn({color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:ot,toneMapped:!1})),nt.renderOrder=3,nt.frustumCulled=!1,nt.visible=!1,F.add(nt)}F.frustumCulled=!1,F.visible=!1,et.add(F),window.__cfigChart&&(window.__cfigChart.letter=F)};De==="hand"?p(Cn(bn,{cells:Jo,ribs:aa,backRibs:sa,mode:an})):Qe||(Qe=!0,fetch(jo).then(s=>s.ok?s.arrayBuffer():Promise.reject(new Error(s.status))).then(s=>p(De==="glb"?fa(s):ba(s))).catch(s=>console.warn("[cfig] знак Tronexo не загрузился:",s.message))),window.__cfigChart={mesh:H,stage:et,lens:U,band:tt,letter:F,hover:{slot:-1,lit:ut},pose:ft,depth:qt};const S=new vt,b=(s,v)=>{v&&v.getDrawingBufferSize(S),et.traverse(r=>{const o=r.material&&r.material.uniforms;o&&(o.uPx&&(o.uPx.value=s),o.uRes&&o.uRes.value.set(S.x*s,S.y*s))})};n.scene.onAfterRender=s=>{if(F&&!Ze){Ze=!0;const o=[];F.traverse(t=>{o.push([t,t.visible,t.material&&t.material.visible]),t.visible=!0,t.material&&(t.material.visible=!0)});try{s.compile(et,U)}catch{}for(const[t,l,g]of o)t.visible=l,t.material&&(t.material.visible=g)}const v=s.autoClear;s.autoClear=!1;const r=Z>1&&!n.narrow&&document.body.dataset.route==="tronexo";if(r){s.getDrawingBufferSize(w);const o=Math.max(1,Math.round(w.x*Z)),t=Math.max(1,Math.round(w.y*Z));if(h)(h.width!==o||h.height!==t)&&h.setSize(o,t);else{h=new hn(o,t,{depthBuffer:!0});const l=s.getRenderTarget();s.setRenderTarget(h),s.clear(!0,!0,!1),s.setRenderTarget(l)}}else h&&(h.dispose(),h=null);if(r&&(Xn||F&&F.visible)){const o=s.getRenderTarget(),t=s.getClearColor(new se),l=s.getClearAlpha();s.setRenderTarget(h),s.setClearColor(0,0),s.clear(!0,!0,!1),b(Z,s),s.render(et,U),b(1,s),s.setRenderTarget(o),s.setClearColor(t,l),a.uniforms.uTex.value=h.texture,a.uniforms.uTexel.value.set(1/h.width,1/h.height),s.render(R,d)}else s.render(et,U);s.autoClear=v}}ua(),Nt||(Nt=a=>{const e=document.body.dataset.route==="tronexo";if(H.visible=e,n.points&&(n.points.visible=!e),n.lines&&(n.lines.visible=!e),!e){Ht(0,0,0),$t(0),Vt(0),F&&(F.visible=!1);return}const y=Math.min(ca,Math.max(0,(a-We)/1e3));We=a,He.matches||(Qt+=y);let R=0;if(ke==="tick"){const M=Qt/Oe,G=Math.floor(M),D=Math.min(1,(M-G)*Oe/la);R=G+D*D*(3-2*D)}else ke==="flow"&&(R=Qt*ra);const d=Math.min(R+pe()/Uo,tt.maxGen),w=Math.floor(d),h=d-w,f=tt.sync(w),p=H.material.uniforms;p.uHead.value=f.head,p.uTail.value=f.tail,p.uGrow.value=kn?h*h*(3-2*h):1,p.uGone.value=Math.min(1,h*1.18),ne=d*tt.step;const S=n.camera,b=Math.tan(S.fov*Math.PI/360)*S.position.z,s=b*S.aspect,v=!!n.narrow;U.aspect=S.aspect,U.position.set(0,0,b/Math.tan(ze*Math.PI/360)),U.updateProjectionMatrix(),U.updateMatrixWorld();const r=b*(v?ko:No);H.scale.setScalar(r),H.rotation.set(Co,Do,0);const o=Math.cos(H.rotation.y),t=Math.sin(H.rotation.y);H.position.set(s*(v?0:Bo)-ne*o*r,b*(v?Wo:Oo),ne*t*r);const l=Math.abs(t)*Bt*r;Jt.set(-Bt/2+tt.step*(d+it/2),0,0),H.localToWorld(Jt);const g=U.position.distanceTo(Jt);H.material.uniforms.uDepth.value.set(g-l*.45,g+l*Jn);let m=-1,x=1e9;if(B.on&&!He.matches){H.updateMatrixWorld(),Ke.set(B.x,B.y),Ve.setFromCamera(Ke,U);const M=Ve.intersectObject(H,!1)[0];if(M&&M.face)m=tt.slotAt(M.face.a),x=0;else{for(let G=0;G<Y;G++){tt.axisOf(G,At),H.localToWorld(At),At.project(U);const D=(At.x-B.x)*S.aspect,T=At.y-B.y,W=Math.sqrt(D*D+T*T);W<x&&(x=W,m=G)}x>Xt&&(m=-1)}}J=m,window.__cfigChart.hover.slot=J;const P=x<=0?1:Math.max(0,Math.min(1,(Xt-x)/(Xt-zo))),c=J>=0?P*P*(3-2*P):0,i=(B.x-B.px)/Math.max(y,.001),A=(B.y-B.py)/Math.max(y,.001);B.px=B.x,B.py=B.y;const _=Math.sqrt(i*i+A*A);B.v+=(_-B.v)*Math.min(1,y*12);const C=Math.min(1,B.v/$o)*Vo;for(let M=0;M<Y;M++){const G=M===J?c:0,D=G>ut[M]?Ho:Ko;let T=ut[M]+(G-ut[M])*Math.min(1,y*D);M===J&&(T=Math.max(T,c*C)),ut[M]=T}const I=J>=0?1:0;Zt+=(I-Zt)*Math.min(1,y*(I?Te:Te*3)),B.sx+=(B.x-B.sx)*Math.min(1,y*Fe),B.sy+=(B.y-B.sy)*Math.min(1,y*Fe),J>=0&&(Ct[J*2]=B.sx,Ct[J*2+1]=B.sy),p.uLit.value=ut,p.uLitAt.value=Ct,p.uHoverSpread.value=Zt,p.uAspect.value=S.aspect;const E=xn(),L=En(E),O=Rn(E);if(H.material.uniforms.uAlpha.value=Dt*(v?Le:1)*L,H.visible=e&&L>.005,F&&(F.visible=e&&O>.004,F.visible||(Ht(0,0,0),$t(0),Vt(0)),F.visible)){const M=F.material.uniforms,G=_n(Mn()),D=Sn(),T=Dt*(v?Le:1)*O*D,W=document.querySelector(".call"),$=window.innerHeight||1,K=W?$-W.getBoundingClientRect().top:0,z=Math.max(0,Math.min(1,(K-va*$)/da)),V=ga(z),j=Xe(Math.min(1,z/ma)),Q=Xe(Math.min(1,z/pa));M.uAlpha.value=T*(1-j),M.uGrow.value=O*O*(3-2*O),M.uTime.value=H.material.uniforms.uTime.value;const dt=document.querySelector(".footer"),kt=dt?dt.getBoundingClientRect().top:window.innerHeight;if(Qo==="band"){const Rt=Math.max(120,Math.min(window.innerHeight,kt))/window.innerHeight;F.scale.setScalar(b*Math.min(ft.size,Rt*2*.62)),F.position.set(0,b*(1-Rt),0)}else{F.scale.setScalar(b*ft.size),F.position.set(0,0,0);const pt=U.position.distanceTo(F.position);F.position.set(0,0,-G*Pe*pt);const Rt=1/(1+G*Pe),sn=xt||ue;M.uLinePx.value=Math.max(Yo,sn*Rt)}ee.set(ft.tilt,ft.yaw,ft.roll),Q>0?(qe.setFromEuler(ee),U.getWorldQuaternion(te),F.parent.getWorldQuaternion(Ye),te.premultiply(Ye.invert()),F.quaternion.slerpQuaternions(qe,te,Q)):F.rotation.copy(ee);const St=F.geometry.boundingSphere.radius*F.scale.x,Et=U.position.distanceTo(F.position);M.uDepth.value.set(Et-St*qt.near,Et+St*qt.far),bt.set(0,F.geometry.boundingSphere.center.y-F.geometry.boundingSphere.radius,0),F.localToWorld(bt),bt.project(U);const mt=Math.max(0,Math.min(1,T/Dt));nt&&(nt.material.opacity=V*mt,nt.visible=V*mt>.001);for(const pt of F.children)pt!==nt&&(pt.visible=j<.999);F.material.visible=j<.999,Ht((bt.x*.5+.5)*window.innerWidth,(.5-bt.y*.5)*window.innerHeight,M.uGrow.value*mt*(1-wa*G));const Wt=Math.max(0,Math.min(1,(G-Ue)/(1-Ue)));$t(Wt*Wt*(3-2*Wt)*mt*(1-V),Aa),Vt(V*mt)}H.material.uniforms.uTime.value=pe()/xo},oe=a=>{Nt(a),ae=requestAnimationFrame(oe)}),Nt(performance.now()),ae||(ae=requestAnimationFrame(oe))}export{_a as init};
