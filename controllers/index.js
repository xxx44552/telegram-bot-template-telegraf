class Controllers {
    constructor(bot) {
        this.bot = bot;
        this.sendSticker();
        this.sayHi();
    }
    sendSticker() {
        this.bot.on('sticker', (ctx) => ctx.reply('👍'));
    }

    sayHi() {
        this.bot.hears('hi', (ctx) => ctx.reply('Hey there'));
    }
}

module.exports = (bot) => new Controllers(bot);
