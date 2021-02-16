module.exports = {
  name: "luckynumber",
  description: "Generates a lucky number.",
  neededargs: "None",
  optionalargs: "None",
  async execute(message, args) {
    lnmbr = Math.floor(Math.random() * 101);
    await message.channel.send(lnmbr);
  },
}