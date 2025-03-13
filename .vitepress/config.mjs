import { defineConfig } from 'vitepress';
//import { set_sidebar } from "../utils/auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/my-blog",
  title: "宋哥哥的网页",
  description: "A VitePress Site",
  themeConfig: {
    logo:'logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', items:[
        {text:'',link: '/'},
        {text:'Markdown示例',link: '/markdown-examples'}         
      ] }
    ],

    sidebar: [
      {
        text: '示例（待开发页面)',
        items: [
          { text: 'markdown示例', link: '/markdown-examples' },
          { text: 'api示例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright:"Copyright © 2025-present by Brother Song"
    }

  }
})
