module.exports = {
  name: "yesorno",
  description: "Randomly choose yes or no.",
  neededargs: "None",
  optionalargs: "None",
  async execute(message, args) {
    choices = ["Yes.", "No."];
    rnum = Math.random();
    if (rnum > 0.50) {
      choice = choices[0];
    } else {
      choice = choices[1];
    }
    await message.channel.send(choice);
  },
}