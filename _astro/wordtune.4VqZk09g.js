import{k as w,w as m}from"./Base.astro_astro_type_script_index_0_lang.YbRfMViY.js";import"./Lab.astro_astro_type_script_index_0_lang.BKhPu4E9.js";import"./router.UeToN5xW.js";import"./three.module.B-8iX7Ma.js";const l="wordtune",x=[{k:"dot",q:"worddot",t:"размер точки",min:.05,max:.5,step:.01,hint:"Долей клетки решётки. Обычная точка поля — 0.055; слово горит крупнее, иначе на высоту буквы приходится четыре ряда крохотных точек."},{k:"lit",q:"wordlit",t:"яркость",min:.5,max:6,step:.1,hint:"До какой яркости разгорается точка внутри буквы. Берётся ДО затухания по глубине, поэтому левый конец слова не тускнеет."},{k:"halo",q:"wordhalo",t:"ореол",min:0,max:1.5,step:.05,hint:"Сколько света стелется вокруг точки. Без него точка читается наклейкой; со слишком большим ореолы смыкаются в заливку."},{k:"core",q:"wordcore",t:"калёная середина",min:0,max:1,step:.05,hint:"Насколько середина точки остаётся белой, а не закрашивается зелёным. Ноль — ровный зелёный кружок."},{k:"gain",q:"wordgain",t:"множитель",min:0,max:14,step:.5,hint:"Во сколько раз ярче обычной горит точка внутри буквы. Работает вместе с «яркостью»: берётся то, что ярче."},{k:"w",q:"wordw",t:"ширина слова",min:.2,max:1,step:.01,hint:"Долей ширины кадра. Уже — слово мельче, и на букву приходится меньше точек: ниже 0.35 оно перестаёт читаться."},{k:"y",q:"wordy",t:"высота в кадре",min:.5,max:.92,step:.01,hint:"Долей высоты кадра сверху. Ниже — клетка крупнее и точки крупнее, но раньше уходит за кромку подвала."},{k:"x",q:"wordx",t:"середина по ширине",min:.3,max:.7,step:.01,hint:"Долей ширины кадра. 0.5 — ровно по оси кадра."}],b=`
.wordtune {
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 9999;
  width: 268px;
  padding: 12px 14px 14px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 10px;
  background: rgba(8,14,22,.92);
  color: #EDF2F7;
  font: 12px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace;
  backdrop-filter: blur(8px);
}
.wordtune h6 { margin: 0 0 8px; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: #00E799; }
.wordtune label { display: block; margin: 7px 0 0; cursor: help; }
.wordtune .row { display: flex; justify-content: space-between; gap: 8px; }
.wordtune .row span:last-child { color: #00E799; }
.wordtune input[type=range] { width: 100%; margin: 2px 0 0; accent-color: #00E799; }
.wordtune .btns { display: flex; gap: 6px; margin-top: 12px; }
.wordtune button {
  flex: 1; padding: 6px 4px; border: 1px solid rgba(255,255,255,.2);
  border-radius: 6px; background: transparent; color: inherit;
  font: inherit; cursor: pointer;
}
.wordtune button:hover { border-color: #00E799; color: #00E799; }
.wordtune .out { width: 100%; margin-top: 8px; padding: 5px; border: 1px solid rgba(255,255,255,.14);
  border-radius: 6px; background: rgba(0,0,0,.35); color: #9fb3c8; font: inherit; }
`;let n=null;function s(){const o=m(),c=x.map(r=>`${r.q}=${+o[r.k].toFixed(3)}`);return`${location.pathname}?${l}&${c.join("&")}`}function h(){const o=document.querySelector(".call");if(!o)return;const c=window.innerHeight||1,r=o.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:r-c*.2,behavior:"smooth"})}function g(){const o=document.createElement("style");o.textContent=b,document.head.append(o),n=document.createElement("div"),n.className="wordtune",n.innerHTML="<h6>Точки слова</h6>";const c=m();for(const t of x){const p=document.createElement("label");p.title=t.hint,p.innerHTML=`<span class="row"><span>${t.t}</span><span>${c[t.k]}</span></span>`;const e=document.createElement("input");e.type="range",e.min=t.min,e.max=t.max,e.step=t.step,e.value=c[t.k];const i=p.querySelector("span span:last-child");e.addEventListener("input",()=>{const u=Number(e.value);i.textContent=u,w({[t.k]:u}),a.value=s()}),p.append(e),n.append(p)}const r=document.createElement("div");r.className="btns";const d=(t,p,e)=>{const i=document.createElement("button");return i.type="button",i.textContent=t,i.title=e,i.addEventListener("click",p),r.append(i),i};d("К слову",h,"Прокрутить туда, где знак отошёл и слово горит в полную силу"),d("Скопировать",()=>{a.value=s(),a.select(),navigator.clipboard?.writeText(a.value)},"Адрес с выбранными числами — в буфер"),d("Сброс",()=>{location.href=`${location.pathname}?${l}`},"Вернуться к числам из кода"),n.append(r);const a=document.createElement("input");a.className="out",a.readOnly=!0,a.value=s(),n.append(a),document.body.append(n)}function E(){if(!new URLSearchParams(location.search).has(l))return;if(!(document.querySelector("canvas.canvas-track")&&getComputedStyle(document.querySelector("canvas.canvas-track")).display!=="none")){n?.remove(),n=null;return}n||g()}export{E as init};
