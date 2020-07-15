import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RegistrationFormContainer from "./RegistrationFormContainer";

export default function RegistrationPageUI() {
  return (
    <Container className="editProfile">
      <Row>
        <Col md="12">
          <RegistrationFormContainer />
        </Col>
      </Row>
    </Container>
  );
}
