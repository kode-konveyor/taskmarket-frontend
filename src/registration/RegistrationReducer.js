import RegistrationActions from "./RegistrationActions.json";

export default function RegistrationReducer(state = {}, action) {
  switch (action.type) {
    case RegistrationActions.SUBMIT:
      return { response: action.response };
    default:
      return state;
  }
}