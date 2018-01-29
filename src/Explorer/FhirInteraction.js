import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import FhirRequest from './FhirRequest'
import FhirResponse from './FhirResponse'

export default class Explorer extends Component {
  render () {
    return <Grid>
      <Row>
        <Col xs={6}>
          <FhirRequest {...this.props} />
        </Col>

        <Col xs={6}>
          <FhirResponse response={{status: 0, data: ``}} />
        </Col>
      </Row>
    </Grid>
  }
}
