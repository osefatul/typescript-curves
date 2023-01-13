"use strict";
const todaysWeather = {
    date: new Date(),
    weather: "sunny",
};
// const logWeather = (forecast: {date:Date, weather:string}) =>{
//     console.log(forecast.date)
//     console.log(forecast.weather)
// }
//or use EMA2015
const logWeather = ({ date, weather }) => {
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
