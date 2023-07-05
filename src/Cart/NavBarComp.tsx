import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBarComp() {

  // state.cart is used to collect data from the Slice 
  let totalcount = useSelector((state:any)=>state.cart)


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Redux shopping Test</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to={'/'} as={Link}>Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
            <Nav.Link to='/cart' as={Link}>My Bag {totalcount.length}</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp