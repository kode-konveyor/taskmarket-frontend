import { LegalFormActionEnum } from "./LegalFormActionEnum";
import { LegalFormAction } from "./LegalFormAction";
import { LegalFormState } from "./LegalFormState";


export default function LegalFormReducer(state: LegalFormState = {legalForms: []}, action: LegalFormAction) {
  switch (action.type) {
    case LegalFormActionEnum.LIST:
      return { legalForms: action.legalForms };
    default:
      return state;
  }
}
