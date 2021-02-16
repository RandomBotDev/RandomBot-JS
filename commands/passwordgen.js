module.exports = {
  name: "passwordgen",
  description: "Generate a random password.",
  neededargs: "Length",
  optionalargs: "None",
  async execute(message, args) {
    if (args.length < 1) {
      await message.channel.send("You need the length of the password.")
    } else if (args > 1975) {
      await message.channel.send("I can only generate passwords shorter than 1975 characters.")
      return
    } else if (args.length === 1) {
      if (args > 5) {
        chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*();,./':<>?\[]}{-=+";
        password="";
        for (gen = 0; gen < args; gen++) {
          genchar = chars[Math.floor(Math.random() * chars.length)];
          password = password + genchar;
        }
        if (message.guild == null) {
          await message.author.send(`Generated password: \`${password}\``);
        } else {
          await message.channel.send(`Check your DM's.`);
          await message.author.send(`Generated password: \`${password}\``);
        }
      }
    } else {
      await message.channel.send("This command only takes 1 arguement.")
    }
  }
}