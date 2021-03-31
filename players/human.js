const { Player } = require("./player");

class Human extends Player {
  // extends allows for inheriting of any properties and method from parent
  constructor(name) {
    super(name); // super calls the constructor method of parent class. Pass in required parameters, can also override if needed
  }
}

module.exports.Human = Human;
