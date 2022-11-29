export interface IScrollToLowerOption {
  scroller: HTMLElement
  callback?: () => void
  threshold?: number
}

export function scrollToLower(option: IScrollToLowerOption) {
  const { scroller, callback, threshold = 0 } = option
  const scrollRect = scroller.getBoundingClientRect()

  const lastElementChildRect =
    scroller.lastElementChild?.getBoundingClientRect()
  if (
    lastElementChildRect &&
    lastElementChildRect.bottom - scrollRect.bottom <= threshold
  ) {
    callback?.()
  }
}
