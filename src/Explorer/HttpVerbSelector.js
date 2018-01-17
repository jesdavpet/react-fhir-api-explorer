import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

import HTTP_VERBS from './HTTP_VERBS'

class HttpVerbSelector extends Component {
  render () {
    const { defaultVerb = ``, disabled = false } = this.props
    const Verbs = Object.keys(HTTP_VERBS)
    return <ButtonGroup>
      {Verbs.map((verb, i) => (
        <Button key={i} disabled={disabled} active={verb === defaultVerb}>{verb}</Button>)
      )}
    </ButtonGroup>
  }
}

export default HttpVerbSelector
