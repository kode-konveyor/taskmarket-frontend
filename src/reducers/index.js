import { combineReducers } from "redux";
import SubmitAddRoleService from "../project/role/SubmitAddRoleService";
import AddRoleFormVisibilityService from "../project/role/AddRoleFormVisibilityService";
import RegistrationService from "../registration/RegistrationService";

export default combineReducers({
  AddRoleFormVisibilityService,
  SubmitAddRoleService,
  RegistrationService,
});
