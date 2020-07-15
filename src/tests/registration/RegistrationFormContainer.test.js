import React from "react";
import { shallow, mount } from "enzyme";
import RegistrationFormContainer from "../../registration/RegistrationFormContainer";
import configureMockStore from "redux-mock-store";
import RegistrationActions from "../../registration/RegistrationActions.json";
import RegistrationFormUI from "../../registration/RegistrationFormUI";
import LegalFormActions from "../../registration/LegalFormActions";
import LegalFormService from "../../registration/LegalFormService";
import RegistrationService from "../../registration/RegistrationService";
import { RegistrationTestData } from "./RegistrationTestData";

const mockStore = configureMockStore();

jest.mock("../../registration/LegalFormService");
jest.mock("../../registration/RegistrationService");

describe("/registration/RegistrationFormContainer", () => {
  let store;

  beforeEach(() => {
    LegalFormService.mockReturnValue({ type: LegalFormActions.LIST });
    RegistrationService.mockReturnValue({
      type: RegistrationActions.SUBMIT,
      formData: RegistrationTestData.FORM_DATA,
    });

    store = mockStore({
      user: "user",
      visibility: { registrationForm: true },
    });
  });

  it("fires an event if textentry is changed", () => {
    let component = mount(<RegistrationFormContainer store={store} />);
    component.find("TextEntry.fullName").simulate("change", "hello");
  });

  it("maps undefined when state is not existing", () => {
    let component = shallow(<RegistrationFormContainer store={store} />);
    expect(component.find(RegistrationFormUI).prop("legalForms")).toEqual(
      undefined
    );
  });
});
