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
	},
	personalStatementReceived: function (statement) {
		return {
			type: constants.PERSONAL_STATEMENT_RECEIVED,
			data: statement
		};
	},
	searchedUniversityReceived: function (university) {
		return {
			type: constants.SEARCHED_UNIVERSITY_RECEIVED,
			data: university
		};
	},
	selectedUniversityReceived: function (university) {
		return {
			type: constants.SELECTED_UNIVERSITY_RECEIVED,
			data: university
		};
	},
	savedUniversitiesReceived: function (universities) {
		return {
			type: constants.SAVED_UNIVERSITIES_RECEIVED,
			data: universities
		};
	},
	schoolCardClosed: function (index) {
		return {
			type: constants.SCHOOL_CARD_CLOSED,
			data: index
		};
	},
	profilePicUrlReceived: function (url) {
		return {
			type: constants.PROFILE_PICTURE_URL_RECEIVED,
			data: url
		};
	},
	saveReceived: function (saveState) {
		return {
			type: constants.SAVE_RECEIVED,
			data: saveState
		};
	}

};