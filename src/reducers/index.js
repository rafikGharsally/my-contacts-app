import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';

// here we combine reducers  with routeReducer.
const rootReducer = combineReducers({
  routerReducer,
});

export default rootReducer;