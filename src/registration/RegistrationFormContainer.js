import { connect } from "react-redux";
import RegistrationFormUI from "./RegistrationFormUI";
import RegistrationService from "./RegistrationService.js";
import LegalFormService from "./LegalFormService.js";
import RegistrationFormDTO from "./RegistrationFormDTO";

function mapDispatchToProps(dispatch) {
  dispatch(LegalFormService());
  return {
    onSubmit: (formData) => dispatch(RegistrationService(formData.formData)),
  };
}

function mapStateToProps(state) {
  let { legalForms } = state.LegalFormReducer || {};
  if (legalForms)
    return {
      schema: generateSchema(legalForms),
    };
  return {};
}

function generateSchema(legalForms) {
  let schema = RegistrationFormDTO;
  schema.properties.legalForm.anyOf = legalForms.map(convertLegalFormToSchema);
  return schema;
}

function convertLegalFormToSchema(legalForm) {
  return {
    type: "number",
    title: legalForm.legalFormName + " - " + legalForm.country,
    enum: [legalForm.id],
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormUI);
