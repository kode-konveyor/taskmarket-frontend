import React from "react";
import { shallow } from "enzyme";
import MainPage from "../../main/MainPage";
import App from "../../App";
import MainMenu from "../../main/MainMenu";

describe("/main/MainPage", () => {
  const renderedComponent = shallow(<MainPage />);

  it("contains app", () => {
    expect(renderedComponent.find(App).length).toBe(1);
  });

  it("contains main menu", () => {
    expect(renderedComponent.find(MainMenu).length).toBe(1);
  });

  it("contains header", () => {
    expect(renderedComponent.find("#top-header").length).toBe(1);
  });
});
