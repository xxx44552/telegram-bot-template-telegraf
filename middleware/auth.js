module.exports = (ctx, next) => {
    console.log('auth', ctx.state);
    next();
};
