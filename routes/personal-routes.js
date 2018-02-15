const router = require("express").Router();
const passport = require("passport");
const User = require("../models/user-model");
const Student = require("../models/student");


//get personal information
router.get("/currentuser", (req, res, next) => {
  const id = (req.session.localUser)? req.session.localUser._id : req.user._id;
  let collection = (req.session.localUser)? Student : User;

   collection.findOne({_id: id})
      .then(user => {
          res.send(user)
      }).catch(err =>{
          console.log("no user information");
      })
})


//get personal statement
router.get("/personal_statement", (req, res, next) => {
  const id = (req.session.localUser)? req.session.localUser._id : req.user._id;
  let collection = (req.session.localUser)? Student : User;

   collection.findOne({_id: id})
      .then(user => {
         let statement = user.personal_statement;
          res.send(statement)
      }).catch(err =>{
          console.log("no statement information");
      })
})

//upload profile picture
router.put("/profile_picture", (req,res, next) => {
 const id = (req.session.localUser)? req.session.localUser._id : req.user._id;
 let collection = (req.session.localUser)? Student : User;
 const profilePicUrl= req.body.thumbnail;
 console.log("profile picture url in the router", profilePicUrl)
 collection.findOne({_id: id})
    .then(user =>{
      console.log("user in the router ", user)
      user["thumbnail"] = profilePicUrl;
       user.save().then(result=>{
        res.send(result)
      })
    }).catch(err =>{
      console.log("No url received");
    })
})


//update personal statement
router.put("/personal_statement", (req,res, next) => {
 const id = (req.session.localUser)? req.session.localUser._id : req.user._id;
 let collection = (req.session.localUser)? Student : User;
 const personal_statement = req.body.personal_statement;
 console.log("personal statement in the router", personal_statement)
 collection.findOne({_id: id})
    .then(user =>{
      console.log("user in the router ", user)
      user["personal_statement"] = personal_statement;
       user.save().then(result=>{
        res.send(result)
      })
    })
})


//post personal information to the user collection
router.put("/currentuser", (req, res, next) => {
  const id = (req.session.localUser)? req.session.localUser._id : req.user._id;
  let collection = (req.session.localUser)? Student : User;
  const personal = req.body.personal;
  const city = personal.city;
  const state = personal.state;
  const country = personal.country;
  const zip_code = personal.zip_code;
  const gpa = personal.gpa;
  const toefl = personal.toefl;
  const sat = personal.sat;
  const act = personal.act;
 collection.findOne({_id: id})
    .then(user => {
      user.personal = personal;
      user.save().then(result => {
        res.send(result)
      })
    })
})



module.exports = router;
