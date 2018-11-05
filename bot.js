const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	client.user.setGame("!ayuda");
    console.log('I am ready!');
});

client.on('message', message => {
	if (message.content == '!link') {
		message.channel.sendMessage('https://discord.gg/4ke4Vm9');
	}

client.on('message', message => {
	if (message.content == '!ayuda') {
		  client.sendMessage(msg.author, 'Usa !link para conseguir el codigo de invitacion permanente');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
