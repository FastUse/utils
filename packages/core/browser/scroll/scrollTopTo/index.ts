import { getScrollTop } from '../getScrollTop'
import { setScrollTop } from '../setScrollTop'

export type ScrollElement = Element | Window

export function scrollTopTo(
  scroller: ScrollElement,
  to: number,
  duration = 0,
  callback?: () => void
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
