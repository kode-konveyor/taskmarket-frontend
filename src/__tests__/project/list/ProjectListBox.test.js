import React from 'react'
import {shallow} from 'enzyme'
import ProjectListBox from '../../../project/list/ProjectListBox'
import List from '../../../common/List'
import ProjectListItem from '../../../project/list/ProjectListItem'

describe('/project/list/ProjectListBox', () => {

    let renderedComponent = {}
    let onAddRoleCallback = jest.fn()

    beforeEach(() => {
        renderedComponent = shallow(<ProjectListBox onAddRole={onAddRoleCallback}/>)
    })

    it('contains List of ProjectListItem', () => {
        expect(renderedComponent.find(List).props().Of).toBe(ProjectListItem)
    })
})