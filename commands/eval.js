module.exports = {
  name: 'eval',
  description: 'evaluate code',
  async execute(message, args) {
    if (["716250356803174511"].includes(message.author.id)) {

    } else {
      await message.channel.send("You are not the bot developer...")
    }
    //const userId = message.guild.members.find(m => m.id === "588756782701215775")
    var result = message.content.split(" ").slice(1).join(" ");
    var evaled;
    try {
      evaled = eval(result);
    } catch (err) {
      message.channel.send(`${err}`)
      return
    }

    await message.channel.send(evaled);
  }
}
