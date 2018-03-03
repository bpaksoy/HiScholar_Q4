import axios from 'axios';
import actions from '../index';
import constants from 'constants/profile'

export function getCurrentUserData() {
  return axios.get('/auth/currentuser')
    .then((response) => {
      const { data = {} } = response
      const { user = {} } = data
      return user;
    });
}

export function updateCurrentUserData(user) {
  return axios.put('/auth/currentuser', {
    user
  })
  .then((response) => {
    const { data = {} } = response
    const { user = {} } = data
    return user;
  });
}

export function syncUserStoreWithDB() {
  return (dispatch, getState) => {
    const state = getState();
    const { user = {} } = state;
    const { currentUser = {} } = user;
    if (Object.keys(currentUser).length) {
      updateCurrentUserData(currentUser);
    }
  }
}
export function fetchAndStoreCurrentUserData() {
  return (dispatch, getState) => {
    getCurrentUserData()
    .then(user => {
      dispatch(currentUserReceived(user))
    })
  }
}

export function currentUserReceived(user) {
  return {
    type: constants.CURRENT_USER_RECEIVED,
    data: user
  }
}

export function toggleProfileInfoUi() {
  return {
    type: constants.TOGGLE_PROFILE_INFO_UI
  }
}

export function toggleStatementUi() {
  return {
    type: constants.TOGGLE_STATEMENT_UI
  }
}
