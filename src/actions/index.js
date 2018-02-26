import constants from '../constants'

export default {

	currentUserReceived: (user) => {
		return {
			type: constants.CURRENT_USER_RECEIVED,
			data: user
		}
	},
	personalInfoReceived: (information) => {
		return {
			type: constants.PERSONAL_INFO_RECEIVED,
			data: information
		}
	},
	personalStatementReceived: (statement) => {
		return {
			type: constants.PERSONAL_STATEMENT_RECEIVED,
			data: statement
		}
	},
	searchedUniversityReceived: (university) => {
		return {
			type: constants.SEARCHED_UNIVERSITY_RECEIVED,
			data: university
		}
	},
	removeUniversityFromSaved: (university_id) => {
		console.log('university_id', university_id);
		return {
			type: constants.REMOVE_SAVED_UNIVERSITY,
			data: university_id
		}
	},
	removeUniversityFromSelected: (university_id) => {
		return {
			type: constants.REMOVE_SELECTED_UNIVERSITY,
			data: university_id
		}
	},
	selectedUniversitiesReceived: (universities) => {
		return {
			type: constants.SELECTED_UNIVERSITIES_RECEIVED,
			data: universities
		}
	},
	savedUniversitiesReceived: (universities) => {
		return {
			type: constants.SAVED_UNIVERSITIES_RECEIVED,
			data: universities
		}
	},
	schoolCardClosed: (index) => {
		return {
		type: constants.SCHOOL_CARD_CLOSED,
		data: index
	 }
 },
 profilePicUrlReceived: (url) => {
	 return {
		 type: constants.PROFILE_PICTURE_URL_RECEIVED,
		 data: url
	 }
 },
 saveReceived: (saveState) => {
	 return {
	 type: constants.SAVE_RECEIVED,
	 data: saveState
  }
 }

}
