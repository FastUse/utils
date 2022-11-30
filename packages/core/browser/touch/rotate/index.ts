import TouchCore, { Point } from '../touchCore'

export interface IRotateEv {
  delta: {
    rotate: number
  }
  origin: TouchEvent
}

export interface IRotateOption {
  el: HTMLElement
  onRotateStart?: (ev: TouchEvent) => void
  onRotateIng?: (rotateEv: IRotateEv) => void
  onRotateEnd?: (ev: TouchEvent) => void
}

const touchCore = new TouchCore()

export function rotate(option: IRotateOption) {
  const { el, onRotateStart, onRotateIng, onRotateEnd } = option

  let vector1: Point
  let vector2: Point

  function onTouchstart(ev: TouchEvent) {
    if (ev.touches.length > 1) {
      vector1 = touchCore.getVector(
        touchCore.getPoint(ev, 1),
        touchCore.getPoint(ev, 0)
      )
      onRotateStart?.(ev)
    }
  }

  function onTouchmove(ev: TouchEvent) {
    if (ev.touches.length > 1) {
      if (!vector1) {
        vector1 = touchCore.getVector(
          touchCore.getPoint(ev, 1),
          touchCore.getPoint(ev, 0)
        )
      } else {
        vector2 = touchCore.getVector(
          touchCore.getPoint(ev, 1),
          touchCore.getPoint(ev, 0)
        )
      }
      if (vector1 && vector2) {
        console.log(
          vector1,
          vector2,
          '456',
          touchCore.getAngle(vector1, vector2)
        )
        onRotateIng?.({
          delta: {
            rotate: touchCore.getAngle(vector1, vector2)
          },
          origin: ev
        })
        vector1 = vector2
      }
    }
  }

  function onTouchend(ev: TouchEvent) {
    onRotateEnd?.(ev)
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
