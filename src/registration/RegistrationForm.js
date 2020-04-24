import React from 'react'
import Form from 'react-jsonschema-form'
import RegistrationFormDTO from './RegistrationFormDTO'
import CountriesDTO from './Countries'
import PropTypes from 'prop-types'

export default function RegistrationFormWrapper({onSubmit, className}) {
    let schema = RegistrationFormDTO
    schema.properties.legalForm.properties.country.enum = CountriesDTO

    return (
        <div className={className}>
            <Form schema={schema} onSubmit={onSubmit} className='registrationForm' />
        </div>
    )
}

RegistrationFormWrapper.propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func
}