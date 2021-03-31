const { Player } = require("./player");

class Computer extends Player {
  constructor(name) {
    super(name);
  }

  generateRandomNumber(maxLimit) {
    let randomNumber = Math.floor(Math.random() * maxLimit) + 1;
    return randomNumber;
  }

  chooseGesture() {
    let gestureIndex = this.generateRandomNumber(4);
    return this.gestureOptions[gestureIndex];
  }
}

module.exports.Computer = Computer;
