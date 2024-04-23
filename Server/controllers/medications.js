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

async function getPatients(req, res) {
   try {
    let patients = await model.getPatients();
    res.send(patients).status(200);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
}

async function getOnePatient(req, res) {
   try {
    let id = req.params.patientid
    let patients = await model.getPatientById(id);
    res.send(patients).status(200);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
}

async function postPatients(req, res){
  try { 
    let patients = await model.postPatients(req.body);
    res.status(201).send(patients);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
}

async function addMedicationToPatient(req, res){
  console.log(req.body)
  try { 
    let patients = await model.addMedicationToPatient(req.body.name);
    res.status(201).json(patients);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
}

async function deletePatientsMed(req, res){
  try { 
    let removed = await model.removeMedicationFromPatient(req.body.name);
    res.status(201).send(removed);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
}

async function editPatientsMed(req, res){
  try { 
    let edit = await model.editPatientMedication(req.body.name, req.body.eye, req.body.frequency);
    res.status(201).send(edit);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
}




module.exports = {
  getMedications,
  postMedications,
  getPatients,
  postPatients,
  getOnePatient,
  addMedicationToPatient,
  deletePatientsMed,
  editPatientsMed
}