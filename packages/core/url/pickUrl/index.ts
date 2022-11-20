import { filterObject } from '@FastUse/shared'
import { parseUrl } from '../parseUrl'
import { stringifyUrl } from '../stringifyUrl'

export type filterType =
  | string[]
  | ((key: string, val: string, obj: Record<string, string>) => boolean)

export function pickUrl(url: string, filter: filterType) {
  const { url: _url, query } = parseUrl(url)

  return stringifyUrl({
    url: _url,
    query: filterObject(query, filter)
  })
}
