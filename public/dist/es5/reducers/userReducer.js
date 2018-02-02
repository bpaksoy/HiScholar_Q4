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
			console.log("CURRENT_USER_RECEIVED: " + JSON.stringify(action.data.user));
			newState.currentUser = action.data.user;
			console.log("new state", newState);
			return newState;

		case constants.PERSONAL_INFO_RECEIVED:
			console.log("PERSONAL_INFO_RECEIVED: " + JSON.stringify(action.data));
			newState.currentUser.personal = action.data;
			console.log("personal information added to newState: ", newState);
			return newState;

		default:
			return state;
	}
};