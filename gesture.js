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
        this.losesTo = ["Paper", "Spock"];
    }
    
}

class Paper extends Gesture{
    constructor(){
        super();
        this.name = "Paper";
        this.losesTo = ["Scissors", "Lizard"];
    }
    
}

class Scissors extends Gesture{
    constructor(){
        super();
        this.name = "Scissors";
        this.losesTo = ["Rock", "Spock"];
    }   
}

class Lizard extends Gesture{
    constructor(){
        super();
        this.name = "Lizard";
        this.losesTo = ["Rock", "Scissors"];
    }
    
}

class Spock extends Gesture{
    constructor(){
        super();
        this.name = "Spock";
        this.losesTo = ["Lizard", "Paper"];
    }
    
}