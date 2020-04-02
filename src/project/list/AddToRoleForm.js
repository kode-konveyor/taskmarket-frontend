import React from 'react'
import { connect } from 'react-redux'
import AddToRoleFormWrapper from './AddToRoleFormWrapper'
import { ADD_ROLE_FORM_ACTIONS } from '../../actions'


export function AddToRoleForm({ projectId, visible, onSubmit }) {
    let form
    if (visible)
        form = <AddToRoleFormWrapper projectId = {projectId} onSubmit={onSubmit}/>

    return <div>{form}</div>
}

const submitAddToRole = formData => ({
    type: ADD_ROLE_FORM_ACTIONS.SUBMIT,
    formData
})

const mapStateToProps = (state) => {
    return {
    projectId: state.addRoleForm.projectId,
    visible: state.addRoleForm.visible
}}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: formData => dispatch(submitAddToRole(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToRoleForm)