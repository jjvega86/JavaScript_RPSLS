// Great video for reference about inheritance (especially extends and super): https://www.youtube.com/watch?v=CwAU1wYeHiM&ab_channel=StephenMayeux

class Player{ // parent
    constructor(name){
        this.name = name;
        this.currentScore = 0;
        this.gestureOptions = [new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()];
    }

    displayGestures(){

        for(var i = 0; i <= this.gestureOptions.length - 1; i++){
            console.log(this.gestureOptions[i].name);
        }
    }

    chooseGesture(){
        this.displayGestures();
        var input = prompt("Which gesture would you like to choose?").toLocaleLowerCase();
        let choiceIndex = 0;

        switch(input){
            case "rock":
                choiceIndex = 0;
            case "paper":
                choiceIndex = 1;
            case "scissors":
                choiceIndex = 2;
            case "lizard":
                choiceIndex = 3;
            case "spock":
                choiceIndex = 4;
            default:
                this.chooseGesture;
        }

        return choiceIndex;
    }
}

class Human extends Player{ // extends allows for inheriting of any properties and method from parent
    constructor(name){
        super(name); // super calls the constructor method of parent class. Pass in required parameters, can also override if needed     
    }
   
}

class Computer extends Player{
    constructor(name){
        super(name);      
    }

    generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * this.numberOfSides) + 1;
        return randomNumber;
    }

}


