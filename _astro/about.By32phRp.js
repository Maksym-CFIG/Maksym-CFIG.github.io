const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/people-tunnel.4BkKsjvb.js","_astro/Base.astro_astro_type_script_index_0_lang.CCV8Cd1e.js","_astro/Lab.astro_astro_type_script_index_0_lang.CppYHvj-.js","_astro/router.UeToN5xW.js","_astro/three.module.iOA9vxPz.js"])))=>i.map(i=>d[i]);
import{_ as V}from"./Base.astro_astro_type_script_index_0_lang.CCV8Cd1e.js";import{W as G,S as U,P as X,b as Z,V as K,O as k,i as W,j as Y,D as J,M as Q,B as ee,e as S}from"./three.module.iOA9vxPz.js";const te="about",D=matchMedia("(prefers-reduced-motion: reduce)").matches,d=12,ne=8,oe=.35,ae=3.6,ie={INK2:"#29455c",BLUE2:"#3f9be0",BLUE:"#2A6DAA"},re=t=>{const e=parseInt(t.slice(1),16),n=o=>(o/255).toFixed(4);return`vec3(${n(e>>16)}, ${n(e>>8&255)}, ${n(e&255)})`},se=Object.entries(ie).map(([t,e])=>`#define C_${t} ${re(e)}`).join(`
`),le=`
attribute vec4 aSeg;   // x0, x1, z, seed
attribute vec2 aEnd;   // end (0|1), side (-1|1)
uniform float uTime;
uniform vec2 uRes;
uniform float uDpr;
uniform float uFar;
uniform float uFlat;
varying float vSide;
varying float vHW;
varying float vA;
varying float vX;
varying float vZ;
varying float vSeed;
float wave(vec2 p, float t) {
  return 0.34 * sin(p.x * 0.38 + t * 0.55) * cos(p.y * 0.29 - t * 0.4)
       + 0.16 * sin((p.x + p.y) * 0.71 - t * 0.9)
       + 0.07 * sin(length(p - vec2(2.0, -3.0)) * 1.3 - t * 1.4);
}
vec3 at(float x) {
  // Wave motion at WAVE_SPEED of the original speed: calmer (client 2026-10-27).
  // Glint and scan keep their own time.
  float t = uTime * ${oe.toFixed(2)};
  float z = aSeg.z;
  // Silk: rows almost parallel, shared wave, slight phase drift (as in paper.js).
  z += 0.20 * sin(x * 0.37 + z * 0.21 - t * 0.45) + 0.07 * sin(x * 1.05 + t * 0.7 + z * 1.3);
  return vec3(x, wave(vec2(x, z), t) * 1.15 * uFlat, z);
}
void main() {
  vec3 pA = at(aSeg.x), pB = at(aSeg.y);
  vec4 va = modelViewMatrix * vec4(pA, 1.0);
  vec4 vb = modelViewMatrix * vec4(pB, 1.0);
  vec4 ca = projectionMatrix * va;
  vec4 cb = projectionMatrix * vb;
  bool atB = aEnd.x > 0.5;
  vec3 p = atB ? pB : pA;
  float dist = -(atB ? vb.z : va.z);
  // Fade into the distance and towards the field edges.
  vA = 1.0 - smoothstep(uFar * 0.5, uFar, dist);
  vA *= 1.0 - smoothstep(0.6, 0.98, abs(p.x) / ${d.toFixed(1)});
  vA *= 1.0 - smoothstep(0.7, 1.0, abs(p.z) / ${d.toFixed(1)});
  vSide = aEnd.y;
  vHW = 0.55 * uDpr;
  vX = p.x;
  vZ = aSeg.z;
  vSeed = aSeg.w;
  // Ribbon in screen pixels.
  vec2 sa = ca.xy / ca.w * uRes * 0.5;
  vec2 sb = cb.xy / cb.w * uRes * 0.5;
  vec2 d = sb - sa;
  float L = length(d);
  d = L > 0.0001 ? d / L : vec2(1.0, 0.0);
  vec2 nrm = vec2(-d.y, d.x);
  vec4 c = atB ? cb : ca;
  c.xy += nrm * aEnd.y * (vHW + 1.0) * 2.0 / uRes * c.w;
  gl_Position = c;
}
`,ce=`
${se}
uniform float uTime;
uniform float uAlpha;
uniform float uScan;
varying float vSide;
varying float vHW;
varying float vA;
varying float vX;
varying float vZ;
varying float vSeed;
void main() {
  float px = abs(vSide) * (vHW + 1.0);
  float cov = clamp(vHW + 0.5 - px, 0.0, 1.0);
  // Glint running along the silk (paper.js, P_LINES).
  float g = smoothstep(0.82, 1.0, sin(vX * 0.55 - uTime * 1.25 + vSeed * 6.2832));
  vec3 col = mix(C_INK2, C_BLUE2, g);
  float a = cov * (0.30 + 0.5 * g);
  // Scan: a soft band of light crosses the field from the near edge to the
  // far one, diagonally in field coordinates, once every SCAN_P seconds.
  float sc = mod(uTime, ${ne.toFixed(1)});
  float run = sc / ${ae.toFixed(1)};
  float env = smoothstep(0.0, 0.12, run) * (1.0 - smoothstep(0.85, 1.0, run));
  float dd = vZ * 0.92 - vX * 0.38;
  float c0 = mix(11.0, -13.0, clamp(run, 0.0, 1.0));
  float off = dd - c0;
  float band = exp(-off * off / 2.0) + 0.35 * exp(-max(off, 0.0) / 2.6) * step(0.0, off);
  float fx = band * env * uScan;
  // On light paper a pale band vanishes (in paper.js it went to near-white):
  // here the light is saturated blue, and the lines in it get denser.
  col = mix(col, vec3(0.12, 0.52, 0.92), clamp(fx * 1.3, 0.0, 1.0));
  col = mix(col, C_BLUE2, clamp(fx - 0.6, 0.0, 0.4));
  a = clamp(a * (1.0 + 3.4 * fx), 0.0, 1.0);
  a *= vA * uAlpha;
  gl_FragColor = vec4(col * a, a);
}
`;let c=null,z=null,i=null,f=null,s=null,u=0,_=!1,E=0;const ue=performance.now();function de(){const t=document.querySelector("#canvas-wrapper");if(!t)return null;let e=t.querySelector("canvas.canvas-waves");return e||(e=document.createElement("canvas"),e.className="canvas-waves",e.setAttribute("aria-hidden","true"),Object.assign(e.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none",zIndex:"0",opacity:"0",transition:"opacity 900ms ease"}),t.append(e)),e}function fe(t){const e=t?70:120,n=t?90:150,o=e*n,C=new Float32Array(o*4*4),P=new Float32Array(o*4*2),R=new Uint32Array(o*6);let w=0;for(let x=0;x<e;x++){const q=-d+(x+.5)*(2*d/e),H=Math.sin(x*12.9898)*43758.5453%1;for(let A=0;A<n;A++,w++){const I=-d+A/n*2*d,N=-d+(A+1)/n*2*d;for(let b=0;b<4;b++){const T=w*4+b;C.set([I,N,q,Math.abs(H)],T*4),P.set([b>>1,b&1?1:-1],T*2)}const v=w*4;R.set([v,v+1,v+2,v+1,v+3,v+2],w*6)}}const h=new ee;return h.setAttribute("aSeg",new S(C,4)),h.setAttribute("aEnd",new S(P,2)),h.setAttribute("position",new S(new Float32Array(o*4*3),3)),h.setIndex(new S(R,1)),h}let O=null,l=null,y=null,r=0,F=0;const p=(t,e,n)=>t+(e-t)*n,$=1.4;function Be(t){y=typeof t=="function"?t:null,y||(r=0)}const j={wide:{A:{y:2.7,z:10.5,ly:-.6,lz:0,fov:34},B:{y:1.55,z:11.2,ly:.35,lz:-12,fov:44}},tall:{A:{y:3.4,z:10.5,ly:-.6,lz:0,fov:52},B:{y:1.7,z:11.6,ly:.9,lz:-12,fov:66}}};function ve(t){const e=t?j.tall:j.wide,n=r*r*(3-2*r);i.fov=p(e.A.fov,e.B.fov,n),i.position.set(0,p(e.A.y,e.B.y,n),p(e.A.z,e.B.z,n)),i.lookAt(0,p(e.A.ly,e.B.ly,n),p(e.A.lz,e.B.lz,n)),i.updateProjectionMatrix(),l&&(l.rotation.y=n*Math.PI/2,l.scale.x=1+$*n),f.uniforms.uFar.value=p(22,22*(1+$),n),f.uniforms.uFlat.value=1-.45*n}function pe(){if(!c||!s)return;const t=innerWidth<700,e=Math.min(2,window.devicePixelRatio||1),n=Math.max(1,Math.round(s.clientWidth*e)),o=Math.max(1,Math.round(s.clientHeight*e));t!==O&&(l&&(z.remove(l),l.geometry.dispose()),l=new Q(fe(t),f),l.frustumCulled=!1,z.add(l),O=t),!(s.width===n&&s.height===o)&&(F=-1,c.setPixelRatio(1),c.setSize(n,o,!1),i.aspect=n/o,i.fov=n/o<1?52:34,i.position.set(0,n/o<1?3.4:2.7,10.5),i.lookAt(0,-.6,0),i.updateProjectionMatrix(),f.uniforms.uRes.value.set(n,o),f.uniforms.uDpr.value=e)}function L(){if(u=0,!_||document.hidden)return;if(D&&E||(u=requestAnimationFrame(L)),pe(),y||r){const e=y?Math.min(1,Math.max(0,y()||0)):0;r+=(e-r)*.16,Math.abs(e-r)<5e-4&&(r=e)}r!==F&&(F=r,ve(i.aspect<1));const t=(performance.now()-ue)/1e3;f.uniforms.uTime.value=t,c.render(z,i),E||(E=1,s.style.opacity="1")}function me(){!document.hidden&&_&&!u&&(u=requestAnimationFrame(L))}function he(t=!0){if(_=t&&document.body.dataset.route===te&&!!document.querySelector("[data-about]"),!_){u&&(cancelAnimationFrame(u),u=0),s&&(s.style.opacity="0"),E=0;return}if(!c){if(s=de(),!s)return;try{c=new G({canvas:s,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:"low-power"})}catch{c=null;return}c.setClearColor(0,0),z=new U,i=new X(34,1,.1,60),f=new Z({vertexShader:le,fragmentShader:ce,transparent:!0,side:J,depthTest:!1,depthWrite:!1,blending:Y,blendSrc:W,blendDst:k,blendSrcAlpha:W,blendDstAlpha:k,uniforms:{uTime:{value:0},uRes:{value:new K(1,1)},uDpr:{value:1},uFar:{value:22},uFlat:{value:1},uAlpha:{value:1},uScan:{value:D?0:1}}}),document.addEventListener("visibilitychange",me),window.__cfigAboutWaves={mat:f,camera:i,renderer:c}}u||(u=requestAnimationFrame(L))}const be=".history__scroll[data-mode='pin'], .ab-people .pp";let a=null,M=0,m=null;function ye(){const t=window.innerHeight;for(const e of document.querySelectorAll(be)){const n=e.getBoundingClientRect();if(n.top<=2&&n.bottom>t*1.15)return e}return null}function ge(){M=0,a&&(m=ye(),a.classList.toggle("is-on",!!m),a.tabIndex=m?0:-1)}const g=()=>{M||(M=requestAnimationFrame(ge))};function we(){if(!m)return;const t=m.getBoundingClientRect().bottom+window.scrollY,e=window.__cfigScroll?.lenis;e?e.scrollTo(t,{duration:1.2}):window.scrollTo({top:t,behavior:"smooth"})}function xe(){if(!!!document.querySelector("[data-about]")){Ae();return}a||(a=document.createElement("button"),a.type="button",a.className="skip-pin",a.tabIndex=-1,a.innerHTML='<span>Přeskočit</span><svg class="skip-pin__a" aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 4v15M6 13l6 6 6-6"/></svg>',a.addEventListener("click",we),document.body.appendChild(a),window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",g)),g()}function Ae(){a&&(window.removeEventListener("scroll",g),window.removeEventListener("resize",g),a.remove(),a=null,m=null)}const Se=matchMedia("(prefers-reduced-motion: reduce)").matches;let B=null;function Ee(t){for(const e of t.querySelectorAll("[data-acc-toggle]")){if(e.dataset.bound)continue;e.dataset.bound="1";const n=e.closest("[data-acc]");e.setAttribute("aria-expanded","false"),n.classList.add("is-shut"),e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")!=="true";e.setAttribute("aria-expanded",String(o)),n.classList.toggle("is-shut",!o)})}}function ze(t){const e=t.querySelector("[data-people]")?.closest(".ab-people");!e||Se||(B??=V(()=>import("./people-tunnel.4BkKsjvb.js"),__vite__mapDeps([0,1,2,3,4])),B.then(n=>{document.contains(e)&&n.init(e)}))}function _e(){const t=document.querySelector("[data-about]");if(he(),xe(),!t){B?.then(e=>e.destroy());return}Ee(t),ze(t)}const Le=Object.freeze(Object.defineProperty({__proto__:null,init:_e},Symbol.toStringTag,{value:"Module"}));export{Le as a,Be as s};
