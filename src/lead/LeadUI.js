import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export default function LeadUI({ firstName, email, interest }) {
  return (
    <Row className="lead">
      <Col md="4">{firstName}</Col>
      <Col md="4">{email}</Col>
      <Col md="4">{interest}</Col>
    </Row>
  );
}

LeadUI.propTypes = {
  firstName: PropTypes.string,
  email: PropTypes.string,
  interest: PropTypes.string,
};
