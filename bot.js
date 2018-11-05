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
});

client.on("serverNewMember", (server, user) => {
     client.sendMessage(user, "Bienvenido a: " + server.name);
});

client.on("message", (msg) => {
     client.sendMessage(msg.author, "I can see you sent a message in: " + msg.channel.name + ", but I am just a simple bot and haven't been programmed to do anything special with messages yet.");
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
