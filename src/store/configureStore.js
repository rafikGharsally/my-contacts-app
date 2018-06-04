import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

export default function createReduxStore() {
  // add a browser history
  const history = createHistory();

  // intercept and dispatch action here
  const middleware = routerMiddleware(history);

  const client = axios.create();

  const clientOptions = {
    returnRejectedPromiseOnError: true,
    errorSuffix: '_ERROR',
    successSuffix: '_SUCCESS'
  };

  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    // initialState
    {},
    composeEnhancers(applyMiddleware(middleware, thunk, axiosMiddleware(client, clientOptions))
    ));

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const newRootReducer = require('../reducers').default;
        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
};