import { httpRequest, HTTP } from "./HttpRequest";

export async function httpPost(dataTarget, data) {
  return httpRequest(HTTP.POST, dataTarget, data);
}
