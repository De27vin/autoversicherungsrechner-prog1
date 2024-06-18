import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "./assets/logo.png";
import Image from "react-bootstrap/Image";
import ImageChooseCar from "./assets/chooseCar.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const carModels = {
  Audi: ["A3", "A4", "A6"],
  BMW: ["M3", "M4", "M5"],
  VW: ["Polo", "Golf", "Up"],
  Toyota: ["Corolla", "Camry", "Yaris"],
  Honda: ["Civic", "Accord", "Jazz"],
  Nissan: ["Altima", "Sentra", "Versa"],
  Ford: ["Focus", "Fusion", "Mustang"],
  Hyundai: ["Elantra", "Sonata", "Accent"],
  Kia: ["Optima", "Sorento", "Rio"],
  Mazda: ["MX-5", "6", "CX-5"],
};

function BigImage() {
  return (
    <div className="d-flex justify-content-center">
      <Image src={ImageChooseCar} fluid className="big-image" />
    </div>
  );
}

function App() {
  const [show, setShow] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedOffer, setSelectedOffer] = useState("");
  const [models, setModels] = useState([]);
  const [step, setStep] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    setModels(carModels[brand] || []);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleOfferChange = (event) => {
    setSelectedOffer(event.target.value);
  };

  const handleBackClick = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleContinueClick = () => {
    if (step < 4) setStep(step + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar sticky="bottom" expand="lg" className="bg-body-tertiary">
          <Container fluid className="px-3">
            <Navbar.Brand
              className="me-auto d-flex align-items-center"
              href="#home"
            >
              <img src={logo} href="App.js" alt="Logo" className="logo-image" />
            </Navbar.Brand>
            <div className="ms-auto">
              <Navbar.Collapse id="basic-navbar-nav" align="end">
                <Nav className="ms-auto">
                  <Nav.Link onClick={handleShow}>
                    <i className="fas fa-bars fa-2x"></i>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>

        <div className="custom-divider my-3 mx-auto"></div>

        <BigImage />

        <div className="d-flex justify-content-center">
          <ProgressBar now={(step + 1) * 25} className="progress-bar" />
        </div>

        <div className="container">
          {step === 0 && (
            <div className="form-group mt-3">
              <label htmlFor="brandSelect">Wähle eine Automarke</label>
              <select
                id="brandSelect"
                className="form-control"
                onChange={handleBrandChange}
              >
                <option value="">Wähle eine Automarke</option>
                {Object.keys(carModels).map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          )}
          {step === 1 && selectedBrand && (
            <div className="form-group mt-3">
              <label htmlFor="modelSelect">Wähle ein Automodell</label>
              <select
                id="modelSelect"
                className="form-control"
                onChange={handleModelChange}
              >
                <option value="">Wähle ein Automodell</option>
                {models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
          )}
          {step === 2 && selectedModel && (
            <div className="form-group mt-3">
              <label htmlFor="colorSelect">Wähle eine Farbe</label>
              <select
                id="colorSelect"
                className="form-control"
                onChange={handleColorChange}
              >
                <option value="">Wähle eine Farbe</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </div>
          )}
          {step === 3 && selectedColor && (
            <div className="form-group mt-3">
              <label htmlFor="offerSelect">Wähle ein Angebot</label>
              <select
                id="offerSelect"
                className="form-control"
                onChange={handleOfferChange}
              >
                <option value="">Wähle ein Angebot</option>
                <option value="Offer1">Offer 1</option>
                <option value="Offer2">Offer 2</option>
                <option value="Offer3">Offer 3</option>
              </select>
            </div>
          )}
          {step === 4 && selectedOffer && (
            <div className="form-group mt-3">
              <p>Selected Brand: {selectedBrand}</p>
              <p>Selected Model: {selectedModel}</p>
              <p>Selected Color: {selectedColor}</p>
              <p>Selected Offer: {selectedOffer}</p>
            </div>
          )}
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="secondary"
              onClick={handleBackClick}
              disabled={step === 0}
            >
              Zurück
            </Button>
            <Button
              variant="primary"
              onClick={handleContinueClick}
              disabled={
                (step === 0 && !selectedBrand) ||
                (step === 1 && !selectedModel) ||
                (step === 2 && !selectedColor) ||
                (step === 3 && !selectedOffer)
              }
            >
              Weiter
            </Button>
          </div>
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
