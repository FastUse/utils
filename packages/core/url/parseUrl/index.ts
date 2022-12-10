import { splitFirst, parse, extract } from '@FastUse/shared'

export function parseUrl(url: string, options = { removeHash: true }) {
  const [url_] = splitFirst(url, '#')

  return {
    url: url_.split('?')[0] || '',
    query: parse(extract(url, options))
  }
}
