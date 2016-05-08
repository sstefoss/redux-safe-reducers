import {combineReducers} from 'redux';

export function combineSafeReducers(reducers, handler) {
  const finalReducers = {};
  Object.keys(reducers).map((reducer) => {
    const _reducer = reducers[reducer];
    const safe = (state, action) => {
      try {
        return _reducer(state, action);
      } catch (err) {
        handler(err);
        throw err;
      }
    };
    finalReducers[reducer] = safe;
  });
  return combineReducers(finalReducers);
}
