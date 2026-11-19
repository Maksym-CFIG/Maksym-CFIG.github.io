import{W as U}from"./three.module.BDbTcLBq.js";import{B as q,a as b,D as G,S as O,P as X,G as Z,c as F,V as k,b as L,A as K,d as Y,L as Q,C as tt,N as et}from"./three.core.Bs7hxDeK.js";const V="/data/cloud.json",st="/data",J=.744,N=.7,$=[{y:.04,scale:J,rotZ:-10*Math.PI/180,dx:.78,edge:!1,narrowPos:[0,.55,0],narrowScale:.45,narrowFade:1},{y:-.18,scale:.86,rotZ:0,dx:0,edge:!0,narrowPos:[0,.45,0],narrowScale:.44,narrowFade:.42},{y:.06,scale:.86,rotZ:0,dx:0,edge:!0,narrowPos:[0,.62,0],narrowScale:.38,narrowFade:.42},{y:.02,scale:N,rotZ:0,dx:0,edge:!0,narrowPos:[0,.45,0],narrowScale:.4,narrowFade:.42}],it=-9.2*Math.PI/180,_=.45,j={candle:{rot:.22,scale:.88,dx:-.62},pillars:{rot:.34},terraces:{rot:.3},lattice:{rot:.55}},at=5,ot=.025,nt=[0,0,.3,.72],rt=1200,ht=26,ut=220,lt=.34,ct=.32,R=A=>A*A*(3-2*A),H=.3,pt=900,ft=768,dt=1440*900*4,mt=48e3,W=1.7,vt=12e4,gt=`
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
}`,wt=`
precision mediump float;
uniform float uFade;
uniform vec3 uColor;
varying float vA;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.30, length(c)) * vA * uFade;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uColor, a);
}`,St=`
uniform float uRotS;
void main(){
  vec3 p = position;
  float cr = cos(uRotS), sr = sin(uRotS);
  p.xz = vec2(cr * p.x + sr * p.z, -sr * p.x + cr * p.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,yt=`
