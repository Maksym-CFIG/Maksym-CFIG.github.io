const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/people-tunnel.D9I12DG9.js","_astro/Base.astro_astro_type_script_index_0_lang.DQV2Ymw3.js","_astro/Lab.astro_astro_type_script_index_0_lang.CppYHvj-.js","_astro/router.UeToN5xW.js","_astro/three.module.iOA9vxPz.js"])))=>i.map(i=>d[i]);
import{_ as k}from"./Base.astro_astro_type_script_index_0_lang.DQV2Ymw3.js";import{W as q,S as V,P as I,b as N,V as G,O as L,i as C,j as U,D as X,M as Z,B as K,e as g}from"./three.module.iOA9vxPz.js";const J="about",O=matchMedia("(prefers-reduced-motion: reduce)").matches,u=12,Q=8,Y=.35,ee=3.6,te={INK2:"#29455c",BLUE2:"#3f9be0",BLUE:"#2A6DAA"},ae=t=>{const e=parseInt(t.slice(1),16),a=n=>(n/255).toFixed(4);return`vec3(${a(e>>16)}, ${a(e>>8&255)}, ${a(e&255)})`},ne=Object.entries(te).map(([t,e])=>`#define C_${t} ${ae(e)}`).join(`
`),oe=`
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
  float t = uTime * ${Y.toFixed(2)};
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
  vA *= 1.0 - smoothstep(0.6, 0.98, abs(p.x) / ${u.toFixed(1)});
  vA *= 1.0 - smoothstep(0.7, 1.0, abs(p.z) / ${u.toFixed(1)});
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
`,ie=`
${ne}
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
  float sc = mod(uTime, ${Q.toFixed(1)});
  float run = sc / ${ee.toFixed(1)};
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
`;let l=null,S=null,o=null,d=null,r=null,c=0,w=!1,A=0;const re=performance.now();function se(){const t=document.querySelector("#canvas-wrapper");if(!t)return null;let e=t.querySelector("canvas.canvas-waves");return e||(e=document.createElement("canvas"),e.className="canvas-waves",e.setAttribute("aria-hidden","true"),Object.assign(e.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none",zIndex:"0",opacity:"0",transition:"opacity 900ms ease"}),t.append(e)),e}function le(t){const e=t?70:120,a=t?90:150,n=e*a,M=new Float32Array(n*4*4),_=new Float32Array(n*4*2),B=new Uint32Array(n*6);let y=0;for(let b=0;b<e;b++){const j=-u+(b+.5)*(2*u/e),D=Math.sin(b*12.9898)*43758.5453%1;for(let x=0;x<a;x++,y++){const $=-u+x/a*2*u,H=-u+(x+1)/a*2*u;for(let m=0;m<4;m++){const P=y*4+m;M.set([$,H,j,Math.abs(D)],P*4),_.set([m>>1,m&1?1:-1],P*2)}const f=y*4;B.set([f,f+1,f+2,f+1,f+3,f+2],y*6)}}const p=new K;return p.setAttribute("aSeg",new g(M,4)),p.setAttribute("aEnd",new g(_,2)),p.setAttribute("position",new g(new Float32Array(n*4*3),3)),p.setIndex(new g(B,1)),p}let R=null,s=null,h=null,i=0,z=0;const v=(t,e,a)=>t+(e-t)*a,W=1.4;function xe(t){h=typeof t=="function"?t:null,h||(i=0)}const T={wide:{A:{y:2.7,z:10.5,ly:-.6,lz:0,fov:34},B:{y:1.55,z:11.2,ly:.35,lz:-12,fov:44}},tall:{A:{y:3.4,z:10.5,ly:-.6,lz:0,fov:52},B:{y:1.7,z:11.6,ly:.9,lz:-12,fov:66}}};function ce(t){const e=t?T.tall:T.wide,a=i*i*(3-2*i);o.fov=v(e.A.fov,e.B.fov,a),o.position.set(0,v(e.A.y,e.B.y,a),v(e.A.z,e.B.z,a)),o.lookAt(0,v(e.A.ly,e.B.ly,a),v(e.A.lz,e.B.lz,a)),o.updateProjectionMatrix(),s&&(s.rotation.y=a*Math.PI/2,s.scale.x=1+W*a),d.uniforms.uFar.value=v(22,22*(1+W),a),d.uniforms.uFlat.value=1-.45*a}function ue(){if(!l||!r)return;const t=innerWidth<700,e=Math.min(2,window.devicePixelRatio||1),a=Math.max(1,Math.round(r.clientWidth*e)),n=Math.max(1,Math.round(r.clientHeight*e));t!==R&&(s&&(S.remove(s),s.geometry.dispose()),s=new Z(le(t),d),s.frustumCulled=!1,S.add(s),R=t),!(r.width===a&&r.height===n)&&(z=-1,l.setPixelRatio(1),l.setSize(a,n,!1),o.aspect=a/n,o.fov=a/n<1?52:34,o.position.set(0,a/n<1?3.4:2.7,10.5),o.lookAt(0,-.6,0),o.updateProjectionMatrix(),d.uniforms.uRes.value.set(a,n),d.uniforms.uDpr.value=e)}function F(){if(c=0,!w||document.hidden)return;if(O&&A||(c=requestAnimationFrame(F)),ue(),h||i){const e=h?Math.min(1,Math.max(0,h()||0)):0;i+=(e-i)*.16,Math.abs(e-i)<5e-4&&(i=e)}i!==z&&(z=i,ce(o.aspect<1));const t=(performance.now()-re)/1e3;d.uniforms.uTime.value=t,l.render(S,o),A||(A=1,r.style.opacity="1")}function de(){!document.hidden&&w&&!c&&(c=requestAnimationFrame(F))}function fe(t=!0){if(w=t&&document.body.dataset.route===J&&!!document.querySelector("[data-about]"),!w){c&&(cancelAnimationFrame(c),c=0),r&&(r.style.opacity="0"),A=0;return}if(!l){if(r=se(),!r)return;try{l=new q({canvas:r,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:"low-power"})}catch{l=null;return}l.setClearColor(0,0),S=new V,o=new I(34,1,.1,60),d=new N({vertexShader:oe,fragmentShader:ie,transparent:!0,side:X,depthTest:!1,depthWrite:!1,blending:U,blendSrc:C,blendDst:L,blendSrcAlpha:C,blendDstAlpha:L,uniforms:{uTime:{value:0},uRes:{value:new G(1,1)},uDpr:{value:1},uFar:{value:22},uFlat:{value:1},uAlpha:{value:1},uScan:{value:O?0:1}}}),document.addEventListener("visibilitychange",de),window.__cfigAboutWaves={mat:d,camera:o,renderer:l}}c||(c=requestAnimationFrame(F))}const ve=matchMedia("(prefers-reduced-motion: reduce)").matches;let E=null;function pe(t){for(const e of t.querySelectorAll("[data-acc-toggle]")){if(e.dataset.bound)continue;e.dataset.bound="1";const a=e.closest("[data-acc]");e.setAttribute("aria-expanded","false"),a.classList.add("is-shut"),e.addEventListener("click",()=>{const n=e.getAttribute("aria-expanded")!=="true";e.setAttribute("aria-expanded",String(n)),a.classList.toggle("is-shut",!n)})}}function me(t){const e=t.querySelector("[data-people]")?.closest(".ab-people");!e||ve||(E??=k(()=>import("./people-tunnel.D9I12DG9.js"),__vite__mapDeps([0,1,2,3,4])),E.then(a=>{document.contains(e)&&a.init(e)}))}function he(){const t=document.querySelector("[data-about]");if(fe(),!t){E?.then(e=>e.destroy());return}pe(t),me(t)}const ge=Object.freeze(Object.defineProperty({__proto__:null,init:he},Symbol.toStringTag,{value:"Module"}));export{ge as a,xe as s};
