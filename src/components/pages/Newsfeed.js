import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Link } from "react-router-dom";
const Twit = require("twit");

class Newsfeed extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}


 componentDidMount() {

}


getTweets() {
	const twitter = new Twit({
	  consumer_key: "",
	  consumer_secret: "",
	  access_token: "",
	  access_token_secret: "",
	  timeout_ms: 5000,
	});


	// let twitter_handle = 'nyuniversity'
	// let twitter_handle = 'hamiltonhall'
	let twitter_handle = "MeetNYU"

	// gets tweets of specific user by querying Twitter Handle
	twitter.get('statuses/user_timeline', { screen_name: twitter_handle, count: 3 },
	function (err, data, response) {
	  data.forEach(school => {
	    // console.log(JSON.stringify(data, null, ' '));
	    console.log(data);
	  })
	})
}


	render() {
		const currentUser = this.props.user.currentUser; // can be null
		console.log("currentUser", currentUser);
			return(
				<div>
					<div className="col-md-8">
            <h2>Newsfeed component</h2>
					</div>
					<div className="col-md-4">
					</div>
				</div>
		 	);
	 	}

}

const stateToProps = (state) => {
	return {
		user: state.user,

	}
}

const dispatchToProps = (dispatch) => {
	return {

	}
 }

export default connect(stateToProps, dispatchToProps)(Newsfeed);
