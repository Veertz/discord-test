import discord
from discord.ext import commands

TOKEN = 'NTA4MzMxNzcyMzU5MDgxOTg0.Dr9u5g.abYlzFu9BxOmCQRF52FomIl4JFQ'

client = commands.Bot(command_prefix = '.')

@client.event
async def on_ready():
	await client.change_presence(game=discord.Game(name='Test'))
	print('Bot is ready.')
	
client.run(TOKEN)
