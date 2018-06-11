import { FETCH_USERS, NEW_USER } from './types'

export const fetchUsers = () => dispatch => {
  fetch("http://localhost:3000/api/v1/users")
  .then(response => response.json())
  .then(users =>
    dispatch({
      type: FETCH_USERS,
      users
    })
  )
}

export const createUser = userData => dispatch => {
  fetch("http://localhost:3000/api/v1/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(user =>
    dispatch({
      type: NEW_USER,
      user
    })
  )
}
