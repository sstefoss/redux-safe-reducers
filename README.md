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
 * @param {Function} onError Error handling method.
 *   @param {Error} err Reducer's error.
 */
combineSafeReducers(reducers, (err) => {
  // error handler
})
```

## Usage

Instead of using `combineReducers`, to create your root reducer, use `combineSafeReducers` and pass an error handling method.

```js
import combineSafeReducers from 'redux-safe-reducers';

function onError(err) {
   // reducer's error caught
}

const rootReducer = combineSafeReducers({
  <...your reducers>
}, onError);
```

## License

MIT
