import {
  osVersionMatch,
  isIOS,
  isAndroid,
  isIPadOS,
  isWindows,
  isMac,
  isLinux,
  getOsTheme
} from '../utils/index'

export interface IOsReturnType {
  osName: string // 系统名称
  osVersion: string // 系统版本
  osLanguage: string // 系统语言
  osTheme: 'dark' | 'light' | '' // 系统主题
}

/**
 * 设备的操作系统
 */
export function getOs(): IOsReturnType {
  let osName = ''
  let osVersion = ''
  if (isIOS) {
    osName = 'iOS'
    const osVersionFind = osVersionMatch(/OS\s([\w_]+)\slike/)
    if (osVersionFind) {
      osVersion = osVersionFind[1].replace(/_/g, '.')
    }
  } else if (isAndroid) {
    osName = 'Android'
    // eslint-disable-next-line no-useless-escape
    const osVersionFind = osVersionMatch(/Android[\s/]([\w\.]+)[;\s]/)
    if (osVersionFind) {
      // eslint-disable-next-line prefer-destructuring
      osVersion = osVersionFind[1]
    }
  } else if (isIPadOS) {
    osName = 'iOS'
    osVersion = typeof window.BigInt === 'function' ? '14.0' : '13.0'
  } else if (isWindows || isMac || isLinux) {
    osName = 'PC'
    // eslint-disable-next-line prefer-destructuring
    const osVersionFind = (osVersionMatch(/\((.+?)\)/) as RegExpMatchArray)[1]
    if (isWindows) {
      osName = 'Windows'
      osVersion = ''
      switch (isWindows[1]) {
        case '5.1':
          osVersion = 'XP'
          break
        case '6.0':
          osVersion = 'Vista'
          break
        case '6.1':
          osVersion = '7'
          break
        case '6.2':
          osVersion = '8'
          break
        case '6.3':
          osVersion = '8.1'
          break
        case '10.0':
          osVersion = '10'
          break
        default:
          break
      }

      const framework = osVersionFind?.match(/[Win|WOW]([\d]+)/)
      if (framework) {
        osVersion += ` x${framework[1]}`
      }
    } else if (isMac) {
      osName = 'macOS'
      const findMatch = osVersionFind.match(/Mac OS X (.+)/) || ''
      if (findMatch) {
        osVersion = findMatch[1].replace(/_/g, '.')
        // '10_15_7' or '10.16; rv:86.0'
        if (osVersion.indexOf(';') !== -1) {
          // eslint-disable-next-line prefer-destructuring
          osVersion = osVersion.split(';')[0]
        }
      }
    } else if (isLinux) {
      osName = 'Linux'
      const findMatch = osVersionFind?.match(/Linux (.*)/) || ''
      if (findMatch) {
        // eslint-disable-next-line prefer-destructuring
        osVersion = findMatch[1]
        // 'x86_64' or 'x86_64; rv:79.0'
        if (osVersion.indexOf(';') !== -1) {
          osVersion = osVersion?.split(';')[0]
        }
      }
    }
  } else {
    osName = 'Other'
    osVersion = '0'
  }

  return {
    osName: osName.toLocaleLowerCase(),
    osVersion,
    osLanguage: window.navigator.language,
    osTheme: getOsTheme()
  }
}
