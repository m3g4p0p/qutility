# qutility

Minimalistic DOM query utility.

## Installation

```shell
yarn add qutility
```

## Usage

Basically forwards elements, collections, or collections from selector strings (+ optional context) to `Array.from()`. Like this or something:

```javascript
import q from 'qutility'

const metaContent = q('meta', document.head, el => el.content).join('\n')

q('section')
  .flatMap(el => q('.meta-content', el))
  .forEach(el => {
    el.textContent = metaContent
  })
```

Please have a look at the [specs](./spec/index.spec.js) for details.

# Todo

- [x] Accept a context argument for elements and collections as well
- [ ] Accept a selector string as the context argument

## License

MIT 2018
