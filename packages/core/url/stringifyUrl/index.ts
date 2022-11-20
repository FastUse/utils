import { removeHash, getHash, extract, stringify, parse } from '@FastUse/shared'
import { UrlObject } from './types'

export const stringifyUrl = (object: UrlObject) => {
  const url = removeHash(object.url).split('?')[0] || ''
  const queryFromUrl = extract(object.url)
  const parsedQueryFromUrl = parse(queryFromUrl)
  const query = Object.assign(parsedQueryFromUrl, object.query)
  let queryString = stringify(query)
  if (queryString) {
    queryString = `?${queryString}`
  }

  const hash = getHash(object.url)

  return `${url}${queryString}${hash}`
}
