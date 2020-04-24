import React from 'react'
import { shallow } from 'enzyme'
import RegistrationFormContainer from '../../registration/RegistrationFormContainer'
import RegistrationForm from '../../registration/RegistrationForm'
import configureMockStore from "redux-mock-store";
import { REGISTRATION_FORM_ACTIONS } from '../../actions';

const mockStore = configureMockStore()

describe('/project/list/AddToRoleForm', () => {

    let renderedComponent
    let store

    const FORM_DATA = {'dummy': 'dummy'}

    beforeEach(() => {
        store = mockStore({})
        renderedComponent = shallow(<RegistrationFormContainer store={store}/>)
    })

    it('creates SUBMIT action on submit ', () => {
        renderedComponent.find(RegistrationForm).simulate('submit', FORM_DATA)
        expect(store.getActions()).toEqual([{type: REGISTRATION_FORM_ACTIONS.SUBMIT, formData: FORM_DATA}])

    })
})