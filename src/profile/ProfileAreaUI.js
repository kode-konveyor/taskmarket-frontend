import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProfileConstants } from "./ProfileConstants";
import { PropTypes } from "prop-types";

export default function ProfileAreaUI({ marketUser, onLoad }) {
  onLoad();
  const rows = [
    { label: ProfileConstants.GITHUB, control: marketUser.login },
    { label: ProfileConstants.NAME, control: marketUser.personalName },
    { label: ProfileConstants.LEGAL_NAME, control: marketUser.legalName },
    { label: ProfileConstants.ADDRESS, control: marketUser.legalAddress },
    { label: ProfileConstants.EMAIL, control: marketUser.email },
    {
      label: ProfileConstants.BALANCE,
      control: "€ " + marketUser.balanceInCents / 100.0,
    },
  ];

  const renderRow = (row, i) => (
    <Row key={i}>
      <Col md={12}>
        <div className="profile-label">
          <span>{row.label}</span>
        </div>
        <div className="profile-control">{row.control}</div>
      </Col>
    </Row>
  );

  return (
    <Container className="profile-area dashboard-tab">
      <Row>
        <Col md={12}>
          <h1>Profile</h1>
        </Col>
      </Row>
      {rows.map(renderRow)}
    </Container>
  );
}

ProfileAreaUI.propTypes = {
  marketUser: PropTypes.object,
  onLoad: PropTypes.func,
};
