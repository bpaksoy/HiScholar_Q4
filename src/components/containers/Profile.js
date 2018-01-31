import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ProfileForm, ProfileCard } from '../presentation';
const axios = require("axios");
import "babel-polyfill";
import "isomorphic-fetch";


class Profile extends Component {
	constructor(){
		super();
		this.state = {
     user: {},
		 firstName:"",
		 lastName: "",
		 personal: {
			 city: "",
			 state: "",
			 country: "",
			 zip_code: "",
			 gpa: "",
			 toefl: "",
			 act: "",
			 sat: "",
			 personal_statement: ""
		 }
		}
	}

	async componentDidMount() {
     const user = await axios.get("http://localhost:5000/auth/currentuser");
     this.props.currentUserReceived(user.data);
   }


  handleChange(propertyName, event){
		if(event){
			event.preventDefault();
			let name = event.target.name;
			let value = event.target.value;
      let personal = Object.assign({}, this.state.personal);
			personal[propertyName]= value;

			let user = this.props.user.currentUser;
			this.setState({
       personal: personal,
			 [propertyName]: value
		  })

	}
}
	updateUser(event){
		if (event){
			event.preventDefault();
      console.log("personal:", this.state.personal);
      console.log("firstName: ", this.state.firstName, "lastName: ", this.state.lastName);
    }
		// console.log('Updated User in the profile: ', )
	}

	render(){
		const currentUser = this.props.user.currentUser // can be null
		const personal = this.state.personal;
	  //console.log("currentUser in the profile", currentUser)

		return (
			<div className="row">
				<div className="col-md-8">
				  { (currentUser) ? <ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} /> : null }
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
	  currentUserReceived: (user) => dispatch(actions.currentUserReceived(user)),
		personalInfoReceived: (information) => dispatch(actions.personalInfoReceived(information))
	}
}

export default connect(stateToProps, dispatchToProps)(Profile)
