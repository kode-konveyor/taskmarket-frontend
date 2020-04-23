
import { httpRequest, HTTP } from '../../../api/http/HttpRequest'
import apiBaseRoot from '../../../config/apiBaseRoot'


describe('/api/http/HttpRequest', () => {
  const data = [{ _id: 1, name: 'Janos Ader', role: 'Poo with mustache' }]

  let fetchMock

  beforeEach(() => {
    jest.clearAllMocks()
    fetchMock = jest.spyOn(global, 'fetch')
    fetchMock.mockReturnValue(() => {() =>{() => "" }})
    
    httpRequest(HTTP.POST, '/test', data).then().catch()
  })

  it('calls the right url', () => {
    expect(getParam(fetchMock).href).toBe(apiBaseRoot + '/test')
  })

  it('sends POST request', () => {
    expect(getParam(fetchMock, 1).method).toBe('POST')
  })

  it('sends proper headers', () => {
    const expectedHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    expect(getParam(fetchMock, 1).headers).toEqual(expectedHeaders)
  })

  it('sends data in body', () => {
    expect(getParam(fetchMock, 1).body).toBe(JSON.stringify(data))
  })

})

function getParam(fetchMock, index = 0) {
  return fetchMock.mock.calls[0][index];
}

