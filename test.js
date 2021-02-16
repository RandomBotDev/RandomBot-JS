const Discord = require('discord.js'); // Gets the discord.js lib
const client = new Discord.Client(); // For the discord bot to login and detect events

const { prefix, token } = require('./config'); // Will grab the module exports from config.js and will get the prefix and token variables (destructuring)

client.on('ready', () => { // When bot has logged in
console.log("Bot is online");
});

client.login(token);