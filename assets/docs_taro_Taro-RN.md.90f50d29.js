import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.82dd189e.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/taro/Taro-RN.md","filePath":"docs/taro/Taro-RN.md"}'),l={name:"docs/taro/Taro-RN.md"},o=e(`<h3 id="确认系统环境" tabindex="-1">确认系统环境 <a class="header-anchor" href="#确认系统环境" aria-label="Permalink to &quot;确认系统环境&quot;">​</a></h3><p>node 版本 &gt; 8.3</p><p>node --version</p><p>java版本 = 1.8</p><pre><code>javac -version
</code></pre><p>SDK Manager 中选择 &quot;SDK Platforms&quot; 安装：</p><pre><code>Android SDK Platform 28 （ Android 6.0不一定有Android SDK Platform 28，找其他版本下的Android SDK Platform 28安装即可 ）

Intel x86 Atom_64 System Image
</code></pre><h3 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h3><p><a href="https://reactnative.cn/docs/environment-setup" target="_blank" rel="noreferrer">https://reactnative.cn/docs/environment-setup</a></p><p><a href="https://taro-docs.jd.com/taro/docs/2.x/react-native" target="_blank" rel="noreferrer">https://taro-docs.jd.com/taro/docs/2.x/react-native</a></p><p>触发 js bundle 构建 <a href="http://127.0.0.1:8081/rn%5C_temp/index.bundle?platform=android%5C&amp;dev=true" target="_blank" rel="noreferrer">http://127.0.0.1:8081/rn\\_temp/index.bundle?platform=android\\&amp;dev=true</a></p><h3 id="错误" tabindex="-1">错误 <a class="header-anchor" href="#错误" aria-label="Permalink to &quot;错误&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">A problem occurred configuring project &#39;:expo-app-loader-provider&#39;.</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; Could not resolve all artifacts for configuration &#39;:expo-app-loader-provider:classpath&#39;.</span></span>
<span class="line"><span style="color:#e1e4e8;">   &gt; Could not resolve com.android.tools.build:gradle:3.1.3.</span></span>
<span class="line"><span style="color:#e1e4e8;">     Required by:</span></span>
<span class="line"><span style="color:#e1e4e8;">         project :expo-app-loader-provider</span></span>
<span class="line"><span style="color:#e1e4e8;">      &gt; Could not resolve com.android.tools.build:gradle:3.1.3.</span></span>
<span class="line"><span style="color:#e1e4e8;">         &gt; Could not get resource &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.</span></span>
<span class="line"><span style="color:#e1e4e8;">            &gt; Could not GET &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.</span></span>
<span class="line"><span style="color:#e1e4e8;">               &gt; Connect to maven.google.com:443 [maven.google.com/172.217.163.46] failed: Connection timed out: connect</span></span>
<span class="line"><span style="color:#e1e4e8;">   &gt; Could not resolve com.android.tools.build:gradle:3.1.3.</span></span>
<span class="line"><span style="color:#e1e4e8;">     Required by:</span></span>
<span class="line"><span style="color:#e1e4e8;">         project :expo-app-loader-provider</span></span>
<span class="line"><span style="color:#e1e4e8;">      &gt; Could not resolve com.android.tools.build:gradle:3.1.3.</span></span>
<span class="line"><span style="color:#e1e4e8;">         &gt; Could not get resource &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.</span></span>
<span class="line"><span style="color:#e1e4e8;">            &gt; Could not GET &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.</span></span>
<span class="line"><span style="color:#e1e4e8;">               &gt; Connect to maven.google.com:443 [maven.google.com/172.217.163.46] failed: Connection timed out: connect</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">* Try:</span></span>
<span class="line"><span style="color:#e1e4e8;">Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">* Get more help at https://help.gradle.org</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">BUILD FAILED in 2m 50s</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup. Run CLI with --verbose flag for more details.</span></span>
<span class="line"><span style="color:#e1e4e8;">Error: Command failed: gradlew.bat app:installReleaseStaging -PreactNativeDevServerPort=8081</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">A problem occurred configuring project &#39;:expo-app-loader-provider&#39;.</span></span>
<span class="line"><span style="color:#24292e;">&gt; Could not resolve all artifacts for configuration &#39;:expo-app-loader-provider:classpath&#39;.</span></span>
<span class="line"><span style="color:#24292e;">   &gt; Could not resolve com.android.tools.build:gradle:3.1.3.</span></span>
<span class="line"><span style="color:#24292e;">     Required by:</span></span>
<span class="line"><span style="color:#24292e;">         project :expo-app-loader-provider</span></span>
<span class="line"><span style="color:#24292e;">      &gt; Could not resolve com.android.tools.build:gradle:3.1.3.</span></span>
<span class="line"><span style="color:#24292e;">         &gt; Could not get resource &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.</span></span>
<span class="line"><span style="color:#24292e;">            &gt; Could not GET &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.</span></span>
<span class="line"><span style="color:#24292e;">               &gt; Connect to maven.google.com:443 [maven.google.com/172.217.163.46] failed: Connection timed out: connect</span></span>
<span class="line"><span style="color:#24292e;">   &gt; Could not resolve com.android.tools.build:gradle:3.1.3.</span></span>
<span class="line"><span style="color:#24292e;">     Required by:</span></span>
<span class="line"><span style="color:#24292e;">         project :expo-app-loader-provider</span></span>
<span class="line"><span style="color:#24292e;">      &gt; Could not resolve com.android.tools.build:gradle:3.1.3.</span></span>
<span class="line"><span style="color:#24292e;">         &gt; Could not get resource &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.</span></span>
<span class="line"><span style="color:#24292e;">            &gt; Could not GET &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.</span></span>
<span class="line"><span style="color:#24292e;">               &gt; Connect to maven.google.com:443 [maven.google.com/172.217.163.46] failed: Connection timed out: connect</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">* Try:</span></span>
<span class="line"><span style="color:#24292e;">Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">* Get more help at https://help.gradle.org</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">BUILD FAILED in 2m 50s</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup. Run CLI with --verbose flag for more details.</span></span>
<span class="line"><span style="color:#24292e;">Error: Command failed: gradlew.bat app:installReleaseStaging -PreactNativeDevServerPort=8081</span></span></code></pre></div><p>Android 安装 gradle-3.1.3.pom 报 4XX 错误。解决方案：需要将 node_modules/expo-app-loader-provider/android/build.gradle 中做出如下改动</p><pre><code>buildscript {
    repositories {
        jcenter()
        // maven {
        //     url &#39;https://maven.google.com/&#39;
        //     name &#39;Google&#39;
        // }
       maven { url &#39;https://dl.google.com/dl/android/maven2/&#39; }
    }
</code></pre><pre><code>dependencies {
    classpath &#39;com.android.tools.build:gradle:3.1.3&#39;
}
</code></pre><h3 id="配置-android-home-环境变量" tabindex="-1">配置 ANDROID_HOME 环境变量 <a class="header-anchor" href="#配置-android-home-环境变量" aria-label="Permalink to &quot;配置 ANDROID\\_HOME 环境变量&quot;">​</a></h3><p>React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。</p><p>具体的做法是把下面的命令加入到 ~/.bash_profile 文件中：</p><p>~表示用户目录，即/Users/你的用户名/，而小数点开头的文件在 Finder 中是隐藏的，并且这个文件有可能并不存在。可在终端下使用vi ~/.bash_profile命令创建或编辑。如不熟悉 vi 操作，请点击 这里 学习。</p><p>​\`\`\`bash export ANDROID_HOME=$HOME/Library/Android/sdk export PATH=$PATH:$ANDROID_HOME/tools export PATH=$PATH:$ANDROID_HOME/platform-tools</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">如果你的命令行不是 bash，而是例如 zsh 等其他，请使用对应的配置文件。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">使用 source $HOME/.bash_profile 命令来使环境变量设置立即生效（否则重启后才生效）。可以使用 echo $ANDROID_HOME 检查此变量是否已正确设置。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">请确保你正常指定了 Android SDK 路径。你可以在 Android Studio 的 &quot;Preferences&quot; 菜单中查看 SDK 的真实路径，具体是Appearance &amp; Behavior → System Settings → Android SDK。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">### 用android 启动真机</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">### 真机调试</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">通过真机上的menu按键或者摇晃手机会出现一个菜单，然后选择&quot;Debug JS Remotely&quot;选项</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">### 2022-3-14   权限</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">某些权限（例如 CAMERA）可让您的应用访问只有部分 Android 设备具有的硬件组件。如果您的应用声明了这类硬件相关权限，请考虑您的应用在没有该硬件的设备上会不会完全无法运行。在大多数情况下，硬件是可选的，因此最好在 &lt;uses-feature&gt; 声明中将 android:required 设置为 false，从而将硬件声明为可选项，如以下代码段所示：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">AndroidManifest.xml</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`xml</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;manifest ...&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;application&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/application&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;uses-feature android:name=&quot;android.hardware.camera&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                  android:required=&quot;false&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;manifest&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">如果你的命令行不是 bash，而是例如 zsh 等其他，请使用对应的配置文件。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">使用 source $HOME/.bash_profile 命令来使环境变量设置立即生效（否则重启后才生效）。可以使用 echo $ANDROID_HOME 检查此变量是否已正确设置。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">请确保你正常指定了 Android SDK 路径。你可以在 Android Studio 的 &quot;Preferences&quot; 菜单中查看 SDK 的真实路径，具体是Appearance &amp; Behavior → System Settings → Android SDK。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">### 用android 启动真机</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">### 真机调试</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">通过真机上的menu按键或者摇晃手机会出现一个菜单，然后选择&quot;Debug JS Remotely&quot;选项</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">### 2022-3-14   权限</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">某些权限（例如 CAMERA）可让您的应用访问只有部分 Android 设备具有的硬件组件。如果您的应用声明了这类硬件相关权限，请考虑您的应用在没有该硬件的设备上会不会完全无法运行。在大多数情况下，硬件是可选的，因此最好在 &lt;uses-feature&gt; 声明中将 android:required 设置为 false，从而将硬件声明为可选项，如以下代码段所示：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">AndroidManifest.xml</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`xml</span></span>
<span class="line"><span style="color:#24292e;">&lt;manifest ...&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;application&gt;</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/application&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;uses-feature android:name=&quot;android.hardware.camera&quot;</span></span>
<span class="line"><span style="color:#24292e;">                  android:required=&quot;false&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;manifest&gt;</span></span></code></pre></div><h4 id="确定硬件可用性" tabindex="-1">确定硬件可用性 <a class="header-anchor" href="#确定硬件可用性" aria-label="Permalink to &quot;确定硬件可用性&quot;">​</a></h4><p>如果您将硬件声明为可选，您的应用在没有该硬件的设备上也可以运行。要检查设备是否具有特定的硬件，请使用 <a href="https://developer.android.com/reference/android/content/pm/PackageManager#hasSystemFeature(java.lang.String)" target="_blank" rel="noreferrer"><code>hasSystemFeature()</code></a> 方法，如以下代码段所示。如果设备不具有该硬件，只需在您的应用中停用此功能即可。</p><p><a href="https://developer.android.com/training/permissions/declaring#kotlin" target="_blank" rel="noreferrer">Kotlin</a><a href="https://developer.android.com/training/permissions/declaring#java" target="_blank" rel="noreferrer">Java</a></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Check whether your app is running on a device that has a front-facing camera.</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">getApplicationContext</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getPackageManager</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">hasSystemFeature</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        PackageManager.FEATURE_CAMERA_FRONT)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Continue with the part of your app&#39;s workflow that requires a</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// front-facing camera.</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Gracefully degrade your app experience.</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Check whether your app is running on a device that has a front-facing camera.</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">getApplicationContext</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getPackageManager</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">hasSystemFeature</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        PackageManager.FEATURE_CAMERA_FRONT)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Continue with the part of your app&#39;s workflow that requires a</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// front-facing camera.</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Gracefully degrade your app experience.</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="测试两种权限模型" tabindex="-1">测试两种权限模型 <a class="header-anchor" href="#测试两种权限模型" aria-label="Permalink to &quot;测试两种权限模型&quot;">​</a></h2><p>在 Android 6.0（API 级别 23）及更高版本中，用户可以在运行时授予和撤消应用权限，而不是在安装应用时授予和撤消权限。因此，您必须在多种条件下测试应用。在 Android 6.0 之前，您可以合理地认为，如果应用能运行，它就已经获得在应用清单中声明的全部权限。现在，无论使用哪个 API 级别，用户都可以开启或关闭任何应用的权限。您应测试以确保您的应用能在各种权限情境中正常运行。</p><p>以下提示可帮助您在搭载 API 级别 23 或更高级别的设备上找出与权限有关的代码问题：</p><ul><li><p>确定应用的当前权限和相关的代码路径。</p></li><li><p>在各种受权限保护的服务和数据中测试用户流。</p></li><li><p>使用授予或撤消权限的各种组合进行测试。例如，相机应用可能会在清单中列出 <code>CAMERA</code>、<code>READ_CONTACTS</code> 和 <code>ACCESS_FINE_LOCATION</code>。您应在测试该应用时逐一开启和关闭这些权限，确保应用可以妥善处理所有权限配置。</p></li><li><p>使用adb工具从命令行管理权限：</p><ul><li><p>按组列出权限和状态：</p><pre><code>$ adb shell pm list permissions -d -g
</code></pre></li><li><p>授予或撤消一项或多项权限：</p><pre><code>$ adb shell pm [grant|revoke] &lt;permission-name&gt; ...
</code></pre></li></ul></li><li><p>针对使用权限的服务对应用进行分析。</p></li></ul>`,30),p=[o];function t(r,c,i,d,g,y){return a(),n("div",null,p)}const h=s(l,[["render",t]]);export{m as __pageData,h as default};
