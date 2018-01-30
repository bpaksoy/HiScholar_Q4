const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a geolocation Schema
const GeoSchema = new Schema({
  type: {
    type:String,
    default: "Point"
  },
  coordinates:{
    type:[Number],
    index: "2dsphere"
  }

})

//create a university Schema & model
const universitySchema = new Schema({
    school_name: {
      type: String,
      required:[true, "School name field is required"],
      unique: true,
    },
    description: String,
    ranking: Number,
    tuition: Number,
    acceptance_rate: Number,
    imgURL: {
      type: String,
      default: ""
    },
    latitude: Number,
    longitude: Number
});

const University = mongoose.model("university", universitySchema);

module.exports = University;
