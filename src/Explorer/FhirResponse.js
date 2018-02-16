import React, { Component } from 'react'
import { Label } from 'react-bootstrap'

export default class FhirResponse extends Component {
  render () {
    console.log(this.props)
    const { status, data } = this.props.response
    return (!status && !data)
      ? <div>...</div>
      : <div>
          <h4>
            <Label bsStyle={
              !status ? `default` : status < 300 ? `success` : `danger`
            }>
              {status || `N/A`}
            </Label>
          </h4>

          <pre>{JSON.stringify(data, null, 2) || `N/A`}</pre>
        </div>
  }
}
