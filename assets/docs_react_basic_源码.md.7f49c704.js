import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.82dd189e.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/react/basic/源码.md","filePath":"docs/react/basic/源码.md"}'),l={name:"docs/react/basic/源码.md"},p=o(`<h3 id="react-18-2-源码调试vscode配置" tabindex="-1">react 18.2 源码调试vscode配置 <a class="header-anchor" href="#react-18-2-源码调试vscode配置" aria-label="Permalink to &quot;react 18.2 源码调试vscode配置&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0.2.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;configurations&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;request&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;launch&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Jest Entry&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;program&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;\${workspaceRoot}/node_modules/.bin/jest&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;args&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">&quot;\${file}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">&quot;--config&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">&quot;./scripts/jest/config.source.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#9ECBFF;">&quot;--runInBand&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;console&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;integratedTerminal&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;internalConsoleOptions&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;neverOpen&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;env&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">&quot;NODE_ENV&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;development&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0.2.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;configurations&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;node&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;request&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;launch&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Jest Entry&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;program&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;\${workspaceRoot}/node_modules/.bin/jest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;args&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#032F62;">&quot;\${file}&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#032F62;">&quot;--config&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#032F62;">&quot;./scripts/jest/config.source.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#032F62;">&quot;--runInBand&quot;</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;console&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;integratedTerminal&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;internalConsoleOptions&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;neverOpen&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;env&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">&quot;NODE_ENV&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;development&quot;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span></code></pre></div>`,2),t=[p];function e(c,r,E,y,u,i){return n(),a("div",null,t)}const d=s(l,[["render",e]]);export{F as __pageData,d as default};
