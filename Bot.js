
const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login(process.env.bot_token)


bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !')
  }
})

