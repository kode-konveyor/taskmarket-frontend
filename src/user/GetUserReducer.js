import { LOGIN, LOGOUT } from "./GetUserActions";
import RegistrationActions from "../registration/RegistrationActions";

export default function GetUserReducer(
  state = { loggedIn: false, user: {} },
  action
) {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.user,
        loggedIn: true,
        registered: action.user.isTermsAccepted,
      };
    case LOGOUT:
      return { loggedIn: false, user: {} };
    case RegistrationActions.SUBMIT:
      return { registered: true, loggedIn: true, user: state.user };
    default:
      return state;
  }
}
