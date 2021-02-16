const Discord = require("discord.js")

async function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

module.exports = {
  name: "colorgen",
  description: "Generate a random hex color (with RGB).",
  neededargs: "None",
  optionalargs: "None",
  async execute(message, args) {
    chars="01234567890abcdef";
    colorhex="";
    for (gen = 0; gen < 6; gen++) {
      genchar = chars[Math.floor(Math.random() * chars.length)];
      colorhex = colorhex + genchar;
    }
    colorrgb = await hexToRgb(`#${colorhex}`)
    colorrgb = `${colorrgb.r}, ${colorrgb.g}, ${colorrgb.b}`
    Embed = new Discord.MessageEmbed()
    Embed.setColor(colorhex)
    Embed.setTitle(`#${colorhex} (${colorrgb})`)
    await message.channel.send(Embed)
  },
}