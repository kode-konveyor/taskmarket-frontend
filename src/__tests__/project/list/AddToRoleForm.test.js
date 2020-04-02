import React from 'react'
import { shallow } from 'enzyme'
import { AddToRoleForm } from '../../../project/list/AddToRoleForm'
import configureMockStore from "redux-mock-store";
import AddToRoleFormWrapper from '../../../project/list/AddToRoleFormWrapper';

const mockStore = configureMockStore()

describe('/project/list/AddToRoleForm', () => {

    let renderedComponent, onSubmitMock
    const PROJECT_ID = 'PROJECT-ID'

    beforeEach(() => {
        onSubmitMock = jest.fn()
        renderedComponent = shallow(<AddToRoleForm projectId={PROJECT_ID} visible={true} onSubmit={onSubmitMock}/>)
    })

    it('renders form when visible is true', () => {
        expect(renderedComponent.find(AddToRoleFormWrapper).length).toBe(1)
    })

    it('forwards onSubmit to the form wrapper', () => {
        renderedComponent.find(AddToRoleFormWrapper).simulate('submit')
        expect(onSubmitMock).toHaveBeenCalled()
    })

    it('contains no form when visible is false', () => {
        let hidden = shallow(<AddToRoleForm projectId='' visible={false} />)
        expect(hidden.find(AddToRoleFormWrapper).length).toBe(0)
    })
})