// https://github1s.com/youzan/vant/blob/HEAD/packages/vant/src/utils/dom.ts#L15-L19

import { ScrollElement } from './types'

export function getScrollTop(el: ScrollElement): number {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset || el.scrollY

  return Math.max(top, 0)
}

export function setScrollTop(el: ScrollElement, value: number) {
  if ('scrollTop' in el) {
    el.scrollTop = value
  } else {
    el.scrollTo(el.scrollX, value)
  }
}

export function scrollTopTo(
  scroller: ScrollElement,
  to: number,
  duration: number,
  callback: () => void
) {
  let current = getScrollTop(scroller)

  const isDown = current < to
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16)

  const step = (to - current) / frames

  function animate() {
    current += step

    if ((isDown && current > to) || (!isDown && current < to)) {
      current = to
    }

    setScrollTop(scroller, current)

    if ((isDown && current < to) || (!isDown && current > to)) {
      requestAnimationFrame(animate)
    } else if (callback) {
      requestAnimationFrame(callback as FrameRequestCallback)
    }
  }

  animate()
}

export function scrollLeftTo(
  scroller: HTMLElement,
  to: number,
  duration: number
) {
  let count = 0
  const from = scroller.scrollLeft
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16)

  function animate() {
    scroller.scrollLeft += (to - from) / frames

    if (++count < frames) {
      requestAnimationFrame(animate)
    }
  }

  animate()
}
