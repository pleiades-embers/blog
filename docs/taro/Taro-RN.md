### 确认系统环境

node 版本 > 8.3

  node --version 

java版本 = 1.8

    javac -version

SDK Manager 中选择  "SDK Platforms" 安装：

    Android SDK Platform 28 （ Android 6.0不一定有Android SDK Platform 28，找其他版本下的Android SDK Platform 28安装即可 ）
    
    Intel x86 Atom_64 System Image

### 参考文档


https://reactnative.cn/docs/environment-setup

https://taro-docs.jd.com/taro/docs/2.x/react-native


触发 js bundle 构建
http://127.0.0.1:8081/rn_temp/index.bundle?platform=android&dev=true

### 错误

```
A problem occurred configuring project ':expo-app-loader-provider'.
> Could not resolve all artifacts for configuration ':expo-app-loader-provider:classpath'.
   > Could not resolve com.android.tools.build:gradle:3.1.3.
     Required by:
         project :expo-app-loader-provider
      > Could not resolve com.android.tools.build:gradle:3.1.3.
         > Could not get resource 'https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom'.
            > Could not GET 'https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom'.
               > Connect to maven.google.com:443 [maven.google.com/172.217.163.46] failed: Connection timed out: connect
   > Could not resolve com.android.tools.build:gradle:3.1.3.
     Required by:
         project :expo-app-loader-provider
      > Could not resolve com.android.tools.build:gradle:3.1.3.
         > Could not get resource 'https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom'.
            > Could not GET 'https://maven.google.com/com/android/tools/build/gradle/3.1.3/gradle-3.1.3.pom'.
               > Connect to maven.google.com:443 [maven.google.com/172.217.163.46] failed: Connection timed out: connect

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 2m 50s

error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup. Run CLI with --verbose flag for more details.
Error: Command failed: gradlew.bat app:installReleaseStaging -PreactNativeDevServerPort=8081

```

 Android 安装 gradle-3.1.3.pom 报 4XX 错误。解决方案：需要将 node_modules/expo-app-loader-provider/android/build.gradle 中做出如下改动
```
buildscript {
    repositories {
        jcenter()
        // maven {
        //     url 'https://maven.google.com/'
        //     name 'Google'
        // }
       maven { url 'https://dl.google.com/dl/android/maven2/' }
    }
```

    dependencies {
        classpath 'com.android.tools.build:gradle:3.1.3'
    }
### 配置 ANDROID_HOME 环境变量


React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。

具体的做法是把下面的命令加入到 ~/.bash_profile 文件中：

~表示用户目录，即/Users/你的用户名/，而小数点开头的文件在 Finder 中是隐藏的，并且这个文件有可能并不存在。可在终端下使用vi ~/.bash_profile命令创建或编辑。如不熟悉 vi 操作，请点击 这里 学习。

​```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools

```

如果你的命令行不是 bash，而是例如 zsh 等其他，请使用对应的配置文件。

使用 source $HOME/.bash_profile 命令来使环境变量设置立即生效（否则重启后才生效）。可以使用 echo $ANDROID_HOME 检查此变量是否已正确设置。

请确保你正常指定了 Android SDK 路径。你可以在 Android Studio 的 "Preferences" 菜单中查看 SDK 的真实路径，具体是Appearance & Behavior → System Settings → Android SDK。



### 用android 启动真机


### 真机调试

通过真机上的menu按键或者摇晃手机会出现一个菜单，然后选择"Debug JS Remotely"选项



### 2022-3-14   权限

某些权限（例如 CAMERA）可让您的应用访问只有部分 Android 设备具有的硬件组件。如果您的应用声明了这类硬件相关权限，请考虑您的应用在没有该硬件的设备上会不会完全无法运行。在大多数情况下，硬件是可选的，因此最好在 <uses-feature> 声明中将 android:required 设置为 false，从而将硬件声明为可选项，如以下代码段所示：

AndroidManifest.xml

```xml
<manifest ...>
    <application>
        ...
    </application>
    <uses-feature android:name="android.hardware.camera"
                  android:required="false" />
<manifest>
```

#### 确定硬件可用性

如果您将硬件声明为可选，您的应用在没有该硬件的设备上也可以运行。要检查设备是否具有特定的硬件，请使用 [`hasSystemFeature()`](https://developer.android.com/reference/android/content/pm/PackageManager#hasSystemFeature(java.lang.String)) 方法，如以下代码段所示。如果设备不具有该硬件，只需在您的应用中停用此功能即可。

[Kotlin](https://developer.android.com/training/permissions/declaring#kotlin)[Java](https://developer.android.com/training/permissions/declaring#java)

```java
// Check whether your app is running on a device that has a front-facing camera.
if (getApplicationContext().getPackageManager().hasSystemFeature(
        PackageManager.FEATURE_CAMERA_FRONT)) {
    // Continue with the part of your app's workflow that requires a
    // front-facing camera.
} else {
    // Gracefully degrade your app experience.
}
```

## 测试两种权限模型

在 Android 6.0（API 级别 23）及更高版本中，用户可以在运行时授予和撤消应用权限，而不是在安装应用时授予和撤消权限。因此，您必须在多种条件下测试应用。在 Android 6.0 之前，您可以合理地认为，如果应用能运行，它就已经获得在应用清单中声明的全部权限。现在，无论使用哪个 API 级别，用户都可以开启或关闭任何应用的权限。您应测试以确保您的应用能在各种权限情境中正常运行。

以下提示可帮助您在搭载 API 级别 23 或更高级别的设备上找出与权限有关的代码问题：

- 确定应用的当前权限和相关的代码路径。

- 在各种受权限保护的服务和数据中测试用户流。

- 使用授予或撤消权限的各种组合进行测试。例如，相机应用可能会在清单中列出 `CAMERA`、`READ_CONTACTS` 和 `ACCESS_FINE_LOCATION`。您应在测试该应用时逐一开启和关闭这些权限，确保应用可以妥善处理所有权限配置。

- 使用adb工具从命令行管理权限：

  - 按组列出权限和状态：

    ```
    $ adb shell pm list permissions -d -g
    ```

  - 授予或撤消一项或多项权限：

    ```
    $ adb shell pm [grant|revoke] <permission-name> ...
    ```

- 针对使用权限的服务对应用进行分析。