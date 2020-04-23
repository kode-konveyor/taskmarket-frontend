import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from "redux-mock-store"
import AddRoleToProjectButtonContainer, { AddRoleToProjectButton } from '../../../project/list/AddRoleToProjectButton'
import { ADD_ROLE_FORM_ACTIONS } from '../../../actions'
import PropTypes from 'prop-types'

const mockStore = configureMockStore()

describe('/project/list/AddRoleToProjectButton', () => {

    let containerComponent, store, renderedComponent, onAddRoleMock
    const PROJECT_ID = 'COVID-19'

    const expectedPropTypes = {
        onAddRole: PropTypes.func,
        projectId: PropTypes.string
    }

    const initialState = {projectId: '', visible: false}

    beforeEach(() => {
        store = mockStore(initialState)
        onAddRoleMock = jest.fn()
        containerComponent = shallow(<AddRoleToProjectButtonContainer projectId={PROJECT_ID} store={store}/>)
        renderedComponent = shallow(<AddRoleToProjectButton onAddRole={onAddRoleMock} projectId={PROJECT_ID}/>)
    })

    it('calls openAddRoleForm when button has been clicked ', () => {
        containerComponent.simulate('addRole', PROJECT_ID)
        expect(store.getActions()).toEqual([{type: ADD_ROLE_FORM_ACTIONS.OPEN, projectId: PROJECT_ID}])

    })

    it ('calls onAddRole when button is clicked', () => {
        renderedComponent.find('input[type="button"]').simulate('click')
        expect(onAddRoleMock).toHaveBeenCalledWith(PROJECT_ID)
    })

    it('has the right propTypes', () => {
        expect(AddRoleToProjectButton.propTypes).toMatchObject(expectedPropTypes)
    })
   
})