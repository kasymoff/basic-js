// Done

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = Number(n.toString().slice(1));
  const givenNum = n.toString();
  for (let i = 0; i < givenNum.length; i++) {
    const str = givenNum.slice(0, i) + givenNum.slice(i + 1);
    if (Number(str) > number) {
      number = Number(str)
    }
  }
  return number;
}

module.exports = {
  deleteDigit
};
