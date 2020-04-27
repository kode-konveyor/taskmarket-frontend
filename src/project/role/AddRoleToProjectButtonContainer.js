import { OPEN } from "./AddToRoleFormActions";
import { connect } from "react-redux";
import AddRoleToProjectButton from "./AddRoleToProjectButton";

export const mapDispatchToProps = (dispatch) => ({
  onAddRole: (projectId) => dispatch({ type: OPEN, projectId: projectId }),
});

export default connect(undefined, mapDispatchToProps)(AddRoleToProjectButton);
