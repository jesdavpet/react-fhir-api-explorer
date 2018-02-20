import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import Root from './Root'
import Navigation from './Navigation'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Navigation />
      <Root />
    </div>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

