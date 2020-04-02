import React from 'react'
import ProjectListBox from './ProjectListBox'
import AddToRoleForm from './AddToRoleForm'
import data from './data'

export default function ProjectList() {
    return (
    <div className="project-list">
        <ProjectListBox data = {data}/>
        <AddToRoleForm/>
    </div>)
}