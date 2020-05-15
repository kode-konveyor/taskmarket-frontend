import React from "react";
import Form from "react-jsonschema-form";
import RegistrationFormDTO from "./RegistrationFormDTO";
import PropTypes from "prop-types";

export default function RegistrationFormUI({
  onSubmit,
  className,
  legalForms,
}) {
  let schema = RegistrationFormDTO;
  if (!!legalForms && legalForms.length > 0) {
    const legalFormsSchema = legalForms.map(convertLegalFormToSchema);
    schema.properties.legalForm.anyOf = legalFormsSchema;
  } else {
    schema.properties.legalForm.anyOf = [
      { type: "number", title: "No data", enum: [-1] },
    ];
  }

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
