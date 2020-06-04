import React from "react";
import { shallow } from "enzyme";
import RegistrationPageUI from "../../registration/RegistrationPageUI";
import RegistrationFormContainer from "../../registration/RegistrationFormContainer";

describe("/registration/RegistrationPageUI", () => {
  const renderedComponent = shallow(<RegistrationPageUI />);

  it("renders a RegistrationFormContainer", () => {
    expect(renderedComponent.find(RegistrationFormContainer).length).toBe(1);
  });
});
