import { test, expect } from 'vitest'
import { parseUrl } from '.'

test('parseUrl', () => {
  expect(parseUrl('https://foo/index.html?bar=1&foo=2')).toMatchInlineSnapshot(`
    {
      "query": {
        "bar": "1",
        "foo": "2",
      },
      "url": "https://foo/index.html",
    }
  `)

  expect(parseUrl('https://foo/#/index.html?foo=1', { removeHash: false }))
    .toMatchInlineSnapshot(`
    {
      "query": {
        "foo": "1",
      },
      "url": "https://foo/",
    }
  `)
})
