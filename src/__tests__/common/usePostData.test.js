import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { usePostData } from '../../common/usePostData'
import apiBaseRoot from '../../config/apiBaseRoot'


describe('/common/usePostData', () => {
    const data = [{ _id: 1, name: 'Janos Ader', role: 'Poo with mustache' }]

    let fetchMock 
    
    beforeEach(() => {
      jest.clearAllMocks()
      fetchMock = jest.spyOn(global, 'fetch')
      fetchMock.mockReturnValue ( () => {json: () => ""})
      const postData = usePostData('/test')
      postData(data)
    })
    
    it('calls the right url', () => {
      expect(fetchMock.mock.calls[0][0].href).toBe(apiBaseRoot + '/test')
    })

    it('sends POST request', () => {
        expect(fetchMock.mock.calls[0][1].method).toBe('POST')
    })

    it('sends data in body', () => {
        expect(fetchMock.mock.calls[0][1].body).toBe(JSON.stringify(data))
    }) 

})

