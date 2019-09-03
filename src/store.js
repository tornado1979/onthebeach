import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './reducers';
import loggerMiddleware from './middlewares/logger'

import data from './data/data.json'
import options from './data/options.json'
import plural from './data/plural.json'

// Initial state
const initialState = {
  data,
  options,
  plural
};

const enhancers = []
const middleware = []

if (process.env.NODE_ENV) {
  middleware.push(loggerMiddleware)
}
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension // eslint-disable-line prefer-destructuring

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(
  rootReducers,
  initialState,
  composedEnhancers,
)

export default store
