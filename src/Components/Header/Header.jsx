import React from "react";
//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import LogoLight from "./img/logo.png";
import TranslateButton from "../TranslateButton/TranslateButton";

function Header() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary" style={{}}>
      <Container>
        <Navbar.Brand href="#" style={{ padding: "0.5rem" }}>
          <img src={LogoLight} width="120" alt="Logo Firepay" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse style={{}} id="navbarScroll">
          <Nav
            id="menu"
            className="me-auto my-2 my-lg-0 text-uppercase "
            style={{
              maxHeight: "100px",
              fontSize: "14px",
              marginLeft: "12rem",
              fontWeight: "700",
            }}
            navbarScroll
          >
            <Nav.Link href="firepay">Home</Nav.Link>
            <Nav.Link href="sobre">Sobre nós</Nav.Link>
            <Nav.Link href="solucoes">Soluções</Nav.Link>
            <Nav.Link href="recursos">Recursos</Nav.Link>
            <Nav.Link href="desenvolvedores">Contato</Nav.Link>
        
            

            {/*<NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
  </NavDropdown>*
            <Nav.Link href="#" disabled>
              Link
  </Nav.Link>*/}
          </Nav>
          <TranslateButton/>

        

          {/*} <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
</Form>*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;
