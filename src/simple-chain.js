const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = "") {
    this.chain.push(`( ${value} )`);
    console.log(this.chain)
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number') {
      if (position % 1 != 0 || position > this.chain.length || position < 1) {
        throw new Error("You can't remove incorrect link!");
      }
    }
    this.chain.splice(position - 1, 1);
    console.log(this.chain);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    console.log(this.chain);
    return this;
  },

  finishChain() {
    console.log(this.chain);
    const finishedChain = this.chain.join("~~");
    this.chain = [];
    console.log(finishedChain);
    return finishedChain;
  }
};

const exampleChain = chainMaker.addLink().removeLink(3)

module.exports = {
  chainMaker
};
