const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a student Schema & model
const personalSchema = new Schema({
  username: String,
  city: {
    type: String,
    default: ""
  },
  country: {
    type: String,
    default: ""
  },
  postal_code: {
    type: Number,
    default: ""
  },
  gpa: {
    type: Number,
    default: ""
  },
  toefl:{
    type: Number,
    default: ""
  },
  sat: {
    type: Number,
    default: ""
  },
  act: {
    type: Number,
    default: ""
  },
  personal_statement: {
    type: String,
    default: ""
  }
});

const Personal = mongoose.model("personal", personalSchema);

module.exports = Personal;
