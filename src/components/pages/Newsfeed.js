import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Link } from "react-router-dom";
const keys = require("../../../config/keys");

class Newsfeed extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}


 componentDidMount() {

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
