import { RegistrationController } from '../../api/RegistrationController'
import { httpPost } from "../../api/http/PostRequest"

jest.mock('../../api/http/PostRequest')

describe('../../api/RegistrationController', () => {

    const USER = {'data': 'data'}

    beforeEach(() => {
        httpPost.mockClear()
        RegistrationController(USER)
    })

    it ('uses POST method', () => {
        expect(httpPost).toHaveBeenCalled()
    })

    it ('calls the right endpoint', () => {
        expect(httpPost.mock.calls[0][0]).toEqual('/member/register')
        
    })

    it ('combines data into request body', () => {
        expect(httpPost.mock.calls[0][1]).toEqual(USER)
    })
})