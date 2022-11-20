import { defineConfig, DefaultTheme } from 'vitepress'

const UrlSideItems: DefaultTheme.SidebarItem[] = [
  {
    text: 'stringifyUrl',
    link: '/core/url/stringifyUrl/'
  },
  {
    text: 'pickUrl',
    link: '/core/url/pickUrl/'
  },
  {
    text: 'parseUrl',
    link: '/core/url/parseUrl/'
  },
  {
    text: 'excludeUrl',
    link: '/core/url/excludeUrl/'
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