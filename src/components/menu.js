import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

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
        <Navbar.Brand href="/">Pharm Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-menu">
            <Nav.Link href="/" className='menu-item'>Home</Nav.Link>
            <Nav.Link href="/shop" className='menu-item'>About</Nav.Link>
            <Nav.Link href="/shop" className='menu-item'>Products</Nav.Link>
            <Nav.Link href="/shop" className='menu-item'>Pharmacist</Nav.Link>
            <Nav.Link href="/shop" className='menu-item'>Contact Us</Nav.Link>
            {/* <Nav.Link href="/cart">Cart ({cart.length})</Nav.Link> */}
            <NavDropdown className='menu-item' title={(isLoggedIn == null) ? 'Guest' : isLoggedIn.email} id="basic-nav-dropdown">
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

export default Menu