import {NOT_FOUND} from 'redux-first-router'

import {routeActions} from './routes'

const {HOME, AGGREGATOR, EXPLORER} = routeActions

export default (state = null, action = {}) => {
  switch (action.type) {
    case HOME:
    case AGGREGATOR:
    case EXPLORER:
      console.info(`${action.type} -> ${action.type}`)
      return action.type

    case NOT_FOUND:
    default:
      console.info(action.type)
      return state
  }
}

