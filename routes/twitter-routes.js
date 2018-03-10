const router = require("express").Router();
const User = require("../models/user-model");
const Student = require("../models/student");
const keys = require("../config/keys");
const Twitter = require("twit");

router.get("/tweets", (req, res, next) => {
  const id = (req.session.localUser)? req.session.localUser._id : req.user._id;
  let collection = (req.session.localUser)? Student : User;
  const twitter = new Twitter({
    consumer_key:keys.twitter.consumerKey,
    consumer_secret: keys.twitter.consumerSecret,
    access_token: keys.twitter.accessToken,
    access_token_secret: keys.twitter.accessTokenSecret,
    timeout_ms: 5000,
  });

  let all_tweets = []
  //let all_handles;
   let promises = [];

  collection.findOne({_id: id})
     .then(user => {
       console.log("user twitter handle", user.twitter_handles)
        user.twitter_handles.forEach((handle) => {
         const p =  twitter.get('statuses/user_timeline', { screen_name: handle, count: 2 })
         .then(response => response)
         promises.push(p);
        })
        Promise.all(promises)
        .then(all_tweets => {
            console.log("all tweets ", all_tweets[0].data[0].text);
            res.send(all_tweets);
        })
     }).catch(err => {
       console.log("No handle found");
     })

})

router.post("/tweets", (req, res, next) => {
  const id = (req.session.localUser)? req.session.localUser._id : req.user._id;
  let collection = (req.session.localUser)? Student : User;
  const savedSchool = req.body.savedSchool;
  const t_handle = savedSchool.twitter_handle
  console.log("savedSchool in the router is ", savedSchool, "handle in the router is ", t_handle)
  collection.findOne({_id: id})
     .then(user =>{
       //console.log("user in the router ", user)
       const match = user.twitter_handles.some(handle => handle == t_handle);
       if (match) {
         res.send(user);
         return;
       }
        user.twitter_handles.push(t_handle);
        user.save().then(result=>{
         res.send(result)
       })
     }).catch(err =>{
       console.log("No handle received");
     })

})

module.exports = router



// all_handles.forEach((handle) => {
//   twitter.get('search/tweets', { q: handle+' application', count: 10 }, function (err, data, response) {
//     all_tweets.push(data);
//     res.send(all_tweets);
//   })
// })


//gets tweets of specific user by querying Twitter Handle
// let twitter_handle = "MeetNYU";
// twitter.get('statuses/user_timeline', { screen_name: twitter_handle, count: 3 },
//   function (err, data, response) {
//       res.send(data);
//  })

// const all_promises = [];
// all_handles.forEach((handle) => {

//   const p = new Promise((resolve, reject) => {
//     twitter.get('search/tweets', { q: handle+' application', count: 10 }, function (err, data, response) {
//       if (err) {
//         reject()
//       }
//       resolve(data);
//     })
//   })
//   all_promises.push(p);
// })

// Promise.all(all_promises).then((all_tweets) => {
//   console.log(all_tweets);
// })


// twitter.get('search/tweets', { q: 'MeetNYU application', count: 10 }, function (err, data, response) {
//   console.log(data);
//   res.send(data);
// })

//console.log("twitter", twitter);
