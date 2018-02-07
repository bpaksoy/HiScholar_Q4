import constants from '../constants'

var initialState = {
  searchedUniversity: "",
	selectedUniversities: []
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type) {

		case constants.SEARCHED_UNIVERSITY_RECEIVED:
      newState.searchedUniversity = action.data;
			//newState["selectedUniversities"].push(action.data);
      console.log("action.data", action.data);
			console.log("newState: ", newState);
			return newState;

    case constants.SELECTED_UNIVERSITY_RECEIVED:
     newState.selectedUniversities.push(action.data);
     console.log("newState: ", newState);
     return newState;

		default:
			return state;
	}
}
