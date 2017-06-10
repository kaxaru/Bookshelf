import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import bookshelfReducer from './bookshelf'
import filterReducer from './filterBook'

export default combineReducers({
  bookshelfReducer,
  filterReducer,
  routing: routerReducer
})
