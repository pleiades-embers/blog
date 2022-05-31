import{_ as n,c as s,o as a,a as t}from"./app.26040656.js";const m='{"title":"mustache","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3Atokens","slug":"\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3Atokens"},{"level":3,"title":"\u626B\u63CF\u5668\u626B\u63CF\u5B57\u7B26\u4E32  (Scanner)","slug":"\u626B\u63CF\u5668\u626B\u63CF\u5B57\u7B26\u4E32-scanner"},{"level":3,"title":"\u6784\u5EFA\u6210tokens (nestTokens)","slug":"\u6784\u5EFA\u6210tokens-nesttokens"}],"relativePath":"docs/vue/vue-mustache.md"}',p={},o=t(`<h1 id="mustache" tabindex="-1">mustache <a class="header-anchor" href="#mustache" aria-hidden="true">#</a></h1><h2 id="\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3Atokens" tabindex="-1">\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3Atokens <a class="header-anchor" href="#\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3Atokens" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">import</span> parseTemplateToTokens <span class="token keyword">from</span> <span class="token string">&#39;./parseTemplateToTokens&#39;</span>

window<span class="token punctuation">.</span>SSG_TemplateEngine<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">templateStr<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> tokens<span class="token operator">=</span><span class="token function">parseTemplateToTokens</span><span class="token punctuation">(</span>templateStr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u626B\u63CF\u5668\u626B\u63CF\u5B57\u7B26\u4E32-scanner" tabindex="-1">\u626B\u63CF\u5668\u626B\u63CF\u5B57\u7B26\u4E32 (Scanner) <a class="header-anchor" href="#\u626B\u63CF\u5668\u626B\u63CF\u5B57\u7B26\u4E32-scanner" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Scanner</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">templateStr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>templateStr<span class="token operator">=</span>templateStr
        <span class="token keyword">this</span><span class="token punctuation">.</span>pos<span class="token operator">=</span><span class="token number">0</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token operator">=</span>templateStr 
    <span class="token punctuation">}</span>

    <span class="token comment">//\u529F\u80FD\u5F31,\u5C31\u662F\u8D70\u8FC7\u6307\u5B9A\u5185\u5BB9</span>
    <span class="token function">scan</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//tag\u6709\u591A\u957F,\u6BD4\u5982{{\u957F\u5EA6\u662F2,\u5C31\u8BA9\u6307\u9488\u540E\u79FB\u591A\u5C11\u4F4D</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>pos<span class="token operator">+=</span>tag<span class="token punctuation">.</span>length
            <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>templateStr<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pos<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//\u8BA9\u6307\u9488\u8FDB\u884C\u626B\u63CF,\u76F4\u5230\u9047\u89C1\u6307\u5B9A\u5185\u5BB9\u7ED3\u675F,\u5E76\u4E14\u80FD\u591F\u8FD4\u56DE\u7ED3\u675F\u4E4B\u524D\u8DEF\u8FC7\u7684\u6587\u5B57</span>
    <span class="token function">scanUtil</span><span class="token punctuation">(</span><span class="token parameter">stopTag</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u8BB0\u5F55\u4E00\u4E0B\u6267\u884C\u672C\u65B9\u6CD5\u7684\u65F6\u5019pos\u7684\u503C</span>
        <span class="token keyword">const</span> pos_backup<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>pos

        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>stopTag<span class="token punctuation">)</span><span class="token operator">!==</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">eos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>pos<span class="token operator">++</span>
            <span class="token comment">//\u6539\u53D8\u4E3A\u5C3E\u5DF4\u5F00\u5934\u4E0D\u662FstopTag\u7684\u65F6\u5019,\u5C31\u8BF4\u660E\u8FD8\u6CA1\u6709\u626B\u63CF\u5230stopTag</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>templateStr<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pos<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// debugger</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>templateStr<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>pos_backup<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>pos<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u6307\u9488\u662F\u5426\u5DF2\u7ECF\u5230\u5934,\u8FD4\u56DE\u5E03\u5C14\u503C</span>
    <span class="token function">eos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pos<span class="token operator">&gt;=</span><span class="token keyword">this</span><span class="token punctuation">.</span>templateStr<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6784\u5EFA\u6210tokens-nesttokens" tabindex="-1">\u6784\u5EFA\u6210tokens (nestTokens) <a class="header-anchor" href="#\u6784\u5EFA\u6210tokens-nesttokens" aria-hidden="true">#</a></h3>`,6),e=[o];function c(l,k,u,i,r,d){return a(),s("div",null,e)}var w=n(p,[["render",c]]);export{m as __pageData,w as default};
