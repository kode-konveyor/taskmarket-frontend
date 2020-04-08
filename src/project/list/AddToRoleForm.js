import React from 'react'
import { connect } from 'react-redux'
import AddToRoleFormWrapper from './AddToRoleFormWrapper'
import { ADD_ROLE_FORM_ACTIONS } from '../../actions'
import PropTypes from 'prop-types'


export function AddToRoleForm({ projectId, visible, onSubmit, onCancel }) {
    let className = "add-to-role-form-wrapper" + (visible ? "" : " hidden")
    return (
        <div>
            <AddToRoleFormWrapper className={className} onSubmit={(formData) => { onSubmit(formData, projectId) }}
                onCancel={onCancel} />
        </div>
    )
}

const submitAddToRole = (formData, projectId) => ({
    type: ADD_ROLE_FORM_ACTIONS.SUBMIT,
    projectId: projectId,
    formData
})

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (formData, projectId) => dispatch(submitAddToRole(formData, projectId)),
        onCancel: () => dispatch({ type: ADD_ROLE_FORM_ACTIONS.CLOSE })
    }
}

const mapStateToProps = (state, ownProps) => {
    return { visible: state.addRoleForm.projectId === ownProps.projectId }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddToRoleForm)

AddToRoleForm.propTypes = {
    projectId: PropTypes.string,
    visible: PropTypes.bool,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
}