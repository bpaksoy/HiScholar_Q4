const router = require("express").Router();

const authCheck = (req, res, next) => {
  if(!req.user && !req.session.localUser ){
    res.redirect("/auth/login")
  } else{
    next();
  }
};


router.get("/", authCheck, (req, res) => {
  (req.user)? res.render("Profile", { user: req.user }): res.render("Profile", { localUser: req.session.localUser,
  user: null });;
})



module.exports = router;
