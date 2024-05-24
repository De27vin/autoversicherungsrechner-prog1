import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar sticky="bottom" expand="lg" className="bg-body-tertiary">
          <Container fluid className="px-3">
            <Navbar.Brand className="me-auto d-flex align-items-center" href="#home">
              <img src={logo} href="App.js" alt="Logo" className='logo-image'/> 
            </Navbar.Brand>
            <div className='ms-auto'>
            <Navbar.Collapse id="basic-navbar-nav" align="end">
              <Nav className="ms-auto">
                <Nav.Link onClick={handleShow}><i className="fas fa-bars fa-2x"></i></Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>

        <div className="custom-divider my-3 mx-auto"></div>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menü</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              <Nav.Link href="#">Punkt1</Nav.Link>
              <Nav.Link href="#">Punkt2</Nav.Link>
              <Nav.Link href="#">Punkt3</Nav.Link>
              <Nav.Link href="#">Punkt4</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </div>
  );
}

export default App;
