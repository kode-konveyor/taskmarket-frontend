import { httpGet } from "../api/http/GetRequest";
import {LegalFormActionEnum} from "./LegalFormActionEnum";
import URLMapping from "../api/URLMapping.json";

export default function LegalFormService():CallableFunction {
  return async (dispatch: CallableFunction) => {
    await httpGet(URLMapping.LEGAL_FORM_LIST_URI)
      .then((response: Response) => {
        response.json().then((json: Object) => {
          dispatch({ type: LegalFormActionEnum.LIST, legalForms: json });
        });
      })
      .catch(() => dispatch({ type: LegalFormActionEnum.ERROR }));
  };
}
