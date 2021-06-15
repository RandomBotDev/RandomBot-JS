const Discord = require("discord.js")

module.exports = {
  async test(message) {
    if (message.content === "<@796745904228401202>" || message.content === "<@!796745904228401202>") {
      const author = message.guild.member(message.author.id)
      embed = new Discord.MessageEmbed()
      embed.setColor("RANDOM")
      embed.setTitle("Hello, my name is RandomBot JS!")
      embed.setThumbnail('https://cdn.discordapp.com/avatars/716309071854174268/da597c1ceb8aac700263b371bc3c1fc2.webp?size=1024')
      embed.addField("The developer", "Guacaplushy#0001", false)
      embed.addField("Did something go wrong?", "[Click this to join the support server.](https://js.randombot.tk/support)", false)
      embed.addField(name="Want to invite me to your server?", value="[Click this to invite me!](https://js.randombot.tk/invite)", false)
      embed.addField(name="Do you want my slash commands?", value="[Click this to invite me with slash commands!](https://js.randombot.tk/slash)", false)
      embed.addField(name="About Me:", value="The developer (Guacaplushy#0001) decided to learn JavaScript.\nSo to learn it he recoded the Python bot RandomBot in JavaScript.\nHe worked for a week and coded the commands one by one.\nI am the JavaScript version of RandomBot that he made.", false)
      embed.addField(name="My prefix:", value="rbj.", false)
      if (message.author.username == author.displayName) {
        embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
      } else {
        embed.setFooter(text=`Requested by ${author.displayName} (${message.author.username}#${message.author.discriminator})`, message.author.avatarURL())
      }
      await message.channel.send(embed=embed)
    } /*else if (message.content === "<@!796745904228401202>") {
      const author = message.guild.member(message.author.id)
      embed = new Discord.MessageEmbed()
      embed.setColor("RANDOM")
      embed.setTitle("Hello, my name is RandomBot JS!")
      embed.setThumbnail('https://cdn.discordapp.com/avatars/716309071854174268/da597c1ceb8aac700263b371bc3c1fc2.webp?size=1024')
      embed.addField("The developer", "GD Tom#6134", false)
      embed.addField("Did something go wrong?", "[Click this to join the support server.](https://js.randombot.tk/support)", false)
      embed.addField(name="Want to invite me to your server?", value="[Click this to invite me!](https://js.randombot.tk/invite)", false)
      embed.addField(name="Do you want my slash commands?", value="[Click this to invite me with slash commands!](https://js.randombot.tk/slash)", false)
      embed.addField(name="About Me:", value="The developer decided to learn JavaScript as he knew Python.\nSo to learn it he recoded the Python bot RandomBot in JavaScript.\nHe worked for a week and coded the commands one by one.\nI am the JavaScript version of RandomBot that he made.", false)
      embed.addField(name="My prefix:", value="rbj.", false)
      if (message.author.username == author.displayName) {
        embed.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`)
      } else {
        embed.setFooter(text=`Requested by ${author.displayName} (${message.author.username}#${message.author.discriminator})`)
      }
      await message.channel.send(embed=embed)
    }*/
  }
}