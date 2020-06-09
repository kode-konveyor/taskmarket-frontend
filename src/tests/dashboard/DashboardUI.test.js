import React from "react";
import DashboardUI from "../../dashboard/DashboardUI";
import { shallow } from "enzyme";

describe("/dashboard/DashboardUI", () => {
  let renderedComponent = shallow(<DashboardUI />);

  it("should contain header", () => {
    expect(renderedComponent.find("h1").text()).toEqual("Dashboard");
  });
});
