import{b as ze,V as ht,f as Xt,D as it,M as rt,S as ee,P as je,R as Ue,O as Xe,i as lt,j as xt,B as bt,e as C,k as qe,l as Ye,m as Ze,n as ne,L as Je,o as Qe,N as Ne,F as oe,p as tn,g as te,q as en}from"./three.module.BH5gECCB.js";import{c as Tt,l as Dt,m as ae}from"./Base.astro_astro_type_script_index_0_lang.BriLLrvq.js";import{endProgress as nn,signAway as on,callProgress as an,footerRoom as sn,ribbonFade as rn,signRise as ln}from"./ending.D5skQFQd.js";import"./Lab.astro_astro_type_script_index_0_lang.BeoES-qh.js";import"./router.UeToN5xW.js";function cn(o=2654435769){let a=o>>>0;return()=>{a|=0,a=a+1831565813|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function un(o,a,{span:e=1.44,drift:y=.42,cap:E=.62,wick:d=.16,PULL:w=.12}={}){const v=cn(o);let u=0;const m=[],_=()=>{const p=u;u+=(v()-.5)*y-u*w,u=Math.max(-E,Math.min(E,u));const M=u;return{open:p,close:M,lo:Math.min(p,M)-v()*d,hi:Math.max(p,M)+v()*d}};for(let p=0;p<a;p++)m.push(_());let A=1/0,s=-1/0;for(const p of m)A=Math.min(A,p.lo),s=Math.max(s,p.hi);const h=(A+s)/2,i=e/(s-A),n=e/2*1.08,t=n*.72,l=p=>{const M=(p-h)*i,T=Math.abs(M);return T<=t?M:Math.sign(M)*(t+(n-t)*Math.tanh((T-t)/(n-t)))},g=p=>({open:l(p.open),close:l(p.close),lo:l(p.lo),hi:l(p.hi)});return{series:m.map(g),next:()=>g(_())}}function fn(o,a,{even:e=0,stat:y=140,...E}={}){const d=un(o,Math.min(a,14),E),w=d.series.slice();for(;w.length<a;)w.push(d.next());if(e<=0)return w;const v=w.map(t=>Math.abs(t.close-t.open)/2),u=w.map(t=>t.hi-Math.max(t.open,t.close)),m=w.map(t=>Math.min(t.open,t.close)-t.lo),_=Math.max(1,Math.min(y,w.length)),A=t=>t.slice(0,_).reduce((l,g)=>l+g,0)/_,s=A(v),h=A(u),i=A(m),n=(t,l)=>l+(t-l)*(1-e);return w.map((t,l)=>{const g=(t.open+t.close)/2,p=Math.max(n(v[l],s),0),M=t.close>=t.open?1:-1,T=g-M*p,c=g+M*p;return{open:T,close:c,hi:Math.max(T,c)+Math.max(n(u[l],h),0),lo:Math.min(T,c)-Math.max(n(m[l],i),0)}})}const q=.5,j=.252,At=.697,at=-.697,ft=.185,gt=.25,qt=-.234,Yt=.231,Zt=-.004,et=.158,Ct=12,vt=2,Nt=4,dt=6,_t=7,hn=4,se=1,Mt=2,ie=4,vn=1;function re(o){const a=q-ft;if(o<=a)return at;const e=(o-a)/ft;return at+ft*(1-Math.sqrt(Math.max(0,1-e*e)))}function dn(o){const a=j+gt;if(o>=a)return At;const e=(a-o)/gt;return At-gt*(1-Math.sqrt(Math.max(0,1-e*e)))}function le(o){const a=(j-o)/(j+q),e=qt+(Zt-qt)*a,y=Yt+(Zt-Yt)*a;return[e,y]}function mn(){const o=[];o.push([at+ft,q],[At,q]);for(let a=1;a<=_t;a++){const e=Math.PI/2*(a/_t);o.push([At-gt*(1-Math.cos(e)),j+gt*(1-Math.sin(e))])}o.push([Yt,j],[Zt,-q],[qt,j],[at,j],[at,q-ft]);for(let a=1;a<=_t;a++){const e=Math.PI/2*(a/_t);o.push([at+ft*(1-Math.cos(e)),q-ft*(1-Math.sin(e))])}return o}function pn(o,{cells:a=1,ribs:e=1,backRibs:y=!1,mode:E="grid"}={}){const d=E==="grid",w=[],v=[],u=(h,i)=>{w.push(h[0],h[1],h[2]),v.push(i[0],i[1])},m=(h,i,n,t,l,g,p,M)=>{u(h,l),u(i,g),u(n,p),u(h,l),u(n,p),u(t,M)};for(const h of[et,-et])for(let i=0;i<vt;i++){const n=j+(q-j)*i/vt,t=j+(q-j)*(i+1)/vt;for(let l=0;l<Ct;l++){const g=l/Ct,p=(l+1)/Ct,M=(F,W)=>re(F)+(dn(F)-re(F))*W,T=[M(n,g),n,h],c=[M(n,p),n,h],r=[M(t,p),t,h],b=[M(t,g),t,h],S=i/vt*se*a,N=(i+1)/vt*se*a,D=hn*e*(h>0||y?1:0),L=F=>(F[0]-at)/(At-at)*D*a,R=F=>[F[0]*a,F[1]*a],O=d?R(T):[L(T),S],x=d?R(c):[L(c),S],I=d?R(r):[L(r),N],P=d?R(b):[L(b),N];h>0?m(T,c,r,b,O,x,I,P):m(b,r,c,T,P,I,x,O)}}for(const h of[et,-et])for(let i=0;i<dt;i++){const n=j-(j+q)*i/dt,t=j-(j+q)*(i+1)/dt,[l,g]=le(n),[p,M]=le(t);for(let T=0;T<Nt;T++){const c=T/Nt,r=(T+1)/Nt,b=[l+(g-l)*c,n,h],S=[l+(g-l)*r,n,h],N=[p+(M-p)*r,t,h],D=[p+(M-p)*c,t,h],L=i/dt*ie*a,R=(i+1)/dt*ie*a,O=h>0||y?1:0,x=$=>[$[0]*a,$[1]*a],I=d?x(b):[c*Mt*a,L*O],P=d?x(S):[r*Mt*a,L*O],F=d?x(N):[r*Mt*a,R*O],W=d?x(D):[c*Mt*a,R*O];h>0?m(b,S,N,D,I,P,F,W):m(D,N,S,b,W,F,P,I)}}const _=mn();for(let h=0;h<_.length;h++){const i=_[h],n=_[(h+1)%_.length],t=[i[0],i[1],et],l=[n[0],n[1],et],g=[n[0],n[1],-et],p=[i[0],i[1],-et],M=vn*a;if(d){const T=Math.abs(n[0]-i[0]),c=Math.abs(n[1]-i[1]),r=T>=c?b=>[b[0]*a,b[2]*a]:b=>[b[2]*a,b[1]*a];m(t,l,g,p,r(t),r(l),r(g),r(p))}else m(t,l,g,p,[0,M],[0,M],[0,0],[0,0])}const A=w.length/3,s=new o.BufferGeometry;return s.setAttribute("position",new o.BufferAttribute(new Float32Array(w),3)),s.setAttribute("aUv",new o.BufferAttribute(new Float32Array(v),2)),s.setAttribute("aFill",new o.BufferAttribute(new Float32Array(A).fill(.16),1)),s.setAttribute("aBase",new o.BufferAttribute(new Float32Array(A).fill(-q),1)),s.setAttribute("aTop",new o.BufferAttribute(new Float32Array(A).fill(q),1)),s.setAttribute("aSlot",new o.BufferAttribute(new Float32Array(A),1)),s.setAttribute("aRank",new o.BufferAttribute(new Float32Array(A*2),2)),s.computeBoundingSphere(),s}const gn="__cfigScene",f=new URLSearchParams(location.search),wn=f.get("mesh")!=="0",An=Number(f.get("step"))||0,bn=f.get("grow")!=="0",Be=f.has("drift")?Number(f.get("drift")):null,yn=f.get("ink")??"hard",xn=f.has("bias")?Number(f.get("bias")):.8,ce=f.has("aniso")?Number(f.get("aniso")):0,ue=f.has("lw")?Number(f.get("lw")):1,_n=f.has("gain")?Number(f.get("gain")):0,fe=f.has("taps")?Number(f.get("taps")):1,Mn=f.get("grid")??"fw",wt=f.has("linepx")?Number(f.get("linepx")):0,Sn=f.has("glowwall")?Number(f.get("glowwall")):.55,En=f.has("glowpath")?Number(f.get("glowpath")):.55,Ln=f.has("cells")?Number(f.get("cells")):1,Rn=f.has("spark")?Number(f.get("spark")):1,J=f.has("ss")?Number(f.get("ss")):3,Fn=f.get("ssall")==="1",In=f.has("farbias")?Number(f.get("farbias")):1.5,Gn=f.has("flat")?Number(f.get("flat")):1,Pn=f.has("back")?Number(f.get("back")):1,Tn=f.has("sparkfade")?Number(f.get("sparkfade")):1,Dn=f.has("fade")?Number(f.get("fade")):.62,ot=20,Z=ot+1,Cn=.3,Nn=1200,Gt=3.2,Bn=1129270355,On=1.35,he=5,Bt=3,St=.1,kn=.62,Wn=.55,Hn=.75,Jt=14,Oe=6,$n=1,ve=.055,Vn=.06,Kn=.42,Ot=.08,Et=32,st=[4,2];let ke=0;function zn(o){const a=document.createElement("canvas");a.width=Et*st[0],a.height=Et*st[1];const e=a.getContext("2d");e.clearRect(0,0,a.width,a.height),e.strokeStyle="#fff",e.lineCap="butt";const y=(m,_)=>{e.lineWidth=_,e.beginPath(),e.moveTo(m,0),e.lineTo(m,a.height),e.stroke(),m===0&&(e.beginPath(),e.moveTo(a.width,0),e.lineTo(a.width,a.height),e.stroke())},E=(m,_)=>{e.lineWidth=_,e.beginPath(),e.moveTo(0,m),e.lineTo(a.width,m),e.stroke(),m===0&&(e.beginPath(),e.moveTo(0,a.height),e.lineTo(a.width,a.height),e.stroke())};for(let m=0;m<st[0];m++)y(m*Et,(m===0?3.4:1.8)*ue);for(let m=0;m<st[1];m++)E(m*Et,1.8*ue);const d=e.getImageData(0,0,a.width,a.height).data;let w=0;for(let m=3;m<d.length;m+=4)w+=d[m]/255;ke=Math.min(1,w/(d.length/4)*We);const v=new Ze(a);v.wrapS=ne,v.wrapT=ne,v.generateMipmaps=!0,v.minFilter=Je,v.magFilter=Qe,v.colorSpace=Ne;const u=o?o.capabilities.getMaxAnisotropy():1;return v.anisotropy=ce?Math.min(ce,u):u,v}const jn=`
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
uniform float uLit[${Z}];
uniform vec2 uLitAt[${Z}];
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
  vGrid = aUv * uCell * ${Ln.toFixed(4)} / vec2(${st[0]}.0, ${st[1]}.0);
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
`,k=o=>Number.isInteger(o)?`${o}.0`:`${o}`,Un=.11,Xn=4,qn=.45,Yn=.3,Zn=.7,Jn=.25,We=4.2,Qt=2.6,Qn=3.8,to=4,eo=2,no=900,oo=5.5,ao=.07,so=2.6,io=16,ro=.22,lo=2.4,co=.42,uo=2.8,fo=`
precision highp float;
#define GLINT_SCALE ${k(oo)}
#define GLINT_DRIFT ${k(ao)}
#define GLINT ${k(so)}
#define SPECK_SCALE ${k(io)}
#define SPECK_DRIFT ${k(ro)}
#define SPECK ${k(lo)}
#define SPARK ${k(uo)}
#define WIRE_GAIN ${k(_n||We)}
#define MIP_BIAS ${k(xn)}
#define TAPS ${fe}
// Смещение мипа под число выборок: каждая выборка отвечает за свою долю
// пикселя, поэтому берёт уровень мельче ровно во столько же раз.
#define TAP_BIAS ${k(-Math.log2(Math.sqrt(fe)))}
#define SPARK_MUL ${k(Rn)}
#define FARBIAS ${k(In)}
#define FLAT ${k(Gn)}
// КРОМКА ШТРИХА. Жёсткое колено min(1, x) было причиной мерцания: усиление
// множит и сам штрих, и его подпиксельные колебания, а обрезание по единице
// делает из плавного ската ступеньку. Пиксель у кромки щёлкает включено —
// выключено вместо того, чтобы гаснуть, и лента на медленном ходу кажется
// дёрганой. Замер: за 50 мс лента проходит 0.22 px, а менялось 41.5% пикселей.
//
// Мягкое насыщение снимает именно колено: у ядра штриха яркость та же
// (1 - e^-4.2 = 0.985), а скат тянется дальше и меняется непрерывно.
#define INK(x) ${yn==="hard"?"(min(1.0, x))":"(1.0 - exp(-(x)))"}
#define BACK ${k(co)}
#define BACKMODE ${Pn}
#define SPARKFADE ${k(Tn)}
#define LINE_PX ${k(wt||Qt)}
#define MAJOR_PX ${k(wt?wt*1.6:Qn)}
#define GRID_X ${k(to)}
#define GRID_Y ${k(eo)}
#define ANALYTIC ${Mn==="fw"?1:0}
#define HOVER_R ${k(qn)}
#define HOVER_R0 ${k(Yn)}
#define HOVER_GLOW ${k(Zn)}
#define HOVER_ALPHA ${k(Jn)}
#define WICK_DIM ${k(kn)}
#define WICK_TIP ${k(Wn)}
#define WICK_TIP_FADE ${k(Hn)}
#define PEN ${k(Un)}
#define PEN_GLOW ${k(Xn)}
// Насколько быстро свет тела набирает силу с толщиной: чем больше, тем
// раньше он выходит на полную. Подбиралось кадрами.
#define GLOW_WALL ${k(Sn)}
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
  vec2 f = abs(fract(vGrid * vec2(${st[0]}.0, ${st[1]}.0)) - 0.5);   // проблеск идёт по той же сетке
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
`;function de(o,a,e,y,E,d,w,v,u,m,_,A,s){const h=[a,e,y,a,y,E],i=[[d,w],[v,w],[v,u],[d,w],[v,u],[d,u]];for(let n=0;n<6;n++)o.pos.push(...h[n]),o.uv.push(...i[n]),o.fill.push(m),o.base.push(_),o.top.push(A),o.rank.push(...s)}function Lt(o,a,e,y,E,d,w,v,u,m,_=Jt,A=Oe,s=!1){const h=e-d,i=e+d,n=(t,l,g)=>{const p=t/_*Math.PI*2;return[a+Math.cos(p)*l,g,y+Math.sin(p)*l]};for(let t=0;t<_;t++)for(let l=0;l<A;l++){const g=h+(i-h)*(l/A),p=h+(i-h)*((l+1)/A);de(o,n(t,E,g),n(t+1,E,g),n(t+1,E,p),n(t,E,p),t,l,t+1,l+1,w,v,u,m)}if(s)for(const t of[h,i])for(let l=0;l<_;l++)for(let g=0;g<Bt;g++){const p=St+(1-St)*(g/Bt),M=St+(1-St)*((g+1)/Bt);de(o,n(l,E*p,t),n(l+1,E*p,t),n(l+1,E*M,t),n(l,E*M,t),l,g,l+1,g+1,w,v,u,m)}}function me(o,a,e){const y={pos:[],uv:[],fill:[],base:[],top:[],rank:[]},d=o.close>=o.open?Vn:Kn;if(o.hi-o.lo<Ot){const i=(o.hi+o.lo)/2;o={...o,lo:i-Ot/2,hi:i+Ot/2}}const v=e*.13,u=Math.min(o.open,o.close),m=Math.max(o.open,o.close),_=Math.max((m-u)/2,e*.55),A=(u+m)/2,s=Math.min(o.lo,A-_),h=Math.max(o.hi,A+_);o.hi>m&&Lt(y,a,(o.hi+m)/2,0,v,(o.hi-m)/2,d,s,h,[1,0],he,1),u>o.lo&&Lt(y,a,(u+o.lo)/2,0,v,(u-o.lo)/2,d,s,h,[1,0],he,1),Lt(y,a,A,0,e,_,d,s,h,[0,0],Jt,Oe,!0);for(const i of[-1,1])Lt(y,a,A+i*(_-ve*e*.5),0,e*$n,ve*e*.5,d,s,h,[0,1],Jt,1);return y}function ho(){const o=fn(Bn,Nn,{span:On,even:Cn}),a=Gt/ot,e=a*.4,y=i=>-Gt/2+a*(i+.5),d=me(o[0],y(0),e).pos.length/3,w=d*Z,v={pos:new Float32Array(w*3),uv:new Float32Array(w*2),fill:new Float32Array(w),base:new Float32Array(w),top:new Float32Array(w),slot:new Float32Array(w),rank:new Float32Array(w*2)},u=(i,n)=>{if(n.pos.length/3!==d)throw new Error("свеча иной топологии");v.pos.set(n.pos,i*d*3),v.uv.set(n.uv,i*d*2),v.fill.set(n.fill,i*d),v.base.set(n.base,i*d),v.top.set(n.top,i*d),v.rank.set(n.rank,i*d*2),v.slot.fill(i,i*d,(i+1)*d)},m=new Array(Z).fill(-1),_=new Float32Array(Z*2),A=i=>{const n=i%Z;if(m[n]===i)return!1;const t=o[Math.min(i,o.length-1)];return u(n,me(t,y(i),e)),_[n*2]=y(i),_[n*2+1]=(t.hi+t.lo)/2,m[n]=i,!0};for(let i=0;i<=ot;i++)A(i);const s=new bt;s.setAttribute("position",new C(v.pos,3)),s.setAttribute("aUv",new C(v.uv,2)),s.setAttribute("aFill",new C(v.fill,1)),s.setAttribute("aBase",new C(v.base,1)),s.setAttribute("aTop",new C(v.top,1)),s.setAttribute("aSlot",new C(v.slot,1)),s.setAttribute("aRank",new C(v.rank,2)),console.log(`[cfig] лента свечей: ${w/3} треугольников, шаг ${d} вершин`);const h=["position","aUv","aFill","aBase","aTop","aSlot","aRank"];return{geo:s,step:a,maxGen:Math.max(0,o.length-ot-2),slotAt:i=>v.slot[i],axisOf:(i,n)=>n.set(_[i*2],_[i*2+1],0),sync(i){let n=!1;for(let t=0;t<=ot;t++)n=A(i+t)||n;if(n){for(const t of h)s.getAttribute(t).needsUpdate=!0;s.computeBoundingSphere()}return{head:(i+ot)%Z,tail:i%Z}}}}const vo=(o,a)=>{const e=getComputedStyle(document.body).getPropertyValue(o).trim()||a,y=/^#([0-9a-f]{6})$/i.exec(e),E=parseInt(y?y[1]:a.slice(1),16);return new Xt().setRGB((E>>16&255)/255,(E>>8&255)/255,(E&255)/255,Ne)},mo=-.85,po=0,go=.7,wo=.319,Ao=.07,bo=.42,yo=.34,pe=.42,xo=1.1,_o=1.5,Mo=.7,So=.9,ge=1.1,we=6,kt=.34,Eo=.12,Rt=.9,Lo=An||140,Ro="/data/letter-t.bin",Ae=f.get("lwire")!=="0",Fo=f.has("ledge")?Number(f.get("ledge")):15,be=f.has("lw")?Number(f.get("lw")):.5,Io=70,ye=f.has("laway")?Number(f.get("laway")):.6,Go=1.1,Wt={near:f.has("lnear")?Number(f.get("lnear")):1,far:f.has("lfar")?Number(f.get("lfar")):2.6},Po=f.get("lfit")==="band"?"band":"fixed",xe=["glb","hand"].includes(f.get("lgeo"))?f.get("lgeo"):"prism",ut={size:f.has("lsize")?Number(f.get("lsize")):.62,yaw:f.has("lyaw")?Number(f.get("lyaw")):-.22,tilt:f.has("ltilt")?Number(f.get("ltilt")):.05,roll:f.has("lroll")?Number(f.get("lroll")):0};ut.size;const To={grid:{cells:9,fill:1,rim:0,ribs:1},lines:{cells:1,fill:1.6,rim:2.6,ribs:1}},He=f.get("lmode")==="lines"?"lines":"grid",Pt=To[He],Do=f.has("lcell")?Number(f.get("lcell")):Pt.cells,Co=f.has("lfill")?Number(f.get("lfill")):Pt.fill,No=f.has("lrim")?Number(f.get("lrim")):Pt.rim,_e=f.get("lback")==="1",Bo=f.has("lglass")?Number(f.get("lglass")):.9,Oo=f.get("lface")==="0"?0:1,Me=f.get("lskin")!=="0",Se=f.has("lglow")?Number(f.get("lglow")):.3,Ht=f.has("lbackline")?Number(f.get("lbackline")):.25,ko=f.has("libs")?Number(f.get("libs")):Pt.ribs,Wo=f.get("lback2")==="1",Ho=7,$o=Be||1/Ho,Ee=12,Vo=.45,Le=Be===0?"still":f.get("tick")==="1"?"tick":"flow",Ko=.1;let $t=0,Re=0;const Fe=matchMedia("(prefers-reduced-motion: reduce)"),B={x:0,y:0,sx:0,sy:0,px:0,py:0,v:0,on:!1};let Q=-1,Vt=0;const ct=new Float32Array(Z),Ft=new Float32Array(Z*2);let Ie=!1;const Ge=new tn,Pe=new ht,mt=new te;function zo(){Ie||(Ie=!0,addEventListener("pointermove",o=>{o.pointerType&&o.pointerType!=="mouse"||(B.x=o.clientX/innerWidth*2-1,B.y=-(o.clientY/innerHeight*2-1),B.on||(B.sx=B.x,B.sy=B.y),B.on=!0)},{passive:!0}),addEventListener("pointerout",o=>{o.relatedTarget||(B.on=!1)},{passive:!0}),addEventListener("blur",()=>{B.on=!1}))}const Te=30,Kt=new te;function jo(o){const a=new DataView(o).getUint32(0,!0),e=new Float32Array(o,4,a*3),y=new Float32Array(o,4+a*12,a*2);let E=1/0,d=-1/0;for(let v=1;v<e.length;v+=3)e[v]<E&&(E=e[v]),e[v]>d&&(d=e[v]);const w=new bt;return w.setAttribute("position",new C(e,3)),w.setAttribute("aUv",new C(y,2)),w.setAttribute("aFill",new C(new Float32Array(a).fill(.16),1)),w.setAttribute("aBase",new C(new Float32Array(a).fill(E),1)),w.setAttribute("aTop",new C(new Float32Array(a).fill(d),1)),w.setAttribute("aSlot",new C(new Float32Array(a),1)),w.setAttribute("aRank",new C(new Float32Array(a*2),2)),w.computeBoundingSphere(),w}function Uo(o,a){const e=o.getAttribute("position"),y=e.count,E=Math.floor(y/3),d=new Float32Array(E*3),w=n=>`${Math.round(e.getX(n)*1e4)},${Math.round(e.getY(n)*1e4)},${Math.round(e.getZ(n)*1e4)}`,v=(n,t)=>{const l=w(n),g=w(t);return l<g?`${l}|${g}`:`${g}|${l}`};for(let n=0;n<E;n++){const t=n*3,l=e.getX(t),g=e.getY(t),p=e.getZ(t),M=e.getX(t+1)-l,T=e.getY(t+1)-g,c=e.getZ(t+1)-p,r=e.getX(t+2)-l,b=e.getY(t+2)-g,S=e.getZ(t+2)-p;let N=T*S-c*b,D=c*r-M*S,L=M*b-T*r;const R=Math.hypot(N,D,L)||1;d[n*3]=N/R,d[n*3+1]=D/R,d[n*3+2]=L/R}const u=[2,0,1],m=new Map;for(let n=0;n<E;n++)for(let t=0;t<3;t++){const l=v(n*3+t,n*3+(t+1)%3),g=m.get(l);g?g.push({t:n,e:t}):m.set(l,[{t:n,e:t}])}const _=Math.cos(a*Math.PI/180),A=new Float32Array(y*3);for(let n=0;n<E;n++)for(let t=0;t<3;t++){const l=m.get(v(n*3+t,n*3+(t+1)%3));let g=l.length<2,p=1;for(const M of l){if(M.t===n)continue;const T=d[n*3]*d[M.t*3]+d[n*3+1]*d[M.t*3+1]+d[n*3+2]*d[M.t*3+2];if(T<_){g=!0;const c=Math.acos(Math.max(-1,Math.min(1,T)))*180/Math.PI;p=Math.min(p,be+(1-be)*Math.min(1,Math.max(0,(c-a)/(Io-a))))}}if(g)for(let M=0;M<3;M++)A[(n*3+M)*3+u[t]]=p}const s=new Float32Array(y*3),h=new Float32Array(y*3),i=new Float32Array(y*3);for(let n=0;n<E;n++){const t=n*3;for(let l=0;l<3;l++)for(let g=0;g<3;g++)s[(t+l)*3+g]=e.getComponent(t,g),h[(t+l)*3+g]=e.getComponent(t+1,g),i[(t+l)*3+g]=e.getComponent(t+2,g)}return o.setAttribute("aV0",new C(s,3)),o.setAttribute("aV1",new C(h,3)),o.setAttribute("aV2",new C(i,3)),o.setAttribute("aHard",new C(A,3)),o}const pt=new te,De=.55,Xo=f.has("poolaway")?Number(f.get("poolaway")):.6,qo=(()=>{const a=getComputedStyle(document.body).getPropertyValue("--accent-section").trim().match(/^#?([0-9a-f]{6})$/i);return a?[0,2,4].map(e=>parseInt(a[1].slice(e,e+2),16)/255):[0,.906,.6]})();function Yo(o){const a=new DataView(o).getUint32(0,!0),e=new Float32Array(o,4,a*3);let y=-1/0;for(let c=2;c<e.length;c+=3)e[c]>y&&(y=e[c]);const E=[];for(let c=0;c<a/3;c++){const r=c*9,b=e[r+3]-e[r],S=e[r+4]-e[r+1],N=e[r+5]-e[r+2],D=e[r+6]-e[r],L=e[r+7]-e[r+1],R=e[r+8]-e[r+2],O=S*R-N*L,x=N*D-b*R,I=b*L-S*D,P=Math.hypot(O,x,I)||1;I/P>.98&&E.push([[e[r],e[r+1]],[e[r+3],e[r+4]],[e[r+6],e[r+7]]])}const d=c=>`${Math.round(c[0]*1e4)},${Math.round(c[1]*1e4)}`,w=new Map;for(const c of E)for(let r=0;r<3;r++){const b=c[r],S=c[(r+1)%3],N=d(b)<d(S)?`${d(b)}|${d(S)}`:`${d(S)}|${d(b)}`,D=w.get(N);D?D.push([b,S]):w.set(N,[[b,S]])}const v=[];for(const c of w.values())c.length===1&&v.push(c[0]);const u=[];{const c=new Map;for(const[b,S]of v)c.set(d(b),[S,b]);let r=v[0][0];for(let b=0;b<v.length;b++){u.push(r);const S=c.get(d(r));if(!S)break;r=S[0]}}const m=Math.cos(55*Math.PI/180);{const c=S=>{const N=u[(S+u.length-1)%u.length],D=u[S],L=u[(S+1)%u.length],R=[D[0]-N[0],D[1]-N[1]],O=[L[0]-D[0],L[1]-D[1]],x=Math.hypot(R[0],R[1])||1,I=Math.hypot(O[0],O[1])||1;return(R[0]*O[0]+R[1]*O[1])/(x*I)},r=u.map((S,N)=>c(N)>m),b=[];for(let S=0;S<u.length;S++){const N=u[(S+u.length-1)%u.length],D=u[S],L=u[(S+1)%u.length],R=u[(S+2)%u.length];if(b.push(D),!r[S]||!r[(S+1)%u.length])continue;const O=Math.sqrt(Math.hypot(D[0]-N[0],D[1]-N[1]))||1e-4,x=Math.sqrt(Math.hypot(L[0]-D[0],L[1]-D[1]))||1e-4,I=Math.sqrt(Math.hypot(R[0]-L[0],R[1]-L[1]))||1e-4,P=0,F=P+O,W=F+x,$=W+I,V=(K,U,Y)=>[K[0]+(U[0]-K[0])*Y,K[1]+(U[1]-K[1])*Y],z=6;for(let K=1;K<z;K++){const U=F+(W-F)*K/z,Y=V(N,D,(U-P)/(F-P)),yt=V(D,L,(U-F)/(W-F)),$e=V(L,R,(U-W)/($-W)),Ve=V(Y,yt,(U-P)/(W-P)),Ke=V(yt,$e,(U-F)/($-F));b.push(V(Ve,Ke,(U-F)/(W-F)))}}u.length=0,u.push(...b)}const _=(c,r,b)=>(r[0]-c[0])*(b[1]-c[1])-(r[1]-c[1])*(b[0]-c[0]),A=(c,r,b,S)=>_(c,r,S)>=0&&_(r,b,S)>=0&&_(b,c,S)>=0;{let c=0;for(let r=0;r<u.length;r++){const b=u[r],S=u[(r+1)%u.length];c+=(S[0]-b[0])*(S[1]+b[1])}c>0&&u.reverse()}{const r=[];for(const b of u){const S=r[r.length-1];(!S||Math.hypot(b[0]-S[0],b[1]-S[1])>2e-4)&&r.push(b)}for(;r.length>3&&Math.hypot(r[0][0]-r[r.length-1][0],r[0][1]-r[r.length-1][1])<=2e-4;)r.pop();u.length=0,u.push(...r)}const s=[];{const c=u.map((L,R)=>R),r=L=>u[L];let b=c.length*c.length;for(;c.length>2&&b-- >0;){let L=!1;for(let R=0;R<c.length;R++){const O=c[(R+c.length-1)%c.length],x=c[R],I=c[(R+1)%c.length];if(_(r(O),r(x),r(I))<=0)continue;let P=!0;for(const F of c)if(!(F===O||F===x||F===I)&&A(r(O),r(x),r(I),r(F))){P=!1;break}if(P){s.push([O,x,I]),c.splice(R,1),L=!0;break}}if(!L)break}const S=(L,R)=>L<R?`${L}|${R}`:`${R}|${L}`,N=(L,R,O,x)=>{const I=L[0]-x[0],P=L[1]-x[1],F=R[0]-x[0],W=R[1]-x[1],$=O[0]-x[0],V=O[1]-x[1];return(I*I+P*P)*(F*V-W*$)-(F*F+W*W)*(I*V-P*$)+($*$+V*V)*(I*W-P*F)>1e-12},D=new Set;for(let L=0;L<u.length;L++)D.add(S(L,(L+1)%u.length));for(let L=0;L<8;L++){const R=new Map;for(let x=0;x<s.length;x++){const[I,P,F]=s[x];for(const[W,$]of[[I,P],[P,F],[F,I]]){const V=S(W,$),z=R.get(V);z?z.push(x):R.set(V,[x])}}let O=0;for(const[x,I]of R){if(I.length!==2||D.has(x))continue;const[P,F]=I,[W,$]=x.split("|").map(Number),V=U=>s[U].find(Y=>Y!==W&&Y!==$),z=V(P),K=V(F);z===void 0||K===void 0||N(r(W),r(z),r($),r(K))&&(_(r(z),r(W),r(K))<=0||_(r(K),r($),r(z))<=0||(s[P]=[z,W,K],s[F]=[K,$,z],O++))}if(!O)break}for(let L=0;L<s.length;L++)s[L]=s[L].map(R=>u[R])}const h={pos:[],uv:[],cap:[]};let i=1;const n=(c,r)=>{h.pos.push(c[0],c[1],r),h.uv.push(c[0],c[1]),h.cap.push(i)},t=y,l=s.length>E.length/2?s:E;for(const[c,r,b]of l)n(c,t),n(r,t),n(b,t),n(c,-t),n(b,-t),n(r,-t);i=0;for(let c=0;c<u.length;c++){const r=u[c],b=u[(c+1)%u.length];n(r,t),n(b,-t),n(b,t),n(r,t),n(r,-t),n(b,-t)}const g=h.pos.length/3,p=new bt;p.setAttribute("position",new C(new Float32Array(h.pos),3)),p.setAttribute("aUv",new C(new Float32Array(h.uv),2)),p.setAttribute("aCap",new C(new Float32Array(h.cap),1)),p.setAttribute("aFill",new C(new Float32Array(g).fill(.16),1));let M=1/0,T=-1/0;for(let c=1;c<h.pos.length;c+=3)h.pos[c]<M&&(M=h.pos[c]),h.pos[c]>T&&(T=h.pos[c]);return p.setAttribute("aBase",new C(new Float32Array(g).fill(M),1)),p.setAttribute("aTop",new C(new Float32Array(g).fill(T),1)),p.setAttribute("aSlot",new C(new Float32Array(g),1)),p.setAttribute("aRank",new C(new Float32Array(g*2),2)),p.computeBoundingSphere(),p.userData.depth=t,p.userData.loop=u,p}function Zo(o,a,e,y){const E=o.length,d=[],w=[],v=[],u=[],m=[];for(let i=0;i<E;i++){const n=o[i],t=o[(i+1)%E],l=[n[0],n[1],y],g=[t[0],t[1],y],p=[[0,-1],[0,1],[1,1],[0,-1],[1,1],[1,-1]];for(const[M,T]of p)d.push(...M?g:l),w.push(...l),v.push(...g),u.push(T),m.push(M)}const _=d.length/3,A=new bt,s=i=>new C(new Float32Array(_).fill(i),1);A.setAttribute("position",new C(new Float32Array(d),3)),A.setAttribute("aV0",new C(new Float32Array(w),3)),A.setAttribute("aV1",new C(new Float32Array(v),3)),A.setAttribute("aV2",new C(new Float32Array(w),3)),A.setAttribute("aSide",s(0)),A.getAttribute("aSide").array.set(u),A.setAttribute("aEnd",s(0)),A.getAttribute("aEnd").array.set(m);const h=new Float32Array(_*3);for(let i=0;i<_;i++)h[i*3+2]=1;return A.setAttribute("aHard",new C(h,3)),A.setAttribute("aCap",s(1)),A.setAttribute("aUv",new C(new Float32Array(_*2),2)),A.setAttribute("aFill",s(0)),A.setAttribute("aBase",s(a)),A.setAttribute("aTop",s(e)),A.setAttribute("aSlot",s(0)),A.setAttribute("aRank",new C(new Float32Array(_*2),2)),A.computeBoundingSphere(),A}function Jo(o){const a=o.userData.depth;if(!a)return o;const e=o.getAttribute("position"),y=o.getAttribute("aHard"),E=w=>e.getZ(w)<-a+1e-4,d=[2,0,1];for(let w=0;w<e.count/3;w++){const v=w*3;for(let u=0;u<3;u++)if(E(v+u)&&E(v+(u+1)%3))for(let m=0;m<3;m++)y.setComponent(v+m,d[u],-Math.abs(y.getComponent(v+m,d[u])))}return y.needsUpdate=!0,o}let Ce=!1,H=null,tt=null,X=null,nt=null,zt=0,G=null,It=null,jt=null,Ut=0;function Qo(){if(!wn)return;const o=window[gn]?.cloud;if(!o?.ready){requestAnimationFrame(Qo);return}if(!H){const a=zn(o.renderer),e=new ze({vertexShader:jn,fragmentShader:fo,transparent:!0,depthWrite:!0,side:it,extensions:{derivatives:!0},uniforms:{uFill:{value:new Xt(.03,.11,.14)},uLine:{value:vo("--accent-section","#00E799")},uAlpha:{value:Rt},uWire:{value:a},uInkAvg:{value:ke},uDepth:{value:new ht(0,1)},uHead:{value:ot},uTail:{value:0},uGrow:{value:1},uGone:{value:0},uTime:{value:0},uLit:{value:ct},uLitAt:{value:Ft},uHoverSpread:{value:0},uCell:{value:1},uFillMul:{value:1},uRim:{value:0},uEdges:{value:0},uGlass:{value:0},uEdgeFace:{value:0},uGlow:{value:0},uGlowPath:{value:En},uMul:{value:1},uFar:{value:0},uPx:{value:1},uLinePx:{value:wt||Qt},uRes:{value:new ht(1,1)},uAspect:{value:1}}});tt=ho(),H=new rt(tt.geo,e),H.frustumCulled=!1}if(!nt){nt=new ee,X=new je(Te,1,.1,100),nt.add(H);const a=new Ue({vertexShader:`
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
          for (int i = 0; i < ${J}; i++) {
            for (int j = 0; j < ${J}; j++) {
              vec2 o = (vec2(float(i), float(j)) + 0.5) / ${k(J)} - 0.5;
              sum += texture2D(uTex, vUv + o * uTexel * ${k(J)});
            }
          }
          gl_FragColor = sum / ${k(J*J)};
        }
      `,uniforms:{uTex:{value:null},uTexel:{value:new ht}},transparent:!0,depthTest:!1,depthWrite:!1,blending:xt,blendSrc:lt,blendDst:Xe}),e=new bt;e.setAttribute("position",new C(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const y=new rt(e,a);y.frustumCulled=!1;const E=new ee;E.add(y);const d=new qe,w=new ht;let v=null;const u=()=>{const s=H.material.clone();return s.uniforms.uHead.value=0,s.uniforms.uTail.value=-1,s.uniforms.uGone.value=0,s.uniforms.uAlpha.value=0,s.uniforms.uGrow.value=0,s.uniforms.uDepth.value.set(1e3,1e4),s.uniforms.uFillMul.value=Co,s.uniforms.uRim.value=No,Ae&&(s.defines={...s.defines||{},EDGES:1},s.uniforms.uEdges.value={1:2,2:3,3:4,4:5}[f.get("ldbg")]||1,s.needsUpdate=!0),s.side=_e?it:oe,s.uniforms.uGlass.value=Bo,s.uniforms.uEdgeFace.value=Oo,f.get("ltest")==="0"&&(s.depthTest=!1),f.get("lwrite")==="0"&&(s.depthWrite=!1),s},m=s=>{const h=u();G=new rt(Ae?Jo(Uo(s,Fo)):s,h);const i=t=>{const l=h.clone();return l.uniforms=Object.assign({},h.uniforms,t.uniforms),l.side=it,l.depthWrite=!1,delete t.uniforms,Object.assign(l,t),l};if(Se>0){const t=i({uniforms:{uGlow:{value:Se},uMul:{value:1}},side:it,depthTest:!1,blending:xt,blendSrc:lt,blendDst:lt}),l=new rt(G.geometry,t);l.renderOrder=-2,l.frustumCulled=!1,G.add(l)}const n=G.geometry.userData.loop;if(n){h.uniforms.uEdges.value=0;const t=G.geometry.boundingSphere,l=t.center.y-t.radius,g=t.center.y+t.radius,p=G.geometry.userData.depth,M=(r,b,S)=>{const N=i(Object.assign({uniforms:{uMul:{value:b}}},S));N.defines={...N.defines||{},EDGES:1,RIBBON:1},N.uniforms.uEdges.value={1:2,2:3,3:4,4:5}[f.get("ldbg")]||1,N.needsUpdate=!0;const D=new rt(Zo(n,l,g,r),N);return D.frustumCulled=!1,D},T=M(-p,Ht,{depthTest:!1,blending:xt,blendSrc:lt,blendDst:lt});T.renderOrder=-1,G.add(T);const c=M(p,1,{depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});c.renderOrder=1,G.add(c)}if(!n&&Ht>0&&Me){const t=i({uniforms:{uMul:{value:Ht},uFar:{value:1}},depthTest:!1,blending:xt,blendSrc:lt,blendDst:lt}),l=new rt(G.geometry,t);l.renderOrder=-1,l.frustumCulled=!1,G.add(l)}if(Me){const t=h.clone();t.uniforms=h.uniforms,t.colorWrite=!1,t.depthWrite=!0,t.side=it;const l=new rt(G.geometry,t);l.renderOrder=-1,l.frustumCulled=!1,G.add(l),h.depthWrite=!1,h.side=it}else h.side=_e?it:oe;G.frustumCulled=!1,G.visible=!1,nt.add(G),window.__cfigChart&&(window.__cfigChart.letter=G)};xe==="hand"?m(pn(en,{cells:Do,ribs:ko,backRibs:Wo,mode:He})):Ce||(Ce=!0,fetch(Ro).then(s=>s.ok?s.arrayBuffer():Promise.reject(new Error(s.status))).then(s=>m(xe==="glb"?jo(s):Yo(s))).catch(s=>console.warn("[cfig] знак Tronexo не загрузился:",s.message))),window.__cfigChart={mesh:H,stage:nt,lens:X,band:tt,letter:G,hover:{slot:-1,lit:ct},pose:ut,depth:Wt};const _=new ht,A=(s,h)=>{h&&h.getDrawingBufferSize(_),nt.traverse(i=>{const n=i.material&&i.material.uniforms;n&&(n.uPx&&(n.uPx.value=s),n.uRes&&n.uRes.value.set(_.x*s,_.y*s))})};o.scene.onAfterRender=s=>{const h=s.autoClear;if(s.autoClear=!1,J>1&&!o.narrow&&(Fn||G&&G.visible)){s.getDrawingBufferSize(w);const i=Math.max(1,Math.round(w.x*J)),n=Math.max(1,Math.round(w.y*J));v?(v.width!==i||v.height!==n)&&v.setSize(i,n):v=new Ye(i,n,{depthBuffer:!0});const t=s.getRenderTarget(),l=s.getClearColor(new Xt),g=s.getClearAlpha();s.setRenderTarget(v),s.setClearColor(0,0),s.clear(!0,!0,!1),A(J,s),s.render(nt,X),A(1,s),s.setRenderTarget(t),s.setClearColor(l,g),a.uniforms.uTex.value=v.texture,a.uniforms.uTexel.value.set(1/i,1/n),s.render(E,d)}else v&&(v.dispose(),v=null),s.render(nt,X);s.autoClear=h}}zo(),It||(It=a=>{const e=document.body.dataset.route==="tronexo";if(H.visible=e,o.points&&(o.points.visible=!e),o.lines&&(o.lines.visible=!e),!e){Tt(0,0,0),Dt(0),G&&(G.visible=!1);return}const y=Math.min(Ko,Math.max(0,(a-Re)/1e3));Re=a,Fe.matches||($t+=y);let E=0;if(Le==="tick"){const x=$t/Ee,I=Math.floor(x),P=Math.min(1,(x-I)*Ee/Vo);E=I+P*P*(3-2*P)}else Le==="flow"&&(E=$t*$o);const d=Math.min(E+ae()/Lo,tt.maxGen),w=Math.floor(d),v=d-w,u=tt.sync(w),m=H.material.uniforms;m.uHead.value=u.head,m.uTail.value=u.tail,m.uGrow.value=bn?v*v*(3-2*v):1,m.uGone.value=Math.min(1,v*1.18),zt=d*tt.step;const _=o.camera,A=Math.tan(_.fov*Math.PI/360)*_.position.z,s=A*_.aspect,h=!!o.narrow;X.aspect=_.aspect,X.position.set(0,0,A/Math.tan(Te*Math.PI/360)),X.updateProjectionMatrix(),X.updateMatrixWorld();const i=A*(h?bo:go);H.scale.setScalar(i),H.rotation.set(po,mo,0);const n=Math.cos(H.rotation.y),t=Math.sin(H.rotation.y);H.position.set(s*(h?0:wo)-zt*n*i,A*(h?yo:Ao),zt*t*i);const l=Math.abs(t)*Gt*i;Kt.set(-Gt/2+tt.step*(d+ot/2),0,0),H.localToWorld(Kt);const g=X.position.distanceTo(Kt);H.material.uniforms.uDepth.value.set(g-l*.45,g+l*Dn);let p=-1,M=1e9;if(B.on&&!Fe.matches){H.updateMatrixWorld(),Pe.set(B.x,B.y),Ge.setFromCamera(Pe,X);const x=Ge.intersectObject(H,!1)[0];if(x&&x.face)p=tt.slotAt(x.face.a),M=0;else{for(let I=0;I<Z;I++){tt.axisOf(I,mt),H.localToWorld(mt),mt.project(X);const P=(mt.x-B.x)*_.aspect,F=mt.y-B.y,W=Math.sqrt(P*P+F*F);W<M&&(M=W,p=I)}M>kt&&(p=-1)}}Q=p,window.__cfigChart.hover.slot=Q;const T=M<=0?1:Math.max(0,Math.min(1,(kt-M)/(kt-Eo))),c=Q>=0?T*T*(3-2*T):0,r=(B.x-B.px)/Math.max(y,.001),b=(B.y-B.py)/Math.max(y,.001);B.px=B.x,B.py=B.y;const S=Math.sqrt(r*r+b*b);B.v+=(S-B.v)*Math.min(1,y*12);const N=Math.min(1,B.v/_o)*Mo;for(let x=0;x<Z;x++){const I=x===Q?c:0,P=I>ct[x]?xo:So;let F=ct[x]+(I-ct[x])*Math.min(1,y*P);x===Q&&(F=Math.max(F,c*N)),ct[x]=F}const D=Q>=0?1:0;Vt+=(D-Vt)*Math.min(1,y*(D?ge:ge*3)),B.sx+=(B.x-B.sx)*Math.min(1,y*we),B.sy+=(B.y-B.sy)*Math.min(1,y*we),Q>=0&&(Ft[Q*2]=B.sx,Ft[Q*2+1]=B.sy),m.uLit.value=ct,m.uLitAt.value=Ft,m.uHoverSpread.value=Vt,m.uAspect.value=_.aspect;const L=nn(),R=rn(L),O=ln(L);if(H.material.uniforms.uAlpha.value=Rt*(h?pe:1)*R,H.visible=e&&R>.005,G&&(G.visible=e&&O>.004,G.visible||(Tt(0,0,0),Dt(0)),G.visible)){const x=G.material.uniforms,I=on(an()),P=sn();x.uAlpha.value=Rt*(h?pe:1)*O*P,x.uGrow.value=O*O*(3-2*O),x.uTime.value=H.material.uniforms.uTime.value;const F=document.querySelector(".footer"),W=F?F.getBoundingClientRect().top:window.innerHeight;if(Po==="band"){const Y=Math.max(120,Math.min(window.innerHeight,W))/window.innerHeight;G.scale.setScalar(A*Math.min(ut.size,Y*2*.62)),G.position.set(0,A*(1-Y),0)}else{G.scale.setScalar(A*ut.size),G.position.set(0,0,0);const U=X.position.distanceTo(G.position);G.position.set(0,0,-I*ye*U);const Y=1/(1+I*ye),yt=wt||Qt;x.uLinePx.value=Math.max(Go,yt*Y)}G.rotation.set(ut.tilt,ut.yaw,ut.roll);const $=G.geometry.boundingSphere.radius*G.scale.x,V=X.position.distanceTo(G.position);x.uDepth.value.set(V-$*Wt.near,V+$*Wt.far),pt.set(0,G.geometry.boundingSphere.center.y-G.geometry.boundingSphere.radius,0),G.localToWorld(pt),pt.project(X);const z=Math.max(0,Math.min(1,x.uAlpha.value/Rt));Tt((pt.x*.5+.5)*window.innerWidth,(.5-pt.y*.5)*window.innerHeight,x.uGrow.value*z*(1-Xo*I));const K=Math.max(0,Math.min(1,(I-De)/(1-De)));Dt(K*K*(3-2*K)*z,qo)}H.material.uniforms.uTime.value=ae()/no},jt=a=>{It(a),Ut=requestAnimationFrame(jt)}),It(performance.now()),Ut||(Ut=requestAnimationFrame(jt))}export{Qo as init};
