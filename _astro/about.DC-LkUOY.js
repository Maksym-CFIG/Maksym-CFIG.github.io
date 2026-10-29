const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/people-tunnel.B99bvGgv.js","_astro/Base.astro_astro_type_script_index_0_lang.747yHH0A.js","_astro/Lab.astro_astro_type_script_index_0_lang.BKhPu4E9.js","_astro/router.UeToN5xW.js","_astro/three.module.B-8iX7Ma.js"])))=>i.map(i=>d[i]);
import{_ as K}from"./Base.astro_astro_type_script_index_0_lang.747yHH0A.js";import{W as J,S as Q,P as Y,b as ee,V as te,O as W,i as $,j as ne,D as ae,M as oe,B as ie,e as M}from"./three.module.B-8iX7Ma.js";const se="about",k=matchMedia("(prefers-reduced-motion: reduce)").matches,p=12,re=8,le=.35,ce=3.6,ue={INK2:"#29455c",BLUE2:"#3f9be0",BLUE:"#2A6DAA"},de=t=>{const e=parseInt(t.slice(1),16),n=a=>(a/255).toFixed(4);return`vec3(${n(e>>16)}, ${n(e>>8&255)}, ${n(e&255)})`},fe=Object.entries(ue).map(([t,e])=>`#define C_${t} ${de(e)}`).join(`
`),pe=`
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
  float t = uTime * ${le.toFixed(2)};
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
  vA *= 1.0 - smoothstep(0.6, 0.98, abs(p.x) / ${p.toFixed(1)});
  vA *= 1.0 - smoothstep(0.7, 1.0, abs(p.z) / ${p.toFixed(1)});
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
`,ve=`
${fe}
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
  float sc = mod(uTime, ${re.toFixed(1)});
  float run = sc / ${ce.toFixed(1)};
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
`;let d=null,E=null,i=null,v=null,l=null,f=0,B=!1,_=0;const me=performance.now();function he(){const t=document.querySelector("#canvas-wrapper");if(!t)return null;let e=t.querySelector("canvas.canvas-waves");return e||(e=document.createElement("canvas"),e.className="canvas-waves",e.setAttribute("aria-hidden","true"),Object.assign(e.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none",zIndex:"0",opacity:"0",transition:"opacity 900ms ease"}),t.append(e)),e}function ge(t){const e=t?70:120,n=t?90:150,a=e*n,m=new Float32Array(a*4*4),o=new Float32Array(a*4*2),s=new Uint32Array(a*6);let h=0;for(let w=0;w<e;w++){const U=-p+(w+.5)*(2*p/e),G=Math.sin(w*12.9898)*43758.5453%1;for(let F=0;F<n;F++,h++){const X=-p+F/n*2*p,Z=-p+(F+1)/n*2*p;for(let A=0;A<4;A++){const T=h*4+A;m.set([X,Z,U,Math.abs(G)],T*4),o.set([A>>1,A&1?1:-1],T*2)}const g=h*4;s.set([g,g+1,g+2,g+1,g+3,g+2],h*6)}}const x=new ie;return x.setAttribute("aSeg",new M(m,4)),x.setAttribute("aEnd",new M(o,2)),x.setAttribute("position",new M(new Float32Array(a*4*3),3)),x.setIndex(new M(s,1)),x}let q=null,u=null,S=null,r=0,P=0;const y=(t,e,n)=>t+(e-t)*n,H=1.4;function Ee(t){S=typeof t=="function"?t:null,S||(r=0)}const I={wide:{A:{y:2.7,z:10.5,ly:-.6,lz:0,fov:34},B:{y:1.55,z:11.2,ly:.35,lz:-12,fov:44}},tall:{A:{y:3.4,z:10.5,ly:-.6,lz:0,fov:52},B:{y:1.7,z:11.6,ly:.9,lz:-12,fov:66}}};function ye(t){const e=t?I.tall:I.wide,n=r*r*(3-2*r);i.fov=y(e.A.fov,e.B.fov,n),i.position.set(0,y(e.A.y,e.B.y,n),y(e.A.z,e.B.z,n)),i.lookAt(0,y(e.A.ly,e.B.ly,n),y(e.A.lz,e.B.lz,n)),i.updateProjectionMatrix(),u&&(u.rotation.y=n*Math.PI/2,u.scale.x=1+H*n),v.uniforms.uFar.value=y(22,22*(1+H),n),v.uniforms.uFlat.value=1-.45*n}function be(){if(!d||!l)return;const t=innerWidth<700,e=Math.min(2,window.devicePixelRatio||1),n=Math.max(1,Math.round(l.clientWidth*e)),a=Math.max(1,Math.round(l.clientHeight*e));t!==q&&(u&&(E.remove(u),u.geometry.dispose()),u=new oe(ge(t),v),u.frustumCulled=!1,E.add(u),q=t),!(l.width===n&&l.height===a)&&(P=-1,d.setPixelRatio(1),d.setSize(n,a,!1),i.aspect=n/a,i.fov=n/a<1?52:34,i.position.set(0,n/a<1?3.4:2.7,10.5),i.lookAt(0,-.6,0),i.updateProjectionMatrix(),v.uniforms.uRes.value.set(n,a),v.uniforms.uDpr.value=e)}function O(){if(f=0,!B||document.hidden)return;if(k&&_||(f=requestAnimationFrame(O)),be(),S||r){const e=S?Math.min(1,Math.max(0,S()||0)):0;r+=(e-r)*.16,Math.abs(e-r)<5e-4&&(r=e)}r!==P&&(P=r,ye(i.aspect<1));const t=(performance.now()-me)/1e3;v.uniforms.uTime.value=t,d.render(E,i),_||(_=1,l.style.opacity="1")}function xe(){!document.hidden&&B&&!f&&(f=requestAnimationFrame(O))}function Ae(t=!0){if(B=t&&document.body.dataset.route===se&&!!document.querySelector("[data-about]"),!B){f&&(cancelAnimationFrame(f),f=0),l&&(l.style.opacity="0"),_=0;return}if(!d){if(l=he(),!l)return;try{d=new J({canvas:l,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:"low-power"})}catch{d=null;return}d.setClearColor(0,0),E=new Q,i=new Y(34,1,.1,60),v=new ee({vertexShader:pe,fragmentShader:ve,transparent:!0,side:ae,depthTest:!1,depthWrite:!1,blending:ne,blendSrc:$,blendDst:W,blendSrcAlpha:$,blendDstAlpha:W,uniforms:{uTime:{value:0},uRes:{value:new te(1,1)},uDpr:{value:1},uFar:{value:22},uFlat:{value:1},uAlpha:{value:1},uScan:{value:k?0:1}}}),document.addEventListener("visibilitychange",xe),window.__cfigAboutWaves={mat:v,camera:i,renderer:d}}f||(f=requestAnimationFrame(O))}const j=matchMedia("(prefers-reduced-motion: reduce)").matches;let z=null,b=0,V=!1,L=[],C=[],c=null,R=null;function Se(t){for(const e of t.querySelectorAll("[data-acc-toggle]")){if(e.dataset.bound)continue;e.dataset.bound="1";const n=e.closest("[data-acc]");e.setAttribute("aria-expanded","false"),n.classList.add("is-shut"),e.addEventListener("click",()=>{const a=e.getAttribute("aria-expanded")!=="true";e.setAttribute("aria-expanded",String(a)),n.classList.toggle("is-shut",!a)})}}const D=70,we=36;function N(){if(b=requestAnimationFrame(N),!V||!c)return;const t=innerHeight,e=c.getBoundingClientRect(),n=(t-e.top)/(t+e.height),a=Math.max(-.2,Math.min(1.2,n))-.5,m=[(a*D*.35).toFixed(1),(-a*D).toFixed(1)];for(const o of L)o.style.setProperty("--col-y",`${m[o.dataset.col%2]}px`);for(const o of C){const s=o.parentElement.getBoundingClientRect(),h=(s.top+s.height/2)/t-.5;o.style.setProperty("--py",`${(h*we).toFixed(1)}px`)}}function Fe(t){if(cancelAnimationFrame(b),b=0,z?.disconnect(),c=t.querySelector("[data-people]"),!c)return;const e=Number(new URLSearchParams(location.search).get("pp"));if([3,4,5,6].includes(e)&&!j){R??=K(()=>import("./people-tunnel.B99bvGgv.js"),__vite__mapDeps([0,1,2,3,4]));const o=c.closest(".ab-people");R.then(s=>{document.contains(o)&&s.init(o,e)});return}const n=[...c.querySelectorAll(".person")],a=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(s.target.classList.add("is-open"),a.unobserve(s.target))},{rootMargin:"0px 0px -12% 0px"});c.classList.add("people--ready");for(const o of n)a.observe(o);const m=matchMedia("(min-width: 901px)").matches;if(j||!m){L=[],C=[];return}L=n,C=[...c.querySelectorAll(".person__img")],z=new IntersectionObserver(([o])=>{V=o.isIntersecting},{rootMargin:"20% 0px"}),z.observe(c),b=requestAnimationFrame(N)}function Me(){const t=document.querySelector("[data-about]");if(Ae(),!t){cancelAnimationFrame(b),b=0,z?.disconnect(),c=null,R?.then(e=>e.destroy());return}Se(t),Fe(t)}const Be=Object.freeze(Object.defineProperty({__proto__:null,init:Me},Symbol.toStringTag,{value:"Module"}));export{Be as a,Ee as s};
