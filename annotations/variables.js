"use strict";
//Primitive Types
let apples = 5;
let speed = "fast";
let hasName = false;
let nothingMuch = null;
let nothing = undefined;
//Object Types:
let date = new Date();
//Array
// let colors:string[] = ["#000000", "#000000", "#000000", "#000000", "#000000"];
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let turns = [true, false, true];
//classes
class Car {
}
let car = new Car();
//object literal
let coordinates = {
    x: 10,
    y: 20,
};
//Function
const xNumbers = (i) => {
    console.log(i);
};
//Function
const xyCoordinates = (x, y) => {
    console.log(x, y);
};
console.log(xyCoordinates(2, 3));
//Any type
// example1:
const json = '{"x":10,"y":5}';
const coord = JSON.parse(json);
console.log(coord);
// const json = '{"x":"John", "y":"Mike"}'
// const names:{x:string; y:string} = JSON.parse(json)
// console.log(names)
// example2
let colors = ['RED', 'GREEN', 'YELLOW'];
let foundColor;
for (let i of colors) {
    if (i === 'GREEN') {
        foundColor = true;
    }
}
// example 3: 
// variable whose type cannot be inferred correctly..
// let numbers = [1,2,3,4,5];
// let positiveNumbers = false;
// numbers.map(number => number>0 ? positiveNumbers = number : false) 
let numbers = [1, 2, 3, 4, 5];
let positiveNumbers = false;
numbers.map(num => num > 0 ? positiveNumbers = num : false);
