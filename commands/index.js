class Commands {
    constructor(bot) {
        this.bot = bot;
        this.help();
        this.start();
    }
    help() {
        this.bot.help((ctx) => ctx.reply('Send me a sticker'));
    }

    start() {
        this.bot.start((ctx) => {
            console.log(ctx.state, 'state');
            ctx.reply('Welcome');
        });
    }
}

module.exports = (bot) => new Commands(bot);
