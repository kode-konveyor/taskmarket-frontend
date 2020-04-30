import React from "react";
import AddRoleToProjectButtonContainer from "../role/AddRoleToProjectButtonContainer";
import AddToRoleFormContainer from "../role/AddToRoleFormContainer";
import PropTypes from "prop-types";

export default function ProjectListItem({ projectId, name }) {
  return (
    <div className="projectListItem">
      <span className="projectId">{projectId}</span>
      <span className="projectName">{name}</span>
      <span className="addRole">
        <AddRoleToProjectButtonContainer projectId={projectId} />
      </span>
      <AddToRoleFormContainer projectId={projectId} />
    </div>
  );
}

ProjectListItem.propTypes = {
  projectId: PropTypes.string,
  name: PropTypes.string,
};
