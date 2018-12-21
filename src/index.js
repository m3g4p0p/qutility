const isDescendant = ({ parentNode }, ancestor) => parentNode && (
  parentNode === ancestor ||
  isDescendant(parentNode, ancestor)
)

const identity = x => x
const defaultContext = document

export default function qutility (selector, context, mapFn) {
  const isSelectorString = typeof selector === 'string'

  const currentContext = context instanceof Node
    ? context
    : typeof context === 'string'
      ? defaultContext.querySelector(context)
      : defaultContext

  const currentMapFn = typeof context === 'function' ? context : mapFn

  const collection = isSelectorString
    ? currentContext.querySelectorAll(selector)
    : (
      selector instanceof NodeList ||
      selector instanceof HTMLCollection ||
      Array.isArray(selector)
    ) ? selector : [selector]

  return isSelectorString || currentContext === defaultContext
    ? Array.from(collection, currentMapFn)
    : Array.from(collection)
      .filter(element => isDescendant(element, currentContext))
      .map(currentMapFn || identity)
}
