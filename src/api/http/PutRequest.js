import { httpRequest, HTTP } from "./HttpRequest";

export async function httpPut(dataTarget, data) {
  return httpRequest(HTTP.PUT, dataTarget, data);
}
