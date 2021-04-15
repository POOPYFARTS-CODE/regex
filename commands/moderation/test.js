const Discord = require('discord.js');
const color = require('colors');

module.exports={
    name: "ping",
    execute(message,args){
        message.channel.send(`${message.author}`)
    }
}
