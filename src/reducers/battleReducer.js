import { FETCH_BATTLES, NEW_BATTLE } from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BATTLES:
      return {
        ...state,
        items: action.battles
      }
    case NEW_BATTLE:
      return {
        ...state,
        item: action.battle
      }
    default:
      return state
  }
}
