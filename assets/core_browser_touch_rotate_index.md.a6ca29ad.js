import{T as x}from"./chunks/touchCore.7e13d856.js";import{d as v,r as f,i as k,o as b,c as C,a as e,n as D,t as w,F as y,e as h,w as g,f as u,g as p}from"./app.370ca44e.js";const n=new x;function E(d){const{el:o,onRotateStart:a,onRotateIng:r,onRotateEnd:s}=d;let c,i;function _(t){t.touches.length>1&&(c=n.getVector(n.getPoint(t,1),n.getPoint(t,0)),a==null||a(t))}function m(t){t.touches.length>1&&(c?i=n.getVector(n.getPoint(t,1),n.getPoint(t,0)):c=n.getVector(n.getPoint(t,1),n.getPoint(t,0)),c&&i&&(console.log(c,i,"456",n.getAngle(c,i)),r==null||r({delta:{rotate:n.getAngle(c,i)},origin:t}),c=i))}function l(t){s==null||s(t)}return o.addEventListener("touchstart",_),o.addEventListener("touchmove",m),o.addEventListener("touchend",l),o.addEventListener("touchcancel",l),function(){o.removeEventListener("touchstart",_),o.removeEventListener("touchmove",m),o.removeEventListener("touchend",l),o.removeEventListener("touchcancel",l)}}const L=e("div",{class:"mb4"},"\u8BF7\u7528\u624B\u673A\u67E5\u770B\u6548\u679C",-1),B={class:"border h80 flex items-center justify-center"},P=v({__name:"demo",setup(d){const o=f(),a=f(0);return k(()=>{E({el:o.value,onRotateStart(r){r.preventDefault()},onRotateIng(r){r.origin.preventDefault();const{rotate:s}=r.delta;a.value+=s}})}),(r,s)=>(b(),C(y,null,[e("div",null,[L,e("div",B,[e("div",{ref_key:"rotateRef",ref:o,class:"w20 h20 border",style:D({transform:`rotate(${a.value}deg)`})},null,4)])]),e("div",null,"rotate: "+w(a.value),1)],64))}}),F=e("h1",{id:"rotate",tabindex:"-1"},[u("rotate "),e("a",{class:"header-anchor",href:"#rotate","aria-hidden":"true"},"#")],-1),S=e("p",null,"\u53CC\u6307\u65CB\u8F6C",-1),T=e("h2",{id:"demo",tabindex:"-1"},[u("Demo "),e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),V=e("h2",{id:"source",tabindex:"-1"},[u("Source "),e("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#")],-1),A=e("p",null,[e("a",{href:"https://github.com/FastUse/utils/tree/main/packages/core/browser/touch/rotate/index.ts",target:"_blank",rel:"noreferrer"},"Source"),u(" \u2022 "),e("a",{href:"https://github.com/FastUse/utils/tree/main/packages/core/browser/touch/rotate/demo.vue",target:"_blank",rel:"noreferrer"},"Demo")],-1),U=JSON.parse('{"title":"rotate","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Source","slug":"source","link":"#source","children":[]}],"relativePath":"core/browser/touch/rotate/index.md"}'),N={name:"core/browser/touch/rotate/index.md"},j=v({...N,setup(d){return(o,a)=>{const r=p("DemoContainer"),s=p("ClientOnly");return b(),C("div",null,[F,S,T,h(s,null,{default:g(()=>[h(r,null,{default:g(()=>[h(P)]),_:1})]),_:1}),V,A])}}});export{U as __pageData,j as default};