import React from 'react';
import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import 'scss/nav.scss';
import Logo from 'img/sse-logo.png';

const SSENav = props => (
  <Navbar color="faded" className="navbar-sse" light toggleable>
    <NavbarToggler right onClick={props.toggle} />
    <NavbarBrand tag={Link} to="/">
      <img src={Logo} alt="SSE Logo" />
    </NavbarBrand>
    <Collapse isOpen={props.opened} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/events" activeClassName="active">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/projects" activeClassName="active">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/mentoring" activeClassName="active">Mentoring</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about" activeClassName="active">About</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

SSENav.propTypes = {
  opened: React.PropTypes.bool.isRequired,
  toggle: React.PropTypes.func.isRequired,
};

export default SSENav;
