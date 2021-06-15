module.exports = {
  name: 'eval',
  description: 'evaluate code',
  async execute(message, args) {
    if (["716250356803174511"].includes(message.author.id)) {

    } else {
      await message.channel.send("You are not the bot developer...")
    }
    var result = args.join(" ");
    var evaled;
    try {
      evaled = await eval(`(async () => { ${result} })()`);
    } catch (err) {
      if (`${err}` === `DiscordAPIError: Cannot send an empty message`) return;
      message.channel.send(`${err}`)
      return
    }

    await message.channel.send(evaled);
  }
}
