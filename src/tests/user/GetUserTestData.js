const USER_LOGIN = "soros";
const LOGOUT = "GET_USER_ACTIONS_LOGOUT";
const ERROR = "GET_USER_ACTIONS_ERROR";

export const GetUserTestData = {
  USER_LOGIN: USER_LOGIN,

  LOGIN: "GET_USER_ACTIONS_LOGIN",
  LOGOUT,
  ERROR,

  ERROR_MSG: "error",
  REGISTERED_STATE: {
    user: { login: USER_LOGIN, isTermsAccepted: true },
    loggedIn: true,
    registered: true,
  },
  LOGGED_IN_STATE: {
    user: { login: USER_LOGIN },
    loggedIn: true,
    registered: true,
  },
  NOT_REGISTERED_STATE: {
    user: { login: USER_LOGIN },
    loggedIn: true,
    registered: false,
  },
  LOGGED_OUT_STATE: {
    user: {},
    loggedIn: false,
  },
  UNAUTHORISED_RESPONSE: {
    status: 401,
    ok: false,
  },
  LOGOUT_ACTION: { type: LOGOUT },
  ERROR_ACTION: { type: ERROR, message: "Failed to load user info" },
  USER_PATH: "/member/user",
};
