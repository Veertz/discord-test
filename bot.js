const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	client.user.setGame("Game");
    console.log('I am ready!');
});

client.on('message', message => {
	if (message.content == '!link') {
		message.channel.sendMessage('https://discord.gg/4ke4Vm9');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
