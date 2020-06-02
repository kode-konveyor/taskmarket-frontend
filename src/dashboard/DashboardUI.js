import React from "react";
import RegistrationFormContainer from "../registration/RegistrationFormContainer";
import ProjectListUI from "../project/list/ProjectListUI";

export default function DashboardUI() {
  return (
    <div className="dashboard">
      <RegistrationFormContainer />
      <ProjectListUI />
    </div>
  );
}
