import{a as J}from"./router.UeToN5xW.js";import{B as at,e as C,aT as it,W as $t,S as qt,P as _t,G as It,a2 as N,V as K,b as rt,A as jt,d as Ot,K as Nt,f as Ht,N as Wt}from"./three.module.BH5gECCB.js";const Gt=location.search.includes("probe");if(Gt){const a=performance.now(),e=[],t=[],s=[];let o=a;const n=()=>window.__cfigScene?.cloud,i=900,r=[];let c=!1;const u=()=>{const l=n();if(c||!l||!l.render)return;c=!0;const g=l.render.bind(l);let f=performance.now();l.render=m=>(r.push([Math.round(m-a),Math.round(m-f),l.uniforms?.uT?.value??null]),r.length>i&&r.shift(),f=m,g(m))},d=l=>{u(),e.push([Math.round(l-a),Math.round(l-o),n()?.uniforms?.uT?.value??null]),e.length>i&&e.shift(),o=l,requestAnimationFrame(d)};requestAnimationFrame(d);try{new PerformanceObserver(l=>{for(const g of l.getEntries())t.push([Math.round(g.startTime-a),Math.round(g.duration)]),t.length>100&&t.shift()}).observe({entryTypes:["longtask"]})}catch{}for(const l of["astro:before-preparation","astro:before-swap","astro:after-swap","astro:page-load"])document.addEventListener(l,()=>s.push([l.replace("astro:",""),Math.round(performance.now()-a)]));const y=()=>{const l=s.find(h=>h[0]==="after-swap")?.[1];if(l===void 0)return;const g=r.filter(([h])=>h>l-900&&h<l+900);if(g.length){const h=g.map(w=>w[1]).sort((w,x)=>w-x),p=h[Math.floor(h.length/2)];console.log("%c[cfig] ОТРИСОВКА СЦЕНЫ","font-weight:bold;color:#C9A62B"),console.log("медиана",p,"мс,  самая долгая пауза",Math.max(...h),"мс");const S=g.filter(w=>w[1]>p*1.8);console.log("паузы длиннее полутора кадров:",S.length?S.map(([w,x])=>`+${w-l}мс на ${x}мс`).join("  "):"нет"),console.log("прогресс морфа по кадрам:",g.filter(w=>w[2]!==null&&w[2]>0&&w[2]<1).map(w=>w[2].toFixed(3)).join(",")),console.log("паузы отрисовки:",g.map(w=>w[1]).join(","))}else console.warn("[cfig] отрисовка сцены не записалась");const f=e.filter(([h])=>h>l-900&&h<l+900);if(!f.length){console.warn("[cfig] кадров не записалось — вкладка была неактивна?");return}const m=f.map(h=>h[1]).sort((h,p)=>h-p),A=m[Math.floor(m.length/2)]??0;console.log("%c[cfig] замер перехода","font-weight:bold"),console.log("события:",s.map(([h,p])=>`${h} +${p-l}`).join("  ")),console.log("медиана кадра:",A,"мс,  самый долгий:",Math.max(...m),"мс");const v=t.filter(([h])=>h>l-900&&h<l+900);console.log("длинные задачи у подмены:",v.length?v.map(([h,p])=>`+${h-l}мс на ${p}мс`).join("  "):"нет"),console.table(f.filter(h=>h[1]>A*1.8).map(([h,p,S])=>({"мс от подмены":h-l,"кадр, мс":p,"прогресс морфа":S?.toFixed(3)??"—"}))),console.log("полный список кадров:",f.map(h=>h[1]).join(","))};document.addEventListener("astro:after-swap",()=>setTimeout(y,2200),{once:!0}),console.log("%c[cfig] щуп включён — нажмите на направление в шапке","color:#C9A62B")}const H="main#content",Vt=["header.header","#site-menu","footer.footer"],Ut=["reveal-ready","cloud-ready","menu-open","no-webgl","poster-on","intro-lock","vhero-light","vhero-nav","vhero-away"];function ct(a){const e=a.localName;if(e==="title")return"title";if(e==="meta"){const t=a.getAttribute("name")??a.getAttribute("property")??a.getAttribute("charset");return t?`meta:${t}`:`meta:${a.outerHTML}`}if(e==="link"){const t=a.getAttribute("rel");return t==="alternate"?`link:alternate:${a.getAttribute("hreflang")}`:`link:${t}:${a.getAttribute("href")}`}return`${e}:${a.outerHTML}`}function Yt(a){const e=new Map;for(const s of[...document.head.children])e.set(ct(s),s);const t=new Set;for(const s of[...a.children]){const o=ct(s);t.add(o);const n=e.get(o);if(!n){document.head.append(s.cloneNode(!0));continue}if(n.localName==="title"||n.localName==="script"){n.textContent!==s.textContent&&(n.textContent=s.textContent);continue}for(const{name:i,value:r}of s.attributes)n.getAttribute(i)!==r&&n.setAttribute(i,r)}for(const[s,o]of e)t.has(s)||o.matches("link[rel=stylesheet], style")||o.remove()}function Jt(a,e){const t=[...a.querySelectorAll("a[href]")],s=new Map;for(const o of e.querySelectorAll("a[href]"))s.set(o.getAttribute("href"),o);if(t.length!==s.size)return!1;for(const o of t){const n=s.get(o.getAttribute("href"));if(!n)return!1;const i=n.getAttribute("aria-current");i===null?o.removeAttribute("aria-current"):o.getAttribute("aria-current")!==i&&o.setAttribute("aria-current",i),o.classList.toggle("is-active",n.classList.contains("is-active"))}return!0}const Kt=["video-on","video-off","is-loading"];function Xt(a){const e=document.body,t=Kt.filter(s=>e.classList.contains(s));Zt(e,a),t.length&&e.classList.add(...t)}function Zt(a,e){for(const{name:t}of[...a.attributes])e.hasAttribute(t)||a.removeAttribute(t);for(const{name:t,value:s}of e.attributes)a.getAttribute(t)!==s&&a.setAttribute(t,s)}document.addEventListener("astro:before-swap",a=>{const e=a.newDocument;!e.querySelector(H)||!document.querySelector(H)||(a.swap=()=>{J.deselectScripts(e);const t=document.documentElement,s=Ut.filter(n=>t.classList.contains(n));J.swapRootAttributes(e),s.length&&t.classList.add(...s),Yt(e.head);const o=J.saveFocus();Xt(e.body);for(const n of Vt){const i=document.querySelector(n),r=e.querySelector(n);!i||!r||Jt(i,r)||i.replaceWith(r)}document.querySelector(H).replaceWith(e.querySelector(H)),o()})});const lt="/data/cloud.json",Qt="/data",Pt=.744,Et=.7,ut=[{y:.04,scale:Pt,rotZ:-10*Math.PI/180,dx:.78,edge:!1,narrowPos:[0,.55,0],narrowScale:.45,narrowFade:1},{y:-.18,scale:.86,rotZ:0,dx:0,edge:!0,narrowPos:[0,.45,0],narrowScale:.44,narrowFade:.42},{y:.06,scale:.86,rotZ:0,dx:0,edge:!0,narrowPos:[0,.62,0],narrowScale:.38,narrowFade:.42},{y:.02,scale:Et,rotZ:0,dx:0,edge:!0,narrowPos:[0,.45,0],narrowScale:.4,narrowFade:.42}],te=-9.2*Math.PI/180,ht=.45,dt={candle:{rot:.22,scale:.88,dx:-.62},pillars:{rot:.34},terraces:{rot:.3},lattice:{rot:.55}},ee=5,se=.025,oe=[0,0,.3,.72],ne=1200,ae=26,ie=220,re=.34,ce=.32,W=a=>a*a*(3-2*a),ft=.3,le=900,ue=768,he=1440*900*4,de=48e3,pt=1.7,fe=12e4,pe=`
attribute vec3 aPos0;
attribute vec3 aPos1;
attribute vec3 aPos2;
attribute vec3 aPos3;
attribute float aSeed;
attribute float aJit;            // второй независимый шум, см. build-points.js
attribute vec3 aBreath;          // x якорь по Y, y амплитуда, z фаза

// Состояния выбираются двумя one-hot векторами, а не положением на цепочке.
// Цепочка позволяла переходить только между соседями: путь «герб -> сфера»
// проезжал бы через столбцы и объём, и на глазах мелькнули бы две чужие фигуры.
uniform vec4 uSelA;              // откуда
uniform vec4 uSelB;              // куда
uniform float uT;                // общий прогресс перехода, 0..1
uniform vec4 uSizeMul;           // множитель размера точки на каждое состояние

uniform float uTime, uSpread, uBurst, uConv, uDrift, uSize, uDpr, uBreath, uRotB, uRotS;
// Разлёт от СКРОЛЛА, отдельно от uBurst. Тот привязан к переходу между
// состояниями (горб sin(PI*t) и обнуляется на концах), а этот ведёт страница:
// фигура рассыпается между секциями и собирается на входе в следующую.
uniform float uDust;
// Курсор в системе ГРУППЫ, не экрана: точки живут до преобразования группы,
// и мышь надо привести к их системе, иначе отклик уедет вместе с масштабом
// и смещением фигуры.
//
// Отдельного выключателя нет намеренно. Он был (uMouseOn), и с ним отклик
// не работал: условие из двух частей молча оставалось ложным, и найти это
// удалось только тем, что безусловный сдвиг разнёс фигуру в кольцо, а тот же
// сдвиг под условием не делал ничего. Пока мышь не двигали, курсор просто
// стоит далеко за фигурой, и спад по Гауссу сам гасит отклик в ноль.
uniform vec2 uMouse;
uniform vec2 uMouseV;             // снос курсора: гаснет сам, см. render()
uniform vec2 uDustAmp;            // размах россыпи по осям, см. frame()
// Покой — только для рассыпанной пыли: единица, когда прокрутка стоит, ноль
// при движении. На покое пыль дышит заметнее.
//
// Параллакса по прокрутке здесь БЫЛО и убрано по решению заказчика: точки
// расслаивались по ходу страницы, и это оказалось лишним. Пыль на прокрутку
// не отзывается вовсе — только на курсор и на покой.
uniform float uCalm;
// Доля видимых точек. Единица — все, 0.25 — четверть. Нужна туману: со всеми
// 120 000 точками в рассыпанном облаке ПРОСМАТРИВАЕТСЯ СИЛУЭТ КОНЯ, потому
// что плотность сохраняется и форма читается даже сквозь разлёт. Убрать её
// разлётом нельзя — он только раздувает облако. Лечится именно прореживанием.
uniform float uThin;
// Полоса подсветки, едущая по фигуре вместе со скроллом. Координата в модельном
// пространстве самой фигуры, поэтому луч следует за ней при любом кадрировании.
uniform float uBeam, uBeamW;
varying float vA;

const float PI = 3.14159265;

void main(){
  // Индивидуальный прогресс точки. На переходе uSpread разводит точки во
  // времени — они летят вразнобой. На покое uSpread строго 0, иначе облако
  // никогда не собралось бы в форму.
  float t = clamp(uT + (aSeed - 0.5) * uSpread, 0.0, 1.0);
  // Двойное сглаживание, а не одно. Середина морфа — это точка, где точки
  // ровно между двумя фигурами, и никакой формы там нет по определению:
  // половина коня и половина сферы читаются как облако шума. Пока смесь
  // висит в этой зоне, движение глазом не читается, и переход выглядит
  // как остановка — при том что кадры идут ровно и ничего не тормозит.
  // Второе сглаживание делает проход через середину вдвое круче: точки
  // дольше держатся у обеих форм и быстрее проскакивают бесформенную зону.
  float te = smoothstep(0.0, 1.0, smoothstep(0.0, 1.0, t));

  vec3 pa = aPos0 * uSelA.x + aPos1 * uSelA.y + aPos2 * uSelA.z + aPos3 * uSelA.w;
  vec3 pb = aPos0 * uSelB.x + aPos1 * uSelB.y + aPos2 * uSelB.z + aPos3 * uSelB.w;
  vec3 p = mix(pa, pb, te);

  // Веса состояний в текущий момент. Оба вектора one-hot, поэтому сумма всегда
  // единица, и всё, что зависит от состояния, считается скалярным произведением.
  vec4 w = mix(uSelA, uSelB, te);

  // Микро-колебание столбцов Tronexo — состояние 1. Вес гасит эффект вне своего
  // состояния: при w.y = 0 множитель равен единице и выражение тождественно.
  p.y = aBreath.x + (p.y - aBreath.x) * (1.0 + aBreath.y * sin(uTime * 0.00035 * uBreath + aBreath.z) * w.y);

  // Поворот только у объёмных состояний. Плоские герб и столбцы имеют вес 0
  // и остаются фронтальными.
  // Порядок важен: поворот принадлежит состоянию и применяется ДО сведения.
  // Если крутить после, три полосы сведения (они разнесены по X) уезжают
  // в глубину вместе со сценой и складываются в проекции в одно пятно.
  float rot = uRotB * w.z + uRotS * w.w;
  float cr = cos(rot), sr = sin(rot);
  p.xz = vec2(cr * p.x + sr * p.z, -sr * p.x + cr * p.z);

  // Рассыпание. Точки расходятся наружу и снова сходятся: горб sin(PI*t) равен
  // нулю на обоих концах, поэтому обе формы собираются точно. Направление —
  // смесь радиального от центра исходной формы со случайным, иначе облако
  // на середине схлопывается в правильный шар и теряет всякий характер.
  float ang = aSeed * 6.2831;
  vec3 rnd = vec3(cos(ang), aJit * 2.0 - 1.0, sin(ang));
  vec3 dir = normalize(mix(normalize(pa + vec3(1e-4)), rnd, 0.45));
  p += dir * uBurst * sin(PI * t) * (0.55 + aJit * 0.9);

  // Разлёт по скроллу. Направление то же, что у рассыпания на переходе, —
  // иначе облако читалось бы двумя разными эффектами. Дальность больше:
  // здесь фигура должна перестать читаться совсем, а не приоткрыться.
  //
  // Разброс дальности по точкам нарочно широкий (0.35..1.6): при одинаковой
  // фигура расходится ровной оболочкой, то есть остаётся узнаваемой,
  // а нужно облако.
  //
  // ВЕС w.x ЗАПРЕЩАЕТ ЭФФЕКТ ВНЕ ПЕРВОГО СОСТОЯНИЯ, и это не перестраховка.
  // Разлёт задуман для коня. Планы кадра общие на все страницы, и стоит
  // кому-то отметить секцию Tronexo или Real Estate тем же планом — столбцы
  // и объём тоже начали бы рассыпаться. По значениям в планах этого не видно,
  // поэтому запрет стоит здесь, в устройстве, а не в договорённости.
  // Тем же приёмом выше погашены колебание столбцов и поворот объёмных.
  float dust = uDust * w.x;

  // РАЗДЕЛЕНИЕ: рассыпание ведёт две разные вещи, и смешивать их нельзя.
  //
  // uDust — это «насколько мы в состоянии россыпи»: по нему идут отклик
  // на курсор, прореживание, разброс яркости и калибра. Всё это вида
  // не искажает.
  //
  // spread — насколько точки СДВИНУТЫ со своих мест. У него порог, и вот
  // почему. Поток связный: близкие точки уходят в одну сторону, и он не
  // размывает фигуру, а ГНЁТ ЕЁ ОЧЕРТАНИЕ. Замер при нулевом погружении:
  // расхождение огибающей 38 % уже при рассыпании 0.05, при шуме мерила 12 %
  // и почти неизменном габарите (592x654 против 585x650). То есть конь начинал
  // кривиться с первых же пикселей прокрутки — «форму свою меняет».
  //
  // С порогом фигура остаётся СТРОГО собой, пока камера к ней подходит, и
  // распадается только после того, как подход закончен.
  // За порогом пересчёт ЛИНЕЙНЫЙ, а не сглаженный.
  //
  // Сглаживание тут получалось двойным: сама величина рассыпания уже идёт
  // по сглаженной кривой, и smoothstep поверх неё сваливал всё движение
  // в середину. Замер прироста сдвига по 65 px прокрутки: 0.056, потом сразу
  // 0.371 и 0.395 — распад дёргался. При линейном пересчёте 0.143, 0.308,
  // 0.279, 0.200 — ровнее, а начало остаётся вкрадчивым за счёт кривой самого
  // рассыпания.
  //
  // Порог 0.30 не тронут: он держит фигуру жёсткой, пока она читается,
  // и это единственная защита от искажения очертания.
  float spread = clamp((dust - 0.30) / 0.70, 0.0, 1.0);
  // Расхождение НАРУЖУ намеренно небольшое. С большим фигура превращалась
  // в облако во весь экран и просто висела — а нужно, чтобы частицы пролетали
  // в промежутке между секциями. Пролёт даёт не расхождение, а связный перенос
  // ниже; расхождение только разрывает связь формы.
  // Расхождение В РАЗНЫЕ СТОРОНЫ и широкое: рассыпанная фигура должна лежать
  // фоном по всей площади, а не собранным облаком. Разброс по точкам большой,
  // поэтому плотность падает — это и не даёт получиться «золотому снегу»,
  // ровной крупе одинаковой яркости.
  // Разлёт умереннее прежнего: при 1.15 и низкой прозрачности облако
  // становилось почти невидимым, и ни плавание, ни отклик на курсор
  // на нём было не разглядеть.
  //
  // Разлёт СВЯЗНЫЙ, а не случайный по каждой точке.
  //
  // Со случайным по точке разбросом пыль читалась ровной крупой во весь кадр —
  // шумом матрицы, а не пылью: одинаковый калибр, одинаковая яркость,
  // равномерная россыпь без сгустков и прогалин. Прореживание этого не лечило,
  // оно лишь разрежало ту же крупу.
  //
  // Здесь смещение берётся от ИСХОДНОГО места точки через плавное поле:
  // соседние точки уходят в одну сторону, дальние в разные, и облако рвётся
  // на пряди с пустотами между ними. По две частоты на ось — чтобы пряди
  // не легли одинаковой рябью.
  //
  // Поле знакопеременно и в среднем по фигуре равно нулю, поэтому центр облака
  // остаётся на месте: рассыпаться оно должно посередине страницы. Снос
  // по точкам, который держал центр прежде, поэтому и убран — он был частью
  // той самой равномерности.
  // Частота поля выбрана по размаху самой фигуры: около ОДНОЙ волны на фигуру.
  //
  // Крайности проверены и обе не годятся. Низкая частота — меньше волны на
  // фигуру — это просто перенос: облако уезжает целиком и собирается сгустком,
  // силуэт при этом жив. Высокая частота — обратно та же крупа, только связная
  // на масштабе, которого глаз не различает. Рвёт фигуру именно волна её
  // собственного размера, и амплитуда должна быть ей под стать, иначе силуэт
  // остаётся узнаваемым: при 0.59 в облаке ещё читались голова и спина.
  //
  // Все составляющие — СИНУСЫ с перекрёстными доводами, и это не украшение.
  // Синус нечётен, и по фигуре, стоящей вокруг начала координат, его среднее
  // равно нулю: центр облака остаётся на месте. У косинуса среднее ненулевое,
  // и с ним поле сносило всю пыль в верхний правый угол — сгусток лез на
  // заголовок, а слева внизу оставалась пустота.
  vec3 q = pa * 1.7;
  vec3 flow = vec3(
    sin(q.y * 1.30 + q.z * 0.70) + 0.55 * sin(q.y * 3.10 - q.x * 1.70),
    sin(q.x * 1.10 + q.y * 0.90) + 0.55 * sin(q.x * 2.70 + q.z * 1.30),
    sin(q.x * 0.90 - q.y * 1.50)
  );
  // Случайная доля оставлена малой: она рвёт пряди на отдельные крупинки,
  // но не должна забивать рисунок потока — иначе вернётся та же крупа.
  // Размах ШИРЕ и случайная доля БОЛЬШЕ прежнего.
  //
  // Половина экрана в единицах фигуры — около 2.2, а прежний размах давал
  // примерно 1.7: россыпь просто не доставала до краёв. Заодно поднята
  // случайная доля: при прежнем отношении (0.65 против 2.0) поток забивал её,
  // и точки сбивались в одну кривую полосу — замер давал неровность плотности
  // 1.56 при покрытии половины кадра. Случайная доля эту полосу разбивает,
  // а связность на мелком масштабе остаётся: пряди никуда не делись.
  //
  // Размах ПО ФОРМЕ ОКНА, а не круглый.
  //
  // Круглый размах задавался в единицах фигуры и потому не знал ничего о кадре.
  // На настольном экране это сходилось случайно, а на телефоне разошлось: он
  // видит узкую высокую полосу мира, россыпь же раздувалась кругом — по бокам
  // уходила за кадр, а снизу до края не доставала. Замер: покрытие 56 % против
  // 82 %, низ экрана пустой.
  //
  // uDustAmp считается от полувидимых ширины и высоты, поэтому облако принимает
  // пропорции кадра сам собой, на любом устройстве. На настольном значения
  // выходят те же 3.3 по обеим осям, что и прежде, — одобренный вид не тронут.
  vec3 amp = vec3(uDustAmp.x, uDustAmp.y, (uDustAmp.x + uDustAmp.y) * 0.5);
  // Дальность разлёта берётся из НЕЗАВИСИМОЙ величины, а не из aJit.
  //
  // Это оказалось причиной плотного ядра и пустых краёв. По aJit идёт
  // прореживание: остаются точки с малым aJit. А дальность считалась из того же
  // aJit — значит выживали ровно те, что улетели МЕНЬШЕ ВСЕХ, и россыпь
  // собиралась к середине. Пока прореживание не работало (см. alive), этого
  // не было видно: рисовались все точки подряд.
  //
  // Хеш от исходного места точки не связан ни с прореживанием, ни с калибром,
  // поэтому среди выживших есть и близкие, и далёкие — поле выходит ровным.
  float far = fract(sin(dot(pa.xy, vec2(12.9898, 78.233))) * 43758.5453);
  p += (flow * 1.05 + dir * (0.35 + far * 1.15)) * spread * amp / 3.3 * 1.60;
  // РАСТЯЖЕНИЕ ПО ГЛУБИНЕ, и без него погружение внутрь бессмысленно.
  //
  // Замер: при заходе камеры на 2.6 в конце пути оставалось 752 золотых
  // пикселя против 48 000 на первом экране — облако пустело почти начисто.
  // Причина простая. Рассыпанная фигура была плоской оболочкой толщиной около
  // трёх единиц; камера, войдя в неё, оставляла половину точек за спиной,
  // а те, что впереди, все попадали в полосу гашения. Смотреть внутри было
  // не на что.
  //
  // Здесь россыпь вытягивается по глубине почти вчетверо и становится не
  // оболочкой, а длинным рукавом. Тогда внутри всегда есть точки впереди —
  // и именно они дают чувство полёта: подходят, расходятся к краям, гаснут
  // за плечом, а на их месте уже следующие.
  // Скаляр того же поля: 0 в прогалине, 1 в пряди. Ниже он ведёт и плотность,
  // и яркость, поэтому светлеют и редеют целые пряди, а не отдельные точки.
  // Две частоты: на одной поле давало одно господствующее пятно во весь кадр —
  // это читалось не пылью, а подтёком. Мелкая частота дробит его на пряди.
  float wisp = 0.5
    + 0.35 * sin(q.x * 2.10 + q.y * 1.60 + q.z * 1.10)
    + 0.15 * sin(q.x * 4.70 - q.y * 3.90 + 2.00);
  // Признак разлёта. Структура привязана К НЕМУ, а не к прореживанию: у большого
  // разлёта после первого экрана точки почти не прореживаются, и по прежней
  // привязке он оставался ровной крупой — то есть ровно там, где пыли больше
  // всего, её и не было. Гасить структуру у прочих фигур не требуется: сам dust
  // уже взят с весом w.x и вне первого состояния равен нулю.
  //
  // От SPREAD, а не от dust, и это не мелочь. По этому признаку идут
  // неравномерная плотность, разброс калибра и разброс яркости. Плотность
  // выбивает точки ПЯТНАМИ — то есть у ещё целой фигуры появлялись
  // проплешины, и это читалось изменением формы даже при нулевом сдвиге:
  // замер давал расхождение огибающей 27 % при рассыпании 0.28, когда сдвиг
  // был уже заперт порогом и равен нулю.
  float sg = clamp(spread * 1.6, 0.0, 1.0);

  // Сведение трёх направлений в структуру группы. Идёт в два такта: сначала
  // форма расходится в три вертикали, и только потом вертикали съезжаются
  // в одну. Одним тактом это читалось бы как смятие в овал.
  // 2.999, а не 3.0: у точки с aSeed ровно 1.0 floor дал бы четвёртую полосу.
  float lane = (floor(aSeed * 2.999) - 1.0) * 0.46;
  float form = smoothstep(0.00, 0.26, uConv);
  float merge = smoothstep(0.66, 0.95, uConv);
  // Джиттер берётся из отдельного атрибута, а не из хеша по aSeed: aSeed
  // квантован в 256 уровней, и производные хеши на такой сетке дают полосы.
  float jit = (aJit - 0.5) * (0.05 + 0.10 * merge);
  vec3 conv = vec3(lane * (1.0 - merge) + jit, p.y * 0.92, p.z * 0.22);
  p = mix(p, conv, form);

  // Отклик на курсор — только у рассыпанного облака. У собранной фигуры его
  // быть не должно: она знак, а не игрушка, и от мыши шевелиться не обязана.
  // Порог тот же, что у сдвига: отклик ДВИГАЕТ точки, а собранная фигура
  // от мыши шевелиться не должна вовсе — она знак, а не игрушка. По dust
  // отклик просыпался уже на подходе, когда конь ещё целый.
  if (spread > 0.01) {
    vec2 md = p.xy - uMouse;
    float mr = length(md) + 1e-4;
    // Спад по Гауссу. Радиус широкий нарочно: облако занимает около трёх единиц
    // группы, и при узком спаде (0.28) отклик доставался горстке точек у самого
    // курсора — замер показал прибавку 3 % над шумом, то есть ничего.
    float g = exp(-mr * mr / 1.10);

    // ЗАВИХРЕНИЕ, а не толчок наружу. Толчок силой 0.22 гнал за курсором ровную
    // дырку — движение читалось механическим, будто в облаке ездит невидимый
    // шар. Пыль в воздухе так себя не ведёт: её ЗАКРУЧИВАЕТ.
    //
    // Смещение идёт по касательной. Спад по Гауссу делает вращение неравномерным
    // по радиусу — внутри быстрее, снаружи медленнее, — и это даёт сдвиг слоёв,
    // то есть размешивание. Без спада вышло бы жёсткое колесо.
    vec2 tang = vec2(-md.y, md.x) / mr;
    // Разброс по точкам добивает жёсткость: соседние крупинки закручиваются
    // с разной скоростью, и слои перемешиваются между собой, а не только
    // с соседним радиусом.
    p.xy += tang * spread * g * 0.030 * (0.55 + aSeed * 0.9);

    // След от движения курсора. Пыль сносит туда, куда курсор ушёл, — так
    // ведёт себя воздух за проведённой рукой. Снос гаснет сам, когда курсор
    // встал (см. render), поэтому пыль возвращается на место без отдельной
    // пружины: возврат получается плавным сам собой.
    p.xy += uMouseV * spread * g * 0.20;

    // Совсем немного наружу: чистое завихрение оставляет плотность нетронутой,
    // и центр вихря читается плохо. Прежняя сила была в одиннадцать раз больше.
    p.xy += (md / mr) * spread * g * 0.008;
  }
  // Итог по силе: завихрение 0.016..0.044, след не больше 0.040 и только при
  // ведении, наружу 0.008. В сумме в покое около 0.027 против прежних 0.22
  // толчком — в восемь раз тише. Убавлено дважды: после первой правки
  // (вчетверо) отклик всё равно был назван сильным.

  // Лёгкий дрейф, чтобы облако жило и в покое.
  float tt = uTime * 0.001;
  float sd = aSeed * 6.2831;
  // На разлёте дрейф усилен, но умеренно: пыль должна ПЛАВАТЬ, а не бурлить.
  // При множителе 6 замер показал, что за полсекунды меняется 80 % пикселей —
  // это уже не плавание.
  // У собранной фигуры множитель равен единице, то есть ничего не меняется.
  // В покое пыль дышит заметнее: uCalm равен единице, когда прокрутка стоит.
  // При движении лишнее шевеление только мешало бы читать параллакс.
  // Усиление дрейфа тоже сдвигает точки, поэтому и оно от spread: у собранной
  // фигуры дрейф остаётся ровно тем, что был на первом экране.
  float drift = uDrift * (1.0 + spread * (1.5 + 2.4 * uCalm));
  p.x += (sin(tt * 0.90 + sd + p.y * 2.2) * 0.6 + sin(tt * 0.53 + sd * 2.0) * 0.4) * 0.011 * drift;
  p.y += (cos(tt * 0.70 + sd + p.x * 2.2) * 0.6 + cos(tt * 0.41 + sd * 3.0) * 0.4) * 0.011 * drift;
  p.z += sin(tt * 0.60 + sd * 4.0) * 0.025 * drift;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;


  // Размер множится на uDpr, чтобы держаться постоянным в CSS-пикселях.
  // Потолок клампа поэтому тоже множится на uDpr: с фиксированным 6.0
  // в device-пикселях на retina потолок был бы вдвое ниже в CSS-пикселях.
  // Состояния, которые показываются мельче базового кадрирования, получают
  // свой множитель — иначе та же тысяча точек на меньшей площади читалась бы
  // плотной массой вместо облака.
  // Луч: точки в полосе ЯРЧЕ, и только. Ни размер, ни положение он не трогает —
  // знак остаётся узнаваемым, а страница всё равно живёт под скроллом. Прежде
  // луч добавлял и 30 % размера, и на россыпи это читалось волной, которая
  // раздувает пыль при прокрутке.
  float beam = 1.0 - smoothstep(0.0, uBeamW, abs(p.y - uBeam));

  float sizeMul = dot(uSizeMul, w);
  // Прореживание. Порог берётся из aJit — независимого шума, не из aSeed:
  // aSeed уже ведёт размер точки, и по нему прореживание выбило бы ровно самые
  // мелкие или самые крупные.
  //
  // Край порога размыт, иначе точки исчезали бы разом при нарастании праха.
  // Множитель 1.08 нужен, чтобы при доле «единица» не выбывало ничего: у aJit
  // предел ровно единица, и порог обязан быть выше.
  //
  // Прореживание НЕРАВНОМЕРНОЕ по пространству: в прядях поля точек остаётся
  // втрое больше, чем в прогалинах. Ровное прореживание и давало крупу — оно
  // разрежало россыпь, но не создавало в ней структуры, а пустоты между
  // сгустками читаются как пыль сильнее, чем сами частицы.
  //
  // Множители подобраны так, чтобы средняя плотность не изменилась: при wisp
  // в среднем 0.5 поправка равна единице.
  // Размах плотности УЗКИЙ, и структура держится на яркости, а не на набивке.
  //
  // Так вышло по замеру. Замечание было «крупные частицы слишком крупные», но
  // одиночная крупинка меряется одним-тремя пикселями — крупными выглядели
  // СЛИПШИЕСЯ ПЯТНА: при размахе 0.50..1.50 в прядь набивалось столько точек,
  // что они сливались, и 86 % золота лежало такими пятнами. Их-то глаз и читает
  // как крупные частицы, хотя точек такого размера в облаке нет.
  //
  // Поэтому набивка убрана почти до ровной, а пряди и прогалины теперь ведёт
  // яркость (shade ниже): её размах расширен ровно на то, что здесь убрано.
  // Структура остаётся, слипания нет.
  float dense = mix(1.0, 0.78 + 0.44 * wisp, sg);
  float keep = uThin * 1.08 * dense;
  float alive = 1.0 - smoothstep(keep - 0.06, keep + 0.06, aJit);
  // Оставшиеся крупнее: убрав большую часть точек, надо вернуть облаку вес.
  //
  // Калибр РАЗНЫЙ, с тяжёлым хвостом: куб от aSeed даёт множество мелких
  // крупинок и единицы крупных. При одинаковом калибре пыль и читалась крупой —
  // в живой пыли всегда есть несколько заметных мотков, за которые держится
  // глаз. Берётся aSeed, а не aJit: по aJit идёт прореживание, и у выживших
  // точек он весь в нижнем углу, то есть разброса по нему уже нет.
  // Два РАЗНЫХ действия, и их нельзя складывать в одно.
  //
  // Первое — возврат веса за прореженные точки: он обязан идти строго по доле
  // прореживания. Сложив его с разбросом калибра, я включил возврат и там, где
  // прореживания нет, — у большого разлёта все точки стали в полтора раза
  // крупнее разом, и вышла золотая стена поверх заголовка.
  // Возврат веса убавлен с 1.7 до 1.3. При 1.7 каждая точка становилась заметно
  // крупнее, и в прядях они сливались в плотные яркие сгустки — их-то и видно
  // как «слишком крупные частицы», хотя одиночная крупинка меряется тремя
  // пикселями. Меньше поперечник — рыхлее сгусток.
  float comp = mix(1.0, 1.3, clamp(1.0 - uThin, 0.0, 1.0));
  // Второе — сам разброс калибра. Куб от aSeed даёт множество мелких крупинок
  // и единицы крупных; среднее у него около единицы, поэтому общего веса он
  // не добавляет, только разнообразие. При одинаковом калибре пыль и читалась
  // крупой — в живой пыли есть несколько заметных мотков, за которые держится
  // глаз. Берётся aSeed, а не aJit: по aJit идёт прореживание, и у выживших
  // точек разброса по нему уже нет.
  // Хвост укорочен: при 0.55..2.15 крупные мотки выходили слишком крупными
  // и читались уже не пылью. Разброс оставлен, но самый крупный мот теперь
  // около двух третей прежнего поперёк. Среднее держится у единицы, поэтому
  // общий вес облака не изменился.
  float heavy = 0.83 + 0.52 * pow(aSeed, 3.0);
  float grain = comp * mix(1.0, heavy, sg);

  // Луч в размер НЕ входит. Он и подсвечивал, и увеличивал точки на 30 %,
  // и на россыпи это читалось волной, которая раздувает пыль при прокрутке.
  // Подсвечивать — да, это и есть замысел луча; раздувать — нет.
  float px = uSize * sizeMul * uDpr * (4.6 / -mv.z) * (0.7 + aSeed * 0.6)
    * alive * grain;
  gl_PointSize = clamp(px, 1.0, uDpr * 6.0);

  // У пыли яркость идёт ПРЯДЯМИ, а не поровну: ровная яркость читается плоской
  // плёнкой поверх страницы, а не облаком с глубиной.
  float shade = mix(1.0, 0.65 + 0.70 * wisp, sg);
  // Чем КРУПНЕЕ мот, тем он ТУСКЛЕЕ: свет крупинки распределён по её площади.
  //
  // Это и было «что-то не то». Размер шёл от aSeed и яркость шла от aSeed, то
  // есть самые крупные крупинки были и самыми яркими — а это блёстки, а не пыль.
  // Смесь мелких резких искр с крупными яркими кругами читалась двумя разными
  // вещами в одном кадре. С обратной связкой крупные становятся мягкими
  // расплывчатыми мотками, и оба калибра складываются в одну пыль.
  //
  // Обратный корень взят от полного множителя размера, а его среднее около
  // единицы, поэтому общая яркость облака не меняется — меняется только то,
  // как она разложена по калибрам.
  float sizeFac = (0.7 + aSeed * 0.6) * heavy;
  float dim = mix(1.0, inversesqrt(max(sizeFac, 0.15)), sg);
  // Подсветка усилена с 0.9 до 1.25: увеличение из луча убрано, а часть его
  // заметности держалась именно на размере. Замер яркости в полосе до и после
  // правки — ниже, в разделе журнала.
  // Множитель alive обязателен ЗДЕСЬ, а не только в размере, и это была
  // настоящая поломка прореживания.
  //
  // Прореживание обнуляет размер точки, но следом стоит clamp(px, 1.0, ...) —
  // пол в один пиксель возвращает «убранные» точки к жизни. То есть на экране
  // всё время были все 120 000 частиц, сколько бы ни прореживали: замер
  // показывал чернила 1.126 при доле 0.20 и 1.113 при 0.06, при трёхкратной
  // разнице в числе точек. Пыли поэтому и было много.
  //
  // Прозрачность пола не знает: при нулевой альфе точка не даёт ничего
  // и при аддитивном смешивании, и при любом другом.
  vA = (0.55 + aSeed * 0.4) * (1.0 + beam * 1.25) * shade * dim * alive;
}`,me=`
precision mediump float;
uniform float uFade;
uniform vec3 uColor;
varying float vA;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.30, length(c)) * vA * uFade;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uColor, a);
}`,ge=`
uniform float uRotS;
void main(){
  vec3 p = position;
  float cr = cos(uRotS), sr = sin(uRotS);
  p.xz = vec2(cr * p.x + sr * p.z, -sr * p.x + cr * p.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,we=`
