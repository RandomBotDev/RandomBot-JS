module.exports = {
  name: "shufflebyword",
  description: "Shuffle every word in a sentence.",
  neededargs: "Sentence",
  optionalargs: "None",
  async execute(message, args) {
    ping = false
    if (args.length === 0) {
      await message.channel.send("I need the sentence to shuffle.")
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
    shuffled = ""
    for (arg of args) {
      sarg = `${arg}`.shuffle()
      if (sarg.startsWith("<@")) {
        ping = true
      } else if (sarg === "@here") {
        ping = true
      } else if (sarg === "@everyone") {
        ping = true
      }
      shuffled = shuffled + sarg + " "
    }
    if (ping) {
      await message.channel.send("I can't ping.")
      return
    }
    await message.channel.send(shuffled);
  }
}