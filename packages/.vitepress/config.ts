import { defineConfig, DefaultTheme } from 'vitepress'

// BrowserScroll
const BrowserScroll: DefaultTheme.SidebarItem[] = [
  {
    text: "scroll",
    items: [
      {
        text: 'getScrollTop',
        link: '/core/browser/scroll/getScrollTop/'
      },
      {
        text: 'setScrollTop',
        link: '/core/browser/scroll/setScrollTop/'
      },
      {
        text: 'scrollTopTo',
        link: '/core/browser/scroll/scrollTopTo/'
      },
      {
        text: 'scrollLeftTo',
        link: '/core/browser/scroll/scrollLeftTo/'
      }
    ]
  }
]

// URL
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
  base: '/utils/',
  themeConfig: {
    logo: 'logo.svg',
    sidebar: {
      '/core/': [
        {
          text: 'Url',
          items: UrlSideItems
        },
        {
          text: 'Browser',
          items: BrowserScroll
        }
      ] 
    }
  },
})