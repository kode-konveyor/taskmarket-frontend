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
  console.log(
    "Request sent: \n" + JSON.stringify({ url: url, request: request })
  );

  const response = await global.fetch(url, request);
  return response.json;
}
