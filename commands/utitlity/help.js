const Discord = require('discord.js');
const color = require('colors');

module.exports={
    name:'help',
    execute(message,args){
        const embed = new Discord.MessageEmbed()
        .setTitle('Help Menu')
        .addFields(
            {name: 'Commands' ,value: "**Moderation**: `rg mod`\n**Utility**: `rg util`"}
        )
        .setColor('#ff8882')
        message.channel.send(embed)
    }
}