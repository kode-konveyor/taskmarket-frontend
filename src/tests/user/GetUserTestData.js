export const LOGIN = "GET_USER_ACTIONS_LOGIN";
export const LOGOUT = "GET_USER_ACTIONS_LOGOUT";
export const ERROR = "GET_USER_ACTIONS_ERROR";
export const USER_LOGIN = "soros";
export const ERROR_MSG = "error";
export const LOGGED_IN_STATE = {
  login: USER_LOGIN,
  loggedIn: true,
  registered: true,
};
export const NOT_REGISTERED_STATE = {
  login: USER_LOGIN,
  loggedIn: true,
  registered: false,
};
export const LOGGED_OUT_STATE = { loggedIn: false };
