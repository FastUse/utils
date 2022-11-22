import { test, expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { setScrollTop, ScrollElement } from '.'

test('setScrollTop', () => {
  const { document } = new JSDOM().window

  setScrollTop(document.documentElement as unknown as ScrollElement, 20)

  expect(document.documentElement.scrollTop).toMatchInlineSnapshot('20')
})
