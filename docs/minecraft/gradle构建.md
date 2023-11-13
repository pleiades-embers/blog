### minecraft 构建报错

报错
Could not find net.minecraftforge:forge:1.18.2-40.1.0_mapped_official_1.18.1.
Searched in the following locations:

解决方案

1. 1.18.1 所需的 openjdk 版本是 11 并非 17版本
2. idea 里设置 openjdk 版本为 11
3. 运行时 在设置为 17版本  `17 Eclipse Temurin version 17.0.3`


### gradle 插件依赖
```groovy
/**
* 1.gradle 使用第三方插件
* 2.在buildscript 李的 dependencies 里配置 classpath
* 3.这里参考 AE2的 buildscript 配置
*/
buildscript {
    // 这里指定gradle 需要的插件去哪里找
    repositories {
        // These repositories are only for Gradle plugins, put any other repositories in the repository block further below
        maven { url = 'https://maven.minecraftforge.net' }
        maven { url = 'https://repo.spongepowered.org/maven' }
        mavenCentral()
    }
    dependencies {
        classpath group: 'net.minecraftforge.gradle', name: 'ForgeGradle', version: '5.1.+', changing: true
        classpath 'org.spongepowered:mixingradle:0.7-SNAPSHOT'

    }
}
```

使用插件

```groovy
apply plugin: 'net.minecraftforge.forge'
apply plugin: 'org.spongepowered.mixin'
```


使用变量
在 gradle.properties 里配置
```groovy
minecraft_version=1.18.1
```
build.gradle 里使用
```groovy
println "${minecraft_version}"
```




