import constants from '../constants'

var initialState = {
  selectedUniversity: "",
	selectedUniversities: []
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type) {

		case constants.UNIVERSITY_RECEIVED:
      newState.selectedUniversity = action.data;
			newState["selectedUniversities"].push(action.data);
      console.log("action.data", action.data)
			console.log("newState: ", newState)
			return newState;

		default:
			return state;
	}
}
