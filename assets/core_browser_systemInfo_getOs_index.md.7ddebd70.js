import{i as F,u as c,a as b,d as w,e as u,f as d,g as h,h as x}from"./chunks/index.ac31d92d.js";import{d as m,o as g,c as p,f as n,t as r,u as i,a as t,e as l,w as _,g as f}from"./app.370ca44e.js";function k(){let a="",e="";if(F){a="iOS";const s=c(/OS\s([\w_]+)\slike/);s&&(e=s[1].replace(/_/g,"."))}else if(b){a="Android";const s=c(/Android[\s/]([\w\.]+)[;\s]/);s&&(e=s[1])}else if(w)a="iOS",e=typeof window.BigInt=="function"?"14.0":"13.0";else if(u||d||h){a="PC";const s=c(/\((.+?)\)/)[1];if(u){switch(a="Windows",e="",u[1]){case"5.1":e="XP";break;case"6.0":e="Vista";break;case"6.1":e="7";break;case"6.2":e="8";break;case"6.3":e="8.1";break;case"10.0":e="10";break}const o=s==null?void 0:s.match(/[Win|WOW]([\d]+)/);o&&(e+=` x${o[1]}`)}else if(d){a="macOS";const o=s.match(/Mac OS X (.+)/)||"";o&&(e=o[1].replace(/_/g,"."),e.indexOf(";")!==-1&&(e=e.split(";")[0]))}else if(h){a="Linux";const o=(s==null?void 0:s.match(/Linux (.*)/))||"";o&&(e=o[1],e.indexOf(";")!==-1&&(e=e==null?void 0:e.split(";")[0]))}}else a="Other",e="0";return{osName:a.toLocaleLowerCase(),osVersion:e,osLanguage:window.navigator.language,osTheme:x()}}const C=t("br",null,null,-1),D=t("br",null,null,-1),B=t("br",null,null,-1),S=m({__name:"demo",setup(a){const e=k();return(s,o)=>(g(),p("div",null,[n(" \u7CFB\u7EDF\u540D\uFF1A"+r(i(e).osName)+" ",1),C,n(" \u7CFB\u7EDF\u7248\u672C\uFF1A"+r(i(e).osVersion)+" ",1),D,n(" \u7CFB\u7EDF\u8BED\u8A00\uFF1A"+r(i(e).osLanguage)+" ",1),B,n(" \u7CFB\u7EDF\u4E3B\u9898\uFF1A"+r(i(e).osTheme),1)]))}}),E=t("h1",{id:"getos",tabindex:"-1"},[n("getOs "),t("a",{class:"header-anchor",href:"#getos","aria-hidden":"true"},"#")],-1),v=t("p",null,"\u83B7\u53D6\u7CFB\u7EDF\u4FE1\u606F",-1),y=t("h2",{id:"demo",tabindex:"-1"},[n("Demo "),t("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),A=t("h2",{id:"source",tabindex:"-1"},[n("Source "),t("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#")],-1),I=t("p",null,[t("a",{href:"https://github.com/FastUse/utils/tree/main/packages/core/browser/systemInfo/getOs/index.ts",target:"_blank",rel:"noreferrer"},"Source"),n(" \u2022 "),t("a",{href:"https://github.com/FastUse/utils/tree/main/packages/core/browser/systemInfo/getOs/demo.vue",target:"_blank",rel:"noreferrer"},"Demo")],-1),W=JSON.parse('{"title":"getOs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Source","slug":"source","link":"#source","children":[]}],"relativePath":"core/browser/systemInfo/getOs/index.md"}'),L={name:"core/browser/systemInfo/getOs/index.md"},$=m({...L,setup(a){return(e,s)=>{const o=f("DemoContainer"),O=f("ClientOnly");return g(),p("div",null,[E,v,y,l(O,null,{default:_(()=>[l(o,null,{default:_(()=>[l(S)]),_:1})]),_:1}),A,I])}}});export{W as __pageData,$ as default};