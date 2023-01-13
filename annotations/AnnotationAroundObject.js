"use strict";
const profile = {
    name: "alex",
    age: 36,
    coord: {
        lat: 0,
        lng: 10
    },
    setAge(age) {
        this.age = age;
    }
};
const { age } = profile;
const { coord: { lat, lng } } = profile;
