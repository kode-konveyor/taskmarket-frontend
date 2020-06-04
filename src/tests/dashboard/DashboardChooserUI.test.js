import React from "react";
import { shallow } from "enzyme";
import DashboardChooserUI from "../../dashboard/DashboardChooserUI";
import RegistrationPageUI from "../../registration/RegistrationPageUI";
import DashboardUI from "../../dashboard/DashboardUI";
import PropTypes from "prop-types";

describe("/registration/RegistrationPageUI", () => {
  const expectedPropTypes = {
    hasRegistration: PropTypes.bool,
  };

  it("renders RegistrationFormPage when user has no registration", () => {
    const renderedComponent = shallow(
      <DashboardChooserUI hasRegistration={false} />
    );
    expect(renderedComponent.find(RegistrationPageUI).length).toBe(1);
  });

  it("renders RegistrationFormPage when registration is not defined", () => {
    const renderedComponent = shallow(<DashboardChooserUI />);
    expect(renderedComponent.find(RegistrationPageUI).length).toBe(1);
  });

  it("renders Dashboard when user has registration", () => {
    const renderedComponent = shallow(
      <DashboardChooserUI hasRegistration={true} />
    );
    expect(renderedComponent.find(DashboardUI).length).toBe(1);
  });

  it("has right propTypes", () => {
    expect(DashboardChooserUI.propTypes).toEqual(expectedPropTypes);
  });
});
