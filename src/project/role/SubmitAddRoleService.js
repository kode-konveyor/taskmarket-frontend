import { httpPut } from "../../api/http/PutRequest";
import AddToRoleFormActions from "./AddToRoleFormActions";
import URLMapping from "../../api/URLMapping";

export default function SubmitAddRoleService(state = {}, action) {
  if (action.type !== AddToRoleFormActions.SUBMIT) return state;

  const data = {
    projectName: action.projectId,
    roleName: action.formData.role,
  };

  state.result = httpPut(URLMapping.ADD_TO_ROLE_URI, data);
  return state;
}
