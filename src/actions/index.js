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
	selectedUniversityReceived: (university) => {
		return {
			type: constants.SELECTED_UNIVERSITY_RECEIVED,
			data: university
		}
	},
	savedUniversityReceived: (university) => {
		return {
			type: constants.SAVED_UNIVERSITY_RECEIVED,
			data: university
		}
	},
	schoolCardClosed: (index) => {
		return{
		type: constants.SCHOOL_CARD_CLOSED,
		data: index
	 }
	}

}
