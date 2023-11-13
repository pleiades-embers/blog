###  去除生产环境log
```javascript
  const isLog = !!window.location.port && log;
```

umi3 可以配置打包时去除log 
1、先去除根目录下的config文件下的config.ts/config.js文件里面的esbuild: {}配置
2、然后添加如下代码：
 umi配置 https://umijs.org/zh-CN/config#terseroptions

```javascript
terserOptions: {
  compress: {
    drop_console: true,
  },
},
```