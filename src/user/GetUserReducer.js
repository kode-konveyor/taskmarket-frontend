import { LOGIN, LOGOUT } from "./GetUserActions";
import {RegistrationActionEnum} from "../registration/RegistrationActionEnum";

export default function GetUserReducer(
  state = { loggedIn: false, user: {} },
  action
) {
  switch (action.type) {
    case RegistrationActionEnum.LOGIN:
      return {
        user: action.user,
        loggedIn: true,
        registered: action.user.isTermsAccepted,
      };
    case RegistrationActionEnum.LOGOUT:
      return { loggedIn: false, user: {} };
    case RegistrationActionEnum.SUBMIT:
      return { registered: true, loggedIn: true, user: state.user };
    default:
      return state;
  }
}
