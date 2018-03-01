const router = require("express").Router();
const User = require("../models/user-model");
const Student = require("../models/student");
const keys = require("../config/keys");
const Twitter = require("twit");

router.get("/tweets", (req, res, next) => {

  const twitter = new Twitter({
    consumer_key:keys.twitter.consumerKey,
    consumer_secret: keys.twitter.consumerSecret,
    access_token: keys.twitter.accessToken,
    access_token_secret: keys.twitter.accessTokenSecret,
    timeout_ms: 5000,
  });
  let twitter_handle = "MeetNYU";

  //console.log("twitter", twitter);
  //gets tweets of specific user by querying Twitter Handle
  twitter.get('statuses/user_timeline', { screen_name: twitter_handle, count: 1 },
  function (err, data, response) {

      //console.log(JSON.stringify(data[0].text));
    //  console.log(school);
      res.send(data);
    })
  })



module.exports = router
