import{c as h,j as s,k as a,a as i,h as g,d,g as f,p as y,H as m}from"./index.3faf325e.js";var $=h({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:r}}=f(),t=s(y,a);if(t===a)return console.error("QPage needs to be a deep child of QLayout"),a;if(s(m,a)===a)return console.error("QPage needs to be child of QPageContainer"),a;const u=i(()=>{const o=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const p=t.isContainer.value===!0?t.containerHeight.value:r.screen.height;return e.styleFn(o,p)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-o+"px":r.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":r.screen.height-o+"px"}}),l=i(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:l.value,style:u.value},d(n.default))}});const c=["B","KB","MB","GB","TB","PB"];function B(e){let n=0;for(;parseInt(e,10)>=1024&&n<c.length-1;)e/=1024,++n;return`${e.toFixed(1)}${c[n]}`}function Q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function x(e,n=2,r="0"){if(e==null)return e;const t=""+e;return t.length>=n?t:new Array(n-t.length+1).join(r)+t}export{$ as Q,Q as c,B as h,x as p};