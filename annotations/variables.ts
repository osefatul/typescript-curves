
//Primitive Types
let apples:number = 5;
let speed:string = "fast";
let hasName:boolean = false;
let nothingMuch:null = null;
let nothing:undefined = undefined;


//Object Types:
let date:Date = new Date();

//Array
// let colors:string[] = ["#000000", "#000000", "#000000", "#000000", "#000000"];
let myNumbers:number[] = [1,2,3,4,5,6,7,8,9,10];
let turns:boolean[] = [true, false,true];


//classes
class Car { }
let car:Car = new Car();

//object literal
let coordinates: {x:number; y:number} = {
    x:10,
    y:20,
}


//Function
const xNumbers:(i:number)=>void = (i:number)=>{
    console.log(i)
}

//Function
const xyCoordinates:(x:number, y:number)=> void = (x, y) => {
    console.log(x, y);
}
console.log(xyCoordinates(2,3))



//Any type

// example1:
const json = '{"x":10,"y":5}';
const coord:{x:number; y:number}= JSON.parse(json);
console.log(coord)

// const json = '{"x":"John", "y":"Mike"}'
// const names:{x:string; y:string} = JSON.parse(json)
// console.log(names)




// example2
let colors = ['RED', 'GREEN', 'YELLOW'];
let foundColor:boolean;

for(let i of colors){
    if(i === 'GREEN'){
        foundColor = true;
    }
}





// example 3: 
// variable whose type cannot be inferred correctly..

// let numbers = [1,2,3,4,5];
// let positiveNumbers = false;
// numbers.map(number => number>0 ? positiveNumbers = number : false) 

let numbers = [1,2,3,4,5];
let positiveNumbers: boolean | number = false;
numbers.map(num => num>0 ? positiveNumbers = num : false) 