import React from 'react'
import { shallow } from 'enzyme'
import ProjectFormContainer from '../../project/ProjectFormContainer'
import ProjectForm from '../../project/ProjectForm'
import { usePostData } from '../../common/usePostData'
jest.mock('../../common/usePostData')

describe('/project/ProjectFormContainer', () => {

    let renderedComponent
    let addProjectMock = jest.fn()
    let onSubmitMock = jest.fn() 

    beforeAll(() => {
        usePostData.mockReturnValue(addProjectMock)
        renderedComponent = shallow(<ProjectFormContainer onSubmit={onSubmitMock}/>)
        renderedComponent.find(ProjectForm).simulate('submit', {formData:""})
    })

    it('contains a project form', () => {
        expect(renderedComponent.find(ProjectForm).length).toBe(1)
    })

    it('posts data when form is submitted', () => {
        expect(addProjectMock).toHaveBeenCalled()
    })

    it('calls callback when form is submitted', () => {
        expect(onSubmitMock).toHaveBeenCalled()
    })



})