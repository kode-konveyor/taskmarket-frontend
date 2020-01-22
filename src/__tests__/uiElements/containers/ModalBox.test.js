import React from 'react'
import { shallow, mount } from 'enzyme'
import ModalBox from '../../../uiElements/containers/ModalBox'
import CloseButton from '../../../uiElements/buttons/CloseButton'

describe('/uiElements/containers/ModalBox', () => {
    const renderedComponent = shallow(<ModalBox visibility='visible'>putin is gay</ModalBox>)
    
    it('contains a div', () => {
        expect(renderedComponent.find('div.modal-box').length).toBe(1)
    })

    it('wraps children into the div', () => {
        expect(renderedComponent.find('div.modal-box').text()).toContain('putin is gay')
    })

    it('has a close button', () => {
        expect(renderedComponent.find('div.modal-box').find(CloseButton).length).toBe(1)
    })

    it('passes visibility as className of the wrapper div', () => {
        expect(renderedComponent.find('div.modal-box.visible').length).toBe(1)
    })

    it('becomes hidden when close button is clicked', () => {
        const wrapper = mount (<ModalBox visibility='visible'/>)
        wrapper.find('.close-button').simulate('click')
        expect(wrapper.find('div.modal-box.hidden').length).toBe(1)
    })
})