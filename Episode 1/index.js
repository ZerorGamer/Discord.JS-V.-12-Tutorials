var express = require('express');
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "/";
const TOKEN = process.env.TOKEN;

client.on('ready', () => {
  console.log('Bot wurde gestartet!')
});

client.on('message', message => {
  if(message.content === "Hallo") {
    message.channel.send('Moin')
  }
});

client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === '👀willkommen😍');
  
  let willkommensembed = new Discord.MessageEmbed()
  .setTitle('Willkommen')
  .setDescription(`Herzlichst Willkommen auf dem DiCoMa - Community-Server, ${member}\n\nMit dir sind wir nun ${member.guild.memberCount} Mitglieder!\n\nLieß dir bitte die Regeln durch!`)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter('Created by DiCoMa')
  
  channel.send(`${member.user}`)
  channel.send(willkommensembed)
});

client.on('guildMemberRemove', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === '👀willkommen😍');
  
  let aufwiedersehensembed = new Discord.MessageEmbed()
  .setTitle('Aufwiedersehen')
  .setDescription(`AUfwiedersehen, ${member.user.tag}, wir wünschen dir noch eine Gute Zeit und viel Glück!`)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter('Created by DiCoMa')
  
  channel.send(aufwiedersehensembed)
});

client.on('message', message => {
  
  let args = message.content.substring(PREFIX.length).split(" ");
  
  switch(args[0]) {
         
    case "test":
      message.channel.send('Bestanden!');
    break;
   
  };
});

client.login(TOKEN)
