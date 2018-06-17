import { NEW_LIKE } from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_LIKE:
      return {
        ...state,
        item: action.like
      }
    default:
      return state
  }
}
