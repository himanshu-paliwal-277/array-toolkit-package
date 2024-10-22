/**
 * Removes duplicate values from an array
 * @param {Array} arr - The input array
 * @returns {Array} - A new array with only unique values
 */
function uniqueElements(arr) {
  return [...new Set(arr)];
}

/**
 * Flatten an array
 * @param {Array} arr - The input array
 * @returns {Array} - Flattened array
 */

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => 
      flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

/**
 * chunk an array
 * @param {Array} arr - The input array
 * @param {Number} size - The chunk size
 * @returns {Array} - The chunked array
 */
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * find array difference
 * @param {Array} arr1 - The first array 
 * @param {Array} arr2 - The second array
 * @returns {Array} - The difference between the two arrays
 */

function arrayDifference(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item));
}


/**
 * find array intersection
 * @param {Array} arr1 - The first array
 * @param {Array} arr2 - The second array 
 * @returns {Array} - The intersection of the two arrays
 */
function intersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

/**
 * remove falsy values
 * @param {Array} arr - The input array
 * @returns {Array} - The array with falsy values removed
 */
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

/**
 * find maximum value
 * @param {Array} arr - The input array 
 * @returns {Number} - The maximum value
 */
function maxValue(arr) {
  return Math.max(...arr);
}

/**
 * find minimum value
 * @param {Array} arr - The input array 
 * @returns {Number} - The minimum value
 */
function minValue(arr) {
  return Math.min(...arr);
}

/**
 * find array sum
 * @param {Array} arr - The input array
 * @returns {Number} - The sum of the array
 */
function arraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

/**
 * shuffle an array
 * @param {Array} arr - The input array
 * @returns {Array} - The shuffled array
 */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// export all functions
module.exports = {
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
};
