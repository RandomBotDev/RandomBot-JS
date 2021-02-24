module.exports = {
  name: "dice",
  description: "Rolls dice.",
  neededargs: "Dice, Sides",
  optionalargs: "None",
  async execute(message, args) {
    if (args.length === 0) {
      await message.channel.send("I need the number of dice to roll.")
      return
    } else if (args.length === 1) {
      await message.channel.send("I need the number of sides on the dice.")
      return
    }
    if (parseInt(args[0]) > 100) return await message.channel.send("I can only roll up to 100 dice.");
    if (parseInt(args[1]) > 100) return await message.channel.send("I can only roll with up to 100 sides.");
    result = []
    for(let sides = 0; sides < parseInt(args[0]); sides++) {
      die = 1 + Math.floor(Math.random()*parseInt(args[1]))
      result.push(die)
    }
    thedice = result.join(", ")
    await message.channel.send(thedice)
  }
}