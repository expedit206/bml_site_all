/**
 * Animation utilities compatible with anime.js v4 (modular ESM API)
 */
import { animate, stagger, createTimeline, svg } from 'animejs'

// Polyfill for the old api-style staggered animations
export function animateElements(
  targets: string | Element | Element[] | NodeList,
  props: Record<string, unknown>,
  options: Record<string, unknown> = {}
) {
  return animate(targets, { ...props, ...options })
}

export function staggerElements(
  targets: string | Element | Element[] | NodeList,
  props: Record<string, unknown>,
  staggerOpts: { delay?: number; start?: number } = {},
  options: Record<string, unknown> = {}
) {
  return animate(targets, {
    ...props,
    delay: stagger(staggerOpts.delay ?? 100, { start: staggerOpts.start ?? 0 }),
    ...options,
  })
}

export { animate, stagger, createTimeline, svg }
