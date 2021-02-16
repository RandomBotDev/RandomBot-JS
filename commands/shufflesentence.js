module.exports = {
  name: "shufflesentence",
  description: "Shuffle words to make a random sentence.",
  neededargs: "Sentence",
  optionalargs: "None",
  async execute(message, args) {
    if (args.length === 0) {
      await message.channel.send("I need the sentence to shuffle.")
    } else {
      ping = false
      Array.prototype.shuffle = function() {
        var i = this.length;
        if (i == 0) return this;
        while (--i) {
            var j = Math.floor(Math.random() * (i + 1 ));
            var a = this[i];
            var b = this[j];
            this[i] = b;
            this[j] = a;
        }
        return this;
      };
      var shuffled = `${args}`.split(',').shuffle().join(' ');
      var asplit = `${args}`.split(',')
      for (arg of asplit) {
        if (arg.startsWith("<@")) {
          ping = true
        } else if (arg.startsWith("@here")) {
          ping = true
        } else if (arg.startsWith("@everyone")) {
          ping = true
        }
      }
      if (ping) {
        await message.channel.send("I can't ping.")
        return 
      } else {
        await message.channel.send(shuffled)
      }
    }
  }
}