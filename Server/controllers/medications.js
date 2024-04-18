const model = require('../model/model');

async function getMedications(req, res) {
   try {
    let medication = await model.getMedications();
    res.send(medication).status(200);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
}

async function postMedications(req, res){
  try { 
    let medication = await model.postMedications(req.body);
    res.status(201).send(medication);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
}



module.exports = {
  getMedications,
  postMedications
}