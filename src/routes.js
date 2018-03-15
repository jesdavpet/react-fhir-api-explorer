import {keys, zipObj} from 'ramda'

export const HOME = {path: `/`, label: `HL7/FHIR Crash Course`}
export const EXPLORER = {path: `/explorer`, label: `Explore a FHIR API`}
export const AGGREGATOR = {path: `/aggregator`, label: `Visualize FHIR Data`}

export const routes = {HOME, EXPLORER, AGGREGATOR}
export const routeActions = zipObj(keys(routes), keys(routes))

export default routes
