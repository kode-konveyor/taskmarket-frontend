import { httpRequest, HTTP } from "../../../api/http/HttpRequest";

const apiBaseRoot = "http://localhost";

describe("/api/http/HttpRequest", () => {
  const data = [{ _id: 1, name: "Janos Ader", role: "Poo with mustache" }];

  let fetchMock = jest.spyOn(global, "fetch");
  let localStorageMock = jest.spyOn(window.localStorage.__proto__, "getItem");
  localStorageMock.mockReset();
  localStorageMock.mockReturnValue(apiBaseRoot);

  beforeEach(async () => {
    fetchMock.mockReset();
    fetchMock.mockReturnValue(() => {
      () => {
        () => "";
      };
    });

    await httpRequest(HTTP.POST, "/test", data).then();
  });

  it("calls the right url", () => {
    expect(getParam(fetchMock).href).toBe(apiBaseRoot + "/test");
  });

  it("sends POST request", () => {
    expect(getParam(fetchMock, 1).method).toBe("POST");
  });

  it("sends proper headers", () => {
    const expectedHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    expect(getParam(fetchMock, 1).headers).toEqual(expectedHeaders);
  });

  it("sends data in body", () => {
    expect(getParam(fetchMock, 1).body).toBe(JSON.stringify(data));
  });

  it("queries BACKEND_URL", () => {
    expect(localStorageMock).toHaveBeenCalledWith("BACKEND_URL");
  });
});

function getParam(fetchMock, index = 0) {
  return fetchMock.mock.calls[0][index];
}
