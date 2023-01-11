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
    if(i === 'GREEN'){
        foundColor = i;
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


## Type Alias
In order to minimize the effort of re-writing the types for an array, objects or tuples we can write type alias once and then annotate that to the corresponding object or tuple.

<strong>Example:</strong>

```typescript
//type alias
type Drink = [string, boolean, number]

const pepsi: Drink = ["brown", true, 40]
const coke: Drink = ["brown", false, 30]
const tea: Drink = ["green", false, 0]
```

<strong>Example2: Using an object </strong>

```typescript
type User = {
    name: String;
    age: number;
    address?: String; //either string | undefined
}

const user: User = {
    name: "John",
    age: 30,
    address: "Main Street",
}
```

<strong>Example3:</strong>

Using the `&` symbol you can extend or inherit an existing type and syntax-  it is like using `extends` to inherit classes. `implements` is used to add type to the class.

```typescript
type Animal = {
    name:string
}

type Herbivore = Animal & {
    consumePlant(plant: string):string
}

class Cow implements Herbivore {
    name = "Cow";

    consumePlane(plane:string) =>{
        return `${plane} waste`
    }
}

const cow = new Cow();
cow.consumePlane("grass")

```
<p>
In this example we take a base `type`, `Animal` and then extend it with `Herbivore` and add another attribute. From there we can see that creating a class that `implements` that type can provide values to them and then an instance of the class can utilize those attributes.
</p>


<strong>Example4:</strong>
Union types can only be achieved with the type keyword: In this example we are taking two different types and creating a combination of both. This is called a union type and can be used to have more checks around valid values and shapes you utilize.

```typescript
type Fruit = "Apples" | "Mango" | "Orange"
type Vegetable = "Broccoli" | "Eggplant" | "Lettuce"

type HealthyFood = Fruit | Vegetable
```

<strong>You cannot use `implements` on a class with a type if you use a union operator |within your type definition.</strong>

## Interfaces
It creates a new type, (like string, boolean and number and object), describing the property names and value types of an object. We also can call it a custom data type.
 
Example1: Suppose we have an object called oldCivic and a function called printVehicle:

```typescript
const oldCivic = {
    name: "oldCivic",
    year: 2014:
    broken: true
}

const printVehicle = (vehicle:{name:string; year:number; broken:boolean}):void =>{
    console.log(`Name: ${vehicle.name}`)
    console.log(`year: ${vehicle.year}`)
    console.log(`broken: ${vehicle.broken}`)
}
```

There is no problem with the above code; however, the type annotation made the function parameters little more complicated and hard to read. Let's fix annotations with interfaces...

### Fixing Annotations With Interfaces

```typescript
interface Vehicle {
    name:string;
    year:number;
    broken:boolean;
}

const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true
}

const printVehicle = (vehicle: Vehicle):void =>{
    console.log(`name: ${vehicle.name}`)
    console.log(`year: ${vehicle.year}`)
    console.log(`broken: ${vehicle.broken}`)
}

printVehicle(oldCivic)
```

So, here in this example we show how can we use function inside the interface.
```typescript
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
        return `Name of the car is ${this.name}, model is: ${this.model}`
    }
}

const printVehicle = (vehicle: Vehicle):void =>{
    console.log(`summary: ${vehicle.summary()}`)
    console.log(`year: ${vehicle.year}`)
    console.log(`broken: ${vehicle.broken}`)
}

printVehicle(oldCivic)
```

- What if we only have use `summary()` in interface:

```typescript
interface Vehicle {
    summary(): string;
}


const oldCivic = {
    name: "civic",
    model: 2000,
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name of the car is ${this.name}, model is: ${this.model}`
    }
}

const printVehicle = (vehicle: Vehicle):void =>{
    console.log(`summary: ${vehicle.summary()}`)
}

printVehicle(oldCivic)
```

<p>
This code works because the `printVehicle` function only used `summary()` which is used in interface and `oldCivic`.
</p>

But, if we use other properties of `oldCivic` it will give us warning as they are not used in the interface.

```typescript
interface Vehicle {
    summary(): string;
}


