const Discord = require("discord.js");

bot = new Discord.Client();
greactors = []

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'cooltest',
  description: 'How cool are you?',
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'smarttest',
  description: 'How smart are you?',
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'impostor',
  description: 'Are you an impostor?',
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'flipcoin',
  description: 'Flip a coin.',
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'luckynumber',
  description: 'Generates a lucky number.',
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'randomnumber',
  description: 'Generates a random number.',
  options: [
    {
      name: "range",
      description: "The range of the number.",
      type: 4,
      required: true,
    }
  ],
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'passwordgen',
  description: 'Generate a random password.',
  options: [
    {
      name: "length",
      description: "The length of the password.",
      type: 4,
      required: true,
    }
  ],
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'choose',
  description: 'Choose out of a list of things. Seperate the choices with " + "',
  options: [
    {
      name: "things",
      description: "Seperate these with \" + \".",
      type: 3,
      required: true,
    }
  ],
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'shufflesentence',
  description: 'Shuffle words to make a random sentence.',
  options: [
    {
      name: "sentence",
      description: "The sentence to shuffle.",
      type: 3,
      required: true,
    }
  ],
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'shufflebyword',
  description: 'Shuffle every word in a sentence.',
  options: [
    {
      name: "sentence",
      description: "The sentence to shuffle.",
      type: 3,
      required: true,
    }
  ],
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'rate',
  description: 'Rate a thing.',
  options: [
    {
      name: "thing",
      description: "The thing to rate",
      type: 3,
      required: true,
    }
  ],
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'yesorno',
  description: 'Randomly choose yes or no.',
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'binarygen',
  description: 'Generate a random binary sequence.',
  options: [
    {
      name: "length",
      description: "The length of the sequence.",
      type: 4,
      required: true,
    }
  ],
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'dice',
  description: 'Roll dice.',
  options: [
    {
      name: "amount",
      description: "The amount of dice to roll.",
      type: 4,
      required: true,
    },
    {
      name: "sides",
      description: "The amount of sides on the dice.",
      type: 4,
      required: true,
    }
  ],
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'giveaway',
  description: 'Start a giveaway.',
  options: [
    {
      name: "channel",
      description: "The channel to start the giveaway in.",
      type: 7,
      required: true,
    },
    {
      name: "time",
      description: "The time of the giveaway in seconds.",
      type: 4,
      required: true,
    },
    {
      name: "reward",
      description: "The reward of the giveaway.",
      type: 3,
      required: true,
    }
  ],
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'eject',
  description: 'Eject a user.',
  options: [
    {
      name: "user",
      description: "The user to eject.",
      type: 6,
      required: true,
    }
  ],
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'colorgen',
  description: 'Generate a random hex color (with RGB).',
}})

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'decide',
  description: 'Decide on something.',
  options: [
    {
      name: "thing",
      description: "What to decide on.",
      type: 3,
      required: true,
    }
  ],
}});

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'shuffle',
  description: 'Shuffle letters to make a random word.',
  options: [
    {
      name: "word",
      description: "What to shuffle.",
      type: 3,
      required: true,
    }
  ],
}});

bot.api.applications('796745904228401202').commands.post({data: {
  name: 'risktest',
  description: 'How risky is something?',
  options: [
    {
      name: "thing",
      description: "The thing to risk test.",
      type: 3,
      required: true,
    }
  ],
}});




