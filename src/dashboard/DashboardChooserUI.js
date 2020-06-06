import React from "react";
import RegistrationPageUI from "../registration/RegistrationPageUI";
import DashboardUI from "./DashboardUI";
import PropTypes from "prop-types";
import WelcomePageUI from "../main/WelcomePageUI";

export default function DashboardChooserUI({
  hasLoggedIn = false,
  hasRegistration = false,
}) {
  if (hasRegistration) return <DashboardUI />;
  if (hasLoggedIn) return <RegistrationPageUI />;
  return <WelcomePageUI />;
}

DashboardChooserUI.propTypes = {
  hasRegistration: PropTypes.bool,
  hasLoggedIn: PropTypes.bool,
};
