import{d as T,r as u,o as m,c as p,a as e,h,v as f,F as D,b as g,t as x,e as d,w as b,f as i,g as v}from"./app.370ca44e.js";import{g as k}from"./chunks/index.d89c728f.js";import{s as w}from"./chunks/index.1fb02f4a.js";function y(c,t,n=0,r){let o=k(c);const a=o<t,l=n===0?1:Math.round(n*1e3/16),s=(t-o)/l;function _(){o+=s,(a&&o>t||!a&&o<t)&&(o=t),w(c,o),a&&o<t||!a&&o>t?requestAnimationFrame(_):r&&requestAnimationFrame(r)}_()}const F={class:"mb5"},C=e("label",{for:""},"Top:",-1),E=e("label",{for:""},"duration:",-1),A=T({__name:"demo",setup(c){const t=u(),n=u(200),r=u(.4);function o(){y(t.value,n.value||0,r.value)}return(a,l)=>(m(),p("div",null,[e("section",F,[e("div",null,[C,h(e("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>n.value=s),type:"number"},null,512),[[f,n.value]])]),e("div",null,[E,h(e("input",{"onUpdate:modelValue":l[1]||(l[1]=s=>r.value=s),type:"number"},null,512),[[f,r.value]])]),e("button",{onClick:o},"\u8BBE\u7F6E")]),e("section",{ref_key:"scrollRef",ref:t,class:"h100 overflow-y-auto mb5"},[(m(),p(D,null,g(8,s=>e("div",{key:s,class:"border h20 mb3 b-rd flex items-center justify-center"},x(s),1)),64))],512)]))}}),B=e("h1",{id:"scrolltopto",tabindex:"-1"},[i("scrollTopTo "),e("a",{class:"header-anchor",href:"#scrolltopto","aria-hidden":"true"},"#")],-1),S=e("p",null,"\u987A\u6ED1\u6EDA\u52A8\u6EDA\u52A8\u6761\u8DDD\u79BB\u9876\u90E8\u4F4D\u7F6E",-1),V=e("h2",{id:"demo",tabindex:"-1"},[i("Demo "),e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),N=e("h2",{id:"source",tabindex:"-1"},[i("Source "),e("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#")],-1),U=e("p",null,[e("a",{href:"https://github.com/FastUse/utils/tree/main/packages/core/browser/scroll/scrollTopTo/index.ts",target:"_blank",rel:"noreferrer"},"Source"),i(" \u2022 "),e("a",{href:"https://github.com/FastUse/utils/tree/main/packages/core/browser/scroll/scrollTopTo/demo.vue",target:"_blank",rel:"noreferrer"},"Demo")],-1),R=JSON.parse('{"title":"scrollTopTo","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Source","slug":"source","link":"#source","children":[]}],"relativePath":"core/browser/scroll/scrollTopTo/index.md"}'),$={name:"core/browser/scroll/scrollTopTo/index.md"},j=T({...$,setup(c){return(t,n)=>{const r=v("DemoContainer"),o=v("ClientOnly");return m(),p("div",null,[B,S,V,d(o,null,{default:b(()=>[d(r,null,{default:b(()=>[d(A)]),_:1})]),_:1}),N,U])}}});export{R as __pageData,j as default};