import React, {Component} from 'react'
import Form from 'react-jsonschema-form'
import {map} from 'ramda'

import FhirQueryParameter from './FhirQueryParameter'

export default class FhirRequest extends Component {
  render () {
    const widgetQueryProperties = {...map(
      (p) => {
        p["ui:widget"] = FhirQueryParameter
        p["ui:options"] = {label: false}
        return p
      },
      this.props.schema.properties.query.properties
    )}

    const formattedUiSchema = {
      ...this.props.uiSchema,
      query: widgetQueryProperties
    }

    const alteredProps = {
      ...this.props,
      uiSchema: formattedUiSchema
    }

    const log = (type) => console.log.bind(console, type)

    return <div>
      <style>{
        `#root_query__title {
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          border: none;
          margin-bottom: 5px;
      }`}</style>
      <Form {...alteredProps}
            onChange={log("changed")}
            onSubmit={log("submitted")}
            onError={log("errors")} />
    </div>
  }
}
