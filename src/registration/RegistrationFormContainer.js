import { connect } from "react-redux";
import RegistrationActions from "./RegistrationActions.json";
import RegistrationFormUI from "./RegistrationFormUI";
import LegalFormActions from "./LegalFormActions";

function mapDispatchToProps(dispatch) {
  dispatch({ type: LegalFormActions.LIST });
  return {
    onSubmit: (formData) =>
      dispatch({
        type: RegistrationActions.SUBMIT,
        formData: formData.formData,
      }),
  };
}

function mapStateToProps(state) {
  return {
    legalForms: state.LegalFormService.legalForms,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormUI);
