const Discord = require("discord.js")
greactors = []

bot = new Discord.Client();

function sleep(seconds){
  ms = seconds * 1000
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
}

function toTime(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  if ((dDisplay + hDisplay + mDisplay + sDisplay) === "") return 0;
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

module.exports = {
  name: "giveaway",
  description: "Start a giveaway.",
  neededargs: "Channel, Time, Reward",
  optionalargs: "None",
  async execute(message, args) {
    greactors = [`${bot.user.username}#${bot.user.discriminator}`]
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
      if (!parseInt(args[1])) return message.channel.send("I need a valid time.");
      Embed = new Discord.MessageEmbed()
      Embed.setTitle("New Giveaway!")
      Embed.addField("Prize", reward, true)
      Embed.addField("Time", `${toTime(gtime)}`, true)
      Embed.addField("Host", value=`${message.author.username}#${message.author.discriminator}`, true)
      gembed = await channel.send(Embed)
      await gembed.react("🎉")
      if (message.channel.id === gembed.channel.id) {

      } else {
        await message.channel.send("Giveaway started!")
      }
      await sleep(10)
      nembed = null
      while (gtime > 0) {
        gtime = gtime - 10
        if (gtime <= 0) {
          nembed = new Discord.MessageEmbed()
          nembed.setTitle("New giveaway!")
          nembed.addField("Prize", reward, true)
          nembed.addField("Time", "0 seconds", true)
          nembed.addField("Host", `${message.author.username}#${message.author.discriminator}`, true)
          await gembed.edit(nembed)
        } else {
          nembed = new Discord.MessageEmbed()
          nembed.setTitle("New giveaway!")
          nembed.addField("Prize", reward, true)
          nembed.addField("Time", `${toTime(gtime)}`, true)
          nembed.addField("Host", `${message.author.username}#${message.author.discriminator}`, true)
          await gembed.edit(nembed)
          await sleep(10)
        }
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
  console.log("Giveaway's are ready to go!")
})


bot.login(process.env.token)