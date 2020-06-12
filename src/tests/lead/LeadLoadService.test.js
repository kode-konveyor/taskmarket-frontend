import { httpGet } from "../../api/http/GetRequest";
import LeadLoadService from "../../lead/LeadLoadService";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { LeadTestData } from "./LeadTestData";

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
      Promise.resolve({ json: () => Promise.resolve(LeadTestData.LEAD_LIST) })
    );
    await store.dispatch(LeadLoadService());
    expect(store.getActions()).toEqual([LeadTestData.RELOAD_ACTION, LeadTestData.LOAD_ACTION]);
  });

  it("adds error action when fetch fails", async () => {
    httpGet.mockReturnValue(Promise.reject("error"));
    await store.dispatch(LeadLoadService());
    expect(store.getActions()).toEqual([LeadTestData.RELOAD_ACTION, LeadTestData.ERROR_ACTION]);
  });
});
