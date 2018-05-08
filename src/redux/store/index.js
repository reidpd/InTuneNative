import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from '../reducers';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(promiseMiddleware()),
));

export default store;
