import { CLOSE, SUBMIT } from "./AddToRoleFormActions";
import AddToRoleForm from "./AddToRoleForm";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (formData, projectId) =>
      dispatch({
        type: SUBMIT,
        projectId: projectId,
        formData: formData.formData,
      }),
    onCancel: () => dispatch({ type: CLOSE }),
  };
}

const mapStateToProps = (state, ownProps) => {
  return { visible: state.addRoleForm.projectId === ownProps.projectId };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToRoleForm);
