const Discord = require("discord.js")
greactors = []

client = new Discord.Client();

function sleep(seconds){
  ms = seconds * 1000
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
}

module.exports = {
  name: "giveaway",
  description: "Start a giveaway.",
  neededargs: "Channel, Time, Reward",
  optionalargs: "None",
  async execute(message, args) {
    greactors = [`${client.user.username}#${client.user.discriminator}`]
    if (args.length === 0) {
      message.channel.send("I need the channel to start the giveaway in.")
      return
    } else if (args.length === 1) {
      message.channel.send("I need to know the giveaway time.")
      return
    } else if (args.length === 2) {
      message.channel.send("I need the reward of the giveaway.")
      return
    } else {
      channel = args[0]
      channel = channel.replace("<#","")
      channel = channel.replace(">","")
      channel = await message.guild.channels.cache.get(channel)
      gtime = parseInt(args[1])
      reward = args.slice(2).join(' ');
      if (gtime > 86400) {
        await message.channel.send("I can only do giveaways shorter than 1 day.")
        return
      }
      Embed = new Discord.MessageEmbed()
      Embed.setTitle("New Giveaway!")
      Embed.addField("Prize", reward, true)
      Embed.addField("Time", `${gtime} seconds`, true)
      Embed.addField("Host", value=`${message.author.username}#${message.author.discriminator}`, true)
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
        nembed.addField("Host", `${message.author.username}#${message.author.discriminator}`, true)
        await gembed.edit(nembed)
        await sleep(1)
      }
      const index = greactors.indexOf(`${client.user.username}#${client.user.discriminator}`);
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
}

client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.emoji.name == '🎉') {
    const index = greactors.indexOf(`${client.user.username}#${client.user.discriminator}`);
    if (index > -1) {
      greactors.splice(index, 1);
    }
    greactors.push(`${user.username}#${user.discriminator}`)
  }
})

client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.emoji.name == '🎉') {
    const index = greactors.indexOf(`${user.username}#${user.discriminator}`);
    if (index > -1) {
      greactors.splice(index, 1);
    }
  }
})

client.on('ready', async () => {
  console.log("Giveaway's are ready to go!")
})


client.login(process.env.token)