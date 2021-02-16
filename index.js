const Discord = require("discord.js")
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
const prefix = process.env.prefix
require("./slash")
require("./server")
const Ping = require("./commands/ping")

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.on('message', async (message) => {
  const args1 = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName1 = args1.shift().toLowerCase();
  if (commandName1 === "giveawayslash") {
    if (message.author.bot) {
      bot.commands.get("giveawayslash").execute(message, args1);
    }
  }
  if (message.author.bot) return;
  Ping.test(message);
  //if (!message.content.toLowerCase().startsWith(prefix)) return;

  const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const prefixRegex = new RegExp(`^(<@!?${bot.user.id}>|${escapeRegex(prefix)})\\s*`);

  if (!prefixRegex.test(message.content.toLowerCase())) return;
  const [, matchedPrefix] = message.content.toLowerCase().match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!bot.commands.has(commandName)) return;

  try {
    if (commandName !== "giveawayslash") {
      bot.commands.get(commandName).execute(message, args);
    }
  } catch (error) {
	  message.channel.send(`An error occured: ${error}`);
  }
});

bot.on('ready', async () => {
  console.log(`${bot.user.username} main is ready to go!`);
  bot.user.setPresence({
    activity: {
      name: `${prefix}help | JS version of RandomBot`,
    },
  })
});

bot.login(process.env.token)