module.exports = {
  name: "binarygen",
  description: "Generate a random binary sequence.",
  neededargs: "Length",
  optionalargs: "None",
  async execute(message, args) {
    if (args.length === 0) {
      await message.channel.send("I need the length of the binary sequence.")
    } else if (args > 220) {
      await message.channel.send("I can only generate binary sequences shorter than 220 chunks.")
      return
    } else if (args.length === 1) {
      bin = "01";
      gbin = "";
      for (gen1 = 0; gen1 < args; gen1++) {
        for (gen2 = 0; gen2 < 8; gen2++) {
          cbin = bin[Math.floor(Math.random() * bin.length)];
          gbin = gbin + cbin;
        }
        gbin = gbin + " ";
      }
      await message.channel.send(gbin);
    } else {
      await message.channel.send("This command only needs 1 argument.")
    }
  }
}