import React from 'react'
import AddRoleToProjectButton from './AddRoleToProjectButton'

export default function ProjectListItem({projectId, name}) {
    return (
    <div className='projectListItem'>
        <span className='projectId'>{projectId}</span>
        <span className="projectName">{name}</span>
        <span className="addRole"><AddRoleToProjectButton projectId = {projectId}/></span>
    </div>
    )
}