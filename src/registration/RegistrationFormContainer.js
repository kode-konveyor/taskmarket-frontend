import { connect } from "react-redux";
import RegistrationForm from "./RegistrationForm";
import { REGISTRATION_FORM_ACTIONS } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (formData) =>
      dispatch({
        type: REGISTRATION_FORM_ACTIONS.SUBMIT,
        formData: formData,
      }),
  };
};

export default connect(undefined, mapDispatchToProps)(RegistrationForm);
