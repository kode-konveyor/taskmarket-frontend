import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export default function UnderConstructionUI({ header }) {
  return (
    <Container className="under-construction dashboard-tab">
      <Row>
        <Col md={12}>
          <h1>{header}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={process.env.PUBLIC_URL + "/img/travolta.gif"} />
        </Col>
      </Row>
    </Container>
  );
}

UnderConstructionUI.propTypes = {
  header: PropTypes.string.isRequired,
};
