import { httpRequest } from "../../../api/http/HttpRequest"
import { httpGet } from "../../../api/http/GetRequest"

jest.mock('../../../api/http/HttpRequest')

describe('/api/http/GetRequest', () => {

    const TARGET = '/test'
    const DATA = {test: 'DATA'}
    const GET = 'GET'
    it('calls HttpRequest with DELETE method', () => {
        httpGet(TARGET, DATA)
        expect(httpRequest).toHaveBeenCalledWith(GET, TARGET, DATA)
    })
})