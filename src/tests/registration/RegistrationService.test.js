import RegistrationActions from "../../registration/RegistrationActions.json";
import { httpPost } from "../../api/http/PostRequest";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import RegistrationService from "../../registration/RegistrationService";
import {RegistrationTestData} from "./RegistrationTestData";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../../api/http/PostRequest");

describe("/registration/RegistrationService", () => {
  let store;

  beforeEach(() => {
    httpPost.mockReset();
    store = mockStore({ response: {} });
  });

  it("creates SUBMIT action", async () => {
    httpPost.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(RegistrationTestData.EXPECTED_RESPONSE),
      })
    );
    await store.dispatch(RegistrationService(RegistrationTestData.EXPECTED_RESPONSE));
    expect(store.getActions()).toEqual([RegistrationTestData.EXPECTED_ACTION]);
  });

  it("calls post request", async () => {
    httpPost.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(RegistrationTestData.EXPECTED_RESPONSE),
      })
    );
    await store.dispatch(RegistrationService(RegistrationTestData.EXPECTED_RESPONSE));
    expect(httpPost).toHaveBeenCalledWith("/member/register", RegistrationTestData.EXPECTED_RESPONSE);
  });

  it("creates ERROR action on failure", async () => {
    httpPost.mockReturnValue(Promise.reject("ERROR"));
    await store.dispatch(RegistrationService(RegistrationTestData.EXPECTED_RESPONSE));
    expect(store.getActions()).toEqual([{ type: RegistrationActions.ERROR }]);
  });
});
