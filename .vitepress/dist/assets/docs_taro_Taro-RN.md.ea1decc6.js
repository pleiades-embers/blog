import{_ as e,c as n,o as a,d as o}from"./app.2fc076cc.js";const h='{"title":"\u786E\u8BA4\u7CFB\u7EDF\u73AF\u5883","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u786E\u8BA4\u7CFB\u7EDF\u73AF\u5883","slug":"\u786E\u8BA4\u7CFB\u7EDF\u73AF\u5883"},{"level":3,"title":"\u53C2\u8003\u6587\u6863","slug":"\u53C2\u8003\u6587\u6863"},{"level":3,"title":"\u9519\u8BEF","slug":"\u9519\u8BEF"},{"level":3,"title":"\u914D\u7F6E ANDROID_HOME \u73AF\u5883\u53D8\u91CF","slug":"\u914D\u7F6E-android-home-\u73AF\u5883\u53D8\u91CF"},{"level":2,"title":"\u6D4B\u8BD5\u4E24\u79CD\u6743\u9650\u6A21\u578B","slug":"\u6D4B\u8BD5\u4E24\u79CD\u6743\u9650\u6A21\u578B"}],"relativePath":"docs/taro/Taro-RN.md"}',t={},r=o(`<h3 id="\u786E\u8BA4\u7CFB\u7EDF\u73AF\u5883" tabindex="-1">\u786E\u8BA4\u7CFB\u7EDF\u73AF\u5883 <a class="header-anchor" href="#\u786E\u8BA4\u7CFB\u7EDF\u73AF\u5883" aria-hidden="true">#</a></h3><p>node \u7248\u672C &gt; 8.3</p><p>node --version</p><p>java\u7248\u672C = 1.8</p><pre><code>javac -version
</code></pre><p>SDK Manager \u4E2D\u9009\u62E9 &quot;SDK Platforms&quot; \u5B89\u88C5\uFF1A</p><pre><code>Android SDK Platform 28 \uFF08 Android 6.0\u4E0D\u4E00\u5B9A\u6709Android SDK Platform 28\uFF0C\u627E\u5176\u4ED6\u7248\u672C\u4E0B\u7684Android SDK Platform 28\u5B89\u88C5\u5373\u53EF \uFF09

Intel x86 Atom_64 System Image
</code></pre><h3 id="\u53C2\u8003\u6587\u6863" tabindex="-1">\u53C2\u8003\u6587\u6863 <a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a></h3><p><a href="https://reactnative.cn/docs/environment-setup" target="_blank" rel="noopener noreferrer">https://reactnative.cn/docs/environment-setup</a></p><p><a href="https://taro-docs.jd.com/taro/docs/2.x/react-native" target="_blank" rel="noopener noreferrer">https://taro-docs.jd.com/taro/docs/2.x/react-native</a></p><p>\u89E6\u53D1 js bundle \u6784\u5EFA <a href="http://127.0.0.1:8081/rn_temp/index.bundle?platform=android&amp;dev=true" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8081/rn_temp/index.bundle?platform=android&amp;dev=true</a></p><h3 id="\u9519\u8BEF" tabindex="-1">\u9519\u8BEF <a class="header-anchor" href="#\u9519\u8BEF" aria-hidden="true">#</a></h3><div class="language-"><pre><code>A problem occurred configuring project &#39;:expo-app-loader-provider&#39;.
&gt; Could not resolve all artifacts for configuration &#39;:expo-app-loader-provider:classpath&#39;.
   &gt; Could not resolve com.android.tools.build:gradle:3.1.3.
     Required by:
         project :expo-app-loader-provider
      &gt; Could not resolve com.android.tools.build:gradle:3.1.3.
         &gt; Could not get resource &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.
            &gt; Could not GET &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.
               &gt; Connect to maven.google.com:443 [maven.google.com/172.217.163.46] failed: Connection timed out: connect
   &gt; Could not resolve com.android.tools.build:gradle:3.1.3.
     Required by:
         project :expo-app-loader-provider
      &gt; Could not resolve com.android.tools.build:gradle:3.1.3.
         &gt; Could not get resource &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.
            &gt; Could not GET &#39;https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom&#39;.
               &gt; Connect to maven.google.com:443 [maven.google.com/172.217.163.46] failed: Connection timed out: connect

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 2m 50s

error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup. Run CLI with --verbose flag for more details.
Error: Command failed: gradlew.bat app:installReleaseStaging -PreactNativeDevServerPort=8081

</code></pre></div><p>Android \u5B89\u88C5 gradle-3.1.3.pom \u62A5 4XX \u9519\u8BEF\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u9700\u8981\u5C06 node_modules/expo-app-loader-provider/android/build.gradle \u4E2D\u505A\u51FA\u5982\u4E0B\u6539\u52A8</p><div class="language-"><pre><code>buildscript {
    repositories {
        jcenter()
        // maven {
        //     url &#39;https://maven.google.com/&#39;
        //     name &#39;Google&#39;
        // }
       maven { url &#39;https://dl.google.com/dl/android/maven2/&#39; }
    }
</code></pre></div><pre><code>dependencies {
    classpath &#39;com.android.tools.build:gradle:3.1.3&#39;
}
</code></pre><h3 id="\u914D\u7F6E-android-home-\u73AF\u5883\u53D8\u91CF" tabindex="-1">\u914D\u7F6E ANDROID_HOME \u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#\u914D\u7F6E-android-home-\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h3><p>React Native \u9700\u8981\u901A\u8FC7\u73AF\u5883\u53D8\u91CF\u6765\u4E86\u89E3\u4F60\u7684 Android SDK \u88C5\u5728\u4EC0\u4E48\u8DEF\u5F84\uFF0C\u4ECE\u800C\u6B63\u5E38\u8FDB\u884C\u7F16\u8BD1\u3002</p><p>\u5177\u4F53\u7684\u505A\u6CD5\u662F\u628A\u4E0B\u9762\u7684\u547D\u4EE4\u52A0\u5165\u5230 ~/.bash_profile \u6587\u4EF6\u4E2D\uFF1A</p><p>~\u8868\u793A\u7528\u6237\u76EE\u5F55\uFF0C\u5373/Users/\u4F60\u7684\u7528\u6237\u540D/\uFF0C\u800C\u5C0F\u6570\u70B9\u5F00\u5934\u7684\u6587\u4EF6\u5728 Finder \u4E2D\u662F\u9690\u85CF\u7684\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u6587\u4EF6\u6709\u53EF\u80FD\u5E76\u4E0D\u5B58\u5728\u3002\u53EF\u5728\u7EC8\u7AEF\u4E0B\u4F7F\u7528vi ~/.bash_profile\u547D\u4EE4\u521B\u5EFA\u6216\u7F16\u8F91\u3002\u5982\u4E0D\u719F\u6089 vi \u64CD\u4F5C\uFF0C\u8BF7\u70B9\u51FB \u8FD9\u91CC \u5B66\u4E60\u3002</p><p>\u200B\`\`\`bash export ANDROID_HOME=$HOME/Library/Android/sdk export PATH=$PATH:$ANDROID_HOME/tools export PATH=$PATH:$ANDROID_HOME/platform-tools</p><div class="language-"><pre><code>
\u5982\u679C\u4F60\u7684\u547D\u4EE4\u884C\u4E0D\u662F bash\uFF0C\u800C\u662F\u4F8B\u5982 zsh \u7B49\u5176\u4ED6\uFF0C\u8BF7\u4F7F\u7528\u5BF9\u5E94\u7684\u914D\u7F6E\u6587\u4EF6\u3002

\u4F7F\u7528 source $HOME/.bash_profile \u547D\u4EE4\u6765\u4F7F\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E\u7ACB\u5373\u751F\u6548\uFF08\u5426\u5219\u91CD\u542F\u540E\u624D\u751F\u6548\uFF09\u3002\u53EF\u4EE5\u4F7F\u7528 echo $ANDROID_HOME \u68C0\u67E5\u6B64\u53D8\u91CF\u662F\u5426\u5DF2\u6B63\u786E\u8BBE\u7F6E\u3002

\u8BF7\u786E\u4FDD\u4F60\u6B63\u5E38\u6307\u5B9A\u4E86 Android SDK \u8DEF\u5F84\u3002\u4F60\u53EF\u4EE5\u5728 Android Studio \u7684 &quot;Preferences&quot; \u83DC\u5355\u4E2D\u67E5\u770B SDK \u7684\u771F\u5B9E\u8DEF\u5F84\uFF0C\u5177\u4F53\u662FAppearance &amp; Behavior \u2192 System Settings \u2192 Android SDK\u3002



### \u7528android \u542F\u52A8\u771F\u673A


### \u771F\u673A\u8C03\u8BD5

\u901A\u8FC7\u771F\u673A\u4E0A\u7684menu\u6309\u952E\u6216\u8005\u6447\u6643\u624B\u673A\u4F1A\u51FA\u73B0\u4E00\u4E2A\u83DC\u5355\uFF0C\u7136\u540E\u9009\u62E9&quot;Debug JS Remotely&quot;\u9009\u9879



### 2022-3-14   \u6743\u9650

\u67D0\u4E9B\u6743\u9650\uFF08\u4F8B\u5982 CAMERA\uFF09\u53EF\u8BA9\u60A8\u7684\u5E94\u7528\u8BBF\u95EE\u53EA\u6709\u90E8\u5206 Android \u8BBE\u5907\u5177\u6709\u7684\u786C\u4EF6\u7EC4\u4EF6\u3002\u5982\u679C\u60A8\u7684\u5E94\u7528\u58F0\u660E\u4E86\u8FD9\u7C7B\u786C\u4EF6\u76F8\u5173\u6743\u9650\uFF0C\u8BF7\u8003\u8651\u60A8\u7684\u5E94\u7528\u5728\u6CA1\u6709\u8BE5\u786C\u4EF6\u7684\u8BBE\u5907\u4E0A\u4F1A\u4E0D\u4F1A\u5B8C\u5168\u65E0\u6CD5\u8FD0\u884C\u3002\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u786C\u4EF6\u662F\u53EF\u9009\u7684\uFF0C\u56E0\u6B64\u6700\u597D\u5728 &lt;uses-feature&gt; \u58F0\u660E\u4E2D\u5C06 android:required \u8BBE\u7F6E\u4E3A false\uFF0C\u4ECE\u800C\u5C06\u786C\u4EF6\u58F0\u660E\u4E3A\u53EF\u9009\u9879\uFF0C\u5982\u4EE5\u4E0B\u4EE3\u7801\u6BB5\u6240\u793A\uFF1A

AndroidManifest.xml

\`\`\`xml
&lt;manifest ...&gt;
    &lt;application&gt;
        ...
    &lt;/application&gt;
    &lt;uses-feature android:name=&quot;android.hardware.camera&quot;
                  android:required=&quot;false&quot; /&gt;
&lt;manifest&gt;
</code></pre></div><h4 id="\u786E\u5B9A\u786C\u4EF6\u53EF\u7528\u6027" tabindex="-1">\u786E\u5B9A\u786C\u4EF6\u53EF\u7528\u6027 <a class="header-anchor" href="#\u786E\u5B9A\u786C\u4EF6\u53EF\u7528\u6027" aria-hidden="true">#</a></h4><p>\u5982\u679C\u60A8\u5C06\u786C\u4EF6\u58F0\u660E\u4E3A\u53EF\u9009\uFF0C\u60A8\u7684\u5E94\u7528\u5728\u6CA1\u6709\u8BE5\u786C\u4EF6\u7684\u8BBE\u5907\u4E0A\u4E5F\u53EF\u4EE5\u8FD0\u884C\u3002\u8981\u68C0\u67E5\u8BBE\u5907\u662F\u5426\u5177\u6709\u7279\u5B9A\u7684\u786C\u4EF6\uFF0C\u8BF7\u4F7F\u7528 <a href="https://developer.android.com/reference/android/content/pm/PackageManager#hasSystemFeature(java.lang.String)" target="_blank" rel="noopener noreferrer"><code>hasSystemFeature()</code></a> \u65B9\u6CD5\uFF0C\u5982\u4EE5\u4E0B\u4EE3\u7801\u6BB5\u6240\u793A\u3002\u5982\u679C\u8BBE\u5907\u4E0D\u5177\u6709\u8BE5\u786C\u4EF6\uFF0C\u53EA\u9700\u5728\u60A8\u7684\u5E94\u7528\u4E2D\u505C\u7528\u6B64\u529F\u80FD\u5373\u53EF\u3002</p><p><a href="https://developer.android.com/training/permissions/declaring#kotlin" target="_blank" rel="noopener noreferrer">Kotlin</a><a href="https://developer.android.com/training/permissions/declaring#java" target="_blank" rel="noopener noreferrer">Java</a></p><div class="language-java"><pre><code><span class="token comment">// Check whether your app is running on a device that has a front-facing camera.</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPackageManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasSystemFeature</span><span class="token punctuation">(</span>
        <span class="token class-name">PackageManager</span><span class="token punctuation">.</span>FEATURE_CAMERA_FRONT<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Continue with the part of your app&#39;s workflow that requires a</span>
    <span class="token comment">// front-facing camera.</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Gracefully degrade your app experience.</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6D4B\u8BD5\u4E24\u79CD\u6743\u9650\u6A21\u578B" tabindex="-1">\u6D4B\u8BD5\u4E24\u79CD\u6743\u9650\u6A21\u578B <a class="header-anchor" href="#\u6D4B\u8BD5\u4E24\u79CD\u6743\u9650\u6A21\u578B" aria-hidden="true">#</a></h2><p>\u5728 Android 6.0\uFF08API \u7EA7\u522B 23\uFF09\u53CA\u66F4\u9AD8\u7248\u672C\u4E2D\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u6388\u4E88\u548C\u64A4\u6D88\u5E94\u7528\u6743\u9650\uFF0C\u800C\u4E0D\u662F\u5728\u5B89\u88C5\u5E94\u7528\u65F6\u6388\u4E88\u548C\u64A4\u6D88\u6743\u9650\u3002\u56E0\u6B64\uFF0C\u60A8\u5FC5\u987B\u5728\u591A\u79CD\u6761\u4EF6\u4E0B\u6D4B\u8BD5\u5E94\u7528\u3002\u5728 Android 6.0 \u4E4B\u524D\uFF0C\u60A8\u53EF\u4EE5\u5408\u7406\u5730\u8BA4\u4E3A\uFF0C\u5982\u679C\u5E94\u7528\u80FD\u8FD0\u884C\uFF0C\u5B83\u5C31\u5DF2\u7ECF\u83B7\u5F97\u5728\u5E94\u7528\u6E05\u5355\u4E2D\u58F0\u660E\u7684\u5168\u90E8\u6743\u9650\u3002\u73B0\u5728\uFF0C\u65E0\u8BBA\u4F7F\u7528\u54EA\u4E2A API \u7EA7\u522B\uFF0C\u7528\u6237\u90FD\u53EF\u4EE5\u5F00\u542F\u6216\u5173\u95ED\u4EFB\u4F55\u5E94\u7528\u7684\u6743\u9650\u3002\u60A8\u5E94\u6D4B\u8BD5\u4EE5\u786E\u4FDD\u60A8\u7684\u5E94\u7528\u80FD\u5728\u5404\u79CD\u6743\u9650\u60C5\u5883\u4E2D\u6B63\u5E38\u8FD0\u884C\u3002</p><p>\u4EE5\u4E0B\u63D0\u793A\u53EF\u5E2E\u52A9\u60A8\u5728\u642D\u8F7D API \u7EA7\u522B 23 \u6216\u66F4\u9AD8\u7EA7\u522B\u7684\u8BBE\u5907\u4E0A\u627E\u51FA\u4E0E\u6743\u9650\u6709\u5173\u7684\u4EE3\u7801\u95EE\u9898\uFF1A</p><ul><li><p>\u786E\u5B9A\u5E94\u7528\u7684\u5F53\u524D\u6743\u9650\u548C\u76F8\u5173\u7684\u4EE3\u7801\u8DEF\u5F84\u3002</p></li><li><p>\u5728\u5404\u79CD\u53D7\u6743\u9650\u4FDD\u62A4\u7684\u670D\u52A1\u548C\u6570\u636E\u4E2D\u6D4B\u8BD5\u7528\u6237\u6D41\u3002</p></li><li><p>\u4F7F\u7528\u6388\u4E88\u6216\u64A4\u6D88\u6743\u9650\u7684\u5404\u79CD\u7EC4\u5408\u8FDB\u884C\u6D4B\u8BD5\u3002\u4F8B\u5982\uFF0C\u76F8\u673A\u5E94\u7528\u53EF\u80FD\u4F1A\u5728\u6E05\u5355\u4E2D\u5217\u51FA <code>CAMERA</code>\u3001<code>READ_CONTACTS</code> \u548C <code>ACCESS_FINE_LOCATION</code>\u3002\u60A8\u5E94\u5728\u6D4B\u8BD5\u8BE5\u5E94\u7528\u65F6\u9010\u4E00\u5F00\u542F\u548C\u5173\u95ED\u8FD9\u4E9B\u6743\u9650\uFF0C\u786E\u4FDD\u5E94\u7528\u53EF\u4EE5\u59A5\u5584\u5904\u7406\u6240\u6709\u6743\u9650\u914D\u7F6E\u3002</p></li><li><p>\u4F7F\u7528adb\u5DE5\u5177\u4ECE\u547D\u4EE4\u884C\u7BA1\u7406\u6743\u9650\uFF1A</p><ul><li><p>\u6309\u7EC4\u5217\u51FA\u6743\u9650\u548C\u72B6\u6001\uFF1A</p><div class="language-"><pre><code>$ adb shell pm list permissions -d -g
</code></pre></div></li><li><p>\u6388\u4E88\u6216\u64A4\u6D88\u4E00\u9879\u6216\u591A\u9879\u6743\u9650\uFF1A</p><div class="language-"><pre><code>$ adb shell pm [grant|revoke] &lt;permission-name&gt; ...
</code></pre></div></li></ul></li><li><p>\u9488\u5BF9\u4F7F\u7528\u6743\u9650\u7684\u670D\u52A1\u5BF9\u5E94\u7528\u8FDB\u884C\u5206\u6790\u3002</p></li></ul>`,30),s=[r];function d(p,l,i,c,u,g){return a(),n("div",null,s)}var v=e(t,[["render",d]]);export{h as __pageData,v as default};
