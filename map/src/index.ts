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




interface IPost {
    id: number;
    post:string;
    title: string;
}

//return an array of IPost which is promise
const fetchPostData = async (path: string): Promise<IPost[]> => {
    const res = await fetch(`http://example.com${path}`);
    return res.json()
}



interface IUser {
    id: number;
    name:string;
    age: number;
}

//return an array of IPost which is promise
const fetchUserData = async <ResultType> (path: string): Promise<ResultType> => {
    const res = await fetch(`http://example.com${path}`);
    return res.json()
}

(async ()=>{
    const posts = await fetchUserData<IPost []>("/posts");
    posts[0]

    const users = await fetchUserData<IUser []>("/users");
    users[0]
})