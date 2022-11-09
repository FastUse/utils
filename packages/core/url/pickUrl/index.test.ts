import { test, expect } from 'vitest'
import { pickUrl } from '.'

test('pickUrl', () => {
  expect(pickUrl('https://foo?foo=1&bar=2', ['foo'])).toMatchInlineSnapshot(
    '"https://foo?foo=1"'
  )
  expect(
    pickUrl('https://foo?foo=1&bar=2', key => key === 'bar')
  ).toMatchInlineSnapshot('"https://foo?bar=2"')
})
