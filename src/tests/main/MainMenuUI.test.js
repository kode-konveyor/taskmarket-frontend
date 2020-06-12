import React from "react";
import { shallow } from "enzyme";
import MainMenuUI from "../../main/MainMenuUI";
import { Nav, Navbar } from "react-bootstrap";
import LoginContainer from "../../main/LoginContainer";
import {MainTestData} from "./MainTestData"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "random/path/where/i/am" }),
}));


process.env = MainTestData.PUBLIC_URL;

describe("/main/MainMenuUI", () => {
  const renderedComponent = shallow(<MainMenuUI />);
  it("contains brand item", () => {
    expect(renderedComponent.find(Navbar.Brand).text()).toEqual(MainTestData.TASK_MARKET);
  });

  it("contains Lead list item", () => {
    expect(
      renderedComponent.find(MainTestData.LEAD_LIST_SELECTOR).find(Nav.Link).text()
    ).toBe(MainTestData.LEAD_LIST);
  });

  it("login is rendered", () => {
    expect(renderedComponent.find(LoginContainer).length).toBe(1);
  });
});
