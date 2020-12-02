"use strict";

// Rock, Paper, Scissors, Lizard, Spock
// two player game (human or computer) - incorporate inheritance here
// validate bad input using a section of functions to validate and reobtain if needed
// Gesture arrays to hold all available gestures - incorporate inheritance here as well
// Compare gestures to find winner of a round
// Minimum of "best of three" rounds to determine winner of game
// use console to play the game (using logs, prompts, alerts)

// Classes: 
// Game - runs all of the game logic. Instantiate all of the Player objects in the constructor. runGame method that is called at end of script.
// Game cont. - displayRules shows all the rules upon running the game
// Player(parent) => Human(child), Computer(child). Has an array of Gestures. Can ChooseGesture and display gesture options.
// Gesture(parent) => Rock(child), Paper(child), Scissors(child), Lizard(child), Spock(child). Have an array that specifies "loses to" for each

// TO DO:
// 1 - Split classes into different files. How to link into base game.js? DONE
// 2 - Write ChooseGesture methods for both Human and Computer child classes
// 3 - Write DisplayRules method for Game Class and call in runGame
// 4 - Write game logic in multiple helper methods that get called in runGame


class Game{
    constructor(){
        this.playerOne = new Human("Tim");
        this.playerTwo = new Computer("Hal");

    }

    runGame(){
        this.playerOne.chooseGesture();
    }

}

let game = new Game();
game.runGame();



