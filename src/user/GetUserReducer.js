import { LOGIN, LOGOUT } from "./GetUserActions";
import RegistrationActions from "../registration/RegistrationActions";

export default function GetUserReducer(state = { loggedIn: false }, action) {
  switch (action.type) {
    case LOGIN:
      return {
        login: action.user.login,
        loggedIn: true,
        registered: action.user.isTermsAccepted,
      };
    case LOGOUT:
      return { loggedIn: false };
    case RegistrationActions.SUBMIT:
      return { registered: true, loggedIn: true, login: state.login };
    default:
      return state;
  }
}
