module.exports = {
  name: "randomnumber",
  description: "Generates a random number.",
  neededargs: "Length",
  optionalargs: "None",
  async execute(message, args) {
    if (args.length === 0) {
      await message.channel.send("Please add the number range as an argument.");
    } else if (args.length > 1) {
      await message.channel.send("This command takes only 1 argument.");
    } else if (args > 1000000000000) {
      await message.channel.send("I can only generate numbers shorter than 1000000000000 characters.")
      return
    } else {
      rnmbr = Math.floor(Math.random() * args) + 1;
      await message.channel.send(rnmbr);
    }
  },
};