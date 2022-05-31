var y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var h=(e,t,u)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,d=(e,t)=>{for(var u in t||(t={}))E.call(t,u)&&h(e,u,t[u]);if(v)for(var u of v(t))C.call(t,u)&&h(e,u,t[u]);return e};import{_ as b,c as w,b as r,w as k,d as n,e as a,a as _,r as m,o as B,V as g}from"./app.26040656.js";const A={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:e,createElementVNode:t,openBlock:u,createElementBlock:l}=g;function i(s,o){return u(),l("div",null,[t("div",null,[t("div",null,"\u8F93\u5165\u6570\u7EC4:"+e(s.arr),1),t("div",null,"new Set:"+e(s.unique1(s.arr)),1),t("div",null,"indexOf:"+e(s.unique2(s.arr)),1),t("div",null,"\u54C8\u5E0C\u8868:"+e(s.unique3(s.arr)),1)])])}return d({render:i},{data(){return{arr:[0,11,20,5,20,0,0,11,20,5]}},methods:{unique1(s){return Array.from(new Set(s))},unique2(s){let o=[];return s.forEach(c=>{o.indexOf(c)===-1&&o.push(c)}),o},unique3(s){const o=[],c={};return s.forEach(p=>{c[p]===void 0&&(c[p]=!0,o.push(p))}),o}}})}(),"render-demo-1":function(){const{toDisplayString:e,createElementVNode:t,openBlock:u,createElementBlock:l}=g;function i(s,o){return u(),l("div",null,[t("div",null,[t("div",null,"\u8F93\u5165\u6570\u636E:"+e(s.arr),1),t("div",null,"new Set:"+e(s.difference(...s.arr)),1)])])}return d({render:i},{name:"",data(){return{arr:[[1,3,5,7],[5,7,8]]}},methods:{difference(s,o){return s.length===0?[]:o.length===0?s:s.filter(p=>!o.includes(p)).concat(o.filter(p=>!s.includes(p)))}}})}(),"render-demo-2":function(){const{toDisplayString:e,createElementVNode:t,openBlock:u,createElementBlock:l}=g;function i(s,o){return u(),l("div",null,[t("div",null,[t("div",null,"\u8F93\u5165\u6570\u7EC4:"+e(s.arr),1),t("div",null,"Array.concat: "+e(s.flatten1(s.arr)),1),t("div",null,"\u6269\u5C55\u8FD0\u7B97\u7B26: "+e(s.flatten2(s.arr)),1),t("div",null,"join&split: "+e(s.flatten3(s.arr)),1),t("div",null,"toString&split : "+e(s.flatten4(s.arr)),1),t("div",null,"reduce : "+e(s.flatten5(s.arr)),1)])])}return d({render:i},{name:"",data(){return{arr:[0,11,[20,5,[20,[1],0],0,11],20,5]}},methods:{flatten1(s){let o=[];return s.forEach(c=>{Array.isArray(c)?o=o.concat(this.flatten1(c)):o.push(c)}),o},flatten2(s){for(;s.some(o=>Array.isArray(o));)s=[].concat(...s);return s},flatten3(s){return s.join(",").split(",").map(Number)},flatten4(s){return s.toString().split(",").map(Number)},flatten5(s){return s.reduce((o,c)=>o.concat(Array.isArray(c)?this.flatten5(c):c),[])}}})}()}},$='{"title":"\u6570\u7EC4\u53BB\u91CD","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u6570\u7EC4\u53BB\u91CD","slug":"\u6570\u7EC4\u53BB\u91CD"},{"level":3,"title":"\u6570\u7EC4\u5207\u7247","slug":"\u6570\u7EC4\u5207\u7247"},{"level":3,"title":"\u6570\u7EC4\u5206\u5757","slug":"\u6570\u7EC4\u5206\u5757"},{"level":3,"title":"\u6570\u7EC4\u5DEE\u96C6","slug":"\u6570\u7EC4\u5DEE\u96C6"},{"level":3,"title":"\u6570\u7EC4\u6241\u5E73\u5316","slug":"\u6570\u7EC4\u6241\u5E73\u5316"}],"relativePath":"basic/js/02-\u6570\u7EC4\u64CD\u4F5C.md"}',D=n("h3",{id:"\u6570\u7EC4\u53BB\u91CD",tabindex:"-1"},[a("\u6570\u7EC4\u53BB\u91CD "),n("a",{class:"header-anchor",href:"#\u6570\u7EC4\u53BB\u91CD","aria-hidden":"true"},"#")],-1),S=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("\u8F93\u5165\u6570\u7EC4:{{ arr }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("new Set:{{ unique1(arr) }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("indexOf:{{ unique2(arr) }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("\u54C8\u5E0C\u8868:{{ unique3(arr) }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"arr"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"unique1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"arr"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token punctuation"},"("),a("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function"},"unique2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"arr"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"let"),a(" result "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" result"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function"},"unique3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"arr"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" result "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" obj "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
      arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("obj"),n("span",{class:"token punctuation"},"["),a("item"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          obj`),n("span",{class:"token punctuation"},"["),a("item"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
          result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" result"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),q=_('<h3 id="\u6570\u7EC4\u5207\u7247" tabindex="-1">\u6570\u7EC4\u5207\u7247 <a class="header-anchor" href="#\u6570\u7EC4\u5207\u7247" aria-hidden="true">#</a></h3><h3 id="\u6570\u7EC4\u5206\u5757" tabindex="-1">\u6570\u7EC4\u5206\u5757 <a class="header-anchor" href="#\u6570\u7EC4\u5206\u5757" aria-hidden="true">#</a></h3><h3 id="\u6570\u7EC4\u5DEE\u96C6" tabindex="-1">\u6570\u7EC4\u5DEE\u96C6 <a class="header-anchor" href="#\u6570\u7EC4\u5DEE\u96C6" aria-hidden="true">#</a></h3>',3),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("\u8F93\u5165\u6570\u636E:{{ arr }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("new Set:{{ difference(...arr) }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"arr"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"difference"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("arr1"),n("span",{class:"token punctuation"},","),a(" arr2")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("arr1"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("arr2"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" arr1"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" result "),n("span",{class:"token operator"},"="),a(` arr1
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token operator"},"!"),a("arr2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),a("arr2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token operator"},"!"),a("arr1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" result"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),F=n("h3",{id:"\u6570\u7EC4\u6241\u5E73\u5316",tabindex:"-1"},[a("\u6570\u7EC4\u6241\u5E73\u5316 "),n("a",{class:"header-anchor",href:"#\u6570\u7EC4\u6241\u5E73\u5316","aria-hidden":"true"},"#")],-1),N=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("\u8F93\u5165\u6570\u7EC4:{{ arr }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("Array.concat: {{ flatten1(arr) }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("\u6269\u5C55\u8FD0\u7B97\u7B26: {{ flatten2(arr) }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("join&split: {{ flatten3(arr) }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("toString&split : {{ flatten4(arr) }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("reduce : {{ flatten5(arr) }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"arr"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"flatten1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"arr"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"//\u9012\u5F52"),a(`
      `),n("span",{class:"token keyword"},"let"),a(" result "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

      arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isArray"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          result `),n("span",{class:"token operator"},"="),a(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"flatten1"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
          result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" result"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function"},"flatten2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"arr"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"//\u6269\u5C55\u8FD0\u7B97\u7B26"),a(`
      `),n("span",{class:"token keyword"},"while"),a(),n("span",{class:"token punctuation"},"("),a("arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isArray"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        arr `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),a("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" arr"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function"},"flatten3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"arr"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'","'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'","'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),a("Number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function"},"flatten4"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"arr"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'","'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),a("Number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token function"},"flatten5"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"arr"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("result"),n("span",{class:"token punctuation"},","),a(" item")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),a("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isArray"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"flatten5"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},":"),a(" item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function V(e,t,u,l,i,f){const s=m("render-demo-0"),o=m("demo"),c=m("render-demo-1"),p=m("render-demo-2");return B(),w("div",null,[D,r(o,{sourceCode:`<template>
  <div>
    <div>\u8F93\u5165\u6570\u7EC4:{{ arr }}</div>
    <div>new Set:{{ unique1(arr) }}</div>
    <div>indexOf:{{ unique2(arr) }}</div>
    <div>\u54C8\u5E0C\u8868:{{ unique3(arr) }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [0, 11, 20, 5, 20, 0, 0, 11, 20, 5],
    };
  },
  methods: {
    unique1(arr) {
      return Array.from(new Set(arr));
    },
    unique2(arr) {
      let result = [];
      arr.forEach((item) => {
        if (result.indexOf(item) === -1) {
          result.push(item);
        }
      });
      return result;
    },
    unique3(arr) {
      const result = [];
      const obj = {};
      arr.forEach((item) => {
        if (obj[item] === undefined) {
          obj[item] = true;
          result.push(item);
        }
      });
      return result;
    },
  },
};
<\/script>
`},{highlight:k(()=>[S]),default:k(()=>[r(s)]),_:1}),q,r(o,{sourceCode:`<template>
  <div>
    <div>\u8F93\u5165\u6570\u636E:{{ arr }}</div>
    <div>new Set:{{ difference(...arr) }}</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      arr: [
        [1, 3, 5, 7],
        [5, 7, 8],
      ],
    };
  },
  methods: {
    difference(arr1, arr2) {
      if (arr1.length === 0) {
        return [];
      }
      if (arr2.length === 0) {
        return arr1;
      }
      const result = arr1
        .filter((item) => !arr2.includes(item))
        .concat(arr2.filter((item) => !arr1.includes(item)));
      return result;
    },
  },
};
<\/script>
`},{highlight:k(()=>[j]),default:k(()=>[r(c)]),_:1}),F,r(o,{sourceCode:`<template>
  <div>
    <div>\u8F93\u5165\u6570\u7EC4:{{ arr }}</div>
    <div>Array.concat: {{ flatten1(arr) }}</div>
    <div>\u6269\u5C55\u8FD0\u7B97\u7B26: {{ flatten2(arr) }}</div>
    <div>join&split: {{ flatten3(arr) }}</div>
    <div>toString&split : {{ flatten4(arr) }}</div>
    <div>reduce : {{ flatten5(arr) }}</div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      arr: [0, 11, [20, 5, [20, [1], 0], 0, 11], 20, 5],
    };
  },
  methods: {
    flatten1(arr) {
      //\u9012\u5F52
      let result = [];

      arr.forEach((item) => {
        if (Array.isArray(item)) {
          result = result.concat(this.flatten1(item));
        } else {
          result.push(item);
        }
      });
      return result;
    },
    flatten2(arr) {
      //\u6269\u5C55\u8FD0\u7B97\u7B26
      while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
      }
      return arr;
    },
    flatten3(arr) {
      return arr.join(",").split(",").map(Number);
    },
    flatten4(arr) {
      return arr.toString().split(",").map(Number);
    },
    flatten5(arr) {
      return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? this.flatten5(item) : item);
      }, []);
    },
  },
};
<\/script>
`},{highlight:k(()=>[N]),default:k(()=>[r(p)]),_:1})])}var P=b(A,[["render",V]]);export{$ as __pageData,P as default};
