module.exports = {
  name: "rate",
  description: "Rates a thing.",
  neededargs: "Thing",
  optionalargs: "None",
  async execute(message, args) {
    if (args.length === 0) {
      await message.channel.send("I need the thing to rate.")
      return
    }
    v1 = Math.floor(Math.random() * 6)
    v2 = Math.floor(Math.random() * 10)
    args = args.join(" ")
    if (v1 == 5 && v2 > 0) {
      await message.channel.send(`I rate ***${args}*** 5 out of 5 stars.`)
    } else if (v1 == 5 && v2 == 0) {
      await message.channel.send(`I rate ***${args}*** 5 out of 5 stars.`)
    } else if (v1 == 0 && v2 == 0) {
      await message.channel.send(`I rate ***${args}*** 0 out of 5 stars.`)
    } else {
      await message.channel.send(`I rate ***${args}*** ${v1}.${v2} out of 5 stars.`)
    }
  }
}