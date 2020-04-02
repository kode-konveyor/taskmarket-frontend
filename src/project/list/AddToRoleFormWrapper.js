import React from 'react'
import Form from 'react-jsonschema-form'
import AddRoleToFormDTO from './AddRoleToFormDTO'

export default function AddToRoleFormWrapper({projectId, onSubmit}) {
    let schema = AddRoleToFormDTO

    return (
        <div className='add-role-form-wrapper'>
            <h1>Add role to {projectId}</h1>
            <Form schema={schema} onSubmit={onSubmit} className='add-to-role-form'/>
        </div>
    )
}