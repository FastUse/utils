import { test, expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { ScrollElement } from './types'
import { setScrollTop, getScrollTop } from '.'

test('getScrollTop', () => {
  const { window } = new JSDOM()

  expect(
    getScrollTop(window as unknown as ScrollElement)
  ).toMatchInlineSnapshot('0')
})

test('setScrollTop', () => {
  const { document } = new JSDOM().window

  setScrollTop(document.documentElement as unknown as ScrollElement, 20)

  expect(document.documentElement.scrollTop).toMatchInlineSnapshot('20')
})
