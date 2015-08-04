'use strict'

var createError = require('create-error-class')

var codes = {
  1: 'denied',
  2: 'unavailable',
  3: 'timeout'
}

module.exports = createError('PositionError', function (err) {
  this.message = err.message
  this.code = err.code
  for (var code in codes) {
    this[codes[code]] = Number(code) === err.code
  }
})
