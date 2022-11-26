import TouchCore, { Point } from '../touchCore'

export interface IDragEv {
  delta: {
    deltaX: number
    deltaY: number
  }
  origin: TouchEvent
}

export interface IDragOptions {
  el: HTMLElement
  onDragStart?: (ev: TouchEvent) => void
  onDragMove?: (dragEv: IDragEv) => void
  onDragEnd?: (ev: TouchEvent, lastPoint: Point) => void
}

const touchCore = new TouchCore()

// 拖动事件
export function drag(options: IDragOptions) {
  const { el, onDragStart, onDragMove, onDragEnd } = options

  let startPoint: Point
  let curPoint: Point
  let lastPoint: Point

  function onTouchstart(ev: TouchEvent) {
    startPoint = touchCore.getPoint(ev, 0)
    onDragStart?.(ev)
  }

  function onTouchmove(ev: TouchEvent) {
    curPoint = touchCore.getPoint(ev, 0)
    onDragMove?.({
      delta: {
        deltaX: curPoint.x - startPoint.x,
        deltaY: curPoint.y - startPoint.y
      },
      origin: ev
    })
  }

  function onTouchend(ev: TouchEvent) {
    onDragEnd?.(ev, lastPoint)
  }

  el.addEventListener('touchstart', onTouchstart)
  el.addEventListener('touchmove', onTouchmove)
  el.addEventListener('touchend', onTouchend)
  el.addEventListener('touchcancel', onTouchend)

  return function destroy() {
    el.removeEventListener('touchstart', onTouchstart)
    el.removeEventListener('touchmove', onTouchmove)
    el.removeEventListener('touchend', onTouchend)
    el.removeEventListener('touchcancel', onTouchend)
  }
}
