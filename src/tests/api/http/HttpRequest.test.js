import { httpRequest, HTTP } from "../../../api/http/HttpRequest";
import { HTTPTestData } from "./HTTPTestData";

describe("/api/http/HttpRequest", () => {
  
  let fetchMock = jest.spyOn(global, HTTPTestData.FETCH);
  let localStorageMock = jest.spyOn(window.localStorage.__proto__, HTTPTestData.GET_ITEM);
  localStorageMock.mockReset();
  localStorageMock.mockReturnValue(HTTPTestData.API_BASE_ROOT);

  beforeEach(async () => {
    fetchMock.mockReset();
    fetchMock.mockReturnValue(() => {
      () => {
        () => "";
      };
    });

    await httpRequest(HTTP.POST, HTTPTestData.TARGET, HTTPTestData.JSON_DATA).then();
  });

  it("calls the right url", () => {
    expect(getParam(fetchMock).href).toBe(HTTPTestData.API_BASE_ROOT + HTTPTestData.TARGET);
  });

  it("sends POST request", () => {
    expect(getParam(fetchMock, 1).method).toBe(HTTPTestData.POST);
  });

  it("sends proper headers", () => {
    const expectedHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    expect(getParam(fetchMock, 1).headers).toEqual(expectedHeaders);
  });

  it("sends data in body", () => {
    expect(getParam(fetchMock, 1).body).toBe(JSON.stringify(HTTPTestData.JSON_DATA));
  });

  it("queries BACKEND_URL", () => {
    expect(localStorageMock).toHaveBeenCalledWith(HTTPTestData.BACKEND_URL);
  });
});

function getParam(fetchMock, index = 0) {
  return fetchMock.mock.calls[0][index];
}
