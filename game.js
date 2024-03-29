"use strict";
const prompt = require('prompt-sync')();
const { Computer } = require('./players/computer');
const { Human } = require('./players/human');

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
// 4 - Write game logic in multiple helper methods that get called in runGame DONE

debugger; // drop breakpoint before prompt functions run
class Game{
    constructor(){
        this.displayRules(); // this makes the very first action of the game the rules display when Game object is instantiated.
        this.playerOne = new Human(prompt('What is your name, Player One? \n'));
        this.chooseGameTypeAndSetNames();

    }

    runGame(){
        // display rules DONE
        // multiplayer or single player? DONE
        // compare gestures DONE
        // check for winner DONE
        // display winner DONE

        let currentRound = 0;
        let gameFinished;

        do{
            this.displayCurrentScore();
            var tieCheck = this.compareGestures();
            if(!tieCheck){
                currentRound++;
                this.displayCurrentScore();

            }
            else{
                console.log("It's a tie!");

            }
            gameFinished = this.checkForGameFinish(currentRound);
            console.clear();

        } while(!gameFinished)

        this.declareWinner();
           
    }

    displayRules(){
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock! \n");
        console.log("Rock crushes Scissors, Paper Covers Rock, Rock Crushes Lizard, \n");
        console.log("Lizard poisons Spock, Spock smashes Scissors, Scissors dcapitates Lizard, \n");
        console.log("Lizard eats Paper, Paper disproves Spock, and Spock vaporizes Rock! \n");
        console.log("Each player chooses a gesture. One gesture will beat the other. Best out of three wins! \n");
    }

    chooseGameTypeAndSetNames(){
        console.log(`Would you like to play multiplayer or single player? <1 for Single, 2 for Multi>`)
        let input = prompt();

        if (input === "1"){
            this.playerTwo = new Computer("Hal");
        }
        else if (input === "2"){
            this.playerTwo = new Human(prompt("What is the name of Player 2?"));
        }
        else{
            console.log("Input not recognized! Press OK to try again.");
            this.chooseGameTypeAndSetNames();
        }

    }

    displayCurrentScore(){
        console.log(`The current score is: Player One ${this.playerOne.currentScore}, Player Two ${this.playerTwo.currentScore} `);
    }

    compareGestures(){
        let playerOneChoice = this.playerOne.chooseGesture(); // Rock
        let playerTwoChoice = this.playerTwo.chooseGesture(); // Scissors
        let isATie = true;

        for(var i = 0; i <= playerOneChoice.losesTo.length - 1; i++){

            if(playerOneChoice.name === playerTwoChoice.losesTo[i]){ // if Player 2's choice is in the Player 2 LosesTo array, Player 1 wins
                this.playerOne.currentScore = 1;
                console.log("Player One chose " + playerOneChoice.name + " Player 2 chose " + playerTwoChoice.name);
                console.log("Player One wins the round!")
                isATie = false;
            }
            else if(playerTwoChoice.name === playerOneChoice.losesTo[i]){ // if Player 1's choice is in the Player 1 LosesTo array, Player 2 wins
                this.playerTwo.currentScore = 1;
                console.log("Player One chose " + playerOneChoice.name + " Player 2 chose " + playerTwoChoice.name);
                console.log("Player Two wins the round!")
                isATie = false;
            }
          
        }

        return isATie;
    
    }

    

    checkForGameFinish(currentRound){
        let gameFinished = false;
        if(currentRound === 3){ // refactor for user choice of rounds
            gameFinished = true;
        }
        return gameFinished;
    }

    declareWinner(){
        console.clear();
        if(this.playerOne.currentScore > this.playerTwo.currentScore ){
            console.log("Game over. Player One Wins!");
        }
        else{
            console.log("Game over. Player Two Wins!");
        }
        
    }

}

let game = new Game();
game.runGame();



