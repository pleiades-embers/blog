import{_ as a,o as n,c as l,k as s,a as p,Q as o}from"./chunks/framework.82dd189e.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"css/basic/01-aspect-ratio.md","filePath":"css/basic/01-aspect-ratio.md"}'),e={name:"css/basic/01-aspect-ratio.md"},t=s("h3",{id:"aspect-ratio",tabindex:"-1"},[p("aspect-ratio "),s("a",{class:"header-anchor",href:"#aspect-ratio","aria-label":'Permalink to "aspect-ratio"'},"​")],-1),c=s("p",null,"参考资料：",-1),r=s("p",null,[s("a",{href:"https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/",target:"_blank",rel:"noreferrer"},"https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/")],-1),i=s("p",null,[s("a",{href:"https://matthiasott.com/notes/aspect-ratio-in-css",target:"_blank",rel:"noreferrer"},"https://matthiasott.com/notes/aspect-ratio-in-css")],-1),E=s("p",null,"利用css 纵横比 使得grid元素 等比例展示",-1),y=s("iframe",{height:"400",style:{width:"100%"},scrolling:"no",title:"Aspect Ratio: Example 2",src:"https://codepen.io/traumerei/embed/QWarYqN?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/traumerei/pen/QWarYqN">
  Aspect Ratio: Example 2</a> by traumerei (<a href="https://codepen.io/traumerei">@traumerei</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),d=s("p",null,"保持纵横比限制 元素溢出",-1),h=s("iframe",{height:"400",style:{width:"100%"},scrolling:"no",title:"Aspect Ratio: Example 4",src:"https://codepen.io/traumerei/embed/JjMvxZa?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/traumerei/pen/JjMvxZa">
  Aspect Ratio: Example 4</a> by traumerei (<a href="https://codepen.io/traumerei">@traumerei</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),m=o(`<h3 id="aspect-ratio-media媒体查询" tabindex="-1">aspect-ratio (media媒体查询) <a class="header-anchor" href="#aspect-ratio-media媒体查询" aria-label="Permalink to &quot;aspect-ratio (media媒体查询)&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;aspect-ratio&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Watch this element as you resize your viewport&#39;s width and height.</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">/* 最小宽高比 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-aspect-ratio</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.aspect-ratio</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#9af</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* blue */</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 最大宽高比 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-aspect-ratio</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.aspect-ratio</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#9ff</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* cyan */</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 明确的宽高比, 放在最下部防止同时满足条件时的覆盖*/</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">aspect-ratio</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.aspect-ratio</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#f9a</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* red */</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;aspect-ratio&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    Watch this element as you resize your viewport&#39;s width and height.</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">/* 最小宽高比 */</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">min-aspect-ratio</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.aspect-ratio</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#9af</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">/* blue */</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 最大宽高比 */</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">max-aspect-ratio</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.aspect-ratio</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#9ff</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">/* cyan */</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 明确的宽高比, 放在最下部防止同时满足条件时的覆盖*/</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">aspect-ratio</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.aspect-ratio</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#f9a</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">/* red */</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,2),u=[t,c,r,i,E,y,d,h,m];function F(_,C,g,f,A,b){return n(),l("div",null,u)}const v=a(e,[["render",F]]);export{B as __pageData,v as default};
