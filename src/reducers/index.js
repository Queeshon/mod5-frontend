import { combineReducers } from 'redux'
import userReducer from './userReducer'
import battleReducer from './battleReducer'
//list of imported reducers

export default combineReducers({
  users: userReducer,
  battles: battleReducer
})
