import React from "react";
import Form from "react-jsonschema-form";
import { Button, FormGroup, Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export default function RegistrationFormUI({ onSubmit, className, schema }) {
  if (!schema) return "Loading...";
  return (
    <Container className={className}>
      <Row className="justify-content-md-center">
        <Col className="heading" md="4">
          Registration
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="4">
          <Form
            schema={schema}
            onSubmit={onSubmit}
            className="registrationForm"
          >
            <FormGroup>
              <a
                href="/docs/KodeKonveyor_Terms_and_Conditions.pdf"
                target="_blank"
              >
                Terms and Conditions (pdf)
              </a>
            </FormGroup>
            <FormGroup>
              <Button type="submit">Sign Up</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationFormUI.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  schema: PropTypes.object,
};
