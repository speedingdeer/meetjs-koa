const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // Eg. if mongo NOT FOUND error return 404 instead etc.
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});


app.use(async ctx => {
  // throw new Error('Error!');
  ctx.body = 'Hello World';
});

app.listen(3000);