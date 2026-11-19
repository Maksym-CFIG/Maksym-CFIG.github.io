import{a as Lo}from"./Base.astro_astro_type_script_index_0_lang.D3EU_fwG.js";import"./preload-helper.BlTxHScW.js";import"./router.UeToN5xW.js";import"./scroll.Cxvh0_mC.js";const Mo=1.1,wo=.06,Uo=t=>t!=="map",Po=.34,go=4.6,dt=5,je=.55,Je=2.4,So=.4,Qe=.16,Do=.07,Ze=.72,Oo=5.5,to=2.2,eo=2.6,Io=.62,Wo=.1,oo=.62,No=Math.max(je/Je+Qe+Ze*4,to/eo+oo*3),Fo=6,bo=.5,Xo=.4,Co=0,ko=1,qo=.5,Ho=.82,$o=.5,zo="/assets/tronexo-word.svg",Go=1.1,Bo=.7,Ie=4,Wt={FOCAL:.62,ROLL:-.2,YAW:.22,CAM_Y:.75,CELL:.055},Qt=Wt.FOCAL,wt=Wt.ROLL,at=Wt.YAW,mt=Wt.CAM_Y,no=Wt.CELL,Yo=.055,Vo=.25,Ko=.1,Zt=.22,jo=.78,Jo=2,Qo=6,Zo=3,tn=2.6,en=0,on=.7,nn=22,rn=1.5,an=.012,sn=2.6,fn=.085,Ht=()=>document.body&&document.body.dataset.route==="realEstate"?"map":"",io=t=>!j(t),j=t=>t==="map",te=6,cn=520,xe=1.7,un=820,ln=120,he=310,_e=1.72,mn=-.4,Li=_e,En="#7d9dc0",Ae=globalThis.__cfigTest?.relief!==0,ro=42,Re=7500,ve=1,dn=24,fe=7,Tn=.62,pn=.29,xn=145,hn=globalThis.__cfigTest?.rellit??.75,_n=globalThis.__cfigTest?.relshadow??.45,An=34,Rn=8,vn=.0016,yn=.006,Ln="#e2b04a",Mn=.17,wn=10,Un=1.6,Pn=.42,We=t=>{const o=parseInt(t.replace("#",""),16);return`vec3(${(o>>16&255)/255}, ${(o>>8&255)/255}, ${(o&255)/255})`},gn=.35,Sn=.85,E=t=>Number.isInteger(t)?`${t}.0`:`${t}`,Dn=`
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`,On=t=>`#extension GL_OES_standard_derivatives : enable
precision highp float;

// ОТКЛИК НА КЛИК И ОБЪЁМ КАРТЫ объявляются ПЕРВЫМИ: ниже по нему заводятся унии, а дефайн,
// поставленный после них, для препроцессора всё равно что ноль.
#define TAPS ${io(t)?dt:0}
#define TAP_R ${E(je)}
#define TAP_SPEED ${E(Je)}
#define TAP_FILL ${E(So)}
#define TAP_JIT ${E(Qe)}
#define TAP_UP ${E(Do)}
#define TAP_DOWN ${E(Ze)}
#define TAP_GAIN ${E(Oo)}
#define RELIEF ${j(t)&&Ae?1:0}
#define REL_MAX_M ${E(ro)}
#define REL_WIN_M ${E(Re)}
#define REL_GAIN ${E(ve)}
#define REL_STEPS ${dn}
#define REL_FAR ${E(fe)}
#define REL_WALL ${E(Tn)}
#define REL_INK ${E(pn)}
#define REL_SUN ${E(xn*Math.PI/180)}
#define REL_LIT ${E(hn)}
#define REL_SHADOW ${E(_n)}
#define REL_SUNTAN ${E(Math.tan(An*Math.PI/180))}
#define REL_SHSTEPS ${Rn}
#define TAPW_R ${E(to)}
#define TAPW_SPEED ${E(eo)}
#define TAPW_W ${E(Io)}
#define TAPW_H ${E(Wo)}
#define TAPW_FADE ${E(oo)}
// ОТКЛИК КАРТЫ: волна по улицам и дом под курсором.
#define FXWAVE ${j(t)?1:0}
#define FXHOUSE ${j(t)?1:0}
#define WAVE_N ${te}
#define WAVE_SPEED ${E(cn)}
#define WAVE_LIFE ${E(xe)}
#define WAVE_R ${E(un)}
#define WAVE_TAIL ${E(ln)}

uniform vec2 uRes;
// Lens shift (Real Estate story): frame center moves by uLensY of height.
uniform float uLensY;
#define CEN (0.5 * uRes + vec2(0.0, uLensY * uRes.y))
uniform float uOffset;
uniform float uTime;
uniform vec3 uDot;
uniform float uDotA;
uniform vec3 uWash;
uniform sampler2D uNoise;
uniform vec3 uMouse;   // xy — курсор в пикселях кадра, z — сила отклика
// Радиус и высота холма. Унией, а не дефайном: их подбирают замером, а с
// дефайном каждая проба требовала бы пересборки шейдера.
uniform vec2 uLift;
// Пятно света под знаком: xy — точка в пикселях кадра, z — сила. Знак стоит
// над дорожкой и до сих пор с ней не был связан ничем: висел сам по себе.
uniform vec3 uSign;
uniform vec2 uPool;    // радиус пятна в единицах пола и его сила
// СЛОВО ИЗ ТОЧЕК: готовая маска, её место в кадре (xy — середина, zw —
// половина dimlineа, в пикселях кадра), сила проступания и цвет раздела.
uniform sampler2D uWord;
uniform sampler2D uCity;    // подложка города, один канал
#if RELIEF
// ПОЛЕ ВЫСОТ ГОРОДА, один канал: 0 — земля, 255 — REL_MAX_M метров.
// Отдельной картинкой и вчетверо грубее рисунка: силуэт дома можно разрешать
// метром-другим, улицу нельзя, а второй канал у карты стоил бы ещё
// шестидесяти семи мегабайт видеопамяти.
uniform sampler2D uHeight;
// Сторона поля высот в пикселях. УНИЕЙ, а не числом в шейдере: её знает
// только сам файл карты, и зашитое число разъехалось бы с ним молча — ровно
// так, как разъехались умолчания пекаря с тем, чем карту пекут.
uniform float uHPx;
#endif
uniform vec2 uSpots[5];     // места проектов в долях подложки
// Где мы на пути, дробно: по нему решается, каким точкам гореть. Показываются
// только соседние — предыдущая, нынешняя и следующая; прочие на карте лишние,
// они уводят взгляд с той дороги, по которой едем.
uniform float uSpotAct;
// Сила КАЖДОГО кольца от рассказа (uRingsOn = 1): кольцо горит вместе
// с лучом своего здания — иначе на дальнем подъезде луч уже стоит, а кольцо
// под ним тусклое и мелкое, как у соседа по пути. Своё «on» карты при этом
// не участвует вовсе: в паузе между зданиями оно снова зажигало только что
// погасшее кольцо на полную.
uniform float uRings[5];
uniform float uRingsOn;
uniform vec2 uMapCen;       // какая точка карты стоит под зданием
// ОХВАТ ПОДЛОЖКИ — УНИЕЙ, А НЕ ДЕФАЙНОМ. Он считается из самой карты
// (её окно записано рядом с ней), и зашивать его числом в шейдер значит
// ломать карту всякий раз, когда её перепекли на другой охват.
uniform float uMapSpan;
#if FXWAVE
// Кольцо волн: xy — место клика в долях подложки, z — возраст в секундах
// (меньше нуля — место пустует).
uniform vec4 uWaves[WAVE_N];
#endif
#if FXWAVE || FXHOUSE
uniform float uMapM;        // сторона подложки в метрах
#endif
#if FXHOUSE
// Маска домов вокруг курсора (рисоватьМаску в JS): r — дом под курсором,
// g — дом, с которого курсор ушёл. uHouseBox — её место в долях подложки:
// xy — угол, zw — размер.
uniform sampler2D uHouseMask;
uniform vec4 uHouseBox;
uniform float uHouseOn;
// ОКНА — ПУЛ ИЗ ЧЕТЫРЁХ ДОМОВ, по каналу маски на дом (r, g, b, a).
// uWinLv — уровень каждого 0..1 (растёт за 1 с, гаснет за 0.6 с), uWinFloor —
// высота этажа, uWinAx0 / uWinAx1 — главная ось дома (xy, zw) в долях
// подложки. По оси, а не по уклону маски, меряется «вдоль стены»: уклон на
// кромке шумит, и окна рассыпались крошкой.
uniform vec4 uWinLv;
uniform vec4 uWinFloor;
uniform vec4 uWinAx0;
uniform vec4 uWinAx1;
#endif
// Радиус точки проекта В ДОЛЯХ ПОДЛОЖКИ: при увеличении карты точка обязана
// расти вместе с городом, а не оставаться прежней кляксой на полу.
uniform float uMarkR;
// Поворот карты: косинус и синус. Ведёт его рассказ — карта разворачивается
// не сама, а по прокрутке, когда путь заворачивает к следующему проекту.
uniform vec2 uMapRot;
// Место здания рассказа в единицах пола, БЕЗ хода решётки: якорь карты.
// См. разбор в ПЯТНО.
uniform vec2 uPlotS;
uniform float uWordAmt;
uniform vec4 uWordBox;
uniform vec3 uWordTint;
// ВИД РАЗГОРЕВШЕЙСЯ ТОЧКИ — УНИЯМИ, А НЕ ДЕФАЙНАМИ. Эти четыре числа
// подбираются глазами, и с дефайном каждая проба требовала бы пересборки
// шейдера: панель подбора двигала бы ползунок, а кадр не менялся бы.
// Обжёгся на этом раньше — заказчик двигал ползунки, а ничего не менялось.
// x — dimline налитой точки долей клетки, y — до какой яркости она горит,
// z — ореол вокруг неё, w — насколько середина остаётся калёной.
uniform vec4 uWordLook;
uniform float uWordGain;

#if TAPS > 0
// ОТКЛИК НА КЛИК. На каждый живой клик — три числа: место в координатах пола
// (те же, в каких стоит решётка, то есть С ходом) и сколько секунд прошло
// с нажатия. Отрицательный возраст значит, что место в кольце пустует.
uniform vec3 uTaps[TAPS];
uniform vec3 uTapTint;    // цвет раздела: на Tronexo зелёный, на прочих свой
// Жива ли хоть одна волна. Унией, а не проверкой в цикле: пока кликов нет,
// поле не должно платить за уточнение пересечения ни одним лишним шагом,
// а узнать это дешевле снаружи, чем перебирать кольцо в каждом фрагменте.
uniform float uTapLive;
#endif

// Во сколько раз пятно под знаком ниже, чем шире: круг на полу под таким
// наклоном камеры виден сплюснутым примерно втрое.
#define POOL_SQUASH 2.8
// Сила дымки в середине пятна, долей непрозрачности.
#define POOL_HAZE 0.05

#define MAP ${j(t)?1:0}

#define MAP_INK ${We(En)}
#define MAP_FADE0 ${E(vn)}
#define MAP_FADE1 ${E(yn)}
#define CT_MARK ${We(Ln)}
#define MARK_DOT ${E(Mn)}
#define DR_W2 ${E(Un)}
#define DR_A2 ${E(Pn)}

#define FOCAL ${E(Qt)}
#define ROLL ${E(wt)}
#define YAW ${E(at)}
#define CAM_Y ${E(mt)}
#define CELL ${E(no)}
#define DOT_R ${E(Yo)}
#define HALO_R ${E(Vo)}
#define HALO ${E(Ko)}
#define NEAR ${E(Zt)}
#define NEAR_SOFT ${E(jo)}
#define FADE_NEAR ${E(Jo)}
#define FADE_FAR ${E(Qo)}
#define SIDE ${E(Zo)}
#define SIDE_SOFT ${E(tn)}
#define SIDE_MID ${E(en)}
#define NOISE_CELLS ${E(rn)}
#define NOISE_DRIFT ${E(an)}
#define FLARE ${E(sn)}
#define WASH ${E(fn)}


// Высота холма под курсором в точке пола q. Спад дважды сглажен: у подошвы
// холм сходит на нет без излома, у вершины — без острия.
float lift(vec2 q, vec2 mq, float amt) {
  float t = clamp(1.0 - length(q - mq) / uLift.x, 0.0, 1.0);
  return amt * uLift.y * t * t * (3.0 - 2.0 * t);
}

#if TAPS > 0
/**
 * ВЫСОТА ПОЛОТНА ОТ КЛИКА: расходящийся вал.
 *
 * Гребень стоит на расстоянии age * TAPW_SPEED от места удара и уходит всё
 * дальше. Поперёк себя вал имеет вид одного горба (приподнятый косинус),
 * а не синусоиды: череда колец читалась бы мишенью, а один вал — тем, что
 * полотно повело.
 *
 * Гасится дважды — со временем и с расстоянием. Только временем нельзя:
 * вал дошёл бы до края кадра в полную силу и обрубился там ровной чертой.
 */
float tapWave(vec2 q) {
  float h = 0.0;
  for (int i = 0; i < TAPS; i++) {
    float age = uTaps[i].z;
    if (age < 0.0) continue;
    float dist = length(q - uTaps[i].xy);
    if (dist > TAPW_R) continue;
    float off = dist - age * TAPW_SPEED;     // насколько мы от гребня
    if (abs(off) > TAPW_W) continue;
    float crest = 0.5 + 0.5 * cos(3.14159265 * off / TAPW_W);
    float byTime = exp(-age / TAPW_FADE);
    float byFar = 1.0 - smoothstep(TAPW_R * 0.35, TAPW_R, dist);
    h += TAPW_H * crest * byTime * byFar;
  }
  return h;
}
#endif

// БЛОК КАРТЫ. Всё, что нужно только ей, живёт под её условием; точечное
// поле (Tronexo, Tiketa и прочие) от него не зависит.
#if MAP
/**
 * КАРТА ГОРОДА НА ПОЛУ. Подложка — готовая картинка: улиц семьсот с лишним,
 * считать их на пиксель каждый кадр немыслимо, а текстура ложится одним
 * чтением. Тот же приём, что у голограмм: офлайн-отрисовка.
 *
 * Пятна проектов рисуются ПОВЕРХ подложки и золотом раздела — они «наши»
 * и единственное цветное на карте. Тот, о котором сейчас рассказ, горит
 * ярче и обведён кольцом.
 */
/**
 * Место на подложке по точке пола. Вынесено отдельно, потому что объём
 * спрашивает его на каждом шаге луча, а не один раз.
 *
 * Берётся НЕПОДВИЖНАЯ координата пола (без хода решётки): координата пола
 * растёт без конца, и привязанная к ней карта через полсотни метров ушла бы
 * за своё окно. Середину задаёт рассказ.
 */
vec2 mapUvOf(vec2 qs) {
  vec2 anchor = uPlotS;
  vec2 rel = vec2(qs.x - anchor.x, -(qs.y - anchor.y)) / uMapSpan;
  return uMapCen + vec2(rel.x * uMapRot.x - rel.y * uMapRot.y,
                        rel.x * uMapRot.y + rel.y * uMapRot.x);
}

#if RELIEF
/**
 * Направление на солнце В КООРДИНАТАХ КАРТЫ. Солнце задано в кадре, а карта
 * под ходом проезда развёрнута — поворачиваем его тем же поворотом. Иначе
 * лампу возило бы вокруг макета вместе с городом.
 */
vec2 sunMap() {
  vec2 s0 = vec2(cos(REL_SUN), sin(REL_SUN));
  return vec2(s0.x * uMapRot.x - s0.y * uMapRot.y,
              s0.x * uMapRot.y + s0.y * uMapRot.x);
}

/**
 * Высота в этом месте карты, в единицах пола.
 *
 * Множитель k — во сколько раз пригнуть дома. Им город ОСЕДАЕТ К РУБЕЖУ, за которым
 * объём не считается вовсе: без этого дома обрывались бы плашмя по ровной
 * черте поперёк кадра, а черты в городе взяться неоткуда.
 */
float cityH(vec2 uv, float k) {
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
  // Метры в единицы пола: окно карты REL_WIN_M метров укладывается
  // в uMapSpan единиц, и с приближением карты дома растут вместе с городом.
  return texture2D(uHeight, uv).r * REL_MAX_M * REL_GAIN * uMapSpan / REL_WIN_M * k;
}

/**
 * ПРОХОД ЛУЧА СКВОЗЬ СЛОЙ ДОМОВ.
 *
 * Луч входит в слой на высоте самого высокого дома и идёт вниз до земли.
 * На каждом шаге сравниваем, где луч, с тем, что в этом месте стоит: как
 * только луч оказался НИЖЕ крыши — он во что-то уткнулся.
 *
 * Возвращает, попал ли, и отдаёт место попадания и признак стены. Стену
 * от крыши отличаем ДАРОМ, без лишних чтений: если на шаге высота скакнула
 * сильнее, чем луч успел опуститься, значит мы вошли в дом сбоку.
 */
bool cityHit(vec3 d, float cy, float sy, float k, vec2 sun, out vec2 uvOut, out float wallOut, out float topOut, out float litOut, out float hAtOut) {
  uvOut = vec2(0.0);
  wallOut = 0.0;
  topOut = 0.0;
  litOut = 1.0;
  hAtOut = 0.0;
  // Потолок слоя: считаем по самой высокой ступени шкалы.
  float hMax = REL_MAX_M * REL_GAIN * uMapSpan / REL_WIN_M * k;
  if (hMax < 1e-5) return false;
  float tBot = -CAM_Y / d.y;
  float tTop = (-CAM_Y + hMax) / d.y;
  if (tTop <= 0.0 || tBot <= tTop) return false;
  float step = (tBot - tTop) / float(REL_STEPS);
  float tPrev = tTop;
  float hPrev = 0.0;
  float rayPrev = hMax;
  for (int i = 1; i <= REL_STEPS; i++) {
    float t = tTop + step * float(i);
    vec3 p = d * t;
    float dep = -p.z;
    vec2 qq = vec2(p.x * cy + dep * sy, -p.x * sy + dep * cy);
    vec2 uv = mapUvOf(qq);
    float h = cityH(uv, k);
    float ray = p.y + CAM_Y;                 // высота луча над картой
    if (ray < h) {
      // УТОЧНЯЕМ ПОПОЛАМ. Без этого кромка крыши идёт ступенями шага,
      // и город стоит как будто на гребёнке.
      float a = tPrev;
      float b = t;
      // Счётчик НЕ k: так звался параметр приседания, и целый счётчик
      // затенял его — шейдер не собирался вовсе.
      for (int j = 0; j < 4; j++) {
        float m = (a + b) * 0.5;
        vec3 pm = d * m;
        float depm = -pm.z;
        vec2 qm2 = vec2(pm.x * cy + depm * sy, -pm.x * sy + depm * cy);
        if (pm.y + CAM_Y < cityH(mapUvOf(qm2), k)) b = m; else a = m;
      }
      vec3 pf = d * b;
      float depf = -pf.z;
      vec2 qf = vec2(pf.x * cy + depf * sy, -pf.x * sy + depf * cy);
      uvOut = mapUvOf(qf);
      float hf = cityH(uvOut, k);
      // Стена или крыша: скачок высоты против того, насколько опустился луч.
      float rose = h - hPrev;         // насколько подскочила крыша
      float fell = rayPrev - ray;     // насколько опустился луч
      wallOut = rose > fell * 1.2 ? 1.0 : 0.0;
      // Доля высоты: у подошвы 0, у карниза 1. Ею стена и оттеняется.
      topOut = hf > 0.0001 ? clamp((pf.y + CAM_Y) / hf, 0.0, 1.0) : 0.0;
      hAtOut = pf.y + CAM_Y;

      // КУДА СМОТРИТ СТЕНА — по уклону поля высот вокруг места попадания.
      // Стена всегда обращена ВНИЗ по уклону: там, где дом кончается,
      // высота падает, и эта сторона и есть наружная.
      //
      // Шаг взят в один пиксель поля высот: меньше нечего спрашивать,
      // больше — и угол берётся уже от соседнего дома.
      float e = 1.0 / uHPx;
      float gx = cityH(uvOut + vec2(e, 0.0), k) - cityH(uvOut - vec2(e, 0.0), k);
      float gy = cityH(uvOut + vec2(0.0, e), k) - cityH(uvOut - vec2(0.0, e), k);
      float gl2 = length(vec2(gx, gy));
      if (gl2 > 1e-6) {
        vec2 n = -vec2(gx, gy) / gl2;
        // sun — направление на солнце уже В КООРДИНАТАХ КАРТЫ (sunMap).
        litOut = 1.0 - REL_LIT * 0.5 + REL_LIT * 0.5 * dot(n, sun);
      }
      return true;
    }
    tPrev = t;
    hPrev = h;
    rayPrev = ray;
  }
  return false;
}
#endif

#if RELIEF
/**
 * ЗАСЛОНЁН ЛИ СВЕТ. От точки идём к солнцу и смотрим, не встанет ли на пути
 * дом выше, чем поднялся к этому месту солнечный луч.
 *
 * Шагов немного и идут они недалеко: тень нужна У ПОДНОЖИЯ дома, чтобы он
 * стоял на земле, а не парил. Длинные тени через полквартала здесь и не
 * нужны, и стоили бы вчетверо дороже.
 */
float cityShade(vec2 uv, float h0, float k, vec2 sun) {
  // ДОКУДА ИДТИ — ОТ САМОЙ ВЫСОКОЙ КРЫШИ, а не долей окна карты. Первым
  // заходом я взял 0.06 охвата, то есть 450 метров: дом в десять метров при
  // солнце в 34° кладёт тень длиной пятнадцать, и уже на первом шаге луч
  // уходил выше любой крыши — теней не было вовсе, а кадр выглядел как
  // будто всё считается.
  float hMax = REL_MAX_M * REL_GAIN * uMapSpan / REL_WIN_M;
  float far2 = hMax / REL_SUNTAN;
  for (int i = 1; i <= REL_SHSTEPS; i++) {
    float dm = far2 * float(i) / float(REL_SHSTEPS);
    vec2 uv2 = uv + sun * (dm / uMapSpan);
    if (cityH(uv2, k) > h0 + dm * REL_SUNTAN) return 1.0;
    }
  return 0.0;
}
#endif

#if FXWAVE
/**
 * ВОЛНА ПО УЛИЦАМ. Фронт расходится от места клика, но светится ТОЛЬКО НА
 * ДОРОГАХ: рисунок карты знает их по силе линии (улица 158, главная 255,
 * рельсы 180 из 255; река 140, дома и дворы ниже) — свет бежит по улицам,
 * от перекрёстка к перекрёстку, а между ними кварталы остаются тёмными.
 * Расстояние — в метрах города, поэтому от положения камеры волна не зависит.
 */
float mapWave(vec2 uv, float raw) {
  // Порог — НЕ ПО СИЛЕ ЛИНИИ, А ПО ЕЁ ПЕРЕПАДУ С ОКРЕСТНОСТЬЮ. По силе
  // (улица 0.62) не вышло: на средней дальности подложка мельче пикселя,
  // мипмап смешивает улицу с тёмными кварталами, и светилась одна главная.
  // Улица — линия ярче всего вокруг: сравниваем с тем же местом на два
  // уровня мипмапа грубее. Обвод дома (0.43 на заливке 0.29) даёт перепад
  // меньше и под порог не попадает.
  // Вблизи (подложка крупнее пикселя) работает и простая сила линии.
  float around = texture2D(uCity, uv, 2.5).r;
  float road = max(smoothstep(0.5, 0.58, raw),
                   smoothstep(0.1, 0.2, raw - around) * step(0.3, raw));
  if (road <= 0.0) return 0.0;
  float o = 0.0;
  for (int i = 0; i < WAVE_N; i++) {
    vec4 w = uWaves[i];
    if (w.z < 0.0) continue;
    float dm = length((uv - w.xy) * uMapM);
    float r = w.z * WAVE_SPEED;
    float behind = r - dm;
    if (behind < -16.0 || dm > WAVE_R) continue;
    // Голова фронта яркая и короткая, за ней — тающий след по улице.
    float head = exp(-max(behind, 0.0) / WAVE_TAIL) * (1.0 - smoothstep(0.0, 16.0, -behind));
    float fade = 1.0 - smoothstep(WAVE_LIFE * 0.4, WAVE_LIFE, w.z);
    float reach = 1.0 - smoothstep(WAVE_R * 0.55, WAVE_R, dm);
    o = max(o, head * fade * reach);
  }
  // Улица горит ярко; между ними — лишь слабый отсвет фронта, чтобы волна
  // читалась одним событием, а не россыпью чёрточек.
  return clamp(o * (road * 1.5 + 0.06), 0.0, 1.0);
}
#endif

#if FXHOUSE
float winHash(vec2 c, float s) {
  vec3 p = fract(vec3(c.xyx) * vec3(0.1031, 0.1030, 0.0973) + s);
  p += dot(p, p.yxz + 33.33);
  return fract((p.x + p.y) * p.z);
}

/**
 * ОКНА ДОМА ПОД КУРСОРОМ (заказчик: «пусть в некоторых окнах загорается
 * свет, плавно»). Сетка окон — В МЕТРАХ ГОРОДА: по высоте этаж (из данных
 * дома), вдоль стены шаг 3.2 м; вдоль стены координата берётся проекцией
 * места попадания на касательную к стене, поэтому окна не растягиваются
 * и от камеры не зависят. Горит треть окон, выбор — хешем окна (этаж,
 * колонка), без рядов; у каждого своя задержка 0–0.6 с и разгорание 0.4 с.
 * Возвращает силу света окна, 0 — тёмное.
 */
float houseWindows(vec2 uv, float hitM, float wall) {
  if (uHouseOn <= 0.0 || wall < 0.5 || hitM < 0.8) return 0.0;
  vec2 hb = (uv - uHouseBox.xy) / uHouseBox.zw;
  if (hb.x < 0.0 || hb.y < 0.0 || hb.x > 1.0 || hb.y > 1.0) return 0.0;
  // Чей это дом — по каналу маски вокруг места попадания (кромка стены
  // лежит на границе заливки, поэтому берём максимум по соседям).
  float e = 1.5 / 1024.0;
  vec4 cx1 = texture2D(uHouseMask, hb + vec2(e, 0.0));
  vec4 cx0 = texture2D(uHouseMask, hb - vec2(e, 0.0));
  vec4 cy1 = texture2D(uHouseMask, hb + vec2(0.0, e));
  vec4 cy0 = texture2D(uHouseMask, hb - vec2(0.0, e));
  vec4 c = texture2D(uHouseMask, hb);
  vec4 m = max(c, max(max(cx1, cx0), max(cy1, cy0)));
  // Сильнейший канал и есть дом; его уровень, этаж и ось.
  float best = m.r; float lv = uWinLv.x; float fl = uWinFloor.x; vec2 ax = uWinAx0.xy; float seed = 1.7;
  if (m.g > best) { best = m.g; lv = uWinLv.y; fl = uWinFloor.y; ax = uWinAx0.zw; seed = 4.3; }
  if (m.b > best) { best = m.b; lv = uWinLv.z; fl = uWinFloor.z; ax = uWinAx1.xy; seed = 6.1; }
  if (m.a > best) { best = m.a; lv = uWinLv.w; fl = uWinFloor.w; ax = uWinAx1.zw; seed = 8.9; }
  if (best < 0.4 || lv <= 0.0) return 0.0;
  // Стена почти всегда вдоль одной из двух осей дома: берём ту, что ближе
  // к местной касательной по маске, — у одной стены она одна и та же.
  vec2 gr = vec2(dot(cx1 - cx0, vec4(1.0)), dot(cy1 - cy0, vec4(1.0)));
  float gl3 = length(gr);
  vec2 tang = gl3 > 1e-4 ? vec2(-gr.y, gr.x) / gl3 : ax;
  vec2 ay = vec2(-ax.y, ax.x);
  tang = abs(dot(tang, ax)) >= abs(dot(tang, ay)) ? ax : ay;
  float floorH = max(fl, 2.6);
  float along = dot(uv * uMapM, tang);
  vec2 g = vec2(along / 3.2, hitM / floorH);
  vec2 cell = floor(g);
  vec2 f = fract(g);
  // Сглаживание — постоянной долей ячейки, а не fwidth: касательная по
  // маске на кромке может перескочить, и fwidth там взрывался.
  vec2 aa = vec2(0.06, 0.05);
  float inX = smoothstep(0.24 - aa.x, 0.24 + aa.x, f.x) * (1.0 - smoothstep(0.76 - aa.x, 0.76 + aa.x, f.x));
  float inY = smoothstep(0.30 - aa.y, 0.30 + aa.y, f.y) * (1.0 - smoothstep(0.80 - aa.y, 0.80 + aa.y, f.y));
  float shape = inX * inY;
  if (shape <= 0.0) return 0.0;
  // Хеш — по окну: этаж, колонка и сама стена, так что ряды не выстраиваются.
  float wallId = floor(dot(uv * uMapM, vec2(tang.y, -tang.x)) / 3.0);
  vec2 id = cell + vec2(wallId * 31.0, wallId * 97.0);
  if (winHash(id, seed) > 0.34) return 0.0;
  float lum = winHash(id, 9.1);
  float bright = 0.4 + 0.6 * lum * lum * lum;
  // УРОВЕНЬ, А НЕ ВРЕМЯ. У каждого окна свой порог th (0..1) и ширина
  // разгорания 0.25: на подъёме окна зажигаются вразнобой, на спаде гаснут
  // в обратном порядке, а возврат посреди спада просто идёт дальше от
  // нынешнего уровня — скачков нет.
  // Пороги — по всей шкале уровня (0..1), а не по первым 0.6: тогда яркость
  // дома растёт почти прямо от уровня, без крутого изгиба у нуля, и спад
  // с недогоревшего дома идёт таким же ровным, а не обрывом.
  // Сдвиг клетки — обязателен: хеш с той же клеткой и другой солью
  // коррелирует с выбором окна, и пороги горящих окон все лежали ниже 0.34 —
  // разгорание шло втрое быстрее задуманного, спад — обрывом в конце.
  float th = winHash(id + vec2(17.3, 41.9), 2.0);
  float on = smoothstep(th, th + 0.25, lv * 1.25);
  return shape * bright * on;
}
#endif

float cityMap(vec2 q, float w, float depth, vec3 d, out vec3 colOut) {
  colOut = MAP_INK;
  float wq = w * CELL;

  // КАРТУ ВЕДЁТ РАССКАЗ, А НЕ ПРОКРУТКА. Координата пола растёт без конца
  // (решётка едет под прокрутку), и привязанная к ней карта через полсотни
  // метров уходила за своё окно. Поэтому берётся НЕПОДВИЖНАЯ координата пола
  // (без хода решётки), а середину задаёт рассказ: под зданием всегда стоит
  // точка того проекта, о котором сейчас речь, и карта переезжает от одного
  // к другому вместе с ним.
  // Точка проекта подводится ПОД САМО ЗДАНИЕ, а не в середину кадра: здание
  // стоит сбоку (слева на полосе идёт текст), и карта должна равняться на него.
  // Место здания уже известно — его передаёт рассказ вместе с пятном застройки.
  vec2 qs = vec2(q.x, q.y - uOffset);
  // Место в карте относительно того, что стоит под зданием, и поворот:
  // направление пути всегда смотрит ОТ зрителя вглубь кадра, поэтому на
  // повороте разворачивается сам город, а не камера.
  vec2 anchor = uPlotS;
  vec2 uv = mapUvOf(qs);

  // ОБЪЁМ. До сих пор место на подложке бралось там, где луч встретил
  // ПЛОСКОСТЬ. Теперь — там, где он встретил ГОРОД: крышу или стену дома.
  // Оттого дома и выходят объёмными: их верх закрывает то, что за ними,
  // ровно так, как закрывал бы настоящий дом.
  float wall = 0.0;
  float upto = 0.0;
  float lit = 1.0;
  float shade = 0.0;
  float hitM = 0.0;   // высота точки попадания на стене, метры города
#if RELIEF
  // Считаем ТОЛЬКО ВБЛИЗИ. Дальше дом мельче пикселя, а шагов на него нужно
  // тем больше, чем положе идёт луч: у горизонта их потребовались бы сотни.
  if (depth < REL_FAR && uMapSpan > 0.0) {
    // Город оседает к рубежу: у самой дали дома прижаты к земле, и переход
    // к плоской карте не виден вовсе.
    float k = 1.0 - smoothstep(REL_FAR * 0.55, REL_FAR, depth);
    vec2 uvH;
    float wallH;
    float topH;
    float litH;
    float hAt;
    // Солнце в карте — один раз на пиксель, для света стен и для теней.
    vec2 sun = sunMap();
    if (cityHit(d, cos(YAW), sin(YAW), k, sun, uvH, wallH, topH, litH, hAt)) {
      uv = uvH;
      wall = wallH;
      upto = topH;
      lit = litH;
      hitM = hAt / max(REL_GAIN * uMapSpan / REL_WIN_M * k, 1e-6);
      // Тень от соседнего дома — на крыше и на стене тоже: город стоит
      // тесно, и дом через улицу заслоняет свет не хуже своего же угла.
      shade = cityShade(uv, hAt, k, sun);
    } else {
      // Земля: тут тень нужнее всего — по ней и видно, что дома стоят.
      shade = cityShade(uv, 0.0, k, sun);
    }
  }
#endif
  float ink = 0.0;
  float raw = 0.0;
  if (uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0) {
    ink = texture2D(uCity, uv).r;
    raw = ink;
    // Вдали подложка мельче пикселя и даёт рябь: гасим её по доле подложки
    // на пиксель.
    // ГДЕ КАРТУ УЖЕ НЕ НАРИСОВАТЬ — ТАМ ЕЁ И НЕ РИСУЕМ. У края кадра пол идёт
    // почти в лоб, и на один пиксель приходится столько города, что от улиц
    // остаются полосы: заказчик увидел это как кривое искажение в углах.
    // Никакой фильтр этого не спасает — там просто нечего показывать.
    // Порог задан В ДОЛЯХ ПОДЛОЖКИ на пиксель: доля, а не единицы пола,
    // потому что охват меняется по ходу проезда.
    float perPx = wq / uMapSpan;
    ink *= 1.0 - smoothstep(MAP_FADE0, MAP_FADE1, perPx);
#if RELIEF
    // СТЕНА НЕ ЧИТАЕТ РИСУНОК КАРТЫ, А НЕСЁТ СВОЙ ТОН.
    //
    // Первым заходом стена бралась оттуда же, откуда крыша, — из подложки
    // по месту попадания луча. Но у стены соседние пиксели попадают в РАЗНЫЕ
    // места рисунка: по вертикали стена занимает десятки пикселей кадра,
    // а на карте ей отведена одна линия обвода дома. От этого по всем стенам
    // шла гребёнка — на кадре видно сразу, и это не мелочь, а главный изъян
    // первого захода.
    //
    // Тон берётся заливкой дома и темнеет к подошве: глазу нужен перепад
    // на сгибе, иначе он не видит, что поверхность повернулась.
    ink = mix(ink, REL_INK * REL_WALL * (0.5 + 0.5 * upto) * lit
      * (1.0 - smoothstep(MAP_FADE0, MAP_FADE1, perPx)), wall);
    // ТЕНЬ ГАСИТ, А НЕ КРАСИТ: карта рисуется одной силой линии, и тень
    // в ней — просто там, где света меньше.
    ink *= 1.0 - REL_SHADOW * shade * (1.0 - smoothstep(MAP_FADE0, MAP_FADE1, perPx));
#endif
  }

  // ПЯТНА ПРОЕКТОВ. Место каждого — доля подложки, поэтому обратный пересчёт
  // в координаты пола, и уже там кольцо с точкой.
  float mark = 0.0;
  for (int i = 0; i < 5; i++) {
    vec2 su = uSpots[i];
    // Обратный поворот: из карты в пол.
    vec2 sr = su - uMapCen;
    vec2 sb = vec2(sr.x * uMapRot.x + sr.y * uMapRot.y,
                  -sr.x * uMapRot.y + sr.y * uMapRot.x);
    vec2 sq = anchor + vec2(sb.x * uMapSpan, -sb.y * uMapSpan);
    // Видна ли точка вовсе: только соседи по пути.
    float away = abs(float(i) - uSpotAct);
    float seen = 1.0 - smoothstep(1.0, 1.45, away);
    if (seen < 0.01) continue;
    float on = 1.0 - smoothstep(0.12, 0.5, away);
    on = mix(on, uRings[i], uRingsOn);
    // РАЗМЕР ТОЧКИ — В МЕТРАХ ГОРОДА, а не в долях окна карты. От долей он
    // вырос вдвое, когда карту перепекли на вдвое больший охват: доля окна
    // не мера, мера — метры. Радиус задаётся MARK_M (заказчик просил кольцо
    // меньше: было полста метров, стало двадцать восемь), а у того, о ком
    // сейчас рассказ, он в полтора раза больше.
    float R = uMarkR * uMapSpan * (1.0 + on * 0.55);
    float d = length(qs - sq);
    // СЕРДЦЕВИНА ОТМЕТКИ. Заказчик: «саму точку сделай меньше». Она — место,
    // откуда бьёт луч, и крупной ей быть незачем: кольцо и так показывает,
    // где проект, а жирная середина спорит с подножием луча.
    float dot2 = 1.0 - smoothstep(R * MARK_DOT, R * MARK_DOT + wq, d);
    float rg = 1.0 - smoothstep(DR_W2 * wq * 0.5, DR_W2 * wq * 0.5 + wq, abs(d - R));
    mark = max(mark, max(dot2, rg) * (0.3 + on * 0.7) * seen);
  }
  colOut = mix(colOut, CT_MARK, clamp(mark * 1.2, 0.0, 1.0));

  float fx = 0.0;
  float winOut = 0.0;
#if FXWAVE
  fx = max(fx, mapWave(uv, raw));
#endif
#if FXHOUSE
  {
    float wallFx = 0.0;
#if RELIEF
    wallFx = wall;
#endif
    float hitMfx = 0.0;
#if RELIEF
    hitMfx = hitM;
#endif
    float wl = houseWindows(uv, hitMfx, wallFx);
    if (wl > 0.0) {
      // Тёплый свет окна — свой цвет, не золото раздела.
      colOut = mix(colOut, vec3(1.0, 0.78, 0.46), clamp(wl * 1.6, 0.0, 1.0));
      ink = max(ink, wl * 0.8);
      winOut = max(winOut, wl);
    }
  }
#endif
  colOut = mix(colOut, CT_MARK, clamp(fx * 1.3, 0.0, 1.0) * (1.0 - clamp(winOut * 2.0, 0.0, 1.0)));
  return max(ink * DR_A2 * 2.8, max(mark, max(fx, winOut)));
}

#endif

// Пол. Возвращает (яркость точек, покрытие плоскости).
// Высота и поворот берутся из констант: плоскость одна, и параметры,
// заведённые когда-то ради второй, были бы мёртвой общностью.
vec2 floorField(vec3 d, vec2 mq, float amt, out vec2 qOut, out float fatOut,
  out float coreOut, out vec3 paveOut) {
  // Пересечение луча с плоскостью y = -CAM_Y. Выше горизонта знаменатель
  // меняет знак — там пола просто нет, и кадр остаётся чистым.
  qOut = vec2(0.0);
  fatOut = 0.0;
  coreOut = 0.0;
  paveOut = vec3(0.0);
  float t = -CAM_Y / d.y;
  if (t <= 0.0) return vec2(0.0);

  float cy = cos(YAW), sy = sin(YAW);
  vec3 p = d * t;
  float depth = -p.z;
  // Координаты в самой плоскости: поворот по азимуту, затем ход решётки
  // вдоль глубины. Именно здесь у образца прибавляется время и прокрутка.
  vec2 q = vec2(p.x * cy + depth * sy, -p.x * sy + depth * cy);
  q.y += uOffset;

  // ПЕРЕСЕЧЕНИЕ С ПОЛЕМ ВЫСОТ, А НЕ С ПЛОСКОСТЬЮ.
  //
  // Плоское пересечение — первое приближение, дальше два уточнения: берём
  // высоту холма в найденной точке, поднимаем плоскость на неё и решаем
  // заново. Холм пологий, поэтому двух шагов хватает. Итерации нужны именно
  // потому, что подъём делается геометрией: подкраской точки не сдвинулись бы.
  // ВОЛНА ОТ КЛИКА СЧИТАЕТСЯ ЗДЕСЬ ЖЕ. Она такое же поле высот, что и холм,
  // и уточнять пересечение обеим надо сообща: реши их порознь — точки под
  // курсором поехали бы дважды.
  float wave = 0.0;
#if TAPS > 0
  wave = uTapLive;
#endif
  if (amt > 0.0 || wave > 0.0) {
    for (int i = 0; i < 2; i++) {
      float h = lift(q, mq, amt);
#if TAPS > 0
      if (wave > 0.0) h += tapWave(q);
#endif
      t = (-CAM_Y + h) / d.y;
      if (t <= 0.0) return vec2(0.0);
      p = d * t;
      depth = -p.z;
      q = vec2(p.x * cy + depth * sy, -p.x * sy + depth * cy);
      q.y += uOffset;
    }
  }

  // Совсем вплотную к камере смысла считать нет: там шаг решётки уходит
  // за кадр целиком, а производные вырождаются.
  if (depth < NEAR) return vec2(0.0);
  qOut = q;

  vec2 g = q / CELL;

  // Производные берём от НЕПРЕРЫВНОГО g, а не от fract(g): на границе клетки
  // fract рвётся, и по разрыву пошла бы сетка ярких швов.
  vec2 gx = dFdx(g), gy = dFdy(g);
  vec2 deriv = vec2(length(vec2(gx.x, gy.x)), length(vec2(gx.y, gy.y)));
  float w = max(deriv.x, deriv.y);

  // Точке не даём стать мельче пикселя, а раздутую гасим — так же линейно,
  // как гасит раздутую линию образец: saturate(lineWidth / drawWidth).
  // Отсюда мягкое угасание к горизонту, где клеток на пиксель больше одной.
  float rad = max(DOT_R, w * 0.75);
  float aa = max(w * 0.7, 0.0015);
  float r = length(fract(g) - 0.5);

#if MAP
  // КАРТА ГОРОДА.
  float dot = cityMap(q, w, depth, d, paveOut);
#else
  float dot = smoothstep(rad + aa, rad - aa, r) * min(1.0, DOT_R / rad);

  // Ореол: он и есть дальняя половина поля, где точки уже мельче пикселя.
  float hrad = max(HALO_R, w * 0.75);
  dot += HALO * smoothstep(hrad + aa, hrad - aa, r) * min(1.0, HALO_R / hrad);

  // Мерцание: пятна шума едут вместе с решёткой, поэтому берём координату
  // плоскости, а не экранную.
  vec2 nUv = q / (NOISE_CELLS * CELL) / 128.0 + uTime * NOISE_DRIFT;
  float n = texture2D(uNoise, nUv).r;
  dot *= 1.0 + FLARE * smoothstep(0.62, 1.0, n);
#endif

  // НАЛИТАЯ ТОЧКА: та же точка решётки, но крупнее — ею горит слово.
  // Мелкое слово из обычных точек не читается вовсе: у самого низа кадра
  // на высоту буквы приходится четыре ряда, и четыре ряда крохотных точек
  // в букву не складываются. Радиус берётся ОТ КЛЕТКИ, поэтому точки
  // наливаются одинаково и вблизи, и вдали.
  //
  // Берётся ДО затухания по глубине и по краям: иначе левый конец слова,
  // где поле и без того тусклое, остаётся нечитаемым.
  float radW = max(uWordLook.x, w * 0.75);
  float body = smoothstep(radW + aa, radW - aa, r) * min(1.0, uWordLook.x / radW);
  // И ОРЕОЛ вокруг тела: без него точка читается наклейкой, а не огоньком.
  // Спад берётся вдвое шире тела и в квадрате — так свет садится у самой
  // точки круто, а дальше стелется.
  float halo = 1.0 - smoothstep(0.0, radW * 2.4, r);
  fatOut = body + uWordLook.z * halo * halo;
  // Калёная середина: по ней цвет раздела кладётся слабее, и точка выходит
  // светом с зелёным ободом, а не ровным зелёным кружком.
  coreOut = smoothstep(radW * 0.9, 0.0, r);

  float att = smoothstep(FADE_FAR, FADE_NEAR, depth);
  // Плавный вход у камеры вместо прежнего обрыва.
  att *= smoothstep(NEAR, NEAR_SOFT, depth);
  att *= smoothstep(SIDE + SIDE_SOFT, SIDE, abs(q.x - SIDE_MID));

  return vec2(dot * att, att);
}

// Точка пола под курсором: тот же луч и та же плоскость, что и у поля.
// Считается отдельно, а не берётся из floorField, потому что нужна ОДНА
// на кадр и в другом месте экрана.
bool screenFloor(vec2 px, out vec2 mq) {
  mq = vec2(0.0);
  vec2 ms = (px - CEN) / uRes.y;
  float cr = cos(ROLL), sr = sin(ROLL);
  vec2 msc = vec2(ms.x * cr + ms.y * sr, -ms.x * sr + ms.y * cr);
  vec3 md = normalize(vec3(msc.x, msc.y, -FOCAL));
  float t = -CAM_Y / md.y;
  if (t <= 0.0) return false;          // курсор выше горизонта: пола там нет
  vec3 p = md * t;
  float depth = -p.z;
  if (depth < NEAR) return false;
  float cy = cos(YAW), sy = sin(YAW);
  mq = vec2(p.x * cy + depth * sy, -p.x * sy + depth * cy);
  mq.y += uOffset;
  return true;
}

bool mouseFloor(out vec2 mq) { return screenFloor(uMouse.xy, mq); }

#if TAPS > 0
/**
 * Случайное число по клетке решётки, 0..1. Нужно двум вещам: решить, горит ли
 * эта клетка вообще (россыпь, а не круг), и на сколько запоздать со вспышкой.
 * Считается по ЦЕЛЫМ координатам клетки, поэтому у одной клетки оно всегда
 * одно и то же: россыпь стоит на полу, а не мельтешит от кадра к кадру.
 */
float cellRand(vec2 cell, float seed) {
  vec2 h = fract((cell + seed) * vec2(127.1, 311.7));
  h += dot(h, h + 34.56);
  return fract(h.x * h.y * 43.75);
}

/**
 * Сила отклика в этой точке пола: сколько добавить яркости её точке.
 *
 * Волна расходится от места клика со скоростью TAP_SPEED, и клетка вспыхивает,
 * когда волна до неё дошла: задержка есть расстояние, делённое на скорость,
 * плюс свой разброс. Без разброса клетки на одном расстоянии загораются разом,
 * и вместо россыпи выходит расходящееся кольцо.
 *
 * Берётся МАКСИМУМ по кликам, а не сумма: два клика рядом не должны выжигать
 * место вдвое ярче одного.
 */
float taps(vec2 q) {
  vec2 cell = floor(q / CELL);
  float on = cellRand(cell, 0.0);
  if (on > TAP_FILL) return 0.0;         // эта клетка в россыпь не попала
  float lag = cellRand(cell, 7.3);
  float lum = cellRand(cell, 19.1);
  vec2 qc = (cell + 0.5) * CELL;
  float out2 = 0.0;
  for (int i = 0; i < TAPS; i++) {
    float age = uTaps[i].z;
    if (age < 0.0) continue;             // место в кольце пустует
    float dist = length(qc - uTaps[i].xy);
    if (dist > TAP_R) continue;
    float a = age - dist / TAP_SPEED - lag * TAP_JIT;
    if (a < 0.0) continue;               // волна сюда ещё не дошла
    // Разгорается быстро, гаснет неспешно — тем же правилом, что и отклик
    // поля на курсор: откликаться сразу, забывать не сразу.
    float up = clamp(a / TAP_UP, 0.0, 1.0);
    float dn = exp(-a / TAP_DOWN);
    // К краю россыпь редеет: резкая граница читалась бы вырезанным кругом.
    float edge = 1.0 - smoothstep(TAP_R * 0.45, TAP_R, dist);
    out2 = max(out2, up * dn * edge * (0.55 + 0.45 * lum));
  }
  return out2;
}
#endif

void main() {
  // Экранные координаты в долях высоты кадра, затем снимаем крен: горизонт
  // прямой, диагональной тёмную полосу делает именно поворот кадра.
  vec2 s = (gl_FragCoord.xy - CEN) / uRes.y;
  float cr = cos(ROLL), sr = sin(ROLL);
  vec2 sc = vec2(s.x * cr + s.y * sr, -s.x * sr + s.y * cr);
  vec3 d = normalize(vec3(sc.x, sc.y, -FOCAL));

  // Точка пола под курсором — вершина холма. Если курсор выше горизонта
  // или мышь ушла, подъёма нет и поле считается как раньше.
  vec2 mq = vec2(0.0);
  float amt = (uMouse.z > 0.0 && mouseFloor(mq)) ? uMouse.z : 0.0;

  vec2 q;
  float fat;
  float core;
  vec3 pave;
  vec2 lo = floorField(d, mq, amt, q, fat, core, pave);
  float dots = lo.x;
  float wash = lo.y * WASH;

  // ПЯТНО ПОД ЗНАКОМ. Знак стоит остриём почти у пола, и без отклика пола
  // он висит сам по себе — две сцены в одном кадре, не связанные ничем.
  // Свет ЛОЖИТСЯ НА ТОЧКИ, а не добавляется к пустоте: прибавка к общей
  // яркости дала бы на полу видимый диск, а так пятно читается тем, что
  // точки под знаком горят ярче остальных.
  //
  // Считается В КООРДИНАТАХ КАДРА, а не пола, и это осознанно. По полу пятно
  // расплывалось: точка под остриём ложится близко к камере, а там любой
  // радиус накрывает всю нижнюю полосу — замер на неподвижном кадре показал
  // сорок тысяч затронутых пикселей во всю ширину. Нужен же не источник
  // света в мире, а след под знаком, и он задаётся прямо: эллипс вокруг
  // острия, приплюснутый по вертикали — такой, каким круг на полу и виден.
  if (uSign.z > 0.0) {
    vec2 dp = (gl_FragCoord.xy - uSign.xy) / uRes.y;
    float t = clamp(1.0 - length(vec2(dp.x, dp.y * POOL_SQUASH)) / uPool.x, 0.0, 1.0);
    float k = t * t * (3.0 - 2.0 * t);
    dots *= 1.0 + uSign.z * uPool.y * k;
    // И слабая дымка поверх: без неё пятно живёт только на точках, а между
    // ними пол остаётся чёрным — свет читается решётом, а не светом.
    wash += uSign.z * POOL_HAZE * k * k;
  }

  // ОТКЛИК НА КЛИК — ТЕМ ЖЕ СПОСОБОМ, ЧТО И ПЯТНО ПОД ЗНАКОМ: свет ложится
  // на точки, а не прибавляется к пустоте. Между точками пол остаётся
  // пустым, и россыпь читается тем, что поле разгорелось, а не тем,
  // что на пол положили зелёное пятно.
  float tap = 0.0;
#if TAPS > 0
  if (lo.y > 0.0) {
    tap = taps(q);
    dots *= 1.0 + TAP_GAIN * tap;
  }
#endif

  // СЛОВО ИЗ ТОЧЕК. Не надпись поверх сцены: маска УСИЛИВАЕТ те точки, что
  // и так стоят на полу, — слово читается тем, что пол под ним разгорелся,
  // а не тем, что на пол положили текст. Дымка внутри букв держит форму
  // между точками: у самого низа кадра шаг решётки крупный, и на одних
  // точках слово рассыпалось бы решетом.
  //
  // Место — В КООРДИНАТАХ КАДРА, а не пола, по той же причине, что и пятно
  // под знаком, и ещё по одной: пол развёрнут по азимуту и накренён, лежащее
  // на нём слово ушло бы в перспективу углом и перестало читаться. Нужно же,
  // чтобы читалось.
  //
  // Дымка гасится покрытием пола (lo.y): выше горизонта и по краям, где пола
  // нет, слову светить неоткуда.
  float word = 0.0;
  if (uWordAmt > 0.0 && lo.y > 0.0) {
    // ГДЕ ЧИТАТЬ МАСКУ. Ответов было три, выбран первый — глазами заказчика.
    //
    // ПО ФРАГМЕНТУ (так и оставлено): кромка буквы режет точку, и часть точек
    // стоит откусанными. Заказчик это разглядел («а ты вот эти точки случайно
    // не трогал?»), но, посмотрев починку, вернул как было: «что-то мне сейчас
    // меньше нравится, чем было перед этим». Резкая буква важнее целой точки.
    //
    // Два других — ПО КЛЕТКЕ (точка горит целиком или нет, но буквы
    // округляются до решётки, и «T» перестаёт быть «T») и ПО ОБЕИМ, ЧТО ЯРЧЕ
    // (буквы набухают на радиус точки и читаются жирнее логотипа) — сняты
    // при чистке; прежний вариант — тег pre-structure-1112.
    vec2 wuv = (gl_FragCoord.xy - uWordBox.xy) / uWordBox.zw * 0.5 + 0.5;
    if (wuv.x > 0.0 && wuv.x < 1.0 && wuv.y > 0.0 && wuv.y < 1.0) {
      // Маска читается В КАЖДОМ ФРАГМЕНТЕ, а не раз на клетку решётки.
      // Пробовал раз на клетку («точка либо горит целиком, либо нет»):
      // выходит честная лампочная надпись, но буквы теряют края и слово
      // читается хуже — на кадре видно, что кромка буквы, режущая точку,
      // держит форму лучше, чем округлённая до клетки.
      word = texture2D(uWord, vec2(wuv.x, 1.0 - wuv.y)).a;
      word *= uWordAmt;
      // Точки внутри букв разгораются ДО СВОЕГО УРОВНЯ, а не во столько-то
      // раз от нынешней яркости: множитель оставлял тусклые места тусклыми,
      // и слово читалось только правым концом. Берётся max, а не замена:
      // у самой камеры поле ярче этого уровня, и гасить его незачем.
      dots = max(dots * (1.0 + word * uWordGain), fat * word * uWordLook.y);
    }
  }

#if MAP
  // КАРТА НЕСЁТ СВОЙ ЦВЕТ и ничего не заливает поверх: она кладёт краску
  // прямо на фон страницы.
  // Плотность берётся от самой линии, а не от покрытия пола, — между линиями
  // пол остаётся пустым, как на кальке.
  vec3 c = pave;
#else
  // Плотные и вспыхнувшие точки уходят к белому: без этого поле читается
  // одной плоской заливкой.
  vec3 c = mix(uDot, vec3(0.92, 0.96, 1.0), clamp(dots * 0.5, 0.0, 1.0));
  c = mix(uWash, c, clamp(dots * 3.0, 0.0, 1.0));
#endif
  // Слово — цветом раздела, но ТОЛЬКО НА САМИХ ТОЧКАХ: вес берётся от их
  // яркости. Красить весь след маски значило бы положить на пол цветную
  // плашку в форме букв — ровно то, что заказчик и назвал «вставил слово».
  // Между точками пол остаётся пустым, слово держится одними точками.
  c = mix(c, uWordTint, clamp(word * dots * 1.2, 0.0, 1.0) * (1.0 - uWordLook.w * core));

#if TAPS > 0
  // Цветом РАЗДЕЛА, а не зелёным числом: на Tronexo это зелёный, которого
  // заказчик и просил, на других разделах — их собственный. Один приём
  // не должен говорить на всех страницах одним чужим цветом.
  c = mix(c, uTapTint, clamp(tap * 1.5, 0.0, 1.0));
#endif

#if MAP
  float a = clamp(dots * lo.y, 0.0, 1.0);
#else
  float a = clamp(dots * uDotA + wash, 0.0, 1.0);
#endif
  gl_FragColor = vec4(c * a, a);
}
`,ye=()=>Math.min(2,window.devicePixelRatio||1),ao=["palachovka","kostelicek","karlovina","labska","hradecka"];function so(t,o,n,i,s){const a=(t-.5*n)/i,c=(o-(.5+s)*i)/i,r=Math.cos(wt),u=Math.sin(wt);return{mx:a*r+c*u,my:-a*u+c*r}}function $t(t,o){const n=Math.cos(at),i=Math.sin(at);return{x:t*n+o*i,y:-t*i+o*n}}function fo(t,o,n,i,s){const a=Math.cos(at),c=Math.sin(at),r=t*a-o*c,u=t*c+o*a;if(u<Zt)return null;const p=Qt/u,A=Math.cos(wt),h=Math.sin(wt),_=r*p,v=-mt*p,q=_*A-v*h,X=_*h+v*A,C=ye(),d=q*i+.5*n,y=X*i+(.5+s)*i;return{x:d/C,y:(i-y)/C,depth:u}}const In=(t,o)=>t*Math.sin(at)+o*Math.cos(at);function Ut(t,o){const n=ye();return[t*n,((window.innerHeight||1)-o)*n]}const co=256;let g=null,ie=!1;function Wn(){g||ie||(ie=!0,fetch("/assets/map/pardubice-houses.bin").then(t=>{if(!t.ok)throw new Error(`дома: ${t.status}`);return t.arrayBuffer()}).then(t=>{if(t.byteLength<4)throw new Error("дома: пустой файл");const o=new DataView(t),n=o.getUint32(0,!0),i=new Uint32Array(n),s=new Uint16Array(n),a=new Uint8Array(n),c=new Float32Array(n),r=new Float32Array(4*n);let u=0,p=4;for(let d=0;d<n;d++){if(p+6>t.byteLength)throw new Error("дома: файл обрезан");const y=o.getUint16(p,!0);u+=y,p+=6+y*4}if(p>t.byteLength)throw new Error("дома: файл обрезан");const A=new Float32Array(2*u);p=4;let h=0;for(let d=0;d<n;d++){const y=o.getUint16(p,!0);s[d]=y,a[d]=o.getUint8(p+2),c[d]=o.getUint8(p+3)/2,p+=6,i[d]=h;let W=1,H=1,$=0,V=0;for(let x=0;x<y;x++){const M=o.getUint16(p,!0)/65535,S=o.getUint16(p+2,!0)/65535;p+=4,A[2*h]=M,A[2*h+1]=S,h++,M<W&&(W=M),M>$&&($=M),S<H&&(H=S),S>V&&(V=S)}r[4*d]=W,r[4*d+1]=H,r[4*d+2]=$,r[4*d+3]=V}const _=co,v=new Uint32Array(_*_+1),q=(d,y)=>{const W=Math.max(0,Math.floor(r[4*d]*_)),H=Math.min(_-1,Math.floor(r[4*d+2]*_)),$=Math.max(0,Math.floor(r[4*d+1]*_)),V=Math.min(_-1,Math.floor(r[4*d+3]*_));for(let x=$;x<=V;x++)for(let M=W;M<=H;M++)y(x*_+M)};for(let d=0;d<n;d++)q(d,y=>{v[y+1]++});for(let d=0;d<_*_;d++)v[d+1]+=v[d];const X=new Int32Array(v[_*_]),C=v.slice(0,_*_);for(let d=0;d<n;d++)q(d,y=>{X[C[y]++]=d});g={n,start:i,cnt:s,pts:A,lv:a,h:c,bb:r,cell:v,ids:X}}).catch(()=>{ie=!1}))}function Nn(t,o){if(!g||t<0||o<0||t>=1||o>=1)return-1;const n=co,i=Math.floor(o*n)*n+Math.floor(t*n),{cell:s,ids:a,start:c,cnt:r,pts:u,bb:p}=g;for(let A=s[i];A<s[i+1];A++){const h=a[A];if(t<p[4*h]||t>p[4*h+2]||o<p[4*h+1]||o>p[4*h+3])continue;let _=!1;const v=c[h],q=r[h];for(let X=0,C=q-1;X<q;C=X++){const d=u[2*(v+X)+1],y=u[2*(v+C)+1];if(d>o==y>o)continue;const W=u[2*(v+X)],H=u[2*(v+C)];t<W+(o-d)/(y-d)*(H-W)&&(_=!_)}if(_)return h}return-1}function Ft(t,o,n){if(t<0){o[n]=1,o[n+1]=0;return}const{start:i,cnt:s,pts:a}=g;let c=-1;for(let r=0;r<s[t];r++){const u=i[t]+r,p=i[t]+(r+1)%s[t],A=a[2*p]-a[2*u],h=a[2*p+1]-a[2*u+1],_=A*A+h*h;if(_>c){c=_;const v=Math.sqrt(_)||1;o[n]=A/v,o[n+1]=h/v}}}const Fn=t=>g.lv[t]?Math.max(2.6,Math.min(4.2,g.h[t]/g.lv[t])):3;function bn(t,o,n,i,s){const{start:a,cnt:c,pts:r}=g;t.beginPath();for(let u=0;u<c[o];u++){const p=a[o]+u,A=(r[2*p]-n)*s,h=(r[2*p+1]-i)*s;u?t.lineTo(A,h):t.moveTo(A,h)}t.closePath(),t.fill()}let N={gl:null,поколение:0,грязь:()=>{}};function Xn(t){N=t}const Cn=()=>Le&&zt===0&&!Lt;function kn(){ut.length=0,Lt=!1,zt=0,Le=!1,Gt.clear()}const qn=128,ut=[];let Lt=!1,zt=0,Le=!1;const Hn="/assets/map/pardubice-mip.webp",$n=`
self.onmessage = async (e) => {
  const { id, url, size, rects, strip } = e.data
  try {
    const blob = await (await fetch(url)).blob()
    const bmp = size ? await createImageBitmap(blob, { resizeWidth: size, resizeHeight: size, resizeQuality: 'high' })
      : await createImageBitmap(blob)
    const list = rects || [[0, 0, 0, bmp.width, bmp.height]]
    self.postMessage({ id, size: [bmp.width, bmp.height] })
    const cv = new OffscreenCanvas(1, 1)
    const cx = cv.getContext('2d', { willReadFrequently: true })
    for (const [l, x, y, w, h] of list) {
      for (let y0 = 0; y0 < h; y0 += strip) {
        const hh = Math.min(strip, h - y0)
        if (cv.width !== w || cv.height !== hh) { cv.width = w; cv.height = hh }
        cx.clearRect(0, 0, w, hh)
        cx.drawImage(bmp, x, y + y0, w, hh, 0, 0, w, hh)
        const d = cx.getImageData(0, 0, w, hh).data
        const lum = new Uint8Array(w * hh)
        for (let i = 0, k = 0; i < lum.length; i++, k += 4) lum[i] = d[k]
        self.postMessage({ id, l, y0, w, h: hh, lum }, [lum.buffer])
      }
    }
    bmp.close()
    self.postMessage({ id, done: true })
  } catch (err) { self.postMessage({ id, fail: String(err) }) }
}`;let ft=null,zn=0;const Gt=new Map;function Gn(){if(ft!==null)return ft;try{if(typeof Worker>"u"||typeof OffscreenCanvas>"u")throw new Error("нет");const t=URL.createObjectURL(new Blob([$n],{type:"text/javascript"}));ft=new Worker(t),URL.revokeObjectURL(t),ft.onmessage=o=>{const n=Gt.get(o.data.id);n&&n(o.data)}}catch{ft=!1}return ft}function Ne(t,o,n){const i=Gn();if(!i)return!1;const s=++zn;return Gt.set(s,a=>{(a.done||a.fail)&&Gt.delete(s),n(a)}),i.postMessage({id:s,url:new URL(t,location.href).href,size:o.size||0,rects:o.rects||null,strip:qn}),!0}function uo(t,o,n,{mip:i,size:s,atlas:a},c){const r=N.gl,u=r.createTexture(),p=N.поколение,A=7,h=()=>{r.activeTexture(r.TEXTURE0+A),r.bindTexture(r.TEXTURE_2D,u)};{r.activeTexture(r.TEXTURE0+t),r.bindTexture(r.TEXTURE_2D,o);const x=[r.TEXTURE_WRAP_S,r.TEXTURE_WRAP_T,r.TEXTURE_MAG_FILTER],M=x.map(k=>r.getTexParameter(r.TEXTURE_2D,k)),S=r.getTexParameter(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER),ht=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),D=ht?r.getTexParameter(r.TEXTURE_2D,ht.TEXTURE_MAX_ANISOTROPY_EXT):null;h(),x.forEach((k,ne)=>r.texParameteri(r.TEXTURE_2D,k,M[ne])),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,i?r.LINEAR:S),ht&&D&&r.texParameterf(r.TEXTURE_2D,ht.TEXTURE_MAX_ANISOTROPY_EXT,D),r.activeTexture(r.TEXTURE0)}let _=!1;const v=()=>{_||(_=!0,r.activeTexture(r.TEXTURE0+t),r.bindTexture(r.TEXTURE_2D,u),r.activeTexture(r.TEXTURE0),r.deleteTexture(o),c&&c(u))},q=x=>document.hidden?setTimeout(x,0):requestAnimationFrame(x),X=x=>{h(),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texSubImage2D(r.TEXTURE_2D,x.l,0,x.y0,x.w,x.h,r.LUMINANCE,r.UNSIGNED_BYTE,x.lum),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.activeTexture(r.TEXTURE0)},C=()=>{if(!N.gl||p!==N.поколение)return;let x=0;for(let S=1;S<ut.length;S++)ut[S].prio<ut[x].prio&&(x=S);const M=ut.splice(x,1)[0];if(!M){Lt=!1;return}M.run(),N.грязь(!0),q(C)},d=x=>{const M=x.strip?x.strip.l>0?2:t===3?0:1:x.prio??(t===3?0:1);ut.push({prio:M,run:()=>x.strip?X(x.strip):x.fn()}),Lt||(Lt=!0,q(C))};let y=0;const W=x=>d({prio:2,fn:()=>{h(),x||r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.activeTexture(r.TEXTURE0),$()}});zt++,Le=!0;let H=!1;const $=()=>{H||(H=!0,zt--)},V=Ne(n,{size:s},x=>{if(!(!N.gl||p!==N.поколение)){if(x.size)y=x.size[0],d({fn:()=>{h(),r.texImage2D(r.TEXTURE_2D,0,r.LUMINANCE,x.size[0],x.size[1],0,r.LUMINANCE,r.UNSIGNED_BYTE,null),r.activeTexture(r.TEXTURE0),v()}});else if(x.lum)d({strip:x});else if(x.done&&!i)d({fn:()=>{$()}});else if(x.fail)$();else if(x.done&&i){if(!a||y!==8192){W(!1);return}const M=[];let S=0;for(let D=1,k=y>>1;k>=1;D++,k>>=1)M.push([D,D===1?0:y>>1,D===1?0:S,k,k]),D>1&&(S+=k);d({prio:2,fn:()=>{h();for(const[D,,,k,ne]of M)r.texImage2D(r.TEXTURE_2D,D,r.LUMINANCE,k,ne,0,r.LUMINANCE,r.UNSIGNED_BYTE,null);r.activeTexture(r.TEXTURE0)}}),Ne(a,{rects:M},D=>{p===N.поколение&&(D.lum?d({strip:D}):D.done?W(!0):D.fail&&W(!1))})||W(!1)}}});return V||$(),V}function lo(t,o,n,{mip:i,size:s}){const a=N.поколение;fetch(n).then(c=>c.blob()).then(c=>s?createImageBitmap(c,{resizeWidth:s,resizeHeight:s,resizeQuality:"high"}):createImageBitmap(c)).then(c=>{const r=()=>{const u=N.gl;!u||a!==N.поколение||(N.грязь(!0),u.activeTexture(u.TEXTURE0+t),u.bindTexture(u.TEXTURE_2D,o),u.texImage2D(u.TEXTURE_2D,0,u.LUMINANCE,u.LUMINANCE,u.UNSIGNED_BYTE,c),i&&u.generateMipmap(u.TEXTURE_2D),u.activeTexture(u.TEXTURE0),c.close&&c.close())};window.requestIdleCallback?window.requestIdleCallback(r,{timeout:2500}):setTimeout(r,300)}).catch(()=>{})}const F={dot:Xo,lit:bo,halo:Co,core:ko,gain:Fo,x:qo,y:Ho,w:$o};let Pt=1600/154.6;function Bn(t){Pt=t}function mo(t,o){const n=Math.min(t*F.w*.5/Pt,o*.1);return{x:t*F.x,y:o*(1-F.y),hw:n*Pt,hh:n}}const Yn="/assets/hero/logo-tronexo.svg";let I=null,Fe=-1,ot=null;function Mi(t){t!==Fe&&(Fe=t,!(!I&&(t<=0||(Eo(),!I)))&&(t>0&&Me(),I.style.opacity=t.toFixed(3)))}function Eo(t){t!==void 0&&(ot=t),!(I||!ot||!ot.parentElement)&&(I=document.createElement("img"),I.alt="",I.decoding="async",I.setAttribute("aria-hidden","true"),I.style.cssText="position:absolute;z-index:-1;pointer-events:none;display:block;max-width:none;opacity:0;will-change:opacity",I.src=Yn,I.decode?.().catch(()=>{}),ot.after(I),Me())}function Me(){if(!I||!ot)return;const t=ot.clientWidth||window.innerWidth,o=ot.clientHeight||window.innerHeight,n=Math.min(t*F.w*.5/Pt,o*.1),i=n*Pt,s=I.style;s.left=`${(t*F.x-i).toFixed(1)}px`,s.top=`${(o*F.y-n).toFixed(1)}px`,s.width=`${(i*2).toFixed(1)}px`,s.height=`${(n*2).toFixed(1)}px`}let To=_e;function wi(t){To=Number.isFinite(t)?t:_e}let l=null,e=null,m=null,f=null,Z=null,Ct=null,kt=null,lt=null,At=null,Tt=null,pt=null,Mt=null,U=null,Rt=null,we=0,qt=[0,.906,.6],Q=0,be=!1,tt=!1,Bt=0,gt=!0,St=!0,Dt=!1,ce=!1,nt=0,st=!1,Yt=0,Xe=!1,Y=0,Ce=!1,Vt=Object.create(null);function b(t,o,n=0,i=0,s=0){const a=Vt[t];return a&&a[0]===o&&a[1]===n&&a[2]===i&&a[3]===s?!1:(Vt[t]=[o,n,i,s],!0)}function L(t){gt=!0,t&&(St=!0),Dt&&!nt&&!st&&(nt=requestAnimationFrame(vo))}Xn({get gl(){return e},get поколение(){return Yt},грязь:L});const et=Object.create(null);let xt=0;const w={qx:0,qys:0,qm:0,qmx:0};function Ui(t,o,n,i,s,a,c){const r=$t(t,o);w.qx=r.x,w.qys=r.y;const u=$t(t+mn,o-To);w.qmx=u.x,w.qm=u.y,!(!e||!f)&&(f.plotS&&e.uniform2f(f.plotS,w.qmx,w.qm),b("plot",w.qmx,w.qm)&&(Y++,L()))}const T={x:0,y:0,sx:0,sy:0,cx:0,cy:0,on:!1,amt:0,надТекстом:!1},ue='a, button, p, h1, h2, h3, li, blockquote, figure, label, summary, header, nav, .menu, [role="dialog"]';function Vn(t,o){const n=document.elementFromPoint(t,o);return!!(n&&n.closest&&n.closest(ue))}let ke=!1;const Ue=[];let qe=0;const bt=new Float32Array(3*Math.max(1,dt));let le=!1,it=[0,.906,.6];function Pe(t,o){if(!l||!l.height)return null;const{mx:n,my:i}=so(t,o,l.width,l.height,rt);if(i>=0)return null;const s=-mt/i,a=Qt*s;if(a<Zt)return null;const c=$t(n*s,a);return c.y+=xt,c}function He(t,o){const n=Pe(t,o);return n?(Ue[qe%dt]={x:n.x,y:n.y,t:performance.now()/1e3},qe++,it=pe("--accent-section",[0,.906,.6]),!0):!1}function po(t){if(!e||!f||!f.taps)return;let o=!1;for(let n=0;n<dt;n++){const i=Ue[n],s=i?t-i.t:-1,a=i&&s>=0&&s<No;bt[n*3]=a?i.x:0,bt[n*3+1]=a?i.y:0,bt[n*3+2]=a?s:-1,a&&(o=!0)}!o&&!le||(le=o,e.uniform3fv(f.taps,bt),f.tapTint&&e.uniform3f(f.tapTint,it[0],it[1],it[2]),f.tapLive&&e.uniform1f(f.tapLive,o?1:0))}let $e=0;const me=[];let ze=0;const _t=new Float32Array(4*te);let Ee=!1;const ge=()=>U?U.полуокно_м*2/he*Ot:0,Se=()=>U?U.полуокно_м*2:7500,vt=()=>j(Z);function xo(t,o,n){const i=ge();if(!i)return null;const s=(t-w.qmx)/i,a=-(o-w.qm)/i;return n.u=P.cu+s*P.cos-a*P.sin,n.v=P.cv+s*P.sin+a*P.cos,n}const Kn=(t,o,n)=>{const i=Math.min(1,Math.max(0,(n-t)/(o-t)));return i*i*(3-2*i)},jn=t=>Ae?ve*ge()/Re*(1-Kn(fe*.55,fe,t)):0,Et={u:0,v:0};function Jn(t,o){if(!l||!l.height||!g)return-1;const{mx:n,my:i}=so(t,o,l.width,l.height,rt);if(i>=0)return-1;const s=-mt/i,a=ro*(Ae?ve*ge()/Re:0),c=Math.max(0,s*(1-a/mt)),r=32;for(let u=0;u<=r;u++){const p=c+(s-c)*u/r,A=Qt*p;if(A<Zt)continue;const h=mt+i*p,_=$t(n*p,A);if(!xo(_.x,_.y,Et))return-1;const v=Nn(Et.u,Et.v);if(v>=0&&g.h[v]*jn(A)>=h-1e-5)return v}return-1}const z=1024,Qn=800;let Ge=null,J=null,Xt=null;const G={id:-1},B=4,Zn=1,ti=.6,R=Array.from({length:B},()=>({id:-1,lv:0,спад:0})),ct=new Float32Array(4),Be=new Float32Array(4),re=new Float32Array(4),ae=new Float32Array(4),K={id:-1,раз:0};let se=0;function ei(t,o){const n=g.bb;let i=n[4*t],s=n[4*t+1],a=n[4*t+2],c=n[4*t+3];for(let r=0;r<B;r++){const u=R[r].id;u<0||r===o||(n[4*u]<i&&(i=n[4*u]),n[4*u+1]<s&&(s=n[4*u+1]),n[4*u+2]>a&&(a=n[4*u+2]),n[4*u+3]>c&&(c=n[4*u+3]))}return Math.max(a-i,c-s)*Se()<=Qn}const oi=t=>{for(let o=0;o<B;o++)if(R[o].id===t)return!0;return!1},de=()=>document.documentElement.classList.contains("menu-open");function Ye(t){if(t<0)return;for(let n=0;n<B;n++)if(R[n].id===t)return;let o=-1;for(let n=0;n<B;n++)if(R[n].id<0){o=n;break}if(o<0){for(let n=0;n<B;n++)R[n].id===G.id||R[n].lv>=.04||(o<0||R[n].lv<R[o].lv)&&(o=n);if(o<0)return}ei(t,o)&&(R[o].id=t,R[o].lv=0,R[o].спад=0,Nt=!0)}function ni(t){for(let o=0;o<B;o++){const n=R[o];n.id<0||(n.id===G.id?(n.lv=Math.min(1,n.lv+t/Zn),n.спад=0):(n.спад||(n.спад=Math.max(n.lv,.15)/ti),n.lv=Math.max(0,n.lv-t*n.спад),n.lv<=0&&(n.id=-1,Nt=!0)))}}let ii=null;const ri=()=>ii||=new Uint8Array(z*z*4);let yt=[0,0,1,1],Kt=0,Nt=!1;function ai(){if(Nt=!1,!e||!g)return;let t=2,o=2,n=-1,i=-1;const s=g.bb;for(let A=0;A<B;A++){const h=R[A].id;h<0||(t=Math.min(t,s[4*h]),o=Math.min(o,s[4*h+1]),n=Math.max(n,s[4*h+2]),i=Math.max(i,s[4*h+3]))}if(n<t){Kt=0,Te();return}Ge||(Ge=!0,Xt=document.createElement("canvas"),Xt.width=Xt.height=z);const a=12/Se(),c=Math.max(n-t,i-o)+2*a;t=(t+n)/2-c/2,o=(o+i)/2-c/2;const r=z/c,u=Xt.getContext("2d",{willReadFrequently:!0}),p=ri();p.fill(0);for(let A=0;A<B;A++){if(R[A].id<0)continue;u.clearRect(0,0,z,z),u.fillStyle="#fff",bn(u,R[A].id,t,o,r);const h=u.getImageData(0,0,z,z).data;for(let _=0;_<h.length;_+=4)p[_+A]=h[_+3]}J||(J=e.createTexture()),e.activeTexture(e.TEXTURE5),e.bindTexture(e.TEXTURE_2D,J),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,z,z,0,e.RGBA,e.UNSIGNED_BYTE,p),e.activeTexture(e.TEXTURE0),yt=[t,o,c,c],Kt=1,Te()}function si(){if(!e||!f||!f.winLv||!g)return;for(let n=0;n<B;n++){const i=R[n].id;ct[n]=i>=0?R[n].lv:0,Be[n]=i>=0?Fn(i):3}Ft(R[0].id,re,0),Ft(R[1].id,re,2),Ft(R[2].id,ae,0),Ft(R[3].id,ae,2),e.uniform4fv(f.winLv,ct),e.uniform4fv(f.winFloor,Be),e.uniform4fv(f.winAx0,re),e.uniform4fv(f.winAx1,ae);const t=b("winLv",ct[0],ct[1],ct[2],ct[3]),o=b("winId",R[0].id,R[1].id,R[2].id,R[3].id);(t||o)&&L()}function Te(){!e||!f||(f.mapM&&e.uniform1f(f.mapM,Se()),f.houseBox&&e.uniform4f(f.houseBox,yt[0],yt[1],yt[2],yt[3]),f.houseOn&&e.uniform1f(f.houseOn,Kt),L())}function ho(t){if(!e||!f||!f.waves)return;let o=!1;for(let n=0;n<te;n++){const i=me[n],s=i?t-i.t:-1,a=i&&s>=0&&s<xe;_t[n*4]=a?i.u:0,_t[n*4+1]=a?i.v:0,_t[n*4+2]=a?s:-1,_t[n*4+3]=0,a&&(o=!0)}!o&&!Ee||(Ee=o,e.uniform4fv(f.waves,_t),L())}function Ve(t,o){const n=Pe(t,o);if(!n||!xo(n.x,n.y-xt,Et))return!1;const i=performance.now()/1e3,s=ze%te,a=me[s];return a&&i-a.t<xe?!1:(me[s]={u:Et.u,v:Et.v,t:i},ze++,!0)}let Ke=0,O={x:-1,y:-1,карта:-1,on:null,текст:null,меню:null,скрол:NaN};function fi(t){if(vt()){if(Wn(),g){if((Ke++&1)===0){const n=window.scrollY;T.on&&(n!==O.скрол||Y!==O.карта||(Ke&15)===1)&&(T.надТекстом=Vn(T.cx,T.cy)),O.скрол=n;const i=de(),s=T.x!==O.x||T.y!==O.y||Y!==O.карта||T.on!==O.on||T.надТекстом!==O.текст||i!==O.меню,a=K.раз>0&&K.id!==G.id;if(s||a){O.x=T.x,O.y=T.y,O.карта=Y,O.on=T.on,O.текст=T.надТекстом,O.меню=i;const c=T.on&&!T.надТекстом&&!i?Jn(T.x,T.y):-1;c===G.id?K.раз=0:c===K.id?++K.раз>=2&&(G.id=c,K.раз=0,Ye(c)):(K.id=c,K.раз=1)}}(!T.on||de())&&G.id>=0&&(G.id=-1),G.id>=0&&!oi(G.id)&&Ye(G.id);const o=se?Math.min(.1,Math.max(0,t-se)):0;se=t,ni(o),Nt&&ai(),si()}ho(t)}}function ci(){window.__cfigTrack={mouse:T,taps:()=>Ue.map(t=>t&&{x:+t.x.toFixed(3),y:+t.y.toFixed(3),возраст:+(performance.now()/1e3-t.t).toFixed(2)}),setSign:(t,o,n)=>xi(t,o,n),setWord:t=>_i(t),state:()=>e&&f?{пятно:e.getUniform(m,f.sign)[2],слово:e.getUniform(m,f.wordAmt),вид:Array.from(e.getUniform(m,f.look)),коробка:Array.from(e.getUniform(m,f.wordBox))}:null,залито:Cn,пересобрать:()=>{if(!e)return!1;const t=et[Ht()];return t&&(e.deleteProgram(t.prog),delete et[Ht()]),m=null,jt()},карта:()=>e&&m&&f.mapCen?{u:e.getUniform(m,f.mapCen)[0],v:e.getUniform(m,f.mapCen)[1],охват:f.mapSpan?e.getUniform(m,f.mapSpan):null,cos:e.getUniform(m,f.mapRot)[0],sin:e.getUniform(m,f.mapRot)[1]}:null,wordBox:()=>mo(l?l.width:0,l?l.height:0),freeze:()=>oe(),thaw:()=>{tt||(tt=!0,Bt=performance.now(),L(!0),Q=requestAnimationFrame(Jt))},frame:(t,o,n)=>{e&&(It(),e.uniform1f(f.time,0),e.uniform1f(f.off,xt=0),e.uniform3f(f.mouse,...Ut(t,o),n),e.drawArrays(e.TRIANGLES,0,3))},frameTap:(t,o,n)=>{if(!e||!f)return null;It(),e.uniform1f(f.time,0),e.uniform1f(f.off,xt=0),e.uniform3f(f.mouse,0,0,0);const i=Pe(...Ut(t,o));if(!i)return null;if(f.taps){const s=new Float32Array(3*dt);for(let a=0;a<dt;a++)s[a*3+2]=-1;s[0]=i.x,s[1]=i.y,s[2]=n,e.uniform3fv(f.taps,s),f.tapLive&&e.uniform1f(f.tapLive,n>=0?1:0),f.tapTint&&e.uniform3f(f.tapTint,it[0],it[1],it[2])}return e.drawArrays(e.TRIANGLES,0,3),{x:+i.x.toFixed(3),y:+i.y.toFixed(3)}}}}function ui(){if(ke)return;ke=!0,addEventListener("pointermove",a=>{if(a.pointerType&&a.pointerType!=="mouse")return;const[c,r]=Ut(a.clientX,a.clientY);T.x=c,T.y=r,T.on||(T.sx=T.x,T.sy=T.y),T.on=!0,T.cx=a.clientX,T.cy=a.clientY;const u=a.target;T.надТекстом=!!(u&&u.closest&&u.closest(ue))},{passive:!0}),addEventListener("pointerout",a=>{a.relatedTarget||(T.on=!1)},{passive:!0}),addEventListener("blur",()=>{T.on=!1});const t=a=>{if(a.button!==void 0&&a.button!==0||!tt||!l||Number(l.style.opacity||0)<=.02||!io(Z)&&!vt())return!1;const c=a.target;return vt()&&(de()||c&&c.closest&&c.closest(ue))?!1:!(c&&c.closest&&c.closest('a, button, input, textarea, select, label, summary, [role="button"], [contenteditable]'))},o=a=>Ut(a.clientX,a.clientY),n=12,i=500;let s=null;addEventListener("pointerdown",a=>{if(!t(a)){s=null;return}if(a.pointerType==="touch"||a.pointerType==="pen"){s={x:a.clientX,y:a.clientY,t:performance.now(),id:a.pointerId};return}vt()?Ve(...o(a)):He(...o(a))},{passive:!0}),addEventListener("pointerup",a=>{const c=s;s=null,!(!c||c.id!==a.pointerId||!t(a))&&(Math.hypot(a.clientX-c.x,a.clientY-c.y)>n||performance.now()-c.t>i||(vt()?Ve(...o(a)):He(...o(a))))},{passive:!0}),addEventListener("pointercancel",()=>{s=null},{passive:!0})}function pe(t,o){const i=getComputedStyle(document.body).getPropertyValue(t).trim().match(/[\d.]+/g);return!i||i.length<3?o:[+i[0]/255,+i[1]/255,+i[2]/255,i[3]===void 0?1:+i[3]]}function li(t){const n=new Uint8Array(65536);for(let s=0;s<n.length;s++)n[s]=Math.random()*256|0;const i=t.createTexture();return t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,128,128,0,t.RGBA,t.UNSIGNED_BYTE,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.generateMipmap(t.TEXTURE_2D),i}function mi(t){const o=t.createTexture();t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR);const n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");if(n){const c=t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);t.texParameterf(t.TEXTURE_2D,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.max(1,Math.min(16,c)))}t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,1,1,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([0])),t.activeTexture(t.TEXTURE0);const i=e?e.getParameter(e.MAX_TEXTURE_SIZE):4096,s={mip:!0,size:i>=8192?0:i,atlas:Hn},a="/assets/map/pardubice.webp";return uo(3,o,a,s,c=>{lt=c})||lo(3,o,a,s),fetch("/assets/map/pardubice.json").then(c=>c.json()).then(c=>{U=c,Ao(),De(),_o(),Y++,L()}).catch(()=>{}),o}function Ei(t){const o=t.createTexture();return t.activeTexture(t.TEXTURE4),t.bindTexture(t.TEXTURE_2D,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texImage2D(t.TEXTURE_2D,0,t.LUMINANCE,1,1,0,t.LUMINANCE,t.UNSIGNED_BYTE,new Uint8Array([0])),t.activeTexture(t.TEXTURE0),uo(4,o,"/assets/map/pardubice-h.webp",{mip:!1},n=>{Mt=n})||lo(4,o,"/assets/map/pardubice-h.webp",{mip:!1}),o}let Ot=1;function De(){if(!e||!f)return;const t=U?U.полуокно_м*2:4200;f.mapSpan&&e.uniform1f(f.mapSpan,t/he*Ot),f.markR&&e.uniform1f(f.markR,wn/t)}let rt=0;function Pi(t){rt=t||0,e&&f&&f.lens&&(e.uniform1f(f.lens,rt),b("lens",rt)&&(Y++,L()))}function gi(t){const o=Ot;Ot=t,o!==t&&(De(),Y++,L())}function _o(){if(!e||!f||!f.hpx)return;const t=U&&U.высоты&&U.высоты.сторона_пикс;e.uniform1f(f.hpx,t||4096)}function Ao(){if(!e||!f||!f.spots||!U)return;const t=new Float32Array(10);ao.forEach((o,n)=>{const i=U.проекты[o];i&&(t[n*2]=i.u,t[n*2+1]=i.v)}),e.uniform2fv(f.spots,t)}function Si(t){if(!(!e||!f||!f.ringsOn)&&(e.uniform1f(f.ringsOn,t?1:0),b("ringsOn",t?1:0)&&L(),t&&f.rings)){const o=[0,1,2,3,4].map(n=>t[n]||0);e.uniform1fv(f.rings,new Float32Array(o)),b("rings",o[0],o[1],o[2],o[3])|b("rings4",o[4])&&L()}}function Di(t,o,n,i,s){!e||!f||!f.spotAct||(e.uniform1f(f.spotAct,t),b("spotAct",t)&&L(),o!==void 0&&(e.uniform2f(f.mapCen,o,n),P.cu=o,P.cv=n),i!==void 0&&(e.uniform2f(f.mapRot,i,s),P.cos=i,P.sin=s),(o!==void 0&&b("mapCen",o,n))|(i!==void 0&&b("mapRot",i,s))&&(Y++,L()))}const P={cu:.5,cv:.5,cos:1,sin:0};function Oi(){if(!l||!l.height)return null;const t=fo(w.qmx,w.qm,l.width,l.height,rt);return t&&{x:t.x,y:t.y}}function Ii(t){if(!l||!l.height||!U)return null;const o=U.проекты[ao[t]];if(!o)return null;const i=U.полуокно_м*2/he*Ot,s=o.u-P.cu,a=o.v-P.cv,c=s*P.cos+a*P.sin,r=-s*P.sin+a*P.cos,u=fo(w.qmx+c*i,w.qm-r*i,l.width,l.height,rt);return u?{x:u.x,y:u.y,s:In(w.qmx,w.qm)/u.depth}:null}function Wi(){return U&&U.проекты}function jt(){if(e=l.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1}),!e||(pi(),e.isContextLost())||!e.getExtension("OES_standard_derivatives"))return!1;pt=e.getExtension("KHR_parallel_shader_compile");const t=Ht();let o=et[t];if(!o){const n=e.createShader(e.VERTEX_SHADER);e.shaderSource(n,Dn),e.compileShader(n);const i=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(i,On(t)),e.compileShader(i);const s=e.createProgram();e.attachShader(s,n),e.attachShader(s,i),e.linkProgram(s),o=et[t]={prog:s,vs:n,fs:i,вид:t,готова:!1,uni:null}}return m=o.prog,Tt=o,pt&&!o.готова?!0:Oe()}function di(t){const o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<o;n++){const i=e.getActiveUniform(t,n);if(!i)continue;const s=e.getUniformLocation(t,i.name);if(!s)continue;const a={[e.FLOAT]:1,[e.FLOAT_VEC2]:2,[e.FLOAT_VEC3]:3,[e.FLOAT_VEC4]:4}[i.type];a===1?e.uniform1fv(s,new Float32Array(i.size)):a===2?e.uniform2fv(s,new Float32Array(2*i.size)):a===3?e.uniform3fv(s,new Float32Array(3*i.size)):a===4?e.uniform4fv(s,new Float32Array(4*i.size)):(i.type===e.SAMPLER_2D||i.type===e.INT||i.type===e.BOOL)&&e.uniform1iv(s,new Int32Array(i.size))}}function Oe(){const t=Tt;Tt=null;const{vs:o,fs:n,вид:i}=t;if(t.готова)t.uni&&(e.useProgram(t.prog),di(t.prog));else{for(const p of[o,n])if(!e.getShaderParameter(p,e.COMPILE_STATUS))return console.warn("[cfig] дорожка не собралась:",e.getShaderInfoLog(p)),delete et[i],!1;if(!e.getProgramParameter(t.prog,e.LINK_STATUS))return console.warn("[cfig] дорожка не слинковалась:",e.getProgramInfoLog(t.prog)),delete et[i],!1;e.detachShader(t.prog,o),e.detachShader(t.prog,n),e.deleteShader(o),e.deleteShader(n),t.vs=t.fs=null,t.готова=!0}m=t.prog,e.useProgram(m),Z=i,Vt=Object.create(null),L(!0),Rt||(Rt=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,Rt),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW)),e.bindBuffer(e.ARRAY_BUFFER,Rt);const s=e.getAttribLocation(m,"aPos");e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,0,0),f=t.uni=t.uni||{res:e.getUniformLocation(m,"uRes"),off:e.getUniformLocation(m,"uOffset"),lens:e.getUniformLocation(m,"uLensY"),time:e.getUniformLocation(m,"uTime"),mouse:e.getUniformLocation(m,"uMouse"),lift:e.getUniformLocation(m,"uLift"),sign:e.getUniformLocation(m,"uSign"),wordAmt:e.getUniformLocation(m,"uWordAmt"),wordBox:e.getUniformLocation(m,"uWordBox"),wordTint:e.getUniformLocation(m,"uWordTint"),look:e.getUniformLocation(m,"uWordLook"),gain:e.getUniformLocation(m,"uWordGain"),pool:e.getUniformLocation(m,"uPool"),plotS:e.getUniformLocation(m,"uPlotS"),spots:e.getUniformLocation(m,"uSpots"),spotAct:e.getUniformLocation(m,"uSpotAct"),rings:e.getUniformLocation(m,"uRings"),ringsOn:e.getUniformLocation(m,"uRingsOn"),mapCen:e.getUniformLocation(m,"uMapCen"),mapSpan:e.getUniformLocation(m,"uMapSpan"),markR:e.getUniformLocation(m,"uMarkR"),mapRot:e.getUniformLocation(m,"uMapRot"),hpx:e.getUniformLocation(m,"uHPx"),taps:e.getUniformLocation(m,"uTaps"),tapTint:e.getUniformLocation(m,"uTapTint"),tapLive:e.getUniformLocation(m,"uTapLive"),waves:e.getUniformLocation(m,"uWaves"),mapM:e.getUniformLocation(m,"uMapM"),houseBox:e.getUniformLocation(m,"uHouseBox"),houseOn:e.getUniformLocation(m,"uHouseOn"),houseMask:e.getUniformLocation(m,"uHouseMask"),winLv:e.getUniformLocation(m,"uWinLv"),winFloor:e.getUniformLocation(m,"uWinFloor"),winAx0:e.getUniformLocation(m,"uWinAx0"),winAx1:e.getUniformLocation(m,"uWinAx1")},e.viewport(0,0,l.width,l.height),e.uniform2f(f.res,l.width,l.height),ee(),e.uniform2f(f.plotS,w.qx,w.qys),f.spotAct&&e.uniform1f(f.spotAct,-1),f.ringsOn&&e.uniform1f(f.ringsOn,0),f.mapCen&&e.uniform2f(f.mapCen,.5,.5),f.mapRot&&e.uniform2f(f.mapRot,1,0),De(),Ao(),_o(),e.uniform2f(f.lift,Mo,wo),e.uniform3f(f.sign,0,0,0),le=!0,po(performance.now()/1e3),f.houseMask&&(J||(J=e.createTexture(),e.activeTexture(e.TEXTURE5),e.bindTexture(e.TEXTURE_2D,J),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4))),e.activeTexture(e.TEXTURE5),e.bindTexture(e.TEXTURE_2D,J),e.uniform1i(f.houseMask,5),e.activeTexture(e.TEXTURE0)),Ee=!0,ho(performance.now()/1e3),Te(),e.uniform1f(f.wordAmt,we),e.uniform3f(f.wordTint,qt[0],qt[1],qt[2]),Ro(),kt||(kt=hi(e)),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,kt),e.uniform1i(e.getUniformLocation(m,"uWord"),1),e.activeTexture(e.TEXTURE0),e.uniform2f(f.pool,Po,go);const a=pe("--track-dot",[.31,.58,.77,.42]),c=pe("--track-dot-far",[.31,.58,.77,.13]);e.uniform3f(e.getUniformLocation(m,"uDot"),a[0],a[1],a[2]),e.uniform1f(e.getUniformLocation(m,"uDotA"),a[3]),e.uniform3f(e.getUniformLocation(m,"uWash"),c[0],c[1],c[2]);const r=e.getUniformLocation(m,"uCity");r&&!lt&&(lt=mi(e)),!lt&&!At&&(At=e.createTexture(),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,At),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,1,1,0,e.LUMINANCE,e.UNSIGNED_BYTE,new Uint8Array([0]))),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,lt||At),r&&e.uniform1i(r,3);const u=e.getUniformLocation(m,"uHeight");return u&&(Mt||(Mt=Ei(e)),e.activeTexture(e.TEXTURE4),e.bindTexture(e.TEXTURE_2D,Mt),e.uniform1i(u,4),e.activeTexture(e.TEXTURE0)),e.activeTexture(e.TEXTURE0),Ct||(Ct=li(e)),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ct),e.uniform1i(e.getUniformLocation(m,"uNoise"),0),Bt||(Bt=performance.now()),!0}function Ro(){!e||!f||!f.look||(e.uniform4f(f.look,F.dot,F.lit,F.halo,F.core),e.uniform1f(f.gain,F.gain))}function Ni(t){Object.assign(F,t),Ro(),ee(),L(!0)}const Fi=()=>({...F});function ee(){if(!e||!f||!l)return;const t=mo(l.width,l.height);e.uniform4f(f.wordBox,t.x,t.y,t.hw,t.hh)}function It(){const t=ye(),o=Math.max(1,Math.round(l.clientWidth*t)),n=Math.max(1,Math.round(l.clientHeight*t));l.width===o&&l.height===n||(l.width=o,l.height=n,Y++,L(!0),f&&(e.viewport(0,0,o,n),e.uniform2f(f.res,o,n),ee()))}function Ti(t,o,n){return(t*on+o/n*nn)*no}function Jt(t){if(Q=0,!e||st)return;if(Tt){if(pt&&!e.getProgramParameter(m,pt.COMPLETION_STATUS_KHR)){Q=requestAnimationFrame(Jt);return}if(!Oe()){l.style.opacity="0",tt=!1;return}}const o=window.innerHeight||1,n=Lo(),i=Math.max(0,Math.min(1,(n-o*gn)/(o*Sn))),s=document.documentElement.classList;if(s.contains("route-fade")&&!s.contains("route-in"))l.style.transition||(l.style.transition="opacity 600ms ease-in"),l.style.opacity!=="0"&&(l.style.opacity="0");else{l.style.transition&&(l.style.transition="");const a=i.toFixed(3),c=l.style.opacity;(c===""||Number(c)!==Number(a))&&(l.style.opacity=a)}if(i>0){It();const a=((t||performance.now())-Bt)/1e3;e.uniform1f(f.time,a),e.uniform1f(f.off,xt=Ti(a,n,o));const c=Math.min(.1,Math.max(0,((t||performance.now())-$e)/1e3));$e=t||performance.now();const r=T.on?1:0;T.amt+=(r-T.amt)*Math.min(1,c*(r?Go:Bo)),T.sx+=(T.x-T.sx)*Math.min(1,c*Ie),T.sy+=(T.y-T.sy)*Math.min(1,c*Ie),e.uniform3f(f.mouse,T.sx,T.sy,Uo(Z)?T.amt:0),po((t||performance.now())/1e3),fi((t||performance.now())/1e3),(!j(Z)||gt||St||!Ce||we>0)&&(e.drawArrays(e.TRIANGLES,0,3),gt=St=!1)}Ce=i>0,tt&&(Q=requestAnimationFrame(Jt))}function vo(){if(nt=0,!(!e||st||!Dt)){if(Tt){if(pt&&!e.getProgramParameter(m,pt.COMPLETION_STATUS_KHR)){nt=requestAnimationFrame(vo);return}if(!Oe()){l.style.opacity="0";return}}ce&&(ce=!1,l.style.transition="",l.style.opacity="1"),!(!St&&!(j(Z)&&gt))&&(It(),e.uniform1f(f.time,0),e.uniform1f(f.off,xt=0),e.uniform3f(f.mouse,0,0,0),e.drawArrays(e.TRIANGLES,0,3),gt=St=!1)}}function oe(){tt=!1,Q&&cancelAnimationFrame(Q),Q=0,Dt=!1,nt&&cancelAnimationFrame(nt),nt=0}function yo(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){oe(),Dt=!0,ce=!0,L(!0);return}Dt=!1,tt||(tt=!0,L(!0),Q=requestAnimationFrame(Jt))}function pi(){Xe||!l||(Xe=!0,l.addEventListener("webglcontextlost",t=>{t.preventDefault(),st=!0,oe(),Yt++;for(const o of Object.keys(et))delete et[o];m=null,f=null,Tt=null,Z=null,Ct=kt=lt=At=Mt=null,Rt=null,J=null,Kt=0,Nt=R.some(o=>o.id>=0),kn(),Vt=Object.create(null)}),l.addEventListener("webglcontextrestored",()=>{if(st=!1,!(!l||getComputedStyle(l).display==="none")){if(!jt()){l.style.opacity="0";return}yo()}}))}function xi(t,o,n){if(!e||!f||!f.sign)return;const[i,s]=Ut(t,o);e.uniform3f(f.sign,i,s,n),b("sign",i,s,n)&&L()}function hi(t){const o=t.createTexture();t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.activeTexture(t.TEXTURE0),t.activeTexture(t.TEXTURE1),t.texImage2D(t.TEXTURE_2D,0,t.ALPHA,1,1,0,t.ALPHA,t.UNSIGNED_BYTE,new Uint8Array([0])),t.activeTexture(t.TEXTURE0);const n=Yt,i=new Image;return i.onload=()=>{if(!t||n!==Yt)return;const s=2048,a=i.naturalWidth/Math.max(1,i.naturalHeight),c=Math.max(2,Math.round(s/a)),r=document.createElement("canvas");r.width=s,r.height=c,r.getContext("2d").drawImage(i,0,0,s,c),Bn(a),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.ALPHA,t.ALPHA,t.UNSIGNED_BYTE,r),t.activeTexture(t.TEXTURE0),ee(),L(!0)},i.src=zo,o}function _i(t,o){we=t,o&&(qt=[o[0],o[1],o[2]]),!(!e||!f||!f.wordAmt)&&(o&&e.uniform3f(f.wordTint,o[0],o[1],o[2]),e.uniform1f(f.wordAmt,t),b("word",t)|(o?b("wordTint",o[0],o[1],o[2]):!1)&&L())}function bi(){if(l=document.querySelector("canvas.canvas-track"),!!l){if(getComputedStyle(l).display==="none"){oe(),l.style.opacity="0";return}if(ui(),ci(),Eo(l),!(e&&st)){if(e&&Z!==Ht()&&!jt()){l.style.opacity="0";return}if(!e&&!jt()){l.style.opacity="0";return}be||(window.addEventListener("resize",()=>{e&&!st&&It(),Me()},{passive:!0}),be=!0),yo()}}}export{Wt as FIELD,Li as MAP_NEAR,Oi as anchorScreen,bi as init,Pi as setLens,wi as setMapNear,gi as setMapZoom,Ui as setPlot,Si as setRings,xi as setSignGlow,Di as setSpot,_i as setWord,Mi as setWordClean,Ni as setWordLook,Ii as spotScreen,Wi as spots,Fi as wordLook};
