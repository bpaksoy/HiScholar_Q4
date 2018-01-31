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
	}


}
