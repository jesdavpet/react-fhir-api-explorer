import React, {Component} from 'react'
import {Button, Glyphicon, Panel} from 'react-bootstrap'

import FhirInteraction from './FhirInteraction'
import InteractionSelector from './InteractionSelector'

export default class Explorer extends Component {
  render () {
    return <div>
      {this.props.explorer.map((interaction, i) =>
        <Panel key={i} defaultExpanded>
          <Panel.Heading>
            {interaction.schema.title}
            <Button
              bsSize="small"
              bsStyle="danger"
              onClick={this.props.deleteInteraction.bind(null, i)}
            >
              <Glyphicon glyph="trash" />
            </Button>
          </Panel.Heading>

          <Panel.Body>
            <FhirInteraction
              {...interaction}
              onSubmit={this.props.fetchFhirInto(i)}
            />
          </Panel.Body>
        </Panel>
      )}

      <Panel>
        <Panel.Body>
          <InteractionSelector
            addInteraction={this.props.addInteraction}
          />
        </Panel.Body>
      </Panel>
    </div>
  }
}

