require('dotenv').config();
const { token } = require('config');
const { Telegraf } = require('telegraf');
const commands = require('./commands');
const controllers = require('./controllers');
const middleware = require('./middleware');

const bot = new Telegraf(token);
middleware(bot);
commands(bot);
controllers(bot);
bot.launch();
