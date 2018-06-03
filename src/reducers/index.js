import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';
import contacts from './contacts';


// here we combine reducers  with routeReducer.
const rootReducer = combineReducers({
  routerReducer,
  contacts
});

export default rootReducer;