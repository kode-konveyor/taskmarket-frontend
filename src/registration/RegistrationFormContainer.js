import { connect } from "react-redux";
import RegistrationActions from "./RegistrationActions.json";
import RegistrationFormUI from "./RegistrationFormUI";

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (formData) =>
      dispatch({
        type: RegistrationActions.SUBMIT,
        formData: formData.formData,
      }),
  };
}

export default connect(undefined, mapDispatchToProps)(RegistrationFormUI);
