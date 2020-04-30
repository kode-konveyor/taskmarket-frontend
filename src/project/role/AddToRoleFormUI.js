import React from "react";
import AddRoleToFormDTO from "./AddRoleToFormDTO";
import PropTypes from "prop-types";
import Form from "react-jsonschema-form";

export default function AddToRoleFormUI({
  projectId,
  visible,
  onSubmit,
  onCancel,
}) {
  let className = "add-to-role-form-wrapper" + (visible ? "" : " hidden");

  return (
    <div>
      <div className={className}>
        <Form
          schema={AddRoleToFormDTO}
          onSubmit={(formData) => {
            onSubmit(formData, projectId);
          }}
          className="add-to-role-form"
        >
          <button type="submit">+</button>
          <button type="button" onClick={onCancel}>
            X
          </button>
        </Form>
      </div>
    </div>
  );
}

AddToRoleFormUI.propTypes = {
  projectId: PropTypes.string,
  visible: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};
