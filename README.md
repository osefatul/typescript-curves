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

## Type Annotations:
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
## Type Reference:

### Type Inference For Variable
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



### Type Inference For Functions
TS tries to figure out what type of value a function will return.

```typescript
//ex:
const add = (a:number, b:number):number => {
    return a + b;
}

//ex2:
function subtract (a:number, b:number):number {
    return a-b;
}

```

In the above examples we explicitly annotate the type of function's return value. however, typescript can infer the return type of a function when we annotate the parameters type.

```typescript
//Annotate return type..
const add = (a:number, b:number):number => {
    return a + b;
}

//Infer return type..
const add = (a:number, b:number) =>{
    return a + b;
}
```

But the best solution is to always annotate the return type of a function because if you don't, then in that case you don't return any value from the function and it won't give you any error. 

```typescript
//inferred return value
const multiply = (a:number, b:number) => {
    const c = a*b;
}
```
<p>In the above example, we let TS infer return value and its type, however we didn't return any value in the function. So, the above function won't give any error because there is no return annotation. So that's why always annotate return value if that's what we require from a function.</p>

<p>Now, if we annotate return type and don't return any value, the function will give an error for it.</p>

```typescript
const multiply = (a:number, b:number):number => {
    const c = a*b;
}
```

#### Annotate void type or never

```typescript
const add:(a:number, b:number)=> void = (a:number, b:number) =>{
    const c = a + b;
}

// this will give an error
const subtract = (a:number, b:number): void =>{
    return b-a;
}
```

using  `never` means that the we won't reached to the end of the function, at some point of time it will throw an error and exit the function immediately after.

```typescript
const throwError (message: string): never {
    throw new Error(message);
}
```

but if use it like in case there is no error:

```typescript
const throwError = (message: string): string => {
        if(!message){
        throw new Error(message);
    }
    return message
}
```


## Destructing With Annotations

using props.

```typescript
const todaysWeather = {
    date: new Date,
    weather: "sunny"
}

const logWeather = (forecast: {date:Date; weather:string})=>{
    console.log(forecast.date)
    console.log(forecast.weather)
}

logWeather(todaysWeather)
```

Or using ES2015 destructuring props:

```typescript
const todaysWeather = {
    date:new Date, 
    weather: "sunny", 
}

const logWeather = ({date, weather}: {date:Date; weather:string}) =>{
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather)
```



## Annotations Around Object

Use annotations with method in the function:

```typescript
const profile = {
    name: "alex",
    age: 200,
    coord: {
        lat:0,
        lng:15
    },
    setAge (age: number):void {
        this.age = age;
    }
}
```

Now to if we want to destructure `age` from profile object then:

```typescript
const {age}: {age:number} = profile
```

and lets complicate the case for annotating the object - for example to annotate `coord` property.

```typescript
//normal destructure
const {coord: {lat, lng}} = profile

//annotate type with destructure..
const {coord: {lat, lng}}: {coord: {lat:number; lng:number}} = profile
```


## Array Type
The difference of array between JS and TS is that in TS elements in array has consistent type of value.


<p>This will infer the array type</p>
```typescript
const carMakers = ['ford', 'tesla', 'toyota']
```

But, this will infer the array type as any:

```typescript
const carMakers = [];
```
so to avoid `any` type, make sure you assign type to array.

```typescript
const carMakers: string[] = []

//or
const carMakers: string[][] =[];
```


### Why Typed Arrays
* TS can do type inference when extracting values from an array.
* TS can prevent us from adding incompatible values to the array.
* We can get help with `map`, `forEach` or `reduce` functions.

* Flexible - arrays can still contain multiple different types.
In TS if we initialize an array with multiple types, the array will be inferred that contains multiple types. See below example

```typescript
const importantDates = [new Date(), '1-09-2022']
```
To use annotation for multiple types...

```typescript 
const importantDates: (Date | string)[] = [new Date(), '1-09-2022']
```



### Tuples in TS:
tuples is an array-like structure where each element represents some property of a record.
<p>For Example - We have an object representing a drink - contains these below properties:
<p>
<span>color: brown</span>
<span>carbonated: true </span>
<span>sugar: 40</span>

To make the above object tuple, we only take the value of the property and convert 
it to array:

```typescript
const obj = ["brown", true, 40]
```
but if we change the index place of those properties then it will be meaningless..
```typescript
const obj = [40, true, "brown"]
```

So, all in all - tuples must have same element orders

### Tuples in Action
suppose we have an object called pepsi

```typescript
const pepsi = {
    color: "brown",
    carbonated: true,
    sugar: 40
}
```

To make the above object tuple first we need to turn it into array:

```typescript
const pepsi = ["brown", true, 40]
```

and then annotate type to the order or indexes of the arrays which will make it `tuple`

```typescript
const pepsi: [string, boolean, number] = ["brown", true, 40]
```


### Type Alias
In order to minimize the effort of re-writing the types for an array, objects or tuples we can write type alias once and then annotate that to the corresponding object or tuple.

```typescript
//type alias
type Drink = [string, boolean, number] = ["brown", true, 40]

const pepsi: Drink = ["brown", true, 40]
const coke: Drink = ["brown", false, 30]
const tea: Drink = ["green", false, 0]
```