const Discord = require('discord.js');

module.exports = {
  name: "eject",
  description: "Eject a user.",
  neededargs: "None",
  optionalargs: "User",
  async execute(message, args) {
    const user = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
    const imp = [true, false, false, false, false];
    const imposter = imp[Math.floor(Math.random() * imp.length)];
    const crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"]
    const crewmate = crew[Math.floor(Math.random() * crew.length)];

    ejected = `https://js.randombot.tk/api/eject?name=${encodeURIComponent(user.username)}&impostor=${imposter}&crewmate=${crewmate}`;
               
    const Embed = new Discord.MessageEmbed();
    Embed.setImage(ejected);
                 
    await message.channel.send(Embed);
  },
}