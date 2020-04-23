import { httpRequest, HTTP } from './HttpRequest'

export async function httpGet(dataTarget, data) {
  return httpRequest(HTTP.GET, dataTarget, data);
}