import React, {Component} from 'react'

import FhirInteraction from './FhirInteraction'
import conformance from './schemas/conformance'
import patient from './schemas/patient'

export default class Explorer extends Component {
  render () {
    return <div>
      <FhirInteraction {...conformance} />
      <FhirInteraction {...patient} />
    </div>
  }
}
