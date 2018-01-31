const router = require("express").Router();
const passport = require("passport");
const User = require("../models/user-model");
const Student = require("../models/student");

//auth login
router.get("/login", (req, res, next) => {
  if(!req.user && !req.session.localUser){
    return res.render("Landing", { user: req.user, localUser: req.session.localUser });
  }
  return res.redirect("/");

});

//auth register via sign up
router.post("/register", (req, res, next) =>{
  //console.log("req.body", req.body)
  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const newUser = new Student();

  newUser.firstName = firstName.toLowerCase().trim();
  newUser.lastName = lastName.toLowerCase().trim();
  newUser.username = username.toLowerCase().trim();
  newUser.password = password;

  //console.log("new user is:  ", newUser)
  newUser.save((err, savedUser) =>{
    if(err){
      console.log(err);
      return res.status(500).send();
    } else {
      console.log("you have registered this user")
      req.session.localUser = savedUser;
      return res.redirect("/");
    }
  })
})

//auth register
router.get("/register", (req, res, next) => {
  if(!req.user && !req.session.localUser){
    return res.render("Landing", { user: req.user, localUser: req.session.localUser });
  }
  return res.redirect("/");
})

//authenticate user
router.post("/login", (req, res, next) => {

  if(req.session.localUser){
    //console.log("REQ SESSION LOCAL USER", req.session.localUser )
    return res.redirect("/");
  }

  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body)
  Student.findOne({ username: username, password: password}, (err, user) => {
    if(err) {
      console.log(err);
      return res.status(500).send();
    }
    if(!user) {
      console.log("No user is found");
      return res.redirect("/error");
    }

    req.session.localUser = user;
    console.log("user in the login route", user)
    return res.redirect("/");
  })
});

//fetch the current user
router.get("/currentuser", (req, res) => {
	// Check the session:
	if (req.session == null){ // no one logged in
		res.json({
			confirmation: 'fail',
			user: null
		})

		return
	}

	if (req.user == null && req.session.localUser == null){ // no one logged in
		res.json({
			confirmation: 'fail',
			user: null
		})
		return
	}

	// fetch the user profile:
  (req.user) ?
    User.findOne({"_id": req.user._id})
    .then(data => {
       res.json({
         confirmation: 'success',
         user: data
        })
    })
     .catch(err => {
       res.json({
         confirmation: 'fail',
         message: err.message
       })
     }) :
     Student.findOne({"_id": req.session.localUser._id})
     .then(data => {
        res.json({
          confirmation: 'success',
          user: data
         })
     })
      .catch(err => {
        res.json({
          confirmation: 'fail',
          message: err.message
        })
      })
})

//post personal information to the user collection
router.put("/currentuser", (req, res, next) => {
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
        //res.send(user.personal);
      }).then(() =>{
        collection.findOne({"_id" : id})
        .then( data => {
          res.send(data);
        })
      })
   })
})


//auth logout
router.get("/logout", (req,res, next) => {
  //handle with passport
  //console.log("req.user:", req.user)
  if(req.user){
    req.logout();
    res.redirect('/home');
    return;
  }
  if(req.session.localUser){
    req.logout();
    req.session = null;
    res.redirect('/home');
    return;
  }

});


//auth with google
router.get("/google", passport.authenticate("google", {
  scope: ["profile"]
}));

//callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"),(req, res) => {
  res.redirect("/");
});

//callback route for google to redirect to
// router.get("/google/redirect", passport.authenticate("google"),(req, res) => {
//   res.redirect("/dashboard/");
// });

module.exports = router;
