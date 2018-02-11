import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import FhirRequest from './FhirRequest'
import FhirResponse from './FhirResponse'

export default class FhirInteraction extends Component {
  render () {
    return <Grid>
      <Row>
        <Col xs={6}>
          <FhirRequest {...this.props} />
        </Col>

        <Col xs={6}>
          <FhirResponse response={{status: 321, data: `{"Wow": "So Doge"}`}} />
        </Col>
      </Row>
    </Grid>
  }
}

