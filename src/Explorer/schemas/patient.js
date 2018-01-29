import {createLabeledDefaultedProperties, keys, values} from './schemaCustomizer'

import METHOD from './METHOD'
import _FORMAT from './_FORMAT'
const QUERY_PARAMETERS = {
  _id: ``,
  birthdate: ``,
  deceased: ``,
  gender: ``,
  given: ``,
  family: ``
}

const schema = {
  title: `Patient Interactions`,
  type: `object`,
  required: [`url`, `method`],
  properties: {
    url: { type: `string`, default: `https://fhirtest.uhn.ca/baseDstu3/https://fhirtest.uhn.ca/baseDstu3/Patient` },
    method: {
      type: `string`,
      enum: values(METHOD),
      enumNames: keys(METHOD),
      default: METHOD.GET
    },
    query: {
      type: `object`,
      properties: {
        _format: {type: `string`, title: `_format`, default: _FORMAT.JSON},
        ...createLabeledDefaultedProperties(QUERY_PARAMETERS),
      }
    },
    body: {type: `string`, title: null}
  }
}

const uiSchema = {
  url: {'ui:disabled': true},
  method: {'ui:widget': `radio`, 'ui:options': {inline: true}},
  body: {'ui:widget': `textarea`, 'ui:options': {rows: 10}}
}

const formData = {}

export default {schema, uiSchema, formData}
