import React from "react";
import { shallow } from "enzyme";
import MainMenu from "../../main/MainMenu";
import { Nav, Navbar } from "react-bootstrap";
import LoginContainer from "../../main/LoginContainer";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "random/path/where/i/am" }),
}));

process.env = { PUBLIC_URL: "https://market.kodekonveyor.com" };

describe("/main/MainMenu", () => {
  const renderedComponent = shallow(<MainMenu />);
  it("contains brand item", () => {
    expect(renderedComponent.find(Navbar.Brand).text()).toEqual("TaskMarket");
  });

  it("contains Lead list item", () => {
    expect(
      renderedComponent.find({ to: "/landing/list" }).find(Nav.Link).text()
    ).toBe("List leads");
  });

  it("login is rendered", () => {
    expect(renderedComponent.find(LoginContainer).length).toBe(1);
  });

  it("landing url is correct", () => {
    expect(renderedComponent.find("#landing-link").prop("href")).toBe(
      "https://market.kodekonveyor.com/landing"
    );
  });
});
