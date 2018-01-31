import constants from '../constants'

var initialState = {
	currentUser: null
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type) {

		case constants.CURRENT_USER_RECEIVED:
			console.log("CURRENT_USER_RECEIVED: " + JSON.stringify(action.data.user));
			newState["currentUser"] = action.data.user;
			console.log("new state", newState);
			return newState;

    case constants.PERSONAL_INFO_RECEIVED:
		  console.log("PERSONAL_INFO_RECEIVED: " + JSON.stringify(action.data));
      newState["currentUser"]["personal"] = action.data;
      console.log("personal information added to newState: ", newState);
			return newState;

		default:
			return state;
	}
}
