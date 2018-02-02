import constants from '../constants'

var initialState = {
	currentUser: null
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type) {

		case constants.CURRENT_USER_RECEIVED:
			newState["currentUser"] = action.data;
			return newState;

    case constants.PERSONAL_INFO_RECEIVED:
      newState["currentUser"]["personal"] = action.data;
			return newState;

		default:
			return state;
	}
}
