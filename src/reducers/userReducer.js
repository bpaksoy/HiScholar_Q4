import constants from 'constants/profile'

const initialUiState = {
	profileInfo: 'form',
	statement: 'form'
};

const initialState = {
	currentUser: {},
	ui: initialUiState
}

const isFormValid = ({ city = '', country = ''}) => {
  return (
    city.length != 0 && country.length != 0
  )
}

const updateCurrentUserReducer = (state, action) => {
	const user = action.data;
	const ui = {
		profileInfo: isFormValid(user.personal) ? 'card' : 'form',
		statement: user.personal_statement ? 'card' : 'form'
	}
	return {
		currentUser: {
			...state.currentUser,
			...user
		},
		ui
	}
}

const toggleProfileReducer = (state, action) => {
	return {
		...state,
		ui: {
			...state.ui,
			profileInfo: state.ui.profileInfo == 'form' ? 'card' : 'form'
		}
	}
}

const toggleStatementReducer = (state, action) => {
	return {
		...state,
		ui: {
			...state.ui,
			statement: state.ui.statement == 'form' ? 'card' : 'form'
		}
	}
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case constants.CURRENT_USER_RECEIVED:
			return updateCurrentUserReducer(state, action);
		case constants.TOGGLE_PROFILE_INFO_UI:
			return toggleProfileReducer(state, action);
		case constants.TOGGLE_STATEMENT_UI:
			return toggleStatementReducer(state, action);
		default:
			return state;
	}
}
