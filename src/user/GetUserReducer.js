import { LOGIN, LOGOUT } from "./GetUserActions";

export default function GetUserReducer(state = { loggedIn: false }, action) {
  switch (action.type) {
    case LOGIN:
      return { login: action.login, loggedIn: true };
    case LOGOUT:
      return { loggedIn: false };
    default:
      return state;
  }
}
