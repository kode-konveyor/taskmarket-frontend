import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import App from "../App";
import MainMenuUI from "./MainMenuUI";
import { BrowserRouter } from "react-router-dom";

export default function MainPageUI() {
  return (
    <div className="main-page">
      <Container className="top" fluid>
        <Row id="top-header">
          <Col lg="12">
            <Col lg="4">
              <img
                src="/img/logo-unbounce.png"
                className="img-responsive logo"
                alt="KodeKonveyor"
              />
            </Col>
            <Col lg="8" className="d-lg-block d-none">
              <h2>
                <span className="headerQuote">
                  We make quality software development available for everyone
                </span>
              </h2>
            </Col>
          </Col>
        </Row>
      </Container>
      <BrowserRouter>
        <Container className="menu" fluid>
          <Row id="main-menu">
            <Col md="12">
              <MainMenuUI />
            </Col>
          </Row>
        </Container>
        <Container className="main" fluid>
          <Row id="content">
            <Col md="12">
              <App />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}
