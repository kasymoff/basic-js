// Done

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const savedIndexes = [];
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      savedIndexes.push(i)
    }
  }
  const secondArr = arr.filter(el => el > -1);
  secondArr.sort((a, b) => a - b);
  returnArr = [...secondArr];
  for (let i = 0; i < savedIndexes.length; i++) {
    returnArr.splice(savedIndexes[i], 0, -1)
  }
  return returnArr;
}

arr = [-1, 150, 190, 170, -1, -1, 160, 180]

sortByHeight(arr)

module.exports = {
  sortByHeight
};
