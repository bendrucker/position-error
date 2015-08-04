'use strict'

var test = require('tape')
var PositionError = require('./')

test(function (t) {
  var source = new BrowserPositionError({
    code: 1,
    message: 'User denied Geolocation'
  })
  var err = new PositionError(source)
  t.equal(err.name, 'PositionError')
  t.deepEqual(err, {
    message: 'User denied Geolocation',
    denied: true,
    unavailable: false,
    timeout: false,
    code: 1
  })
  t.end()
})

function BrowserPositionError (props) {
  this.code = props.code
  this.message = props.message
}
