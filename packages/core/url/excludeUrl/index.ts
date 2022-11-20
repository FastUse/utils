import { pickUrl } from '../pickUrl'

export type filterType =
  | string[]
  | ((key: string, val: string, obj?: Record<string, string>) => boolean)

export function excludeUrl(url: string, filter: filterType) {
  const exclusionFilter = Array.isArray(filter)
    ? (key: string) => !filter.includes(key)
    : (key: string, value: string) => !filter(key, value)

  return pickUrl(url, exclusionFilter)
}
