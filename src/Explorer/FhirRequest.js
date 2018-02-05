import React, {Component} from 'react'
import Form from 'react-jsonschema-form'

import FhirQueryParameter from './FhirQueryParameter'
import {widgetizeAllProperties} from './schemas/uiSchemaCustomizer'

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

    const naiiveRequest = (req) => {
      const {url} = req.formData
      fetch(url, req.formData)
        .then(res => res.json())
        .then(res => console.info(JSON.stringify(res, null, 2)))
        .catch(console.warn)
    }

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
            onSubmit={naiiveRequest}
            onError={log("errors")} />
    </div>
  }
}
