import RegistrationActions from "./RegistrationActions.json";
import URLMapping from "../api/URLMapping";
import { httpPost } from "../api/http/PostRequest";

export default function RegistrationService(state = {}, action) {
  console.log(action);
  if (action.type === RegistrationActions.SUBMIT) {
    state = httpPost(URLMapping.REGISTRATION_URI, action.formData);
  }

  return state;
}
