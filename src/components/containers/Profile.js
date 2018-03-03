import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentUserReceived, syncUserStoreWithDB, toggleProfileInfoUi, toggleStatementUi } from 'actions/Profile';
import ProfileContainerComponent from '../presentation/profile/ProfileContainerComponent';

const stateToProps = (state) => {
	return {
		user: state.user
	}
}

const dispatchToProps = (dispatch) => {
	return {
		updateCurrentUser: (updated_user) => {
			dispatch(currentUserReceived(updated_user));
			console.log('disdis', syncUserStoreWithDB())
			dispatch(syncUserStoreWithDB());
		},
		toggleStatement: () => {
			dispatch(toggleStatementUi())
		},
		toggleProfileInfo: () => {
			dispatch(toggleProfileInfoUi())
		}
	}
}

export default connect(stateToProps, dispatchToProps)(ProfileContainerComponent);
