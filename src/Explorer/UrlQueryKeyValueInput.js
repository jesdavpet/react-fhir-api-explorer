import React, { Component } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

class UrlQueryKeyValueInput extends Component {
  render () {
    return <InputGroup>
      <InputGroup.Addon>{this.props.keyName}=</InputGroup.Addon>
      <FormControl type="text" />
    </InputGroup>
  }
}

export default UrlQueryKeyValueInput
