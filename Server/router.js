const express = require('express');
const router = express.Router();
const controller = require('./controllers/medications');

router.get('/medications', controller.getMedications);
router.post('/medications', controller.postMedications);

router.get('/patients', controller.getPatients);
router.post('/patients',controller.postPatients)



module.exports = router;