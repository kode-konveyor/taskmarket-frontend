import React from "react";
import { shallow } from "enzyme";
import RegistrationFormContainer from "../../registration/RegistrationFormContainer";
import configureMockStore from "redux-mock-store";
import REGISTRATION_FORM_ACTIONS from "../../registration/RegistrationActions.json";
import RegistrationFormUI from "../../registration/RegistrationFormUI";
import LegalFormActions from "../../registration/LegalFormActions";

const mockStore = configureMockStore();

describe("/registration/RegistrationFormContainer", () => {
  let renderedComponent;
  let store;

  const legalForms = [{ id: 1, country: "US", legalFormName: "name" }];
  const FORM_DATA = { dummy: "dummy" };

  beforeEach(() => {
    store = mockStore({ LegalFormService: { legalForms: legalForms } });
    renderedComponent = shallow(<RegistrationFormContainer store={store} />);
  });

  it("creates SUBMIT action on submit ", () => {
    renderedComponent
      .find(RegistrationFormUI)
      .simulate("submit", { formData: FORM_DATA });
    expect(store.getActions()).toEqual([
      { type: LegalFormActions.LIST },
      { type: REGISTRATION_FORM_ACTIONS.SUBMIT, formData: FORM_DATA },
    ]);
  });

  it("maps the legalForms", () => {
    expect(
      renderedComponent.find(RegistrationFormUI).prop("legalForms")
    ).toEqual(legalForms);
  });

  it("maps empty array when state is not existing", () => {
    let store = mockStore({});
    let component = shallow(<RegistrationFormContainer store={store} />);
    expect(component.find(RegistrationFormUI).prop("legalForms")).toEqual([]);
  });
});
