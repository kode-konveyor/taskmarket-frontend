import { combineReducers } from "redux";
import SubmitAddRoleService from "../project/role/SubmitAddRoleService";
import AddRoleFormVisibilityService from "../project/role/AddRoleFormVisibilityService";
import RegistrationReducer from "../registration/RegistrationReducer";
import LegalFormReducer from "../registration/LegalFormReducer";
import LeadLoadReducer from "../lead/LeadLoadReducer";
import GetUserReducer from "../user/GetUserReducer";

export default combineReducers({
  AddRoleFormVisibilityService,
  SubmitAddRoleService,
  RegistrationReducer,
  LegalFormReducer,
  LeadLoadReducer,
  GetUserReducer,
});
