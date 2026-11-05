const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/people-tunnel.C3VPKNHo.js","_astro/Base.astro_astro_type_script_index_0_lang.mUXfsVdc.js","_astro/Lab.astro_astro_type_script_index_0_lang.Bf3DnYpR.js","_astro/router.UeToN5xW.js","_astro/three.module.CforAgrD.js"])))=>i.map(i=>d[i]);
import{_ as re}from"./Base.astro_astro_type_script_index_0_lang.mUXfsVdc.js";import{W as se,S as le,P as ce,b as ue,V as A,O as V,i as G,j as fe,D as de,g as k,M as ve,s as pe,u as me,B as he,e as z}from"./three.module.CforAgrD.js";const ge="about",R=matchMedia("(prefers-reduced-motion: reduce)").matches,d=12,ye=8,xe=.35,we=3.6,be={INK2:"#29455c",BLUE2:"#3f9be0",BLUE:"#2A6DAA"},Ae=e=>{const t=parseInt(e.slice(1),16),n=o=>(o/255).toFixed(4);return`vec3(${n(t>>16)}, ${n(t>>8&255)}, ${n(t&255)})`},Se=Object.entries(be).map(([e,t])=>`#define C_${e} ${Ae(t)}`).join(`
`),Me=`
attribute vec4 aSeg;   // x0, x1, z, seed
attribute vec2 aEnd;   // end (0|1), side (-1|1)
uniform float uTime;
uniform vec2 uRes;
uniform float uDpr;
uniform float uFar;
uniform float uFlat;
uniform float uMode;
uniform vec2 uMouse;
uniform float uHov;
uniform vec3 uRip[4];
varying float vFx;
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
  float t = uTime * ${xe.toFixed(2)};
  float z = aSeg.z;
  // Silk: rows almost parallel, shared wave, slight phase drift (as in paper.js).
  z += 0.20 * sin(x * 0.37 + z * 0.21 - t * 0.45) + 0.07 * sin(x * 1.05 + t * 0.7 + z * 1.3);
  float y = wave(vec2(x, z), t) * 1.15 * uFlat;
  // Pointer: a gentle lift under the cursor and a soft ring on click.
  if (uMode > 0.5) {
    vec2 q = vec2(x, z) - uMouse;
    y += uHov * 0.16 * exp(-dot(q, q) / 5.0);
    for (int i = 0; i < 4; i++) {
      float age = uTime - uRip[i].z;
      if (age > 0.0 && age < 3.2) {
        float rr = length(vec2(x, z) - uRip[i].xy);
        float o = rr - age * 4.2;
        y += 0.06 * exp(-o * o / 0.5) * (1.0 - age / 3.2) * sin(o * 2.4 + 1.57);
      }
    }
  }
  return vec3(x, y, z);
}
// Light from the pointer and click rings, field coordinates.
float fxAt(vec2 f) {
  if (uMode < 0.5) return 0.0;
  vec2 q = f - uMouse;
  float g = uHov * 0.25 * exp(-dot(q, q) / 2.0);
  for (int i = 0; i < 4; i++) {
    float age = uTime - uRip[i].z;
    if (age > 0.0 && age < 3.2) {
      float o = length(f - uRip[i].xy) - age * 4.2;
      g += exp(-o * o / 0.5) * (1.0 - age / 3.2) * 0.25;
    }
  }
  return g;
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
  vFx = fxAt(vec2(p.x, aSeg.z));
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
`,Ee=`
${Se}
uniform float uTime;
uniform float uAlpha;
uniform float uScan;
varying float vFx;
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
  float sc = mod(uTime, ${ye.toFixed(1)});
  float run = sc / ${we.toFixed(1)};
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
  // Pointer light.
  float pf = clamp(vFx, 0.0, 1.0);
  col = mix(col, C_BLUE2, pf * 0.85);
  a = clamp(a * (1.0 + 2.6 * pf), 0.0, 1.0);
  a *= vA * uAlpha;
  gl_FragColor = vec4(col * a, a);
}
`;let u=null,F=null,a=null,r=null,c=null,f=0,_=!1,L=0;const ze=performance.now();function Le(){const e=document.querySelector("#canvas-wrapper");if(!e)return null;let t=e.querySelector("canvas.canvas-waves");return t||(t=document.createElement("canvas"),t.className="canvas-waves",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none",zIndex:"0",opacity:"0",transition:"opacity 900ms ease"}),e.append(t)),t}function Fe(e){const t=e?70:120,n=e?90:150,o=t*n,D=new Float32Array(o*4*4),j=new Float32Array(o*4*2),I=new Uint32Array(o*6);let S=0;for(let M=0;M<t;M++){const ne=-d+(M+.5)*(2*d/t),oe=Math.sin(M*12.9898)*43758.5453%1;for(let E=0;E<n;E++,S++){const ae=-d+E/n*2*d,ie=-d+(E+1)/n*2*d;for(let y=0;y<4;y++){const N=S*4+y;D.set([ae,ie,ne,Math.abs(oe)],N*4),j.set([y>>1,y&1?1:-1],N*2)}const v=S*4;I.set([v,v+1,v+2,v+1,v+3,v+2],S*6)}}const g=new he;return g.setAttribute("aSeg",new z(D,4)),g.setAttribute("aEnd",new z(j,2)),g.setAttribute("position",new z(new Float32Array(o*4*3),3)),g.setIndex(new z(I,1)),g}let X=null,s=null,x=null,l=0,C=0;const p=(e,t,n)=>e+(t-e)*n,U=1.4;function Xe(e){x=typeof e=="function"?e:null,x||(l=0)}const Z={wide:{A:{y:2.7,z:10.5,ly:-.6,lz:0,fov:34},B:{y:1.55,z:11.2,ly:.35,lz:-12,fov:44}},tall:{A:{y:3.4,z:10.5,ly:-.6,lz:0,fov:52},B:{y:1.7,z:11.6,ly:.9,lz:-12,fov:66}}};function _e(e){const t=e?Z.tall:Z.wide,n=l*l*(3-2*l);a.fov=p(t.A.fov,t.B.fov,n),a.position.set(0,p(t.A.y,t.B.y,n),p(t.A.z,t.B.z,n)),a.lookAt(0,p(t.A.ly,t.B.ly,n),p(t.A.lz,t.B.lz,n)),a.updateProjectionMatrix(),s&&(s.rotation.y=n*Math.PI/2,s.scale.x=1+U*n),r.uniforms.uFar.value=p(22,22*(1+U),n),r.uniforms.uFlat.value=1-.45*n}function Be(){if(!u||!c)return;const e=innerWidth<700,t=Math.min(2,window.devicePixelRatio||1),n=Math.max(1,Math.round(c.clientWidth*t)),o=Math.max(1,Math.round(c.clientHeight*t));e!==X&&(s&&(F.remove(s),s.geometry.dispose()),s=new ve(Fe(e),r),s.frustumCulled=!1,F.add(s),X=e),!(c.width===n&&c.height===o)&&(C=-1,u.setPixelRatio(1),u.setSize(n,o,!1),a.aspect=n/o,a.fov=n/o<1?52:34,a.position.set(0,n/o<1?3.4:2.7,10.5),a.lookAt(0,-.6,0),a.updateProjectionMatrix(),r.uniforms.uRes.value.set(n,o),r.uniforms.uDpr.value=t)}function W(){if(f=0,!_||document.hidden)return;if(R&&L||(f=requestAnimationFrame(W)),Be(),x||l){const t=x?Math.min(1,Math.max(0,x()||0)):0;l+=(t-l)*.16,Math.abs(t-l)<5e-4&&(l=t)}l!==C&&(C=l,_e(a.aspect<1));const e=(performance.now()-ze)/1e3;r.uniforms.uTime.value=e,w&&Te(),u.render(F,a),L||(L=1,c.style.opacity="1")}function Pe(){!document.hidden&&_&&!f&&(f=requestAnimationFrame(W))}function Re(e=!0){if(_=e&&document.body.dataset.route===ge&&!!document.querySelector("[data-about]"),!_){f&&(cancelAnimationFrame(f),f=0),c&&(c.style.opacity="0"),L=0,ee(0);return}if(!u){if(c=Le(),!c)return;try{u=new se({canvas:c,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:"low-power"})}catch{u=null;return}u.setClearColor(0,0),F=new le,a=new ce(34,1,.1,60),r=new ue({vertexShader:Me,fragmentShader:Ee,transparent:!0,side:de,depthTest:!1,depthWrite:!1,blending:fe,blendSrc:G,blendDst:V,blendSrcAlpha:G,blendDstAlpha:V,uniforms:{uTime:{value:0},uRes:{value:new A(1,1)},uDpr:{value:1},uFar:{value:22},uFlat:{value:1},uAlpha:{value:1},uScan:{value:R?0:1},uMode:{value:0},uMouse:{value:new A(0,99)},uHov:{value:0},uRip:{value:[0,1,2,3].map(()=>new k(0,0,-99))}}}),document.addEventListener("visibilitychange",Pe),window.__cfigAboutWaves={mat:r,camera:a,renderer:u}}ee(R?0:1),f||(f=requestAnimationFrame(W))}let w=0,B=0,q=0;const O=new A;let $=!1;const Y=new pe,Ce=new me(new k(0,1,0),0),m=new k,P=new A(0,99);function te(e){return!$||!s||!a||(Y.setFromCamera(O,a),!Y.ray.intersectPlane(Ce,m))?!1:(s.updateMatrixWorld(),s.worldToLocal(m),e.set(m.x,m.z),Math.abs(m.x)<16&&Math.abs(m.z)<16)}function K(e){e.pointerType!=="touch"&&(O.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),$=!0,q=1)}function J(){q=0}function Q(e){if(e.button>0||e.target.closest?.("a, button, input, textarea, select"))return;O.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),$=!0;const t=new A;te(t)&&(r.uniforms.uRip.value[B].set(t.x,t.y,r.uniforms.uTime.value),B=(B+1)%4)}function Te(){const e=r.uniforms,t=te(P),n=t?q:0,o=w===1;e.uHov.value+=(n-e.uHov.value)*(o?.025:.08),t&&(e.uMouse.value.y>90?e.uMouse.value.copy(P):e.uMouse.value.lerp(P,o?.045:.14))}function ee(e){e=e===1?1:0,r&&(r.uniforms.uMode.value=e,e&&!w?(addEventListener("pointermove",K,{passive:!0}),addEventListener("pointerdown",Q,{passive:!0}),document.documentElement.addEventListener("pointerleave",J)):!e&&w&&(removeEventListener("pointermove",K),removeEventListener("pointerdown",Q),document.documentElement.removeEventListener("pointerleave",J),r.uniforms.uHov.value=0),w=e)}const He=".history__scroll[data-mode='pin'], .ab-people .pp";let i=null,T=0,h=null;function ke(){const e=window.innerHeight;for(const t of document.querySelectorAll(He)){const n=t.getBoundingClientRect();if(n.top<=2&&n.bottom>e*1.15)return t}return null}function We(){T=0,i&&(h=ke(),i.classList.toggle("is-on",!!h),i.tabIndex=h?0:-1)}const b=()=>{T||(T=requestAnimationFrame(We))};function qe(){if(!h)return;const e=h.getBoundingClientRect().bottom+window.scrollY,t=window.__cfigScroll?.lenis;t?t.scrollTo(e,{duration:1.2}):window.scrollTo({top:e,behavior:"smooth"})}function Oe(){if(!!!document.querySelector("[data-about]")){$e();return}i||(i=document.createElement("button"),i.type="button",i.className="skip-pin",i.tabIndex=-1,i.innerHTML='<span>Přeskočit</span><svg class="skip-pin__a" aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 4v15M6 13l6 6 6-6"/></svg>',i.addEventListener("click",qe),document.body.appendChild(i),window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",b)),b()}function $e(){i&&(window.removeEventListener("scroll",b),window.removeEventListener("resize",b),i.remove(),i=null,h=null)}const De=matchMedia("(prefers-reduced-motion: reduce)").matches;let H=null;function je(e){for(const t of e.querySelectorAll("[data-acc-toggle]")){if(t.dataset.bound)continue;t.dataset.bound="1";const n=t.closest("[data-acc]");t.setAttribute("aria-expanded","false"),n.classList.add("is-shut"),t.addEventListener("click",()=>{const o=t.getAttribute("aria-expanded")!=="true";t.setAttribute("aria-expanded",String(o)),n.classList.toggle("is-shut",!o)})}}function Ie(e){const t=e.querySelector("[data-people]")?.closest(".ab-people");!t||De||(H??=re(()=>import("./people-tunnel.C3VPKNHo.js"),__vite__mapDeps([0,1,2,3,4])),H.then(n=>{document.contains(t)&&n.init(t)}))}function Ne(){const e=document.querySelector("[data-about]");if(Re(),Oe(),!e){H?.then(t=>t.destroy());return}je(e),Ie(e)}const Ue=Object.freeze(Object.defineProperty({__proto__:null,init:Ne},Symbol.toStringTag,{value:"Module"}));export{Ue as a,Xe as s};
