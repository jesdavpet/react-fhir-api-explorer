import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import explorer from './Explorer/explorer.reducer'

export default createStore(
  explorer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

