// Done

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr instanceof Array) {
    let array = arr.slice();
    if (array.length < 1) {
      return array;
    }
    if (array[0] === '--discard-prev' || array[0] === '--double-prev') {
      array.splice(0, 1);
    }
    if (array[array.length - 1] === '--double-next' || array[array.length - 1] === '--discard-next') {
      array.splice(array.length - 1, 1);
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] === '--discard-prev') {
        array.splice(i - 1, 2, '');
      } else if (array[i] === '--discard-next') {
        array.splice(i, 2, '');
      } else if (array[i] === '--double-prev') {
        array.splice(i, 1, array[i - 1]);
      } else if (array[i] === '--double-next') {
        array.splice(i, 1, array[i + 1]);
      }
    }
    array = array.filter(el => el !== '');
    return array;
  } else {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
}

module.exports = {
  transform
};
