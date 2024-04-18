const express = require('express');
const router = express.Router();
const controller = require('./controllers/medications')

router.get('/medications', controller.getMedications)
router.post('/medications', controller.postMedications)



module.exports = router;