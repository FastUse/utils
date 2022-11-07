import { splitFirst, parse, extract } from '@/shared'

export function parseUrl(url: string) {
  const [url_] = splitFirst(url, '#')

  return {
    url: url_.split('?')[0] || '',
    query: parse(extract(url))
  }
}
