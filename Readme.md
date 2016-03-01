
# remove-class

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Remove a class from a DOM element

## Installation

    $ npm install @f/remove-class

## Usage

```js
var removeClass = require('@f/remove-class')

function hide (node) {
  removeClass('show', node)
}
```

## API

### removeClass(className, element)

- `className` - The class name you want to remove from `element
- `element` - The element you want to remove `className` from

**Returns:** `element`

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/remove-class.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/remove-class
[git-image]: https://img.shields.io/github/tag/micro-js/remove-class.svg?style=flat-square
[git-url]: https://github.com/micro-js/remove-class
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/remove-class.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/remove-class
