import apiBaseRoot from "../../config/apiBaseRoot";

export const HTTP = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export async function httpRequest(method, dataTarget, data) {
  const request = {
    method: method,
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const url = new URL(dataTarget, apiBaseRoot);

  const response = await global.fetch(url, request);
  return response.json;
}
