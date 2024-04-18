const model = require('../model/model');

async function getMedications(req, res) {
   try {
    let event = await model.getMedications();
    res.send(event).status(200);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
}



module.exports = {
  getMedications,
}