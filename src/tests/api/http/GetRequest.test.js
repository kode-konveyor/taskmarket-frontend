import { httpRequest } from "../../../api/http/HttpRequest";
import { httpGet } from "../../../api/http/GetRequest";
import { HTTPTestData } from "./HTTPTestData";

jest.mock("../../../api/http/HttpRequest");

describe("/api/http/GetRequest", () => {
  it("calls HttpRequest with DELETE method", () => {
    httpGet(HTTPTestData.TARGET, HTTPTestData.DATA);
    expect(httpRequest).toHaveBeenCalledWith(
      HTTPTestData.GET,
      HTTPTestData.TARGET,
      HTTPTestData.DATA
    );
  });
});
