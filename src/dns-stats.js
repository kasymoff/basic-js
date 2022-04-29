// Done

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.slice();
  let returnObj = {};
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('.');
  }
  arr = arr.map(el => el.reverse())
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j > 0) {
        arr[i][j] = `${arr[i][j - 1]}.${arr[i][j]}`
      } else {
        arr[i][j] = `.${arr[i][j]}`
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (returnObj.hasOwnProperty(`${arr[i][j]}`)) {
        returnObj[`${arr[i][j]}`] = returnObj[`${arr[i][j]}`] + 1;
      } else {
        returnObj[`${arr[i][j]}`] = 1;
      }
    }
  }
  return returnObj;
}

module.exports = {
  getDNSStats
};
