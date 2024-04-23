const mongoose = require('mongoose')
const { Schema } = mongoose;

const patientSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password:{type: String, required: true},
  medication:[{type:Schema.Types.ObjectId, ref:"Medications"}],
  pressure:[ {date:String, rightEye: Number, leftEye:Number}]
  },
  {  
    timestamps:false
    }
  );

const Patients = mongoose.model('patient', patientSchema);

module.exports = Patients