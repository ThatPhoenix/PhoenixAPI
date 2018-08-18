const Discord = require("discord.js");
const PixAPI = new Discord.Client();
const PixEmergency = ("V1 Alpha Release")
const PixEmergencyLogs = new Discord.WebhookClient((process.env.EmergencyLogsID), (process.env.EmergencyLogsTO))

PixAPI.on('ready', () => { PixAPI.user.setActivity('PhoenixAPI Emergency Mode')  
console.log('Discord API Connection Successful')
});

PixAPI.login(process.env.TOKEN)

