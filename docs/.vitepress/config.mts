import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "两只熊汽车陪练全链路智慧预约管理系统",
  description: "学员预约、教练执教、后台管理一体化系统",
  themeConfig: {
    logo: '/logo.svg',
    footer: {
      message: '客服：AI 智能客服（24小时在线） | 电话：1300000000 ',
      copyright: '© 2026 两只熊汽车陪练管理系统 版权所有'
    }
  },
})
