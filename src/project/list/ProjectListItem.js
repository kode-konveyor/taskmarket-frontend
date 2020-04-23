import React from 'react'
import AddRoleToProjectButton from './AddRoleToProjectButton'
import AddToRoleForm from './AddToRoleForm'
import PropTypes from 'prop-types'

export default function ProjectListItem({projectId, name}) {

    return (
    <div className='projectListItem'>
        <span className='projectId'>{projectId}</span>
        <span className="projectName">{name}</span>
        <span className="addRole"><AddRoleToProjectButton projectId = {projectId}/></span>
        <AddToRoleForm projectId = {projectId}/>
    </div>
    )
}

ProjectListItem.propTypes = {
    projectId: PropTypes.string,
    name: PropTypes.string
}