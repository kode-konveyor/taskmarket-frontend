import { Action } from "redux";
import { LegalForm } from "./LegalForm";
import { LegalFormActionEnum } from "./LegalFormActionEnum";

export interface LegalFormAction extends Action<LegalFormActionEnum> {
  legalForms: LegalForm[];
}
