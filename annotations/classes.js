"use strict";
// class Vehicle {
//     drive():void {
//         console.log("chugga chugga")
//     }
//     honk ():void {
//         console.log("beep")
//     }
// }
// class Car extends Vehicle {}
// const car = new Car ()
// car.honk()
//private methods
// class Vehicle {
//     drive():void {
//         console.log("chugga chugga")
//     }
//     private honk ():void {
//         console.log("beep")
//     }
// }
// const vehicle = new Vehicle();
// vehicle.honk();
// class Vehicle {
//     drive():void {
//         console.log("chugga chugga")
//     }
//     private honk ():void {
//         console.log("beep")
//     }
//     startDrivingProcess():void {
//         this.honk()
//     }
// }
// const vehicle = new Vehicle();
// vehicle.startDrivingProcess();
//protected methods
// class Vehicle {
//     private drive():void {
//         console.log("Chugga chugga")
//     }
//     protected honk ():void {
//         console.log("beep")
//     }
//     callHonkAndDrive ():void {
//         this.honk();
//         this.drive();
//     }
// }
// class Car extends Vehicle {
//     startDrivingProcess ():void {
//         this.honk();
//     }
// }
// const vehicle = new Vehicle ();
// const car = new Car();
// vehicle.callHonkAndDrive();
// //car can call honk through callHonk() or startDrivingProcess()
// car.startDrivingProcess();
// car.callHonkAndDrive();
//Fields
// class Vehicle {
//     color:string = "white";
//     redColor:string = "red";
//     callColor ():void {
//         console.log(this.color);
//     }
// }
// const vehicle = new Vehicle();
// vehicle.callColor()
// console.log(vehicle.redColor)
// Fields with constructor
// class Vehicle {
//     color:string;
//     constructor(color: string) {
//         this.color = color
//     }
//     callColor ():void {
//         console.log(this.color)
//     }
// }
// const vehicle = new Vehicle ("red")
// vehicle.callColor()
//Lets automate the above code
class Vehicle {
    constructor(color) {
        this.color = color;
    }
    callColor() {
        console.log(this.color);
    }
}
const vehicle = new Vehicle("red");
vehicle.callColor();
//Child class
class Car extends Vehicle {
    constructor(wheel, color) {
        super(color);
        this.wheel = wheel;
    }
    callWheel() {
        console.log(this.wheel);
    }
}
const car = new Car(4, "green");
car.callColor();
car.callWheel();
