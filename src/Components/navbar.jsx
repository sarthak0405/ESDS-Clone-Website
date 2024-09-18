import React from 'react'
import "./nv.css"
// import "../App.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import im from "../Assets/logo.png"


const Navbar1 = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:"background-color: rgba(0, 0, 0, 0.29);" , margin:"0", padding:"0", width:"100%"}}>
      <Container fluid   className='bg1 fixed-top'>
        <Navbar.Brand href="#home"><img src={im} alt="" width={"120px"} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav togglebtn" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar">
            <Nav.Link href="/" style={{color:"white"}} className="navele">Home</Nav.Link>
            <Nav.Link href="/service" style={{color:"white"}}  className="navele">Services</Nav.Link>
            <Nav.Link href="/about" style={{color:"white"}} className="navele">About</Nav.Link>
            
            <Nav.Link href="/contact" style={{color:"white"}} className="navele">Contact</Nav.Link>
            
          </Nav>
          <Button variant="primary" href='/contact' className='btn joinusbtn'>Join Us</Button>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
      </>
  )
}

export default Navbar1