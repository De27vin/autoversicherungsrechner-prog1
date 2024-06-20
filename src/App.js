import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "./assets/logo.png";
import Image from "react-bootstrap/Image";
import ImageCarsPicture from "./assets/carsPicture.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

import AudiLogo from "./assets/audi-logo.png";
import BMWLogo from "./assets/bmw-logo.png";
import VWLogo from "./assets/vw-logo.png";
import ToyotaLogo from "./assets/toyota-logo.png";
import HondaLogo from "./assets/honda-logo.png";
import NissanLogo from "./assets/nissan-logo.png";
import FordLogo from "./assets/ford-logo.png";
import HyundaiLogo from "./assets/hyundai-logo.png";
import KiaLogo from "./assets/kia-logo.png";
import MazdaLogo from "./assets/mazda-logo.png";

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

const brandImages = {
  Audi: AudiLogo,
  BMW: BMWLogo,
  VW: VWLogo,
  Toyota: ToyotaLogo,
  Honda: HondaLogo,
  Nissan: NissanLogo,
  Ford: FordLogo,
  Hyundai: HyundaiLogo,
  Kia: KiaLogo,
  Mazda: MazdaLogo,
};

function BigImage() {
  return (
    <div className="d-flex justify-content-center">
      <Image src={ImageCarsPicture} fluid className="big-image" />
    </div>
  );
}

function App() {
  const [show, setShow] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedOffer, setSelectedOffer] = useState("");
  const [models, setModels] = useState([]);
  const [step, setStep] = useState(0);
  const [prename, setPrename] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [licenseDate, setLicenseDate] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setModels(carModels[brand] || []);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleOfferChange = (offer) => {
    setSelectedOffer(offer);
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
              href="#"
              onClick={() => window.location.reload()}
            >
              <img src={logo} alt="Logo" className="logo-image" />
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
              <label className="title-questions">Wähle eine Automarke</label>
              <div className="picture-grid">
                {Object.keys(brandImages).map((brand) => (
                  <img
                    key={brand}
                    src={brandImages[brand]}
                    alt={brand}
                    onClick={() => handleBrandClick(brand)}
                    className={`brand-image ${
                      selectedBrand === brand ? "selected" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
          {step === 1 && selectedBrand && (
            <div className="form-group mt-3">
              <label className="title-questions" htmlFor="modelSelect">
                Wähle ein Automodell
              </label>
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
              <label className="title-questions">Persönliche Daten</label>
              <div className="form-group">
                <label htmlFor="prename">Vorname</label>
                <input
                  type="text"
                  id="prename"
                  className="form-control"
                  value={prename}
                  onChange={(e) => setPrename(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="birthdate">Geburtsdatum</label>
                <input
                  type="date"
                  id="birthdate"
                  className="form-control"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="licenseDate">Datum des Führerscheins</label>
                <input
                  type="date"
                  id="licenseDate"
                  className="form-control"
                  value={licenseDate}
                  onChange={(e) => setLicenseDate(e.target.value)}
                />
              </div>
            </div>
          )}
{step === 3 && (
  <div className="form-group mt-3">
    <label className="title-questions">Wähle ein Angebot</label>
    <div className="offer-container">
      <div className="offer">
        <h5><strong>Budget</strong></h5>
        <text>✔ Haftplicht<br />✘ Halbkasko<br />✘ Vollkasko</text>
        <Button
          variant="outline-primary"
          onClick={() => handleOfferChange("Budget")}
        >
          Auswählen
        </Button>
      </div>
      <div className="offer">
        <h5><strong>Standart</strong></h5>
        <text>✔ Haftplicht<br />✔ Halbkasko<br />✘ Vollkasko</text>
        <Button
          variant="outline-primary"
          onClick={() => handleOfferChange("Standard")}
        >
          Auswählen
        </Button>
      </div>
      <div className="offer">
        <h5><strong>Premium</strong></h5>
        <text>✔ Haftplicht<br />✔ Halbkasko<br />✔ Vollkasko</text>
        <Button
          variant="outline-primary"
          onClick={() => handleOfferChange("Premium")}
        >
          Auswählen
        </Button>
      </div>
    </div>
  </div>
)}
          {step === 4 && selectedOffer && (
            <div className="form-group mt-3">
              <p>Selected Brand: {selectedBrand}</p>
              <p>Selected Model: {selectedModel}</p>
              <p>Selected Offer: {selectedOffer}</p>
              <p>Vorname: {prename}</p>
              <p>Name: {name}</p>
              <p>Geburtsdatum: {birthdate}</p>
              <p>Datum des Führerscheins: {licenseDate}</p>
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
                (step === 2 &&
                  (!prename || !name || !birthdate || !licenseDate)) ||
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
