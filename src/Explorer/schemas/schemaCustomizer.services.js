import {keys, values, mapObjIndexed} from 'ramda'

/** Creates a schema property map using key as title, value as default.
    @param {Object}
    @returns {Object} */
const createLabeledDefaultedProperties = mapObjIndexed(
  (v, k) => ({type: `string`, title: `${k}`, default: `${v}`})
)

/** @function keys Creates an array of all keys belonging to an object.
    @param {Object}
    @returns {Array<String>} */

/** @function values Creates an array of all values belonging to an object.
    @param {Object}
    @returns {Array<*>} */

export {createLabeledDefaultedProperties, keys, values}
