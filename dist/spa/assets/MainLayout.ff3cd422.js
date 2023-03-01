import{c as E,a as c,h as w,d as ae,r as _,i as ve,o as G,e as j,n as Be,f as Le,g as W,l as fe,j as oe,k as M,w as P,m as Je,p as le,t as pe,q as Ye,R as Ze,s as Se,u as et,v as tt,Q as ne,x as he,y as nt,z as at,A as ot,B as lt,C as ce,D as Re,E as be,F as rt,G as it,H as ut,I as st,J as ct,K as dt,L as de,M as te,N as ft,_ as vt,O as ht,P as bt,S as gt,T as mt,U as N,V as A,W as $e,X as yt,Y as wt}from"./index.3faf325e.js";var Tt=E({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:T}){const l=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:l.value},ae(T.default))}}),qt=E({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:T}){const l=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:l.value,role:"toolbar"},ae(T.default))}});function _t(){const e=_(!ve.value);return e.value===!1&&G(()=>{e.value=!0}),e}const Qe=typeof ResizeObserver!="undefined",ze=Qe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var X=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:T}){let l=null,a,t={width:-1,height:-1};function d(m){m===!0||e.debounce===0||e.debounce==="0"?f():l===null&&(l=setTimeout(f,e.debounce))}function f(){if(l!==null&&(clearTimeout(l),l=null),a){const{offsetWidth:m,offsetHeight:v}=a;(m!==t.width||v!==t.height)&&(t={width:m,height:v},T("resize",t))}}const{proxy:S}=W();if(Qe===!0){let m;const v=C=>{a=S.$el.parentNode,a?(m=new ResizeObserver(d),m.observe(a),f()):C!==!0&&Le(()=>{v(!0)})};return G(()=>{v()}),j(()=>{l!==null&&clearTimeout(l),m!==void 0&&(m.disconnect!==void 0?m.disconnect():a&&m.unobserve(a))}),Be}else{let C=function(){l!==null&&(clearTimeout(l),l=null),v!==void 0&&(v.removeEventListener!==void 0&&v.removeEventListener("resize",d,fe.passive),v=void 0)},k=function(){C(),a&&a.contentDocument&&(v=a.contentDocument.defaultView,v.addEventListener("resize",d,fe.passive),f())};const m=_t();let v;return G(()=>{Le(()=>{a=S.$el,a&&k()})}),j(C),S.trigger=d,()=>{if(m.value===!0)return w("object",{style:ze.style,tabindex:-1,type:"text/html",data:ze.url,"aria-hidden":"true",onLoad:k})}}}}),xt=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:T,emit:l}){const{proxy:{$q:a}}=W(),t=oe(le,M);if(t===M)return console.error("QHeader needs to be child of QLayout"),M;const d=_(parseInt(e.heightHint,10)),f=_(!0),S=c(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||a.platform.is.ios&&t.isContainer.value===!0),m=c(()=>{if(e.modelValue!==!0)return 0;if(S.value===!0)return f.value===!0?d.value:0;const s=d.value-t.scroll.value.position;return s>0?s:0}),v=c(()=>e.modelValue!==!0||S.value===!0&&f.value!==!0),C=c(()=>e.modelValue===!0&&v.value===!0&&e.reveal===!0),k=c(()=>"q-header q-layout__section--marginal "+(S.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(v.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),B=c(()=>{const s=t.rows.value.top,i={};return s[0]==="l"&&t.left.space===!0&&(i[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(i[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),i});function b(s,i){t.update("header",s,i)}function x(s,i){s.value!==i&&(s.value=i)}function L({height:s}){x(d,s),b("size",s)}function p(s){C.value===!0&&x(f,!0),l("focusin",s)}P(()=>e.modelValue,s=>{b("space",s),x(f,!0),t.animate()}),P(m,s=>{b("offset",s)}),P(()=>e.reveal,s=>{s===!1&&x(f,e.modelValue)}),P(f,s=>{t.animate(),l("reveal",s)}),P(t.scroll,s=>{e.reveal===!0&&x(f,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const I={};return t.instances.header=I,e.modelValue===!0&&b("size",d.value),b("space",e.modelValue),b("offset",m.value),j(()=>{t.instances.header===I&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const s=Je(T.default,[]);return e.elevated===!0&&s.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(w(X,{debounce:0,onResize:L})),w("header",{class:k.value,style:B.value,onFocusin:p},s)}}});let Ct=0;const Lt=["click","keydown"],St={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ct++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Rt(e,T,l,a){const t=oe(pe,M);if(t===M)return console.error("QTab/QRouteTab component needs to be child of QTabs"),M;const{proxy:d}=W(),f=_(null),S=_(null),m=_(null),v=c(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),C=c(()=>t.currentModel.value===e.name),k=c(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(C.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(a!==void 0?a.linkClass.value:"")),B=c(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),b=c(()=>e.disable===!0||t.hasFocus.value===!0||C.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function x(i,u){if(u!==!0&&f.value!==null&&f.value.focus(),e.disable===!0){a!==void 0&&a.hasRouterLink.value===!0&&Se(i);return}if(a===void 0){t.updateModel({name:e.name}),l("click",i);return}if(a.hasRouterLink.value===!0){const o=(g={})=>{let z;const V=g.to===void 0||nt(g.to,e.to)===!0?t.avoidRouteWatcher=at():null;return a.navigateToRouterLink(i,{...g,returnRouterError:!0}).catch(H=>{z=H}).then(H=>{if(V===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,z===void 0&&(H===void 0||H.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),g.returnRouterError===!0)return z!==void 0?Promise.reject(z):H})};l("click",i,o),i.defaultPrevented!==!0&&o();return}l("click",i)}function L(i){et(i,[13,32])?x(i,!0):tt(i)!==!0&&i.keyCode>=35&&i.keyCode<=40&&i.altKey!==!0&&i.metaKey!==!0&&t.onKbdNavigate(i.keyCode,d.$el)===!0&&Se(i),l("keydown",i)}function p(){const i=t.tabProps.value.narrowIndicator,u=[],o=w("div",{ref:m,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&u.push(w(ne,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&u.push(w("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&u.push(e.alertIcon!==void 0?w(ne,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):w("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),i===!0&&u.push(o);const g=[w("div",{class:"q-focus-helper",tabindex:-1,ref:f}),w("div",{class:B.value},he(T.default,u))];return i===!1&&g.push(o),g}const I={name:c(()=>e.name),rootRef:S,tabIndicatorRef:m,routeData:a};j(()=>{t.unregisterTab(I)}),G(()=>{t.registerTab(I)});function s(i,u){const o={ref:S,class:k.value,tabindex:b.value,role:"tab","aria-selected":C.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:x,onKeydown:L,...u};return Ye(w(i,o,p()),[[Ze,v.value]])}return{renderTab:s,$tabs:t}}var Pe=E({name:"QRouteTab",props:{...ot,...St},emits:Lt,setup(e,{slots:T,emit:l}){const a=lt({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:d}=Rt(e,T,l,{exact:c(()=>e.exact),...a});return P(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{d.verifyRouteModel()}),()=>t(a.linkTag.value,a.linkAttrs.value)}});let Ie=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const T=document.createElement("div");Object.assign(T.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(T),e.scrollLeft=-1e3,Ie=e.scrollLeft>=0,e.remove()}function $t(e,T,l){const a=l===!0?["left","right"]:["top","bottom"];return`absolute-${T===!0?a[0]:a[1]}${e?` text-${e}`:""}`}const zt=["left","center","right","justify"];var Pt=E({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>zt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:T,emit:l}){const{proxy:a}=W(),{$q:t}=a,{registerTick:d}=ce(),{registerTick:f}=ce(),{registerTick:S}=ce(),{registerTimeout:m,removeTimeout:v}=Re(),{registerTimeout:C,removeTimeout:k}=Re(),B=_(null),b=_(null),x=_(e.modelValue),L=_(!1),p=_(!0),I=_(!1),s=_(!1),i=[],u=_(0),o=_(!1);let g=null,z=null,V;const H=c(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:$t(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ve=c(()=>{const n=u.value,r=x.value;for(let h=0;h<n;h++)if(i[h].name.value===r)return!0;return!1}),Ae=c(()=>`q-tabs__content--align-${L.value===!0?"left":s.value===!0?"justify":e.align}`),Me=c(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),He=c(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ae.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),J=c(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Y=c(()=>e.vertical!==!0&&t.lang.rtl===!0),re=c(()=>Ie===!1&&Y.value===!0);P(Y,U),P(()=>e.modelValue,n=>{ie({name:n,setCurrent:!0,skipEmit:!0})}),P(()=>e.outsideArrows,Z);function ie({name:n,setCurrent:r,skipEmit:h}){x.value!==n&&(h!==!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",n),(r===!0||e["onUpdate:modelValue"]===void 0)&&(Ee(x.value,n),x.value=n))}function Z(){d(()=>{ge({width:B.value.offsetWidth,height:B.value.offsetHeight})})}function ge(n){if(J.value===void 0||b.value===null)return;const r=n[J.value.container],h=Math.min(b.value[J.value.scroll],Array.prototype.reduce.call(b.value.children,($,q)=>$+(q[J.value.content]||0),0)),R=r>0&&h>r;L.value=R,R===!0&&f(U),s.value=r<parseInt(e.breakpoint,10)}function Ee(n,r){const h=n!=null&&n!==""?i.find($=>$.name.value===n):null,R=r!=null&&r!==""?i.find($=>$.name.value===r):null;if(h&&R){const $=h.tabIndicatorRef.value,q=R.tabIndicatorRef.value;g!==null&&(clearTimeout(g),g=null),$.style.transition="none",$.style.transform="none",q.style.transition="none",q.style.transform="none";const y=$.getBoundingClientRect(),Q=q.getBoundingClientRect();q.style.transform=e.vertical===!0?`translate3d(0,${y.top-Q.top}px,0) scale3d(1,${Q.height?y.height/Q.height:1},1)`:`translate3d(${y.left-Q.left}px,0,0) scale3d(${Q.width?y.width/Q.width:1},1,1)`,S(()=>{g=setTimeout(()=>{g=null,q.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",q.style.transform="none"},70)})}R&&L.value===!0&&K(R.rootRef.value)}function K(n){const{left:r,width:h,top:R,height:$}=b.value.getBoundingClientRect(),q=n.getBoundingClientRect();let y=e.vertical===!0?q.top-R:q.left-r;if(y<0){b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(y),U();return}y+=e.vertical===!0?q.height-$:q.width-h,y>0&&(b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(y),U())}function U(){const n=b.value;if(n===null)return;const r=n.getBoundingClientRect(),h=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);Y.value===!0?(p.value=Math.ceil(h+r.width)<n.scrollWidth-1,I.value=h>0):(p.value=h>0,I.value=e.vertical===!0?Math.ceil(h+r.height)<n.scrollHeight:Math.ceil(h+r.width)<n.scrollWidth)}function me(n){z!==null&&clearInterval(z),z=setInterval(()=>{De(n)===!0&&O()},5)}function ye(){me(re.value===!0?Number.MAX_SAFE_INTEGER:0)}function we(){me(re.value===!0?0:Number.MAX_SAFE_INTEGER)}function O(){z!==null&&(clearInterval(z),z=null)}function Fe(n,r){const h=Array.prototype.filter.call(b.value.children,Q=>Q===r||Q.matches&&Q.matches(".q-tab.q-focusable")===!0),R=h.length;if(R===0)return;if(n===36)return K(h[0]),h[0].focus(),!0;if(n===35)return K(h[R-1]),h[R-1].focus(),!0;const $=n===(e.vertical===!0?38:37),q=n===(e.vertical===!0?40:39),y=$===!0?-1:q===!0?1:void 0;if(y!==void 0){const Q=Y.value===!0?-1:1,F=h.indexOf(r)+y*Q;return F>=0&&F<R&&(K(h[F]),h[F].focus({preventScroll:!0})),!0}}const Oe=c(()=>re.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,r)=>{n.scrollLeft=-r}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,r)=>{n.scrollTop=r}}:{get:n=>n.scrollLeft,set:(n,r)=>{n.scrollLeft=r}});function De(n){const r=b.value,{get:h,set:R}=Oe.value;let $=!1,q=h(r);const y=n<q?-1:1;return q+=y*5,q<0?($=!0,q=0):(y===-1&&q<=n||y===1&&q>=n)&&($=!0,q=n),R(r,q),U(),$}function Te(n,r){for(const h in n)if(n[h]!==r[h])return!1;return!0}function We(){let n=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const h=i.filter(y=>y.routeData!==void 0&&y.routeData.hasRouterLink.value===!0),{hash:R,query:$}=a.$route,q=Object.keys($).length;for(const y of h){const Q=y.routeData.exact.value===!0;if(y.routeData[Q===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:F,query:ue,matched:Ge,href:Xe}=y.routeData.resolvedLink.value,se=Object.keys(ue).length;if(Q===!0){if(F!==R||se!==q||Te($,ue)===!1)continue;n=y.name.value;break}if(F!==""&&F!==R||se!==0&&Te(ue,$)===!1)continue;const D={matchedLen:Ge.length,queryDiff:q-se,hrefLen:Xe.length-F.length};if(D.matchedLen>r.matchedLen){n=y.name.value,r=D;continue}else if(D.matchedLen!==r.matchedLen)continue;if(D.queryDiff<r.queryDiff)n=y.name.value,r=D;else if(D.queryDiff!==r.queryDiff)continue;D.hrefLen>r.hrefLen&&(n=y.name.value,r=D)}n===null&&i.some(y=>y.routeData===void 0&&y.name.value===x.value)===!0||ie({name:n,setCurrent:!0})}function Ne(n){if(v(),o.value!==!0&&B.value!==null&&n.target&&typeof n.target.closest=="function"){const r=n.target.closest(".q-tab");r&&B.value.contains(r)===!0&&(o.value=!0,L.value===!0&&K(r))}}function je(){m(()=>{o.value=!1},30)}function ee(){_e.avoidRouteWatcher===!1?C(We):k()}function qe(){if(V===void 0){const n=P(()=>a.$route.fullPath,ee);V=()=>{n(),V=void 0}}}function Ke(n){i.push(n),u.value++,Z(),n.routeData===void 0||a.$route===void 0?C(()=>{if(L.value===!0){const r=x.value,h=r!=null&&r!==""?i.find(R=>R.name.value===r):null;h&&K(h.rootRef.value)}}):(qe(),n.routeData.hasRouterLink.value===!0&&ee())}function Ue(n){i.splice(i.indexOf(n),1),u.value--,Z(),V!==void 0&&n.routeData!==void 0&&(i.every(r=>r.routeData===void 0)===!0&&V(),ee())}const _e={currentModel:x,tabProps:H,hasFocus:o,hasActiveTab:Ve,registerTab:Ke,unregisterTab:Ue,verifyRouteModel:ee,updateModel:ie,onKbdNavigate:Fe,avoidRouteWatcher:!1};be(pe,_e);function xe(){g!==null&&clearTimeout(g),O(),V!==void 0&&V()}let Ce;return j(xe),rt(()=>{Ce=V!==void 0,xe()}),it(()=>{Ce===!0&&qe(),Z()}),()=>w("div",{ref:B,class:Me.value,role:"tablist",onFocusin:Ne,onFocusout:je},[w(X,{onResize:ge}),w("div",{ref:b,class:He.value,onScroll:U},ae(T.default)),w(ne,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(p.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ye,onTouchstartPassive:ye,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O}),w(ne,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:we,onTouchstartPassive:we,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O})])}}),kt=E({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:T,emit:l}){const{proxy:{$q:a}}=W(),t=oe(le,M);if(t===M)return console.error("QFooter needs to be child of QLayout"),M;const d=_(parseInt(e.heightHint,10)),f=_(!0),S=_(ve.value===!0||t.isContainer.value===!0?0:window.innerHeight),m=c(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||a.platform.is.ios&&t.isContainer.value===!0),v=c(()=>t.isContainer.value===!0?t.containerHeight.value:S.value),C=c(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return f.value===!0?d.value:0;const o=t.scroll.value.position+v.value+d.value-t.height.value;return o>0?o:0}),k=c(()=>e.modelValue!==!0||m.value===!0&&f.value!==!0),B=c(()=>e.modelValue===!0&&k.value===!0&&e.reveal===!0),b=c(()=>"q-footer q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(k.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(m.value!==!0?" hidden":""):"")),x=c(()=>{const o=t.rows.value.bottom,g={};return o[0]==="l"&&t.left.space===!0&&(g[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),o[2]==="r"&&t.right.space===!0&&(g[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),g});function L(o,g){t.update("footer",o,g)}function p(o,g){o.value!==g&&(o.value=g)}function I({height:o}){p(d,o),L("size",o)}function s(){if(e.reveal!==!0)return;const{direction:o,position:g,inflectionPoint:z}=t.scroll.value;p(f,o==="up"||g-z<100||t.height.value-v.value-g-d.value<300)}function i(o){B.value===!0&&p(f,!0),l("focusin",o)}P(()=>e.modelValue,o=>{L("space",o),p(f,!0),t.animate()}),P(C,o=>{L("offset",o)}),P(()=>e.reveal,o=>{o===!1&&p(f,e.modelValue)}),P(f,o=>{t.animate(),l("reveal",o)}),P([d,t.scroll,t.height],s),P(()=>a.screen.height,o=>{t.isContainer.value!==!0&&p(S,o)});const u={};return t.instances.footer=u,e.modelValue===!0&&L("size",d.value),L("space",e.modelValue),L("offset",C.value),j(()=>{t.instances.footer===u&&(t.instances.footer=void 0,L("size",0),L("offset",0),L("space",!1))}),()=>{const o=he(T.default,[w(X,{debounce:0,onResize:I})]);return e.elevated===!0&&o.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:b.value,style:x.value,onFocusin:i},o)}}}),Bt=E({name:"QPageContainer",setup(e,{slots:T}){const{proxy:{$q:l}}=W(),a=oe(le,M);if(a===M)return console.error("QPageContainer needs to be child of QLayout"),M;be(ut,!0);const t=c(()=>{const d={};return a.header.space===!0&&(d.paddingTop=`${a.header.size}px`),a.right.space===!0&&(d[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(d.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(d[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),d});return()=>w("div",{class:"q-page-container",style:t.value},ae(T.default))}});const{passive:ke}=fe,pt=["both","horizontal","vertical"];var Qt=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>pt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:T}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,t,d;P(()=>e.scrollTarget,()=>{m(),S()});function f(){a!==null&&a();const k=Math.max(0,ct(t)),B=dt(t),b={top:k-l.position.top,left:B-l.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const x=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";l.position={top:k,left:B},l.directionChanged=l.direction!==x,l.delta=b,l.directionChanged===!0&&(l.direction=x,l.inflectionPoint=l.position),T("scroll",{...l})}function S(){t=st(d,e.scrollTarget),t.addEventListener("scroll",v,ke),v(!0)}function m(){t!==void 0&&(t.removeEventListener("scroll",v,ke),t=void 0)}function v(k){if(k===!0||e.debounce===0||e.debounce==="0")f();else if(a===null){const[B,b]=e.debounce?[setTimeout(f,e.debounce),clearTimeout]:[requestAnimationFrame(f),cancelAnimationFrame];a=()=>{b(B),a=null}}}const{proxy:C}=W();return P(()=>C.$q.lang.rtl,f),G(()=>{d=C.$el.parentNode,S()}),j(()=>{a!==null&&a(),m()}),Object.assign(C,{trigger:v,getPosition:()=>l}),Be}}),It=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:T,emit:l}){const{proxy:{$q:a}}=W(),t=_(null),d=_(a.screen.height),f=_(e.container===!0?0:a.screen.width),S=_({position:0,direction:"down",inflectionPoint:0}),m=_(0),v=_(ve.value===!0?0:de()),C=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=c(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),B=c(()=>v.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${v.value}px`}:null),b=c(()=>v.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null);function x(u){if(e.container===!0||document.qScrollPrevented!==!0){const o={position:u.position.top,direction:u.direction,directionChanged:u.directionChanged,inflectionPoint:u.inflectionPoint.top,delta:u.delta.top};S.value=o,e.onScroll!==void 0&&l("scroll",o)}}function L(u){const{height:o,width:g}=u;let z=!1;d.value!==o&&(z=!0,d.value=o,e.onScrollHeight!==void 0&&l("scrollHeight",o),I()),f.value!==g&&(z=!0,f.value=g),z===!0&&e.onResize!==void 0&&l("resize",u)}function p({height:u}){m.value!==u&&(m.value=u,I())}function I(){if(e.container===!0){const u=d.value>m.value?de():0;v.value!==u&&(v.value=u)}}let s=null;const i={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:d,containerHeight:m,scrollbarWidth:v,totalWidth:c(()=>f.value+v.value),rows:c(()=>{const u=e.view.toLowerCase().split(" ");return{top:u[0].split(""),middle:u[1].split(""),bottom:u[2].split("")}}),header:te({size:0,offset:0,space:!1}),right:te({size:300,offset:0,space:!1}),footer:te({size:0,offset:0,space:!1}),left:te({size:300,offset:0,space:!1}),scroll:S,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(u,o,g){i[u][o]=g}};if(be(le,i),de()>0){let g=function(){u=null,o.classList.remove("hide-scrollbar")},z=function(){if(u===null){if(o.scrollHeight>a.screen.height)return;o.classList.add("hide-scrollbar")}else clearTimeout(u);u=setTimeout(g,300)},V=function(H){u!==null&&H==="remove"&&(clearTimeout(u),g()),window[`${H}EventListener`]("resize",z)},u=null;const o=document.body;P(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),ft(()=>{V("remove")})}return()=>{const u=he(T.default,[w(Qt,{onScroll:x}),w(X,{onResize:L})]),o=w("div",{class:C.value,style:k.value,ref:e.container===!0?void 0:t,tabindex:-1},u);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:t},[w(X,{onResize:p}),w("div",{class:"absolute-full",style:B.value},[w("div",{class:"scroll",style:b.value},[o])])]):o}}});const Vt=ht({name:"MainLayout",setup(){return{}}});function At(e,T,l,a,t,d){const f=bt("router-view");return gt(),mt(It,{view:"lHh Lpr lFf"},{default:N(()=>[A(xt,{class:"bg-white text-grey-10",bordered:""},{default:N(()=>[A(qt,{class:"constrain"},{default:N(()=>[A($e,{flat:"",round:"",icon:"eva-camera-outline q-mr-sm",size:"18px",dense:"",to:"/camera",class:"large-screen-only"}),A(yt,{vertical:"",spaced:"",class:"large-screen-only"}),A(Tt,{class:"text-grand-hotel text-bold"},{default:N(()=>[wt(" Quasagram ")]),_:1}),A($e,{flat:"",round:"",icon:"eva-home-outline q-mr-sm",size:"18px",dense:"",to:"/",class:"large-screen-only"})]),_:1})]),_:1}),A(kt,{class:"bg-white small-screen-only",bordered:""},{default:N(()=>[A(Pt,{class:"text-grey-10","active-color":"primary","indicator-color":"transparent"},{default:N(()=>[A(Pe,{icon:"eva-home-outline",to:"/"}),A(Pe,{icon:"eva-camera-outline",to:"/camera"})]),_:1})]),_:1}),A(Bt,{class:"bg-grey-2"},{default:N(()=>[A(f)]),_:1})]),_:1})}var Ht=vt(Vt,[["render",At]]);export{Ht as default};