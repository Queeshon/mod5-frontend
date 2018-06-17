import { CREATE_SESSION } from './types'

export const createSession = (username, password) => dispatch => {
  fetch('http://localhost:3000/api/v1/sessions/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(response => response.json())
  .then(json => {
    localStorage.setItem('token', json.token)
    localStorage.setItem('user_id', json.user_id)
    localStorage.setItem('username', json.username)
    return json
  })
  .then(json => {
    dispatch({
      type: CREATE_SESSION,
      json
    })
  })
}
