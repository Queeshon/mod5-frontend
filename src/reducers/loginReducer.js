import { CREATE_SESSION } from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_SESSION:
      return {
        ...state,
        item: action.json
      }
    default:
      return state
  }
}
