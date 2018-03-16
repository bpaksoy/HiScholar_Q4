const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const school_schema = new Schema({
  "calendarSystem": {
    type: String,
    default: ''
  },
  "description": {
    type: String,
    default: ''
  },
  "control": {
    type: String,
    default: ''
  },
  "fourYearGradRate": Number,
  "freshmanRequiredOnCampus": Number,
  "historicallyBlack": Number,
  "img": {
    type: String,
    default: ''
  },
  "img_src": {
    type: String,
    default: ''
  },
  "img_src_page": {
    type: String,
    default: ''
  },
  "instateTuition": Number,
  "irregular": Number,
  "isReligious": Number,
  "name": {
    type: String,
    default: ''
  },
  "offersMasters": Number,
  "offersPhD": Number,
  "outstateTuition": Number,
  "religion": {
    type: String,
    default: ''
  },
  "sixYearGradRate": Number,
  "studentFacultyRatio": Number,
  "ts": String,
  "year": Number
})

const enrollment_schema = new Schema({
  "fulltimeGrad": Number,
  "fulltimeTotal": Number,
  "fulltimeUndergrad": Number,
  "gradTotal": Number,
  "percentAmericanIndianOrAlaskaNative": Number,
  "percentAsian": Number,
  "percentBlack": Number,
  "percentLatino": Number,
  "percentPacificIslander": Number,
  "percentUndergradAmericanIndianOrAlaskaNative": Number,
  "percentUndergradAsian": Number,
  "percentUndergradBlack": Number,
  "percentUndergradForeign": Number,
  "percentUndergradInstate": Number,
  "percentUndergradLatino": Number,
  "percentUndergradOutstate": Number,
  "percentUndergradPacificIslander": Number,
  "percentUndergradWhite": Number,
  "percentUndergradWomen": Number,
  "percentWhite": Number,
  "percentWomen": Number,
  "retentionRate": Number,
  "total": Number,
  "undergradTotal": Number,
})

const admission_schema = new Schema({
  "TOEFL": {
    type: String,
    default: ''
  },
  "acceptanceRate": Number,
  "acceptanceRateFemale": Number,
  "acceptanceRateMale": Number,
  "applicationFee": Number,
  "averageAmountOfFA": "",
  "numberApps": Number,
  "numberFemaleApps": Number,
  "numberMaleApps": Number,
  "percentOnFA": Number,
  "secondaryGPA": {
    type: String,
    default: ''
  },
  "secondarySchool_schemaRecord": {
    type: String,
    default: ''
  },
  "teacherRecommendations":{
    type: String,
    default: ''
  },
  "testScores": {
    type: String,
    default: ''
  },
  "unitid": Number,
  "yield": Number,
  "yieldFemale": Number,
  "yieldMale": Number
})

const test_schema = new Schema({
  "act25": Number,
  "act25English": Number,
  "act25Math": Number,
  "act25Writing": Number,
  "act75": Number,
  "act75English": Number,
  "act75Math": Number,
  "act75Writing": Number,
  "percentUsedACT": Number,
  "percentUsedSAT": Number,
  "sat25": Number,
  "sat25Math": Number,
  "sat25Reading": Number,
  "sat25Writing": Number,
  "sat75": Number,
  "sat75Math": Number,
  "sat75Reading": Number,
  "sat75Writing": Number,
  "unitid": Number
})

const location_schema = new Schema({
  "admissionsWebsite": {
    type: String,
    default: ''
  },
  "city": {
    type: String,
    default: ''
  },
  "classification": {
    type: String,
    default: ''
  },
  "faWebsite": {
    type: String,
    default: ''
  },
  "fax": {
    type: String,
    default: ''
  },
  "lat": Number,
  "lng": Number,
  "name": {
    type: String,
    default: ''
  },
  "netPriceWebsite": {
    type: String,
    default: ''
  },
  "onlineApplication": {
    type: String,
    default: ''
  },
  "phone": {
    type: String,
    default: ''
  },
  "state": {
    type: String,
    default: ''
  },
  "streetAddress": {
    type: String,
    default: ''
  },
  "website": {
    type: String,
    default: ''
  },
  "zipCode": {
    type: String,
    default: ''
  },
})
//create a university Schema & model
const universitySchema = new Schema({
    school: school_schema,
    admission: admission_schema,
    enrollment: enrollment_schema,
    test: test_schema,
    location: location_schema
});

const University = mongoose.model("university", universitySchema, 'universities_new');

module.exports = University;
