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
    this.chain.push(`( ${(value)} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'number' && position % 1 === 0) {
      if (position < 1 || position > this.chain.length) {
        this.chain = [];
        throw new Error("You can't remove incorrect link!");
      }
      this.chain.splice(position - 1, 1);
      return this;
    }
    this.chain = [];
    throw new Error("You can't remove incorrect link!");
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    finishedChain = this.chain.join("~~");
    this.chain = [];
    return finishedChain;
  }

};


const exampleChain = chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();
console.log(exampleChain);
const exampleChain2 = chainMaker.addLink(1).addLink(2).addLink(3).removeLink(2).finishChain();
console.log(exampleChain2);

module.exports = {
  chainMaker
};
