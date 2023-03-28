const auth = require('./auth');
const commands = require('./commands');

module.exports = (bot) => {
    bot.use(auth);
    bot.use(commands);
};
