import { combineReducers } from 'redux';
import greentime from './greenTimeReducer.js';

const r = combineReducers({
  greentime
});

export default (state, action) => {
  if (action.type.endsWith('_REJECTED')) {
    console.log('rejected action!', action);
  }
  const newState = r(state, action);
  console.log("new state", newState);
  return newState;
};
