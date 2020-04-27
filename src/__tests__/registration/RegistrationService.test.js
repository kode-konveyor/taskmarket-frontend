import RegistrationService from "../../registration/RegistrationService";
import { SUBMIT } from "../../registration/RegistrationActions.json";
import { httpPost } from "../../api/http/PostRequest";

jest.mock("../../api/http/PostRequest");

describe("/reducers/registrationForm", () => {
  const initialState = { initial: "state" };
  const apiUri = "/member/register";

  const DATA = { formData: { personalName: "Gizi" } };
  beforeEach(() => {
    httpPost.mockClear();
  });

  it("keeps status when the action is out of scope", () => {
    let randomAction = { type: "RANDOM-ACTION" };
    expect(RegistrationService(initialState, randomAction)).toEqual(
      initialState
    );
  });

  it("sends data when the action is SUBMIT", () => {
    const action = { type: SUBMIT, formData: { formData: DATA } };
    RegistrationService(initialState, action);
    expect(httpPost).toHaveBeenCalledWith(apiUri, DATA);
  });
});
