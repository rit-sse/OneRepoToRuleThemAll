import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import 'scss/nav.scss';
import Logo from 'img/sse-logo.png';

class SSENav extends Component {
  static propTypes = {
    opened: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

  state = {
    opened: false,
  };

  toggle = () => {
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    const {
      toggle,
      opened,
    } = this.props;

    return (
      <Navbar color="faded" className="navbar-sse" light expand="sm">
        <NavbarBrand tag={Link} to="/">
          <img src={Logo} alt="SSE Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={opened} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/events">Events</NavLink>
            </NavItem>
            {/*
            <NavItem>
              <NavLink tag={Link} to="/mentoring">Mentoring</NavLink>
            </NavItem>
            */}
            <NavItem>
              <NavLink tag={Link} to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/go">Go Links</NavLink>  
            </NavItem> 
            <Dropdown nav isOpen={this.state.opened} toggle={this.toggle}>
              <DropdownToggle nav caret>
                About
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/about">About the SSE</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/officers">Officers</DropdownItem>
                <DropdownItem tag={Link} to="/governing-docs/constitution">SSE Constitution</DropdownItem>
                <DropdownItem tag={Link} to="/governing-docs/primary-officers-policy">SSE Primary Officers&apos; Policy</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default SSENav;
