import React from "react";
import DashboardUI from "../../dashboard/DashboardUI";
import { shallow } from "enzyme";
import ProfileAreaContainer from "../../profile/ProfileAreaContainer";

describe("/dashboard/DashboardUI", () => {
  let renderedComponent = shallow(<DashboardUI />);

  it("should contain ProfileAreaContainer", () => {
    expect(renderedComponent.find(ProfileAreaContainer).length).toBe(1);
  });
});
