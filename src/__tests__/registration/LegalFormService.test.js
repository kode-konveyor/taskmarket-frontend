import LegalFormService from "../../registration/LegalFormService";
import LegalFormActions from "../../registration/LegalFormActions";
import { httpGet } from "../../api/http/GetRequest";

jest.mock("../../api/http/GetRequest");

const action = { type: LegalFormActions.LIST };
describe("/registration/LegalFormService", () => {
  const response = [{ id: 1, country: "US", legalFormName: "legalForm" }];

  beforeEach(() => {
    httpGet.mockReset();
    httpGet.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(response),
      })
    );
  });

  it("keeps status when action doesn't match", async () => {
    const state = { data: "MyData" };
    expect(await LegalFormService(state, { type: "RANDOM_ACTION" })).toEqual(
      state
    );
  });

  it("updates legalForms when it is empty", async () => {
    const state = {};
    expect(await LegalFormService(state, action)).toEqual({
      legalForms: response,
    });
  });

  it("Does not update legalForms when it is not empty", async () => {
    const state = { legalForms: [{ id: 1 }] };
    expect(await LegalFormService(state, action)).toEqual(state);
  });

  it("returns empty object on fail", async () => {
    const state = {};
    httpGet.mockReturnValue(Promise.reject("ERROR"));
    expect(await LegalFormService(state, action)).toEqual(state);
  });

  it("Logs error message on fail", async () => {
    const state = {};
    const errorMock = jest.spyOn(console, "error");
    httpGet.mockReturnValue(Promise.reject("ERROR"));
    await LegalFormService(state, action);
    expect(errorMock).toHaveBeenCalledWith("Could not fetch legal forms.");
  });
});
