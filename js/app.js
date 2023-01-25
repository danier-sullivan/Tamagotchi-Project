//Create 
class Saiyan {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.hunger = 10;
        this.tiredness = 10;
        this.pwrLevel = 10;
    }
    eat(){
        this.hunger++
    }
    train(){
        this.pwrLevel++
    }
    sleep(){
        this.tiredness++
    }
    //Setname(){}
}

const testTama = new Saiyan();
console.log(testTama)

//set up buttons for later use
const startButton = document.querySelector(`#Start`);
const newSaiyan = new Saiyan ("");
const feedButton = document.querySelector('#Feed');
const trainButton = document.querySelector('#Train');
const restButton = document.querySelector('#Sleep');

class Game {

    
}