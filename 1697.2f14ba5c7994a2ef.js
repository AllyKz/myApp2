"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1697],{1697:(q,O,m)=>{m.r(O),m.d(O,{startInputShims:()=>X});var y=m(5861),M=m(4862),h=m(6655),K=m(4963);m(4110);const D=new WeakMap,I=(e,t,s,n=0,o=!1)=>{D.has(e)!==s&&(s?k(e,t,n,o):H(e,t))},k=(e,t,s,n=!1)=>{const o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,n&&(r.disabled=!0),o.appendChild(r),D.set(e,r);const c="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${c}px,${s}px,0) scale(0)`},H=(e,t)=>{const s=D.get(e);s&&(D.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",P=(e,t,s)=>{const n=e[U];n&&clearTimeout(n),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},N=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&P(t,0,s)},{once:!0})};let g=0;const T="data-ionic-skip-scroll-assist",z=(e,t,s,n,o,r,a,c=!1)=>{const i=r&&(void 0===a||a.mode===K.a.None),S=function(){var u=(0,y.Z)(function*(){t.hasAttribute(T)?t.removeAttribute(T):J(e,t,s,n,o,i,c)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0)}},w=e=>{document.activeElement!==e&&(e.setAttribute(T,"true"),e.focus())},J=function(){var e=(0,y.Z)(function*(t,s,n,o,r,a,c=!1){if(!n&&!o)return;const i=((e,t,s)=>{var n;return((e,t,s,n)=>{const o=e.top,r=e.bottom,a=t.top,i=a+15,u=Math.min(t.bottom,n-s)-50-r,v=i-o,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,o-a),p=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,p)),scrollPadding:s,inputSafeY:4-(o-i)}})((null!==(n=e.closest("ion-item,[ion-item]"))&&void 0!==n?n:e).getBoundingClientRect(),t.getBoundingClientRect(),s,e.ownerDocument.defaultView.innerHeight)})(t,n||o,r);if(n&&Math.abs(i.scrollAmount)<4)return w(s),void(a&&null!==n&&(P(n,g),N(s,n,()=>g=0)));if(I(t,s,!0,i.inputSafeY,c),w(s),(0,h.r)(()=>t.click()),a&&n&&(g=i.scrollPadding,P(n,g)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),n&&(yield(0,M.c)(n,0,i.scrollAmount,i.scrollDuration)),I(t,s,!1,i.inputSafeY),w(s),a&&N(s,n,()=>g=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(n){const l=yield(0,M.g)(n);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,n,o,r,a,c){return e.apply(this,arguments)}}(),X=function(){var e=(0,y.Z)(function*(t,s){const n=document,o="ios"===s,r="android"===s,a=t.getNumber("keyboardHeight",290),c=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",o),S=t.getBoolean("inputBlurring",o),u=t.getBoolean("scrollPadding",!0),v=Array.from(n.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,W=yield K.K.getResizeMode(),p=function(){var f=(0,y.Z)(function*(d){yield new Promise(A=>(0,h.c)(d,A));const x=d.shadowRoot||d,L=x.querySelector("input")||x.querySelector("textarea"),b=(0,M.f)(d),j=b?null:d.closest("ion-footer");if(L){if(b&&i&&!l.has(d)){const A=((e,t,s)=>{if(!s||!t)return()=>{};const n=c=>{(e=>e===e.getRootNode().activeElement)(t)&&I(e,t,c)},o=()=>I(e,t,!1),r=()=>n(!0),a=()=>n(!1);return(0,h.a)(s,"ionScrollStart",r),(0,h.a)(s,"ionScrollEnd",a),t.addEventListener("blur",o),()=>{(0,h.b)(s,"ionScrollStart",r),(0,h.b)(s,"ionScrollEnd",a),t.removeEventListener("blur",o)}})(d,L,b);l.set(d,A)}if("date"!==L.type&&"datetime-local"!==L.type&&(b||j)&&c&&!_.has(d)){const A=z(d,L,b,j,a,u,W,r);_.set(d,A)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let e=!0,t=!1;const s=document;(0,h.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",a=>{if(t)return void(t=!1);const c=s.activeElement;if(!c||c.matches(C))return;const i=a.target;i!==c&&(i.matches(C)||i.closest(C)||(e=!1,setTimeout(()=>{e||c.blur()},50)))},!1)})();for(const f of v)p(f);n.addEventListener("ionInputDidLoad",f=>{p(f.detail)}),n.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const d=l.get(f);d&&d(),l.delete(f)}if(c){const d=_.get(f);d&&d(),_.delete(f)}})(f.detail)})});return function(s,n){return e.apply(this,arguments)}}()}}]);