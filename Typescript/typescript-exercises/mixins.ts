import { Mixin } from '@alizurchik/ts-mixin';


class Hello{
    constructor(){
    console.log('Hello Honey,');
    }
}

class Salamu{
    constructor(){
        console.log('Hey Stranger,');
    }
}
interface Greetings extends Hello, Salamu {}
class SayHi extends Mixin<Greetings>(Hello, Salamu){
    constructor(){
        super();
        console.log('Hello Mummy!')
    }
} 

new SayHi()