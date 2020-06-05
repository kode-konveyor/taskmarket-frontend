import { LOGIN, LOGOUT } from "./GetUserActions";

export default function GetUserReducer(state = { loggedIn: false }, action) {
  switch (action.type) {
    case LOGIN:
      return {
        login: action.user.login,
        loggedIn: true,
        registered: action.user.isTermAccepted,
      };
    case LOGOUT:
      return { loggedIn: false };
    default:
      return state;
  }
}
