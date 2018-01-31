const router = require("express").Router();
const University = require("../models/universities");
const User = require("../models/user-model");
const Student = require("../models/student");

router.use(function (req, res, next) {

      // Website you wish to allow to connect
      res.header('Access-Control-Allow-Origin', "*")

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);

      // Pass to next layer of middleware
      next();
  });


//post universities
router.post("/universities", (req, res, next) =>{
  console.log("req.body", req.body)
  University.create(req.body).then(university => {
    res.render("Home", {university: university})

  });
});

//post personal information to the user collection
router.put("/personal", (req, res, next) => {
  const id = (req.session.localUser)? req.session.localUser._id : req.user._id;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const zip_code = req.body.zip_code;
  const gpa = req.body.gpa;
  const toefl = req.body.toefl;
  const sat = req.body.sat;
  const act = req.body.act;
  const personal_statement = req.body.personal_statement;
  let collection = (req.session.localUser)? Student : User;
  const personalInfo =  new collection();
  personalInfo.city = city.toLowerCase().trim();
  personalInfo.state = state.toLowerCase().trim();
  personalInfo.country = country.toLowerCase().trim();
  personalInfo.zip_code = zip_code;
  personalInfo.gpa = gpa;
  personalInfo.toefl = toefl;
  personalInfo.sat = sat;
  personalInfo.act = act;
  personalInfo.personal_statement = personal_statement;

  personalInfo.save((err, savedInfo) => {
    if(err){
      console.log(err);
      return res.status(500).send();
     }
      console.log("you have saved the personal information", savedInfo)
      req.session.personalInfo = savedInfo;
   }).then(result => {
      collection.findByIdAndUpdate({"_id" : id}).then(user => {
        user.personal.push(result);
        res.send(user.personal);
      })
   })
})

// get university by name
router.get("/universities/:university_id", (req, res, next) => {
  const id = req.params.university_id;
   console.log("id in the router: ", id)
   University.findOne({_id: id}, (err, university) => {
     if(err){
       console.log(err);
       return res.status(500).send();
     }
     console.log("university in the router:", university)
      res.send(university);
    })

});



//get all universities
router.get("/universities", (req, res, next) => {

 University.find({}).then((universities)=>{
   res.send(universities)
 })

});



module.exports = router;
