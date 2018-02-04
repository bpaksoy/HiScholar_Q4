import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ProfileForm, ProfileCard, InfoCard, PersonalStatement, StatementCard } from '../presentation';
import axios from "axios";
import superagent from 'superagent';

class Profile extends Component {
	constructor(){
		super();
		this.state = {
     user: {},
		 firstName:"",
		 lastName: "",
		 personal: {},
		 value: ""
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
		//console.log("this is handle personal statement", this.state.personal_statement)
	}
}

submitStatement(event){
	if(event){
		event.preventDefault();
		let personal_statement = this.state.personal_statement;
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
        personal: personal
		  })
	}
}
 updateUser (event){
		if (event){
			event.preventDefault();
			let personal = this.state.personal;
			this.props.personalInfoReceived(personal);
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
		const personal_statement =(currentUser)? currentUser.personal_statement : "";
		//console.log("personal_statement in the profile", personal_statement)

		if(currentUser && !personal.length && !personal_statement){
			 return(
				 <div>
					<div className="col-md-8">
						<ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} />
						<PersonalStatement submitStatement={this.submitStatement.bind(this)} handleStatement={this.handleStatement.bind(this)} user={currentUser} personal_statement={this.state.personal_statement}/>
					</div>
					<div className="col-md-4">
						 <ProfileCard user={currentUser} />
					</div>
				 </div>
			   );
			 } else if(currentUser && personal.length && !personal_statement){
					return(
					<div>
						<div className="col-md-8">
						 <PersonalStatement submitStatement={this.submitStatement.bind(this)} handleStatement={this.handleStatement.bind(this)} user={currentUser} personal_statement={this.state.personal_statement}/>
						</div>
					 <div className="col-md-4">
						 <ProfileCard user={currentUser} />
						 <InfoCard user={currentUser} personal={personal}/>
					 </div>
					</div>
				);
			} else if(currentUser && !personal.length && personal_statement){
					return(
					 <div>
						 <div className="col-md-8">
							 <ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} />
							 <StatementCard user={currentUser} personal_statement={personal_statement}/>
						 </div>
						 <div className="col-md-4">
							 <ProfileCard user={currentUser} />
						 </div>
					 </div>
				 );
			 } else{
				 return(
					 <div>
						 <div className="col-md-8">
							<StatementCard user={currentUser} personal_statement={personal_statement}/>
						 </div>
						<div className="col-md-4">
							<ProfileCard user={currentUser} />
							<InfoCard user={currentUser} personal={personal}/>
						</div>
					 </div>
		   );
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



// { (currentUser && !formsFilled)?
//  <div className="row">
// 	 <div>
// 		<div className="col-md-8">
// 			<ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} />
// 			<PersonalStatement submitStatement={this.submitStatement.bind(this)} handleStatement={this.handleStatement.bind(this)} user={currentUser} personal_statement={this.state.personal_statement}/>
// 		</div>
// 		<div className="col-md-4">
// 			 <ProfileCard user={currentUser} />
// 		</div>
// 		: {(currentUser && profileFormFilled && !statemenFilled)?
// 		 <div>
// 			 <div className="col-md-8">
// 				<PersonalStatement submitStatement={this.submitStatement.bind(this)} handleStatement={this.handleStatement.bind(this)} user={currentUser} personal_statement={this.state.personal_statement}/>
// 			 </div>
// 			<div className="col-md-4">
// 				<ProfileCard user={currentUser} />
// 				<InfoCard user={currentUser} personal={personal}/>
// 			</div>
// 		 </div>
// 		}
// 		: {(currentUser && !profileFormFilled && statemenFilled)?
// 	 <div>
// 		 <div className="col-md-8">
// 			 <h2>Hi Mom</h2>
// 			 <ProfileForm handleChange={this.handleChange.bind(this)} onUpdate={this.updateUser.bind(this)} user={currentUser} personal={personal} />
// 		 </div>
// 		 <div className="col-md-4">
// 			 <ProfileCard user={currentUser} />
// 		 </div>
// 	 </div>
// 		:
// 	<div>
// 		<div className="col-md-8">
// 		 <h2>Hi Mom!</h2>
// 		</div>
// 	 <div className="col-md-4">
// 		 <ProfileCard user={currentUser} />
// 		 <InfoCard user={currentUser} personal={personal}/>
// 	 </div>
// 	</div>
// 	}
//  </div>
//  }
// const currentUser = this.props.user.currentUser; // can be null
// const personal = (currentUser)? currentUser.personal[0] : "";
// const personal_statement = this.props.user.personal_statement;
// console.log("personal_statement in the reducer", personal_statement)
// const formsFilled = (personal && personal_statement);
// const profileFormFilled = (personal)? true: false;
// const statemenFilled = (personal_statement)? true: false;

// <div>
//  { this.renderButton.bind(this) }
// </div>

// const formsFilled = (personal && personal_statement);
// const profileFormFilled = (personal)? true: false;
// const statemenFilled = (personal_statement)? true: false;
