import { httpRequest, HTTP } from "./HttpRequest";

export async function httpDelete(dataTarget, data) {
  return httpRequest(HTTP.DELETE, dataTarget, data);
}
