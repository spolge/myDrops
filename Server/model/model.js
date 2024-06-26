const Medications = require('./schemas/medications');
const Patients = require('./schemas/users');

async function getMedications() {
  const data = await Medications.find({});
  return data;
}

async function postMedications(medication) {
  return await Medications.create(medication);
}

async function getPatients() {
  const data = await Patients.find({}).populate("medication").exec();
  return data;
}

async function getPatientById(id) {
  const data = await Patients.findById(id).populate("medication").exec();
  return data;
}

async function postPatients(patient) {
  return await Patients.create(patient);
}

async function addMedicationToPatient(medname) {
  // Find medicine by name
  const medicine = await Medications.findOne({ name: medname }).exec();
  // Find patient by email
  let patient = await Patients.findOne({ email: 'sampolge@gmail' });

  // Add medicine to patient's medication array
  await Patients.updateOne(
    { email: 'sampolge@gmail' },
    { $addToSet: { medication: medicine._id } }
  );
  // Find and return patient with populated medication field
  patient = await Patients.findOne({ email: 'sampolge@gmail' }).populate('medication');
  return patient;
}


async function removeMedicationFromPatient(medname) {
  
  const medicine = await Medications.findOne({ name: medname }).exec();
  let patient = await Patients.findOne({ email: 'sampolge@gmail' });
  // Remove medicine from patient's medication array
  await Patients.updateOne(
    { email: 'sampolge@gmail' },
    { $pull: { medication: medicine._id } }
  );
  // Find and return patient with populated medication field
  patient = await Patients.findOne({ email: 'sampolge@gmail' }).populate('medication');
  return patient;
}
``
async function editPatientMedication (medName, medFreq, medEye){
  const medicine = await Medications.findOne({ name: medName }).exec();
  if(medicine.frequency !== medFreq){
    medicine.frequency = medFreq;
  }
  if(medicine.eye !== medEye){
    medicine.eye = medEye;
  }
  await medicine.save();
  }


  async function addToPatientPressure (dateName, rePressure, lePressure){
    let patient = await Patients.findOne({ email: 'sampolge@gmail' });
    patient.pressure.push({date: dateName, rightEye: rePressure, leftEye: lePressure});

    await patient.save();
      }

  async function getPatientPressure (){
    let patient = await Patients.findOne({ email: 'sampolge@gmail' });
    return patient.pressure
  }



module.exports = {
  getMedications,
  postMedications,
  getPatients,
  getPatientById,
  postPatients,
  addMedicationToPatient,
  removeMedicationFromPatient,
  editPatientMedication,
  addToPatientPressure,
  getPatientPressure,
};
