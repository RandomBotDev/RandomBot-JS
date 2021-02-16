module.exports = {
  name: "smarttest",
  description: "How smart are you?",
  neededargs: "None",
  optionalargs: "None",
  async execute(message, args) {
    cnmbr = Math.floor(Math.random() * 101);
    await message.reply(`You are ${cnmbr}% smart.`);
  },
}