import{W as Wt}from"./three.module.2SwsOW1X.js";import{S as jt,P as qt,C as St,a as Ht,V as pt,b as ft,D as Tt,M as Yt,G as _t,B as It,c as G}from"./three.core.Gwy6y2Io.js";const ht="investors",I=matchMedia("(prefers-reduced-motion: reduce)").matches,Nt=matchMedia("(pointer: fine)").matches,Vt="/assets/investory/",J=[{zone:0,rank:1,file:"karlovina-3NP.svg",x:.3,w:.72,r:-8,layer:0},{zone:0,rank:2,file:"plan-light.svg",mx:1,x:.3,w:.61,r:6,layer:0,hold:.5,dt:-.12},{zone:1,rank:1,file:"karlovina-1PP.svg",x:.2,w:.7,r:14,layer:0,at:"Dokumenty emitenta",atY:.55},{zone:1,rank:2,file:"plan-vertical.svg",x:.3,w:.61,r:90,layer:0,at:"Výroční a auditorské",atY:.45},{zone:1,rank:3,file:"karlovina-6NP.svg",mx:1,x:.1,w:.7,r:180,layer:0,at:"Finanční výsledky",atY:.45},{zone:1,rank:4,file:"karlovina-7NP.svg",x:.3,w:.7,r:24,layer:0,at:"Kontakt pro investory",atY:.45},{zone:1,rank:5,file:"plan-dark.svg",mx:1,x:.1,w:.64,r:-40,layer:0}],lt=1.05,Gt=1.25,nt=1.12,Kt=4,gt=9,Ot=1,Qt=1.45,Pt=30,Ut=54,ot=.85,Xt=-.7,Dt=.11,Zt=.03,Jt=[{w:[1,1.25,.7],a:[.12,.2,.16]},{w:[1.1,0,0],a:[.2,0,0]}],$t=`
  attribute vec3 aA;
  attribute vec3 aB;
  attribute vec2 aQ;
  attribute float aSeg;
  attribute float aKind;
  uniform float uHead;
  uniform float uK;
  uniform float uN;
  uniform float uGrow;
  uniform float uWall;
  uniform float uFade;
  uniform vec2 uRes;
  uniform float uDpr;
  uniform float uDist;
  uniform float uMix;
  uniform vec3 uW;
  uniform vec3 uA;
  varying float vT;
  varying float vDone;
  varying float vSide;
  varying float vHalf;
  varying float vSoft;
  varying float vAlpha;
  varying float vTint;
  varying vec2 vLocal;

  void main() {
    // Подъём стен волной по порядку отрезков: ранние встают первыми.
    float g = clamp(uGrow * 1.6 - aSeg / max(uN, 1.0) * 0.6, 0.0, 1.0);
    g = g * g * (3.0 - 2.0 * g);
    vec3 pa = vec3(aA.x, aA.z * uWall * g, aA.y);
    vec3 pb = vec3(aB.x, aB.z * uWall * g, aB.y);
    vec4 ma = modelViewMatrix * vec4(pa, 1.0);
    vec4 mb = modelViewMatrix * vec4(pb, 1.0);
    vec4 ca = projectionMatrix * ma;
    vec4 cb = projectionMatrix * mb;
    vec2 sa = ca.xy / ca.w * 0.5 * uRes;
    vec2 sb = cb.xy / cb.w * 0.5 * uRes;
    vec2 d = sb - sa;
    float len = length(d);
    vec2 dir = len > 0.0001 ? d / len : vec2(1.0, 0.0);
    vec2 nrm = vec2(-dir.y, dir.x);

    float t = aQ.x;
    vec4 c = mix(ca, cb, t);
    float dist = -mix(ma.z, mb.z, t);
    // Ближе камеры — толще и чётче, дальше — тоньше и мягче.
    float near = uDist / max(dist, 1.0);
    int k = int(aKind + 0.5);
    float w = (k == 0 ? uW.x : (k == 1 ? uW.y : uW.z)) * clamp(near, 0.8, 1.5) * uDpr;
    float a = k == 0 ? uA.x : (k == 1 ? uA.y : uA.z);
    // Линия тоньше пикселя — пиксель, но прозрачнее (иначе мерцает).
    if (w < uDpr) { a *= w / uDpr; w = uDpr; }
    float soft = uDpr * (0.9 + 2.2 * clamp(1.0 - near, 0.0, 1.0));
    float hw = w * 0.5 + soft;
    c.xy += nrm * aQ.y * hw / (0.5 * uRes) * c.w;
    gl_Position = c;

    // Дымка: дальше взгляда — гаснет.
    a *= exp(-max(0.0, dist - uDist) / (uDist * 1.6));
    // Крыша и вертикали проявляются с подъёмом; вертикали к верху бледнее.
    if (k > 0) a *= smoothstep(0.0, 0.35, g);
    if (k == 2) a *= mix(1.0, 0.4, t);
    vAlpha = a * uFade;
    // Рисунок — цветом текста (дальний слой в синеву), стены — акцентом.
    vTint = k == 0 ? uMix : 0.85;
    vT = k == 2 ? 0.0 : t;
    vDone = clamp((uHead - aSeg) / uK, 0.0, 1.0);
    if (k == 2) vDone = step(0.999, vDone);
    vSide = aQ.y * hw;
    vHalf = w * 0.5;
    vSoft = soft;
    vLocal = mix(aA.xy, aB.xy, t);
  }
`,te=`
  uniform vec3 uColor;
  uniform vec3 uAccent;
  uniform vec2 uBox;
  varying float vT;
  varying float vDone;
  varying float vSide;
  varying float vHalf;
  varying float vSoft;
  varying float vAlpha;
  varying float vTint;
  varying vec2 vLocal;
  void main() {
    if (vT > vDone || vDone <= 0.0) discard;
    if (vLocal.x < 0.0 || vLocal.y < 0.0 || vLocal.x > uBox.x || vLocal.y > uBox.y) discard;
    float cov = clamp((vHalf + vSoft * 0.5 - abs(vSide)) / vSoft, 0.0, 1.0);
    float a = vAlpha * cov;
    if (a < 0.002) discard;
    gl_FragColor = vec4(mix(uColor, uAccent, vTint), a);
  }
`,ut=new Map,ee=t=>(ut.has(t)||ut.set(t,fetch(Vt+t).then(o=>o.ok?o.text():"").catch(()=>"")),ut.get(t));function ne(t){const m=new DOMParser().parseFromString(t,"image/svg+xml").querySelector("svg");if(!m)return null;const g=(m.getAttribute("viewBox")||"0 0 1000 1000").split(/[\s,]+/).map(Number),h=[],y=new Set,M=(a,s,l,f)=>{const p=Math.round(a)+","+Math.round(s),d=Math.round(l)+","+Math.round(f);return p<d?p+"|"+d:d+"|"+p},w=(a,s,l,f)=>{if(Math.hypot(l-a,f-s)<.5)return;const p=M(a,s,l,f);y.has(p)||(y.add(p),h.push(a,s,l,f))};for(const a of m.querySelectorAll("path")){const s=(a.getAttribute("d")||"").match(/[MLHVZmlhvz]|-?\d*\.?\d+(?:e[-+]?\d+)?/g)||[];let l="",f=0,p=0,d=0,r=0,e=0;const n=()=>Number(s[e++]);for(;e<s.length;){if(/[A-Za-z]/.test(s[e])&&(l=s[e++].toUpperCase()),l==="Z"){w(f,p,d,r),f=d,p=r;continue}if(l==="M"){f=d=n(),p=r=n(),l="L";continue}let c=f,i=p;if(l==="L")c=n(),i=n();else if(l==="H")c=n();else if(l==="V")i=n();else{e++;continue}w(f,p,c,i),f=c,p=i}}return{w:g[2],h:g[3],segs:h}}function oe(t,o){const m=t.segs.length/4,g=[];for(let r=0;r<m;r++){const[e,n,c,i]=t.segs.slice(r*4,r*4+4);g.push([e,n,0,c,i,0,r,0])}if(o){for(let e=0;e<m;e++){const[n,c,i,v]=t.segs.slice(e*4,e*4+4);g.push([n,c,1,i,v,1,e,1])}const r=new Set;for(let e=0;e<m;e++)for(const n of[0,1]){const c=t.segs[e*4+n*2],i=t.segs[e*4+n*2+1],v=Math.round(c/3)+","+Math.round(i/3);r.has(v)||(r.add(v),g.push([c,i,0,c,i,1,e,2]))}}const h=g.length,y=new Float32Array(h*12),M=new Float32Array(h*12),w=new Float32Array(h*8),a=new Float32Array(h*4),s=new Float32Array(h*4),l=new Float32Array(h*12),f=new Uint32Array(h*6),p=[[0,-1],[0,1],[1,-1],[1,1]];g.forEach((r,e)=>{for(let n=0;n<4;n++){const c=e*4+n;y.set([r[0],r[1],r[2]],c*3),M.set([r[3],r[4],r[5]],c*3),w.set(p[n],c*2),a[c]=r[6],s[c]=r[7],l.set(p[n][0]?[r[3],0,r[4]]:[r[0],0,r[1]],c*3)}f.set([e*4,e*4+1,e*4+2,e*4+2,e*4+1,e*4+3],e*6)});const d=new It;return d.setAttribute("position",new G(l,3)),d.setAttribute("aA",new G(y,3)),d.setAttribute("aB",new G(M,3)),d.setAttribute("aQ",new G(w,2)),d.setAttribute("aSeg",new G(a,1)),d.setAttribute("aKind",new G(s,1)),d.setIndex(new G(f,1)),{g:d,n:m}}let L=null,N=null,K=null,j=null,q=[],at=0,vt=0,st=!0,yt=-1,dt=0,xt=0,tt=1,$=1,Ct=!1;const Mt=new St,wt=new St,F={tx:0,ty:0,x:0,y:0};function ae(){const t=document.querySelector("#canvas-wrapper");if(!t)return null;let o=t.querySelector("canvas.canvas-plans");return o||(o=document.createElement("canvas"),o.className="canvas-plans",o.setAttribute("aria-hidden","true"),t.append(o)),o}function se(t){if(L=ae(),!L)return!1;try{N=new Wt({canvas:L,alpha:!0,antialias:!1})}catch{return Ct=!0,L.remove(),L=N=null,!1}N.setClearColor(0,0),tt=Math.min(2,devicePixelRatio||1),N.setPixelRatio(tt),K=new jt,j=new qt(Pt,1,10,1e5);const o=getComputedStyle(document.body);Mt.set(o.getPropertyValue("--fg-1").trim()||"#ffffff"),wt.set(o.getPropertyValue("--accent-section").trim()||"#5FA8E0"),q=[];const m=J.map((g,h)=>h).sort((g,h)=>J[h].layer-J[g].layer);for(const g of m){const h=J[g],y=ce(t[g],h.crop);if(!y||!y.segs.length)continue;const M=Math.max(y.w,y.h),w=Jt[h.layer],{g:a,n:s}=oe(y,h.layer===0),l=Math.max(8,s*.06),f=new Ht({vertexShader:$t,fragmentShader:te,transparent:!0,depthTest:!1,depthWrite:!1,side:Tt,uniforms:{uHead:{value:I?s+l:0},uK:{value:l},uN:{value:s},uGrow:{value:I?1:0},uWall:{value:M*Dt},uFade:{value:1},uRes:{value:new pt(1,1)},uDpr:{value:tt},uDist:{value:1e3},uW:{value:new ft(...w.w)},uA:{value:new ft(...w.a).multiplyScalar(Math.min(1,Math.pow(450/s,.4)))},uColor:{value:Mt},uAccent:{value:wt},uMix:{value:h.layer?.6:0},uBox:{value:new pt(y.w,y.h)}}}),p=new Yt(a,f);p.frustumCulled=!1,p.position.set(-y.w/2,0,-y.h/2);const d=new _t;d.add(p),K.add(d);const r=[1/0,1/0,-1/0,-1/0];for(let e=0;e<y.segs.length;e+=2)r[0]=Math.min(r[0],y.segs[e]),r[1]=Math.min(r[1],y.segs[e+1]),r[2]=Math.max(r[2],y.segs[e]),r[3]=Math.max(r[3],y.segs[e+1]);q.push({cfg:h,j:g,d:y,side:M,n:s,k:l,m:f,mesh:p,bb:r,group:d,p:I?1:0,g:I?1:0})}return!0}const U=t=>Math.min(1,Math.max(0,t));function re(t){if(!t||t.segs.length/4<1200)return t;const o=Math.max(t.w,t.h),m=o/2e3,g=(n,c)=>Math.round(n/m)+","+Math.round(c/m),h=new Map,y=t.segs.length/4,M=[];for(let n=0;n<y;n++){const c=[t.segs[n*4],t.segs[n*4+1]],i=[t.segs[n*4+2],t.segs[n*4+3]],v=g(...c),u=g(...i);if(v===u){M.push(null);continue}for(const[b,S]of[[v,c],[u,i]])h.has(b)||h.set(b,{x:S[0],y:S[1],e:[]}),h.get(b).e.push(n);M.push([v,u])}const w=new Uint8Array(y),a=n=>{const c=[n];let i=n;for(;;){const u=h.get(i).e.find(b=>!w[b]);if(u===void 0)break;w[u]=1,i=M[u][0]===i?M[u][1]:M[u][0],c.push(i)}return c},s=[];for(const[n,c]of h)if(c.e.length!==2)for(;c.e.some(i=>!w[i]);)s.push(a(n));for(const[n,c]of h)for(;c.e.some(i=>!w[i]);)s.push(a(n));const l=o*.006,f=[];for(const n of s){const c=n.map(u=>h.get(u)),i=[c[0]];for(let u=1;u<c.length;u++){const b=i[i.length-1],S=c[u],k=c[u+1];if(k){const R=S.x-b.x,T=S.y-b.y,O=k.x-S.x,X=k.y-S.y,Z=Math.abs(R*X-T*O);if(R*O+T*X>0&&Z<.03*Math.hypot(R,T)*Math.hypot(O,X))continue}i.push(S)}let v=0;for(let u=1;u<i.length;u++)v+=Math.hypot(i[u].x-i[u-1].x,i[u].y-i[u-1].y);v>=l&&f.push(i)}const p=[];let d=0,r=0;const e=f.slice();for(;e.length;){let n=0,c=1/0,i=!1;for(let u=0;u<e.length;u++){const b=e[u],S=Math.hypot(b[0].x-d,b[0].y-r),k=Math.hypot(b[b.length-1].x-d,b[b.length-1].y-r);S<c&&(c=S,n=u,i=!1),k<c&&(c=k,n=u,i=!0)}let v=e.splice(n,1)[0];i&&(v=v.slice().reverse());for(let u=1;u<v.length;u++)p.push(v[u-1].x,v[u-1].y,v[u].x,v[u].y);d=v[v.length-1].x,r=v[v.length-1].y}return{w:t.w,h:t.h,segs:p}}function ce(t,o){if(!t||!o)return t;const[m,g,h,y]=[o[0]*t.w,o[1]*t.h,o[2]*t.w,o[3]*t.h],M=(a,s)=>a>=m&&a<=h&&s>=g&&s<=y,w=[];for(let a=0;a<t.segs.length;a+=4){const[s,l,f,p]=t.segs.slice(a,a+4);(M(s,l)||M(f,p))&&w.push(s-m,l-g,f-m,p-g)}return{w:h-m,h:y-g,segs:w}}const bt=(t,o)=>t<=0?0:t<o?t*t/(2*o):t-o/2;function Lt(){at=requestAnimationFrame(Lt);const t=innerWidth,o=innerHeight,m=F.x+(F.tx-F.x)*.06,g=F.y+(F.ty-F.y)*.06,h=Math.abs(m-F.x)+Math.abs(g-F.y)>1e-4;if(F.x=m,F.y=g,!st&&!h&&scrollY===yt&&t===dt&&o===xt)return;st=!1,yt=scrollY,dt=t,xt=o;const y=Math.round(t*tt),M=Math.round(o*tt);(L.width!==y||L.height!==M)&&N.setSize(t,o,!1);const w=document.querySelector(".inv__main");if(!w)return;const a=w.getBoundingClientRect(),s=t<=640,l=Math.max(1,document.documentElement.scrollHeight-o),f=(lt+.3)*o/ot;let p=0,d=0,r=0,e=0,n=l*.4;const c=document.querySelector("[data-tape]");if(c){const x=c.getBoundingClientRect(),P=c.querySelector("[data-tape-track]")?.parentElement,Y=P?.previousElementSibling;if(c.classList.contains("is-tape")&&Y){let D=parseFloat(getComputedStyle(P).marginTop)||0,H=P.querySelector(".prj__i");for(;H&&H!==P;)D+=H.offsetTop,H=H.offsetParent;H!==P&&(D=parseFloat(getComputedStyle(P).marginTop)||0),n=Y.getBoundingClientRect().bottom+scrollY+D-o,r=Math.max(0,x.bottom+scrollY-n-o*.45);const z=scrollY-n,A=o*.2;p=bt(z,A)-bt(z-r,A),d=Math.min(U((z+A)/A),U((r+A-z)/A)),d=d*d*(3-2*d);const W=U(z/Math.max(1,r));e=f*W*W*(3-2*W)}else n=x.top+scrollY}const i=scrollY-p+e,v=Math.max(1,l-r+(r?f:0)),u=n+(r?f:0),b=$=1-Ot*d,S=Ut*Math.PI/180,k=o/2/Math.tan(Pt*Math.PI/360),R=ot/Math.cos(S),T=i*R,O=k*Zt;j.aspect=t/o,j.position.set(m*O,k*Math.cos(S)-g*O*.6,T+k*Math.sin(S)),j.lookAt(0,0,T),j.updateProjectionMatrix();const X=s?t/2:a.left+a.width/2;j.projectionMatrix.elements[8]=-(2*X/t-1),j.projectionMatrixInverse.copy(j.projectionMatrix).invert();let Z=o*.25;const rt=document.querySelector("#rust .arrow-link");if(rt){const x=rt.getBoundingClientRect();Z=(x.top+x.height/2+scrollY-o/2)/ot}const mt=document.querySelector("footer.footer"),Et=mt?mt.getBoundingClientRect().top+scrollY:l+o,ct=Math.max(Z,Math.min(v-o*.3,Et-o-r+(u-n))),E=o/ot,Ft=[[Z,n-.3*E,n-.7*E,n],[u+o*.3,ct,ct-.5*E,Math.min(v-o*.3,ct+.25*E)]],et=new Map;Ft.forEach(([x,P,Y,D],H)=>{const z=q.filter(C=>C.cfg.zone===H);let A=Math.max(0,Math.min(z.length-1,Math.round((P-x)/(nt*E)))),W=A?(Math.min(D,Math.max(Y,x+A*nt*E))-x)/A:0;for(;A>0&&W<lt*E;)A--,W=A?(Math.min(D,Math.max(Y,x+A*nt*E))-x)/A:0;for(;A<z.length-1&&W>Gt*E&&x+(A+1)*lt*E<=D;)A++,W=(Math.min(D,Math.max(Y,x+A*nt*E))-x)/A;const V=z.slice().sort((C,B)=>C.cfg.rank-B.cfg.rank).slice(0,A+1).sort((C,B)=>C.j-B.j),_=z.filter(C=>C.cfg.at);if(H&&_.length){for(const C of _){const B=[...document.querySelectorAll("h2, h3")].find(it=>it.textContent.includes(C.cfg.at));if(!B)continue;const Q=B.getBoundingClientRect().top+scrollY-o*C.cfg.atY;et.set(C,Q-(r?r-f:0))}return}V.forEach((C,B)=>et.set(C,x+W*B+(B?(C.cfg.dt||0)*E:0)))});for(const x of q){const P=x.cfg,Y=P.layer?Xt*k:0;if(x.off=!et.has(x),x.group.visible=!x.off,x.off){x.p=x.g=0;continue}const D=et.get(x),z=a.width*P.w*(s?Qt:1)/x.side,A=P.hold&&!I?Math.max(0,Math.min(.8*o,(i-D)*(1-P.hold))):0;x.group.position.set(a.width*P.x*(s?.6:1),Y,(D+A)*R+Y*Math.tan(S));const W=Math.max(-gt,Math.min(gt,Kt*(i-D)/o))*(x.j%2?-1:1);x.group.rotation.y=-(((P.r||0)+(I?0:W))*Math.PI)/180,x.group.scale.set(P.mx?-z:z,z,z);const V=x.m.uniforms;let _=1;if(P.at&&!I){const Rt=Math.abs(i-D)/o;_=1-U((Rt-.42)/.22),_=_*_*(3-2*_)}if(V.uFade.value=b*_,V.uRes.value.set(y,M),V.uDist.value=k,I)continue;const C=P.layer?1.2:1,B=Math.min(Math.max(D-o*C,P.zone?u-o*.1:-1/0),Math.max(0,v-o*.8)),Q=Math.min(v,Math.max(B+o*.5,D-o*.2)),it=Math.min(v,Math.max(Q+o*.35,D+o*.15));x.p=U((i-B)/Math.max(1,Q-B)),x.g=U((i-Q+o*.15)/Math.max(1,it-Q+o*.15)),V.uHead.value=x.p*(x.n+x.k),V.uGrow.value=x.g}N.render(K,j)}function zt(t){F.tx=t.clientX/innerWidth*2-1,F.ty=t.clientY/innerHeight*2-1}function At(){at&&cancelAnimationFrame(at),at=0,removeEventListener("pointermove",zt),K&&(K.traverse(t=>{t.geometry?.dispose(),t.material?.dispose?.()}),K.clear(),N.dispose(),N.forceContextLoss(),L.remove(),L=N=K=j=null,q=[])}document.addEventListener("astro:before-preparation",t=>{!L||document.body.dataset.route!==ht||!t.to||new URL(t.to).pathname===location.pathname||(L.style.transition="opacity 600ms ease-in",L.style.opacity="0")});const kt=typeof ResizeObserver=="function"?new ResizeObserver(()=>{st=!0}):null;async function he(){const t=++vt;if(document.body.dataset.route!==ht){kt?.disconnect(),At();return}if(Ct)return;const o=(await Promise.all(J.map(m=>ee(m.file)))).map(m=>m?re(ne(m)):null);t!==vt||document.body.dataset.route!==ht||(At(),se(o)&&(kt?.observe(document.body),Nt&&!I&&addEventListener("pointermove",zt,{passive:!0}),st=!0,L.style.transition="opacity 800ms ease",L.style.opacity="0",Lt(),requestAnimationFrame(()=>{L&&(L.style.opacity="1")})))}function ie(t){const[o,m,g,h]=t.bb,y=t.cfg.layer?0:t.side*Dt*t.g,M=new ft,w=[];for(const e of[o,g])for(const n of[m,h])for(const c of[0,y])M.set(e,c,n).applyMatrix4(t.mesh.matrixWorld).project(j),w.push([(M.x+1)/2*innerWidth,(1-M.y)/2*innerHeight]);w.sort((e,n)=>e[0]-n[0]||e[1]-n[1]);const a=(e,n,c)=>(n[0]-e[0])*(c[1]-e[1])-(n[1]-e[1])*(c[0]-e[0]),s=[],l=[];for(const e of w){for(;s.length>1&&a(s[s.length-2],s[s.length-1],e)<=0;)s.pop();s.push(e)}for(const e of w.slice().reverse()){for(;l.length>1&&a(l[l.length-2],l[l.length-1],e)<=0;)l.pop();l.push(e)}let f=s.slice(0,-1).concat(l.slice(0,-1));t.full=Bt(f),t.hull=f;const p=(e,n,c)=>{const i=[];return e.forEach((v,u)=>{const b=e[(u+1)%e.length];n(v)&&i.push(v),n(v)!==n(b)&&i.push(c(v,b))}),i},d=innerWidth,r=innerHeight;return f=p(f,e=>e[0]>=0,(e,n)=>[0,e[1]+(n[1]-e[1])*(0-e[0])/(n[0]-e[0])]),f=p(f,e=>e[0]<=d,(e,n)=>[d,e[1]+(n[1]-e[1])*(d-e[0])/(n[0]-e[0])]),f=p(f,e=>e[1]>=0,(e,n)=>[e[0]+(n[0]-e[0])*(0-e[1])/(n[1]-e[1]),0]),f=p(f,e=>e[1]<=r,(e,n)=>[e[0]+(n[0]-e[0])*(r-e[1])/(n[1]-e[1]),r]),f}function Bt(t){let o=0;for(let m=0;m<t.length;m++){const g=t[m],h=t[(m+1)%t.length];o+=g[0]*h[1]-h[0]*g[1]}return Math.abs(o)/2}function le(t,o){for(const m of[t,o])for(let g=0;g<m.length;g++){const h=m[g],y=m[(g+1)%m.length],M=y[1]-h[1],w=h[0]-y[0],a=f=>f.map(p=>p[0]*M+p[1]*w),s=a(t),l=a(o);if(Math.max(...s)<=Math.min(...l)||Math.max(...l)<=Math.min(...s))return!0}return!1}window.__cfigPlans={placed:()=>q.filter(t=>!t.off).sort((t,o)=>t.j-o.j).map(t=>t.cfg.file.replace(".svg","")),segs:()=>q.map(t=>t.j+":"+t.n),fade:()=>Math.round($*100)/100,progress:()=>q.map(t=>Math.round(t.p*100)/100+"/"+Math.round(t.g*100)/100),overlaps:()=>{const t=q.filter(a=>a.p>.01&&!a.off).map(a=>({j:a.j,poly:ie(a)})).filter(a=>a.poly.length>2),o=[];for(let a=0;a<t.length;a++)for(let s=a+1;s<t.length;s++)le(t[a].poly,t[s].poly)||o.push(t[a].j+"×"+t[s].j);const m=$>.01?t.filter(a=>{const s=q.find(l=>l.j===a.j);return s.p>.3&&Bt(a.poly)>.5*s.full}).map(a=>a.j):[],g=[".fnd__band",".fnd__photo"].map(a=>document.querySelector(a)?.getBoundingClientRect()).filter(Boolean),h=a=>{const s=a.hull,l=s.map(i=>i[0]),f=s.map(i=>i[1]),[p,d,r,e]=[Math.min(...l),Math.max(...l),Math.min(...f),Math.max(...f)];let n=0,c=0;for(let i=0;i<24;i++)for(let v=0;v<24;v++){const u=p+(d-p)*(i+.5)/24,b=r+(e-r)*(v+.5)/24;let S=!0;for(let k=0;k<s.length;k++){const R=s[k],T=s[(k+1)%s.length];if((T[0]-R[0])*(b-R[1])-(T[1]-R[1])*(u-R[0])<0){S=!1;break}}S&&(n++,!(u<0||b<0||u>innerWidth||b>innerHeight)&&(g.some(k=>u>=k.left&&u<=k.right&&b>=k.top&&b<=k.bottom)||c++))}return n?c/n:0},y=$>.01?t.filter(a=>{const s=q.find(l=>l.j===a.j);return s.p>.2&&h(s)>.15}).map(a=>a.j):[],M=document.querySelector(".inv__main")?.getBoundingClientRect().left??0,w=$>.01?t.filter(a=>a.poly.some(s=>s[0]<M-24)).map(a=>a.j+":"+Math.round(M-Math.min(...a.poly.map(s=>s[0])))):[];return{shown:t.map(a=>a.j),out:o,whole:m,seen:y,spill:w,polys:t.map(a=>a.poly.map(s=>s.map(Math.round)))}}};export{he as init};
