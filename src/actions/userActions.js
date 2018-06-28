import { FETCH_USERS, NEW_USER, EDIT_USER, DELETE_USER } from './types'

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
  fetch("http://localhost:3000/api/v1/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(user => {
    localStorage.setItem('token', user.token)
    localStorage.setItem('user_id', user.user_id)
    localStorage.setItem('username', user.username)
    localStorage.setItem('name', user.name)
    localStorage.setItem('avatar', user.avatar)
    localStorage.setItem('cute_pic', user.cute_pic)
    localStorage.setItem('wins', user.wins)
    return user
  })
  .then(user =>
    dispatch({
      type: NEW_USER,
      user
    })
  )
}

export const editUser = userData => dispatch => {
  fetch(`http://localhost:3000/api/v1/users/${localStorage.getItem('user_id')}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(user =>{
    localStorage.setItem('username', user.username)
    localStorage.setItem('name', user.name)
    localStorage.setItem('avatar', user.avatar)
    localStorage.setItem('cute_pic', user.cute_pic)
    return user
  })
  .then(user =>
    dispatch({
      type: EDIT_USER,
      user
    })
  )
}

export const deleteUser = userData => dispatch => {
  fetch(`http://localhost:3000/api/v1/users/${localStorage.getItem('user_id')}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  })
  .then(response => response.json())
  .then(user =>{
    localStorage.removeItem('username')
    localStorage.removeItem('name')
    localStorage.removeItem('avatar')
    localStorage.removeItem('cute_pic')
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    return user
  })
  .then(user =>
    dispatch({
      type: DELETE_USER
    })
  )
}
