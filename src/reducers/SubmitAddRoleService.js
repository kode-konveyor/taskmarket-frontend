import { AddToRoleForm } from "../project/list/AddToRoleForm";
import { httpPut } from "../api/http/PutRequest";

export default function SubmitAddRoleService(state = {}, action) {

    if (action.type !== AddToRoleForm.ACTIONS.ON_SUBMIT)
        return state;

    let data = {
        projectName: action.projectId,
        roleName: action.formData.role
    }

    state.result = httpPut(ADD_TO_ROLE_URI, data)
    return state
} 