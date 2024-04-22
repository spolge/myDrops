const mongoose = require('mongoose')

const medicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  frequency:{type: Number, default: 1},
  eye:{type: String}
  }, {
    timestamps:false
  }
);

const Medications = mongoose.model('Medications', medicationSchema);

module.exports = Medications;