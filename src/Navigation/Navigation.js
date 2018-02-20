import React, {Component} from 'react'
import {Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap'
import {NavLink} from 'redux-first-router-link'
import {push} from 'redux-first-router'

import {HOME, EXPLORER, AGGREGATOR} from '../routes'

const navLinks = [EXPLORER, AGGREGATOR]
export default class Navigation extends Component {
  render () {
    return <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to={HOME.path}>
            <Glyphicon glyph="fire" />{` `}{HOME.label}
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>
        {navLinks.map((link, i) =>
          <NavItem key={i} onClick={() => push(link.path)}>
            {link.label}
          </NavItem>
        )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  }
}

