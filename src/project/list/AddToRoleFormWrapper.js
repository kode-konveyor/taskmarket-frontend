import React from 'react'
import Form from 'react-jsonschema-form'
import AddRoleToFormDTO from './AddRoleToFormDTO'
import PropTypes from 'prop-types'

export default function AddToRoleFormWrapper({onSubmit, onCancel, className}) {
    let schema = AddRoleToFormDTO

    return (
        <div className={className}>
            <Form schema={schema} onSubmit={onSubmit} className='add-to-role-form'>
                <button type="submit">+</button>
                <button type="button" onClick = {onCancel}>X</button>
            </Form>
        </div>
    )
}

AddToRoleFormWrapper.propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
}