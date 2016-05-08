Redux Safe Reducers
=============

## Install

```js
npm install --save redux-safe-reducers
```

## API

`redux-safe-reducers` exposes a function that acts as a wrapper to redux's [`combineReducers`](http://redux.js.org/docs/api/combineReducers.html) method and catches errors that may occur inside reducer's scope.

```js
/**
 * Combines reducers
 *
 * @param {Object} reducers The reducers that you want to combine.
 * @param {Function} Error handling method.
 *   @param {Error} err Reducer's error.
 */
combineSafeReducers(reducers, (err) => {
  // error handler
})
```

## Usage

Instead of using redux's `combineReducers` method, to create your root reducer, use `combineSafeReducers`, the exposed function of `redux-safe-reducers`. You also need to provide the error handling function.

```js
import combineSafeReducers from 'redux-safe-reducers';

function handler(err) {
   // reducer's error caught
}

const rootReducer = combineSafeReducers({
  <...your reducers>
}, handler);
```

## License

MIT
