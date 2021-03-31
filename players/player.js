// Great video for reference about inheritance (especially extends and super): https://www.youtube.com/watch?v=CwAU1wYeHiM&ab_channel=StephenMayeux
// why inheritance? DRY - Don't repeat yourself
const { Rock, Paper, Scissors, Lizard, Spock } = require("../gestures/gesture");
const prompt = require("prompt-sync")();

class Player {
  // parent
  constructor(name) {
    this.name = name;
    this.currentScore = 0;
    this.gestureOptions = [
      new Rock(),
      new Paper(),
      new Scissors(),
      new Lizard(),
      new Spock(),
    ];
  }

  displayGestures() {
    for (var i = 0; i <= this.gestureOptions.length - 1; i++) {
      console.log(this.gestureOptions[i].name);
    }
  }

  chooseGesture() {
    this.displayGestures();
    console.log(`Which gesture would you like to choose?\n`);
    var input = prompt().toLocaleLowerCase();
    let choice;

    switch (input) {
      case "rock":
        choice = this.gestureOptions[0];
        break;
      case "paper":
        choice = this.gestureOptions[1];
        break;
      case "scissors":
        choice = this.gestureOptions[2];
        break;
      case "lizard":
        choice = this.gestureOptions[3];
        break;
      case "spock":
        choice = this.gestureOptions[4];
        break;
      default:
        this.chooseGesture();
    }

    return choice;
  }
}

module.exports.Player = Player;
