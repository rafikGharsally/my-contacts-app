import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';
import contacts from './contacts';
import contact from './contact';


// here we combine reducers  with routeReducer.
const rootReducer = combineReducers({
  routerReducer,
  contacts,
  contact
});

export default rootReducer;