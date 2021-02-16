module.exports = {
  name: "decide",
  description: "Decide on something.",
  neededargs: "Thing",
  optionalargs: "None",
  async execute(message, args) {
    if (args.length >= 1) {
      choices = ['Yes.', 'For sure!', 'Maybe.', 'I don\'t know.', 'No.', 'Definently not.', 'Definently!'];
      choice = choices[Math.floor(Math.random() * choices.length)];
      await message.channel.send(choice);
    } else {
      await message.channel.send("I need something to decide on.")
    }
  },
}