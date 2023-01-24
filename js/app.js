class Tamagotchi {
    constructor(){
        this.name = "";
        this.age = 0;
        this.hunger = 10;
        this.tiredness = 10;
        this.boredom = 10;
    }
    eat(){
        this.hunger++
    }
    play(){
        this.boredom++
    }
    sleep(){
        this.tiredness++
    }
    //Setname(){}
}

const testTama = new Tamagotchi();
console.log(testTama)