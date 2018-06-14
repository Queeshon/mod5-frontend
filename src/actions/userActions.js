import { FETCH_USERS, NEW_USER } from './types'

export const fetchUsers = () => dispatch => {

  if (localStorage.getItem('token')){
    fetch("http://localhost:3000/api/v1/users", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(users =>
      dispatch({
        type: FETCH_USERS,
        users
      })
    )
  } else {
    this.props.history.push("/login")
  }

}

export const createUser = userData => dispatch => {
  console.log(userData);
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
