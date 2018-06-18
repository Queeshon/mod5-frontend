import { FETCH_BATTLES, NEW_BATTLE } from './types'

export const fetchBattles = () => dispatch => {
  if (localStorage.getItem('token')) {
    fetch("http://localhost:3000/api/v1/battles", {
      headers: {
        "Content-Type": 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(battles =>
      dispatch({
        type: FETCH_BATTLES,
        battles
      })
    )
  } else {
    this.props.history.push("/login")
  }
}

export const newBattle = battleData => dispatch => {
  console.log(battleData)
  fetch("http://localhost:3000/api/v1/battles", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(battleData)
  })
  .then(response => response.json())
  .then(battle =>
    dispatch({
      type: NEW_BATTLE,
      battle
    })
  )
}
