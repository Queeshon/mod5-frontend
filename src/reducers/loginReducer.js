import { CREATE_SESSION } from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.users
      }
    case NEW_USER:
      return {
        ...state,
        item: action.user
      }
    default:
      return state
  }
}
