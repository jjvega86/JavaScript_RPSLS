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


class Game{

}

class Player{ // parent

}

class Human extends Player{

}

class Computer extends Player{

}

class Gesture{ // parent

}

class Rock extends Gesture{

}

class Paper extends Gesture{
    
}

class Scissors extends Gesture{
    
}

class Lizard extends Gesture{
    
}

class Spock extends Gesture{
    
}