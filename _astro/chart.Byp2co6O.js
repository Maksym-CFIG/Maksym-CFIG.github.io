import{b as kt}from"./Base.astro_astro_type_script_index_0_lang.D3EU_fwG.js";import{signAway as we,callProgress as be,footerRoom as Ae,callInto as Me,endProgress as Ee,ribbonFade as Re,signRise as _e}from"./ending.B8Co_5vN.js";import{B as mt,c as O,V as et,ch as Te,b as dt,j as Le,d7 as Ie,cm as ae,M as J,D as ot,d9 as Se,ce as Ce,bR as Pe,bL as Fe,ci as Ft,a8 as rt,bx as Rt,d6 as Oe,a1 as Ge,e as De,S as se,co as ke,W as He,C as _t,a as Ne,N as Ve,P as We}from"./three.core.Gwy6y2Io.js";import{setSignGlow as Tt,setWord as Lt,setWordClean as It}from"./track.BnDAPmT-.js";import"./preload-helper.BlTxHScW.js";import"./router.UeToN5xW.js";import"./scroll.Cxvh0_mC.js";const Z=20,z=Z+1,ie=4,re=2,Ot=2.6,G=e=>Number.isInteger(e)?`${e}.0`:`${e}`;function le(e,n){const a=getComputedStyle(document.body).getPropertyValue(e).trim(),m=/^#?([0-9a-f]{6})$/i.exec(a)||/^#?([0-9a-f]{6})$/i.exec(n),v=parseInt(m[1],16);return[(v>>16&255)/255,(v>>8&255)/255,(v&255)/255]}const ce=matchMedia("(prefers-reduced-motion: reduce)"),vt=.9,ue=.42,$e=.62,Be=.55,ze=.75,Ke=.5077734375,Xe=.55,je=.11,Ue=4,Ye=.45,qe=.3,Ze=.7,Qe=.25,Je=3.8,tn=900,en=5.5,nn=.07,on=2.6,an=16,sn=.22,rn=2.4,ln=.42,cn=2.8,un=`
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
uniform float uLit[${z}];
uniform vec2 uLitAt[${z}];
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
// Толщина линии и плотность буфера приходят УНИЯМИ: они меняются по кадру
// (отход знака, передискретизация).
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
  // Развёртка в повторах решётки: координата у нас в клетках топологии,
  // поэтому деление на размер повтора кладёт его ровно по рёбрам сетки.
  // uCell — множитель частоты решётки, uFillMul — силы заливки. Унии, а не
  // константы: у знака и у ленты разный масштаб на экране, и одна и та же
  // сетка читается на них по-разному — на знаке она выходила клеткой.
  vGrid = aUv * uCell / vec2(${G(ie)}, ${G(re)});
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
`,fn=`
precision highp float;
#define GLINT_SCALE ${G(en)}
#define GLINT_DRIFT ${G(nn)}
#define GLINT ${G(on)}
#define SPECK_SCALE ${G(an)}
#define SPECK_DRIFT ${G(sn)}
#define SPECK ${G(rn)}
#define SPARK ${G(cn)}
#define BACK ${G(ln)}
#define LINE_PX ${G(Ot)}
#define MAJOR_PX ${G(Je)}
#define GRID_X ${G(ie)}
#define GRID_Y ${G(re)}
#define HOVER_R ${G(Ye)}
#define HOVER_R0 ${G(qe)}
#define HOVER_GLOW ${G(Ze)}
#define HOVER_ALPHA ${G(Qe)}
#define WICK_DIM ${G($e)}
#define WICK_TIP ${G(Be)}
#define WICK_TIP_FADE ${G(ze)}
#define PEN ${G(je)}
#define PEN_GLOW ${G(Ue)}
uniform vec3 uFill;
uniform vec3 uLine;
uniform float uAlpha;
uniform vec2 uDepth;     // ближняя и дальняя границы затухания
uniform float uInkAvg;   // средняя плотность рисунка, предел для дали
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
// СКОЛЬКО ПИКСЕЛЕЙ БУФЕРА В ПИКСЕЛЕ КАДРА. Толщина линии задана в пикселях,
// и производная fwidth считает их в буфере, куда идёт отрисовка. При
// передискретизации буфер вдвое плотнее — та же двойка давала линию вдвое
// тоньше и тусклее, и вместо сглаживания получалась лесенка.
uniform float uPx;
// УГОЛ ПЛИТКИ В ПИКСЕЛЯХ ПОЛНОГО БУФЕРА (2026-11-12, аудит, п. 2). Буфер
// передискретизации теперь не во весь кадр, а плиткой под знак, и
// gl_FragCoord в нём отсчитан от угла плитки, а концы кромок (vS*) — от угла
// кадра. Сдвиг возвращает их в одну систему; ноль — рисуем во весь кадр.
uniform vec2 uOrg;
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
  // НОРМАЛЬ ИЗ ПРОИЗВОДНЫХ — ТОЛЬКО ЧЕРЕЗ ЭТУ ФУНКЦИЮ.
  //
  // У ленты контура соседние вершины квада совпадают по положению, поэтому
  // производные vView вырождаются в ноль, а normalize(vec3(0)) даёт NaN.
  // Дальше NaN проходит через всю арифметику прозрачности, и проверка
  // «a < 0.01 — отбрось» его НЕ ловит: сравнение с NaN всегда ложно.
  // Фрагмент оставался нарисованным при нулевой силе знака — заказчик видел
  // яркую черту там, где всё уже погасло.
  // Доля дали: от неё и растворение сетки в ровный тон, и затухание ниже.
  float farAmt = smoothstep(uDepth.x, uDepth.y, vDepth);

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
    // Метки задней плоскости отрицательные (markBackEdges) — их не рисуем.
    vec3 w = max(vHard, vec3(0.0));
    vec3 hw = uLinePx * uPx * mix(vec3(0.6), vec3(1.0), w);
    vec2 fc = gl_FragCoord.xy + uOrg;
    vec3 d = vec3(
      segDist(fc, vS1, vS2),   // ребро напротив вершины 0
      segDist(fc, vS2, vS0),
      segDist(fc, vS0, vS1));
    vec3 cov = (1.0 - smoothstep(hw - 0.5, hw + 0.5, d))
             * step(0.05, w) * mix(vec3(0.45), vec3(1.0), w);
    // Линии рисуют только крышки: у пояса стенки, стоящего ребром, на экране
    // сотни треугольников в три пикселя, и рисовать там нечего.
    if (uEdgeFace > 0.0) cov *= step(0.5, vCap);
#if defined(TE2) && !defined(RIBBON)
    // ИГЛЫ НЕ РИСУЮТ ЛИНИЮ (2026-11-12; проверялось за ключом ?te=2, тег
    // tronexo-te-key, заказчик: «отлично, подходит»). Заказчик: «у Т на
    // Tronexo при скроле мерцает верхняя грань». Линию тела рисует только
    // свой треугольник, и вдоль верхней кромки перекладины лицо разбито
    // иглой: на отходе её высота над кромкой меньше толщины линии. Тогда
    // от линии остаются те выборки, что попали внутрь иглы, — штрихи
    // в строку пикселя, и при движении знака они бегут и мигают (видно
    // кадрами при любом SS). Ту же кромку целиком рисует лента контура,
    // поэтому линия тела гасится там, где треугольнику не на чем её
    // нарисовать: по его высоте над кромкой в пикселях буфера, плавно.
    {
      vec2 e0 = vS2 - vS1, e1 = vS0 - vS2, e2 = vS1 - vS0;
      float a2 = abs(e2.x * (-e1.y) - e2.y * (-e1.x));
      vec3 hgt = a2 / max(vec3(length(e0), length(e1), length(e2)), vec3(1e-3));
      cov *= smoothstep(hw, hw * 2.0, hgt);
    }
#endif
    raw = max(max(cov.x, cov.y), cov.z);
  }
