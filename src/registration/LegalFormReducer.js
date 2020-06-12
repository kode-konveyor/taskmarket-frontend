import LegalFormActions from "./LegalFormActions";
import {LegalFormConstants} from "./LegalFormConstants";

export default function LegalFormReducer(state = {}, action) {
  switch (action.type) {
    case LegalFormActions.LIST:
      return { legalForms: action.legalForms };
    default:
      return state;
  }
}