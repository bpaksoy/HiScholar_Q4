import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ProfileForm, ProfileCard, InfoCard, PersonalStatement, StatementCard } from '../presentation';
import axios from "axios";
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
	constructor(){
		super();
		this.state = {
     user: {},
		 firstName:"",
		 lastName: "",
		 personal: {},
		 value: "",
		 city: "",
		 country: "",
		 personal_statement:"",
		 infoChanged: true,
		 statementSubmitted: true
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

handleStatement(event){
	if(event){
		event.preventDefault();
		let name = event.target.name;
		let value = event.target.value ? event.target.value : '';
    this.setState({
			[name]: value
		})
		console.log("this is handle personal statement", this.state.personal_statement)
	}
}

updateInformation(event){
	if(event){
		event.preventDefault();
		this.setState({
			infoChanged: !this.state.infoChanged
		})
	}
}

updateStatement(event){
	if(event){
		event.preventDefault();
		this.setState({
			statementSubmitted: !this.state.statementSubmitted
		})
	}
}

submitStatement(event){
	if(event){
		event.preventDefault();
		let personal_statement = this.state.personal_statement;
		this.setState({
			statementSubmitted: !this.state.statementSubmitted
		})
		//console.log("personal statement in the submit method", personal_statement);
		this.props.personalStatementReceived(personal_statement);
		axios.put("/auth/personal_statement", { personal_statement : personal_statement }).then(function (result){
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
        personal: personal,
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
			this.props.personalInfoReceived(personal);
			this.setState({
				infoChanged: !this.state.infoChanged
			})
			//console.log("firstName: ", this.state.firstName, "lastName: ", this.state.lastName);
       axios.put("/auth/currentuser", { personal: personal }).then(function (result){
   				//console.log("result is ", result);
      		})["catch"](function (err) {
 				console.log("we have not got the data!");
 				});
    }
	}


	render(){
		const currentUser = this.props.user.currentUser; // can be null
		const personal = (currentUser)? currentUser.personal : "";
		//console.log("personal", personal)
		const personal_statement = (currentUser)? currentUser.personal_statement : null;
		console.log("personal_statement in the profile", personal_statement)

		const errors = validate(this.state.city, this.state.country);
    const isDisabled = Object.keys(errors).some(key => errors[key]);
		//console.log(errors, isDisabled);
		const noStatement = validateStatement(this.state.personal_statement);
		//console.log("no statement status: ", noStatement)
    const infoChanged = this.state.infoChanged;
		const statementSubmitted = this.state.statementSubmitted;
		console.log("infoChanged", infoChanged, "statementSubmitted", statementSubmitted)

		if(currentUser && !personal.length && !personal_statement){
				return(
					 <div>
						<div className="col-md-8">
							<ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} isDisabled={isDisabled} handleCity={this.handleCity.bind(this)} handleCountry={this.handleCountry.bind(this)}/>
							<PersonalStatement submitStatement={this.submitStatement.bind(this)} handleStatement={this.handleStatement.bind(this)} user={currentUser} personal_statement={this.state.personal_statement} noStatement={noStatement}/>
						</div>
						<div className="col-md-4">
							 <ProfileCard user={currentUser} />
						</div>
					 </div>
				   );
			 } else if(currentUser && personal.length && !personal_statement){
					 if(infoChanged){
							return(
								<div>
									<div className="col-md-8">
									 <PersonalStatement submitStatement={this.submitStatement.bind(this)} handleStatement={this.handleStatement.bind(this)} user={currentUser} personal_statement={this.state.personal_statement} noStatement={noStatement}/>
									</div>
								 <div className="col-md-4">
									 <ProfileCard user={currentUser} />
									 <InfoCard user={currentUser} personal={personal} updateInformation={this.updateInformation.bind(this)}/>
								 </div>
								</div>
						);
				  } else{
					 return(
	 					<div>
	 						<div className="col-md-8">
	 						 <PersonalStatement submitStatement={this.submitStatement.bind(this)} handleStatement={this.handleStatement.bind(this)} user={currentUser} personal_statement={this.state.personal_statement} noStatement={noStatement}/>
	 						</div>
	 					 <div className="col-md-4">
	 						 <ProfileCard user={currentUser} />
	 						 <ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} isDisabled={isDisabled} handleCity={this.handleCity.bind(this)} handleCountry={this.handleCountry.bind(this)}/>
	 					 </div>
	 					</div>
	 			   );
				  }
			} else if(currentUser && !personal.length && personal_statement){
				 if(statementSubmitted){
					return(
					 <div>
						 <div className="col-md-8">
							 <ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} isDisabled={isDisabled} handleCity={this.handleCity.bind(this)} handleCountry={this.handleCountry.bind(this)}/>
							 <StatementCard user={currentUser} personal_statement={personal_statement} updateStatement={this.updateStatement.bind(this)} />
						 </div>
						 <div className="col-md-4">
							 <ProfileCard user={currentUser} />
						 </div>
					 </div>
				 );
			 } else if(!statementSubmitted){
					 return(
						<div>
							<div className="col-md-8">
								 <ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} isDisabled={isDisabled} handleCity={this.handleCity.bind(this)} handleCountry={this.handleCountry.bind(this)}/>
								 <PersonalStatement submitStatement={this.submitStatement.bind(this)} handleStatement={this.handleStatement.bind(this)} user={currentUser} personal_statement={this.state.personal_statement} noStatement={noStatement}/>
							</div>
							<div className="col-md-4">
								<ProfileCard user={currentUser} />
							</div>
						</div>
						);
			   }
			 } else {
				if(infoChanged && statementSubmitted){
				 return(
					 <div>
						 <div className="col-md-8">
							<StatementCard user={currentUser} personal_statement={personal_statement} updateStatement={this.updateStatement.bind(this)} />
						 </div>
						<div className="col-md-4">
							<ProfileCard user={currentUser} />
							<InfoCard user={currentUser} personal={personal} updateInformation={this.updateInformation.bind(this)}/>
						</div>
					 </div>
					 );
				 } else if (!infoChanged && statementSubmitted){
					 return(
	 					<div>
	 						<div className="col-md-8">
							 <ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} isDisabled={isDisabled} handleCity={this.handleCity.bind(this)} handleCountry={this.handleCountry.bind(this)}/>
	 						 <StatementCard user={currentUser} personal_statement={personal_statement} updateStatement={this.updateStatement.bind(this)} />
	 						</div>
	 					 <div className="col-md-4">
	 						 <ProfileCard user={currentUser} />
	 					 </div>
	 					</div>
	 			   );
			   } else if (infoChanged && !statementSubmitted) {
					 return(
						 <div>
							 <div className="col-md-8">
								<PersonalStatement submitStatement={this.submitStatement.bind(this)} handleStatement={this.handleStatement.bind(this)} user={currentUser} personal_statement={this.state.personal_statement} noStatement={noStatement}/>
							 </div>
							<div className="col-md-4">
								<ProfileCard user={currentUser} />
								<InfoCard user={currentUser} personal={personal} updateInformation={this.updateInformation.bind(this)}/>
							</div>
						 </div>
				   );
				 }
		  }
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

export default connect(stateToProps, dispatchToProps)(Profile)
