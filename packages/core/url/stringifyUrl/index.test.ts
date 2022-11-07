import { expect, test } from 'vitest'
import { stringifyUrl } from '.'

test('stringifyUrl', () => {
  expect(
    stringifyUrl({
      url: 'https://bar/foo?foo=1',
      query: { foo: '2', bar: '2' }
    })
  ).toMatchInlineSnapshot('"https://bar/foo?foo=2&bar=2"')
  expect(
    stringifyUrl({
      url: 'https://foo/#/index.html',
      query: {
        foo: '1',
        bar: '3'
      }
    })
  ).toMatchInlineSnapshot('"https://foo/?foo=1&bar=3#/index.html"')

  expect(
    stringifyUrl({
      url: 'https://bar/#/index.html?foo=1',
      query: {
        bar: '2'
      }
    })
  ).toMatchInlineSnapshot('"https://bar/?bar=2#/index.html?foo=1"')
})
