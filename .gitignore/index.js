const Discord = require("discord.js")
const PhoenixAPI = new Discord.Client();
const PhoenixAPIVER = ("Alpha Release V1")

PhoenixAPI.on('ready', () => {
PhoenixAPI.user.setActivity(`Phoenix API ${PhoenixAPIVER} `)
console.log("PhoenixAPI has Connected Successfully to the Discord API")
});

PhoenixAPI.login(process.env.TOKEN)
