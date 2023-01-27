//Create 
document.addEventListener("DOMContentLoaded", function() {


    class Saiyan {
        constructor(){
            this.name ="";
            this.age = 0;
            this.hunger = 10;
            this.tiredness = 10;
            this.pwrLevel = 10;
            this.age = 0;
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
        ageUp(){
            this.age++
        }

        
    }



    //set up buttons for later use
    const startButton = document.querySelector('#Start');
    const feedButton = document.querySelector('#Feed');
    const trainButton = document.querySelector('#Train');
    const restButton = document.querySelector('#Sleep');
    //a new instance of the Saiyan class with the name collected in the prompt
    const newSaiyan = new Saiyan();
    //Assign HTML elements to attribute values





    const game = {

    // //Method to start the game with the Let's Go button
    startGame(){
        game.setName();
        game.setHunger();
        game.setSleep();
        game.setPwrlevel();
        game.setAge();
    },
    //have a prompt that gets the name of the new pet and then create
    setName(){
        newSaiyan.name = prompt("Enter a name for your Saiyan")

        console.log(newSaiyan)
        
    },
    //set up a timer to decrement the Hunger, Stamina, and Power Level (should begin when the game starts)
    //link the feed,rest and train buttons to their respective functions to increment their values

    setHunger(){
        

        let myInterval = setInterval(() => {
            newSaiyan.hunger = newSaiyan.hunger - 1
            let hungerID = document.querySelector("#Hunger")
            hungerID.innerHTML = `Hunger: ${newSaiyan.hunger}`
            console.log(newSaiyan.hunger)
            if(newSaiyan.tiredness === 0 || newSaiyan.pwrLevel ===0 ){
                clearInterval(myInterval)
            }else if (newSaiyan.hunger === 0){
                clearInterval(myInterval)
                alert(`${newSaiyan.name} has died of hunger`)

            }
        }, 3000)},
    setSleep(){
        

        let myInterval = setInterval(() => {
            newSaiyan.tiredness -=1
            let ID = document.querySelector("#Stamina")
            ID.innerHTML = `Muscle Stamina: ${newSaiyan.tiredness}`
            if(newSaiyan.hunger === 0 || newSaiyan.pwrLevel === 0 ){
                clearInterval(myInterval)
            }else if(newSaiyan.tiredness === 0){
                clearInterval(myInterval)
                alert(`${newSaiyan.name} has died of fatigue`)

            }
        }, 4000)},

    setPwrlevel(){
        

        let myInterval = setInterval(() => {
            newSaiyan.pwrLevel -=1
            let ID = document.querySelector("#Power")
            ID.innerHTML = `Power Level: ${newSaiyan.pwrLevel}`
            if(newSaiyan.tiredness === 0 || newSaiyan.hunger === 0){
                clearInterval(myInterval)
            }else if(newSaiyan.pwrLevel === 0){
                clearInterval(myInterval)
                alert(`${newSaiyan.name} ran out of power and died`)


            }
        }, 5000)},

    setAge(){
        

        let myInterval = setInterval(() => {
            newSaiyan.age +=1
            let ID = document.querySelector("#Age")
            ID.innerHTML = `Age: ${newSaiyan.age}`
            if(newSaiyan.age === 5){
                document.getElementById("Pet").src = "https://www.transparentpng.com/thumb/goku/EOWcfb-goku-clipart-transparent.png"
                document.getElementById("Pet").alt = "goku clipart transparent @transparentpng.com"
                alert(`${newSaiyan.name} has reached Super Saiyan!`)
            }else if (newSaiyan.age === 10){
                document.getElementById("Pet").src = "https://www.transparentpng.com/thumb/goku/y5OESW-goku-clipart-png-file.png" 
                alert(`${newSaiyan.name} has reached Super Saiyan Blue!`)

            }
            if(newSaiyan.age === 20 || newSaiyan.tiredness === 0 || newSaiyan.pwrLevel ===0 || newSaiyan.hunger === 0 ){
                clearInterval(myInterval)
            }

        }, 3000)},


        

    }
    


    startButton.addEventListener("click", () =>{
    game.startGame()
    })

    feedButton.addEventListener("click", () =>{
        newSaiyan.eat()
        let hungerID = document.querySelector("#Hunger")
        hungerID.innerHTML = `Hunger: ${newSaiyan.hunger}`

    
    })
    trainButton.addEventListener("click", () =>{
        newSaiyan.train()
    let trainID = document.querySelector("#Power")
    trainID.innerHTML = `Power Level: ${newSaiyan.pwrLevel}`
    
    })
    restButton.addEventListener("click", () =>{
        newSaiyan.sleep()
    let sleepID = document.querySelector("#Stamina")
    sleepID.innerHTML = `Muscle Stamina: ${newSaiyan.tiredness}`
    });

    alert("Instructions: Keep your Saiyan alive by by making sure none of their stats reach: 0. Click Let's Go! to begin")


})



console.log(document.getElementById("Pet"))

