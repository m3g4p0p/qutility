import q from '../src/index'

describe('qutil', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="foo"></div>
      <div class="bar">
        <div class="foo"></div>
        <div class="baz"></div>
      </div>
    `
  })

  describe('first argument is a string', () => {
    it('should return an array of matched elements', () => {
      const result = q('.foo')
      const expected = document.querySelectorAll('.foo')

      expect(result).toEqual([...expected])
      expect(Array.isArray(result)).toBe(true)
    })

    it('should accept a context argument', () => {
      const context = document.querySelector('.bar')
      const result = q('.foo', context)
      const expected = context.querySelectorAll('.foo')

      expect(result).toEqual([...expected])
    })

    it('should accept a mapper function', () => {
      const result = q('.baz', element => element.parentElement)
      const expected = document.querySelectorAll('.bar')

      expect(result).toEqual([...expected])
    })

    it('should accept both context and mapper function', () => {
      const context = document.querySelector('.bar')
      const result = q('.foo', context, element => element.parentElement)

      expect(result).toEqual([context])
    })
  })

  describe('first argument is a collection', () => {
    it('should return an array of the contained elements', () => {
      const collection = document.querySelectorAll('.foo')
      const result = q(collection)

      expect(result).toEqual([...collection])
      expect(Array.isArray(result)).toBe(true)
    })

    it('should accept a mapper function', () => {
      const collection = document.querySelectorAll('.baz')
      const result = q(collection, element => element.parentElement)
      const expected = document.querySelectorAll('.bar')

      expect(result).toEqual([...expected])
    })
  })

  describe('first argument is an element', () => {
    it('should return an array with the element', () => {
      const element = document.querySelector('.foo')
      const result = q(element)

      expect(result).toEqual([element])
      expect(Array.isArray(result)).toBe(true)
    })

    it('should accept a mapper function', () => {
      const element = document.querySelectorAll('.baz')
      const result = q(element, element => element.parentElement)
      const expected = document.querySelectorAll('.bar')

      expect(result).toEqual([...expected])
    })
  })
})
