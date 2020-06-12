import React from "react";
import { shallow } from "enzyme";
import RegistrationFormContainer from "../../registration/RegistrationFormContainer";
import configureMockStore from "redux-mock-store";
import RegistrationActions from "../../registration/RegistrationActions.json";
import RegistrationFormUI from "../../registration/RegistrationFormUI";
import LegalFormActions from "../../registration/LegalFormActions";
import LegalFormService from "../../registration/LegalFormService";
import RegistrationService from "../../registration/RegistrationService";
import {RegistrationTestData} from "./RegistrationTestData";

const mockStore = configureMockStore();

jest.mock("../../registration/LegalFormService");
jest.mock("../../registration/RegistrationService");

describe("/registration/RegistrationFormContainer", () => {
  let renderedComponent;
  let store;

  beforeEach(() => {
    LegalFormService.mockReturnValue({ type: LegalFormActions.LIST });
    RegistrationService.mockReturnValue({
      type: RegistrationActions.SUBMIT,
      formData: RegistrationTestData.FORM_DATA,
    });
    store = mockStore({ LegalFormReducer: { legalForms: RegistrationTestData.LEGAL_FORMS } });
    renderedComponent = shallow(<RegistrationFormContainer store={store} />);
  });

  it("creates SUBMIT action on submit ", () => {
    renderedComponent
      .find(RegistrationFormUI)
      .simulate("submit", { formData: RegistrationTestData.FORM_DATA });
    expect(store.getActions()).toEqual([
      { type: LegalFormActions.LIST },
      { type: RegistrationActions.SUBMIT, formData: RegistrationTestData.FORM_DATA },
    ]);
  });

  it("maps the legalForms", () => {
    expect(
      renderedComponent.find(RegistrationFormUI).prop("schema").properties
        .legalForm.anyOf
    ).toEqual(RegistrationTestData.CONVERTED_LEGAL_FORMS);
  });

  it("maps undefined when state is not existing", () => {
    let store = mockStore({});
    let component = shallow(<RegistrationFormContainer store={store} />);
    expect(component.find(RegistrationFormUI).prop("legalForms")).toEqual(
      undefined
    );
  });
});
