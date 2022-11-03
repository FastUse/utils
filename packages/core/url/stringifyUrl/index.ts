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

export function splitFirst(string: string, separator: string) {
  if (separator === '') {
    return [string]
  }

  const separatorIndex = string.indexOf(separator)

  if (separatorIndex === -1) {
    return [string]
  }

  return [
    string.slice(0, separatorIndex),
    string.slice(separatorIndex + separator.length)
  ]
}

export function decode(value: string) {
  return decodeURIComponent(value)
}

export function formatter(
  key: string,
  value: string | string[],
  accumulator: Record<string, any>
) {
  if (accumulator[key] === undefined) {
    accumulator[key] = value
    return
  }
  const result: string[] = []

  accumulator[key] = result.concat(accumulator[key], value)
}

export function parse(query: string) {
  const ret = Object.create(null)
  if (typeof query !== 'string') {
    return ret
  }

  query = query.replace(/^[?#&]/, '')

  if (!query) {
    return ret
  }

  for (const param of query.split('&')) {
    if (param === '') {
      continue
    }

    const [key, value] = splitFirst(param, '=')

    formatter(key, value, ret)
  }
}

export function stringify(object, options) {
  const objectCopy = {}

  for (const key of Object.keys(object)) {
    objectCopy[key] = object[key]
  }

  const keys = Object.keys(objectCopy)
}

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
  const query = Object.assign(parsedQueryFromUrl, object.query)
  const queryString = exports.stringify(query, options)
}
