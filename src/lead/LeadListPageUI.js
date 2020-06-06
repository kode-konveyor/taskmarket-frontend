import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListLeadContainer from "./ListLeadContainer";

export default function LeadListPageUi() {
  return (
    <Container>
      <Row>
        <Col md="12">
          <ListLeadContainer />
        </Col>
      </Row>
    </Container>
  );
}
