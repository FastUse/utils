import { test, expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { setScrollTop } from '.'
import { ScrollElement } from './types'

test('setScrollTop', () => {
  const { window } = new JSDOM()
  const { document } = (new JSDOM()).window;
  
  setScrollTop(window as unknown as ScrollElement, 10)
  
  expect(window.scrollY).toMatchInlineSnapshot('0')
})