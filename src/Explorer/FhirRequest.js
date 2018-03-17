import React, {Component} from 'react'
import Form from 'react-jsonschema-form'
import {Button, Glyphicon} from 'react-bootstrap'

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
      {/* TODO: Factor out inline HTML styles. */}
      <style>
      {`
        #root_query__title {
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          border: none;
          margin-bottom: 5px;
        }
        .rotate-fancy-pants {
          -webkit-animation: spin 2s infinite linear;
          -moz-animation: spin 2s infinite linear;
          -o-animation: spin 2s infinite linear;
          animation: spin 2s infinite linear;
        }
        @-moz-keyframes spin {
          0% {
            -moz-transform: rotate(0deg);
          }
          100% {
            -moz-transform: rotate(359deg);
          }
        }
        @-webkit-keyframes spin {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(359deg);
          }
        }
        @-o-keyframes spin {
          0% {
            -o-transform: rotate(0deg);
          }
          100% {
            -o-transform: rotate(359deg);
          }
        }
        @keyframes spin {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
          }
        }
      `}
      </style>

      <Form
      {...alteredProps}
      onChange={log("changed")}
      onSubmit={this.props.onSubmit}
      onError={log("errors")}>
        <Button type="submit" bsStyle="info" disabled={this.props.isLoading}>
          {this.props.schema.title}
          {` `}
          {
            this.props.isLoading
            ? <Glyphicon glyph="repeat" className="rotate-fancy-pants" />
            : <Glyphicon glyph="transfer" />
          }
        </Button>
      </Form>
    </div>
  }
}
