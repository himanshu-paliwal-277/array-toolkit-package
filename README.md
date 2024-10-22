
# Array Toolkit

A collection of utility functions for working with arrays in JavaScript.

## Features

- **uniqueElements**: Removes duplicate values from an array.
- **flattenArray**: Flattens nested arrays into a single array.
- **chunkArray**: Splits an array into chunks of specified size.
- **arrayDifference**: Finds the difference between two arrays.
- **intersection**: Returns the intersection of two arrays.
- **removeFalsyValues**: Removes falsy values from an array.
- **maxValue**: Finds the maximum value in an array.
- **minValue**: Finds the minimum value in an array.
- **arraySum**: Calculates the sum of the elements in an array.
- **shuffleArray**: Randomly shuffles the elements of an array.

## Installation

You can install this package via npm:

```bash
npm install array-toolkit-package
```

## Usage

### Import the functions:

```javascript
const {
  uniqueElements,
  flattenArray,
  chunkArray,
  arrayDifference,
  intersection,
  removeFalsyValues,
  maxValue,
  minValue,
  arraySum,
  shuffleArray,
} = require('array-toolkit');
```

### Example

```javascript
// Removing duplicates
const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueElements(arr)); // [1, 2, 3, 4, 5]

// Flattening an array
const nestedArr = [1, [2, [3, 4]], 5];
console.log(flattenArray(nestedArr)); // [1, 2, 3, 4, 5]

// Chunking an array
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]

// Finding the difference between two arrays
console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // [1]

// Finding the intersection of two arrays
console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]

// Removing falsy values from an array
console.log(removeFalsyValues([0, 1, false, 2, '', 3])); // [1, 2, 3]

// Finding the maximum value in an array
console.log(maxValue([1, 2, 3, 4, 5])); // 5

// Finding the minimum value in an array
console.log(minValue([1, 2, 3, 4, 5])); // 1

// Calculating the sum of an array
console.log(arraySum([1, 2, 3, 4, 5])); // 15

// Shuffling an array
console.log(shuffleArray([1, 2, 3, 4, 5])); // Random order
```

## License

This project is licensed under the MIT License.
