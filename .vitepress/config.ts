import nav from "./config/nav";
import sidebar from "./config/sidebar";
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
export default {
  // lang: 'en-US',
  themeConfig: {
    // algolia: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },

    // repo: "https://github.com/pleiades-embers/blog", // 你的 github 仓库地址，网页的右上角会跳转
    //   头部导航
    nav,
    //   侧边导航
    sidebar,

    demoblock: {
      'root': {
        'view-source': '查看源代码',
        'hide-source': '隐藏源代码',
        'edit-in-editor': '在 Playground 中编辑',
        'edit-on-github': '在 Github 中编辑',
        'copy-code': '复制代码',
        'copy-success': '复制成功',
        'copy-error': '复制失败'
      }
    },
  },

  srcExclude: ["README.md"],
  title: "embers blog",
  description: "全栈进阶之路",
  base: "/blog/", //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  
  head: [],
  markdown: {
    config: (md:any) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  }
};
