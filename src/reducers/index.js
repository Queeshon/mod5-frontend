import { combineReducers } from 'redux'
import userReducer from './userReducer'
//list of imported reducers

export default combineReducers({
  users: userReducer
})
