class Player{ // parent
    constructor(name){
        this.name = name;
        this.currentScore = 0;
        this.gestureOptions = [new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()];
    }

    displayGestures(){

        for(var i = 0; i <= this.gestureOptions.length; i++){
            console.log(this.gestureOptions[i].name);
        }
    }
}

class Human extends Player{
    constructor(name){
        super(name);
        this.name = name;
        
    }

    displayGestures(){

        for(var i = 0; i <= this.gestureOptions.length; i++){
            console.log(this.gestureOptions[i].name);
        }
    }

}

class Computer extends Player{
    constructor(name){
        super(name);
        this.name = name;
    }

    displayGestures(){

        for(var i = 0; i <= this.gestureOptions.length; i++){
            console.log(this.gestureOptions[i].name);
        }
    }

    generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * this.numberOfSides) + 1;
        return randomNumber;
    }

}


