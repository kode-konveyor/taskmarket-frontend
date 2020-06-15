import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LoginContainer from "./LoginContainer";
export default function MainMenuUI() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="main-menu"
    >
      <LinkContainer to="/">
        <Navbar.Brand>TaskMarket</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/lead/list">
            <Nav.Link>Lead list</Nav.Link>
          </LinkContainer>
          <Nav.Link href="https://repository.kodekonveyor.com/TaskMarket/kode-konveyor/develop/implementedBehaviours.html">
            Documentation
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="https://kodekonveyor.com">Visit our website</Nav.Link>
          <LoginContainer />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
