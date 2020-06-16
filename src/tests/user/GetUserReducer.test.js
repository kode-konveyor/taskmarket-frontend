import GetUserReducer from "../../user/GetUserReducer";
import { CommonTestData } from "../CommonTestData";
import RegistrationActions from "../../registration/RegistrationActions";
import { GetUserTestData } from "./GetUserTestData";

describe("/user/GetUserReducer", () => {
  it("sets login and loggedIn on LOGIN action", () => {
    expect(
      GetUserReducer(GetUserTestData.LOGGED_OUT_STATE, {
        type: GetUserTestData.LOGIN,
        user: { login: GetUserTestData.USER_LOGIN, isTermsAccepted: true },
      })
    ).toEqual(GetUserTestData.REGISTERED_STATE);
  });

  it("sets registeres on registration submit", () => {
    expect(
      GetUserReducer(GetUserTestData.NOT_REGISTERED_STATE, {
        type: RegistrationActions.SUBMIT,
      })
    ).toEqual(GetUserTestData.LOGGED_IN_STATE);
  });

  it("unsets login and loggedIn on LOGOUT action", () => {
    expect(
      GetUserReducer(GetUserTestData.LOGGED_IN_STATE, {
        type: GetUserTestData.LOGOUT,
      })
    ).toEqual(GetUserTestData.LOGGED_OUT_STATE);
  });

  it("keeps status on random action", () => {
    expect(
      GetUserReducer(GetUserTestData.LOGGED_IN_STATE, {
        type: CommonTestData.RANDOM_ACTION,
      })
    ).toEqual(GetUserTestData.LOGGED_IN_STATE);
  });

  it("sets logged out state on random action when state is not defined", () => {
    expect(
      GetUserReducer(undefined, { type: CommonTestData.RANDOM_ACTION })
    ).toEqual(GetUserTestData.LOGGED_OUT_STATE);
  });
});
