import React, { Component } from 'react'
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

import HTTP_VERBS from './HTTP_VERBS'
import HttpVerbSelector from './HttpVerbSelector'
import UrlQueryKeyValueInput from './UrlQueryKeyValueInput'

class Explorer extends Component {
  render () {
    return <form>
      <FormGroup>
        <ControlLabel>HTTP Verb:</ControlLabel>
        <br />
        <HttpVerbSelector defaultVerb={HTTP_VERBS.GET} />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Query Parameters:</ControlLabel>
        <br />
        <UrlQueryKeyValueInput keyName="cats" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Body:</ControlLabel>
        <br />
        <FormControl componentClass="textarea" placeholder="textarea" />
      </FormGroup>
    </form>
  }
}

export default Explorer
