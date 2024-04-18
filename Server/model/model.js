const Medications = require('./index')

async function getMedications () {
  let data = await Medications.find({});
  return data;
}

async function postMedications (medication) {
  return await Medications.create(medication);
}


module.exports = {
  getMedications,
  postMedications
}

