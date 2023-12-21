import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
function Menu() {
  const [cart, setCart] = useLocalStorage('cart', [])
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isloggedin')
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLoggedIn(null)
    navigate("/");
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Pharm Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-menu">
            <NavLink to="/" className='menu-item nav-link'>Home</NavLink>
            <NavLink to="/about" className='menu-item nav-link'>About</NavLink>
            <NavLink to="/products" className='menu-item nav-link'>Products</NavLink>
            <NavLink to="/contact-us" className='menu-item nav-link'>Contact</NavLink>
            {/* <NavLink to="/cart" className='menu-item nav-link'>Cart ({cart.length})</NavLink> */}
            <NavDropdown className='menu-item' title={(isLoggedIn == null) ? 'User' : isLoggedIn.email} id="basic-nav-dropdown">
              {
                (isLoggedIn == null) ? <>
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                </> : <>
                  <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </>
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu;