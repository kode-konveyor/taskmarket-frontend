import { httpGet } from "../api/http/GetRequest";
import LegalFormActions from "./LegalFormActions";
import URLMapping from "../api/URLMapping";

export default async function LegalFormService(state = {}, action) {
  if (action.type === LegalFormActions.LIST && !state.legalForms) {
    return await httpGet(URLMapping.LEGAL_FORM_LIST_URI).then((response) => {
      return response.json().then((legalForms) => ({ legalForms: legalForms }));
    });
  }

  return state;
}
