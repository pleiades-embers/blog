import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.82dd189e.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/vue/vue组件化.md","filePath":"docs/vue/vue组件化.md"}'),l={name:"docs/vue/vue组件化.md"},o=p(`<h3 id="事件总线" tabindex="-1">事件总线 <a class="header-anchor" href="#事件总线" aria-label="Permalink to &quot;事件总线&quot;">​</a></h3><p>任意两个组件之间传值常用事件总线 或 vuex得方式</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Bus: 事件派发、监听和回调管理</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bus</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{}</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">$on</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks[name]</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks[name]</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks[name].</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(fn)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks[name]){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.callbacks[name].</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(cb</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">cb</span><span style="color:#E1E4E8;">(args))</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//main.js</span></span>
<span class="line"><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.$bus</span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Bus</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//child1</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$bus.</span><span style="color:#B392F0;">$on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">,handle)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//child2</span></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$bus.</span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Bus: 事件派发、监听和回调管理</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Bus</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">$on</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">,</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks[name]</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks[name]</span><span style="color:#D73A49;">||</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks[name].</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(fn)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">,</span><span style="color:#E36209;">args</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks[name]){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.callbacks[name].</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(cb</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">cb</span><span style="color:#24292E;">(args))</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//main.js</span></span>
<span class="line"><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.$bus</span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Bus</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//child1</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$bus.</span><span style="color:#6F42C1;">$on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">,handle)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//child2</span></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$bus.</span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="parent-root" tabindex="-1">$parent/$root <a class="header-anchor" href="#parent-root" aria-label="Permalink to &quot;$parent/$root&quot;">​</a></h3><p>兄弟组件之间通信可通过共同祖辈搭桥,$parent或$root</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">//brother1</span></span>
<span class="line"><span style="color:#E1E4E8;">this,$parent.$on(&#39;foo&#39;,handle)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">//brother2</span></span>
<span class="line"><span style="color:#E1E4E8;">this.$parent.$emit(&#39;foo&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">//brother1</span></span>
<span class="line"><span style="color:#24292E;">this,$parent.$on(&#39;foo&#39;,handle)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">//brother2</span></span>
<span class="line"><span style="color:#24292E;">this.$parent.$emit(&#39;foo&#39;)</span></span></code></pre></div><h3 id="children" tabindex="-1">$children <a class="header-anchor" href="#children" aria-label="Permalink to &quot;$children&quot;">​</a></h3><p>父组件可以通过$children访问子组件实现父子通信</p><pre><code>//parent
this.$children[0].xx=&#39;xxx&#39;
</code></pre><h3 id="attrs-listeners" tabindex="-1">$attrs/$listeners <a class="header-anchor" href="#attrs-listeners" aria-label="Permalink to &quot;$attrs/$listeners&quot;">​</a></h3><p>包含了父作用域种不作为prop被识别(且获取)得特性绑定(class 和 style 除外).当一个组件没有声明任何prop时,这里会包含所有父作用域得绑定(class 和 style 除外),并且可以通过v-bind=&quot;$attrs&quot; 传入内部组件——在创建高级别得组件时非常有用</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//child:并未在props种声明 foo</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;{{$attrs.foo}}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//parent</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Helloword</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;"> &gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//child:并未在props种声明 foo</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;{{$attrs.foo}}&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//parent</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Helloword</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;"> &gt;</span></span></code></pre></div><h2 id="实现弹窗组件" tabindex="-1">实现弹窗组件 <a class="header-anchor" href="#实现弹窗组件" aria-label="Permalink to &quot;实现弹窗组件&quot;">​</a></h2><p>弹窗这类组件得特点是他们在当前vue实例之外独立存在,通常挂载于body:它们是通过js动态创建得,补需要在任何组件中声明.常见使用姿势</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$create</span><span style="color:#E1E4E8;">(Notice,{</span></span>
<span class="line"><span style="color:#E1E4E8;">	title:</span><span style="color:#9ECBFF;">&#39;搬砖&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	message:</span><span style="color:#9ECBFF;">&#39;提示信息&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	duration:</span><span style="color:#79B8FF;">1000</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$create</span><span style="color:#24292E;">(Notice,{</span></span>
<span class="line"><span style="color:#24292E;">	title:</span><span style="color:#032F62;">&#39;搬砖&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	message:</span><span style="color:#032F62;">&#39;提示信息&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	duration:</span><span style="color:#005CC5;">1000</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">()</span></span></code></pre></div><p>create.js</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//传入一个组件配置</span></span>
<span class="line"><span style="color:#6A737D;">//创建它得实例,并且将它挂载到body上</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">Component</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//实例创建</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//作业:使用extend方式创建组件实例并挂载</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//Vue.extend()</span></span>
<span class="line"><span style="color:#E1E4E8;">   	Vue.</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//方式二:借鸡生蛋</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(Component,{props})</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }).</span><span style="color:#B392F0;">$mount</span><span style="color:#E1E4E8;">()  </span><span style="color:#6A737D;">//$mount() 本质上将vdom=&gt;dom</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//通过vm.$el 获取生成得dom</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(vm.$el)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//删除函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//获取组件实例</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">comp</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">vm.$children[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    comp.</span><span style="color:#B392F0;">remove</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        documnet.body.</span><span style="color:#B392F0;">removeChild</span><span style="color:#E1E4E8;">(vm.$el)</span></span>
<span class="line"><span style="color:#E1E4E8;">        vm.</span><span style="color:#B392F0;">$destory</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> comp</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//传入一个组件配置</span></span>
<span class="line"><span style="color:#6A737D;">//创建它得实例,并且将它挂载到body上</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span><span style="color:#E36209;">Component</span><span style="color:#24292E;">,</span><span style="color:#E36209;">props</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//实例创建</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//作业:使用extend方式创建组件实例并挂载</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//Vue.extend()</span></span>
<span class="line"><span style="color:#24292E;">   	Vue.</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//方式二:借鸡生蛋</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">h</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(Component,{props})</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }).</span><span style="color:#6F42C1;">$mount</span><span style="color:#24292E;">()  </span><span style="color:#6A737D;">//$mount() 本质上将vdom=&gt;dom</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//通过vm.$el 获取生成得dom</span></span>
<span class="line"><span style="color:#24292E;">    document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(vm.$el)</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//删除函数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//获取组件实例</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">comp</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">vm.$children[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    comp.</span><span style="color:#6F42C1;">remove</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        documnet.body.</span><span style="color:#6F42C1;">removeChild</span><span style="color:#24292E;">(vm.$el)</span></span>
<span class="line"><span style="color:#24292E;">        vm.</span><span style="color:#6F42C1;">$destory</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> comp</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>解决 this.$parent.$emit(&#39;validate&#39;) 得低耦合问题</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//广播:自上而下派发事件</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">broadcast</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">componentName</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">evenName</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//遍历所有子元素</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$children.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">child</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> name</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">child.$options.componentName</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(name</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">componentName){</span></span>
<span class="line"><span style="color:#E1E4E8;">			child.$emit.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(child,[eventName].</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(params))</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            broadcast.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(child,[componentName,eventName].</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(params))</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//冒泡查找componentName 相同得组件并派发事件</span></span>
<span class="line"><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(componentName,eventName,params){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> parent</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$parent</span><span style="color:#F97583;">||</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$root</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> name</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">parent.$options.componentName</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//向上查早知道找到相同名称得组件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(parent </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;">name </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;">componentName)){</span></span>
<span class="line"><span style="color:#E1E4E8;">        parent</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">parent.$parent</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(parent){</span></span>
<span class="line"><span style="color:#E1E4E8;">            name</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">parent.$options.componentName</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//广播:自上而下派发事件</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">broadcast</span><span style="color:#24292E;">(</span><span style="color:#E36209;">componentName</span><span style="color:#24292E;">,</span><span style="color:#E36209;">evenName</span><span style="color:#24292E;">,</span><span style="color:#E36209;">params</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//遍历所有子元素</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$children.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">child</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> name</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">child.$options.componentName</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(name</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">componentName){</span></span>
<span class="line"><span style="color:#24292E;">			child.$emit.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(child,[eventName].</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(params))</span></span>
<span class="line"><span style="color:#24292E;">        }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            broadcast.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(child,[componentName,eventName].</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(params))</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//冒泡查找componentName 相同得组件并派发事件</span></span>
<span class="line"><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">(componentName,eventName,params){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> parent</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$parent</span><span style="color:#D73A49;">||</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$root</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> name</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">parent.$options.componentName</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//向上查早知道找到相同名称得组件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(parent </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">||</span><span style="color:#24292E;">name </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;">componentName)){</span></span>
<span class="line"><span style="color:#24292E;">        parent</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">parent.$parent</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(parent){</span></span>
<span class="line"><span style="color:#24292E;">            name</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">parent.$options.componentName</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,19),e=[o];function c(t,r,E,y,i,d){return n(),a("div",null,e)}const m=s(l,[["render",c]]);export{h as __pageData,m as default};
