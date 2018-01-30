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
