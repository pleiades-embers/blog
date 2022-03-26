import { defineConfigWithTheme  } from "vitepress";
import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";

export default defineConfigWithTheme ({
  themeConfig: {
    algolia: {
      appId: '',
      apiKey: '',
      indexName: '',
    },
    
    // repo: "https://github.com/pleiades-embers/blog", // 你的 github 仓库地址，网页的右上角会跳转
    //   头部导航
    nav,
    //   侧边导航
    sidebar
  },
  srcExclude: ['README.md'],
  title: "embers blog",
  description: "全栈进阶之路",
  base: "/blog/", //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  head: [],

  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
});
