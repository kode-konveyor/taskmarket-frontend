import React from 'react'
import { shallow } from 'enzyme'
import RegistrationForm from '../../registration/RegistrationForm'
import Form from 'react-jsonschema-form'
import PropTypes from 'prop-types'

describe('/registration/RegistrationForm', () => {

    let renderedComponent
    let onSubmitMock
    const USER_LOGIN = 'useR'

    const expectedPropTypes = {
        className: PropTypes.string,
        onSubmit: PropTypes.func,
    }

    beforeEach(() => {
        onSubmitMock = jest.fn()
        renderedComponent = shallow(<RegistrationForm onSubmit={onSubmitMock} userLogin={USER_LOGIN}/>)
    })

    it('contains a Form', () => {
        expect(renderedComponent.find(Form).length).toBe(1)
    })

    it('forwards onSubmitEvent', () => {
        renderedComponent.find(Form).simulate('submit')
        expect(onSubmitMock).toHaveBeenCalled()
    })

    it('has the right propTypes', () => {
        expect(RegistrationForm.propTypes).toMatchObject(expectedPropTypes)
    })
})