const oldCivic = {
    name: "civic",
    model: 2000,
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name of the car is ${this.name}, model is: ${this.model}`
    }
}

const printVehicle = (vehicle: Vehicle):void =>{
    console.log(`name: ${vehicle.name}`)
    console.log(`model: ${vehicle.model}`)
    console.log(`summary: ${vehicle.summary()}`)
}

printVehicle(oldCivic)
```
The error in the above code will be 
`Property "name" and "mode" do not exist on the type Vehicle`

### Reuse Interface
In the above example it is not appropriate to name interface Vehicle where it only return summary. let us change it to something more reusable in the future with other functions as well.

```typescript
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

```

Example2: Create multiple `interface`s which are `Transaction` and `BankAccount`

```typescript
interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transaction: Transaction [] //array of transaction
}

const transaction1:Transaction = {
    payerAccountNumber: 2365,
    payeeAccountNumber: 23423
}

const transaction2:Transaction = {
    payerAccountNumber: 25656,
    payeeAccountNumber: 23554
}

const bankAccount:BankAccount = {
    accountNumber: 2233,
    accountHolder: "Andrew",
    balance: 2003,
    isActive: true,
    transaction: [transaction1, transaction2]
}
```

#### Merging In Interface
`declaration merging: adding new properties` and that you could only do this using an interface. Here is an example of exactly that.

```typescript
interface Book{
    title: string;
    price: number;
}

interface Book {
    volume: number;
}

const book:Book ={
    title: "LOTR",
    price: 85,
    volume: 1
}
```
Interface has the power to merge both above `Book` types.

<strong>Example: Class implements using Interface</strong>

In this example we start with an `Animal` interface and build upon that to create a new `interface` for a `Herbivore`. `Herbivore` has a `consumePlant` function and that is all `implemented` by the `Cow` class.

```typescript
interface Animal {
    name: string
}

interface Herbivore extends Animal {
    consumePlant(plant:string):string
}

class Cow implements Herbivore {
    name = "Cow";

    consumePlant(plant:string){
        return `${plant} waste`
    }
}
const cow = new Cow();
cow.consumePlant("grass");

```
Example: we can add fields that are not mentioned in `interfaces` with the power of `implements`

```typescript
interface Animal {
    name: string
}

interface Herbivore extends Animal {
    consumePlant(plant:string):string
}

class Cow implements Herbivore {
    name = "Cow";
    scientificName = "Bos Taurus";
    consumePlant(plant:string){
        return `${plant} waste`
    }
}

const cow = new Cow();
cow.scientificName
cow.consumePlant("grass");

```
We demonstrated in the above codes how to use interface in a more generic terms as a reusable code syntax.


### Difference Between Interface vs Type
`Type aliases` and `interfaces` are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.


## General Strategy for Reusable Code in TS
* Create functions that accept arguments that are typed with interfaces.
* Objects/Classes can decide to 'implement' a given interface to work with a function.


## Classes in TS
Blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'.

### Methods
example: methods in class...

```typescript
class Vehicle {
    honk (): void{
        console.log("beep")
    }
}

const vehicle = new Vehicle ();
vehicle.honk()
```

Example: using inheritance

```typescript
class Vehicle {
    drive():void {
        console.log("chugga chugga")
    }

    honk ():void {
        console.log("beep")
    }
}


class Car extends Vehicle {}

const car = new Car ()
car.honk()
```

### Class Method Modifiers
#### Public
This method can be called anywhere, anytime. By default all methods are public.

#### Private
This method can only be called by other methods in this `this` class.

```typescript
class Vehicle {
    drive():void {
        console.log("chugga chugga")
    }

    private honk ():void {
        console.log("beep")
    }

    startDrivingProcess ():void {

    }
}

const vehicle = new Vehicle();
vehicle.honk(); //error because the method is private
```

we can use another method in the class to use honk() and then we will be able to call honk through that method.

```typescript
class Vehicle {
    drive():void {
        console.log("chugga chugga")
    }

    private honk ():void {
        console.log("beep")
    }

    startDrivingProcess ():void {
        this.honk()
    }
}

const vehicle = new Vehicle();
vehicle.startDrivingProcess(); 
```


#### Protected
This method can be called by other methods in `this` class or other methods in child class.

<p>Now, imagine we have a super class and a child class, what if we want to protect 
the method inside the class and also wanted it to be exposed only to child classes. then we use protect modifiers
</p>

```typescript
class Vehicle {
    private drive():void {
        console.log("Chugga chugga")
    }
    protected honk ():void {
        console.log("beep")
    }
    
    callHonkAndDrive ():void {
        this.honk();
        this.drive();
    }
}

class Car extends Vehicle {
    startDrivingProcess ():void {
        this.honk();
    }
}

const vehicle = new Vehicle ();
const car = new Car();

vehicle.callHonkAndDrive();

//car can call honk through callHonk() or startDrivingProcess()
car.startDrivingProcess();
car.callHonkAndDrive();
```


### Fields (Variables) in Class


Example1: 
```typescript
class Vehicle {
    color:string = "white";
    redColor:string = "red";

    callColor ():void {
        console.log(this.color);
    }
}

const vehicle = new Vehicle();
vehicle.callColor()
console.log(vehicle.redColor)

```


Example2: In this example we are using constructor function: we need constructor function when we need to pass a parameter to the class instance.

<strong>You can only once initialize a field inside the class, either in constructor function or outside of it.</strong>

```typescript
class Vehicle {
    color:string;

    constructor(color: string) {
        this.color = color
    }

    callColor ():void {
        console.log(this.color)
    }
}

const vehicle = new Vehicle ("red")
vehicle.callColor()
```

Here is a shortcut to automate the entire process of constructor function and class filed initialization. The above and below codes are 100% equivalent.


```typescript
class Vehicle {
    constructor(public color: string) {}

    callColor ():void {
        console.log(this.color)
    }
}

const vehicle = new Vehicle ("red")
vehicle.callColor()
```


Example3: Fields inheritance

```typescript
class Vehicle {
    constructor(public color: string) {
    }

    callColor ():void {
        console.log(this.color)
    }
}

const vehicle = new Vehicle ("red")
vehicle.callColor()



class Car extends Vehicle {
    constructor(public wheel: number, color: string) {
        super(color);
    }

    callWheel ():void {
        console.log(this.wheel)
    }
}
const car = new Car(4, "green")
car.callColor()
car.callWheel()
```

We didn't not used `public` with color because it is inherited from `Vehicle`, otherwise we could use `public` instead like for the `wheel`

### Where to Use Classes
Interfaces + Classes === Get really strong code reuse in TS

## Tool To Help Us Run TS in The Browser
- `npm install -g parcel-bundler`
- To run index.html file having TS file in the script use `parcel index.html`

## Type Definition Files
TS is nothing but a JS with types. But, when using an external library in TS environment you need to include a type definition file for the library because TS wants to know the type of the fields(variables) and the return type of methods(functions). Nowadays most libraries come with a type definition file, however sometimes some libraries they don't. In that case we need to look up the type definition file of that library in the npm package directory/website: `@type/{library-name} -> @type/faker`