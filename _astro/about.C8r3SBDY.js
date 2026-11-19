const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/people-tunnel.CyK1EdXj.js","_astro/preload-helper.BlTxHScW.js","_astro/three.module.BDbTcLBq.js","_astro/three.core.Bs7hxDeK.js","_astro/ui.d-92HD8E.js"])))=>i.map(i=>d[i]);
import{_ as te}from"./preload-helper.BlTxHScW.js";import{W as le}from"./three.module.BDbTcLBq.js";import{S as ce,P as ue,b as fe,V as A,a1 as N,a8 as G,by as de,k as ve,h as H,av as pe,ch as me,aq as he,B as ge,a as L}from"./three.core.Bs7hxDeK.js";import{u as ye}from"./ui.d-92HD8E.js";const xe="about",T=matchMedia("(prefers-reduced-motion: reduce)").matches,d=12,be=8,we=.35,Ae=3.6,Se={INK2:"#29455c",BLUE2:"#3f9be0",BLUE:"#2A6DAA"},Me=t=>{const e=parseInt(t.slice(1),16),n=o=>(o/255).toFixed(4);return`vec3(${n(e>>16)}, ${n(e>>8&255)}, ${n(e&255)})`},Ee=Object.entries(Se).map(([t,e])=>`#define C_${t} ${Me(e)}`).join(`
`),ze=`
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
  float t = uTime * ${we.toFixed(2)};
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
`,Le=`
${Ee}
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
  float sc = mod(uTime, ${be.toFixed(1)});
  float run = sc / ${Ae.toFixed(1)};
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
`;let u=null,F=null,i=null,r=null,c=null,f=0,R=!1,_=0;const _e=performance.now();function Fe(){const t=document.querySelector("#canvas-wrapper");if(!t)return null;let e=t.querySelector("canvas.canvas-waves");return e||(e=document.createElement("canvas"),e.className="canvas-waves",e.setAttribute("aria-hidden","true"),Object.assign(e.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none",zIndex:"0",opacity:"0",transition:"opacity 900ms ease"}),t.append(e)),e}function Re(t){const e=t?70:120,n=t?90:150,o=e*n,D=new Float32Array(o*4*4),j=new Float32Array(o*4*2),I=new Uint32Array(o*6);let M=0;for(let E=0;E<e;E++){const ae=-d+(E+.5)*(2*d/e),ie=Math.sin(E*12.9898)*43758.5453%1;for(let z=0;z<n;z++,M++){const re=-d+z/n*2*d,se=-d+(z+1)/n*2*d;for(let y=0;y<4;y++){const V=M*4+y;D.set([re,se,ae,Math.abs(ie)],V*4),j.set([y>>1,y&1?1:-1],V*2)}const p=M*4;I.set([p,p+1,p+2,p+1,p+3,p+2],M*6)}}const g=new ge;return g.setAttribute("aSeg",new L(D,4)),g.setAttribute("aEnd",new L(j,2)),g.setAttribute("position",new L(new Float32Array(o*4*3),3)),g.setIndex(new L(I,1)),g}let X=null,s=null,x=null,l=0,C=0;const m=(t,e,n)=>t+(e-t)*n,U=1.4;function Ke(t){x=typeof t=="function"?t:null,x||(l=0)}const Z={wide:{A:{y:2.7,z:10.5,ly:-.6,lz:0,fov:34},B:{y:1.55,z:11.2,ly:.35,lz:-12,fov:44}},tall:{A:{y:3.4,z:10.5,ly:-.6,lz:0,fov:52},B:{y:1.7,z:11.6,ly:.9,lz:-12,fov:66}}};function Be(t){const e=t?Z.tall:Z.wide,n=l*l*(3-2*l);i.fov=m(e.A.fov,e.B.fov,n),i.position.set(0,m(e.A.y,e.B.y,n),m(e.A.z,e.B.z,n)),i.lookAt(0,m(e.A.ly,e.B.ly,n),m(e.A.lz,e.B.lz,n)),i.updateProjectionMatrix(),s&&(s.rotation.y=n*Math.PI/2,s.scale.x=1+U*n),r.uniforms.uFar.value=m(22,22*(1+U),n),r.uniforms.uFlat.value=1-.45*n}function Pe(){if(!u||!c)return;const t=innerWidth<700,e=Math.min(2,window.devicePixelRatio||1),n=Math.max(1,Math.round(c.clientWidth*e)),o=Math.max(1,Math.round(c.clientHeight*e));t!==X&&(s&&(F.remove(s),s.geometry.dispose()),s=new pe(Re(t),r),s.frustumCulled=!1,F.add(s),X=t),!(c.width===n&&c.height===o)&&(C=-1,u.setPixelRatio(1),u.setSize(n,o,!1),i.aspect=n/o,i.fov=n/o<1?52:34,i.position.set(0,n/o<1?3.4:2.7,10.5),i.lookAt(0,-.6,0),i.updateProjectionMatrix(),r.uniforms.uRes.value.set(n,o),r.uniforms.uDpr.value=e)}function q(){if(f=0,!R||document.hidden)return;if(T&&_||(f=requestAnimationFrame(q)),Pe(),x||l){const e=x?Math.min(1,Math.max(0,x()||0)):0;l+=(e-l)*.16,Math.abs(e-l)<5e-4&&(l=e)}l!==C&&(C=l,Be(i.aspect<1));const t=(performance.now()-_e)/1e3;r.uniforms.uTime.value=t,b&&He(),u.render(F,i),_||(_=1,c.style.opacity="1")}function Te(){!document.hidden&&R&&!f&&(f=requestAnimationFrame(q))}function Ce(t=!0){if(R=t&&document.body.dataset.route===xe&&!!document.querySelector("[data-about]"),!R){f&&(cancelAnimationFrame(f),f=0),c&&(c.style.opacity="0"),_=0,ee(0);return}if(!u){if(c=Fe(),!c)return;try{u=new le({canvas:c,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:"low-power"})}catch{u=null;return}u.setClearColor(0,0),F=new ce,i=new ue(34,1,.1,60),r=new fe({vertexShader:ze,fragmentShader:Le,transparent:!0,side:ve,depthTest:!1,depthWrite:!1,blending:de,blendSrc:G,blendDst:N,blendSrcAlpha:G,blendDstAlpha:N,uniforms:{uTime:{value:0},uRes:{value:new A(1,1)},uDpr:{value:1},uFar:{value:22},uFlat:{value:1},uAlpha:{value:1},uScan:{value:T?0:1},uMode:{value:0},uMouse:{value:new A(0,99)},uHov:{value:0},uRip:{value:[0,1,2,3].map(()=>new H(0,0,-99))}}}),document.addEventListener("visibilitychange",Te),window.__cfigAboutWaves={mat:r,camera:i,renderer:u}}ee(T?0:1),f||(f=requestAnimationFrame(q))}let b=0,B=0,W=0;const O=new A;let $=!1;const Y=new me,ke=new he(new H(0,1,0),0),h=new H,P=new A(0,99);function ne(t){return!$||!s||!i||(Y.setFromCamera(O,i),!Y.ray.intersectPlane(ke,h))?!1:(s.updateMatrixWorld(),s.worldToLocal(h),t.set(h.x,h.z),Math.abs(h.x)<16&&Math.abs(h.z)<16)}function K(t){t.pointerType!=="touch"&&(O.set(t.clientX/innerWidth*2-1,-(t.clientY/innerHeight)*2+1),$=!0,W=1)}function J(){W=0}function Q(t){if(t.button>0||t.target.closest?.("a, button, input, textarea, select"))return;O.set(t.clientX/innerWidth*2-1,-(t.clientY/innerHeight)*2+1),$=!0;const e=new A;ne(e)&&(r.uniforms.uRip.value[B].set(e.x,e.y,r.uniforms.uTime.value),B=(B+1)%4)}function He(){const t=r.uniforms,e=ne(P),n=e?W:0,o=b===1;t.uHov.value+=(n-t.uHov.value)*(o?.025:.08),e&&(t.uMouse.value.y>90?t.uMouse.value.copy(P):t.uMouse.value.lerp(P,o?.045:.14))}function ee(t){t=t===1?1:0,r&&(r.uniforms.uMode.value=t,t&&!b?(addEventListener("pointermove",K,{passive:!0}),addEventListener("pointerdown",Q,{passive:!0}),document.documentElement.addEventListener("pointerleave",J)):!t&&b&&(removeEventListener("pointermove",K),removeEventListener("pointerdown",Q),document.documentElement.removeEventListener("pointerleave",J),r.uniforms.uHov.value=0),b=t)}const qe=".ab-history .pp, .ab-people .pp";let a=null,k=0,v=null;function We(){const t=window.innerHeight;for(const e of document.querySelectorAll(qe)){const n=e.getBoundingClientRect();if(n.top<=2&&n.bottom>t*1.15)return e}return null}function Oe(){k=0,a&&(v=We(),a.classList.toggle("is-on",!!v),a.tabIndex=v?0:-1,a.inert=!v)}const w=()=>{k||(k=requestAnimationFrame(Oe))};function $e(){if(!v)return;const t=v.getBoundingClientRect().bottom+window.scrollY,e=window.__cfigScroll?.lenis;e?e.scrollTo(t,{duration:1.2}):window.scrollTo({top:t,behavior:"smooth"})}function De(){if(!!!document.querySelector("[data-about]")){je();return}a||(a=document.createElement("button"),a.type="button",a.className="skip-pin",a.tabIndex=-1,a.inert=!0,a.innerHTML="<span>"+ye("skippin")+'</span><svg class="skip-pin__a" aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 4v15M6 13l6 6 6-6"/></svg>',a.addEventListener("click",$e),document.body.appendChild(a),window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",w)),w()}function je(){a&&(window.removeEventListener("scroll",w),window.removeEventListener("resize",w),a.remove(),a=null,v=null)}const oe=matchMedia("(prefers-reduced-motion: reduce)").matches;let S=null;function Ie(t){for(const e of t.querySelectorAll("[data-acc-toggle]")){if(e.dataset.bound)continue;e.dataset.bound="1";const n=e.closest("[data-acc]");e.setAttribute("aria-expanded","false"),n.classList.add("is-shut"),e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")!=="true";e.setAttribute("aria-expanded",String(o)),n.classList.toggle("is-shut",!o)})}}function Ve(t){const e=t.querySelector("[data-people]")?.closest(".ab-people");!e||oe||(S??=te(()=>import("./people-tunnel.CyK1EdXj.js"),__vite__mapDeps([0,1,2,3,4])),S.then(n=>{document.contains(e)&&n.init(e)}))}function Ne(t){const e=t.querySelector("[data-milestones]")?.closest(".ab-history");!e||oe||(S??=te(()=>import("./people-tunnel.CyK1EdXj.js"),__vite__mapDeps([0,1,2,3,4])),S.then(n=>{document.contains(e)&&n.initMilestones(e)}))}function Ge(){const t=document.querySelector("[data-about]");if(Ce(),De(),!t){S?.then(e=>e.destroy());return}Ie(t),Ne(t),Ve(t)}const Je=Object.freeze(Object.defineProperty({__proto__:null,init:Ge},Symbol.toStringTag,{value:"Module"}));export{Je as a,Ke as s};
