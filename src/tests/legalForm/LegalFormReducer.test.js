import LegalFormReducer from "../../legalForm/LegalFormReducer";
import {LegalFormActionEnum} from "../../legalForm/LegalFormActionEnum";

describe("/registration/LegalFormService", () => {
  const EXPECTED_LEAD_LIST = [
    { id: 1, country: "US", legalFormName: "legalForm" },
  ];
  const EXPECTED_ACTION = {
    type: LegalFormActionEnum.LIST,
    legalForms: EXPECTED_LEAD_LIST,
  };

  it("keeps status when action doesn't match", () => {
    const state = { data: "MyData" };
    expect(LegalFormReducer(state, { type: "RANDOM_ACTION" })).toEqual(state);
  });

  it("updates legalForms when it is empty", () => {
    const state = {};
    expect(LegalFormReducer(state, EXPECTED_ACTION)).toEqual({
      legalForms: EXPECTED_LEAD_LIST,
    });
  });
});
