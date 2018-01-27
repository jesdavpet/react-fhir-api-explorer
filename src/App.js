import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import Cover from './Cover'
import Presentation from './Presentation'
import Explorer from './Explorer'
import Aggregator from './Aggregator'
import Thanks from './Thanks'
import Appendix from './Appendix'
import NotFound from './NotFound'

class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <HashRouter hashType="hashbang">
          <Switch>
            <Route exact path="/" component={Cover}/>
            <Route exact path="/presentation" component={Presentation} />
            <Route exact path="/explorer" component={Explorer} />
            <Route exact path="/aggregator" component={Aggregator} />
            <Route exact path="/thanks" component={Thanks} />
            <Route exact path="/appendix" component={Appendix} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </Grid>
    )
  }
}

export default App
