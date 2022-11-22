import { StrObject } from './types'

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

export function removeHash(input: string): string {
  const hashStart = input.indexOf('#')
  if (hashStart !== -1) {
    input = input.slice(0, hashStart)
  }

  return input
}

export function getHash(url: string) {
  let hash = ''
  const hashStart = url.indexOf('#')

  if (hashStart !== -1) {
    hash = url.slice(hashStart)
  }

  return hash
}

export function extract(input: string): string {
  input = removeHash(input)
  const queryStart = input.indexOf('?')
  if (queryStart === -1) {
    return ''
  }

  return input.slice(queryStart + 1)
}

export function decode(value: string) {
  return decodeURIComponent(value)
}

export function encode(value: string) {
  return encodeURIComponent(value)
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

export function stringify(object: StrObject) {
  const objectCopy: StrObject = {}

  for (const key of Object.keys(object)) {
    objectCopy[key] = object[key]
  }

  const keys = Object.keys(objectCopy)

  return keys
    .map(key => {
      const value = object[key]

      return `${encode(key)}=${encode(value)}`
    })
    .filter(x => x.length > 0)
    .join('&')
}

export function parse(query: string) {
  const ret: StrObject = Object.create(null)
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

  return ret
}

export function filterObject(
  obj: StrObject,
  predicate: string[] | ((key: string, val: string, obj: StrObject) => boolean)
) {
  const ret = Object.create(null)
  const keys = Object.keys(obj)
  const isArr = Array.isArray(predicate)

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const val = obj[key]

    if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
      ret[key] = val
    }
  }

  return ret
}
