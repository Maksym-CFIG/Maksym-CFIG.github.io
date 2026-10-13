const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/chart.Dc12DK5A.js","_astro/three.module.CaAq71Xp.js","_astro/ending.D5skQFQd.js","_astro/Lab.astro_astro_type_script_index_0_lang.DctTLjHW.js","_astro/router.UeToN5xW.js","_astro/step-icons.zvp08N9X.js","_astro/LineSegments2.BLbgtv0o.js","_astro/story.C9qJfrym.js","_astro/index.BzT4Dhid.js","_astro/index.C7zaps01.js","_astro/pitch.BjaSULmf.js","_astro/wordtune.tzlmDxRt.js"])))=>i.map(i=>d[i]);
import"./Lab.astro_astro_type_script_index_0_lang.DctTLjHW.js";import{n as np}from"./router.UeToN5xW.js";import"./three.module.CaAq71Xp.js";const ip="modulepreload",op=function(n){return"/"+n},jc={},Or=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){let s=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=s(e.map(c=>{if(c=op(c),c in jc)return;jc[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":ip,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((h,_)=>{d.addEventListener("load",h),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};function Wr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function pf(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $e={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mo={duration:.5,overwrite:!1,delay:0},tc,Jt,Tt,Qe=1e8,vt=1/Qe,el=Math.PI*2,sp=el/4,ap=0,mf=Math.sqrt,lp=Math.cos,cp=Math.sin,Vt=function(t){return typeof t=="string"},Pt=function(t){return typeof t=="function"},Yr=function(t){return typeof t=="number"},ec=function(t){return typeof t>"u"},kr=function(t){return typeof t=="object"},Me=function(t){return t!==!1},rc=function(){return typeof window<"u"},ts=function(t){return Pt(t)||Vt(t)},_f=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},he=Array.isArray,up=/random\([^)]+\)/g,fp=/,\s*/g,Zc=/(?:-?\.?\d|\.)+/gi,gf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ta=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,vf=/[+-]=-?[.\d]+/,hp=/[^,'"\[\]\s]+/gi,dp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,xr,rl,nc,Ye={},Us={},yf,xf=function(t){return(Us=Oi(t,Ye))&&De},ic=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Lo=function(t,e){return!e&&console.warn(t)},Tf=function(t,e){return t&&(Ye[t]=e)&&Us&&(Us[t]=e)||Ye},Po=function(){return 0},pp={suppressEvents:!0,isStart:!0,kill:!1},xs={suppressEvents:!0,kill:!1},mp={suppressEvents:!0},oc={},hn=[],nl={},wf,Ue={},wa={},Qc=30,Ts=[],sc="",ac=function(t){var e=t[0],r,i;if(kr(e)||Pt(e)||(t=[t]),!(r=(e._gsap||{}).harness)){for(i=Ts.length;i--&&!Ts[i].targetTest(e););r=Ts[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Bf(t[i],r)))||t.splice(i,1);return t},Hn=function(t){return t._gsap||ac(Je(t))[0]._gsap},Ef=function(t,e,r){return(r=t[e])&&Pt(r)?t[e]():ec(r)&&t.getAttribute&&t.getAttribute(e)||r},Le=function(t,e){return(t=t.split(",")).forEach(e)||t},Ct=function(t){return Math.round(t*1e5)/1e5||0},Et=function(t){return Math.round(t*1e7)/1e7||0},bi=function(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),r==="+"?t+i:r==="-"?t-i:r==="*"?t*i:t/i},_p=function(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r},qs=function(){var t=hn.length,e=hn.slice(0),r,i;for(nl={},hn.length=0,r=0;r<t;r++)i=e[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},lc=function(t){return!!(t._initted||t._startAt||t.add)},bf=function(t,e,r,i){hn.length&&!Jt&&qs(),t.render(e,r,!!(Jt&&e<0&&lc(t))),hn.length&&!Jt&&qs()},Rf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(hp).length<2?e:Vt(t)?t.trim():t},Af=function(t){return t},Ge=function(t,e){for(var r in e)r in t||(t[r]=e[r]);return t},gp=function(t){return function(e,r){for(var i in r)i in e||i==="duration"&&t||i==="ease"||(e[i]=r[i])}},Oi=function(t,e){for(var r in e)t[r]=e[r];return t},Jc=function n(t,e){for(var r in e)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(t[r]=kr(e[r])?n(t[r]||(t[r]={}),e[r]):e[r]);return t},Ws=function(t,e){var r={},i;for(i in t)i in e||(r[i]=t[i]);return r},_o=function(t){var e=t.parent||bt,r=t.keyframes?gp(he(t.keyframes)):Ge;if(Me(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t},vp=function(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0},Sf=function(t,e,r,i,o){var s=t[i],a;if(o)for(a=e[o];s&&s[o]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e},aa=function(t,e,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var o=e._prev,s=e._next;o?o._next=s:t[r]===e&&(t[r]=s),s?s._prev=o:t[i]===e&&(t[i]=o),e._next=e._prev=e.parent=null},gn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zn=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t},yp=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},il=function(t,e,r,i){return t._startAt&&(Jt?t._startAt.revert(xs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},xp=function n(t){return!t||t._ts&&n(t.parent)},tu=function(t){return t._repeat?Ci(t._tTime,t=t.duration()+t._rDelay)*t:0},Ci=function(t,e){var r=Math.floor(t=Et(t/e));return t&&r===t?r-1:r},Xs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},la=function(t){return t._end=Et(t._start+(t._tDur/Math.abs(t._ts||t._rts||vt)||0))},ca=function(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=Et(r._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),la(t),r._dirty||zn(r,t)),t},Mf=function(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(r=Xs(t.rawTime(),e),(!e._dur||Yo(0,e.totalDuration(),r)-e._tTime>vt)&&e.render(r,!0)),zn(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-vt}},Er=function(t,e,r,i){return e.parent&&gn(e),e._start=Et((Yr(r)?r:r||t!==bt?Ke(t,r,e):t._time)+e._delay),e._end=Et(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Sf(t,e,"_first","_last",t._sort?"_start":0),ol(e)||(t._recent=e),i||Mf(t,e),t._ts<0&&ca(t,t._tTime),t},Lf=function(t,e){return(Ye.ScrollTrigger||ic("scrollTrigger",e))&&Ye.ScrollTrigger.create(e,t)},Pf=function(t,e,r,i,o){if(uc(t,e,o),!t._initted)return 1;if(!r&&t._pt&&!Jt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&wf!==We.frame)return hn.push(t),t._lazy=[o,i],1},Tp=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},ol=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},wp=function(t,e,r,i){var o=t.ratio,s=e<0||!e&&(!t._start&&Tp(t)&&!(!t._initted&&ol(t))||(t._ts<0||t._dp._ts<0)&&!ol(t))?0:1,a=t._rDelay,l=0,c,u,p;if(a&&t._repeat&&(l=Yo(0,t._tDur,e),u=Ci(l,a),t._yoyo&&u&1&&(s=1-s),u!==Ci(t._tTime,a)&&(o=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==o||Jt||i||t._zTime===vt||!e&&t._zTime){if(!t._initted&&Pf(t,e,i,r,l))return;for(p=t._zTime,t._zTime=e||(r?vt:0),r||(r=e&&!p),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=l,c=t._pt;c;)c.r(s,c.d),c=c._next;e<0&&il(t,e,r,!0),t._onUpdate&&!r&&ze(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&ze(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(s&&gn(t,1),!r&&!Jt&&(ze(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ep=function(t,e,r){var i;if(r>e)for(i=t._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ni=function(t,e,r,i){var o=t._repeat,s=Et(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=s/t._dur),t._dur=s,t._tDur=o?o<0?1e10:Et(s*(o+1)+t._rDelay*o):s,a>0&&!i&&ca(t,t._tTime=t._tDur*a),t.parent&&la(t),r||zn(t.parent,t),t},eu=function(t){return t instanceof Ae?zn(t):Ni(t,t._dur)},bp={_start:0,endTime:Po,totalDuration:Po},Ke=function n(t,e,r){var i=t.labels,o=t._recent||bp,s=t.duration()>=Qe?o.endTime(!1):t._dur,a,l,c;return Vt(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?o:r).totalDuration()/100:1)):a<0?(e in i||(i[e]=s),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&r&&(l=l/100*(he(r)?r[0]:r).totalDuration()),a>1?n(t,e.substr(0,a-1),r)+l:s+l)):e==null?s:+e},go=function(t,e,r){var i=Yr(e[1]),o=(i?2:1)+(t<2?0:1),s=e[o],a,l;if(i&&(s.duration=e[1]),s.parent=r,t){for(a=s,l=r;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Me(l.vars.inherit)&&l.parent;s.immediateRender=Me(a.immediateRender),t<2?s.runBackwards=1:s.startAt=e[o-1]}return new qt(e[0],s,e[o+1])},bn=function(t,e){return t||t===0?e(t):e},Yo=function(t,e,r){return r<t?t:r>e?e:r},ce=function(t,e){return!Vt(t)||!(e=dp.exec(t))?"":e[1]},Rp=function(t,e,r){return bn(r,function(i){return Yo(t,e,i)})},sl=[].slice,kf=function(t,e){return t&&kr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&kr(t[0]))&&!t.nodeType&&t!==xr},Ap=function(t,e,r){return r===void 0&&(r=[]),t.forEach(function(i){var o;return Vt(i)&&!e||kf(i,1)?(o=r).push.apply(o,Je(i)):r.push(i)})||r},Je=function(t,e,r){return Tt&&!e&&Tt.selector?Tt.selector(t):Vt(t)&&!r&&(rl||!Ii())?sl.call((e||nc).querySelectorAll(t),0):he(t)?Ap(t,r):kf(t)?sl.call(t,0):t?[t]:[]},al=function(t){return t=Je(t)[0]||Lo("Invalid scope")||{},function(e){var r=t.current||t.nativeElement||t;return Je(e,r.querySelectorAll?r:r===t?Lo("Invalid scope")||nc.createElement("div"):t)}},Df=function(t){return t.sort(function(){return .5-Math.random()})},Of=function(t){if(Pt(t))return t;var e=kr(t)?t:{each:t},r=Bn(e.ease),i=e.from||0,o=parseFloat(e.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,p=i;return Vt(i)?u=p={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],p=i[1]),function(d,h,_){var m=(_||e).length,v=s[m],b,E,y,w,x,k,A,D,L;if(!v){if(L=e.grid==="auto"?0:(e.grid||[1,Qe])[1],!L){for(A=-Qe;A<(A=_[L++].getBoundingClientRect().left)&&L<m;);L<m&&L--}for(v=s[m]=[],b=l?Math.min(L,m)*u-.5:i%L,E=L===Qe?0:l?m*p/L-.5:i/L|0,A=0,D=Qe,k=0;k<m;k++)y=k%L-b,w=E-(k/L|0),v[k]=x=c?Math.abs(c==="y"?w:y):mf(y*y+w*w),x>A&&(A=x),x<D&&(D=x);i==="random"&&Df(v),v.max=A-D,v.min=D,v.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(L>m?m-1:c?c==="y"?m/L:L:Math.max(L,m/L))||0)*(i==="edges"?-1:1),v.b=m<0?o-m:o,v.u=ce(e.amount||e.each)||0,r=r&&m<0?qp(r):r}return m=(v[d]-v.min)/v.max||0,Et(v.b+(r?r(m):m)*v.v)+v.u}},ll=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(r){var i=Et(Math.round(parseFloat(r)/t)*t*e);return(i-i%1)/e+(Yr(r)?0:ce(r))}},Cf=function(t,e){var r=he(t),i,o;return!r&&kr(t)&&(i=r=t.radius||Qe,t.values?(t=Je(t.values),(o=!Yr(t[0]))&&(i*=i)):t=ll(t.increment)),bn(e,r?Pt(t)?function(s){return o=t(s),Math.abs(o-s)<=i?o:s}:function(s){for(var a=parseFloat(o?s.x:s),l=parseFloat(o?s.y:0),c=Qe,u=0,p=t.length,d,h;p--;)o?(d=t[p].x-a,h=t[p].y-l,d=d*d+h*h):d=Math.abs(t[p]-a),d<c&&(c=d,u=p);return u=!i||c<=i?t[u]:s,o||u===s||Yr(s)?u:u+ce(s)}:ll(t))},Nf=function(t,e,r,i){return bn(he(t)?!e:r===!0?!!(r=0):!i,function(){return he(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+r*.99))/r)*r*i)/i})},Sp=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(i){return e.reduce(function(o,s){return s(o)},i)}},Mp=function(t,e){return function(r){return t(parseFloat(r))+(e||ce(r))}},Lp=function(t,e,r){return Ff(t,e,0,1,r)},If=function(t,e,r){return bn(r,function(i){return t[~~e(i)]})},Pp=function n(t,e,r){var i=e-t;return he(t)?If(t,n(0,t.length),e):bn(r,function(o){return(i+(o-t)%i)%i+t})},kp=function n(t,e,r){var i=e-t,o=i*2;return he(t)?If(t,n(0,t.length-1),e):bn(r,function(s){return s=(o+(s-t)%o)%o||0,t+(s>i?o-s:s)})},ko=function(t){return t.replace(up,function(e){var r=e.indexOf("[")+1,i=e.substring(r||7,r?e.indexOf("]"):e.length-1).split(fp);return Nf(r?i:+i[0],r?0:+i[1],+i[2]||1e-5)})},Ff=function(t,e,r,i,o){var s=e-t,a=i-r;return bn(o,function(l){return r+((l-t)/s*a||0)})},Dp=function n(t,e,r,i){var o=isNaN(t+e)?0:function(h){return(1-h)*t+h*e};if(!o){var s=Vt(t),a={},l,c,u,p,d;if(r===!0&&(i=1)&&(r=null),s)t={p:t},e={p:e};else if(he(t)&&!he(e)){for(u=[],p=t.length,d=p-2,c=1;c<p;c++)u.push(n(t[c-1],t[c]));p--,o=function(_){_*=p;var m=Math.min(d,~~_);return u[m](_-m)},r=e}else i||(t=Oi(he(t)?[]:{},t));if(!u){for(l in e)cc.call(a,t,l,"get",e[l]);o=function(_){return dc(_,a)||(s?t.p:t)}}}return bn(r,o)},ru=function(t,e,r){var i=t.labels,o=Qe,s,a,l;for(s in i)a=i[s]-e,a<0==!!r&&a&&o>(a=Math.abs(a))&&(l=s,o=a);return l},ze=function(t,e,r){var i=t.vars,o=i[e],s=Tt,a=t._ctx,l,c,u;if(o)return l=i[e+"Params"],c=i.callbackScope||t,r&&hn.length&&qs(),a&&(Tt=a),u=l?o.apply(c,l):o.call(c),Tt=s,u},io=function(t){return gn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Jt),t.progress()<1&&ze(t,"onInterrupt"),t},Ti,Uf=[],qf=function(t){if(t)if(t=!t.name&&t.default||t,rc()||t.headless){var e=t.name,r=Pt(t),i=e&&!r&&t.init?function(){this._props=[]}:t,o={init:Po,render:dc,add:cc,kill:Kp,modifier:Vp,rawVars:0},s={targetTest:0,get:0,getSetter:hc,aliases:{},register:0};if(Ii(),t!==i){if(Ue[e])return;Ge(i,Ge(Ws(t,o),s)),Oi(i.prototype,Oi(o,Ws(t,s))),Ue[i.prop=e]=i,t.targetTest&&(Ts.push(i),oc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Tf(e,i),t.register&&t.register(De,i,Pe)}else Uf.push(t)},gt=255,oo={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},Ea=function(t,e,r){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(r-e)*t*6:t<.5?r:t*3<2?e+(r-e)*(2/3-t)*6:e)*gt+.5|0},Wf=function(t,e,r){var i=t?Yr(t)?[t>>16,t>>8&gt,t&gt]:0:oo.black,o,s,a,l,c,u,p,d,h,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),oo[t])i=oo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(o=t.charAt(1),s=t.charAt(2),a=t.charAt(3),t="#"+o+o+s+s+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&gt,i&gt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&gt,t&gt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Zc),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,o=u*2-s,i.length>3&&(i[3]*=1),i[0]=Ea(l+1/3,o,s),i[1]=Ea(l,o,s),i[2]=Ea(l-1/3,o,s);else if(~t.indexOf("="))return i=t.match(gf),r&&i.length<4&&(i[3]=1),i}else i=t.match(Zc)||oo.transparent;i=i.map(Number)}return e&&!_&&(o=i[0]/gt,s=i[1]/gt,a=i[2]/gt,p=Math.max(o,s,a),d=Math.min(o,s,a),u=(p+d)/2,p===d?l=c=0:(h=p-d,c=u>.5?h/(2-p-d):h/(p+d),l=p===o?(s-a)/h+(s<a?6:0):p===s?(a-o)/h+2:(o-s)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),r&&i.length<4&&(i[3]=1),i},Xf=function(t){var e=[],r=[],i=-1;return t.split(dn).forEach(function(o){var s=o.match(xi)||[];e.push.apply(e,s),r.push(i+=s.length+1)}),e.c=r,e},nu=function(t,e,r){var i="",o=(t+i).match(dn),s=e?"hsla(":"rgba(",a=0,l,c,u,p;if(!o)return t;if(o=o.map(function(d){return(d=Wf(d,e,1))&&s+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),r&&(u=Xf(t),l=r.c,l.join(i)!==u.c.join(i)))for(c=t.replace(dn,"1").split(xi),p=c.length-1;a<p;a++)i+=c[a]+(~l.indexOf(a)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:r).shift());if(!c)for(c=t.split(dn),p=c.length-1;a<p;a++)i+=c[a]+o[a];return i+c[p]},dn=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in oo)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),Op=/hsl[a]?\(/,Hf=function(t){var e=t.join(" "),r;if(dn.lastIndex=0,dn.test(e))return r=Op.test(e),t[1]=nu(t[1],r),t[0]=nu(t[0],r,Xf(t[1])),!0},Do,We=(function(){var n=Date.now,t=500,e=33,r=n(),i=r,o=1e3/240,s=o,a=[],l,c,u,p,d,h,_=function m(v){var b=n()-i,E=v===!0,y,w,x,k;if((b>t||b<0)&&(r+=b-e),i+=b,x=i-r,y=x-s,(y>0||E)&&(k=++p.frame,d=x-p.time*1e3,p.time=x=x/1e3,s+=y+(y>=o?4:o-y),w=1),E||(l=c(m)),w)for(h=0;h<a.length;h++)a[h](x,d,k,v)};return p={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(v){return d/(1e3/(v||60))},wake:function(){yf&&(!rl&&rc()&&(xr=rl=window,nc=xr.document||{},Ye.gsap=De,(xr.gsapVersions||(xr.gsapVersions=[])).push(De.version),xf(Us||xr.GreenSockGlobals||!xr.gsap&&xr||{}),Uf.forEach(qf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&p.sleep(),c=u||function(v){return setTimeout(v,s-p.time*1e3+1|0)},Do=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Do=0,c=Po},lagSmoothing:function(v,b){t=v||1/0,e=Math.min(b||33,t)},fps:function(v){o=1e3/(v||240),s=p.time*1e3+o},add:function(v,b,E){var y=b?function(w,x,k,A){v(w,x,k,A),p.remove(y)}:v;return p.remove(v),a[E?"unshift":"push"](y),Ii(),y},remove:function(v,b){~(b=a.indexOf(v))&&a.splice(b,1)&&h>=b&&h--},_listeners:a},p})(),Ii=function(){return!Do&&We.wake()},at={},Cp=/^[\d.\-M][\d.\-,\s]/,Np=/["']/g,Ip=function(t){for(var e={},r=t.substr(1,t.length-3).split(":"),i=r[0],o=1,s=r.length,a,l,c;o<s;o++)l=r[o],a=o!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Np,"").trim():+c,i=l.substr(a+1).trim();return e},Fp=function(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)},Up=function(t){var e=(t+"").split("("),r=at[e[0]];return r&&e.length>1&&r.config?r.config.apply(null,~t.indexOf("{")?[Ip(e[1])]:Fp(t).split(",").map(Rf)):at._CE&&Cp.test(t)?at._CE("",t):r},qp=function(t){return function(e){return 1-t(1-e)}},Bn=function(t,e){return t&&(Pt(t)?t:at[t]||Up(t))||e},ei=function(t,e,r,i){r===void 0&&(r=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var o={easeIn:e,easeOut:r,easeInOut:i},s;return Le(t,function(a){at[a]=Ye[a]=o,at[s=a.toLowerCase()]=r;for(var l in o)at[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=o[l]}),o},zf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ba=function n(t,e,r){var i=e>=1?e:1,o=(r||(t?.3:.45))/(e<1?e:1),s=o/el*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*cp((u-s)*o)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:zf(a);return o=el/o,l.config=function(c,u){return n(t,c,u)},l},Ra=function n(t,e){e===void 0&&(e=1.70158);var r=function(s){return s?--s*s*((e+1)*s+e)+1:0},i=t==="out"?r:t==="in"?function(o){return 1-r(1-o)}:zf(r);return i.config=function(o){return n(t,o)},i};Le("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;ei(n+",Power"+(e-1),t?function(r){return Math.pow(r,e)}:function(r){return r},function(r){return 1-Math.pow(1-r,e)},function(r){return r<.5?Math.pow(r*2,e)/2:1-Math.pow((1-r)*2,e)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;ei("Elastic",ba("in"),ba("out"),ba());(function(n,t){var e=1/t,r=2*e,i=2.5*e,o=function(a){return a<e?n*a*a:a<r?n*Math.pow(a-1.5/t,2)+.75:a<i?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};ei("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);ei("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ei("Circ",function(n){return-(mf(1-n*n)-1)});ei("Sine",function(n){return n===1?1:-lp(n*sp)+1});ei("Back",Ra("in"),Ra("out"),Ra());at.SteppedEase=at.steps=Ye.SteppedEase={config:function(t,e){t===void 0&&(t=1);var r=1/t,i=t+(e?0:1),o=e?1:0,s=1-vt;return function(a){return((i*Yo(0,s,a)|0)+o)*r}}};Mo.ease=at["quad.out"];Le("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return sc+=n+","+n+"Params,"});var Bf=function(t,e){this.id=ap++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ef,this.set=e?e.getSetter:hc},Oo=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ni(this,+e.duration,1,1),this.data=e.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),Do||We.wake()}var t=n.prototype;return t.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},t.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},t.totalDuration=function(r){return arguments.length?(this._dirty=0,Ni(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(r,i){if(Ii(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(ca(this,r),!o._dp||o.parent||Mf(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Er(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===vt||!this._initted&&this._dur&&r||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),bf(this,r,i)),this},t.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+tu(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},t.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+tu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(r,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*o,i):this._repeat?Ci(this._tTime,o)+1:1},t.timeScale=function(r,i){if(!arguments.length)return this._rts===-vt?0:this._rts;if(this._rts===r)return this;var o=this.parent&&this._ts?Xs(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-vt?0:this._rts,this.totalTime(Yo(-Math.abs(this._delay),this.totalDuration(),o),i!==!1),la(this),yp(this)},t.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ii(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vt&&(this._tTime-=vt)))),this):this._ps},t.startTime=function(r){if(arguments.length){this._start=Et(r);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Er(i,this,this._start-this._delay),this}return this._start},t.endTime=function(r){return this._start+(Me(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xs(i.rawTime(r),this):this._tTime:this._tTime},t.revert=function(r){r===void 0&&(r=mp);var i=Jt;return Jt=r,lc(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Jt=i,this},t.globalTime=function(r){for(var i=this,o=arguments.length?r:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):o},t.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,eu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,eu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},t.seek=function(r,i){return this.totalTime(Ke(this,r),Me(i))},t.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,Me(i)),this._dur||(this._zTime=-vt),this},t.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},t.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-vt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-vt,this},t.isActive=function(){var r=this.parent||this._dp,i=this._start,o;return!!(!r||this._ts&&this._initted&&r.isActive()&&(o=r.rawTime(!0))>=i&&o<this.endTime(!0)-vt)},t.eventCallback=function(r,i,o){var s=this.vars;return arguments.length>1?(i?(s[r]=i,o&&(s[r+"Params"]=o),r==="onUpdate"&&(this._onUpdate=i)):delete s[r],this):s[r]},t.then=function(r){var i=this,o=i._prom;return new Promise(function(s){var a=Pt(r)?r:Af,l=function(){var u=i.then;i.then=null,o&&o(),Pt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),s(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){io(this)},n})();Ge(Oo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vt,_prom:0,_ps:!1,_rts:1});var Ae=(function(n){pf(t,n);function t(r,i){var o;return r===void 0&&(r={}),o=n.call(this,r)||this,o.labels={},o.smoothChildTiming=!!r.smoothChildTiming,o.autoRemoveChildren=!!r.autoRemoveChildren,o._sort=Me(r.sortChildren),bt&&Er(r.parent||bt,Wr(o),i),r.reversed&&o.reverse(),r.paused&&o.paused(!0),r.scrollTrigger&&Lf(Wr(o),r.scrollTrigger),o}var e=t.prototype;return e.to=function(i,o,s){return go(0,arguments,this),this},e.from=function(i,o,s){return go(1,arguments,this),this},e.fromTo=function(i,o,s,a){return go(2,arguments,this),this},e.set=function(i,o,s){return o.duration=0,o.parent=this,_o(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new qt(i,o,Ke(this,s),1),this},e.call=function(i,o,s){return Er(this,qt.delayedCall(0,i,o),s)},e.staggerTo=function(i,o,s,a,l,c,u){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new qt(i,s,Ke(this,l)),this},e.staggerFrom=function(i,o,s,a,l,c,u){return s.runBackwards=1,_o(s).immediateRender=Me(s.immediateRender),this.staggerTo(i,o,s,a,l,c,u)},e.staggerFromTo=function(i,o,s,a,l,c,u,p){return a.startAt=s,_o(a).immediateRender=Me(a.immediateRender),this.staggerTo(i,o,a,l,c,u,p)},e.render=function(i,o,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Et(i),p=this._zTime<0!=i<0&&(this._initted||!c),d,h,_,m,v,b,E,y,w,x,k,A;if(this!==bt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||p){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,w=this._start,y=this._ts,b=!y,p&&(c||(a=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(k=this._yoyo,v=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(v*100+i,o,s);if(d=Et(u%v),u===l?(m=this._repeat,d=c):(x=Et(u/v),m=~~x,m&&m===x&&(d=c,m--),d>c&&(d=c)),x=Ci(this._tTime,v),!a&&this._tTime&&x!==m&&this._tTime-x*v-this._dur<=0&&(x=m),k&&m&1&&(d=c-d,A=1),m!==x&&!this._lock){var D=k&&x&1,L=D===(k&&m&1);if(m<x&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Et(m*v)),o,!c)._lock=0,this._tTime=u,!o&&this.parent&&ze(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,x=m),a&&a!==this._time||b!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!b)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Ep(this,Et(a),Et(d)),E&&(u-=d-(d=E._start))),this._tTime=u,this._time=d,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!o&&!x&&(ze(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||d>=h._start)&&h._ts&&E!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,o,s),d!==this._time||!this._ts&&!b){E=0,_&&(u+=this._zTime=-vt);break}}h=_}else{h=this._last;for(var P=i<0?i:d;h;){if(_=h._prev,(h._act||P<=h._end)&&h._ts&&E!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(P-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(P-h._start)*h._ts,o,s||Jt&&lc(h)),d!==this._time||!this._ts&&!b){E=0,_&&(u+=this._zTime=P?-vt:vt);break}}h=_}}if(E&&!o&&(this.pause(),E.render(d>=a?0:-vt)._zTime=d>=a?1:-1,this._ts))return this._start=w,la(this),this.render(i,o,s);this._onUpdate&&!o&&ze(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(w===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&gn(this,1),!o&&!(i<0&&!a)&&(u||a||!l)&&(ze(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,o){var s=this;if(Yr(o)||(o=Ke(this,o,i)),!(i instanceof Oo)){if(he(i))return i.forEach(function(a){return s.add(a,o)}),this;if(Vt(i))return this.addLabel(i,o);if(Pt(i))i=qt.delayedCall(0,i);else return this}return this!==i?Er(this,i,o):this},e.getChildren=function(i,o,s,a){i===void 0&&(i=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-Qe);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qt?o&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,o,s)))),c=c._next;return l},e.getById=function(i){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===i)return o[s]},e.remove=function(i){return Vt(i)?this.removeLabel(i):Pt(i)?this.killTweensOf(i):(i.parent===this&&aa(this,i),i===this._recent&&(this._recent=this._last),zn(this))},e.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(We.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),n.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},e.addLabel=function(i,o){return this.labels[i]=Ke(this,o),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,o,s){var a=qt.delayedCall(0,o||Po,s);return a.data="isPause",this._hasPause=1,Er(this,a,Ke(this,i))},e.removePause=function(i){var o=this._first;for(i=Ke(this,i);o;)o._start===i&&o.data==="isPause"&&gn(o),o=o._next},e.killTweensOf=function(i,o,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)an!==a[l]&&a[l].kill(i,o);return this},e.getTweensOf=function(i,o){for(var s=[],a=Je(i),l=this._first,c=Yr(o),u;l;)l instanceof qt?_p(l._targets,a)&&(c?(!an||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&s.push(l):(u=l.getTweensOf(a,o)).length&&s.push.apply(s,u),l=l._next;return s},e.tweenTo=function(i,o){o=o||{};var s=this,a=Ke(s,i),l=o,c=l.startAt,u=l.onStart,p=l.onStartParams,d=l.immediateRender,h,_=qt.to(s,Ge({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||vt,onStart:function(){if(s.pause(),!h){var v=o.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==v&&Ni(_,v,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,p||[])}},o));return d?_.render(0):_},e.tweenFromTo=function(i,o,s){return this.tweenTo(o,Ge({startAt:{time:Ke(this,i)}},s))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),ru(this,Ke(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),ru(this,Ke(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+vt)},e.shiftChildren=function(i,o,s){s===void 0&&(s=0);var a=this._first,l=this.labels,c;for(i=Et(i);a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(o)for(c in l)l[c]>=s&&(l[c]+=i);return zn(this)},e.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return n.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zn(this)},e.totalDuration=function(i){var o=0,s=this,a=s._last,l=Qe,c,u,p;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(p=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Er(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(o-=u,(!p&&!s._dp||p&&p.smoothChildTiming)&&(s._start+=Et(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>o&&a._ts&&(o=a._end),a=c;Ni(s,s===bt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(i){if(bt._ts&&(bf(bt,Xs(i,bt)),wf=We.frame),We.frame>=Qc){Qc+=$e.autoSleep||120;var o=bt._first;if((!o||!o._ts)&&$e.autoSleep&&We._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||We.sleep()}}},t})(Oo);Ge(Ae.prototype,{_lock:0,_hasPause:0,_forcing:0});var Wp=function(t,e,r,i,o,s,a){var l=new Pe(this._pt,t,e,0,1,jf,null,o),c=0,u=0,p,d,h,_,m,v,b,E;for(l.b=r,l.e=i,r+="",i+="",(b=~i.indexOf("random("))&&(i=ko(i)),s&&(E=[r,i],s(E,t,e),r=E[0],i=E[1]),d=r.match(Ta)||[];p=Ta.exec(i);)_=p[0],m=i.substring(c,p.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),_!==d[u++]&&(v=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:v,c:_.charAt(1)==="="?bi(v,_)-v:parseFloat(_)-v,m:h&&h<4?Math.round:0},c=Ta.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(vf.test(i)||b)&&(l.e=0),this._pt=l,l},cc=function(t,e,r,i,o,s,a,l,c,u){Pt(i)&&(i=i(o||0,t,s));var p=t[e],d=r!=="get"?r:Pt(p)?c?t[e.indexOf("set")||!Pt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():p,h=Pt(p)?c?$p:Vf:fc,_;if(Vt(i)&&(~i.indexOf("random(")&&(i=ko(i)),i.charAt(1)==="="&&(_=bi(d,i)+(ce(d)||0),(_||_===0)&&(i=_))),!u||d!==i||cl)return!isNaN(d*i)&&i!==""?(_=new Pe(this._pt,t,e,+d||0,i-(d||0),typeof p=="boolean"?Gp:Kf,0,h),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!p&&!(e in t)&&ic(e,i),Wp.call(this,t,e,d,i,h,l||$e.stringFilter,c))},Xp=function(t,e,r,i,o){if(Pt(t)&&(t=vo(t,o,e,r,i)),!kr(t)||t.style&&t.nodeType||he(t)||_f(t))return Vt(t)?vo(t,o,e,r,i):t;var s={},a;for(a in t)s[a]=vo(t[a],o,e,r,i);return s},$f=function(t,e,r,i,o,s){var a,l,c,u;if(Ue[t]&&(a=new Ue[t]).init(o,a.rawVars?e[t]:Xp(e[t],i,o,s,r),r,i,s)!==!1&&(r._pt=l=new Pe(r._pt,o,t,0,1,a.render,a,0,a.priority),r!==Ti))for(c=r._ptLookup[r._targets.indexOf(o)],u=a._props.length;u--;)c[a._props[u]]=l;return a},an,cl,uc=function n(t,e,r){var i=t.vars,o=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,p=i.yoyoEase,d=i.keyframes,h=i.autoRevert,_=t._dur,m=t._startAt,v=t._targets,b=t.parent,E=b&&b.data==="nested"?b.vars.targets:v,y=t._overwrite==="auto"&&!tc,w=t.timeline,x=i.easeReverse||p,k,A,D,L,P,W,O,z,V,lt,ot,X,ct;if(w&&(!d||!o)&&(o="none"),t._ease=Bn(o,Mo.ease),t._rEase=x&&(Bn(x)||t._ease),t._from=!w&&!!i.runBackwards,t._from&&(t.ratio=1),!w||d&&!i.stagger){if(z=v[0]?Hn(v[0]).harness:0,X=z&&i[z.prop],k=Ws(i,oc),m&&(m._zTime<0&&m.progress(1),e<0&&u&&a&&!h?m.render(-1,!0):m.revert(u&&_?xs:pp),m._lazy=0),s){if(gn(t._startAt=qt.set(v,Ge({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!m&&Me(l),startAt:null,delay:0,onUpdate:c&&function(){return ze(t,"onUpdate")},stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Jt||!a&&!h)&&t._startAt.revert(xs),a&&_&&e<=0&&r<=0){e&&(t._zTime=e);return}}else if(u&&_&&!m){if(e&&(a=!1),D=Ge({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Me(l),immediateRender:a,stagger:0,parent:b},k),X&&(D[z.prop]=X),gn(t._startAt=qt.set(v,D)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Jt?t._startAt.revert(xs):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,vt,vt);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Me(l)||l&&!_,A=0;A<v.length;A++){if(P=v[A],O=P._gsap||ac(v)[A]._gsap,t._ptLookup[A]=lt={},nl[O.id]&&hn.length&&qs(),ot=E===v?A:E.indexOf(P),z&&(V=new z).init(P,X||k,t,ot,E)!==!1&&(t._pt=L=new Pe(t._pt,P,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(mt){lt[mt]=L}),V.priority&&(W=1)),!z||X)for(D in k)Ue[D]&&(V=$f(D,k,t,ot,P,E))?V.priority&&(W=1):lt[D]=L=cc.call(t,P,D,"get",k[D],ot,E,0,i.stringFilter);t._op&&t._op[A]&&t.kill(P,t._op[A]),y&&t._pt&&(an=t,bt.killTweensOf(P,lt,t.globalTime(e)),ct=!t.parent,an=0),t._pt&&l&&(nl[O.id]=1)}W&&Zf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!ct,d&&e<=0&&w.render(Qe,!0,!0)},Hp=function(t,e,r,i,o,s,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,p,d,h;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,h=t._targets.length;h--;){if(u=d[h][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return cl=1,t.vars[e]="+=0",uc(t,a),cl=0,l?Lo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)p=c[h],u=p._pt||p,u.s=(i||i===0)&&!o?i:u.s+(i||0)+s*u.c,u.c=r-u.s,p.e&&(p.e=Ct(r)+ce(p.e)),p.b&&(p.b=u.s+ce(p.b))},zp=function(t,e){var r=t[0]?Hn(t[0]).harness:0,i=r&&r.aliases,o,s,a,l;if(!i)return e;o=Oi({},e);for(s in i)if(s in o)for(l=i[s].split(","),a=l.length;a--;)o[l[a]]=o[s];return o},Bp=function(t,e,r,i){var o=e.ease||i||"power1.inOut",s,a;if(he(e))a=r[t]||(r[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:o})});else for(s in e)a=r[s]||(r[s]=[]),s==="ease"||a.push({t:parseFloat(t),v:e[s],e:o})},vo=function(t,e,r,i,o){return Pt(t)?t.call(e,r,i,o):Vt(t)&&~t.indexOf("random(")?ko(t):t},Yf=sc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Gf={};Le(Yf+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Gf[n]=1});var qt=(function(n){pf(t,n);function t(r,i,o,s){var a;typeof i=="number"&&(o.duration=i,i=o,o=null),a=n.call(this,s?i:_o(i))||this;var l=a.vars,c=l.duration,u=l.delay,p=l.immediateRender,d=l.stagger,h=l.overwrite,_=l.keyframes,m=l.defaults,v=l.scrollTrigger,b=i.parent||bt,E=(he(r)||_f(r)?Yr(r[0]):"length"in i)?[r]:Je(r),y,w,x,k,A,D,L,P;if(a._targets=E.length?ac(E):Lo("GSAP target "+r+" not found. https://gsap.com",!$e.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,_||d||ts(c)||ts(u)){i=a.vars;var W=i.easeReverse||i.yoyoEase;if(y=a.timeline=new Ae({data:"nested",defaults:m||{},targets:b&&b.data==="nested"?b.vars.targets:E}),y.kill(),y.parent=y._dp=Wr(a),y._start=0,d||ts(c)||ts(u)){if(k=E.length,L=d&&Of(d),kr(d))for(A in d)~Yf.indexOf(A)&&(P||(P={}),P[A]=d[A]);for(w=0;w<k;w++)x=Ws(i,Gf),x.stagger=0,W&&(x.easeReverse=W),P&&Oi(x,P),D=E[w],x.duration=+vo(c,Wr(a),w,D,E),x.delay=(+vo(u,Wr(a),w,D,E)||0)-a._delay,!d&&k===1&&x.delay&&(a._delay=u=x.delay,a._start+=u,x.delay=0),y.to(D,x,L?L(w,D,E):0),y._ease=at.none;y.duration()?c=u=0:a.timeline=0}else if(_){_o(Ge(y.vars.defaults,{ease:"none"})),y._ease=Bn(_.ease||i.ease||"none");var O=0,z,V,lt;if(he(_))_.forEach(function(ot){return y.to(E,ot,">")}),y.duration();else{x={};for(A in _)A==="ease"||A==="easeEach"||Bp(A,_[A],x,_.easeEach);for(A in x)for(z=x[A].sort(function(ot,X){return ot.t-X.t}),O=0,w=0;w<z.length;w++)V=z[w],lt={ease:V.e,duration:(V.t-(w?z[w-1].t:0))/100*c},lt[A]=V.v,y.to(E,lt,O),O+=lt.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return h===!0&&!tc&&(an=Wr(a),bt.killTweensOf(E),an=0),Er(b,Wr(a),o),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(p||!c&&!_&&a._start===Et(b._time)&&Me(p)&&xp(Wr(a))&&b.data!=="nested")&&(a._tTime=-vt,a.render(Math.max(0,-u)||0)),v&&Lf(Wr(a),v),a}var e=t.prototype;return e.render=function(i,o,s){var a=this._time,l=this._tDur,c=this._dur,u=i<0,p=i>l-vt&&!u?l:i<vt?0:i,d,h,_,m,v,b,E,y;if(!c)wp(this,i,o,s);else if(p!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=p,y=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,o,s);if(d=Et(p%m),p===l?(_=this._repeat,d=c):(v=Et(p/m),_=~~v,_&&_===v?(d=c,_--):d>c&&(d=c)),b=this._yoyo&&_&1,b&&(d=c-d),v=Ci(this._tTime,m),d===a&&!s&&this._initted&&_===v)return this._tTime=p,this;_!==v&&this.vars.repeatRefresh&&!b&&!this._lock&&d!==m&&this._initted&&(this._lock=s=1,this.render(Et(m*_),!0).invalidate()._lock=0)}if(!this._initted){if(Pf(this,u?i:d,s,o,p))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&_!==v))return this;if(c!==this._dur)return this.render(i,o,s)}if(this._rEase){var w=d<a;if(w!==this._inv){var x=w?a:c-a;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=x?(w?-1:1)/x:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(d/c);if(this._from&&(this.ratio=E=1-E),this._tTime=p,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&p&&!o&&!v&&(ze(this,"onStart"),this._tTime!==p))return this;for(h=this._pt;h;)h.r(E,h.d),h=h._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),o,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(u&&il(this,i,o,s),ze(this,"onUpdate")),this._repeat&&_!==v&&this.vars.onRepeat&&!o&&this.parent&&ze(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(u&&!this._onUpdate&&il(this,i,!0,!0),(i||!c)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&gn(this,1),!o&&!(u&&!a)&&(p||a||b)&&(ze(this,p===l?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),n.prototype.invalidate.call(this,i)},e.resetTo=function(i,o,s,a,l){Do||We.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||uc(this,c),u=this._ease(c/this._dur),Hp(this,i,o,s,a,u,c,l)?this.resetTo(i,o,s,a,1):(ca(this,0),this.parent||Sf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?io(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Jt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,an&&an.vars.overwrite!==!0)._first||io(this),this.parent&&s!==this.timeline.totalDuration()&&Ni(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?Je(i):a,c=this._ptLookup,u=this._pt,p,d,h,_,m,v,b;if((!o||o==="all")&&vp(a,l))return o==="all"&&(this._pt=0),io(this);for(p=this._op=this._op||[],o!=="all"&&(Vt(o)&&(m={},Le(o,function(E){return m[E]=1}),o=m),o=zp(a,o)),b=a.length;b--;)if(~l.indexOf(a[b])){d=c[b],o==="all"?(p[b]=o,_=d,h={}):(h=p[b]=p[b]||{},_=o);for(m in _)v=d&&d[m],v&&((!("kill"in v.d)||v.d.kill(m)===!0)&&aa(this,v,"_pt"),delete d[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&u&&io(this),this},t.to=function(i,o){return new t(i,o,arguments[2])},t.from=function(i,o){return go(1,arguments)},t.delayedCall=function(i,o,s,a){return new t(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},t.fromTo=function(i,o,s){return go(2,arguments)},t.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new t(i,o)},t.killTweensOf=function(i,o,s){return bt.killTweensOf(i,o,s)},t})(Oo);Ge(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Le("staggerTo,staggerFrom,staggerFromTo",function(n){qt[n]=function(){var t=new Ae,e=sl.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var fc=function(t,e,r){return t[e]=r},Vf=function(t,e,r){return t[e](r)},$p=function(t,e,r,i){return t[e](i.fp,r)},Yp=function(t,e,r){return t.setAttribute(e,r)},hc=function(t,e){return Pt(t[e])?Vf:ec(t[e])&&t.setAttribute?Yp:fc},Kf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Gp=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},jf=function(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round((r.s+r.c*t)*1e4)/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},dc=function(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},Vp=function(t,e,r,i){for(var o=this._pt,s;o;)s=o._next,o.p===i&&o.modifier(t,e,r),o=s},Kp=function(t){for(var e=this._pt,r,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?aa(this,e,"_pt"):e.dep||(r=1),e=i;return!r},jp=function(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)},Zf=function(t){for(var e=t._pt,r,i,o,s;e;){for(r=e._next,i=o;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:s)?e._prev._next=e:o=e,(e._next=i)?i._prev=e:s=e,e=r}t._pt=o},Pe=(function(){function n(e,r,i,o,s,a,l,c,u){this.t=r,this.s=o,this.c=s,this.p=i,this.r=a||Kf,this.d=l||this,this.set=c||fc,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(r,i,o){this.mSet=this.mSet||this.set,this.set=jp,this.m=r,this.mt=o,this.tween=i},n})();Le(sc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return oc[n]=1});Ye.TweenMax=Ye.TweenLite=qt;Ye.TimelineLite=Ye.TimelineMax=Ae;bt=new Ae({sortChildren:!1,defaults:Mo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$e.stringFilter=Hf;var $n=[],ws={},Zp=[],iu=0,Qp=0,Aa=function(t){return(ws[t]||Zp).map(function(e){return e()})},ul=function(){var t=Date.now(),e=[];t-iu>2&&(Aa("matchMediaInit"),$n.forEach(function(r){var i=r.queries,o=r.conditions,s,a,l,c;for(a in i)s=xr.matchMedia(i[a]).matches,s&&(l=1),s!==o[a]&&(o[a]=s,c=1);c&&(r.revert(),l&&e.push(r))}),Aa("matchMediaRevert"),e.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),iu=t,Aa("matchMedia"))},Qf=(function(){function n(e,r){this.selector=r&&al(r),this.data=[],this._r=[],this.isReverted=!1,this.id=Qp++,e&&this.add(e)}var t=n.prototype;return t.add=function(r,i,o){Pt(r)&&(o=i,i=r,r=Pt);var s=this,a=function(){var c=Tt,u=s.selector,p;return c&&c!==s&&c.data.push(s),o&&(s.selector=al(o)),Tt=s,p=i.apply(s,arguments),Pt(p)&&s._r.push(p),Tt=c,s.selector=u,s.isReverted=!1,p};return s.last=a,r===Pt?a(s,function(l){return s.add(null,l)}):r?s[r]=a:a},t.ignore=function(r){var i=Tt;Tt=null,r(this),Tt=i},t.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof n?r.push.apply(r,i.getTweens()):i instanceof qt&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(r,i){var o=this;if(r?(function(){for(var a=o.getTweens(),l=o.data.length,c;l--;)c=o.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,p){return p.g-u.g||-1/0}).forEach(function(u){return u.t.revert(r)}),l=o.data.length;l--;)c=o.data[l],c instanceof Ae?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(r);o._r.forEach(function(u){return u(r,o)}),o.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var s=$n.length;s--;)$n[s].id===this.id&&$n.splice(s,1)},t.revert=function(r){this.kill(r||{})},n})(),Jp=(function(){function n(e){this.contexts=[],this.scope=e,Tt&&Tt.data.push(this)}var t=n.prototype;return t.add=function(r,i,o){kr(r)||(r={matches:r});var s=new Qf(0,o||this.scope),a=s.conditions={},l,c,u;Tt&&!s.selector&&(s.selector=Tt.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=r;for(c in r)c==="all"?u=1:(l=xr.matchMedia(r[c]),l&&($n.indexOf(s)<0&&$n.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ul):l.addEventListener("change",ul)));return u&&i(s,function(p){return s.add(null,p)}),this},t.revert=function(r){this.kill(r||{})},t.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},n})(),Hs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(i){return qf(i)})},timeline:function(t){return new Ae(t)},getTweensOf:function(t,e){return bt.getTweensOf(t,e)},getProperty:function(t,e,r,i){Vt(t)&&(t=Je(t)[0]);var o=Hn(t||{}).get,s=r?Af:Rf;return r==="native"&&(r=""),t&&(e?s((Ue[e]&&Ue[e].get||o)(t,e,r,i)):function(a,l,c){return s((Ue[a]&&Ue[a].get||o)(t,a,l,c))})},quickSetter:function(t,e,r){if(t=Je(t),t.length>1){var i=t.map(function(u){return De.quickSetter(u,e,r)}),o=i.length;return function(u){for(var p=o;p--;)i[p](u)}}t=t[0]||{};var s=Ue[e],a=Hn(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=s?function(u){var p=new s;Ti._pt=0,p.init(t,r?u+r:u,Ti,0,[t]),p.render(1,p),Ti._pt&&dc(1,Ti)}:a.set(t,l);return s?c:function(u){return c(t,l,r?u+r:u,a,1)}},quickTo:function(t,e,r){var i,o=De.to(t,Ge((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),r||{})),s=function(l,c,u){return o.resetTo(e,l,c,u)};return s.tween=o,s},isTweening:function(t){return bt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Bn(t.ease,Mo.ease)),Jc(Mo,t||{})},config:function(t){return Jc($e,t||{})},registerEffect:function(t){var e=t.name,r=t.effect,i=t.plugins,o=t.defaults,s=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ue[a]&&!Ye[a]&&Lo(e+" effect requires "+a+" plugin.")}),wa[e]=function(a,l,c){return r(Je(a),Ge(l||{},o),c)},s&&(Ae.prototype[e]=function(a,l,c){return this.add(wa[e](a,kr(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){at[t]=Bn(e)},parseEase:function(t,e){return arguments.length?Bn(t,e):at},getById:function(t){return bt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var r=new Ae(t),i,o;for(r.smoothChildTiming=Me(t.smoothChildTiming),bt.remove(r),r._dp=0,r._time=r._tTime=bt._time,i=bt._first;i;)o=i._next,(e||!(!i._dur&&i instanceof qt&&i.vars.onComplete===i._targets[0]))&&Er(r,i,i._start-i._delay),i=o;return Er(bt,r,0),r},context:function(t,e){return t?new Qf(t,e):Tt},matchMedia:function(t){return new Jp(t)},matchMediaRefresh:function(){return $n.forEach(function(t){var e=t.conditions,r,i;for(i in e)e[i]&&(e[i]=!1,r=1);r&&t.revert()})||ul()},addEventListener:function(t,e){var r=ws[t]||(ws[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function(t,e){var r=ws[t],i=r&&r.indexOf(e);i>=0&&r.splice(i,1)},utils:{wrap:Pp,wrapYoyo:kp,distribute:Of,random:Nf,snap:Cf,normalize:Lp,getUnit:ce,clamp:Rp,splitColor:Wf,toArray:Je,selector:al,mapRange:Ff,pipe:Sp,unitize:Mp,interpolate:Dp,shuffle:Df},install:xf,effects:wa,ticker:We,updateRoot:Ae.updateRoot,plugins:Ue,globalTimeline:bt,core:{PropTween:Pe,globals:Tf,Tween:qt,Timeline:Ae,Animation:Oo,getCache:Hn,_removeLinkedListItem:aa,reverting:function(){return Jt},context:function(t){return t&&Tt&&(Tt.data.push(t),t._ctx=Tt),Tt},suppressOverwrites:function(t){return tc=t}}};Le("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Hs[n]=qt[n]});We.add(Ae.updateRoot);Ti=Hs.to({},{duration:0});var t0=function(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r},e0=function(t,e){var r=t._targets,i,o,s;for(i in e)for(o=r.length;o--;)s=t._ptLookup[o][i],s&&(s=s.d)&&(s._pt&&(s=t0(s,i)),s&&s.modifier&&s.modifier(e[i],t,r[o],i))},Sa=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,o,s){s._onInit=function(a){var l,c;if(Vt(o)&&(l={},Le(o,function(u){return l[u]=1}),o=l),e){l={};for(c in o)l[c]=e(o[c]);o=l}e0(a,o)}}}},De=Hs.registerPlugin({name:"attr",init:function(t,e,r,i,o){var s,a,l;this.tween=r;for(s in e)l=t.getAttribute(s)||"",a=this.add(t,"setAttribute",(l||0)+"",e[s],i,o,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(t,e){for(var r=e._pt;r;)Jt?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",headless:1,init:function(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Sa("roundProps",ll),Sa("modifiers"),Sa("snap",Cf))||Hs;qt.version=Ae.version=De.version="3.15.0";yf=1;rc()&&Ii();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ou,ln,Ri,pc,qn,su,mc,r0=function(){return typeof window<"u"},Gr={},Nn=180/Math.PI,Ai=Math.PI/180,ci=Math.atan2,au=1e8,_c=/([A-Z])/g,n0=/(left|right|width|margin|padding|x)/i,i0=/[\s,\(]\S/,Rr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},o0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},s0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},a0=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},l0=function(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)},Jf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},th=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},c0=function(t,e,r){return t.style[e]=r},u0=function(t,e,r){return t.style.setProperty(e,r)},f0=function(t,e,r){return t._gsap[e]=r},h0=function(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r},d0=function(t,e,r,i,o){var s=t._gsap;s.scaleX=s.scaleY=r,s.renderTransform(o,s)},p0=function(t,e,r,i,o){var s=t._gsap;s[e]=r,s.renderTransform(o,s)},Rt="transform",ke=Rt+"Origin",m0=function n(t,e){var r=this,i=this.target,o=i.style,s=i._gsap;if(t in Gr&&o){if(this.tfm=this.tfm||{},t!=="transform")t=Rr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return r.tfm[a]=Xr(i,a)}):this.tfm[t]=s.x?s[t]:Xr(i,t),t===ke&&(this.tfm.zOrigin=s.zOrigin);else return Rr.transform.split(",").forEach(function(a){return n.call(r,a,e)});if(this.props.indexOf(Rt)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ke,e,"")),t=Rt}(o||e)&&this.props.push(t,e,o[t])},eh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},_0=function(){var t=this.props,e=this.target,r=e.style,i=e._gsap,o,s;for(o=0;o<t.length;o+=3)t[o+1]?t[o+1]===2?e[t[o]](t[o+2]):e[t[o]]=t[o+2]:t[o+2]?r[t[o]]=t[o+2]:r.removeProperty(t[o].substr(0,2)==="--"?t[o]:t[o].replace(_c,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),o=mc(),(!o||!o.isStart)&&!r[Rt]&&(eh(r),i.zOrigin&&r[ke]&&(r[ke]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},rh=function(t,e){var r={target:t,props:[],revert:_0,save:m0};return t._gsap||De.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return r.save(i)}),r},nh,hl=function(t,e){var r=ln.createElementNS?ln.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ln.createElement(t);return r&&r.style?r:ln.createElement(t)},Be=function n(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(_c,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&n(t,Fi(e)||e,1)||""},lu="O,Moz,ms,Ms,Webkit".split(","),Fi=function(t,e,r){var i=e||qn,o=i.style,s=5;if(t in o&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(lu[s]+t in o););return s<0?null:(s===3?"ms":s>=0?lu[s]:"")+t},dl=function(){r0()&&window.document&&(ou=window,ln=ou.document,Ri=ln.documentElement,qn=hl("div")||{style:{}},hl("div"),Rt=Fi(Rt),ke=Rt+"Origin",qn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",nh=!!Fi("perspective"),mc=De.core.reverting,pc=1)},cu=function(t){var e=t.ownerSVGElement,r=hl("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),o;i.style.display="block",r.appendChild(i),Ri.appendChild(r);try{o=i.getBBox()}catch{}return r.removeChild(i),Ri.removeChild(r),o},uu=function(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])},ih=function(t){var e,r;try{e=t.getBBox()}catch{e=cu(t),r=1}return e&&(e.width||e.height)||r||(e=cu(t)),e&&!e.width&&!e.x&&!e.y?{x:+uu(t,["x","cx","x1"])||0,y:+uu(t,["y","cy","y1"])||0,width:0,height:0}:e},oh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ih(t))},vn=function(t,e){if(e){var r=t.style,i;e in Gr&&e!==ke&&(e=Rt),r.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),r.removeProperty(i==="--"?e:e.replace(_c,"-$1").toLowerCase())):r.removeAttribute(e)}},cn=function(t,e,r,i,o,s){var a=new Pe(t._pt,e,r,0,1,s?th:Jf);return t._pt=a,a.b=i,a.e=o,t._props.push(r),a},fu={deg:1,rad:1,turn:1},g0={grid:1,flex:1},yn=function n(t,e,r,i){var o=parseFloat(r)||0,s=(r+"").trim().substr((o+"").length)||"px",a=qn.style,l=n0.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),p=100,d=i==="px",h=i==="%",_,m,v,b;if(i===s||!o||fu[i]||fu[s])return o;if(s!=="px"&&!d&&(o=n(t,e,r,"px")),b=t.getCTM&&oh(t),(h||s==="%")&&(Gr[e]||~e.indexOf("adius")))return _=b?t.getBBox()[l?"width":"height"]:t[u],Ct(h?o/_*p:o/100*_);if(a[l?"width":"height"]=p+(d?s:i),m=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,b&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===ln||!m.appendChild)&&(m=ln.body),v=m._gsap,v&&h&&v.width&&l&&v.time===We.time&&!v.uncache)return Ct(o/v.width*p);if(h&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=p+i,_=t[u],E?t.style[e]=E:vn(t,e)}else(h||s==="%")&&!g0[Be(m,"display")]&&(a.position=Be(t,"position")),m===t&&(a.position="static"),m.appendChild(qn),_=qn[u],m.removeChild(qn),a.position="absolute";return l&&h&&(v=Hn(m),v.time=We.time,v.width=m[u]),Ct(d?_*o/p:_&&o?p/_*o:0)},Xr=function(t,e,r,i){var o;return pc||dl(),e in Rr&&e!=="transform"&&(e=Rr[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gr[e]&&e!=="transform"?(o=No(t,i),o=e!=="transformOrigin"?o[e]:o.svg?o.origin:Bs(Be(t,ke))+" "+o.zOrigin+"px"):(o=t.style[e],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=zs[e]&&zs[e](t,e,r)||Be(t,e)||Ef(t,e)||(e==="opacity"?1:0))),r&&!~(o+"").trim().indexOf(" ")?yn(t,e,o,r)+r:o},v0=function(t,e,r,i){if(!r||r==="none"){var o=Fi(e,t,1),s=o&&Be(t,o,1);s&&s!==r?(e=o,r=s):e==="borderColor"&&(r=Be(t,"borderTopColor"))}var a=new Pe(this._pt,t.style,e,0,1,jf),l=0,c=0,u,p,d,h,_,m,v,b,E,y,w,x;if(a.b=r,a.e=i,r+="",i+="",i.substring(0,6)==="var(--"&&(i=Be(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=t.style[e],t.style[e]=i,i=Be(t,e)||i,m?t.style[e]=m:vn(t,e)),u=[r,i],Hf(u),r=u[0],i=u[1],d=r.match(xi)||[],x=i.match(xi)||[],x.length){for(;p=xi.exec(i);)v=p[0],E=i.substring(l,p.index),_?_=(_+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(_=1),v!==(m=d[c++]||"")&&(h=parseFloat(m)||0,w=m.substr((h+"").length),v.charAt(1)==="="&&(v=bi(h,v)+w),b=parseFloat(v),y=v.substr((b+"").length),l=xi.lastIndex-y.length,y||(y=y||$e.units[e]||w,l===i.length&&(i+=y,a.e+=y)),w!==y&&(h=yn(t,e,m,y)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:h,c:b-h,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?th:Jf;return vf.test(i)&&(a.e=0),this._pt=a,a},hu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},y0=function(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(t=r,r=i,i=t),e[0]=hu[r]||r,e[1]=hu[i]||i,e.join(" ")},x0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r=e.t,i=r.style,o=e.u,s=r._gsap,a,l,c;if(o==="all"||o===!0)i.cssText="",l=1;else for(o=o.split(","),c=o.length;--c>-1;)a=o[c],Gr[a]&&(l=1,a=a==="transformOrigin"?ke:Rt),vn(r,a);l&&(vn(r,Rt),s&&(s.svg&&r.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",No(r,1),s.uncache=1,eh(i)))}},zs={clearProps:function(t,e,r,i,o){if(o.data!=="isFromStart"){var s=t._pt=new Pe(t._pt,e,r,0,0,x0);return s.u=i,s.pr=-10,s.tween=o,t._props.push(r),1}}},Co=[1,0,0,1,0,0],sh={},ah=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},du=function(t){var e=Be(t,Rt);return ah(e)?Co:e.substr(7).match(gf).map(Ct)},gc=function(t,e){var r=t._gsap||Hn(t),i=t.style,o=du(t),s,a,l,c;return r.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?Co:o):(o===Co&&!t.offsetParent&&t!==Ri&&!r.svg&&(l=i.display,i.display="block",s=t.parentNode,(!s||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ri.appendChild(t)),o=du(t),l?i.display=l:vn(t,"display"),c&&(a?s.insertBefore(t,a):s?s.appendChild(t):Ri.removeChild(t))),e&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},pl=function(t,e,r,i,o,s){var a=t._gsap,l=o||gc(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,p=a.xOffset||0,d=a.yOffset||0,h=l[0],_=l[1],m=l[2],v=l[3],b=l[4],E=l[5],y=e.split(" "),w=parseFloat(y[0])||0,x=parseFloat(y[1])||0,k,A,D,L;r?l!==Co&&(A=h*v-_*m)&&(D=w*(v/A)+x*(-m/A)+(m*E-v*b)/A,L=w*(-_/A)+x*(h/A)-(h*E-_*b)/A,w=D,x=L):(k=ih(t),w=k.x+(~y[0].indexOf("%")?w/100*k.width:w),x=k.y+(~(y[1]||y[0]).indexOf("%")?x/100*k.height:x)),i||i!==!1&&a.smooth?(b=w-c,E=x-u,a.xOffset=p+(b*h+E*m)-b,a.yOffset=d+(b*_+E*v)-E):a.xOffset=a.yOffset=0,a.xOrigin=w,a.yOrigin=x,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!r,t.style[ke]="0px 0px",s&&(cn(s,a,"xOrigin",c,w),cn(s,a,"yOrigin",u,x),cn(s,a,"xOffset",p,a.xOffset),cn(s,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)},No=function(t,e){var r=t._gsap||new Bf(t);if("x"in r&&!e&&!r.uncache)return r;var i=t.style,o=r.scaleX<0,s="px",a="deg",l=getComputedStyle(t),c=Be(t,ke)||"0",u,p,d,h,_,m,v,b,E,y,w,x,k,A,D,L,P,W,O,z,V,lt,ot,X,ct,mt,T,yt,de,nr,At,Kt;return u=p=d=m=v=b=E=y=w=0,h=_=1,r.svg=!!(t.getCTM&&oh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Rt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Rt]!=="none"?l[Rt]:"")),i.scale=i.rotate=i.translate="none"),A=gc(t,r.svg),r.svg&&(r.uncache?(ct=t.getBBox(),c=r.xOrigin-ct.x+"px "+(r.yOrigin-ct.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),pl(t,X||c,!!X||r.originIsAbsolute,r.smooth!==!1,A)),x=r.xOrigin||0,k=r.yOrigin||0,A!==Co&&(W=A[0],O=A[1],z=A[2],V=A[3],u=lt=A[4],p=ot=A[5],A.length===6?(h=Math.sqrt(W*W+O*O),_=Math.sqrt(V*V+z*z),m=W||O?ci(O,W)*Nn:0,E=z||V?ci(z,V)*Nn+m:0,E&&(_*=Math.abs(Math.cos(E*Ai))),r.svg&&(u-=x-(x*W+k*z),p-=k-(x*O+k*V))):(Kt=A[6],nr=A[7],T=A[8],yt=A[9],de=A[10],At=A[11],u=A[12],p=A[13],d=A[14],D=ci(Kt,de),v=D*Nn,D&&(L=Math.cos(-D),P=Math.sin(-D),X=lt*L+T*P,ct=ot*L+yt*P,mt=Kt*L+de*P,T=lt*-P+T*L,yt=ot*-P+yt*L,de=Kt*-P+de*L,At=nr*-P+At*L,lt=X,ot=ct,Kt=mt),D=ci(-z,de),b=D*Nn,D&&(L=Math.cos(-D),P=Math.sin(-D),X=W*L-T*P,ct=O*L-yt*P,mt=z*L-de*P,At=V*P+At*L,W=X,O=ct,z=mt),D=ci(O,W),m=D*Nn,D&&(L=Math.cos(D),P=Math.sin(D),X=W*L+O*P,ct=lt*L+ot*P,O=O*L-W*P,ot=ot*L-lt*P,W=X,lt=ct),v&&Math.abs(v)+Math.abs(m)>359.9&&(v=m=0,b=180-b),h=Ct(Math.sqrt(W*W+O*O+z*z)),_=Ct(Math.sqrt(ot*ot+Kt*Kt)),D=ci(lt,ot),E=Math.abs(D)>2e-4?D*Nn:0,w=At?1/(At<0?-At:At):0),r.svg&&(X=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ah(Be(t,Rt)),X&&t.setAttribute("transform",X))),Math.abs(E)>90&&Math.abs(E)<270&&(o?(h*=-1,E+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,E+=E<=0?180:-180)),e=e||r.uncache,r.x=u-((r.xPercent=u&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+s,r.y=p-((r.yPercent=p&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-p)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+s,r.z=d+s,r.scaleX=Ct(h),r.scaleY=Ct(_),r.rotation=Ct(m)+a,r.rotationX=Ct(v)+a,r.rotationY=Ct(b)+a,r.skewX=E+a,r.skewY=y+a,r.transformPerspective=w+s,(r.zOrigin=parseFloat(c.split(" ")[2])||!e&&r.zOrigin||0)&&(i[ke]=Bs(c)),r.xOffset=r.yOffset=0,r.force3D=$e.force3D,r.renderTransform=r.svg?w0:nh?lh:T0,r.uncache=0,r},Bs=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ma=function(t,e,r){var i=ce(e);return Ct(parseFloat(e)+parseFloat(yn(t,"x",r+"px",i)))+i},T0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,lh(t,e)},On="0deg",Qi="0px",Cn=") ",lh=function(t,e){var r=e||this,i=r.xPercent,o=r.yPercent,s=r.x,a=r.y,l=r.z,c=r.rotation,u=r.rotationY,p=r.rotationX,d=r.skewX,h=r.skewY,_=r.scaleX,m=r.scaleY,v=r.transformPerspective,b=r.force3D,E=r.target,y=r.zOrigin,w="",x=b==="auto"&&t&&t!==1||b===!0;if(y&&(p!==On||u!==On)){var k=parseFloat(u)*Ai,A=Math.sin(k),D=Math.cos(k),L;k=parseFloat(p)*Ai,L=Math.cos(k),s=Ma(E,s,A*L*-y),a=Ma(E,a,-Math.sin(k)*-y),l=Ma(E,l,D*L*-y+y)}v!==Qi&&(w+="perspective("+v+Cn),(i||o)&&(w+="translate("+i+"%, "+o+"%) "),(x||s!==Qi||a!==Qi||l!==Qi)&&(w+=l!==Qi||x?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+Cn),c!==On&&(w+="rotate("+c+Cn),u!==On&&(w+="rotateY("+u+Cn),p!==On&&(w+="rotateX("+p+Cn),(d!==On||h!==On)&&(w+="skew("+d+", "+h+Cn),(_!==1||m!==1)&&(w+="scale("+_+", "+m+Cn),E.style[Rt]=w||"translate(0, 0)"},w0=function(t,e){var r=e||this,i=r.xPercent,o=r.yPercent,s=r.x,a=r.y,l=r.rotation,c=r.skewX,u=r.skewY,p=r.scaleX,d=r.scaleY,h=r.target,_=r.xOrigin,m=r.yOrigin,v=r.xOffset,b=r.yOffset,E=r.forceCSS,y=parseFloat(s),w=parseFloat(a),x,k,A,D,L;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ai,c*=Ai,x=Math.cos(l)*p,k=Math.sin(l)*p,A=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(u*=Ai,L=Math.tan(c-u),L=Math.sqrt(1+L*L),A*=L,D*=L,u&&(L=Math.tan(u),L=Math.sqrt(1+L*L),x*=L,k*=L)),x=Ct(x),k=Ct(k),A=Ct(A),D=Ct(D)):(x=p,D=d,k=A=0),(y&&!~(s+"").indexOf("px")||w&&!~(a+"").indexOf("px"))&&(y=yn(h,"x",s,"px"),w=yn(h,"y",a,"px")),(_||m||v||b)&&(y=Ct(y+_-(_*x+m*A)+v),w=Ct(w+m-(_*k+m*D)+b)),(i||o)&&(L=h.getBBox(),y=Ct(y+i/100*L.width),w=Ct(w+o/100*L.height)),L="matrix("+x+","+k+","+A+","+D+","+y+","+w+")",h.setAttribute("transform",L),E&&(h.style[Rt]=L)},E0=function(t,e,r,i,o){var s=360,a=Vt(o),l=parseFloat(o)*(a&&~o.indexOf("rad")?Nn:1),c=l-i,u=i+c+"deg",p,d;return a&&(p=o.split("_")[1],p==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),p==="cw"&&c<0?c=(c+s*au)%s-~~(c/s)*s:p==="ccw"&&c>0&&(c=(c-s*au)%s-~~(c/s)*s)),t._pt=d=new Pe(t._pt,e,r,i,c,o0),d.e=u,d.u="deg",t._props.push(r),d},pu=function(t,e){for(var r in e)t[r]=e[r];return t},b0=function(t,e,r){var i=pu({},r._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=r.style,a,l,c,u,p,d,h,_;i.svg?(c=r.getAttribute("transform"),r.setAttribute("transform",""),s[Rt]=e,a=No(r,1),vn(r,Rt),r.setAttribute("transform",c)):(c=getComputedStyle(r)[Rt],s[Rt]=e,a=No(r,1),s[Rt]=c);for(l in Gr)c=i[l],u=a[l],c!==u&&o.indexOf(l)<0&&(h=ce(c),_=ce(u),p=h!==_?yn(r,l,c,_):parseFloat(c),d=parseFloat(u),t._pt=new Pe(t._pt,a,l,p,d-p,fl),t._pt.u=_||0,t._props.push(l));pu(a,i)};Le("padding,margin,Width,Radius",function(n,t){var e="Top",r="Right",i="Bottom",o="Left",s=(t<3?[e,r,i,o]:[e+o,e+r,i+r,i+o]).map(function(a){return t<2?n+a:"border"+a+n});zs[t>1?"border"+n:n]=function(a,l,c,u,p){var d,h;if(arguments.length<4)return d=s.map(function(_){return Xr(a,_,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},s.forEach(function(_,m){return h[_]=d[m]=d[m]||d[(m-1)/2|0]}),a.init(l,h,p)}});var ch={name:"css",register:dl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,r,i,o){var s=this._props,a=t.style,l=r.vars.startAt,c,u,p,d,h,_,m,v,b,E,y,w,x,k,A,D,L;pc||dl(),this.styles=this.styles||rh(t),D=this.styles.props,this.tween=r;for(m in e)if(m!=="autoRound"&&(u=e[m],!(Ue[m]&&$f(m,e,r,i,t,o)))){if(h=typeof u,_=zs[m],h==="function"&&(u=u.call(r,i,t,o),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ko(u)),_)_(this,t,m,u,r)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(m)+"").trim(),u+="",dn.lastIndex=0,dn.test(c)||(v=ce(c),b=ce(u),b?v!==b&&(c=yn(t,m,c,b)+b):v&&(u+=v)),this.add(a,"setProperty",c,u,i,o,0,0,m),s.push(m),D.push(m,0,a[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(r,i,t,o):l[m],Vt(c)&&~c.indexOf("random(")&&(c=ko(c)),ce(c+"")||c==="auto"||(c+=$e.units[m]||ce(Xr(t,m))||""),(c+"").charAt(1)==="="&&(c=Xr(t,m))):c=Xr(t,m),d=parseFloat(c),E=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),p=parseFloat(u),m in Rr&&(m==="autoAlpha"&&(d===1&&Xr(t,"visibility")==="hidden"&&p&&(d=0),D.push("visibility",0,a.visibility),cn(this,a,"visibility",d?"inherit":"hidden",p?"inherit":"hidden",!p)),m!=="scale"&&m!=="transform"&&(m=Rr[m],~m.indexOf(",")&&(m=m.split(",")[0]))),y=m in Gr,y){if(this.styles.save(m),L=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Be(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var P=t.style.perspective;t.style.perspective=u,u=Be(t,"perspective"),P?t.style.perspective=P:vn(t,"perspective")}p=parseFloat(u)}if(w||(x=t._gsap,x.renderTransform&&!e.parseTransform||No(t,e.parseTransform),k=e.smoothOrigin!==!1&&x.smooth,w=this._pt=new Pe(this._pt,a,Rt,0,1,x.renderTransform,x,0,-1),w.dep=1),m==="scale")this._pt=new Pe(this._pt,x,"scaleY",x.scaleY,(E?bi(x.scaleY,E+p):p)-x.scaleY||0,fl),this._pt.u=0,s.push("scaleY",m),m+="X";else if(m==="transformOrigin"){D.push(ke,0,a[ke]),u=y0(u),x.svg?pl(t,u,0,k,0,this):(b=parseFloat(u.split(" ")[2])||0,b!==x.zOrigin&&cn(this,x,"zOrigin",x.zOrigin,b),cn(this,a,m,Bs(c),Bs(u)));continue}else if(m==="svgOrigin"){pl(t,u,1,k,0,this);continue}else if(m in sh){E0(this,x,m,d,E?bi(d,E+u):u);continue}else if(m==="smoothOrigin"){cn(this,x,"smooth",x.smooth,u);continue}else if(m==="force3D"){x[m]=u;continue}else if(m==="transform"){b0(this,u,t);continue}}else m in a||(m=Fi(m)||m);if(y||(p||p===0)&&(d||d===0)&&!i0.test(u)&&m in a)v=(c+"").substr((d+"").length),p||(p=0),b=ce(u)||(m in $e.units?$e.units[m]:v),v!==b&&(d=yn(t,m,c,b)),this._pt=new Pe(this._pt,y?x:a,m,d,(E?bi(d,E+p):p)-d,!y&&(b==="px"||m==="zIndex")&&e.autoRound!==!1?l0:fl),this._pt.u=b||0,y&&L!==u?(this._pt.b=c,this._pt.e=L,this._pt.r=a0):v!==b&&b!=="%"&&(this._pt.b=c,this._pt.r=s0);else if(m in a)v0.call(this,t,m,c,E?E+u:u);else if(m in t)this.add(t,m,c||t[m],E?E+u:u,i,o);else if(m!=="parseTransform"){ic(m,u);continue}y||(m in a?D.push(m,0,a[m]):typeof t[m]=="function"?D.push(m,2,t[m]()):D.push(m,1,c||t[m])),s.push(m)}}A&&Zf(this)},render:function(t,e){if(e.tween._time||!mc())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:Xr,aliases:Rr,getSetter:function(t,e,r){var i=Rr[e];return i&&i.indexOf(",")<0&&(e=i),e in Gr&&e!==ke&&(t._gsap.x||Xr(t,"x"))?r&&su===r?e==="scale"?h0:f0:(su=r||{})&&(e==="scale"?d0:p0):t.style&&!ec(t.style[e])?c0:~e.indexOf("-")?u0:hc(t,e)},core:{_removeProperty:vn,_getMatrix:gc}};De.utils.checkPrefix=Fi;De.core.getStyleSaver=rh;(function(n,t,e,r){var i=Le(n+","+t+","+e,function(o){Gr[o]=1});Le(t,function(o){$e.units[o]="deg",sh[o]=1}),Rr[i[13]]=n+","+t,Le(r,function(o){var s=o.split(":");Rr[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Le("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){$e.units[n]="px"});De.registerPlugin(ch);var dr=De.registerPlugin(ch)||De;dr.core.Tween;function R0(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function A0(n,t,e){return t&&R0(n.prototype,t),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qt,Es,Xe,un,fn,Si,uh,In,Mi,fh,zr,cr,hh,dh=function(){return Qt||typeof window<"u"&&(Qt=window.gsap)&&Qt.registerPlugin&&Qt},ph=1,wi=[],nt=[],Sr=[],yo=Date.now,ml=function(t,e){return e},S0=function(){var t=Mi.core,e=t.bridge||{},r=t._scrollers,i=t._proxies;r.push.apply(r,nt),i.push.apply(i,Sr),nt=r,Sr=i,ml=function(s,a){return e[s](a)}},pn=function(t,e){return~Sr.indexOf(t)&&Sr[Sr.indexOf(t)+1][e]},xo=function(t){return!!~fh.indexOf(t)},ve=function(t,e,r,i,o){return t.addEventListener(e,r,{passive:i!==!1,capture:!!o})},ge=function(t,e,r,i){return t.removeEventListener(e,r,!!i)},es="scrollLeft",rs="scrollTop",_l=function(){return zr&&zr.isPressed||nt.cache++},$s=function(t,e){var r=function i(o){if(o||o===0){ph&&(Xe.history.scrollRestoration="manual");var s=zr&&zr.isPressed;o=i.v=Math.round(o)||(zr&&zr.iOS?1:0),t(o),i.cacheID=nt.cache,s&&ml("ss",o)}else(e||nt.cache!==i.cacheID||ml("ref"))&&(i.cacheID=nt.cache,i.v=t());return i.v+i.offset};return r.offset=0,t&&r},Ee={s:es,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:$s(function(n){return arguments.length?Xe.scrollTo(n,Ht.sc()):Xe.pageXOffset||un[es]||fn[es]||Si[es]||0})},Ht={s:rs,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ee,sc:$s(function(n){return arguments.length?Xe.scrollTo(Ee.sc(),n):Xe.pageYOffset||un[rs]||fn[rs]||Si[rs]||0})},Re=function(t,e){return(e&&e._ctx&&e._ctx.selector||Qt.utils.toArray)(t)[0]||(typeof t=="string"&&Qt.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},M0=function(t,e){for(var r=e.length;r--;)if(e[r]===t||e[r].contains(t))return!0;return!1},xn=function(t,e){var r=e.s,i=e.sc;xo(t)&&(t=un.scrollingElement||fn);var o=nt.indexOf(t),s=i===Ht.sc?1:2;!~o&&(o=nt.push(t)-1),nt[o+s]||ve(t,"scroll",_l);var a=nt[o+s],l=a||(nt[o+s]=$s(pn(t,r),!0)||(xo(t)?i:$s(function(c){return arguments.length?t[r]=c:t[r]})));return l.target=t,a||(l.smooth=Qt.getProperty(t,"scrollBehavior")==="smooth"),l},gl=function(t,e,r){var i=t,o=t,s=yo(),a=s,l=e||50,c=Math.max(500,l*3),u=function(_,m){var v=yo();m||v-s>l?(o=i,i=_,a=s,s=v):r?i+=_:i=o+(_-o)/(v-a)*(s-a)},p=function(){o=i=r?0:i,a=s=0},d=function(_){var m=a,v=o,b=yo();return(_||_===0)&&_!==i&&u(_),s===a||b-a>c?0:(i+(r?v:-v))/((r?b:s)-m)*1e3};return{update:u,reset:p,getVelocity:d}},Ji=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},mu=function(t){var e=Math.max.apply(Math,t),r=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(r)?e:r},mh=function(){Mi=Qt.core.globals().ScrollTrigger,Mi&&Mi.core&&S0()},_h=function(t){return Qt=t||dh(),!Es&&Qt&&typeof document<"u"&&document.body&&(Xe=window,un=document,fn=un.documentElement,Si=un.body,fh=[Xe,un,fn,Si],Qt.utils.clamp,hh=Qt.core.context||function(){},In="onpointerenter"in Si?"pointer":"mouse",uh=Nt.isTouch=Xe.matchMedia&&Xe.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Xe||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,cr=Nt.eventTypes=("ontouchstart"in fn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in fn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ph=0},500),Es=1),Mi||mh(),Es};Ee.op=Ht;nt.cache=0;var Nt=(function(){function n(e){this.init(e)}var t=n.prototype;return t.init=function(r){Es||_h(Qt)||console.warn("Please gsap.registerPlugin(Observer)"),Mi||mh();var i=r.tolerance,o=r.dragMinimum,s=r.type,a=r.target,l=r.lineHeight,c=r.debounce,u=r.preventDefault,p=r.onStop,d=r.onStopDelay,h=r.ignore,_=r.wheelSpeed,m=r.event,v=r.onDragStart,b=r.onDragEnd,E=r.onDrag,y=r.onPress,w=r.onRelease,x=r.onRight,k=r.onLeft,A=r.onUp,D=r.onDown,L=r.onChangeX,P=r.onChangeY,W=r.onChange,O=r.onToggleX,z=r.onToggleY,V=r.onHover,lt=r.onHoverEnd,ot=r.onMove,X=r.ignoreCheck,ct=r.isNormalizer,mt=r.onGestureStart,T=r.onGestureEnd,yt=r.onWheel,de=r.onEnable,nr=r.onDisable,At=r.onClick,Kt=r.scrollSpeed,ee=r.capture,It=r.allowClicks,pe=r.lockAxis,re=r.onLockAxis;this.target=a=Re(a)||fn,this.vars=r,h&&(h=Qt.utils.toArray(h)),i=i||1e-9,o=o||0,_=_||1,Kt=Kt||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Xe.getComputedStyle(Si).lineHeight)||22);var jr,me,_e,ut,kt,be,Oe,S=this,Ce=0,Cr=0,Zr=r.passive||!u&&r.passive!==!1,St=xn(a,Ee),Nr=xn(a,Ht),Qr=St(),Mn=Nr(),Bt=~s.indexOf("touch")&&!~s.indexOf("pointer")&&cr[0]==="pointerdown",Jr=xo(a),Dt=a.ownerDocument||un,ir=[0,0,0],Ve=[0,0,0],Ir=0,Vi=function(){return Ir=yo()},Ft=function(H,ft){return(S.event=H)&&h&&M0(H.target,h)||ft&&Bt&&H.pointerType!=="touch"||X&&X(H,ft)},Zo=function(){S._vx.reset(),S._vy.reset(),me.pause(),p&&p(S)},Fr=function(){var H=S.deltaX=mu(ir),ft=S.deltaY=mu(Ve),N=Math.abs(H)>=i,Y=Math.abs(ft)>=i;W&&(N||Y)&&W(S,H,ft,ir,Ve),N&&(x&&S.deltaX>0&&x(S),k&&S.deltaX<0&&k(S),L&&L(S),O&&S.deltaX<0!=Ce<0&&O(S),Ce=S.deltaX,ir[0]=ir[1]=ir[2]=0),Y&&(D&&S.deltaY>0&&D(S),A&&S.deltaY<0&&A(S),P&&P(S),z&&S.deltaY<0!=Cr<0&&z(S),Cr=S.deltaY,Ve[0]=Ve[1]=Ve[2]=0),(ut||_e)&&(ot&&ot(S),_e&&(v&&_e===1&&v(S),E&&E(S),_e=0),ut=!1),be&&!(be=!1)&&re&&re(S),kt&&(yt(S),kt=!1),jr=0},si=function(H,ft,N){ir[N]+=H,Ve[N]+=ft,S._vx.update(H),S._vy.update(ft),c?jr||(jr=requestAnimationFrame(Fr)):Fr()},ai=function(H,ft){pe&&!Oe&&(S.axis=Oe=Math.abs(H)>Math.abs(ft)?"x":"y",be=!0),Oe!=="y"&&(ir[2]+=H,S._vx.update(H,!0)),Oe!=="x"&&(Ve[2]+=ft,S._vy.update(ft,!0)),c?jr||(jr=requestAnimationFrame(Fr)):Fr()},tn=function(H){if(!Ft(H,1)){H=Ji(H,u);var ft=H.clientX,N=H.clientY,Y=ft-S.x,q=N-S.y,G=S.isDragging;S.x=ft,S.y=N,(G||(Y||q)&&(Math.abs(S.startX-ft)>=o||Math.abs(S.startY-N)>=o))&&(_e||(_e=G?2:1),G||(S.isDragging=!0),ai(Y,q))}},Ln=S.onPress=function(K){Ft(K,1)||K&&K.button||(S.axis=Oe=null,me.pause(),S.isPressed=!0,K=Ji(K),Ce=Cr=0,S.startX=S.x=K.clientX,S.startY=S.y=K.clientY,S._vx.reset(),S._vy.reset(),ve(ct?a:Dt,cr[1],tn,Zr,!0),S.deltaX=S.deltaY=0,y&&y(S))},it=S.onRelease=function(K){if(!Ft(K,1)){ge(ct?a:Dt,cr[1],tn,!0);var H=!isNaN(S.y-S.startY),ft=S.isDragging,N=ft&&(Math.abs(S.x-S.startX)>3||Math.abs(S.y-S.startY)>3),Y=Ji(K);!N&&H&&(S._vx.reset(),S._vy.reset(),u&&It&&Qt.delayedCall(.08,function(){if(yo()-Ir>300&&!K.defaultPrevented){if(K.target.click)K.target.click();else if(Dt.createEvent){var q=Dt.createEvent("MouseEvents");q.initMouseEvent("click",!0,!0,Xe,1,Y.screenX,Y.screenY,Y.clientX,Y.clientY,!1,!1,!1,!1,0,null),K.target.dispatchEvent(q)}}})),S.isDragging=S.isGesturing=S.isPressed=!1,p&&ft&&!ct&&me.restart(!0),_e&&Fr(),b&&ft&&b(S),w&&w(S,N)}},Pn=function(H){return H.touches&&H.touches.length>1&&(S.isGesturing=!0)&&mt(H,S.isDragging)},or=function(){return(S.isGesturing=!1)||T(S)},sr=function(H){if(!Ft(H)){var ft=St(),N=Nr();si((ft-Qr)*Kt,(N-Mn)*Kt,1),Qr=ft,Mn=N,p&&me.restart(!0)}},ar=function(H){if(!Ft(H)){H=Ji(H,u),yt&&(kt=!0);var ft=(H.deltaMode===1?l:H.deltaMode===2?Xe.innerHeight:1)*_;si(H.deltaX*ft,H.deltaY*ft,0),p&&!ct&&me.restart(!0)}},kn=function(H){if(!Ft(H)){var ft=H.clientX,N=H.clientY,Y=ft-S.x,q=N-S.y;S.x=ft,S.y=N,ut=!0,p&&me.restart(!0),(Y||q)&&ai(Y,q)}},li=function(H){S.event=H,V(S)},Ur=function(H){S.event=H,lt(S)},Ki=function(H){return Ft(H)||Ji(H,u)&&At(S)};me=S._dc=Qt.delayedCall(d||.25,Zo).pause(),S.deltaX=S.deltaY=0,S._vx=gl(0,50,!0),S._vy=gl(0,50,!0),S.scrollX=St,S.scrollY=Nr,S.isDragging=S.isGesturing=S.isPressed=!1,hh(this),S.enable=function(K){return S.isEnabled||(ve(Jr?Dt:a,"scroll",_l),s.indexOf("scroll")>=0&&ve(Jr?Dt:a,"scroll",sr,Zr,ee),s.indexOf("wheel")>=0&&ve(a,"wheel",ar,Zr,ee),(s.indexOf("touch")>=0&&uh||s.indexOf("pointer")>=0)&&(ve(a,cr[0],Ln,Zr,ee),ve(Dt,cr[2],it),ve(Dt,cr[3],it),It&&ve(a,"click",Vi,!0,!0),At&&ve(a,"click",Ki),mt&&ve(Dt,"gesturestart",Pn),T&&ve(Dt,"gestureend",or),V&&ve(a,In+"enter",li),lt&&ve(a,In+"leave",Ur),ot&&ve(a,In+"move",kn)),S.isEnabled=!0,S.isDragging=S.isGesturing=S.isPressed=ut=_e=!1,S._vx.reset(),S._vy.reset(),Qr=St(),Mn=Nr(),K&&K.type&&Ln(K),de&&de(S)),S},S.disable=function(){S.isEnabled&&(wi.filter(function(K){return K!==S&&xo(K.target)}).length||ge(Jr?Dt:a,"scroll",_l),S.isPressed&&(S._vx.reset(),S._vy.reset(),ge(ct?a:Dt,cr[1],tn,!0)),ge(Jr?Dt:a,"scroll",sr,ee),ge(a,"wheel",ar,ee),ge(a,cr[0],Ln,ee),ge(Dt,cr[2],it),ge(Dt,cr[3],it),ge(a,"click",Vi,!0),ge(a,"click",Ki),ge(Dt,"gesturestart",Pn),ge(Dt,"gestureend",or),ge(a,In+"enter",li),ge(a,In+"leave",Ur),ge(a,In+"move",kn),S.isEnabled=S.isPressed=S.isDragging=!1,nr&&nr(S))},S.kill=S.revert=function(){S.disable();var K=wi.indexOf(S);K>=0&&wi.splice(K,1),zr===S&&(zr=0)},wi.push(S),ct&&xo(a)&&(zr=S),S.enable(m)},A0(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();Nt.version="3.15.0";Nt.create=function(n){return new Nt(n)};Nt.register=_h;Nt.getAll=function(){return wi.slice()};Nt.getById=function(n){return wi.filter(function(t){return t.vars.id===n})[0]};dh()&&Qt.registerPlugin(Nt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var F,gi,rt,pt,qe,dt,vc,Ys,Io,To,so,ns,se,ua,vl,xe,_u,gu,vi,gh,La,vh,ye,yl,yh,xh,sn,xl,yc,Li,xc,wo,Tl,Pa,is=1,ae=Date.now,ka=ae(),tr=0,ao=0,vu=function(t,e,r){var i=Fe(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return r["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},yu=function(t,e){return e&&(!Fe(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},L0=function n(){return ao&&requestAnimationFrame(n)},xu=function(){return ua=1},Tu=function(){return ua=0},Tr=function(t){return t},lo=function(t){return Math.round(t*1e5)/1e5||0},Th=function(){return typeof window<"u"},wh=function(){return F||Th()&&(F=window.gsap)&&F.registerPlugin&&F},Zn=function(t){return!!~vc.indexOf(t)},Eh=function(t){return(t==="Height"?xc:rt["inner"+t])||qe["client"+t]||dt["client"+t]},bh=function(t){return pn(t,"getBoundingClientRect")||(Zn(t)?function(){return Ms.width=rt.innerWidth,Ms.height=xc,Ms}:function(){return Hr(t)})},P0=function(t,e,r){var i=r.d,o=r.d2,s=r.a;return(s=pn(t,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(e?Eh(o):t["client"+o])||0}},k0=function(t,e){return!e||~Sr.indexOf(t)?bh(t):function(){return Ms}},Ar=function(t,e){var r=e.s,i=e.d2,o=e.d,s=e.a;return Math.max(0,(r="scroll"+i)&&(s=pn(t,r))?s()-bh(t)()[o]:Zn(t)?(qe[r]||dt[r])-Eh(i):t[r]-t["offset"+i])},os=function(t,e){for(var r=0;r<vi.length;r+=3)(!e||~e.indexOf(vi[r+1]))&&t(vi[r],vi[r+1],vi[r+2])},Fe=function(t){return typeof t=="string"},ue=function(t){return typeof t=="function"},co=function(t){return typeof t=="number"},Fn=function(t){return typeof t=="object"},to=function(t,e,r){return t&&t.progress(e?0:1)&&r&&t.pause()},ui=function(t,e,r){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,r)}):e(t,r);i&&i.totalTime&&(t.callbackAnimation=i)}},fi=Math.abs,Rh="left",Ah="top",Tc="right",wc="bottom",Yn="width",Gn="height",Eo="Right",bo="Left",Ro="Top",Ao="Bottom",Ut="padding",je="margin",Ui="Width",Ec="Height",Xt="px",Ze=function(t){return rt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},D0=function(t){var e=Ze(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},wu=function(t,e){for(var r in e)r in t||(t[r]=e[r]);return t},Hr=function(t,e){var r=e&&Ze(t)[vl]!=="matrix(1, 0, 0, 1, 0, 0)"&&F.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return r&&r.progress(0).kill(),i},Gs=function(t,e){var r=e.d2;return t["offset"+r]||t["client"+r]||0},Sh=function(t){var e=[],r=t.labels,i=t.duration(),o;for(o in r)e.push(r[o]/i);return e},O0=function(t){return function(e){return F.utils.snap(Sh(t),e)}},bc=function(t){var e=F.utils.snap(t),r=Array.isArray(t)&&t.slice(0).sort(function(i,o){return i-o});return r?function(i,o,s){s===void 0&&(s=.001);var a;if(!o)return e(i);if(o>0){for(i-=s,a=0;a<r.length;a++)if(r[a]>=i)return r[a];return r[a-1]}else for(a=r.length,i+=s;a--;)if(r[a]<=i)return r[a];return r[0]}:function(i,o,s){s===void 0&&(s=.001);var a=e(i);return!o||Math.abs(a-i)<s||a-i<0==o<0?a:e(o<0?i-t:i+t)}},C0=function(t){return function(e,r){return bc(Sh(t))(e,r.direction)}},ss=function(t,e,r,i){return r.split(",").forEach(function(o){return t(e,o,i)})},Gt=function(t,e,r,i,o){return t.addEventListener(e,r,{passive:!i,capture:!!o})},Yt=function(t,e,r,i){return t.removeEventListener(e,r,!!i)},as=function(t,e,r){r=r&&r.wheelHandler,r&&(t(e,"wheel",r),t(e,"touchmove",r))},Eu={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ls={toggleActions:"play",anticipatePin:0},Vs={top:0,left:0,center:.5,bottom:1,right:1},bs=function(t,e){if(Fe(t)){var r=t.indexOf("="),i=~r?+(t.charAt(r-1)+1)*parseFloat(t.substr(r+1)):0;~r&&(t.indexOf("%")>r&&(i*=e/100),t=t.substr(0,r-1)),t=i+(t in Vs?Vs[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},cs=function(t,e,r,i,o,s,a,l){var c=o.startColor,u=o.endColor,p=o.fontSize,d=o.indent,h=o.fontWeight,_=pt.createElement("div"),m=Zn(r)||pn(r,"pinType")==="fixed",v=t.indexOf("scroller")!==-1,b=m?dt:r.tagName==="IFRAME"?r.contentDocument.body:r,E=t.indexOf("start")!==-1,y=E?c:u,w="border-color:"+y+";font-size:"+p+";color:"+y+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((v||l)&&m?"fixed;":"absolute;"),(v||l||!m)&&(w+=(i===Ht?Tc:wc)+":"+(s+parseFloat(d))+"px;"),a&&(w+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=E,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=w,_.innerText=e||e===0?t+"-"+e:t,b.children[0]?b.insertBefore(_,b.children[0]):b.appendChild(_),_._offset=_["offset"+i.op.d2],Rs(_,0,i,E),_},Rs=function(t,e,r,i){var o={display:"block"},s=r[i?"os2":"p2"],a=r[i?"p2":"os2"];t._isFlipped=i,o[r.a+"Percent"]=i?-100:0,o[r.a]=i?"1px":0,o["border"+s+Ui]=1,o["border"+a+Ui]=0,o[r.p]=e+"px",F.set(t,o)},J=[],wl={},Fo,bu=function(){return ae()-tr>34&&(Fo||(Fo=requestAnimationFrame(Br)))},hi=function(){(!ye||!ye.isPressed||ye.startX>dt.clientWidth)&&(nt.cache++,ye?Fo||(Fo=requestAnimationFrame(Br)):Br(),tr||Jn("scrollStart"),tr=ae())},Da=function(){xh=rt.innerWidth,yh=rt.innerHeight},uo=function(t){nt.cache++,(t===!0||!se&&!vh&&!pt.fullscreenElement&&!pt.webkitFullscreenElement&&(!yl||xh!==rt.innerWidth||Math.abs(rt.innerHeight-yh)>rt.innerHeight*.25))&&Ys.restart(!0)},Qn={},N0=[],Mh=function n(){return Yt(B,"scrollEnd",n)||Wn(!0)},Jn=function(t){return Qn[t]&&Qn[t].map(function(e){return e()})||N0},Ie=[],Lh=function(t){for(var e=0;e<Ie.length;e+=5)(!t||Ie[e+4]&&Ie[e+4].query===t)&&(Ie[e].style.cssText=Ie[e+1],Ie[e].getBBox&&Ie[e].setAttribute("transform",Ie[e+2]||""),Ie[e+3].uncache=1)},Ph=function(){return nt.forEach(function(t){return ue(t)&&++t.cacheID&&(t.rec=t())})},Rc=function(t,e){var r;for(xe=0;xe<J.length;xe++)r=J[xe],r&&(!e||r._ctx===e)&&(t?r.kill(1):r.revert(!0,!0));wo=!0,e&&Lh(e),e||Jn("revert")},kh=function(t,e){nt.cache++,(e||!Te)&&nt.forEach(function(r){return ue(r)&&r.cacheID++&&(r.rec=0)}),Fe(t)&&(rt.history.scrollRestoration=yc=t)},Te,Vn=0,Ru,I0=function(){if(Ru!==Vn){var t=Ru=Vn;requestAnimationFrame(function(){return t===Vn&&Wn(!0)})}},Dh=function(){dt.appendChild(Li),xc=!ye&&Li.offsetHeight||rt.innerHeight,dt.removeChild(Li)},Au=function(t){return Io(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Wn=function(t,e){if(qe=pt.documentElement,dt=pt.body,vc=[rt,pt,qe,dt],tr&&!t&&!wo){Gt(B,"scrollEnd",Mh);return}Dh(),Te=B.isRefreshing=!0,wo||Ph();var r=Jn("refreshInit");gh&&B.sort(),e||Rc(),nt.forEach(function(i){ue(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),J.slice(0).forEach(function(i){return i.refresh()}),wo=!1,J.forEach(function(i){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",s=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-s),i.refresh()}}),Tl=1,Au(!0),J.forEach(function(i){var o=Ar(i.scroller,i._dir),s=i.vars.end==="max"||i._endClamp&&i.end>o,a=i._startClamp&&i.start>=o;(s||a)&&i.setPositions(a?o-1:i.start,s?Math.max(a?o:i.start+1,o):i.end,!0)}),Au(!1),Tl=0,r.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){ue(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),kh(yc,1),Ys.pause(),Vn++,Te=2,Br(2),J.forEach(function(i){return ue(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Te=B.isRefreshing=!1,Jn("refresh")},El=0,As=1,So,Br=function(t){if(t===2||!Te&&!wo){B.isUpdating=!0,So&&So.update(0);var e=J.length,r=ae(),i=r-ka>=50,o=e&&J[0].scroll();if(As=El>o?-1:1,Te||(El=o),i&&(tr&&!ua&&r-tr>200&&(tr=0,Jn("scrollEnd")),so=ka,ka=r),As<0){for(xe=e;xe-- >0;)J[xe]&&J[xe].update(0,i);As=1}else for(xe=0;xe<e;xe++)J[xe]&&J[xe].update(0,i);B.isUpdating=!1}Fo=0},bl=[Rh,Ah,wc,Tc,je+Ao,je+Eo,je+Ro,je+bo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ss=bl.concat([Yn,Gn,"boxSizing","max"+Ui,"max"+Ec,"position",je,Ut,Ut+Ro,Ut+Eo,Ut+Ao,Ut+bo]),F0=function(t,e,r){Pi(r);var i=t._gsap;if(i.spacerIsNative)Pi(i.spacerState);else if(t._gsap.swappedIn){var o=e.parentNode;o&&(o.insertBefore(t,e),o.removeChild(e))}t._gsap.swappedIn=!1},Oa=function(t,e,r,i){if(!t._gsap.swappedIn){for(var o=bl.length,s=e.style,a=t.style,l;o--;)l=bl[o],s[l]=r[l];s.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(s.display="inline-block"),a[wc]=a[Tc]="auto",s.flexBasis=r.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Yn]=Gs(t,Ee)+Xt,s[Gn]=Gs(t,Ht)+Xt,s[Ut]=a[je]=a[Ah]=a[Rh]="0",Pi(i),a[Yn]=a["max"+Ui]=r[Yn],a[Gn]=a["max"+Ec]=r[Gn],a[Ut]=r[Ut],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},U0=/([A-Z])/g,Pi=function(t){if(t){var e=t.t.style,r=t.length,i=0,o,s;for((t.t._gsap||F.core.getCache(t.t)).uncache=1;i<r;i+=2)s=t[i+1],o=t[i],s?e[o]=s:e[o]&&e.removeProperty(o.replace(U0,"-$1").toLowerCase())}},us=function(t){for(var e=Ss.length,r=t.style,i=[],o=0;o<e;o++)i.push(Ss[o],r[Ss[o]]);return i.t=t,i},q0=function(t,e,r){for(var i=[],o=t.length,s=r?8:0,a;s<o;s+=2)a=t[s],i.push(a,a in e?e[a]:t[s+1]);return i.t=t.t,i},Ms={left:0,top:0},Su=function(t,e,r,i,o,s,a,l,c,u,p,d,h,_){ue(t)&&(t=t(l)),Fe(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?bs("0"+t.substr(3),r):0));var m=h?h.time():0,v,b,E;if(h&&h.seek(0),isNaN(t)||(t=+t),co(t))h&&(t=F.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,t)),a&&Rs(a,r,i,!0);else{ue(e)&&(e=e(l));var y=(t||"0").split(" "),w,x,k,A;E=Re(e,l)||dt,w=Hr(E)||{},(!w||!w.left&&!w.top)&&Ze(E).display==="none"&&(A=E.style.display,E.style.display="block",w=Hr(E),A?E.style.display=A:E.style.removeProperty("display")),x=bs(y[0],w[i.d]),k=bs(y[1]||"0",r),t=w[i.p]-c[i.p]-u+x+o-k,a&&Rs(a,k,i,r-k<20||a._isStart&&k>20),r-=r-k}if(_&&(l[_]=t||-.001,t<0&&(t=0)),s){var D=t+r,L=s._isStart;v="scroll"+i.d2,Rs(s,D,i,L&&D>20||!L&&(p?Math.max(dt[v],qe[v]):s.parentNode[v])<=D+1),p&&(c=Hr(a),p&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+Xt))}return h&&E&&(v=Hr(E),h.seek(d),b=Hr(E),h._caScrollDist=v[i.p]-b[i.p],t=t/h._caScrollDist*d),h&&h.seek(m),h?t:Math.round(t)},W0=/(webkit|moz|length|cssText|inset)/i,Mu=function(t,e,r,i){if(t.parentNode!==e){var o=t.style,s,a;if(e===dt){t._stOrig=o.cssText,a=Ze(t);for(s in a)!+s&&!W0.test(s)&&a[s]&&typeof o[s]=="string"&&s!=="0"&&(o[s]=a[s]);o.top=r,o.left=i}else o.cssText=t._stOrig;F.core.getCache(t).uncache=1,e.appendChild(t)}},Oh=function(t,e,r){var i=e,o=i;return function(s){var a=Math.round(t());return a!==i&&a!==o&&Math.abs(a-i)>3&&Math.abs(a-o)>3&&(s=a,r&&r()),o=i,i=Math.round(s),i}},fs=function(t,e,r){var i={};i[e.p]="+="+r,F.set(t,i)},Lu=function(t,e){var r=xn(t,e),i="_scroll"+e.p2,o=function s(a,l,c,u,p){var d=s.tween,h=l.onComplete,_={};c=c||r();var m=Oh(r,c,function(){d.kill(),s.tween=0});return p=u&&p||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return m(c+u*d.ratio+p*d.ratio*d.ratio)},l.onUpdate=function(){nt.cache++,s.tween&&Br()},l.onComplete=function(){s.tween=0,h&&h.call(d)},d=s.tween=F.to(t,l),d};return t[i]=r,r.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},Gt(t,"wheel",r.wheelHandler),B.isTouch&&Gt(t,"touchmove",r.wheelHandler),o},B=(function(){function n(e,r){gi||n.register(F)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xl(this),this.init(e,r)}var t=n.prototype;return t.init=function(r,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ao){this.update=this.refresh=this.kill=Tr;return}r=wu(Fe(r)||co(r)||r.nodeType?{trigger:r}:r,ls);var o=r,s=o.onUpdate,a=o.toggleClass,l=o.id,c=o.onToggle,u=o.onRefresh,p=o.scrub,d=o.trigger,h=o.pin,_=o.pinSpacing,m=o.invalidateOnRefresh,v=o.anticipatePin,b=o.onScrubComplete,E=o.onSnapComplete,y=o.once,w=o.snap,x=o.pinReparent,k=o.pinSpacer,A=o.containerAnimation,D=o.fastScrollEnd,L=o.preventOverlaps,P=r.horizontal||r.containerAnimation&&r.horizontal!==!1?Ee:Ht,W=!p&&p!==0,O=Re(r.scroller||rt),z=F.core.getCache(O),V=Zn(O),lt=("pinType"in r?r.pinType:pn(O,"pinType")||V&&"fixed")==="fixed",ot=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],X=W&&r.toggleActions.split(" "),ct="markers"in r?r.markers:ls.markers,mt=V?0:parseFloat(Ze(O)["border"+P.p2+Ui])||0,T=this,yt=r.onRefreshInit&&function(){return r.onRefreshInit(T)},de=P0(O,V,P),nr=k0(O,V),At=0,Kt=0,ee=0,It=xn(O,P),pe,re,jr,me,_e,ut,kt,be,Oe,S,Ce,Cr,Zr,St,Nr,Qr,Mn,Bt,Jr,Dt,ir,Ve,Ir,Vi,Ft,Zo,Fr,si,ai,tn,Ln,it,Pn,or,sr,ar,kn,li,Ur;if(T._startClamp=T._endClamp=!1,T._dir=P,v*=45,T.scroller=O,T.scroll=A?A.time.bind(A):It,me=It(),T.vars=r,i=i||r.animation,"refreshPriority"in r&&(gh=1,r.refreshPriority===-9999&&(So=T)),z.tweenScroll=z.tweenScroll||{top:Lu(O,Ht),left:Lu(O,Ee)},T.tweenTo=pe=z.tweenScroll[P.p],T.scrubDuration=function(N){Pn=co(N)&&N,Pn?it?it.duration(N):it=F.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Pn,paused:!0,onComplete:function(){return b&&b(T)}}):(it&&it.progress(1).kill(),it=0)},i&&(i.vars.lazy=!1,i._initted&&!T.isReverted||i.vars.immediateRender!==!1&&r.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),T.animation=i.pause(),i.scrollTrigger=T,T.scrubDuration(p),tn=0,l||(l=i.vars.id)),w&&((!Fn(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in dt.style&&F.set(V?[dt,qe]:O,{scrollBehavior:"auto"}),nt.forEach(function(N){return ue(N)&&N.target===(V?pt.scrollingElement||qe:O)&&(N.smooth=!1)}),jr=ue(w.snapTo)?w.snapTo:w.snapTo==="labels"?O0(i):w.snapTo==="labelsDirectional"?C0(i):w.directional!==!1?function(N,Y){return bc(w.snapTo)(N,ae()-Kt<500?0:Y.direction)}:F.utils.snap(w.snapTo),or=w.duration||{min:.1,max:2},or=Fn(or)?To(or.min,or.max):To(or,or),sr=F.delayedCall(w.delay||Pn/2||.1,function(){var N=It(),Y=ae()-Kt<500,q=pe.tween;if((Y||Math.abs(T.getVelocity())<10)&&!q&&!ua&&At!==N){var G=(N-ut)/St,$t=i&&!W?i.totalProgress():G,st=Y?0:($t-Ln)/(ae()-so)*1e3||0,Ot=F.utils.clamp(-G,1-G,fi(st/2)*st/.185),ne=G+(w.inertia===!1?0:Ot),Mt,xt,_t=w,lr=_t.onStart,wt=_t.onInterrupt,Ne=_t.onComplete;if(Mt=jr(ne,T),co(Mt)||(Mt=ne),xt=Math.max(0,Math.round(ut+Mt*St)),N<=kt&&N>=ut&&xt!==N){if(q&&!q._initted&&q.data<=fi(xt-N))return;w.inertia===!1&&(Ot=Mt-G),pe(xt,{duration:or(fi(Math.max(fi(ne-$t),fi(Mt-$t))*.185/st/.05||0)),ease:w.ease||"power3",data:fi(xt-N),onInterrupt:function(){return sr.restart(!0)&&wt&&ui(T,wt)},onComplete:function(){T.update(),At=It(),i&&!W&&(it?it.resetTo("totalProgress",Mt,i._tTime/i._tDur):i.progress(Mt)),tn=Ln=i&&!W?i.totalProgress():T.progress,E&&E(T),Ne&&ui(T,Ne)}},N,Ot*St,xt-N-Ot*St),lr&&ui(T,lr,pe.tween)}}else T.isActive&&At!==N&&sr.restart(!0)}).pause()),l&&(wl[l]=T),d=T.trigger=Re(d||h!==!0&&h),Ur=d&&d._gsap&&d._gsap.stRevert,Ur&&(Ur=Ur(T)),h=h===!0?d:Re(h),Fe(a)&&(a={targets:d,className:a}),h&&(_===!1||_===je||(_=!_&&h.parentNode&&h.parentNode.style&&Ze(h.parentNode).display==="flex"?!1:Ut),T.pin=h,re=F.core.getCache(h),re.spacer?Nr=re.pinState:(k&&(k=Re(k),k&&!k.nodeType&&(k=k.current||k.nativeElement),re.spacerIsNative=!!k,k&&(re.spacerState=us(k))),re.spacer=Bt=k||pt.createElement("div"),Bt.classList.add("pin-spacer"),l&&Bt.classList.add("pin-spacer-"+l),re.pinState=Nr=us(h)),r.force3D!==!1&&F.set(h,{force3D:!0}),T.spacer=Bt=re.spacer,ai=Ze(h),Vi=ai[_+P.os2],Dt=F.getProperty(h),ir=F.quickSetter(h,P.a,Xt),Oa(h,Bt,ai),Mn=us(h)),ct){Cr=Fn(ct)?wu(ct,Eu):Eu,S=cs("scroller-start",l,O,P,Cr,0),Ce=cs("scroller-end",l,O,P,Cr,0,S),Jr=S["offset"+P.op.d2];var Ki=Re(pn(O,"content")||O);be=this.markerStart=cs("start",l,Ki,P,Cr,Jr,0,A),Oe=this.markerEnd=cs("end",l,Ki,P,Cr,Jr,0,A),A&&(li=F.quickSetter([be,Oe],P.a,Xt)),!lt&&!(Sr.length&&pn(O,"fixedMarkers")===!0)&&(D0(V?dt:O),F.set([S,Ce],{force3D:!0}),Zo=F.quickSetter(S,P.a,Xt),si=F.quickSetter(Ce,P.a,Xt))}if(A){var K=A.vars.onUpdate,H=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){T.update(0,0,1),K&&K.apply(A,H||[])})}if(T.previous=function(){return J[J.indexOf(T)-1]},T.next=function(){return J[J.indexOf(T)+1]},T.revert=function(N,Y){if(!Y)return T.kill(!0);var q=N!==!1||!T.enabled,G=se;q!==T.isReverted&&(q&&(ar=Math.max(It(),T.scroll.rec||0),ee=T.progress,kn=i&&i.progress()),be&&[be,Oe,S,Ce].forEach(function($t){return $t.style.display=q?"none":"block"}),q&&(se=T,T.update(q)),h&&(!x||!T.isActive)&&(q?F0(h,Bt,Nr):Oa(h,Bt,Ze(h),Ft)),q||T.update(q),se=G,T.isReverted=q)},T.refresh=function(N,Y,q,G){if(!((se||!T.enabled)&&!Y)){if(h&&N&&tr){Gt(n,"scrollEnd",Mh);return}!Te&&yt&&yt(T),se=T,pe.tween&&!q&&(pe.tween.kill(),pe.tween=0),it&&it.pause(),m&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(en){return en.vars.immediateRender&&en.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;var $t=de(),st=nr(),Ot=A?A.duration():Ar(O,P),ne=St<=.01||!St,Mt=0,xt=G||0,_t=Fn(q)?q.end:r.end,lr=r.endTrigger||d,wt=Fn(q)?q.start:r.start||(r.start===0||!d?0:h?"0 0":"0 100%"),Ne=T.pinnedContainer=r.pinnedContainer&&Re(r.pinnedContainer,T),mr=d&&Math.max(0,J.indexOf(T))||0,jt=mr,Zt,ie,Dn,Qo,oe,Wt,_r,xa,Kc,ji,gr,Zi,Jo;for(ct&&Fn(q)&&(Zi=F.getProperty(S,P.p),Jo=F.getProperty(Ce,P.p));jt-- >0;)Wt=J[jt],Wt.end||Wt.refresh(0,1)||(se=T),_r=Wt.pin,_r&&(_r===d||_r===h||_r===Ne)&&!Wt.isReverted&&(ji||(ji=[]),ji.unshift(Wt),Wt.revert(!0,!0)),Wt!==J[jt]&&(mr--,jt--);for(ue(wt)&&(wt=wt(T)),wt=vu(wt,"start",T),ut=Su(wt,d,$t,P,It(),be,S,T,st,mt,lt,Ot,A,T._startClamp&&"_startClamp")||(h?-.001:0),ue(_t)&&(_t=_t(T)),Fe(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(Fe(wt)?wt.split(" ")[0]:"")+_t:(Mt=bs(_t.substr(2),$t),_t=Fe(wt)?wt:(A?F.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,ut):ut)+Mt,lr=d)),_t=vu(_t,"end",T),kt=Math.max(ut,Su(_t||(lr?"100% 0":Ot),lr,$t,P,It()+Mt,Oe,Ce,T,st,mt,lt,Ot,A,T._endClamp&&"_endClamp"))||-.001,Mt=0,jt=mr;jt--;)Wt=J[jt]||{},_r=Wt.pin,_r&&Wt.start-Wt._pinPush<=ut&&!A&&Wt.end>0&&(Zt=Wt.end-(T._startClamp?Math.max(0,Wt.start):Wt.start),(_r===d&&Wt.start-Wt._pinPush<ut||_r===Ne)&&isNaN(wt)&&(Mt+=Zt*(1-Wt.progress)),_r===h&&(xt+=Zt));if(ut+=Mt,kt+=Mt,T._startClamp&&(T._startClamp+=Mt),T._endClamp&&!Te&&(T._endClamp=kt||-.001,kt=Math.min(kt,Ar(O,P))),St=kt-ut||(ut-=.01)&&.001,ne&&(ee=F.utils.clamp(0,1,F.utils.normalize(ut,kt,ar))),T._pinPush=xt,be&&Mt&&(Zt={},Zt[P.a]="+="+Mt,Ne&&(Zt[P.p]="-="+It()),F.set([be,Oe],Zt)),h&&!(Tl&&T.end>=Ar(O,P)))Zt=Ze(h),Qo=P===Ht,Dn=It(),Ve=parseFloat(Dt(P.a))+xt,!Ot&&kt>1&&(gr=(V?pt.scrollingElement||qe:O).style,gr={style:gr,value:gr["overflow"+P.a.toUpperCase()]},V&&Ze(dt)["overflow"+P.a.toUpperCase()]!=="scroll"&&(gr.style["overflow"+P.a.toUpperCase()]="scroll")),Oa(h,Bt,Zt),Mn=us(h),ie=Hr(h,!0),xa=lt&&xn(O,Qo?Ee:Ht)(),_?(Ft=[_+P.os2,St+xt+Xt],Ft.t=Bt,jt=_===Ut?Gs(h,P)+St+xt:0,jt&&(Ft.push(P.d,jt+Xt),Bt.style.flexBasis!=="auto"&&(Bt.style.flexBasis=jt+Xt)),Pi(Ft),Ne&&J.forEach(function(en){en.pin===Ne&&en.vars.pinSpacing!==!1&&(en._subPinOffset=!0)}),lt&&It(ar)):(jt=Gs(h,P),jt&&Bt.style.flexBasis!=="auto"&&(Bt.style.flexBasis=jt+Xt)),lt&&(oe={top:ie.top+(Qo?Dn-ut:xa)+Xt,left:ie.left+(Qo?xa:Dn-ut)+Xt,boxSizing:"border-box",position:"fixed"},oe[Yn]=oe["max"+Ui]=Math.ceil(ie.width)+Xt,oe[Gn]=oe["max"+Ec]=Math.ceil(ie.height)+Xt,oe[je]=oe[je+Ro]=oe[je+Eo]=oe[je+Ao]=oe[je+bo]="0",oe[Ut]=Zt[Ut],oe[Ut+Ro]=Zt[Ut+Ro],oe[Ut+Eo]=Zt[Ut+Eo],oe[Ut+Ao]=Zt[Ut+Ao],oe[Ut+bo]=Zt[Ut+bo],Qr=q0(Nr,oe,x),Te&&It(0)),i?(Kc=i._initted,La(1),i.render(i.duration(),!0,!0),Ir=Dt(P.a)-Ve+St+xt,Fr=Math.abs(St-Ir)>1,lt&&Fr&&Qr.splice(Qr.length-2,2),i.render(0,!0,!0),Kc||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),La(0)):Ir=St,gr&&(gr.value?gr.style["overflow"+P.a.toUpperCase()]=gr.value:gr.style.removeProperty("overflow-"+P.a));else if(d&&It()&&!A)for(ie=d.parentNode;ie&&ie!==dt;)ie._pinOffset&&(ut-=ie._pinOffset,kt-=ie._pinOffset),ie=ie.parentNode;ji&&ji.forEach(function(en){return en.revert(!1,!0)}),T.start=ut,T.end=kt,me=_e=Te?ar:It(),!A&&!Te&&(me<ar&&It(ar),T.scroll.rec=0),T.revert(!1,!0),Kt=ae(),sr&&(At=-1,sr.restart(!0)),se=0,i&&W&&(i._initted||kn)&&i.progress()!==kn&&i.progress(kn||0,!0).render(i.time(),!0,!0),(ne||ee!==T.progress||A||m||i&&!i._initted)&&(i&&!W&&(i._initted||ee||i.vars.immediateRender!==!1)&&i.totalProgress(A&&ut<-.001&&!ee?F.utils.normalize(ut,kt,0):ee,!0),T.progress=ne||(me-ut)/St===ee?0:ee),h&&_&&(Bt._pinOffset=Math.round(T.progress*Ir)),it&&it.invalidate(),isNaN(Zi)||(Zi-=F.getProperty(S,P.p),Jo-=F.getProperty(Ce,P.p),fs(S,P,Zi),fs(be,P,Zi-(G||0)),fs(Ce,P,Jo),fs(Oe,P,Jo-(G||0))),ne&&!Te&&T.update(),u&&!Te&&!Zr&&(Zr=!0,u(T),Zr=!1)}},T.getVelocity=function(){return(It()-_e)/(ae()-so)*1e3||0},T.endAnimation=function(){to(T.callbackAnimation),i&&(it?it.progress(1):i.paused()?W||to(i,T.direction<0,1):to(i,i.reversed()))},T.labelToScroll=function(N){return i&&i.labels&&(ut||T.refresh()||ut)+i.labels[N]/i.duration()*St||0},T.getTrailing=function(N){var Y=J.indexOf(T),q=T.direction>0?J.slice(0,Y).reverse():J.slice(Y+1);return(Fe(N)?q.filter(function(G){return G.vars.preventOverlaps===N}):q).filter(function(G){return T.direction>0?G.end<=ut:G.start>=kt})},T.update=function(N,Y,q){if(!(A&&!q&&!N)){var G=Te===!0?ar:T.scroll(),$t=N?0:(G-ut)/St,st=$t<0?0:$t>1?1:$t||0,Ot=T.progress,ne,Mt,xt,_t,lr,wt,Ne,mr;if(Y&&(_e=me,me=A?It():G,w&&(Ln=tn,tn=i&&!W?i.totalProgress():st)),v&&h&&!se&&!is&&tr&&(!st&&ut<G+(G-_e)/(ae()-so)*v?st=1e-4:st===1&&kt>G+(G-_e)/(ae()-so)*v&&(st=.9999)),st!==Ot&&T.enabled){if(ne=T.isActive=!!st&&st<1,Mt=!!Ot&&Ot<1,wt=ne!==Mt,lr=wt||!!st!=!!Ot,T.direction=st>Ot?1:-1,T.progress=st,lr&&!se&&(xt=st&&!Ot?0:st===1?1:Ot===1?2:3,W&&(_t=!wt&&X[xt+1]!=="none"&&X[xt+1]||X[xt],mr=i&&(_t==="complete"||_t==="reset"||_t in i))),L&&(wt||mr)&&(mr||p||!i)&&(ue(L)?L(T):T.getTrailing(L).forEach(function(Dn){return Dn.endAnimation()})),W||(it&&!se&&!is?(it._dp._time-it._start!==it._time&&it.render(it._dp._time-it._start),it.resetTo?it.resetTo("totalProgress",st,i._tTime/i._tDur):(it.vars.totalProgress=st,it.invalidate().restart())):i&&i.totalProgress(st,!!(se&&(Kt||N)))),h){if(N&&_&&(Bt.style[_+P.os2]=Vi),!lt)ir(lo(Ve+Ir*st));else if(lr){if(Ne=!N&&st>Ot&&kt+1>G&&G+1>=Ar(O,P),x)if(!N&&(ne||Ne)){var jt=Hr(h,!0),Zt=G-ut;Mu(h,dt,jt.top+(P===Ht?Zt:0)+Xt,jt.left+(P===Ht?0:Zt)+Xt)}else Mu(h,Bt);Pi(ne||Ne?Qr:Mn),Fr&&st<1&&ne||ir(Ve+(st===1&&!Ne?Ir:0))}}w&&!pe.tween&&!se&&!is&&sr.restart(!0),a&&(wt||y&&st&&(st<1||!Pa))&&Io(a.targets).forEach(function(Dn){return Dn.classList[ne||y?"add":"remove"](a.className)}),s&&!W&&!N&&s(T),lr&&!se?(W&&(mr&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),s&&s(T)),(wt||!Pa)&&(c&&wt&&ui(T,c),ot[xt]&&ui(T,ot[xt]),y&&(st===1?T.kill(!1,1):ot[xt]=0),wt||(xt=st===1?1:3,ot[xt]&&ui(T,ot[xt]))),D&&!ne&&Math.abs(T.getVelocity())>(co(D)?D:2500)&&(to(T.callbackAnimation),it?it.progress(1):to(i,_t==="reverse"?1:!st,1))):W&&s&&!se&&s(T)}if(si){var ie=A?G/A.duration()*(A._caScrollDist||0):G;Zo(ie+(S._isFlipped?1:0)),si(ie)}li&&li(-G/A.duration()*(A._caScrollDist||0))}},T.enable=function(N,Y){T.enabled||(T.enabled=!0,Gt(O,"resize",uo),V||Gt(O,"scroll",hi),yt&&Gt(n,"refreshInit",yt),N!==!1&&(T.progress=ee=0,me=_e=At=It()),Y!==!1&&T.refresh())},T.getTween=function(N){return N&&pe?pe.tween:it},T.setPositions=function(N,Y,q,G){if(A){var $t=A.scrollTrigger,st=A.duration(),Ot=$t.end-$t.start;N=$t.start+Ot*N/st,Y=$t.start+Ot*Y/st}T.refresh(!1,!1,{start:yu(N,q&&!!T._startClamp),end:yu(Y,q&&!!T._endClamp)},G),T.update()},T.adjustPinSpacing=function(N){if(Ft&&N){var Y=Ft.indexOf(P.d)+1;Ft[Y]=parseFloat(Ft[Y])+N+Xt,Ft[1]=parseFloat(Ft[1])+N+Xt,Pi(Ft)}},T.disable=function(N,Y){if(N!==!1&&T.revert(!0,!0),T.enabled&&(T.enabled=T.isActive=!1,Y||it&&it.pause(),ar=0,re&&(re.uncache=1),yt&&Yt(n,"refreshInit",yt),sr&&(sr.pause(),pe.tween&&pe.tween.kill()&&(pe.tween=0)),!V)){for(var q=J.length;q--;)if(J[q].scroller===O&&J[q]!==T)return;Yt(O,"resize",uo),V||Yt(O,"scroll",hi)}},T.kill=function(N,Y){T.disable(N,Y),it&&!Y&&it.kill(),l&&delete wl[l];var q=J.indexOf(T);q>=0&&J.splice(q,1),q===xe&&As>0&&xe--,q=0,J.forEach(function(G){return G.scroller===T.scroller&&(q=1)}),q||Te||(T.scroll.rec=0),i&&(i.scrollTrigger=null,N&&i.revert({kill:!1}),Y||i.kill()),be&&[be,Oe,S,Ce].forEach(function(G){return G.parentNode&&G.parentNode.removeChild(G)}),So===T&&(So=0),h&&(re&&(re.uncache=1),q=0,J.forEach(function(G){return G.pin===h&&q++}),q||(re.spacer=0)),r.onKill&&r.onKill(T)},J.push(T),T.enable(!1,!1),Ur&&Ur(T),i&&i.add&&!St){var ft=T.update;T.update=function(){T.update=ft,nt.cache++,ut||kt||T.refresh()},F.delayedCall(.01,T.update),St=.01,ut=kt=0}else T.refresh();h&&I0()},n.register=function(r){return gi||(F=r||wh(),Th()&&window.document&&n.enable(),gi=ao),gi},n.defaults=function(r){if(r)for(var i in r)ls[i]=r[i];return ls},n.disable=function(r,i){ao=0,J.forEach(function(s){return s[i?"kill":"disable"](r)}),Yt(rt,"wheel",hi),Yt(pt,"scroll",hi),clearInterval(ns),Yt(pt,"touchcancel",Tr),Yt(dt,"touchstart",Tr),ss(Yt,pt,"pointerdown,touchstart,mousedown",xu),ss(Yt,pt,"pointerup,touchend,mouseup",Tu),Ys.kill(),os(Yt);for(var o=0;o<nt.length;o+=3)as(Yt,nt[o],nt[o+1]),as(Yt,nt[o],nt[o+2])},n.enable=function(){if(rt=window,pt=document,qe=pt.documentElement,dt=pt.body,F){if(Io=F.utils.toArray,To=F.utils.clamp,xl=F.core.context||Tr,La=F.core.suppressOverwrites||Tr,yc=rt.history.scrollRestoration||"auto",El=rt.pageYOffset||0,F.core.globals("ScrollTrigger",n),dt){ao=1,Li=document.createElement("div"),Li.style.height="100vh",Li.style.position="absolute",Dh(),L0(),Nt.register(F),n.isTouch=Nt.isTouch,sn=Nt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yl=Nt.isTouch===1,Gt(rt,"wheel",hi),vc=[rt,pt,qe,dt],F.matchMedia?(n.matchMedia=function(u){var p=F.matchMedia(),d;for(d in u)p.add(d,u[d]);return p},F.addEventListener("matchMediaInit",function(){Ph(),Rc()}),F.addEventListener("matchMediaRevert",function(){return Lh()}),F.addEventListener("matchMedia",function(){Wn(0,1),Jn("matchMedia")}),F.matchMedia().add("(orientation: portrait)",function(){return Da(),Da})):console.warn("Requires GSAP 3.11.0 or later"),Da(),Gt(pt,"scroll",hi);var r=dt.hasAttribute("style"),i=dt.style,o=i.borderTopStyle,s=F.core.Animation.prototype,a,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Hr(dt),Ht.m=Math.round(a.top+Ht.sc())||0,Ee.m=Math.round(a.left+Ee.sc())||0,o?i.borderTopStyle=o:i.removeProperty("border-top-style"),r||(dt.setAttribute("style",""),dt.removeAttribute("style")),ns=setInterval(bu,250),F.delayedCall(.5,function(){return is=0}),Gt(pt,"touchcancel",Tr),Gt(dt,"touchstart",Tr),ss(Gt,pt,"pointerdown,touchstart,mousedown",xu),ss(Gt,pt,"pointerup,touchend,mouseup",Tu),vl=F.utils.checkPrefix("transform"),Ss.push(vl),gi=ae(),Ys=F.delayedCall(.2,Wn).pause(),vi=[pt,"visibilitychange",function(){var u=rt.innerWidth,p=rt.innerHeight;pt.hidden?(_u=u,gu=p):(_u!==u||gu!==p)&&uo()},pt,"DOMContentLoaded",Wn,rt,"load",Wn,rt,"resize",uo],os(Gt),J.forEach(function(u){return u.enable(0,1)}),l=0;l<nt.length;l+=3)as(Yt,nt[l],nt[l+1]),as(Yt,nt[l],nt[l+2])}else if(pt){var c=function u(){n.enable(),pt.removeEventListener("DOMContentLoaded",u)};pt.addEventListener("DOMContentLoaded",c)}}},n.config=function(r){"limitCallbacks"in r&&(Pa=!!r.limitCallbacks);var i=r.syncInterval;i&&clearInterval(ns)||(ns=i)&&setInterval(bu,i),"ignoreMobileResize"in r&&(yl=n.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(os(Yt)||os(Gt,r.autoRefreshEvents||"none"),vh=(r.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(r,i){var o=Re(r),s=nt.indexOf(o),a=Zn(o);~s&&nt.splice(s,a?6:2),i&&(a?Sr.unshift(rt,i,dt,i,qe,i):Sr.unshift(o,i))},n.clearMatchMedia=function(r){J.forEach(function(i){return i._ctx&&i._ctx.query===r&&i._ctx.kill(!0,!0)})},n.isInViewport=function(r,i,o){var s=(Fe(r)?Re(r):r).getBoundingClientRect(),a=s[o?Yn:Gn]*i||0;return o?s.right-a>0&&s.left+a<rt.innerWidth:s.bottom-a>0&&s.top+a<rt.innerHeight},n.positionInViewport=function(r,i,o){Fe(r)&&(r=Re(r));var s=r.getBoundingClientRect(),a=s[o?Yn:Gn],l=i==null?a/2:i in Vs?Vs[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return o?(s.left+l)/rt.innerWidth:(s.top+l)/rt.innerHeight},n.killAll=function(r){if(J.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),r!==!0){var i=Qn.killAll||[];Qn={},i.forEach(function(o){return o()})}},n})();B.version="3.15.0";B.saveStyles=function(n){return n?Io(n).forEach(function(t){if(t&&t.style){var e=Ie.indexOf(t);e>=0&&Ie.splice(e,5),Ie.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),F.core.getCache(t),xl())}}):Ie};B.revert=function(n,t){return Rc(!n,t)};B.create=function(n,t){return new B(n,t)};B.refresh=function(n){return n?uo(!0):(gi||B.register())&&Wn(!0)};B.update=function(n){return++nt.cache&&Br(n===!0?2:0)};B.clearScrollMemory=kh;B.maxScroll=function(n,t){return Ar(n,t?Ee:Ht)};B.getScrollFunc=function(n,t){return xn(Re(n),t?Ee:Ht)};B.getById=function(n){return wl[n]};B.getAll=function(){return J.filter(function(n){return n.vars.id!=="ScrollSmoother"})};B.isScrolling=function(){return!!tr};B.snapDirectional=bc;B.addEventListener=function(n,t){var e=Qn[n]||(Qn[n]=[]);~e.indexOf(t)||e.push(t)};B.removeEventListener=function(n,t){var e=Qn[n],r=e&&e.indexOf(t);r>=0&&e.splice(r,1)};B.batch=function(n,t){var e=[],r={},i=t.interval||.016,o=t.batchMax||1e9,s=function(c,u){var p=[],d=[],h=F.delayedCall(i,function(){u(p,d),p=[],d=[]}).pause();return function(_){p.length||h.restart(!0),p.push(_.trigger),d.push(_),o<=p.length&&h.progress(1)}},a;for(a in t)r[a]=a.substr(0,2)==="on"&&ue(t[a])&&a!=="onRefreshInit"?s(a,t[a]):t[a];return ue(o)&&(o=o(),Gt(B,"refresh",function(){return o=t.batchMax()})),Io(n).forEach(function(l){var c={};for(a in r)c[a]=r[a];c.trigger=l,e.push(B.create(c))}),e};var Pu=function(t,e,r,i){return e>i?t(i):e<0&&t(0),r>i?(i-e)/(r-e):r<0?e/(e-r):1},Ca=function n(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Nt.isTouch?" pinch-zoom":""):"none",t===qe&&n(dt,e)},hs={auto:1,scroll:1},X0=function(t){var e=t.event,r=t.target,i=t.axis,o=(e.changedTouches?e.changedTouches[0]:e).target,s=o._gsap||F.core.getCache(o),a=ae(),l;if(!s._isScrollT||a-s._isScrollT>2e3){for(;o&&o!==dt&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(hs[(l=Ze(o)).overflowY]||hs[l.overflowX]));)o=o.parentNode;s._isScroll=o&&o!==r&&!Zn(o)&&(hs[(l=Ze(o)).overflowY]||hs[l.overflowX]),s._isScrollT=a}(s._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Ch=function(t,e,r,i){return Nt.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&X0,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return r&&Gt(pt,Nt.eventTypes[0],Du,!1,!0)},onDisable:function(){return Yt(pt,Nt.eventTypes[0],Du,!0)}})},H0=/(input|label|select|textarea)/i,ku,Du=function(t){var e=H0.test(t.target.tagName);(e||ku)&&(t._gsapAllow=!0,ku=e)},z0=function(t){Fn(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,r=e.normalizeScrollX,i=e.momentum,o=e.allowNestedScroll,s=e.onRelease,a,l,c=Re(t.target)||qe,u=F.core.globals().ScrollSmoother,p=u&&u.get(),d=sn&&(t.content&&Re(t.content)||p&&t.content!==!1&&!p.smooth()&&p.content()),h=xn(c,Ht),_=xn(c,Ee),m=1,v=(Nt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,b=0,E=ue(i)?function(){return i(a)}:function(){return i||2.8},y,w,x=Ch(c,t.type,!0,o),k=function(){return w=!1},A=Tr,D=Tr,L=function(){l=Ar(c,Ht),D=To(sn?1:0,l),r&&(A=To(0,Ar(c,Ee))),y=Vn},P=function(){d._gsap.y=lo(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},W=function(){if(w){requestAnimationFrame(k);var ct=lo(a.deltaY/2),mt=D(h.v-ct);if(d&&mt!==h.v+h.offset){h.offset=mt-h.v;var T=lo((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",d._gsap.y=T+"px",h.cacheID=nt.cache,Br()}return!0}h.offset&&P(),w=!0},O,z,V,lt,ot=function(){L(),O.isActive()&&O.vars.scrollY>l&&(h()>l?O.progress(1)&&h(l):O.resetTo("scrollY",l))};return d&&F.set(d,{y:"+=0"}),t.ignoreCheck=function(X){return sn&&X.type==="touchmove"&&W()||m>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){w=!1;var X=m;m=lo((rt.visualViewport&&rt.visualViewport.scale||1)/v),O.pause(),X!==m&&Ca(c,m>1.01?!0:r?!1:"x"),z=_(),V=h(),L(),y=Vn},t.onRelease=t.onGestureStart=function(X,ct){if(h.offset&&P(),!ct)lt.restart(!0);else{nt.cache++;var mt=E(),T,yt;r&&(T=_(),yt=T+mt*.05*-X.velocityX/.227,mt*=Pu(_,T,yt,Ar(c,Ee)),O.vars.scrollX=A(yt)),T=h(),yt=T+mt*.05*-X.velocityY/.227,mt*=Pu(h,T,yt,Ar(c,Ht)),O.vars.scrollY=D(yt),O.invalidate().duration(mt).play(.01),(sn&&O.vars.scrollY>=l||T>=l-1)&&F.to({},{onUpdate:ot,duration:mt})}s&&s(X)},t.onWheel=function(){O._ts&&O.pause(),ae()-b>1e3&&(y=0,b=ae())},t.onChange=function(X,ct,mt,T,yt){if(Vn!==y&&L(),ct&&r&&_(A(T[2]===ct?z+(X.startX-X.x):_()+ct-T[1])),mt){h.offset&&P();var de=yt[2]===mt,nr=de?V+X.startY-X.y:h()+mt-yt[1],At=D(nr);de&&nr!==At&&(V+=At-nr),h(At)}(mt||ct)&&Br()},t.onEnable=function(){Ca(c,r?!1:"x"),B.addEventListener("refresh",ot),Gt(rt,"resize",ot),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),x.enable()},t.onDisable=function(){Ca(c,!0),Yt(rt,"resize",ot),B.removeEventListener("refresh",ot),x.kill()},t.lockAxis=t.lockAxis!==!1,a=new Nt(t),a.iOS=sn,sn&&!h()&&h(1),sn&&F.ticker.add(Tr),lt=a._dc,O=F.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Oh(h,h(),function(){return O.pause()})},onUpdate:Br,onComplete:lt.vars.onComplete}),a};B.sort=function(n){if(ue(n))return J.sort(n);var t=rt.pageYOffset||0;return B.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+rt.innerHeight}),J.sort(n||function(e,r){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})};B.observe=function(n){return new Nt(n)};B.normalizeScroll=function(n){if(typeof n>"u")return ye;if(n===!0&&ye)return ye.enable();if(n===!1){ye&&ye.kill(),ye=n;return}var t=n instanceof Nt?n:z0(n);return ye&&ye.target===t.target&&ye.kill(),Zn(t.target)&&(ye=t),t};B.core={_getVelocityProp:gl,_inputObserver:Ch,_scrollers:nt,_proxies:Sr,bridge:{ss:function(){tr||Jn("scrollStart"),tr=ae()},ref:function(){return se}}};wh()&&F.registerPlugin(B);var Ou="1.3.26";function Nh(n,t,e){return Math.max(n,Math.min(t,e))}function B0(n,t,e){return(1-e)*n+e*t}function $0(n,t,e,r){return B0(n,t,1-Math.exp(-e*r))}function Y0(n,t){return(n%t+t)%t}var G0=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(n){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=n;const e=Nh(0,this.currentTime/this.duration,1);t=e>=1;const r=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=$0(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(n,t,{lerp:e,duration:r,easing:i,onStart:o,onUpdate:s}){this.from=this.value=n,this.to=t,this.lerp=e,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=s}};function V0(n,t){let e;return function(...r){clearTimeout(e),e=setTimeout(()=>{e=void 0,n.apply(this,r)},t)}}var K0=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(n,t,{autoResize:e=!0,debounce:r=250}={}){this.wrapper=n,this.content=t,e&&(this.debouncedResize=V0(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ih=class{events={};emit(n,...t){const e=this.events[n]||[];for(let r=0,i=e.length;r<i;r++)e[r]?.(...t)}on(n,t){return this.events[n]?this.events[n].push(t):this.events[n]=[t],()=>{this.events[n]=this.events[n]?.filter(e=>t!==e)}}off(n,t){this.events[n]=this.events[n]?.filter(e=>t!==e)}destroy(){this.events={}}};const j0=100/6,rn={passive:!1};function Cu(n,t){return n===1?j0:n===2?t:1}var Z0=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Ih;constructor(n,t={wheelMultiplier:1,touchMultiplier:1}){this.element=n,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,rn),this.element.addEventListener("touchstart",this.onTouchStart,rn),this.element.addEventListener("touchmove",this.onTouchMove,rn),this.element.addEventListener("touchend",this.onTouchEnd,rn)}on(n,t){return this.emitter.on(n,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,rn),this.element.removeEventListener("touchstart",this.onTouchStart,rn),this.element.removeEventListener("touchmove",this.onTouchMove,rn),this.element.removeEventListener("touchend",this.onTouchEnd,rn)}onTouchStart=n=>{const{clientX:t,clientY:e}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})};onTouchMove=n=>{const{clientX:t,clientY:e}=n.targetTouches?n.targetTouches[0]:n,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:n})};onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})};onWheel=n=>{let{deltaX:t,deltaY:e,deltaMode:r}=n;const i=Cu(r,this.window.width),o=Cu(r,this.window.height);t*=i,e*=o,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:n})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Nu=n=>Math.min(1,1.001-2**(-10*n));var Q0=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new G0;emitter=new Ih;dimensions;virtualScroll;constructor({wrapper:n=window,content:t=document.documentElement,eventsTarget:e=n,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:p="vertical",gestureOrientation:d=p==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:_=1,autoResize:m=!0,prevent:v,virtualScroll:b,overscroll:E=!0,autoRaf:y=!1,anchors:w=!1,autoToggle:x=!1,allowNestedScroll:k=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:D=A,stopInertiaOnNavigate:L=!1,respectReducedMotion:P=!0}={}){window.lenisVersion=Ou,window.lenis||(window.lenis={}),window.lenis.version=Ou,p==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=Nu:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:t,eventsTarget:e,smoothWheel:r,syncTouch:i,syncTouchLerp:o,touchInertiaExponent:s,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:p,touchMultiplier:h,wheelMultiplier:_,autoResize:m,prevent:v,virtualScroll:b,overscroll:E,autoRaf:y,anchors:w,autoToggle:x,allowNestedScroll:k,naiveDimensions:D,stopInertiaOnNavigate:L,respectReducedMotion:P},this.dimensions=new K0(n,t,{autoResize:m}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Z0(e,{touchMultiplier:h,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,t){return this.emitter.on(n,t)}off(n,t){return this.emitter.off(n,t)}onScrollEnd=n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=n=>{n.propertyName?.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()};setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}onClick=n=>{const t=n.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.href).map(r=>new URL(r.href)),e=new URL(window.location.href);if(this.options.anchors){const r=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(r){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=decodeURIComponent(r.hash);this.scrollTo(o,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(r=>e.host===r.host&&e.pathname!==r.pathname)){this.reset();return}};onPointerDown=n=>{n.button===1&&this.reset()};isTouchOnSelectionHandle(n){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=n.targetTouches[0]??n.changedTouches[0];if(!e)return!1;const r=t.getRangeAt(0).getClientRects();if(r.length===0)return!1;const i=r[0],o=r[r.length-1],s=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=s,l=Math.hypot(e.clientX-o.right,e.clientY-o.bottom)<=s;return a||l}onVirtualScroll=n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:t,deltaY:e,event:r}=n;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),o=r.type.includes("wheel");if(i&&this.isIos&&(r.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=r.type==="touchstart"||r.type==="touchmove";const s=t===0&&e===0;if(this.options.syncTouch&&i&&r.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(s||a)return;let l=r.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>_ instanceof HTMLElement&&(typeof c=="function"&&c?.(_)||_.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&_.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&_.hasAttribute?.("data-lenis-prevent-horizontal")||i&&_.hasAttribute?.("data-lenis-prevent-touch")||o&&_.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let p=e;this.options.gestureOrientation==="both"?p=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(p=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const d=i&&this.options.syncTouch,h=i&&r.type==="touchend";h&&(p=Math.sign(p)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+p,{programmatic:!1,...d?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=n=>{const t=n-(this.time||n);this.time=n,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(n,{offset:t=0,immediate:e=!1,lock:r=!1,programmatic:i=!0,lerp:o=i?this.options.lerp:void 0,duration:s=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:p}={}){if(this.prefersReducedMotion&&(i?e=!0:(o=1,s=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=n,h=t;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let _=null;if(typeof d=="string"?(_=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),_||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&d?.nodeType&&(_=d),_){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?w.left:w.top}const m=_.getBoundingClientRect(),v=getComputedStyle(_),b=this.isHorizontal?Number.parseFloat(v.scrollMarginLeft):Number.parseFloat(v.scrollMarginTop),E=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(E.scrollPaddingLeft):Number.parseFloat(E.scrollPaddingTop);d=(this.isHorizontal?m.left:m.top)+this.animatedScroll-(Number.isNaN(b)?0:b)-(Number.isNaN(y)?0:y)}}if(typeof d=="number"){if(d+=h,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=d-this.animatedScroll;_>this.limit/2?d-=this.limit:_<-this.limit/2&&(d+=this.limit)}}else d=Nh(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=p??{},e){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof s=="number"&&typeof a!="function"?a=Nu:typeof a=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,d,{duration:s,easing:a,lerp:o,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(_,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),m||this.emit(),m&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:t,deltaY:e}){const r=Date.now();n._lenis||(n._lenis={});const i=n._lenis;let o,s,a,l,c,u,p,d,h,_;if(r-(i.time??0)>2e3){i.time=Date.now();const k=window.getComputedStyle(n);if(i.computedStyle=k,o=["auto","overlay","scroll"].includes(k.overflowX),s=["auto","overlay","scroll"].includes(k.overflowY),c=["auto"].includes(k.overscrollBehaviorX),u=["auto"].includes(k.overscrollBehaviorY),i.hasOverflowX=o,i.hasOverflowY=s,!(o||s))return!1;p=n.scrollWidth,d=n.scrollHeight,h=n.clientWidth,_=n.clientHeight,a=p>h,l=d>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=p,i.scrollHeight=d,i.clientWidth=h,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,o=i.hasOverflowX,s=i.hasOverflowY,p=i.scrollWidth,d=i.scrollHeight,h=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(o&&a||s&&l))return!1;const m=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let v,b,E,y,w,x;if(m==="horizontal")v=Math.round(n.scrollLeft),b=p-h,E=t,y=o,w=a,x=c;else if(m==="vertical")v=Math.round(n.scrollTop),b=d-_,E=e,y=s,w=l,x=u;else return!1;return!x&&(v>=b||v<=0)?!0:(E>0?v<b:v>0)&&y&&w}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?Y0(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};dr.registerPlugin(B);const Fh=window.matchMedia("(prefers-reduced-motion: reduce)").matches;dr.ticker.lagSmoothing(0);let mn=null;Fh||(mn=new Q0({anchors:!0,autoRaf:!1}),mn.on("scroll",B.update),dr.ticker.add(n=>mn.raf(n*1e3)));document.addEventListener("astro:before-swap",()=>{for(const n of B.getAll())n.kill()});document.addEventListener("astro:page-load",()=>{mn?.resize(),mn?.scrollTo(0,{immediate:!0}),B.refresh()});document.fonts?.ready.then(()=>B.refresh());let Iu=0,ds=0;const J0=()=>{const n=document.documentElement.scrollHeight;n!==Iu&&(Iu=n,ds&&cancelAnimationFrame(ds),ds=requestAnimationFrame(()=>{ds=0,mn?.resize(),B.refresh()}))};new ResizeObserver(J0).observe(document.documentElement);function Uh(){mn?.resize(),B.refresh()}window.__cfigScroll={lenis:mn,ScrollTrigger:B,refresh:Uh,calm:Fh};const tm=`
attribute vec2 p;
varying vec2 uv;
void main () {
  uv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0.0, 1.0);
}`,em=`
precision highp float;
uniform sampler2D fromTex, toTex;
uniform vec2 fromFit, fromOff, toFit, toOff;   // кадрирование под object-fit: cover
uniform float t;        // 0…1
uniform float grain;    // крупность дыма
uniform vec2 drift;     // куда сносит
varying vec2 uv;

float hash (vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float noise (vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

float fbm (vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { s += a * noise(p); p *= 2.02; a *= 0.5; }
  return s;
}

vec4 pick (sampler2D tex, vec2 fit, vec2 off, vec2 at) {
  // Снос уводит выборку за край кадра. Отдавать там пустоту нельзя — получается
  // вертикальная кромка поперёк экрана (видно было на раскадровке). Край
  // размазывается: за кромкой у материала ровный фон, и размазать его нечем.
  vec2 c = clamp((at - off) / fit, 0.0, 1.0);
  return texture2D(tex, c);
}

void main () {
  float n = fbm(uv * grain);
  // Уходящий сносит тем сильнее, чем дальше зашёл переход; входящий наоборот
  // подтягивается к своему месту. Величина сноса своя у каждой точки — дым
  // не двигается плитой.
  vec2 aw = drift * (0.35 + n) * t;
  vec2 to_ = drift * (0.35 + n) * (t - 1.0);
  vec4 a = pick(fromTex, fromFit, fromOff, uv + aw);
  vec4 b = pick(toTex,   toFit,   toOff,   uv + to_);
  // Порог по тому же шуму: точка принадлежит одному кадру, не обоим.
  float edge = 0.14;
  float m = smoothstep(n - edge, n + edge, t * (1.0 + 2.0 * edge) - edge);
  gl_FragColor = mix(a, b, m);
}`;function Fu(n,t,e){const r=n.createShader(t);if(n.shaderSource(r,e),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS))throw new Error(n.getShaderInfoLog(r));return r}function rm(n,t,e,r,i,o){if(!n||!t||!e||!r)return{fit:[1,1],off:[0,0]};const s=Math.max(e/n,r/t),a=n*s/e,l=t*s/r;return{fit:[a,l],off:[(1-a)*i,(1-l)*(1-o)]}}function nm(n){const t=n.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1});if(!t)return null;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0);const e=t.createProgram();if(t.attachShader(e,Fu(t,t.VERTEX_SHADER,tm)),t.attachShader(e,Fu(t,t.FRAGMENT_SHADER,em)),t.linkProgram(e),!t.getProgramParameter(e,t.LINK_STATUS))return null;t.useProgram(e);const r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);const i=t.getAttribLocation(e,"p");t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0);const o={};for(const h of["fromTex","toTex","fromFit","fromOff","toFit","toOff","t","grain","drift"])o[h]=t.getUniformLocation(e,h);const s=h=>{const _=t.createTexture();return t.activeTexture(t.TEXTURE0+h),t.bindTexture(t.TEXTURE_2D,_),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),_},a=s(0),l=s(1);t.uniform1i(o.fromTex,0),t.uniform1i(o.toTex,1);let c=0;const u=(h,_,m)=>{t.activeTexture(t.TEXTURE0+h),t.bindTexture(t.TEXTURE_2D,_);try{t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,m)}catch{}},p=h=>{const _=getComputedStyle(h.__posFrom||h).objectPosition.split(" "),m=(parseFloat(_[0])||50)/100,v=(parseFloat(_[1])||50)/100;return rm(h.videoWidth||h.naturalWidth,h.videoHeight||h.naturalHeight,n.width,n.height,m,v)};function d(h,_,m,v,b){typeof h=="function"&&(h=h()),typeof _=="function"&&(_=_());const E=Math.min(2,window.devicePixelRatio||1),y=Math.round(n.clientWidth*E),w=Math.round(n.clientHeight*E);(n.width!==y||n.height!==w)&&(n.width=y,n.height=w),t.viewport(0,0,n.width,n.height),u(0,a,h),u(1,l,_);const x=p(h),k=p(_);t.uniform2fv(o.fromFit,x.fit),t.uniform2fv(o.fromOff,x.off),t.uniform2fv(o.toFit,k.fit),t.uniform2fv(o.toOff,k.off),t.uniform1f(o.t,m),t.uniform1f(o.grain,v),t.uniform2fv(o.drift,b),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLES,0,3)}return{draw:d,run({from:h,to:_,seconds:m,grain:v=5,drift:b=[-.22,.05],onPrepare:E,onShown:y,onDone:w}){cancelAnimationFrame(c),E&&E(),d(h,_,0,v,b),y&&y();const x=performance.now(),k=A=>{const D=Math.min(1,(A-x)/(m*1e3));if(d(h,_,D,v,b),D<1){c=requestAnimationFrame(k);return}w&&w()};c=requestAnimationFrame(k)},stop(){cancelAnimationFrame(c),c=0}}}const nn="/assets/hero/video",hr=24,Mr=121,pr=[{src:`${nn}/video_1.mp4`,fps:24},{src:`${nn}/video_2.mp4`,fps:24},{src:`${nn}/video_3.mp4`,fps:24},{src:`${nn}/video_4.mp4`,fps:24},{src:`${nn}/video_HP_CFIG_horse.mp4`,fps:30},{src:`${nn}/video_cfig_re_dolgij.mp4`,fps:24,parts:[[122,24],[143,30]],hold:[{at:96,reps:"5,5,5,4,5,4,4,3,3,3,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,3,3,4,4,4,4"}]},{src:`${nn}/video_re_odchod.mp4`,fps:30,parts:[[142,30],[122,24]],hold:[{at:0,reps:"3,2,3,2,3,2,3,3,3"},{at:135,reps:"3,3,4,3,3,2,3,2,2,1,2,1,2,3,3,4,4,4"}]},{src:`${nn}/video_tk_odchod.mp4`,fps:24}],Ls=4,Na=5,im=7,di=Number(new URLSearchParams(location.search).get("rerest")??12),Ia={smooth:n=>n*n*(3-2*n),linear:n=>n,out:n=>1-(1-n)*(1-n)},pi=(n,t)=>{const e=new URLSearchParams(location.search).get(n);return e!==null&&e!==""&&Number.isFinite(+e)?+e:t},mi=Math.max(0,Math.min(30,Number(new URLSearchParams(location.search).get("tkrest")??0))),om=6,Dr=n=>pr[n]?pr[n].fps:hr,Rl=(n,t)=>(n+.5)/t,Al=(n,t)=>Math.floor(n*t+1e-6),fa=120;for(const n of pr){if(!n.parts)continue;const t={};for(const r of n.hold)r.reps.split(",").forEach((i,o)=>{t[r.at+o]=Number(i)});n.starts=[0];let e=0;for(const[r,i]of n.parts)for(let o=0;o<r;o++,e++)n.starts.push(n.starts[e]+(t[e]??fa/i))}const ti=(n,t)=>{const e=pr[n]&&pr[n].starts;return e?e[Math.max(0,Math.min(e.length-1,t))]/fa:t/Dr(n)};function sm(n,t){const e=pr[n]&&pr[n].starts;return e?(t=Math.max(0,Math.min(e.length-2,t)),(e[t]+e[t+1])/2/fa):Rl(t,Dr(n))}function Rn(n,t){const e=pr[n]&&pr[n].starts;if(!e)return Al(t,Dr(n));const r=t*fa+1e-4;let i=0,o=e.length-2;for(;i<o;){const s=i+o+1>>1;e[s]<=r?i=s:o=s-1}return i}function am(n,t){const e=Rn(n,t),r=ti(n,e),i=ti(n,e+1);return e+(i>r?Math.min(1,Math.max(0,(t-r)/(i-r))):0)}const Q=[{leaveSrc:Na,leaveTo:122+di,leaveRest:di,id:"cfig",num:"01",name:"CFIG SE",intro:579,introSrc:Ls,introTo:657,introClean:578,entry:64,alt:"CFIG SE — finanční a investiční skupina",caption:"Vize, která nás žene vpřed."},{leaveSrc:om,lead:142,scrubTrim:3,longTail:.32,introSrc:Na,introTo:122+di,introRest:di,approachSrc:Na,approachFrom:88,approachTo:122+di,approachRest:di,id:"realestate",num:"02",name:"CFIG Real Estate",intro:88,entry:64,alt:"CFIG Real Estate — měníme tvář Pardubic k lepšímu",caption:"Měníme tvář Pardubic k lepšímu"},{id:"tronexo",num:"03",name:"Tronexo",intro:68,entry:68,leaveTo:Mr-mi,leaveRest:30-mi,approachSrc:Ls,approachFrom:282,approachTo:353,scrubEnd:Number(new URLSearchParams(location.search).get("trend"))||.6,fade:{from:.13,to:Number(new URLSearchParams(location.search).get("trfade"))||.65,curve:Ia.out},alt:"TRONEXO — Be the Trader, Be the ONE.",caption:"Be the Trader, Be the ONE.",captionImg:"/assets/hero/slogan-tronexo.svg",captionRatio:992/52.1},{id:"tiketa",num:"04",name:"Tiketa",intro:26,entry:26,jumpHold:38,leaveSrc:im,lead:30,scrubFrames:20,scrubRev:2,scrubEnd:pi("tkend",.6),fade:{from:pi("tkfrom",.13),to:pi("tkfade",.65),curve:Ia[new URLSearchParams(location.search).get("tkcurve")]||Ia.out},sceneIn:{from:pi("tkin",.4),to:pi("tkinto",.65)},sceneAt:pi("tkat",.4),introTo:Mr-mi,introRest:30-mi,approachTo:Mr-mi,approachRest:30-mi,departSrc:Ls,departFrom:505,departHold:550,departMap:[466,468,469,470,471,472,474,475,476,478,479,480,481,483,484,485,486,487,489,490,491,493,494,495,496,498,499,500,501,502,506,507,508,509,510,512,513,514,516,517,518,519,520,522,523,524,525,527,528,529,531,532],alt:"TIKETABET — online herní platforma",caption:"Prostor pro další příběh."}],Fa=Q.length,Uo=n=>(n%Fa+Fa)%Fa,Ac=n=>Uo(n-1),rr=n=>Q[n].leaveSrc!==void 0?Q[n].leaveSrc:n,qh=n=>Q[n].leaveTo!==void 0?Q[n].leaveTo:ri(n)+Mr,ri=n=>Q[n].lead||0,lm=16,cm=14,Wh=14,Sc=30,Ks=.49,Uu=.5,js=14,um=.3,fm=46,Xh=n=>ri(n)+(Q[n].jumpHold!==void 0?Q[n].jumpHold:fm),Mc=n=>{const t=Q[n];return t.departSrc===void 0?null:{clip:t.departSrc,from:t.departFrom,hold:t.departHold,map:t.departMap}},hm={cfig:"#c6ced4",realestate:"#0a1420",tronexo:"#05141a",tiketa:"#05161d"},et=document.documentElement,Se=document.body,qi=document.getElementById("vhero"),Z={a:document.getElementById("layer-a"),b:document.getElementById("layer-b")},ht={copy:document.querySelector(".hero__inner"),slogan:document.getElementById("hero-slogan"),logoAlt:document.getElementById("hero-logo-alt"),navRule:document.getElementById("nav-rule"),live:document.getElementById("live"),poster:document.getElementById("poster"),scrub:document.getElementById("layer-s"),scrub2:document.getElementById("layer-s2"),gl:document.getElementById("gl"),themeMeta:document.querySelector('meta[name="theme-color"]')},Wi=matchMedia("(prefers-reduced-motion: reduce)");let Tn;const Hh=typeof HTMLVideoElement<"u"&&"requestVideoFrameCallback"in HTMLVideoElement.prototype,g={pos:0,rest:0,target:0,queue:null,mode:"off",front:"a",run:null,paused:!1,suspended:!1,video:!1,shown:!1,seq:0,raf:0},$={a:{key:"a",el:Z.a,clip:-1,want:null,nudged:0,vfc:0,waiters:[]},b:{key:"b",el:Z.b,clip:-1,want:null,nudged:0,vfc:0,waiters:[]}},dm=n=>n==="a"?"b":"a";function pm(n,t){n==="a"&&Z.a.style.opacity!=="1"&&(Z.a.style.transitionDuration="0ms",Z.a.style.opacity="1",Z.a.offsetWidth),Z.b.style.transitionDuration=`${Math.max(1,Math.round(t*1e3))}ms`,Z.b.style.opacity=n==="b"?"1":"0",g.front=n}function zh(){Z.b.style.transitionDuration="0ms",Z.b.style.opacity=g.front==="b"?"1":"0",Z.b.offsetWidth}function Bh(){return zh(),dm(g.front)}function mm(n,t){const e=g.front,r=Math.max(1,Math.round(t*500)),i=$[n].el;return i.style.transitionDuration="0ms",i.style.opacity="0",i.offsetWidth,$[e].el.style.transitionDuration=`${r}ms`,$[e].el.style.opacity="0",g.front=n,setTimeout(()=>{i.style.transitionDuration=`${r}ms`,i.style.opacity="1"},r),r}function Lc(n,t,e){const r=$[n];r.clip!==t&&(r.clip=t,r.el.src=pr[t].src,r.el.load());const i=sm(t,e);r.want=i,r.el.readyState>=1?r.el.currentTime=i:r.el.addEventListener("loadedmetadata",()=>{r.el.currentTime=i},{once:!0})}function qu(n,t){const e=$[n];if(!(e.want==null||e.el.seeking)){if(Math.abs(e.el.currentTime-e.want)<.25){e.want=null;return}t-e.nudged<400||(e.nudged=t,e.el.currentTime=e.want)}}function qo(n,t,e){const r=$[n];if(r.clip!==t||r.el.seeking||r.el.readyState<3)return!1;const i=Rn(t,r.el.currentTime);return i>=e-1&&i<=e+12}function wn(n){$[n].want=null;const t=$[n].el.play();t&&t.catch&&t.catch(e=>{e.name!=="AbortError"&&Nc()})}function ha(n,t,e,r=!1){if(!Hh)return!1;const i=$[n];if(i.waiters.push({at:t,run:e,hidden:r}),i.vfc)return!0;const o=(s,a)=>{i.vfc=0;const l=Rn(i.clip,a.mediaTime+1e-4);for(const c of i.waiters.slice()){const u=!c.hidden&&g.front!==n;if(u||l>=c.at){const p=i.waiters.indexOf(c);p>=0&&i.waiters.splice(p,1),u||c.run()}}i.waiters.length&&(i.vfc=i.el.requestVideoFrameCallback(o))};return i.vfc=i.el.requestVideoFrameCallback(o),!0}function En(n){const t=$[n];t.waiters.length=0,t.vfc&&(t.el.cancelVideoFrameCallback(t.vfc),t.vfc=0)}const Xi=()=>Rn($[g.front].clip,$[g.front].el.currentTime);function ni(n,t){qi.style.setProperty("--theme-ms",`${Math.round(t)}ms`),qi.dataset.chapter=Q[n].id,ht.themeMeta&&(ht.themeMeta.content=hm[Q[n].id]),An()}function ii(n){const t=Q[n];if(t.captionImg){ht.slogan.textContent="";const e=document.createElement("span");e.className="slogan-img",e.setAttribute("role","img"),e.setAttribute("aria-label",t.caption),e.style.setProperty("--slogan-src",`url('${t.captionImg}')`),e.style.setProperty("--slogan-ratio",String(t.captionRatio)),ht.slogan.append(e)}else ht.slogan.textContent=t.caption;ht.logoAlt.textContent=t.alt,ht.copy.classList.remove("is-swapping")}function Pc(n){document.querySelectorAll("[data-chapter-link]").forEach(t=>{t.dataset.chapterLink===Q[n].id?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")}),ht.live&&(ht.live.textContent=Q[n].name),Fm(Q[n].id),Um(Q[n].id)}function $h(n,t){const e=ri(n);return[{at:e+Math.round(Mr*.3),fade:!0},{at:e+Math.round(Mr*.45),theme:t,themeMs:1100},{at:e+Math.round(Mr*.62),text:t}]}function _m(n,t,e,r){const i=performance.now(),o=()=>{if(g.run){if(!qo(n,t,e)&&performance.now()-i<3e3){requestAnimationFrame(o);return}$[n].el.playbackRate=1,g.paused||wn(n),r&&r()}};o()}function gm(n,t=g.rest,e=null){const r=$[g.front],i=e===null?rr(n):e;return r.clip===i&&!r.el.seeking&&r.el.readyState>=3&&Math.abs(Rn(r.clip,r.el.currentTime)-t)<=1}function da(n,t,e,r=g.rest,i=null){if(gm(n,r,i)){e&&e();return}const o=i===null?rr(n):i,s=g.front,a=Bh();($[a].clip!==o||$[a].want==null&&Math.abs(Rn($[a].clip,$[a].el.currentTime)-r)>1)&&Lc(a,o,r);const l=g.seq,c=performance.now(),u=()=>{if(g.seq===l){if(!qo(a,o,r)&&performance.now()-c<8e3){requestAnimationFrame(u);return}g.front!==a&&(pm(a,t),setTimeout(()=>{g.seq===l&&g.front===a&&$[s].el.pause()},t*1e3+80)),e&&e()}};u()}function vm(n){const t=rr(g.pos),e=Am()??g.rest;g.seq++,pa(),g.run={to:n,clip:t,stop:qh(g.pos),marks:$h(g.pos,n),done:new Set,rest:Q[g.pos].leaveRest},da(g.pos,.06,()=>{const r=g.front;$[r].el.playbackRate=1,g.paused||wn(r),Go()},e)}let Wu=!1;function ym(){if(Wu)return;Wu=!0;const n=()=>xm();"requestIdleCallback"in window?requestIdleCallback(n,{timeout:2e3}):setTimeout(n,400)}function xm(){const n=new Set;for(const t of document.styleSheets){let e;try{e=t.cssRules}catch{continue}for(const r of e||[]){const i=/--logo-src:\s*url\(['"]?([^'")]+)/.exec(r.style?.cssText||"");!i||n.has(i[1])||(n.add(i[1]),new Image().src=new URL(i[1],t.href||location.href).href)}}}function Go(){const n=g.run;!n||n.stop==null||ha(g.front,n.stop,Yh)}function pa(){g.mode="running",et.classList.add("intro-lock"),zh()}function Yh(){const n=g.front;En("a"),En("b"),$[n].el.pause(),$[n].el.playbackRate=1;const t=g.run;if(g.pos=t?t.to:g.pos,g.rest=t&&t.rest!==void 0?t.rest:ri(g.pos),g.seq++,g.mode="held",g.run=null,rd(0),et.classList.remove("intro-lock"),window.__vheroLockTimer&&(clearTimeout(window.__vheroLockTimer),window.__vheroLockTimer=0),window.__vheroCalmed&&window.__vheroCalmed(),Mm(g.pos),ym(),ma=!1,Zs(g.pos),An(),qm(),g.queue!==null&&g.queue!==g.pos){const e=g.queue;g.queue=null,zi(e,{history:"none"})}else g.queue=null}let ki=-1,Ua=-1,Hi=!1,ma=!1;const Tm=500;let Ps=!1,yi=0,Gh=0,Sl=0;const Vh=()=>{const n=Mc(g.pos),t=ri(g.pos),e=n?(n.hold-n.from)*Dr(rr(g.pos))/Dr(n.clip):Xh(g.pos)-t,r=Q[g.pos].scrubFrames??Sc;return Math.max(0,Math.min(kc(),t+Math.min(r,Math.floor(e)-2-js))-g.rest)};function kc(){const n=g.pos,t=rr(n),e=ri(n),r=e+(Q[n].scrubFrames??Sc),i=Q[n].scrubTrim;return!i||g.rest>=e?r:Math.max(g.rest,Rn(t,ti(t,r)-i))}const wm=()=>{const n=rr(g.pos),t=kc()-g.rest,e=ti(n,g.rest),r=ti(n,g.rest+t),i=Math.min(1,Math.max(0,scrollY/(innerHeight*Kh())));return Math.min(Vh(),am(n,e+(r-e)*i)-g.rest)};function Kh(){if(!g.video)return Ks;const n=rr(g.pos),t=Sc/hr,e=ti(n,kc())-ti(n,g.rest);return(Q[g.pos].scrubEnd??Ks)*Math.max(1,e/t)}const Wo=()=>[ht.scrub,ht.scrub2];function Zs(n){if(!g.video||!ht.scrub||!ht.scrub2)return;const t=`/assets/hero/scrub/${Q[n].id}.mp4${Q[n].scrubRev?`?v=${Q[n].scrubRev}`:""}`;if(ki!==n){ki=n,Ua=-1,Hi=!1,Ps=!1,yi=0,Sl=-1;for(const r of Wo())r.style.opacity="0";const e=()=>{ki===n&&fetch(t).catch(()=>{})};"requestIdleCallback"in window?requestIdleCallback(e,{timeout:1e3}):setTimeout(e,600)}if(!(g.mode!=="held"||Ua===n)){Ua=n;for(const e of Wo())e.src=t,e.load()}}function Ml(){if(ma=!1,!!Hi){Hi=!1;for(const n of Wo())n.style.opacity="0"}}const Em=()=>Hi?Math.round(Gh):null,bm=()=>{const[n,t]=Wo();return n&&t&&ki===g.pos&&n.readyState>=2&&t.readyState>=2};function Rm(){if(!g.video||!bm())return;if(g.mode!=="held"){Ml();return}if(ma)return;let n=wm();if(!Ps)if(n<=0)Ps=!0,yi=0;else{yi||(yi=performance.now());const d=Math.min(1,(performance.now()-yi)/Tm);n=n*(d*d*(3-2*d)),d>=1&&(Ps=!0,yi=0)}Gh=n;const t=Math.floor(n),e=n-t,r=(1-Uu)/2,i=Math.min(1,Math.max(0,(e-r)/Math.max(1e-6,Uu))),o=i*i*(3-2*i);if(n<=0){Ml();return}const[s,a]=Wo(),l=g.rest+t,c=l%2===0?s:a,u=l%2===0?a:s;l!==Sl&&(Sl=l,c.style.zIndex="2",u.style.zIndex="3",!c.seeking&&Al(c.currentTime,hr)!==l&&(c.currentTime=Rl(l,hr)));const p=g.rest+Math.min(Vh(),t+1);!u.seeking&&Al(u.currentTime,hr)!==p&&(u.currentTime=Rl(p,hr)),c.style.opacity="1",u.style.opacity=o.toFixed(3),Hi=!0}const Am=()=>$[g.front].clip===rr(g.pos)?Xi():null;function Sm(n,t){const e=Em()??0;ma=!0;const r=n?Mc(g.pos):null;let i=null,o=g.rest+e;if(r){i=r.clip;const s=g.rest+e;o=r.map&&r.map[s]!==void 0?r.map[s]:r.from+Math.round((s-ri(g.pos))*Dr(r.clip)/Dr(rr(g.pos)))}da(g.pos,.06,()=>{Ml(),t(o)},o,i)}function Mm(n){da(n,um,null)}function Dc(n,{fromFrame:t=null}={}){const e=t??g.rest,r=t==null?rr(g.pos):$[g.front].clip,i=Q[n],o=i.approachSrc!==void 0?i.approachSrc:Ac(n),s=i.approachFrom!==void 0?i.approachFrom:i.entry,a=i.approachTo!==void 0?i.approachTo:Mr,l=Math.max(0,s-Math.round(js*Dr(o)/hr));g.seq++,pa();const c=Mc(g.pos);g.run={to:n,clip:r,stop:null,done:new Set,phase:"windup",marks:[{at:e+1,fade:!0}],startBack:Math.max(e,Math.min(e,g.rest??e)+Math.max(0,lm-js)),hold:c?c.hold:Xh(g.pos),target:o,warm:l,entry:s,land:a,jumpBack:null,rest:i.approachRest};const u=g.seq,p=()=>{if(g.seq!==u)return;const d=g.front,h=Bh();g.run.jumpBack=h,Lc(h,o,l),Se.classList.add("is-loading");const _=performance.now();t!=null&&$[d].el.pause();const m=()=>{if(!(g.seq!==u||!g.run||g.run.phase!=="windup")){if(!qo(h,o,l)&&performance.now()-_<8e3){requestAnimationFrame(m);return}Se.classList.remove("is-loading"),$[d].el.playbackRate=1,g.paused||wn(d),ha(d,g.run.startBack,Qs)}};m()};t==null?da(g.pos,.06,p):p()}function Lm(n){const t=Xi();En("a"),En("b");const e=g.run&&g.run.jumpBack;if(e&&e!==g.front&&$[e].el.pause(),Uo(n-g.pos)===1){g.seq++,pa(),g.run={to:n,clip:rr(g.pos),stop:qh(g.pos),marks:$h(g.pos,n),done:new Set,rest:Q[g.pos].leaveRest},Go();return}ht.copy.classList.add("is-swapping"),Dc(n,{fromFrame:t})}function Qs(){const n=g.run;if(!n||n.phase!=="windup"||!n.jumpBack)return;const t=n.jumpBack;if(!qo(t,n.target,n.warm)){$[g.front].el.pause(),requestAnimationFrame(()=>{g.run===n&&n.phase==="windup"&&(qo(t,n.target,n.warm)&&(g.paused||wn(g.front)),Qs())});return}n.phase="rolling",$[t].el.playbackRate=1,wn(t),ha(t,n.entry,jh,!0)}function jh(){const n=g.run;if(!n||n.phase!=="rolling")return;n.phase="crossing";const t=g.front,e=n.jumpBack;if(n.clip=n.target,n.stop=n.land,Tn&&Pm(t,e,n))return;const r=mm(e,cm/hr);setTimeout(()=>$[t].el.pause(),r+40),setTimeout(()=>{ni(n.to,r),ii(n.to)},r),Go()}function Pm(n,t,e){const r=Wh/hr;try{Tn.run({from:$[n].el,to:$[t].el,seconds:r,onPrepare:()=>{ht.gl.hidden=!1},onShown:()=>{Z.a.style.transitionDuration="0ms",Z.a.style.opacity="0",Z.b.style.transitionDuration="0ms",Z.b.style.opacity="0",g.front=t,setTimeout(()=>{ni(e.to,r*600),ii(e.to)},r*400)},onDone:()=>{Z.a.style.transitionDuration="0ms",Z.b.style.transitionDuration="0ms",Z.a.style.opacity="1",Z.b.style.opacity=t==="b"?"1":"0",Z.a.offsetWidth,requestAnimationFrame(()=>{ht.gl.hidden=!0}),$[n].el.pause();const i=g.queue;if(i!==null&&i!==e.to&&Uo(i-e.to)!==1){g.queue=null,g.pos=e.to,ht.copy.classList.add("is-swapping"),Dc(i,{fromFrame:Xi()});return}Go()}})}catch{return!1}return!0}let eo=null,wr=null;function km(){if(!et.classList.contains("vhero-smokein"))return;if(!Tn){et.classList.remove("vhero-smokein");return}eo||(eo=document.createElement("canvas"),eo.width=2,eo.height=2);const n=getComputedStyle(qi).getPropertyValue("--poster").trim().replace(/^url\(\s*['"]?|['"]?\s*\)$/g,""),t=new Image;t.__posFrom=Z.a;const e=wr={img:t,revealed:!1,done:!1},r=()=>{if(wr===e)try{Tn.run({from:eo,to:()=>e.revealed?Z[g.front]:t,seconds:Wh/hr,onPrepare:()=>{ht.gl.hidden=!1},onDone:()=>{wr===e&&(e.done=!0,window.__vheroCalmed&&window.__vheroCalmed(),e.revealed?Zh():(et.classList.add("vhero-smokein-hold"),et.classList.remove("vhero-smokein")),requestAnimationFrame(()=>{ht.gl.hidden=!0}))}})}catch{wr=null,et.classList.remove("vhero-smokein"),window.__vheroCalmed&&window.__vheroCalmed()}};t.onload=r,t.onerror=()=>{wr===e&&(wr=null,et.classList.remove("vhero-smokein")),window.__vheroCalmed&&window.__vheroCalmed()},t.src=n}function Zh(){const n=g.front;Z[n].style.transitionDuration="0ms",Z[n].style.opacity="1",ht.poster.style.opacity="0",Z[n].offsetWidth,et.classList.remove("vhero-smokein","vhero-smokein-hold"),wr=null}function Qh(){if(g.shown)return;g.shown=!0;const n=wr;if(n){n.revealed=!0,requestAnimationFrame(()=>{Se.classList.remove("is-loading"),Se.classList.add("video-on")}),n.done&&Zh();return}ht.poster.style.opacity="0",Z[g.front].style.opacity="1",requestAnimationFrame(()=>{Se.classList.remove("is-loading"),Se.classList.add("video-on")})}const Oc=()=>Dm(performance.now());function Dm(n){if(Nm(n),!g.video||g.suspended||(qu("a",n),qu("b",n),Rm(),!Hh&&$[g.front].el.readyState>=3&&!$[g.front].el.seeking&&Qh(),g.paused||g.mode!=="running"||!g.run))return;const t=g.run,e=Xi();if(t.phase){if(t.phase==="windup"&&e>=t.startBack&&t.jumpBack)Qs();else if(t.phase==="rolling"&&t.jumpBack){const r=$[t.jumpBack];r.el.paused&&!r.el.seeking&&!g.paused&&!g.suspended&&(r.el.playbackRate=1,wn(t.jumpBack)),Rn(r.clip,r.el.currentTime)>=t.entry&&jh()}t.phase!=="crossing"&&e>t.hold&&!$[g.front].el.paused&&$[g.front].el.pause()}for(const r of t.marks)t.done.has(r)||e>=r.at&&(t.done.add(r),r.fade&&ht.copy.classList.add("is-swapping"),r.theme!==void 0&&ni(r.theme,r.themeMs),r.text!==void 0&&ii(r.text));t.stop!=null&&$[g.front].clip===t.clip&&Xi()>t.stop+1&&Yh()}function zi(n,{history:t="push",instant:e=!1}={}){if(n=Uo(n),Pc(n),e||!g.video){g.run=null,g.queue=null,g.pos=n,g.target=n,ni(n,Wi.matches?1:600),ii(n);return}if(g.mode==="running"){if(g.target=n,n===g.run.to){g.queue=null;return}if(g.run.phase==="windup"||g.run.phase==="rolling"){g.queue=null,Lm(n);return}g.queue=n;return}if(n===g.pos){Jh();return}g.target=n,g.queue=null,rd(1),Bi(document.hidden);const r=Uo(n-g.pos)!==1;Sm(r,i=>{r?(ht.copy.classList.add("is-swapping"),Dc(n,{fromFrame:i})):vm(n)})}function Cc(n){const t=g.front,e=Q[n],r=e.introSrc!==void 0?e.introSrc:Ac(n),i=e.intro,o=wr?4:js,s=Math.max(e.introClean??0,i-Math.round(o*Dr(r)/hr));g.shown||Se.classList.add("is-loading"),g.seq++,En("a"),En("b"),Lc(t,r,s),pa(),g.run={to:n,clip:r,stop:e.introTo!==void 0?e.introTo:Mr,marks:[],done:new Set,rest:e.introRest},ha(t,i,Qh,!0),_m(t,r,s,Go)}function Jh(){!g.video||g.mode!=="held"||Cc(g.pos)}function td(){g.video||(g.video=!0,g.paused=!1,Se.classList.remove("video-off"),[Z.a,Z.b].forEach(n=>{n.muted=!0,n.playsInline=!0,n.dataset.wired||(n.addEventListener("error",Nc),n.dataset.wired="1")}),Z.a.style.opacity="1",Z.b.style.opacity="0",g.front="a",Tn===void 0&&(Tn=nm(ht.gl)),km(),Cc(g.pos),g.raf||(dr.ticker.add(Oc),g.raf=1))}function Nc(){g.video&&(g.video=!1,g.mode="off",g.run=null,g.queue=null,En("a"),En("b"),dr.ticker.remove(Oc),g.raf=0,Tn&&Tn.stop(),ht.gl.hidden=!0,et.classList.remove("vhero-smokein","vhero-smokein-hold"),wr=null,window.__vheroCalmed&&window.__vheroCalmed(),Se.classList.remove("video-on","is-loading"),Se.classList.add("video-off"),et.classList.remove("intro-lock"),g.shown=!1,ht.poster.style.opacity="",[Z.a,Z.b].forEach(n=>{n.pause(),n.removeAttribute("src"),n.load()}),$.a.clip=-1,$.b.clip=-1,$.a.want=null,$.b.want=null,Z.a.style.transitionDuration="0ms",Z.b.style.transitionDuration="0ms",Z.a.style.opacity="0",Z.b.style.opacity="0",ht.scrub&&(ht.scrub.removeAttribute("src"),ht.scrub.load(),ht.scrub.style.opacity="0"),ki=-1,Hi=!1,ht.copy.classList.remove("is-swapping"),ni(g.pos,600),ii(g.pos),An())}function Om(){if(!g.video||g.paused||g.suspended||g.mode!=="running")return;wn(g.front);const n=g.run;n&&n.phase==="rolling"&&n.jumpBack&&wn(n.jumpBack)}const Cm=340;let qa=0,Js=0,ed=0;function rd(n){Js!==n&&(Js=n,ed=performance.now())}function Nm(n){if(qa===Js)return;const t=Math.min(1,(n-ed)/Cm),e=t*t*(3-2*t);qa=Js?e:1-e,et.style.setProperty("--hero-hold",qa.toFixed(3))}function Bi(n){n&&g.mode==="running"&&!document.hidden&&(n=!1),g.suspended=n,g.video&&(n?(Z.a.pause(),Z.b.pause()):Om())}const nd=new URLSearchParams(location.search).get("shtrans")!=="away";nd||et.classList.add("vhero-away");const Im={cfig:"home",realestate:"realEstate",tronexo:"tronexo",tiketa:"tiketa"},id={cfig:"/",realestate:"/real-estate/",tronexo:"/tronexo/",tiketa:"/tiketa/"},od=n=>Q.findIndex(t=>Im[t.id]===n);let fe=!1;const sd=()=>!!document.querySelector("main#content .vhero-space");let fo=null;function Fm(n){document.dispatchEvent(new CustomEvent("cfig:nav-target",{detail:n}))}function Um(n){const t=id[n];if(!t||location.pathname===t)return;const e=document.createElement("link");e.rel="prefetch",e.href=t,document.head.appendChild(e)}function qm(){if(!fe)return;const n=Q[g.pos].id,t=id[n];!t||location.pathname===t||(fo=n,et.classList.add("vhero-nav"),np(t,{history:"push"}))}const ad=()=>window.__cfigScroll&&window.__cfigScroll.lenis,ld=()=>et.classList.contains("menu-open");let Ll=!1;new MutationObserver(()=>{const n=ad();n&&(et.classList.contains("intro-lock")?Ll||n.stop():n.start())}).observe(et,{attributes:!0,attributeFilter:["class"]});document.addEventListener("click",n=>{if(!fe)return;const t=n.target instanceof Element&&n.target.closest("a[data-chapter-link]");if(!t||n.defaultPrevented||n.button!==0||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;const e=Q.findIndex(r=>r.id===t.dataset.chapterLink);e<0||(n.preventDefault(),n.stopPropagation(),ld()&&document.querySelector(".menu-toggle")?.click(),zi(e),scrollY>60&&Xm())},!0);const Wm=320;let Xu=0;function Xm(){const n=ad(),t=()=>{n?(Ll=!0,n.start(),n.scrollTo(0,{immediate:!0,force:!0}),Ll=!1,et.classList.contains("intro-lock")&&n.stop()):scrollTo({top:0,behavior:"instant"}),An()};if(Wi.matches){t();return}clearTimeout(Xu),et.classList.add("vhero-leave"),Xu=setTimeout(()=>{t(),requestAnimationFrame(()=>requestAnimationFrame(()=>et.classList.remove("vhero-leave")))},Wm)}function Hm(){et.classList.remove("vhero-nav");const n=fe;fe=sd(),et.classList.toggle("vhero-on",fe);const t=od(Se.dataset.route);if(!fe||t<0){et.classList.remove("intro-lock","vhero-light"),Bi(!0),fo=null;return}const e=fo!==null&&Q[t].id===fo;if(fo=null,An(),!(e&&n)){if(g.seq++,g.run=null,g.queue=null,g.pos=t,g.target=t,ni(t,1),ii(t),Pc(t),Bi(document.hidden),Wi.matches){Se.classList.add("video-off");return}if(!g.video){Zs(t),td();return}ki=-1,Zs(t),et.classList.add("intro-lock"),Cc(t)}}document.addEventListener("astro:after-swap",()=>An());function zm(){fe=sd(),et.classList.toggle("vhero-on",fe);const n=Math.max(0,od(Se.dataset.route));g.pos=n,g.target=n,ni(n,1),ii(n),Pc(n),requestAnimationFrame(()=>qi.style.setProperty("--theme-ms","1100ms")),document.addEventListener("astro:page-load",(()=>{let e=!0;return()=>{if(e){e=!1;return}Hm()}})());const t=()=>{et.classList.remove("vhero-smokein"),window.__vheroCalmed&&window.__vheroCalmed()};if(!fe){et.classList.remove("intro-lock"),t(),Bi(!0);return}Wi.matches?et.classList.remove("intro-lock"):Zs(n),Wi.matches?(t(),Se.classList.add("video-off")):td()}document.addEventListener("visibilitychange",()=>Bi(document.hidden));const Bm=.18,Hu=.7,$m=.6,Ym=.13,Gm=.12,Vm=Number(new URLSearchParams(location.search).get("relongafter")??.02),Km=1.2,jm=.25,zu=.35,Zm=.45,Qm={tronexo:{text:.75,track:.55}},Jm=.25,Wa=.35,t_=.6,Bu=.04,e_=1;let $u=0,cd=0,ud=0,fd=0;typeof window<"u"&&(window.__cfigTrackStart=()=>Math.round(fd*(window.innerHeight||0)),window.__cfigSceneFull=()=>Math.round(cd*(window.innerHeight||0)),window.__cfigSceneStart=()=>Math.round(ud*(window.innerHeight||0)));let An=()=>{};function r_(){let n=0,t=null,e=null,r=null;const i=()=>{n=0;const a=$u;t!==a&&(t=a,et.style.setProperty("--hero-extra",String(a)));const l=Q[g.pos].longTail,c=a>0?Ks+a:0,u=!c&&Qm[Q[g.pos].id],p=c?Math.max(0,c-jm):u?u.text-Jm:a>0&&l!==void 0?l:$m;e!==p&&(e=p,et.style.setProperty("--hero-tail",String(p)));const d=!c&&Q[g.pos].fade,h=c?Gm:d?d.from:Bm+a,_=c?c+Vm:d?d.to:Hu+a,m=Math.min(1,Math.max(0,(scrollY/innerHeight-h)/(_-h)));et.style.setProperty("--hero-gone",(c?Math.pow(m,Km):d?d.curve(m):m*m).toFixed(3));const v=!c&&Q[g.pos].sceneAt,b=c?c-zu:v!==void 0&&v!==!1?v:Hu+a;et.style.setProperty("--hero-scene",String(b)),et.style.setProperty("--hero-track",String(u?u.track-zu-t_:c?b-Zm:b));const E=scrollY/innerHeight,y=!c&&Q[g.pos].sceneIn,x=fe?y?((W,O)=>{const z=Math.min(1,Math.max(0,(E-W)/(O-W)));return z*z*(3-2*z)})(y.from,y.to):u?Math.min(1,Math.max(0,(E-u.text)/Wa)):1:1,k=!fe||!u?1:Math.min(1,Math.max(0,(E-u.track)/Wa));et.style.setProperty("--scene-in",x.toFixed(3)),et.style.setProperty("--track-in",k.toFixed(3)),cd=u?u.text+Wa:0,ud=u?u.text:0,fd=u?u.track:0;const A=Math.min(1,Math.max(0,scrollY/(innerHeight*Ym)));et.style.setProperty("--copy-gone",A.toFixed(3));const D=Math.min(1,Math.max(0,(scrollY/innerHeight-Bu-a)/(e_-Bu))),L=D*D*(3-2*D);et.style.setProperty("--hero-away",L.toFixed(4)),et.style.setProperty("--hero-away-fade",Math.min(1,Math.max(0,(L-.55)/.45)).toFixed(4));const P=fe&&(scrollY>=innerHeight*(1+a)||document.hidden);fe&&P!==r&&(r=P,Bi(P)),et.classList.toggle("vhero-light",fe&&qi.dataset.chapter==="cfig"&&(nd?m*m<.5:D<.35))},o=()=>{n||(n=requestAnimationFrame(i))},s=window.__cfigScroll&&window.__cfigScroll.lenis;s?s.on("scroll",()=>i()):addEventListener("scroll",o,{passive:!0}),addEventListener("resize",o,{passive:!0}),An=()=>{$u=Math.max(0,Kh()-(Q[g.pos].scrubEnd??Ks)),t=null,e=null,i()},i()}r_();document.addEventListener("keydown",n=>{if(!fe)return;const t=n.target;t instanceof Element&&t.closest("input, textarea, [contenteditable]")||ld()||(n.key==="ArrowRight"?(n.preventDefault(),zi(g.target+1)):n.key==="ArrowLeft"&&(n.preventDefault(),zi(g.target-1)))});Wi.addEventListener("change",n=>{n.matches&&Nc()});window.addEventListener("pagehide",()=>{dr.ticker.remove(Oc),g.raf=0,[Z.a,Z.b].forEach(n=>{n.pause(),n.removeAttribute("src")})});zm();function n_(){const n=Q.find(a=>a.id==="tiketa");if(!n)return;const t=[["tkat","Поле начинает ехать с",()=>n.sceneAt,a=>{n.sceneAt=a}],["tkin","Стадион проступает с",()=>n.sceneIn.from,a=>{n.sceneIn.from=a}],["tkinto","Стадион целиком к",()=>n.sceneIn.to,a=>{n.sceneIn.to=a}],["tkfrom","Конь гаснет с",()=>n.fade.from,a=>{n.fade.from=a}],["tkfade","Конь исчез к",()=>n.fade.to,a=>{n.fade.to=a}],["tkend","Бег коня на прокрутке до",()=>n.scrubEnd,a=>{n.scrubEnd=a}]],e=document.createElement("div");e.style.cssText="position:fixed;right:16px;bottom:16px;z-index:9999;background:rgba(8,14,20,.92);color:#dfe8ef;font:12px/1.4 system-ui,sans-serif;padding:12px 14px;border-radius:8px;width:300px;box-shadow:0 6px 24px rgba(0,0,0,.4)",e.innerHTML='<div style="font-weight:600;margin-bottom:6px">Tiketa · прокрутка (доли экрана)</div>';const r=document.createElement("div");r.style.cssText="margin-top:8px;word-break:break-all;color:#9fd9b0;user-select:all;cursor:text";const i=document.createElement("div");i.style.cssText="margin-top:4px;color:#8aa";const o=()=>{const a=t.map(([l,,c])=>`${l}=${(+c()).toFixed(2)}`).join("&");r.textContent=`${location.origin}/tiketa/?${a}`};for(const[a,l,c,u]of t){const p=document.createElement("label");p.style.cssText="display:grid;grid-template-columns:1fr 44px;gap:2px 8px;margin:4px 0";const d=document.createElement("span");d.style.textAlign="right";const h=document.createElement("input");h.type="range",h.min="0",h.max="1.5",h.step="0.01",h.value=String(c()),h.style.gridColumn="1 / 3";const _=()=>{d.textContent=(+c()).toFixed(2)};h.addEventListener("input",()=>{u(+h.value),_(),o(),An()}),p.append(Object.assign(document.createElement("span"),{textContent:l}),d,h),_(),e.append(p)}e.append(i,r),o();const s=()=>{i.textContent=`сейчас прокрутка: ${(scrollY/innerHeight).toFixed(2)}`,requestAnimationFrame(s)};s(),document.body.append(e)}new URLSearchParams(location.search).has("tktune")&&n_();{const n=()=>qi.classList.add("vhero-type");!document.fonts||!document.fonts.load?n():Promise.race([document.fonts.load('400 20px "Open Sans"',"Vize, která nás žene vpřed. Prop Trading Ecosystem"),new Promise(t=>setTimeout(t,1200))]).then(n,n)}new URLSearchParams(location.search).has("inspect")&&(window.cfigHero={state:g,layer:$,CHAPTERS:Q,SOURCES:pr,MASTER:Ls,JOIN:Mr,here:Xi,fpsOf:Dr,arriveClip:Ac,leaveClip:rr,goTo:zi,replay:Jh});typeof window<"u"&&(window.__cfigHero={state:g,CHAPTERS:Q,goTo:zi,get active(){return fe}});const i_="reveal-ready",Pl="is-in",o_=30;let ho=null;const hd="[data-reveal]";function dd(){for(const n of document.querySelectorAll(`${hd}:not(.${Pl})`))n.classList.add(Pl),ho?.unobserve(n)}const s_=()=>window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-4;function a_(){if(document.documentElement.classList.add(i_),window.matchMedia("(prefers-reduced-motion: reduce)").matches){dd();return}ho?.disconnect(),ho=new IntersectionObserver(n=>{for(const t of n)t.isIntersecting&&(t.target.classList.add(Pl),ho.unobserve(t.target))},{rootMargin:`0px 0px -${o_}% 0px`,threshold:.01});for(const n of document.querySelectorAll(hd))ho.observe(n)}window.addEventListener("scroll",()=>{s_()&&dd()},{passive:!0});const l_="[data-drag-scroll]",c_=4;function u_(n){if(n.dataset.dragBound)return;n.dataset.dragBound="1";let t=0,e=0,r=!1,i=!1;const o=()=>n.scrollWidth>n.clientWidth+1,s=()=>{o()?n.setAttribute("data-draggable",""):n.removeAttribute("data-draggable")};n.addEventListener("pointerdown",l=>{l.pointerType!=="mouse"||!o()||(r=!0,i=!1,t=l.clientX,e=n.scrollLeft)}),n.addEventListener("pointermove",l=>{if(!r)return;const c=l.clientX-t;!i&&Math.abs(c)<c_||(i||(i=!0,n.setAttribute("data-dragging",""),n.setPointerCapture(l.pointerId)),n.scrollLeft=e-c)});const a=()=>{r=!1,n.removeAttribute("data-dragging")};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),n.addEventListener("lostpointercapture",a),s(),new ResizeObserver(s).observe(n)}function f_(){for(const n of document.querySelectorAll(l_))u_(n)}const h_="[data-coverflow]",d_=410,p_=260,m_=36,__=.26,g_=2.2,v_=5,Xa=3.2,pd=(n,t,e)=>Math.min(e,Math.max(t,n));let Xo=[],ta=null,fr=null,ks=0,kl=-1,Dl=!1,Ol=-1,Ha=null;const y_=2e-4;let Cl=[];function on(n,t,e,r,i){const o=Math.round(r/i)*i,s=Cl[n]||(Cl[n]={});s[e]!==o&&(s[e]=o,t.style.setProperty(e,e==="--z"?String(o):e==="--ry"?`${o}deg`:e==="--op"||e==="--near"?String(o):`${o}px`))}function md(n){for(let e=0;e<Xo.length;e++){const r=Xo[e],i=e-n,o=Math.abs(i);if(o>Xa){on(e,r,"--op",0,.01),r.style.visibility="hidden";continue}r.style.visibility="";const s=pd(i,-Xa,Xa);on(e,r,"--tx",s*d_,.1),on(e,r,"--tz",-o*p_,.1),on(e,r,"--ry",-s*m_,.05),on(e,r,"--op",Math.max(0,1-o*__),.01),on(e,r,"--bl",Math.min(o*1.6,v_),.5),on(e,r,"--z",100-Math.round(o*10),1),on(e,r,"--near",Math.max(0,1-o*g_),.01);const a=o<.5?"true":"false";r.getAttribute("aria-current")!==a&&r.setAttribute("aria-current",a)}const t=Math.round(n);t!==kl&&(kl=t,fr.style.setProperty("--i",String(t)))}function _d(){if(ks=requestAnimationFrame(_d),!fr||!Dl)return;const n=fr.getBoundingClientRect(),t=n.height-ta.offsetHeight,r=(t>0?pd(-n.top/t,0,1):0)*(Xo.length-1);Math.abs(r-Ol)<y_||(Ol=r,md(r))}function x_(){const n=ta.querySelectorAll("[data-reveal]");if(!n.length)return;const t=new IntersectionObserver(e=>{for(const r of e)if(r.isIntersecting){for(const i of n)i.classList.add("is-in");t.disconnect()}},{threshold:.05});t.observe(fr)}function T_(){if(cancelAnimationFrame(ks),ks=0,fr=document.querySelector(h_),!!fr&&(Xo=[...fr.querySelectorAll(".coverflow__item")],ta=fr.querySelector(".history__stage"),!(!Xo.length||!ta))){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){fr.removeAttribute("data-mode");return}fr.setAttribute("data-mode","pin"),x_(),kl=-1,Ol=-1,Cl=[],md(0),Ha?.disconnect(),Dl=!1,Ha=new IntersectionObserver(([n])=>{Dl=n.isIntersecting},{rootMargin:"100% 0px"}),Ha.observe(fr),ks=requestAnimationFrame(_d)}}const w_="[data-pillars]",Nl=(n,t,e)=>Math.min(e,Math.max(t,n));let we=null,Ho=null,He=[],ea=[],Ds=0,Il=-1,Fl=!1,za=null;function Ic(n){const t=He.length;He.forEach((r,i)=>{const o=Nl(n-i,0,1);r.style.setProperty("--fill",o.toFixed(3))});const e=Nl(Math.floor(n),0,t-1);return ea[e]?.style.setProperty("--seg",(n-e).toFixed(3)),e}function Fc(n){n!==Il&&(Il=n,He.forEach((t,e)=>{t.setAttribute("aria-selected",String(e===n)),t.tabIndex=e===n?0:-1}),ea.forEach((t,e)=>t.classList.toggle("is-on",e===n)))}function E_(){const n=Ho.querySelectorAll("[data-reveal]");if(!n.length)return;const t=new IntersectionObserver(e=>{for(const r of e)if(r.isIntersecting){for(const i of n)i.classList.add("is-in");t.disconnect()}},{threshold:.05});t.observe(we)}function gd(){return parseFloat(getComputedStyle(Ho).top)||0}function vd(){return we.getBoundingClientRect().height-Ho.offsetHeight}function Yu(n){const t=we.getBoundingClientRect().top+window.scrollY,e=vd();return e<=0?t:t-gd()+e*((n+.5)/He.length)}function yd(){if(Ds=requestAnimationFrame(yd),!Fl||!we)return;const n=vd();if(n<=0)return;const t=Nl((gd()-we.getBoundingClientRect().top)/n,0,1);Fc(Ic(t*He.length))}function b_(){He.forEach((n,t)=>{n.addEventListener("click",()=>{if(Fc(t),we.getAttribute("data-mode")!=="pin"&&Ic(t+.5),we.getAttribute("data-mode")==="pin"){const e=window.__cfigScroll&&window.__cfigScroll.lenis;e?e.scrollTo(Yu(t)):window.scrollTo({top:Yu(t),behavior:"smooth"})}}),n.addEventListener("keydown",e=>{const r=e.key==="ArrowRight"||e.key==="ArrowDown"?1:e.key==="ArrowLeft"||e.key==="ArrowUp"?-1:0;if(!r)return;e.preventDefault();const i=(t+r+He.length)%He.length;He[i].click(),He[i].focus()})})}function R_(){cancelAnimationFrame(Ds),Ds=0,za?.disconnect(),we=document.querySelector(w_),we&&(Ho=we.querySelector(".pillars"),He=[...we.querySelectorAll('[role="tab"]')],ea=[...we.querySelectorAll('[role="tabpanel"]')],!(!Ho||He.length!==ea.length||!He.length)&&(we.setAttribute("data-ready",""),E_(),b_(),Il=-1,Ic(0),Fc(0),!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&window.matchMedia("(min-width: 901px)").matches&&(we.setAttribute("data-mode","pin"),Fl=!1,za=new IntersectionObserver(([n])=>{Fl=n.isIntersecting},{rootMargin:"100% 0px"}),za.observe(we),Ds=requestAnimationFrame(yd))))}const A_=matchMedia("(prefers-reduced-motion: reduce)").matches,Gu=".sections .quote, .band > .statement",Vu=20;let ps=[];function S_(){for(const n of ps)n.kill();if(ps=[],!A_){for(const n of document.querySelectorAll(Gu))n.closest("[data-collapse-rest]")||ps.push(B.create({trigger:n,start:"top bottom",end:"bottom top",scrub:!0,animation:dr.fromTo(n,{"--drift":`${Vu}px`},{"--drift":`${-Vu}px`,ease:"none"})}));window.__cfigDrift={marks:ps,targets:Gu}}}const Ku="[data-collapse]",xd="[data-collapse-rest]",Td="[data-collapse-toggle]",M_=.5,L_=3,P_=matchMedia("(prefers-reduced-motion: reduce)").matches,Ba="is-collapsed";let ju=!1;function Os(n){const t=n.querySelector("p")||n;if(t!==n&&n.querySelectorAll("p").length>1)return Math.ceil(t.offsetHeight);const e=getComputedStyle(t),r=parseFloat(e.lineHeight),i=Number.isFinite(r)?r:parseFloat(e.fontSize)*1.65,o=Math.max(L_,Math.round(n.scrollHeight*M_/i));return Math.round(o*i)}function wd(n,t){dr.killTweensOf(n),n.style.maxHeight=t}const Ed=n=>n.getAttribute("aria-expanded")==="true";function k_(n){const t=n.querySelector(xd),e=n.querySelector(Td);if(!t||!e)return;const r=s=>s?e.dataset.less||"Skrýt text":e.dataset.more||"Zobrazit celý text",i=e.querySelector(".more__label"),o=s=>{e.setAttribute("aria-expanded",String(s)),e.setAttribute("aria-label",r(s)),i&&(i.textContent=r(s)),n.classList.toggle(Ba,!s);const a=t.getBoundingClientRect().height,l=s?t.scrollHeight:Os(t);dr.killTweensOf(t),dr.fromTo(t,{maxHeight:`${a}px`},{maxHeight:`${l}px`,duration:P_?0:.42,ease:"power2.inOut",onComplete:()=>{s&&(t.style.maxHeight="none"),Uh()}})};if(t.scrollHeight<=Os(t)+8){e.hidden=!0,t.style.maxHeight="none",n.classList.remove(Ba);return}e.hidden=!1,e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label",r(!1)),i&&(i.textContent=r(!1)),n.classList.add(Ba),wd(t,`${Os(t)}px`),e.addEventListener("click",()=>o(!Ed(e)))}function D_(){for(const n of document.querySelectorAll(Ku))k_(n);ju||(ju=!0,addEventListener("resize",()=>{for(const n of document.querySelectorAll(Ku)){const t=n.querySelector(xd),e=n.querySelector(Td);!t||!e||e.hidden||Ed(e)||wd(t,`${Os(t)}px`)}},{passive:!0}))}const O_=.7;let ra=0;function $a(){ra=document.querySelector("main#content .vhero-space")?Math.round((window.innerHeight||0)*O_):0}typeof window<"u"&&(document.addEventListener("astro:page-load",$a),addEventListener("resize",$a,{passive:!0}),$a(),window.__cfigHeroPx=()=>Rd());const bd=()=>{if(!ra)return 0;const n=parseFloat(document.documentElement.style.getPropertyValue("--hero-scene"));return Number.isFinite(n)?n*(window.innerHeight||0):ra},Rd=()=>bd(),Ad=()=>{if(!ra)return 0;const n=parseFloat(document.documentElement.style.getPropertyValue("--hero-track"));return Number.isFinite(n)?n*(window.innerHeight||0):bd()},n1=()=>Ad(),C_=()=>Math.max(0,(window.scrollY||0)-Ad()),i1=()=>Math.max(0,(window.scrollY||0)-Rd()),N_=1.1,I_=.06,R=new URLSearchParams(location.search),Zu=R.get("lift"),F_=n=>Zu==="1"?!0:Zu==="0"?!1:n!=="map",U_=R.has("poolr")?Number(R.get("poolr")):.34,q_=R.has("poolg")?Number(R.get("poolg")):4.6,$i=R.has("tapn")?Number(R.get("tapn")):5,Sd=R.has("tapr")?Number(R.get("tapr")):.55,Md=R.has("taps")?Number(R.get("taps")):2.4,W_=R.has("tapf")?Number(R.get("tapf")):.4,Ld=R.has("tapj")?Number(R.get("tapj")):.16,X_=R.has("tapup")?Number(R.get("tapup")):.07,Pd=R.has("tapdn")?Number(R.get("tapdn")):.72,H_=R.has("tapg")?Number(R.get("tapg")):5.5,kd=R.has("twr")?Number(R.get("twr")):2.2,Dd=R.has("tws")?Number(R.get("tws")):2.6,z_=R.has("tww")?Number(R.get("tww")):.62,B_=R.has("twh")?Number(R.get("twh")):.1,Od=R.has("twf")?Number(R.get("twf")):.62,$_=Math.max(Sd/Md+Ld+Pd*4,kd/Dd+Od*3),Y_=R.has("wordgain")?Number(R.get("wordgain")):6,G_=R.has("wordlit")?Number(R.get("wordlit")):.5,V_=R.has("worddot")?Number(R.get("worddot")):.4,K_=["0","1","2"].includes(R.get("wordcell"))?+R.get("wordcell"):0,j_=R.has("wordhalo")?Number(R.get("wordhalo")):0,Z_=R.has("wordcore")?Number(R.get("wordcore")):1,Q_=R.has("wordx")?Number(R.get("wordx")):.5,J_=R.has("wordy")?Number(R.get("wordy")):.82,tg=R.has("wordw")?Number(R.get("wordw")):.5,eg=R.has("wordhaze")?Number(R.get("wordhaze")):0;let Ul=1600/154.6;const rg="/assets/tronexo-word.svg",br={dot:V_,lit:G_,halo:j_,core:Z_,gain:Y_,x:Q_,y:J_,w:tg},ng=1.1,ig=.7,Qu=4,Ju=Number(new URLSearchParams(location.search).get("focal")),tf=Number(new URLSearchParams(location.search).get("camy")),Vo={FOCAL:Ju>0?Ju:.62,ROLL:-.2,YAW:.22,CAM_Y:tf>0?tf:.75,CELL:.055},Ko=Vo.FOCAL,Vr=Vo.ROLL,er=Vo.YAW,Kn=Vo.CAM_Y,Cd=Vo.CELL,og=.055,sg=.25,ag=.1,jo=.22,lg=.78,cg=2,ug=6,fg=3,hg=2.6,dg=0,pg=.7,mg=22,_g=1.5,gg=.012,vg=2.6,yg=.085,Uc=()=>R.get("floor")||(document.body&&document.body.dataset.route==="realEstate"?"map":""),Nd=n=>!(Id(n)||Fd(n)||Ei(n)),Id=n=>n==="draft",Fd=n=>n==="city",Ei=n=>n==="map",_a=6,xg=R.has("wavev")?Number(R.get("wavev")):520,qc=R.has("wavelife")?Number(R.get("wavelife")):1.7,Tg=R.has("waver")?Number(R.get("waver")):820,wg=R.has("wavetail")?Number(R.get("wavetail")):120,ga=R.has("mapm")?Number(R.get("mapm")):310,Eg=R.has("mapy")?Number(R.get("mapy")):3.2,bg=R.has("mapnear")?Number(R.get("mapnear")):1.72,Rg=R.has("mapside")?Number(R.get("mapside")):-.4,Ag=R.get("mapink")||"#7d9dc0",Wc=R.get("relief")!=="0",Ud=R.has("relmax")?Number(R.get("relmax")):42,Xc=7500,Hc=R.has("relgain")?Number(R.get("relgain")):1,Sg=R.has("relsteps")?Number(R.get("relsteps")):24,ql=R.has("relfar")?Number(R.get("relfar")):7,Mg=R.has("relwall")?Number(R.get("relwall")):.62,Lg=R.has("relink")?Number(R.get("relink")):.29,Pg=R.has("relsun")?Number(R.get("relsun")):145,kg=R.has("rellit")?Number(R.get("rellit")):.75,Dg=R.get("relsharp")!=="0",Og=R.has("relshadow")?Number(R.get("relshadow")):.45,Cg=R.has("relsunh")?Number(R.get("relsunh")):34,Ng=R.has("relshsteps")?Number(R.get("relshsteps")):8,Ig=R.has("fade0")?Number(R.get("fade0")):.0016,Fg=R.has("fade1")?Number(R.get("fade1")):.006,Ug=R.get("haze2")||"#0a1420",qg=R.has("haze0")?Number(R.get("haze0")):999,Wg=R.has("haze1")?Number(R.get("haze1")):1e3,Xg=R.has("block")?Number(R.get("block")):.52,Hg=R.has("street")?Number(R.get("street")):.075,zg=R.has("ave")?Number(R.get("ave")):4,Bg=R.has("jit2")?Number(R.get("jit2")):.22,$g=R.has("river")?Number(R.get("river")):3.1,Yg=R.has("rw")?Number(R.get("rw")):.42,Gg=R.has("mean")?Number(R.get("mean")):.7,Vg=R.has("period")?Number(R.get("period")):11,Kg=R.get("mark")||"#e2b04a",jg=R.has("markdot")?Number(R.get("markdot")):.17,Zg=R.has("markm")?Number(R.get("markm")):10,qd=1/17.5,Qg=(R.has("fine")?Number(R.get("fine")):10)*qd,Jg=(R.has("main")?Number(R.get("main")):40)*qd,tv=R.has("w1")?Number(R.get("w1")):1,ev=R.has("w2")?Number(R.get("w2")):1.6,rv=R.has("w3")?Number(R.get("w3")):3.2,nv=R.has("a1")?Number(R.get("a1")):.16,iv=R.has("a2")?Number(R.get("a2")):.42,ov=R.has("tick")?Number(R.get("tick")):.7,sv=R.has("plot")?Number(R.get("plot")):1,av=R.get("ink")||"#6d8fb5",ms=n=>{const t=parseInt(n.replace("#",""),16);return`vec3(${(t>>16&255)/255}, ${(t>>8&255)/255}, ${(t&255)/255})`},lv=.35,cv=.85,I=n=>Number.isInteger(n)?`${n}.0`:`${n}`,uv=`
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`,fv=n=>`#extension GL_OES_standard_derivatives : enable
precision highp float;

// ОТКЛИК НА КЛИК И ОБЪЁМ КАРТЫ объявляются ПЕРВЫМИ: ниже по нему заводятся унии, а дефайн,
// поставленный после них, для препроцессора всё равно что ноль.
#define TAPS ${Nd(n)?$i:0}
#define TAP_R ${I(Sd)}
#define TAP_SPEED ${I(Md)}
#define TAP_FILL ${I(W_)}
#define TAP_JIT ${I(Ld)}
#define TAP_UP ${I(X_)}
#define TAP_DOWN ${I(Pd)}
#define TAP_GAIN ${I(H_)}
#define RELIEF ${Ei(n)&&Wc?1:0}
#define REL_MAX_M ${I(Ud)}
#define REL_WIN_M ${I(Xc)}
#define REL_GAIN ${I(Hc)}
#define REL_STEPS ${Sg}
#define REL_FAR ${I(ql)}
#define REL_WALL ${I(Mg)}
#define REL_INK ${I(Lg)}
#define REL_SUN ${I(Pg*Math.PI/180)}
#define REL_LIT ${I(kg)}
#define REL_SHADOW ${I(Og)}
#define REL_SUNTAN ${I(Math.tan(Cg*Math.PI/180))}
#define REL_SHSTEPS ${Ng}
#define TAPW_R ${I(kd)}
#define TAPW_SPEED ${I(Dd)}
#define TAPW_W ${I(z_)}
#define TAPW_H ${I(B_)}
#define TAPW_FADE ${I(Od)}
// ОТКЛИК КАРТЫ: волна по улицам и дом под курсором.
#define FXWAVE ${Ei(n)?1:0}
#define FXHOUSE ${Ei(n)?1:0}
#define WAVE_N ${_a}
#define WAVE_SPEED ${I(xg)}
#define WAVE_LIFE ${I(qc)}
#define WAVE_R ${I(Tg)}
#define WAVE_TAIL ${I(wg)}

uniform vec2 uRes;
uniform float uOffset;
uniform float uTime;
uniform vec3 uDot;
uniform float uDotA;
uniform vec3 uWash;
uniform sampler2D uNoise;
uniform vec3 uMouse;   // xy — курсор в пикселях кадра, z — сила отклика
// Радиус и высота холма. Унией, а не дефайном: их подбирают замером, а с
// дефайном каждая проба требовала бы пересборки шейдера.
uniform vec2 uLift;
// Пятно света под знаком: xy — точка в пикселях кадра, z — сила. Знак стоит
// над дорожкой и до сих пор с ней не был связан ничем: висел сам по себе.
uniform vec3 uSign;
uniform vec2 uPool;    // радиус пятна в единицах пола и его сила
// СЛОВО ИЗ ТОЧЕК: готовая маска, её место в кадре (xy — середина, zw —
// половина dimlineа, в пикселях кадра), сила проступания и цвет раздела.
uniform sampler2D uWord;
uniform sampler2D uGlyph;   // полоса знаков для чертежа
uniform sampler2D uCity;    // подложка города, один канал
#if RELIEF
// ПОЛЕ ВЫСОТ ГОРОДА, один канал: 0 — земля, 255 — REL_MAX_M метров.
// Отдельной картинкой и вчетверо грубее рисунка: силуэт дома можно разрешать
// метром-другим, улицу нельзя, а второй канал у карты стоил бы ещё
// шестидесяти семи мегабайт видеопамяти.
uniform sampler2D uHeight;
// Сторона поля высот в пикселях. УНИЕЙ, а не числом в шейдере: её знает
// только сам файл карты, и зашитое число разъехалось бы с ним молча — ровно
// так, как разъехались умолчания пекаря с тем, чем карту пекут.
uniform float uHPx;
#endif
uniform vec2 uSpots[5];     // места проектов в долях подложки
// Где мы на пути, дробно: по нему решается, каким точкам гореть. Показываются
// только соседние — предыдущая, нынешняя и следующая; прочие на карте лишние,
// они уводят взгляд с той дороги, по которой едем.
uniform float uSpotAct;
// Сила КАЖДОГО кольца от рассказа (uRingsOn = 1): кольцо горит вместе
// с лучом своего здания — иначе на дальнем подъезде луч уже стоит, а кольцо
// под ним тусклое и мелкое, как у соседа по пути. Своё «on» карты при этом
// не участвует вовсе: в паузе между зданиями оно снова зажигало только что
// погасшее кольцо на полную.
uniform float uRings[5];
uniform float uRingsOn;
uniform vec2 uMapCen;       // какая точка карты стоит под зданием
// ОХВАТ ПОДЛОЖКИ — УНИЕЙ, А НЕ ДЕФАЙНОМ. Он считается из самой карты
// (её окно записано рядом с ней), и зашивать его числом в шейдер значит
// ломать карту всякий раз, когда её перепекли на другой охват.
uniform float uMapSpan;
#if FXWAVE
// Кольцо волн: xy — место клика в долях подложки, z — возраст в секундах
// (меньше нуля — место пустует).
uniform vec4 uWaves[WAVE_N];
#endif
#if FXWAVE || FXHOUSE
uniform float uMapM;        // сторона подложки в метрах
#endif
#if FXHOUSE
// Маска домов вокруг курсора (рисоватьМаску в JS): r — дом под курсором,
// g — дом, с которого курсор ушёл. uHouseBox — её место в долях подложки:
// xy — угол, zw — размер.
uniform sampler2D uHouseMask;
uniform vec4 uHouseBox;
uniform float uHouseOn;
// ОКНА — ПУЛ ИЗ ЧЕТЫРЁХ ДОМОВ, по каналу маски на дом (r, g, b, a).
// uWinLv — уровень каждого 0..1 (растёт за 1 с, гаснет за 0.6 с), uWinFloor —
// высота этажа, uWinAx0 / uWinAx1 — главная ось дома (xy, zw) в долях
// подложки. По оси, а не по уклону маски, меряется «вдоль стены»: уклон на
// кромке шумит, и окна рассыпались крошкой.
uniform vec4 uWinLv;
uniform vec4 uWinFloor;
uniform vec4 uWinAx0;
uniform vec4 uWinAx1;
#endif
// Радиус точки проекта В ДОЛЯХ ПОДЛОЖКИ: при увеличении карты точка обязана
// расти вместе с городом, а не оставаться прежней кляксой на полу.
uniform float uMarkR;
// Поворот карты: косинус и синус. Ведёт его рассказ — карта разворачивается
// не сама, а по прокрутке, когда путь заворачивает к следующему проекту.
uniform vec2 uMapRot;
// ПЯТНО ЗАСТРОЙКИ: xy — середина в единицах пола, zw — полудлина и полуширина.
// Поворот отдельной унией (косинус и синус), сила — нулём гасится целиком.
uniform vec4 uPlot;
uniform vec2 uPlotRot;
// То же место, но БЕЗ хода решётки: им пользуется карта. См. разбор в ПЯТНО.
uniform vec2 uPlotS;
uniform float uPlotAmt;
uniform float uPlotLen;    // длина здания в метрах — идёт на размерную линию
uniform float uWordAmt;
uniform vec4 uWordBox;
uniform vec3 uWordTint;
// ВИД РАЗГОРЕВШЕЙСЯ ТОЧКИ — УНИЯМИ, А НЕ ДЕФАЙНАМИ. Эти четыре числа
// подбираются глазами, и с дефайном каждая проба требовала бы пересборки
// шейдера: панель подбора двигала бы ползунок, а кадр не менялся бы.
// Обжёгся на этом раньше — заказчик двигал ползунки, а ничего не менялось.
// x — dimline налитой точки долей клетки, y — до какой яркости она горит,
// z — ореол вокруг неё, w — насколько середина остаётся калёной.
uniform vec4 uWordLook;
uniform float uWordGain;

#if TAPS > 0
// ОТКЛИК НА КЛИК. На каждый живой клик — три числа: место в координатах пола
// (те же, в каких стоит решётка, то есть С ходом) и сколько секунд прошло
// с нажатия. Отрицательный возраст значит, что место в кольце пустует.
uniform vec3 uTaps[TAPS];
uniform vec3 uTapTint;    // цвет раздела: на Tronexo зелёный, на прочих свой
// Жива ли хоть одна волна. Унией, а не проверкой в цикле: пока кликов нет,
// поле не должно платить за уточнение пересечения ни одним лишним шагом,
// а узнать это дешевле снаружи, чем перебирать кольцо в каждом фрагменте.
uniform float uTapLive;
#endif

// Во сколько раз пятно под знаком ниже, чем шире: круг на полу под таким
// наклоном камеры виден сплюснутым примерно втрое.
#define POOL_SQUASH 2.8
// Сила дымки в середине пятна, долей непрозрачности.
#define POOL_HAZE 0.05
// Во сколько раз ярче горят точки под буквой проступающего слова и сколько
// добавляется дымки внутри букв.
#define WORD_HAZE ${I(eg)}
#define WORD_CELL ${K_}

#define DRAFT ${Id(n)?1:0}
#define CITY ${Fd(n)?1:0}
#define MAP ${Ei(n)?1:0}

#define MAP_Y0 ${I(Eg)}
#define MAP_INK ${ms(Ag)}
#define MAP_M ${I(ga)}
#define MAP_FADE0 ${I(Ig)}
#define MAP_FADE1 ${I(Fg)}
#define MAP_HAZE ${ms(Ug)}
#define MAP_HAZE0 ${I(qg)}
#define MAP_HAZE1 ${I(Wg)}
#define MAP_DBG ${R.get("mapdbg")?1:0}
#define CT_BLOCK ${I(Xg)}
#define CT_STREET ${I(Hg)}
#define CT_AVE ${I(zg)}
#define CT_JIT ${I(Bg)}
#define CT_RIVER ${I($g)}
#define CT_RW ${I(Yg)}
#define CT_MEANDER ${I(Gg)}
#define CT_PERIOD ${I(Vg)}
#define CT_MARK ${ms(Kg)}
#define MARK_DOT ${I(jg)}
#define DR_FINE ${I(Qg)}
#define DR_MAIN ${I(Jg)}
#define DR_W1 ${I(tv)}
#define DR_W2 ${I(ev)}
#define DR_W3 ${I(rv)}
#define DR_A1 ${I(nv)}
#define DR_A2 ${I(iv)}
#define DR_TICK ${I(ov)}
#define DR_PLOT ${I(sv)}
#define DR_INK ${ms(av)}

#define FOCAL ${I(Ko)}
#define ROLL ${I(Vr)}
#define YAW ${I(er)}
#define CAM_Y ${I(Kn)}
#define CELL ${I(Cd)}
#define DOT_R ${I(og)}
#define HALO_R ${I(sg)}
#define HALO ${I(ag)}
#define NEAR ${I(jo)}
#define NEAR_SOFT ${I(lg)}
#define FADE_NEAR ${I(cg)}
#define FADE_FAR ${I(ug)}
#define SIDE ${I(fg)}
#define SIDE_SOFT ${I(hg)}
#define SIDE_MID ${I(dg)}
#define NOISE_CELLS ${I(_g)}
#define NOISE_DRIFT ${I(gg)}
#define FLARE ${I(vg)}
#define WASH ${I(yg)}


// Пол. Возвращает (яркость точек, покрытие плоскости).
// Высота и поворот берутся из констант: плоскость одна, и параметры,
// заведённые когда-то ради второй, были бы мёртвой общностью.
// Высота холма под курсором в точке пола q. Спад дважды сглажен: у подошвы
// холм сходит на нет без излома, у вершины — без острия.
float lift(vec2 q, vec2 mq, float amt) {
  float t = clamp(1.0 - length(q - mq) / uLift.x, 0.0, 1.0);
  return amt * uLift.y * t * t * (3.0 - 2.0 * t);
}

#if TAPS > 0
/**
 * ВЫСОТА ПОЛОТНА ОТ КЛИКА: расходящийся вал.
 *
 * Гребень стоит на расстоянии age * TAPW_SPEED от места удара и уходит всё
 * дальше. Поперёк себя вал имеет вид одного горба (приподнятый косинус),
 * а не синусоиды: череда колец читалась бы мишенью, а один вал — тем, что
 * полотно повело.
 *
 * Гасится дважды — со временем и с расстоянием. Только временем нельзя:
 * вал дошёл бы до края кадра в полную силу и обрубился там ровной чертой.
 */
float tapWave(vec2 q) {
  float h = 0.0;
  for (int i = 0; i < TAPS; i++) {
    float age = uTaps[i].z;
    if (age < 0.0) continue;
    float dist = length(q - uTaps[i].xy);
    if (dist > TAPW_R) continue;
    float off = dist - age * TAPW_SPEED;     // насколько мы от гребня
    if (abs(off) > TAPW_W) continue;
    float crest = 0.5 + 0.5 * cos(3.14159265 * off / TAPW_W);
    float byTime = exp(-age / TAPW_FADE);
    float byFar = 1.0 - smoothstep(TAPW_R * 0.35, TAPW_R, dist);
    h += TAPW_H * crest * byTime * byFar;
  }
  return h;
}
#endif

// ПОЛЕ СТОИТ ДО ОБЩЕГО БЛОКА ЧЕРТЕЖА, И ЭТО ВАЖНО. Сперва я вложил его
// внутрь общего условия чертежа, плана и карты — а на Тикете все три ложны,
// и блок выключился вместе с полем: шейдер не собрался с «pitch: no matching
// overloaded function found». Функция вида покрытия обязана жить под СВОИМ
// условием, а не под чужим.
// ОБЩИЙ БЛОК ЧЕРТЕЖА И ПЛАНА. Помощники (перо, засечка, знак, отрезок,
// кольцо, число) нужны обоим, и держать их под одним только #if DRAFT нельзя:
// на плане кварталов они просто выключались вместе с ним, и сборка падала
// на «city: no matching overloaded function found».
#if DRAFT || CITY || MAP
// Одна линия сетки: расстояние до ближайшей в единицах пола, толщина —
// в пикселях кадра. Оттого линия не расплывается вблизи и не рассыпается
// вдали: у чертежа толщина пера постоянна, сколько ни отойди.
float pen(float x, float step, float px, float wq) {
  float d = abs(fract(x / step + 0.5) - 0.5) * step;
  float t = px * wq * 0.5;
  return 1.0 - smoothstep(t, t + wq, d);
}

// Засечка разбивочной оси: короткий штрих под сорок пять градусов на
// пересечении крупных линий. Ею на стройке и отмечают ось — не стрелкой.
float tick(vec2 q, float step, float wq) {
  vec2 m = (fract(q / step + 0.5) - 0.5) * step;   // место внутри клетки
  float r = length(m);
  if (r > step * 0.1) return 0.0;
  // расстояние до диагонали, идущей через пересечение
  float d = abs(m.x - m.y) * 0.7071;
  float t = DR_W2 * wq * 0.5;
  return (1.0 - smoothstep(t, t + wq, d)) * (1.0 - smoothstep(step * 0.06, step * 0.1, r));
}

// Знак из полосы: idx — номер клетки, c — середина знака в единицах пола,
// h — его высота там же. Знак ЛЕЖИТ НА ПОЛУ и потому уходит в перспективу
// вместе с разметкой — как краска на площадке, а не наклейка на экране.
float glyph(vec2 q, vec2 c, float h, float idx) {
  vec2 uv = (q - c) / h;
  if (abs(uv.x) > 0.5 || abs(uv.y) > 0.5) return 0.0;
  return texture2D(uGlyph, vec2((idx + uv.x + 0.5) / 16.0, 0.5 - uv.y)).a;
}

// Отрезок между двумя точками: расстояние до него, толщина в пикселях.
float seg(vec2 q, vec2 a, vec2 b, float px, float wq) {
  vec2 ab = b - a;
  float h = clamp(dot(q - a, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
  float d = length(q - a - ab * h);
  float t = px * wq * 0.5;
  return 1.0 - smoothstep(t, t + wq, d);
}

// Кольцо разбивочной оси.
float ring(vec2 q, vec2 c, float r, float px, float wq) {
  float d = abs(length(q - c) - r);
  float t = px * wq * 0.5;
  return 1.0 - smoothstep(t, t + wq, d);
}

// ЧИСЛО РАЗРЯДАМИ. Цифры в наборе идут по порядку, поэтому номер клетки
// и есть сама цифра: печатаем сотни, десятки, единицы, точку и десятую.
// Так на чертеже стоит настоящая длина здания, а не подпись «для вида».
float number(vec2 q, vec2 c, float h, float v) {
  // ЦЕЛЫЕ МЕТРЫ. Десятая доля на плане такого масштаба не читается вовсе,
  // а собирать её в шейдере — лишний разряд и лишняя щель между знаками.
  float st = h * 0.6;
  float n = floor(v + 0.5);
  float d100 = floor(mod(n / 100.0, 10.0));
  float d10 = floor(mod(n / 10.0, 10.0));
  float d1 = floor(mod(n, 10.0));
  float three = step(0.5, d100);
  float wide = (three + 2.0) * st + st * 0.9;      // ширина всей подписи с «м»
  float x = -wide * 0.5 + st * 0.5;
  float g = 0.0;
  g += three * glyph(q, c + vec2(x, 0.0), h, d100);
  x += three * st;
  g += glyph(q, c + vec2(x, 0.0), h, d10);
  x += st;
  g += glyph(q, c + vec2(x, 0.0), h, d1);
  x += st * 1.05;
  g += glyph(q, c + vec2(x, 0.0), h, 11.0);
  return g;
}

/** Случайное число по целому: разброс кварталов. */
float rnd1(float n) { return fract(sin(n * 127.1) * 43758.5453); }

/**
 * Одна улица: расстояние до ближайшей с разбросом. Возвращает и саму линию
 * борта, и номер квартала — по нему решается, проспект это или переулок.
 */
float streetLine(float x, out float idx, out float wide) {
  float k = floor(x / CT_BLOCK + 0.5);
  idx = k;
  wide = step(0.5, 1.0 - abs(mod(k, CT_AVE)));    // каждая CT_AVE-я — проспект
  float jit = (rnd1(k) - 0.5) * CT_BLOCK * CT_JIT;
  return x - (k * CT_BLOCK + jit);
}

/**
 * План кварталов. Улицы рисуются ДВУМЯ БОРТАМИ, а не осевой линией: полоса
 * между бортами и есть улица, и именно она читается городом. Осевая остаётся
 * только у проспектов — так их и показывают на планах.
 */
float city(vec2 q, float w, float depth, out vec3 colOut) {
  colOut = DR_INK;
  float wq = w * CELL;

  // РЕКА. Мягкая лента поперёк плана; улицы через неё не идут.
  float bend = sin(q.x * CT_MEANDER) * CT_BLOCK * 0.9 + sin(q.x * CT_MEANDER * 0.37) * CT_BLOCK * 0.5;
  float ry = mod(q.y - CT_RIVER, CT_PERIOD) - CT_PERIOD * 0.5;
  float rd = abs(ry - bend) - CT_RW * 0.5;
  float water = 1.0 - step(0.0, rd);
  float bank = 1.0 - smoothstep(DR_W2 * wq * 0.5, DR_W2 * wq * 0.5 + wq, abs(rd));

  float ix, iy, wx, wy;
  float dx = streetLine(q.x, ix, wx);
  float dy = streetLine(q.y, iy, wy);
  float hw = CT_STREET * 0.5 * (1.0 + wx);        // проспект вдвое шире
  float hh = CT_STREET * 0.5 * (1.0 + wy);

  // Борта: две линии по краям полосы улицы.
  float t1 = DR_W1 * wq * 0.5;
  float kerbX = 1.0 - smoothstep(t1, t1 + wq, abs(abs(dx) - hw));
  float kerbY = 1.0 - smoothstep(t1, t1 + wq, abs(abs(dy) - hh));
  // Осевая проспекта — пунктиром.
  float axX = wx * (1.0 - smoothstep(t1, t1 + wq, abs(dx))) * step(0.42, fract(q.y / (CT_BLOCK * 0.12)));
  float axY = wy * (1.0 - smoothstep(t1, t1 + wq, abs(dy))) * step(0.42, fract(q.x / (CT_BLOCK * 0.12)));

  float streets = max(max(kerbX, kerbY), max(axX, axY) * 0.8) * (1.0 - water);
  float ink = streets * DR_A2 + bank * DR_TICK;

  // Мелкая расчерковка внутри квартала: следы застройки. Гаснет вдали
  // первой — на таком плане её и не должно быть видно издалека.
  float fine = 1.0 - smoothstep(CT_BLOCK * 0.06, CT_BLOCK * 0.22, wq);
  float lot = max(pen(q.x, CT_BLOCK * 0.25, DR_W1, wq), pen(q.y, CT_BLOCK * 0.25, DR_W1, wq));
  ink = max(ink, lot * DR_A1 * 0.7 * fine * (1.0 - water));

  // Вода чуть светлее суши — иначе река читается дырой.
  colOut = mix(colOut, DR_INK * 1.25, water * 0.5);
  ink = max(ink, water * 0.05);

  // ─── ПЯТНА ПРОЕКТОВ ────────────────────────────────────────────────────
  // Пять мест на плане, по одному на проект: заполненный квадратик в кольце.
  // Это единственное цветное на всём плане — они «наши».
  float mark = 0.0;
  float py = mod(q.y, CT_PERIOD);
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    vec2 c = vec2((rnd1(fi * 7.3) - 0.5) * CT_BLOCK * 7.0,
                  CT_PERIOD * (0.12 + 0.17 * fi));
    vec2 d = vec2(q.x, py) - c;
    float box = 1.0 - smoothstep(CT_BLOCK * 0.14, CT_BLOCK * 0.15, max(abs(d.x), abs(d.y) * 1.6));
    float rg = ring(vec2(q.x, py), c, CT_BLOCK * 0.3, DR_W2, wq);
    mark = max(mark, max(box, rg));
  }
  colOut = mix(colOut, CT_MARK, clamp(mark, 0.0, 1.0));
  ink = max(ink, mark * 0.8);
  return ink;
}

/**
 * КАРТА ГОРОДА НА ПОЛУ. Подложка — готовая картинка: улиц семьсот с лишним,
 * считать их на пиксель каждый кадр немыслимо, а текстура ложится одним
 * чтением. Тот же приём, что у голограмм: офлайн-отрисовка.
 *
 * Пятна проектов рисуются ПОВЕРХ подложки и золотом раздела — они «наши»
 * и единственное цветное на карте. Тот, о котором сейчас рассказ, горит
 * ярче и обведён кольцом.
 */
/**
 * Место на подложке по точке пола. Вынесено отдельно, потому что объём
 * спрашивает его на каждом шаге луча, а не один раз.
 *
 * Берётся НЕПОДВИЖНАЯ координата пола (без хода решётки): координата пола
 * растёт без конца, и привязанная к ней карта через полсотни метров ушла бы
 * за своё окно. Середину задаёт рассказ.
 */
vec2 mapUvOf(vec2 qs) {
  vec2 anchor = uPlotS;
  vec2 rel = vec2(qs.x - anchor.x, -(qs.y - anchor.y)) / uMapSpan;
  return uMapCen + vec2(rel.x * uMapRot.x - rel.y * uMapRot.y,
                        rel.x * uMapRot.y + rel.y * uMapRot.x);
}

#if RELIEF
/**
 * Направление на солнце В КООРДИНАТАХ КАРТЫ. Солнце задано в кадре, а карта
 * под ходом проезда развёрнута — поворачиваем его тем же поворотом. Иначе
 * лампу возило бы вокруг макета вместе с городом.
 */
vec2 sunMap() {
  vec2 s0 = vec2(cos(REL_SUN), sin(REL_SUN));
  return vec2(s0.x * uMapRot.x - s0.y * uMapRot.y,
              s0.x * uMapRot.y + s0.y * uMapRot.x);
}

/**
 * Высота в этом месте карты, в единицах пола.
 *
 * Множитель k — во сколько раз пригнуть дома. Им город ОСЕДАЕТ К РУБЕЖУ, за которым
 * объём не считается вовсе: без этого дома обрывались бы плашмя по ровной
 * черте поперёк кадра, а черты в городе взяться неоткуда.
 */
float cityH(vec2 uv, float k) {
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
  // Метры в единицы пола: окно карты REL_WIN_M метров укладывается
  // в uMapSpan единиц, и с приближением карты дома растут вместе с городом.
  return texture2D(uHeight, uv).r * REL_MAX_M * REL_GAIN * uMapSpan / REL_WIN_M * k;
}

/**
 * ПРОХОД ЛУЧА СКВОЗЬ СЛОЙ ДОМОВ.
 *
 * Луч входит в слой на высоте самого высокого дома и идёт вниз до земли.
 * На каждом шаге сравниваем, где луч, с тем, что в этом месте стоит: как
 * только луч оказался НИЖЕ крыши — он во что-то уткнулся.
 *
 * Возвращает, попал ли, и отдаёт место попадания и признак стены. Стену
 * от крыши отличаем ДАРОМ, без лишних чтений: если на шаге высота скакнула
 * сильнее, чем луч успел опуститься, значит мы вошли в дом сбоку.
 */
bool cityHit(vec3 d, float cy, float sy, float k, out vec2 uvOut, out float wallOut, out float topOut, out float litOut, out float hAtOut) {
  uvOut = vec2(0.0);
  wallOut = 0.0;
  topOut = 0.0;
  litOut = 1.0;
  hAtOut = 0.0;
  // Потолок слоя: считаем по самой высокой ступени шкалы.
  float hMax = REL_MAX_M * REL_GAIN * uMapSpan / REL_WIN_M * k;
  if (hMax < 1e-5) return false;
  float tBot = -CAM_Y / d.y;
  float tTop = (-CAM_Y + hMax) / d.y;
  if (tTop <= 0.0 || tBot <= tTop) return false;
  float step = (tBot - tTop) / float(REL_STEPS);
  float tPrev = tTop;
  float hPrev = 0.0;
  float rayPrev = hMax;
  for (int i = 1; i <= REL_STEPS; i++) {
    float t = tTop + step * float(i);
    vec3 p = d * t;
    float dep = -p.z;
    vec2 qq = vec2(p.x * cy + dep * sy, -p.x * sy + dep * cy);
    vec2 uv = mapUvOf(qq);
    float h = cityH(uv, k);
    float ray = p.y + CAM_Y;                 // высота луча над картой
    if (ray < h) {
      // УТОЧНЯЕМ ПОПОЛАМ. Без этого кромка крыши идёт ступенями шага,
      // и город стоит как будто на гребёнке.
      float a = tPrev;
      float b = t;
      // Счётчик НЕ k: так звался параметр приседания, и целый счётчик
      // затенял его — шейдер не собирался вовсе.
      for (int j = 0; j < 4; j++) {
        float m = (a + b) * 0.5;
        vec3 pm = d * m;
        float depm = -pm.z;
        vec2 qm2 = vec2(pm.x * cy + depm * sy, -pm.x * sy + depm * cy);
        if (pm.y + CAM_Y < cityH(mapUvOf(qm2), k)) b = m; else a = m;
      }
      vec3 pf = d * b;
      float depf = -pf.z;
      vec2 qf = vec2(pf.x * cy + depf * sy, -pf.x * sy + depf * cy);
      uvOut = mapUvOf(qf);
      float hf = cityH(uvOut, k);
      // Стена или крыша: скачок высоты против того, насколько опустился луч.
      float rose = h - hPrev;         // насколько подскочила крыша
      float fell = rayPrev - ray;     // насколько опустился луч
      wallOut = rose > fell * 1.2 ? 1.0 : 0.0;
      // Доля высоты: у подошвы 0, у карниза 1. Ею стена и оттеняется.
      topOut = hf > 0.0001 ? clamp((pf.y + CAM_Y) / hf, 0.0, 1.0) : 0.0;
      hAtOut = pf.y + CAM_Y;

      // КУДА СМОТРИТ СТЕНА — по уклону поля высот вокруг места попадания.
      // Стена всегда обращена ВНИЗ по уклону: там, где дом кончается,
      // высота падает, и эта сторона и есть наружная.
      //
      // Шаг взят в один пиксель поля высот: меньше нечего спрашивать,
      // больше — и угол берётся уже от соседнего дома.
      float e = 1.0 / uHPx;
      float gx = cityH(uvOut + vec2(e, 0.0), k) - cityH(uvOut - vec2(e, 0.0), k);
      float gy = cityH(uvOut + vec2(0.0, e), k) - cityH(uvOut - vec2(0.0, e), k);
      float gl2 = length(vec2(gx, gy));
      if (gl2 > 1e-6) {
        vec2 n = -vec2(gx, gy) / gl2;
        // Солнце задано В КАДРЕ, поэтому поворачиваем его в карту тем же
        // поворотом, каким карта развёрнута под ход проезда.
        vec2 sun0 = vec2(cos(REL_SUN), sin(REL_SUN));
        vec2 sun = vec2(sun0.x * uMapRot.x - sun0.y * uMapRot.y,
                        sun0.x * uMapRot.y + sun0.y * uMapRot.x);
        litOut = 1.0 - REL_LIT * 0.5 + REL_LIT * 0.5 * dot(n, sun);
      }
      return true;
    }
    tPrev = t;
    hPrev = h;
    rayPrev = ray;
  }
  return false;
}
#endif

#if RELIEF
/**
 * ЗАСЛОНЁН ЛИ СВЕТ. От точки идём к солнцу и смотрим, не встанет ли на пути
 * дом выше, чем поднялся к этому месту солнечный луч.
 *
 * Шагов немного и идут они недалеко: тень нужна У ПОДНОЖИЯ дома, чтобы он
 * стоял на земле, а не парил. Длинные тени через полквартала здесь и не
 * нужны, и стоили бы вчетверо дороже.
 */
float cityShade(vec2 uv, float h0, float k) {
  vec2 sun = sunMap();
  // ДОКУДА ИДТИ — ОТ САМОЙ ВЫСОКОЙ КРЫШИ, а не долей окна карты. Первым
  // заходом я взял 0.06 охвата, то есть 450 метров: дом в десять метров при
  // солнце в 34° кладёт тень длиной пятнадцать, и уже на первом шаге луч
  // уходил выше любой крыши — теней не было вовсе, а кадр выглядел как
  // будто всё считается.
  float hMax = REL_MAX_M * REL_GAIN * uMapSpan / REL_WIN_M;
  float far2 = hMax / REL_SUNTAN;
  for (int i = 1; i <= REL_SHSTEPS; i++) {
    float dm = far2 * float(i) / float(REL_SHSTEPS);
    vec2 uv2 = uv + sun * (dm / uMapSpan);
    if (cityH(uv2, k) > h0 + dm * REL_SUNTAN) return 1.0;
    }
  return 0.0;
}
#endif

#if FXWAVE
/**
 * ВОЛНА ПО УЛИЦАМ. Фронт расходится от места клика, но светится ТОЛЬКО НА
 * ДОРОГАХ: рисунок карты знает их по силе линии (улица 158, главная 255,
 * рельсы 180 из 255; река 140, дома и дворы ниже) — свет бежит по улицам,
 * от перекрёстка к перекрёстку, а между ними кварталы остаются тёмными.
 * Расстояние — в метрах города, поэтому от положения камеры волна не зависит.
 */
float mapWave(vec2 uv, float raw) {
  // Порог — НЕ ПО СИЛЕ ЛИНИИ, А ПО ЕЁ ПЕРЕПАДУ С ОКРЕСТНОСТЬЮ. По силе
  // (улица 0.62) не вышло: на средней дальности подложка мельче пикселя,
  // мипмап смешивает улицу с тёмными кварталами, и светилась одна главная.
  // Улица — линия ярче всего вокруг: сравниваем с тем же местом на два
  // уровня мипмапа грубее. Обвод дома (0.43 на заливке 0.29) даёт перепад
  // меньше и под порог не попадает.
  // Вблизи (подложка крупнее пикселя) работает и простая сила линии.
  float around = texture2D(uCity, uv, 2.5).r;
  float road = max(smoothstep(0.5, 0.58, raw),
                   smoothstep(0.1, 0.2, raw - around) * step(0.3, raw));
  if (road <= 0.0) return 0.0;
  float o = 0.0;
  for (int i = 0; i < WAVE_N; i++) {
    vec4 w = uWaves[i];
    if (w.z < 0.0) continue;
    float dm = length((uv - w.xy) * uMapM);
    float r = w.z * WAVE_SPEED;
    float behind = r - dm;
    if (behind < -16.0 || dm > WAVE_R) continue;
    // Голова фронта яркая и короткая, за ней — тающий след по улице.
    float head = exp(-max(behind, 0.0) / WAVE_TAIL) * (1.0 - smoothstep(0.0, 16.0, -behind));
    float fade = 1.0 - smoothstep(WAVE_LIFE * 0.4, WAVE_LIFE, w.z);
    float reach = 1.0 - smoothstep(WAVE_R * 0.55, WAVE_R, dm);
    o = max(o, head * fade * reach);
  }
  // Улица горит ярко; между ними — лишь слабый отсвет фронта, чтобы волна
  // читалась одним событием, а не россыпью чёрточек.
  return clamp(o * (road * 1.5 + 0.06), 0.0, 1.0);
}
#endif

#if FXHOUSE
float winHash(vec2 c, float s) {
  vec3 p = fract(vec3(c.xyx) * vec3(0.1031, 0.1030, 0.0973) + s);
  p += dot(p, p.yxz + 33.33);
  return fract((p.x + p.y) * p.z);
}

/**
 * ОКНА ДОМА ПОД КУРСОРОМ (заказчик: «пусть в некоторых окнах загорается
 * свет, плавно»). Сетка окон — В МЕТРАХ ГОРОДА: по высоте этаж (из данных
 * дома), вдоль стены шаг 3.2 м; вдоль стены координата берётся проекцией
 * места попадания на касательную к стене, поэтому окна не растягиваются
 * и от камеры не зависят. Горит треть окон, выбор — хешем окна (этаж,
 * колонка), без рядов; у каждого своя задержка 0–0.6 с и разгорание 0.4 с.
 * Возвращает силу света окна, 0 — тёмное.
 */
float houseWindows(vec2 uv, float hitM, float wall) {
  if (uHouseOn <= 0.0 || wall < 0.5 || hitM < 0.8) return 0.0;
  vec2 hb = (uv - uHouseBox.xy) / uHouseBox.zw;
  if (hb.x < 0.0 || hb.y < 0.0 || hb.x > 1.0 || hb.y > 1.0) return 0.0;
  // Чей это дом — по каналу маски вокруг места попадания (кромка стены
  // лежит на границе заливки, поэтому берём максимум по соседям).
  float e = 1.5 / 1024.0;
  vec4 cx1 = texture2D(uHouseMask, hb + vec2(e, 0.0));
  vec4 cx0 = texture2D(uHouseMask, hb - vec2(e, 0.0));
  vec4 cy1 = texture2D(uHouseMask, hb + vec2(0.0, e));
  vec4 cy0 = texture2D(uHouseMask, hb - vec2(0.0, e));
  vec4 c = texture2D(uHouseMask, hb);
  vec4 m = max(c, max(max(cx1, cx0), max(cy1, cy0)));
  // Сильнейший канал и есть дом; его уровень, этаж и ось.
  float best = m.r; float lv = uWinLv.x; float fl = uWinFloor.x; vec2 ax = uWinAx0.xy; float seed = 1.7;
  if (m.g > best) { best = m.g; lv = uWinLv.y; fl = uWinFloor.y; ax = uWinAx0.zw; seed = 4.3; }
  if (m.b > best) { best = m.b; lv = uWinLv.z; fl = uWinFloor.z; ax = uWinAx1.xy; seed = 6.1; }
  if (m.a > best) { best = m.a; lv = uWinLv.w; fl = uWinFloor.w; ax = uWinAx1.zw; seed = 8.9; }
  if (best < 0.4 || lv <= 0.0) return 0.0;
  // Стена почти всегда вдоль одной из двух осей дома: берём ту, что ближе
  // к местной касательной по маске, — у одной стены она одна и та же.
  vec2 gr = vec2(dot(cx1 - cx0, vec4(1.0)), dot(cy1 - cy0, vec4(1.0)));
  float gl3 = length(gr);
  vec2 tang = gl3 > 1e-4 ? vec2(-gr.y, gr.x) / gl3 : ax;
  vec2 ay = vec2(-ax.y, ax.x);
  tang = abs(dot(tang, ax)) >= abs(dot(tang, ay)) ? ax : ay;
  float floorH = max(fl, 2.6);
  float along = dot(uv * uMapM, tang);
  vec2 g = vec2(along / 3.2, hitM / floorH);
  vec2 cell = floor(g);
  vec2 f = fract(g);
  // Сглаживание — постоянной долей ячейки, а не fwidth: касательная по
  // маске на кромке может перескочить, и fwidth там взрывался.
  vec2 aa = vec2(0.06, 0.05);
  float inX = smoothstep(0.24 - aa.x, 0.24 + aa.x, f.x) * (1.0 - smoothstep(0.76 - aa.x, 0.76 + aa.x, f.x));
  float inY = smoothstep(0.30 - aa.y, 0.30 + aa.y, f.y) * (1.0 - smoothstep(0.80 - aa.y, 0.80 + aa.y, f.y));
  float shape = inX * inY;
  if (shape <= 0.0) return 0.0;
  // Хеш — по окну: этаж, колонка и сама стена, так что ряды не выстраиваются.
  float wallId = floor(dot(uv * uMapM, vec2(tang.y, -tang.x)) / 3.0);
  vec2 id = cell + vec2(wallId * 31.0, wallId * 97.0);
  if (winHash(id, seed) > 0.34) return 0.0;
  float lum = winHash(id, 9.1);
  float bright = 0.4 + 0.6 * lum * lum * lum;
  // УРОВЕНЬ, А НЕ ВРЕМЯ. У каждого окна свой порог th (0..1) и ширина
  // разгорания 0.25: на подъёме окна зажигаются вразнобой, на спаде гаснут
  // в обратном порядке, а возврат посреди спада просто идёт дальше от
  // нынешнего уровня — скачков нет.
  // Пороги — по всей шкале уровня (0..1), а не по первым 0.6: тогда яркость
  // дома растёт почти прямо от уровня, без крутого изгиба у нуля, и спад
  // с недогоревшего дома идёт таким же ровным, а не обрывом.
  // Сдвиг клетки — обязателен: хеш с той же клеткой и другой солью
  // коррелирует с выбором окна, и пороги горящих окон все лежали ниже 0.34 —
  // разгорание шло втрое быстрее задуманного, спад — обрывом в конце.
  float th = winHash(id + vec2(17.3, 41.9), 2.0);
  float on = smoothstep(th, th + 0.25, lv * 1.25);
  return shape * bright * on;
}
#endif

float cityMap(vec2 q, float w, float depth, vec3 d, out vec3 colOut) {
  colOut = MAP_INK;
  float wq = w * CELL;

  // КАРТУ ВЕДЁТ РАССКАЗ, А НЕ ПРОКРУТКА. Координата пола растёт без конца
  // (решётка едет под прокрутку), и привязанная к ней карта через полсотни
  // метров уходила за своё окно. Поэтому берётся НЕПОДВИЖНАЯ координата пола
  // (без хода решётки), а середину задаёт рассказ: под зданием всегда стоит
  // точка того проекта, о котором сейчас речь, и карта переезжает от одного
  // к другому вместе с ним.
  // Точка проекта подводится ПОД САМО ЗДАНИЕ, а не в середину кадра: здание
  // стоит сбоку (слева на полосе идёт текст), и карта должна равняться на него.
  // Место здания уже известно — его передаёт рассказ вместе с пятном застройки.
  vec2 qs = vec2(q.x, q.y - uOffset);
  // Место в карте относительно того, что стоит под зданием, и поворот:
  // направление пути всегда смотрит ОТ зрителя вглубь кадра, поэтому на
  // повороте разворачивается сам город, а не камера.
  vec2 anchor = uPlotS;
  vec2 uv = mapUvOf(qs);

  // ОБЪЁМ. До сих пор место на подложке бралось там, где луч встретил
  // ПЛОСКОСТЬ. Теперь — там, где он встретил ГОРОД: крышу или стену дома.
  // Оттого дома и выходят объёмными: их верх закрывает то, что за ними,
  // ровно так, как закрывал бы настоящий дом.
  float wall = 0.0;
  float upto = 0.0;
  float lit = 1.0;
  float shade = 0.0;
  float hitM = 0.0;   // высота точки попадания на стене, метры города
#if RELIEF
  // Считаем ТОЛЬКО ВБЛИЗИ. Дальше дом мельче пикселя, а шагов на него нужно
  // тем больше, чем положе идёт луч: у горизонта их потребовались бы сотни.
  if (depth < REL_FAR && uMapSpan > 0.0) {
    // Город оседает к рубежу: у самой дали дома прижаты к земле, и переход
    // к плоской карте не виден вовсе.
    float k = 1.0 - smoothstep(REL_FAR * 0.55, REL_FAR, depth);
    vec2 uvH;
    float wallH;
    float topH;
    float litH;
    float hAt;
    if (cityHit(d, cos(YAW), sin(YAW), k, uvH, wallH, topH, litH, hAt)) {
      uv = uvH;
      wall = wallH;
      upto = topH;
      lit = litH;
      hitM = hAt / max(REL_GAIN * uMapSpan / REL_WIN_M * k, 1e-6);
      // Тень от соседнего дома — на крыше и на стене тоже: город стоит
      // тесно, и дом через улицу заслоняет свет не хуже своего же угла.
      shade = cityShade(uv, hAt, k);
    } else {
      // Земля: тут тень нужнее всего — по ней и видно, что дома стоят.
      shade = cityShade(uv, 0.0, k);
    }
  }
#endif
  float ink = 0.0;
  float raw = 0.0;
  if (uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0) {
    ink = texture2D(uCity, uv).r;
    raw = ink;
    // Вдали подложка мельче пикселя и даёт рябь: гасим её тем же способом,
    // что и мелкую сетку чертежа.
    // ГДЕ КАРТУ УЖЕ НЕ НАРИСОВАТЬ — ТАМ ЕЁ И НЕ РИСУЕМ. У края кадра пол идёт
    // почти в лоб, и на один пиксель приходится столько города, что от улиц
    // остаются полосы: заказчик увидел это как кривое искажение в углах.
    // Никакой фильтр этого не спасает — там просто нечего показывать.
    // Порог задан В ДОЛЯХ ПОДЛОЖКИ на пиксель: доля, а не единицы пола,
    // потому что охват меняется по ходу проезда.
    float perPx = wq / uMapSpan;
#if MAP_DBG
    // Отладка: сколько подложки приходится на пиксель. Ярче — хуже разрешимо.
    colOut = vec3(1.0, 0.3, 0.1);
    return clamp(perPx / MAP_FADE1, 0.0, 1.0);
#endif
    ink *= 1.0 - smoothstep(MAP_FADE0, MAP_FADE1, perPx);
#if RELIEF
    // СТЕНА НЕ ЧИТАЕТ РИСУНОК КАРТЫ, А НЕСЁТ СВОЙ ТОН.
    //
    // Первым заходом стена бралась оттуда же, откуда крыша, — из подложки
    // по месту попадания луча. Но у стены соседние пиксели попадают в РАЗНЫЕ
    // места рисунка: по вертикали стена занимает десятки пикселей кадра,
    // а на карте ей отведена одна линия обвода дома. От этого по всем стенам
    // шла гребёнка — на кадре видно сразу, и это не мелочь, а главный изъян
    // первого захода.
    //
    // Тон берётся заливкой дома и темнеет к подошве: глазу нужен перепад
    // на сгибе, иначе он не видит, что поверхность повернулась.
    ink = mix(ink, REL_INK * REL_WALL * (0.5 + 0.5 * upto) * lit
      * (1.0 - smoothstep(MAP_FADE0, MAP_FADE1, perPx)), wall);
    // ТЕНЬ ГАСИТ, А НЕ КРАСИТ: карта рисуется одной силой линии, и тень
    // в ней — просто там, где света меньше.
    ink *= 1.0 - REL_SHADOW * shade * (1.0 - smoothstep(MAP_FADE0, MAP_FADE1, perPx));
#endif
  }

  // ПЯТНА ПРОЕКТОВ. Место каждого — доля подложки, поэтому обратный пересчёт
  // в координаты пола, и уже там кольцо с точкой.
  float mark = 0.0;
  float hot = 0.0;
  for (int i = 0; i < 5; i++) {
    vec2 su = uSpots[i];
    // Обратный поворот: из карты в пол.
    vec2 sr = su - uMapCen;
    vec2 sb = vec2(sr.x * uMapRot.x + sr.y * uMapRot.y,
                  -sr.x * uMapRot.y + sr.y * uMapRot.x);
    vec2 sq = anchor + vec2(sb.x * uMapSpan, -sb.y * uMapSpan);
    // Видна ли точка вовсе: только соседи по пути.
    float away = abs(float(i) - uSpotAct);
    float seen = 1.0 - smoothstep(1.0, 1.45, away);
    if (seen < 0.01) continue;
    float on = 1.0 - smoothstep(0.12, 0.5, away);
    on = mix(on, uRings[i], uRingsOn);
    // РАЗМЕР ТОЧКИ — В МЕТРАХ ГОРОДА, а не в долях окна карты. От долей он
    // вырос вдвое, когда карту перепекли на вдвое больший охват: доля окна
    // не мера, мера — метры. Радиус задаётся MARK_M (заказчик просил кольцо
    // меньше: было полста метров, стало двадцать восемь), а у того, о ком
    // сейчас рассказ, он в полтора раза больше.
    float R = uMarkR * uMapSpan * (1.0 + on * 0.55);
    float d = length(qs - sq);
    // СЕРДЦЕВИНА ОТМЕТКИ. Заказчик: «саму точку сделай меньше». Она — место,
    // откуда бьёт луч, и крупной ей быть незачем: кольцо и так показывает,
    // где проект, а жирная середина спорит с подножием луча.
    float dot2 = 1.0 - smoothstep(R * MARK_DOT, R * MARK_DOT + wq, d);
    float rg = 1.0 - smoothstep(DR_W2 * wq * 0.5, DR_W2 * wq * 0.5 + wq, abs(d - R));
    mark = max(mark, max(dot2, rg) * (0.3 + on * 0.7) * seen);
    hot = max(hot, max(dot2, rg) * on);
  }
  colOut = mix(colOut, CT_MARK, clamp(mark * 1.2, 0.0, 1.0));

  // Ночная дымка: чем дальше, тем меньше карты. Точки проектов дымка
  // не трогает — они и должны быть видны издалека.
  float haze = smoothstep(MAP_HAZE0, MAP_HAZE1, depth);
  ink *= 1.0 - haze;
  colOut = mix(colOut, MAP_HAZE, haze * (1.0 - clamp(mark, 0.0, 1.0)));
  float fx = 0.0;
  float winOut = 0.0;
#if FXWAVE
  fx = max(fx, mapWave(uv, raw) * (1.0 - haze));
#endif
#if FXHOUSE
  {
    float wallFx = 0.0;
#if RELIEF
    wallFx = wall;
#endif
    float hitMfx = 0.0;
#if RELIEF
    hitMfx = hitM;
#endif
    float wl = houseWindows(uv, hitMfx, wallFx) * (1.0 - haze);
    if (wl > 0.0) {
      // Тёплый свет окна — свой цвет, не золото раздела.
      colOut = mix(colOut, vec3(1.0, 0.78, 0.46), clamp(wl * 1.6, 0.0, 1.0));
      ink = max(ink, wl * 0.8);
      winOut = max(winOut, wl);
    }
  }
#endif
  colOut = mix(colOut, CT_MARK, clamp(fx * 1.3, 0.0, 1.0) * (1.0 - clamp(winOut * 2.0, 0.0, 1.0)));
  return max(ink * DR_A2 * 2.8, max(mark, max(fx, winOut)));
}

// Чертёж целиком. Возвращает силу чернил, цвет отдаёт наружу.
//
// ТРИ ПОРЯДКА ТОЛЩИНЫ И ТРИ ПОРЯДКА СИЛЫ — иначе выходит не чертёж, а сетка
// из одинаковых ниток. Волосяной модуль, средняя капитальная сетка, жирный
// контур проекта. Всё, что несёт смысл, привязано к ПЯТНУ ЗАСТРОЙКИ: у чертежа
// одни оси, один габарит, одна отметка; тиражировать их по полю — обои.
float draft(vec2 q, float w, float depth, out vec3 colOut) {
  colOut = DR_INK;
  float wq = w * CELL;

  // ─── СЕТКА ─────────────────────────────────────────────────────────────
  float fine = 1.0 - smoothstep(DR_FINE * 0.30, DR_FINE * 0.95, wq);
  float g1 = max(pen(q.x, DR_FINE, DR_W1, wq), pen(q.y, DR_FINE, DR_W1, wq)) * fine;
  float g2 = max(pen(q.x, DR_MAIN, DR_W2, wq), pen(q.y, DR_MAIN, DR_W2, wq));
  float t2 = tick(q, DR_MAIN, wq);
  float ink = max(max(g1 * DR_A1, g2 * DR_A2), t2 * DR_TICK);

  // ─── ЧЕРТЁЖ ВОКРУГ ПРОЕКТА ─────────────────────────────────────────────
  if (uPlotAmt > 0.0) {
    vec2 dd = q - uPlot.xy;
    vec2 r = vec2(dd.x * uPlotRot.x + dd.y * uPlotRot.y,
                 -dd.x * uPlotRot.y + dd.y * uPlotRot.x);
    vec2 hs = uPlot.zw;
    float tp = wq * 0.5;
    // РАЗМЕР ПОДПИСЕЙ — ОТ ДЛИНЫ ПЯТНА, а не от его ширины. От ширины они
    // выходили с этаж высотой: пятно узкое, и доля от него — не мера.
    // На плане подпись мельче предмета раз в двадцать, иначе она и есть
    // предмет.
    float H2 = hs.x * 0.052;

    vec2 ad = abs(r) - hs;
    float edge = abs(length(max(ad, 0.0)) + min(max(ad.x, ad.y), 0.0));
    float inside = 1.0 - step(0.0, max(ad.x, ad.y));

    // ШТРИХОВКА ПЯТНА под сорок пять градусов — то, чем на плане заливают
    // пятно застройки. Она и отличает чертёж от рамки: без неё контур
    // читается просто прямоугольником.
    float hatch = pen(r.x + r.y, hs.x * 0.055, DR_W1, wq * 1.4142) * inside;

    // Жирный контур.
    float outline = 1.0 - smoothstep(DR_W3 * tp, DR_W3 * tp + wq, edge);

    // Угловые засечки: короткие уголки за габаритом, как на разбивке.
    float corn = 0.0;
    for (int i = 0; i < 4; i++) {
      vec2 sgn = vec2(i == 0 || i == 3 ? -1.0 : 1.0, i < 2 ? -1.0 : 1.0);
      vec2 cc = hs * sgn;
      corn = max(corn, seg(r, cc, cc + vec2(H2 * 1.6 * sgn.x, 0.0), DR_W2, wq));
      corn = max(corn, seg(r, cc, cc + vec2(0.0, H2 * 1.6 * sgn.y), DR_W2, wq));
    }

    // Осевые штрихпунктиром, выходящие за габарит.
    float outX = hs.x * 1.12;
    float outY = hs.y * 2.2;
    float axX = (1.0 - smoothstep(tp, tp + wq, abs(r.y)))
      * step(0.32, fract(r.x / (hs.x * 0.05))) * (1.0 - step(outX, abs(r.x)));
    float axY = (1.0 - smoothstep(tp, tp + wq, abs(r.x)))
      * step(0.32, fract(r.y / (hs.x * 0.05))) * (1.0 - step(outY, abs(r.y)));

    // Кружки на концах осей: А, Б вдоль и 1, 2 поперёк.
    float R2 = H2 * 1.35;
    vec2 cA = vec2(-outX - R2, 0.0);
    vec2 cB = vec2(outX + R2, 0.0);
    vec2 c1 = vec2(0.0, -outY - R2);
    vec2 c2 = vec2(0.0, outY + R2);
    float bub = ring(r, cA, R2, DR_W2, wq) + glyph(r, cA, R2 * 1.25, 13.0)
      + ring(r, cB, R2, DR_W2, wq) + glyph(r, cB, H2 * 1.15, 14.0)
      + ring(r, c1, R2, DR_W2, wq) + glyph(r, c1, H2 * 1.15, 1.0)
      + ring(r, c2, R2, DR_W2, wq) + glyph(r, c2, H2 * 1.15, 2.0);

    // Размерные линии по двум сторонам: длина снизу, ширина справа.
    float dy2 = -hs.y - H2 * 2.6;
    float dx2 = hs.x + H2 * 2.6;
    float k = H2 * 0.42;
    float dim = seg(r, vec2(-hs.x, dy2), vec2(hs.x, dy2), DR_W1, wq)
      + seg(r, vec2(-hs.x - k, dy2 - k), vec2(-hs.x + k, dy2 + k), DR_W2, wq)
      + seg(r, vec2(hs.x - k, dy2 - k), vec2(hs.x + k, dy2 + k), DR_W2, wq)
      + seg(r, vec2(-hs.x, -hs.y), vec2(-hs.x, dy2 - k), DR_W1, wq)
      + seg(r, vec2(hs.x, -hs.y), vec2(hs.x, dy2 - k), DR_W1, wq)
      + seg(r, vec2(dx2, -hs.y), vec2(dx2, hs.y), DR_W1, wq)
      + seg(r, vec2(dx2 - k, -hs.y - k), vec2(dx2 + k, -hs.y + k), DR_W2, wq)
      + seg(r, vec2(dx2 - k, hs.y - k), vec2(dx2 + k, hs.y + k), DR_W2, wq);
    dim += number(r, vec2(0.0, dy2 - H2 * 1.0), H2, uPlotLen);
    dim += number(r, vec2(dx2 + H2 * 2.2, 0.0), H2, uPlotLen * (hs.y / hs.x));

    // Отметка уровня — одна, у левого верхнего угла.
    vec2 c0 = vec2(-hs.x + H2 * 2.6, hs.y + H2 * 1.8);
    float lev = glyph(r, c0, H2 * 1.15, 12.0)
      + glyph(r, c0 + vec2(H2 * 0.64, 0.0), H2 * 1.15, 0.0)
      + glyph(r, c0 + vec2(H2 * 1.2, 0.0), H2 * 1.15, 10.0)
      + glyph(r, c0 + vec2(H2 * 1.62, 0.0), H2 * 1.15, 0.0)
      + glyph(r, c0 + vec2(H2 * 2.24, 0.0), H2 * 1.15, 0.0);

    // СЛОЖЕНИЕ ПО ПОРЯДКАМ СИЛЫ. Контур — самое тёмное, штриховка — самое
    // светлое: она фон пятна, а не его край.
    float draw = hatch * 0.22;
    draw = max(draw, clamp(axX + axY, 0.0, 1.0) * 0.5);
    draw = max(draw, clamp(dim, 0.0, 1.0) * 0.62);
    draw = max(draw, clamp(lev, 0.0, 1.0) * 0.6);
    draw = max(draw, clamp(bub, 0.0, 1.0) * 0.8);
    draw = max(draw, clamp(corn, 0.0, 1.0) * 0.9);
    draw = max(draw, outline);
    ink = max(ink, draw * DR_PLOT * uPlotAmt);
  }
  return ink;
}
#endif

vec2 floorField(vec3 d, vec2 mq, float amt, out vec2 qOut, out float fatOut,
  out float coreOut, out vec3 paveOut) {
  // Пересечение луча с плоскостью y = -CAM_Y. Выше горизонта знаменатель
  // меняет знак — там пола просто нет, и кадр остаётся чистым.
  qOut = vec2(0.0);
  fatOut = 0.0;
  coreOut = 0.0;
  paveOut = vec3(0.0);
  float t = -CAM_Y / d.y;
  if (t <= 0.0) return vec2(0.0);

  float cy = cos(YAW), sy = sin(YAW);
  vec3 p = d * t;
  float depth = -p.z;
  // Координаты в самой плоскости: поворот по азимуту, затем ход решётки
  // вдоль глубины. Именно здесь у образца прибавляется время и прокрутка.
  vec2 q = vec2(p.x * cy + depth * sy, -p.x * sy + depth * cy);
  q.y += uOffset;

  // ПЕРЕСЕЧЕНИЕ С ПОЛЕМ ВЫСОТ, А НЕ С ПЛОСКОСТЬЮ.
  //
  // Плоское пересечение — первое приближение, дальше два уточнения: берём
  // высоту холма в найденной точке, поднимаем плоскость на неё и решаем
  // заново. Холм пологий, поэтому двух шагов хватает. Итерации нужны именно
  // потому, что подъём делается геометрией: подкраской точки не сдвинулись бы.
  // ВОЛНА ОТ КЛИКА СЧИТАЕТСЯ ЗДЕСЬ ЖЕ. Она такое же поле высот, что и холм,
  // и уточнять пересечение обеим надо сообща: реши их порознь — точки под
  // курсором поехали бы дважды.
  float wave = 0.0;
#if TAPS > 0
  wave = uTapLive;
#endif
  if (amt > 0.0 || wave > 0.0) {
    for (int i = 0; i < 2; i++) {
      float h = lift(q, mq, amt);
#if TAPS > 0
      if (wave > 0.0) h += tapWave(q);
#endif
      t = (-CAM_Y + h) / d.y;
      if (t <= 0.0) return vec2(0.0);
      p = d * t;
      depth = -p.z;
      q = vec2(p.x * cy + depth * sy, -p.x * sy + depth * cy);
      q.y += uOffset;
    }
  }

  // Совсем вплотную к камере смысла считать нет: там шаг решётки уходит
  // за кадр целиком, а производные вырождаются.
  if (depth < NEAR) return vec2(0.0);
  qOut = q;

  vec2 g = q / CELL;

  // Производные берём от НЕПРЕРЫВНОГО g, а не от fract(g): на границе клетки
  // fract рвётся, и по разрыву пошла бы сетка ярких швов.
  vec2 gx = dFdx(g), gy = dFdy(g);
  vec2 deriv = vec2(length(vec2(gx.x, gy.x)), length(vec2(gx.y, gy.y)));
  float w = max(deriv.x, deriv.y);

  // Точке не даём стать мельче пикселя, а раздутую гасим — так же линейно,
  // как гасит раздутую линию образец: saturate(lineWidth / drawWidth).
  // Отсюда мягкое угасание к горизонту, где клеток на пиксель больше одной.
  float rad = max(DOT_R, w * 0.75);
  float aa = max(w * 0.7, 0.0015);
  float r = length(fract(g) - 0.5);

#if MAP
  // КАРТА ГОРОДА.
  float dot = cityMap(q, w, depth, d, paveOut);
#elif CITY
  // ПЛАН КВАРТАЛОВ.
  float dot = city(q, w, depth, paveOut);
#elif DRAFT
  // ЧЕРТЁЖ. Пол рисуется линиями, а не точками.
  float dot = draft(q, w, depth, paveOut);
#else
  float dot = smoothstep(rad + aa, rad - aa, r) * min(1.0, DOT_R / rad);

  // Ореол: он и есть дальняя половина поля, где точки уже мельче пикселя.
  float hrad = max(HALO_R, w * 0.75);
  dot += HALO * smoothstep(hrad + aa, hrad - aa, r) * min(1.0, HALO_R / hrad);

  // Мерцание: пятна шума едут вместе с решёткой, поэтому берём координату
  // плоскости, а не экранную.
  vec2 nUv = q / (NOISE_CELLS * CELL) / 128.0 + uTime * NOISE_DRIFT;
  float n = texture2D(uNoise, nUv).r;
  dot *= 1.0 + FLARE * smoothstep(0.62, 1.0, n);
#endif

  // НАЛИТАЯ ТОЧКА: та же точка решётки, но крупнее — ею горит слово.
  // Мелкое слово из обычных точек не читается вовсе: у самого низа кадра
  // на высоту буквы приходится четыре ряда, и четыре ряда крохотных точек
  // в букву не складываются. Радиус берётся ОТ КЛЕТКИ, поэтому точки
  // наливаются одинаково и вблизи, и вдали.
  //
  // Берётся ДО затухания по глубине и по краям: иначе левый конец слова,
  // где поле и без того тусклое, остаётся нечитаемым.
  float radW = max(uWordLook.x, w * 0.75);
  float body = smoothstep(radW + aa, radW - aa, r) * min(1.0, uWordLook.x / radW);
  // И ОРЕОЛ вокруг тела: без него точка читается наклейкой, а не огоньком.
  // Спад берётся вдвое шире тела и в квадрате — так свет садится у самой
  // точки круто, а дальше стелется.
  float halo = 1.0 - smoothstep(0.0, radW * 2.4, r);
  fatOut = body + uWordLook.z * halo * halo;
  // Калёная середина: по ней цвет раздела кладётся слабее, и точка выходит
  // светом с зелёным ободом, а не ровным зелёным кружком.
  coreOut = smoothstep(radW * 0.9, 0.0, r);

  float att = smoothstep(FADE_FAR, FADE_NEAR, depth);
  // Плавный вход у камеры вместо прежнего обрыва.
  att *= smoothstep(NEAR, NEAR_SOFT, depth);
  att *= smoothstep(SIDE + SIDE_SOFT, SIDE, abs(q.x - SIDE_MID));

  return vec2(dot * att, att);
}

// Точка пола под курсором: тот же луч и та же плоскость, что и у поля.
// Считается отдельно, а не берётся из floorField, потому что нужна ОДНА
// на кадр и в другом месте экрана.
bool screenFloor(vec2 px, out vec2 mq) {
  mq = vec2(0.0);
  vec2 ms = (px - 0.5 * uRes) / uRes.y;
  float cr = cos(ROLL), sr = sin(ROLL);
  vec2 msc = vec2(ms.x * cr + ms.y * sr, -ms.x * sr + ms.y * cr);
  vec3 md = normalize(vec3(msc.x, msc.y, -FOCAL));
  float t = -CAM_Y / md.y;
  if (t <= 0.0) return false;          // курсор выше горизонта: пола там нет
  vec3 p = md * t;
  float depth = -p.z;
  if (depth < NEAR) return false;
  float cy = cos(YAW), sy = sin(YAW);
  mq = vec2(p.x * cy + depth * sy, -p.x * sy + depth * cy);
  mq.y += uOffset;
  return true;
}

bool mouseFloor(out vec2 mq) { return screenFloor(uMouse.xy, mq); }

/**
 * Обратный ход: из КАМЕРНОЙ координаты пола обратно в пиксели кадра.
 * Нужен слову, когда маска читается раз на клетку: место берётся не у
 * фрагмента, а у середины клетки, и тогда точка либо горит целиком, либо
 * не горит вовсе — кромка буквы не откусывает от неё половину.
 */
bool cellScreen(vec2 qc, out vec2 px) {
  px = vec2(0.0);
  float cy = cos(YAW), sy = sin(YAW);
  float x = qc.x * cy - qc.y * sy;
  float depth = qc.x * sy + qc.y * cy;
  if (depth < NEAR) return false;
  vec2 sc = vec2(x, -CAM_Y) * FOCAL / depth;
  float cr = cos(ROLL), sr = sin(ROLL);
  vec2 sp = vec2(sc.x * cr - sc.y * sr, sc.x * sr + sc.y * cr);
  px = sp * uRes.y + 0.5 * uRes;
  return true;
}

#if TAPS > 0
/**
 * Случайное число по клетке решётки, 0..1. Нужно двум вещам: решить, горит ли
 * эта клетка вообще (россыпь, а не круг), и на сколько запоздать со вспышкой.
 * Считается по ЦЕЛЫМ координатам клетки, поэтому у одной клетки оно всегда
 * одно и то же: россыпь стоит на полу, а не мельтешит от кадра к кадру.
 */
float cellRand(vec2 cell, float seed) {
  vec2 h = fract((cell + seed) * vec2(127.1, 311.7));
  h += dot(h, h + 34.56);
  return fract(h.x * h.y * 43.75);
}

/**
 * Сила отклика в этой точке пола: сколько добавить яркости её точке.
 *
 * Волна расходится от места клика со скоростью TAP_SPEED, и клетка вспыхивает,
 * когда волна до неё дошла: задержка есть расстояние, делённое на скорость,
 * плюс свой разброс. Без разброса клетки на одном расстоянии загораются разом,
 * и вместо россыпи выходит расходящееся кольцо.
 *
 * Берётся МАКСИМУМ по кликам, а не сумма: два клика рядом не должны выжигать
 * место вдвое ярче одного.
 */
float taps(vec2 q) {
  vec2 cell = floor(q / CELL);
  float on = cellRand(cell, 0.0);
  if (on > TAP_FILL) return 0.0;         // эта клетка в россыпь не попала
  float lag = cellRand(cell, 7.3);
  float lum = cellRand(cell, 19.1);
  vec2 qc = (cell + 0.5) * CELL;
  float out2 = 0.0;
  for (int i = 0; i < TAPS; i++) {
    float age = uTaps[i].z;
    if (age < 0.0) continue;             // место в кольце пустует
    float dist = length(qc - uTaps[i].xy);
    if (dist > TAP_R) continue;
    float a = age - dist / TAP_SPEED - lag * TAP_JIT;
    if (a < 0.0) continue;               // волна сюда ещё не дошла
    // Разгорается быстро, гаснет неспешно — тем же правилом, что и отклик
    // поля на курсор: откликаться сразу, забывать не сразу.
    float up = clamp(a / TAP_UP, 0.0, 1.0);
    float dn = exp(-a / TAP_DOWN);
    // К краю россыпь редеет: резкая граница читалась бы вырезанным кругом.
    float edge = 1.0 - smoothstep(TAP_R * 0.45, TAP_R, dist);
    out2 = max(out2, up * dn * edge * (0.55 + 0.45 * lum));
  }
  return out2;
}
#endif

void main() {
  // Экранные координаты в долях высоты кадра, затем снимаем крен: горизонт
  // прямой, диагональной тёмную полосу делает именно поворот кадра.
  vec2 s = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float cr = cos(ROLL), sr = sin(ROLL);
  vec2 sc = vec2(s.x * cr + s.y * sr, -s.x * sr + s.y * cr);
  vec3 d = normalize(vec3(sc.x, sc.y, -FOCAL));

  // Точка пола под курсором — вершина холма. Если курсор выше горизонта
  // или мышь ушла, подъёма нет и поле считается как раньше.
  vec2 mq = vec2(0.0);
  float amt = (uMouse.z > 0.0 && mouseFloor(mq)) ? uMouse.z : 0.0;

  vec2 q;
  float fat;
  float core;
  vec3 pave;
  vec2 lo = floorField(d, mq, amt, q, fat, core, pave);
  float dots = lo.x;
  float wash = lo.y * WASH;

  // ПЯТНО ПОД ЗНАКОМ. Знак стоит остриём почти у пола, и без отклика пола
  // он висит сам по себе — две сцены в одном кадре, не связанные ничем.
  // Свет ЛОЖИТСЯ НА ТОЧКИ, а не добавляется к пустоте: прибавка к общей
  // яркости дала бы на полу видимый диск, а так пятно читается тем, что
  // точки под знаком горят ярче остальных.
  //
  // Считается В КООРДИНАТАХ КАДРА, а не пола, и это осознанно. По полу пятно
  // расплывалось: точка под остриём ложится близко к камере, а там любой
  // радиус накрывает всю нижнюю полосу — замер на неподвижном кадре показал
  // сорок тысяч затронутых пикселей во всю ширину. Нужен же не источник
  // света в мире, а след под знаком, и он задаётся прямо: эллипс вокруг
  // острия, приплюснутый по вертикали — такой, каким круг на полу и виден.
  if (uSign.z > 0.0) {
    vec2 dp = (gl_FragCoord.xy - uSign.xy) / uRes.y;
    float t = clamp(1.0 - length(vec2(dp.x, dp.y * POOL_SQUASH)) / uPool.x, 0.0, 1.0);
    float k = t * t * (3.0 - 2.0 * t);
    dots *= 1.0 + uSign.z * uPool.y * k;
    // И слабая дымка поверх: без неё пятно живёт только на точках, а между
    // ними пол остаётся чёрным — свет читается решётом, а не светом.
    wash += uSign.z * POOL_HAZE * k * k;
  }

  // ОТКЛИК НА КЛИК — ТЕМ ЖЕ СПОСОБОМ, ЧТО И ПЯТНО ПОД ЗНАКОМ: свет ложится
  // на точки, а не прибавляется к пустоте. Между точками пол остаётся
  // пустым, и россыпь читается тем, что поле разгорелось, а не тем,
  // что на пол положили зелёное пятно.
  float tap = 0.0;
#if TAPS > 0
  if (lo.y > 0.0) {
    tap = taps(q);
    dots *= 1.0 + TAP_GAIN * tap;
  }
#endif

  // СЛОВО ИЗ ТОЧЕК. Не надпись поверх сцены: маска УСИЛИВАЕТ те точки, что
  // и так стоят на полу, — слово читается тем, что пол под ним разгорелся,
  // а не тем, что на пол положили текст. Дымка внутри букв держит форму
  // между точками: у самого низа кадра шаг решётки крупный, и на одних
  // точках слово рассыпалось бы решетом.
  //
  // Место — В КООРДИНАТАХ КАДРА, а не пола, по той же причине, что и пятно
  // под знаком, и ещё по одной: пол развёрнут по азимуту и накренён, лежащее
  // на нём слово ушло бы в перспективу углом и перестало читаться. Нужно же,
  // чтобы читалось.
  //
  // Дымка гасится покрытием пола (lo.y): выше горизонта и по краям, где пола
  // нет, слову светить неоткуда.
  float word = 0.0;
  if (uWordAmt > 0.0 && lo.y > 0.0) {
    // ГДЕ ЧИТАТЬ МАСКУ. Три ответа, и выбран первый — глазами заказчика.
    //
    // ПО ФРАГМЕНТУ (так и оставлено): кромка буквы режет точку, и часть точек
    // стоит откусанными. Заказчик это разглядел («а ты вот эти точки случайно
    // не трогал?»), но, посмотрев починку, вернул как было: «что-то мне сейчас
    // меньше нравится, чем было перед этим». Резкая letter важнее целой точки.
    //
    // ПО КЛЕТКЕ (?wordcell=1): точка либо горит целиком, либо нет — честная
    // лампочная надпись, но буквы округляются до решётки, и «T» перестаёт
    // быть «T».
    //
    // ПО ОБЕИМ, ЧТО ЯРЧЕ (?wordcell=2): откусанных точек нет, буквы резкие,
    // но набухают на радиус точки и читаются жирнее логотипа.
    vec2 wuv = (gl_FragCoord.xy - uWordBox.xy) / uWordBox.zw * 0.5 + 0.5;
#if WORD_CELL != 0
    vec2 qc = (floor(q / CELL) + 0.5) * CELL;
    vec2 pxc;
    vec2 wuvC = vec2(-1.0);
    if (cellScreen(vec2(qc.x, qc.y - uOffset), pxc)) {
      wuvC = (pxc - uWordBox.xy) / uWordBox.zw * 0.5 + 0.5;
    }
#endif
#if WORD_CELL == 1
    wuv = wuvC;
#endif
    if (wuv.x > 0.0 && wuv.x < 1.0 && wuv.y > 0.0 && wuv.y < 1.0) {
      // Маска читается В КАЖДОМ ФРАГМЕНТЕ, а не раз на клетку решётки.
      // Пробовал раз на клетку («точка либо горит целиком, либо нет»):
      // выходит честная лампочная надпись, но буквы теряют края и слово
      // читается хуже — на кадре видно, что кромка буквы, режущая точку,
      // держит форму лучше, чем округлённая до клетки.
      word = texture2D(uWord, vec2(wuv.x, 1.0 - wuv.y)).a;
#if WORD_CELL == 2
      if (wuvC.x > 0.0 && wuvC.x < 1.0 && wuvC.y > 0.0 && wuvC.y < 1.0) {
        word = max(word, texture2D(uWord, vec2(wuvC.x, 1.0 - wuvC.y)).a);
      }
#endif
      word *= uWordAmt;
      // Точки внутри букв разгораются ДО СВОЕГО УРОВНЯ, а не во столько-то
      // раз от нынешней яркости: множитель оставлял тусклые места тусклыми,
      // и слово читалось только правым концом. Берётся max, а не замена:
      // у самой камеры поле ярче этого уровня, и гасить его незачем.
      dots = max(dots * (1.0 + word * uWordGain), fat * word * uWordLook.y);
      wash += word * WORD_HAZE * lo.y;
    }
  }

#if DRAFT || CITY || MAP
  // ЧЕРТЁЖ, ПЛАН, КАРТА И ПОЛЕ НЕСУТ СВОЙ ЦВЕТ и ничего не заливают поверх:
  // они кладут краску прямо на фон страницы.
  // Плотность берётся от самой линии, а не от покрытия пола, — между линиями
  // пол остаётся пустым, как на кальке.
  vec3 c = pave;
#else
  // Плотные и вспыхнувшие точки уходят к белому: без этого поле читается
  // одной плоской заливкой.
  vec3 c = mix(uDot, vec3(0.92, 0.96, 1.0), clamp(dots * 0.5, 0.0, 1.0));
  c = mix(uWash, c, clamp(dots * 3.0, 0.0, 1.0));
#endif
  // Слово — цветом раздела, но ТОЛЬКО НА САМИХ ТОЧКАХ: вес берётся от их
  // яркости. Красить весь след маски значило бы положить на пол цветную
  // плашку в форме букв — ровно то, что заказчик и назвал «вставил слово».
  // Между точками пол остаётся пустым, слово держится одними точками.
  c = mix(c, uWordTint, clamp(word * dots * 1.2, 0.0, 1.0) * (1.0 - uWordLook.w * core));

#if TAPS > 0
  // Цветом РАЗДЕЛА, а не зелёным числом: на Tronexo это зелёный, которого
  // заказчик и просил, на других разделах — их собственный. Один приём
  // не должен говорить на всех страницах одним чужим цветом.
  c = mix(c, uTapTint, clamp(tap * 1.5, 0.0, 1.0));
#endif

#if DRAFT || CITY || MAP
  float a = clamp(dots * lo.y, 0.0, 1.0);
#else
  float a = clamp(dots * uDotA + wash, 0.0, 1.0);
#endif
  gl_FragColor = vec4(c * a, a);
}
`;let U=null,f=null,C=null,M=null,Gi=null,Ya=null,Ga=null,Va=null,Cs=null,zo=null,Yi=null,Ns=null,te=null,_s=null,Wd=0,Is=[0,.906,.6],_n=0,ef=!1,$r=!1,na=0,Lr=0;const tt={qx:0,qy:0,qys:0,qm:0,qmx:0,hl:0,hs:0,spin:0,amt:0,len:0};function o1(n,t,e,r,i,o,s){const a=Math.cos(er),l=Math.sin(er);tt.qx=n*a+t*l,tt.qys=-n*l+t*a;const c=n+Rg,u=t-bg;tt.qmx=c*a+u*l,tt.qm=-c*l+u*a,tt.qy=tt.qys+Lr,tt.hl=e,tt.hs=r,tt.spin=i-er,tt.amt=o,tt.len=s||0,!(!f||!M)&&(M.plot&&f.uniform4f(M.plot,tt.qx,tt.qy,tt.hl,tt.hs),M.plotS&&f.uniform2f(M.plotS,tt.qmx,tt.qm),M.plotRot&&f.uniform2f(M.plotRot,Math.cos(tt.spin),Math.sin(tt.spin)),M.plotAmt&&f.uniform1f(M.plotAmt,tt.amt),M.plotLen&&f.uniform1f(M.plotLen,tt.len))}const j={x:0,y:0,sx:0,sy:0,cx:0,cy:0,on:!1,amt:0,надТекстом:!1},Wl='a, button, p, h1, h2, h3, li, blockquote, figure, label, summary, header, nav, .menu, [role="dialog"]';function hv(n,t){const e=document.elementFromPoint(n,t);return!!(e&&e.closest&&e.closest(Wl))}let rf=!1;const zc=[];let nf=0;const gs=new Float32Array(3*Math.max(1,$i));let Xl=!1,jn=[0,.906,.6];function Bc(n,t){if(!U||!U.height)return null;const e=(n-.5*U.width)/U.height,r=(t-.5*U.height)/U.height,i=Math.cos(Vr),o=Math.sin(Vr),s=e*i+r*o,a=-e*o+r*i;if(a>=0)return null;const l=-Kn/a,c=s*l,u=Ko*l;if(u<jo)return null;const p=Math.cos(er),d=Math.sin(er);return{x:c*p+u*d,y:-c*d+u*p+Lr}}function Hl(n,t){const e=Bc(n,t);return e?(zc[nf%$i]={x:e.x,y:e.y,t:performance.now()/1e3},nf++,jn=Gl("--accent-section",[0,.906,.6]),!0):!1}function Xd(n){if(!f||!M||!M.taps)return;let t=!1;for(let e=0;e<$i;e++){const r=zc[e],i=r?n-r.t:-1,o=r&&i>=0&&i<$_;gs[e*3]=o?r.x:0,gs[e*3+1]=o?r.y:0,gs[e*3+2]=o?i:-1,o&&(t=!0)}!t&&!Xl||(Xl=t,f.uniform3fv(M.taps,gs),M.tapTint&&f.uniform3f(M.tapTint,jn[0],jn[1],jn[2]),M.tapLive&&f.uniform1f(M.tapLive,t?1:0))}let of=0;const zl=[];let sf=0;const ro=new Float32Array(4*_a);let Bl=!1;const $c=()=>te?te.полуокно_м*2/ga*Bo:0,Yc=()=>te?te.полуокно_м*2:7500,po=()=>Ei(Gi);function Hd(n,t,e){const r=$c();if(!r)return null;const i=(n-tt.qmx)/r,o=-(t-tt.qm)/r;return e.u=le.cu+i*le.cos-o*le.sin,e.v=le.cv+i*le.sin+o*le.cos,e}const zd=256;let zt=null,Ka=!1;function dv(){zt||Ka||(Ka=!0,fetch("/assets/map/pardubice-houses.bin").then(n=>n.arrayBuffer()).then(n=>{const t=new DataView(n),e=t.getUint32(0,!0),r=new Uint32Array(e),i=new Uint16Array(e),o=new Uint8Array(e),s=new Float32Array(e),a=new Float32Array(e),l=new Float32Array(e),c=new Float32Array(4*e);let u=0,p=4;for(let y=0;y<e;y++){const w=t.getUint16(p,!0);u+=w,p+=6+w*4}const d=new Float32Array(2*u);p=4;let h=0;for(let y=0;y<e;y++){const w=t.getUint16(p,!0);i[y]=w,o[y]=t.getUint8(p+2),s[y]=t.getUint8(p+3)/2,p+=6,r[y]=h;let x=1,k=1,A=0,D=0,L=0,P=0;for(let W=0;W<w;W++){const O=t.getUint16(p,!0)/65535,z=t.getUint16(p+2,!0)/65535;p+=4,d[2*h]=O,d[2*h+1]=z,h++,L+=O,P+=z,O<x&&(x=O),O>A&&(A=O),z<k&&(k=z),z>D&&(D=z)}a[y]=L/w,l[y]=P/w,c[4*y]=x,c[4*y+1]=k,c[4*y+2]=A,c[4*y+3]=D}const _=zd,m=new Uint32Array(_*_+1),v=(y,w)=>{const x=Math.max(0,Math.floor(c[4*y]*_)),k=Math.min(_-1,Math.floor(c[4*y+2]*_)),A=Math.max(0,Math.floor(c[4*y+1]*_)),D=Math.min(_-1,Math.floor(c[4*y+3]*_));for(let L=A;L<=D;L++)for(let P=x;P<=k;P++)w(L*_+P)};for(let y=0;y<e;y++)v(y,w=>{m[w+1]++});for(let y=0;y<_*_;y++)m[y+1]+=m[y];const b=new Int32Array(m[_*_]),E=m.slice(0,_*_);for(let y=0;y<e;y++)v(y,w=>{b[E[w]++]=y});zt={n:e,start:r,cnt:i,pts:d,lv:o,h:s,cu:a,cv:l,bb:c,cell:m,ids:b,метка:new Uint32Array(e),штамп:0}}).catch(()=>{Ka=!1}))}function pv(n,t){if(!zt||n<0||t<0||n>=1||t>=1)return-1;const e=zd,r=Math.floor(t*e)*e+Math.floor(n*e),{cell:i,ids:o,start:s,cnt:a,pts:l,bb:c}=zt;for(let u=i[r];u<i[r+1];u++){const p=o[u];if(n<c[4*p]||n>c[4*p+2]||t<c[4*p+1]||t>c[4*p+3])continue;let d=!1;const h=s[p],_=a[p];for(let m=0,v=_-1;m<_;v=m++){const b=l[2*(h+m)+1],E=l[2*(h+v)+1];if(b>t==E>t)continue;const y=l[2*(h+m)],w=l[2*(h+v)];n<y+(t-b)/(E-b)*(w-y)&&(d=!d)}if(d)return p}return-1}const mv=(n,t,e)=>{const r=Math.min(1,Math.max(0,(e-n)/(t-n)));return r*r*(3-2*r)},_v=n=>Wc?Hc*$c()/Xc*(1-mv(ql*.55,ql,n)):0,Di={u:0,v:0};function Bd(n,t){if(!U||!U.height||!zt)return-1;const e=(n-.5*U.width)/U.height,r=(t-.5*U.height)/U.height,i=Math.cos(Vr),o=Math.sin(Vr),s=e*i+r*o,a=-e*o+r*i;if(a>=0)return-1;const l=-Kn/a,c=Math.cos(er),u=Math.sin(er),p=Ud*(Wc?Hc*$c()/Xc:0),d=Math.max(0,l*(1-p/Kn)),h=32;for(let _=0;_<=h;_++){const m=d+(l-d)*_/h,v=Ko*m;if(v<jo)continue;const b=s*m,E=Kn+a*m;if(!Hd(b*c+v*u,-b*u+v*c,Di))return-1;const y=pv(Di.u,Di.v);if(y>=0&&zt.h[y]*_v(v)>=E-1e-5)return y}return-1}const vr=1024,gv=800;let af=null,Xn=null,vs=null;const ur={id:-1},Pr=4,vv=1,yv=.6,Lt=Array.from({length:Pr},()=>({id:-1,lv:0,спад:0})),lf=new Float32Array(4),cf=new Float32Array(4),ja=new Float32Array(4),Za=new Float32Array(4),yr={id:-1,раз:0};let Qa=0;function ys(n,t,e){if(n<0){t[e]=1,t[e+1]=0;return}const{start:r,cnt:i,pts:o}=zt;let s=-1;for(let a=0;a<i[n];a++){const l=r[n]+a,c=r[n]+(a+1)%i[n],u=o[2*c]-o[2*l],p=o[2*c+1]-o[2*l+1],d=u*u+p*p;if(d>s){s=d;const h=Math.sqrt(d)||1;t[e]=u/h,t[e+1]=p/h}}}const xv=n=>zt.lv[n]?Math.max(2.6,Math.min(4.2,zt.h[n]/zt.lv[n])):3;function Tv(n,t){const e=zt.bb;let r=e[4*n],i=e[4*n+1],o=e[4*n+2],s=e[4*n+3];for(let a=0;a<Pr;a++){const l=Lt[a].id;l<0||a===t||(e[4*l]<r&&(r=e[4*l]),e[4*l+1]<i&&(i=e[4*l+1]),e[4*l+2]>o&&(o=e[4*l+2]),e[4*l+3]>s&&(s=e[4*l+3]))}return Math.max(o-r,s-i)*Yc()<=gv}const wv=n=>{for(let t=0;t<Pr;t++)if(Lt[t].id===n)return!0;return!1},$l=()=>document.documentElement.classList.contains("menu-open");function uf(n){if(n<0)return;for(let e=0;e<Pr;e++)if(Lt[e].id===n)return;let t=-1;for(let e=0;e<Pr;e++)if(Lt[e].id<0){t=e;break}if(t<0){for(let e=0;e<Pr;e++)Lt[e].id===ur.id||Lt[e].lv>=.04||(t<0||Lt[e].lv<Lt[t].lv)&&(t=e);if(t<0)return}Tv(n,t)&&(Lt[t].id=n,Lt[t].lv=0,Lt[t].спад=0,va=!0)}function Ev(n){for(let t=0;t<Pr;t++){const e=Lt[t];e.id<0||(e.id===ur.id?(e.lv=Math.min(1,e.lv+n/vv),e.спад=0):(e.спад||(e.спад=Math.max(e.lv,.15)/yv),e.lv=Math.max(0,e.lv-n*e.спад),e.lv<=0&&(e.id=-1,va=!0)))}}let bv=null;const Rv=()=>bv||=new Uint8Array(vr*vr*4);let mo=[0,0,1,1],ia=0,va=!1;function Av(n,t,e,r,i){const{start:o,cnt:s,pts:a}=zt;n.beginPath();for(let l=0;l<s[t];l++){const c=o[t]+l,u=(a[2*c]-e)*i,p=(a[2*c+1]-r)*i;l?n.lineTo(u,p):n.moveTo(u,p)}n.closePath(),n.fill()}function Sv(){if(va=!1,!f||!zt)return;let n=2,t=2,e=-1,r=-1;const i=zt.bb;for(let u=0;u<Pr;u++){const p=Lt[u].id;p<0||(n=Math.min(n,i[4*p]),t=Math.min(t,i[4*p+1]),e=Math.max(e,i[4*p+2]),r=Math.max(r,i[4*p+3]))}if(e<n){ia=0,Yl();return}af||(af=!0,vs=document.createElement("canvas"),vs.width=vs.height=vr);const o=12/Yc(),s=Math.max(e-n,r-t)+2*o;n=(n+e)/2-s/2,t=(t+r)/2-s/2;const a=vr/s,l=vs.getContext("2d",{willReadFrequently:!0}),c=Rv();c.fill(0);for(let u=0;u<Pr;u++){if(Lt[u].id<0)continue;l.clearRect(0,0,vr,vr),l.fillStyle="#fff",Av(l,Lt[u].id,n,t,a);const p=l.getImageData(0,0,vr,vr).data;for(let d=0;d<p.length;d+=4)c[d+u]=p[d+3]}Xn||(Xn=f.createTexture()),f.activeTexture(f.TEXTURE5),f.bindTexture(f.TEXTURE_2D,Xn),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_S,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_T,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,f.LINEAR),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MAG_FILTER,f.LINEAR),f.texImage2D(f.TEXTURE_2D,0,f.RGBA,vr,vr,0,f.RGBA,f.UNSIGNED_BYTE,c),f.activeTexture(f.TEXTURE0),mo=[n,t,s,s],ia=1,Yl()}function Mv(){if(!(!f||!M||!M.winLv||!zt)){for(let n=0;n<Pr;n++){const t=Lt[n].id;lf[n]=t>=0?Lt[n].lv:0,cf[n]=t>=0?xv(t):3}ys(Lt[0].id,ja,0),ys(Lt[1].id,ja,2),ys(Lt[2].id,Za,0),ys(Lt[3].id,Za,2),f.uniform4fv(M.winLv,lf),f.uniform4fv(M.winFloor,cf),f.uniform4fv(M.winAx0,ja),f.uniform4fv(M.winAx1,Za)}}function Yl(){!f||!M||(M.mapM&&f.uniform1f(M.mapM,Yc()),M.houseBox&&f.uniform4f(M.houseBox,mo[0],mo[1],mo[2],mo[3]),M.houseOn&&f.uniform1f(M.houseOn,ia))}function $d(n){if(!f||!M||!M.waves)return;let t=!1;for(let e=0;e<_a;e++){const r=zl[e],i=r?n-r.t:-1,o=r&&i>=0&&i<qc;ro[e*4]=o?r.u:0,ro[e*4+1]=o?r.v:0,ro[e*4+2]=o?i:-1,ro[e*4+3]=0,o&&(t=!0)}!t&&!Bl||(Bl=t,f.uniform4fv(M.waves,ro))}function ff(n,t){const e=Bc(n,t);if(!e||!Hd(e.x,e.y-Lr,Di))return!1;const r=performance.now()/1e3,i=sf%_a,o=zl[i];return o&&r-o.t<qc?!1:(zl[i]={u:Di.u,v:Di.v,t:r},sf++,!0)}typeof window<"u"&&(window.__cfigMapFx={дом:(n,t)=>{const e=Math.min(2,window.devicePixelRatio||1);return Bd(n*e,((window.innerHeight||1)-t)*e)},готово:()=>!!zt,высота:n=>zt?zt.h[n]:0,замер:n=>{if(!n){const s=Un&&Un.rows;return Un=null,s}const t=Math.min(2,window.devicePixelRatio||1),e=Math.round(240*t),r=Math.round(200*t),i=new Uint8Array(e*r*4),o=[];return Un=()=>{const s=[Math.round(performance.now())];for(const[a,l]of n){f.readPixels(Math.round((a-120)*t),Math.round((innerHeight-l-50)*t),e,r,f.RGBA,f.UNSIGNED_BYTE,i);let c=0;for(let u=0;u<i.length;u+=4){const p=i[u]-i[u+2];p>0&&(c+=p)}s.push(c)}o.push(s)},Un.rows=o,!0},состояние:()=>({над:ur.id,канд:[yr.id,yr.раз],мышь:[j.on,j.надТекстом],маска:ia,пул:Lt.map(n=>[n.id,+n.lv.toFixed(3)])})});let Un=null,Lv=0,qr={x:-1,y:-1,off:NaN};function Pv(n){if(po()){if(dv(),zt){const t=j.x!==qr.x||j.y!==qr.y||Math.abs(Lr-qr.off)>1e-4||qr.off!==qr.off,e=yr.раз>0&&yr.id!==ur.id;if((Lv++&1)===0&&(t||e)){j.on&&Math.abs(Lr-qr.off)>1e-4&&(j.надТекстом=hv(j.cx,j.cy)),qr.x=j.x,qr.y=j.y,qr.off=Lr;const i=j.on&&!j.надТекстом&&!$l()?Bd(j.x,j.y):-1;i===ur.id?yr.раз=0:i===yr.id?++yr.раз>=2&&(ur.id=i,yr.раз=0,uf(i)):(yr.id=i,yr.раз=1)}(!j.on||$l())&&ur.id>=0&&(ur.id=-1),ur.id>=0&&!wv(ur.id)&&uf(ur.id);const r=Qa?Math.min(.1,Math.max(0,n-Qa)):0;Qa=n,Ev(r),va&&Sv(),Mv()}$d(n)}}function kv(){window.__cfigTrack={mouse:j,tap:(n,t)=>{const e=Math.min(2,window.devicePixelRatio||1);return Hl(n*e,((window.innerHeight||1)-t)*e)},taps:()=>zc.map(n=>n&&{x:+n.x.toFixed(3),y:+n.y.toFixed(3),возраст:+(performance.now()/1e3-n.t).toFixed(2)}),setLift:(n,t)=>f&&f.uniform2f(M.lift,n,t),setSign:(n,t,e)=>$v(n,t,e),setPool:(n,t)=>f&&M&&f.uniform2f(M.pool,n,t),setWord:n=>Gv(n),унии:()=>f&&M?{uMarkR:f.getUniform(C,M.markR),uMapSpan:f.getUniform(C,M.mapSpan)}:null,метка:()=>Hv(),state:()=>f&&M?{пятно:f.getUniform(C,M.sign)[2],слово:f.getUniform(C,M.wordAmt),вид:Array.from(f.getUniform(C,M.look)),коробка:Array.from(f.getUniform(C,M.wordBox))}:null,залито:()=>Yd&&Vl===0&&!Fs,пересобрать:()=>f?(C&&f.deleteProgram(C),C=null,jl()):!1,якорь:()=>f&&C&&M.plotS?f.getUniform(C,M.plotS)[1]:null,карта:()=>f&&C&&M.mapCen?{u:f.getUniform(C,M.mapCen)[0],v:f.getUniform(C,M.mapCen)[1],охват:M.mapSpan?f.getUniform(C,M.mapSpan):null,cos:f.getUniform(C,M.mapRot)[0],sin:f.getUniform(C,M.mapRot)[1]}:null,покрытие:()=>f&&C?{собрано:Gi,нужен:Uc(),цикл:$r,разрешение:Array.from(f.getUniform(C,M.res))}:{программа:!1},wordBox:()=>Zd(U?U.width:0,U?U.height:0),freeze:()=>Zl(),thaw:()=>{$r||($r=!0,na=performance.now(),_n=requestAnimationFrame(oa))},frame:(n,t,e)=>{if(!f)return;$o();const r=Math.min(2,window.devicePixelRatio||1);f.uniform1f(M.time,0),f.uniform1f(M.off,Lr=0),f.uniform3f(M.mouse,n*r,((window.innerHeight||1)-t)*r,e),f.drawArrays(f.TRIANGLES,0,3)},frameTap:(n,t,e)=>{if(!f||!M)return null;$o();const r=Math.min(2,window.devicePixelRatio||1);f.uniform1f(M.time,0),f.uniform1f(M.off,Lr=0),f.uniform3f(M.mouse,0,0,0);const i=Bc(n*r,((window.innerHeight||1)-t)*r);if(!i)return null;if(M.taps){const o=new Float32Array(3*$i);for(let s=0;s<$i;s++)o[s*3+2]=-1;o[0]=i.x,o[1]=i.y,o[2]=e,f.uniform3fv(M.taps,o),M.tapLive&&f.uniform1f(M.tapLive,e>=0?1:0),M.tapTint&&f.uniform3f(M.tapTint,jn[0],jn[1],jn[2])}return f.drawArrays(f.TRIANGLES,0,3),{x:+i.x.toFixed(3),y:+i.y.toFixed(3)}}}}function Dv(){if(rf)return;rf=!0,addEventListener("pointermove",o=>{if(o.pointerType&&o.pointerType!=="mouse")return;const s=Math.min(2,window.devicePixelRatio||1);j.x=o.clientX*s,j.y=((window.innerHeight||1)-o.clientY)*s,j.on||(j.sx=j.x,j.sy=j.y),j.on=!0,j.cx=o.clientX,j.cy=o.clientY;const a=o.target;j.надТекстом=!!(a&&a.closest&&a.closest(Wl))},{passive:!0}),addEventListener("pointerout",o=>{o.relatedTarget||(j.on=!1)},{passive:!0}),addEventListener("blur",()=>{j.on=!1});const n=o=>{if(o.button!==void 0&&o.button!==0||!$r||!U||Number(U.style.opacity||0)<=.02||!Nd(Gi)&&!po())return!1;const s=o.target;return po()&&($l()||s&&s.closest&&s.closest(Wl))?!1:!(s&&s.closest&&s.closest('a, button, input, textarea, select, label, summary, [role="button"], [contenteditable]'))},t=o=>{const s=Math.min(2,window.devicePixelRatio||1);return[o.clientX*s,((window.innerHeight||1)-o.clientY)*s]},e=12,r=500;let i=null;addEventListener("pointerdown",o=>{if(!n(o)){i=null;return}if(o.pointerType==="touch"||o.pointerType==="pen"){i={x:o.clientX,y:o.clientY,t:performance.now(),id:o.pointerId};return}po()?ff(...t(o)):Hl(...t(o))},{passive:!0}),addEventListener("pointerup",o=>{const s=i;i=null,!(!s||s.id!==o.pointerId||!n(o))&&(Math.hypot(o.clientX-s.x,o.clientY-s.y)>e||performance.now()-s.t>r||(po()?ff(...t(o)):Hl(...t(o))))},{passive:!0}),addEventListener("pointercancel",()=>{i=null},{passive:!0})}function Gl(n,t){const r=getComputedStyle(document.body).getPropertyValue(n).trim().match(/[\d.]+/g);return!r||r.length<3?t:[+r[0]/255,+r[1]/255,+r[2]/255,r[3]===void 0?1:+r[3]]}function Ov(n){const e=new Uint8Array(65536);for(let i=0;i<e.length;i++)e[i]=Math.random()*256|0;const r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,128,128,0,n.RGBA,n.UNSIGNED_BYTE,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.generateMipmap(n.TEXTURE_2D),r}const Cv=["0","1","2","3","4","5","6","7","8","9",".","м","±","А","Б","1"],Nv=128,no=[];let Fs=!1,Vl=0,Yd=!1;const Iv="/assets/map/pardubice-mip.webp",Fv=`
self.onmessage = async (e) => {
  const { id, url, size, rects, strip } = e.data
  try {
    const blob = await (await fetch(url)).blob()
    const bmp = size ? await createImageBitmap(blob, { resizeWidth: size, resizeHeight: size, resizeQuality: 'high' })
      : await createImageBitmap(blob)
    const list = rects || [[0, 0, 0, bmp.width, bmp.height]]
    self.postMessage({ id, size: [bmp.width, bmp.height] })
    const cv = new OffscreenCanvas(1, 1)
    const cx = cv.getContext('2d', { willReadFrequently: true })
    for (const [l, x, y, w, h] of list) {
      for (let y0 = 0; y0 < h; y0 += strip) {
        const hh = Math.min(strip, h - y0)
        if (cv.width !== w || cv.height !== hh) { cv.width = w; cv.height = hh }
        cx.clearRect(0, 0, w, hh)
        cx.drawImage(bmp, x, y + y0, w, hh, 0, 0, w, hh)
        const d = cx.getImageData(0, 0, w, hh).data
        const lum = new Uint8Array(w * hh)
        for (let i = 0, k = 0; i < lum.length; i++, k += 4) lum[i] = d[k]
        self.postMessage({ id, l, y0, w, h: hh, lum }, [lum.buffer])
      }
    }
    bmp.close()
    self.postMessage({ id, done: true })
  } catch (err) { self.postMessage({ id, fail: String(err) }) }
}`;let _i=null,Uv=0;const Kl=new Map;function qv(){if(_i!==null)return _i;try{if(typeof Worker>"u"||typeof OffscreenCanvas>"u")throw new Error("нет");_i=new Worker(URL.createObjectURL(new Blob([Fv],{type:"text/javascript"}))),_i.onmessage=n=>{const t=Kl.get(n.data.id);t&&t(n.data)}}catch{_i=!1}return _i}function hf(n,t,e){const r=qv();if(!r)return!1;const i=++Uv;return Kl.set(i,o=>{(o.done||o.fail)&&Kl.delete(i),e(o)}),r.postMessage({id:i,url:new URL(n,location.href).href,size:t.size||0,rects:t.rects||null,strip:Nv}),!0}function Gd(n,t,e,{mip:r,size:i,atlas:o},s){const a=f.createTexture(),l=7,c=()=>{f.activeTexture(f.TEXTURE0+l),f.bindTexture(f.TEXTURE_2D,a)};{f.activeTexture(f.TEXTURE0+n),f.bindTexture(f.TEXTURE_2D,t);const x=[f.TEXTURE_WRAP_S,f.TEXTURE_WRAP_T,f.TEXTURE_MAG_FILTER],k=x.map(P=>f.getTexParameter(f.TEXTURE_2D,P)),A=f.getTexParameter(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER),D=f.getExtension("EXT_texture_filter_anisotropic")||f.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),L=D?f.getTexParameter(f.TEXTURE_2D,D.TEXTURE_MAX_ANISOTROPY_EXT):null;c(),x.forEach((P,W)=>f.texParameteri(f.TEXTURE_2D,P,k[W])),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,r?f.LINEAR:A),D&&L&&f.texParameterf(f.TEXTURE_2D,D.TEXTURE_MAX_ANISOTROPY_EXT,L),f.activeTexture(f.TEXTURE0)}let u=!1;const p=()=>{u||(u=!0,f.activeTexture(f.TEXTURE0+n),f.bindTexture(f.TEXTURE_2D,a),f.activeTexture(f.TEXTURE0),f.deleteTexture(t),s&&s(a))},d=x=>document.hidden?setTimeout(x,0):requestAnimationFrame(x),h=x=>{c(),f.pixelStorei(f.UNPACK_ALIGNMENT,1),f.texSubImage2D(f.TEXTURE_2D,x.l,0,x.y0,x.w,x.h,f.LUMINANCE,f.UNSIGNED_BYTE,x.lum),f.pixelStorei(f.UNPACK_ALIGNMENT,4),f.activeTexture(f.TEXTURE0)},_=()=>{if(!f)return;let x=0;for(let D=1;D<no.length;D++)no[D].prio<no[x].prio&&(x=D);const k=no.splice(x,1)[0];if(!k){Fs=!1;return}const A=performance.now();k.run(),window.__залив&&window.__залив.push([k.unit,k.what,+(performance.now()-A).toFixed(1),Math.round(A)]),d(_)},m=x=>{const k=x.strip?x.strip.l>0?2:n===3?0:1:x.prio??(n===3?0:1);no.push({unit:n,prio:k,what:x.strip?"полоса "+x.strip.l+":"+x.strip.y0:"действие",run:()=>x.strip?h(x.strip):x.fn()}),Fs||(Fs=!0,d(_))};let v=0;const b=x=>m({prio:2,fn:()=>{c(),x||f.generateMipmap(f.TEXTURE_2D),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,f.LINEAR_MIPMAP_LINEAR),f.activeTexture(f.TEXTURE0),R.has("mapswap")&&p(),y()}});Vl++,Yd=!0;let E=!1;const y=()=>{E||(E=!0,Vl--)},w=hf(e,{size:i},x=>{if(f){if(x.size)v=x.size[0],m({fn:()=>{c(),f.texImage2D(f.TEXTURE_2D,0,f.LUMINANCE,x.size[0],x.size[1],0,f.LUMINANCE,f.UNSIGNED_BYTE,null),f.activeTexture(f.TEXTURE0),R.has("mapswap")||p()}});else if(x.lum)m({strip:x});else if(x.done&&!r)m({fn:()=>{R.has("mapswap")&&p(),y()}});else if(x.fail)y();else if(x.done&&r){if(!o||v!==8192){b(!1);return}const k=[];let A=0;for(let L=1,P=v>>1;P>=1;L++,P>>=1)k.push([L,L===1?0:v>>1,L===1?0:A,P,P]),L>1&&(A+=P);m({prio:2,fn:()=>{c();for(const[L,,,P,W]of k)f.texImage2D(f.TEXTURE_2D,L,f.LUMINANCE,P,W,0,f.LUMINANCE,f.UNSIGNED_BYTE,null);f.activeTexture(f.TEXTURE0)}}),hf(o,{rects:k},L=>{L.lum?m({strip:L}):L.done?b(!0):L.fail&&b(!1)})||b(!1)}}});return w||y(),w}function Vd(n,t,e,{mip:r,size:i}){fetch(e).then(o=>o.blob()).then(o=>i?createImageBitmap(o,{resizeWidth:i,resizeHeight:i,resizeQuality:"high"}):createImageBitmap(o)).then(o=>{const s=()=>{f&&(f.activeTexture(f.TEXTURE0+n),f.bindTexture(f.TEXTURE_2D,t),f.texImage2D(f.TEXTURE_2D,0,f.LUMINANCE,f.LUMINANCE,f.UNSIGNED_BYTE,o),r&&f.generateMipmap(f.TEXTURE_2D),f.activeTexture(f.TEXTURE0),o.close&&o.close())};window.requestIdleCallback?window.requestIdleCallback(s,{timeout:2500}):setTimeout(s,300)}).catch(()=>{})}function Wv(n){const t=n.createTexture();n.activeTexture(n.TEXTURE3),n.bindTexture(n.TEXTURE_2D,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR);const e=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");if(e){const a=n.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT),l=R.has("aniso")?Number(R.get("aniso")):16;n.texParameterf(n.TEXTURE_2D,e.TEXTURE_MAX_ANISOTROPY_EXT,Math.max(1,Math.min(l,a)))}n.texImage2D(n.TEXTURE_2D,0,n.LUMINANCE,1,1,0,n.LUMINANCE,n.UNSIGNED_BYTE,new Uint8Array([0])),n.activeTexture(n.TEXTURE0);const r=f?f.getParameter(f.MAX_TEXTURE_SIZE):4096,i=!!R.get("maptest"),o={mip:!0,size:r>=8192?0:r,atlas:i?null:Iv},s=i?"/assets/map/проверка-сетка.webp":"/assets/map/pardubice.webp";return Gd(3,t,s,o,a=>{Cs=a})||Vd(3,t,s,o),fetch("/assets/map/pardubice.json").then(a=>a.json()).then(a=>{te=a,jd(),Gc(),Kd()}).catch(()=>{}),t}function Xv(n){const t=n.createTexture();n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);const e=Dg?n.NEAREST:n.LINEAR;return n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,e),n.texImage2D(n.TEXTURE_2D,0,n.LUMINANCE,1,1,0,n.LUMINANCE,n.UNSIGNED_BYTE,new Uint8Array([0])),n.activeTexture(n.TEXTURE0),Gd(4,t,"/assets/map/pardubice-h.webp",{mip:!1},r=>{Ns=r})||Vd(4,t,"/assets/map/pardubice-h.webp",{mip:!1}),t}let Bo=1;function Gc(){if(!f||!M)return;const n=te?te.полуокно_м*2:4200;M.mapSpan&&f.uniform1f(M.mapSpan,n/ga*Bo),M.markR&&f.uniform1f(M.markR,Zg/n)}function s1(n){const t=Bo;Bo=n,t!==n&&Gc()}function Kd(){if(!f||!M||!M.hpx)return;const n=te&&te.высоты&&te.высоты.сторона_пикс;f.uniform1f(M.hpx,n||4096)}function jd(){if(!f||!M||!M.spots||!te)return;const n=["palachovka","kostelicek","karlovina","labska","hradecka"],t=new Float32Array(10);n.forEach((e,r)=>{const i=te.проекты[e];i&&(t[r*2]=i.u,t[r*2+1]=i.v)}),f.uniform2fv(M.spots,t)}function a1(n){!f||!M||!M.ringsOn||(f.uniform1f(M.ringsOn,n?1:0),n&&M.rings&&f.uniform1fv(M.rings,new Float32Array([0,1,2,3,4].map(t=>n[t]||0))))}function l1(n,t,e,r,i){!f||!M||!M.spotAct||(f.uniform1f(M.spotAct,n),t!==void 0&&(f.uniform2f(M.mapCen,t,e),le.cu=t,le.cv=e),r!==void 0&&(f.uniform2f(M.mapRot,r,i),le.cos=r,le.sin=i))}const le={cu:.5,cv:.5,cos:1,sin:0};function Hv(){if(!U||!U.height)return null;const n=tt.qmx,t=tt.qm,e=Math.cos(er),r=Math.sin(er),i=n*e-t*r,o=n*r+t*e;if(o<jo)return null;const s=Ko/o,a=Math.cos(Vr),l=Math.sin(Vr),c=i*s,u=-Kn*s,p=c*a-u*l,d=c*l+u*a,h=Math.min(2,window.devicePixelRatio||1),_=p*U.height+.5*U.width,m=d*U.height+.5*U.height;return{x:_/h,y:(U.height-m)/h}}function c1(n){if(!U||!U.height||!te)return null;const t=["palachovka","kostelicek","karlovina","labska","hradecka"],e=te.проекты[t[n]];if(!e)return null;const i=te.полуокно_м*2/ga*Bo,o=e.u-le.cu,s=e.v-le.cv,a=o*le.cos+s*le.sin,l=-o*le.sin+s*le.cos,c=tt.qmx+a*i,u=tt.qm-l*i,p=Math.cos(er),d=Math.sin(er),h=c*p-u*d,_=c*d+u*p;if(_<jo)return null;const m=Ko/_,v=Math.cos(Vr),b=Math.sin(Vr),E=h*m,y=-Kn*m,w=E*v-y*b,x=E*b+y*v,k=Math.min(2,window.devicePixelRatio||1),A=w*U.height+.5*U.width,D=x*U.height+.5*U.height,L=tt.qmx*d+tt.qm*p;return{x:A/k,y:(U.height-D)/k,s:L/_}}function u1(){return te&&te.проекты}function zv(n){const r=document.createElement("canvas");r.width=1536,r.height=96;const i=r.getContext("2d");i.clearRect(0,0,r.width,r.height),i.fillStyle="#fff",i.textAlign="center",i.textBaseline="middle",i.font="600 58px ui-sans-serif, system-ui, -apple-system, sans-serif",Cv.forEach((s,a)=>i.fillText(s,a*96+96/2,96/2+3));const o=n.createTexture();return n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,o),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texImage2D(n.TEXTURE_2D,0,n.ALPHA,n.ALPHA,n.UNSIGNED_BYTE,r),n.activeTexture(n.TEXTURE0),o}function jl(){if(f=U.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1}),!f||!f.getExtension("OES_standard_derivatives"))return!1;Yi=f.getExtension("KHR_parallel_shader_compile");const n=Uc(),t=f.createShader(f.VERTEX_SHADER);f.shaderSource(t,uv),f.compileShader(t);const e=f.createShader(f.FRAGMENT_SHADER);return f.shaderSource(e,fv(n)),f.compileShader(e),C=f.createProgram(),f.attachShader(C,t),f.attachShader(C,e),f.linkProgram(C),zo={vs:t,fs:e,вид:n},Yi?!0:Vc()}function Vc(){const{vs:n,fs:t,вид:e}=zo;zo=null;for(const a of[n,t])if(!f.getShaderParameter(a,f.COMPILE_STATUS))return console.warn("[cfig] дорожка не собралась:",f.getShaderInfoLog(a)),!1;if(!f.getProgramParameter(C,f.LINK_STATUS))return console.warn("[cfig] дорожка не слинковалась:",f.getProgramInfoLog(C)),!1;f.useProgram(C),Gi=e,_s||(_s=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,_s),f.bufferData(f.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),f.STATIC_DRAW)),f.bindBuffer(f.ARRAY_BUFFER,_s);const r=f.getAttribLocation(C,"aPos");f.enableVertexAttribArray(r),f.vertexAttribPointer(r,2,f.FLOAT,!1,0,0),M={res:f.getUniformLocation(C,"uRes"),off:f.getUniformLocation(C,"uOffset"),time:f.getUniformLocation(C,"uTime"),mouse:f.getUniformLocation(C,"uMouse"),lift:f.getUniformLocation(C,"uLift"),sign:f.getUniformLocation(C,"uSign"),wordAmt:f.getUniformLocation(C,"uWordAmt"),wordBox:f.getUniformLocation(C,"uWordBox"),wordTint:f.getUniformLocation(C,"uWordTint"),look:f.getUniformLocation(C,"uWordLook"),gain:f.getUniformLocation(C,"uWordGain"),pool:f.getUniformLocation(C,"uPool"),plot:f.getUniformLocation(C,"uPlot"),plotRot:f.getUniformLocation(C,"uPlotRot"),plotS:f.getUniformLocation(C,"uPlotS"),plotAmt:f.getUniformLocation(C,"uPlotAmt"),plotLen:f.getUniformLocation(C,"uPlotLen"),spots:f.getUniformLocation(C,"uSpots"),spotAct:f.getUniformLocation(C,"uSpotAct"),rings:f.getUniformLocation(C,"uRings"),ringsOn:f.getUniformLocation(C,"uRingsOn"),mapCen:f.getUniformLocation(C,"uMapCen"),mapSpan:f.getUniformLocation(C,"uMapSpan"),markR:f.getUniformLocation(C,"uMarkR"),mapRot:f.getUniformLocation(C,"uMapRot"),hpx:f.getUniformLocation(C,"uHPx"),taps:f.getUniformLocation(C,"uTaps"),tapTint:f.getUniformLocation(C,"uTapTint"),tapLive:f.getUniformLocation(C,"uTapLive"),waves:f.getUniformLocation(C,"uWaves"),mapM:f.getUniformLocation(C,"uMapM"),houseBox:f.getUniformLocation(C,"uHouseBox"),houseOn:f.getUniformLocation(C,"uHouseOn"),houseMask:f.getUniformLocation(C,"uHouseMask"),winLv:f.getUniformLocation(C,"uWinLv"),winFloor:f.getUniformLocation(C,"uWinFloor"),winAx0:f.getUniformLocation(C,"uWinAx0"),winAx1:f.getUniformLocation(C,"uWinAx1")},f.viewport(0,0,U.width,U.height),f.uniform2f(M.res,U.width,U.height),ya(),f.uniform4f(M.plot,tt.qx,tt.qy,tt.hl,tt.hs),f.uniform2f(M.plotS,tt.qx,tt.qys),f.uniform2f(M.plotRot,Math.cos(tt.spin),Math.sin(tt.spin)),f.uniform1f(M.plotAmt,tt.amt),f.uniform1f(M.plotLen,tt.len),M.spotAct&&f.uniform1f(M.spotAct,-1),M.ringsOn&&f.uniform1f(M.ringsOn,0),M.mapCen&&f.uniform2f(M.mapCen,.5,.5),M.mapRot&&f.uniform2f(M.mapRot,1,0),Gc(),jd(),Kd(),f.uniform2f(M.lift,N_,I_),f.uniform3f(M.sign,0,0,0),Xl=!0,Xd(performance.now()/1e3),M.houseMask&&(Xn||(Xn=f.createTexture(),f.activeTexture(f.TEXTURE5),f.bindTexture(f.TEXTURE_2D,Xn),f.texImage2D(f.TEXTURE_2D,0,f.RGBA,1,1,0,f.RGBA,f.UNSIGNED_BYTE,new Uint8Array(4))),f.activeTexture(f.TEXTURE5),f.bindTexture(f.TEXTURE_2D,Xn),f.uniform1i(M.houseMask,5),f.activeTexture(f.TEXTURE0)),Bl=!0,$d(performance.now()/1e3),Yl(),f.uniform1f(M.wordAmt,Wd),f.uniform3f(M.wordTint,Is[0],Is[1],Is[2]),Qd(),Ga||(Ga=Yv(f)),f.activeTexture(f.TEXTURE1),f.bindTexture(f.TEXTURE_2D,Ga),f.uniform1i(f.getUniformLocation(C,"uWord"),1),f.activeTexture(f.TEXTURE0),f.uniform2f(M.pool,U_,q_);const i=Gl("--track-dot",[.31,.58,.77,.42]),o=Gl("--track-dot-far",[.31,.58,.77,.13]);f.uniform3f(f.getUniformLocation(C,"uDot"),i[0],i[1],i[2]),f.uniform1f(f.getUniformLocation(C,"uDotA"),i[3]),f.uniform3f(f.getUniformLocation(C,"uWash"),o[0],o[1],o[2]),Cs||(Cs=Wv(f)),f.activeTexture(f.TEXTURE3),f.bindTexture(f.TEXTURE_2D,Cs),f.uniform1i(f.getUniformLocation(C,"uCity"),3);const s=f.getUniformLocation(C,"uHeight");return s&&(Ns||(Ns=Xv(f)),f.activeTexture(f.TEXTURE4),f.bindTexture(f.TEXTURE_2D,Ns),f.uniform1i(s,4),f.activeTexture(f.TEXTURE0)),f.activeTexture(f.TEXTURE0),Va||(Va=zv(f)),f.activeTexture(f.TEXTURE2),f.bindTexture(f.TEXTURE_2D,Va),f.uniform1i(f.getUniformLocation(C,"uGlyph"),2),f.activeTexture(f.TEXTURE0),Ya||(Ya=Ov(f)),f.activeTexture(f.TEXTURE0),f.bindTexture(f.TEXTURE_2D,Ya),f.uniform1i(f.getUniformLocation(C,"uNoise"),0),na||(na=performance.now()),!0}function Zd(n,t){const e=Math.min(n*br.w*.5/Ul,t*.1);return{x:n*br.x,y:t*(1-br.y),hw:e*Ul,hh:e}}function Qd(){!f||!M||!M.look||(f.uniform4f(M.look,br.dot,br.lit,br.halo,br.core),f.uniform1f(M.gain,br.gain))}function f1(n){Object.assign(br,n),Qd(),ya()}const h1=()=>({...br});function ya(){if(!f||!M||!U)return;const n=Zd(U.width,U.height);f.uniform4f(M.wordBox,n.x,n.y,n.hw,n.hh)}function $o(){const n=Math.min(2,window.devicePixelRatio||1),t=Math.max(1,Math.round(U.clientWidth*n)),e=Math.max(1,Math.round(U.clientHeight*n));U.width===t&&U.height===e||(U.width=t,U.height=e,f.viewport(0,0,t,e),f.uniform2f(M.res,t,e),ya())}function Bv(n,t,e){return(n*pg+t/e*mg)*Cd}function oa(n){if(_n=0,!f)return;if(zo){if(Yi&&!f.getProgramParameter(C,Yi.COMPLETION_STATUS_KHR)){_n=requestAnimationFrame(oa);return}if(!Vc()){U.style.opacity="0",$r=!1;return}}const t=window.innerHeight||1,e=C_(),r=Math.max(0,Math.min(1,(e-t*lv)/(t*cv)));if(U.style.opacity=r.toFixed(3),r>0){$o();const i=((n||performance.now())-na)/1e3;f.uniform1f(M.time,i),f.uniform1f(M.off,Lr=Bv(i,e,t));const o=Math.min(.1,Math.max(0,((n||performance.now())-of)/1e3));of=n||performance.now();const s=j.on?1:0;j.amt+=(s-j.amt)*Math.min(1,o*(s?ng:ig)),j.sx+=(j.x-j.sx)*Math.min(1,o*Qu),j.sy+=(j.y-j.sy)*Math.min(1,o*Qu),f.uniform3f(M.mouse,j.sx,j.sy,F_(Gi)?j.amt:0),Xd((n||performance.now())/1e3),Pv((n||performance.now())/1e3),f.drawArrays(f.TRIANGLES,0,3),Un&&Un()}$r&&(_n=requestAnimationFrame(oa))}function Jd(){if(zo){if(Yi&&!f.getProgramParameter(C,Yi.COMPLETION_STATUS_KHR)){requestAnimationFrame(Jd);return}if(!Vc()){U.style.opacity="0";return}}$o(),U.style.opacity="1",f.uniform1f(M.time,0),f.uniform1f(M.off,Lr=0),f.uniform3f(M.mouse,0,0,0),f.drawArrays(f.TRIANGLES,0,3)}function Zl(){$r=!1,_n&&cancelAnimationFrame(_n),_n=0}function $v(n,t,e){if(!f||!M||!M.sign)return;const r=Math.min(2,window.devicePixelRatio||1);f.uniform3f(M.sign,n*r,((window.innerHeight||1)-t)*r,e)}function Yv(n){const t=n.createTexture();n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.activeTexture(n.TEXTURE0),n.activeTexture(n.TEXTURE1),n.texImage2D(n.TEXTURE_2D,0,n.ALPHA,1,1,0,n.ALPHA,n.UNSIGNED_BYTE,new Uint8Array([0])),n.activeTexture(n.TEXTURE0);const e=new Image;return e.onload=()=>{if(!n)return;const r=2048,i=e.naturalWidth/Math.max(1,e.naturalHeight),o=Math.max(2,Math.round(r/i)),s=document.createElement("canvas");s.width=r,s.height=o,s.getContext("2d").drawImage(e,0,0,r,o),Ul=i,n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,t),n.texImage2D(n.TEXTURE_2D,0,n.ALPHA,n.ALPHA,n.UNSIGNED_BYTE,s),n.activeTexture(n.TEXTURE0),ya()},e.src=rg,t}function Gv(n,t){Wd=n,t&&(Is=[t[0],t[1],t[2]]),!(!f||!M||!M.wordAmt)&&(t&&f.uniform3f(M.wordTint,t[0],t[1],t[2]),f.uniform1f(M.wordAmt,n))}function Vv(){if(U=document.querySelector("canvas.canvas-track"),!!U){if(getComputedStyle(U).display==="none"){Zl(),U.style.opacity="0";return}if(Dv(),kv(),f&&Gi!==Uc()&&(C&&f.deleteProgram(C),C=null,!jl())){U.style.opacity="0";return}if(!f&&!jl()){U.style.opacity="0";return}if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Zl(),Jd();return}ef||(window.addEventListener("resize",()=>{f&&$o()},{passive:!0}),ef=!0),$r||($r=!0,_n=requestAnimationFrame(oa))}}const Kv="--figure-anchor";let Ql=[],Jl=0,Ja=!1;function tp(){Jl=0;const n=Math.min(window.scrollY||0,window.innerHeight||0),t=n>0?`translate3d(0, ${-n.toFixed(1)}px, 0)`:"";for(const e of Ql)e.style.transform=t}function df(){Jl||(Jl=requestAnimationFrame(tp))}function jv(){const n=document.getElementById("canvas-wrapper");if(!n)return;if(Ql=[...n.querySelectorAll("canvas:not(.canvas-track), .canvas-poster")],!(getComputedStyle(document.body).getPropertyValue(Kv).trim()==="1")){for(const e of Ql)e.style.transform="";Ja=!1;return}Ja||(window.addEventListener("scroll",df,{passive:!0}),window.addEventListener("resize",df,{passive:!0}),Ja=!0),tp()}const oi=n=>window.__vheroCalm?window.__vheroCalm.then(n):n(),Kr=n=>()=>requestAnimationFrame(n),Sn=n=>()=>oi(()=>requestAnimationFrame(n));document.addEventListener("astro:page-load",Kr(a_));document.addEventListener("astro:page-load",Kr(f_));document.addEventListener("astro:page-load",Kr(T_));document.addEventListener("astro:page-load",Kr(R_));document.addEventListener("astro:page-load",Kr(S_));document.addEventListener("astro:page-load",Kr(D_));document.addEventListener("astro:page-load",Sn(Vv));document.addEventListener("astro:page-load",Kr(jv));Or(()=>import("./ending.D5skQFQd.js"),[]).then(n=>{document.addEventListener("astro:page-load",Kr(n.init)),n.init()});const sa=new URLSearchParams(location.search),Zv=sa.get("mesh")!=="0",Qv=()=>Zv&&(document.body.dataset.route==="tronexo"||sa.has("mesh")||sa.has("wordtune"));let tl=null;const ep=()=>{Qv()&&(tl||(tl=Or(()=>import("./chart.Dc12DK5A.js"),__vite__mapDeps([0,1,2,3,4])).then(n=>(document.addEventListener("astro:page-load",Sn(n.init)),n))),tl.then(n=>n.init()))};document.addEventListener("astro:page-load",Sn(ep));oi(ep);const Jv=()=>document.querySelector("[data-count]")&&Or(()=>import("./counter.DjCuVpYq.js"),[]).then(n=>n.init());document.addEventListener("astro:page-load",Jv);const rp=()=>document.querySelector("[data-step-icon], [data-num3d], [data-icon3d]")&&Or(()=>import("./step-icons.zvp08N9X.js"),__vite__mapDeps([5,1,6])).then(n=>n.init());document.addEventListener("astro:page-load",Sn(rp));document.addEventListener("astro:before-swap",()=>{window.__cfigStepIcons&&Or(()=>import("./step-icons.zvp08N9X.js"),__vite__mapDeps([5,1,6])).then(n=>n.destroy())});oi(rp);oi(()=>Or(()=>import("./story.C9qJfrym.js"),__vite__mapDeps([7,1,3,4])).then(n=>{document.addEventListener("astro:page-load",Sn(n.init)),n.init()}));oi(()=>Or(()=>import("./index.BzT4Dhid.js"),__vite__mapDeps([8,1,2])).then(n=>{document.addEventListener("astro:page-load",Sn(n.init)),n.init()}));oi(()=>Or(()=>import("./index.C7zaps01.js"),__vite__mapDeps([9,1,3,4,6])).then(n=>{document.addEventListener("astro:page-load",Sn(n.init)),n.init()}));oi(()=>Or(()=>import("./pitch.BjaSULmf.js"),__vite__mapDeps([10,1,6,2,3,4])).then(n=>{document.addEventListener("astro:page-load",Sn(n.init)),n.init()}));sa.has("wordtune")&&Or(()=>import("./wordtune.tzlmDxRt.js"),__vite__mapDeps([11,3,4,1])).then(n=>{document.addEventListener("astro:page-load",Kr(n.init)),n.init()});export{Vo as F,B as S,Hv as a,C_ as b,$v as c,o1 as d,l1 as e,a1 as f,dr as g,n1 as h,s1 as i,u1 as j,f1 as k,Gv as l,i1 as m,Rd as n,c1 as s,h1 as w};
