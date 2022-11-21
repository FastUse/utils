import { test, expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { ScrollElement, getScrollTop } from '.'

test('getScrollTop', () => {
  const { window } = new JSDOM()

  expect(
    getScrollTop(window as unknown as ScrollElement)
  ).toMatchInlineSnapshot('0')
})
