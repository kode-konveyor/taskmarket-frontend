import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileAreaContainer from "../profile/ProfileAreaContainer";
import UnderConstructionUI from "../common/UnderConstructionUI";

export default function DashboardUI() {
  return (
    <Container className="dashboard" fluid>
      <Row>
        <Col sm={12} md={3} xl={2}>
          <ProfileAreaContainer />
        </Col>
        <Col sm={12} md={6} xl={8}>
          <Container className="center-content">
            <Row>
              <Col md={12} className="center center-top">
                <UnderConstructionUI header="Next step" />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="center center-middle">
                <UnderConstructionUI header="Tasks" />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="center center-bottom">
                <UnderConstructionUI header="Projects" />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col sm={12} md={3} xl={2} className="left">
          <UnderConstructionUI header="Settings" />
        </Col>
      </Row>
    </Container>
  );
}
