require('dotenv').config();
const { token } = require('config');
const { Telegraf } = require('telegraf');
const commands = require('./commands');
const controllers = require('./controllers');
const middleware = require('./middleware');

const bot = new Telegraf(token);
commands(bot);
controllers(bot);
middleware(bot);
bot.launch();
