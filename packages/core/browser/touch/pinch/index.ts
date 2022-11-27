import TouchCore from '../touchCore'

export interface IPinchEv {
  delta: {
    scale: number
  }
  origin: TouchEvent
}

export interface IPinchOptions {
  el: HTMLElement
  onPinchStart?: (ev: TouchEvent) => void
  onPinchMove?: (pinchEv: IPinchEv) => void
  onPinchEnd?: (ev: TouchEvent) => void
}

const { getPoint, getLength, getVector } = new TouchCore()

export function pinch(options: IPinchOptions) {
  const { el, onPinchStart, onPinchMove, onPinchEnd } = options
  let pinchStartLength: number
  let pinchLength: number
  function onTouchstart(ev: TouchEvent) {
    if (ev.touches.length > 1) {
      const vector1 = getVector(getPoint(ev, 0), getPoint(ev, 1))
      pinchStartLength = getLength(vector1)
    }
    onPinchStart?.(ev)
  }

  function onTouchmove(ev: TouchEvent) {
    if (ev.touches.length > 1) {
      if (!pinchStartLength) {
        const vector1 = getVector(getPoint(ev, 0), getPoint(ev, 1))
        pinchStartLength = getLength(vector1)
      } else {
        const vector2 = getVector(getPoint(ev, 0), getPoint(ev, 1))
        pinchLength = getLength(vector2)
      }

      if (pinchLength && pinchStartLength) {
        onPinchMove?.({
          delta: {
            scale: pinchLength / pinchStartLength
          },
          origin: ev
        })
        pinchStartLength = pinchLength
      }
    }
  }

  function onTouchend(ev: TouchEvent) {
    onPinchEnd?.(ev)
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
