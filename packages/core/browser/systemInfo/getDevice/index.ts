import {
  uuid,
  isIPadOS,
  isWindows,
  isMac,
  isLinux,
  isIOS,
  uaMatch,
  isAndroid,
  ua
} from '../utils/index'

type DeviceType = 'phone' | 'pad' | 'PC' | 'unknown'
type DeviceOrientation = 'portrait' | 'landscape'

export interface IDeviceReturnType {
  deviceId: string // 设备id
  deviceType: DeviceType // 设备类型
  deviceModel: string // 设备型号
  deviceOrientation: DeviceOrientation // 设备方向
  devicePixelRatio: number // 设备像素比
}

export function getDevice(): IDeviceReturnType {
  let deviceType: DeviceType = 'phone'
  let deviceModel = ''
  if (isIOS) {
    const modelFind = uaMatch(/\(([a-zA-Z]+);/)
    if (modelFind) {
      // eslint-disable-next-line prefer-destructuring
      deviceModel = modelFind[1]
    }
  } else if (isAndroid) {
    const infoFind = uaMatch(/\((.+?)\)/)
    const infos = infoFind ? infoFind[1].split(';') : ua.split(' ')
    const otherInfo = [
      /\bAndroid\b/i,
      /\bLinux\b/i,
      /\bU\b/i,
      /^\s?[a-z][a-z]$/i,
      /^\s?[a-z][a-z]-[a-z][a-z]$/i,
      /\bwv\b/i,
      // eslint-disable-next-line no-useless-escape
      /\/[\d\.,]+$/,
      // eslint-disable-next-line no-useless-escape
      /^\s?[\d\.,]+$/,
      /\bBrowser\b/i,
      /\bMobile\b/i
    ]
    for (let i = 0; i < infos.length; i++) {
      const info = infos[i]
      if (info.indexOf('Build') > 0) {
        deviceModel = info.split('Build')[0].trim()
        break
      }
      let other
      for (let o = 0; o < otherInfo.length; o++) {
        if (otherInfo[o].test(info)) {
          other = true
          break
        }
      }
      if (!other) {
        deviceModel = info.trim()
        break
      }
    }
  } else if (isIPadOS) {
    deviceType = 'pad'
    deviceModel = 'iPad'
  } else if (isWindows || isMac || isLinux) {
    deviceType = 'PC'
    deviceModel = 'PC'
  } else {
    deviceType = 'unknown'
  }

  let deviceOrientation: DeviceOrientation = 'portrait'
  const orientation =
    typeof window.screen.orientation === 'undefined'
      ? window.orientation
      : window.screen.orientation.angle
  deviceOrientation = Math.abs(orientation) === 90 ? 'landscape' : 'portrait'

  return {
    deviceId: uuid(),
    deviceType,
    deviceModel,
    deviceOrientation,
    devicePixelRatio: window.devicePixelRatio
  }
}
