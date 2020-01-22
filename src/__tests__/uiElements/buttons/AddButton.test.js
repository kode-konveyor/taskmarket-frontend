import React from 'react'
import { shallow } from 'enzyme'
import ModalBox from '../../../uiElements/containers/ModalBox'
import AddButton from '../../../uiElements/buttons/AddButton'
import ProjectFormContainer from '../../../project/ProjectFormContainer'

describe('/uiElements/buttons/AddButton', () => {

    const renderedComponent = shallow(<AddButton Form={ProjectFormContainer}/>)

    it('contains a button', () => {
        expect(renderedComponent.find('input[type="button"]').length).toBe(1)
    })

    it('contains a modal box', () => {
        expect(renderedComponent.find(ModalBox).length).toBe(1)
    })

    it('contains a form', () => {
        expect(renderedComponent.find(ProjectFormContainer).length).toBe(1)
    })

})