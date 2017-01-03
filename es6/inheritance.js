/* 
ES6 classes provide a syntactic sugar attempting to alleviate the issues with using prototypical inheritance
present in ES5. Ensure you also pay attention to the super keyword which should be used in the subclass 
constructor. It's used to pass the argument to the base class's constructor. IN ES6, inheritance works top-down
from base class to its subclass.
*/

// Base class 
class Bird{

    constructor(weight, height){
        this.weight = weight;
        this.height = height;
    }

    walk(){
        console.log('walk now!');
    }
}

// subclass to Bird
class Penguin extends Bird{

    constructor(weight, height){
        super(weight, height)
    }

    swim(){
        console.log('with the fish you go!');
    }
}

let penguin = new Penguin(10,10);
penguin.walk();
penguin.swim();