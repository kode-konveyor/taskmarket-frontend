import { CLOSE, SUBMIT } from "./AddToRoleFormActions";
import AddToRoleFormUI from "./AddToRoleFormUI";
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

function mapStateToProps(state, ownProps) {
  return {
    visible:
      state.AddRoleFormVisibilityService.projectId === ownProps.projectId,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToRoleFormUI);
