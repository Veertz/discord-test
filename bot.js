const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	if (message.content == '!texturepack') {
		message.channel.sendMessage('ZodiacHCF: http://www.mediafire.com/file/u73mo15efqik6fa/ZodiacHCF.zip/file');
		message.channel.sendMessage('ZodiacHCF 6x6: http://www.mediafire.com/file/pt2rmukncjkj9hd/Zodiac_6x6.zip/file');
	}
	if (message.content == '!txp') {
		message.channel.sendMessage('ZodiacHCF: http://www.mediafire.com/file/u73mo15efqik6fa/ZodiacHCF.zip/file');
		message.channel.sendMessage('ZodiacHCF 6x6: http://www.mediafire.com/file/pt2rmukncjkj9hd/Zodiac_6x6.zip/file');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
