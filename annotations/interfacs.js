"use strict";
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
const oldCivic = {
    name: "civic",
    model: 2000,
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name} model is: ${this.model}`;
    }
};
const printVehicle = (vehicle) => {
    console.log(`name: ${vehicle.name}`);
    console.log(`model: ${vehicle.model}`);
    console.log(`year: ${vehicle.year}`);
    console.log(`broken: ${vehicle.broken}`);
    console.log(`summary: ${vehicle.summary()}`);
};
printVehicle(oldCivic);
const oldCivics = {
    name: "civic",
    model: 2000,
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name} model is: ${this.model}`;
    }
};
const drink = {
    name: "coffee",
    sugar: 40,
    summary() {
        return `My coffee has ${this.sugar} grams sugar`;
    }
};
const printSummary = (vehicle) => {
    console.log(`summary: ${vehicle.summary()}`);
};
printSummary(oldCivics);
printSummary(drink);
