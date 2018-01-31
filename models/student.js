const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PersonalSchema = new Schema({
  firstName: {
    type: String,
    default: ""
  },
  lastName: {
    type: String,
    default: ""
  },
  city: {
    type: String,
    default: ""
  },
  state: {
    type: String,
    default: ""
  },
  country: {
    type: String,
    default: ""
  },
  zip_code: {
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

//create a student Schema & model
const studentSchema = new Schema({
  username: {
    type: String,
    required:[true, "Username field is required"],
    unique: true,
  },
  password: {
    type: String,
    required:[true, "Password field is required"]
  },
  firstName: String,
  lastName: String,
  thumbnail: {
    type: String,
    default: ""
  },
  personal: [PersonalSchema]
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
