import { UrlObject, StringifyUrlOptions } from './types'

export function removeHash(input: string): string {
  const hashStart = input.indexOf('#')
  if (hashStart !== -1) {
    input = input.slice(0, hashStart)
  }

  return input
}

export function extract(input: string): string {
  input = removeHash(input)
  const queryStart = input.indexOf('?')
  if (queryStart === -1) {
    return ''
  }

  return input.slice(queryStart + 1)
}

function validateArrayFormatSeparator(value) {
  if (typeof value !== 'string' || value.length !== 1) {
    throw new TypeError('arrayFormatSeparator must be single character string')
  }
}

function parse(query: string) {}

export const stringifyUrl = (
  object: UrlObject,
  options?: StringifyUrlOptions
) => {
  options = Object.assign(
    {
      encode: false
    },
    options || {}
  )
  const url = removeHash(object.url).split('?')[0] || ''
  const queryFromUrl = extract(object.url)
  const parsedQueryFromUrl = parse(queryFromUrl)
  // const query = Object.assign(parsedQueryFromUrl, object.query)
}
