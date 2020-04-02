import { ADD_ROLE_FORM_ACTIONS } from "../actions"
import { AddToRoleController } from "../api/AddToRoleController";


const addRoleForm = (state = { visible: false, projectId: '' }, action) => {

    const INITIAL_STATE = { visible: false, projectId: '' }

    const open = () => ({ visible: true, projectId: action.projectId })

    const close = () => (INITIAL_STATE)

    const submit = () => {
        const formData = action.formData.formData;
        AddToRoleController(state.projectId, formData.role, formData.user);
        return INITIAL_STATE
    }
    const actionMap = new Map([
        [ADD_ROLE_FORM_ACTIONS.OPEN, open],
        [ADD_ROLE_FORM_ACTIONS.CLOSE, close],
        [ADD_ROLE_FORM_ACTIONS.SUBMIT, submit]
    ])

    return actionMap.has(action.type) ? actionMap.get(action.type)() : state
}

export default addRoleForm