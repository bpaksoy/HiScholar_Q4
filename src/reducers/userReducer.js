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
      newState["currentUser"]["personal"]= action.data;
			//console.log("action.data", action.data)
			console.log("newState: ", newState)
			return newState;

		case constants.PERSONAL_STATEMENT_RECEIVED:
	    newState["currentUser"].personal_statement = action.data;
			//console.log("action.data", action.data)
			//console.log("newState: ", newState)
	    return newState;


	  case constants.PROFILE_PICTURE_URL_RECEIVED:
		  newState["thumbnail"]= action.data;
				//console.log("action.data", action.data)
				//console.log("newState: ", newState)
		  return newState;

		default:
			return state;
	}
}
