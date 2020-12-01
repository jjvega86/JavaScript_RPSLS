// HAS - name, array of loses to

class Gesture{ // parent
    constructor(){
        this.name = "";
        this.losesTo = [];
        
    }

}

class Rock extends Gesture{
    constructor(){
        super(name, losesTo);

        this.name = "Rock";
        this.losesTo = [new Paper(), new Spock()];
    }
    
}

class Paper extends Gesture{
    
}

class Scissors extends Gesture{
    
}

class Lizard extends Gesture{
    
}

class Spock extends Gesture{
    
}