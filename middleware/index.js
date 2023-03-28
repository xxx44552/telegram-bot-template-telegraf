const auth = require('./auth');

module.exports = (bot) => {
    bot.use(auth);
};
