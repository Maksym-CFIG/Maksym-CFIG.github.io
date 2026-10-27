import{W as j,S as k,P as V,b as N,V as G,O as R,i as z,j as U,D as X,M as Z,B as K,e as w}from"./three.module.B-8iX7Ma.js";const J="about",P=matchMedia("(prefers-reduced-motion: reduce)").matches,d=12,Q=8,Y=.35,ee=3.6,te={INK2:"#29455c",BLUE2:"#3f9be0",BLUE:"#2A6DAA"},ne=t=>{const e=parseInt(t.slice(1),16),n=a=>(a/255).toFixed(4);return`vec3(${n(e>>16)}, ${n(e>>8&255)}, ${n(e&255)})`},ae=Object.entries(te).map(([t,e])=>`#define C_${t} ${ne(e)}`).join(`
`),oe=`
attribute vec4 aSeg;   // x0, x1, z, seed
attribute vec2 aEnd;   // end (0|1), side (-1|1)
uniform float uTime;
uniform vec2 uRes;
uniform float uDpr;
uniform float uFar;
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
  return vec3(x, wave(vec2(x, z), t) * 1.15, z);
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
`,ie=`
${ae}
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
`;let c=null,E=null,u=null,m=null,i=null,l=0,M=!1,S=0;const se=performance.now();function re(){const t=document.querySelector("#canvas-wrapper");if(!t)return null;let e=t.querySelector("canvas.canvas-waves");return e||(e=document.createElement("canvas"),e.className="canvas-waves",e.setAttribute("aria-hidden","true"),Object.assign(e.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none",zIndex:"0",opacity:"0",transition:"opacity 900ms ease"}),t.append(e)),e}function ce(t){const e=t?70:120,n=t?90:150,a=e*n,s=new Float32Array(a*4*4),o=new Float32Array(a*4*2),g=new Uint32Array(a*6);let f=0;for(let y=0;y<e;y++){const H=-d+(y+.5)*(2*d/e),T=Math.sin(y*12.9898)*43758.5453%1;for(let A=0;A<n;A++,f++){const D=-d+A/n*2*d,I=-d+(A+1)/n*2*d;for(let b=0;b<4;b++){const _=f*4+b;s.set([D,I,H,Math.abs(T)],_*4),o.set([b>>1,b&1?1:-1],_*2)}const v=f*4;g.set([v,v+1,v+2,v+1,v+3,v+2],f*6)}}const x=new K;return x.setAttribute("aSeg",new w(s,4)),x.setAttribute("aEnd",new w(o,2)),x.setAttribute("position",new w(new Float32Array(a*4*3),3)),x.setIndex(new w(g,1)),x}let W=null,p=null;function le(){if(!c||!i)return;const t=innerWidth<700,e=Math.min(2,window.devicePixelRatio||1),n=Math.max(1,Math.round(i.clientWidth*e)),a=Math.max(1,Math.round(i.clientHeight*e));t!==W&&(p&&(E.remove(p),p.geometry.dispose()),p=new Z(ce(t),m),p.frustumCulled=!1,E.add(p),W=t),!(i.width===n&&i.height===a)&&(c.setPixelRatio(1),c.setSize(n,a,!1),u.aspect=n/a,u.fov=n/a<1?52:34,u.position.set(0,n/a<1?3.4:2.7,10.5),u.lookAt(0,-.6,0),u.updateProjectionMatrix(),m.uniforms.uRes.value.set(n,a),m.uniforms.uDpr.value=e)}function B(){if(l=0,!M||document.hidden)return;P&&S||(l=requestAnimationFrame(B)),le();const t=(performance.now()-se)/1e3;m.uniforms.uTime.value=t,c.render(E,u),S||(S=1,i.style.opacity="1")}function de(){!document.hidden&&M&&!l&&(l=requestAnimationFrame(B))}function ue(t=!0){if(M=t&&document.body.dataset.route===J&&!!document.querySelector("[data-about]"),!M){l&&(cancelAnimationFrame(l),l=0),i&&(i.style.opacity="0"),S=0;return}if(!c){if(i=re(),!i)return;try{c=new j({canvas:i,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:"low-power"})}catch{c=null;return}c.setClearColor(0,0),E=new k,u=new V(34,1,.1,60),m=new N({vertexShader:oe,fragmentShader:ie,transparent:!0,side:X,depthTest:!1,depthWrite:!1,blending:U,blendSrc:z,blendDst:R,blendSrcAlpha:z,blendDstAlpha:R,uniforms:{uTime:{value:0},uRes:{value:new G(1,1)},uDpr:{value:1},uFar:{value:22},uAlpha:{value:1},uScan:{value:P?0:1}}}),document.addEventListener("visibilitychange",de),window.__cfigAboutWaves={mat:m,camera:u,renderer:c}}l||(l=requestAnimationFrame(B))}const fe=matchMedia("(prefers-reduced-motion: reduce)").matches;let F=null,h=0,q=!1,C=[],L=[],r=null;function ve(t){for(const e of t.querySelectorAll("[data-acc-toggle]")){if(e.dataset.bound)continue;e.dataset.bound="1";const n=e.closest("[data-acc]");e.setAttribute("aria-expanded","false"),n.classList.add("is-shut"),e.addEventListener("click",()=>{const a=e.getAttribute("aria-expanded")!=="true";e.setAttribute("aria-expanded",String(a)),n.classList.toggle("is-shut",!a)})}}const $=70,pe=36;function O(){if(h=requestAnimationFrame(O),!q||!r)return;const t=innerHeight,e=r.getBoundingClientRect(),n=(t-e.top)/(t+e.height),a=Math.max(-.2,Math.min(1.2,n))-.5,s=[(a*$*.35).toFixed(1),(-a*$).toFixed(1)];for(const o of C)o.style.setProperty("--col-y",`${s[o.dataset.col%2]}px`);for(const o of L){const g=o.parentElement.getBoundingClientRect(),f=(g.top+g.height/2)/t-.5;o.style.setProperty("--py",`${(f*pe).toFixed(1)}px`)}}function me(t){if(cancelAnimationFrame(h),h=0,F?.disconnect(),r=t.querySelector("[data-people]"),!r)return;const e=[...r.querySelectorAll(".person")],n=new IntersectionObserver(s=>{for(const o of s)o.isIntersecting&&(o.target.classList.add("is-open"),n.unobserve(o.target))},{rootMargin:"0px 0px -12% 0px"});r.classList.add("people--ready");for(const s of e)n.observe(s);const a=matchMedia("(min-width: 901px)").matches;if(fe||!a){C=[],L=[];return}C=e,L=[...r.querySelectorAll(".person__img")],F=new IntersectionObserver(([s])=>{q=s.isIntersecting},{rootMargin:"20% 0px"}),F.observe(r),h=requestAnimationFrame(O)}function ge(){const t=document.querySelector("[data-about]");if(ue(),!t){cancelAnimationFrame(h),h=0,F?.disconnect(),r=null;return}ve(t),me(t)}export{ge as init};
