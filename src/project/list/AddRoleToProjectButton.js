import React from 'react'
import { ADD_ROLE_FORM_ACTIONS } from '../../actions'
import { connect } from 'react-redux'

export function AddRoleToProjectButton({onAddRole, projectId}) {
    return <input type='button' className='addRoleButton' onClick={() => onAddRole(projectId)} title="Add role" value='+&sect;'/>
}

const openAddRoleForm = projectId => ({type: ADD_ROLE_FORM_ACTIONS.OPEN, projectId: projectId})

export const mapDispatchToProps = (dispatch) => ({
    onAddRole: (projectId) => dispatch(openAddRoleForm(projectId))
})

export default connect(null, mapDispatchToProps)(AddRoleToProjectButton)
