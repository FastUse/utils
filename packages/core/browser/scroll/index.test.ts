import { test, expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { ScrollElement } from './types'
import { setScrollTop } from '.'

test('setScrollTop', () => {
  const { document } = new JSDOM().window

  setScrollTop(document.documentElement as unknown as ScrollElement, 20)

  expect(document.documentElement.scrollTop).toMatchInlineSnapshot('20')
})
