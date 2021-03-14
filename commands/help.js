const fs = require('fs');
var files = fs.readdirSync('./commands');
const Discord = require("discord.js")

module.exports = {
  name: "help",
  description: "RandomBot JS Help.",
  neededargs: "None",
  optionalargs: "Command",
  async execute(message, args) {
    const Embed = new Discord.MessageEmbed()
    if (args.length === 1) {
      var command;
      try {
        command = require(`./${args}`);
      } catch (err) {
        await message.channel.send(`I don't have a command named ${args}.`)
        return
      }
      if (!command.name || command.name === "giveawayslash") {
        await message.channel.send(`I don't have a command named ${args}.`)
        return
      }
      Embed.setColor("RANDOM")
      Embed.setTitle("Command Help")
      member = message.guild.member(message.author.id)
      if (message.author.username === member.displayName) {
        Embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
      } else {
        Embed.setFooter(`Requested by ${member.displayName} (${message.author.username}#${message.author.discriminator})`, message.author.avatarURL())
      }
      Embed.addField('Name', `${command.name}`, false);
      Embed.addField('Description', `${command.description}`, false);
      Embed.addField('Needed arguments', `${command.neededargs}`, false);
      Embed.addField('Optional arguments', `${command.optionalargs}`, false);
      await message.channel.send(Embed);
      return
    }
    Embed.setTitle("RandomBot JS Help")
    Embed.setColor("RANDOM")
    fLen = 0;
    for (const file in files) {
      const files1 = require(`./${files[file]}`);
      if (fLen == 10 || fLen === 13 || fLen === 16 || fLen === 7) {
        fLen = fLen + 1;
      } else if (fLen % 1 === 1) {
        Embed.addField(`${files1.name}`, `${files1.description}`, false);
        fLen = fLen + 1;
      } else {
        Embed.addField(`${files1.name}`, `${files1.description}`, true);
        fLen = fLen + 1;
      }
    }
    member = message.guild.member(message.author.id)
    if (message.author.username === member.displayName) {
      Embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
    } else {
      Embed.setFooter(`Requested by ${member.displayName} (${message.author.username}#${message.author.discriminator})`, message.author.avatarURL())
    }
    await message.channel.send(Embed);
  },
}