import React from 'react'
import { shallow } from 'enzyme'
import CloseButton from '../../../uiElements/buttons/CloseButton'

describe("/uiElements/buttons/CloseButton", () => {

    const onCloseMock = jest.fn()
    const renderedComponent = shallow(<CloseButton onClose={onCloseMock}/>)

    it('emits onClose event when button clicked', () => {
        renderedComponent.find('.button').simulate('click')
        expect(onCloseMock).toHaveBeenCalled()
    })
})