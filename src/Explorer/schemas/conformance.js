import {createLabeledDefaultedProperties} from './schemaCustomizer'

import METHOD from './METHOD'
import _FORMAT from './_FORMAT'
const QUERY_PARAMETERS = {}

const schema = {
  title: `Conformance Metadata`,
  type: `object`,
  required: [`url`, `method`],
  properties: {
    url: { type: `string`, default: `https://fhirtest.uhn.ca/baseDstu3/metadata` },
    method: {
      type: `string`,
      enum: [METHOD.GET],
      enumNames: [METHOD.GET],
      default: METHOD.GET
    },
    query: {
      type: `object`,
      properties: {
        _format: {type: `string`, default: _FORMAT.JSON},
        ...createLabeledDefaultedProperties(QUERY_PARAMETERS)
      }
    }
  }
}

const uiSchema = {
  url: {'ui:disabled': true},
  method: {'ui:widget': `radio`, 'ui:options': {inline: true}},
}

const formData = {}

export default {schema, uiSchema, formData}
