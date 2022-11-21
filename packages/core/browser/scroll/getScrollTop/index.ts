export type ScrollElement = Element | Window

export function getScrollTop(el: ScrollElement): number {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset || el.scrollY

  return Math.max(top, 0)
}
