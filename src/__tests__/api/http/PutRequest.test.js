import { httpRequest } from "../../../api/http/HttpRequest"
import { httpPut } from "../../../api/http/PutRequest"

jest.mock('../../../api/http/HttpRequest')

describe('/api/http/PutRequest', () => {

    const TARGET = '/test'
    const DATA = {test: 'DATA'}
    const PUT = 'PUT'
    it('calls HttpRequest with DELETE method', () => {
        httpPut(TARGET, DATA)
        expect(httpRequest).toHaveBeenCalledWith(PUT, TARGET, DATA)
    })
})