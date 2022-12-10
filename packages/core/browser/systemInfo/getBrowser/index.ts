import safeAreaInsets from 'safe-area-insets'
import { parserUa } from '../parserUa'
import { ua } from '../utils'

type BrowserName = 'chrome' | 'edge' | 'safari' | 'firefox'

export interface IGetBrowserReturnType {
  name: BrowserName | Omit<string, BrowserName> // 浏览器名称
  version: string // 浏览器版本
  screenWidth: number // 屏幕宽度
  screenHeight: number // 屏幕高度
  windowWidth: number // 可使用窗口宽度
  windowHeight: number // 可使用窗口高度
  pixelRatio: number // 屏幕像素比
  // 安全区域
  safeArea: {
    left: number
    right: number
    top: number
    bottom: number
    width: number
    height: number
  }
  safeAreaInsets: {
    support: boolean
    left: number
    right: number
    top: number
    bottom: number
  }
}

export function getBrowser(): IGetBrowserReturnType {
  const { browser } = parserUa(ua)
  const { screen } = window
  // 横屏时 iOS 获取的屏幕宽高颠倒，进行纠正
  const screenFix =
    /^Apple/.test(navigator.vendor) && typeof window.orientation === 'number'
  const landscape = screenFix && Math.abs(window.orientation) === 90
  const screenWidth = screenFix
    ? Math[landscape ? 'max' : 'min'](screen.width, screen.height)
    : screen.width
  const screenHeight = screenFix
    ? Math[landscape ? 'min' : 'max'](screen.height, screen.width)
    : screen.height

  const windowWidth =
    Math.min(
      window.innerWidth,
      document.documentElement.clientWidth,
      screenWidth
    ) || screenWidth
  const windowHeight = window.innerHeight

  const safeArea = {
    left: safeAreaInsets.left,
    right: windowWidth - safeAreaInsets.right,
    top: safeAreaInsets.top,
    bottom: windowHeight - safeAreaInsets.bottom,
    width: windowWidth - safeAreaInsets.left - safeAreaInsets.right,
    height: windowHeight - safeAreaInsets.top - safeAreaInsets.bottom
  }

  return {
    name: browser.name || '',
    version: browser.version || '',
    screenWidth,
    screenHeight,
    windowWidth,
    windowHeight,
    pixelRatio: window.devicePixelRatio,
    safeArea,
    safeAreaInsets
  }
}
