import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.82dd189e.js";const g=JSON.parse('{"title":"ipfs 星际文件系统","description":"","frontmatter":{},"headers":[],"relativePath":"docs/other/ipfs星际文件系统部署静态页.md","filePath":"docs/other/ipfs星际文件系统部署静态页.md"}'),o={name:"docs/other/ipfs星际文件系统部署静态页.md"},l=p(`<h1 id="ipfs-星际文件系统" tabindex="-1">ipfs 星际文件系统 <a class="header-anchor" href="#ipfs-星际文件系统" aria-label="Permalink to &quot;ipfs 星际文件系统&quot;">​</a></h1><h3 id="ipfs介绍" tabindex="-1">IPFS介绍 <a class="header-anchor" href="#ipfs介绍" aria-label="Permalink to &quot;IPFS介绍&quot;">​</a></h3><p><img src="http://guokai1.oss-cn-beijing.aliyuncs.com/img/image-20200608120151576.png" alt="image-20200608120151576"></p><p><img src="http://guokai1.oss-cn-beijing.aliyuncs.com/img/image-20200609171539602.png" alt="image-20200609171539602"></p><h3 id="ipfs-js实现" tabindex="-1">IPFS js实现 <a class="header-anchor" href="#ipfs-js实现" aria-label="Permalink to &quot;IPFS js实现&quot;">​</a></h3><p><img src="http://guokai1.oss-cn-beijing.aliyuncs.com/img/image-20200609171513072.png" alt="image-20200609171513072"></p><h3 id="安装-js版本的ipfs" tabindex="-1">安装 js版本的ipfs <a class="header-anchor" href="#安装-js版本的ipfs" aria-label="Permalink to &quot;安装 js版本的ipfs&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm install ipfs </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">g</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm install ipfs </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">g</span></span></code></pre></div><h3 id="ipfs-托管静态网站" tabindex="-1">IPFS 托管静态网站 <a class="header-anchor" href="#ipfs-托管静态网站" aria-label="Permalink to &quot;IPFS 托管静态网站&quot;">​</a></h3><p>假设您在目录中有一个静态网站<code>mysite</code>。</p><p>为了将其发布为站点，<a href="https://docs.ipfs.io/install/" target="_blank" rel="noreferrer">请安装IPFS</a>并确保IPFS守护程序正在运行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ipfs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">daemon</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ipfs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">daemon</span></span></code></pre></div><p><img src="http://guokai1.oss-cn-beijing.aliyuncs.com/img/image-20200609172529918.png" alt="image-20200609172529918"></p><p>然后在目录中添加您的网站：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysite</span></span>
<span class="line"><span style="color:#B392F0;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.html</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ipfs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysite</span></span>
<span class="line"><span style="color:#B392F0;">added</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">QmcMN2wqoun88SVF5own7D5LUpnHwDA6ALZnVdFXhnYhAs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysite/img/spacecat.jpg</span></span>
<span class="line"><span style="color:#B392F0;">added</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">QmS8tC5NJqajBB5qFhcA1auav14iHMnoMZJWfmr4k3EY6w</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysite/img</span></span>
<span class="line"><span style="color:#B392F0;">added</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">QmYh6HbZhHABQXrkQZ4aRRSoSa6bb9vaKoHeumWex6HRsT</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysite/index.html</span></span>
<span class="line"><span style="color:#B392F0;">added</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">QmYeAiiK1UfB8MGLRefok1N7vBTyX8hGPuMXZ4Xq1DPyt7</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysite/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysite</span></span>
<span class="line"><span style="color:#6F42C1;">img</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.html</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ipfs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysite</span></span>
<span class="line"><span style="color:#6F42C1;">added</span><span style="color:#24292E;"> </span><span style="color:#032F62;">QmcMN2wqoun88SVF5own7D5LUpnHwDA6ALZnVdFXhnYhAs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysite/img/spacecat.jpg</span></span>
<span class="line"><span style="color:#6F42C1;">added</span><span style="color:#24292E;"> </span><span style="color:#032F62;">QmS8tC5NJqajBB5qFhcA1auav14iHMnoMZJWfmr4k3EY6w</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysite/img</span></span>
<span class="line"><span style="color:#6F42C1;">added</span><span style="color:#24292E;"> </span><span style="color:#032F62;">QmYh6HbZhHABQXrkQZ4aRRSoSa6bb9vaKoHeumWex6HRsT</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysite/index.html</span></span>
<span class="line"><span style="color:#6F42C1;">added</span><span style="color:#24292E;"> </span><span style="color:#032F62;">QmYeAiiK1UfB8MGLRefok1N7vBTyX8hGPuMXZ4Xq1DPyt7</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysite/</span></span></code></pre></div><p><img src="http://guokai1.oss-cn-beijing.aliyuncs.com/img/image-20200609172651942.png" alt="image-20200609172651942"></p><p><img src="http://guokai1.oss-cn-beijing.aliyuncs.com/img/image-20200609172713242.png" alt="image-20200609172713242"></p><p>根目录hash<code>mysite/</code>是要记住的哈希，调用<code>$SITE_CID</code>。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">QmR74BdR1LPAPq2THQDJ5jU2onntmh6nG1qB38CnTQGJD1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">QmR74BdR1LPAPq2THQDJ5jU2onntmh6nG1qB38CnTQGJD1</span></span></code></pre></div><p>您可以通过<code>http://localhost:8080/ipfs/$SITE_CID</code>在浏览器中打开或使用<code>wget</code>或<code>curl</code>从命令行中进行本地测试。</p><p><img src="http://guokai1.oss-cn-beijing.aliyuncs.com/img/image-20200609173039642.png" alt="image-20200609173039642"></p><p>要从另一个ipfs节点查看它，可以<code>http://gateway.ipfs.io/ipfs/$SITE_CID</code>在浏览器中尝试。这可以在添加了站点文件的网络内部或外部的另一台设备上的浏览器中进行。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">访问不了添加</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">host</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">209.94.78.78</span><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">ipfs.io</span></span>
<span class="line"><span style="color:#B392F0;">209.94.90.1</span><span style="color:#E1E4E8;">         </span><span style="color:#9ECBFF;">ipfs.io</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">访问不了添加</span><span style="color:#24292E;"> </span><span style="color:#032F62;">host</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">209.94.78.78</span><span style="color:#24292E;">        </span><span style="color:#032F62;">ipfs.io</span></span>
<span class="line"><span style="color:#6F42C1;">209.94.90.1</span><span style="color:#24292E;">         </span><span style="color:#032F62;">ipfs.io</span></span></code></pre></div><p><img src="http://guokai1.oss-cn-beijing.aliyuncs.com/img/image-20200609174537908.png" alt="image-20200609174537908"></p><p>至此 已发布到IPFS公网</p><p>这些哈希值很难记住。让我们看一些摆脱它们的方法。</p>`,26),e=[l];function t(c,i,r,y,d,E){return a(),n("div",null,e)}const m=s(o,[["render",t]]);export{g as __pageData,m as default};
