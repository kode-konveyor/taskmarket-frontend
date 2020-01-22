import React, { Suspense } from 'react'
import { usePostData } from '../common/usePostData'
import ProjectForm from './ProjectForm'

export default function ProjectFormContainer ({ onSubmit }) {
  const addProject = usePostData('/project')

  const doSubmit = (form) => {
    addProject(form.formData)
    onSubmit(form)
  }

  return <Suspense fallback="Loading"><ProjectForm onSubmit={doSubmit} className="new-project-form"/></Suspense>
}