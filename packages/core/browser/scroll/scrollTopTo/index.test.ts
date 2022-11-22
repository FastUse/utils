import { test, expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { scrollTopTo, ScrollElement } from '.'

test('scrollTopTo', () => {
  const dom = new JSDOM(
    `<section id="scrollDom" style="height: 200px; overflow-y: auto;">
    <p style="height: 50px;">1</p>
    <p style="height: 50px;">2</p>
    <p style="height: 50px;">3</p>
    <p style="height: 50px;">4</p>
    <p style="height: 50px;">5</p>
    <p style="height: 50px;">6</p>
  </section>`
  )

  const scrollDom = dom.window.document.getElementById(
    'scrollDom'
  ) as ScrollElement

  scrollTopTo(scrollDom, 50)
  expect((scrollDom as Element).scrollTop).toMatchInlineSnapshot('50')

  scrollTopTo(scrollDom, 100, 0.5, () => {
    console.log((scrollDom as Element).scrollTop)
  })
  expect((scrollDom as Element).scrollTop).toMatchInlineSnapshot(
    '51.61290322580645'
  )
})