precision mediump float;
uniform float uFade, uTime;
uniform vec3 uColor;
void main(){
  // Связи пульсируют (§5) — общий медленный вдох, без разнобоя по отрезкам.
  float pulse = 0.72 + 0.28 * sin(uTime * 0.0009);
  gl_FragColor = vec4(uColor, 0.22 * uFade * pulse);
}`;function G(a,e){const t=document.body||document.documentElement,s=getComputedStyle(t).getPropertyValue(a).trim()||e,o=/^#([0-9a-f]{6})$/i.exec(s),n=parseInt(o?o[1]:e.slice(1),16);return new Ht().setRGB((n>>16&255)/255,(n>>8&255)/255,(n&255)/255,Wt)}function ve(){try{const a=document.createElement("canvas");return!!(a.getContext("webgl2")||a.getContext("webgl"))}catch{return!1}}class P{constructor(e){this.canvas=e,this.stateA=0,this.stateB=0,this.t=0,this.convergePos=0,this.anim=null,this.mod={scale:1,alpha:1,dx:0,dy:0,dust:0,pose:0},this.tune={scale:1,dx:0,dy:0,rotX:0,rotY:0,rotZ:0,edge:!1},this.opacity=1,this.visible=!1,this.raf=0,this.ready=!1,this.reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.props={drift:1,density:1,pointSize:pt,breathSpeed:.4}}async chunk(e){this.chunks??=new Map;const t=this.chunks.get(e);if(t)return this.chunks.delete(e),this.chunks.set(e,t),t;const s=this.meta.files[e];if(!s)throw new Error(`нет файла данных «${e}»`);const n={buf:await fetch(`${Qt}/${s.file}${this.bust??""}`).then(i=>{if(!i.ok)throw new Error(`${s.file}: HTTP ${i.status}`);return i.arrayBuffer()}),layout:s.layout};for(this.chunks.set(e,n);this.chunks.size>ee;)this.chunks.delete(this.chunks.keys().next().value);return n}async loadGallop({force:e=!1}={}){if(e&&(this.gallop=null,this.gallopAt=null,this.bust=`?t=${Date.now()}`),this.gallop)return this.gallop;const t=await fetch(`/data/cloud-gallop.json${this.bust??""}`).then(d=>{if(!d.ok)throw new Error(`описание галопа: HTTP ${d.status}`);return d.json()}),s=await fetch(`/data/${t.file}${this.bust??""}`).then(d=>{if(!d.ok)throw new Error(`${t.file}: HTTP ${d.status}`);return d.arrayBuffer()});if(t.n!==this.meta.n)throw new Error(`в галопе ${t.n} точек против ${this.meta.n} в облаке`);const o=[];for(let d=0;d<t.frames;d++){const{offset:y,bytes:l}=t.layout[`p${d}`];o.push(new Int16Array(s,y,l/2))}this.gallop={meta:t,poses:o,k:t.scale/32767},this.gallopAt=null;const n=this.meta.states[0],i=o[t.ref],r=this.gallop.k,c=this.meta.support?.[n]?.length??180,u=new Array(c).fill(0);for(let d=0;d<t.n;d++){const y=i[d*3]*r,l=i[d*3+1]*r;if(!Math.hypot(y,l))continue;let f=Math.atan2(l,y);f<0&&(f+=Math.PI*2);const m=f/(Math.PI*2)*c;for(let A=-1;A<=1;A++){const v=((Math.round(m)+A)%c+c)%c,h=v/c*Math.PI*2,p=y*Math.cos(h)+l*Math.sin(h);p>u[v]&&(u[v]=p)}}return this.meta.extents[n]={...t.extents},this.meta.support&&(this.meta.support[n]=u),this.resize(),this.gallop}setGallopPhase(e){const t=this.gallop;if(!t)return;const s=t.meta.frames;this.gallopT=e;const n=(e%1+1)%1*s,i=Math.floor(n)%s,r=(i+1)%s,c=n-Math.floor(n);if(this.gallopAt!=null&&Math.abs(n-this.gallopAt)<1/(s*32))return;this.gallopAt=n;const u=this.gallopBlend??1,d=t.k,y=t.poses[i],l=t.poses[r],g=s>>1,f=t.poses[(i+g)%s],m=t.poses[(r+g)%s],A=this.geo.getAttribute("aPos0"),v=A.array,h=this.count,p=this.step,S=this.mod?.pose??0,w=.5-u/2;for(let x=0;x<h;x++){const M=x*p*3,z=x*3,_=x*.6180339887498949,I=u>0?w+u*(_-Math.floor(_)):.5,B=x*.7548776662466927,j=S>B-Math.floor(B),O=j?c<I?f:m:c<I?y:l;v[z]=(j?-O[M]:O[M])*d,v[z+1]=O[M+1]*d,v[z+2]=O[M+2]*d}A.needsUpdate=!0}async reload(){this.bust=`?t=${Date.now()}`,this.meta=await fetch(lt+this.bust).then(t=>{if(!t.ok)throw new Error(`описание: HTTP ${t.status}`);return t.json()});const e=[...this.loaded];this.loaded.clear(),this.pending.clear(),await Promise.all(e.map(t=>this.ensureState(t))),this.resize()}i16(e,t){const{offset:s,bytes:o}=e.layout[t];return new Int16Array(e.buf,s,o/2)}u8(e,t){const{offset:s,bytes:o}=e.layout[t];return new Uint8Array(e.buf,s,o)}positions(e,t){const s=this.i16(e,t),o=this.meta.scale/32767,n=this.count,i=this.step,r=new Float32Array(n*3);for(let c=0;c<n;c++){const u=c*i*3;r[c*3]=s[u]*o,r[c*3+1]=s[u+1]*o,r[c*3+2]=s[u+2]*o}return r}async load(e=0){this.meta=await fetch(lt).then(f=>f.json());const t=this.meta;this.step=window.innerWidth<ue?Math.max(1,Math.round(t.n/fe)):1,this.count=Math.floor(t.n/this.step);const s=this.count;this.props.pointSize=pt*Math.sqrt(de/s);const o=t.states[e],[n,i]=await Promise.all([this.chunk("common"),this.chunk(o)]),r=new at,c=this.positions(i,o);t.states.forEach((f,m)=>{const A=m===e?c:c.slice(),v=new C(A,3);v.setUsage(it),r.setAttribute(`aPos${m}`,v),m===0&&r.setAttribute("position",v)});const u=this.u8(n,"seed"),d=this.u8(n,"seed2"),y=new Float32Array(s),l=new Float32Array(s);for(let f=0;f<s;f++){const m=f*this.step;y[f]=u[m]/255,l[f]=d[m]/255}r.setAttribute("aSeed",new C(y,1)),r.setAttribute("aJit",new C(l,1));const g=new C(new Float32Array(s*3),3);return g.setUsage(it),r.setAttribute("aBreath",g),this.geo=r,this.linkGeo=new at,this.linkGeo.setAttribute("position",new C(new Float32Array(3),3)),this.loaded=new Set([e]),this.pending=new Map,this.build(),this.ready=!0,this.loadExtras(o),this.prefetch(),this}loadExtras(e){const t=this.meta.extra?.[e]??[];return t.length?Promise.all(t.map(s=>this.chunk(s))).then(s=>this.applyExtras(t,s)).catch(s=>console.warn("[cfig] довески не приехали:",s.message)):Promise.resolve()}ensureState(e,{force:t=!1}={}){if(this.loaded.has(e))return Promise.resolve();if(this.figures?.[e]){if(!t)return Promise.resolve();delete this.figures[e],this.sizeMul0&&this.uniforms.uSizeMul.value.setComponent(e,this.sizeMul0.getComponent(e))}if(this.pending.has(e))return this.pending.get(e);const s=this.meta,o=s.states[e],n=s.extra?.[o]??[],i=Promise.all([this.chunk(o),...n.map(r=>this.chunk(r))]).then(([r,...c])=>{if(!t&&this.figures?.[e]){this.pending.delete(e);return}const u=this.geo.getAttribute(`aPos${e}`);u.array.set(this.positions(r,o)),u.needsUpdate=!0,this.applyExtras(n,c),this.loaded.add(e),this.pending.delete(e)}).catch(r=>{throw this.pending.delete(e),r});return this.pending.set(e,i),i}applyExtras(e,t){for(const[s,o]of e.entries())o==="breath"&&this.applyBreath(t[s]),o==="links"&&this.applyLinks(t[s])}applyBreath(e){const t=this.i16(e,"anchor"),s=this.u8(e,"amp"),o=this.u8(e,"phase"),n=this.meta.scale/32767,i=this.geo.getAttribute("aBreath"),r=i.array;for(let c=0;c<this.count;c++){const u=c*this.step;r[c*3]=t[u]*n,r[c*3+1]=s[u]/255*this.meta.ampScale,r[c*3+2]=o[u]/255*Math.PI*2}i.needsUpdate=!0}applyLinks(e){const t=this.i16(e,"links"),s=this.meta.scale/32767,o=new Float32Array(t.length);for(let n=0;n<t.length;n++)o[n]=t[n]*s;this.linkGeo.setAttribute("position",new C(o,3)),this.linkGeo.attributes.position.needsUpdate=!0}async prefetch(){for(let e=0;e<this.meta.states.length;e++)if(!this.loaded.has(e))try{await this.ensureState(e)}catch(t){console.warn("[cfig] догрузка:",t.message)}}build(){const e=G("--cloud-point","#ECCC6B"),t=Math.min(window.devicePixelRatio||1,2);this.renderer=new $t({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(t),this.scene=new qt,this.camera=new _t(34,1,.1,20),this.camera.position.z=3.4,this.group=new It,this.scene.add(this.group),this.uniforms={uTime:{value:0},uSelA:{value:new N(1,0,0,0)},uSelB:{value:new N(1,0,0,0)},uT:{value:0},uSpread:{value:0},uBurst:{value:0},uConv:{value:0},uDust:{value:0},uMouse:{value:new K(999,999)},uMouseV:{value:new K(0,0)},uDustAmp:{value:new K(3.3,3.3)},uCalm:{value:1},uThin:{value:1},uBeam:{value:99},uBeamW:{value:ft},uDrift:{value:1},uSize:{value:this.props.pointSize},uDpr:{value:t},uBreath:{value:this.props.breathSpeed},uRotB:{value:0},uRotS:{value:0},uFade:{value:0},uColor:{value:e},uSizeMul:{value:new N(Pt,1,1,Et/.82)}};const s={transparent:!0,depthWrite:!1,blending:jt};this.mat=new rt({...s,uniforms:this.uniforms,vertexShader:pe,fragmentShader:me}),this.points=new Ot(this.geo,this.mat),this.points.frustumCulled=!1,this.group.add(this.points),this.lineMat=new rt({...s,uniforms:{uFade:{value:0},uTime:this.uniforms.uTime,uRotS:this.uniforms.uRotS,uColor:{value:G("--cloud-line","#ECCC6B")}},vertexShader:ge,fragmentShader:we}),this.lines=new Nt(this.linkGeo,this.lineMat),this.lines.frustumCulled=!1,this.group.add(this.lines),this.resize(),this.t0=performance.now()}resize(){if(!this.renderer)return;const e=this.canvas.clientWidth,t=this.canvas.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.narrow=e<le;const s=document.querySelector("#container-probe i");this.contain=s?.clientWidth?Math.min(1,s.clientWidth/e):1,this.frame()}slotName(e){return this.figures?.[e]??this.meta.states[e]}slotPlan(e){if(!this.figures?.[e])return ut[e];const t=this.figures[e];return P.figPlans??={},P.figPlans[t]??={...ut[1],rotZ:te,scale:.64,...dt[t]??{}}}slotRot(e){const t=this.figures?.[e];return t?dt[t]?.rot??0:oe[e]}support(e,t){const s=this.slotName(e),o=this.meta.support?.[s];if(!o||!o.length)return this.meta.extents?.[s]?.halfW??0;const n=o.length,i=Math.PI*2;let r=t%i;r<0&&(r+=i);const c=r/i*n,u=Math.floor(c)%n,d=c-Math.floor(c);return o[u]+(o[(u+1)%n]-o[u])*d}rightAlignedX(e,t,s){const o=Math.tan(this.camera.fov*Math.PI/180/2),n=((this.contain??1)-se)*o*this.camera.aspect,i=Math.sqrt(1+n*n)*this.support(e,s+Math.atan(n));return n*this.camera.position.z-t*i}frame(){const e=W(this.t),t=this.slotPlan(this.stateA),s=this.slotPlan(this.stateB),o=this.mod,n=this.tune,i=(this.narrow?t.narrowScale:t.scale)*o.scale*n.scale,r=(this.narrow?s.narrowScale:s.scale)*o.scale*n.scale,c=i+(r-i)*e,u=t.scale*o.scale*n.scale,d=s.scale*o.scale*n.scale,y=u+(d-u)*e;this.narrowK=y>1e-6?c/y:1;const l=t.narrowFade??1,g=s.narrowFade??1;this.narrowFade=this.narrow?l+(g-l)*e:1,this.group.scale.setScalar(c);const f=t.rotZ+(s.rotZ-t.rotZ)*e;this.group.rotation.set(n.rotX,n.rotY,f+n.rotZ);const A=1-Math.min(1,Math.max(0,((o.dust??0)-.3)/.7)),v=Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z,h=v*this.camera.aspect;if(this.halfView=h,this.halfViewY=v,this.uniforms?.uDustAmp){const B=Math.max(c,1e-4);this.uniforms.uDustAmp.value.set(h*2.2/B,v*2.9/B)}const p=this.convergePos;if(this.narrow){const B=t.narrowPos,j=s.narrowPos;this.group.position.set(n.dx*A,(B[1]+(j[1]-B[1])*e+o.dy+n.dy)*A,0);return}const S=n.edge||t.edge,w=n.edge||s.edge,x=S?this.rightAlignedX(this.stateA,i,this.slotRot(this.stateA)):0,M=w?this.rightAlignedX(this.stateB,r,this.slotRot(this.stateB)):0,z=h,_=x+(M-x)*e,I=t.dx+(s.dx-t.dx)*e;this.group.position.set((_+o.dx*z+I+n.dx)*(1-p)*A,(t.y+(s.y-t.y)*e+o.dy+n.dy)*A,0)}static sel(e){return new N(+(e===0),+(e===1),+(e===2),+(e===3))}syncColor(){this.uniforms&&(this.uniforms.uColor.value.copy(G("--cloud-point","#ECCC6B")),this.lineMat&&this.lineMat.uniforms.uColor.value.copy(G("--cloud-line","#ECCC6B")))}static figureSlot(e){return 2+e%2}async mountFigure(e,t){if(this.figures??={},this.figures[t]===e)return;const s=await this.chunk(e),o=this.geo.getAttribute(`aPos${t}`);o.array.set(this.positions(s,e)),o.needsUpdate=!0,this.figures[t]=e,this.loaded.delete(t),this.sizeMul0??=this.uniforms.uSizeMul.value.clone(),this.uniforms.uSizeMul.value.setComponent(t,1)}setPair(e,t,s){if(!this.ready)return;this.cancelTransition();const o=this.uniforms;o.uSelA.value.copy(P.sel(e)),o.uSelB.value.copy(P.sel(t)),o.uT.value=s,o.uSpread.value=0,o.uBurst.value=0,o.uConv.value=0,this.stateA=e,this.stateB=s<.5?e:t,this.t=s,this.frame()}releaseFigures(){this.sizeMul0&&(this.uniforms.uSizeMul.value.copy(this.sizeMul0),this.figures={})}setState(e){if(this.cancelTransition(),this.stateA=this.stateB=Math.max(0,Math.min(3,e)),this.t=0,this.convergePos=0,!this.ready)return;const t=this.uniforms;t.uSelA.value.copy(P.sel(this.stateA)),t.uSelB.value.copy(P.sel(this.stateB)),t.uT.value=0,t.uSpread.value=0,t.uBurst.value=0,t.uConv.value=0,this.frame()}cancelTransition(){if(!this.anim)return;const e=this.anim;this.anim=null,e.resolveHalf(),e.resolveDone()}transitionTo(e,{duration:t=ne}={}){location.search.includes("slow")&&(t*=4);const s=Math.max(0,Math.min(3,e));if(!this.ready||s===this.stateB)return this.setState(s),{half:Promise.resolve(),done:Promise.resolve()};if(this.reduced)return this.crossfadeTo(s);this.cancelTransition(),this.stateA=this.stateB,this.stateB=s;const o=this.uniforms;o.uSelA.value.copy(P.sel(this.stateA)),o.uSelB.value.copy(P.sel(this.stateB));let n,i;const r=new Promise(u=>{n=u}),c=new Promise(u=>{i=u});return this.anim={target:s,duration:t,elapsed:0,prev:performance.now(),halfFired:!1,resolveHalf:n,resolveDone:i},{half:r,done:c}}advance(e){const t=this.anim;if(!t)return;t.elapsed+=Math.min(e-t.prev,ae),t.prev=e;const s=Math.min(1,t.elapsed/t.duration),o=this.uniforms;this.t=s,o.uT.value=s;const n=Math.sin(Math.PI*s)**2;o.uSpread.value=re*n,o.uBurst.value=ce*n,this.frame(),!t.halfFired&&s>=.5&&(t.halfFired=!0,t.resolveHalf()),!(s<1)&&(this.anim=null,this.setState(t.target),t.resolveDone())}crossfadeTo(e){const t=this.canvas.parentElement;t?.classList.remove("is-on");const s=new Promise(n=>setTimeout(n,ie)),o=s.then(()=>{this.setState(e),this.render(performance.now()),t?.classList.add("is-on")});return{half:s,done:o}}setFraming({scale:e=1,alpha:t=1,dx:s=0,dy:o=0,dust:n=0,pose:i=0,calm:r=1,thin:c=1,beam:u=null}={}){this.mod.scale=e,this.mod.alpha=t,this.mod.dx=s,this.mod.dy=o,this.mod.dust=n;const d=this.mod.pose;if(this.mod.pose=i,this.gallop&&Math.abs(i-d)>.004&&(this.gallopAt=null,this.setGallopPhase(this.gallopT??0)),this.opacity=t,this.ready){const l=(this.halfViewY??Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z)/Math.max(this.group.scale.x,1e-4);this.uniforms.uBeam.value=u===null?99:u*l,this.uniforms.uBeamW.value=ft*l,this.uniforms.uDust.value=n,this.uniforms.uCalm.value=r,this.uniforms.uThin.value=c,this.frame()}}setVisible(e){this.visible=e,this.canvas.parentElement?.classList.toggle("is-on",e),e?this.start():this.stop()}watchPointer(){this.onPointer||(this.onPointer=e=>{if(!this.ready||!this.halfView)return;const t=(e.clientX/innerWidth-.5)*2*this.halfView,s=-(e.clientY/innerHeight-.5)*2*this.halfViewY,o=this.group.scale.x||1,n=(t-this.group.position.x)/o,i=(s-this.group.position.y)/o;this.mouseAim={x:n,y:i};const r=this.uniforms.uMouse.value;r.x>900&&r.set(n,i)},addEventListener("pointermove",this.onPointer,{passive:!0}))}start(){if(this.raf||!this.ready)return;this.watchPointer();const e=t=>{this.raf=requestAnimationFrame(e),this.advance(t),this.render(t)};if(this.reduced){this.render(performance.now());return}this.raf=requestAnimationFrame(e)}stop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0}render(e){if(!this.ready)return;const t=this.uniforms,s=e-this.t0;if(t.uTime.value=s,t.uDrift.value=this.reduced?0:this.props.drift,this.mouseAim&&!this.reduced){const p=t.uMouse.value,S=t.uMouseV.value,w=p.x,x=p.y;p.x+=(this.mouseAim.x-p.x)*.1,p.y+=(this.mouseAim.y-p.y)*.1,S.x=S.x*.88+(p.x-w)*.2,S.y=S.y*.88+(p.y-x)*.2;const M=Math.hypot(S.x,S.y);M>.2&&(S.x=S.x/M*.2,S.y=S.y/M*.2)}const o=this.narrowK??1,n=window.devicePixelRatio||1,i=innerWidth*innerHeight*n*n,r=Math.min(1.4,Math.max(.5,Math.sqrt(i/he))),c=Math.min(1,Math.max(0,((this.mod.dust??0)-.3)/.7));t.uSize.value=this.props.pointSize*this.tune.scale*(o+(r-o)*c),t.uBreath.value=this.props.breathSpeed;const u=this.reduced?0:1;t.uRotB.value=this.slotRot(2)+Math.sin(s*21e-5)*.05*u,t.uRotS.value=this.slotRot(3)+Math.sin(s*16e-5)*.07*u;const d=Math.min(1,s/1400),y=this.figures?.[this.stateA]?ht:1,l=this.figures?.[this.stateB]?ht:1,g=y+(l-y)*W(this.t);t.uFade.value=d*this.opacity*(this.narrowFade??1)*g;const f=!this.figures?.[3],m=f&&this.stateB===3?W(this.t):0,v=(f&&this.stateA===3?1-W(this.t):0)+m,h=Math.max(0,1-this.convergePos/.45);this.lineMat.uniforms.uFade.value=v*h*d*this.opacity*(this.narrowFade??1),this.renderer.render(this.scene,this.camera)}dispose(){this.onPointer&&(removeEventListener("pointermove",this.onPointer),this.onPointer=null),this.stop(),this.geo?.dispose(),this.linkGeo?.dispose(),this.mat?.dispose(),this.lineMat?.dispose(),this.renderer?.dispose()}}const mt={home:{cs:"/",en:"/en/"},tronexo:{cs:"/tronexo/",en:"/en/tronexo/"},realEstate:{cs:"/real-estate/",en:"/en/real-estate/"},tiketa:{cs:"/tiketa/",en:"/en/tiketa/"},about:{cs:"/kdo-jsme/",en:"/en/about-us/"},news:{cs:"/novinky/",en:"/en/news/"},csr:{cs:"/#odpovednost",en:"/en/csr/"},investors:{cs:"/pro-investory/",en:"/en/investors/"},contacts:{cs:"/kontakty/",en:"/en/contacts/"},ethics:{cs:"/eticky-kodex/",en:"/en/code-of-ethics/"},terms:{cs:"/podminky-pouzivani/",en:"/en/terms-of-use/"},whistleblowing:{cs:"/ochrana-oznamovatelu/",en:"/en/whistleblowing/"},gdpr:{cs:"/gdpr/",en:"/en/gdpr/"}};function ye(a){const e=a.endsWith("/")?a:`${a}/`;for(const[t,s]of Object.entries(mt))if(Object.values(s).includes(e))return t;return Object.values(mt.news).some(t=>e.startsWith(t))?"news":null}const F={lead:{scale:1,alpha:1,dx:0,dy:0,dust:0,pose:0,thin:1},side:{scale:.72,alpha:.66,dx:.05,dy:.08,dust:0,pose:1,thin:1},back:{scale:.5,alpha:.16,dx:.03,dy:-.16,dust:0,pose:1,thin:1},intro:{scale:1,alpha:.55,dx:0,dy:0,dust:1,pose:1,thin:.1},run1:{scale:1,alpha:.55,dx:0,dy:0,dust:1,pose:1,thin:.1},run2:{scale:1,alpha:.55,dx:0,dy:0,dust:1,pose:1,thin:.1},run3:{scale:1,alpha:.55,dx:0,dy:0,dust:1,pose:1,thin:.1},mist:{scale:1,alpha:.55,dx:0,dy:0,dust:1,pose:1,thin:.1},mistEnd:{scale:1,alpha:.55,dx:0,dy:0,dust:1,pose:1,thin:.1},edge:{scale:.46,alpha:.1,dx:.25,dy:-.1,dust:0,pose:1,thin:1},dust:{scale:1,alpha:.55,dx:0,dy:0,dust:1,pose:1,thin:.1},right:{scale:1,alpha:.55,dx:0,dy:0,dust:1,pose:1,thin:.1}},ot="lead",Se=.12,gt=1.15,Ae=-1.15,xe=1,k=(a,e,t)=>a+(e-a)*t;let U=null,b=[],Q=0,L=null,X=null,Bt=!1;const be=220;let wt=0,vt=-1;function kt(){const a=new URLSearchParams(location.search).has("gallop");b=[...document.querySelectorAll("[data-cloud-frame]")].filter(t=>a||t.dataset.cloudWhen!=="gallop").map(t=>{const s=t.getBoundingClientRect();return{anchor:s.top+window.scrollY+s.height/2+(Number(t.dataset.cloudShift)||0)/100*window.innerHeight,preset:F[a&&t.dataset.cloudFrameGallop||t.dataset.cloudFrame]??F[ot]}}).sort((t,s)=>t.anchor-s.anchor)}const Me={scale:1,alpha:1,dx:0,dy:0,dust:0,pose:0,thin:1};for(const a of Object.keys(F))F[a]={...Me,...F[a]};function Pe(a){if(!b.length)return F[ot];if(a<=b[0].anchor)return b[0].preset;const e=b[b.length-1];if(a>=e.anchor)return e.preset;for(let t=1;t<b.length;t++){if(a>b[t].anchor)continue;const s=b[t-1],o=b[t],n=(a-s.anchor)/(o.anchor-s.anchor),i=n*n*(3-2*n);return{scale:k(s.preset.scale,o.preset.scale,i),alpha:k(s.preset.alpha,o.preset.alpha,i),dx:k(s.preset.dx,o.preset.dx,i),dy:k(s.preset.dy,o.preset.dy,i),dust:k(s.preset.dust,o.preset.dust,n),thin:k(s.preset.thin,o.preset.thin,i),pose:k(s.preset.pose,o.preset.pose,i)}}return e.preset}function Ee(){if(Bt)return{...b[0]?.preset??F[ot],beam:gt,calm:1};const a=window.scrollY+window.innerHeight/2,e=Pe(a),t=Math.max(1,document.documentElement.scrollHeight-window.innerHeight),s=Math.min(1,Math.max(0,window.scrollY/t)),o=Math.min(1,s/xe),n=performance.now();window.scrollY!==vt&&(vt=window.scrollY,wt=n);const i=Math.min(1,Math.max(0,(n-wt-be)/400));return{...e,beam:k(gt,Ae,o),calm:i}}function Tt(){if(Q=requestAnimationFrame(Tt),!!U){X=Ee(),L||(L={...X});for(const a of["scale","alpha","dx","dy","dust","pose","thin","calm","beam"]){const e=X[a]??0;L[a]+=(e-L[a])*Se}U.setFraming(L)}}function Be(a){U=a,kt(),L=null,Q||(Q=requestAnimationFrame(Tt))}function Ft(a){Bt=a}function tt(){U&&kt()}const Ct="__cfigScene",yt="data-cloud-figure",ke=.55,St=.9;let E=[],T=!1,et=0,At=0,R="";const Te=(a,e,t)=>{const s=Math.max(0,Math.min(1,(t-a)/(e-a)));return s*s*(3-2*s)};function xt(a){return a.querySelector(".statement, .onward__title, .marker")??a}function Fe(a){const e=[...document.querySelectorAll(`[${yt}]`)];if(!e.length)return[];const t=a.meta?.states??[],o=[{el:null,figure:t[a.stateB]??t[0],state:a.stateB,slot:a.stateB}];let n=0;for(const i of e){const r=i.getAttribute(yt).trim(),c=t.indexOf(r);c>=0?o.push({el:xt(i),figure:r,state:c,slot:c}):o.push({el:xt(i),figure:r,state:null,slot:a.constructor.figureSlot(n++)})}return o}function Ce(){const a=window.innerHeight||0,e=a*ke,t=E.map(c=>c.el?c.el.getBoundingClientRect().top:-1/0);let s=0;for(;s+1<E.length&&t[s+1]<=e;)s++;if(s+1>=E.length)return{i:E.length-2,t:1};const o=c=>Math.max(0,Math.min(1,c)),n=o((t[s+1]-e)/(a*St)),i=s===0?window.scrollY||0:e-t[s],r=o(i/(a*St));return{i:s,t:Te(0,1,Math.min(1-n,r))}}async function Le(a,e,t){const s=++At,o=`${e.figure}>${t.figure}`;for(const n of[e,t])if(n.state!=null?await a.ensureState(n.state):await a.mountFigure(n.figure,n.slot),s!==At)return!1;return R=o,!0}function ze(){if(et=0,!T)return;const a=window[Ct]?.cloud;if(!a?.ready||!a.visible||E.length<2)return;if(a.anim){D();return}const{i:e,t}=Ce(),s=E[e],o=E[e+1],n=`${s.figure}>${o.figure}`;if(R!==n){Le(a,s,o).then(i=>{i&&T&&D()}),(R.startsWith(`${s.figure}>`)||R.endsWith(`>${s.figure}`))&&a.setPair(s.slot,s.slot,0);return}a.setPair(s.slot,o.slot,a.reduced?t<.5?0:1:t)}function D(){et||(et=requestAnimationFrame(ze))}function bt(){const a=window[Ct]?.cloud;if(a){if(E=a.ready?Fe(a):[],R="",E.length<2){T=!1,a.releaseFigures?.();return}T||(T=!0,window.addEventListener("scroll",D,{passive:!0}),window.addEventListener("resize",D,{passive:!0})),T=!0,D()}}document.addEventListener("astro:before-preparation",()=>{T=!1});const Re=["lines","ink"],De="ink";function Lt(){return De}function zt(){const a=Lt(),e=document.body?.dataset.route==="home"&&(a==="light"||Re.includes(a));document.documentElement.classList.toggle("earth-light",e),e?document.documentElement.dataset.earth=a:delete document.documentElement.dataset.earth}const $="__cfigScene",$e={"":"home",tronexo:"tronexo","real-estate":"realEstate",tiketa:"tiketa"};function Mt(a){if(a.startsWith("/lab/")){const e=a.replace("/lab/","").replace(/\/$/,"");return $e[e]??null}return ye(a)}const q={home:0,tronexo:1};Lt()&&delete q.home;function Z(){document.documentElement.classList.add("no-webgl"),Rt()}function Rt(){const a=document.documentElement;a.classList.contains("no-webgl")&&a.classList.toggle("poster-on",q[document.body.dataset.route]===0)}function qe(){if(window[$])return window[$];const e=document.getElementById("canvas-wrapper")?.querySelector("canvas:not(.canvas-track)");if(!e)return null;if(!ve())return Z(),null;const t={cloud:null,ready:null};window[$]=t;const s=q[document.body.dataset.route]??0;t.ready=new P(e).load(s).then(n=>(t.cloud=n,document.documentElement.classList.add("cloud-ready"),n.reduced||Be(n),Dt(),n)).catch(n=>(console.warn("[cfig] сцена не поднялась:",n),Z(),null)),e.addEventListener("webglcontextlost",n=>{n.preventDefault(),t.cloud?.stop(),Z(),console.warn("[cfig] контекст WebGL потерян")});let o=0;return window.addEventListener("resize",()=>{clearTimeout(o),o=setTimeout(()=>{t.cloud?.resize(),tt()},120)},{passive:!0}),t}async function Dt(){const e=window[$]?.cloud;if(!e)return;const t=document.body.dataset.route,s=q[t];if(e.syncColor(),s===void 0){e.setVisible(!1),e.releaseFigures?.(),V=null;return}if(V===t){V=null,tt(),bt();return}try{await e.ensureState(s,{force:!0})}catch(o){console.warn("[cfig] состояние не загрузилось:",o.message);return}document.body.dataset.route===t&&(e.setState(s),e.resize(),e.setVisible(!0),tt(),bt())}zt();qe();let V=null;document.addEventListener("astro:before-preparation",a=>{const e=window[$]?.cloud;if(!e)return;Ft(!0);const t=q[Mt(a.to.pathname)];t===void 0&&e.visible&&e.setVisible(!1);const s=t===e.stateB&&!e.figures?.[e.stateB];if(t===void 0||!e.visible||s)return;const o=a.loader;a.loader=async()=>{try{await e.ensureState(t,{force:!0})}catch(i){console.warn("[cfig] состояние не загрузилось, иду без морфа:",i.message),await o();return}const{half:n}=e.transitionTo(t);V=Mt(a.to.pathname),await Promise.all([o(),n])}});document.addEventListener("astro:page-load",()=>{zt(),Ft(!1),Dt(),Rt()});const Y="route-fade",st="route-in",_e=600,Ie=location.search.includes("nofade"),nt=()=>Ie||window.matchMedia("(prefers-reduced-motion: reduce)").matches,je=a=>new Promise(e=>setTimeout(e,a));document.addEventListener("astro:before-preparation",a=>{if(nt())return;document.documentElement.classList.add(Y);const e=a.loader;a.loader=async()=>{const t=e();await je(_e);const s=window.__cfigScroll&&window.__cfigScroll.lenis;s?s.scrollTo(0,{immediate:!0,force:!0}):window.scrollTo({top:0,left:0,behavior:"instant"}),await t}});document.addEventListener("astro:after-swap",()=>{nt()||document.documentElement.classList.add(Y,st)});document.addEventListener("astro:page-load",()=>{if(nt()){document.documentElement.classList.remove(Y,st);return}requestAnimationFrame(()=>{requestAnimationFrame(()=>document.documentElement.classList.remove(Y,st))})});export{Re as P,Lt as e};
