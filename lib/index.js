/**
 * Modules
 */

var hasClass = require('@f/has-class')

/**
 * Expose removeClass
 */

module.exports = removeClass

/**
 * removeClass
 */

function removeClass (className, element) {
  if (element.classList) {
    element.classList.remove(className)
  } else if (hasClass(className, element)) {
    var re = new RegExp('(?:^|\\s)' + className, 'i')
    element.className = element.className.replace(re, '')
  }

  return element
}
