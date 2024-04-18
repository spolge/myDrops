const mongoose = require('mongoose');

async function main () {
  await mongoose.connect('mongodb://127.0.0.1:27017/myDropsServer');
}

main()
  .then(() => {
    console.log('successfully connected to database');
  })
  .catch((err) => console.log(err));

  const medicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  eye: {type: String, required: false},
  frequency:{type: String, required: true}
  }, {
    timestamps:false
  }
);


const Medications = mongoose.model('Medications', medicationSchema);


module.exports = Medications