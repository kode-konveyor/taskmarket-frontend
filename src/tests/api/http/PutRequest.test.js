import { httpRequest } from "../../../api/http/HttpRequest";
import { httpPut } from "../../../api/http/PutRequest";
import { HTTPTestData } from "./HTTPTestData";

jest.mock("../../../api/http/HttpRequest");

describe("/api/http/PutRequest", () => {
  it("calls HttpRequest with DELETE method", () => {
    httpPut(HTTPTestData.TARGET, HTTPTestData.DATA);
    expect(httpRequest).toHaveBeenCalledWith(
      HTTPTestData.PUT,
      HTTPTestData.TARGET,
      HTTPTestData.DATA
    );
  });
});
