'use strict';

import db from '../../db'

module.exports.index = async function(ctx) {
  ctx.status = 200; // 200 is default anyway it's only an example
  ctx.body = { data: await db.Thing.find(req.query), };
};

module.exports.get = async function(ctx) {
  ctx.body = db.Thing.findById(ctx.params.id)
};

module.exports.update = async function(ctx) {
  await db.Thing.findByIdAndUpdate(ctx.params.id, ctx.body);
  ctx.body = await db.Thing.findById(ctx.params.id);
}

module.exports.create = async function(ctx) {
  let thing = new db.Thing(ctx.body);
  ctx.body = res.json(await Thing.save());
}

module.exports.remove = async function(ctx) {
  let thing = await db.Thing.findById(ctx.params.id);
  await thing.remove();
}

/**

// app middelware

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // Eg. if mongo NOT found error return
    //
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

*/

// In Express, you caught errors by adding an middleware with a (err, req, res, next) 
// signature as one of the last middleware. In contrast,
// in koa you add a middleware that does t
// try { await next() } as one of the first middleware. 
// It is also recommended that you emit an error on the application itself
// for centralized error reporting, retaining the default behaviour in Koa.