import React from 'react'
import { shallow } from 'enzyme'
import ProjectListItem from '../../../project/list/ProjectListItem'
import AddRoleToProjectButton from '../../../project/list/AddRoleToProjectButton'

describe('/project/list/ProjectListItem', () => {

    let renderedComponent = {}
    const name = "MY PROJECT"
    const projectId = "KK-TM"
 
  beforeEach(() => {
        renderedComponent = shallow(<ProjectListItem projectId = {projectId} name = {name}/>)
    })

    it('contains projectId', () => {
        expect(renderedComponent.find('.projectId').text()).toBe(projectId)
    })

    it('contains projectName', () => {
        expect(renderedComponent.find('.projectName').text()).toBe(name)
    })

    it('contains AddToRoleButton', () => {
        expect(renderedComponent.find(AddRoleToProjectButton).length).toBe(1)
    })
})