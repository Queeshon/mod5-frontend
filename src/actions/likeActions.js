import { NEW_LIKE } from './types'

export const newLike = likeData => dispatch => {
  fetch("http://localhost:3000/api/v1/likes", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    },
    body: JSON.stringify(likeData)
  })
  .then(response => response.json())
  .then(like =>
    dispatch({
      type: NEW_LIKE,
      like
    })
  )
}
