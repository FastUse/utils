import { test, expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { scrollLeftTo } from '.'

test('scrollTopTo', () => {
  const dom = new JSDOM(
    `<section id="scrollDom" 
    style="width: 300px; overflow-x: auto; display: flex;">
    <p style="width: 100px;height: 50px;flex-shrink: 0;">1</p>
    <p style="width: 100px;height: 50px;flex-shrink: 0;">2</p>
    <p style="width: 100px;height: 50px;flex-shrink: 0;">3</p>
    <p style="width: 100px;height: 50px;flex-shrink: 0;">4</p>
    <p style="width: 100px;height: 50px;flex-shrink: 0;">5</p>
    <p style="width: 100px;height: 50px;flex-shrink: 0;">6</p>
  </section>`
  )

  const scrollDom = dom.window.document.getElementById(
    'scrollDom'
  ) as HTMLElement

  scrollLeftTo(scrollDom, 100, 0.2)
  expect(scrollDom.scrollLeft).toMatchInlineSnapshot('7.6923076923076925')
})
