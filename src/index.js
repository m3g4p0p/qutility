export default function qutility (selector, context, mapFn) {
  const currentContext = (
    context instanceof Document ||
    context instanceof Element
  ) ? context : document

  const currentMapFn = typeof context === 'function' ? context : mapFn

  const collection = typeof selector === 'string'
    ? currentContext.querySelectorAll(selector)
    : (
      selector instanceof NodeList ||
      selector instanceof HTMLCollection ||
      Array.isArray(selector)
    ) ? selector : [selector]

  return Array.from(collection, currentMapFn)
}
