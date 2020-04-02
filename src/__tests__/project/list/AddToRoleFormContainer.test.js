import React from 'react'
import { shallow, mount } from 'enzyme'
import AddToRoleFormContainer, { AddToRoleForm } from '../../../project/list/AddToRoleForm'
import configureMockStore from "redux-mock-store";
import { ADD_ROLE_FORM_ACTIONS } from '../../../actions';

const mockStore = configureMockStore()

describe('/project/list/AddToRoleForm', () => {

    let renderedComponent, store
    const initialState = {addRoleForm: {projectId: 'XXX', visible: true}}
    const FORM_DATA={formData: {'dummy': 'data'}}

    beforeEach(() => {
        store = mockStore(initialState)
        renderedComponent = shallow(<AddToRoleFormContainer store={store}/>)
    })

    it ('binds projectId property', () => {
        expect(renderedComponent.find(AddToRoleForm).props().projectId).toEqual(initialState.addRoleForm.projectId)
    })

    it ('binds visible property', () => {
        expect(renderedComponent.find(AddToRoleForm).props().visible).toEqual(initialState.addRoleForm.visible)
    })

    it('creates SUBMIT action on submit ', () => {
        renderedComponent.find(AddToRoleForm).simulate('submit', FORM_DATA)
        expect(store.getActions()).toEqual([{type: ADD_ROLE_FORM_ACTIONS.SUBMIT, formData: FORM_DATA}])

    })
})