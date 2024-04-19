const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password:{type: String, required: true},
  medication:{type:String, required: true},
  frequency:{type: Number, required: true},
  eye:{type:String, required: true}
  }, {
    timestamps:false
  }
);

const Patients = mongoose.model('patient', patientSchema);

module.exports = Patients