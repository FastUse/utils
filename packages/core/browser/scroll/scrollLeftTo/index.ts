export function scrollLeftTo(scroller: HTMLElement, to: number, duration = 0) {
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
