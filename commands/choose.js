module.exports = {
  name: "choose",
  description: "Seperate choices with \" + \"",
  neededargs: "Things",
  optionalargs: "None",
  async execute(message, args) {
    if (args.length < 1) {
      await message.channel.send("I need things to decide on.")
    } else {
      osplit = `${args}`.replace(/,\+/g, "");
      osplit = osplit.split(",");
      ping = false;
      osplit.forEach(option => {
        if (option.startsWith('<@')) {
          ping = true;
        } else if (option.startsWith('@here')) {
          ping = true;
        } else if (option.startsWith('@everyone')) {
          ping = true;
        }
      })
      if (ping) {
        await message.channel.send('I can\'t ping.');
        return;
      }
      choice = osplit[Math.floor(Math.random() * osplit.length)];
      await message.channel.send(`I choose ***${choice}***.`)
    }
  }
}