#endif
  // У считаемой решётки покрытие уже готово: усиливать нечего, и это
  // половина дела — усиление множило не только штрих, но и его дрожание.
  float ink = min(1.0, raw);
  // РАСТВОРЕНИЕ СЕТКИ В ДАЛИ. Когда след пикселя накрывает клетку целиком,
  // правильный ответ — средняя плотность рисунка, а не «линия или не линия».
  // Иначе у дальних свечей оценка пляшет и видна как дрожь. Предел задан
  // прямо — средняя плотность рисунка (INK_AVG).
  ink = mix(ink, uInkAvg, farAmt);

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
  // клетки. Считается по развёртке, а не по толщине линии.
  //
  // Искра взвешена по ink, поэтому там, где решётка вдали растворилась
  // в ровный тон, искр не появляется — гаснуть отдельно им не нужно.
  vec2 f = abs(fract(vGrid * vec2(GRID_X, GRID_Y)) - 0.5);   // проблеск идёт по той же сетке
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
  float mul = 1.0 - farAmt;
  // Подсветка достаётся и линиям, и заливке: если взвесить её по ink, как
  // проблеск, у дальних свечей она пропадёт вместе с растворённой сеткой.
  float fl = 1.0 + mul * ((GLINT * glint + SPECK * speck) * ink + SPARK * spark)
    + PEN_GLOW * pen * ink + HOVER_GLOW * hov * max(ink, 0.3);
  gl_FragColor = vec4(c * a * fl * uMul, min(1.0, a * uMul * (1.0 + 0.35 * (fl - 1.0))));
}
`;function vn(e=2654435769){let n=e>>>0;return()=>{n|=0,n=n+1831565813|0;let a=Math.imul(n^n>>>15,1|n);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}function hn(e,n,{span:a=1.44,drift:m=.42,cap:v=.62,wick:d=.16,PULL:h=.12}={}){const u=vn(e);let i=0;const M=[],b=()=>{const f=i;i+=(u()-.5)*m-i*h,i=Math.max(-v,Math.min(v,i));const E=i;return{open:f,close:E,lo:Math.min(f,E)-u()*d,hi:Math.max(f,E)+u()*d}};for(let f=0;f<n;f++)M.push(b());let p=1/0,x=-1/0;for(const f of M)p=Math.min(p,f.lo),x=Math.max(x,f.hi);const g=(p+x)/2,y=a/(x-p),c=a/2*1.08,t=c*.72,r=f=>{const E=(f-g)*y,R=Math.abs(E);return R<=t?E:Math.sign(E)*(t+(c-t)*Math.tanh((R-t)/(c-t)))},o=f=>({open:r(f.open),close:r(f.close),lo:r(f.lo),hi:r(f.hi)});return{series:M.map(o),next:()=>o(b())}}function mn(e,n,{even:a=0,stat:m=140,...v}={}){const d=hn(e,Math.min(n,14),v),h=d.series.slice();for(;h.length<n;)h.push(d.next());if(a<=0)return h;const u=h.map(t=>Math.abs(t.close-t.open)/2),i=h.map(t=>t.hi-Math.max(t.open,t.close)),M=h.map(t=>Math.min(t.open,t.close)-t.lo),b=Math.max(1,Math.min(m,h.length)),p=t=>t.slice(0,b).reduce((r,o)=>r+o,0)/b,x=p(u),g=p(i),y=p(M),c=(t,r)=>r+(t-r)*(1-a);return h.map((t,r)=>{const o=(t.open+t.close)/2,f=Math.max(c(u[r],x),0),E=t.close>=t.open?1:-1,R=o-E*f,s=o+E*f;return{open:R,close:s,hi:Math.max(R,s)+Math.max(c(i[r],g),0),lo:Math.min(R,s)-Math.max(c(M[r],y),0)}})}const dn=.3,pn=1200,ht=3.2,gn=1129270355,xn=1.35,Ht=5,pt=3,ct=.1,St=14,fe=6,yn=1,Nt=.055,wn=.06,bn=.42,gt=.08;function Vt(e,n,a,m,v,d,h,u,i,M,b,p,x){const g=[n,a,m,n,m,v],y=[[d,h],[u,h],[u,i],[d,h],[u,i],[d,i]];for(let c=0;c<6;c++)e.pos.push(...g[c]),e.uv.push(...y[c]),e.fill.push(M),e.base.push(b),e.top.push(p),e.rank.push(...x)}function ut(e,n,a,m,v,d,h,u,i,M,b=St,p=fe,x=!1){const g=a-d,y=a+d,c=(t,r,o)=>{const f=t/b*Math.PI*2;return[n+Math.cos(f)*r,o,m+Math.sin(f)*r]};for(let t=0;t<b;t++)for(let r=0;r<p;r++){const o=g+(y-g)*(r/p),f=g+(y-g)*((r+1)/p);Vt(e,c(t,v,o),c(t+1,v,o),c(t+1,v,f),c(t,v,f),t,r,t+1,r+1,h,u,i,M)}if(x)for(const t of[g,y])for(let r=0;r<b;r++)for(let o=0;o<pt;o++){const f=ct+(1-ct)*(o/pt),E=ct+(1-ct)*((o+1)/pt);Vt(e,c(r,v*f,t),c(r+1,v*f,t),c(r+1,v*E,t),c(r,v*E,t),r,o,r+1,o+1,h,u,i,M)}}function Wt(e,n,a){const m={pos:[],uv:[],fill:[],base:[],top:[],rank:[]},d=e.close>=e.open?wn:bn;if(e.hi-e.lo<gt){const y=(e.hi+e.lo)/2;e={...e,lo:y-gt/2,hi:y+gt/2}}const u=a*.13,i=Math.min(e.open,e.close),M=Math.max(e.open,e.close),b=Math.max((M-i)/2,a*.55),p=(i+M)/2,x=Math.min(e.lo,p-b),g=Math.max(e.hi,p+b);e.hi>M&&ut(m,n,(e.hi+M)/2,0,u,(e.hi-M)/2,d,x,g,[1,0],Ht,1),i>e.lo&&ut(m,n,(i+e.lo)/2,0,u,(i-e.lo)/2,d,x,g,[1,0],Ht,1),ut(m,n,p,0,a,b,d,x,g,[0,0],St,fe,!0);for(const y of[-1,1])ut(m,n,p+y*(b-Nt*a*.5),0,a*yn,Nt*a*.5,d,x,g,[0,1],St,1);return m}function An(){const e=mn(gn,pn,{span:xn,even:dn}),n=ht/Z,a=n*.4,m=t=>-ht/2+n*(t+.5),d=Wt(e[0],m(0),a).pos.length/3,h=d*z,u={pos:new Float32Array(h*3),uv:new Float32Array(h*2),fill:new Float32Array(h),base:new Float32Array(h),top:new Float32Array(h),slot:new Float32Array(h),rank:new Float32Array(h*2)},i=(t,r)=>{if(r.pos.length/3!==d)throw new Error("свеча иной топологии");u.pos.set(r.pos,t*d*3),u.uv.set(r.uv,t*d*2),u.fill.set(r.fill,t*d),u.base.set(r.base,t*d),u.top.set(r.top,t*d),u.rank.set(r.rank,t*d*2),u.slot.fill(t,t*d,(t+1)*d)},M=new Array(z).fill(-1),b=new Float32Array(z*6),p=(t,r)=>{let o=1/0,f=1/0,E=1/0,R=-1/0,s=-1/0,l=-1/0;for(let w=0;w<r.length;w+=3){const A=r[w],C=r[w+1],S=r[w+2];A<o&&(o=A),A>R&&(R=A),C<f&&(f=C),C>s&&(s=C),S<E&&(E=S),S>l&&(l=S)}b.set([o,f,E,R,s,l],t*6)},x=new Float32Array(z*2),g=t=>{const r=t%z;if(M[r]===t)return!1;const o=e[Math.min(t,e.length-1)],f=Wt(o,m(t),a);return i(r,f),p(r,f.pos),x[r*2]=m(t),x[r*2+1]=(o.hi+o.lo)/2,M[r]=t,!0};for(let t=0;t<=Z;t++)g(t);const y=new mt;y.setAttribute("position",new O(u.pos,3)),y.setAttribute("aUv",new O(u.uv,2)),y.setAttribute("aFill",new O(u.fill,1)),y.setAttribute("aBase",new O(u.base,1)),y.setAttribute("aTop",new O(u.top,1)),y.setAttribute("aSlot",new O(u.slot,1)),y.setAttribute("aRank",new O(u.rank,2)),console.log(`[cfig] лента свечей: ${h/3} треугольников, шаг ${d} вершин`);const c=["position","aUv","aFill","aBase","aTop","aSlot","aRank"];return{geo:y,step:n,maxGen:Math.max(0,e.length-Z-2),slotAt:t=>u.slot[t],axisOf:(t,r)=>r.set(x[t*2],x[t*2+1],0),stride:d,boxOf:(t,r)=>{const o=t*6;return r.min.set(b[o],b[o+1],b[o+2]),r.max.set(b[o+3],b[o+4],b[o+5]),r},sync(t){let r=!1;for(let o=0;o<=Z;o++)r=g(t+o)||r;if(r){for(const o of c)y.getAttribute(o).needsUpdate=!0;y.computeBoundingSphere()}return{head:(t+Z)%z,tail:t%z}}}}const Mn=1.1,En=1.5,Rn=.7,_n=.9,$t=1.1,Bt=6,xt=.34,Tn=.12,I={x:0,y:0,sx:0,sy:0,px:0,py:0,v:0,on:!1};let Y=-1,yt=0;const tt=new Float32Array(z),ft=new Float32Array(z*2);let zt=!1;const Ct=new Te,Kt=new et,at=new dt,Xt=new Ie,jt=new Le,Ln=new ae,st=[];function In(e,n){jt.copy(e.matrixWorld).invert(),Xt.copy(Ct.ray).applyMatrix4(jt);const a=e.geometry;let m=null;for(let v=0;v<z;v++)Xt.intersectsBox(n.boxOf(v,Ln))&&(a.setDrawRange(v*n.stride,n.stride),st.length=0,Ct.intersectObject(e,!1,st),st.length&&(!m||st[0].distance<m.distance)&&(m=st[0]));return a.setDrawRange(0,1/0),m}function Sn(){zt||(zt=!0,addEventListener("pointermove",e=>{e.pointerType&&e.pointerType!=="mouse"||(I.x=e.clientX/innerWidth*2-1,I.y=-(e.clientY/innerHeight*2-1),I.on||(I.sx=I.x,I.sy=I.y),I.on=!0)},{passive:!0}),addEventListener("pointerout",e=>{e.relatedTarget||(I.on=!1)},{passive:!0}),addEventListener("blur",()=>{I.on=!1}))}function Cn(e,n,a,m,v,d){const h=e.material.uniforms;let u=-1,i=1e9;if(I.on&&!ce.matches&&d>.005){e.updateMatrixWorld(),Kt.set(I.x,I.y),Ct.setFromCamera(Kt,a);const g=In(e,n);if(g&&g.face)u=n.slotAt(g.face.a),i=0;else{for(let y=0;y<z;y++){n.axisOf(y,at),e.localToWorld(at),at.project(a);const c=(at.x-I.x)*m.aspect,t=at.y-I.y,r=Math.sqrt(c*c+t*t);r<i&&(i=r,u=y)}i>xt&&(u=-1)}}Y=u;const M=i<=0?1:Math.max(0,Math.min(1,(xt-i)/(xt-Tn))),b=Y>=0?M*M*(3-2*M):0;if(v>=.001){const g=(I.x-I.px)/v,y=(I.y-I.py)/v;I.px=I.x,I.py=I.y;const c=Math.sqrt(g*g+y*y);I.v+=(c-I.v)*Math.min(1,v*12)}const p=Math.min(1,I.v/En)*Rn;for(let g=0;g<z;g++){const y=g===Y?b:0,c=y>tt[g]?Mn:_n;let t=tt[g]+(y-tt[g])*Math.min(1,v*c);g===Y&&(t=Math.max(t,b*p)),tt[g]=t}const x=Y>=0?1:0;return yt+=(x-yt)*Math.min(1,v*(x?$t:$t*3)),I.sx+=(I.x-I.sx)*Math.min(1,v*Bt),I.sy+=(I.y-I.sy)*Math.min(1,v*Bt),Y>=0&&(ft[Y*2]=I.sx,ft[Y*2+1]=I.sy),h.uLit.value=tt,h.uLitAt.value=ft,h.uHoverSpread.value=yt,h.uAspect.value=m.aspect,Y}const Pn=15,Ut=.5,Fn=70;function On(e,n){const a=e.getAttribute("position"),m=a.count,v=Math.floor(m/3),d=new Float32Array(v*3),h=c=>`${Math.round(a.getX(c)*1e4)},${Math.round(a.getY(c)*1e4)},${Math.round(a.getZ(c)*1e4)}`,u=(c,t)=>{const r=h(c),o=h(t);return r<o?`${r}|${o}`:`${o}|${r}`};for(let c=0;c<v;c++){const t=c*3,r=a.getX(t),o=a.getY(t),f=a.getZ(t),E=a.getX(t+1)-r,R=a.getY(t+1)-o,s=a.getZ(t+1)-f,l=a.getX(t+2)-r,w=a.getY(t+2)-o,A=a.getZ(t+2)-f;let C=R*A-s*w,S=s*l-E*A,_=E*w-R*l;const T=Math.hypot(C,S,_)||1;d[c*3]=C/T,d[c*3+1]=S/T,d[c*3+2]=_/T}const i=[2,0,1],M=new Map;for(let c=0;c<v;c++)for(let t=0;t<3;t++){const r=u(c*3+t,c*3+(t+1)%3),o=M.get(r);o?o.push({t:c,e:t}):M.set(r,[{t:c,e:t}])}const b=Math.cos(n*Math.PI/180),p=new Float32Array(m*3);for(let c=0;c<v;c++)for(let t=0;t<3;t++){const r=M.get(u(c*3+t,c*3+(t+1)%3));let o=r.length<2,f=1;for(const E of r){if(E.t===c)continue;const R=d[c*3]*d[E.t*3]+d[c*3+1]*d[E.t*3+1]+d[c*3+2]*d[E.t*3+2];if(R<b){o=!0;const s=Math.acos(Math.max(-1,Math.min(1,R)))*180/Math.PI;f=Math.min(f,Ut+(1-Ut)*Math.min(1,Math.max(0,(s-n)/(Fn-n))))}}if(o)for(let E=0;E<3;E++)p[(c*3+E)*3+i[t]]=f}const x=new Float32Array(m*3),g=new Float32Array(m*3),y=new Float32Array(m*3);for(let c=0;c<v;c++){const t=c*3;for(let r=0;r<3;r++)for(let o=0;o<3;o++)x[(t+r)*3+o]=a.getComponent(t,o),g[(t+r)*3+o]=a.getComponent(t+1,o),y[(t+r)*3+o]=a.getComponent(t+2,o)}return e.setAttribute("aV0",new O(x,3)),e.setAttribute("aV1",new O(g,3)),e.setAttribute("aV2",new O(y,3)),e.setAttribute("aHard",new O(p,3)),e}const Yt={box:{x0:111.9,x1:888.1,y0:221.3},path:(e,n)=>{e.moveTo(...n(888.1,221.3)),e.lineTo(...n(250.6,221.3)),e.bezierCurveTo(...n(174.3,221.3),...n(112.3,283),...n(111.9,359.3)),e.lineTo(...n(369.9,359.3)),e.lineTo(...n(497.7,778.6)),e.lineTo(...n(628.8,359.3)),e.lineTo(...n(749.4,359.3)),e.bezierCurveTo(...n(825.7,359.3),...n(887.7,297.6),...n(888.1,221.3))}};function Gn(e){const n=new DataView(e).getUint32(0,!0),a=new Float32Array(e,4,n*3);let m=-1/0;for(let s=2;s<a.length;s+=3)a[s]>m&&(m=a[s]);const v=[];for(let s=0;s<n/3;s++){const l=s*9,w=a[l+3]-a[l],A=a[l+4]-a[l+1],C=a[l+5]-a[l+2],S=a[l+6]-a[l],_=a[l+7]-a[l+1],T=a[l+8]-a[l+2],k=A*T-C*_,L=C*S-w*T,P=w*_-A*S,D=Math.hypot(k,L,P)||1;P/D>.98&&v.push([[a[l],a[l+1]],[a[l+3],a[l+4]],[a[l+6],a[l+7]]])}const d=s=>`${Math.round(s[0]*1e4)},${Math.round(s[1]*1e4)}`,h=new Map;for(const s of v)for(let l=0;l<3;l++){const w=s[l],A=s[(l+1)%3],C=d(w)<d(A)?`${d(w)}|${d(A)}`:`${d(A)}|${d(w)}`,S=h.get(C);S?S.push([w,A]):h.set(C,[[w,A]])}const u=[];for(const s of h.values())s.length===1&&u.push(s[0]);const i=[];{const s=new Map;for(const[w,A]of u)s.set(d(w),[A,w]);let l=u[0][0];for(let w=0;w<u.length;w++){i.push(l);const A=s.get(d(l));if(!A)break;l=A[0]}}const M=Math.cos(55*Math.PI/180);{const s=A=>{const C=i[(A+i.length-1)%i.length],S=i[A],_=i[(A+1)%i.length],T=[S[0]-C[0],S[1]-C[1]],k=[_[0]-S[0],_[1]-S[1]],L=Math.hypot(T[0],T[1])||1,P=Math.hypot(k[0],k[1])||1;return(T[0]*k[0]+T[1]*k[1])/(L*P)},l=i.map((A,C)=>s(C)>M),w=[];for(let A=0;A<i.length;A++){const C=i[(A+i.length-1)%i.length],S=i[A],_=i[(A+1)%i.length],T=i[(A+2)%i.length];if(w.push(S),!l[A]||!l[(A+1)%i.length])continue;const k=Math.sqrt(Math.hypot(S[0]-C[0],S[1]-C[1]))||1e-4,L=Math.sqrt(Math.hypot(_[0]-S[0],_[1]-S[1]))||1e-4,P=Math.sqrt(Math.hypot(T[0]-_[0],T[1]-_[1]))||1e-4,D=0,F=D+k,H=F+L,$=H+P,W=(B,j,Q)=>[B[0]+(j[0]-B[0])*Q,B[1]+(j[1]-B[1])*Q],K=6;for(let B=1;B<K;B++){const j=F+(H-F)*B/K,Q=W(C,S,(j-D)/(F-D)),Dt=W(S,_,(j-F)/(H-F)),ge=W(_,T,(j-H)/($-H)),xe=W(Q,Dt,(j-D)/(H-D)),ye=W(Dt,ge,(j-F)/($-F));w.push(W(xe,ye,(j-F)/(H-F)))}}i.length=0,i.push(...w)}const b=(s,l,w)=>(l[0]-s[0])*(w[1]-s[1])-(l[1]-s[1])*(w[0]-s[0]),p=(s,l,w,A)=>b(s,l,A)>=0&&b(l,w,A)>=0&&b(w,s,A)>=0;{let s=0;for(let l=0;l<i.length;l++){const w=i[l],A=i[(l+1)%i.length];s+=(A[0]-w[0])*(A[1]+w[1])}s>0&&i.reverse()}{const l=[];for(const w of i){const A=l[l.length-1];(!A||Math.hypot(w[0]-A[0],w[1]-A[1])>2e-4)&&l.push(w)}for(;l.length>3&&Math.hypot(l[0][0]-l[l.length-1][0],l[0][1]-l[l.length-1][1])<=2e-4;)l.pop();i.length=0,i.push(...l)}const x=[];{const s=i.map((_,T)=>T),l=_=>i[_];let w=s.length*s.length;for(;s.length>2&&w-- >0;){let _=!1;for(let T=0;T<s.length;T++){const k=s[(T+s.length-1)%s.length],L=s[T],P=s[(T+1)%s.length];if(b(l(k),l(L),l(P))<=0)continue;let D=!0;for(const F of s)if(!(F===k||F===L||F===P)&&p(l(k),l(L),l(P),l(F))){D=!1;break}if(D){x.push([k,L,P]),s.splice(T,1),_=!0;break}}if(!_)break}const A=(_,T)=>_<T?`${_}|${T}`:`${T}|${_}`,C=(_,T,k,L)=>{const P=_[0]-L[0],D=_[1]-L[1],F=T[0]-L[0],H=T[1]-L[1],$=k[0]-L[0],W=k[1]-L[1];return(P*P+D*D)*(F*W-H*$)-(F*F+H*H)*(P*W-D*$)+($*$+W*W)*(P*H-D*F)>1e-12},S=new Set;for(let _=0;_<i.length;_++)S.add(A(_,(_+1)%i.length));for(let _=0;_<8;_++){const T=new Map;for(let L=0;L<x.length;L++){const[P,D,F]=x[L];for(const[H,$]of[[P,D],[D,F],[F,P]]){const W=A(H,$),K=T.get(W);K?K.push(L):T.set(W,[L])}}let k=0;for(const[L,P]of T){if(P.length!==2||S.has(L))continue;const[D,F]=P,[H,$]=L.split("|").map(Number),W=j=>x[j].find(Q=>Q!==H&&Q!==$),K=W(D),B=W(F);K===void 0||B===void 0||C(l(H),l(K),l($),l(B))&&(b(l(K),l(H),l(B))<=0||b(l(B),l($),l(K))<=0||(x[D]=[K,H,B],x[F]=[B,$,K],k++))}if(!k)break}for(let _=0;_<x.length;_++)x[_]=x[_].map(T=>i[T])}const g={pos:[],uv:[],cap:[]};let y=1;const c=(s,l)=>{g.pos.push(s[0],s[1],l),g.uv.push(s[0],s[1]),g.cap.push(y)},t=m,r=x.length>v.length/2?x:v;for(const[s,l,w]of r)c(s,t),c(l,t),c(w,t),c(s,-t),c(w,-t),c(l,-t);y=0;for(let s=0;s<i.length;s++){const l=i[s],w=i[(s+1)%i.length];c(l,t),c(w,-t),c(w,t),c(l,t),c(l,-t),c(w,-t)}const o=g.pos.length/3,f=new mt;f.setAttribute("position",new O(new Float32Array(g.pos),3)),f.setAttribute("aUv",new O(new Float32Array(g.uv),2)),f.setAttribute("aCap",new O(new Float32Array(g.cap),1)),f.setAttribute("aFill",new O(new Float32Array(o).fill(.16),1));let E=1/0,R=-1/0;for(let s=1;s<g.pos.length;s+=3)g.pos[s]<E&&(E=g.pos[s]),g.pos[s]>R&&(R=g.pos[s]);return f.setAttribute("aBase",new O(new Float32Array(o).fill(E),1)),f.setAttribute("aTop",new O(new Float32Array(o).fill(R),1)),f.setAttribute("aSlot",new O(new Float32Array(o),1)),f.setAttribute("aRank",new O(new Float32Array(o*2),2)),f.computeBoundingSphere(),f.userData.depth=t,f.userData.loop=i,f}function Dn(e,n,a,m){const v=e.length,d=[],h=[],u=[],i=[],M=[];for(let y=0;y<v;y++){const c=e[y],t=e[(y+1)%v],r=[c[0],c[1],m],o=[t[0],t[1],m],f=[[0,-1],[0,1],[1,1],[0,-1],[1,1],[1,-1]];for(const[E,R]of f)d.push(...E?o:r),h.push(...r),u.push(...o),i.push(R),M.push(E)}const b=d.length/3,p=new mt,x=y=>new O(new Float32Array(b).fill(y),1);p.setAttribute("position",new O(new Float32Array(d),3)),p.setAttribute("aV0",new O(new Float32Array(h),3)),p.setAttribute("aV1",new O(new Float32Array(u),3)),p.setAttribute("aV2",new O(new Float32Array(h),3)),p.setAttribute("aSide",x(0)),p.getAttribute("aSide").array.set(i),p.setAttribute("aEnd",x(0)),p.getAttribute("aEnd").array.set(M);const g=new Float32Array(b*3);for(let y=0;y<b;y++)g[y*3+2]=1;return p.setAttribute("aHard",new O(g,3)),p.setAttribute("aCap",x(1)),p.setAttribute("aUv",new O(new Float32Array(b*2),2)),p.setAttribute("aFill",x(0)),p.setAttribute("aBase",x(n)),p.setAttribute("aTop",x(a)),p.setAttribute("aSlot",x(0)),p.setAttribute("aRank",new O(new Float32Array(b*2),2)),p.computeBoundingSphere(),p}function kn(e){const n=e.userData.depth;if(!n)return e;const a=e.getAttribute("position"),m=e.getAttribute("aHard"),v=h=>a.getZ(h)<-n+1e-4,d=[2,0,1];for(let h=0;h<a.count/3;h++){const u=h*3;for(let i=0;i<3;i++)if(v(u+i)&&v(u+(i+1)%3))for(let M=0;M<3;M++)m.setComponent(u+M,d[i],-Math.abs(m.getComponent(u+M,d[i])))}return m.needsUpdate=!0,e}const Hn="/data/letter-t.bin",Nn=.9,Vn=.3,Wn=.25,qt=.6,$n=1.1,Pt={near:1,far:2.6},lt={size:.62,yaw:-.22,tilt:.05,roll:0},it=new dt,Zt=.55;let Qt=null;const Bn=1.13,zn=650,Kn=.6,Xn=.75,jn=e=>.6*e+.4*e*e*(3-2*e),Jt=e=>e*e*(3-2*e),te=new Ft,wt=new Ft,ee=new Ft,bt=new Fe,Un=.6,Yn=e=>{const n=e.material.clone();return n.uniforms.uHead.value=0,n.uniforms.uTail.value=-1,n.uniforms.uGone.value=0,n.uniforms.uAlpha.value=0,n.uniforms.uGrow.value=0,n.uniforms.uDepth.value.set(1e3,1e4),n.defines={...n.defines||{},EDGES:1,TE2:1},n.uniforms.uEdges.value=1,n.needsUpdate=!0,n.uniforms.uGlass.value=Nn,n.uniforms.uEdgeFace.value=1,n};function qn(e,n){const a=Yn(e.mesh),m=new J(kn(On(n,Pn)),a),v=h=>{const u=a.clone();return u.defines&&delete u.defines.TE2,u.uniforms=Object.assign({},a.uniforms,h.uniforms),u.side=ot,u.depthWrite=!1,delete h.uniforms,Object.assign(u,h),u};{const h=v({uniforms:{uGlow:{value:Vn},uMul:{value:1}},side:ot,depthTest:!1,blending:Rt,blendSrc:rt,blendDst:rt}),u=new J(m.geometry,h);u.renderOrder=-2,u.frustumCulled=!1,m.add(u)}const d=m.geometry.userData.loop;{a.uniforms.uEdges.value=0;const h=m.geometry.boundingSphere,u=h.center.y-h.radius,i=h.center.y+h.radius,M=m.geometry.userData.depth,b=(g,y,c)=>{const t=v(Object.assign({uniforms:{uMul:{value:y}}},c));t.defines={...t.defines||{},EDGES:1,RIBBON:1},t.uniforms.uEdges.value=1,t.needsUpdate=!0;const r=new J(Dn(d,u,i,g),t);return r.frustumCulled=!1,r},p=b(-M,Wn,{depthTest:!1,blending:Rt,blendSrc:rt,blendDst:rt});p.renderOrder=-1,m.add(p);const x=b(M,1,{depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});x.renderOrder=1,m.add(x)}{const h=a.clone();h.uniforms=a.uniforms,h.colorWrite=!1,h.depthWrite=!0,h.side=ot;const u=new J(m.geometry,h);u.renderOrder=-1,u.frustumCulled=!1,m.add(u),a.depthWrite=!1,a.side=ot}{const h=m.geometry.userData.loop,u=m.geometry.userData.depth,i=Math.min(...h.map(r=>r[0])),M=Math.max(...h.map(r=>r[0])),b=Math.max(...h.map(r=>r[1])),p=Yt.box,x=(M-i)/(p.x1-p.x0),g=(i+M)/2,y=(r,o)=>[g+(r-(p.x0+p.x1)/2)*x,b-(o-p.y0)*x],c=new Se;Yt.path(c,y);const t=new Ce(c,32);t.translate(0,0,u+.002),e.letterSolid=new J(t,new Pe({color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:ot,toneMapped:!1})),e.letterSolid.renderOrder=3,e.letterSolid.frustumCulled=!1,e.letterSolid.visible=!1,m.add(e.letterSolid)}m.frustumCulled=!1,m.visible=!1,e.letter=m,e.stage.add(m),e.uniList=null}let At=!1;function Zn(e,n){At||e.letter||(At=!0,fetch(Hn).then(a=>a.ok?a.arrayBuffer():Promise.reject(new Error(a.status))).then(a=>{qn(e,Gn(a)),n()}).catch(a=>{At=!1,console.warn("[cfig] знак Tronexo не загрузился:",a.message)}))}function Qn(e,n,a,m){const v=e.letter;if(Qt??=le("--accent-section","#00e799"),v&&(v.visible=n>.004,v.visible||(Tt(0,0,0),Lt(0),It(0)),v.visible)){const d=v.material.uniforms,h=we(be()),u=Ae(),i=vt*(a?ue:1)*n*u,M=window.innerHeight||1,b=Me(),p=Math.max(0,Math.min(1,(b-Bn*M)/zn)),x=jn(p),g=Jt(Math.min(1,p/Kn)),y=Jt(Math.min(1,p/Xn));d.uAlpha.value=i*(1-g),d.uGrow.value=n*n*(3-2*n),d.uTime.value=e.mesh.material.uniforms.uTime.value,v.scale.setScalar(m*lt.size),v.position.set(0,0,0);const c=e.lens.position.distanceTo(v.position);v.position.set(0,0,-h*qt*c);const t=1/(1+h*qt);d.uLinePx.value=Math.max($n,Ot*t),bt.set(lt.tilt,lt.yaw,lt.roll),y>0?(te.setFromEuler(bt),e.lens.getWorldQuaternion(wt),v.parent.getWorldQuaternion(ee),wt.premultiply(ee.invert()),v.quaternion.slerpQuaternions(te,wt,y)):v.rotation.copy(bt);const r=v.geometry.boundingSphere.radius*v.scale.x,o=e.lens.position.distanceTo(v.position);d.uDepth.value.set(o-r*Pt.near,o+r*Pt.far),it.set(0,v.geometry.boundingSphere.center.y-v.geometry.boundingSphere.radius,0),v.localToWorld(it),it.project(e.lens);const f=Math.max(0,Math.min(1,i/vt));e.letterSolid&&(e.letterSolid.material.opacity=x*f,e.letterSolid.visible=x*f>.001);for(const R of v.children)R!==e.letterSolid&&(R.visible=g<.999);v.material.visible=g<.999,Tt((it.x*.5+.5)*window.innerWidth,(.5-it.y*.5)*window.innerHeight,d.uGrow.value*f*(1-Un*h));const E=Math.max(0,Math.min(1,(h-Zt)/(1-Zt)));Lt(E*E*(3-2*E)*f*(1-x),Qt),It(x*f)}}function Jn(e){Tt(0,0,0),Lt(0),It(0),e.letter&&(e.letter.visible=!1)}const V=3,to=.55,eo=.4,nt=8,no=new _t;function oo(e,n){const a=new Oe({vertexShader:`
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
      // Угол плитки в пикселях кадра и сводимая часть кадра: x0, y0,
      // x1, y1 (2026-11-12, аудит, п. 2). Вне неё пиксель не трогаем:
      // там буфер пуст, а пустой слой при этом смешении кадр не меняет.
      uniform vec2 uTile;
      uniform vec4 uClip;
      varying vec2 vUv;
      void main() {
        vec2 fc = gl_FragCoord.xy;
        if (fc.x < uClip.x || fc.y < uClip.y || fc.x >= uClip.z || fc.y >= uClip.w) discard;
        vec2 px = fc - uTile;
        vec4 sum = vec4(0.0);
        for (int i = 0; i < ${V}; i++) {
          for (int j = 0; j < ${V}; j++) {
            vec2 o = (vec2(float(i), float(j)) + 0.5) / ${G(V)} - 0.5;
            sum += texture2D(uTex, (px + o) * ${G(V)} * uTexel);
          }
        }
        gl_FragColor = sum / ${G(V*V)};
      }
    `,uniforms:{uTex:{value:null},uTexel:{value:new et},uTile:{value:new et},uClip:{value:new De}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Rt,blendSrc:rt,blendDst:Ge}),m=new mt;m.setAttribute("position",new O(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const v=new J(m,a);v.frustumCulled=!1;const d=new se;d.add(v);const h=new ke,u=new et;let i=null,M=null,b=1,p=1;const x=()=>(n.uniList||(n.uniList=[],n.stage.traverse(o=>{const f=o.material&&o.material.uniforms;f&&(f.uPx||f.uRes||f.uOrg)&&n.uniList.push(f)})),n.uniList),g=o=>{for(const f of x())f.uPx&&(f.uPx.value=o),f.uRes&&f.uRes.value.set(u.x*o,u.y*o)},y=(o,f)=>{for(const E of x())E.uOrg&&E.uOrg.value.set(o,f)},c=new ae,t=new dt,r=(o,f)=>{n.letter.updateMatrixWorld(!0),n.lens.updateMatrixWorld(),c.setFromObject(n.letter);let E=1/0,R=1/0,s=-1/0,l=-1/0;for(let _=0;_<8;_++){if(t.set(_&1?c.max.x:c.min.x,_&2?c.max.y:c.min.y,_&4?c.max.z:c.min.z),t.applyMatrix4(n.lens.matrixWorldInverse),t.z>-n.lens.near)return[0,0,o,f];t.applyMatrix4(n.lens.projectionMatrix),E=Math.min(E,t.x),s=Math.max(s,t.x),R=Math.min(R,t.y),l=Math.max(l,t.y)}const w=Math.max(0,Math.floor((E+1)*.5*o)-nt),A=Math.max(0,Math.floor((R+1)*.5*f)-nt),C=Math.min(o,Math.ceil((s+1)*.5*o)+nt),S=Math.min(f,Math.ceil((l+1)*.5*f)+nt);return[w,A,C,S]};e.scene.onAfterRender=o=>{if(n.letter&&!n.letterWarm){n.letterWarm=!0;const R=[];n.letter.traverse(s=>{R.push([s,s.visible,s.material&&s.material.visible]),s.visible=!0,s.material&&(s.material.visible=!0)});try{o.compile(n.stage,n.lens)}catch{}for(const[s,l,w]of R)s.visible=l,s.material&&(s.material.visible=w)}const f=o.autoClear;o.autoClear=!1;let E=!e.narrow&&document.body.dataset.route==="tronexo";if(E){if(o.getDrawingBufferSize(u),!M){const R=o.getContext(),s=R.getParameter(R.MAX_VIEWPORT_DIMS);M={side:Math.min(o.capabilities.maxTextureSize,R.getParameter(R.MAX_RENDERBUFFER_SIZE)),vw:s[0],vh:s[1]}}(u.x*V>M.vw||u.y*V>M.vh)&&(E=!1)}if(E){const R=u.x,s=u.y,l=Math.floor(M.side/V);b=Math.ceil(s*to)+2*nt,p=Math.ceil(s*eo)+2*nt,b=Math.max(1,Math.min(R,l,b)),p=Math.max(1,Math.min(s,l,p));const w=b*V,A=p*V;if(i)(i.width!==w||i.height!==A)&&i.setSize(w,A);else{i=new He(w,A,{depthBuffer:!0});const C=o.getRenderTarget();o.setRenderTarget(i),o.clear(!0,!0,!1),o.setRenderTarget(C)}}else i&&(i.dispose(),i=null);if(E&&n.letter&&n.letter.visible){const R=n.mesh.visible?null:r(u.x,u.y),s=R?R[0]:0,l=R?R[1]:0,w=R?R[2]:u.x,A=R?R[3]:u.y,C=s,S=l,_=o.getRenderTarget(),T=o.getClearColor(no),k=o.getClearAlpha();g(V);for(let L=S;L<A;L+=p)for(let P=C;P<w;P+=b){const D=Math.max(P,s),F=Math.max(L,l),H=Math.min(P+b,w),$=Math.min(L+p,A);i.viewport.set(-P*V,-L*V,u.x*V,u.y*V),y(P*V,L*V),o.setRenderTarget(i),o.setClearColor(0,0),o.clear(!0,!0,!1),o.render(n.stage,n.lens),o.setRenderTarget(_),o.setClearColor(T,k),a.uniforms.uTex.value=i.texture,a.uniforms.uTexel.value.set(1/i.width,1/i.height),a.uniforms.uTile.value.set(P,L),a.uniforms.uClip.value.set(D,F,H,$),o.render(d,h)}y(0,0),g(1)}else o.render(n.stage,n.lens);o.autoClear=f}}const ve="__cfigScene",he=globalThis.__cfigTest?.drift??null,ao=he===0,so=.62,io=140,ro=.1;let ne=0,oe=0;const lo=7,co=he||1/lo,uo=-.85,fo=0,vo=.7,ho=.319,mo=.07,po=.42,go=.34,me=30,Mt=new dt,N={mesh:null,band:null,lens:null,stage:null,letter:null,letterSolid:null,uniList:null,letterWarm:!1};let Et=0,q=null,U=0,X=null;function Lo(){const e=window[ve]?.ready;e&&e.then(n=>{!n?.ready||document.body.dataset.route!=="tronexo"||(xo(n),yo(n))})}function xo(e){if(q=e,!N.mesh){const n=new Ne({vertexShader:un,fragmentShader:fn,transparent:!0,depthWrite:!0,side:ot,extensions:{derivatives:!0},uniforms:{uFill:{value:new _t(.03,.11,.14)},uLine:{value:new _t().setRGB(...le("--accent-section","#00E799"),Ve)},uAlpha:{value:vt},uInkAvg:{value:Ke},uDepth:{value:new et(0,1)},uHead:{value:Z},uTail:{value:0},uGrow:{value:1},uGone:{value:0},uTime:{value:0},uLit:{value:tt},uLitAt:{value:ft},uHoverSpread:{value:0},uCell:{value:1},uFillMul:{value:1},uRim:{value:0},uEdges:{value:0},uGlass:{value:0},uEdgeFace:{value:0},uGlow:{value:0},uGlowPath:{value:Xe},uMul:{value:1},uPx:{value:1},uLinePx:{value:Ot},uRes:{value:new et(1,1)},uOrg:{value:new et(0,0)},uAspect:{value:1}}});N.band=An(),N.mesh=new J(N.band.geo,n),N.mesh.frustumCulled=!1}N.stage||(N.stage=new se,N.lens=new We(me,1,.1,100),N.stage.add(N.mesh),oo(q,N),window.__cfigChart={mesh:N.mesh,stage:N.stage,lens:N.lens,band:N.band,letter:N.letter,hover:{slot:-1,lit:tt},pose:lt,depth:Pt},q.renderer.domElement.addEventListener("webglcontextlost",pe)),Zn(N,()=>{window.__cfigChart&&(window.__cfigChart.letter=N.letter),X?.()}),Sn()}function Gt(e){const{mesh:n,band:a,lens:m}=N,v=document.body.dataset.route==="tronexo";if(n.visible=v,q.points&&(q.points.visible=!v),q.lines&&(q.lines.visible=!v),!v){Jn(N);return}const d=Math.min(ro,Math.max(0,(e-oe)/1e3));oe=e,ce.matches||(ne+=d);const h=ao?0:ne*co,u=Math.min(h+kt()/io,a.maxGen),i=Math.floor(u),M=u-i,b=a.sync(i),p=n.material.uniforms;p.uHead.value=b.head,p.uTail.value=b.tail,p.uGrow.value=M*M*(3-2*M),p.uGone.value=Math.min(1,M*1.18),Et=u*a.step;const x=q.camera,g=Math.tan(x.fov*Math.PI/360)*x.position.z,y=g*x.aspect,c=!!q.narrow;m.aspect=x.aspect,m.position.set(0,0,g/Math.tan(me*Math.PI/360)),m.updateProjectionMatrix(),m.updateMatrixWorld();const t=g*(c?po:vo);n.scale.setScalar(t),n.rotation.set(fo,uo,0);const r=Math.cos(n.rotation.y),o=Math.sin(n.rotation.y);n.position.set(y*(c?0:ho)-Et*r*t,g*(c?go:mo),Et*o*t);const f=Math.abs(o)*ht*t;Mt.set(-ht/2+a.step*(u+Z/2),0,0),n.localToWorld(Mt);const E=m.position.distanceTo(Mt);n.material.uniforms.uDepth.value.set(E-f*.45,E+f*so);const R=Ee(),s=Re(R),l=_e(R),w=Cn(n,a,m,x,d,s);window.__cfigChart.hover.slot=w,n.material.uniforms.uAlpha.value=vt*(c?ue:1)*s,n.visible=v&&s>.005,Qn(N,l,c,g),n.material.uniforms.uTime.value=kt()/tn}function de(e){U=0,Gt(e),document.body.dataset.route==="tronexo"&&(U=requestAnimationFrame(de))}function yo(e){if(e.reduced){X||(X=()=>{U||(U=requestAnimationFrame(wo))},addEventListener("scroll",X,{passive:!0}),addEventListener("resize",X,{passive:!0}),document.addEventListener("astro:after-swap",X)),X();return}U||(Gt(performance.now()),U=requestAnimationFrame(de))}function wo(e){if(U=0,Gt(e),document.body.dataset.route!=="tronexo"){pe();return}const n=window[ve]?.cloud;n?.visible&&n.render(e)}function pe(){U&&cancelAnimationFrame(U),U=0,X&&(removeEventListener("scroll",X),removeEventListener("resize",X),document.removeEventListener("astro:after-swap",X),X=null)}export{Lo as init};
