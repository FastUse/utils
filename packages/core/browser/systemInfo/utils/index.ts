const isClient = typeof window !== 'undefined'

export const defaultWindow = /* #__PURE__ */ isClient ? window : undefined

export const ua = defaultWindow?.navigator.userAgent || ''

/**
 * 是否安卓设备
 */
export const isAndroid = /android/i.test(ua)

/**
 * 是否iOS设备
 */
export const isIOS = /iphone|ipad|ipod/i.test(ua)

/**
 * 是否是Windows设备
 */
export const isWindows = ua.match(/Windows NT ([\d|\d.\d]*)/i)

/**
 * 是否是Linux设备
 */
export const isLinux = /Linux|X11/i.test(ua)

/**
 * 是否是Mac设备
 */
export const isMac = /Macintosh|Mac/i.test(ua)

/**
 * 是否是iPadOS
 */
export const isIPadOS = isMac && window.navigator.maxTouchPoints > 0

/**
 * 获取系统版本
 */
export function uaMatch(exp: RegExp) {
  return ua.match(exp) || ''
}

/**
 * 获取系统主题
 */
export function getOsTheme() {
  const mediaDarkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const mediaLightQuery = window.matchMedia('(prefers-color-scheme: light)')
  if (mediaDarkQuery.matches) {
    return 'dark'
  } else if (mediaLightQuery.matches) {
    return 'light'
  } else {
    return ''
  }
}

/**
 * 生成唯一id
 */
const UUID_KEY = 'DEVICE_UUID'
const storage: any =
  defaultWindow?.localStorage || defaultWindow?.sessionStorage || {}
let deviceId: string | undefined

export function uuid() {
  deviceId = deviceId || storage[UUID_KEY]
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7)
    try {
      storage[UUID_KEY] = deviceId
    } catch (error) {}
  }
  return deviceId
}
