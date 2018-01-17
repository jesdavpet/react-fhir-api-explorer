import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import Cover from './Cover'
import NotFound from './NotFound'

class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <HashRouter hashType="hashbang">
          <Switch>
            <Route exact path="/" component={Cover} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </Grid>
    )
  }
}

export default App
