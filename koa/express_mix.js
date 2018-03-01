import db from '../../db'


module.exports.index =  async (req, res, next) => {
  try {
    res.json({ data: await db.Thing.find(req.query) })
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
}

module.exports.get =  async (req, res, next) => {
  try {
    res.json(await db.Thing.findById(req.params.id))
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
}

module.exports.update =  async (req, res, next) => {
  try {
    await db.Thing.findByIdAndUpdate(req.params.id, req.body);
    return res.json(await db.Thing.findById(req.params.id));
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
}

module.exports.create =  async (req, res, next) => {
  try {
    let thing = new db.Thing(req.body);
    return res.json(await Thing.save());
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
}

module.exports.remove =  async (req, res, next) => {
  try {
    let thing = await db.Thing.findById(req.params.id);
    await thing.remove();
    res.status(200).send({});
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
}
