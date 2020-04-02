import { AddToRoleController } from "../../api/AddToRoleController"
import { httpPut } from "../../api/http/PutRequest"

jest.mock('../../api/http/PutRequest')

describe('../../api/AddToRoleController', () => {

    const PROJECT = 'PROJECT'
    const ROLE = 'Admin'
    const USERNAME = 'KovacsBela69'

    beforeEach(() => {
        httpPut.mockClear()

        AddToRoleController(PROJECT, ROLE, USERNAME)
    })

    it ('uses PUT method', () => {
        expect(httpPut).toHaveBeenCalled()
    })

    it ('calls the right endpoint', () => {
        expect(httpPut.mock.calls[0][0]).toEqual('/member/addprojectrole')
        
    })

    it ('combines data into request body', () => {
        expect(httpPut.mock.calls[0][1]).toEqual({projectName: PROJECT, roleName: ROLE, userName: USERNAME})
    })
})