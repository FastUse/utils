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
      },
      {
        text: 'scrollToLower',
        link: '/core/browser/scroll/scrollToLower/'
      }
    ]
  },
  {
    text: 'touch',
    items: [
      {
        text: 'drag',
        link: '/core/browser/touch/drag/'
      },
      {
        text: 'pinch',
        link: '/core/browser/touch/pinch/'
      },
      {
        text: 'rotate',
        link: '/core/browser/touch/rotate/'
      }
    ]
  },
  {
    text: 'systemInfo',
    items: [
      {
        text: 'parserUa',
        link: '/core/browser/systemInfo/parserUa/',
      },
      {
        text: 'getOs',
        link: '/core/browser/systemInfo/getOs/',
      },
      {
        text: 'getDevice',
        link: '/core/browser/systemInfo/getDevice/',
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