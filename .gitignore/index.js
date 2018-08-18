const Discord = require("discord.js")
const PhoenixAPI = new Discord.Client();
const PhoenixAPIVER = ("Alpha Release V1")
const PixBoot = new Discord.WebhookClient((process.env.BootID), (process.env.BootTO))
const PixEmergency = new Discord.WebhookClient((process.env.EmergencyID), (process.env.EmergencyTO))
const ErrorTypes = {
  infoPrefix: ':information_source:',
  errorPrefix: ':sos:',
  successPrefix: ':white_check_mark:'
}


PhoenixAPI.on('ready', () => {
PhoenixAPI.user.setActivity(`Phoenix API ${PhoenixAPIVER} `)
console.log("PhoenixAPI has Connected Successfully to the Discord API")
  PixBoot.send(`${ErrorTypes.successPrefix} System Has Started Up Successfully`);
PixBoot.send(`${ErrorTypes.infoPrefix} System Is Running On Version Phoenix API & Logs ${PhoenixAPIVER}`);
});

PhoenixLogs.on('disconnected', Phoenix => {
PixEmergency.send(`${ErrorTypes.errorPrefix} Phoenix API & Logs Has Been Disconnected From the Discord API`) 
});

PixBoot.send("Phoenix API Connecting")
PhoenixAPI.login(process.env.TOKEN).catch(e => {
  PixEmergency.send(e.toString());
  PixBoot.send("Phoenix API Has Crashed **Reboot Now!**")
});

