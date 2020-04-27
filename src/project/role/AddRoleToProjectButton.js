import React from "react";
import PropTypes from "prop-types";

export default function AddRoleToProjectButton({ onAddRole, projectId }) {
  return (
    <input
      type="button"
      className="addRoleButton"
      onClick={() => onAddRole(projectId)}
      title="Add role"
      value="+&sect;"
    />
  );
}

AddRoleToProjectButton.propTypes = {
  onAddRole: PropTypes.func,
  projectId: PropTypes.string,
};
