import { test, expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { scrollToLower } from '.'

// 此单元测试不准确，JSDOM 中拿到的 getBoundingClientRect 所有的值都是默认为 0，并不会改变
test('scrollToLower true', () => {
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

  const scrollDom = dom.window.document.getElementById('scrollDom')

  let isBottoming = false
  scrollDom!.scrollTop = 200
  scrollToLower({
    scroller: scrollDom!,
    callback() {
      isBottoming = true
    },
    threshold: 20
  })

  expect(isBottoming).toBeTruthy()
})
