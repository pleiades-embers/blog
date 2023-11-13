import{_ as e,o,c as a,Q as r}from"./chunks/framework.82dd189e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/other/mac下npm全局问题.md","filePath":"docs/other/mac下npm全局问题.md"}'),n={name:"docs/other/mac下npm全局问题.md"},p=r(`<h2 id="homebrew-是mac上的包管理工具-其官网" tabindex="-1">Homebrew 是mac上的包管理工具，其官网； <a class="header-anchor" href="#homebrew-是mac上的包管理工具-其官网" aria-label="Permalink to &quot;Homebrew 是mac上的包管理工具，其官网；&quot;">​</a></h2><p><a href="http://brew.sh/" target="_blank" rel="noreferrer">http://brew.sh/</a></p><p>在使用brew安装node之后安装一些常见工具比如 gulp</p><pre><code>npm install -g gulp
</code></pre><p>提示安装成功之后 ，使用发现不存在comman gulp,这个时候我们要检查下npm全局路径在哪里</p><pre><code>npm root -g
</code></pre><p>正常的路径应该是 /usr/local/lib/node_modules，如果你的不是就要重新指定：</p><pre><code>npm config set prefix /usr/local
</code></pre><p>然后在执行检查路径的方法看看是不是正常了呢？问题搞定~</p><h2 id="npm全局安装找不到" tabindex="-1">npm全局安装找不到 <a class="header-anchor" href="#npm全局安装找不到" aria-label="Permalink to &quot;npm全局安装找不到&quot;">​</a></h2><p>查看node安装路径</p><pre><code>which node
</code></pre><p>同样需要配置环境变量，修改/etc/profile文件，在文件尾部添加以下几行-</p><pre><code>export NODE_HOME=/root/node #node的安装路径
export PATH=$PATH:$NODE_HOME/bin
export NODE_PATH=$NODE_HOME/lib/node_modules
</code></pre><p>修改完之后记得使用</p><pre><code>source /etc/profile
</code></pre><p>全局安装和安装到指定目录下的 package.json 是不一样的效果，输入npm list -g --depth 0中查看是否安装到了全局</p><h2 id="如何解决zsh-command-not-found" tabindex="-1">如何解决zsh: command not found: <a class="header-anchor" href="#如何解决zsh-command-not-found" aria-label="Permalink to &quot;如何解决zsh: command not found:&quot;">​</a></h2><pre><code>命令行输入 vim ~/.zshrc

发现我的mac 下的 export PATH 路径是 yarn 的全局路径 所以使用yarn 全局安装包吧
</code></pre><h2 id="yarn全局安装找不到" tabindex="-1">yarn全局安装找不到 <a class="header-anchor" href="#yarn全局安装找不到" aria-label="Permalink to &quot;yarn全局安装找不到&quot;">​</a></h2><p>yarn global add xxx</p><p>yarn global bin //查找yarn安装目录</p><h2 id="添加zsh-全局包环境变量" tabindex="-1">添加zsh 全局包环境变量 <a class="header-anchor" href="#添加zsh-全局包环境变量" aria-label="Permalink to &quot;添加zsh 全局包环境变量&quot;">​</a></h2><p>注意 路径拼写 export NODE_PATH=/Users/apple/.npm-global/bin export PATH=$PATH:$NODE_PATH source ~/.bash_profile</p><p>open ~/.zshrc source ~/.zshrc</p>`,25),t=[p];function c(d,s,h,l,m,i){return o(),a("div",null,t)}const b=e(n,[["render",c]]);export{u as __pageData,b as default};
