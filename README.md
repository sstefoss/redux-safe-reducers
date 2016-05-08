Redux Safe Reducers
=============

```js
npm install --save redux-safe-reducers
```

```js
import combineSafeReducers from 'redux-safe-reducers'
```

## Why Do I Need This?

redux-safe-reducers gives you the ability to catch errors that occur inside your reducers.


## Installation

To enable safe reducers instead of using `combineReducers` you just need to import `combineSafeReducers` and use it. Example:

```js
import combineSafeReducers from 'redux';

function handler(err) {
   // reducer error caught
}

const rootReducer = combineSafeReducers({
  <your other reducers>
}, handler);
```

## License

MIT
