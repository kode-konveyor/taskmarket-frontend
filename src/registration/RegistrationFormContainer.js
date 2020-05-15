import { connect } from "react-redux";
import RegistrationFormUI from "./RegistrationFormUI";
import { submitRegistrationForm } from "./RegistrationService.js";
import { fetchLegalForms } from "./LegalFormService.js";

function mapDispatchToProps(dispatch) {
  dispatch(fetchLegalForms());
  return {
    onSubmit: (formData) => dispatch(submitRegistrationForm(formData)),
  };
}

function mapStateToProps(state) {
  let legalForms;
  if (state.LegalFormService) legalForms = state.LegalFormService.legalForms;
  return {
    legalForms: legalForms,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormUI);
