import LegalFormService from "../../registration/LegalFormService";
import LegalFormActions from "../../registration/LegalFormActions";
import { httpGet } from "../../api/http/GetRequest";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../../api/http/GetRequest");
 
describe("/registration/LegalFormService", () => {
  const response = [{ id: 1, country: "US", legalFormName: "legalForm" }];
  const action = { type: LegalFormActions.LIST, legalForms: response };
  let store;

  beforeEach(() => {
    httpGet.mockReset();
    store = mockStore({});
  });

  it("creates LIST action", async () => {
    httpGet.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(response),
      })
    );
    await store.dispatch(LegalFormService());
    expect(store.getActions()).toEqual([action]);
  });

  it("creates ERROR action on failure", async () => {
    httpGet.mockReturnValue(Promise.reject("ERROR"));
    await store.dispatch(LegalFormService());
    expect(store.getActions()).toEqual([{ type: LegalFormActions.ERROR }]);
  });
});
