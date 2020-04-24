import { REGISTRATION_FORM_ACTIONS } from "../actions"
import { RegistrationController } from "../api/RegistrationController"

const registrationForm = (state = {}, action) => {
    if (action.type === REGISTRATION_FORM_ACTIONS.SUBMIT) {
        RegistrationController(action.formData.formData)
    }

    return state
}

export default registrationForm
