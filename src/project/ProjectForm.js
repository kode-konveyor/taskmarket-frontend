import React from 'react'
import Form from 'react-jsonschema-form'
import PropTypes from 'prop-types'
import ProjectDTO from './ProjectDTO'

export default function ProjectForm ({ onSubmit }, { className }) {
  
  const doSubmit = (form) => {
    onSubmit(form)
    form.formData = null
  }

  return (
    <div className={["project-form-wrapper", className].filter(Boolean).join(" ")}>
      <Form schema={ProjectDTO} onSubmit={doSubmit} className={["project-form", className].filter(Boolean).join(" ")}/>
    </div>
  )
}

ProjectForm.propTypes = {
  onSubmit: PropTypes.func
}
