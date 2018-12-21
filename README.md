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

q('.meta-content')
  .flatMap(el => q('p', el))
  .forEach(el => {
    el.textContent = metaContent
  })
```

Please have a look at the [specs](./spec/index.spec.js) for details.

# Todo

- [ ] Accept a context argument for elements and collections as well

## License

MIT 2018
