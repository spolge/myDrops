const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password:{type: String, required: true},
  }, {
    timestamps:false
  }
);

const Medications = mongoose.model('patient', patientSchema);

module.exports = Medications