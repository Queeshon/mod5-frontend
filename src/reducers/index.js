import { combineReducers } from 'redux'
import userReducer from './userReducer'
import battleReducer from './battleReducer'
import loginReducer from './loginReducer'
//list of imported reducers

export default combineReducers({
  users: userReducer,
  battles: battleReducer,
  login: loginReducer
})
