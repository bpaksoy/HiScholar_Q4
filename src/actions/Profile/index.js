import axios from 'axios';

export function getCurrentUserData() {
  return (dispatch, getState) => {
    return axios.get('/auth/currentuser')
      .then((response) => {
        const { data = {} } = response
        const { user = {} } = data // this is the currently logged-in user
        return user;
      })
  }
}
