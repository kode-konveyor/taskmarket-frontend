import { OPEN } from "./AddToRoleFormActions";
import { connect } from "react-redux";
import AddRoleToProjectButtonUI from "./AddRoleToProjectButtonUI";

export const mapDispatchToProps = (dispatch) => ({
  onAddRole: (projectId) => dispatch({ type: OPEN, projectId: projectId }),
});

export default connect(undefined, mapDispatchToProps)(AddRoleToProjectButtonUI);
