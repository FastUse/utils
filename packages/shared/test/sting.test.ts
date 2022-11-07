import { test, expect } from 'vitest'
import {
  splitFirst,
  removeHash,
  getHash,
  extract,
  decode,
  encode,
  formatter,
  stringify
} from '../string'

test('splitFirst', () => {
  expect(splitFirst('', '=')).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect(splitFirst('foo=2', '=')).toMatchInlineSnapshot(`
    [
      "foo",
      "2",
    ]
  `)
  expect(splitFirst('bar-2', '=')).toMatchInlineSnapshot(`
    [
      "bar-2",
    ]
  `)
})

test('removeHash', () => {
  expect(removeHash('https://foo/#/bar?foo=1')).toEqual('https://foo/')
  expect(removeHash('https://foo/bar?foo=1')).toEqual('https://foo/bar?foo=1')
})

test('getHash', () => {
  expect(getHash('https://bar/#/index.html')).toEqual('#/index.html')
})

test('extract', () => {
  expect(extract('https://foo?foo=1/#/bar')).toEqual('foo=1/')
  expect(extract('https://foo/#/bar?foo=1')).toEqual('')
  expect(extract('https://foo/bar?foo=1&bar=2')).toEqual('foo=1&bar=2')
})

test('decode', () => {
  expect(decode('%E5%BC%A0%E4%B8%89')).toEqual('张三')
})

test('encode', () => {
  expect(encode('张三')).toEqual('%E5%BC%A0%E4%B8%89')
})

test('formatter', () => {
  const ret = {}
  formatter('foo', '22', ret)
  expect(ret).toMatchInlineSnapshot(`
    {
      "foo": "22",
    }
  `)
  formatter('bar', '33', ret)
  expect(ret).toMatchInlineSnapshot(`
    {
      "bar": "33",
      "foo": "22",
    }
  `)
  formatter('bar', '44', ret)
  expect(ret).toMatchInlineSnapshot(`
    {
      "bar": [
        "33",
        "44",
      ],
      "foo": "22",
    }
  `)
})

test('stringify', () => {
  expect(stringify({ foo: '1', bar: '2' })).toMatchInlineSnapshot(
    '"foo=1&bar=2"'
  )
})
