module.exports = {
  name: "impostor",
  description: "Are you an impostor?",
  neededargs: "None",
  optionalargs: "None",
  async execute(message, args) {
    roles = ['Crewmate.', 'Crewmate.', 'Impostor.', 'Crewmate.', 'Crewmate.'];
    role = roles[Math.floor(Math.random() * roles.length)];
    await message.channel.send(role)
  },
}