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
        this.displayRules(); // this makes the very first action of the game the rules display when Game object is instantiated.
        this.playerOne = new Human(prompt("What is your name?"));
        this.chooseGameTypeAndSetNames();

    }

    runGame(){
        // display rules
        // multiplayer or single player?
        // compare gestures
        // check for winner
        // display winner
        // ask to play again
        

        
    }

    displayRules(){
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
        console.log("Rock crushes Scissors, Paper Covers Rock, Rock Crushes Lizard,");
        console.log("Lizard poisons Spock, Spock smashes Scissors, Scissors dcapitates Lizard,");
        console.log("Lizard eats Paper, Paper disproves Spock, and Spock vaporizes Rock!");
        console.log("Each player chooses a gesture. One gesture will beat the other. Best out of three wins!");
    }

    chooseGameTypeAndSetNames(){
        console.clear(); // clears the console after rules are displayed
        let input = prompt("Would you like to play multiplayer or single player? <1 for Single, 2 for Multi>").toLocaleLowerCase();

        if (input === 1){
            this.playerTwo = new Computer("Hal");
        }
        else if (input === 2){
            this.playerTwo = new Human(prompt("What is the name of Player 2?"));
        }
        else{
            alert("Input not recognized! Press OK to try again.");
            this.chooseGameTypeAndSetNames();
        }

    }

    compareGestures(){
        let choice1 = this.playerOne.chooseGesture();
        let choice2 = this.playerTwo.chooseGesture();

    }

}

let game = new Game();
game.runGame();



