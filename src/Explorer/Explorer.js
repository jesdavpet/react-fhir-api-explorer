import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap'
import { keys, values, mapObjIndexed, map } from 'ramda'

const keyLabelInput = (v, k) => ({ type: "string", title: `${k}`, default: `${v}` })

const HTTP_VERBS = { GET: `GET`, POST: `POST`, OPTIONS: `OPTIONS` }
const MIME_TYPES = { JSON: `application/json`, XML: `application/xml` }
const QUERY_PARAMETERS = { alakazam: ``, bubble: ``, cauldron: `` }

const schema = {
  title: "FHIR Request",
  type: "object",
  required: ["method"],
  properties: {
    method: {type: "string", title: "Verb", enum: values(HTTP_VERBS), enumNames: keys(HTTP_VERBS), default: HTTP_VERBS.GET },
    query: {
      type: "object",
      "properties": {
        _mimeType: { type: "string", title: "_mimeType", default: MIME_TYPES.JSON },
        ...mapObjIndexed(keyLabelInput, QUERY_PARAMETERS),
      }
    },
    body: {type: "string", title: "Body" }
  }
}
const LabelAsInputAddon = props => {
  console.log(props)
  return <FormGroup>
    <InputGroup>
      <InputGroup.Addon>{props.label}=</InputGroup.Addon>
      <FormControl type="text" required={props.required} value={props.value} onChange={(event) => props.onChange(event.target.value)}/>
    </InputGroup>
  </FormGroup>
}

const uiSchema = {
  method: {"ui:widget": "radio", "ui:options": { inline: true } },
  query: { ...map(
    () => ({ "ui:widget": LabelAsInputAddon, "ui:options": { label: false } }),
    schema.properties.query.properties
  )},
  body: { "ui:widget": "textarea", "ui:options": { rows: 15 } },
}

const log = (type) => console.log.bind(console, type)

export default class Explorer extends Component {
  render () {
    return <Form schema={schema} uiSchema={uiSchema} formData={{}}
            onChange={log("changed")}
            onSubmit={log("submitted")}
            onError={log("errors")} />    
  }
}
