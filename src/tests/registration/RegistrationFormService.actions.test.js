import RegistrationActions from "../../registration/RegistrationActions.json";
import { httpPost } from "../../api/http/PostRequest";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { submitRegistrationForm } from "../../registration/RegistrationService";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../../api/http/PostRequest");

describe("/registration/LegalFormService", () => {
  const response = { id: 1 };
  const action = { type: RegistrationActions.SUBMIT, response: response };
  let store;

  beforeEach(() => {
    httpPost.mockReset();
    store = mockStore({ response: {} });
  });

  it("creates SUBMIT action", async () => {
    httpPost.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(response),
      })
    );
    await store.dispatch(submitRegistrationForm(response));
    expect(store.getActions()).toEqual([action]);
  });

  it("calls post request", async () => {
    httpPost.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(response),
      })
    );
    await store.dispatch(submitRegistrationForm(response));
    expect(httpPost).toHaveBeenCalledWith("/member/register", response);
  });

  it("creates ERROR action on failure", async () => {
    httpPost.mockReturnValue(Promise.reject("ERROR"));
    await store.dispatch(submitRegistrationForm(response));
    expect(store.getActions()).toEqual([{ type: RegistrationActions.ERROR }]);
  });
});
