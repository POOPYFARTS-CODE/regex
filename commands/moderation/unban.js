const Discord = require('discord.js')

module.exports={
    name: 'unban',
    async execute(message,client,args){
        let toBan = await client.users.fetch(args[0])
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You Dont Have Enought Perms To Use This Command") 
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("I Dont Have Enought Perms!") 
        
        let invite = await message.channel.createInvite(
            {
              maxAge: 10 * 60 * 1000, 
              maxUses: 1 
            }
          )

        message.guild.members.unban(toBan)
        message.channel.send(`${toBan} Has Been Unbanned!`);
    }
}
