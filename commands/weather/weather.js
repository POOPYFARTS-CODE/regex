require('dotenv').config()
const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports={
    name: "weather",
    aliases: ['weth','sky'],
    async execute(message,args){
        const API_KEY = process.env.P_API_KEY
        const city = args[2];
        const api_link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        console.log(api_link);
        // let response = await fetch(api_link)
        // const data = await response.json()
        // console.log(data);
        // const temp = data.main.temp; //temperature
        // const feels_like = data.main.feels_like;
        // const temp_max = data.main.temp_max;
        // const temp_min = data.main.temp_min;
        // const humidity = data.main.humidity;
    }
}