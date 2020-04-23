import { httpRequest } from "../../../api/http/HttpRequest"
import { httpPost } from "../../../api/http/PostRequest"

jest.mock('../../../api/http/HttpRequest')

describe('/api/http/PostRequest', () => {

    const TARGET = '/test'
    const DATA = {test: 'DATA'}
    const POST = 'POST'
    it('calls HttpRequest with DELETE method', () => {
        httpPost(TARGET, DATA)
        expect(httpRequest).toHaveBeenCalledWith(POST, TARGET, DATA)
    })
})