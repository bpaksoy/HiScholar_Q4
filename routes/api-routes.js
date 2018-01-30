const router = require("express").Router();
const University = require("../models/universities");
const Personal = require("../models/personal");

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000/api/universities");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//post universities
router.post("/universities", (req, res, next) =>{
  console.log("req.body", req.body)
  University.create(req.body).then(university => {
    res.render("Home", {university: university})

  });
});

router.post("/personal", (req, res, next) => {
  let username = (req.body)? req.body.username : req.session.localUser.firstName + " " + req.session.localUser.lastName;
  const city= req.body.city;
  const country = req.body.country;
  const postal_code = req.body.postal_code;
  const gpa = req.body.gpa;
  const toefl = req.body.toefl;
  const sat = req.body.sat;
  const act = req.body.act;
  const personal_statement = req.body.personal_statement;
  const personalInfo = new Personal();

  personalInfo = {
    username,
    city,
    country,
    postal_code,
    gpa,
    toefl,
    sat,
    act,
    personal_statement
  }
  //personalInfo.firstName = firstName.toLowerCase().trim();
  //personalInfo.lastName = lastName.toLowerCase().trim();

  personalInfo.save((err, savedInfo) =>{
    if(err){
      console.log(err);
      return res.status(500).send();
    } else {
      console.log("you have registered the personal information", savedInfo)
      req.session.personalInfo = savedInfo;
      return res.redirect("/");
     }
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
