import { httpGet } from "../../api/http/GetRequest";
import LeadLoadService, { loadLeadList } from "../../lead/LeadLoadService.js";
import { RANDOM_ACTION } from "../CommonTestData";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  LEAD_LIST,
  LOAD_ACTION,
  RELOAD_ACTION,
  ERROR_ACTION,
  EMPTY_STATE,
  LOADED_STATE,
} from "./LeadTestData";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../../api/http/GetRequest");

let store;
describe("/lead/LeadLoadService", () => {
  beforeEach(() => {
    httpGet.mockReset();
    store = mockStore({ leadList: [], loading: true });
  });

  it("fetches lead list", async () => {
    httpGet.mockReturnValue(
      Promise.resolve({ json: () => Promise.resolve(LEAD_LIST) })
    );
    await store.dispatch(loadLeadList());
    expect(store.getActions()).toEqual([RELOAD_ACTION, LOAD_ACTION]);
  });

  it("adds error action when fetch fails", async () => {
    httpGet.mockReturnValue(Promise.reject("error"));
    await store.dispatch(loadLeadList());
    expect(store.getActions()).toEqual([RELOAD_ACTION, ERROR_ACTION]);
  });

  it("keeps status on random action", () => {
    expect(LeadLoadService(LOADED_STATE, RANDOM_ACTION)).toEqual(LOADED_STATE);
  });

  it("sets empty status when status is not set", () => {
    expect(LeadLoadService(undefined, RANDOM_ACTION)).toEqual(EMPTY_STATE);
  });

  it("sets the lead list on LOAD_ACTION", () => {
    expect(LeadLoadService(EMPTY_STATE, LOAD_ACTION)).toEqual(LOADED_STATE);
  });

  it("sets the loading flag on RELOAD_ACTION", () => {
    expect(LeadLoadService(LOADED_STATE, RELOAD_ACTION)).toEqual({
      leadList: LEAD_LIST,
      loading: true,
    });
  });
});
