import React from 'react'
import { shallow } from 'enzyme'
import { AddToRoleForm } from '../../../project/list/AddToRoleForm'
import AddToRoleFormWrapper from '../../../project/list/AddToRoleFormWrapper';
import PropTypes from 'prop-types'

describe('/project/list/AddToRoleForm', () => {

    let renderedComponent, onSubmitMock
    const PROJECT_ID = 'PROJECT-ID'

    const expectedPropTypes = {
        projectId: PropTypes.string,
        visible: PropTypes.bool,
        onSubmit: PropTypes.func,
        onCancel: PropTypes.func
    }

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

    it('adds hidden class when visible is false', () => {
        let hiddenComponent = shallow(<AddToRoleForm projectId={PROJECT_ID} visible={false} onSubmit={onSubmitMock}/>)
        expect(hiddenComponent.find('.add-to-role-form-wrapper.hidden').length).toBe(1)
    })

    it('doesn\'t add hidden class when visible is true', () => {
        let hiddenComponent = shallow(<AddToRoleForm projectId={PROJECT_ID} visible={true} onSubmit={onSubmitMock}/>)
        expect(hiddenComponent.find('.add-to-role-form-wrapper').prop('className')).toBe('add-to-role-form-wrapper')
    })

    it('has the right propTypes', () => {
        expect(AddToRoleForm.propTypes).toMatchObject(expectedPropTypes)
    })

    
})