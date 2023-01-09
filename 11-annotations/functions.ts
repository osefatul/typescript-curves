// Ex: Returns a number
const add = (a:number, b:number): number =>{
    return a + b;
}
console.log(add(1,2))

// Ex: Returns a number with conventional type of function
function subtract (a:number, b:number):number {
    return a-b;
}
console.log(subtract(1,2))






//inferred return value
const multiply = (a:number, b:number) => {
    const c = a*b;
}
console.log(multiply(2,2))

//annotate return but won't return anything
const multiply2 = (a:number, b:number):number => {
    const c = a*b;
}




//void type:
const divide:(a:number, b:number) => void = (a, b) =>{
    const c = b/a;
}
console.log(divide(4,2));

//using void type but return value
const divide2:(a:number, b:number) => void = (a, b) =>{
    const c = b/a;
}

//give an error
const divide3 = (a:number, b:number): void =>{
    return a*b
}
console.log(divide2(4,2));



//in case throwing an error and we want to return something.
const throwError = (message: string): string => {
    if(!message){
    throw new Error(message);
    }
return message
}