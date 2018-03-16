import React, { Component } from 'react'
import { Alert, Col, Grid, Row } from 'react-bootstrap'

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

        {
          this.props.error
          ? <Col xs={12}>
              <Alert bsStyle="danger">{this.props.error}</Alert>
            </Col>
          : this.props.response
          ? <Col xs={12}>
              <FhirResponse response={this.props.response || this.EMPTY_RESPONSE} />
            </Col>
          : null
        }
      </Row>
    </Grid>
  }
}

