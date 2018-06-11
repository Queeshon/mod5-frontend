import { FETCH_BATTLES, NEW_BATTLE } from './types'

export const fetchBattles = () => dispatch => {
  fetch("http://localhost:3000/api/v1/battles")
  .then(response => response.json())
  .then(users =>
    dispatch({
      type: FETCH_BATTLES,
      users
    })
  )
}

export const createUser = battleData => dispatch => {
  fetch("http://localhost:3000/api/v1/battles", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(battleData)
  })
  .then(response => response.json())
  .then(user =>
    dispatch({
      type: NEW_BATTLE,
      user
    })
  )
}
