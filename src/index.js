const isDescendant = ({ parentNode }, ancestor) => parentNode && (
  parentNode === ancestor ||
  isDescendant(parentNode, ancestor)
)

const identity = x => x

export default function qutility (selector, context, mapFn) {
  const isContextProvided = context instanceof Node
  const isSelectorString = typeof selector === 'string'
  const currentContext = isContextProvided ? context : document
  const currentMapFn = typeof context === 'function' ? context : mapFn

  const collection = isSelectorString
    ? currentContext.querySelectorAll(selector)
    : (
      selector instanceof NodeList ||
      selector instanceof HTMLCollection ||
      Array.isArray(selector)
    ) ? selector : [selector]

  return isSelectorString || !isContextProvided
    ? Array.from(collection, currentMapFn)
    : Array.from(collection)
      .filter(element => isDescendant(element, currentContext))
      .map(currentMapFn || identity)
}
