import React from 'react'
import {shallow} from 'enzyme'
import ProjectListBox from '../../../project/list/ProjectListBox'
import List from '../../../common/List'
import ProjectListItem from '../../../project/list/ProjectListItem'
import PropTypes from 'prop-types'

describe('/project/list/ProjectListBox', () => {

    let renderedComponent = {}

    const expectedPropTypes = {
        data: PropTypes.array
    }

    beforeEach(() => {
        renderedComponent = shallow(<ProjectListBox/>)
    })

    it('contains List of ProjectListItem', () => {
        expect(renderedComponent.find(List).props().Of).toBe(ProjectListItem)
    })

    it('has the right propTypes', () => {
        expect(ProjectListBox.propTypes).toMatchObject(expectedPropTypes)
    })
})