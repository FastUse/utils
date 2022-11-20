import { defineConfig, DefaultTheme } from 'vitepress'

const UrlSideItems: DefaultTheme.SidebarItem[] = [
  {
    text: 'stringifyUrl',
    link: '/core/url/stringifyUrl/'
  }
]

export default defineConfig({
  title: 'Utils',
  description: '日常开发遇到的公共方法记录',
  themeConfig: {
    logo: 'logo.svg',
    sidebar: {
      '/core/': [
        {
          text: "Url",
          items: UrlSideItems
        }
      ] 
    }
  },
})