module.exports = {
  name: "flipcoin",
  description: "Flip a coin.",
  neededargs: "None",
  optionalargs: "None",
  async execute(message, args) {
    sides = ["Heads!", "Tails!"];
    rdeci = Math.random();
    if (rdeci > 0.50) {
      side = sides[0];
    } else {
      side = sides[1];
    }
    await message.channel.send(side);
  },
}