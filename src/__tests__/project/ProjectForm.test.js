import React from 'react'
import { shallow } from 'enzyme'
import Form from 'react-jsonschema-form'
import PropTypes from 'prop-types'
import ProjectForm from '../../project/ProjectForm'

describe('/project/ProjectForm', () => {
    let renderedComponent = {}
    const onSubmit = jest.fn()

    const expectedPropTypes = {
        onSubmit: PropTypes.func
    }

    beforeEach(() => {
        renderedComponent = shallow(<ProjectForm onSubmit={onSubmit} />)
        onSubmit.mockReset()
    })

    it('renders node with correct class name', () => {
        expect(renderedComponent.find('.project-form').length).toBe(1)
    })

    it('calls onSubmit when form is submitted', () => {
        renderedComponent.find(Form).simulate('submit', {})
        expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    it('contains the fields', () => {
        let fields = {
            "name": {
                "title": "Project name",
                "type": "string",
            },
        }
        expect(renderedComponent.find(Form).props().schema.properties).toStrictEqual(fields)
    })

    it('resets form when form is submitted', () => {
        let dummyFormInstance = { formData: { "form": "data" } }
        renderedComponent.find(Form).simulate('submit', dummyFormInstance)
        expect(dummyFormInstance.formData).toBe(null)
    })

    it('has the right propTypes', () => {
        expect(ProjectForm.propTypes).toMatchObject(expectedPropTypes)
    })
})