import { httpDelete } from "../../../api/http/DeleteRequest";
import { httpRequest } from "../../../api/http/HttpRequest";
import {HTTPTestData} from "./HTTPTestData";

jest.mock("../../../api/http/HttpRequest");

describe("/api/http/DeleteRequest", () => {
  it("calls HttpRequest with DELETE method", () => {
    httpDelete(HTTPTestData.TARGET, HTTPTestData.DATA);
    expect(httpRequest).toHaveBeenCalledWith(HTTPTestData.DELETE, HTTPTestData.TARGET, HTTPTestData.DATA);
  });
});
