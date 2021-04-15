const Discord = require('discord.js');
const colors = require('colors');
const fs = require('fs')
const {prefix,token} = require('./config.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

const commandFiles = fs.readdirSync('./commands').filter(file=> file.endsWith('.js'));


for(const file of commandFiles){
    const command = require(`./commands/${file}`)
}

client.once('ready',()=>{
    console.log('Ready'.green);
})

client.on('message', message=>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const commandName = args.shift().toLocaleLowerCase();


    const command = client.commands.get(commandName)
        || client.commands.find(cmd=> cmd.aliases && cmd.aliases.includes(commandName));
    if(!command) return;
    try{
        command.execute(message,client,args);
    }catch(error){
        console.log(error.red);
        message.react("😭");
        message.reply('There Was Error Running Your Command')
    }
})
client.login(token);