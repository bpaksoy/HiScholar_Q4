import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ProfileForm, ProfileCard, InfoCard } from '../presentation';
import axios from "axios";
import superagent from 'superagent';

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


 componentDidMount() {
	superagent.get('/auth/currentuser')
		.query(null)
		.set('Accept', 'application/json')
		.end((err, response) => {
			if (err)
				return
			const payload = response.body
			const user = payload.user // this is the currently logged-in user
			this.props.currentUserReceived(user)
		})
}


  handleChange(propertyName, event){
		if(event){
			event.preventDefault();
			let name = event.target.name;
			let value = event.target.value ? event.target.value : '';
      let personal = Object.assign({}, this.state.personal);
			personal[propertyName]= value;
			let user = this.props.user.currentUser;
			this.setState({
        personal: personal,
			  [propertyName]: value
		  })
	}
}
 updateUser (event){
		if (event){
			event.preventDefault();
			let personal = this.state.personal;
			this.props.personalInfoReceived(personal);
			console.log("firstName: ", this.state.firstName, "lastName: ", this.state.lastName);
       axios.put("/auth/currentuser", { personal: personal }).then(function (result){
   				console.log("result is ", result);
      		})["catch"](function (err) {
 				console.log("we have not got the data!");
 				});
    }
	}

	render(){
		const currentUser = this.props.user.currentUser // can be null
		const personal = (currentUser)? currentUser.personal[0] : "";
	  console.log("personal in the profile", personal)


		return (
			<div className="row">
				<div className="col-md-8">
				  { (currentUser && !personal.length) ? <ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} /> : null }
				</div>

				<div className="col-md-4">
					{ (currentUser) ? <ProfileCard user={currentUser} /> : null }
					{ (personal.length)? <InfoCard user={currentUser} personal={personal}/> : null }
				</div>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		user: state.user,
		information: state.information
	}
}

const dispatchToProps = (dispatch) => {
	return {
	  currentUserReceived: (user) => dispatch(actions.currentUserReceived(user)),
		personalInfoReceived: (information) => dispatch(actions.personalInfoReceived(information))
	}
}

export default connect(stateToProps, dispatchToProps)(Profile)
