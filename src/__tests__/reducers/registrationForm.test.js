import registrationForm from "../../reducers/registrationForm"
import { REGISTRATION_FORM_ACTIONS } from "../../actions"
import { RegistrationController } from "../../api/RegistrationController"

jest.mock('../../api/RegistrationController')

describe('/reducers/registrationForm', () => {
    const initialState = {'initial': 'state'}

    const DATA = {formData: {'personalName' : 'Gizi'}}
    beforeEach(() => {
        RegistrationController.mockClear()
    })

    it('keeps status when the action is out of scope', () => {
        let randomAction = {type: 'RANDOM-ACTION'}
        expect(registrationForm(initialState, randomAction)).toEqual(initialState);
    })

    it('sends data when the action is SUBMIT', () => {
        const action = {type: REGISTRATION_FORM_ACTIONS.SUBMIT, formData: {formData: DATA}}
        registrationForm(initialState, action)
        expect(RegistrationController).toHaveBeenCalledWith(DATA);
    })
})