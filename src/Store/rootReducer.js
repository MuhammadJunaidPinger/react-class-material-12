import { combineReducers } from 'redux'
import userReducers from './reducers/userReducers'
import carsReducers from './reducers/carsReducers'


export default combineReducers({
  userReducers,
  carsReducers
})