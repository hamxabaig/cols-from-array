# cols-from-array [![Build Status](https://travis-ci.com/hamxabaig/cols-from-array.svg?branch=master)](https://travis-ci.com/hamxabaig/cols-from-array)

> Create cols from an array with no bullshit! :sunglasses:

## Install

```
$ npm install cols-from-array
```


## Usage

```js
const createCols = require('cols-from-array');

createCols([1, 2, 3, 4, 5, 6], {colLength: 2});
//=> [[1, 3, 5], [2, 4, 6]]
```


## API

### createCols(arr, [options])

#### arr

Type: `Array`

The Array to convert into columns

#### options

Type: `Object`

##### colLength

Type: `number`<br>
Default: `2`

The number of columns to divide the array into. 

##### fillCol

Type: `any`<br>
Default: `N/A`

Used to fill the array cols if the length is uneven. For instance, 
```
createCols([1, 2, 3, 4, 5, 6, 7], {colLength: 3, fillCol: 0});
//=> [[1, 4, 7], [2, 5, 0], [3, 6, 0]]
```

## Related

- [rows-from-array](https://github.com/hamxabaig/rows-from-array) - Create rows from array

## License

MIT © Made with ❤️ & ☕️ by [Hamza Baig](http://hamxabaig.github.io)

