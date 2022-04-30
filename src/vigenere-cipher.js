// Done

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
    this.tabulaRecta = {
      A: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      B: "BCDEFGHIJKLMNOPQRSTUVWXYZA",
      C: "CDEFGHIJKLMNOPQRSTUVWXYZAB",
      D: "DEFGHIJKLMNOPQRSTUVWXYZABC",
      E: "EFGHIJKLMNOPQRSTUVWXYZABCD",
      F: "FGHIJKLMNOPQRSTUVWXYZABCDE",
      G: "GHIJKLMNOPQRSTUVWXYZABCDEF",
      H: "HIJKLMNOPQRSTUVWXYZABCDEFG",
      I: "IJKLMNOPQRSTUVWXYZABCDEFGH",
      J: "JKLMNOPQRSTUVWXYZABCDEFGHI",
      K: "KLMNOPQRSTUVWXYZABCDEFGHIJ",
      L: "LMNOPQRSTUVWXYZABCDEFGHIJK",
      M: "MNOPQRSTUVWXYZABCDEFGHIJKL",
      N: "NOPQRSTUVWXYZABCDEFGHIJKLM",
      O: "OPQRSTUVWXYZABCDEFGHIJKLMN",
      P: "PQRSTUVWXYZABCDEFGHIJKLMNO",
      Q: "QRSTUVWXYZABCDEFGHIJKLMNOP",
      R: "RSTUVWXYZABCDEFGHIJKLMNOPQ",
      S: "STUVWXYZABCDEFGHIJKLMNOPQR",
      T: "TUVWXYZABCDEFGHIJKLMNOPQRS",
      U: "UVWXYZABCDEFGHIJKLMNOPQRST",
      V: "VWXYZABCDEFGHIJKLMNOPQRSTU",
      W: "WXYZABCDEFGHIJKLMNOPQRSTUV",
      X: "XYZABCDEFGHIJKLMNOPQRSTUVW",
      Y: "YZABCDEFGHIJKLMNOPQRSTUVWX",
      Z: "ZABCDEFGHIJKLMNOPQRSTUVWXY"
    }
  }
  
  encrypt(message, key) {
    if (!arguments[0] || !arguments[1]) {
      throw new Error ("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    key = key.match(/[A-Z]/gi).join("");
    let encryptedMessage = "";
    let specialCharacterCount = 0;
    for (let i = 0; i < message.length; i++) {
      let keyLetter = (i - specialCharacterCount) % key.length;
      let keyWordIndex = this.tabulaRecta.A.indexOf(key[keyLetter]);
      if (this.tabulaRecta[message[i]]) {
        encryptedMessage += this.tabulaRecta[message[i]][keyWordIndex];
      } else {
        encryptedMessage += message[i];
        specialCharacterCount++;
      }
    }

    if (this.direct) {
      console.log(encryptedMessage);
      return encryptedMessage;
    } else {
      encryptedMessage = encryptedMessage.split("");
      encryptedMessage.reverse();
      console.log(encryptedMessage.join(""));
      return encryptedMessage.join("");
    }
  }

  decrypt(encryptedMessage, key) {
    if (!arguments[0] || !arguments[1]) {
      throw new Error ("Incorrect arguments!");
    }
    
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    key = key.match(/[A-Z]/gi).join("");
    let decryptedMessage = "";
    let specialCharacterCount = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let keyLetter = (i - specialCharacterCount) % key.length;
      let keyRow = this.tabulaRecta[key[keyLetter]];

      if (keyRow.indexOf(encryptedMessage[i]) !== -1) {
        decryptedMessage += this.tabulaRecta.A[keyRow.indexOf(encryptedMessage[i])];
      } else {
        decryptedMessage += encryptedMessage[i];
        specialCharacterCount++;
      }
    }
    if (this.direct) {
      console.log(decryptedMessage);
      return decryptedMessage;
    } else {
      decryptedMessage = decryptedMessage.split("");
      decryptedMessage.reverse();
      decryptedMessage = decryptedMessage.join("")
      console.log(decryptedMessage);
      return decryptedMessage;
    }
  }
}

// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);

// directMachine.encrypt('attack at dawn!', 'alphonse');
// directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// reverseMachine.encrypt('attack at dawn!', 'alphonse');
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');

module.exports = {
  VigenereCipheringMachine
};
