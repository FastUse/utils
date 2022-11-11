import { test, expect } from 'vitest'
import { excludeUrl } from '.'

test('excludeUrl', () => {
  expect(excludeUrl('https://foo?foo=1&bar=3', ['bar'])).toMatchInlineSnapshot(
    '"https://foo?foo=1"'
  )
})
