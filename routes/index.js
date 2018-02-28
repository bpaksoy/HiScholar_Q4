const router = require("express").Router();
const session = require("express-session");
//const cookieSession = require("cookie-session");


const authCheck = (req, res, next) => {
  if(!req.user && !req.session.localUser ){
    res.redirect("/auth/login")
  } else{
    next();
  }
};

//dynamic data rendering here
router.get("/", authCheck, (req, res) => {
  (req.user)? res.render("index", {
    user: req.user
  }): res.render("index", { localUser: req.session.localUser,
  user: null });;
})


router.get("/newsfeed", authCheck, (req, res) => {
  (req.user)? res.render("index", {
    user: req.user
  }): res.render("index", { localUser: req.session.localUser,
  user: null });;
})


router.get('/landing', function(req, res){
	res.render('Landing', null)
})


//create a home route
router.get("/home", (req, res) => {
  console.log("req.user", req.user, "req.session.localUser",req.session.localUser )
  if(!req.user && !req.session.localUser){
    res.render("Home", { university: null });
    return;
  }
  return res.redirect("/");
});


router.get("/error", (req, res) => {
  res.render("error");
})

module.exports = router