precision mediump float;
uniform float uFade, uTime;
uniform vec3 uColor;
void main(){
  // Связи пульсируют (§5) — общий медленный вдох, без разнобоя по отрезкам.
  float pulse = 0.72 + 0.28 * sin(uTime * 0.0009);
  gl_FragColor = vec4(uColor, 0.22 * uFade * pulse);
}`;function D(A,e){const t=document.body||document.documentElement,s=getComputedStyle(t).getPropertyValue(A).trim()||e,i=/^#([0-9a-f]{6})$/i.exec(s),a=parseInt(i?i[1]:e.slice(1),16);return new tt().setRGB((a>>16&255)/255,(a>>8&255)/255,(a&255)/255,et)}function Mt(){try{const A=document.createElement("canvas");return!!(A.getContext("webgl2")||A.getContext("webgl"))}catch{return!1}}class x{constructor(e){this.canvas=e,this.stateA=0,this.stateB=0,this.t=0,this.convergePos=0,this.anim=null,this.mod={scale:1,alpha:1,dx:0,dy:0,dust:0,pose:0},this.opacity=1,this.visible=!1,this.raf=0,this.ready=!1,this.reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.props={drift:1,density:1,pointSize:W,breathSpeed:.4}}async chunk(e){this.chunks??=new Map;const t=this.chunks.get(e);if(t)return this.chunks.delete(e),this.chunks.set(e,t),t;const s=this.meta.files[e];if(!s)throw new Error(`нет файла данных «${e}»`);const a={buf:await fetch(`${st}/${s.file}${this.bust??""}`).then(r=>{if(!r.ok)throw new Error(`${s.file}: HTTP ${r.status}`);return r.arrayBuffer()}),layout:s.layout};for(this.chunks.set(e,a);this.chunks.size>at;)this.chunks.delete(this.chunks.keys().next().value);return a}async loadGallop({force:e=!1}={}){if(e&&(this.gallop=null,this.gallopAt=null,this.bust=`?t=${Date.now()}`),this.gallop)return this.gallop;const t=await fetch(`/data/cloud-gallop.json${this.bust??""}`).then(u=>{if(!u.ok)throw new Error(`описание галопа: HTTP ${u.status}`);return u.json()}),s=await fetch(`/data/${t.file}${this.bust??""}`).then(u=>{if(!u.ok)throw new Error(`${t.file}: HTTP ${u.status}`);return u.arrayBuffer()});if(t.n!==this.meta.n)throw new Error(`в галопе ${t.n} точек против ${this.meta.n} в облаке`);const i=[];for(let u=0;u<t.frames;u++){const{offset:c,bytes:p}=t.layout[`p${u}`];i.push(new Int16Array(s,c,p/2))}this.gallop={meta:t,poses:i,k:t.scale/32767},this.gallopAt=null;const a=this.meta.states[0],r=i[t.ref],o=this.gallop.k,n=this.meta.support?.[a]?.length??180,h=new Array(n).fill(0);for(let u=0;u<t.n;u++){const c=r[u*3]*o,p=r[u*3+1]*o;if(!Math.hypot(c,p))continue;let l=Math.atan2(p,c);l<0&&(l+=Math.PI*2);const d=l/(Math.PI*2)*n;for(let g=-1;g<=1;g++){const f=((Math.round(d)+g)%n+n)%n,M=f/n*Math.PI*2,m=c*Math.cos(M)+p*Math.sin(M);m>h[f]&&(h[f]=m)}}return this.meta.extents[a]={...t.extents},this.meta.support&&(this.meta.support[a]=h),this.resize(),this.gallop}setGallopPhase(e){const t=this.gallop;if(!t)return;const s=t.meta.frames;this.gallopT=e;const a=(e%1+1)%1*s,r=Math.floor(a)%s,o=(r+1)%s,n=a-Math.floor(a);if(this.gallopAt!=null&&Math.abs(a-this.gallopAt)<1/(s*32))return;this.gallopAt=a;const h=this.gallopBlend??1,u=t.k,c=t.poses[r],p=t.poses[o],w=s>>1,l=t.poses[(r+w)%s],d=t.poses[(o+w)%s],g=this.geo.getAttribute("aPos0"),f=g.array,M=this.count,m=this.step,v=this.mod?.pose??0,B=.5-h/2;for(let S=0;S<M;S++){const y=S*m*3,T=S*3,z=S*.6180339887498949,P=h>0?B+h*(z-Math.floor(z)):.5,C=S*.7548776662466927,I=v>C-Math.floor(C),E=I?n<P?l:d:n<P?c:p;f[T]=(I?-E[y]:E[y])*u,f[T+1]=E[y+1]*u,f[T+2]=E[y+2]*u}g.needsUpdate=!0}async reload(){this.bust=`?t=${Date.now()}`,this.meta=await fetch(V+this.bust).then(t=>{if(!t.ok)throw new Error(`описание: HTTP ${t.status}`);return t.json()});const e=[...this.loaded];this.loaded.clear(),this.pending.clear(),await Promise.all(e.map(t=>this.ensureState(t))),this.resize()}i16(e,t){const{offset:s,bytes:i}=e.layout[t];return new Int16Array(e.buf,s,i/2)}u8(e,t){const{offset:s,bytes:i}=e.layout[t];return new Uint8Array(e.buf,s,i)}positions(e,t){const s=this.i16(e,t),i=this.meta.scale/32767,a=this.count,r=this.step,o=new Float32Array(a*3);for(let n=0;n<a;n++){const h=n*r*3;o[n*3]=s[h]*i,o[n*3+1]=s[h+1]*i,o[n*3+2]=s[h+2]*i}return o}async load(e=0){this.meta=await fetch(V).then(l=>l.json());const t=this.meta;this.step=window.innerWidth<ft?Math.max(1,Math.round(t.n/vt)):1,this.count=Math.floor(t.n/this.step);const s=this.count;this.props.pointSize=W*Math.sqrt(mt/s);const i=t.states[e],[a,r]=await Promise.all([this.chunk("common"),this.chunk(i)]),o=new q,n=this.positions(r,i);t.states.forEach((l,d)=>{const g=d===e?n:n.slice(),f=new b(g,3);f.setUsage(G),o.setAttribute(`aPos${d}`,f),d===0&&o.setAttribute("position",f)});const h=this.u8(a,"seed"),u=this.u8(a,"seed2"),c=new Float32Array(s),p=new Float32Array(s);for(let l=0;l<s;l++){const d=l*this.step;c[l]=h[d]/255,p[l]=u[d]/255}o.setAttribute("aSeed",new b(c,1)),o.setAttribute("aJit",new b(p,1));const w=new b(new Float32Array(s*3),3);return w.setUsage(G),o.setAttribute("aBreath",w),this.geo=o,this.linkGeo=new q,this.linkGeo.setAttribute("position",new b(new Float32Array(3),3)),this.loaded=new Set([e]),this.pending=new Map,this.build(),this.ready=!0,this.loadExtras(i),this.prefetch(),this}loadExtras(e){const t=this.meta.extra?.[e]??[];return t.length?Promise.all(t.map(s=>this.chunk(s))).then(s=>this.applyExtras(t,s)).catch(s=>console.warn("[cfig] довески не приехали:",s.message)):Promise.resolve()}ensureState(e,{force:t=!1}={}){if(this.loaded.has(e))return Promise.resolve();if(this.figures?.[e]){if(!t)return Promise.resolve();delete this.figures[e],this.sizeMul0&&this.uniforms.uSizeMul.value.setComponent(e,this.sizeMul0.getComponent(e))}if(this.pending.has(e))return this.pending.get(e);const s=this.meta,i=s.states[e],a=s.extra?.[i]??[],r=Promise.all([this.chunk(i),...a.map(o=>this.chunk(o))]).then(([o,...n])=>{if(!t&&this.figures?.[e]){this.pending.delete(e);return}const h=this.geo.getAttribute(`aPos${e}`);h.array.set(this.positions(o,i)),h.needsUpdate=!0,this.applyExtras(a,n),this.loaded.add(e),this.pending.delete(e)}).catch(o=>{throw this.pending.delete(e),o});return this.pending.set(e,r),r}applyExtras(e,t){for(const[s,i]of e.entries())i==="breath"&&this.applyBreath(t[s]),i==="links"&&this.applyLinks(t[s])}applyBreath(e){const t=this.i16(e,"anchor"),s=this.u8(e,"amp"),i=this.u8(e,"phase"),a=this.meta.scale/32767,r=this.geo.getAttribute("aBreath"),o=r.array;for(let n=0;n<this.count;n++){const h=n*this.step;o[n*3]=t[h]*a,o[n*3+1]=s[h]/255*this.meta.ampScale,o[n*3+2]=i[h]/255*Math.PI*2}r.needsUpdate=!0}applyLinks(e){const t=this.i16(e,"links"),s=this.meta.scale/32767,i=new Float32Array(t.length);for(let a=0;a<t.length;a++)i[a]=t[a]*s;this.linkGeo.setAttribute("position",new b(i,3)),this.linkGeo.attributes.position.needsUpdate=!0}async prefetch(){for(let e=0;e<this.meta.states.length;e++)if(!this.loaded.has(e))try{await this.ensureState(e)}catch(t){console.warn("[cfig] догрузка:",t.message)}}build(){const e=D("--cloud-point","#ECCC6B"),t=Math.min(window.devicePixelRatio||1,2);this.renderer=new U({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(t),this.scene=new O,this.camera=new X(34,1,.1,20),this.camera.position.z=3.4,this.group=new Z,this.scene.add(this.group),this.uniforms={uTime:{value:0},uSelA:{value:new F(1,0,0,0)},uSelB:{value:new F(1,0,0,0)},uT:{value:0},uSpread:{value:0},uBurst:{value:0},uConv:{value:0},uDust:{value:0},uMouse:{value:new k(999,999)},uMouseV:{value:new k(0,0)},uDustAmp:{value:new k(3.3,3.3)},uCalm:{value:1},uThin:{value:1},uBeam:{value:99},uBeamW:{value:H},uDrift:{value:1},uSize:{value:this.props.pointSize},uDpr:{value:t},uBreath:{value:this.props.breathSpeed},uRotB:{value:0},uRotS:{value:0},uFade:{value:0},uColor:{value:e},uSizeMul:{value:new F(J,1,1,N/.82)}};const s={transparent:!0,depthWrite:!1,blending:K};this.mat=new L({...s,uniforms:this.uniforms,vertexShader:gt,fragmentShader:wt}),this.points=new Y(this.geo,this.mat),this.points.frustumCulled=!1,this.group.add(this.points),this.lineMat=new L({...s,uniforms:{uFade:{value:0},uTime:this.uniforms.uTime,uRotS:this.uniforms.uRotS,uColor:{value:D("--cloud-line","#ECCC6B")}},vertexShader:St,fragmentShader:yt}),this.lines=new Q(this.linkGeo,this.lineMat),this.lines.frustumCulled=!1,this.group.add(this.lines),this.resize(),this.t0=performance.now()}resize(){if(!this.renderer)return;const e=this.canvas.clientWidth,t=this.canvas.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.narrow=e<pt;const s=document.querySelector("#container-probe i");this.contain=s?.clientWidth?Math.min(1,s.clientWidth/e):1,this.frame()}slotName(e){return this.figures?.[e]??this.meta.states[e]}slotPlan(e){if(!this.figures?.[e])return $[e];const t=this.figures[e];return x.figPlans??={},x.figPlans[t]??={...$[1],rotZ:it,scale:.64,...j[t]??{}}}slotRot(e){const t=this.figures?.[e];return t?j[t]?.rot??0:nt[e]}support(e,t){const s=this.slotName(e),i=this.meta.support?.[s];if(!i||!i.length)return this.meta.extents?.[s]?.halfW??0;const a=i.length,r=Math.PI*2;let o=t%r;o<0&&(o+=r);const n=o/r*a,h=Math.floor(n)%a,u=n-Math.floor(n);return i[h]+(i[(h+1)%a]-i[h])*u}rightAlignedX(e,t,s){const i=Math.tan(this.camera.fov*Math.PI/180/2),a=((this.contain??1)-ot)*i*this.camera.aspect,r=Math.sqrt(1+a*a)*this.support(e,s+Math.atan(a));return a*this.camera.position.z-t*r}frame(){const e=R(this.t),t=this.slotPlan(this.stateA),s=this.slotPlan(this.stateB),i=this.mod,a=(this.narrow?t.narrowScale:t.scale)*i.scale,r=(this.narrow?s.narrowScale:s.scale)*i.scale,o=a+(r-a)*e,n=t.scale*i.scale,h=s.scale*i.scale,u=n+(h-n)*e;this.narrowK=u>1e-6?o/u:1;const c=t.narrowFade??1,p=s.narrowFade??1;this.narrowFade=this.narrow?c+(p-c)*e:1,this.group.scale.setScalar(o);const w=t.rotZ+(s.rotZ-t.rotZ)*e;this.group.rotation.set(0,0,w);const d=1-Math.min(1,Math.max(0,((i.dust??0)-.3)/.7)),g=Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z,f=g*this.camera.aspect;if(this.halfView=f,this.halfViewY=g,this.uniforms?.uDustAmp){const P=Math.max(o,1e-4);this.uniforms.uDustAmp.value.set(f*2.2/P,g*2.9/P)}const M=this.convergePos;if(this.narrow){const P=t.narrowPos,C=s.narrowPos;this.group.position.set(0,(P[1]+(C[1]-P[1])*e+i.dy)*d,0);return}const m=t.edge,v=s.edge,B=m?this.rightAlignedX(this.stateA,a,this.slotRot(this.stateA)):0,S=v?this.rightAlignedX(this.stateB,r,this.slotRot(this.stateB)):0,y=f,T=B+(S-B)*e,z=t.dx+(s.dx-t.dx)*e;this.group.position.set((T+i.dx*y+z)*(1-M)*d,(t.y+(s.y-t.y)*e+i.dy)*d,0)}static sel(e){return new F(+(e===0),+(e===1),+(e===2),+(e===3))}syncColor(){this.uniforms&&(this.uniforms.uColor.value.copy(D("--cloud-point","#ECCC6B")),this.lineMat&&this.lineMat.uniforms.uColor.value.copy(D("--cloud-line","#ECCC6B")))}static figureSlot(e){return 2+e%2}async mountFigure(e,t){if(this.figures??={},this.figures[t]===e)return;const s=await this.chunk(e),i=this.geo.getAttribute(`aPos${t}`);i.array.set(this.positions(s,e)),i.needsUpdate=!0,this.figures[t]=e,this.loaded.delete(t),this.sizeMul0??=this.uniforms.uSizeMul.value.clone(),this.uniforms.uSizeMul.value.setComponent(t,1)}setPair(e,t,s){if(!this.ready)return;this.cancelTransition();const i=this.uniforms;i.uSelA.value.copy(x.sel(e)),i.uSelB.value.copy(x.sel(t)),i.uT.value=s,i.uSpread.value=0,i.uBurst.value=0,i.uConv.value=0,this.stateA=e,this.stateB=s<.5?e:t,this.t=s,this.frame()}releaseFigures(){this.sizeMul0&&(this.uniforms.uSizeMul.value.copy(this.sizeMul0),this.figures={})}setState(e){if(this.cancelTransition(),this.stateA=this.stateB=Math.max(0,Math.min(3,e)),this.t=0,this.convergePos=0,!this.ready)return;const t=this.uniforms;t.uSelA.value.copy(x.sel(this.stateA)),t.uSelB.value.copy(x.sel(this.stateB)),t.uT.value=0,t.uSpread.value=0,t.uBurst.value=0,t.uConv.value=0,this.frame()}cancelTransition(){if(!this.anim)return;const e=this.anim;this.anim=null,e.resolveHalf(),e.resolveDone()}transitionTo(e,{duration:t=rt}={}){const s=Math.max(0,Math.min(3,e));if(!this.ready||s===this.stateB)return this.setState(s),{half:Promise.resolve(),done:Promise.resolve()};if(this.reduced)return this.crossfadeTo(s);this.cancelTransition(),this.stateA=this.stateB,this.stateB=s;const i=this.uniforms;i.uSelA.value.copy(x.sel(this.stateA)),i.uSelB.value.copy(x.sel(this.stateB));let a,r;const o=new Promise(h=>{a=h}),n=new Promise(h=>{r=h});return this.anim={target:s,duration:t,elapsed:0,prev:performance.now(),halfFired:!1,resolveHalf:a,resolveDone:r},{half:o,done:n}}advance(e){const t=this.anim;if(!t)return;t.elapsed+=Math.min(e-t.prev,ht),t.prev=e;const s=Math.min(1,t.elapsed/t.duration),i=this.uniforms;this.t=s,i.uT.value=s;const a=Math.sin(Math.PI*s)**2;i.uSpread.value=lt*a,i.uBurst.value=ct*a,this.frame(),!t.halfFired&&s>=.5&&(t.halfFired=!0,t.resolveHalf()),!(s<1)&&(this.anim=null,this.setState(t.target),t.resolveDone())}crossfadeTo(e){const t=this.canvas.parentElement;t?.classList.remove("is-on");const s=new Promise(a=>setTimeout(a,ut)),i=s.then(()=>{this.setState(e),this.render(performance.now()),t?.classList.add("is-on")});return{half:s,done:i}}setFraming({scale:e=1,alpha:t=1,dx:s=0,dy:i=0,dust:a=0,pose:r=0,calm:o=1,thin:n=1,beam:h=null}={}){this.mod.scale=e,this.mod.alpha=t,this.mod.dx=s,this.mod.dy=i,this.mod.dust=a;const u=this.mod.pose;if(this.mod.pose=r,this.gallop&&Math.abs(r-u)>.004&&(this.gallopAt=null,this.setGallopPhase(this.gallopT??0)),this.opacity=t,this.ready){const p=(this.halfViewY??Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z)/Math.max(this.group.scale.x,1e-4);this.uniforms.uBeam.value=h===null?99:h*p,this.uniforms.uBeamW.value=H*p,this.uniforms.uDust.value=a,this.uniforms.uCalm.value=o,this.uniforms.uThin.value=n,this.frame()}}setVisible(e){this.visible=e,this.canvas.parentElement?.classList.toggle("is-on",e),e?this.start():this.stop()}watchPointer(){this.onPointer||(this.onPointer=e=>{if(!this.ready||!this.halfView)return;const t=(e.clientX/innerWidth-.5)*2*this.halfView,s=-(e.clientY/innerHeight-.5)*2*this.halfViewY,i=this.group.scale.x||1,a=(t-this.group.position.x)/i,r=(s-this.group.position.y)/i;this.mouseAim={x:a,y:r};const o=this.uniforms.uMouse.value;o.x>900&&o.set(a,r)},addEventListener("pointermove",this.onPointer,{passive:!0}))}start(){if(this.raf||!this.ready)return;this.watchPointer();const e=t=>{this.raf=requestAnimationFrame(e),this.advance(t),this.render(t)};if(this.reduced){this.render(performance.now());return}this.raf=requestAnimationFrame(e)}stop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0}render(e){if(!this.ready)return;const t=this.uniforms,s=e-this.t0;if(t.uTime.value=s,t.uDrift.value=this.reduced?0:this.props.drift,this.mouseAim&&!this.reduced){const m=t.uMouse.value,v=t.uMouseV.value,B=m.x,S=m.y;m.x+=(this.mouseAim.x-m.x)*.1,m.y+=(this.mouseAim.y-m.y)*.1,v.x=v.x*.88+(m.x-B)*.2,v.y=v.y*.88+(m.y-S)*.2;const y=Math.hypot(v.x,v.y);y>.2&&(v.x=v.x/y*.2,v.y=v.y/y*.2)}const i=this.narrowK??1,a=window.devicePixelRatio||1,r=innerWidth*innerHeight*a*a,o=Math.min(1.4,Math.max(.5,Math.sqrt(r/dt))),n=Math.min(1,Math.max(0,((this.mod.dust??0)-.3)/.7));t.uSize.value=this.props.pointSize*(i+(o-i)*n),t.uBreath.value=this.props.breathSpeed;const h=this.reduced?0:1;t.uRotB.value=this.slotRot(2)+Math.sin(s*21e-5)*.05*h,t.uRotS.value=this.slotRot(3)+Math.sin(s*16e-5)*.07*h;const u=Math.min(1,s/1400),c=this.figures?.[this.stateA]?_:1,p=this.figures?.[this.stateB]?_:1,w=c+(p-c)*R(this.t);t.uFade.value=u*this.opacity*(this.narrowFade??1)*w;const l=!this.figures?.[3],d=l&&this.stateB===3?R(this.t):0,f=(l&&this.stateA===3?1-R(this.t):0)+d,M=Math.max(0,1-this.convergePos/.45);this.lineMat.uniforms.uFade.value=f*M*u*this.opacity*(this.narrowFade??1),this.renderer.render(this.scene,this.camera)}dispose(){this.onPointer&&(removeEventListener("pointermove",this.onPointer),this.onPointer=null),this.stop(),this.geo?.dispose(),this.linkGeo?.dispose(),this.mat?.dispose(),this.lineMat?.dispose(),this.renderer?.dispose()}}export{it as FIELD_ROLL,x as default,Mt as supportsWebGL};
