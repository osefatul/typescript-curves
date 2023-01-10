

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor(){
        this.companyName = "Apple Inc.";
        this.catchPhrase = "Innovate and Simplify";
        this.location = {
            lat: 344,
            lng: 90
        }
    }
}