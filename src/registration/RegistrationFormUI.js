import React from "react";
import Form from "react-jsonschema-form";
import RegistrationFormDTO from "./RegistrationFormDTO";
import LegalForms from "./LegalFormsDTO";
import PropTypes from "prop-types";

export default function RegistrationFormWrapper({ onSubmit, className }) {
  let schema = RegistrationFormDTO;
  let legalFormsSchema = LegalForms.map((legalform) => ({
    type: "number",
    title: legalform.legalFormName + " - " + legalform.country,
    enum: [legalform.id],
  }));
  schema.properties.legalForm.anyOf = legalFormsSchema;

  return (
    <div className={className}>
      <Form schema={schema} onSubmit={onSubmit} className="registrationForm" />
    </div>
  );
}

RegistrationFormWrapper.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};
