import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ProfileForm, ProfileCard } from '../presentation';
const axios = require("axios");
import "babel-polyfill";
import "isomorphic-fetch";


class Profile extends Component {
	constructor(){
		super()
		this.state = {
     user: {}
		}
	}

	async componentDidMount() {
     const user = await axios.get("http://localhost:5000/auth/currentuser");
     this.props.currentUserReceived(user.data);
   }


	updateUser(event){
		if (event)
			event.preventDefault()

		console.log('Update User: ')
	}

	render(){
		const currentUser = this.props.user.currentUser // can be null
	  console.log("currentUser in the profile",currentUser)

		return (
			<div className="row">
				<div className="col-md-8">
				  { (currentUser) ? <ProfileForm onUpdate={this.updateUser.bind(this)} user={currentUser} /> : null }
				</div>

				<div className="col-md-4">
					{ (currentUser) ? <ProfileCard user={currentUser} /> : null }
				</div>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		user: state.user
	}
}

const dispatchToProps = (dispatch) => {
	return {
	  currentUserReceived: (user) => dispatch(actions.currentUserReceived(user))
	}
}

export default connect(stateToProps, dispatchToProps)(Profile)
