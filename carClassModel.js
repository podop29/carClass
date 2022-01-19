class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return 'Beep!';
    }

    toString(){
        return `The vehicle is a ${this.model} ${this.make} from ${this.year}`
    }
}


class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numOfWheels = 4; 
    }
}



class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numOfWheels = 2; 
    }
    revEngine(){
        return "VROOM!!!"
    }
}


class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(v){
        if(v instanceof Vehicle){
            if(this.vehicles.length < this.capacity){
            this.vehicles.push(v)
            }
            else{
               console.log("Sorry, we're full")
            }
        }
        else{
            console.log('Only vehicles are allowed in here!')
        }
    }
    
}

let ford = new Car("escape", 'ford', 2010)
let ninja = new Motorcycle("ninja", "Kawasaki", 2020)
let myGarage = new Garage(2);
let fakeCar;
myGarage.add(ford);
myGarage.add(fakeCar)
console.log(myGarage.vehicles)



// let ford = new Car("escape", 'ford', 2010)
// console.log(ford.toString())
// console.log(ford.numOfWheels)

// let ninja = new Motorcycle("ninja", "Kawasaki", 2020)
// console.log(ninja.toString())
// console.log(ninja.numOfWheels)
// console.log(ninja.revEngine())
