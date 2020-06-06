import React from "react";
import { shallow } from "enzyme";
import WelcomePageUI from "../../main/WelcomePageUI";

describe("/main/WelcomePageUi", () => {
  const renderedComponent = shallow(<WelcomePageUI />);
  it("should render header", () => {
    expect(renderedComponent.find("h1").text()).toEqual(
      "Welcome to Task Market"
    );
  });
});
