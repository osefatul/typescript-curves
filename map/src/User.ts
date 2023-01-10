

export class User {
    name:string;
    location: {
        lat:number;
        lng:number
    }

    constructor(){
        this.name = "John Smith";
        this.location = {
            lat: 12,
            lng: 22
        }
    }
}