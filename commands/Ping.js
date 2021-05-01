module.exports = {
  name: "ping",
  description: "check the latency of the bot",

  async execute(bot, message, args) {
    const m = await message.channel.send("Pinging...");
    m.edit(`Pong! ${bot.ws.ping}ms`);
  },
};
