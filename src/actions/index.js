import constants from '../constants'

// Cannot use "import constants from 'constants' because of name conflict with an internal node module"

export default {

  searchedUniversityReceived: (university) => {
    return {
      type: constants.SEARCHED_UNIVERSITY_RECEIVED,
      data: university
    }
  },

  removeUniversityFromSaved: (university_id) => {
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
