import GetUserReducer from "../../user/GetUserReducer";
import { RANDOM_ACTION } from "../CommonTestData";
import {
  LOGGED_IN_STATE,
  LOGGED_OUT_STATE,
  LOGIN,
  LOGOUT,
  USER_LOGIN,
} from "./GetUserTestData";

describe("/user/GetUserReducer", () => {
  it("sets login and loggedIn on LOGIN action", () => {
    expect(
      GetUserReducer(LOGGED_OUT_STATE, {
        type: LOGIN,
        user: { login: USER_LOGIN, isTermsAccepted: true },
      })
    ).toEqual(LOGGED_IN_STATE);
  });

  it("unsets login and loggedIn on LOGOUT action", () => {
    expect(GetUserReducer(LOGGED_IN_STATE, { type: LOGOUT })).toEqual(
      LOGGED_OUT_STATE
    );
  });

  it("keeps status on random action", () => {
    expect(GetUserReducer(LOGGED_IN_STATE, { type: RANDOM_ACTION })).toEqual(
      LOGGED_IN_STATE
    );
  });

  it("sets logged out state on random action when state is not defined", () => {
    expect(GetUserReducer(undefined, { type: RANDOM_ACTION })).toEqual(
      LOGGED_OUT_STATE
    );
  });
});
