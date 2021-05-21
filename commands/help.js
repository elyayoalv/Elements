const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const help = new Discord.MessageEmbed()
        .setTitle('__Lista de comandos__')
        .addField('__Ayuda__', 'Si nesesitas ayuda contactate con [El yayo_alv](https://twitter.com/Elyayo_alv). Recuerda unirte al discord del GDPS [here](https://discord.gg/mKshtzkuE7)')
        .addField('__Commands__', '`' + botconfig.prefix + 'profile {Nombre de usuario o la ID del usuario}`\n\n`' + botconfig.prefix + 'level {Nombre del nivel o la ID del nivel}`\n\n`' + botconfig.prefix + 'leaderboard {star/cp}`\n\n`'  + botconfig.prefix + 'settings   `\n\n`')
        .setColor('0x' + botconfig.commandColour)
    message.channel.send(help)
}



module.exports.config = {
    name: "help",
    description: "provides helpful information",
    usage: botconfig.prefix + "help",
    accessableby: "Members",
    aliases: ['commands']
}