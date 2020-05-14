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

  const api = localStorage.getItem("BACKEND_URL");
  const url = new URL(api + dataTarget);

  const response = await global.fetch(url, request);
  return response.json;
}
