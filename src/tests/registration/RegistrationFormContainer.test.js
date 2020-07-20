import React from "react";
import { shallow, mount } from "enzyme";
import RegistrationFormContainer from "../../registration/RegistrationFormContainer";
import configureMockStore from "redux-mock-store";
import { RegistrationActionEnum } from "../../registration/RegistrationActionEnum";
import RegistrationFormUI from "../../registration/RegistrationFormUI";
import {LegalFormActionEnum} from "../../legalForm/LegalFormActionEnum";
import LegalFormService from "../../legalForm/LegalFormService";
import RegistrationService from "../../registration/RegistrationService";
import { RegistrationTestData } from "./RegistrationTestData";

const mockStore = configureMockStore();

jest.mock("../../legalForm/LegalFormService");
jest.mock("../../registration/RegistrationService");

describe("/registration/RegistrationFormContainer", () => {
  let store;

  beforeEach(() => {
    LegalFormService.mockReturnValue({ type: LegalFormActionEnum.LIST });
    RegistrationService.mockReturnValue({
      type: RegistrationActionEnum.SUBMIT,
      formData: RegistrationTestData.FORM_DATA,
    });

    store = mockStore({
      user: {id: 1, user: {login: "user"}, personalName: "User Béla"},
      visibility: { registrationForm: true },
    });
  });

  it("fires an event if textentry is changed", () => {
    let component = mount(<RegistrationFormContainer store={store} />);
    component
      .find("TextEntry.fullName")
      .simulate("change", { target: { value: "hello" } });
    expect(store.getActions()).toEqual([
      { type: "user.personalName", value: "hello" },
    ]);
  });

  it("maps undefined when state is not existing", () => {
    let component = shallow(<RegistrationFormContainer store={store} />);
    expect(component.find(RegistrationFormUI).prop("legalForms")).toEqual(
      undefined
    );
  });
});
