import React from 'react';
import { Link } from 'react-router-dom';
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
          <NavLink tag={Link} to="/go">Go</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/events">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/qbd">QDB</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/scoreboard">Scoreboard</NavLink>
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
