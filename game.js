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
// 2 - Write ChooseGesture methods for both Human and Computer child classes DONE
// 3 - Write DisplayRules method for Game Class and call in runGame DONE
// 4 - Write game logic in multiple helper methods that get called in runGame

debugger; // drop breakpoint before prompt functions run
class Game{
    constructor(){
        this.displayRules(); // this makes the very first action of the game the rules display when Game object is instantiated.
        this.playerOne = new Human(prompt("What is your name?"));
        this.chooseGameTypeAndSetNames();

    }

    runGame(){
        // display rules DONE
        // multiplayer or single player? DONE
        // compare gestures DONE
        // check for winner
        // display winner
        // ask to play again

        let currentRound = 0;
        let gameFinished;

        do{
            this.compareGestures();
            currentRound++;
            gameFinished = this.checkForGameFinish(currentRound);

        } while(!gameFinished)

        this.declareWinner();
           
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
        let input = prompt("Would you like to play multiplayer or single player? <1 for Single, 2 for Multi>");

        if (input === "1"){
            this.playerTwo = new Computer("Hal");
        }
        else if (input === "2"){
            this.playerTwo = new Human(prompt("What is the name of Player 2?"));
        }
        else{
            alert("Input not recognized! Press OK to try again.");
            this.chooseGameTypeAndSetNames();
        }

    }

    compareGestures(){
        let playerOneChoice = this.playerOne.chooseGesture(); // Rock
        let playerTwoChoice = this.playerTwo.chooseGesture(); // Scissors

        for(var i = 0; i <= playerOneChoice.losesTo.length - 1; i++){

            if(playerOneChoice.name === playerTwoChoice.losesTo[i]){ // if Player 2's choice is in the Player 2 LosesTo array, Player 1 wins
                this.playerOne.currentScore = 1;
            }
            else if(playerTwoChoice.name === playerOneChoice.losesTo[i]){ // if Player 1's choice is in the Player 1 LosesTo array, Player 2 wins
                this.playerTwo.currentScore = 1;
            }
        }
    
    }

    checkForGameFinish(currentRound){
        let gameFinished = false;
        if(currentRound === 3){ // refactor for user choice of rounds
            gameFinished = true;
        }
        return gameFinished;
    }

    declareWinner(){
        if(this.playerOne.currentScore > this.playerTwo.currentScore ){
            console.log("Player One Wins!");
        }
        else{
            console.log("Player Two Wins!");
        }
    }

}

let game = new Game();
game.runGame();



