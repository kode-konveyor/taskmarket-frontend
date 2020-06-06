import LegalFormService from "../../registration/LegalFormService";
import LegalFormActions from "../../registration/LegalFormActions";

describe("/registration/LegalFormService", () => {
  const response = [{ id: 1, country: "US", legalFormName: "legalForm" }];
  const action = { type: LegalFormActions.LIST, legalForms: response };
  const errorAction = { type: LegalFormActions.ERROR };

  it("keeps status when action doesn't match", () => {
    const state = { data: "MyData" };
    expect(LegalFormService(state, { type: "RANDOM_ACTION" })).toEqual(state);
  });

  it("updates legalForms when it is empty", () => {
    const state = {};
    expect(LegalFormService(state, action)).toEqual({
      legalForms: response,
    });
  });

  it("returns empty object on fail", () => {
    const state = {};
    expect(LegalFormService(state, errorAction)).toEqual(state);
  });

  it("logs error on fail", () => {
    const errorMock = jest.spyOn(console, "error");
    LegalFormService({}, errorAction);
    expect(errorMock).toHaveBeenCalledWith("Fetching Legal Forms failed");
  });
});
