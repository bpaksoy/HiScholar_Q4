const router = require("express").Router();
const User = require("../models/user-model");
const Student = require("../models/student");
const keys = require("../config/keys");
const Twitter = require("twit");

router.get("/tweets", (req, res, next) => {
  let savedSchool = req.body.savedSchool;
  console.log("saved school is HERERERERER: ", savedSchool)
  const twitter = new Twitter({
    consumer_key:keys.twitter.consumerKey,
    consumer_secret: keys.twitter.consumerSecret,
    access_token: keys.twitter.accessToken,
    access_token_secret: keys.twitter.accessTokenSecret,
    timeout_ms: 5000,
  });

//gets tweets of specific user by querying Twitter Handle
  //let twitter_handle = "MeetNYU";
  // twitter.get('statuses/user_timeline', { screen_name: twitter_handle, count: 3 },
  //   function (err, data, response) {
  //       res.send(data);
  //  })

  twitter.get('search/tweets', { q: 'MeetNYU application', count: 10 }, function (err, data, response) {
    console.log(data);
    res.send(data);
  })

  //console.log("twitter", twitter);
})

router.post("/tweets", (req, res, next) => {

})

module.exports = router
