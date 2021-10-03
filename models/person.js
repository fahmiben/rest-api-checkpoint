const mongoose = require("mongoose");
const schema = mongoose.Schema;
const personSchema = new schema({
  name: {type: String, required: true},
  lastName: {type: String, required: true}, 
  email: {type: String, required: true},
  phone: {type: Number, required: true},
});
const Person = mongoose.model("person", personSchema);
module.exports = Person;