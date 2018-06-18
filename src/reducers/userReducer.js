import { FETCH_USERS, NEW_USER, EDIT_USER, DELETE_USER } from '../actions/types'

const initialState = {
  items: [],
  item: {},
  editItem: {}
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
    case EDIT_USER:
      return {
        ...state,
        editItem: action.user
      }
    case DELETE_USER:
      return state
    default:
      return state
  }
}
