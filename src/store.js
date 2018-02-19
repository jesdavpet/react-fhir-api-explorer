import {applyMiddleware, combineReducers, createStore} from 'redux'
import {connectRoutes} from 'redux-first-router'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import createHashHistory from 'history/createHashHistory'

import routes from './routes'
import routing from './routing.reducer'
import explorer from './Explorer/explorer.reducer'

const history = createHashHistory({hashType: `hashbang`})

const {
  reducer: location,
  middleware: locationMiddleware,
  enhancer: locationEnhancer
} = connectRoutes(history, routes)

const reducers = combineReducers({explorer, location, routing})
const middlewares = applyMiddleware(thunk, locationMiddleware)

export default createStore(
  reducers,
  composeWithDevTools(locationEnhancer, middlewares)
)

