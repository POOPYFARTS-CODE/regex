require('dotenv').config();
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports={
    name: 'aopd',
    aliases: ['pic od the day'],
    async execute(message,args){
        let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=ELFsyyUbbbekab49ZaCb3LY1kTCkPOINLZlnzyyx');
        let data = await response.json();

        const embed = new Discord.MessageEmbed()
          .setDescription()
    }
}