import{_ as n,c as s,o as a,a as p}from"./app.26040656.js";const m='{"title":"\u5F00\u53D1\u5C42\u9762\u7684\u6784\u5EFA\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F00\u53D1\u5C42\u9762\u7684\u6784\u5EFA\u4F18\u5316","slug":"\u5F00\u53D1\u5C42\u9762\u7684\u6784\u5EFA\u4F18\u5316"},{"level":3,"title":"html  HMR","slug":"html-hmr"},{"level":3,"title":"gzip \u538B\u7F29","slug":"gzip-\u538B\u7F29"},{"level":3,"title":"source-map \u65B9\u4FBF\u8C03\u8BD5","slug":"source-map-\u65B9\u4FBF\u8C03\u8BD5"},{"level":3,"title":"oneOf   loader \u52A0\u901F   \u53CA","slug":"oneof-loader-\u52A0\u901F-\u53CA"},{"level":3,"title":"loader\u6267\u884C\u7F13\u5B58  \u7B2C\u4E8C\u6B21loader \u4F1A\u7F13\u5B58","slug":"loader\u6267\u884C\u7F13\u5B58-\u7B2C\u4E8C\u6B21loader-\u4F1A\u7F13\u5B58"},{"level":2,"title":"\u6784\u5EFA\u5C42\u9762\u7684\u6784\u5EFA\u4F18\u5316","slug":"\u6784\u5EFA\u5C42\u9762\u7684\u6784\u5EFA\u4F18\u5316"},{"level":3,"title":"\u79BB\u7EBF\u7F13\u5B58 PWA   serviceworker","slug":"\u79BB\u7EBF\u7F13\u5B58-pwa-serviceworker"},{"level":3,"title":"\u6784\u5EFA\u4EE3\u7801JS\u5206\u5272  \u53CA CSS\u5206\u5272","slug":"\u6784\u5EFA\u4EE3\u7801js\u5206\u5272-\u53CA-css\u5206\u5272"},{"level":3,"title":"\u6253\u5305\u65F6\u79FB\u9664\u7A7A\u683C\u6CE8\u91CA","slug":"\u6253\u5305\u65F6\u79FB\u9664\u7A7A\u683C\u6CE8\u91CA"},{"level":3,"title":"\u9759\u6001\u8D44\u6E90\u6784\u5EFA\u7F13\u5B58\u53CA devtools","slug":"\u9759\u6001\u8D44\u6E90\u6784\u5EFA\u7F13\u5B58\u53CA-devtools"},{"level":3,"title":"tree shaking","slug":"tree-shaking"},{"level":3,"title":"\u591A\u8FDB\u7A0B\u6253\u5305 HappyPack","slug":"\u591A\u8FDB\u7A0B\u6253\u5305-happypack"},{"level":2,"title":"webpack \u6253\u5305\u6E90\u7801\u89E3\u6790","slug":"webpack-\u6253\u5305\u6E90\u7801\u89E3\u6790"},{"level":3,"title":"\u5927\u4F53\u7ED3\u6784:","slug":"\u5927\u4F53\u7ED3\u6784"},{"level":3,"title":"\u6838\u5FC3\u65B9\u6CD5:","slug":"\u6838\u5FC3\u65B9\u6CD5"},{"level":3,"title":"\u6838\u5FC3\u6253\u5305\u539F\u7406","slug":"\u6838\u5FC3\u6253\u5305\u539F\u7406"}],"relativePath":"docs/other/webpack\u6027\u80FD\u4F18\u5316.md"}',t={},o=p(`<h2 id="\u5F00\u53D1\u5C42\u9762\u7684\u6784\u5EFA\u4F18\u5316" tabindex="-1">\u5F00\u53D1\u5C42\u9762\u7684\u6784\u5EFA\u4F18\u5316 <a class="header-anchor" href="#\u5F00\u53D1\u5C42\u9762\u7684\u6784\u5EFA\u4F18\u5316" aria-hidden="true">#</a></h2><h3 id="html-hmr" tabindex="-1">html HMR <a class="header-anchor" href="#html-hmr" aria-hidden="true">#</a></h3><ul><li>\u4E13\u9898\u9875\u7684 html \u6CA1\u6709 HMR \u529F\u80FD</li></ul><div class="language-javascript"><pre><code>    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//\u5165\u53E3</span>
        <span class="token comment">//html \u6587\u4EF6;:\u9ED8\u8BA4\u4E0D\u80FD\u4F7F\u7528 HMR \u529F\u80FD\uFF0C\u540C\u65F6\u4F1A\u5BFC\u81F4\u95EE\u9898: html\u6587\u4EF6\u4E0D\u80FD\u70ED\u66F4\u65B0\u4E86~</span>
        <span class="token comment">// \u89E3\u51B3: \u4FEE\u6539entry \u5165\u53E3 ,\u5C06html\u6587\u4EF6\u5F15\u5165</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./src/index.pug&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="gzip-\u538B\u7F29" tabindex="-1">gzip \u538B\u7F29 <a class="header-anchor" href="#gzip-\u538B\u7F29" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code>    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5F00\u542Fgzip \u538B\u7F29</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="source-map-\u65B9\u4FBF\u8C03\u8BD5" tabindex="-1">source-map \u65B9\u4FBF\u8C03\u8BD5 <a class="header-anchor" href="#source-map-\u65B9\u4FBF\u8C03\u8BD5" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;eval-source-map&#39;</span><span class="token punctuation">,</span> 
    <span class="token comment">//\u7531\u4E8E\u4EE3\u7801\u4F1A\u7ECF\u8FC7\u538B\u7F29\u7B49\u64CD\u4F5C \u6240\u4EE5\u9700\u8981source-map \u6620\u5C04</span>
    <span class="token comment">// \u6B64\u6A21\u5F0F\u4E3A\u8C03\u8BD5\u6700\u4F18\u6A21\u5F0F</span>
</code></pre></div><h3 id="oneof-loader-\u52A0\u901F-\u53CA" tabindex="-1">oneOf loader \u52A0\u901F \u53CA <a class="header-anchor" href="#oneof-loader-\u52A0\u901F-\u53CA" aria-hidden="true">#</a></h3><h3 id="loader\u6267\u884C\u7F13\u5B58-\u7B2C\u4E8C\u6B21loader-\u4F1A\u7F13\u5B58" tabindex="-1">loader\u6267\u884C\u7F13\u5B58 \u7B2C\u4E8C\u6B21loader \u4F1A\u7F13\u5B58 <a class="header-anchor" href="#loader\u6267\u884C\u7F13\u5B58-\u7B2C\u4E8C\u6B21loader-\u4F1A\u7F13\u5B58" aria-hidden="true">#</a></h3><ol><li><p>\u6709\u4E9Bloader \u53EA\u9700\u8981\u6267\u884C\u4E00\u6B21\u5C31\u884C \u65E0\u9700\u6267\u884C\u591A\u6B21</p></li><li><p>js\u7684loader \u6BD4\u5982\u6709 eslint \u548C babel\u65F6 \u9700\u8981\u6267\u884C\u591A\u6B21loader</p></li></ol><div class="language-javascript"><pre><code>  <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.pug$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pug-loader&quot;</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">[</span>
                                <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                        <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span>
                                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                        <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                                        <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;50&#39;</span>
                                    <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//\u5F00\u542Fbabel \u7F13\u5B58 \u7B2C\u4E8C\u6B21\u6784\u5EFA\u65F6\u4F1A\u8BFB\u53D6\u4E4B\u524D\u7684babel\u7F13\u5B58</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="\u6784\u5EFA\u5C42\u9762\u7684\u6784\u5EFA\u4F18\u5316" tabindex="-1">\u6784\u5EFA\u5C42\u9762\u7684\u6784\u5EFA\u4F18\u5316 <a class="header-anchor" href="#\u6784\u5EFA\u5C42\u9762\u7684\u6784\u5EFA\u4F18\u5316" aria-hidden="true">#</a></h2><h3 id="\u79BB\u7EBF\u7F13\u5B58-pwa-serviceworker" tabindex="-1">\u79BB\u7EBF\u7F13\u5B58 PWA serviceworker <a class="header-anchor" href="#\u79BB\u7EBF\u7F13\u5B58-pwa-serviceworker" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">const</span> WorkboxWebpackPlugin<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;workbox-webpack-plugin&#39;</span><span class="token punctuation">)</span>

    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">WorkboxWebpackPlugin<span class="token punctuation">.</span>GenerateSW</span><span class="token punctuation">(</span><span class="token punctuation">{</span>   <span class="token comment">//PWA</span>
            <span class="token literal-property property">clientsClaim</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">skipWaiting</span><span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><div class="language-javascript"><pre><code><span class="token comment">//index.js \u4E2D\u7684\u4EE3\u7801</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&#39;serviceWorker&#39;</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span><span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        navigator<span class="token punctuation">.</span>serviceWorkerW
        <span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;/service-worker.js&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;service-worker\u6CE8\u518C\u6210\u529F\u4E86&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;service-worker\u6CE8\u518C\u5931\u8D25\u4E86&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6784\u5EFA\u4EE3\u7801js\u5206\u5272-\u53CA-css\u5206\u5272" tabindex="-1">\u6784\u5EFA\u4EE3\u7801JS\u5206\u5272 \u53CA CSS\u5206\u5272 <a class="header-anchor" href="#\u6784\u5EFA\u4EE3\u7801js\u5206\u5272-\u53CA-css\u5206\u5272" aria-hidden="true">#</a></h3><h4 id="\u4EE3\u7801\u4F1A\u96C6\u4E2D\u5728-js\u4E2D-\u5BFC\u81F4js\u8FC7\u5927\u5F15\u8D77\u9875\u9762\u963B\u585E" tabindex="-1">\u4EE3\u7801\u4F1A\u96C6\u4E2D\u5728 js\u4E2D \u5BFC\u81F4js\u8FC7\u5927\u5F15\u8D77\u9875\u9762\u963B\u585E <a class="header-anchor" href="#\u4EE3\u7801\u4F1A\u96C6\u4E2D\u5728-js\u4E2D-\u5BFC\u81F4js\u8FC7\u5927\u5F15\u8D77\u9875\u9762\u963B\u585E" aria-hidden="true">#</a></h4><div class="language-javascript"><pre><code><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> OptimizeCSSAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;optimize-css-assets-webpack-plugin&quot;</span><span class="token punctuation">)</span>


    <span class="token comment">//\u53EF\u4EE5\u5C06 node_modules \u4E2D\u4EE3\u7801\u5355\u72EC\u6253\u5305\u4E00\u4E2Achunk</span>
    <span class="token comment">//\u81EA\u52A8\u5206\u6790\u591A\u5165\u53E3 chunk \u4E2D,\u6709\u6CA1\u6709\u516C\u5171\u7684\u6587\u4EF6.\u5982\u679C\u6709\u4F1A\u6253\u5305\u6210\u5355\u72EC\u4E00\u4E2Achunk</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    
     <span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token comment">// {</span>
                        <span class="token comment">//     loader:&#39;thread-loader&#39;,</span>
                        <span class="token comment">//     options:{</span>
                        <span class="token comment">//         workers: 2   //\u8FDB\u7A0B2\u4E2A</span>
                        <span class="token comment">//     }</span>
                        <span class="token comment">// },</span>
                        <span class="token punctuation">{</span>
                            <span class="token comment">// loader: &#39;style-loader&#39;, //\u521B\u5EFAstyle \u6807\u7B7E,\u5C06js\u4E2D\u7684\u6837\u5F0F\u8D44\u6E90\u63D2\u5165\u8FDB\u884C,\u6DFB\u52A0\u5230head\u4E2D\u751F\u6548</span>
                            <span class="token comment">//\u8FD9\u4E2A loader \u53D6\u4EE3style-loader &gt;\u4F5C\u7528:\u63D0\u53D6js\u4E2D\u7684css \u6210\u5355\u72EC\u6587\u4EF6</span>
                            <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u5C06css\u6587\u4EF6\u7F16\u7A0Bcommonjs\u6A21\u5757\u52A0\u8F7Djs\u4E2D\uFF0C\u91CC\u9762\u5185\u5BB9\u662F\u6837\u5F0F\u5B57\u7B26\u4E32</span>
                            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>

                        <span class="token comment">/*
                        css \u517C\u5BB9\u6027\u5904\u7406: postcss--&gt; postcss-loader postcss-preset-env
                        \u5E2E postcss \u627E\u5230package.json \u4E2Dbrowserslist \u91CC\u9762\u7684\u914D\u7F6E,\u901A\u8FC7\u914D\u7F6E\u52A0\u8F7D\u6307\u5B9A\u7684css\u517C\u5BB9\u6027\u6837\u5F0F
                        */</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">ident</span><span class="token operator">:</span> <span class="token string">&#39;postcss&#39;</span><span class="token punctuation">,</span>
                                <span class="token function-variable function">plugins</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                                    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-preset-env&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><blockquote><p>\u4EE3\u7801\u4E2D \u9488\u5BF9postcss \u8FDB\u884C\u4E86\u4F18\u5316 \u65E0\u9700\u5728\u5199 .posscssrc \u6587\u4EF6</p><p>package-json \u4E2D postcss \u4F18\u5316\u5982\u4E0B</p></blockquote><div class="language-json"><pre><code>  <span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;development&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;last 1 chrome version&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;last 1 firefox version&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;last 1 safari version&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;production&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&gt; 1%&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;not dead&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;not op_mini all&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u6253\u5305\u65F6\u79FB\u9664\u7A7A\u683C\u6CE8\u91CA" tabindex="-1">\u6253\u5305\u65F6\u79FB\u9664\u7A7A\u683C\u6CE8\u91CA <a class="header-anchor" href="#\u6253\u5305\u65F6\u79FB\u9664\u7A7A\u683C\u6CE8\u91CA" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code>        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">//\u590D\u5236 &#39;./src/index.html&#39; \u6587\u4EF6\uFF0C\u5E76\u81EA\u52A8\u5F15\u5165\u6253\u5305\u8F93\u51FA\u7684\u6240\u6709\u8D44\u6E90(JS/CSS)</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.pug&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//\u79FB\u9664\u7A7A\u683C</span>
                <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token comment">//\u79FB\u9664\u6CE8\u91CA</span>
                <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u9759\u6001\u8D44\u6E90\u6784\u5EFA\u7F13\u5B58\u53CA-devtools" tabindex="-1">\u9759\u6001\u8D44\u6E90\u6784\u5EFA\u7F13\u5B58\u53CA devtools <a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90\u6784\u5EFA\u7F13\u5B58\u53CA-devtools" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code>    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//\u51FA\u53E3</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].bundle.[contenthash:10].js&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;nosources-source-map&#39;</span><span class="token punctuation">,</span>
</code></pre></div><blockquote><p>devtool: &#39;nosources-source-map&#39;, \u4FDD\u62A4\u6E90\u7801 \u65B9\u4FBF\u6784\u5EFA</p><p>contenthash \u6253\u5305\u9759\u6001\u8D44\u6E90\u7F13\u5B58 \u6CA1\u6709\u6539\u52A8\u8FC7\u7684\u4EE3\u7801\u6709\u7F13\u5B58 \u7B2C\u4E8C\u6B21\u6784\u5EFA\u66F4\u5FEB</p></blockquote><h3 id="tree-shaking" tabindex="-1">tree shaking <a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a></h3><blockquote><p><em>tree shaking:\u53BB\u9664\u65E0\u7528\u4EE3\u7801</em></p><p><em>\u524D\u63D0: 1.\u5FC5\u987B\u4F7F\u7528 ES6 \u6A21\u5757\u5316 2.\u5F00\u542Fproduction \u73AF\u5883</em></p><p><em>\u4F5C\u7528: \u51CF\u5C11\u4EE3\u7801\u4F53\u79EF</em></p><p><em>\u5728package.json \u4E2D\u914D\u7F6E</em></p><p><em>&quot;SideEffects&quot;:false \u6240\u6709\u4EE3\u7801\u90FD\u6CA1\u6709\u526F\u4F5C\u7528 (\u90FD\u53EF\u4EE5\u8FDB\u884Ctree shaking)</em></p><p><em>\u95EE\u9898: \u53EF\u80FD\u4F1A\u628A css/@babel/ polyfill (\u526F\u4F5C\u7528\u6587\u4EF6\u5E72\u6389)</em></p><p>&quot;sideEffects&quot;:[&quot;*.css&quot;]*</p></blockquote><div class="language-javascript"><pre><code>  <span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;*.css&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u591A\u8FDB\u7A0B\u6253\u5305-happypack" tabindex="-1">\u591A\u8FDB\u7A0B\u6253\u5305 HappyPack <a class="header-anchor" href="#\u591A\u8FDB\u7A0B\u6253\u5305-happypack" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code> <span class="token keyword">const</span> HappyPack <span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;happypack&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//\u521B\u5EFA\u7EBF\u7A0B\u6C60  \u6839\u636Ecpu\u6570\u91CF\u521B\u5EFA\u8FDB\u7A0B</span>
<span class="token keyword">const</span> happyThreadPool<span class="token operator">=</span>HappyPack<span class="token punctuation">.</span><span class="token function">ThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">size</span><span class="token operator">:</span>OscillatorNode<span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">HappyPack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&#39;jsx&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">threads</span><span class="token operator">:</span>happyThreadPool<span class="token punctuation">,</span>
    <span class="token comment">//url-loader file-loader \u90FD\u4E0D\u652F\u6301happyThreadPool</span>
    <span class="token literal-property property">loaders</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="webpack-\u6253\u5305\u6E90\u7801\u89E3\u6790" tabindex="-1">webpack \u6253\u5305\u6E90\u7801\u89E3\u6790 <a class="header-anchor" href="#webpack-\u6253\u5305\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a></h2><h3 id="\u5927\u4F53\u7ED3\u6784" tabindex="-1">\u5927\u4F53\u7ED3\u6784: <a class="header-anchor" href="#\u5927\u4F53\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">modules</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">var</span> installedModules<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">function</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token comment">/*code*/</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//entry file</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">/* modules array */</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u6838\u5FC3\u65B9\u6CD5" tabindex="-1">\u6838\u5FC3\u65B9\u6CD5: <a class="header-anchor" href="#\u6838\u5FC3\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u53BB\u4EE5\u52A0\u8F7D\u6A21\u5757\u4E2D\u67E5\u627E\u8FD9\u4E2Aid, \u5982\u679C\u8FD9\u4E2A\u6A21\u5757\u786E\u5B9E\u5DF2\u7ECF\u88AB\u52A0\u8F7D\u8FC7,\u4E3A\u4E86\u8282\u7701\u65F6\u95F4\u5C31\u4E0D\u505A\u4E8C\u6B21\u52A0\u8F7D\u4E86,\u76F4\u63A5\u628A\u7ED3\u679C\u8FD4\u56DE\u51FA\u6765</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">.</span>exports
    <span class="token punctuation">}</span>
    <span class="token comment">//\u5982\u679C\u8FD9\u4E2A\u6A21\u5757\u6CA1\u6709\u52A0\u8F7D,\u5219\u6DFB\u52A0</span>
    <span class="token keyword">var</span> module<span class="token operator">=</span>installedModules<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token literal-property property">i</span><span class="token operator">:</span>moduleId<span class="token punctuation">,</span>
        <span class="token literal-property property">l</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exports</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6838\u5FC3\u6253\u5305\u539F\u7406" tabindex="-1">\u6838\u5FC3\u6253\u5305\u539F\u7406 <a class="header-anchor" href="#\u6838\u5FC3\u6253\u5305\u539F\u7406" aria-hidden="true">#</a></h3><ol><li>\u8BFB\u53D6\u5165\u53E3\u6587\u4EF6\u91CC\u9762\u7684\u5185\u5BB9</li></ol><div class="language-javascript"><pre><code><span class="token keyword">const</span> fs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getModuleInfo</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> body<span class="token operator">=</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">getModuleInfo</span><span class="token punctuation">(</span><span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">)</span>
</code></pre></div><ol start="2"><li>\u5206\u6790\u5165\u53E3\u6587\u4EF6,\u9012\u5F52\u7684\u53BB\u8BFB\u53D6\u6A21\u5757\u6240\u4F9D\u8D56\u7684\u6587\u4EF6\u5185\u5BB9,\u751F\u6210AST\u8BED\u6CD5\u6811</li></ol><div class="language-javascript"><pre><code><span class="token comment">//\u5206\u6790\u6A21\u5757\u5185\u5BB9  \u5B89\u88C5@babel/parser \u5305(\u8F6CAST)</span>
<span class="token keyword">const</span> fs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parser<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">)</span>  
<span class="token keyword">const</span> <span class="token function-variable function">getModuleInfo</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> body<span class="token operator">=</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> ast<span class="token operator">=</span>parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span><span class="token string">&#39;module&#39;</span>  <span class="token comment">//\u8868\u793A\u8981\u89E3\u6790\u7684\u662Fes6 \u6A21\u5757</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">getModuleInfo</span><span class="token punctuation">(</span><span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C</p><div class="language-shell"><pre><code>Node <span class="token punctuation">{</span>
  type: <span class="token string">&#39;File&#39;</span>,
  start: <span class="token number">0</span>,
  end: <span class="token number">148</span>,
  loc: SourceLocation <span class="token punctuation">{</span>
    start: Position <span class="token punctuation">{</span> line: <span class="token number">1</span>, column: <span class="token number">0</span> <span class="token punctuation">}</span>,
    end: Position <span class="token punctuation">{</span> line: <span class="token number">10</span>, column: <span class="token number">21</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  errors: <span class="token punctuation">[</span><span class="token punctuation">]</span>,
  program: Node <span class="token punctuation">{</span>
    type: <span class="token string">&#39;Program&#39;</span>,
    start: <span class="token number">0</span>,
    end: <span class="token number">148</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    sourceType: <span class="token string">&#39;module&#39;</span>,
    interpreter: null,
    body: <span class="token punctuation">[</span> <span class="token punctuation">[</span>Node<span class="token punctuation">]</span>, <span class="token punctuation">[</span>Node<span class="token punctuation">]</span>, <span class="token punctuation">[</span>Node<span class="token punctuation">]</span>, <span class="token punctuation">[</span>Node<span class="token punctuation">]</span>, <span class="token punctuation">[</span>Node<span class="token punctuation">]</span>, <span class="token punctuation">[</span>Node<span class="token punctuation">]</span> <span class="token punctuation">]</span>,
    directives: <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>,
  comments: <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>ast.program.body \u8F93\u51FA\u7ED3\u679C</p><div class="language-shell"><pre><code>// \u901A\u8FC7 ast \u8BED\u6CD5\u6811\u62FF\u5230\u6240\u6709\u6A21\u5757\u4F9D\u8D56
<span class="token punctuation">[</span>
  Node <span class="token punctuation">{</span>
    type: <span class="token string">&#39;ImportDeclaration&#39;</span>,
    start: <span class="token number">0</span>,
    end: <span class="token number">23</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    specifiers: <span class="token punctuation">[</span> <span class="token punctuation">[</span>Node<span class="token punctuation">]</span> <span class="token punctuation">]</span>,
    source: Node <span class="token punctuation">{</span>
      type: <span class="token string">&#39;StringLiteral&#39;</span>,
      start: <span class="token number">16</span>,
      end: <span class="token number">23</span>,
      loc: <span class="token punctuation">[</span>SourceLocation<span class="token punctuation">]</span>,
      extra: <span class="token punctuation">[</span>Object<span class="token punctuation">]</span>,
      value: <span class="token string">&#39;./add&#39;</span>         //\u8FD9\u4E2A\u5C31\u662F\u4F9D\u8D56
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  Node <span class="token punctuation">{</span>
    type: <span class="token string">&#39;ImportDeclaration&#39;</span>,
    start: <span class="token number">27</span>,
    end: <span class="token number">54</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    specifiers: <span class="token punctuation">[</span> <span class="token punctuation">[</span>Node<span class="token punctuation">]</span> <span class="token punctuation">]</span>,
    source: Node <span class="token punctuation">{</span>
      type: <span class="token string">&#39;StringLiteral&#39;</span>,
      start: <span class="token number">45</span>,
      end: <span class="token number">54</span>,
      loc: <span class="token punctuation">[</span>SourceLocation<span class="token punctuation">]</span>,
      extra: <span class="token punctuation">[</span>Object<span class="token punctuation">]</span>,
      value: <span class="token string">&#39;./minus&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  Node <span class="token punctuation">{</span>
    type: <span class="token string">&#39;VariableDeclaration&#39;</span>,
    start: <span class="token number">60</span>,
    end: <span class="token number">78</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    declarations: <span class="token punctuation">[</span> <span class="token punctuation">[</span>Node<span class="token punctuation">]</span> <span class="token punctuation">]</span>,
    kind: <span class="token string">&#39;const&#39;</span>
  <span class="token punctuation">}</span>,
  Node <span class="token punctuation">{</span>
    type: <span class="token string">&#39;VariableDeclaration&#39;</span>,
    start: <span class="token number">80</span>,
    end: <span class="token number">105</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    declarations: <span class="token punctuation">[</span> <span class="token punctuation">[</span>Node<span class="token punctuation">]</span> <span class="token punctuation">]</span>,
    kind: <span class="token string">&#39;const&#39;</span>
  <span class="token punctuation">}</span>,
  Node <span class="token punctuation">{</span>
    type: <span class="token string">&#39;ExpressionStatement&#39;</span>,
    start: <span class="token number">109</span>,
    end: <span class="token number">125</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    expression: Node <span class="token punctuation">{</span>
      type: <span class="token string">&#39;CallExpression&#39;</span>,
      start: <span class="token number">109</span>,
      end: <span class="token number">125</span>,
      loc: <span class="token punctuation">[</span>SourceLocation<span class="token punctuation">]</span>,
      callee: <span class="token punctuation">[</span>Node<span class="token punctuation">]</span>,
      arguments: <span class="token punctuation">[</span>Array<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  Node <span class="token punctuation">{</span>
    type: <span class="token string">&#39;ExpressionStatement&#39;</span>,
    start: <span class="token number">127</span>,
    end: <span class="token number">148</span>,
    loc: SourceLocation <span class="token punctuation">{</span> start: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span>, end: <span class="token punctuation">[</span>Position<span class="token punctuation">]</span> <span class="token punctuation">}</span>,
    expression: Node <span class="token punctuation">{</span>
      type: <span class="token string">&#39;CallExpression&#39;</span>,
      start: <span class="token number">127</span>,
      end: <span class="token number">148</span>,
      loc: <span class="token punctuation">[</span>SourceLocation<span class="token punctuation">]</span>,
      callee: <span class="token punctuation">[</span>Node<span class="token punctuation">]</span>,
      arguments: <span class="token punctuation">[</span>Array<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u901A\u8FC7 @babel/traverse \u904D\u5386ast \u62FF\u5230\u6240\u6709\u4F9D\u8D56</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> fs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parser<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> traverse<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default    
<span class="token keyword">const</span> <span class="token function-variable function">getModuleInfo</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> body<span class="token operator">=</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> ast<span class="token operator">=</span>parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span><span class="token string">&#39;module&#39;</span>  <span class="token comment">//\u8868\u793A\u8981\u89E3\u6790\u7684\u662Fes6 \u6A21\u5757</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">const</span> deps<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span><span class="token punctuation">{</span>         <span class="token comment">//\u904D\u5386ast \u8BED\u6CD5\u6811 \u5E76\u62FF\u5230\u6240\u6709\u4F9D\u8D56\u7684\u7EDD\u5BF9\u8DEF\u5F84</span>
        <span class="token function">ImportDeclaration</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>node<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> dirname<span class="token operator">=</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
            <span class="token keyword">const</span> abspath<span class="token operator">=</span><span class="token string">&quot;./&quot;</span><span class="token operator">+</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
            deps<span class="token punctuation">[</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token operator">=</span>abspath
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>deps<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">getModuleInfo</span><span class="token punctuation">(</span><span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C</p><div class="language-shell"><pre><code><span class="token punctuation">{</span> <span class="token string">&#39;./add&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;./add&#39;</span>, <span class="token string">&#39;./minus&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;./minus&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>\u901A\u8FC7 @babel/core @babel/preset-env \u5C06es6 \u8F6C\u4E3Aes5</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> fs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parser<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> traverse<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default    
<span class="token keyword">const</span> babel<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/core&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getModuleInfo</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> body<span class="token operator">=</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> ast<span class="token operator">=</span>parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span><span class="token string">&#39;module&#39;</span>  <span class="token comment">//\u8868\u793A\u8981\u89E3\u6790\u7684\u662Fes6 \u6A21\u5757</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">const</span> deps<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span><span class="token punctuation">{</span>         <span class="token comment">//\u904D\u5386ast \u8BED\u6CD5\u6811 \u5E76\u62FF\u5230\u6240\u6709\u4F9D\u8D56\u7684\u7EDD\u5BF9\u8DEF\u5F84</span>
        <span class="token function">ImportDeclaration</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>node<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> dirname<span class="token operator">=</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
            <span class="token keyword">const</span> abspath<span class="token operator">=</span><span class="token string">&quot;./&quot;</span><span class="token operator">+</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
            deps<span class="token punctuation">[</span>node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token operator">=</span>abspath
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span>code<span class="token punctuation">}</span><span class="token operator">=</span>babel<span class="token punctuation">.</span><span class="token function">transformFromAst</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">{</span>  <span class="token comment">//ES6 \u8F6CES5 \u7684\u4EE3\u7801</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> modelInfo<span class="token operator">=</span><span class="token punctuation">{</span>file<span class="token punctuation">,</span>deps<span class="token punctuation">,</span>code<span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>modelInfo<span class="token punctuation">)</span>
    <span class="token keyword">return</span> modelInfo
<span class="token punctuation">}</span>

<span class="token function">getModuleInfo</span><span class="token punctuation">(</span><span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C</p><div class="language-shell"><pre><code><span class="token punctuation">{</span>
  file: <span class="token string">&#39;./index.js&#39;</span>,
  deps: <span class="token punctuation">{</span> <span class="token string">&#39;./add&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;./add&#39;</span>, <span class="token string">&#39;./minus&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;./minus&#39;</span> <span class="token punctuation">}</span>,
  code: <span class="token string">&#39;&quot;use strict&quot;;\\n&#39;</span> +
    <span class="token string">&#39;\\n&#39;</span> +
    <span class="token string">&#39;var _add = _interopRequireDefault(require(&quot;./add&quot;));\\n&#39;</span> +
    <span class="token string">&#39;\\n&#39;</span> +
    <span class="token string">&#39;var _minus = _interopRequireDefault(require(&quot;./minus&quot;));\\n&#39;</span> +
    <span class="token string">&#39;\\n&#39;</span> +
    <span class="token string">&#39;function _interopRequireDefault(obj) { return obj &amp;&amp; obj.__esModule ? obj : { &quot;default&quot;: obj }; }\\n&#39;</span> +
    <span class="token string">&#39;\\n&#39;</span> +
    <span class="token string">&#39;var sum = (0, _add[&quot;default&quot;])(1, 2);\\n&#39;</span> +
    <span class="token string">&#39;var division = (0, _minus[&quot;default&quot;])(2, 1);\\n&#39;</span> +
    <span class="token string">&#39;console.log(sum);\\n&#39;</span> +
    <span class="token string">&#39;console.log(division);&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,53),e=[o];function c(l,u,r,i,k,d){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{m as __pageData,y as default};
