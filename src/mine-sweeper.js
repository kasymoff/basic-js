// Done

const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let returnArr = matrix.slice();
  returnArr.unshift(new Array(matrix[0].length).fill(false));
  returnArr.push(new Array(matrix[0].length).fill(false));
  for (let i = 0; i < returnArr.length; i++) {
    returnArr[i].unshift(false);
    returnArr[i].push(false);
  };
  for (let i = 0; i < returnArr.length; i++) {
    for (let j = 0; j < returnArr[i].length; j++) {
      if (returnArr[i][j] === false) {
        returnArr[i][j] = 0;
      } else {
        returnArr[i][j] = 'mine';
      }
    }
  }
  for (let i = 0; i < returnArr.length; i++) {
    for (let j = 0; j < returnArr[i].length; j++) {
      if (returnArr[i][j] === 'mine') {
        if (typeof returnArr[i - 1][j - 1] === 'number') returnArr[i - 1][j - 1]++;
        if (typeof returnArr[i - 1][j] === 'number') returnArr[i - 1][j]++;
        if (typeof returnArr[i - 1][j + 1] === 'number') returnArr[i - 1][j + 1]++;
        if (typeof returnArr[i][j - 1] === 'number') returnArr[i][j - 1]++;
        if (typeof returnArr[i][j + 1] === 'number') returnArr[i][j + 1]++;
        if (typeof returnArr[i + 1][j - 1] === 'number') returnArr[i + 1][j - 1]++;
        if (typeof returnArr[i + 1][j] === 'number') returnArr[i + 1][j]++;
        if (typeof returnArr[i + 1][j + 1] === 'number') returnArr[i + 1][j + 1]++;
      }
    }
  }
  returnArr.shift();
  returnArr.pop();
  for(let i = 0; i < returnArr.length; i++) {
    returnArr[i].shift();
    returnArr[i].pop();
  }
  for (let i = 0; i < returnArr.length; i++) {
    for (let j = 0; j < returnArr[i].length; j++) {
      if (returnArr[i][j] === 'mine') {
        returnArr[i][j] = 1;
      }
    }
  }
  return returnArr;
}

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
])

minesweeper([
  [false, false, false],
  [false, false, false],
])

module.exports = {
  minesweeper
};
