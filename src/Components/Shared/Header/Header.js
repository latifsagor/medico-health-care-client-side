import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              LogIn
            </Nav.Link>
            <Navbar.Text>
              Signed in as: <a href="#login"> Name </a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
