import { SUBMIT } from "./RegistrationActions.json";
import { REGISTRATION_URI } from "../api/URLMapping";
import { httpPost } from "../api/http/PostRequest";

export default function RegistrationService(state = {}, action) {
  if (action.type === SUBMIT) {
    state = httpPost(REGISTRATION_URI, action.formData.formData);
  }

  return state;
}
