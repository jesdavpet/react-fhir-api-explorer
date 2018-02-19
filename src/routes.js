import {keys, zipObj} from 'ramda'

export const HOME = `/`
export const EXPLORER = `/explorer`
export const AGGREGATOR = `/aggregator`

const routes = {HOME, EXPLORER, AGGREGATOR}

export const routeActions = zipObj(keys(routes), keys(routes))

export default routes
