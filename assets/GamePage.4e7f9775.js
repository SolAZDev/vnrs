import{c as Q,h as te,d as st,a as ut,e as dt,f as ct}from"./dom.200cc4ed.js";import{c,h as C,e as Z,r as _,w as D,b as oe,i as Be,l as je,g as U,f as ft,H as De,A as Ke,z as Te,o as Ge,B as He,k as ht,C as mt,T as yt,D as M,d as O,E as vt,F as bt,G as Ue,I as Pe,J as gt,x as pt,j as Ee,m as wt,q as F,K as we,u as f,t as k,L as H,M as R,N as S,O as E,y as z,P as A,s as Y,Q as N,R as kt}from"./index.41be9820.js";import{Q as Xe,b as Wt,a as _t,h as xt}from"./QResizeObserver.4b8f7542.js";import{u as qt,a as Ct,v as Ye,b as Tt,g as fe,Q as P}from"./QBtn.850eeecc.js";var Ve=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const a=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:a.value},te(t.default))}}),ze=Q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const a=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:a.value,role:"toolbar"},te(t.default))}}),Bt=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:a}){const{proxy:{$q:l}}=U(),o=Be(je,Z);if(o===Z)return console.error("QHeader needs to be child of QLayout"),Z;const u=_(parseInt(e.heightHint,10)),r=_(!0),i=c(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||l.platform.is.ios&&o.isContainer.value===!0),h=c(()=>{if(e.modelValue!==!0)return 0;if(i.value===!0)return r.value===!0?u.value:0;const n=u.value-o.scroll.value.position;return n>0?n:0}),m=c(()=>e.modelValue!==!0||i.value===!0&&r.value!==!0),g=c(()=>e.modelValue===!0&&m.value===!0&&e.reveal===!0),x=c(()=>"q-header q-layout__section--marginal "+(i.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(m.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),T=c(()=>{const n=o.rows.value.top,b={};return n[0]==="l"&&o.left.space===!0&&(b[l.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),n[2]==="r"&&o.right.space===!0&&(b[l.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),b});function w(n,b){o.update("header",n,b)}function p(n,b){n.value!==b&&(n.value=b)}function v({height:n}){p(u,n),w("size",n)}function W(n){g.value===!0&&p(r,!0),a("focusin",n)}D(()=>e.modelValue,n=>{w("space",n),p(r,!0),o.animate()}),D(h,n=>{w("offset",n)}),D(()=>e.reveal,n=>{n===!1&&p(r,e.modelValue)}),D(r,n=>{o.animate(),a("reveal",n)}),D(o.scroll,n=>{e.reveal===!0&&p(r,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const V={};return o.instances.header=V,e.modelValue===!0&&w("size",u.value),w("space",e.modelValue),w("offset",h.value),oe(()=>{o.instances.header===V&&(o.instances.header=void 0,w("size",0),w("offset",0),w("space",!1))}),()=>{const n=st(t.default,[]);return e.elevated===!0&&n.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(C(Xe,{debounce:0,onResize:v})),C("header",{class:x.value,style:T.value,onFocusin:W},n)}}});const It={dark:{type:Boolean,default:null}};function St(e,t){return c(()=>e.dark===null?t.dark.isActive:e.dark)}var ue=Q({name:"QCard",props:{...It,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=U(),l=St(e,a),o=c(()=>"q-card"+(l.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>C(e.tag,{class:o.value},te(t.default))}}),Dt=Q({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:a}){const{proxy:{$q:l}}=U(),o=Be(je,Z);if(o===Z)return console.error("QFooter needs to be child of QLayout"),Z;const u=_(parseInt(e.heightHint,10)),r=_(!0),i=_(ft.value===!0||o.isContainer.value===!0?0:window.innerHeight),h=c(()=>e.reveal===!0||o.view.value.indexOf("F")>-1||l.platform.is.ios&&o.isContainer.value===!0),m=c(()=>o.isContainer.value===!0?o.containerHeight.value:i.value),g=c(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return r.value===!0?u.value:0;const s=o.scroll.value.position+m.value+u.value-o.height.value;return s>0?s:0}),x=c(()=>e.modelValue!==!0||h.value===!0&&r.value!==!0),T=c(()=>e.modelValue===!0&&x.value===!0&&e.reveal===!0),w=c(()=>"q-footer q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(x.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(h.value!==!0?" hidden":""):"")),p=c(()=>{const s=o.rows.value.bottom,B={};return s[0]==="l"&&o.left.space===!0&&(B[l.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),s[2]==="r"&&o.right.space===!0&&(B[l.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),B});function v(s,B){o.update("footer",s,B)}function W(s,B){s.value!==B&&(s.value=B)}function V({height:s}){W(u,s),v("size",s)}function n(){if(e.reveal!==!0)return;const{direction:s,position:B,inflectionPoint:L}=o.scroll.value;W(r,s==="up"||B-L<100||o.height.value-m.value-B-u.value<300)}function b(s){T.value===!0&&W(r,!0),a("focusin",s)}D(()=>e.modelValue,s=>{v("space",s),W(r,!0),o.animate()}),D(g,s=>{v("offset",s)}),D(()=>e.reveal,s=>{s===!1&&W(r,e.modelValue)}),D(r,s=>{o.animate(),a("reveal",s)}),D([u,o.scroll,o.height],n),D(()=>l.screen.height,s=>{o.isContainer.value!==!0&&W(i,s)});const $={};return o.instances.footer=$,e.modelValue===!0&&v("size",u.value),v("space",e.modelValue),v("offset",g.value),oe(()=>{o.instances.footer===$&&(o.instances.footer=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const s=ut(t.default,[C(Xe,{debounce:0,onResize:V})]);return e.elevated===!0&&s.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),C("footer",{class:w.value,style:p.value,onFocusin:b},s)}}}),ke=Q({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const a=c(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>C(e.tag,{class:a.value},te(t.default))}}),We=Q({name:"QCardActions",props:{...qt,vertical:Boolean},setup(e,{slots:t}){const a=Ct(e),l=c(()=>`q-card__actions ${a.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>C("div",{class:l.value},te(t.default))}});function Ht(e,t,a){let l;function o(){l!==void 0&&(De.remove(l),l=void 0)}return oe(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){l={condition:()=>a.value===!0,handler:t},De.add(l)}}}function Pt(){let e;const t=U();function a(){clearTimeout(e)}return Ke(a),oe(a),{removeTimeout:a,registerTimeout(l,o){clearTimeout(e),Ye(t)===!1&&(e=setTimeout(l,o))}}}function Et(){let e;const t=U();function a(){e=void 0}return Ke(a),oe(a),{removeTick:a,registerTick(l){e=l,Te(()=>{e===l&&(Ye(t)===!1&&e(),e=void 0)})}}}const Vt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},zt=["beforeShow","show","beforeHide","hide"];function Lt({showing:e,canShow:t,hideOnRouteChange:a,handleShow:l,handleHide:o,processOnMount:u}){const r=U(),{props:i,emit:h,proxy:m}=r;let g;function x(n){e.value===!0?p(n):T(n)}function T(n){if(i.disable===!0||n!==void 0&&n.qAnchorHandled===!0||t!==void 0&&t(n)!==!0)return;const b=i["onUpdate:modelValue"]!==void 0;b===!0&&(h("update:modelValue",!0),g=n,Te(()=>{g===n&&(g=void 0)})),(i.modelValue===null||b===!1)&&w(n)}function w(n){e.value!==!0&&(e.value=!0,h("beforeShow",n),l!==void 0?l(n):h("show",n))}function p(n){if(i.disable===!0)return;const b=i["onUpdate:modelValue"]!==void 0;b===!0&&(h("update:modelValue",!1),g=n,Te(()=>{g===n&&(g=void 0)})),(i.modelValue===null||b===!1)&&v(n)}function v(n){e.value!==!1&&(e.value=!1,h("beforeHide",n),o!==void 0?o(n):h("hide",n))}function W(n){i.disable===!0&&n===!0?i["onUpdate:modelValue"]!==void 0&&h("update:modelValue",!1):n===!0!==e.value&&(n===!0?w:v)(g)}D(()=>i.modelValue,W),a!==void 0&&Tt(r)===!0&&D(()=>m.$route.fullPath,()=>{a.value===!0&&e.value===!0&&p()}),u===!0&&Ge(()=>{W(i.modelValue)});const V={show:T,hide:p,toggle:x};return Object.assign(m,V),V}const Ft={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function $t(e,t=()=>{},a=()=>{}){return{transitionProps:c(()=>{const l=`q-transition--${e.transitionShow||t()}`,o=`q-transition--${e.transitionHide||a()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:c(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let re=[],se=[];function Je(e){se=se.filter(t=>t!==e)}function At(e){Je(e),se.push(e)}function Le(e){Je(e),se.length===0&&re.length>0&&(re[re.length-1](),re=[])}function Mt(e){se.length===0?e():re.push(e)}let Qt=document.body;function Ot(e){const t=document.createElement("div");if(e!==void 0&&(t.id=e),He.globalNodes!==void 0){const a=He.globalNodes.class;a!==void 0&&(t.className=a)}return Qt.appendChild(t),t}function Rt(e){e.remove()}const he=[];function Nt(e){return he.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function jt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return fe(e)}else if(e.__qPortal===!0){const a=fe(e);return a!==void 0&&a.$options.name==="QPopupProxy"?(e.hide(t),a):e}e=fe(e)}while(e!=null)}function Kt(e,t,a){for(;a!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(a--,e.$options.name==="QMenu"){e=jt(e,t);continue}e.hide(t)}e=fe(e)}}function Gt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ut(e,t,a,l){const o=_(!1),u=_(!1);let r=null;const i={},h=l===!0&&Gt(e);function m(x){if(x===!0){Le(i),u.value=!0;return}u.value=!1,o.value===!1&&(h===!1&&r===null&&(r=Ot()),o.value=!0,he.push(e.proxy),At(i))}function g(x){if(u.value=!1,x!==!0)return;Le(i),o.value=!1;const T=he.indexOf(e.proxy);T!==-1&&he.splice(T,1),r!==null&&(Rt(r),r=null)}return ht(()=>{g(!0)}),e.proxy.__qPortal=!0,mt(e.proxy,"contentEl",()=>t.value),{showPortal:m,hidePortal:g,portalIsActive:o,portalIsAccessible:u,renderPortal:()=>h===!0?a():o.value===!0?[C(yt,{to:r},a())]:void 0}}let le=0,_e,xe,ie,qe=!1,Fe,$e,J;function Xt(e){Yt(e)&&vt(e)}function Yt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=bt(e),a=e.shiftKey&&!e.deltaX,l=!a&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),o=a||l?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const r=t[u];if(xt(r,l))return l?o<0&&r.scrollTop===0?!0:o>0&&r.scrollTop+r.clientHeight===r.scrollHeight:o<0&&r.scrollLeft===0?!0:o>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function Ae(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function de(e){qe!==!0&&(qe=!0,requestAnimationFrame(()=>{qe=!1;const{height:t}=e.target,{clientHeight:a,scrollTop:l}=document.scrollingElement;(ie===void 0||t!==window.innerHeight)&&(ie=a-t,document.scrollingElement.scrollTop=l),l>ie&&(document.scrollingElement.scrollTop-=Math.ceil((l-ie)/8))}))}function Me(e){const t=document.body,a=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:o}=window.getComputedStyle(t);_e=Wt(window),xe=_t(window),Fe=t.style.left,$e=t.style.top,t.style.left=`-${_e}px`,t.style.top=`-${xe}px`,o!=="hidden"&&(o==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,M.is.ios===!0&&(a===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",de,O.passiveCapture),window.visualViewport.addEventListener("scroll",de,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ae,O.passiveCapture))}M.is.desktop===!0&&M.is.mac===!0&&window[`${e}EventListener`]("wheel",Xt,O.notPassive),e==="remove"&&(M.is.ios===!0&&(a===!0?(window.visualViewport.removeEventListener("resize",de,O.passiveCapture),window.visualViewport.removeEventListener("scroll",de,O.passiveCapture)):window.removeEventListener("scroll",Ae,O.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Fe,t.style.top=$e,window.scrollTo(_e,xe),ie=void 0)}function Jt(e){let t="add";if(e===!0){if(le++,J!==void 0){clearTimeout(J),J=void 0;return}if(le>1)return}else{if(le===0||(le--,le>0))return;if(t="remove",M.is.ios===!0&&M.is.nativeMobile===!0){clearTimeout(J),J=setTimeout(()=>{Me(t),J=void 0},100);return}}Me(t)}function Zt(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Jt(t))}}}const K=[];let ee;function eo(e){ee=e.keyCode===27}function to(){ee===!0&&(ee=!1)}function oo(e){ee===!0&&(ee=!1,Ue(e,27)===!0&&K[K.length-1](e))}function Ze(e){window[e]("keydown",eo),window[e]("blur",to),window[e]("keyup",oo),ee=!1}function ao(e){M.is.desktop===!0&&(K.push(e),K.length===1&&Ze("addEventListener"))}function Qe(e){const t=K.indexOf(e);t>-1&&(K.splice(t,1),K.length===0&&Ze("removeEventListener"))}const G=[];function et(e){G[G.length-1](e)}function no(e){M.is.desktop===!0&&(G.push(e),G.length===1&&document.body.addEventListener("focusin",et))}function Oe(e){const t=G.indexOf(e);t>-1&&(G.splice(t,1),G.length===0&&document.body.removeEventListener("focusin",et))}let ce=0;const lo={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Re={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ce=Q({name:"QDialog",inheritAttrs:!1,props:{...Vt,...Ft,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...zt,"shake","click","escapeKey"],setup(e,{slots:t,emit:a,attrs:l}){const o=U(),u=_(null),r=_(!1),i=_(!1);let h,m=null,g,x;const T=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:w}=Zt(),{registerTimeout:p}=Pt(),{registerTick:v,removeTick:W}=Et(),{transitionProps:V,transitionStyle:n}=$t(e,()=>Re[e.position][0],()=>Re[e.position][1]),{showPortal:b,hidePortal:$,portalIsAccessible:s,renderPortal:B}=Ut(o,u,it,!0),{hide:L}=Lt({showing:r,hideOnRouteChange:T,handleShow:at,handleHide:nt,processOnMount:!0}),{addToHistory:ae,removeFromHistory:y}=Ht(r,L,T),X=c(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${lo[e.position]}`+(i.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),q=c(()=>r.value===!0&&e.seamless!==!0),tt=c(()=>e.autoClose===!0?{onClick:lt}:{}),ot=c(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${q.value===!0?"modal":"seamless"}`,l.class]);D(()=>e.maximized,d=>{r.value===!0&&ve(d)}),D(q,d=>{w(d),d===!0?(no(be),ao(ye)):(Oe(be),Qe(ye))});function at(d){ae(),m=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,ve(e.maximized),b(),i.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),v(ne)):W(),p(()=>{if(o.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:I,bottom:ge}=document.activeElement.getBoundingClientRect(),{innerHeight:Se}=window,pe=window.visualViewport!==void 0?window.visualViewport.height:Se;I>0&&ge>pe/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-pe,ge>=Se?1/0:Math.ceil(document.scrollingElement.scrollTop+ge-pe/2))),document.activeElement.scrollIntoView()}x=!0,u.value.click(),x=!1}b(!0),i.value=!1,a("show",d)},e.transitionDuration)}function nt(d){W(),y(),Ie(!0),i.value=!0,$(),m!==null&&(((d&&d.type.indexOf("key")===0?m.closest('[tabindex]:not([tabindex^="-"])'):void 0)||m).focus(),m=null),p(()=>{$(!0),i.value=!1,a("hide",d)},e.transitionDuration)}function ne(d){Mt(()=>{let I=u.value;I===null||I.contains(document.activeElement)===!0||(I=(d!==""?I.querySelector(d):null)||I.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||I.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||I.querySelector("[autofocus], [data-autofocus]")||I,I.focus({preventScroll:!0}))})}function me(d){d&&typeof d.focus=="function"?d.focus({preventScroll:!0}):ne(),a("shake");const I=u.value;I!==null&&(I.classList.remove("q-animate--scale"),I.classList.add("q-animate--scale"),clearTimeout(h),h=setTimeout(()=>{u.value!==null&&(I.classList.remove("q-animate--scale"),ne())},170))}function ye(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&me():(a("escapeKey"),L()))}function Ie(d){clearTimeout(h),(d===!0||r.value===!0)&&(ve(!1),e.seamless!==!0&&(w(!1),Oe(be),Qe(ye))),d!==!0&&(m=null)}function ve(d){d===!0?g!==!0&&(ce<1&&document.body.classList.add("q-body--dialog"),ce++,g=!0):g===!0&&(ce<2&&document.body.classList.remove("q-body--dialog"),ce--,g=!1)}function lt(d){x!==!0&&(L(d),a("click",d))}function rt(d){e.persistent!==!0&&e.noBackdropDismiss!==!0?L(d):e.noShake!==!0&&me(d.relatedTarget)}function be(d){e.allowFocusOutside!==!0&&s.value===!0&&dt(u.value,d.target)!==!0&&ne('[tabindex]:not([tabindex="-1"])')}Object.assign(o.proxy,{focus:ne,shake:me,__updateRefocusTarget(d){m=d||null}}),oe(Ie);function it(){return C("div",{role:"dialog","aria-modal":q.value===!0?"true":"false",...l,class:ot.value},[C(Pe,{name:"q-transition--fade",appear:!0},()=>q.value===!0?C("div",{class:"q-dialog__backdrop fixed-full",style:n.value,"aria-hidden":"true",tabindex:-1,onFocusin:rt}):null),C(Pe,V.value,()=>r.value===!0?C("div",{ref:u,class:X.value,style:n.value,tabindex:-1,...tt.value},te(t.default)):null)])}return B}});function Ne(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var j=ct({name:"close-popup",beforeMount(e,{value:t}){const a={depth:Ne(t),handler(l){a.depth!==0&&setTimeout(()=>{const o=Nt(e);o!==void 0&&Kt(o,l,a.depth)})},handlerKey(l){Ue(l,13)===!0&&a.handler(l)}};e.__qclosepopup=a,e.addEventListener("click",a.handler),e.addEventListener("keyup",a.handlerKey)},updated(e,{value:t,oldValue:a}){t!==a&&(e.__qclosepopup.depth=Ne(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}}),ro={name:"Original Deck",desc:"What's more romantic than being understood?",expansion:!1,suggestedPlayerCount:"2-6 Players",customLevels:null,colors:{primary:"#c10016",textColor:"#fff",secondary:"#c10016"},instructions:`Do you really know your best friend? How well do you know your mother, or sister, or anyone else close to you?
  This is a purpose driven card game. 3 carefully crafted levels that allow you to deepen your existing relationships and create new ones.
  Ready?`,levels:[{questions:["What was your first impression of me?","What do you think is the hardest part of what I do for a living?","What reality show do you think I'm most likely to binge watch? Explain.","What does my style tell you about me?","Do I seem like a cat or dog person?","Do I seem like more of a creative type or analytical type? Explain.","How many speeding tickets do you think I've gotten in my life?","Do I seem like someone who would get a name tattooed on myself? Why or why not?","What do you think I'm most likely to splurge on?","Finish the sentence: Just by looking at you I'd think _________.","What character would I play in a movie?","Do I remind you of anyone?","Who do you think my celebrity crush is?","Do you think I've ever checked an ex's phone for evidence?","What's the first thing you noticed about me?","What do you think my go to karaoke song is?","If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?","What does my phone wallpaper tell you about me?","Do I look kind? explain.","Do you think I fall in love easily? why or why not?","As a child, what do you think I wanted to be?","Do you think I'm usually early, on time, or late to events? Explain.","What subject do you think I thrived in at school? Did I fail any?","What compliment do you think I hear the most?","Do I seem like a morning person or a night owl? why?","What fast food restaurant do you think I'm most likely to drive through? What's my order?","What is my body language telling you right now?","What does my Instagram tell you about me?","Do you think plants thrive or die in my care? Explain.","On a scale of 1-10, how messy do you think my car is? 1 being cleanest, 10 complete disaster. Explain.","Do you think I was popular in school? explain.","Do you think I've ever been fired from a job? If so, what for?","Do you think I intimidate others? Why or why not?","How likely am I to go camping? How high maintenance is my set up?","What about me is most strange or unfamiliar to you?","What about me intrigues you?","If Myspace were still a thing what would my profile song be?","Wildcard<br><br>Maintain eye contact for thirty seconds. What did you notice?","Wildcard<br><br>Close your eyes. What color is my shirt?","Wildcard<br><br>Ask and answer the next question in a different accent. (Both players)","Wildcard<br><br>Draw a picture together. (30 seconds)","Wildcard<br><br>Write down something others would never guess about you just by looking at you. (Both players) Compare.","Wildcard<br><br>Draw a portrait of each other to the best of your ability. (1 minute) Then exchange.","Wildcard<br><br>Think of your favorite brand of cereal. On the count of three say your answers out loud! (Both players)","Wildcard<br><br>Think of your favorite childhood tv show of all time. On the count of three, say it out loud! (Both players)","Wildcard<br><br>Rate your dancing skills on a scale of 1-10. On the count of three, say your answers out loud! (Both players)","Wildcard<br><br>Close your eyes. What color are my eyes?","Wildcard<br><br>Make an assumption about me. (Both players)","Reminder Let go of your attachment to the outcome."]},{questions:["How can you become a better person?","What's your mother's name? And the most beautiful thing about her?","If you could get to know someone in your life on a deeper level, who would it be and why?","What's the most pain you've ever been in that wasn't physical?","Are you missing anyone right now? Do you think they are missing you too?","What is a dream you've let go of?","What is the last thing you lied to your mother about?","Have you ever told someone I love you but didn't mean it? If so, why?","What are you still trying to prove to yourself?","Are you lying to yourself about anything?","What is your 1st love's name and the reason you fell in love with them?","What part of your life works? What part of your life hurts?","What lesson took you the longest to unlearn?","If you have, when was the moment you realized you weren't invincible?","Do you think the image you have of yourself matches the image people see you as?","If you could have it your way: Who would you be with? Where would you be? And what would you be doing?","Is there a feeling you miss?","What's been your happiest memory this past year?","When was the last time you surprised yourself?","How would you describe the feeling of being in love in one word?","What's your father's name? And tell me one thing about him.","What are you more afraid of, failure or success? And why?","What has been your earliest recollection of happiness?","What do you crave more of?","What is a compliment you wish you received more frequently?","Have you changed your mind about anything recently?","Describe your perfect day!","What is the mostunexplainable thing that's ever happened to you?","What would your younger self not believe about your life today?","What is something you wouldn't want to change about yourself?","What title would you give this chapter in your life?","Has a stranger ever changed your life?","How are you, really?","When you're asked how are you, how often do you answer truthfully?","Finish the sentences: strangers would describe me as _________. Only I know that I am _________.","What question are you trying to answer most in your life right now?","What's been the best compliment a stranger has ever given you?","Wildcard<br><br>Staring contest. First to blink must reveal a personal problem and ask your partner for advice on how they might handle it.","Wildcard<br><br>Ask a question you'd be too afraid to ask. Something you wouldn't dare to ask.","Wildcard<br><br>Call someone you admire and tell them why you appreciate them! (Put on speaker phone)","Wildcard<br><br>Admit something.","Wildcard<br><br>Questions are an art form. Create your own question.","Wildcard<br><br>Think of something you strongly dislike that most people love. On the count of three, say it out loud! (Both players)","Wildcard<br><br>Swap seats with your partner.","Wildcard<br><br>Show the first photo in your camera roll. Explain.","Wildcard<br><br>Create a secret handshake.","Wildcard<br><br>Sing the chorus of your favorite song of all time. Get into it!","Wildcard<br><br>Draw your current mood. Then Compare. (Both players)","Wildcard<br><br>Both players write an embarrassing fun fact about yourselves. Play a game of rock, paper, scissors. Loser must reveal!","Wildcard<br><br>Both players write the most important things in life to you. (30 seconds) Compare.","Wildcard<br><br>Press shuffle on your music library. Explain the first song that comes up!","Reminder Be more interested in understanding others than being understood."]},{questions:["How would you describe me to a stranger?","What about me most surprised you?","What would be the perfect gift for me?","What do you admire most about me?","Based on what you learned about me, what book would you recommend I read?","What about me is hardest for you to understand?","What am I most qualified to give advice about?","What is one thing you think I can do that would dramatically improve my life?","If we were in a band, what would our name be?","What can I help you with?","Based on what you learned about me, does my social media accurately reflect who I am? Why or why not?","What do I need to hear right now?","Based on what you know about me, do you have any Netflix recommendations?","What do you think my superpower is?","What is a lesson you will take away from our conversation?","When in this game did you feel most connected to me?","How does one earn your vulnerability? Have I earned it? How can I earn more?","What do you think our most important similarity is?","What can we create together?","In one word, how would you describe our conversation?","What answer of mine made you light up?","When this game is over, what will you remember about me?","What parts of yourself do you see in me?","How do our personalities complement each other?","Why do you think we met?","What do you think my weakness is?","What would make you feel closer to me?","What do you think I fear the most?","What has this conversation taught you about yourself?","What do you think I should know about myself that perhaps I'm unaware of?","What do you think my defining characteristic is?","Do you believe everyone has a calling? If so, do you think I've found mine?","What do you recommend I let go of, if anything?","In one word, describe how you feel right now.","Wildcard<br><br>Give your partner a hug. Not the crappy kind. A ward fluffy one.","Wildcard<br><br>Write down one thing you want to let go of this year. Read out loud, then rip up together. (Both players)","Wildcard<br><br>Swap a song suggestion your partner may enjoy. (Both players)","Wildcard<br><br>Dare your partner to do something outside of their comfort zone in the next week. (Both players)","Wildcard<br><br>Admit something.","Wildcard<br><br>Give your partner a compliment you don't think they hear enough.","Wildcard<br><br>Write a song about your partner. (30 seconds) Then sing it aloud, get into it! (Both players)","Wildcard<br><br>Scroll through each other's Instagrams. Find the picture you feel best represents your partner's essence and comment on why.","Wildcard<br><br>Both players share something you're most grateful for in this current moment.","Wildcard<br><br>Play a round of rock, paper, scissors. Winner can ask their partner anything. Loser must answer.","Wildcard<br><br>Give each other nicknames!","Wildcard<br><br>Create your own question. Make it count.","Wildcard<br><br>Take a selfie together.","Wildcard<br><br>Write down a goal for this year. Fold & exchange. Hold each other accountable. (Both players)","Wildcard<br><br>Both players write a note to your younger selves. (1 minute) Option to compare."]}],finalCard:"Each player write a message to the other. Fold and exchange. Open only once you two have parted."};function io(){return Be(gt)}const so={class:"column justify-around",style:{height:"90vh"}},uo={class:"row justify-center"},co=["innerHTML"],fo={key:1,class:"text-center text-h5 text-uppercase"},ho=E("br",null,null,-1),mo=E("br",null,null,-1),yo={class:"row justify-evenly q-gutter-y-lg"},vo={class:"col-12 text-center"},bo={class:"text-subtitle1"},go=E("div",{class:"text-body1"},[H("The remaining cards will "),E("b",null,"not be available"),H(".")],-1),po={class:"text-subtitle1"},wo=E("div",{class:"text-body1"},[H("The remaining cards will "),E("b",null,"not be available"),H(".")],-1),ko=E("div",{class:"text-subtitle1"},"Do you wish to end this game session?",-1),Co=pt({__name:"GamePage",setup(e){var s,B,L;const t=io(),a=_(ro),l=_(-1),o=_(!1),u=c(()=>m.value[l.value]),r=c(()=>a.value.finalCard),i=_(-1),h=_(-1),m=_([]),g=_(["Level 1  Perception","Level 2  Connection","Level 3  Reflection"]),x=_(!1);_(!1);const T=_(!1),w=_(!1),p=Ee({backgroundColor:(s=a.value.colors)==null?void 0:s.primary,color:(B=a.value.colors)==null?void 0:B.textColor}),v=Ee({color:(L=a.value.colors)==null?void 0:L.secondary}),W=c(()=>t.screen.xs||t.screen.sm||t.screen.md||t.screen.lg||t.screen.xl?"xl":"auto"),V=c(()=>t.screen.xs?"xs":t.screen.sm?"sm":t.screen.md?"md":t.screen.lg?"lg":t.screen.xl?"xl":"auto");Ge(()=>{b()});function n(){m.value.splice(l.value,1),h.value++,l.value=Math.floor(Math.random()*m.value.length)}function b(){if(a.value.levels.length-1!=i.value){i.value++,h.value=-1,m.value=Array.from(a.value.levels[i.value].questions);for(let ae=0;ae<Math.floor(Math.random()*10);ae++)m.value.sort((y,X)=>.5-Math.random());n()}}function $(){i.value=-1,o.value=!1,b()}return(ae,y)=>{const X=wt("spam");return F(),we(kt,null,[f(Bt,{elevated:"",style:S(p)},{default:k(()=>[f(ze,null,{default:k(()=>[f(Ve,{class:"text-center"},{default:k(()=>[H(R(g.value[i.value]),1)]),_:1})]),_:1})]),_:1},8,["style"]),E("div",so,[E("div",uo,[f(ue,{class:"column justify-around game-card",style:S(p)},{default:k(()=>[o.value?A("",!0):(F(),we("div",{key:0,class:"text-center text-h5 text-uppercase",innerHTML:z(u)},null,8,co)),o.value?(F(),we("div",fo,[H("Final Card "),ho,H(),mo,H(" "+R(z(r)),1)])):A("",!0)]),_:1},8,["style"])]),E("div",yo,[m.value.length>1&&!o.value?(F(),Y(P,{key:0,style:S(p),size:z(W),label:"Continue",onClick:n},null,8,["style","size"])):A("",!0),m.value.length<2?(F(),Y(P,{key:1,style:S(p),size:z(W),label:"No Cards",disabled:""},null,8,["style","size"])):A("",!0),a.value.levels.length>i.value+1?(F(),Y(P,{key:2,style:S(p),size:z(W),label:"Next Level",disabled:h.value<25,onClick:y[0]||(y[0]=q=>x.value=!0)},null,8,["style","size","disabled"])):A("",!0),a.value.levels.length<=i.value+1&&!o.value?(F(),Y(P,{key:3,style:S(p),size:z(W),label:"Final Card",disabled:h.value<25||o.value,onClick:y[1]||(y[1]=q=>T.value=!0)},null,8,["style","size","disabled"])):A("",!0),o.value?(F(),Y(P,{key:4,style:S(p),size:z(W),label:"Finish Game",onClick:y[2]||(y[2]=q=>w.value=!0)},null,8,["style","size"])):A("",!0),E("div",vo,"Debug Info - Buttons:"+R(z(W))+" - Screen:"+R(z(V))+" - CardsReamining:"+R(m.value.length)+" - CardsUsed:"+R(h.value),1)])]),z(t).screen.lt.md&&!o.value?(F(),Y(Dt,{key:0,elevated:"",style:S(p)},{default:k(()=>[f(ze,null,{default:k(()=>[f(Ve,{class:"text-center"},{default:k(()=>[f(P,{flat:"","no-caps":"",label:"Finsh Game",onClick:y[3]||(y[3]=q=>w.value=!0)})]),_:1})]),_:1})]),_:1},8,["style"])):A("",!0),f(Ce,{modelValue:x.value,"onUpdate:modelValue":y[5]||(y[5]=q=>x.value=q)},{default:k(()=>[f(ue,null,{default:k(()=>[f(ke,{class:"q-gutter-y-md text-center"},{default:k(()=>[E("div",bo,[H("Are you sure you wish to proceed to \xA0"),f(X,{class:"text-bold"},{default:k(()=>[H(R(g.value[i.value+1]),1)]),_:1}),f(X,null,{default:k(()=>[H("?")]),_:1})]),go]),_:1}),f(We,{align:"center"},{default:k(()=>[N(f(P,{style:S(v),flat:"",label:"Cancel"},null,8,["style"]),[[j]]),N(f(P,{style:S(v),flat:"",label:"Proceed",onClick:y[4]||(y[4]=q=>b())},null,8,["style"]),[[j]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(Ce,{modelValue:T.value,"onUpdate:modelValue":y[7]||(y[7]=q=>T.value=q)},{default:k(()=>[f(ue,null,{default:k(()=>[f(ke,{class:"q-gutter-y-md text-center"},{default:k(()=>[E("div",po,[H("Are you sure you wish to proceed to "),f(X,{class:"text-bold text-underline"},{default:k(()=>[H("The Final Card")]),_:1}),H(" ?")]),wo]),_:1}),f(We,{align:"center"},{default:k(()=>[N(f(P,{style:S(v),flat:"",label:"Cancel"},null,8,["style"]),[[j]]),N(f(P,{style:S(v),flat:"",label:"Proceed",onClick:y[6]||(y[6]=q=>o.value=!0)},null,8,["style"]),[[j]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(Ce,{modelValue:w.value,"onUpdate:modelValue":y[10]||(y[10]=q=>w.value=q)},{default:k(()=>[f(ue,null,{default:k(()=>[f(ke,{class:"q-gutter-y-md text-center"},{default:k(()=>[ko]),_:1}),f(We,{align:"center"},{default:k(()=>[N(f(P,{style:S(v),flat:"",label:"Cancel"},null,8,["style"]),[[j]]),N(f(P,{style:S(v),flat:"",label:"Restart",onClick:y[8]||(y[8]=q=>$())},null,8,["style"]),[[j]]),N(f(P,{style:S(v),flat:"",label:"Deck Select",onClick:y[9]||(y[9]=q=>$()),disabled:""},null,8,["style"]),[[j]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{Co as default};
