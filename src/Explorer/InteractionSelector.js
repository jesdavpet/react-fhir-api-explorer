import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

import Metadata from './schemas/Metadata'
import Patient from './schemas/Patient'

const interactions = [
  {label: `Metadata`, schema: Metadata},
  {label: `Patient`, schema: Patient}
]

export default class InteractionSelector extends Component {
  render () {
    return <div>
      {interactions.map(({label, schema}, i) =>
        <Button key={i} onClick={this.props.addInteraction.bind(this, schema)}>
          {label}
        </Button>
      )}
    </div>
  }
}

