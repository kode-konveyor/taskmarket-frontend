import { httpRequest } from "../../../api/http/HttpRequest";
import { httpPost } from "../../../api/http/PostRequest";
import { HTTPTestData } from "./HTTPTestData"

jest.mock("../../../api/http/HttpRequest");

describe("/api/http/PostRequest", () => {
  
  it("calls HttpRequest with DELETE method", () => {
    httpPost(HTTPTestData.TARGET, HTTPTestData.DATA);
    expect(httpRequest).toHaveBeenCalledWith(HTTPTestData.POST, HTTPTestData.TARGET, HTTPTestData.DATA);
  });
});
