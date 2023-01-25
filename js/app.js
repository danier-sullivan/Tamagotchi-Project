class Tamagotchi {
    constructor(){
        this.name = "";
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

const testTama = new Tamagotchi();
console.log(testTama)