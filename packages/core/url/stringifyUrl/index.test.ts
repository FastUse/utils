import { expect, test } from 'vitest'
import { stringifyUrl, removeHash, extract } from '.'

test('removeHash', () => {
  expect(removeHash('https://foo/#/bar?foo=1')).toEqual('https://foo/')

  expect(removeHash('https://foo/bar?foo=1')).toEqual('https://foo/bar?foo=1')
})

test('extract', () => {
  expect(extract('https://foo?foo=1/#/bar')).toEqual('foo=1/')
})
