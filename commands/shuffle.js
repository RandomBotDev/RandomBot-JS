module.exports = {
  name: "shuffle",
  description: "Shuffle letters to make a random word.",
  neededargs: "Word(s)",
  optionalargs: "None",
  async execute(message, args) {
    ping = false
    if (args.length === 0) {
      await message.channel.send("I need the word(s) to shuffle.")
      return
    }
    String.prototype.shuffle = function () {
      var a = this.split(""),
          n = a.length;

      for(var i = n - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = a[i];
          a[i] = a[j];
          a[j] = tmp;
      }
      return a.join("");
    }
    shuffled = `${args}`.shuffle()
    if (shuffled.startsWith("<@")) {
      ping = true
    } else if (shuffled === "@here") {
      ping = true
    } else if (shuffled === "@everyone") {
      ping = true
    }
    if (ping) {
      await message.channel.send("I can't ping.")
      return
    }
    await message.channel.send(shuffled);
  }
}