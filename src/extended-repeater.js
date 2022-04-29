// Done

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let initialString = String(str);
  let separator = "+";
  let addition;
  let additionSeparator = "|";
  if (arguments[1].hasOwnProperty('separator')) {
    separator = String(options['separator']);
  };
  if (arguments[1].hasOwnProperty('addition')) {
    addition = String(options['addition']);
    initialString += addition;
  };
  if (arguments[1].hasOwnProperty('additionSeparator')) {
    additionSeparator = String(options['additionSeparator']);
  };
  if (arguments[1].hasOwnProperty('additionRepeatTimes')) {
    for (let i = 1; i < options['additionRepeatTimes']; i++) {
      initialString += additionSeparator;
      initialString += addition;
    }
  }
  if (arguments[1].hasOwnProperty('repeatTimes')) {
    const repeatString = initialString;
    for (let i = 1; i < options['repeatTimes']; i++) {
      initialString += separator;
      initialString += repeatString;
    }
  }
  return initialString;
}

// repeater('STRING', { repeatTimes: 3, separator: '**', addition: true, additionRepeatTimes: 3, additionSeparator: '00' });

module.exports = {
  repeater
};
