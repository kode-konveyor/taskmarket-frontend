import React from 'react'
import { connect } from 'react-redux'
import AddRoleToFormDTO from './AddRoleToFormDTO'
import PropTypes from 'prop-types'


export function AddToRoleForm({ projectId, visible, onSubmit, onCancel }) {
    let className = "add-to-role-form-wrapper" + (visible ? "" : " hidden")

    return (
        <div>

            <div className={className}>
                <Form schema={AddRoleToFormDTO} onSubmit={(formData) => { onSubmit(formData, projectId) }} className='add-to-role-form'>
                    <button type="submit">+</button>
                    <button type="button" onClick={onCancel}>X</button>
                </Form>
            </div>
        </div>
    )
}

AddToRoleForm.ACTIONS = {
    OPEN: 'OPEN_ADD_ROLE_FORM',
    CLOSE: 'CLOSE_ADD_ROLE_FORM',
    ON_SUBMIT: 'SUBMIT_ADD_ROLE_FORM'
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (formData, projectId) => dispatch({
            type: AddToRoleForm.ACTIONS.ON_SUBMIT,
            projectId: projectId,
            formData: formData.formData
        }),
        onCancel: () => dispatch({ type: AddToRoleForm.ACTIONS.CLOSE })
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