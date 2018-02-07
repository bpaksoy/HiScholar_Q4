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
	universityReceived: (university) => {
		return {
			type: constants.UNIVERSITY_RECEIVED,
			data: university
		}
	}


}
