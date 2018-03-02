import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import ProfileContainerComponent from '../presentation/profile/ProfileContainerComponent';
import ProfileCard from "./ProfileCard";
import University from './University';
import axios from 'axios';
import superagent from 'superagent';

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

export default connect(stateToProps, dispatchToProps)(ProfileContainerComponent);
