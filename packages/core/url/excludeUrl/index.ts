import { pickUrl } from '../pickUrl'
import { filterType } from './types'

export function excludeUrl(url: string, filter: filterType) {
  const exclusionFilter = Array.isArray(filter)
    ? (key: string) => !filter.includes(key)
    : (key: string, value: string) => !filter(key, value)

  return pickUrl(url, exclusionFilter)
}
