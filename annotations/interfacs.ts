
/**

const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true
}

const printVehicle = (vehicle: {name:string; year:number; broken:boolean}):void =>{
    console.log(`name: ${vehicle.name}`)
    console.log(`year: ${vehicle.year}`)
    console.log(`broken: ${vehicle.broken}`)
}

printVehicle(oldCivic)

*/

//To solve the annotation problem,

interface Vehicle {
    name:string;
    model:number;
    broken:boolean;
    year: Date;
    summary(): string;
}


const oldCivic = {
    name: "civic",
    model: 2000,
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name} model is: ${this.model}`
    }
}

const printVehicle = (vehicle: Vehicle):void =>{
    console.log(`name: ${vehicle.name}`)
    console.log(`model: ${vehicle.model}`)
    console.log(`year: ${vehicle.year}`)
    console.log(`broken: ${vehicle.broken}`)
    console.log(`summary: ${vehicle.summary()}`)
}

printVehicle(oldCivic)




//Reusable interface in a generic terms,

interface Reportable {
    summary(): string;
}


const oldCivics = {
    name: "civic",
    model: 2000,
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name} model is: ${this.model}`
    }
}


const drink = {
    name: "coffee", 
    sugar: 40,
    summary ():string {
        return `My coffee has ${this.sugar} grams sugar`
    }
}


const printSummary = (vehicle: Reportable):void =>{
    console.log(`summary: ${vehicle.summary()}`)
}

printSummary(oldCivics)
printSummary(drink)

