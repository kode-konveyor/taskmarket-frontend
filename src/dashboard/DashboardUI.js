import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileAreaContainer from "../profile/ProfileAreaContainer";

export default function DashboardUI() {
  return (
    <Container className="dashboard">
      <Row>
        <Col md={3}>
          <ProfileAreaContainer />
        </Col>
        <iframe
          src="https://giphy.com/embed/VIQfHC9jAZbt6ojTdo"
          width="468"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          title="Travolta"
        ></iframe>
      </Row>
    </Container>
  );
}
