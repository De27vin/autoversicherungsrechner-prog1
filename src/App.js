import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './assets/logo.png';
import Image from 'react-bootstrap/Image';
import ImageChooseCar from './assets/chooseCar.png';
import ProgressBar from 'react-bootstrap/ProgressBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const carModels = {
  Audi: ['A3', 'A4', 'A6'],
  BMW: ['M3', 'M4', 'M5'],
  VW: ['Polo', 'Golf', 'Up'],
  Toyota: ['Corolla', 'Camry', 'Yaris'],
  Honda: ['Civic', 'Accord', 'Jazz'],
  Nissan: ['Altima', 'Sentra', 'Versa'],
  Ford: ['Focus', 'Fusion', 'Mustang'],
  Hyundai: ['Elantra', 'Sonata', 'Accent'],
  Kia: ['Optima', 'Sorento', 'Rio'],
  Mazda: ['MX-5', '6', 'CX-5']
};

function BigImage() {
  return (
    <div className="d-flex justify-content-center">
      <Image src={ImageChooseCar} fluid className='big-image'/>
    </div>
  );
}


function App() {
  const [show, setShow] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [models, setModels] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    setModels(carModels[brand] || []);
  };

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

        <BigImage/>

        <div className='d-flex justify-content-center'>
          <ProgressBar now={20} className='progress-bar'/> {/* Funktioniert noch nicht! label={`${now}%`} */}
        </div>

        <div className="container">
          <div className="form-group mt-3">
            <select id="brandSelect" className="form-control" onChange={handleBrandChange}>
              <option value="">Wähle eine Automarke</option>
              {Object.keys(carModels).map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          {selectedBrand && (
            <div className="form-group mt-3">
              <select id="modelSelect" className="form-control">
                <option value="">Wähle ein Automodell</option>
                {models.map((model) => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>
          )}
        </div>

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
