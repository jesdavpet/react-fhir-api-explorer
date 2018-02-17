import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import FhirRequest from './FhirRequest'
import FhirResponse from './FhirResponse'

export default class FhirInteraction extends Component {
  EMPTY_RESPONSE = {status: 0, data: `Please submit a FHIR request using the explorer form.`}
  render () {
    return <Grid>
      <Row>
        <Col xs={12}>
          <FhirRequest {...this.props} onSubmit={this.props.onSubmit}/>
        </Col>

        <Col xs={12}>
          <FhirResponse response={this.props.response || this.EMPTY_RESPONSE} />
        </Col>
      </Row>
    </Grid>
  }
}

