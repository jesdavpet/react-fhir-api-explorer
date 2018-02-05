import React, {Component} from 'react'

import FhirInteraction from './FhirInteraction'
import Metadata from './schemas/Metadata'
import Patient from './schemas/Patient'

export default class Explorer extends Component {
  render () {
    return <div>
      <FhirInteraction {...Metadata} />
      <FhirInteraction {...Patient} />
    </div>
  }
}
