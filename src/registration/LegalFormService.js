import { httpGet } from "../api/http/GetRequest";
import LegalFormActions from "./LegalFormActions";
import URLMapping from "../api/URLMapping";

export default function LegalFormService(state = {}, action) {
  switch (action.type) {
    case LegalFormActions.LIST:
      return { legalForms: action.legalForms };
    case LegalFormActions.ERROR:
      console.error("Fetching Legal Forms failed");
      return { legalForms: [] };
    default:
      return state;
  }
}

export function fetchLegalForms() {
  return async (dispatch) => {
    await httpGet(URLMapping.LEGAL_FORM_LIST_URI)
      .then((response) => {
        response.json().then((json) => {
          dispatch({ type: LegalFormActions.LIST, legalForms: json });
        });
      })
      .catch(() => dispatch({ type: LegalFormActions.ERROR }));
  };
}
