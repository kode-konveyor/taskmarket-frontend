import React from "react";
import { shallow } from "enzyme";
import MainPageUI from "../../main/MainPageUI";
import App from "../../App";
import MainMenuUI from "../../main/MainMenuUI";

describe("/main/MainPageUI", () => {
  const renderedComponent = shallow(<MainPageUI />);

  it("contains app", () => {
    expect(renderedComponent.find(App).length).toBe(1);
  });

  it("contains main menu", () => {
    expect(renderedComponent.find(MainMenuUI).length).toBe(1);
  });

  it("contains header", () => {
    expect(renderedComponent.find("#top-header").length).toBe(1);
  });
});
