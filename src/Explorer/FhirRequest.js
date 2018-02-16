import React, {Component} from 'react'
import Form from 'react-jsonschema-form'

import FhirQueryParameter from './FhirQueryParameter'
import {widgetizeAllProperties} from './schemas/uiSchemaCustomizer.services'

const widgetizeQuery = widgetizeAllProperties(FhirQueryParameter)
export default class FhirRequest extends Component {
  render () {
    const formattedUiSchema = {
      ...this.props.uiSchema,
      query: widgetizeQuery(this.props.uiSchema.query) 
    }

    const alteredProps = {
      ...this.props,
      uiSchema: formattedUiSchema
    }

    const log = (type) => console.log.bind(console, type)

    return <div>
      <style>
      {`
        #root_query__title {
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          border: none;
          margin-bottom: 5px;
        }
      `}
      </style>

      <Form
      {...alteredProps}
      onChange={log("changed")}
      onSubmit={this.props.onSubmit}
      onError={log("errors")}
      />
    </div>
  }
}
