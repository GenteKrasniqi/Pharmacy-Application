import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">

      <Container>

        <Navbar.Brand as={NavLink} to="/">Pharm Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto custom-menu">
            <NavLink to="/" className='menu-item nav-link'>Home</NavLink>
            <NavLink to="/about" className='menu-item nav-link'>About Us</NavLink>
            <NavLink to="/products" className='menu-item nav-link'>Products</NavLink>
            <NavLink to="/contact-us" className='menu-item nav-link'>Contact & FAQ</NavLink>
            <NavDropdown className='menu-item' title={'User'} id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default Menu;