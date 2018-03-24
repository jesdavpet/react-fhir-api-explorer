import React, { Component } from 'react'
import {NavLink} from 'redux-first-router-link'
import {
  Button,
  Col,
  Grid,
  Glyphicon,
  Jumbotron,
  Row
} from 'react-bootstrap'

import {EXPLORER, AGGREGATOR} from '../routes'

class Cover extends Component {
  render() {
    return <Grid>
      <Row>
        <Col horizontal-align="right">
          <h1>Intro to HL7/FHIR for Beginners</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Jumbotron>
            <section>
              <p>
                Start with a <NavLink to={EXPLORER.path}>step-by-step tutorial</NavLink> guiding you through simple interactions with ReSTful FHIR APIs.
                Then <NavLink to={AGGREGATOR.path}>visualize</NavLink> recently submitted FHIR data in an aggregate view.
                Finally, when you&apos;re ready, <NavLink to={EXPLORER.path}>start exploring</NavLink> common FHIR APIs on your own.
              </p>
            </section>

            <section>
              <Button bsStyle="primary" bsSize="lg">
                Let&apos;s Get Started{` `}<Glyphicon glyph="arrow-right" />
              </Button>
            </section>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3><Glyphicon glyph="globe" />{` `}www.short.url/goes-here</h3>
        </Col>
      </Row>
    </Grid>
  }
}

export default Cover

