# Typescript
Let's first understand what type is.
### Type:
Type is an easy way to refer to different properties + functions the value has. and value is anything we can assign to a variable, eg: strings, numbers, booleans... etc.
### Interface:
`interface` in TS is used to define the structure of an object.

```typescript
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
const todo = response.data as Todo;
```

#### Type Annotations:
We (developers) tell typescript what type of value a variable refer to.

`Primitive Type Annotations`
```typescript
let quantity:number = 5;
let fruit:string = "apple";
let types:boolean = true;
let category:null = null;
let from:undefined = undefined;
```

`Object Type Annotations`
```typescript

//Date
let data:Date = new Date();

////Arrays
let colors: string[] = ["red", "green", "blue", "gray"];
let myNumbers:number[] =[1,2,3,4,5,6];
let turns:boolean[] = [true, false, false];

//classes
class Car { }
let car:Car = new Car();

//object literal
let coordinates: {x:number; y:number} = {
    x:10,
    y:20,
}

//Function
const xyCoordinates: (x:number, y:number)=> void = (x:number ,y:number) => {
    console.log(x, y);
}

//:(x:number, y:number)=> void this is the typescript annotation and the rest is part of actual function.
```
#### Type Reference:
TS tries to figure out the type of the value refers to.
If variable declaration and initialization are on the same line, TS will try to figure out the type of the value for us. In the below example if we annotate type for a value or not, it doesn't really matter as TS will automatically figure it out for us.

```typescript
const color = "red"; 
```

but if we use like this, then TS will annotate the type as :any
```typescript
const color;
color = "red";
```

So, the question is, when to use type annotation and when let TS figure it out for us?

<p>When a function return "any" type, need to clarify the value</p>
<p>When we declare a variable on one line and then initialize it later</p>
<p>When we want a variable to have a type that can't be inferred.</p>


#### 1- Function Returns "Any" type
* A type, just as "string" or "boolean" are.
* It means that TS has no idea what this is - can't check for correct property references
* <strong>Avoid variables with "any" at all costs.</strong>

```typescript
//JSON return "any" type
const json = '{"x":"John", "y":"Mike"}'
const names = JSON.parse(json)

//or

const json = '{"x":10,"y":5}';
const coord= JSON.parse(json);
```

To solve this problem; for example for function we need to use object literal annotation as below.

```typescript
const json = '{x:"John", y:"Mike"}'
const names: {x:string; y:string} = JSON.parse(json)

//or
const json = '{"x":10,"y":5}';
const coord:{x:number; y:number}= JSON.parse(json);
```


#### 2- Delayed Initialization
When we declare a variable on one line and then initialize it later.

```typescript
let colors = ['RED', 'GREEN', 'YELLOW'];
let foundColor;

for(let i of colors){
    if(colors[i] === 'GREEN'){
        foundColor = colors[i];
    }
}
```
In the above code `foundColor` will infer the type "any" even though we initialize a a string value to it in the for loop. So, to solve this issue we need to use type annotation as below:

```typescript
let colors = ['RED', 'GREEN', 'YELLOW'];
let foundColor: string;

for(let i of colors){
    if(i=== 'GREEN'){
        foundColor = true;
    }
}
```


#### 3- When Inference Doesn't work
This above code will give an error because the variable type cannot be inferred correctly. So to solve this problem:

```typescript
let numbers = [1,2,3,4,5];
let positiveNumbers = false;
numbers.map(number => number>0 ? positiveNumbers = number : false) 
```

to solve it:

```typescript
let numbers = [1,2,3,4,5];
let positiveNumbers: boolean | number = false;
numbers.map(num => num>0 ? positiveNumbers = num : false) 
```