import React from "react";
import RegistrationPageUI from "../registration/RegistrationPageUI";
import DashboardUI from "./DashboardUI";
import PropTypes from "prop-types";

export default function DashboardChooserUI({ hasRegistration = false }) {
  if (hasRegistration) return <DashboardUI />;
  return <RegistrationPageUI />;
}

DashboardChooserUI.propTypes = {
  hasRegistration: PropTypes.bool,
};
