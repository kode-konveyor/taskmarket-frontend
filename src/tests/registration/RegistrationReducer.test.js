import RegistrationReducer from "../../registration/RegistrationReducer";
import { SUBMIT } from "../../registration/RegistrationActions.json";
import { httpPost } from "../../api/http/PostRequest";

jest.mock("../../api/http/PostRequest");

describe("/registration/RegistrationReducer", () => {
  const initialState = { initial: "state" };

  const DATA = { formData: { personalName: "Gizi" } };
  beforeEach(() => {
    httpPost.mockClear();
  });

  it("keeps status when the action is out of scope", () => {
    let randomAction = { type: "RANDOM-ACTION" };
    expect(RegistrationReducer(initialState, randomAction)).toEqual(
      initialState
    );
  });

  it("sets state when the action is SUBMIT", () => {
    const action = { type: SUBMIT, response: DATA };
    expect(RegistrationReducer(initialState, action)).toEqual({
      response: DATA,
    });
  });
});
