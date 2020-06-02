import React from "react";
import DashboardUI from "../../dashboard/DashboardUI";
import { shallow } from "enzyme";
import RegistrationFormContainer from "../../registration/RegistrationFormContainer";
import ProjectListUI from "../../project/list/ProjectListUI";

describe("/dashboard/DashboardUI", () => {
  let renderedComponent = shallow(<DashboardUI />);

  it("should contain RegistrationFormContainer", () => {
    expect(renderedComponent.find(RegistrationFormContainer).length).toBe(1);
  });

  it("should contain ProjectListUI", () => {
    expect(renderedComponent.find(ProjectListUI).length).toBe(1);
  });
});
