const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    message.channel.send('**__Server configuraciones__** \nservidor: `' + botconfig.server + '`\nPrefijo: `' + botconfig.prefix + '`')
}


module.exports.config = {
    name: "settings",
    description: "Fetches the profile data for the accounts you search",
    usage: botconfig.prefix + "settings",
    accessableby: "Members",
    aliases: ['s']
}