import React from "react";
import { shallow } from "enzyme";
import RegistrationFormContainer from "../../registration/RegistrationFormContainer";
import configureMockStore from "redux-mock-store";
import REGISTRATION_FORM_ACTIONS from "../../registration/RegistrationActions.json";
import RegistrationFormUI from "../../registration/RegistrationFormUI";

const mockStore = configureMockStore();

describe("/registration/RegistrationFormContainer", () => {
  let renderedComponent;
  let store;

  const FORM_DATA = { dummy: "dummy" };

  beforeEach(() => {
    store = mockStore({});
    renderedComponent = shallow(<RegistrationFormContainer store={store} />);
  });

  it("creates SUBMIT action on submit ", () => {
    renderedComponent
      .find(RegistrationFormUI)
      .simulate("submit", { formData: FORM_DATA });
    expect(store.getActions()).toEqual([
      { type: REGISTRATION_FORM_ACTIONS.SUBMIT, formData: FORM_DATA },
    ]);
  });
});
