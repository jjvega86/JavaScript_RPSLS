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
        let choice;

        switch(input){
            case "rock":
                choice = this.gestureOptions[0];
            case "paper":
                choice = this.gestureOptions[1];
            case "scissors":
                choice = this.gestureOptions[2];
            case "lizard":
                choice = this.gestureOptions[3];
            case "spock":
                choice = this.gestureOptions[4];
            default:
                this.chooseGesture;
        }

        return choice;
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

    generateRandomNumber(maxLimit) {
        let randomNumber = Math.floor(Math.random() * maxLimit) + 1;
        return randomNumber;
    }

    chooseGesture(){
        let gestureIndex = this.generateRandomNumber(4);
    }

}


