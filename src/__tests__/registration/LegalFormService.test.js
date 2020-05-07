import LegalFormService from "../../registration/LegalFormService";
import LegalFormActions from "../../registration/LegalFormActions";
import { httpGet } from "../../api/http/GetRequest";

jest.mock("../../api/http/GetRequest");

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
    expect(
      await LegalFormService(state, { type: LegalFormActions.LIST })
    ).toEqual({ legalForms: response });
  });

  it("Does not update legalForms when it is not empty", async () => {
    const state = { legalForms: [{ id: 1 }] };
    expect(
      await LegalFormService(state, { type: LegalFormActions.LIST })
    ).toEqual(state);
  });
});
