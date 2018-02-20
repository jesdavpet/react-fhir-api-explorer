import React, {Component} from 'react'
import {Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap'
import {NavLink} from 'redux-first-router-link'
import {push} from 'redux-first-router'

import {HOME, AGGREGATOR, EXPLORER} from '../routes'

const homeLink = {path: HOME, label: `HL7/FHIR Crash Course`, glyph: `fire`}
const explorerLink = {path: EXPLORER, label: `Explore a FHIR API`}
const aggregatorLink =  {path: AGGREGATOR, label: `Visualize FHIR Data`}

const sectionLinks = [explorerLink, aggregatorLink]

export default class Navigation extends Component {
  render () {
    return <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to={homeLink.path}>
            <Glyphicon glyph={homeLink.glyph} />{` `}{homeLink.label}
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>
        {sectionLinks.map((link, i) =>
          <NavItem key={i} onClick={() => push(link.path)}>
            {link.label}
          </NavItem>
        )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  }
}

