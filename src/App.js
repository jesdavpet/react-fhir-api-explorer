import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
// import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Grid>
    )
  }
}

export default App
