/// <reference types="@types/google.maps" />
// import { User } from "./User";
// import { Company } from "./Company";

// const user = new User();
// const company = new Company();

// console.log(user)
// console.log(company)
// const lulu = { lat: -25.344, lng: 131.031 };

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


// const map = new google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//         zoom: 4,
//         center: lulu,
//     }
// );




interface ICredentials {
    username: string;
    password: string;
    isAdmin?: boolean;
}


const login = (credentials: ICredentials):boolean =>{
    console.log(credentials);
    return true;
}


const user = {
    username: "WDKStudio",
    password: "password",
    isAdmin: true,
}

login(user)