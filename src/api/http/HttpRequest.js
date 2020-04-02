import apiBaseRoot from '../../config/apiBaseRoot'

export const HTTP = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
export async function httpRequest(method, dataTarget, data) {

  const response =  await global.fetch(new URL(dataTarget, apiBaseRoot),
    {
      method: method,
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return response.json
}