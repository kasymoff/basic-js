// Done

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let returnString = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      if (counter === 1) {
        returnString += `${str[i]}`
      } else {
        returnString += `${counter}${str[i]}`;
        counter = 1;
      }
    }
  }
  return returnString;
}

module.exports = {
  encodeLine
};
