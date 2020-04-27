import { httpPut } from "../../api/http/PutRequest";
import { SUBMIT } from "./AddToRoleFormActions";
import { ADD_TO_ROLE_URI } from "../../api/URLMapping";

export default function SubmitAddRoleService(state = {}, action) {
  if (action.type !== SUBMIT) return state;

  const data = {
    projectName: action.projectId,
    roleName: action.formData.role,
  };

  state.result = httpPut(ADD_TO_ROLE_URI, data);
  return state;
}
