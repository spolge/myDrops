const Medications = require('./schemas/medications');
const Patients = require('./schemas/users')

async function getMedications () {
  let data = await Medications.find({});
  return data;
}

async function postMedications (medication) {
  return await Medications.create(medication);
}

async function getPatients () {
  let data = await Patients.find({}).populate("medication").exec();
  return data;
}

async function getPatientById (id) {
  let data = await Patients.findById(id).populate("medication").exec();
  return data;
}

async function postPatients(patient) {
  return await Patients.create(patient);
}


module.exports = {
  getMedications,
  postMedications,
  getPatients,
  postPatients,
  getPatientById
}

