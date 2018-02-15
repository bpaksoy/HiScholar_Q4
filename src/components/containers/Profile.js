import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ProfileForm, InfoCard, PersonalStatement, StatementCard } from '../presentation';
import ProfileCard from "./ProfileCard";
import University from './University';
import axios from 'axios';
import superagent from 'superagent';

function validate(city, country){
	return {
    city: city.length === 0,
    country: country.length === 0,
  };
}

function validateStatement(statement){
	return statement.length === 0;
}

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
     user: {},
		 firstName:"",
		 lastName: "",
		 personal: {},
		 value: "",
		 city: "",
		 country: "",
		 personal_statement:"",
		 info_ui : 'form',
		 statement_ui: 'form'
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
			//console.log("currentUser",this.props.user.currentUser);
			this.setState({
				info_ui: user.personal.city && user.personal.country ? 'card' : 'form',
				statement_ui: user.personal_statement ? 'card': 'form'
			})
		})
}

handleStatement(event){
	if(event){
		event.preventDefault();
		let name = event.target.name;
		let value = event.target.value ? event.target.value : '';
    this.setState({
			[name]: value
		})
	}
}

updateInformation(event){
	if(event){
		event.preventDefault();
		this.setState({
			info_ui: 'form'
		})
	}
}

updateStatement(event){
	if(event){
		event.preventDefault();
		this.setState({
			statement_ui: 'form'
		})
	}
}

submitStatement(event){
	if(event){
		event.preventDefault();
		let personal_statement = this.state.personal_statement;
		this.setState({
			statement_ui: 'card'
		})
		//console.log("personal statement in the submit method", personal_statement);
		this.props.personalStatementReceived(personal_statement);
		axios.put("/dashboard/personal_statement", { personal_statement : personal_statement }).then(function (result){
			  console.log("result is ", result);
			 })["catch"](function (err) {
		 console.log("we have not got the data!");
		 });
	}

}

  handleChange(event){
		if(event){
			event.preventDefault();
			let name = event.target.name;
			let value = event.target.value ? event.target.value : '';
      let personal = Object.assign({}, this.state.personal);
			personal[name]= value;

			// let user = this.props.user.currentUser;
			this.setState({
        personal: personal
		  })
			//console.log("this.state", this.state);
	}
}


handleCity(event){
	if(event){
		event.preventDefault();
		this.setState({
			city: event.target.value
		})
	}
}

handleCountry(event){
	if(event){
		event.preventDefault();
		this.setState({
			country: event.target.value
		})
	}
}

 updateUser (event){
		if (event){
			event.preventDefault();
			let personal = this.state.personal;
			console.log("personal?????", personal);
			this.props.personalInfoReceived(personal);
			//console.log("firstName: ", this.state.firstName, "lastName: ", this.state.lastName);
      axios.put("/dashboard/currentuser", { personal: personal}).then(function (result){
   				console.log("result is ", result);
				})["catch"](function (err) {
 				console.log("we have not got the data!");
			});
			this.setState({
				info_ui: 'card'
			})
    }
	}


	render() {
		const currentUser = this.props.user.currentUser; // can be null
		//console.log("currentUser", currentUser);
		const personal = (currentUser)? currentUser.personal : {};
		//console.log("personal in the profile form", personal)
		const personal_statement = (currentUser)? currentUser.personal_statement : null;
		//console.log("personal_statement in the profile", personal_statement)

		const errors = validate(this.state.city, this.state.country);
    const isDisabled = Object.keys(errors).some(key => errors[key]);
		//console.log(errors, isDisabled);
		const noStatement = validateStatement(this.state.personal_statement);
		//console.log("no statement status: ", noStatement)

		if (this.props.user && this.props.user.currentUser) {
			return(
				<div>
					<div className="col-md-8">
						{this.state.info_ui == 'form' && <ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} isDisabled={isDisabled} handleCity={this.handleCity.bind(this)} handleCountry={this.handleCountry.bind(this)}/>}
						{this.state.statement_ui == 'form' && <PersonalStatement submitStatement={this.submitStatement.bind(this)} handleStatement={this.handleStatement.bind(this)} user={currentUser} personal_statement={this.state.personal_statement} noStatement={noStatement}/>}
						{this.state.statement_ui == 'card' && <StatementCard user={currentUser} personal_statement={personal_statement} updateStatement={this.updateStatement.bind(this)} />}
						<University/>
					</div>
					<div className="col-md-4">
						 <ProfileCard user={currentUser} />
						{this.state.info_ui == 'card' && <InfoCard user={currentUser} personal={personal} updateInformation={this.updateInformation.bind(this)}/>}
					</div>
				</div>
		 	);
	 	}
	 	return 'Loading...';
	}
}

const stateToProps = (state) => {
	return {
		user: state.user,
		information: state.information,
		statement: state.statement
	}
}

const dispatchToProps = (dispatch) => {
	return {
	  currentUserReceived: (user) => dispatch(actions.currentUserReceived(user)),
		personalInfoReceived: (information) => dispatch(actions.personalInfoReceived(information)),
		personalStatementReceived: (statement) => dispatch(actions.personalStatementReceived(statement))
	}
 }

export default connect(stateToProps, dispatchToProps)(Profile);
