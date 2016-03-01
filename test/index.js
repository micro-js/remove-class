/**
 * Imports
 */

var hasClass = require('@f/has-class')
var removeClass = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var node = $('<div class="asdf test sdf"></div>')

  removeClass('test', node)
  t.notOk(hasClass('test', node))
  t.ok(hasClass('asdf', node))
  t.ok(hasClass('sdf', node))

  t.end()
})

/**
 * Helpers
 */

function $ (html) {
  document.body.innerHTML = html
  return document.body.firstChild
}
