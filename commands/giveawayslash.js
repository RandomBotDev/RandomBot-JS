const Discord = require("discord.js")
greactors = []

var bot = new Discord.Client();

function sleep(seconds){
  ms = seconds * 1000
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
}

module.exports = {
  name: "giveawayslash",
  description: "Slash command giveaway command",
  neededargs: "Channel, Time, Reward",
  optionalargs: "None",
  async execute(message, args) {
      message.delete()
      greactors = [`${bot.user.username}#${bot.user.discriminator}`]
      channel = args[0]
      channel = channel.replace("<#","")
      channel = channel.replace(">","")
      channel = await message.guild.channels.cache.get(channel)
      gtime = parseInt(args[1])
      host = decodeURIComponent(args[2])
      reward = args.slice(3).join(' ');
      if (gtime > 86400) {
        await message.channel.send("I can only do giveaways shorter than 1 day.")
        return
      }
      Embed = new Discord.MessageEmbed()
      Embed.setTitle("New Giveaway!")
      Embed.addField("Prize", reward, true)
      Embed.addField("Time", `${gtime} seconds`, true)
      Embed.addField("Host", value=`${host}`, true)
      gembed = await channel.send(Embed)
      gembed.react("🎉")
      if (message.channel.id === gembed.channel.id) {

      } else {
        await message.channel.send("Giveaway started!")
      }
      nembed = null
      while (gtime > 0) {
        gtime = gtime - 1
        nembed = new Discord.MessageEmbed()
        nembed.setTitle("New giveaway!")
        nembed.addField("Prize", reward, true)
        nembed.addField("Time", `${gtime} seconds`, true)
        nembed.addField("Host", `${host}`, true)
        await gembed.edit(nembed)
        await sleep(1)
      }
      const index = greactors.indexOf(`${bot.user.username}#${bot.user.discriminator}`);
      if (index > -1) {
        greactors.splice(index, 1);
      }
      if (greactors.length === 0) {
        wembed = new Discord.MessageEmbed()
        wembed.setTitle(`Nobody won the ${reward} giveaway.`)
        await gembed.edit(wembed)
      } else {
        wembed = new Discord.MessageEmbed()
        winner = greactors[Math.floor(Math.random() * greactors.length)]
        wembed.setTitle(`${winner} won the ${reward} giveaway!`)
        await gembed.edit(wembed)
      }
      greactors = []
    }
}

bot.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.emoji.name == '🎉') {
    const index = greactors.indexOf(`${bot.user.username}#${bot.user.discriminator}`);
    if (index > -1) {
      greactors.splice(index, 1);
    }
    greactors.push(`${user.username}#${user.discriminator}`)
  }
})

bot.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.emoji.name == '🎉') {
    const index = greactors.indexOf(`${user.username}#${user.discriminator}`);
    if (index > -1) {
      greactors.splice(index, 1);
    }
  }
})

bot.on('ready', async () => {
  console.log("Slash giveaway's are ready to go!")
})

bot.login(process.env.token)