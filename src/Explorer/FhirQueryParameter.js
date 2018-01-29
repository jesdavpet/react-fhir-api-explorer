import React from 'react'
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap'

const FhirQueryParameter = (props) => {
  return <FormGroup>
    <InputGroup>
      <InputGroup.Addon>{props.label}=</InputGroup.Addon>
      <FormControl type="text" required={props.required} value={props.value} onChange={(event) => props.onChange(event.target.value)}/>
    </InputGroup>
  </FormGroup>
}

export default FhirQueryParameter
