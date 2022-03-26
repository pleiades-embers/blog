import{_ as n,c as s,o as a,d as t}from"./app.2fc076cc.js";const h='{"title":"axios \u5E76\u53D1\u8BF7\u6C42","description":"","frontmatter":{},"headers":[{"level":3,"title":"axios \u5E76\u53D1\u8BF7\u6C42","slug":"axios-\u5E76\u53D1\u8BF7\u6C42"},{"level":3,"title":"\u4E8B\u4EF6\u603B\u7EBF","slug":"\u4E8B\u4EF6\u603B\u7EBF"},{"level":3,"title":"$parent/$root","slug":"parent-root"},{"level":3,"title":"$children","slug":"children"},{"level":3,"title":"$attrs/$listeners","slug":"attrs-listeners"},{"level":2,"title":"\u5B9E\u73B0\u5F39\u7A97\u7EC4\u4EF6","slug":"\u5B9E\u73B0\u5F39\u7A97\u7EC4\u4EF6"}],"relativePath":"docs/vue/vue\u7EC4\u4EF6\u5316.md"}',p={},o=t(`<h3 id="axios-\u5E76\u53D1\u8BF7\u6C42" tabindex="-1">axios \u5E76\u53D1\u8BF7\u6C42 <a class="header-anchor" href="#axios-\u5E76\u53D1\u8BF7\u6C42" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code>    <span class="token keyword">this</span><span class="token punctuation">.</span>$http<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>$http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>     <span class="token comment">//\u53D1\u9001\u5E76\u53D1\u8BF7\u6C42</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$http<span class="token punctuation">.</span><span class="token function">spread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res1<span class="token punctuation">,</span> res2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>   <span class="token comment">//\u5C06\u83B7\u53D6\u5230\u7684\u6570\u7EC4\u5C55\u5F00</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
</code></pre></div><h3 id="\u4E8B\u4EF6\u603B\u7EBF" tabindex="-1">\u4E8B\u4EF6\u603B\u7EBF <a class="header-anchor" href="#\u4E8B\u4EF6\u603B\u7EBF" aria-hidden="true">#</a></h3><p>\u4EFB\u610F\u4E24\u4E2A\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u503C\u5E38\u7528\u4E8B\u4EF6\u603B\u7EBF \u6216 vuex\u5F97\u65B9\u5F0F</p><div class="language-javascript"><pre><code><span class="token comment">// Bus: \u4E8B\u4EF6\u6D3E\u53D1\u3001\u76D1\u542C\u548C\u56DE\u8C03\u7BA1\u7406</span>
<span class="token keyword">class</span> <span class="token class-name">Bus</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">$on</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">||</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">$emit</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>cb<span class="token operator">=</span><span class="token function">cb</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//main.js</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Bus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//child1</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>handle<span class="token punctuation">)</span>

<span class="token comment">//child2</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="parent-root" tabindex="-1">$parent/$root <a class="header-anchor" href="#parent-root" aria-hidden="true">#</a></h3><p>\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u901A\u4FE1\u53EF\u901A\u8FC7\u5171\u540C\u7956\u8F88\u642D\u6865,$parent\u6216$root</p><div class="language-vue"><pre><code>//brother1
this,$parent.$on(&#39;foo&#39;,handle)

//brother2
this.$parent.$emit(&#39;foo&#39;)
</code></pre></div><h3 id="children" tabindex="-1">$children <a class="header-anchor" href="#children" aria-hidden="true">#</a></h3><p>\u7236\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7$children\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u5B9E\u73B0\u7236\u5B50\u901A\u4FE1</p><div class="language-"><pre><code>//parent
this.$children[0].xx=&#39;xxx&#39;
</code></pre></div><h3 id="attrs-listeners" tabindex="-1">$attrs/$listeners <a class="header-anchor" href="#attrs-listeners" aria-hidden="true">#</a></h3><p>\u5305\u542B\u4E86\u7236\u4F5C\u7528\u57DF\u79CD\u4E0D\u4F5C\u4E3Aprop\u88AB\u8BC6\u522B(\u4E14\u83B7\u53D6)\u5F97\u7279\u6027\u7ED1\u5B9A(class \u548C style \u9664\u5916).\u5F53\u4E00\u4E2A\u7EC4\u4EF6\u6CA1\u6709\u58F0\u660E\u4EFB\u4F55prop\u65F6,\u8FD9\u91CC\u4F1A\u5305\u542B\u6240\u6709\u7236\u4F5C\u7528\u57DF\u5F97\u7ED1\u5B9A(class \u548C style \u9664\u5916),\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7v-bind=&quot;$attrs&quot; \u4F20\u5165\u5185\u90E8\u7EC4\u4EF6\u2014\u2014\u5728\u521B\u5EFA\u9AD8\u7EA7\u522B\u5F97\u7EC4\u4EF6\u65F6\u975E\u5E38\u6709\u7528</p><div class="language-javascript"><pre><code><span class="token comment">//child:\u5E76\u672A\u5728props\u79CD\u58F0\u660E foo</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>$attrs<span class="token punctuation">.</span>foo<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>

<span class="token comment">//parent</span>
<span class="token operator">&lt;</span>Helloword foo<span class="token operator">=</span><span class="token string">&quot;foo&quot;</span><span class="token operator">/</span> <span class="token operator">&gt;</span>
</code></pre></div><h2 id="\u5B9E\u73B0\u5F39\u7A97\u7EC4\u4EF6" tabindex="-1">\u5B9E\u73B0\u5F39\u7A97\u7EC4\u4EF6 <a class="header-anchor" href="#\u5B9E\u73B0\u5F39\u7A97\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u5F39\u7A97\u8FD9\u7C7B\u7EC4\u4EF6\u5F97\u7279\u70B9\u662F\u4ED6\u4EEC\u5728\u5F53\u524Dvue\u5B9E\u4F8B\u4E4B\u5916\u72EC\u7ACB\u5B58\u5728,\u901A\u5E38\u6302\u8F7D\u4E8Ebody:\u5B83\u4EEC\u662F\u901A\u8FC7js\u52A8\u6001\u521B\u5EFA\u5F97,\u8865\u9700\u8981\u5728\u4EFB\u4F55\u7EC4\u4EF6\u4E2D\u58F0\u660E.\u5E38\u89C1\u4F7F\u7528\u59FF\u52BF</p><div class="language-javascript"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$create</span><span class="token punctuation">(</span>Notice<span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;\u642C\u7816&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&#39;\u63D0\u793A\u4FE1\u606F&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">duration</span><span class="token operator">:</span><span class="token number">1000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>create.js</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">//\u4F20\u5165\u4E00\u4E2A\u7EC4\u4EF6\u914D\u7F6E</span>
<span class="token comment">//\u521B\u5EFA\u5B83\u5F97\u5B9E\u4F8B,\u5E76\u4E14\u5C06\u5B83\u6302\u8F7D\u5230body\u4E0A</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">Component<span class="token punctuation">,</span>props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5B9E\u4F8B\u521B\u5EFA</span>
    <span class="token comment">//\u4F5C\u4E1A:\u4F7F\u7528extend\u65B9\u5F0F\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B\u5E76\u6302\u8F7D</span>
    <span class="token comment">//Vue.extend()</span>
   	Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//\u65B9\u5F0F\u4E8C:\u501F\u9E21\u751F\u86CB</span>
	<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span><span class="token punctuation">{</span>props<span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//$mount() \u672C\u8D28\u4E0A\u5C06vdom=&gt;dom</span>
    
    <span class="token comment">//\u901A\u8FC7vm.$el \u83B7\u53D6\u751F\u6210\u5F97dom</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
    
    <span class="token comment">//\u5220\u9664\u51FD\u6570</span>
    <span class="token comment">//\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B</span>
    <span class="token keyword">const</span> comp<span class="token operator">=</span>vm<span class="token punctuation">.</span>$children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    
    comp<span class="token punctuation">.</span><span class="token function-variable function">remove</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        documnet<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
        vm<span class="token punctuation">.</span><span class="token function">$destory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> comp
<span class="token punctuation">}</span>
</code></pre></div><p>\u89E3\u51B3 this.$parent.$emit(&#39;validate&#39;) \u5F97\u4F4E\u8026\u5408\u95EE\u9898</p><div class="language-javascript"><pre><code><span class="token comment">//\u5E7F\u64AD:\u81EA\u4E0A\u800C\u4E0B\u6D3E\u53D1\u4E8B\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token parameter">componentName<span class="token punctuation">,</span>evenName<span class="token punctuation">,</span>params</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u904D\u5386\u6240\u6709\u5B50\u5143\u7D20</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> name<span class="token operator">=</span>child<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>componentName
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>name<span class="token operator">==</span>componentName<span class="token punctuation">)</span><span class="token punctuation">{</span>
			child<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span><span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">broadcast</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span><span class="token punctuation">[</span>componentName<span class="token punctuation">,</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">//\u5192\u6CE1\u67E5\u627EcomponentName \u76F8\u540C\u5F97\u7EC4\u4EF6\u5E76\u6D3E\u53D1\u4E8B\u4EF6</span>
<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token parameter">componentName<span class="token punctuation">,</span>eventName<span class="token punctuation">,</span>params</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> parent<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token operator">||</span><span class="token keyword">this</span><span class="token punctuation">.</span>$root
    <span class="token keyword">var</span> name<span class="token operator">=</span>parent<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>componentName
    
    <span class="token comment">//\u5411\u4E0A\u67E5\u65E9\u77E5\u9053\u627E\u5230\u76F8\u540C\u540D\u79F0\u5F97\u7EC4\u4EF6</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>parent <span class="token operator">&amp;&amp;</span><span class="token punctuation">(</span><span class="token operator">!</span>name<span class="token operator">||</span>name <span class="token operator">!==</span>componentName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        parent<span class="token operator">=</span>parent<span class="token punctuation">.</span>$parent
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">{</span>
            name<span class="token operator">=</span>parent<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>componentName
        <span class="token punctuation">}</span>
        
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,21),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var f=n(p,[["render",e]]);export{h as __pageData,f as default};
