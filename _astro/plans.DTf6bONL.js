import{W as O}from"./three.module.BDbTcLBq.js";import{S as G,O as T,C as Y,B as N,a as S,b as I,V as K,L as U,G as Z}from"./three.core.Bs7hxDeK.js";const C="investors",E=matchMedia("(prefers-reduced-motion: reduce)").matches,j="/assets/investory/",V=[{at:"rust",file:"plan-dark.svg",x:.34,y:-150,w:.92},{at:"pristup",file:"plan_aktuality.svg",x:-.22,y:-60,w:.78},{at:"dluhopisy",file:"plan-light.svg",x:.52,y:30,w:.64},{at:"vysledky",file:"plan-horizontal.svg",x:-.06,y:0,w:1.12,r:-32}],J=1.45,Q=.13,X=.12,$=`
  attribute float aSeg;
  attribute float aEnd;
  uniform float uHead;
  uniform float uK;
  varying float vEnd;
  varying float vDone;
  varying vec2 vLocal;
  void main() {
    vEnd = aEnd;
    vDone = clamp((uHead - aSeg) / uK, 0.0, 1.0);
    vLocal = position.xy;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,ee=`
  uniform vec3 uColor;
  uniform float uAlpha;
  uniform vec2 uBox;
  varying float vEnd;
  varying float vDone;
  varying vec2 vLocal;
  void main() {
    if (vEnd > vDone) discard;
    if (vLocal.x < 0.0 || vLocal.y < 0.0 || vLocal.x > uBox.x || vLocal.y > uBox.y) discard;
    gl_FragColor = vec4(uColor, uAlpha);
  }
`,L=new Map,te=e=>(L.has(e)||L.set(e,fetch(j+e).then(t=>t.ok?t.text():"").catch(()=>"")),L.get(e));function ne(e){const c=new DOMParser().parseFromString(e,"image/svg+xml").querySelector("svg");if(!c)return null;const a=(c.getAttribute("viewBox")||"0 0 1000 1000").split(/[\s,]+/).map(Number),l=[];for(const v of c.querySelectorAll("path")){const n=(v.getAttribute("d")||"").match(/[MLHVZmlhvz]|-?\d*\.?\d+(?:e[-+]?\d+)?/g)||[];let d="",r=0,i=0,f=0,m=0,u=0;const o=()=>Number(n[u++]);for(;u<n.length;){if(/[A-Za-z]/.test(n[u])&&(d=n[u++].toUpperCase()),d==="Z"){(r!==f||i!==m)&&l.push(r,i,f,m),r=f,i=m;continue}if(d==="M"){r=f=o(),i=m=o(),d="L";continue}let y=r,g=i;if(d==="L")y=o(),g=o();else if(d==="H")y=o();else if(d==="V")g=o();else{u++;continue}l.push(r,i,y,g),r=y,i=g}}return{w:a[2],h:a[3],segs:l}}let s=null,p=null,h=null,w=null,x=[],b=0,H=0,A=!0,P=-1,R=0,F=0,W=!1;const k=new Y;function oe(){const e=document.querySelector("#canvas-wrapper");if(!e)return null;let t=e.querySelector("canvas.canvas-plans");return t||(t=document.createElement("canvas"),t.className="canvas-plans",t.setAttribute("aria-hidden","true"),e.append(t)),t}function ae(e){if(s=oe(),!s)return!1;try{p=new O({canvas:s,alpha:!0,antialias:!0})}catch{return W=!0,s.remove(),s=p=null,!1}return p.setClearColor(0,0),p.setPixelRatio(1),h=new G,w=new T(0,1,0,-1,-10,10),k.set(getComputedStyle(document.body).getPropertyValue("--fg-1").trim()||"#ffffff"),x=[],V.forEach((t,c)=>{const a=e[c];if(!a||!a.segs.length)return;const l=a.segs.length/4,v=new Float32Array(l*6),n=new Float32Array(l*2),d=new Float32Array(l*2);for(let o=0;o<l;o++)v.set([a.segs[o*4],a.segs[o*4+1],0,a.segs[o*4+2],a.segs[o*4+3],0],o*6),n[o*2]=n[o*2+1]=o,d[o*2+1]=1;const r=new N;r.setAttribute("position",new S(v,3)),r.setAttribute("aSeg",new S(n,1)),r.setAttribute("aEnd",new S(d,1));const i=Math.max(8,l*.06),f=new I({vertexShader:$,fragmentShader:ee,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uHead:{value:E?l+i:0},uK:{value:i},uColor:{value:k},uAlpha:{value:Q},uBox:{value:new K(a.w,a.h)}}}),m=new U(r,f);m.position.set(-a.w/2,-a.h/2,0),m.frustumCulled=!1;const u=new Z;u.add(m),u.rotation.z=-((t.r||0)*Math.PI)/180,h.add(u),x.push({cfg:t,d:a,n:l,k:i,m:f,group:u,sec:document.getElementById(t.at),p:E?1:0})}),!0}function _(){b=requestAnimationFrame(_);const e=innerWidth,t=innerHeight;if(!A&&scrollY===P&&e===R&&t===F)return;A=!1,P=scrollY,R=e,F=t,(s.width!==e||s.height!==t)&&p.setSize(e,t,!1),w.right=e,w.bottom=-t,w.updateProjectionMatrix();const c=document.querySelector(".inv__main");if(!c)return;const a=c.getBoundingClientRect(),l=e<=640,v=document.documentElement.scrollHeight-t;for(const n of x){if(n.sec?.isConnected||(n.sec=document.getElementById(n.cfg.at)),!n.sec)continue;const d=n.sec.getBoundingClientRect(),r=a.width*n.cfg.w*(l?J:1),i=r/n.d.w,f=n.d.h*i,m=a.left+a.width*n.cfg.x*(l?.6:1),u=d.top+n.cfg.y,o=u+f/2,y=o+X*(t/2-o);if(n.group.position.set(m+r/2,-y,0),n.group.scale.set(i,-i,1),E)continue;const g=u+scrollY,M=Math.min(Math.max(0,g-t),Math.max(0,v-t*.6)),D=Math.min(v,Math.max(M+t*.6,g+f*.5-t*.3)),B=Math.min(1,Math.max(0,(scrollY-M)/Math.max(1,D-M)));n.p=B,n.m.uniforms.uHead.value=B*(n.n+n.k)}p.render(h,w)}function q(){b&&cancelAnimationFrame(b),b=0,h&&(h.traverse(e=>{e.geometry?.dispose(),e.material?.dispose?.()}),h.clear(),p.dispose(),p.forceContextLoss(),s.remove(),s=p=h=w=null,x=[])}document.addEventListener("astro:before-preparation",e=>{!s||document.body.dataset.route!==C||!e.to||new URL(e.to).pathname===location.pathname||(s.style.transition="opacity 600ms ease-in",s.style.opacity="0")});const z=typeof ResizeObserver=="function"?new ResizeObserver(()=>{A=!0}):null;async function ie(){const e=++H;if(document.body.dataset.route!==C){z?.disconnect(),q();return}if(W)return;const t=(await Promise.all(V.map(c=>te(c.file)))).map(c=>c?ne(c):null);e!==H||document.body.dataset.route!==C||(q(),ae(t)&&(z?.observe(document.body),A=!0,s.style.transition="opacity 800ms ease",s.style.opacity="0",_(),requestAnimationFrame(()=>{s&&(s.style.opacity="1")})))}window.__cfigPlans={progress:()=>x.map(e=>Math.round(e.p*100)/100)};export{ie as init};
