// HAS - name, array of loses to

class Gesture{ // parent
    constructor(){
        this.name = "";
        this.losesTo = []; 
    }

}

class Rock extends Gesture{
    constructor(){
        super();
        this.name = "Rock";
        this.losesTo = [new Paper(), new Spock()];
    }
    
}

class Paper extends Gesture{
    constructor(){
        super();
        this.name = "Paper";
        this.losesTo = [new Scissors(), new Lizard()];
    }
    
}

class Scissors extends Gesture{
    constructor(){
        super();
        this.name = "Scissors";
        this.losesTo = [new Rock(), new Spock()];
    }   
}

class Lizard extends Gesture{
    constructor(){
        super();
        this.name = "Lizard";
        this.losesTo = [new Rock(), new Scissors()];
    }
    
}

class Spock extends Gesture{
    constructor(){
        super();
        this.name = "Spock";
        this.losesTo = [new Lizard(), new Paper()];
    }
    
}