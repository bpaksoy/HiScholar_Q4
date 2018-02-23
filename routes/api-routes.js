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
  const university = {};
  university.school_name = req.body.school_name.toLowerCase().trim();
  university.description = req.body.description;
  university.ranking = req.body.ranking;
  university.tuition = req.body.tuition;
  university.acceptance_rate = req.body.acceptance_rate;
  university.latitude = req.body.latitude;
  university.longitude = req.body.longitude;
  university.imgURL = req.body.imgURL;
  University.create(university).then(result => {
    res.render("Home", {university: result})
  });
});


// get university by id
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

//get university by name
router.get("/universities/name/:school_name", (req, res, next) => {
  const school_name = req.params.school_name.trim();
  // console.log("name in the router: ", school_name)
   University.find({school_name: {'$regex' : `.*${school_name}.*`,  $options: 'i'}}, (err, university) => {
     if(err){
       console.log(err, "oops not in the system");
       return res.status(500).send("University not found");
     }
     //console.log("university in the router:", university)
      res.send(university);
    })

});


//save schools to the user database
router.put("/universities/savedschools", (req, res, next) => {
  const id = (req.session.localUser)? req.session.localUser._id : req.user._id;
  let collection = (req.session.localUser)? Student : User;
  let schoolName;
  console.log("req.body", req.body)
  for(var key in req.body){
    schoolName = key;
  }

  console.log("university name in the router", schoolName)

  collection.findOne({_id: id})
    .then(user => {
      const match = user.savedSchools.filter(school => school[schoolName]);
        if(match.length){
           console.log("school already saved");
           return;
        }
        user.savedSchools.push(req.body);
        user.save().then(result => {
          res.send(result)
        })
      })
})

//delete school from the user database
router.delete("/universities/savedschools", (req, res, next) => {
  const id = (req.session.localUser)? req.session.localUser._id : req.user._id;
  let collection = (req.session.localUser)? Student : User;
  let schoolName;
  for(var key in req.body){
    schoolName = key;
  }

  console.log("university name in the router", schoolName)

  collection.findOne({_id: id})
    .then(user => {
       user.savedSchools.filter(school => !school[schoolName]);
        user.save().then(result => {
          res.send(result)
        })
    })
})


//get all saved universities for the user
router.get("/universities/user/savedschools", (req, res, next)=> {
  const id = (req.session.localUser)? req.session.localUser._id : req.user._id;
  console.log("id", id)
  let collection = (req.session.localUser)? Student : User;
  console.log("collection", collection)
  collection.findOne({_id: id})
    .then(user => {
         console.log("user", user)
         const savedSchools = user.savedSchools;
         res.send(savedSchools);
       }).catch(err => {
         res.json({
           err: err.message
         })
       })
})

//get all universities
router.get("/universities", (req, res, next) => {

 University.find({}).then((universities)=>{
   res.send(universities)
 })

});



module.exports = router;
