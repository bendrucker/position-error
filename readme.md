# position-error [![Build Status](https://travis-ci.org/bendrucker/position-error.svg?branch=master)](https://travis-ci.org/bendrucker/position-error)

> Friendlier version of the PositionError from navigator.geolocation


## Install

```
$ npm install --save position-error
```


## Usage

```js
var PositionError = require('position-error')
var geolocation = require('browser-location')

location.get(function (err, position) {
  console.log(new PositionError(err))
  //=> {message, code, denied, unavailable, timeout}  
})
```

## API

#### `PositionError(source)` -> `error`

##### source

*Required*  
Type: `error`

A [`PositionError`](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) to transform.

Returns an error with:

###### message

Type: `string`

The error message.

###### code

Type: `number`

The error code (either 1, 2, or 3).

###### denied / timeout / unavailable

Type: `boolean`

Booleans for the three possible error codes. Only one will be true.

## Related

* [browser-location](https://github.com/bendrucker/browser-location)

## License

MIT © [Ben Drucker](http://bendrucker.me)
