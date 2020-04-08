import React from 'react'
import { shallow } from 'enzyme'
import AddToRoleFormWrapper from '../../../project/list/AddToRoleFormWrapper'
import Form from 'react-jsonschema-form'
import PropTypes from 'prop-types'

describe('/project/list/AddToRoleFormWrapper', () => {

    let renderedComponent
    let onSubmitMock
    const PROJECT_ID = "MY-PROJECT"

    const expectedPropTypes = {
        className: PropTypes.string,
        onSubmit: PropTypes.func,
        onCancel: PropTypes.func
    }

    beforeEach(() => {
        onSubmitMock = jest.fn()
        renderedComponent = shallow(<AddToRoleFormWrapper onSubmit={onSubmitMock} projectId={PROJECT_ID}/>)
    })

    it('contains a Form', () => {
        expect(renderedComponent.find(Form).length).toBe(1)
    })

    it('forwards onSubmitEvent', () => {
        renderedComponent.find(Form).simulate('submit')
        expect(onSubmitMock).toHaveBeenCalled()
    })

    it('has the right propTypes', () => {
        expect(AddToRoleFormWrapper.propTypes).toMatchObject(expectedPropTypes)
    })
})