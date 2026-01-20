import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "汽车陪练预约管理系统",
  description: "学员预约、教练执教、后台管理一体化系统",
  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '核心功能', link: '/features' },
      { text: '三端联动解决方案', link: '/solution' },
      { text: '联系方式', link: '/contact' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '首页',
        items: [
          { text: '首页', link: '/' }
        ]
      },
      {
        text: '核心功能',
        items: [
          { text: '核心功能', link: '/features' }
        ]
      },
      {
        text: '三端联动解决方案',
        items: [
          { text: '三端联动解决方案', link: '/solution' }
        ]
      },
      {
        text: '联系方式',
        items: [
          { text: '联系方式', link: '/contact' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Licshisan/llfx-vitepress' }
    ],
  },
})
