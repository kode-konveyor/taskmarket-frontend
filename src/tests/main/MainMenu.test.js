import React from "react";
import { shallow } from "enzyme";
import MainMenu from "../../main/MainMenu";
import { Nav, Navbar } from "react-bootstrap";

const path = "random/path/where/i/am";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "random/path/where/i/am" }),
}));

const loginBasePath = "/market/member/login?next=";

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

  it("login url is correct", () => {
    expect(renderedComponent.find({ href: loginBasePath + path }).length).toBe(
      1
    );
  });
});
