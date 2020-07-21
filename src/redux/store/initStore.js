import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducer';

const DEV_TOOLS = {
  enableReduxDevTools: true,
  logError: true
};

let composeEnhancer = compose;

if (DEV_TOOLS && DEV_TOOLS.enableReduxDevTools) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
}

export default function initStore(initialState = {}) {
  return createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk, logger)));
}
