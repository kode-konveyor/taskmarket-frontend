import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
export default function MainMenu() {
  const location = useLocation();
  console.log(location.pathname);
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
          <Nav.Link href={process.env.PUBLIC_URL + "/landing"}>Landing Page</Nav.Link>
          <LinkContainer to="/landing/list">
            <Nav.Link>List leads</Nav.Link>
          </LinkContainer>
          <Nav.Link href="https://repository.kodekonveyor.com/TaskMarket/kode-konveyor/develop/implementedBehaviours.html">
            Documentation
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <NavDropdown title="KodeKonveyor" id="collasible-nav-dropdown">
            <NavDropdown.Item href="https://kodekonveyor.com">
              Vision
            </NavDropdown.Item>
            <NavDropdown.Item href="https://kodekonveyor.com/about">
              Who we are
            </NavDropdown.Item>
            <NavDropdown.Item href="https://kodekonveyor.com/how-we-do-it">
              How we do it
            </NavDropdown.Item>
            <NavDropdown.Item href="https://kodekonveyor.com/for-developers">
              For developers
            </NavDropdown.Item>
            <NavDropdown.Item href="https://kodekonveyor.com/for-customers">
              For customers
            </NavDropdown.Item>
            <NavDropdown.Item href="https://kodekonveyor.com/education">
              Education
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={"/market/member/login?next=" + location.pathname}>
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
