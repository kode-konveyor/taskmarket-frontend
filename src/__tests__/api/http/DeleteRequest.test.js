import { httpDelete } from "../../../api/http/DeleteRequest"
import { httpRequest } from "../../../api/http/HttpRequest"

jest.mock('../../../api/http/HttpRequest')

describe('/api/http/DeleteRequest', () => {

    const TARGET = '/test'
    const DATA = {test: 'DATA'}
    const DELETE = 'DELETE'
    it('calls HttpRequest with DELETE method', () => {
        httpDelete(TARGET, DATA)
        expect(httpRequest).toHaveBeenCalledWith(DELETE, TARGET, DATA)
    })
})