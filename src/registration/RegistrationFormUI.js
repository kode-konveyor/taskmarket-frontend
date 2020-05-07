import React from "react";
import Form from "react-jsonschema-form";
import RegistrationFormDTO from "./RegistrationFormDTO";
import PropTypes from "prop-types";

export default function RegistrationFormUI({
  onSubmit,
  className,
  legalForms,
}) {
  const schema = RegistrationFormDTO;
  const legalFormsSchema = legalForms.map(convertLegalFormToSchema);
  schema.properties.legalForm.anyOf = legalFormsSchema;

  return (
    <div className={className}>
      <Form schema={schema} onSubmit={onSubmit} className="registrationForm" />
    </div>
  );
}

function convertLegalFormToSchema(legalForm) {
  return {
    type: "number",
    title: legalForm.legalFormName + " - " + legalForm.country,
    enum: [legalForm.id],
  };
}

RegistrationFormUI.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  legalForms: PropTypes.array,
};
