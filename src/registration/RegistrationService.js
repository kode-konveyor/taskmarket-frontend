import RegistrationActions from "./RegistrationActions.json";
import URLMapping from "../api/URLMapping";
import { httpPost } from "../api/http/PostRequest";

export default function RegistrationService(state = {}, action) {
  switch (action.type) {
    case RegistrationActions.SUBMIT:
      return { response: action.response };
    default:
      return state;
  }
}

export function submitRegistrationForm(formData) {
  return async (dispatch) => {
    await httpPost(URLMapping.REGISTRATION_URI, formData)
      .then((response) => {
        response
          .json()
          .then((json) =>
            dispatch({ type: RegistrationActions.SUBMIT, response: json })
          );
      })
      .catch(() => dispatch({ type: RegistrationActions.ERROR }));
  };
}
