import LeadLoadReducer from "../../lead/LeadLoadReducer";
import { CommonTestData } from "../CommonTestData";

import { LeadTestData } from "./LeadTestData";

describe("/lead/LeadLoadReducer", () => {
  it("keeps status on random action", () => {
    expect(
      LeadLoadReducer(LeadTestData.LOADED_STATE, CommonTestData.RANDOM_ACTION)
    ).toEqual(LeadTestData.LOADED_STATE);
  });

  it("sets empty status when status is not set", () => {
    expect(LeadLoadReducer(undefined, CommonTestData.RANDOM_ACTION)).toEqual(
      LeadTestData.EMPTY_STATE
    );
  });

  it("sets the lead list on LOAD_ACTION", () => {
    expect(
      LeadLoadReducer(LeadTestData.EMPTY_STATE, LeadTestData.LOAD_ACTION)
    ).toEqual(LeadTestData.LOADED_STATE);
  });

  it("sets the loading flag on RELOAD_ACTION", () => {
    expect(
      LeadLoadReducer(LeadTestData.LOADED_STATE, LeadTestData.RELOAD_ACTION)
    ).toEqual({
      leadList: LeadTestData.LEAD_LIST,
      loading: true,
    });
  });
});
