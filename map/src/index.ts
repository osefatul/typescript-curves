/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

console.log(user)
console.log(company)
const lulu = { lat: -25.344, lng: 131.031 };

// const div = document.createElement("div") as HTMLElement;
// div.style.backgroundColor = "black";
// div.style.height= "100%";
// div.style.width= "40%";
// div.style.color = "white";
// div.style.display = "flex";
// div.style.alignItems = "center";
// div.style.justifyContent = "center";
// div.innerText = `Hello ${user.name}`

// map.appendChild(div);
// const map =  document.getElementById("map") as HTMLElement;


const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
        zoom: 4,
        center: lulu,
    }
);





interface HasAge {
    age: number;
}

function getOldestAge <T extends HasAge> (people: T[]):T {
    return people.sort((a, b) => b.age - a.age)[0]
}
const people = [{age:30}, {age:40}, {age:50}];

console.log(getOldestAge(people))



interface Player {
    name: string;
    age: number;
}

const players: Player[] = [
    {name: 'John', age:30},
    {name: "Mike", age:40},
    {name: "Julian", age:60},
]

console.log(getOldestAge(players).age)
console.log(getOldestAge(players).name)
