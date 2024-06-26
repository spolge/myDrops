const express = require('express');
const router = express.Router();
const controller = require('./controllers/medications');

router.get('/medications', controller.getMedications);
router.post('/medications', controller.postMedications);

router.post('/medications/add', controller.addMedicationToPatient);
router.delete('/medications/delete', controller.deletePatientsMed);
router.put('/medications/edit', controller.editPatientsMed);

router.get('/patients', controller.getPatients);
router.get('/patients/:patientid', controller.getOnePatient);
router.post('/patients',controller.postPatients);

router.post('/pressure/add', controller.addPatientPressure)
router.get('/pressure', controller.getPatientPressure)






module.exports = router;