import addRoleForm from "../../reducers/addRoleForm"
import { ADD_ROLE_FORM_ACTIONS } from "../../actions"
import { AddToRoleController } from "../../api/AddToRoleController"

jest.mock('../../api/AddToRoleController')

describe('/reducers/addRoleForm', () => {
    
    const initialState = {projectId: ''} 
    const MY_PROJECT = 'MY-PROJECT'
    const ADMIN = 'Admin'

    beforeEach(() => {
        AddToRoleController.mockClear()
    })

    it('keeps status when the action is out of scope', () => {
        let randomAction = {type: 'RANDOM-ACTION'}
        expect(addRoleForm(initialState, randomAction)).toEqual(initialState);
    })

    it('sets initial status when the action is out of scope without existing status', () => {
        let randomAction = {type: 'RANDOM-ACTION'}
        expect(addRoleForm(undefined, randomAction)).toEqual(initialState);
    })

    it('updates status when the action is OPEN', () => {
        const action = {type: ADD_ROLE_FORM_ACTIONS.OPEN, projectId: MY_PROJECT}
        const expectedState = {projectId: MY_PROJECT}
        expect(addRoleForm(initialState, action)).toEqual(expectedState);
    })

    it('updates status when the action is OPEN without existing status', () => {
        const action = {type: ADD_ROLE_FORM_ACTIONS.OPEN, projectId: MY_PROJECT}
        const expectedState = {projectId: MY_PROJECT}
        expect(addRoleForm(undefined, action)).toEqual(expectedState);
    })

    it('updates status when the action is CLOSE', () => {
        const action = {type: ADD_ROLE_FORM_ACTIONS.CLOSE}
        expect(addRoleForm({projectId: 'PROJECT'}, action)).toEqual(initialState);
    })

    it('updates status when the action is CLOSE without existing status', () => {
        const action = {type: ADD_ROLE_FORM_ACTIONS.CLOSE}
        expect(addRoleForm(undefined, action)).toEqual(initialState);
    })

    it('updates status when the action is SUBMIT without existing status', () => {
        const action = {type: ADD_ROLE_FORM_ACTIONS.SUBMIT, formData: {formData: {}}, projectId: MY_PROJECT}
        expect(addRoleForm(undefined, action)).toEqual(initialState);
    })

    it('sends data when the action is SUBMIT without existing status', () => {
        const action = {type: ADD_ROLE_FORM_ACTIONS.SUBMIT, formData: {formData: {role: ADMIN}}, projectId: MY_PROJECT}
        const state = {projectId: MY_PROJECT}
        addRoleForm(state, action)
        expect(AddToRoleController).toHaveBeenCalledWith(MY_PROJECT, ADMIN);
    })
})