import { combineReducers } from "redux";
import LegalForms from "../registration/LegalFormReducer";
import LeadList from "../lead/LeadLoadReducer";
import ActiveUser from "../user/GetUserReducer";

export default combineReducers({
  LegalForms,
  LeadList,
  ActiveUser,
});
