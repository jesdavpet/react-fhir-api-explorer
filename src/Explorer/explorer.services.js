import {ifElse, pick, propEq} from 'ramda'

/** @private */
const GET_PROPERTIES = [`headers`, `method`, `query`]
const NON_GET_PROPERTIES = [`body`, ...GET_PROPERTIES]

/** @private @param {Object} @returns {Boolean} */
const isMethodGet = propEq(`method`, `GET`)

/** @private @param {Object} @returns {Object} */
const getSafeOptions = ifElse(
  isMethodGet,
  pick(GET_PROPERTIES),
  pick(NON_GET_PROPERTIES)
)

/** Fetches a FHIR request. @param {Object} request @returns {Promise} */
export const fetchFhir = request =>
  fetch(request.formData.url, getSafeOptions(request.formData))
    .then(response => response)