bot.ws.on('INTERACTION_CREATE', async interaction => {
  const command = interaction.data.name.toLowerCase();
  const args = interaction.data.options;

  if (command === "cooltest") {
    cnmbr = Math.floor(Math.random() * 101)
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: `You are ${cnmbr}% cool.`,
        }
      }
    })
  } 

  else if (command === "smarttest") {
    cnmbr = Math.floor(Math.random() * 101)
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: `You are ${cnmbr}% smart.`,
        }
      }
    })
  } 
  
  else if (command === "decide") {
    choices = ['Yes.', 'For sure!', 'Maybe.', 'I don\'t know.', 'No.', 'Definently not.', 'Definently!'];
    choice = choices[Math.floor(Math.random() * choices.length)];

    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: choice
        }
      }
    })
  }

  else if (command === "yesorno") {
    choices = ["Yes.", "No."];
    rnum = Math.random();
    if (rnum > 0.50) {
      choice = choices[0];
    } else {
      choice = choices[1];
    }

    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: choice
        }
      }
    })
  }

  else if (command === "randomnumber") {
    const range = args.find(arg => arg.name.toLowerCase() == "range").value;
    if (range > 1000000000000) {
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: "I can only generate numbers shorter than 1000000000000 characters."
          }
        }
      })
      return
    }
    rnum = Math.floor(Math.random() * range);
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: rnum
        }
      }
    })
  }

  else if (command === "luckynumber") {
    rnum = Math.floor(Math.random() * 100);
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: rnum
        }
      }
    })
  }

  else if (command === "passwordgen") {
    const length = args.find(arg => arg.name.toLowerCase() == "length").value;
    if (length > 1975) {
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: "I can only generate passwords shorter than 1975 characters."
          }
        }
      })
      return
    }
    if (length > 5) {
      chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*();,./':<>?\[]}{-=+";
      password="";
      for (gen = 0; gen < length; gen++) {
        genchar = chars[Math.floor(Math.random() * chars.length)];
        password = password + genchar;
      }
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: "Check your DM's."
          }
        }
      })
      bot.users.fetch(interaction.member.user.id)
      .then(user => user.send(`Generated password: \`${password}\``))
    } 
    else {
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: "Password must be at least 6 characters in length."
          }
        }
      })
    }
  }

  else if (command === "impostor") {
    roles = ['Crewmate.', 'Crewmate.', 'Impostor.', 'Crewmate.', 'Crewmate.'];
    role = roles[Math.floor(Math.random() * roles.length)];
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: role
        }
      }
    })
  }

  else if (command === "flipcoin") {
    sides = ["Heads!", "Tails!"];
    rdeci = Math.random();
    if (rdeci > 0.50) {
      side = sides[0];
    } else {
      side = sides[1];
    }
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: side
        }
      }
    })
  }

  else if (command === "colorgen") {
    function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    chars="01234567890abcdef";
    colorhex="";
    for (gen = 0; gen < 6; gen++) {
      genchar = chars[Math.floor(Math.random() * chars.length)];
      colorhex = colorhex + genchar;
    }
    colorrgb = hexToRgb(`#${colorhex}`)
    colorrgb = `${colorrgb.r}, ${colorrgb.g}, ${colorrgb.b}`
    Embed = new Discord.MessageEmbed()
    Embed.setColor(colorhex)
    Embed.setTitle(`#${colorhex} (${colorrgb})`)
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: await sendEmbed(interaction, Embed)
      }
    })
  }

  else if (command === "binarygen") {
    const length = args.find(arg => arg.name.toLowerCase() == "length").value;
    bin = "01";
    gbin = "";
    for (gen1 = 0; gen1 < length; gen1++) {
      for (gen2 = 0; gen2 < 8; gen2++) {
        cbin = bin[Math.floor(Math.random() * bin.length)];
        gbin = gbin + cbin;
      }
      gbin = gbin + " ";
    }
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: gbin
        }
      }
    })
  }

  else if (command === "choose") {
    const things = args.find(arg => arg.name.toLowerCase() == "things").value;
    osplit = things.replace(/ \+ /g, ",")
    osplit = osplit.split(",")
    ping = false
    osplit.forEach(option => {
      if (option.startsWith('<@')) {
        ping = true
      } else if (option.startsWith('@here')) {
        ping = true
      } else if (option.startsWith('@everyone')) {
        ping = true
      }
    })
    if (ping) {
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: 'I can\'t ping.'
          }
        }
      })
      return;
    }
    choice = osplit[Math.floor(Math.random() * osplit.length)];
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: `I choose ***${choice}***.`
        }
      }
    })
  }

  else if (command === "shuffle") {
    const word = args.find(arg => arg.name.toLowerCase() == "word").value;
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
    shuffled = word.shuffle()
    ping = false
    if (shuffled.startsWith("<@")) {
        ping = true
    } else if (shuffled === "@here") {
        ping = true
    } else if (shuffled === "@everyone") {
        ping = true
    }
    if (ping) {
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: "I can't ping."
          }
        }
      })
      return
    }
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: shuffled
        }
      }
    })
  }

  else if (command === "eject") {
    const userid = args.find(arg => arg.name.toLowerCase() == "user").value;
    const user = await bot.users.fetch(userid)
    const imp = [true, false, false, false, false];
    const imposter = imp[Math.floor(Math.random() * imp.length)];
    const crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"]
    const crewmate = crew[Math.floor(Math.random() * crew.length)];

    ejected = `https://vacefron.nl/api/ejected?name=${encodeURIComponent(user.username)}&impostor=${imposter}&crewmate=${crewmate}`;
               
    const Embed = new Discord.MessageEmbed();
    Embed.setImage(ejected);
                 
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: await sendEmbed(interaction, Embed)
      }
    })
  }

  else if (command === "shufflesentence") {
    const sentence = args.find(arg => arg.name.toLowerCase() == "sentence").value;
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
    var shuffled = `${sentence}`.split(' ').shuffle().join(' ');
    var asplit = `${sentence}`.split(' ')
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
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: "I can't ping."
          }
        }
      })
      return 
    } else {
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: shuffled
          }
        }
      })
    }
  }

  else if (command === "shufflebyword") {
    sentence = args.find(arg => arg.name.toLowerCase() == "sentence").value;
    sentence = sentence.split(" ")
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
    ping = false
    for (arg of sentence) {
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
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: "I can't ping."
          }
        }
      })
      return
    }
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: shuffled
        }
      }
    })
  }

  else if (command === "giveaway") {
    channel = args.find(arg => arg.name.toLowerCase() == "channel").value;
    gtime = args.find(arg => arg.name.toLowerCase() == "time").value;
    reward = args.find(arg => arg.name.toLowerCase() == "reward").value;
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: `rbj.giveawayslash <#${channel}> ${gtime} ${encodeURIComponent(interaction.member.user.username)}#${interaction.member.user.discriminator} ${reward}`
        }
      }
    })
  }

  else if (command === "rate") {
    const thing = args.find(arg => arg.name.toLowerCase() == "thing").value;
    v1 = Math.floor(Math.random() * 6)
    v2 = Math.floor(Math.random() * 10)
    if (v1 == 5 && v2 > 0) {
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: `I rate ***${thing}*** 5 out of 5 stars.`
          }
        }
      })
    }
    else if (v1 == 5 && v2 == 0) {
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: `I rate ***${thing}*** 5 out of 5 stars.`
          }
        }
      })
    } else if (v1 == 0 && v2 == 0) {
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: `I rate ***${thing}*** 0 out of 5 stars.`
          }
        }
      })
    } else {
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: `I rate ***${thing}*** ${v1}.${v2} out of 5 stars.`
          }
        }
      })
    }
  }

  else if (command === "dice") {
    const sides = args.find(arg => arg.name.toLowerCase() == "sides").value;
    const amount = args.find(arg => arg.name.toLowerCase() == "amount").value;
    result = []
    for(let sides1 = 0; sides1 < amount; sides1++) {
      die = 1 + Math.floor(Math.random() * sides)
      result.push(die)
    }
    thedice = result.join(", ")
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: `${thedice}`
        }
      }
    })
  }

  else if (command === "risktest") {
    const thing = args.find(arg => arg.name.toLowerCase() == "thing").value;
    risk = Math.floor(Math.random() * 101)
    bot.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: `***${thing}*** is ${risk}% risky`
        }
      }
    })
  }
});

async function sendEmbed(interaction, content) {
    const apiMessage = await Discord.APIMessage.create(bot.channels.resolve(interaction.channel_id), content)
        .resolveData()
        .resolveFiles();
    
    return { ...apiMessage.data, files: apiMessage.files };
}

bot.on('ready', async () => {
  console.log("Slash commands are ready to go!")
})

bot.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.emoji.name == '🎉') {
    const index = greactors.indexOf(`${bot.user.username}#${bot.user.discriminator}`);
    if (index > -1) {
      greactors.splice(index, 1);
    }
    greactors.push(`${user.username}#${user.discriminator}`)
  }
})

bot.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.emoji.name == '🎉') {
    const index = greactors.indexOf(`${user.username}#${user.discriminator}`);
    if (index > -1) {
      greactors.splice(index, 1);
    }
  }
})

bot.login(process.env.token);