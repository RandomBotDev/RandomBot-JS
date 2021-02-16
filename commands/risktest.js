module.exports = {
  name: "risktest",
  description: "How risky is something?",
  neededargs: "Thing",
  optionalargs: "None",
  async execute(message, args) {
    if (args.length === 0) {
      await message.channel.send("I need the thing to risk test.")
      return
    }
    risk = Math.floor(Math.random() * 101)
    await message.channel.send(`***${args}*** is ${risk}% risky`)
  }
}