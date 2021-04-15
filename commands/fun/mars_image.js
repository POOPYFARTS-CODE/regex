require('dotenv').config()
const Discord = require('discord.js');
const fetch = require('node-fetch')


const API_KEY = process.env.API_KEY

module.exports={
    name: 'mars',
    aliases: ['mrspic','marspics'],
     async execute(message,args){
         function days(max) {
            return Math.floor(Math.random() * max);
         }
            let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${days(26)}&api_key=`+API_KEY);

            const data = await response.json();

            const embed = new Discord.MessageEmbed()
            .setDescription('Image From Mars')
            .setImage(data.img_src)
            .setTimestamp(data.date)
            .setColor('#51c4d3')
            message.channel.send(embed)
        }
    }
