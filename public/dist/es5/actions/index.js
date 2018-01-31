"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

module.exports = {

	currentUserReceived: function (user) {
		return {
			type: constants.CURRENT_USER_RECEIVED,
			data: user
		};
	},
	personalInfoReceived: function (information) {
		return {
			type: constants.PERSONAL_INFO_RECEIVED,
			data: information
		};
	}


};