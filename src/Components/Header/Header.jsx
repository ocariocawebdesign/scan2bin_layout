import React from "react";
//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import LogoEscuro from "./img/logo-escuro.png";
import TranslateButton from "../TranslateButton/TranslateButton";
//import { Link } from "gatsby"

function Header() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary" style={{}}>
      <Container>
        <Navbar.Brand href="#" style={{ padding: "0.5rem" }}>
          <img src={LogoEscuro} width="140" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse style={{}} id="navbarScroll">
          <Nav
            id="menu"
            className="me-auto my-2 my-lg-0 text-uppercase "
            style={{
              maxHeight: "100px",
              fontSize: "12px",
              marginLeft: "10rem",
              fontWeight: "700",
            }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="sobre">Sobre nós</Nav.Link>
            <Nav.Link href="solucoes">Soluções</Nav.Link>
            <Nav.Link href="recursos">Recursos</Nav.Link>
            <Nav.Link href="contato">Contato</Nav.Link>
            <Nav.Link href="contato">
              <span
                className=""
                style={{
                  backgroundColor:"#333",
                  padding: "5px 10px",
                  color: "#FDDB00",
                  fontSize: "10px",
                  margin: "0",
                  fontWeight: "800",
                  borderRadius: "5px",
                }}
              >
                SOLICITAR ORÇAMENTO
              </span>
            </Nav.Link>
          </Nav>
          <TranslateButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
