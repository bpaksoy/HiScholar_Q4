"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
	currentUser: null
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	var newState = Object.assign({}, state);

	switch (action.type) {

		case constants.CURRENT_USER_RECEIVED:
			newState.currentUser = action.data;
			return newState;

		case constants.PERSONAL_INFO_RECEIVED:
			newState.currentUser.personal = action.data;
			//console.log("action.data", action.data)
			console.log("newState: ", newState);
			return newState;

		case constants.PERSONAL_STATEMENT_RECEIVED:
			newState.currentUser.personal_statement = action.data;
			//console.log("action.data", action.data)
			//console.log("newState: ", newState)
			return newState;

		default:
			return state;
	}
};