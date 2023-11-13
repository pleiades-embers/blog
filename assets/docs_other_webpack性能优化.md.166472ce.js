import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.82dd189e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/other/webpack性能优化.md","filePath":"docs/other/webpack性能优化.md"}'),p={name:"docs/other/webpack性能优化.md"},o=l(`<h2 id="开发层面的构建优化" tabindex="-1">开发层面的构建优化 <a class="header-anchor" href="#开发层面的构建优化" aria-label="Permalink to &quot;开发层面的构建优化&quot;">​</a></h2><h3 id="html-hmr" tabindex="-1">html HMR <a class="header-anchor" href="#html-hmr" aria-label="Permalink to &quot;html  HMR&quot;">​</a></h3><ul><li>专题页的 html 没有 HMR 功能</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">entry</span><span style="color:#E1E4E8;">: { </span><span style="color:#6A737D;">//入口</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//html 文件;:默认不能使用 HMR 功能，同时会导致问题: html文件不能热更新了~</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 解决: 修改entry 入口 ,将html文件引入</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;./src/index.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./src/index.pug&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">entry</span><span style="color:#24292E;">: { </span><span style="color:#6A737D;">//入口</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//html 文件;:默认不能使用 HMR 功能，同时会导致问题: html文件不能热更新了~</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 解决: 修改entry 入口 ,将html文件引入</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;./src/index.js&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./src/index.pug&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span></code></pre></div><h3 id="gzip-压缩" tabindex="-1">gzip 压缩 <a class="header-anchor" href="#gzip-压缩" aria-label="Permalink to &quot;gzip 压缩&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">devServer</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">hot</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">host</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">port</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">compress</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//开启gzip 压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">devServer</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">hot</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">host</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;localhost&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">port</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">compress</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//开启gzip 压缩</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span></code></pre></div><h3 id="source-map-方便调试" tabindex="-1">source-map 方便调试 <a class="header-anchor" href="#source-map-方便调试" aria-label="Permalink to &quot;source-map 方便调试&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">devtool</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;eval-source-map&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//由于代码会经过压缩等操作 所以需要source-map 映射</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 此模式为调试最优模式</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">devtool</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;eval-source-map&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//由于代码会经过压缩等操作 所以需要source-map 映射</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 此模式为调试最优模式</span></span></code></pre></div><h3 id="oneof-loader-加速-及" tabindex="-1">oneOf loader 加速 及 <a class="header-anchor" href="#oneof-loader-加速-及" aria-label="Permalink to &quot;oneOf   loader 加速   及&quot;">​</a></h3><h3 id="loader执行缓存-第二次loader-会缓存" tabindex="-1">loader执行缓存 第二次loader 会缓存 <a class="header-anchor" href="#loader执行缓存-第二次loader-会缓存" aria-label="Permalink to &quot;loader执行缓存  第二次loader 会缓存&quot;">​</a></h3><ol><li><p>有些loader 只需要执行一次就行 无需执行多次</p></li><li><p>js的loader 比如有 eslint 和 babel时 需要执行多次loader</p></li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">oneOf</span><span style="color:#E1E4E8;">: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">pug</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    exclude:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    use: [</span><span style="color:#9ECBFF;">&quot;pug-loader&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">                }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    exclude:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    loader: </span><span style="color:#9ECBFF;">&quot;babel-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        presets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                            [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#9ECBFF;">&#39;@babel/preset-env&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    useBuiltIns: </span><span style="color:#9ECBFF;">&#39;usage&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    corejs: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        version: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    targets: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        chrome: </span><span style="color:#9ECBFF;">&#39;60&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        firefox: </span><span style="color:#9ECBFF;">&#39;50&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        cacheDirectory: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//开启babel 缓存 第二次构建时会读取之前的babel缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">oneOf</span><span style="color:#24292E;">: [{</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">pug</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    exclude:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    use: [</span><span style="color:#032F62;">&quot;pug-loader&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">                }, {</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    exclude:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    loader: </span><span style="color:#032F62;">&quot;babel-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    options: {</span></span>
<span class="line"><span style="color:#24292E;">                        presets: [</span></span>
<span class="line"><span style="color:#24292E;">                            [</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#032F62;">&#39;@babel/preset-env&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                {</span></span>
<span class="line"><span style="color:#24292E;">                                    useBuiltIns: </span><span style="color:#032F62;">&#39;usage&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                    corejs: {</span></span>
<span class="line"><span style="color:#24292E;">                                        version: </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                    targets: {</span></span>
<span class="line"><span style="color:#24292E;">                                        chrome: </span><span style="color:#032F62;">&#39;60&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        firefox: </span><span style="color:#032F62;">&#39;50&#39;</span></span>
<span class="line"><span style="color:#24292E;">                                    }</span></span>
<span class="line"><span style="color:#24292E;">                                }</span></span>
<span class="line"><span style="color:#24292E;">                            ]</span></span>
<span class="line"><span style="color:#24292E;">                        ],</span></span>
<span class="line"><span style="color:#24292E;">                        cacheDirectory: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//开启babel 缓存 第二次构建时会读取之前的babel缓存</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span></code></pre></div><h2 id="构建层面的构建优化" tabindex="-1">构建层面的构建优化 <a class="header-anchor" href="#构建层面的构建优化" aria-label="Permalink to &quot;构建层面的构建优化&quot;">​</a></h2><h3 id="离线缓存-pwa-serviceworker" tabindex="-1">离线缓存 PWA serviceworker <a class="header-anchor" href="#离线缓存-pwa-serviceworker" aria-label="Permalink to &quot;离线缓存 PWA   serviceworker&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">WorkboxWebpackPlugin</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;workbox-webpack-plugin&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> WorkboxWebpackPlugin.</span><span style="color:#B392F0;">GenerateSW</span><span style="color:#E1E4E8;">({   </span><span style="color:#6A737D;">//PWA</span></span>
<span class="line"><span style="color:#E1E4E8;">            clientsClaim:</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            skipWaiting:</span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">WorkboxWebpackPlugin</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;workbox-webpack-plugin&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> WorkboxWebpackPlugin.</span><span style="color:#6F42C1;">GenerateSW</span><span style="color:#24292E;">({   </span><span style="color:#6A737D;">//PWA</span></span>
<span class="line"><span style="color:#24292E;">            clientsClaim:</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            skipWaiting:</span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//index.js 中的代码</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;serviceWorker&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> navigator){</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;load&#39;</span><span style="color:#E1E4E8;">,()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        navigator.serviceWorkerW</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">register</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/service-worker.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;service-worker注册成功了&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;service-worker注册失败了&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//index.js 中的代码</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;serviceWorker&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> navigator){</span></span>
<span class="line"><span style="color:#24292E;">    window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;load&#39;</span><span style="color:#24292E;">,()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        navigator.serviceWorkerW</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">register</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/service-worker.js&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;service-worker注册成功了&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;service-worker注册失败了&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="构建代码js分割-及-css分割" tabindex="-1">构建代码JS分割 及 CSS分割 <a class="header-anchor" href="#构建代码js分割-及-css分割" aria-label="Permalink to &quot;构建代码JS分割  及 CSS分割&quot;">​</a></h3><h4 id="代码会集中在-js中-导致js过大引起页面阻塞" tabindex="-1">代码会集中在 js中 导致js过大引起页面阻塞 <a class="header-anchor" href="#代码会集中在-js中-导致js过大引起页面阻塞" aria-label="Permalink to &quot;代码会集中在 js中 导致js过大引起页面阻塞&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MiniCssExtractPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">OptimizeCSSAssetsPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;optimize-css-assets-webpack-plugin&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//可以将 node_modules 中代码单独打包一个chunk</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//自动分析多入口 chunk 中,有没有公共的文件.如果有会打包成单独一个chunk</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">optimization</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">splitChunks</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">chunks</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;all&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">     {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">scss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">exclude</span><span style="color:#E1E4E8;">:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">//     loader:&#39;thread-loader&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">//     options:{</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">//         workers: 2   //进程2个</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#6A737D;">// loader: &#39;style-loader&#39;, //创建style 标签,将js中的样式资源插入进行,添加到head中生效</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#6A737D;">//这个 loader 取代style-loader &gt;作用:提取js中的css 成单独文件</span></span>
<span class="line"><span style="color:#E1E4E8;">                            loader: MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            loader: </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//将css文件编程commonjs模块加载js中，里面内容是样式字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">                            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#9ECBFF;">&quot;sourceMap&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">                        css 兼容性处理: postcss--&gt; postcss-loader postcss-preset-env</span></span>
<span class="line"><span style="color:#6A737D;">                        帮 postcss 找到package.json 中browserslist 里面的配置,通过配置加载指定的css兼容性样式</span></span>
<span class="line"><span style="color:#6A737D;">                        */</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            loader: </span><span style="color:#9ECBFF;">&#39;postcss-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                ident: </span><span style="color:#9ECBFF;">&#39;postcss&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;postcss-preset-env&#39;</span><span style="color:#E1E4E8;">)()</span></span>
<span class="line"><span style="color:#E1E4E8;">                                }</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            loader: </span><span style="color:#9ECBFF;">&#39;sass-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                sourceMap: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }</span></span>
<span class="line"><span style="color:#E1E4E8;">                        }</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">exclude</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;node_modules&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MiniCssExtractPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">OptimizeCSSAssetsPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;optimize-css-assets-webpack-plugin&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//可以将 node_modules 中代码单独打包一个chunk</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//自动分析多入口 chunk 中,有没有公共的文件.如果有会打包成单独一个chunk</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">optimization</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">splitChunks</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">chunks</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;all&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">     {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">scss</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">exclude</span><span style="color:#24292E;">:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">//     loader:&#39;thread-loader&#39;,</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">//     options:{</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">//         workers: 2   //进程2个</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">//     }</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6A737D;">// loader: &#39;style-loader&#39;, //创建style 标签,将js中的样式资源插入进行,添加到head中生效</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6A737D;">//这个 loader 取代style-loader &gt;作用:提取js中的css 成单独文件</span></span>
<span class="line"><span style="color:#24292E;">                            loader: MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#24292E;">                        }, {</span></span>
<span class="line"><span style="color:#24292E;">                            loader: </span><span style="color:#032F62;">&#39;css-loader&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//将css文件编程commonjs模块加载js中，里面内容是样式字符串</span></span>
<span class="line"><span style="color:#24292E;">                            options: {</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#032F62;">&quot;sourceMap&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">                            }</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">                        css 兼容性处理: postcss--&gt; postcss-loader postcss-preset-env</span></span>
<span class="line"><span style="color:#6A737D;">                        帮 postcss 找到package.json 中browserslist 里面的配置,通过配置加载指定的css兼容性样式</span></span>
<span class="line"><span style="color:#6A737D;">                        */</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            loader: </span><span style="color:#032F62;">&#39;postcss-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            options: {</span></span>
<span class="line"><span style="color:#24292E;">                                ident: </span><span style="color:#032F62;">&#39;postcss&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;postcss-preset-env&#39;</span><span style="color:#24292E;">)()</span></span>
<span class="line"><span style="color:#24292E;">                                }</span></span>
<span class="line"><span style="color:#24292E;">                            }</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            loader: </span><span style="color:#032F62;">&#39;sass-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            options: {</span></span>
<span class="line"><span style="color:#24292E;">                                sourceMap: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            }</span></span>
<span class="line"><span style="color:#24292E;">                        }</span></span>
<span class="line"><span style="color:#24292E;">                    ],</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">exclude</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;node_modules&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span></code></pre></div><blockquote><p>代码中 针对postcss 进行了优化 无需在写 .posscssrc 文件</p><p>package-json 中 postcss 优化如下</p></blockquote><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;browserslist&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;development&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;last 1 chrome version&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;last 1 firefox version&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;last 1 safari version&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;production&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;&gt; 1%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;last 2 versions&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;not dead&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;not op_mini all&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;browserslist&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;development&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;last 1 chrome version&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;last 1 firefox version&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;last 1 safari version&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;production&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;&gt; 1%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;last 2 versions&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;not dead&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;not op_mini all&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span></code></pre></div><h3 id="打包时移除空格注释" tabindex="-1">打包时移除空格注释 <a class="header-anchor" href="#打包时移除空格注释" aria-label="Permalink to &quot;打包时移除空格注释&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({ </span><span style="color:#6A737D;">//复制 &#39;./src/index.html&#39; 文件，并自动引入打包输出的所有资源(JS/CSS)</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&#39;./src/index.pug&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            minify: { </span><span style="color:#6A737D;">//移除空格</span></span>
<span class="line"><span style="color:#E1E4E8;">                collapseWhitespace: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">//移除注释</span></span>
<span class="line"><span style="color:#E1E4E8;">                removeComments: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({ </span><span style="color:#6A737D;">//复制 &#39;./src/index.html&#39; 文件，并自动引入打包输出的所有资源(JS/CSS)</span></span>
<span class="line"><span style="color:#24292E;">            template: </span><span style="color:#032F62;">&#39;./src/index.pug&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            minify: { </span><span style="color:#6A737D;">//移除空格</span></span>
<span class="line"><span style="color:#24292E;">                collapseWhitespace: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">//移除注释</span></span>
<span class="line"><span style="color:#24292E;">                removeComments: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span></code></pre></div><h3 id="静态资源构建缓存及-devtools" tabindex="-1">静态资源构建缓存及 devtools <a class="header-anchor" href="#静态资源构建缓存及-devtools" aria-label="Permalink to &quot;静态资源构建缓存及 devtools&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">output</span><span style="color:#E1E4E8;">: { </span><span style="color:#6A737D;">//出口</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;../dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">filename</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;[name].bundle.[contenthash:10].js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">devtool</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;nosources-source-map&#39;</span><span style="color:#E1E4E8;">,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">output</span><span style="color:#24292E;">: { </span><span style="color:#6A737D;">//出口</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;../dist&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">filename</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;[name].bundle.[contenthash:10].js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">devtool</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;nosources-source-map&#39;</span><span style="color:#24292E;">,</span></span></code></pre></div><blockquote><p>devtool: &#39;nosources-source-map&#39;, 保护源码 方便构建</p><p>contenthash 打包静态资源缓存 没有改动过的代码有缓存 第二次构建更快</p></blockquote><h3 id="tree-shaking" tabindex="-1">tree shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;tree shaking&quot;">​</a></h3><blockquote><p><em>tree shaking:去除无用代码</em></p><p><em>前提: 1.必须使用 ES6 模块化 2.开启production 环境</em></p><p><em>作用: 减少代码体积</em></p><p><em>在package.json 中配置</em></p><p><em>&quot;SideEffects&quot;:false 所有代码都没有副作用 (都可以进行tree shaking)</em></p><p><em>问题: 可能会把 css/@babel/ polyfill (副作用文件干掉)</em></p><p>&quot;sideEffects&quot;:[&quot;*.css&quot;]*</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;sideEffects&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;*.css&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;sideEffects&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;*.css&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span></code></pre></div><h3 id="多进程打包-happypack" tabindex="-1">多进程打包 HappyPack <a class="header-anchor" href="#多进程打包-happypack" aria-label="Permalink to &quot;多进程打包 HappyPack&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">HappyPack</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;happypack&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//创建线程池  根据cpu数量创建进程</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">happyThreadPool</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">HappyPack.</span><span style="color:#B392F0;">ThreadPool</span><span style="color:#E1E4E8;">({size:OscillatorNode.</span><span style="color:#B392F0;">cpus</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HappyPack</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    id:</span><span style="color:#9ECBFF;">&#39;jsx&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    threads:happyThreadPool,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//url-loader file-loader 都不支持happyThreadPool</span></span>
<span class="line"><span style="color:#E1E4E8;">    loaders:[</span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HappyPack</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;happypack&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//创建线程池  根据cpu数量创建进程</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">happyThreadPool</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">HappyPack.</span><span style="color:#6F42C1;">ThreadPool</span><span style="color:#24292E;">({size:OscillatorNode.</span><span style="color:#6F42C1;">cpus</span><span style="color:#24292E;">().</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HappyPack</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    id:</span><span style="color:#032F62;">&#39;jsx&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    threads:happyThreadPool,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//url-loader file-loader 都不支持happyThreadPool</span></span>
<span class="line"><span style="color:#24292E;">    loaders:[</span><span style="color:#032F62;">&#39;babel-loader&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="webpack-打包源码解析" tabindex="-1">webpack 打包源码解析 <a class="header-anchor" href="#webpack-打包源码解析" aria-label="Permalink to &quot;webpack 打包源码解析&quot;">​</a></h2><h3 id="大体结构" tabindex="-1">大体结构: <a class="header-anchor" href="#大体结构" aria-label="Permalink to &quot;大体结构:&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">modules</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> installedModules</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">__webpack_require__</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleId</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    	</span><span style="color:#6A737D;">/*code*/</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">__webpack_require__</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);    </span><span style="color:#6A737D;">//entry file</span></span>
<span class="line"><span style="color:#E1E4E8;"> })({</span><span style="color:#6A737D;">/* modules array */</span><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">modules</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> installedModules</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">__webpack_require__</span><span style="color:#24292E;">(</span><span style="color:#E36209;">moduleId</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    	</span><span style="color:#6A737D;">/*code*/</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">__webpack_require__</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);    </span><span style="color:#6A737D;">//entry file</span></span>
<span class="line"><span style="color:#24292E;"> })({</span><span style="color:#6A737D;">/* modules array */</span><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="核心方法" tabindex="-1">核心方法: <a class="header-anchor" href="#核心方法" aria-label="Permalink to &quot;核心方法:&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">__webpack_require__</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">moduleId</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//去以加载模块中查找这个id, 如果这个模块确实已经被加载过,为了节省时间就不做二次加载了,直接把结果返回出来</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(installedModules[moduleId]){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> installedModules[moduleId].exports</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//如果这个模块没有加载,则添加</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> module</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">installedModules[moduleId]</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        i:moduleId,</span></span>
<span class="line"><span style="color:#E1E4E8;">        l:</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        exports:{}</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">__webpack_require__</span><span style="color:#24292E;">(</span><span style="color:#E36209;">moduleId</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//去以加载模块中查找这个id, 如果这个模块确实已经被加载过,为了节省时间就不做二次加载了,直接把结果返回出来</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(installedModules[moduleId]){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> installedModules[moduleId].exports</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//如果这个模块没有加载,则添加</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> module</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">installedModules[moduleId]</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        i:moduleId,</span></span>
<span class="line"><span style="color:#24292E;">        l:</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        exports:{}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="核心打包原理" tabindex="-1">核心打包原理 <a class="header-anchor" href="#核心打包原理" aria-label="Permalink to &quot;核心打包原理&quot;">​</a></h3><ol><li>读取入口文件里面的内容</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getModuleInfo</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">body</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(file,</span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(body)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">getModuleInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./index.js&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getModuleInfo</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(</span><span style="color:#E36209;">file</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">body</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">readFileSync</span><span style="color:#24292E;">(file,</span><span style="color:#032F62;">&#39;utf-8&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(body)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">getModuleInfo</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./index.js&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><ol start="2"><li>分析入口文件,递归的去读取模块所依赖的文件内容,生成AST语法树</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//分析模块内容  安装@babel/parser 包(转AST)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">parser</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@babel/parser&#39;</span><span style="color:#E1E4E8;">)  </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getModuleInfo</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">body</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(file,</span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ast</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(body,{</span></span>
<span class="line"><span style="color:#E1E4E8;">        sourceType:</span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//表示要解析的是es6 模块</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">getModuleInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./index.js&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//分析模块内容  安装@babel/parser 包(转AST)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">parser</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@babel/parser&#39;</span><span style="color:#24292E;">)  </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getModuleInfo</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(</span><span style="color:#E36209;">file</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">body</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">readFileSync</span><span style="color:#24292E;">(file,</span><span style="color:#032F62;">&#39;utf-8&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ast</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">parser.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(body,{</span></span>
<span class="line"><span style="color:#24292E;">        sourceType:</span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">//表示要解析的是es6 模块</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">getModuleInfo</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./index.js&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>输出结果</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Node</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;File&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">start:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  end: 148,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">loc:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">SourceLocation</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">start:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Position</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">line:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">column:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    end: Position { </span><span style="color:#B392F0;">line:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">column:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">errors:</span><span style="color:#E1E4E8;"> [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">program:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Node</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Program&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">start:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    end: 148,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">loc:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">SourceLocation</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start:</span><span style="color:#E1E4E8;"> [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">sourceType:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;module&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">interpreter:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">null,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">body:</span><span style="color:#E1E4E8;"> [ [Node], [Node], [Node], [Node], [Node], [Node] ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">directives:</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">comments:</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Node</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;File&#39;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">start:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#032F62;">,</span></span>
<span class="line"><span style="color:#24292E;">  end: 148,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">loc:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">SourceLocation</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">start:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Position</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">line:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#032F62;">,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">column:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#032F62;">},</span></span>
<span class="line"><span style="color:#24292E;">    end: Position { </span><span style="color:#6F42C1;">line:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">column:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">21</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">errors:</span><span style="color:#24292E;"> [],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">program:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Node</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Program&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">start:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#032F62;">,</span></span>
<span class="line"><span style="color:#24292E;">    end: 148,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">loc:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">SourceLocation</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start:</span><span style="color:#24292E;"> [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sourceType:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;module&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">interpreter:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">null,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">body:</span><span style="color:#24292E;"> [ [Node], [Node], [Node], [Node], [Node], [Node] ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">directives:</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">comments:</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>ast.program.body 输出结果</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">通过</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ast</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">语法树拿到所有模块依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">  Node {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;ImportDeclaration&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    start: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    end: </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    specifiers: [ [Node] ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: Node {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;StringLiteral&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      start: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      end: </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      loc: [SourceLocation],</span></span>
<span class="line"><span style="color:#E1E4E8;">      extra: [Object],</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&#39;./add&#39;</span><span style="color:#E1E4E8;">         //这个就是依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  Node {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;ImportDeclaration&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    start: </span><span style="color:#79B8FF;">27</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    end: </span><span style="color:#79B8FF;">54</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    specifiers: [ [Node] ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    source: Node {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;StringLiteral&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      start: </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      end: </span><span style="color:#79B8FF;">54</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      loc: [SourceLocation],</span></span>
<span class="line"><span style="color:#E1E4E8;">      extra: [Object],</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&#39;./minus&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  Node {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;VariableDeclaration&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    start: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    end: </span><span style="color:#79B8FF;">78</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    declarations: [ [Node] ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    kind: </span><span style="color:#9ECBFF;">&#39;const&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  Node {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;VariableDeclaration&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    start: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    end: </span><span style="color:#79B8FF;">105</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    declarations: [ [Node] ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    kind: </span><span style="color:#9ECBFF;">&#39;const&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  Node {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;ExpressionStatement&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    start: </span><span style="color:#79B8FF;">109</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    end: </span><span style="color:#79B8FF;">125</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    expression: Node {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;CallExpression&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      start: </span><span style="color:#79B8FF;">109</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      end: </span><span style="color:#79B8FF;">125</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      loc: [SourceLocation],</span></span>
<span class="line"><span style="color:#E1E4E8;">      callee: [Node],</span></span>
<span class="line"><span style="color:#E1E4E8;">      arguments: [Array]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  Node {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;ExpressionStatement&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    start: </span><span style="color:#79B8FF;">127</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    end: </span><span style="color:#79B8FF;">148</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    expression: Node {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;CallExpression&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      start: </span><span style="color:#79B8FF;">127</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      end: </span><span style="color:#79B8FF;">148</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      loc: [SourceLocation],</span></span>
<span class="line"><span style="color:#E1E4E8;">      callee: [Node],</span></span>
<span class="line"><span style="color:#E1E4E8;">      arguments: [Array]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">通过</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ast</span><span style="color:#24292E;"> </span><span style="color:#032F62;">语法树拿到所有模块依赖</span></span>
<span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">  Node {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;ImportDeclaration&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    start: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    end: </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#24292E;">    specifiers: [ [Node] ],</span></span>
<span class="line"><span style="color:#24292E;">    source: Node {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;StringLiteral&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      start: </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      end: </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      loc: [SourceLocation],</span></span>
<span class="line"><span style="color:#24292E;">      extra: [Object],</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&#39;./add&#39;</span><span style="color:#24292E;">         //这个就是依赖</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  Node {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;ImportDeclaration&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    start: </span><span style="color:#005CC5;">27</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    end: </span><span style="color:#005CC5;">54</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#24292E;">    specifiers: [ [Node] ],</span></span>
<span class="line"><span style="color:#24292E;">    source: Node {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;StringLiteral&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      start: </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      end: </span><span style="color:#005CC5;">54</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      loc: [SourceLocation],</span></span>
<span class="line"><span style="color:#24292E;">      extra: [Object],</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&#39;./minus&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  Node {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;VariableDeclaration&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    start: </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    end: </span><span style="color:#005CC5;">78</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#24292E;">    declarations: [ [Node] ],</span></span>
<span class="line"><span style="color:#24292E;">    kind: </span><span style="color:#032F62;">&#39;const&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  Node {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;VariableDeclaration&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    start: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    end: </span><span style="color:#005CC5;">105</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#24292E;">    declarations: [ [Node] ],</span></span>
<span class="line"><span style="color:#24292E;">    kind: </span><span style="color:#032F62;">&#39;const&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  Node {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;ExpressionStatement&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    start: </span><span style="color:#005CC5;">109</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    end: </span><span style="color:#005CC5;">125</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#24292E;">    expression: Node {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;CallExpression&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      start: </span><span style="color:#005CC5;">109</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      end: </span><span style="color:#005CC5;">125</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      loc: [SourceLocation],</span></span>
<span class="line"><span style="color:#24292E;">      callee: [Node],</span></span>
<span class="line"><span style="color:#24292E;">      arguments: [Array]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  Node {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;ExpressionStatement&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    start: </span><span style="color:#005CC5;">127</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    end: </span><span style="color:#005CC5;">148</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    loc: SourceLocation { start: [Position], end: [Position] },</span></span>
<span class="line"><span style="color:#24292E;">    expression: Node {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;CallExpression&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      start: </span><span style="color:#005CC5;">127</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      end: </span><span style="color:#005CC5;">148</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      loc: [SourceLocation],</span></span>
<span class="line"><span style="color:#24292E;">      callee: [Node],</span></span>
<span class="line"><span style="color:#24292E;">      arguments: [Array]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>通过 @babel/traverse 遍历ast 拿到所有依赖</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">parser</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@babel/parser&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">traverse</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@babel/traverse&#39;</span><span style="color:#E1E4E8;">).default    </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getModuleInfo</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">body</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(file,</span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ast</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(body,{</span></span>
<span class="line"><span style="color:#E1E4E8;">        sourceType:</span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//表示要解析的是es6 模块</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">deps</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(ast,{         </span><span style="color:#6A737D;">//遍历ast 语法树 并拿到所有依赖的绝对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ImportDeclaration</span><span style="color:#E1E4E8;">({</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">}){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dirname</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(file)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">abspath</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;./&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(dirname,node.source.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">            deps[node.source.value]</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">abspath</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(deps)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">getModuleInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./index.js&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">parser</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@babel/parser&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">traverse</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@babel/traverse&#39;</span><span style="color:#24292E;">).default    </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getModuleInfo</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(</span><span style="color:#E36209;">file</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">body</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">readFileSync</span><span style="color:#24292E;">(file,</span><span style="color:#032F62;">&#39;utf-8&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ast</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">parser.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(body,{</span></span>
<span class="line"><span style="color:#24292E;">        sourceType:</span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">//表示要解析的是es6 模块</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">deps</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(ast,{         </span><span style="color:#6A737D;">//遍历ast 语法树 并拿到所有依赖的绝对路径</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ImportDeclaration</span><span style="color:#24292E;">({</span><span style="color:#E36209;">node</span><span style="color:#24292E;">}){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dirname</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">dirname</span><span style="color:#24292E;">(file)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">abspath</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;./&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(dirname,node.source.value)</span></span>
<span class="line"><span style="color:#24292E;">            deps[node.source.value]</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">abspath</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(deps)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">getModuleInfo</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./index.js&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>输出结果</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{ </span><span style="color:#B392F0;">&#39;./add&#39;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./add&#39;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./minus&#39;:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./minus&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{ </span><span style="color:#6F42C1;">&#39;./add&#39;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./add&#39;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./minus&#39;:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./minus&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span></span></code></pre></div><p>通过 @babel/core @babel/preset-env 将es6 转为es5</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">parser</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@babel/parser&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">traverse</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@babel/traverse&#39;</span><span style="color:#E1E4E8;">).default    </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">babel</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@babel/core&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getModuleInfo</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">body</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">readFileSync</span><span style="color:#E1E4E8;">(file,</span><span style="color:#9ECBFF;">&#39;utf-8&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ast</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">parser.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(body,{</span></span>
<span class="line"><span style="color:#E1E4E8;">        sourceType:</span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//表示要解析的是es6 模块</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">deps</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(ast,{         </span><span style="color:#6A737D;">//遍历ast 语法树 并拿到所有依赖的绝对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ImportDeclaration</span><span style="color:#E1E4E8;">({</span><span style="color:#FFAB70;">node</span><span style="color:#E1E4E8;">}){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dirname</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(file)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">abspath</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;./&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(dirname,node.source.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">            deps[node.source.value]</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">abspath</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">code</span><span style="color:#E1E4E8;">}</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">babel.</span><span style="color:#B392F0;">transformFromAst</span><span style="color:#E1E4E8;">(ast,</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,{  </span><span style="color:#6A737D;">//ES6 转ES5 的代码</span></span>
<span class="line"><span style="color:#E1E4E8;">        presets:[</span><span style="color:#9ECBFF;">&quot;@babel/preset-env&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">modelInfo</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{file,deps,code}</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(modelInfo)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> modelInfo</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">getModuleInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./index.js&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">parser</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@babel/parser&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">traverse</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@babel/traverse&#39;</span><span style="color:#24292E;">).default    </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">babel</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@babel/core&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getModuleInfo</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">(</span><span style="color:#E36209;">file</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">body</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">readFileSync</span><span style="color:#24292E;">(file,</span><span style="color:#032F62;">&#39;utf-8&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ast</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">parser.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(body,{</span></span>
<span class="line"><span style="color:#24292E;">        sourceType:</span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">//表示要解析的是es6 模块</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">deps</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(ast,{         </span><span style="color:#6A737D;">//遍历ast 语法树 并拿到所有依赖的绝对路径</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ImportDeclaration</span><span style="color:#24292E;">({</span><span style="color:#E36209;">node</span><span style="color:#24292E;">}){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dirname</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">dirname</span><span style="color:#24292E;">(file)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">abspath</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;./&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(dirname,node.source.value)</span></span>
<span class="line"><span style="color:#24292E;">            deps[node.source.value]</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">abspath</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">code</span><span style="color:#24292E;">}</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">babel.</span><span style="color:#6F42C1;">transformFromAst</span><span style="color:#24292E;">(ast,</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,{  </span><span style="color:#6A737D;">//ES6 转ES5 的代码</span></span>
<span class="line"><span style="color:#24292E;">        presets:[</span><span style="color:#032F62;">&quot;@babel/preset-env&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">modelInfo</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{file,deps,code}</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(modelInfo)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> modelInfo</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">getModuleInfo</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./index.js&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>输出结果</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">file:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./index.js&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">deps:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./add&#39;:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./add&#39;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./minus&#39;:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./minus&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">code:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&quot;use strict&quot;;\\n&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&#39;\\n&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&#39;var _add = _interopRequireDefault(require(&quot;./add&quot;));\\n&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&#39;\\n&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&#39;var _minus = _interopRequireDefault(require(&quot;./minus&quot;));\\n&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&#39;\\n&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&#39;function _interopRequireDefault(obj) { return obj &amp;&amp; obj.__esModule ? obj : { &quot;default&quot;: obj }; }\\n&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&#39;\\n&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&#39;var sum = (0, _add[&quot;default&quot;])(1, 2);\\n&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&#39;var division = (0, _minus[&quot;default&quot;])(2, 1);\\n&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&#39;console.log(sum);\\n&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&#39;console.log(division);&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">file:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./index.js&#39;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">deps:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./add&#39;:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./add&#39;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./minus&#39;:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./minus&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">code:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&quot;use strict&quot;;\\n&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&#39;\\n&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&#39;var _add = _interopRequireDefault(require(&quot;./add&quot;));\\n&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&#39;\\n&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&#39;var _minus = _interopRequireDefault(require(&quot;./minus&quot;));\\n&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&#39;\\n&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&#39;function _interopRequireDefault(obj) { return obj &amp;&amp; obj.__esModule ? obj : { &quot;default&quot;: obj }; }\\n&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&#39;\\n&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&#39;var sum = (0, _add[&quot;default&quot;])(1, 2);\\n&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&#39;var division = (0, _minus[&quot;default&quot;])(2, 1);\\n&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&#39;console.log(sum);\\n&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&#39;console.log(division);&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,53),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{u as __pageData,C as default};
