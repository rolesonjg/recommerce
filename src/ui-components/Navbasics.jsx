import React from 'react'
import "../styles/Navbasics.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbasics = () => {
  return (
    <div className=' contNavbasics'>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" >Re-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{marginRight:"50px"}}>
            <Nav.Link href="#home" style={{paddingRight:"10px"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{paddingRight:"10px"}}>Wishlist</Nav.Link>
            <Nav.Link href="#link " style={{paddingRight:"10px"}}>Add to cart</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navbasics