export function hoverLift(canHover, y = -4) {
  return canHover ? { y } : undefined
}

export function hoverScale(canHover, scale = 1.03) {
  return canHover ? { scale } : undefined
}

export function tapFeedback(canHover) {
  return canHover ? { scale: 0.98 } : undefined
}

export function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
  }
}
