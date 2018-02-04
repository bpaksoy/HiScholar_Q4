const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonalSchema = new Schema({
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
  }
});


const userSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  googleId: String,
  thumbnail: String,
  personal_statement: {
    type: String,
    default: ""
  },
  personal: [PersonalSchema]
});

const User = mongoose.model("user", userSchema);

module.exports = User;
