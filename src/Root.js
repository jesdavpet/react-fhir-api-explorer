import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {HashRouter, Route, Switch} from 'react-router-dom'
// import {Grid} from 'react-bootstrap'

import {routeActions} from './routes'
import Cover from './Cover'
import Explorer from './Explorer'
import Aggregator from './Aggregator'
import NotFound from './NotFound'
import Navigation from './Navigation'

const {HOME, AGGREGATOR, EXPLORER} = routeActions

class Root extends Component {
  render() {
    switch (this.props.routing) {
      case HOME: return <Cover />
      case EXPLORER: return <div><Navigation /><Explorer /></div>
      case AGGREGATOR: return <div><Navigation /><Aggregator /></div>
      default: return <div><Navigation /><NotFound /></div>
    }
  }
}

/* Connects to redux store and reducers, without Component knowing how. */
export default connect(
  state => ({routing: state.routing})
  /*,
  dispatch => bindActionCreators(
    {
      addInteraction,
      deleteInteraction,
      fetchFhirInto,
      updateInteraction
    },
    dispatch
  )
  */
)(Root)

