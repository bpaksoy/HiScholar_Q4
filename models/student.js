const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  }
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
